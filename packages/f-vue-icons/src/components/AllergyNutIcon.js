export default {
    name: 'AllergyNutIcon',

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

        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" class="c-ficon c-ficon--allergy-nut" {...ctx.data}><path d="M8.13 15.34a.58.58 0 1 1-.2 1.15 4.05 4.05 0 0 1-3-2.36c-.91-2.23.52-4.86 3.11-5.92a5.67 5.67 0 0 1 3.72-.24.82.82 0 0 0 .94-.39 5.6 5.6 0 0 1 2.8-2.42c2.5-1.01 5.26-.25 6.26 1.82a.58.58 0 0 1-1.05.5c-.7-1.46-2.8-2.04-4.77-1.23a4.43 4.43 0 0 0-2.23 1.91 1.98 1.98 0 0 1-2.27.93 4.5 4.5 0 0 0-2.95.2c-2.04.83-3.13 2.82-2.48 4.38a2.88 2.88 0 0 0 2.12 1.67zm2.95 4.5a.58.58 0 1 1 0-1.17.58.58 0 0 1 0 1.16zM12.25 21a.58.58 0 1 1 0-1.17.58.58 0 0 1 0 1.17zm1.17-1.17a.58.58 0 1 1 0-1.16.58.58 0 0 1 0 1.16zM22.2 9.2c1.7 1.7 1.4 4.68-.58 6.67a5.62 5.62 0 0 1-3.32 1.65.83.83 0 0 0-.72.73 5.62 5.62 0 0 1-1.65 3.31c-1.99 1.99-4.97 2.29-6.67.59-1.7-1.7-1.4-4.69.57-6.67a5.62 5.62 0 0 1 3.33-1.66.83.83 0 0 0 .72-.72 5.62 5.62 0 0 1 1.65-3.32c2-1.98 4.97-2.28 6.67-.58zm-5.85 1.41a4.46 4.46 0 0 0-1.31 2.63 2 2 0 0 1-1.74 1.74 4.46 4.46 0 0 0-2.64 1.32c-1.56 1.56-1.79 3.81-.58 5.02 1.2 1.2 3.46.98 5.03-.59a4.45 4.45 0 0 0 1.31-2.63 2 2 0 0 1 1.74-1.74 4.46 4.46 0 0 0 2.63-1.31c1.56-1.57 1.79-3.82.59-5.02-1.21-1.2-3.46-.98-5.03.58z"></path></svg>;
    }
};
