import "./chunk-ATNKIQLT.js";
import {
  require_core_events
} from "./chunk-63M3JCJZ.js";
import {
  require_global
} from "./chunk-ZRWTPFE7.js";
import {
  require_preview_api
} from "./chunk-PQCDBPLA.js";
import {
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/.pnpm/@storybook+addon-links@9.0.15_react@19.1.0_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-links/dist/preview.mjs
var import_preview_api = __toESM(require_preview_api(), 1);
var import_core_events = __toESM(require_core_events(), 1);
var import_global = __toESM(require_global(), 1);
var PARAM_KEY = "links";
var { document, HTMLElement } = import_global.global;
var navigate = (params) => import_preview_api.addons.getChannel().emit(import_core_events.SELECT_STORY, params);
var linksListener = (e) => {
  let { target } = e;
  if (!(target instanceof HTMLElement)) return;
  let element = target, { sbKind: kind, sbStory: story } = element.dataset;
  (kind || story) && (e.preventDefault(), navigate({ kind, story }));
};
var hasListener = false;
var on = () => {
  hasListener || (hasListener = true, document.addEventListener("click", linksListener));
};
var off = () => {
  hasListener && (hasListener = false, document.removeEventListener("click", linksListener));
};
var withLinks = (0, import_preview_api.makeDecorator)({ name: "withLinks", parameterName: PARAM_KEY, wrapper: (getStory, context) => (on(), import_preview_api.addons.getChannel().once(import_core_events.STORY_CHANGED, off), getStory(context)) });
var decorators = [withLinks];
export {
  decorators
};
//# sourceMappingURL=@storybook_addon-links_preview.js.map
