import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default {
  name: 'SocialPinterestIcon',
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
      "class": "c-ficon c-ficon--social-pinterest"
    }, ctx.data]), [h("path", {
      attrs: {
        fill: "#535353",
        d: "M12.137 14.61c-.251-.975-.083-2.18.55-3.52.454-.965 1.009-1.544 1.635-1.343.739.238.664 1.07.198 2.055l-1.139 2.84c.132.285.329.524.583.714.818.61 2.162.638 3.254.03a4.37 4.37 0 0 0 2.412-3.72C19.63 8.774 17.857 7 14.715 7a4.919 4.919 0 0 0-5.179 5.039c.004.976.324 1.925.911 2.706a.583.583 0 0 1-.932.701 5.69 5.69 0 0 1-1.145-3.391 6.085 6.085 0 0 1 6.376-6.22c3.756 0 6.051 2.295 6.05 5.856a5.534 5.534 0 0 1-3.033 4.727c-1.453.81-3.292.774-4.497-.126a3.156 3.156 0 0 1-.403-.358l-1.016 2.532a6.416 6.416 0 0 0-.35 2.078v.8l.635-.635a5.788 5.788 0 0 0 1.186-2.302.583.583 0 0 1 1.13.288 6.98 6.98 0 0 1-1.457 2.802l-1.664 1.666a.583.583 0 0 1-.996-.412v-2.208c0-.836.14-1.667.423-2.484l1.383-3.447zM14 28C6.268 28 0 21.732 0 14S6.268 0 14 0s14 6.268 14 14-6.268 14-14 14zm0-1.167c7.088 0 12.833-5.745 12.833-12.833S21.088 1.167 14 1.167 1.167 6.912 1.167 14 6.912 26.833 14 26.833z"
      }
    })]);
  }
};