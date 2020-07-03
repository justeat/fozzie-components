export default {
    name: 'AppMicrosoftDkIcon',

    props: {
        isWhite: {
            type: Boolean,
            default: false
        },

        isBlue: {
            type: Boolean,
            default: false
        },

        isGreen: {
            type: Boolean,
            default: false
        },

        isOrange: {
            type: Boolean,
            default: false
        },

        isDarkestGrey: {
            type: Boolean,
            default: false
        },

        pushLeft: {
            type: Boolean,
            default: false
        }
    },

    functional: true,

    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        ctx.data.class = {
            'c-ficon--white': ctx.props.isWhite,
            'c-ficon--blue': ctx.props.isBlue,
            'c-ficon--green': ctx.props.isGreen,
            'c-ficon--orange': ctx.props.isOrange,
            'c-ficon--grey--darkest': ctx.props.isDarkestGrey,
            'c-ficon--pushLeft': ctx.props.pushLeft
        };

        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 40" class="c-ficon c-ficon--app-microsoft.dk" {...ctx.data}><g fill="none" fill-rule="evenodd"><path fill="#000" fill-rule="nonzero" d="M.347.282h110.37v39.423H.347z"></path><path fill="#D2D2D2" fill-rule="nonzero" d="M.63.577h109.79v38.846H.63V.577zM.05 40H111V0H.05v40z"></path><path fill="#FFF" fill-rule="nonzero" d="M52.246 20.833c0-.307.116-.577.347-.795.232-.217.502-.32.81-.32.335 0 .618.115.837.32.218.218.334.475.334.783 0 .308-.116.565-.334.783-.232.205-.502.32-.824.32-.32 0-.604-.102-.823-.32a.992.992 0 0 1-.347-.77zm2.096 10.398H52.44v-8.063h1.902v8.064zm5.788-1.371c.283 0 .592-.065.94-.193.334-.13.655-.308.938-.513v1.77c-.308.18-.643.307-1.03.397-.385.09-.81.13-1.272.13-1.196 0-2.16-.373-2.907-1.13-.747-.756-1.12-1.705-1.12-2.87 0-1.296.386-2.373 1.145-3.206.76-.834 1.84-1.257 3.24-1.257.36 0 .72.05 1.08.14.362.09.657.194.876.322v1.82a3.582 3.582 0 0 0-.9-.5 2.635 2.635 0 0 0-.938-.18c-.746 0-1.35.243-1.814.73-.463.488-.694 1.142-.694 1.975 0 .82.218 1.45.67 1.91.423.423 1.015.654 1.786.654m7.306-6.821c.154 0 .283.013.412.026.115.026.218.05.308.077v1.924a1.57 1.57 0 0 0-.437-.205 2.185 2.185 0 0 0-.696-.104c-.463 0-.86.193-1.183.59-.32.398-.488 1-.488 1.808v4.077H63.45v-8.063h1.89v1.27h.025c.18-.437.438-.783.785-1.027.36-.256.784-.372 1.286-.372m.81 4.281c0-1.333.373-2.384 1.132-3.166.76-.782 1.8-1.167 3.15-1.167 1.262 0 2.252.372 2.96 1.128.707.757 1.067 1.77 1.067 3.04 0 1.307-.373 2.345-1.132 3.127-.758.77-1.787 1.167-3.086 1.167-1.26 0-2.25-.373-2.985-1.104-.733-.756-1.106-1.756-1.106-3.025m1.994-.064c0 .847.193 1.488.58 1.936.385.45.925.667 1.645.667.695 0 1.222-.22 1.582-.668.36-.448.54-1.102.54-1.974 0-.872-.193-1.526-.566-1.962-.372-.448-.9-.666-1.58-.666-.695 0-1.235.23-1.62.692-.387.462-.58 1.115-.58 1.974m9.157-1.973c0 .27.09.487.257.64.167.155.553.347 1.145.59.76.31 1.3.642 1.595 1.026.308.385.463.834.463 1.372 0 .757-.296 1.372-.875 1.834-.592.46-1.376.692-2.38.692-.334 0-.707-.04-1.118-.128a4.495 4.495 0 0 1-1.03-.308v-1.872c.348.244.72.436 1.12.577.398.14.758.218 1.08.218.424 0 .746-.064.952-.18.206-.115.31-.32.31-.602a.837.837 0 0 0-.323-.666c-.22-.18-.617-.384-1.21-.628-.706-.295-1.195-.628-1.49-.987-.297-.373-.438-.834-.438-1.398 0-.73.295-1.32.874-1.795.58-.462 1.325-.705 2.25-.705.284 0 .606.025.953.09.347.063.643.14.887.243v1.808a4.363 4.363 0 0 0-.887-.436 3.062 3.062 0 0 0-1.003-.18c-.36 0-.643.064-.85.218a.702.702 0 0 0-.282.577m4.309 2.038c0-1.333.373-2.384 1.13-3.166.76-.782 1.802-1.167 3.153-1.167 1.26 0 2.25.372 2.958 1.128.707.757 1.068 1.77 1.068 3.04 0 1.307-.373 2.345-1.132 3.127-.76.77-1.788 1.167-3.087 1.167-1.26 0-2.25-.373-2.984-1.104-.733-.756-1.106-1.756-1.106-3.025m1.98-.064c0 .847.193 1.488.58 1.936.385.45.925.667 1.646.667.694 0 1.22-.22 1.582-.668.36-.448.54-1.102.54-1.974 0-.872-.193-1.526-.566-1.962-.374-.448-.902-.666-1.583-.666-.695 0-1.235.23-1.62.692-.387.462-.58 1.115-.58 1.974m12.632-2.537v4.14c0 .86.206 1.5.604 1.924.4.423 1.004.64 1.814.64.27 0 .553-.025.836-.09.283-.05.476-.114.605-.19v-1.578c-.116.077-.258.14-.412.192a1.254 1.254 0 0 1-.4.077c-.385 0-.668-.102-.848-.307-.18-.205-.27-.552-.27-1.052v-3.77h1.93v-1.55h-1.93V20.77l-1.916.576v1.808H95.49v-.975c0-.488.103-.86.322-1.103.22-.244.527-.372.926-.372.206 0 .386.026.54.077.154.05.27.103.335.128v-1.64a2.26 2.26 0 0 0-.475-.103 4.352 4.352 0 0 0-.618-.04c-.86 0-1.582.27-2.135.81-.553.537-.836 1.23-.836 2.09v1.127h-1.35v1.55h1.35v6.514h1.93v-6.513h2.842v.013zm-47.706-4.744v11.27h-1.968V22.41h-.025l-3.513 8.834h-1.3L40.22 22.41h-.026v8.834H38.38v-11.27h2.817l3.242 8.347h.05l3.42-8.346"></path><path fill="#F25022" fill-rule="nonzero" d="M9.184 8.846H19.86v10.64H9.184z"></path><path fill="#7FBA00" fill-rule="nonzero" d="M20.978 8.846h10.676v10.64H20.978z"></path><path fill="#00A4EF" fill-rule="nonzero" d="M9.184 20.59H19.86v10.64H9.184z"></path><path fill="#FFB900" fill-rule="nonzero" d="M20.978 20.59h10.676v10.64H20.978z"></path><path fill="#FFF" d="M38.14 8.355h5.027v.885h-4.045v2.193h3.557v.86H39.12v3.286h-.982V8.354zm6.922 6.427c.187.148.41.222.666.222.313 0 .615-.072.908-.217.493-.24.74-.63.74-1.175V12.9c-.11.068-.248.125-.42.17-.17.047-.338.08-.503.1l-.537.068c-.323.043-.565.11-.726.202-.273.154-.41.4-.41.737a.73.73 0 0 0 .282.605zm1.87-2.395c.204-.026.34-.11.41-.255.04-.08.06-.192.06-.34 0-.3-.11-.52-.325-.656-.215-.136-.523-.204-.925-.204-.463 0-.792.124-.986.374-.11.137-.18.342-.213.614h-.828c.016-.65.227-1.1.634-1.355.405-.254.876-.38 1.412-.38.622 0 1.127.117 1.515.353.385.236.577.604.577 1.102v3.034c0 .092.02.166.057.22.04.057.118.085.24.085.04 0 .084-.003.133-.008.05-.005.102-.013.158-.022v.654c-.137.04-.242.064-.315.073-.072.01-.17.015-.296.015-.307 0-.53-.108-.667-.324a1.264 1.264 0 0 1-.153-.487c-.18.237-.44.442-.78.615-.338.174-.71.26-1.12.26-.49 0-.89-.147-1.2-.444a1.476 1.476 0 0 1-.467-1.113c0-.488.153-.867.46-1.136.305-.268.706-.433 1.203-.496l1.416-.177zm-.617-3.157c.17 0 .318-.06.44-.182a.599.599 0 0 0 .182-.437.59.59 0 0 0-.183-.437.602.602 0 0 0-.44-.182.597.597 0 0 0-.433.183.6.6 0 0 0-.182.438c0 .17.06.317.183.438a.595.595 0 0 0 .435.182zm0-1.647c.283 0 .526.1.728.302a.99.99 0 0 1 .303.726c0 .283-.1.524-.303.726-.202.202-.445.302-.728.302s-.524-.1-.725-.302a.993.993 0 0 1-.3-.725c0-.28.1-.523.3-.725a.99.99 0 0 1 .725-.302zm7.134 6.84c.24.38.624.57 1.154.57.41 0 .75-.175 1.014-.528.264-.352.397-.858.397-1.517 0-.665-.137-1.158-.41-1.478-.273-.32-.61-.48-1.01-.48-.448 0-.81.17-1.09.512-.277.34-.416.843-.416 1.505 0 .564.12 1.036.36 1.416zm1.992-3.95c.158.1.338.272.538.518V8.33h.854v7.25h-.8v-.734c-.207.325-.452.56-.735.704a2.115 2.115 0 0 1-.973.216c-.588 0-1.098-.247-1.53-.74-.43-.494-.645-1.15-.645-1.97 0-.767.196-1.432.59-1.994.392-.562.954-.843 1.684-.843.405 0 .743.084 1.016.254zm5.995-.016c.352.176.62.403.804.68.18.267.297.577.356.93.053.243.08.63.08 1.16H58.8c.017.536.143.964.38 1.287.237.323.604.485 1.1.485.464 0 .834-.154 1.11-.46.158-.176.27-.38.336-.613h.873c-.022.193-.098.41-.228.646-.13.238-.276.432-.437.583-.27.262-.603.44-1 .53a2.99 2.99 0 0 1-.727.08c-.657 0-1.215-.24-1.672-.716-.457-.477-.686-1.145-.686-2.004 0-.845.23-1.532.69-2.06.46-.528 1.063-.792 1.807-.792.374 0 .738.088 1.09.263zm.325 2.068c-.036-.383-.12-.69-.25-.92-.245-.426-.65-.64-1.22-.64-.408 0-.75.148-1.026.44-.276.295-.423.668-.44 1.12h2.936zm2.18-3.683h.9v1.47h.843v.723h-.844v3.438c0 .183.064.306.19.368.068.037.183.055.344.055.043 0 .09 0 .138-.002a3.46 3.46 0 0 0 .173-.012v.7c-.102.03-.208.05-.318.063-.11.013-.23.02-.358.02-.416 0-.697-.106-.845-.318-.148-.21-.222-.486-.222-.823v-3.487h-.715v-.723h.715v-1.47zm5.438-.512h.888v2.695c.21-.265.4-.452.568-.56.286-.187.643-.28 1.07-.28.767 0 1.286.267 1.56.8.147.293.22.698.22 1.216v3.38h-.912v-3.32c0-.387-.05-.67-.148-.85-.16-.29-.463-.434-.907-.434-.37 0-.704.126-1.003.38-.3.25-.45.728-.45 1.43v2.793h-.887V8.33zm8.928 6.012c.218-.444.328-.938.328-1.482 0-.492-.08-.892-.237-1.2-.25-.486-.682-.728-1.294-.728-.542 0-.937.206-1.184.62-.247.413-.37.91-.37 1.494 0 .56.123 1.028.37 1.402.247.374.638.56 1.174.56.59 0 .993-.222 1.212-.666zm.55-3.504c.47.453.705 1.118.705 1.997 0 .85-.207 1.55-.62 2.105-.416.554-1.06.83-1.93.83-.727 0-1.305-.244-1.732-.734-.427-.49-.64-1.15-.64-1.975 0-.884.225-1.59.675-2.113.45-.525 1.056-.787 1.816-.787.682 0 1.257.226 1.728.678zm2.29 3.09c.025.294.1.52.22.677.225.286.613.428 1.165.428.33 0 .62-.07.87-.214.25-.143.374-.364.374-.662 0-.226-.1-.4-.3-.517-.13-.07-.383-.154-.76-.25l-.707-.176c-.45-.112-.782-.236-.996-.374-.382-.24-.573-.57-.573-.994 0-.498.18-.9.542-1.21.36-.307.844-.462 1.453-.462.796 0 1.37.233 1.72.7.222.294.33.612.322.953h-.84a1.016 1.016 0 0 0-.21-.546c-.205-.232-.558-.348-1.06-.348-.337 0-.59.064-.764.192a.6.6 0 0 0-.26.506c0 .23.115.413.342.55.13.083.325.155.582.217l.587.143c.638.154 1.066.303 1.283.447.345.227.518.582.518 1.068 0 .468-.18.873-.536 1.214-.357.34-.9.51-1.63.51-.787 0-1.344-.177-1.67-.533-.328-.356-.504-.796-.527-1.32h.854z"></path></g></svg>;
    }
};
