import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'WarningIcon',
  props: {},
  functional: true,
  render: function render(h, ctx) {
    var attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 22"
      },
      "class": "c-ficon c-ficon--warning"
    }, ctx.data]), [h("g", {
      attrs: {
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
      }
    }, [h("g", {
      attrs: {
        transform: "translate(-34.000000, -19.000000)"
      }
    }, [h("g", {
      attrs: {
        transform: "translate(32.000000, 16.000000)"
      }
    }, [h("polygon", {
      attrs: {
        opacity: "0",
        points: "0 28 28 28 28 0 0 0"
      }
    }), h("path", {
      attrs: {
        d: "M25.4040451,21.3246007 C26.151765,22.6206539 25.213206,24.2407407 23.7197917,24.2407407 L4.27996528,24.2407407 C2.78367477,24.2407407 1.84945023,22.6181424 2.59571181,21.3246007 L12.3157465,4.47161458 C13.063831,3.1749537 14.9375058,3.17730324 15.6842535,4.47161458 L25.4040451,21.3246007 Z M14,17.8402778 C12.9708623,17.8402778 12.1365741,18.674566 12.1365741,19.7037037 C12.1365741,20.7328414 12.9708623,21.5671296 14,21.5671296 C15.0291377,21.5671296 15.8634259,20.7328414 15.8634259,19.7037037 C15.8634259,18.674566 15.0291377,17.8402778 14,17.8402778 Z M12.2308391,11.1422338 L12.5313368,16.6514931 C12.5453935,16.909294 12.7585532,17.1111111 13.0167187,17.1111111 L14.9832812,17.1111111 C15.2414468,17.1111111 15.4546065,16.909294 15.4686632,16.6514931 L15.7691609,11.1422338 C15.7843519,10.8637731 15.5626447,10.6296296 15.2837789,10.6296296 L12.7161806,10.6296296 C12.4373148,10.6296296 12.2156481,10.8637731 12.2308391,11.1422338 L12.2308391,11.1422338 Z",
        id: "Color",
        fill: "#FFB727"
      }
    })])])])]);
  }
};