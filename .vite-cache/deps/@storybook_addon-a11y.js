import {
  __export
} from "./chunk-B54ZZTD6.js";
import {
  require_test
} from "./chunk-YZYJ63WE.js";
import {
  require_preview_errors
} from "./chunk-2JLXYUFI.js";
import {
  require_global
} from "./chunk-ZRWTPFE7.js";
import {
  require_preview_api
} from "./chunk-PQCDBPLA.js";
import {
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/.pnpm/@storybook+addon-a11y@9.0.15_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-a11y/dist/index.mjs
var import_preview_api = __toESM(require_preview_api(), 1);
var import_test = __toESM(require_test(), 1);
var import_preview_errors = __toESM(require_preview_errors(), 1);
var import_global = __toESM(require_global(), 1);
var preview_exports = {};
__export(preview_exports, { afterEach: () => afterEach, initialGlobals: () => initialGlobals, parameters: () => parameters });
var ADDON_ID = "storybook/a11y";
var PANEL_ID = `${ADDON_ID}/panel`;
var PARAM_KEY = "a11y";
var RESULT = `${ADDON_ID}/result`;
var REQUEST = `${ADDON_ID}/request`;
var RUNNING = `${ADDON_ID}/running`;
var ERROR = `${ADDON_ID}/error`;
var MANUAL = `${ADDON_ID}/manual`;
var SELECT = `${ADDON_ID}/select`;
var EVENTS = { RESULT, REQUEST, RUNNING, ERROR, MANUAL, SELECT };
var { document } = import_global.global;
var withLinkPaths = (results, storyId) => {
  let pathname = document.location.pathname.replace(/iframe\.html$/, ""), enhancedResults = { ...results };
  return ["incomplete", "passes", "violations"].forEach((key) => {
    Array.isArray(results[key]) && (enhancedResults[key] = results[key].map((result) => ({ ...result, nodes: result.nodes.map((node, index) => {
      let id = `${key}.${result.id}.${index + 1}`, linkPath = `${pathname}?path=/story/${storyId}&addonPanel=${PANEL_ID}&a11ySelection=${id}`;
      return { id, ...node, linkPath };
    }) })));
  }), enhancedResults;
};
var { document: document2 } = import_global.global;
var channel = import_preview_api.addons.getChannel();
var DEFAULT_PARAMETERS = { config: {}, options: {} };
var DISABLED_RULES = ["region"];
var queue = [];
var isRunning = false;
var runNext = async () => {
  if (queue.length === 0) {
    isRunning = false;
    return;
  }
  isRunning = true;
  let next = queue.shift();
  next && await next(), runNext();
};
var run = async (input = DEFAULT_PARAMETERS, storyId) => {
  var _a;
  let axe = ((_a = await import("./axe-OFYX37RQ.js")) == null ? void 0 : _a.default) || globalThis.axe, { config = {}, options = {} } = input;
  if (input.element) throw new import_preview_errors.ElementA11yParameterError();
  let context = { include: document2 == null ? void 0 : document2.body, exclude: [".sb-wrapper", "#storybook-docs", "#storybook-highlights-root"] };
  if (input.context) {
    let hasInclude = typeof input.context == "object" && "include" in input.context && input.context.include !== void 0, hasExclude = typeof input.context == "object" && "exclude" in input.context && input.context.exclude !== void 0;
    hasInclude ? context.include = input.context.include : !hasInclude && !hasExclude && (context.include = input.context), hasExclude && (context.exclude = context.exclude.concat(input.context.exclude));
  }
  axe.reset();
  let configWithDefault = { ...config, rules: [...DISABLED_RULES.map((id) => ({ id, enabled: false })), ...(config == null ? void 0 : config.rules) ?? []] };
  return axe.configure(configWithDefault), new Promise((resolve, reject) => {
    let highlightsRoot = document2 == null ? void 0 : document2.getElementById("storybook-highlights-root");
    highlightsRoot && (highlightsRoot.style.display = "none");
    let task = async () => {
      try {
        let result = await axe.run(context, options), resultWithLinks = withLinkPaths(result, storyId);
        resolve(resultWithLinks);
      } catch (error) {
        reject(error);
      }
    };
    queue.push(task), isRunning || runNext(), highlightsRoot && (highlightsRoot.style.display = "");
  });
};
channel.on(EVENTS.MANUAL, async (storyId, input = DEFAULT_PARAMETERS) => {
  try {
    await (0, import_preview_api.waitForAnimations)();
    let result = await run(input, storyId), resultJson = JSON.parse(JSON.stringify(result));
    channel.emit(EVENTS.RESULT, resultJson, storyId);
  } catch (error) {
    channel.emit(EVENTS.ERROR, error);
  }
});
function getIsVitestStandaloneRun() {
  try {
    return import.meta.env.VITEST_STORYBOOK === "false";
  } catch {
    return false;
  }
}
var vitestMatchersExtended = false;
var afterEach = async ({ id: storyId, reporting, parameters: parameters2, globals, viewMode }) => {
  let a11yParameter = parameters2.a11y, a11yGlobals = globals.a11y, shouldRunEnvironmentIndependent = (a11yParameter == null ? void 0 : a11yParameter.disable) !== true && (a11yParameter == null ? void 0 : a11yParameter.test) !== "off" && (a11yGlobals == null ? void 0 : a11yGlobals.manual) !== true, getMode = () => {
    switch (a11yParameter == null ? void 0 : a11yParameter.test) {
      case "todo":
        return "warning";
      case "error":
      default:
        return "failed";
    }
  };
  if (shouldRunEnvironmentIndependent && viewMode === "story") try {
    let result = await run(a11yParameter, storyId);
    if (result) {
      let hasViolations = ((result == null ? void 0 : result.violations.length) ?? 0) > 0;
      if (reporting.addReport({ type: "a11y", version: 1, result, status: hasViolations ? getMode() : "passed" }), getIsVitestStandaloneRun() && hasViolations && getMode() === "failed") {
        if (!vitestMatchersExtended) {
          let { toHaveNoViolations } = await import("./matchers-TIWVOQAP-AGD6OJ6K.js");
          import_test.expect.extend({ toHaveNoViolations }), vitestMatchersExtended = true;
        }
        (0, import_test.expect)(result).toHaveNoViolations();
      }
    }
  } catch (e) {
    if (reporting.addReport({ type: "a11y", version: 1, result: { error: e }, status: "failed" }), getIsVitestStandaloneRun()) throw e;
  }
};
var initialGlobals = { a11y: { manual: false } };
var parameters = { a11y: { test: "todo" } };
var index_default = () => (0, import_preview_api.definePreview)(preview_exports);
export {
  PARAM_KEY,
  index_default as default
};
//# sourceMappingURL=@storybook_addon-a11y.js.map
