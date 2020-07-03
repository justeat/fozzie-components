export default {
    name: 'LogoJusteatIcon',

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

        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 24" class="c-ficon c-ficon--logo-justeat" {...ctx.data}><path d="M10.97.5c.45-.3 1.04-.3 1.5 0 1.15.72 2.26 1.52 3.31 2.38 0 0 .29.2.3-.14-.03-.43 0-.87.07-1.3a.6.6 0 01.55-.37s1.3.06 2.13.17a.8.8 0 01.7.71s.53 3.53.65 4.8c0 0 .1.65 1.04 1.75 0 0 1.92 2.67 2.14 3.18 0 0 .44.92-.51 1.04 0 0-1.75.18-1.92.22a.43.43 0 00-.38.47s-.1 6.14-.54 9.08c0 0-.12 1.17-.77 1.15 0 0-1.8-.06-2.21-.05 0 0-.18 0-.16-.24 0 0 .92-9.57.3-14.4 0 0-.03-.63-.5-.77 0 0-.44-.17-.86.38a15.14 15.14 0 00-2.84 8.64s-.05 1.52.18 1.9c0 0 .15.27.9.33l.93.13s.18 0 .16.23c0 0-.21 2.8-.28 3.3 0 .12-.02.23-.06.34 0 0-.04.09-.33.08 0 0-4.15-.03-4.62 0 0 0-.2 0-.24-.1-.04-.1-.29-3.63-.28-4.13 0-.1.05-.2.15-.24a2.48 2.48 0 001.15-1.82c.05-.54.05-1.07.02-1.6 0 0 .15-5.4.2-6.26 0 0 .02-.29-.36-.34a.36.36 0 00-.27.04.36.36 0 00-.16.22v.03c0 .03-.27 3.55-.22 4.95 0 0 .1.92-.55.94 0 0-.62.1-.65-.67 0 0 .05-3.46.2-5.16 0-.2-.14-.36-.34-.38a.38.38 0 00-.43.3v.04s-.27 3.3-.22 5.04c0 0 .08.85-.6.82 0 0-.56.06-.6-.69 0 0 .16-4.72.2-5.09a.38.38 0 00-.34-.36h-.04a.38.38 0 00-.41.32v.03s-.25 5.66-.22 7.32c0 0-.02 1.7 1.25 2.4 0 0 .18.1.19.27 0 0 .14 3 .27 3.96 0 0 .05.24-.16.24l-3.19.08a.65.65 0 01-.65-.61 70.71 70.71 0 01-.6-9.58.49.49 0 00-.37-.53S.94 12.8.55 12.71a.68.68 0 01-.41-1A32.72 32.72 0 0110.97.51zm22.46 8.88h-3.15c-1.02 0-1.02 0-1.23 1.19-.22 1.18-.21 1.22.72 1.22h1.87l-1.06 6.06c-.26 1.35-.85 2.28-2.68 2.83-.47.13-.6.3-.6.5.04.35.14.68.3.98.3.72.47.85.72.85.3-.03.6-.09.9-.17 2.6-.85 3.66-2.84 4.08-5.2l1.2-6.82c.2-1.44.2-1.44-1.07-1.44m10.67 0c-1.27 0-1.27 0-1.44 1.06l-.92 5.5c-.26 1.61-.68 2.54-2.26 2.54-1.57 0-2.08-.93-1.83-2.37l.9-5.25c.25-1.48.2-1.48-1.1-1.48-1.33 0-1.33 0-1.5 1.02l-.93 5.5c-.56 3.13 1.4 5.07 4.17 5.07 3.1 0 4.67-1.39 5.18-4.69l.94-5.46c.2-1.44.13-1.44-1.2-1.44m5.82 9.02c1.02-.05 1.57-.51 1.57-.97 0-.6-.72-.8-1.7-1.1-1.91-.6-3.66-1.27-3.66-3.3 0-2.42 2-3.73 4.51-3.73 1 0 2.02.04 3.02.13.68.08.85.3.64 1.35-.22 1.06-.47 1.14-1.06 1.1-.73-.04-1.67-.13-2.77-.13-1.27 0-1.66.47-1.66.9 0 .54.51.84 1.7 1.18 2.21.63 3.66 1.52 3.66 3.43 0 2.24-1.66 3.55-4.34 3.63-1.28.05-2.56-.02-3.83-.2-.85-.13-.9-.13-.68-1.36.21-1.1.21-1.18 1.02-1.1 1.18.15 2.38.2 3.57.17m13.91-9.02h-7.18c-1.02 0-1.02 0-1.24 1.23-.21 1.23-.16 1.23.73 1.23h2.34l-1.32 7.59c-.26 1.48-.21 1.48 1.1 1.48 1.24 0 1.28 0 1.45-1.06l1.36-8h2.26c1.01 0 1.01 0 1.23-1.22.21-1.23.2-1.23-.73-1.23m12.68 2.41c1.02 0 1.02 0 1.23-1.23.22-1.22.21-1.22-.72-1.22h-5.15c-1.83 0-1.78 0-2.08 1.82l-1.32 7.65c-.34 2-.3 2 1.53 2h5.02c1.07 0 1.02 0 1.24-1.2.2-1.18.2-1.22-.73-1.22H71.2l.34-2.2h3.62c.97 0 .97 0 1.14-1.14.17-1.15.17-1.19-1.15-1.19h-3.19l.35-2.07h4.2zm5.43 4.05l1.66-3.64c.13-.3.13-.3.34-.3.21 0 .21 0 .26.34l.5 3.6h-2.76zm4.5-5.08c-.24-1.44-.24-1.44-2.29-1.44-1.91 0-1.87 0-2.47 1.19l-4.3 8.93c-.63 1.26-.5 1.39 1.07 1.39 1.24 0 1.24 0 1.75-1.14l.67-1.53h4.17l.21 1.53c.18 1.14.22 1.14 1.45 1.14 1.4 0 1.53-.08 1.28-1.48l-1.53-8.59zm10.18-1.4H89.4c-1.02 0-1.02 0-1.23 1.23-.21 1.23-.17 1.23.72 1.23h2.34l-1.32 7.59c-.25 1.48-.21 1.48 1.1 1.48 1.24 0 1.28 0 1.45-1.06l1.37-8h2.25c1.02 0 1.02 0 1.23-1.22.21-1.23.26-1.23-.68-1.23"></path></svg>;
    }
};
