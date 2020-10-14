export default {
    name: 'InfoIcon',

    props: {
    },

    functional: true,

    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;

        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="c-ficon c-ficon--info" {...ctx.data}><defs><path d="M14,2.33333333 C7.55667792,2.33333333 2.33333333,7.55667792 2.33333333,14 C2.33333333,20.4433221 7.55667792,25.6666667 14,25.6666667 C20.4433221,25.6666667 25.6666667,20.4433221 25.6666667,14 C25.6666667,10.9058076 24.4375035,7.9383453 22.2495791,5.75042089 C20.0616547,3.56249647 17.0941924,2.33333333 14,2.33333333 Z M14,12.8333333 C14.6416667,12.8333333 15.1666667,13.3583333 15.1666667,14 L15.1666667,18.6666667 C15.1666667,19.3083333 14.6416667,19.8333333 14,19.8333333 C13.3583333,19.8333333 12.8333333,19.3083333 12.8333333,18.6666667 L12.8333333,14 C12.8333333,13.3583333 13.3583333,12.8333333 14,12.8333333 Z M14.6063204,8.05715029 C15.1942192,8.30087872 15.5773377,8.87483164 15.5769447,9.51125 C15.5753393,10.3788219 14.872433,11.0817282 14.0048611,11.0833336 C13.3684428,11.0837265 12.7944898,10.7006081 12.5507614,10.1127093 C12.307033,9.52481058 12.4415551,8.84797565 12.8915709,8.39795983 C13.3415868,7.94794401 14.0184217,7.81342185 14.6063204,8.05715029 Z" id="path-1"></path></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-34.000000, -18.000000)"><g transform="translate(32.000000, 16.000000)"><polygon id="bounding-box" opacity="0" points="0 28 28 28 28 0 0 0"></polygon><mask id="mask-2" fill="white"><use href="#path-1"></use></mask><use id="Color" fill="#125FCA" href="#path-1"></use></g></g></g></svg>;
    }
};
