import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default {
  name: 'LogoJusteatLegacyIcon',
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
        viewBox: "0 0 165 32"
      },
      "class": "c-ficon c-ficon--logo-justeat-legacy"
    }, ctx.data]), [h("g", {
      attrs: {
        "fill-rule": "evenodd"
      }
    }, [h("path", {
      attrs: {
        d: "M138.334 3.476C137.717.16 137.717.16 132.968.16c-4.469 0-4.41 0-5.748 2.705l-10.114 20.713c-1.455 2.982-1.235 3.2 2.514 3.2 2.91 0 2.852 0 4.072-2.647l1.617-3.535h9.732l.5 3.535c.397 2.647.5 2.647 3.41 2.647 3.264 0 3.588-.233 2.955-3.433zM127.78 15.244l3.91-8.451c.339-.713.339-.713.78-.713.5 0 .5 0 .617.77l1.176 8.394z"
      }
    }), h("path", {
      attrs: {
        d: "M115.122 5.79c2.366 0 2.381-.03 2.866-2.823.485-2.807.485-2.822-1.69-2.822h-12.055c-4.248 0-4.16 0-4.895 4.248L96.26 22.182c-.78 4.582-.735 4.582 3.616 4.582h11.775c2.455 0 2.396 0 2.911-2.764.5-2.88.5-2.88-1.735-2.88H102.67l.838-5.135h8.438c2.294 0 2.294 0 2.676-2.647.44-2.705.44-2.705-2.676-2.705h-7.541l.838-4.858h9.879z"
      }
    }), h("path", {
      attrs: {
        d: "M85.47.16H68.58c-2.396 0-2.396 0-2.91 2.822-.5 2.822-.442 2.822 1.675 2.822h5.498L69.784 23.36c-.558 3.433-.514 3.433 2.617 3.433 2.852 0 3.029 0 3.41-2.43l3.235-18.56h5.248c2.367 0 2.367 0 2.867-2.821C87.646.16 87.646.16 85.47.16"
      }
    }), h("path", {
      attrs: {
        d: "M39.266.16c-2.94 0-3 .015-3.41 2.444l-2.22 12.8c-.618 3.709-1.632 5.876-5.264 5.876-3.63 0-4.865-2.153-4.307-5.47l2.117-12.232c.559-3.433.456-3.403-2.617-3.403-2.999 0-3.072-.03-3.47 2.414l-2.234 12.844c-1.264 7.272 3.25 11.767 9.732 11.767 7.262 0 10.908-3.2 12.143-10.88l2.205-12.713C42.53.16 42.397.16 39.266.16"
      }
    }), h("path", {
      attrs: {
        d: "M14.333.16H6.94c-2.426 0-2.426 0-2.911 2.778-.5 2.778-.441 2.866 1.705 2.866h4.396L7.69 19.869c-.544 3.156-1.985 5.28-6.263 6.59-1.103.32-1.426.756-1.426 1.25 0 .538.22 1.091.662 2.226.661 1.687 1.102 2.007 1.705 2.007s1.705-.32 2.087-.437c6.101-1.963 8.527-6.589 9.512-12.13L16.7 3.535C17.303.218 17.303.16 14.333.16"
      }
    }), h("path", {
      attrs: {
        d: "M52.864 21.164c2.381-.146 3.631-1.15 3.631-2.313 0-1.382-1.735-1.876-4.013-2.546-4.528-1.381-8.541-2.952-8.541-7.694C43.94 3.025 48.57 0 54.437 0c2.455 0 5.277.145 7.1.305 1.647.146 1.94.728 1.515 3.157-.427 2.429-1 2.676-2.353 2.56a65.294 65.294 0 0 0-6.424-.262c-3.013.044-3.866 1.047-3.866 2.095 0 1.265 1.176 1.992 3.97 2.705 5.188 1.498 8.599 3.52 8.599 7.942 0 5.193-3.91 8.233-10.158 8.48a47.96 47.96 0 0 1-8.924-.495c-1.984-.29-2.058-.32-1.573-3.156.456-2.575.515-2.764 2.338-2.546 3.528.422 5.807.524 8.203.379"
      }
    }), h("path", {
      attrs: {
        d: "M162.164.16h-16.891c-2.396 0-2.396 0-2.91 2.822-.515 2.822-.442 2.822 1.675 2.822h5.498l-3.058 17.556c-.558 3.433-.514 3.433 2.617 3.433 2.852 0 3.028 0 3.41-2.43l3.235-18.56h5.248c2.367 0 2.367 0 2.867-2.821.485-2.822.485-2.822-1.69-2.822"
      }
    })])]);
  }
};