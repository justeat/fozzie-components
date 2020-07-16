export default {
    name: 'FlagItIcon',

    props: {
    },

    functional: true,

    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;

        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="c-ficon c-ficon--flag.it" {...ctx.data}><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v479.997H0z"></path><path fill="#009246" d="M0 0h213.33v479.997H0z"></path><path fill="#ce2b37" d="M426.663 0h213.33v479.997h-213.33z"></path></g></svg>;
    }
};
