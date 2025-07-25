import {
  require_react
} from "./chunk-ZFVCUJ6Q.js";
import {
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@mdx-js/react/lib/index.js
var import_react = __toESM(require_react(), 1);
var emptyComponents = {};
var MDXContext = import_react.default.createContext(emptyComponents);
function useMDXComponents(components) {
  const contextComponents = import_react.default.useContext(MDXContext);
  return import_react.default.useMemo(
    function() {
      if (typeof components === "function") {
        return components(contextComponents);
      }
      return { ...contextComponents, ...components };
    },
    [contextComponents, components]
  );
}
function MDXProvider(properties) {
  let allComponents;
  if (properties.disableParentContext) {
    allComponents = typeof properties.components === "function" ? properties.components(emptyComponents) : properties.components || emptyComponents;
  } else {
    allComponents = useMDXComponents(properties.components);
  }
  return import_react.default.createElement(
    MDXContext.Provider,
    { value: allComponents },
    properties.children
  );
}
export {
  MDXProvider,
  useMDXComponents
};
//# sourceMappingURL=@mdx-js_react.js.map
