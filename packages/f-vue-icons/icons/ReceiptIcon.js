import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ReceiptIcon',
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
        viewBox: "0 0 20 20"
      },
      "class": "c-ficon c-ficon--receipt"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8.75 5.833a.417.417 0 1 1 0-.833h5a.417.417 0 0 1 0 .833h-5zm0 3.334a.417.417 0 1 1 0-.834h4.167a.417.417 0 0 1 0 .834H8.75zm0 3.333a.417.417 0 1 1 0-.833h5a.417.417 0 1 1 0 .833h-5zM6.667 6.25a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667zm0 3.333a.833.833 0 1 1 0-1.666.833.833 0 0 1 0 1.666zm0 3.334a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667zM2.5 15.29V2.083c0-.23.187-.416.417-.416h14.166c.23 0 .417.186.417.416v13.21a.817.817 0 0 1-.15.47l-1.334 1.882a.875.875 0 0 1-1.412-.007l-1.029-1.453c-.047-.017-.059-.011-.062-.007l-1.039 1.467a.875.875 0 0 1-1.412-.007l-1.029-1.453c-.046-.017-.059-.011-.061-.007l-1.04 1.467a.875.875 0 0 1-1.411-.007l-1.03-1.453c-.046-.017-.058-.011-.061-.007l-1.04 1.467a.875.875 0 0 1-1.41-.007l-1.33-1.875a.819.819 0 0 1-.151-.472zm.833-.007l1.321 1.865c.047.017.06.01.062.007l1.04-1.467a.875.875 0 0 1 1.41.007l1.03 1.453c.046.017.059.01.061.007l1.04-1.467a.875.875 0 0 1 1.411.007l1.03 1.453c.046.017.058.01.061.007l1.04-1.467a.875.875 0 0 1 1.411.007l1.029 1.453c.047.017.06.01.062.007l1.326-1.872V2.5H3.333v12.784z"
      }
    })]);
  }
};