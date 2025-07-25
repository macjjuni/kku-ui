// node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/csf/index.js
var h = Object.create;
var f = Object.defineProperty;
var O = Object.getOwnPropertyDescriptor;
var $ = Object.getOwnPropertyNames;
var v = Object.getPrototypeOf;
var j = Object.prototype.hasOwnProperty;
var a = (e, r) => f(e, "name", { value: r, configurable: true });
var _ = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var C = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let s of $(r))
      !j.call(e, s) && s !== t && f(e, s, { get: () => r[s], enumerable: !(n = O(r, s)) || n.enumerable });
  return e;
};
var E = (e, r, t) => (t = e != null ? h(v(e)) : {}, C(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  r || !e || !e.__esModule ? f(t, "default", { value: e, enumerable: true }) : t,
  e
));
var S = _((g) => {
  Object.defineProperty(g, "__esModule", { value: true }), g.isEqual = /* @__PURE__ */ function() {
    var e = Object.prototype.toString, r = Object.getPrototypeOf, t = Object.getOwnPropertySymbols ? function(n) {
      return Object.keys(n).concat(Object.getOwnPropertySymbols(n));
    } : Object.keys;
    return function(n, s) {
      return a(function l(o, i, p) {
        var c, d, u, A = e.call(o), b = e.call(i);
        if (o === i) return true;
        if (o == null || i == null) return false;
        if (p.indexOf(o) > -1 && p.indexOf(i) > -1) return true;
        if (p.push(o, i), A != b || (c = t(o), d = t(i), c.length != d.length || c.some(function(m) {
          return !l(o[m], i[m], p);
        }))) return false;
        switch (A.slice(8, -1)) {
          case "Symbol":
            return o.valueOf() == i.valueOf();
          case "Date":
          case "Number":
            return +o == +i || +o != +o && +i != +i;
          case "RegExp":
          case "Function":
          case "String":
          case "Boolean":
            return "" + o == "" + i;
          case "Set":
          case "Map":
            c = o.entries(), d = i.entries();
            do
              if (!l((u = c.next()).value, d.next().value, p)) return false;
            while (!u.done);
            return true;
          case "ArrayBuffer":
            o = new Uint8Array(o), i = new Uint8Array(i);
          case "DataView":
            o = new Uint8Array(o.buffer), i = new Uint8Array(i.buffer);
          case "Float32Array":
          case "Float64Array":
          case "Int8Array":
          case "Int16Array":
          case "Int32Array":
          case "Uint8Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Uint8ClampedArray":
          case "Arguments":
          case "Array":
            if (o.length != i.length) return false;
            for (u = 0; u < o.length; u++) if ((u in o || u in i) && (u in o != u in i || !l(o[u], i[u], p))) return false;
            return true;
          case "Object":
            return l(r(o), r(i), p);
          default:
            return false;
        }
      }, "n")(n, s, []);
    };
  }();
});
function x(e) {
  return e.replace(/_/g, " ").replace(/-/g, " ").replace(/\./g, " ").replace(/([^\n])([A-Z])([a-z])/g, (r, t, n, s) => `${t} ${n}${s}`).replace(
    /([a-z])([A-Z])/g,
    (r, t, n) => `${t} ${n}`
  ).replace(/([a-z])([0-9])/gi, (r, t, n) => `${t} ${n}`).replace(/([0-9])([a-z])/gi, (r, t, n) => `${t} ${n}`).replace(/(\s|^)(\w)/g, (r, t, n) => `${t}${n.toUpperCase()}`).replace(/ +/g, " ").trim();
}
a(x, "toStartCaseStr");
var y = E(S(), 1);
var w = a((e) => e.map((r) => typeof r < "u").filter(Boolean).length, "count");
var P = a((e, r) => {
  let { exists: t, eq: n, neq: s, truthy: l } = e;
  if (w([t, n, s, l]) > 1)
    throw new Error(`Invalid conditional test ${JSON.stringify({ exists: t, eq: n, neq: s })}`);
  if (typeof n < "u")
    return (0, y.isEqual)(r, n);
  if (typeof s < "u")
    return !(0, y.isEqual)(r, s);
  if (typeof t < "u") {
    let i = typeof r < "u";
    return t ? i : !i;
  }
  return (typeof l > "u" ? true : l) ? !!r : !r;
}, "testValue");
var z = a((e, r, t) => {
  if (!e.if)
    return true;
  let { arg: n, global: s } = e.if;
  if (w([n, s]) !== 1)
    throw new Error(`Invalid conditional value ${JSON.stringify({ arg: n, global: s })}`);
  let l = n ? r[n] : t[s];
  return P(e.if, l);
}, "includeConditionalArg");
function F(e) {
  return e != null && typeof e == "object" && "_tag" in e && (e == null ? void 0 : e._tag) === "Preview";
}
a(F, "isPreview");
function G(e) {
  return e != null && typeof e == "object" && "_tag" in e && (e == null ? void 0 : e._tag) === "Meta";
}
a(G, "isMeta");
function J(e) {
  return e != null && typeof e == "object" && "_tag" in e && (e == null ? void 0 : e._tag) === "Story";
}
a(J, "isStory");
var I = a((e) => e.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(
  /-+/g,
  "-"
).replace(/^-+/, "").replace(/-+$/, ""), "sanitize");
var R = a((e, r) => {
  let t = I(e);
  if (t === "")
    throw new Error(`Invalid ${r} '${e}', must include alphanumeric characters`);
  return t;
}, "sanitizeSafe");
var W = a((e, r) => `${R(e, "kind")}${r ? `--${R(r, "name")}` : ""}`, "toId");
var H = a((e) => x(
  e
), "storyNameFromExport");
function T(e, r) {
  return Array.isArray(r) ? r.includes(e) : e.match(r);
}
a(T, "matches");
function K(e, { includeStories: r, excludeStories: t }) {
  return (
    // https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs
    e !== "__esModule" && (!r || T(e, r)) && (!t || !T(e, t))
  );
}
a(K, "isExportStory");
var Q = a((e, { rootSeparator: r, groupSeparator: t }) => {
  let [n, s] = e.split(r, 2), l = (s || e).split(t).filter((o) => !!o);
  return {
    root: s ? n : null,
    groups: l
  };
}, "parseKind");
var X = a((...e) => {
  let r = e.reduce((t, n) => (n.startsWith("!") ? t.delete(n.slice(1)) : t.add(n), t), /* @__PURE__ */ new Set());
  return Array.from(r);
}, "combineTags");

export {
  z,
  F,
  G,
  J,
  I,
  W,
  H,
  K,
  Q,
  X
};
//# sourceMappingURL=chunk-ATNKIQLT.js.map
