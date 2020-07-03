import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'AppIosDkIcon',
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
      "class": "c-ficon c-ficon--app-ios.dk"
    }, ctx.data]), [h("path", {
      attrs: {
        fill: "#A6A6A6",
        d: "M130.197 40H4.73A4.739 4.739 0 0 1 0 35.267V4.727A4.734 4.734 0 0 1 4.73 0h125.467C132.803 0 135 2.12 135 4.726v30.54c0 2.606-2.197 4.734-4.803 4.734z"
      }
    }), h("path", {
      attrs: {
        d: "M134.032 35.268a3.83 3.83 0 0 1-3.834 3.83H4.728a3.835 3.835 0 0 1-3.838-3.83V4.725A3.84 3.84 0 0 1 4.73.89h125.467c2.12 0 3.834 1.72 3.834 3.835l.01 30.543z"
      }
    }), h("path", {
      attrs: {
        fill: "#FFF",
        d: "M30.128 19.784c-.03-3.223 2.64-4.79 2.76-4.864-1.51-2.203-3.852-2.504-4.675-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.16-4.228-1.13-2.14.03-4.142 1.27-5.24 3.19-2.266 3.92-.576 9.69 1.595 12.86 1.086 1.55 2.355 3.28 4.016 3.22 1.62-.07 2.23-1.04 4.19-1.04 1.94 0 2.51 1.03 4.2.99 1.74-.03 2.84-1.56 3.89-3.13 1.25-1.78 1.76-3.53 1.78-3.62-.04-.01-3.39-1.29-3.42-5.15zm-3.2-9.478c.874-1.093 1.472-2.58 1.306-4.09-1.265.057-2.847.876-3.758 1.945-.806.95-1.526 2.49-1.34 3.94 1.42.11 2.88-.71 3.792-1.79zm26.717 21.198h-2.27l-1.245-3.91h-4.324l-1.185 3.91h-2.21l4.29-13.308h2.65l4.31 13.308zm-3.89-5.55L48.63 22.48c-.12-.355-.342-1.19-.67-2.507h-.04c-.132.566-.343 1.402-.633 2.507l-1.105 3.475h3.573zm14.907.634c0 1.632-.44 2.922-1.323 3.87-.79.842-1.78 1.263-2.95 1.263-1.27 0-2.17-.45-2.73-1.36h-.04v5.06H55.5V25.07c0-1.026-.027-2.08-.08-3.16h1.876l.12 1.522h.04c.71-1.15 1.79-1.72 3.237-1.72 1.132 0 2.077.447 2.833 1.34.758.898 1.136 2.076 1.136 3.537zm-2.172.078c0-.934-.21-1.704-.632-2.31-.46-.632-1.08-.948-1.856-.948-.526 0-1.004.176-1.43.523-.43.35-.71.81-.84 1.38-.066.27-.1.48-.1.65v1.6c0 .7.215 1.29.643 1.77s.984.72 1.668.72c.803 0 1.428-.31 1.875-.92.448-.62.672-1.43.672-2.45zm13.21-.078c0 1.632-.442 2.922-1.325 3.87-.79.842-1.77 1.263-2.94 1.263-1.265 0-2.173-.45-2.725-1.36h-.04v5.06h-2.132V25.07c0-1.026-.027-2.08-.08-3.16h1.876l.12 1.522h.04c.71-1.15 1.788-1.72 3.237-1.72 1.14 0 2.08.447 2.84 1.34.76.898 1.14 2.076 1.14 3.537zm-2.173.078c0-.934-.21-1.704-.633-2.31-.46-.632-1.078-.948-1.855-.948-.53 0-1.01.176-1.44.523-.43.35-.71.81-.84 1.38-.07.27-.1.48-.1.65v1.6c0 .7.21 1.29.64 1.77.43.48.98.72 1.67.72.8 0 1.43-.31 1.87-.92.45-.62.67-1.43.67-2.45zm14.513 1.106c0 1.132-.394 2.053-1.183 2.764-.867.777-2.074 1.165-3.625 1.165-1.432 0-2.58-.27-3.45-.82l.495-1.77c.936.57 1.963.85 3.082.85.8 0 1.42-.18 1.87-.54.44-.36.67-.84.67-1.45 0-.54-.19-.99-.56-1.36-.37-.37-.98-.71-1.84-1.03-2.33-.87-3.5-2.14-3.5-3.81 0-1.09.41-1.99 1.22-2.69.81-.69 1.9-1.04 3.26-1.04 1.21 0 2.21.21 3.02.63l-.54 1.74c-.75-.41-1.6-.61-2.55-.61-.75 0-1.34.18-1.76.55-.36.33-.54.73-.54 1.21 0 .53.203.96.61 1.308.356.32 1 .66 1.94 1.03 1.142.46 1.983 1 2.53 1.62.54.615.81 1.386.81 2.306zm7.048-4.264h-2.35v4.66c0 1.184.414 1.776 1.244 1.776.38 0 .697-.033.947-.1l.05 1.62c-.42.157-.98.236-1.66.236-.85 0-1.5-.257-1.98-.77-.48-.514-.71-1.376-.71-2.587v-4.837h-1.4v-1.6h1.4V20.15l2.09-.633v2.39h2.35v1.6zm10.602 3.12c0 1.474-.42 2.685-1.263 3.632-.883.975-2.055 1.46-3.516 1.46-1.4 0-2.52-.466-3.36-1.4s-1.25-2.113-1.25-3.534c0-1.487.43-2.705 1.3-3.652.86-.948 2.03-1.422 3.49-1.422 1.41 0 2.54.467 3.4 1.402.82.907 1.23 2.078 1.23 3.513zm-2.21.07c0-.887-.19-1.646-.573-2.28-.447-.766-1.086-1.15-1.914-1.15-.857 0-1.508.385-1.955 1.15-.383.634-.572 1.405-.572 2.317 0 .885.19 1.644.572 2.276.46.77 1.105 1.15 1.936 1.15.814 0 1.453-.39 1.914-1.17.393-.64.59-1.41.59-2.29zm9.14-2.915c-.21-.04-.435-.06-.67-.06-.75 0-1.33.284-1.74.85-.354.5-.532 1.133-.532 1.896v5.03h-2.13l.02-6.58c0-1.11-.028-2.12-.08-3.02h1.856l.078 1.83h.06c.224-.63.58-1.14 1.065-1.52.475-.35.988-.52 1.54-.52.198 0 .376.01.534.04v2.03zm9.536 2.47c0 .38-.025.703-.078.966h-6.396c.025.94.334 1.67.928 2.17.54.44 1.236.67 2.092.67.947 0 1.81-.15 2.588-.46l.334 1.48c-.908.39-1.98.59-3.217.59-1.488 0-2.656-.44-3.506-1.32-.84-.88-1.27-2.05-1.27-3.53 0-1.45.4-2.65 1.19-3.62.83-1.03 1.95-1.54 3.36-1.54 1.39 0 2.43.51 3.14 1.54.57.81.85 1.82.85 3.02zm-2.033-.554c.014-.64-.125-1.18-.414-1.64-.37-.6-.94-.89-1.7-.89-.7 0-1.27.29-1.7.87-.36.46-.57 1.01-.63 1.65h4.44zm-71.52-12.27h-1.047v-2.95h-2.832v2.95h-1.048V6.89h1.048v2.67h2.832V6.897h1.048v6.537zm5.78-2.58c0 .18-.012.34-.04.47h-3.14c.013.46.164.82.455 1.06.266.22.608.33 1.028.33.466 0 .89-.08 1.27-.23l.165.73c-.44.19-.97.29-1.58.29-.73 0-1.3-.22-1.72-.65s-.62-1.01-.62-1.73c0-.71.2-1.31.58-1.78.41-.51.96-.76 1.65-.76.68 0 1.2.25 1.54.75.28.4.42.89.42 1.48zm-1-.27c.01-.32-.06-.58-.2-.81-.183-.29-.46-.44-.835-.44-.343 0-.62.14-.835.42-.174.22-.277.5-.31.81h2.182zM60 13.43h-1.048v-2.7c0-.83-.316-1.247-.95-1.247a.947.947 0 0 0-.757.343c-.193.23-.29.5-.29.808v2.796h-1.05v-3.366c0-.414-.012-.863-.037-1.35h.92l.05.738h.03c.12-.23.303-.418.542-.57a1.78 1.78 0 0 1 .95-.264c.44 0 .806.142 1.097.427.363.35.543.87.543 1.563v2.823zm4.22-3.93h-1.153v2.29c0 .584.204.875.61.875.19 0 .344-.016.467-.05l.028.796c-.207.08-.48.12-.814.12-.414 0-.737-.12-.97-.38-.233-.25-.35-.67-.35-1.27V9.5h-.688v-.78h.688v-.865l1.028-.31v1.173h1.154v.786zm5.452-2.19c0 .188-.062.34-.184.456a.66.66 0 0 1-.477.175c-.17 0-.32-.06-.44-.18s-.18-.27-.18-.45.07-.33.19-.44.28-.17.46-.17c.19 0 .34.06.46.18s.19.27.19.45zm-.117 6.12h-1.047V8.72h1.047v4.713z"
      }
    })]);
  }
};