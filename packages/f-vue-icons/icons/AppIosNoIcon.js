import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default {
  name: 'AppIosNoIcon',
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
        viewBox: "0 0 135 40"
      },
      "class": "c-ficon c-ficon--app-ios.no"
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
        d: "M30.128 19.784c-.03-3.223 2.64-4.79 2.76-4.864-1.51-2.203-3.852-2.504-4.675-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.16-4.228-1.13-2.14.03-4.142 1.27-5.24 3.19-2.266 3.92-.576 9.69 1.595 12.86 1.086 1.55 2.355 3.28 4.016 3.22 1.62-.07 2.23-1.04 4.19-1.04 1.94 0 2.51 1.03 4.2.99 1.74-.03 2.84-1.56 3.89-3.13 1.25-1.78 1.76-3.53 1.78-3.62-.04-.01-3.39-1.29-3.42-5.15zm-3.2-9.478c.874-1.093 1.472-2.58 1.306-4.09-1.265.057-2.847.876-3.758 1.945-.806.95-1.526 2.49-1.34 3.94 1.42.11 2.88-.71 3.792-1.79zm26.79 21.198h-2.27l-1.246-3.91h-4.324l-1.185 3.91h-2.21l4.283-13.308h2.646l4.305 13.308zm-3.89-5.55l-1.125-3.474c-.12-.355-.342-1.19-.67-2.507h-.04c-.132.566-.343 1.402-.633 2.507l-1.105 3.475h3.573zm14.906.634c0 1.632-.44 2.922-1.323 3.87-.79.842-1.77 1.263-2.94 1.263-1.26 0-2.17-.45-2.72-1.36h-.04v5.06h-2.13V25.07c0-1.026-.02-2.08-.08-3.16h1.88l.12 1.522h.04c.71-1.15 1.79-1.72 3.24-1.72 1.13 0 2.08.447 2.84 1.34.76.898 1.14 2.076 1.14 3.537zm-2.172.078c0-.934-.21-1.704-.632-2.31-.46-.632-1.08-.948-1.856-.948-.526 0-1.004.176-1.43.523-.43.35-.71.81-.84 1.38-.066.27-.1.48-.1.65v1.6c0 .7.215 1.29.643 1.77s.984.72 1.668.72c.803 0 1.428-.31 1.875-.92.448-.62.672-1.43.672-2.45zm13.208-.078c0 1.632-.44 2.922-1.323 3.87-.79.842-1.77 1.263-2.94 1.263-1.265 0-2.173-.45-2.725-1.36h-.04v5.06H66.61V25.07c0-1.026-.027-2.08-.08-3.16h1.876l.12 1.522h.04c.71-1.15 1.788-1.72 3.237-1.72 1.13 0 2.076.447 2.834 1.34.756.898 1.134 2.076 1.134 3.537zm-2.17.078c0-.934-.21-1.704-.633-2.31-.46-.632-1.078-.948-1.855-.948a2.22 2.22 0 0 0-1.432.523 2.43 2.43 0 0 0-.838 1.38c-.065.27-.1.48-.1.65v1.6c0 .7.215 1.29.64 1.77.43.48.985.72 1.67.72.804 0 1.43-.31 1.876-.92.447-.62.672-1.43.672-2.45zm14.51 1.106c0 1.132-.392 2.053-1.18 2.764-.868.777-2.075 1.165-3.626 1.165-1.432 0-2.58-.27-3.45-.82l.495-1.77c.93.57 1.96.85 3.08.85.8 0 1.43-.18 1.87-.54.44-.36.67-.84.67-1.45 0-.54-.19-.99-.56-1.36-.37-.37-.98-.71-1.84-1.03-2.33-.87-3.5-2.14-3.5-3.81 0-1.09.41-1.99 1.22-2.69.81-.69 1.9-1.04 3.26-1.04 1.21 0 2.21.21 3.02.63l-.54 1.74c-.75-.41-1.6-.61-2.55-.61-.75 0-1.34.18-1.76.55-.36.33-.537.73-.537 1.21 0 .53.204.96.61 1.308.357.32 1 .66 1.94 1.03 1.144.46 1.99 1 2.53 1.62.54.615.803 1.386.803 2.306zm7.05-4.264h-2.35v4.66c0 1.184.414 1.776 1.244 1.776.38 0 .697-.033.947-.1l.06 1.62c-.42.157-.97.236-1.65.236-.84 0-1.5-.257-1.97-.77-.47-.514-.71-1.376-.71-2.587v-4.837h-1.4v-1.6h1.4V20.15l2.1-.633v2.39h2.35v1.6zm10.604 3.12c0 1.474-.422 2.685-1.264 3.632-.883.975-2.055 1.46-3.516 1.46-1.408 0-2.53-.466-3.365-1.4s-1.26-2.113-1.26-3.534c0-1.487.43-2.705 1.29-3.652.86-.948 2.02-1.422 3.48-1.422 1.41 0 2.54.467 3.39 1.402.81.907 1.22 2.078 1.22 3.513zm-2.213.07c0-.887-.18-1.646-.57-2.28-.44-.766-1.08-1.15-1.91-1.15-.85 0-1.51.385-1.95 1.15-.38.634-.57 1.405-.57 2.317 0 .885.19 1.644.57 2.276.46.77 1.11 1.15 1.94 1.15.82 0 1.46-.39 1.92-1.17.4-.64.59-1.41.59-2.29zm9.15-2.915c-.21-.04-.43-.06-.67-.06-.75 0-1.33.284-1.73.85-.35.5-.53 1.133-.53 1.896v5.03h-2.13l.02-6.58c0-1.11-.02-2.12-.08-3.02h1.86l.08 1.83h.06c.23-.63.58-1.14 1.07-1.52.48-.35.99-.52 1.54-.52.2 0 .38.01.54.04v2.03zm9.54 2.47c0 .38-.02.703-.08.966h-6.39c.03.94.34 1.67.93 2.17.54.44 1.24.67 2.1.67.95 0 1.81-.15 2.59-.46l.34 1.48c-.91.39-1.98.59-3.22.59-1.48 0-2.65-.44-3.5-1.32-.85-.88-1.27-2.05-1.27-3.53 0-1.45.4-2.65 1.19-3.62.83-1.03 1.95-1.54 3.358-1.54 1.38 0 2.43.51 3.14 1.54.56.81.847 1.82.847 3.02zm-2.04-.553c.02-.637-.12-1.18-.41-1.64-.36-.597-.93-.89-1.69-.89-.69 0-1.26.29-1.69.87-.35.46-.56 1.01-.63 1.654h4.44zM47.47 13.43h-3.72V6.896h1.047v5.655h2.667v.89zm4.937 0h-.94l-.08-.543h-.03c-.32.432-.78.65-1.38.65-.445 0-.805-.144-1.076-.428a1.37 1.37 0 0 1-.37-.96c0-.58.24-1.02.73-1.32.48-.31 1.16-.46 2.04-.45v-.08c0-.62-.33-.93-.98-.93-.47 0-.88.11-1.23.34l-.21-.69c.44-.27.98-.41 1.62-.41 1.235 0 1.85.65 1.85 1.95v1.74c0 .47.02.84.07 1.12zm-1.09-1.62v-.727c-1.16-.02-1.737.297-1.737.95 0 .246.062.43.2.553a.73.73 0 0 0 .51.18c.23 0 .443-.072.64-.217a.885.885 0 0 0 .378-.75zm5.73.267c0 .436-.16.79-.484 1.053s-.77.397-1.34.397c-.536 0-.99-.104-1.366-.32l.222-.773c.36.22.74.33 1.15.33.53 0 .8-.197.8-.592a.57.57 0 0 0-.18-.432c-.12-.112-.33-.224-.62-.333-.84-.31-1.26-.764-1.26-1.36 0-.407.15-.747.46-1.02.31-.27.72-.406 1.23-.406.46 0 .86.1 1.19.29l-.23.75c-.31-.18-.63-.27-.96-.27-.22 0-.4.05-.52.16s-.18.24-.18.4c0 .17.06.3.19.4.11.1.323.21.64.32.82.31 1.223.79 1.223 1.42zM60.98 9.5h-1.15v2.29c0 .582.205.873.61.873.19 0 .345-.016.468-.05l.023.796c-.2.07-.48.11-.81.11-.41 0-.73-.13-.97-.38-.23-.25-.35-.68-.35-1.27V9.5h-.69v-.78h.69v-.865l1.03-.31v1.173h1.16v.786zm8.38 3.93h-1.047v-2.7c0-.833-.316-1.25-.95-1.25a.948.948 0 0 0-.757.344c-.19.23-.29.5-.29.808v2.796H65.27v-3.365c0-.414-.012-.863-.037-1.35h.92l.05.738h.03c.12-.23.303-.41.542-.57.282-.17.6-.26.95-.26.44 0 .804.14 1.095.43.364.35.543.87.543 1.56v2.82zm5.725-2.58c0 .187-.015.345-.04.474h-3.14c.01.466.163.82.454 1.067.26.22.6.33 1.02.33.46 0 .89-.07 1.27-.22l.16.73c-.45.2-.98.29-1.58.29-.73 0-1.31-.21-1.73-.64-.42-.43-.63-1-.63-1.73 0-.71.19-1.3.58-1.77.4-.5.95-.75 1.64-.75.68 0 1.19.26 1.54.76.28.4.42.89.42 1.48zm-1-.27a1.448 1.448 0 0 0-.204-.807c-.18-.29-.46-.437-.83-.437-.34 0-.62.14-.83.426-.17.227-.27.498-.31.815h2.19zm6.712 2.85h-.933l-.044-.758h-.03c-.295.576-.8.864-1.51.864-.57 0-1.04-.224-1.416-.67S76.3 11.84 76.3 11.13c0-.763.203-1.38.61-1.853.394-.44.88-.66 1.454-.66.635 0 1.078.214 1.33.64h.02v-2.7h1.047v5.607c0 .46.02.882.04 1.27zm-1.087-1.99v-.785c0-.14-.01-.25-.03-.33-.057-.255-.184-.467-.38-.638s-.427-.257-.7-.257c-.39 0-.695.155-.92.466s-.336.71-.336 1.193c0 .46.106.84.32 1.13.228.31.53.46.915.46.34 0 .62-.13.83-.39.2-.24.3-.53.3-.86zm8.33-4.87l-.095.816a1.271 1.271 0 0 0-.51-.098c-.55 0-.825.395-.825 1.184v.242h1.06V9.5h-1.05v3.93h-1.04V9.5h-.64v-.785h.64V8.5c0-.718.183-1.254.552-1.61.31-.297.705-.446 1.184-.446.278 0 .524.04.737.125zm3.404 3.07a1.742 1.742 0 0 0-.33-.028c-.367 0-.65.14-.854.417-.174.24-.262.55-.262.93v2.47h-1.046l.01-3.23c0-.55-.014-1.04-.04-1.49h.913l.04.9h.03c.11-.31.286-.56.526-.75.24-.17.49-.25.76-.25.1 0 .19 0 .26.02v.99zm4.87 3.793h-.94l-.08-.543h-.027c-.323.433-.78.65-1.378.65-.45 0-.81-.143-1.08-.427-.24-.258-.37-.58-.37-.96 0-.576.24-1.015.72-1.32.48-.303 1.16-.452 2.03-.445V10.3c0-.62-.33-.93-.98-.93-.47 0-.88.116-1.23.348l-.21-.688c.43-.27.98-.407 1.61-.407 1.23 0 1.85.65 1.85 1.95v1.736c0 .47.02.84.06 1.12zm-1.087-1.62v-.727c-1.157-.02-1.735.297-1.735.95 0 .246.065.43.2.553.135.12.307.18.512.18.23 0 .445-.08.64-.22a.893.893 0 0 0 .382-.75z"
      }
    })]);
  }
};