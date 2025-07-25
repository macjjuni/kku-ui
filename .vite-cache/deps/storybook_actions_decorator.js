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

// node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/actions/decorator.js
var import_preview_api = __toESM(require_preview_api());
var import_preview_errors = __toESM(require_preview_errors());
var import_global = __toESM(require_global());
var import_preview_api2 = __toESM(require_preview_api());
var D = Object.defineProperty;
var r = (e, n) => D(e, "name", { value: n, configurable: true });
var h = "actions";
var y = "storybook/actions";
var $ = `${y}/panel`;
var g = `${y}/action-event`;
var B = `${y}/action-clear`;
var a = {
  depth: 10,
  clearOnStoryChange: true,
  limit: 50
};
var A = r((e, n) => {
  let t = Object.getPrototypeOf(e);
  return !t || n(t) ? t : A(t, n);
}, "findProto");
var j = r((e) => !!(typeof e == "object" && e && A(e, (n) => /^Synthetic(?:Base)?Event$/.test(n.constructor.name)) && typeof e.persist == "function"), "isReactSyntheticEvent");
var I = r((e) => {
  if (j(e)) {
    let n = Object.create(
      e.constructor.prototype,
      Object.getOwnPropertyDescriptors(e)
    );
    n.persist();
    let t = Object.getOwnPropertyDescriptor(n, "view"), o = t == null ? void 0 : t.value;
    return typeof o == "object" && (o == null ? void 0 : o.constructor.name) === "Window" && Object.defineProperty(n, "view", {
      ...t,
      value: Object.create(o.constructor.prototype)
    }), n;
  }
  return e;
}, "serializeArg");
function O(e, n = {}) {
  let t = {
    ...a,
    ...n
  }, o = r(function(...i) {
    var _a, _b;
    if (n.implicit) {
      let d = (_a = "__STORYBOOK_PREVIEW__" in import_global.global ? import_global.global.__STORYBOOK_PREVIEW__ : void 0) == null ? void 0 : _a.storyRenders.find(
        (c) => c.phase === "playing" || c.phase === "rendering"
      );
      if (d) {
        let c = !((_b = globalThis == null ? void 0 : globalThis.FEATURES) == null ? void 0 : _b.disallowImplicitActionsInRenderV8), u = new import_preview_errors.ImplicitActionsDuringRendering({
          phase: d.phase,
          name: e,
          deprecated: c
        });
        if (c)
          console.warn(u);
        else
          throw u;
      }
    }
    let m = import_preview_api2.addons.getChannel(), p = Date.now().toString(36) + Math.random().toString(36).substring(2), l = 5, f = i.map(I), w = i.length > 1 ? f : f[0], _ = {
      id: p,
      count: 0,
      data: { name: e, args: w },
      options: {
        ...t,
        maxDepth: l + (t.depth || 3)
      }
    };
    m.emit(g, _);
  }, "actionHandler");
  return o.isAction = true, o.implicit = n.implicit, o;
}
r(O, "action");
var b = r((...e) => {
  let n = a, t = e;
  t.length === 1 && Array.isArray(t[0]) && ([t] = t), t.length !== 1 && typeof t[t.length - 1] != "string" && (n = {
    ...a,
    ...t.pop()
  });
  let o = t[0];
  (t.length !== 1 || typeof o == "string") && (o = {}, t.forEach((i) => {
    o[i] = i;
  }));
  let s = {};
  return Object.keys(o).forEach((i) => {
    s[i] = O(o[i], n);
  }), s;
}, "actions");
var T = /^(\S+)\s*(.*)$/;
var k = Element != null && !Element.prototype.matches;
var F = k ? "msMatchesSelector" : "matches";
var v = r(
  (e, n) => {
    if (e[F](n))
      return true;
    let t = e.parentElement;
    return t ? v(t, n) : false;
  },
  "hasMatchInAncestry"
);
var M = r((e, ...n) => {
  let t = e(...n);
  return Object.entries(t).map(([o, s]) => {
    let [i, m, p] = o.match(T) || [];
    return {
      eventName: m,
      handler: r((l) => {
        (!p || v(l.target, p)) && s(l);
      }, "handler")
    };
  });
}, "createHandlers");
var C = r((e, ...n) => {
  let t = typeof globalThis.document < "u" && globalThis.document.getElementById("storybook-root");
  (0, import_preview_api.useEffect)(() => {
    if (t) {
      let o = M(e, ...n);
      return o.forEach(({ eventName: s, handler: i }) => t.addEventListener(s, i)), () => o.forEach(({ eventName: s, handler: i }) => t.removeEventListener(
        s,
        i
      ));
    }
  }, [t, e, n]);
}, "applyEventHandlers");
var rt = (0, import_preview_api.makeDecorator)({
  name: "withActions",
  parameterName: h,
  skipIfNoParametersOrOptions: true,
  wrapper: r((e, n, { parameters: t }) => ((t == null ? void 0 : t.handles) && C(b, ...t.handles), e(n)), "wrapper")
});
export {
  rt as withActions
};
//# sourceMappingURL=storybook_actions_decorator.js.map
