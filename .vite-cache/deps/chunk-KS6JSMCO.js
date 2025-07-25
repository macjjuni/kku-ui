import {
  require_client
} from "./chunk-OBFP3GPX.js";
import {
  require_react
} from "./chunk-ZFVCUJ6Q.js";
import {
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/.pnpm/@storybook+react-dom-shim@9.0.15_react-dom@19.1.0_react@19.1.0__react@19.1.0_storybook@_adc91d514a45bf94c4011393ad7b9696/node_modules/@storybook/react-dom-shim/dist/react-18.mjs
var React = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_client(), 1);
var nodes = /* @__PURE__ */ new Map();
function getIsReactActEnvironment() {
  return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
var WithCallback = ({ callback, children }) => {
  let once = React.useRef();
  return React.useLayoutEffect(() => {
    once.current !== callback && (once.current = callback, callback());
  }, [callback]), children;
};
typeof Promise.withResolvers > "u" && (Promise.withResolvers = () => {
  let resolve = null, reject = null;
  return { promise: new Promise((res, rej) => {
    resolve = res, reject = rej;
  }), resolve, reject };
});
var renderElement = async (node, el, rootOptions) => {
  let root = await getReactRoot(el, rootOptions);
  if (getIsReactActEnvironment()) {
    root.render(node);
    return;
  }
  let { promise, resolve } = Promise.withResolvers();
  return root.render(React.createElement(WithCallback, { callback: resolve }, node)), promise;
};
var unmountElement = (el, shouldUseNewRootApi) => {
  let root = nodes.get(el);
  root && (root.unmount(), nodes.delete(el));
};
var getReactRoot = async (el, rootOptions) => {
  let root = nodes.get(el);
  return root || (root = ReactDOM.createRoot(el, rootOptions), nodes.set(el, root)), root;
};

export {
  renderElement,
  unmountElement
};
//# sourceMappingURL=chunk-KS6JSMCO.js.map
