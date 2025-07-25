import {
  DocsRenderer
} from "./chunk-QXWS3TTA.js";
import "./chunk-KS6JSMCO.js";
import "./chunk-NQRL3XVZ.js";
import {
  __export
} from "./chunk-43ZR6AGK.js";
import "./chunk-CJYZD4FX.js";
import "./chunk-B5YEL2CU.js";
import "./chunk-ATNKIQLT.js";
import "./chunk-63M3JCJZ.js";
import "./chunk-2JLXYUFI.js";
import "./chunk-ZRWTPFE7.js";
import {
  require_preview_api
} from "./chunk-PQCDBPLA.js";
import "./chunk-OBFP3GPX.js";
import "./chunk-TBT5GEO4.js";
import "./chunk-ZFVCUJ6Q.js";
import {
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@19.1.8_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/index.mjs
var import_preview_api = __toESM(require_preview_api(), 1);
var preview_exports = {};
__export(preview_exports, { parameters: () => parameters });
var excludeTags = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {});
var parameters = { docs: { renderer: async () => {
  let { DocsRenderer: DocsRenderer2 } = await import("./DocsRenderer-3PZUHFFL-ROFPUC4Q.js");
  return new DocsRenderer2();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
var index_default = () => (0, import_preview_api.definePreview)(preview_exports);
export {
  DocsRenderer,
  index_default as default
};
//# sourceMappingURL=@storybook_addon-docs.js.map
