export default {
    name: 'PaymentMaestroIcon',

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

        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" class="c-ficon c-ficon--payment-maestro" {...ctx.data}><g fill="none" fill-rule="evenodd"><rect fill="#006" width="100" height="60" rx="4"></rect><path d="M83.656 29.984C83.656 41.04 74.73 50 63.716 50c-11.01 0-19.937-8.96-19.937-20.016 0-11.056 8.926-20.017 19.937-20.017 11.014 0 19.94 8.96 19.94 20.017" fill="#C00"></path><path d="M48.315 42.695c-.55-.67-1.058-1.38-1.52-2.12h7.068c.424-.68.807-1.387 1.15-2.12h-9.365a19.532 19.532 0 0 1-.844-2.12h11.05a20.018 20.018 0 0 0 1.026-6.35c0-1.456-.155-2.874-.448-4.24H44.228c.154-.722.35-1.43.578-2.12h11.047a20.2 20.2 0 0 0-.843-2.12h-9.36c.342-.73.726-1.438 1.148-2.12h7.063a20.172 20.172 0 0 0-1.518-2.116h-4.025a20.075 20.075 0 0 1 2.013-2.12 19.83 19.83 0 0 0-13.388-5.183c-11.013 0-19.94 8.96-19.94 20.017C17.002 41.04 25.93 50 36.942 50c5.152 0 9.85-1.962 13.388-5.182a20.212 20.212 0 0 0 2.014-2.123h-4.03" fill="#06C"></path><path d="M50.046 35.393a9.682 9.682 0 0 1-2.548.335c-2.78-.002-4.226-1.273-4.226-3.703 0-2.84 1.842-4.927 4.344-4.927 2.045 0 3.35 1.17 3.35 3.005 0 .61-.087 1.202-.303 2.04H45.72c-.176 1.187.688 1.708 2.157 1.708.88 0 1.676-.158 2.558-.514l-.39 2.057zm-1.33-4.924c0-.18.275-1.455-1.155-1.482-.79 0-1.355.527-1.584 1.48h2.74zm3.004-.557c0 1.05.588 1.773 1.925 2.313 1.022.42 1.183.54 1.183.917 0 .52-.452.76-1.454.752a8.244 8.244 0 0 1-2.25-.322l-.36 1.912c.72.168 1.73.223 2.627.244 2.67 0 3.902-.877 3.902-2.773 0-1.14-.514-1.81-1.78-2.31-1.06-.425-1.185-.517-1.185-.902 0-.45.42-.68 1.238-.68.497 0 1.176.046 1.82.124l.362-1.923a19.876 19.876 0 0 0-2.23-.165c-2.827 0-3.806 1.277-3.797 2.812m-9.804 5.679h-2.073l.05-.87c-.633.687-1.475 1.008-2.618 1.008-1.353 0-2.28-.93-2.28-2.264 0-2.03 1.612-3.2 4.38-3.2.286 0 .648.02 1.02.063.076-.27.097-.39.097-.536 0-.554-.436-.76-1.6-.76a9.6 9.6 0 0 0-2.645.37l.355-1.86c1.244-.32 2.058-.442 2.98-.442 2.144 0 3.277.844 3.277 2.43.018.424-.13 1.274-.203 1.646-.084.54-.678 3.677-.74 4.417zm-1.82-3.702a4.895 4.895 0 0 0-.557-.034c-1.414 0-2.13.423-2.13 1.257 0 .525.35.853.895.853 1.016 0 1.75-.854 1.792-2.075zM61.66 35.46c-.68.187-1.21.268-1.783.268-1.27 0-1.963-.65-1.963-1.812-.04-.32.27-1.79.34-2.202.07-.41 1.17-6.41 1.17-6.41h2.468l-.373 1.985h1.265l-.344 2.024h-1.27s-.698 3.517-.698 3.786c0 .426.257.61.848.61.282 0 .5-.026.67-.076l-.33 1.826m11.026-8.361c-1.808 0-3.22.748-4.042 1.996l.712-1.852c-1.313-.483-2.16.207-2.924 1.19 0 0-.128.16-.256.31v-1.454H63.86c-.315 2.567-.87 5.17-1.304 7.745l-.105.56h2.494c.236-1.307.43-2.366.624-3.212.53-2.317 1.42-3.026 2.758-2.712-.308.666-.478 1.438-.478 2.292 0 2.072 1.12 3.768 3.905 3.768 2.81 0 4.844-1.506 4.844-4.94 0-2.073-1.356-3.69-3.91-3.69zm-.725 6.616c-.88.013-1.413-.728-1.413-1.838 0-1.315.78-2.8 2.03-2.8 1.01 0 1.355.803 1.355 1.66 0 1.87-.763 2.978-1.97 2.978zm-38.125 1.878h-2.483l1.476-7.802-3.398 7.802H27.17l-.414-7.756-1.48 7.756h-2.252l1.918-10.148h3.88l.322 5.657 2.458-5.656h4.19l-1.956 10.148" fill="#006"></path><path d="M50.668 34.768a9.656 9.656 0 0 1-2.546.335c-2.78-.002-4.227-1.273-4.227-3.703 0-2.84 1.842-4.927 4.343-4.927 2.046 0 3.353 1.17 3.353 3.005 0 .608-.088 1.2-.304 2.04h-4.942c-.176 1.186.686 1.707 2.156 1.707.88 0 1.676-.158 2.558-.515l-.39 2.058zm-1.33-4.924c0-.18.276-1.454-1.154-1.48-.79 0-1.356.526-1.585 1.48h2.74zm3.005-.558c0 1.05.588 1.773 1.925 2.313 1.022.42 1.183.54 1.183.916 0 .52-.45.76-1.453.753a8.25 8.25 0 0 1-2.25-.324l-.36 1.912c.72.17 1.732.224 2.627.245 2.67 0 3.902-.877 3.902-2.774 0-1.14-.515-1.81-1.782-2.31-1.06-.425-1.184-.518-1.184-.902 0-.45.42-.68 1.238-.68.497 0 1.176.046 1.82.124l.362-1.923a18.984 18.984 0 0 0-2.23-.166c-2.827 0-3.806 1.277-3.797 2.812m-9.804 5.684h-2.074l.05-.872c-.632.687-1.474 1.007-2.617 1.007-1.353 0-2.28-.927-2.28-2.262 0-2.03 1.61-3.2 4.38-3.2.285 0 .646.022 1.02.063.076-.27.096-.387.096-.534 0-.557-.435-.76-1.6-.76a9.473 9.473 0 0 0-2.644.37l.353-1.863c1.245-.317 2.06-.44 2.98-.44 2.146 0 3.278.843 3.278 2.43.018.424-.13 1.272-.202 1.645-.084.54-.678 3.678-.74 4.418zm-1.82-3.703a4.673 4.673 0 0 0-.557-.034c-1.413 0-2.13.42-2.13 1.255 0 .524.35.852.894.852 1.017 0 1.75-.854 1.793-2.074zm21.564 3.571c-.68.188-1.21.27-1.784.27-1.27 0-1.963-.653-1.963-1.813-.04-.318.27-1.79.34-2.2.07-.413 1.17-6.412 1.17-6.412h2.468l-.373 1.985h1.266l-.344 2.026h-1.27s-.7 3.515-.7 3.783c0 .428.258.612.85.612.28 0 .5-.026.67-.077l-.33 1.826m12.272-4.724c0 1.87-.764 2.978-1.972 2.978-.88.013-1.414-.727-1.414-1.837 0-1.314.78-2.8 2.03-2.8 1.01 0 1.356.804 1.356 1.66zm2.664.052c0-2.072-1.356-3.69-3.91-3.69-2.938 0-4.84 1.966-4.84 4.862 0 2.073 1.122 3.77 3.907 3.77 2.81 0 4.843-1.507 4.843-4.942zm-12.738-3.5c-.314 2.568-.87 5.172-1.303 7.745l-.105.56h2.492c.898-4.97 1.2-6.385 3.082-5.887l.904-2.35c-1.313-.485-2.158.206-2.923 1.188.07-.442.2-.87.17-1.256H64.48m-30.02 8.305h-2.483l1.475-7.802-3.397 7.802h-2.262l-.414-7.756-1.48 7.757h-2.253l1.918-10.15h3.88l.204 6.284 2.73-6.282h4.035l-1.956 10.15" fill="#FFF"></path></g></svg>;
    }
};
