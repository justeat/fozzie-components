import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'AppAndroidIcon',
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
        viewBox: "0 0 135 40"
      },
      "class": "c-ficon c-ficon--app-android"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z"
      }
    }), h("path", {
      attrs: {
        d: "M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z",
        fill: "#a6a6a6"
      }
    }), h("path", {
      attrs: {
        d: "M47.4 10.2c0 .8-.2 1.5-.7 2-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.2-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7c.5.4 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.8h2.9v.4zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zm3.3 5.3h-.8V7.7h-1.7V7H57v.7h-1.7V13zm4.6 0V7h.8v6h-.8zm4.2 0h-.8V7.7h-1.7V7h4.1v.7H64V13zm9.5-.8c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zm5.8 1.3V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z",
        fill: "#fff",
        stroke: "#fff",
        "stroke-width": ".2",
        "stroke-miterlimit": "10"
      }
    }), h("path", {
      attrs: {
        d: "M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z",
        fill: "#fff"
      }
    }), h("linearGradient", {
      attrs: {
        id: "a",
        gradientUnits: "userSpaceOnUse",
        x1: "21.8",
        y1: "173.29",
        x2: "5.017",
        y2: "156.508",
        gradientTransform: "matrix(1 0 0 -1 0 182)"
      }
    }, [h("stop", {
      attrs: {
        offset: "0",
        "stop-color": "#00A0FF"
      }
    }), h("stop", {
      attrs: {
        offset: ".007",
        "stop-color": "#00A1FF"
      }
    }), h("stop", {
      attrs: {
        offset: ".26",
        "stop-color": "#00BEFF"
      }
    }), h("stop", {
      attrs: {
        offset: ".512",
        "stop-color": "#00D2FF"
      }
    }), h("stop", {
      attrs: {
        offset: ".76",
        "stop-color": "#00DFFF"
      }
    }), h("stop", {
      attrs: {
        offset: "1",
        "stop-color": "#00E3FF"
      }
    })]), h("path", {
      attrs: {
        d: "M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z",
        fill: "url(#a)"
      }
    }), h("linearGradient", {
      attrs: {
        id: "b",
        gradientUnits: "userSpaceOnUse",
        x1: "33.834",
        y1: "161.999",
        x2: "9.637",
        y2: "161.999",
        gradientTransform: "matrix(1 0 0 -1 0 182)"
      }
    }, [h("stop", {
      attrs: {
        offset: "0",
        "stop-color": "#FFE000"
      }
    }), h("stop", {
      attrs: {
        offset: ".409",
        "stop-color": "#FFBD00"
      }
    }), h("stop", {
      attrs: {
        offset: ".775",
        "stop-color": "orange"
      }
    }), h("stop", {
      attrs: {
        offset: "1",
        "stop-color": "#FF9C00"
      }
    })]), h("path", {
      attrs: {
        d: "M27 24.3l-4.1-4.1v-.3l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z",
        fill: "url(#b)"
      }
    }), h("linearGradient", {
      attrs: {
        id: "c",
        gradientUnits: "userSpaceOnUse",
        x1: "24.827",
        y1: "159.704",
        x2: "2.069",
        y2: "136.946",
        gradientTransform: "matrix(1 0 0 -1 0 182)"
      }
    }, [h("stop", {
      attrs: {
        offset: "0",
        "stop-color": "#FF3A44"
      }
    }), h("stop", {
      attrs: {
        offset: "1",
        "stop-color": "#C31162"
      }
    })]), h("path", {
      attrs: {
        d: "M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4",
        fill: "url(#c)"
      }
    }), h("linearGradient", {
      attrs: {
        id: "d",
        gradientUnits: "userSpaceOnUse",
        x1: "7.297",
        y1: "181.824",
        x2: "17.46",
        y2: "171.661",
        gradientTransform: "matrix(1 0 0 -1 0 182)"
      }
    }, [h("stop", {
      attrs: {
        offset: "0",
        "stop-color": "#32A071"
      }
    }), h("stop", {
      attrs: {
        offset: ".069",
        "stop-color": "#2DA771"
      }
    }), h("stop", {
      attrs: {
        offset: ".476",
        "stop-color": "#15CF74"
      }
    }), h("stop", {
      attrs: {
        offset: ".801",
        "stop-color": "#06E775"
      }
    }), h("stop", {
      attrs: {
        offset: "1",
        "stop-color": "#00F076"
      }
    })]), h("path", {
      attrs: {
        d: "M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z",
        fill: "url(#d)"
      }
    }), h("path", {
      attrs: {
        d: "M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z",
        opacity: ".2"
      }
    }), h("path", {
      attrs: {
        d: "M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zm21.6-11l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z",
        opacity: ".12"
      }
    }), h("path", {
      attrs: {
        d: "M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L12.5 7.5c-1.4-.8-2.5-.2-2.5 1.4V9c0-1.5 1.1-2.2 2.5-1.4z",
        opacity: ".25",
        fill: "#fff"
      }
    })]);
  }
};