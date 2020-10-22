/* global danger, fail, message */
const { pr } = danger.github;
const bodyAndTitle = (pr.body + pr.title).toLowerCase();
const isTrivial = bodyAndTitle.includes('#trivial'); // turns off all danger checks
const isGlobalConfigUpdate = bodyAndTitle.includes('#globalconfig'); // turns off danger checks for packages outside the root

if (!isTrivial) {
    const failedChangelogs = [];
    const failedVersionBumps = [];
    const modifiedFiles = danger.git.modified_files;

    // Get an array of files in the root monorepo that have changed
    const modifiedRootFiles = modifiedFiles.filter(filepath => !filepath.startsWith('packages/') && filepath !== 'yarn.lock');

    // Get an array of packages that have changed, then make that array unique
    const modifiedPackages = modifiedFiles.filter(filepath => filepath.startsWith('packages/'))
        .map(filepath => filepath.split('/')[1]);
    const uniqueModifiedPackages = new Set(modifiedPackages);
    const modifiedRootPackage = modifiedPackages.includes('');

    // Fail if the title of the PR isn't in the format of a version i.e. {package-name}@vX.X.X (such as f-header@v1.4.0)
    const versionRegex = /^([a-z\-]+@v?[0-9]+\.[0-9]+\.[0-9]+)/;
    const isPRTitleVersioned = (pr.title).match(versionRegex);
    if (!isPRTitleVersioned) {
        fail(':exclamation: PR title should start with the package version in the format {package-name}@v(x.x.x) (such as f-header@v1.4.0)');
    }

    if (modifiedRootFiles.length && !modifiedRootFiles.includes('CHANGELOG.md')) {
        const changelogLink = 'https://github.com/justeat/fozzie-components/blob/master/CHANGELOG.md';
        fail(`:memo: Please include a <code>CHANGELOG</code> entry for the root mono-repo. You can find the current version at <a href="${changelogLink}">CHANGELOG.md</a>`);
    }
    // Check for version update at root level
    const hasRootPackageJsonChanged = modifiedRootFiles.includes('package.json');
    const rootPackageDiff = danger.git.JSONDiffForFile('package.json');
    rootPackageDiff.then(result => {
        if (modifiedRootPackage && (!hasRootPackageJsonChanged || (hasRootPackageJsonChanged && !result.version))) {
            const semverLink = 'https://docs.npmjs.com/getting-started/semantic-versioning';
            fail(`:arrow_up: This PR should include a <a href="${semverLink}"><code>SEMVER</code></a> version bump at the root of the mono-repo, as you have changed root level config.`);
        }
    }, err => {
        /* eslint-disable no-console */
        console.log(err);
        /* eslint-enable no-console */
    });

    // If this PR is just an internal config update, then don't run
    // the danger checks for every sub-package (as we shouldn't mandate CHANGELOG and version bumps for this at package level)
    if (!isGlobalConfigUpdate) {
        /** Specific Package Checks **/

        /**
         * checkPackageDiff
         * Checks if there is a change in the package.json for a specific package
         * Returns with a Promise resolve() when completed
         *
         * @param {*} pkg
         * @param {*} resolve
         */
        const checkPackageDiff = (pkg, resolve) => {
            // Check for version update
            const hasPackageJsonChanged = danger.git.modified_files.includes(`packages/${pkg}/package.json`);
            const packageDiff = danger.git.JSONDiffForFile(`packages/${pkg}/package.json`);

            packageDiff.then(result => {
                if (!hasPackageJsonChanged || (hasPackageJsonChanged && !result.version)) {
                    failedVersionBumps.push(pkg);
                }
                resolve();
            }, err => {
                /* eslint-disable no-console */
                console.log(err);
                /* eslint-enable no-console */
            });
        };

        // Loops through each package that includes files that been modified and runs DangerJS checks for each
        const requests = Array.from(uniqueModifiedPackages).map(pkg => {
            // Add package to `failedChangelogs` if there isn’t a CHANGELOG entry – should update for every PR
            if (!danger.git.modified_files.includes(`packages/${pkg}/CHANGELOG.md`)) {
                failedChangelogs.push(pkg);
            }

            // Add package to `failedVersionBumps` if there isn’t a package.json bump
            return new Promise(resolve => {
                checkPackageDiff(pkg, resolve);
            });
        });

        // Once all packages have been checked, if `failedVersionBumps` isn't empty, return DangerJS fail
        Promise.all(requests).then(() => {
            if (failedVersionBumps.length) {
                const semverLink = 'https://docs.npmjs.com/getting-started/semantic-versioning';
                fail(`:arrow_up: This PR should include a <a href="${semverLink}"><code>SEMVER</code></a> version bump for <strong>${failedVersionBumps.join(', ')}</strong>, so that these packages can be published once merged.`);
            }
        });

        // if `failedChangelogs` isn't empty, return DangerJS fail
        if (failedChangelogs.length) {
            fail(`:memo: Please include a <code>CHANGELOG</code> entry for <strong>${failedChangelogs.join(', ')}</strong>`);
        }
    }
}


