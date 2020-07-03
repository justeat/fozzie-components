import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'DriverIcon',
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
  render: function render(h, ctx) {
    var attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    ctx.data.class = {
      'c-ficon--white': ctx.props.isWhite,
      'c-ficon--blue': ctx.props.isBlue,
      'c-ficon--green': ctx.props.isGreen,
      'c-ficon--orange': ctx.props.isOrange,
      'c-ficon--grey--darkest': ctx.props.isDarkestGrey,
      'c-ficon--pushLeft': ctx.props.pushLeft
    };
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 28 28"
      },
      "class": "c-ficon c-ficon--driver"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19.833 23.333h1.75a.583.583 0 0 0 .584-.583v-2.333c0-3.217-1.817-5.531-5.632-6.204a.583.583 0 1 1 .203-1.15c4.389.775 6.595 3.587 6.595 7.354v2.333a1.75 1.75 0 0 1-1.75 1.75H19.25a.583.583 0 0 1-.583-.583V19.25a.583.583 0 1 1 1.166 0v4.083zm-11.666 0V19.25a.583.583 0 0 1 1.166 0v4.667a.583.583 0 0 1-.583.583H6.417a1.75 1.75 0 0 1-1.75-1.75v-2.333c0-3.76 2.201-6.567 6.582-7.353a.583.583 0 0 1 .206 1.148c-3.809.684-5.622 2.994-5.622 6.205v2.333c0 .322.262.583.584.583h1.75zm5.926-9.297c1.96 0 4.574-2.627 4.574-4.809v-1.52a4.384 4.384 0 0 0-4.574-4.17l-.21-.001c-2.405-.097-4.438 1.765-4.55 4.143v1.548c0 2.19 2.598 4.81 4.574 4.81h.186zM8.167 9.227V7.652c.143-3.046 2.717-5.405 5.74-5.282h.163c3.046-.123 5.62 2.236 5.763 5.309v1.548c0 2.825-3.133 5.976-5.74 5.976h-.186c-2.623 0-5.74-3.144-5.74-5.976zm8.166-1.024h-4.666v1.152a3.103 3.103 0 0 0 2.315 1.157 3.164 3.164 0 0 0 2.351-1.159v-1.15zm1.056 1.691a4.343 4.343 0 0 1-3.403 1.784 4.285 4.285 0 0 1-3.377-1.787.583.583 0 0 1-.109-.34V7.62c0-.323.261-.584.583-.584h5.834c.322 0 .583.261.583.584v1.932a.583.583 0 0 1-.111.342zm1.278 10.523a.583.583 0 1 1 1.166 0v3.5a.583.583 0 0 1-.17.412c-.212.212-.655.478-1.395.724-1.157.386-2.75.614-4.851.614-1.604 0-2.88-.232-3.863-.625-.621-.249-1.015-.512-1.216-.713a.583.583 0 0 1-.171-.412v-3.5a.583.583 0 1 1 1.166 0v3.217c.14.09.355.205.654.324.841.337 1.97.542 3.43.542 1.982 0 3.452-.21 4.482-.553.366-.122.615-.237.768-.324v-3.206z"
      }
    })]);
  }
};