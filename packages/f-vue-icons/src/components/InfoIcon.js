export default {
    name: 'InfoIcon',

    props: {
    },

    functional: true,

    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;

        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="c-ficon c-ficon--info" {...ctx.data}><defs><path id="info-path-1" d="M14 2.333C7.557 2.333 2.333 7.557 2.333 14S7.557 25.667 14 25.667 25.667 20.443 25.667 14A11.667 11.667 0 0014 2.333zm0 10.5A1.17 1.17 0 0115.167 14v4.667A1.17 1.17 0 0114 19.833a1.17 1.17 0 01-1.167-1.166V14A1.17 1.17 0 0114 12.833zm.606-4.776a1.573 1.573 0 11-1.205 2.906 1.573 1.573 0 011.205-2.906z"></path></defs><g fill="none" fill-rule="evenodd" transform="translate(-2 -2)"><mask fill="#fff"><use href="#info-path-1"></use></mask><use fill="#125FCA" href="#info-path-1"></use></g></svg>;
    }
};
