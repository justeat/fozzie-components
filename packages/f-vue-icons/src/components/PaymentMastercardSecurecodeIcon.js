export default {
    name: 'PaymentMastercardSecurecodeIcon',

    props: {
        classModifier: {
            type: String,
            default: ''
        }
    },

    functional: true,

    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        ctx.data.class = {
            [`c-ficon--${ctx.props.classModifier}`]: ctx.props.classModifier !== ''
        };

        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 24" class="c-ficon c-ficon--payment-mastercard-securecode" {...ctx.data}><g fill="none" fill-rule="evenodd"><path fill="#EC2127" d="M63.333 9.476c0-.73.567-1.322 1.26-1.322.698 0 1.26.59 1.26 1.322 0 .732-.562 1.323-1.26 1.323-.693 0-1.26-.593-1.26-1.325zm1.26 1.01c.53 0 .963-.454.963-1.01 0-.554-.432-1.003-.962-1.003-.528 0-.963.45-.963 1.003 0 .556.437 1.01.965 1.01zm-.17-.43h-.26V8.89h.47c.095 0 .2.006.283.065a.36.36 0 0 1 .14.293c0 .13-.072.25-.19.293l.203.517h-.29l-.17-.457h-.19v.456zm0-.655h.143c.053 0 .114.004.16-.022a.167.167 0 0 0 .062-.135c0-.044-.026-.097-.063-.117-.04-.026-.117-.02-.162-.02h-.14V9.4zM45.3.683l-.345 2.243c-.75-.398-1.3-.554-1.89-.554-1.57 0-2.68 1.595-2.68 3.87 0 1.57.745 2.518 1.972 2.518.52 0 1.092-.167 1.792-.533l-.37 2.36c-.775.222-1.28.3-1.865.3-2.275 0-3.69-1.71-3.69-4.46 0-3.698 1.955-6.28 4.752-6.28.36 0 .684.035.946.11l.87.228c.26.103.317.118.507.2zM38.297 2.22a1.126 1.126 0 0 0-.215-.022c-.696 0-1.09.367-1.734 1.368l.187-1.277h-1.91l-1.297 8.404h2.12c.76-5.138.953-6.025 1.97-6.025.06 0 .067 0 .153.007.19-1.012.447-1.757.8-2.436L38.3 2.22zm-12.632 8.372c-.574.19-1.027.278-1.514.278-1.075 0-1.663-.655-1.663-1.85 0-.234.017-.487.06-.753l.13-.82.097-.67.916-5.735h2.096l-.24 1.247h1.08l-.296 2.04h-1.08l-.557 3.51c-.02.153-.036.268-.036.347 0 .43.22.622.718.622.244 0 .427-.027.568-.08l-.28 1.86zm-8.318-5.645c0 1.06.49 1.795 1.6 2.343.85.422.983.544.983.927 0 .522-.376.764-1.207.764a5.591 5.591 0 0 1-1.886-.334l-.292 1.94.095.02.388.08c.124.027.308.05.55.077.503.047.89.07 1.162.07 2.213 0 3.237-.892 3.237-2.807 0-1.15-.427-1.83-1.48-2.34-.882-.42-.98-.517-.98-.908 0-.456.348-.69 1.025-.69.414 0 .975.05 1.51.125l.3-1.94a13.134 13.134 0 0 0-1.85-.167c-2.35 0-3.164 1.29-3.155 2.842zm44.76 5.748H60.11l.105-.824c-.58.653-1.178.937-1.95.937-1.543 0-2.554-1.388-2.554-3.49 0-2.795 1.574-5.156 3.44-5.156.82 0 1.44.355 2.024 1.15l.46-2.95h2.08L62.11 10.695zm-3.114-1.98c.986 0 1.675-1.167 1.675-2.83 0-1.07-.393-1.65-1.122-1.65-.956 0-1.636 1.17-1.636 2.826 0 1.103.366 1.657 1.083 1.657zm-26.645 1.803c-.722.227-1.42.34-2.168.338-2.353 0-3.582-1.292-3.582-3.763 0-2.89 1.564-5.015 3.69-5.015 1.733 0 2.847 1.192 2.847 3.06 0 .618-.075 1.22-.263 2.073h-4.196a1.77 1.77 0 0 0-.02.263c0 .982.628 1.477 1.856 1.477.752 0 1.43-.164 2.19-.536l-.354 2.104zm-1.183-5.005c.012-.176.014-.32.014-.426 0-.687-.373-1.088-1-1.088-.67 0-1.15.534-1.346 1.506l2.33.006zm-22.29 5.182H6.77L7.975 2.75l-2.698 7.945H3.832l-.174-7.897-1.272 7.897H.41L2.06.357h3.037l.083 6.397L7.23.357h3.28m3.798 6.593a3.62 3.62 0 0 0-.473-.036c-1.195 0-1.8.434-1.8 1.284 0 .523.297.856.757.856.858 0 1.48-.856 1.516-2.104zm1.534 3.745h-1.747l.038-.873c-.533.696-1.244 1.02-2.21 1.02-1.148 0-1.93-.938-1.93-2.29 0-2.053 1.367-3.245 3.707-3.245.24 0 .544.02.858.063.066-.28.084-.4.084-.546 0-.555-.367-.766-1.356-.766-.596 0-1.282.09-1.754.24l-.293.085-.187.055.29-1.886c1.054-.326 1.747-.452 2.53-.452 1.812 0 2.773.853 2.773 2.464 0 .42-.03.73-.174 1.668L16.03 9.21l-.07.538-.055.43-.036.292-.03.225zM48.935 6.95a3.554 3.554 0 0 0-.468-.036c-1.2 0-1.808.434-1.808 1.284 0 .523.3.856.76.856.862 0 1.477-.856 1.514-2.104zm1.536 3.745h-1.747l.04-.873c-.532.696-1.245 1.02-2.21 1.02-1.147 0-1.934-.938-1.934-2.29 0-2.053 1.366-3.245 3.71-3.245.24 0 .547.02.86.063.063-.28.082-.4.082-.546 0-.555-.365-.766-1.354-.766-.6 0-1.284.09-1.752.24l-.3.085-.183.055.295-1.886c1.055-.326 1.747-.452 2.523-.452 1.817 0 2.778.853 2.778 2.464 0 .42-.036.73-.173 1.668L50.66 9.21l-.065.538-.06.43-.037.292-.024.225zm5.896-8.475a1.033 1.033 0 0 0-.213-.022c-.692 0-1.09.367-1.737 1.368l.188-1.277h-1.91l-1.29 8.404h2.114c.76-5.138.958-6.025 1.968-6.025.065 0 .06-.007.147.007.192-1.012.45-1.757.804-2.436l-.07-.022z"></path><path fill="#F89620" d="M47.51 18.848c0 1.906-.59 3.028-1.522 3.028-.68.02-1.092-.736-1.092-1.868 0-1.338.602-2.855 1.57-2.855.776 0 1.045.822 1.045 1.695zm2.077.035c0-2.118-1.05-3.767-3.02-3.767-2.27 0-3.74 2.005-3.74 4.956 0 2.114.87 3.84 3.017 3.84 2.17 0 3.743-1.53 3.743-5.03zm-6.082-5.253l-.322 2.24c-.702-.396-1.212-.56-1.764-.56-1.476 0-2.506 1.6-2.506 3.875 0 1.57.69 2.52 1.838 2.52.49 0 1.026-.167 1.677-.533l-.343 2.358c-.73.224-1.205.3-1.747.3-2.123 0-3.446-1.712-3.446-4.46 0-3.7 1.826-6.283 4.442-6.283.338 0 .638.043.886.11l.807.23c.247.1.3.116.474.202zm-13.047 1.538a.76.76 0 0 0-.203-.023c-.64 0-1.015.368-1.615 1.366l.175-1.273H27.03l-1.204 8.407h1.97c.71-5.143.896-6.028 1.84-6.028a.84.84 0 0 1 .145.01c.18-1.017.42-1.762.75-2.443l-.07-.014zm25.736 8.386h-1.862l.096-.82c-.54.646-1.105.932-1.825.932-1.436 0-2.384-1.39-2.384-3.49 0-2.792 1.47-5.16 3.21-5.16.767 0 1.35.362 1.887 1.16l.435-2.957h1.94l-1.5 10.333zm-2.913-1.978c.93 0 1.57-1.167 1.57-2.833 0-1.07-.365-1.646-1.043-1.646-.896 0-1.533 1.168-1.533 2.828 0 1.095.342 1.65 1.008 1.65zm-41.3 1.944c-.67.23-1.322.34-2.017.34-2.2 0-3.35-1.294-3.35-3.764 0-2.885 1.462-5.013 3.445-5.013 1.624 0 2.66 1.19 2.66 3.058 0 .62-.07 1.224-.24 2.076H8.55c-.01.126-.015.188-.015.262 0 .98.588 1.474 1.73 1.474.705 0 1.342-.163 2.048-.53l-.332 2.1zm-1.1-5.003c.008-.178.014-.32.014-.427 0-.686-.346-1.087-.932-1.087-.63 0-1.077.54-1.257 1.505l2.174.01zm24.54 5.003a6.12 6.12 0 0 1-2.02.34c-2.205 0-3.352-1.294-3.352-3.764 0-2.885 1.463-5.013 3.445-5.013 1.624 0 2.663 1.19 2.663 3.058 0 .62-.074 1.224-.248 2.076h-3.92c-.01.126-.018.188-.018.262 0 .98.587 1.474 1.73 1.474.704 0 1.342-.163 2.048-.53l-.328 2.1zm-1.108-5.003c.013-.178.02-.32.02-.427 0-.686-.35-1.087-.932-1.087-.63 0-1.077.54-1.26 1.505l2.172.01zm28.605 5.003c-.68.23-1.326.34-2.024.34-2.2 0-3.352-1.294-3.352-3.764 0-2.885 1.468-5.013 3.45-5.013 1.623 0 2.66 1.19 2.66 3.058 0 .62-.07 1.224-.244 2.076h-3.923a2.12 2.12 0 0 0-.017.262c0 .98.59 1.474 1.732 1.474.705 0 1.34-.163 2.048-.53l-.328 2.1zm-1.107-5.003c.008-.178.014-.32.014-.427 0-.686-.344-1.087-.93-1.087-.63 0-1.076.54-1.26 1.505l2.176.01zm-55.662-2.97c-.385-.257-.908-.48-1.646-.48-.796 0-1.437.163-1.437 1.01 0 1.493 2.904.935 2.904 4.133 0 2.913-1.92 3.668-3.653 3.668-.77 0-1.66-.254-2.313-.544l.47-2.14c.395.357 1.192.602 1.843.602.62 0 1.593-.17 1.593-1.25 0-1.692-2.902-1.063-2.902-4.033 0-2.718 1.696-3.53 3.332-3.53.92 0 1.787.133 2.294.47l-.486 2.095zm11.602 7.97c-.406.194-.95.322-1.75.322-1.722 0-2.79-1.72-2.79-3.81 0-2.738 1.545-4.92 3.82-4.92.495 0 1.25.213 1.85.56l-.437 2.006c-.423-.277-.863-.453-1.316-.453-1.053 0-1.806.963-1.806 2.69 0 .993.548 1.81 1.41 1.81.513 0 .875-.11 1.316-.367l-.295 2.16zm7.37-2.107a34.06 34.06 0 0 0-.25 2.18h-1.897l.16-1.358h-.02c-.593.923-1.208 1.552-2.282 1.552-1.19 0-1.834-1.25-1.834-2.884 0-.562.035-.88.16-1.76l.538-3.89h2.11l-.566 3.902c-.057.42-.137.835-.137 1.27 0 .49.225.988.794.958.866 0 1.376-1.056 1.52-2.29l.584-3.84h2.043l-.92 6.16zm39.764 2.08h-.32v-1.396h-.46v-.298h1.242v.298h-.462M67 23.49h-.298v-1.417h-.004l-.285 1.416H66.1l-.278-1.418h-.005v1.416h-.297v-1.694h.465l.277 1.334h.005l.272-1.334H67"></path></g></svg>;
    }
};
