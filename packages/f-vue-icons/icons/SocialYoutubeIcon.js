import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default {
  name: 'SocialYoutubeIcon',
  props: {
    classModifier: {
      type: String,
      default: ''
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    ctx.data.class = _defineProperty({}, "c-ficon--".concat(ctx.props.classModifier), ctx.props.classModifier !== '');
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28"
      },
      "class": "c-ficon c-ficon--social-youtube"
    }, ctx.data]), [h("path", {
      attrs: {
        fill: "#535353",
        d: "M14 28C6.268 28 0 21.732 0 14S6.268 0 14 0s14 6.268 14 14-6.268 14-14 14zm0-1.167c7.088 0 12.833-5.745 12.833-12.833S21.088 1.167 14 1.167 1.167 6.912 1.167 14 6.912 26.833 14 26.833zm8.428-18.038a15.42 15.42 0 0 1 .021 10.352A2.79 2.79 0 0 1 19.819 21H8.186a2.76 2.76 0 0 1-2.616-1.802 15.416 15.416 0 0 1-.019-10.345A2.79 2.79 0 0 1 8.181 7h11.633a2.757 2.757 0 0 1 2.614 1.795zm-2.608-.628H8.18a1.62 1.62 0 0 0-1.53 1.076 14.244 14.244 0 0 0 .016 9.555 1.592 1.592 0 0 0 1.514 1.035h11.64a1.62 1.62 0 0 0 1.53-1.076 14.248 14.248 0 0 0-.017-9.558 1.592 1.592 0 0 0-1.512-1.032zM16.413 14l-3.594-2.246v4.492L16.413 14zm-4.76 3.298v-6.596c0-.458.504-.738.892-.495l5.278 3.298a.583.583 0 0 1 0 .99l-5.278 3.298a.583.583 0 0 1-.892-.495z"
      }
    })]);
  }
};