export default {
    name: 'RestaurantIcon',

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

        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" class="c-ficon c-ficon--restaurant" {...ctx.data}><path d="M11.667 19.204v5.88a.583.583 0 0 1-1.167 0v-5.88c-1.312-.212-2.333-1.124-2.333-2.287v-4.084h1.166v4.084c0 .478.476.933 1.17 1.1a.583.583 0 0 1 1.16 0c.695-.167 1.17-.622 1.17-1.1v-4.084H14v4.084c0 1.163-1.02 2.075-2.333 2.287zm-7 5.88a.583.583 0 1 1-1.167 0V9.846a.583.583 0 1 1 1.167 0v15.236zm19.833 0a.583.583 0 1 1-1.167 0V9.846a.583.583 0 0 1 1.167 0v15.236zm-7.184-4.346c.88-.293 1.35-.764 1.35-1.488v-3.5c0-.724-.47-1.195-1.35-1.488a5.214 5.214 0 0 0-.983-.217v6.91c.338-.043.673-.114.983-.217zm-.983 4.345a.583.583 0 1 1-1.166 0V13.417c0-.322.26-.584.583-.584.13 0 .342.01.611.04.448.05.898.14 1.323.282 1.307.435 2.15 1.278 2.15 2.595v3.5c0 1.317-.843 2.16-2.15 2.595a6.455 6.455 0 0 1-1.35.285v2.953zM10.5 12.833h1.167v5.834H10.5v-5.834zm-4.74-1.33a4.655 4.655 0 0 1-3.427-4.505c0-.138.05-.272.14-.378l3.5-4.083a.583.583 0 0 1 .444-.204h15.166c.17 0 .332.075.443.204l3.5 4.083c.09.106.14.24.14.378a4.655 4.655 0 0 1-8.165 3.072 4.636 4.636 0 0 1-7.002 0 4.656 4.656 0 0 1-4.738 1.433zM6.686 3.5l-3.18 3.71a3.488 3.488 0 0 0 6.492 1.568.583.583 0 0 1 1.007.001 3.469 3.469 0 0 0 5.992 0 .583.583 0 0 1 1.007-.001 3.488 3.488 0 0 0 6.492-1.569L21.315 3.5H6.685z"></path></svg>;
    }
};
