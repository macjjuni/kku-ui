import {
  renderElement,
  unmountElement
} from "./chunk-KS6JSMCO.js";
import {
  AnchorMdx,
  CodeOrSourceMdx,
  Docs,
  HeadersMdx
} from "./chunk-NQRL3XVZ.js";
import {
  require_react
} from "./chunk-ZFVCUJ6Q.js";
import {
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@19.1.8_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/chunk-GWJYCGSQ.mjs
var import_react = __toESM(require_react(), 1);
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx };
var ErrorBoundary = class extends import_react.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : import_react.default.createElement(import_react.default.Fragment, null, children);
  }
};
var DocsRenderer = class {
  constructor() {
    this.render = async (context, docsParameter, element) => {
      let components = { ...defaultComponents, ...docsParameter == null ? void 0 : docsParameter.components }, TDocs = Docs;
      return new Promise((resolve, reject) => {
        import("./@mdx-js_react.js").then(({ MDXProvider }) => renderElement(import_react.default.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, import_react.default.createElement(MDXProvider, { components }, import_react.default.createElement(TDocs, { context, docsParameter }))), element)).then(() => resolve());
      });
    }, this.unmount = (element) => {
      unmountElement(element);
    };
  }
};

export {
  defaultComponents,
  DocsRenderer
};
//# sourceMappingURL=chunk-QXWS3TTA.js.map
