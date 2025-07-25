import {
  require_jsx_runtime
} from "./chunk-B5YEL2CU.js";
import {
  I
} from "./chunk-ATNKIQLT.js";
import {
  require_global
} from "./chunk-ZRWTPFE7.js";
import {
  require_react_dom
} from "./chunk-TBT5GEO4.js";
import {
  require_react
} from "./chunk-ZFVCUJ6Q.js";
import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/.cache/sb-vite-plugin-externals/storybook/internal/client-logger.js
var require_client_logger = __commonJS({
  "node_modules/.cache/sb-vite-plugin-externals/storybook/internal/client-logger.js"(exports, module) {
    module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;
  }
});

// node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components/index.js
var import_react3 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var import_react5 = __toESM(require_react());

// node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/theming/index.js
var L = __toESM(require_react());
var import_react = __toESM(require_react());
var Pe = __toESM(require_react());
var j = __toESM(require_react());
var K = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_client_logger = __toESM(require_client_logger());
var import_global = __toESM(require_global());
var import_client_logger2 = __toESM(require_client_logger());
var wn = Object.create;
var or = Object.defineProperty;
var En = Object.getOwnPropertyDescriptor;
var Sn = Object.getOwnPropertyNames;
var Tn = Object.getPrototypeOf;
var Cn = Object.prototype.hasOwnProperty;
var o = (e4, r) => or(e4, "name", { value: r, configurable: true });
var Oe = ((e4) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e4, {
  get: (r, t) => (typeof __require < "u" ? __require : r)[t]
}) : e4)(function(e4) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + e4 + '" is not supported');
});
var De = (e4, r) => () => (r || e4((r = { exports: {} }).exports, r), r.exports);
var On = (e4, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let a of Sn(r))
      !Cn.call(e4, a) && a !== t && or(e4, a, { get: () => r[a], enumerable: !(n = En(r, a)) || n.enumerable });
  return e4;
};
var ir = (e4, r, t) => (t = e4 != null ? wn(Tn(e4)) : {}, On(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  r || !e4 || !e4.__esModule ? or(t, "default", { value: e4, enumerable: true }) : t,
  e4
));
var nt = De((O) => {
  "use strict";
  (function() {
    "use strict";
    var e4 = typeof Symbol == "function" && Symbol.for, r = e4 ? Symbol.for("react.element") : 60103, t = e4 ? Symbol.for("react.portal") : 60106, n = e4 ? Symbol.for("react.fragment") : 60107, a = e4 ? Symbol.for("react.strict_mode") : 60108, i = e4 ? Symbol.for("react.profiler") : 60114, s = e4 ? Symbol.for("react.provider") : 60109, u = e4 ? Symbol.for("react.context") : 60110, f = e4 ? Symbol.for("react.async_mode") : 60111, p = e4 ? Symbol.for("react.concurrent_mode") : 60111, c = e4 ? Symbol.for("react.forward_ref") : 60112, l = e4 ? Symbol.for("react.suspense") : 60113, m = e4 ? Symbol.for("react.suspense_list") : 60120, x = e4 ? Symbol.for("react.memo") : 60115, b = e4 ? Symbol.for("react.lazy") : 60116, d = e4 ? Symbol.for("react.block") : 60121, v = e4 ? Symbol.for("react.fundamental") : 60117, y = e4 ? Symbol.for("react.responder") : 60118, w = e4 ? Symbol.for("react.scope") : 60119;
    function A(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === p || g === i || g === a || g === l || g === m || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === x || g.$$typeof === s || g.$$typeof === u || g.$$typeof === c || g.$$typeof === v || g.$$typeof === y || g.$$typeof === w || g.$$typeof === d);
    }
    o(A, "isValidElementType");
    function S(g) {
      if (typeof g == "object" && g !== null) {
        var ar2 = g.$$typeof;
        switch (ar2) {
          case r:
            var Be2 = g.type;
            switch (Be2) {
              case f:
              case p:
              case n:
              case i:
              case a:
              case l:
                return Be2;
              default:
                var Mr2 = Be2 && Be2.$$typeof;
                switch (Mr2) {
                  case u:
                  case c:
                  case b:
                  case x:
                  case s:
                    return Mr2;
                  default:
                    return ar2;
                }
            }
          case t:
            return ar2;
        }
      }
    }
    o(S, "typeOf");
    var R = f, F = p, T = u, ue = s, fe2 = r, G = c, Y2 = n, rr2 = b, tr2 = x, nr2 = t, on2 = i, sn2 = a, un2 = l, Lr2 = false;
    function fn2(g) {
      return Lr2 || (Lr2 = true, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), zr2(g) || S(g) === f;
    }
    o(fn2, "isAsyncMode");
    function zr2(g) {
      return S(g) === p;
    }
    o(zr2, "isConcurrentMode");
    function cn2(g) {
      return S(g) === u;
    }
    o(cn2, "isContextConsumer");
    function ln2(g) {
      return S(g) === s;
    }
    o(ln2, "isContextProvider");
    function pn2(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    o(pn2, "isElement");
    function dn2(g) {
      return S(g) === c;
    }
    o(dn2, "isForwardRef");
    function mn(g) {
      return S(g) === n;
    }
    o(mn, "isFragment");
    function hn2(g) {
      return S(g) === b;
    }
    o(hn2, "isLazy");
    function gn2(g) {
      return S(g) === x;
    }
    o(gn2, "isMemo");
    function bn2(g) {
      return S(g) === t;
    }
    o(bn2, "isPortal");
    function vn2(g) {
      return S(g) === i;
    }
    o(vn2, "isProfiler");
    function yn2(g) {
      return S(g) === a;
    }
    o(yn2, "isStrictMode");
    function xn2(g) {
      return S(g) === l;
    }
    o(xn2, "isSuspense"), O.AsyncMode = R, O.ConcurrentMode = F, O.ContextConsumer = T, O.ContextProvider = ue, O.Element = fe2, O.ForwardRef = G, O.Fragment = Y2, O.Lazy = rr2, O.Memo = tr2, O.Portal = nr2, O.Profiler = on2, O.StrictMode = sn2, O.Suspense = un2, O.isAsyncMode = fn2, O.isConcurrentMode = zr2, O.isContextConsumer = cn2, O.isContextProvider = ln2, O.isElement = pn2, O.isForwardRef = dn2, O.isFragment = mn, O.isLazy = hn2, O.isMemo = gn2, O.isPortal = bn2, O.isProfiler = vn2, O.isStrictMode = yn2, O.isSuspense = xn2, O.isValidElementType = A, O.typeOf = S;
  })();
});
var ot = De((si2, at2) => {
  "use strict";
  at2.exports = nt();
});
var mr = De((ui2, lt2) => {
  "use strict";
  var pr = ot(), Bn2 = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  }, Dn2 = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  }, $n = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, ft2 = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, dr2 = {};
  dr2[pr.ForwardRef] = $n;
  dr2[pr.Memo] = ft2;
  function it2(e4) {
    return pr.isMemo(e4) ? ft2 : dr2[e4.$$typeof] || Bn2;
  }
  o(it2, "getStatics");
  var jn2 = Object.defineProperty, Hn2 = Object.getOwnPropertyNames, st = Object.getOwnPropertySymbols, Wn2 = Object.getOwnPropertyDescriptor, Un2 = Object.getPrototypeOf, ut2 = Object.prototype;
  function ct2(e4, r, t) {
    if (typeof r != "string") {
      if (ut2) {
        var n = Un2(r);
        n && n !== ut2 && ct2(e4, n, t);
      }
      var a = Hn2(r);
      st && (a = a.concat(st(r)));
      for (var i = it2(e4), s = it2(r), u = 0; u < a.length; ++u) {
        var f = a[u];
        if (!Dn2[f] && !(t && t[f]) && !(s && s[f]) && !(i && i[f])) {
          var p = Wn2(r, f);
          try {
            jn2(e4, f, p);
          } catch {
          }
        }
      }
    }
    return e4;
  }
  o(ct2, "hoistNonReactStatics");
  lt2.exports = ct2;
});
var Gt = De((Vt, Rr2) => {
  (function(e4) {
    if (typeof Vt == "object" && typeof Rr2 < "u")
      Rr2.exports = e4();
    else if (typeof define == "function" && define.amd)
      define([], e4);
    else {
      var r;
      typeof window < "u" ? r = window : typeof global < "u" ? r = global : typeof self < "u" ? r = self : r = this, r.memoizerific = e4();
    }
  })(function() {
    var e4, r, t;
    return o(function n(a, i, s) {
      function u(c, l) {
        if (!i[c]) {
          if (!a[c]) {
            var m = typeof Oe == "function" && Oe;
            if (!l && m) return m(c, true);
            if (f) return f(c, true);
            var x = new Error("Cannot find module '" + c + "'");
            throw x.code = "MODULE_NOT_FOUND", x;
          }
          var b = i[c] = { exports: {} };
          a[c][0].call(b.exports, function(d) {
            var v = a[c][1][d];
            return u(v || d);
          }, b, b.exports, n, a, i, s);
        }
        return i[c].exports;
      }
      o(u, "s");
      for (var f = typeof Oe == "function" && Oe, p = 0; p < s.length; p++) u(s[p]);
      return u;
    }, "e")({ 1: [function(n, a, i) {
      a.exports = function(s) {
        if (typeof Map != "function" || s) {
          var u = n("./similar");
          return new u();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(n, a, i) {
      function s() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      o(s, "Similar"), s.prototype.get = function(u) {
        var f;
        if (this.lastItem && this.isEqual(this.lastItem.key, u))
          return this.lastItem.val;
        if (f = this.indexOf(u), f >= 0)
          return this.lastItem = this.list[f], this.list[f].val;
      }, s.prototype.set = function(u, f) {
        var p;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? (this.lastItem.val = f, this) : (p = this.indexOf(u), p >= 0 ? (this.lastItem = this.list[p], this.list[p].val = f, this) : (this.lastItem = { key: u, val: f }, this.list.push(this.lastItem), this.size++, this));
      }, s.prototype.delete = function(u) {
        var f;
        if (this.lastItem && this.isEqual(this.lastItem.key, u) && (this.lastItem = void 0), f = this.indexOf(u), f >= 0)
          return this.size--, this.list.splice(f, 1)[0];
      }, s.prototype.has = function(u) {
        var f;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? true : (f = this.indexOf(u), f >= 0 ? (this.lastItem = this.list[f], true) : false);
      }, s.prototype.forEach = function(u, f) {
        var p;
        for (p = 0; p < this.size; p++)
          u.call(f || this, this.list[p].val, this.list[p].key, this);
      }, s.prototype.indexOf = function(u) {
        var f;
        for (f = 0; f < this.size; f++)
          if (this.isEqual(this.list[f].key, u))
            return f;
        return -1;
      }, s.prototype.isEqual = function(u, f) {
        return u === f || u !== u && f !== f;
      }, a.exports = s;
    }, {}], 3: [function(n, a, i) {
      var s = n("map-or-similar");
      a.exports = function(c) {
        var l = new s(false), m = [];
        return function(x) {
          var b = o(function() {
            var d = l, v, y, w = arguments.length - 1, A = Array(w + 1), S = true, R;
            if ((b.numArgs || b.numArgs === 0) && b.numArgs !== w + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (R = 0; R < w; R++) {
              if (A[R] = {
                cacheItem: d,
                arg: arguments[R]
              }, d.has(arguments[R])) {
                d = d.get(arguments[R]);
                continue;
              }
              S = false, v = new s(false), d.set(arguments[R], v), d = v;
            }
            return S && (d.has(arguments[w]) ? y = d.get(arguments[w]) : S = false), S || (y = x.apply(null, arguments), d.set(arguments[w], y)), c > 0 && (A[w] = {
              cacheItem: d,
              arg: arguments[w]
            }, S ? u(m, A) : m.push(A), m.length > c && f(m.shift())), b.wasMemoized = S, b.numArgs = w + 1, y;
          }, "memoizerific");
          return b.limit = c, b.wasMemoized = false, b.cache = l, b.lru = m, b;
        };
      };
      function u(c, l) {
        var m = c.length, x = l.length, b, d, v;
        for (d = 0; d < m; d++) {
          for (b = true, v = 0; v < x; v++)
            if (!p(c[d][v].arg, l[v].arg)) {
              b = false;
              break;
            }
          if (b)
            break;
        }
        c.push(c.splice(d, 1)[0]);
      }
      o(u, "moveToMostRecentLru");
      function f(c) {
        var l = c.length, m = c[l - 1], x, b;
        for (m.cacheItem.delete(m.arg), b = l - 2; b >= 0 && (m = c[b], x = m.cacheItem.get(m.arg), !x || !x.size); b--)
          m.cacheItem.delete(m.arg);
      }
      o(f, "removeCachedResult");
      function p(c, l) {
        return c === l || c !== c && l !== l;
      }
      o(p, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});
function I2() {
  return I2 = Object.assign ? Object.assign.bind() : function(e4) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e4[n] = t[n]);
    }
    return e4;
  }, I2.apply(null, arguments);
}
o(I2, "_extends");
var Rn = false;
function An(e4) {
  if (e4.sheet)
    return e4.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e4)
      return document.styleSheets[r];
}
o(An, "sheetForTag");
function Fn(e4) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e4.key), e4.nonce !== void 0 && r.setAttribute("nonce", e4.nonce), r.appendChild(document.createTextNode(
    ""
  )), r.setAttribute("data-s", ""), r;
}
o(Fn, "createStyleElement");
var kr = function() {
  function e4(t) {
    var n = this;
    this._insertTag = function(a) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, i), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? !Rn : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  o(e4, "StyleSheet");
  var r = e4.prototype;
  return r.hydrate = o(function(n) {
    n.forEach(this._insertTag);
  }, "hydrate"), r.insert = o(function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Fn(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = An(a);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, "insert"), r.flush = o(function() {
    this.tags.forEach(function(n) {
      var a;
      return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, "flush"), e4;
}();
var z = "-ms-";
var Re = "-moz-";
var C = "-webkit-";
var $e = "comm";
var ce = "rule";
var le = "decl";
var Nr = "@import";
var je = "@keyframes";
var Br = "@layer";
var Dr = Math.abs;
var ee = String.fromCharCode;
var $r = Object.assign;
function jr(e4, r) {
  return _(e4, 0) ^ 45 ? (((r << 2 ^ _(e4, 0)) << 2 ^ _(e4, 1)) << 2 ^ _(e4, 2)) << 2 ^ _(e4, 3) : 0;
}
o(jr, "hash");
function He(e4) {
  return e4.trim();
}
o(He, "trim");
function sr(e4, r) {
  return (e4 = r.exec(e4)) ? e4[0] : e4;
}
o(sr, "match");
function E(e4, r, t) {
  return e4.replace(r, t);
}
o(E, "replace");
function Ae(e4, r) {
  return e4.indexOf(r);
}
o(Ae, "indexof");
function _(e4, r) {
  return e4.charCodeAt(r) | 0;
}
o(_, "charat");
function q(e4, r, t) {
  return e4.slice(r, t);
}
o(q, "substr");
function M(e4) {
  return e4.length;
}
o(M, "strlen");
function pe(e4) {
  return e4.length;
}
o(pe, "sizeof");
function de(e4, r) {
  return r.push(e4), e4;
}
o(de, "append");
function ur(e4, r) {
  return e4.map(r).join("");
}
o(ur, "combine");
var We = 1;
var me = 1;
var Hr = 0;
var k = 0;
var P = 0;
var ge = "";
function Fe(e4, r, t, n, a, i, s) {
  return { value: e4, root: r, parent: t, type: n, props: a, children: i, line: We, column: me, length: s, return: "" };
}
o(Fe, "node");
function be(e4, r) {
  return $r(Fe("", null, null, "", null, null, 0), e4, { length: -e4.length }, r);
}
o(be, "copy");
function Wr() {
  return P;
}
o(Wr, "char");
function Ur() {
  return P = k > 0 ? _(ge, --k) : 0, me--, P === 10 && (me = 1, We--), P;
}
o(Ur, "prev");
function N() {
  return P = k < Hr ? _(ge, k++) : 0, me++, P === 10 && (me = 1, We++), P;
}
o(N, "next");
function $() {
  return _(ge, k);
}
o($, "peek");
function _e() {
  return k;
}
o(_e, "caret");
function ve(e4, r) {
  return q(ge, e4, r);
}
o(ve, "slice");
function he(e4) {
  switch (e4) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
o(he, "token");
function Ue(e4) {
  return We = me = 1, Hr = M(ge = e4), k = 0, [];
}
o(Ue, "alloc");
function Ve(e4) {
  return ge = "", e4;
}
o(Ve, "dealloc");
function ye(e4) {
  return He(ve(k - 1, fr(e4 === 91 ? e4 + 2 : e4 === 40 ? e4 + 1 : e4)));
}
o(ye, "delimit");
function Vr(e4) {
  for (; (P = $()) && P < 33; )
    N();
  return he(e4) > 2 || he(P) > 3 ? "" : " ";
}
o(Vr, "whitespace");
function Gr(e4, r) {
  for (; --r && N() && !(P < 48 || P > 102 || P > 57 && P < 65 || P > 70 && P < 97); )
    ;
  return ve(e4, _e() + (r < 6 && $() == 32 && N() == 32));
}
o(Gr, "escaping");
function fr(e4) {
  for (; N(); )
    switch (P) {
      // ] ) " '
      case e4:
        return k;
      // " '
      case 34:
      case 39:
        e4 !== 34 && e4 !== 39 && fr(P);
        break;
      // (
      case 40:
        e4 === 41 && fr(e4);
        break;
      // \
      case 92:
        N();
        break;
    }
  return k;
}
o(fr, "delimiter");
function Yr(e4, r) {
  for (; N() && e4 + P !== 57; )
    if (e4 + P === 84 && $() === 47)
      break;
  return "/*" + ve(r, k - 1) + "*" + ee(e4 === 47 ? e4 : N());
}
o(Yr, "commenter");
function qr(e4) {
  for (; !he($()); )
    N();
  return ve(e4, k);
}
o(qr, "identifier");
function Xr(e4) {
  return Ve(Ge("", null, null, null, [""], e4 = Ue(e4), 0, [0], e4));
}
o(Xr, "compile");
function Ge(e4, r, t, n, a, i, s, u, f) {
  for (var p = 0, c = 0, l = s, m = 0, x = 0, b = 0, d = 1, v = 1, y = 1, w = 0, A = "", S = a, R = i, F = n, T = A; v; )
    switch (b = w, w = N()) {
      // (
      case 40:
        if (b != 108 && _(T, l - 1) == 58) {
          Ae(T += E(ye(w), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        T += ye(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        T += Vr(b);
        break;
      // \
      case 92:
        T += Gr(_e() - 1, 7);
        continue;
      // /
      case 47:
        switch ($()) {
          case 42:
          case 47:
            de(_n(Yr(N(), _e()), r, t), f);
            break;
          default:
            T += "/";
        }
        break;
      // {
      case 123 * d:
        u[p++] = M(T) * y;
      // } ; \0
      case 125 * d:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + c:
            y == -1 && (T = E(T, /\f/g, "")), x > 0 && M(T) - l && de(
              x > 32 ? Kr(T + ";", n, t, l - 1) : Kr(E(T, " ", "") + ";", n, t, l - 2),
              f
            );
            break;
          // @ ;
          case 59:
            T += ";";
          // { rule/at-rule
          default:
            if (de(F = Jr(T, r, t, p, c, a, u, A, S = [], R = [], l), i), w === 123)
              if (c === 0)
                Ge(T, r, F, F, S, i, l, u, R);
              else
                switch (m === 99 && _(T, 3) === 110 ? 100 : m) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ge(e4, F, F, n && de(Jr(e4, F, F, 0, 0, a, u, A, a, S = [], l), R), a, R, l, u, n ? S : R);
                    break;
                  default:
                    Ge(T, F, F, F, [""], R, 0, u, R);
                }
        }
        p = c = x = 0, d = y = 1, A = T = "", l = s;
        break;
      // :
      case 58:
        l = 1 + M(T), x = b;
      default:
        if (d < 1) {
          if (w == 123)
            --d;
          else if (w == 125 && d++ == 0 && Ur() == 125)
            continue;
        }
        switch (T += ee(w), w * d) {
          // &
          case 38:
            y = c > 0 ? 1 : (T += "\f", -1);
            break;
          // ,
          case 44:
            u[p++] = (M(T) - 1) * y, y = 1;
            break;
          // @
          case 64:
            $() === 45 && (T += ye(N())), m = $(), c = l = M(A = T += qr(_e())), w++;
            break;
          // -
          case 45:
            b === 45 && M(T) == 2 && (d = 0);
        }
    }
  return i;
}
o(Ge, "parse");
function Jr(e4, r, t, n, a, i, s, u, f, p, c) {
  for (var l = a - 1, m = a === 0 ? i : [""], x = pe(m), b = 0, d = 0, v = 0; b < n; ++b)
    for (var y = 0, w = q(e4, l + 1, l = Dr(d = s[b])), A = e4; y < x; ++y)
      (A = He(d > 0 ? m[y] + " " + w : E(w, /&\f/g, m[y]))) && (f[v++] = A);
  return Fe(e4, r, t, a === 0 ? ce : u, f, p, c);
}
o(Jr, "ruleset");
function _n(e4, r, t) {
  return Fe(e4, r, t, $e, ee(Wr()), q(e4, 2, -2), 0);
}
o(_n, "comment");
function Kr(e4, r, t, n) {
  return Fe(e4, r, t, le, q(e4, 0, n), q(e4, n + 1, -1), n);
}
o(Kr, "declaration");
function re(e4, r) {
  for (var t = "", n = pe(e4), a = 0; a < n; a++)
    t += r(e4[a], a, e4, r) || "";
  return t;
}
o(re, "serialize");
function Zr(e4, r, t, n) {
  switch (e4.type) {
    case Br:
      if (e4.children.length) break;
    case Nr:
    case le:
      return e4.return = e4.return || e4.value;
    case $e:
      return "";
    case je:
      return e4.return = e4.value + "{" + re(e4.children, n) + "}";
    case ce:
      e4.value = e4.props.join(",");
  }
  return M(t = re(e4.children, n)) ? e4.return = e4.value + "{" + t + "}" : "";
}
o(Zr, "stringify");
function Qr(e4) {
  var r = pe(e4);
  return function(t, n, a, i) {
    for (var s = "", u = 0; u < r; u++)
      s += e4[u](t, n, a, i) || "";
    return s;
  };
}
o(Qr, "middleware");
function et(e4) {
  return function(r) {
    r.root || (r = r.return) && e4(r);
  };
}
o(et, "rulesheet");
var cr = o(function(r) {
  var t = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (t.has(n))
      return t.get(n);
    var a = r(n);
    return t.set(n, a), a;
  };
}, "weakMemoize");
function Ye(e4) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e4(t)), r[t];
  };
}
o(Ye, "memoize");
var In = o(function(r, t, n) {
  for (var a = 0, i = 0; a = i, i = $(), a === 38 && i === 12 && (t[n] = 1), !he(i); )
    N();
  return ve(r, k);
}, "identifierWithPointTracking");
var Pn = o(function(r, t) {
  var n = -1, a = 44;
  do
    switch (he(a)) {
      case 0:
        a === 38 && $() === 12 && (t[n] = 1), r[n] += In(k - 1, t, n);
        break;
      case 2:
        r[n] += ye(a);
        break;
      case 4:
        if (a === 44) {
          r[++n] = $() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      // fallthrough
      default:
        r[n] += ee(a);
    }
  while (a = N());
  return r;
}, "toRules");
var Ln = o(function(r, t) {
  return Ve(Pn(Ue(r), t));
}, "getRules");
var rt = /* @__PURE__ */ new WeakMap();
var zn = o(function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, a = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !rt.get(n)) && !a) {
      rt.set(r, true);
      for (var i = [], s = Ln(t, i), u = n.props, f = 0, p = 0; f < s.length; f++)
        for (var c = 0; c < u.length; c++, p++)
          r.props[p] = i[f] ? s[f].replace(/&\f/g, u[c]) : u[c] + " " + s[f];
    }
  }
}, "compat");
var Mn = o(function(r) {
  if (r.type === "decl") {
    var t = r.value;
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, "removeLabel");
function tt(e4, r) {
  switch (jr(e4, r)) {
    // color-adjust
    case 5103:
      return C + "print-" + e4 + e4;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return C + e4 + e4;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return C + e4 + Re + e4 + z + e4 + e4;
    // flex, flex-direction
    case 6828:
    case 4268:
      return C + e4 + z + e4 + e4;
    // order
    case 6165:
      return C + e4 + z + "flex-" + e4 + e4;
    // align-items
    case 5187:
      return C + e4 + E(e4, /(\w+).+(:[^]+)/, C + "box-$1$2" + z + "flex-$1$2") + e4;
    // align-self
    case 5443:
      return C + e4 + z + "flex-item-" + E(e4, /flex-|-self/, "") + e4;
    // align-content
    case 4675:
      return C + e4 + z + "flex-line-pack" + E(e4, /align-content|flex-|-self/, "") + e4;
    // flex-shrink
    case 5548:
      return C + e4 + z + E(e4, "shrink", "negative") + e4;
    // flex-basis
    case 5292:
      return C + e4 + z + E(e4, "basis", "preferred-size") + e4;
    // flex-grow
    case 6060:
      return C + "box-" + E(e4, "-grow", "") + C + e4 + z + E(e4, "grow", "positive") + e4;
    // transition
    case 4554:
      return C + E(e4, /([^-])(transform)/g, "$1" + C + "$2") + e4;
    // cursor
    case 6187:
      return E(E(E(e4, /(zoom-|grab)/, C + "$1"), /(image-set)/, C + "$1"), e4, "") + e4;
    // background, background-image
    case 5495:
    case 3959:
      return E(e4, /(image-set\([^]*)/, C + "$1$`$1");
    // justify-content
    case 4968:
      return E(E(e4, /(.+:)(flex-)?(.*)/, C + "box-pack:$3" + z + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + C + e4 + e4;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(e4, /(.+)-inline(.+)/, C + "$1$2") + e4;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (M(e4) - 1 - r > 6) switch (_(e4, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (_(e4, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return E(e4, /(.+:)(.+)-([^]+)/, "$1" + C + "$2-$3$1" + Re + (_(e4, r + 3) == 108 ? "$3" : "$2-$3")) + e4;
        // (s)tretch
        case 115:
          return ~Ae(e4, "stretch") ? tt(E(e4, "stretch", "fill-available"), r) + e4 : e4;
      }
      break;
    // position: sticky
    case 4949:
      if (_(e4, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (_(e4, M(e4) - 3 - (~Ae(e4, "!important") && 10))) {
        // stic(k)y
        case 107:
          return E(e4, ":", ":" + C) + e4;
        // (inline-)?fl(e)x
        case 101:
          return E(e4, /(.+:)([^;!]+)(;|!.+)?/, "$1" + C + (_(e4, 14) === 45 ? "inline-" : "") + "box$3$1" + C + "$2$3$1" + z + "$2box$3") + e4;
      }
      break;
    // writing-mode
    case 5936:
      switch (_(e4, r + 11)) {
        // vertical-l(r)
        case 114:
          return C + e4 + z + E(e4, /[svh]\w+-[tblr]{2}/, "tb") + e4;
        // vertical-r(l)
        case 108:
          return C + e4 + z + E(e4, /[svh]\w+-[tblr]{2}/, "tb-rl") + e4;
        // horizontal(-)tb
        case 45:
          return C + e4 + z + E(e4, /[svh]\w+-[tblr]{2}/, "lr") + e4;
      }
      return C + e4 + z + e4 + e4;
  }
  return e4;
}
o(tt, "prefix");
var kn = o(function(r, t, n, a) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case le:
      r.return = tt(r.value, r.length);
      break;
    case je:
      return re([be(r, {
        value: E(r.value, "@", "@" + C)
      })], a);
    case ce:
      if (r.length) return ur(r.props, function(i) {
        switch (sr(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return re([be(r, {
              props: [E(i, /:(read-\w+)/, ":" + Re + "$1")]
            })], a);
          // :placeholder
          case "::placeholder":
            return re([be(r, {
              props: [E(i, /:(plac\w+)/, ":" + C + "input-$1")]
            }), be(r, {
              props: [E(i, /:(plac\w+)/, ":" + Re + "$1")]
            }), be(r, {
              props: [E(i, /:(plac\w+)/, z + "input-$1")]
            })], a);
        }
        return "";
      });
  }
}, "prefixer");
var Nn = [kn];
var lr = o(function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(d) {
      var v = d.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || Nn, i = {}, s, u = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(d) {
      for (var v = d.getAttribute("data-emotion").split(" "), y = 1; y < v.length; y++)
        i[v[y]] = true;
      u.push(d);
    }
  );
  var f, p = [zn, Mn];
  {
    var c, l = [Zr, et(function(d) {
      c.insert(d);
    })], m = Qr(p.concat(a, l)), x = o(function(v) {
      return re(Xr(v), m);
    }, "stylis");
    f = o(function(v, y, w, A) {
      c = w, x(v ? v + "{" + y.styles + "}" : y.styles), A && (b.inserted[y.name] = true);
    }, "insert");
  }
  var b = {
    key: t,
    sheet: new kr({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: f
  };
  return b.sheet.hydrate(u), b;
}, "createCache");
var pt = ir(mr());
var dt = o(function(e4, r) {
  return (0, pt.default)(e4, r);
}, "hoistNonReactStatics");
var Vn = true;
function xe(e4, r, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    e4[a] !== void 0 ? r.push(e4[a] + ";") : a && (n += a + " ");
  }), n;
}
o(xe, "getRegisteredStyles");
var te = o(function(r, t, n) {
  var a = r.key + "-" + t.name;
  (n === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Vn === false) && r.registered[a] === void 0 && (r.registered[a] = t.styles);
}, "registerStyles");
var ne = o(function(r, t, n) {
  te(r, t, n);
  var a = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + a : "", i, r.sheet, true), i = i.next;
    while (i !== void 0);
  }
}, "insertStyles");
function mt(e4) {
  for (var r = 0, t, n = 0, a = e4.length; a >= 4; ++n, a -= 4)
    t = e4.charCodeAt(n) & 255 | (e4.charCodeAt(++n) & 255) << 8 | (e4.charCodeAt(++n) & 255) << 16 | (e4.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e4.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e4.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e4.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
o(mt, "murmur2");
var ht = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var Gn = false;
var Yn = /[A-Z]|^ms/g;
var qn = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var yt = o(function(r) {
  return r.charCodeAt(1) === 45;
}, "isCustomProperty");
var gt = o(function(r) {
  return r != null && typeof r != "boolean";
}, "isProcessableValue");
var hr = Ye(function(e4) {
  return yt(e4) ? e4 : e4.replace(Yn, "-$&").toLowerCase();
});
var bt = o(function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(qn, function(n, a, i) {
          return U = {
            name: a,
            styles: i,
            next: U
          }, a;
        });
  }
  return ht[r] !== 1 && !yt(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, "processStyleValue");
var Jn = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ie(e4, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var a = t;
      if (a.anim === 1)
        return U = {
          name: a.name,
          styles: a.styles,
          next: U
        }, a.name;
      var i = t;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            U = {
              name: s.name,
              styles: s.styles,
              next: U
            }, s = s.next;
        var u = i.styles + ";";
        return u;
      }
      return Kn(e4, r, t);
    }
    case "function": {
      if (e4 !== void 0) {
        var f = U, p = t(e4);
        return U = f, Ie(e4, r, p);
      }
      break;
    }
  }
  var c = t;
  if (r == null)
    return c;
  var l = r[c];
  return l !== void 0 ? l : c;
}
o(Ie, "handleInterpolation");
function Kn(e4, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += Ie(e4, r, t[a]) + ";";
  else
    for (var i in t) {
      var s = t[i];
      if (typeof s != "object") {
        var u = s;
        r != null && r[u] !== void 0 ? n += i + "{" + r[u] + "}" : gt(u) && (n += hr(i) + ":" + bt(i, u) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Gn)
          throw new Error(Jn);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var f = 0; f < s.length; f++)
            gt(s[f]) && (n += hr(i) + ":" + bt(i, s[f]) + ";");
        else {
          var p = Ie(e4, r, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += hr(i) + ":" + p + ";";
              break;
            }
            default:
              n += i + "{" + p + "}";
          }
        }
      }
    }
  return n;
}
o(Kn, "createStringFromObject");
var vt = /label:\s*([^\s;{]+)\s*(;|$)/g;
var U;
function J(e4, r, t) {
  if (e4.length === 1 && typeof e4[0] == "object" && e4[0] !== null && e4[0].styles !== void 0)
    return e4[0];
  var n = true, a = "";
  U = void 0;
  var i = e4[0];
  if (i == null || i.raw === void 0)
    n = false, a += Ie(t, r, i);
  else {
    var s = i;
    a += s[0];
  }
  for (var u = 1; u < e4.length; u++)
    if (a += Ie(t, r, e4[u]), n) {
      var f = i;
      a += f[u];
    }
  vt.lastIndex = 0;
  for (var p = "", c; (c = vt.exec(a)) !== null; )
    p += "-" + c[1];
  var l = mt(a) + p;
  return {
    name: l,
    styles: a,
    next: U
  };
}
o(J, "serializeStyles");
var Xn = o(function(r) {
  return r();
}, "syncFallback");
var xt = Pe.useInsertionEffect ? Pe.useInsertionEffect : false;
var we = xt || Xn;
var gr = xt || Pe.useLayoutEffect;
var qe = false;
var wt = L.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? lr({
    key: "css"
  }) : null
);
var Et = wt.Provider;
var ae = o(function(r) {
  return (0, import_react.forwardRef)(function(t, n) {
    var a = (0, import_react.useContext)(wt);
    return r(t, a, n);
  });
}, "withEmotionCache");
var H = L.createContext({});
var St = o(function() {
  return L.useContext(H);
}, "useTheme");
var ea = o(function(r, t) {
  if (typeof t == "function") {
    var n = t(r);
    return n;
  }
  return I2({}, r, t);
}, "getTheme");
var ra = cr(function(e4) {
  return cr(function(r) {
    return ea(e4, r);
  });
});
var Tt = o(function(r) {
  var t = L.useContext(H);
  return r.theme !== t && (t = ra(t)(r.theme)), L.createElement(H.Provider, {
    value: t
  }, r.children);
}, "ThemeProvider");
function Ct(e4) {
  var r = e4.displayName || e4.name || "Component", t = L.forwardRef(o(function(a, i) {
    var s = L.useContext(H);
    return L.createElement(e4, I2({
      theme: s,
      ref: i
    }, a));
  }, "render"));
  return t.displayName = "WithTheme(" + r + ")", dt(t, e4);
}
o(Ct, "withTheme");
var Je = {}.hasOwnProperty;
var br = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var Ot = o(function(r, t) {
  var n = {};
  for (var a in t)
    Je.call(t, a) && (n[a] = t[a]);
  return n[br] = r, n;
}, "createEmotionProps");
var ta = o(function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return te(t, n, a), we(function() {
    return ne(t, n, a);
  }), null;
}, "Insertion");
var na = ae(function(e4, r, t) {
  var n = e4.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var a = e4[br], i = [n], s = "";
  typeof e4.className == "string" ? s = xe(r.registered, i, e4.className) : e4.className != null && (s = e4.className + " ");
  var u = J(i, void 0, L.useContext(H));
  s += r.key + "-" + u.name;
  var f = {};
  for (var p in e4)
    Je.call(e4, p) && p !== "css" && p !== br && !qe && (f[p] = e4[p]);
  return f.className = s, t && (f.ref = t), L.createElement(L.Fragment, null, L.createElement(ta, {
    cache: r,
    serialized: u,
    isStringTag: typeof a == "string"
  }), L.createElement(a, f));
});
var Rt = na;
var Hi = ir(mr());
var vr = o(function(r, t) {
  var n = arguments;
  if (t == null || !Je.call(t, "css"))
    return j.createElement.apply(void 0, n);
  var a = n.length, i = new Array(a);
  i[0] = Rt, i[1] = Ot(r, t);
  for (var s = 2; s < a; s++)
    i[s] = n[s];
  return j.createElement.apply(null, i);
}, "jsx");
(function(e4) {
  var r;
  r || (r = e4.JSX || (e4.JSX = {}));
})(vr || (vr = {}));
var aa = ae(function(e4, r) {
  var t = e4.styles, n = J([t], void 0, j.useContext(H)), a = j.useRef();
  return gr(function() {
    var i = r.key + "-global", s = new r.sheet.constructor({
      key: i,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), u = false, f = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return r.sheet.tags.length && (s.before = r.sheet.tags[0]), f !== null && (u = true, f.setAttribute("data-emotion", i), s.hydrate([f])), a.current = [s, u], function() {
      s.flush();
    };
  }, [r]), gr(function() {
    var i = a.current, s = i[0], u = i[1];
    if (u) {
      i[1] = false;
      return;
    }
    if (n.next !== void 0 && ne(r, n.next, true), s.tags.length) {
      var f = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = f, s.flush();
    }
    r.insert("", n, s, false);
  }, [r, n.name]), null;
});
function Le() {
  for (var e4 = arguments.length, r = new Array(e4), t = 0; t < e4; t++)
    r[t] = arguments[t];
  return J(r);
}
o(Le, "css");
function Ee() {
  var e4 = Le.apply(void 0, arguments), r = "animation-" + e4.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + e4.styles + "}",
    anim: 1,
    toString: o(function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }, "toString")
  };
}
o(Ee, "keyframes");
var oa = o(function e(r) {
  for (var t = r.length, n = 0, a = ""; n < t; n++) {
    var i = r[n];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            s = "";
            for (var u in i)
              i[u] && u && (s && (s += " "), s += u);
          }
          break;
        }
        default:
          s = i;
      }
      s && (a && (a += " "), a += s);
    }
  }
  return a;
}, "classnames");
function ia(e4, r, t) {
  var n = [], a = xe(e4, n, t);
  return n.length < 2 ? t : a + r(n);
}
o(ia, "merge");
var sa = o(function(r) {
  var t = r.cache, n = r.serializedArr;
  return we(function() {
    for (var a = 0; a < n.length; a++)
      ne(t, n[a], false);
  }), null;
}, "Insertion");
var ua = ae(function(e4, r) {
  var t = false, n = [], a = o(function() {
    if (t && qe)
      throw new Error("css can only be used during render");
    for (var p = arguments.length, c = new Array(p), l = 0; l < p; l++)
      c[l] = arguments[l];
    var m = J(c, r.registered);
    return n.push(m), te(r, m, false), r.key + "-" + m.name;
  }, "css"), i = o(function() {
    if (t && qe)
      throw new Error("cx can only be used during render");
    for (var p = arguments.length, c = new Array(p), l = 0; l < p; l++)
      c[l] = arguments[l];
    return ia(r.registered, a, oa(c));
  }, "cx"), s = {
    css: a,
    cx: i,
    theme: j.useContext(H)
  }, u = e4.children(s);
  return t = true, j.createElement(j.Fragment, null, j.createElement(sa, {
    cache: r,
    serializedArr: n
  }), u);
});
var fa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var yr = Ye(
  function(e4) {
    return fa.test(e4) || e4.charCodeAt(0) === 111 && e4.charCodeAt(1) === 110 && e4.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
var ca = false;
var la = yr;
var pa = o(function(r) {
  return r !== "theme";
}, "testOmitPropsOnComponent");
var At = o(function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? la : pa;
}, "getDefaultShouldForwardProp");
var Ft = o(function(r, t, n) {
  var a;
  if (t) {
    var i = t.shouldForwardProp;
    a = r.__emotion_forwardProp && i ? function(s) {
      return r.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof a != "function" && n && (a = r.__emotion_forwardProp), a;
}, "composeShouldForwardProps");
var da = o(function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return te(t, n, a), we(function() {
    return ne(t, n, a);
  }), null;
}, "Insertion");
var _t = o(function e2(r, t) {
  var n = r.__emotion_real === r, a = n && r.__emotion_base || r, i, s;
  t !== void 0 && (i = t.label, s = t.target);
  var u = Ft(r, t, n), f = u || At(a), p = !f("as");
  return function() {
    var c = arguments, l = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && l.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      l.push.apply(l, c);
    else {
      var m = c[0];
      l.push(m[0]);
      for (var x = c.length, b = 1; b < x; b++)
        l.push(c[b], m[b]);
    }
    var d = ae(function(v, y, w) {
      var A = p && v.as || a, S = "", R = [], F = v;
      if (v.theme == null) {
        F = {};
        for (var T in v)
          F[T] = v[T];
        F.theme = K.useContext(H);
      }
      typeof v.className == "string" ? S = xe(y.registered, R, v.className) : v.className != null && (S = v.className + " ");
      var ue = J(l.concat(R), y.registered, F);
      S += y.key + "-" + ue.name, s !== void 0 && (S += " " + s);
      var fe2 = p && u === void 0 ? At(A) : f, G = {};
      for (var Y2 in v)
        p && Y2 === "as" || fe2(Y2) && (G[Y2] = v[Y2]);
      return G.className = S, w && (G.ref = w), K.createElement(K.Fragment, null, K.createElement(da, {
        cache: y,
        serialized: ue,
        isStringTag: typeof A == "string"
      }), K.createElement(A, G));
    });
    return d.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", d.defaultProps = r.defaultProps, d.__emotion_real = d, d.__emotion_base = a, d.__emotion_styles = l, d.__emotion_forwardProp = u, Object.defineProperty(
      d,
      "toString",
      {
        value: o(function() {
          return s === void 0 && ca ? "NO_COMPONENT_SELECTOR" : "." + s;
        }, "value")
      }
    ), d.withComponent = function(v, y) {
      var w = e2(v, I2({}, t, y, {
        shouldForwardProp: Ft(d, y, true)
      }));
      return w.apply(void 0, l);
    }, d;
  };
}, "createStyled");
var ma = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var xr = _t.bind(null);
ma.forEach(function(e4) {
  xr[e4] = xr(e4);
});
function It(e4) {
  if (e4 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e4;
}
o(It, "_assertThisInitialized");
function X(e4, r) {
  return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, X(e4, r);
}
o(X, "_setPrototypeOf");
function Pt(e4, r) {
  e4.prototype = Object.create(r.prototype), e4.prototype.constructor = e4, X(e4, r);
}
o(Pt, "_inheritsLoose");
function Ke(e4) {
  return Ke = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ke(e4);
}
o(Ke, "_getPrototypeOf");
function Lt(e4) {
  try {
    return Function.toString.call(e4).indexOf("[native code]") !== -1;
  } catch {
    return typeof e4 == "function";
  }
}
o(Lt, "_isNativeFunction");
function wr() {
  try {
    var e4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wr = o(function() {
    return !!e4;
  }, "_isNativeReflectConstruct"))();
}
o(wr, "_isNativeReflectConstruct");
function zt(e4, r, t) {
  if (wr()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var a = new (e4.bind.apply(e4, n))();
  return t && X(a, t.prototype), a;
}
o(zt, "_construct");
function Xe(e4) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Xe = o(function(n) {
    if (n === null || !Lt(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(n)) return r.get(n);
      r.set(n, a);
    }
    function a() {
      return zt(n, arguments, Ke(this).constructor);
    }
    return o(a, "Wrapper"), a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), X(a, n);
  }, "_wrapNativeSuper"), Xe(e4);
}
o(Xe, "_wrapNativeSuper");
var ha = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function ga() {
  for (var e4 = arguments.length, r = new Array(e4), t = 0; t < e4; t++)
    r[t] = arguments[t];
  var n = r[0], a = [], i;
  for (i = 1; i < r.length; i += 1)
    a.push(r[i]);
  return a.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
o(ga, "format");
var B = function(e4) {
  Pt(r, e4);
  function r(t) {
    for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
      i[s - 1] = arguments[s];
    return n = e4.call(this, ga.apply(void 0, [ha[t]].concat(i))) || this, It(n);
  }
  return o(r, "PolishedError"), r;
}(Xe(Error));
function Mt(e4, r) {
  return e4.substr(-r.length) === r;
}
o(Mt, "endsWith");
var ba = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
function kt(e4) {
  if (typeof e4 != "string") return e4;
  var r = e4.match(ba);
  return r ? parseFloat(e4) : e4;
}
o(kt, "stripUnit");
var va = o(function(r) {
  return function(t, n) {
    n === void 0 && (n = "16px");
    var a = t, i = n;
    if (typeof t == "string") {
      if (!Mt(t, "px"))
        throw new B(69, r, t);
      a = kt(t);
    }
    if (typeof n == "string") {
      if (!Mt(n, "px"))
        throw new B(70, r, n);
      i = kt(n);
    }
    if (typeof a == "string")
      throw new B(71, t, r);
    if (typeof i == "string")
      throw new B(72, n, r);
    return "" + a / i + r;
  };
}, "pxtoFactory");
var Bt = va;
var js = Bt("em");
var Hs = Bt("rem");
function Er(e4) {
  return Math.round(e4 * 255);
}
o(Er, "colorToInt");
function ya(e4, r, t) {
  return Er(e4) + "," + Er(r) + "," + Er(t);
}
o(ya, "convertToInt");
function ze(e4, r, t, n) {
  if (n === void 0 && (n = ya), r === 0)
    return n(t, t, t);
  var a = (e4 % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * t - 1)) * r, s = i * (1 - Math.abs(a % 2 - 1)), u = 0, f = 0, p = 0;
  a >= 0 && a < 1 ? (u = i, f = s) : a >= 1 && a < 2 ? (u = s, f = i) : a >= 2 && a < 3 ? (f = i, p = s) : a >= 3 && a < 4 ? (f = s, p = i) : a >= 4 && a < 5 ? (u = s, p = i) : a >= 5 && a < 6 && (u = i, p = s);
  var c = t - i / 2, l = u + c, m = f + c, x = p + c;
  return n(l, m, x);
}
o(ze, "hslToRgb");
var Nt = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function xa(e4) {
  if (typeof e4 != "string") return e4;
  var r = e4.toLowerCase();
  return Nt[r] ? "#" + Nt[r] : e4;
}
o(xa, "nameToHex");
var wa = /^#[a-fA-F0-9]{6}$/;
var Ea = /^#[a-fA-F0-9]{8}$/;
var Sa = /^#[a-fA-F0-9]{3}$/;
var Ta = /^#[a-fA-F0-9]{4}$/;
var Sr = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var Ca = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var Oa = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var Ra = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Se(e4) {
  if (typeof e4 != "string")
    throw new B(3);
  var r = xa(e4);
  if (r.match(wa))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(Ea)) {
    var t = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: t
    };
  }
  if (r.match(Sa))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(Ta)) {
    var n = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: n
    };
  }
  var a = Sr.exec(r);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10)
    };
  var i = Ca.exec(r.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4])
    };
  var s = Oa.exec(r);
  if (s) {
    var u = parseInt("" + s[1], 10), f = parseInt("" + s[2], 10) / 100, p = parseInt("" + s[3], 10) / 100, c = "rgb(" + ze(u, f, p) + ")", l = Sr.exec(c);
    if (!l)
      throw new B(4, r, c);
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10)
    };
  }
  var m = Ra.exec(r.substring(0, 50));
  if (m) {
    var x = parseInt("" + m[1], 10), b = parseInt("" + m[2], 10) / 100, d = parseInt("" + m[3], 10) / 100, v = "rgb(" + ze(x, b, d) + ")", y = Sr.exec(v);
    if (!y)
      throw new B(4, r, v);
    return {
      red: parseInt("" + y[1], 10),
      green: parseInt("" + y[2], 10),
      blue: parseInt("" + y[3], 10),
      alpha: parseFloat("" + m[4]) > 1 ? parseFloat("" + m[4]) / 100 : parseFloat("" + m[4])
    };
  }
  throw new B(5);
}
o(Se, "parseToRgb");
function Aa(e4) {
  var r = e4.red / 255, t = e4.green / 255, n = e4.blue / 255, a = Math.max(r, t, n), i = Math.min(r, t, n), s = (a + i) / 2;
  if (a === i)
    return e4.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: s,
      alpha: e4.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: s
    };
  var u, f = a - i, p = s > 0.5 ? f / (2 - a - i) : f / (a + i);
  switch (a) {
    case r:
      u = (t - n) / f + (t < n ? 6 : 0);
      break;
    case t:
      u = (n - r) / f + 2;
      break;
    default:
      u = (r - t) / f + 4;
      break;
  }
  return u *= 60, e4.alpha !== void 0 ? {
    hue: u,
    saturation: p,
    lightness: s,
    alpha: e4.alpha
  } : {
    hue: u,
    saturation: p,
    lightness: s
  };
}
o(Aa, "rgbToHsl");
function Z(e4) {
  return Aa(Se(e4));
}
o(Z, "parseToHsl");
var Fa = o(function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, "reduceHexValue");
var Cr = Fa;
function oe(e4) {
  var r = e4.toString(16);
  return r.length === 1 ? "0" + r : r;
}
o(oe, "numberToHex");
function Tr(e4) {
  return oe(Math.round(e4 * 255));
}
o(Tr, "colorToHex");
function _a(e4, r, t) {
  return Cr("#" + Tr(e4) + Tr(r) + Tr(t));
}
o(_a, "convertToHex");
function Ze(e4, r, t) {
  return ze(e4, r, t, _a);
}
o(Ze, "hslToHex");
function Ia(e4, r, t) {
  if (typeof e4 == "number" && typeof r == "number" && typeof t == "number")
    return Ze(e4, r, t);
  if (typeof e4 == "object" && r === void 0 && t === void 0)
    return Ze(e4.hue, e4.saturation, e4.lightness);
  throw new B(1);
}
o(Ia, "hsl");
function Pa(e4, r, t, n) {
  if (typeof e4 == "number" && typeof r == "number" && typeof t == "number" && typeof n == "number")
    return n >= 1 ? Ze(e4, r, t) : "rgba(" + ze(e4, r, t) + "," + n + ")";
  if (typeof e4 == "object" && r === void 0 && t === void 0 && n === void 0)
    return e4.alpha >= 1 ? Ze(e4.hue, e4.saturation, e4.lightness) : "rgba(" + ze(e4.hue, e4.saturation, e4.lightness) + "," + e4.alpha + ")";
  throw new B(2);
}
o(Pa, "hsla");
function Or(e4, r, t) {
  if (typeof e4 == "number" && typeof r == "number" && typeof t == "number")
    return Cr("#" + oe(e4) + oe(r) + oe(t));
  if (typeof e4 == "object" && r === void 0 && t === void 0)
    return Cr("#" + oe(e4.red) + oe(e4.green) + oe(e4.blue));
  throw new B(6);
}
o(Or, "rgb");
function ie(e4, r, t, n) {
  if (typeof e4 == "string" && typeof r == "number") {
    var a = Se(e4);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + r + ")";
  } else {
    if (typeof e4 == "number" && typeof r == "number" && typeof t == "number" && typeof n == "number")
      return n >= 1 ? Or(e4, r, t) : "rgba(" + e4 + "," + r + "," + t + "," + n + ")";
    if (typeof e4 == "object" && r === void 0 && t === void 0 && n === void 0)
      return e4.alpha >= 1 ? Or(e4.red, e4.green, e4.blue) : "rgba(" + e4.red + "," + e4.green + "," + e4.blue + "," + e4.alpha + ")";
  }
  throw new B(7);
}
o(ie, "rgba");
var La = o(function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, "isRgb");
var za = o(function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && typeof r.alpha == "number";
}, "isRgba");
var Ma = o(function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, "isHsl");
var ka = o(function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && typeof r.alpha == "number";
}, "isHsla");
function Q(e4) {
  if (typeof e4 != "object") throw new B(8);
  if (za(e4)) return ie(e4);
  if (La(e4)) return Or(e4);
  if (ka(e4)) return Pa(e4);
  if (Ma(e4)) return Ia(e4);
  throw new B(8);
}
o(Q, "toColorString");
function Dt(e4, r, t) {
  return o(function() {
    var a = t.concat(Array.prototype.slice.call(arguments));
    return a.length >= r ? e4.apply(this, a) : Dt(e4, r, a);
  }, "fn");
}
o(Dt, "curried");
function D(e4) {
  return Dt(e4, e4.length, []);
}
o(D, "curry");
function Na(e4, r) {
  if (r === "transparent") return r;
  var t = Z(r);
  return Q(I2({}, t, {
    hue: t.hue + parseFloat(e4)
  }));
}
o(Na, "adjustHue");
var Ws = D(Na);
function Te(e4, r, t) {
  return Math.max(e4, Math.min(r, t));
}
o(Te, "guard");
function Ba(e4, r) {
  if (r === "transparent") return r;
  var t = Z(r);
  return Q(I2({}, t, {
    lightness: Te(0, 1, t.lightness - parseFloat(e4))
  }));
}
o(Ba, "darken");
var Da = D(Ba);
var $t = Da;
function $a(e4, r) {
  if (r === "transparent") return r;
  var t = Z(r);
  return Q(I2({}, t, {
    saturation: Te(0, 1, t.saturation - parseFloat(e4))
  }));
}
o($a, "desaturate");
var Us = D($a);
function ja(e4, r) {
  if (r === "transparent") return r;
  var t = Z(r);
  return Q(I2({}, t, {
    lightness: Te(0, 1, t.lightness + parseFloat(e4))
  }));
}
o(ja, "lighten");
var Ha = D(ja);
var jt = Ha;
function Wa(e4, r, t) {
  if (r === "transparent") return t;
  if (t === "transparent") return r;
  if (e4 === 0) return t;
  var n = Se(r), a = I2({}, n, {
    alpha: typeof n.alpha == "number" ? n.alpha : 1
  }), i = Se(t), s = I2({}, i, {
    alpha: typeof i.alpha == "number" ? i.alpha : 1
  }), u = a.alpha - s.alpha, f = parseFloat(e4) * 2 - 1, p = f * u === -1 ? f : f + u, c = 1 + f * u, l = (p / c + 1) / 2, m = 1 - l, x = {
    red: Math.floor(a.red * l + s.red * m),
    green: Math.floor(a.green * l + s.green * m),
    blue: Math.floor(a.blue * l + s.blue * m),
    alpha: a.alpha * parseFloat(e4) + s.alpha * (1 - parseFloat(e4))
  };
  return ie(x);
}
o(Wa, "mix");
var Ua = D(Wa);
var Ht = Ua;
function Va(e4, r) {
  if (r === "transparent") return r;
  var t = Se(r), n = typeof t.alpha == "number" ? t.alpha : 1, a = I2({}, t, {
    alpha: Te(0, 1, (n * 100 + parseFloat(e4) * 100) / 100)
  });
  return ie(a);
}
o(Va, "opacify");
var Ga = D(Va);
var Wt = Ga;
function Ya(e4, r) {
  if (r === "transparent") return r;
  var t = Z(r);
  return Q(I2({}, t, {
    saturation: Te(0, 1, t.saturation + parseFloat(e4))
  }));
}
o(Ya, "saturate");
var Vs = D(Ya);
function qa(e4, r) {
  return r === "transparent" ? r : Q(I2({}, Z(r), {
    hue: parseFloat(e4)
  }));
}
o(qa, "setHue");
var Gs = D(qa);
function Ja(e4, r) {
  return r === "transparent" ? r : Q(I2({}, Z(r), {
    lightness: parseFloat(e4)
  }));
}
o(Ja, "setLightness");
var Ys = D(Ja);
function Ka(e4, r) {
  return r === "transparent" ? r : Q(I2({}, Z(r), {
    saturation: parseFloat(e4)
  }));
}
o(Ka, "setSaturation");
var qs = D(Ka);
function Xa(e4, r) {
  return r === "transparent" ? r : Ht(parseFloat(e4), "rgb(0, 0, 0)", r);
}
o(Xa, "shade");
var Js = D(Xa);
function Za(e4, r) {
  return r === "transparent" ? r : Ht(parseFloat(e4), "rgb(255, 255, 255)", r);
}
o(Za, "tint");
var Ks = D(Za);
function Qa(e4, r) {
  if (r === "transparent") return r;
  var t = Se(r), n = typeof t.alpha == "number" ? t.alpha : 1, a = I2({}, t, {
    alpha: Te(0, 1, +(n * 100 - parseFloat(e4) * 100).toFixed(2) / 100)
  });
  return ie(a);
}
o(Qa, "transparentize");
var eo = D(Qa);
var Ut = eo;
var h = {
  // Official color palette
  primary: "#FF4785",
  // coral
  secondary: "#029CFD",
  // ocean
  tertiary: "#FAFBFC",
  ancillary: "#22a699",
  // Complimentary
  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seafoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",
  // Monochrome
  lightest: "#FFFFFF",
  lighter: "#F7FAFC",
  light: "#EEF3F6",
  mediumlight: "#ECF4F9",
  medium: "#D9E8F2",
  mediumdark: "#73828C",
  dark: "#5C6870",
  darker: "#454E54",
  darkest: "#2E3438",
  // For borders
  border: "hsla(203, 50%, 30%, 0.15)",
  // Status
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
  critical: "#FFFFFF",
  // Text
  defaultText: "#2E3438",
  inverseText: "#FFFFFF",
  positiveText: "#448028",
  negativeText: "#D43900",
  warningText: "#A15C20"
};
var V = {
  app: "#F6F9FC",
  bar: h.lightest,
  content: h.lightest,
  preview: h.lightest,
  gridCellSize: 10,
  hoverable: Ut(0.9, h.secondary),
  // hover state for items in a list
  // Notification, error, and warning backgrounds
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
  critical: "#FF4400"
};
var W = {
  fonts: {
    base: [
      '"Nunito Sans"',
      "-apple-system",
      '".SFNSText-Regular"',
      '"San Francisco"',
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(", "),
    mono: [
      "ui-monospace",
      "Menlo",
      "Monaco",
      '"Roboto Mono"',
      '"Oxygen Mono"',
      '"Ubuntu Monospace"',
      '"Source Code Pro"',
      '"Droid Sans Mono"',
      '"Courier New"',
      "monospace"
    ].join(", ")
  },
  weight: {
    regular: 400,
    bold: 700
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90
  }
};
var Ar = ir(Gt(), 1);
var Yt = (0, Ar.default)(1)(
  ({ typography: e4 }) => ({
    body: {
      fontFamily: e4.fonts.base,
      fontSize: e4.size.s3,
      margin: 0,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitOverflowScrolling: "touch"
    },
    "*": {
      boxSizing: "border-box"
    },
    "h1, h2, h3, h4, h5, h6": {
      fontWeight: e4.weight.regular,
      margin: 0,
      padding: 0
    },
    "button, input, textarea, select": {
      fontFamily: "inherit",
      fontSize: "inherit",
      boxSizing: "border-box"
    },
    sub: {
      fontSize: "0.8em",
      bottom: "-0.2em"
    },
    sup: {
      fontSize: "0.8em",
      top: "-0.2em"
    },
    "b, strong": {
      fontWeight: e4.weight.bold
    },
    hr: {
      border: "none",
      borderTop: "1px solid silver",
      clear: "both",
      marginBottom: "1.25rem"
    },
    code: {
      fontFamily: e4.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      display: "inline-block",
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: "baseline",
      color: "inherit"
    },
    pre: {
      fontFamily: e4.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      lineHeight: "18px",
      padding: "11px 1rem",
      whiteSpace: "pre-wrap",
      color: "inherit",
      borderRadius: 3,
      margin: "1rem 0"
    }
  })
);
var ro = (0, Ar.default)(1)(({
  color: e4,
  background: r,
  typography: t
}) => {
  let n = Yt({ typography: t });
  return {
    ...n,
    body: {
      ...n.body,
      color: e4.defaultText,
      background: r.app,
      overflow: "hidden"
    },
    hr: {
      ...n.hr,
      borderTop: `1px solid ${e4.border}`
    },
    ".sb-sr-only, .sb-hidden-until-focus:not(:focus)": {
      position: "absolute",
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      border: 0
    },
    ".sb-hidden-until-focus": {
      opacity: 0,
      transition: "opacity 150ms ease-out"
    },
    ".sb-hidden-until-focus:focus": {
      opacity: 1
    }
  };
});
var to = {
  base: "dark",
  // Storybook-specific color palette
  colorPrimary: "#FF4785",
  // coral
  colorSecondary: "#029CFD",
  // ocean
  // UI
  appBg: "#222425",
  appContentBg: "#1B1C1D",
  appPreviewBg: h.lightest,
  appBorderColor: "rgba(255,255,255,.1)",
  appBorderRadius: 4,
  // Fonts
  fontBase: W.fonts.base,
  fontCode: W.fonts.mono,
  // Text colors
  textColor: "#C9CDCF",
  textInverseColor: "#222425",
  textMutedColor: "#798186",
  // Toolbar default and active colors
  barTextColor: h.mediumdark,
  barHoverColor: h.secondary,
  barSelectedColor: h.secondary,
  barBg: "#292C2E",
  // Form colors
  buttonBg: "#222425",
  buttonBorder: "rgba(255,255,255,.1)",
  booleanBg: "#222425",
  booleanSelectedBg: "#2E3438",
  inputBg: "#1B1C1D",
  inputBorder: "rgba(255,255,255,.1)",
  inputTextColor: h.lightest,
  inputBorderRadius: 4
};
var qt = to;
var no = {
  base: "light",
  // Storybook-specific color palette
  colorPrimary: "#FF4785",
  // coral
  colorSecondary: "#029CFD",
  // ocean
  // UI
  appBg: V.app,
  appContentBg: h.lightest,
  appPreviewBg: h.lightest,
  appBorderColor: h.border,
  appBorderRadius: 4,
  // Fonts
  fontBase: W.fonts.base,
  fontCode: W.fonts.mono,
  // Text colors
  textColor: h.darkest,
  textInverseColor: h.lightest,
  textMutedColor: h.dark,
  // Toolbar default and active colors
  barTextColor: h.mediumdark,
  barHoverColor: h.secondary,
  barSelectedColor: h.secondary,
  barBg: h.lightest,
  // Form colors
  buttonBg: V.app,
  buttonBorder: h.medium,
  booleanBg: h.mediumlight,
  booleanSelectedBg: h.lightest,
  inputBg: h.lightest,
  inputBorder: h.border,
  inputTextColor: h.darkest,
  inputBorderRadius: 4
};
var Ce = no;
var { window: Fr } = import_global.global;
var Jt = o((e4) => ({ color: e4 }), "mkColor");
var io = o((e4) => typeof e4 != "string" ? (import_client_logger.logger.warn(
  `Color passed to theme object should be a string. Instead ${e4}(${typeof e4}) was passed.`
), false) : true, "isColorString");
var so = o((e4) => !/(gradient|var|calc)/.test(e4), "isValidColorForPolished");
var uo = o(
  (e4, r) => e4 === "darken" ? ie(`${$t(1, r)}`, 0.95) : e4 === "lighten" ? ie(`${jt(1, r)}`, 0.95) : r,
  "applyPolished"
);
var Kt = o(
  (e4) => (r) => {
    if (!io(r) || !so(r))
      return r;
    try {
      return uo(e4, r);
    } catch {
      return r;
    }
  },
  "colorFactory"
);
var fo = Kt("lighten");
var co = Kt("darken");
var Qe = o(() => !Fr || !Fr.matchMedia ? "light" : Fr.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", "getPreferredColorScheme");
var Me = {
  light: Ce,
  dark: qt,
  normal: Ce
};
var _r = Qe();
var hu = o((e4 = { base: _r }, r) => {
  let t = {
    ...Me[_r],
    ...Me[e4.base] || {},
    ...e4,
    base: Me[e4.base] ? e4.base : _r
  };
  return {
    ...r,
    ...t,
    barSelectedColor: e4.barSelectedColor || t.colorSecondary
  };
}, "create");
var Xt = {
  rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)"
};
var lo = Ee`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
var Zt = Ee`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;
var po = Ee`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`;
var mo = Ee`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`;
var ho = Le`
  animation: ${Zt} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`;
var go = Le`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`;
var Qt = {
  rotate360: lo,
  glow: Zt,
  float: po,
  jiggle: mo,
  inlineGlow: ho,
  hoverable: go
};
var en = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
  BASE_COLOR: "rgb(213, 213, 213)",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
  OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
  HTML_TAG_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
  HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "rgb(145, 145, 145)",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
  TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
  TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
  TABLE_SORT_ICON_COLOR: "black",
  // 'rgb(48, 57, 66)',
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
};
var rn = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "white",
  BASE_COLOR: "black",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
  OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
  HTML_TAG_COLOR: "rgb(168, 148, 166)",
  HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
  HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "#6e6e6e",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "#aaa",
  TABLE_TH_BACKGROUND_COLOR: "#eee",
  TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
  TABLE_SORT_ICON_COLOR: "#6e6e6e",
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
};
var bo = o((e4) => Object.entries(e4).reduce((r, [t, n]) => ({ ...r, [t]: Jt(n) }), {}), "convertColors");
var tn = o(
  ({ colors: e4, mono: r }) => {
    let t = bo(e4);
    return {
      token: {
        fontFamily: r,
        WebkitFontSmoothing: "antialiased",
        "&.tag": t.red3,
        "&.comment": { ...t.green1, fontStyle: "italic" },
        "&.prolog": { ...t.green1, fontStyle: "italic" },
        "&.doctype": { ...t.green1, fontStyle: "italic" },
        "&.cdata": { ...t.green1, fontStyle: "italic" },
        "&.string": t.red1,
        "&.url": t.cyan1,
        "&.symbol": t.cyan1,
        "&.number": t.cyan1,
        "&.boolean": t.cyan1,
        "&.variable": t.cyan1,
        "&.constant": t.cyan1,
        "&.inserted": t.cyan1,
        "&.atrule": t.blue1,
        "&.keyword": t.blue1,
        "&.attr-value": t.blue1,
        "&.punctuation": t.gray1,
        "&.operator": t.gray1,
        "&.function": t.gray1,
        "&.deleted": t.red2,
        "&.important": {
          fontWeight: "bold"
        },
        "&.bold": {
          fontWeight: "bold"
        },
        "&.italic": {
          fontStyle: "italic"
        },
        "&.class-name": t.cyan2,
        "&.selector": t.red3,
        "&.attr-name": t.red4,
        "&.property": t.red4,
        "&.regex": t.red4,
        "&.entity": t.red4,
        "&.directive.tag .tag": {
          background: "#ffff00",
          ...t.gray1
        }
      },
      "language-json .token.boolean": t.blue1,
      "language-json .token.number": t.blue1,
      "language-json .token.property": t.cyan2,
      namespace: {
        opacity: 0.7
      }
    };
  },
  "create"
);
var vo = {
  green1: "#008000",
  red1: "#A31515",
  red2: "#9a050f",
  red3: "#800000",
  red4: "#ff0000",
  gray1: "#393A34",
  cyan1: "#36acaa",
  cyan2: "#2B91AF",
  blue1: "#0000ff",
  blue2: "#00009f"
};
var yo = {
  green1: "#7C7C7C",
  red1: "#92C379",
  red2: "#9a050f",
  red3: "#A8FF60",
  red4: "#96CBFE",
  gray1: "#EDEDED",
  cyan1: "#C6C5FE",
  cyan2: "#FFFFB6",
  blue1: "#B474DD",
  blue2: "#00009f"
};
var xo = o((e4) => ({
  // Changeable colors
  primary: e4.colorPrimary,
  secondary: e4.colorSecondary,
  tertiary: h.tertiary,
  ancillary: h.ancillary,
  // Complimentary
  orange: h.orange,
  gold: h.gold,
  green: h.green,
  seafoam: h.seafoam,
  purple: h.purple,
  ultraviolet: h.ultraviolet,
  // Monochrome
  lightest: h.lightest,
  lighter: h.lighter,
  light: h.light,
  mediumlight: h.mediumlight,
  medium: h.medium,
  mediumdark: h.mediumdark,
  dark: h.dark,
  darker: h.darker,
  darkest: h.darkest,
  // For borders
  border: h.border,
  // Status
  positive: h.positive,
  negative: h.negative,
  warning: h.warning,
  critical: h.critical,
  defaultText: e4.textColor || h.darkest,
  inverseText: e4.textInverseColor || h.lightest,
  positiveText: h.positiveText,
  negativeText: h.negativeText,
  warningText: h.warningText
}), "createColors");
var Ir = o((e4 = Me[Qe()]) => {
  let {
    base: r,
    colorPrimary: t,
    colorSecondary: n,
    appBg: a,
    appContentBg: i,
    appPreviewBg: s,
    appBorderColor: u,
    appBorderRadius: f,
    fontBase: p,
    fontCode: c,
    textColor: l,
    textInverseColor: m,
    barTextColor: x,
    barHoverColor: b,
    barSelectedColor: d,
    barBg: v,
    buttonBg: y,
    buttonBorder: w,
    booleanBg: A,
    booleanSelectedBg: S,
    inputBg: R,
    inputBorder: F,
    inputTextColor: T,
    inputBorderRadius: ue,
    brandTitle: fe2,
    brandUrl: G,
    brandImage: Y2,
    brandTarget: rr2,
    gridCellSize: tr2,
    ...nr2
  } = e4;
  return {
    ...nr2,
    base: r,
    color: xo(e4),
    background: {
      app: a,
      bar: v,
      content: i,
      preview: s,
      gridCellSize: tr2 || V.gridCellSize,
      hoverable: V.hoverable,
      positive: V.positive,
      negative: V.negative,
      warning: V.warning,
      critical: V.critical
    },
    typography: {
      fonts: {
        base: p,
        mono: c
      },
      weight: W.weight,
      size: W.size
    },
    animation: Qt,
    easing: Xt,
    input: {
      background: R,
      border: F,
      borderRadius: ue,
      color: T
    },
    button: {
      background: y || R,
      border: w || F
    },
    boolean: {
      background: A || F,
      selectedBackground: S || R
    },
    // UI
    layoutMargin: 10,
    appBorderColor: u,
    appBorderRadius: f,
    // Toolbar default/active colors
    barTextColor: x,
    barHoverColor: b || n,
    barSelectedColor: d || n,
    barBg: v,
    // Brand logo/text
    brand: {
      title: fe2,
      url: G,
      image: Y2 || (fe2 ? null : void 0),
      target: rr2
    },
    code: tn({
      colors: r === "light" ? vo : yo,
      mono: c
    }),
    // Addon actions theme
    // API example https://github.com/storybookjs/react-inspector/blob/master/src/styles/themes/chromeLight.tsx
    addonActionsTheme: {
      ...r === "light" ? rn : en,
      BASE_FONT_FAMILY: c,
      BASE_FONT_SIZE: W.size.s2 - 1,
      BASE_LINE_HEIGHT: "18px",
      BASE_BACKGROUND_COLOR: "transparent",
      BASE_COLOR: l,
      ARROW_COLOR: Wt(0.2, u),
      ARROW_MARGIN_RIGHT: 4,
      ARROW_FONT_SIZE: 8,
      TREENODE_FONT_FAMILY: c,
      TREENODE_FONT_SIZE: W.size.s2 - 1,
      TREENODE_LINE_HEIGHT: "18px",
      TREENODE_PADDING_LEFT: 12
    }
  };
}, "convert");
var Pr = o((e4) => Object.keys(e4).length === 0, "isEmpty");
var se = o((e4) => e4 != null && typeof e4 == "object", "isObject");
var ke = o((e4, ...r) => Object.prototype.hasOwnProperty.call(e4, ...r), "hasOwnProperty");
var Ne = o(() => /* @__PURE__ */ Object.create(null), "makeObjectWithoutPrototype");
var nn = o((e4, r) => e4 === r || !se(e4) || !se(r) ? {} : Object.keys(e4).reduce((t, n) => {
  if (ke(r, n)) {
    let a = nn(e4[n], r[n]);
    return se(a) && Pr(a) || (t[n] = a), t;
  }
  return t[n] = void 0, t;
}, Ne()), "deletedDiff");
var er = nn;
function an(e4) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  var n = Array.from(typeof e4 == "string" ? [e4] : e4);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var a = n.reduce(function(u, f) {
    var p = f.match(/\n([\t ]+|(?!\s).)/g);
    return p ? u.concat(p.map(function(c) {
      var l, m;
      return (m = (l = c.match(/[\t ]/g)) === null || l === void 0 ? void 0 : l.length) !== null && m !== void 0 ? m : 0;
    })) : u;
  }, []);
  if (a.length) {
    var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, a) + "}", "g");
    n = n.map(function(u) {
      return u.replace(i, `
`);
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var s = n[0];
  return r.forEach(function(u, f) {
    var p = s.match(/(?:^|\n)( *)$/), c = p ? p[1] : "", l = u;
    typeof u == "string" && u.includes(`
`) && (l = String(u).split(`
`).map(function(m, x) {
      return x === 0 ? m : "" + c + m;
    }).join(`
`)), s += l + n[f + 1];
  }), s;
}
o(an, "dedent");
var pf = o((e4) => {
  if (!e4)
    return Ir(Ce);
  let r = er(Ce, e4);
  return Object.keys(r).length && import_client_logger2.logger.warn(
    an`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
    r
  ), Ir(e4);
}, "ensure");
var hf = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";

// node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/components/index.js
var e5 = __toESM(require_react());
var he2 = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var r5 = __toESM(require_react());
var zm = __toESM(require_react_dom());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var o5 = __toESM(require_react());
var Ae2 = __toESM(require_react());
var a5 = __toESM(require_react_dom());
var i5 = __toESM(require_react());
var lt = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var wr2 = __toESM(require_react());
var Gn2 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var I3 = __toESM(require_react());
var v5 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_react6 = __toESM(require_react());
var import_react7 = __toESM(require_react());
var import_client_logger3 = __toESM(require_client_logger());
var import_global2 = __toESM(require_global());
var xo2 = __toESM(require_react());
var Ht2 = __toESM(require_react());
var Hd = __toESM(require_react_dom());
var $2 = __toESM(require_react());
var import_react8 = __toESM(require_react());
var import_react9 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var import_global3 = __toESM(require_global());
var import_react10 = __toESM(require_react());
var import_react11 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react13 = __toESM(require_react());
var import_react14 = __toESM(require_react());
var import_react15 = __toESM(require_react());
var Xe2 = __toESM(require_react());
var import_react16 = __toESM(require_react());
var import_react17 = __toESM(require_react());
var q2 = __toESM(require_react());
var ou = __toESM(require_react());
var $e2 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var Ei = __toESM(require_react());
var cu = __toESM(require_react());
var Ve2 = __toESM(require_react());
var no2 = __toESM(require_react());
var Q2 = __toESM(require_react());
var du = __toESM(require_react());
var pu = __toESM(require_react_dom());
var ie2 = __toESM(require_react());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var Sr2 = __toESM(require_react());
var hu2 = __toESM(require_react());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var je2 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var ao2 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var Ie2 = __toESM(require_react());
var Lu = __toESM(require_react());
var Iu = __toESM(require_react());
var po2 = __toESM(require_react());
var be2 = __toESM(require_react());
var import_react18 = __toESM(require_react());
var so2 = __toESM(require_react());
var ku = __toESM(require_react());
var Y = __toESM(require_react());
var Mr = __toESM(require_react());
var Du = __toESM(require_react());
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var import_react19 = __toESM(require_react());
var import_react20 = __toESM(require_react());
var import_react21 = __toESM(require_react());
var import_react22 = __toESM(require_react());
var import_react23 = __toESM(require_react());
var import_react24 = __toESM(require_react());
var import_react25 = __toESM(require_react());
var import_react26 = __toESM(require_react());
var import_react27 = __toESM(require_react());
var import_global4 = __toESM(require_global());
var import_react28 = __toESM(require_react());
var import_react29 = __toESM(require_react());
var import_react30 = __toESM(require_react());
var Ke2 = __toESM(require_react());
var import_react31 = __toESM(require_react());
var import_react32 = __toESM(require_react());
var import_react33 = __toESM(require_react());
var import_react34 = __toESM(require_react());
var import_react35 = __toESM(require_react());
var import_react36 = __toESM(require_react());
var import_react37 = __toESM(require_react());
var import_react38 = __toESM(require_react());
var import_react39 = __toESM(require_react());
var import_react40 = __toESM(require_react());
var import_react41 = __toESM(require_react());
var import_react42 = __toESM(require_react());
var import_react43 = __toESM(require_react());
var import_react44 = __toESM(require_react());
var import_react45 = __toESM(require_react());
var import_react46 = __toESM(require_react());
var import_react47 = __toESM(require_react());
var import_react48 = __toESM(require_react());
var import_react49 = __toESM(require_react());
var import_react50 = __toESM(require_react());
var import_react51 = __toESM(require_react());
var gp = Object.create;
var An2 = Object.defineProperty;
var vp = Object.getOwnPropertyDescriptor;
var wp = Object.getOwnPropertyNames;
var bp = Object.getPrototypeOf;
var Rp = Object.prototype.hasOwnProperty;
var o2 = (e4, t) => An2(e4, "name", { value: t, configurable: true });
var Gr2 = ((e4) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e4, {
  get: (t, r) => (typeof __require < "u" ? __require : t)[r]
}) : e4)(function(e4) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + e4 + '" is not supported');
});
var C2 = (e4, t) => () => (e4 && (t = e4(e4 = 0)), t);
var H2 = (e4, t) => () => (t || e4((t = { exports: {} }).exports, t), t.exports);
var Xr2 = (e4, t) => {
  for (var r in t)
    An2(e4, r, { get: t[r], enumerable: true });
};
var yp = (e4, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of wp(t))
      !Rp.call(e4, a) && a !== r && An2(e4, a, { get: () => t[a], enumerable: !(n = vp(t, a)) || n.enumerable });
  return e4;
};
var me2 = (e4, t, r) => (r = e4 != null ? gp(bp(e4)) : {}, yp(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e4 || !e4.__esModule ? An2(r, "default", { value: e4, enumerable: true }) : r,
  e4
));
function W2() {
  return W2 = Object.assign ? Object.assign.bind() : function(e4) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e4[n] = r[n]);
    }
    return e4;
  }, W2.apply(null, arguments);
}
var Yr2 = C2(() => {
  o2(W2, "_extends");
});
function Tl(e4) {
  if (e4 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e4;
}
var Hl = C2(() => {
  o2(Tl, "_assertThisInitialized");
});
function ht2(e4, t) {
  return ht2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, ht2(e4, t);
}
var In2 = C2(() => {
  o2(ht2, "_setPrototypeOf");
});
function zn2(e4) {
  return zn2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, zn2(e4);
}
var kl = C2(() => {
  o2(zn2, "_getPrototypeOf");
});
var Kr2 = H2((Ul, ea2) => {
  (function(e4) {
    if (typeof Ul == "object" && typeof ea2 < "u")
      ea2.exports = e4();
    else if (typeof define == "function" && define.amd)
      define([], e4);
    else {
      var t;
      typeof window < "u" ? t = window : typeof global < "u" ? t = global : typeof self < "u" ? t = self : t = this, t.memoizerific = e4();
    }
  })(function() {
    var e4, t, r;
    return o2(function n(a, i, c) {
      function l(f, d) {
        if (!i[f]) {
          if (!a[f]) {
            var m = typeof Gr2 == "function" && Gr2;
            if (!d && m) return m(f, true);
            if (s) return s(f, true);
            var v = new Error("Cannot find module '" + f + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var R = i[f] = { exports: {} };
          a[f][0].call(R.exports, function(p) {
            var h4 = a[f][1][p];
            return l(h4 || p);
          }, R, R.exports, n, a, i, c);
        }
        return i[f].exports;
      }
      o2(l, "s");
      for (var s = typeof Gr2 == "function" && Gr2, u = 0; u < c.length; u++) l(c[u]);
      return l;
    }, "e")({ 1: [function(n, a, i) {
      a.exports = function(c) {
        if (typeof Map != "function" || c) {
          var l = n("./similar");
          return new l();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(n, a, i) {
      function c() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      o2(c, "Similar"), c.prototype.get = function(l) {
        var s;
        if (this.lastItem && this.isEqual(this.lastItem.key, l))
          return this.lastItem.val;
        if (s = this.indexOf(l), s >= 0)
          return this.lastItem = this.list[s], this.list[s].val;
      }, c.prototype.set = function(l, s) {
        var u;
        return this.lastItem && this.isEqual(this.lastItem.key, l) ? (this.lastItem.val = s, this) : (u = this.indexOf(l), u >= 0 ? (this.lastItem = this.list[u], this.list[u].val = s, this) : (this.lastItem = { key: l, val: s }, this.list.push(this.lastItem), this.size++, this));
      }, c.prototype.delete = function(l) {
        var s;
        if (this.lastItem && this.isEqual(this.lastItem.key, l) && (this.lastItem = void 0), s = this.indexOf(l), s >= 0)
          return this.size--, this.list.splice(s, 1)[0];
      }, c.prototype.has = function(l) {
        var s;
        return this.lastItem && this.isEqual(this.lastItem.key, l) ? true : (s = this.indexOf(l), s >= 0 ? (this.lastItem = this.list[s], true) : false);
      }, c.prototype.forEach = function(l, s) {
        var u;
        for (u = 0; u < this.size; u++)
          l.call(s || this, this.list[u].val, this.list[u].key, this);
      }, c.prototype.indexOf = function(l) {
        var s;
        for (s = 0; s < this.size; s++)
          if (this.isEqual(this.list[s].key, l))
            return s;
        return -1;
      }, c.prototype.isEqual = function(l, s) {
        return l === s || l !== l && s !== s;
      }, a.exports = c;
    }, {}], 3: [function(n, a, i) {
      var c = n("map-or-similar");
      a.exports = function(f) {
        var d = new c(false), m = [];
        return function(v) {
          var R = o2(function() {
            var p = d, h4, g, w = arguments.length - 1, b = Array(w + 1), x = true, E4;
            if ((R.numArgs || R.numArgs === 0) && R.numArgs !== w + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (E4 = 0; E4 < w; E4++) {
              if (b[E4] = {
                cacheItem: p,
                arg: arguments[E4]
              }, p.has(arguments[E4])) {
                p = p.get(arguments[E4]);
                continue;
              }
              x = false, h4 = new c(false), p.set(arguments[E4], h4), p = h4;
            }
            return x && (p.has(arguments[w]) ? g = p.get(arguments[w]) : x = false), x || (g = v.apply(null, arguments), p.set(arguments[w], g)), f > 0 && (b[w] = {
              cacheItem: p,
              arg: arguments[w]
            }, x ? l(m, b) : m.push(b), m.length > f && s(m.shift())), R.wasMemoized = x, R.numArgs = w + 1, g;
          }, "memoizerific");
          return R.limit = f, R.wasMemoized = false, R.cache = d, R.lru = m, R;
        };
      };
      function l(f, d) {
        var m = f.length, v = d.length, R, p, h4;
        for (p = 0; p < m; p++) {
          for (R = true, h4 = 0; h4 < v; h4++)
            if (!u(f[p][h4].arg, d[h4].arg)) {
              R = false;
              break;
            }
          if (R)
            break;
        }
        f.push(f.splice(p, 1)[0]);
      }
      o2(l, "moveToMostRecentLru");
      function s(f) {
        var d = f.length, m = f[d - 1], v, R;
        for (m.cacheItem.delete(m.arg), R = d - 2; R >= 0 && (m = f[R], v = m.cacheItem.get(m.arg), !v || !v.size); R--)
          m.cacheItem.delete(m.arg);
      }
      o2(s, "removeCachedResult");
      function u(f, d) {
        return f === d || f !== f && d !== d;
      }
      o2(u, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});
function ur2(e4, t) {
  if (e4 == null) return {};
  var r = {};
  for (var n in e4) if ({}.hasOwnProperty.call(e4, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e4[n];
  }
  return r;
}
var Pn2 = C2(() => {
  o2(ur2, "_objectWithoutPropertiesLoose");
});
function ql(e4, t) {
  if (e4 == null) return {};
  var r, n, a = ur2(e4, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e4);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e4, r) && (a[r] = e4[r]);
  }
  return a;
}
var Gl = C2(() => {
  Pn2();
  o2(ql, "_objectWithoutProperties");
});
function Jr2(e4, t) {
  (t == null || t > e4.length) && (t = e4.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e4[r];
  return n;
}
var ta2 = C2(() => {
  o2(Jr2, "_arrayLikeToArray");
});
function Xl(e4) {
  if (Array.isArray(e4)) return Jr2(e4);
}
var Yl = C2(() => {
  ta2();
  o2(Xl, "_arrayWithoutHoles");
});
function Zl(e4) {
  if (typeof Symbol < "u" && e4[Symbol.iterator] != null || e4["@@iterator"] != null) return Array.from(e4);
}
var Kl = C2(() => {
  o2(Zl, "_iterableToArray");
});
function Jl(e4, t) {
  if (e4) {
    if (typeof e4 == "string") return Jr2(e4, t);
    var r = {}.toString.call(e4).slice(8, -1);
    return r === "Object" && e4.constructor && (r = e4.constructor.name), r === "Map" || r === "Set" ? Array.from(e4) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Jr2(e4, t) : void 0;
  }
}
var Ql = C2(() => {
  ta2();
  o2(Jl, "_unsupportedIterableToArray");
});
function ec() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var tc = C2(() => {
  o2(ec, "_nonIterableSpread");
});
function kn2(e4) {
  return Xl(e4) || Zl(e4) || Jl(e4) || ec();
}
var rc = C2(() => {
  Yl();
  Kl();
  Ql();
  tc();
  o2(kn2, "_toConsumableArray");
});
function Ft2(e4) {
  "@babel/helpers - typeof";
  return Ft2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ft2(e4);
}
var ra2 = C2(() => {
  o2(Ft2, "_typeof");
});
function nc(e4, t) {
  if (Ft2(e4) != "object" || !e4) return e4;
  var r = e4[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e4, t || "default");
    if (Ft2(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e4);
}
var oc = C2(() => {
  ra2();
  o2(nc, "toPrimitive");
});
function ac(e4) {
  var t = nc(e4, "string");
  return Ft2(t) == "symbol" ? t : t + "";
}
var ic = C2(() => {
  ra2();
  oc();
  o2(ac, "toPropertyKey");
});
function On2(e4, t, r) {
  return (t = ac(t)) in e4 ? Object.defineProperty(e4, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e4[t] = r, e4;
}
var na2 = C2(() => {
  ic();
  o2(On2, "_defineProperty");
});
function lc(e4, t) {
  var r = Object.keys(e4);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e4);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e4, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fr2(e4) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lc(Object(r), true).forEach(function(n) {
      On2(e4, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(r)) : lc(Object(r)).forEach(function(n) {
      Object.defineProperty(e4, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e4;
}
function d2(e4) {
  var t = e4.length;
  if (t === 0 || t === 1) return e4;
  if (t === 2)
    return [e4[0], e4[1], "".concat(e4[0], ".").concat(e4[1]), "".concat(e4[1], ".").concat(e4[0])];
  if (t === 3)
    return [e4[0], e4[1], e4[2], "".concat(e4[0], ".").concat(e4[1]), "".concat(e4[0], ".").concat(e4[2]), "".concat(e4[1], ".").concat(e4[0]), "".concat(
      e4[1],
      "."
    ).concat(e4[2]), "".concat(e4[2], ".").concat(e4[0]), "".concat(e4[2], ".").concat(e4[1]), "".concat(e4[0], ".").concat(e4[1], ".").concat(
      e4[2]
    ), "".concat(e4[0], ".").concat(e4[2], ".").concat(e4[1]), "".concat(e4[1], ".").concat(e4[0], ".").concat(e4[2]), "".concat(e4[1], ".").concat(
      e4[2],
      "."
    ).concat(e4[0]), "".concat(e4[2], ".").concat(e4[0], ".").concat(e4[1]), "".concat(e4[2], ".").concat(e4[1], ".").concat(e4[0])];
  if (t >= 4)
    return [
      e4[0],
      e4[1],
      e4[2],
      e4[3],
      "".concat(e4[0], ".").concat(e4[1]),
      "".concat(e4[0], ".").concat(e4[2]),
      "".concat(e4[0], ".").concat(e4[3]),
      "".concat(e4[1], ".").concat(e4[0]),
      "".concat(e4[1], ".").concat(e4[2]),
      "".concat(e4[1], ".").concat(e4[3]),
      "".concat(e4[2], ".").concat(e4[0]),
      "".concat(e4[2], ".").concat(e4[1]),
      "".concat(e4[2], ".").concat(e4[3]),
      "".concat(e4[3], ".").concat(e4[0]),
      "".concat(e4[3], ".").concat(e4[1]),
      "".concat(e4[3], ".").concat(e4[2]),
      "".concat(e4[0], ".").concat(e4[1], ".").concat(e4[2]),
      "".concat(e4[0], ".").concat(e4[1], ".").concat(e4[3]),
      "".concat(e4[0], ".").concat(e4[2], ".").concat(e4[1]),
      "".concat(e4[0], ".").concat(e4[2], ".").concat(e4[3]),
      "".concat(e4[0], ".").concat(
        e4[3],
        "."
      ).concat(e4[1]),
      "".concat(e4[0], ".").concat(e4[3], ".").concat(e4[2]),
      "".concat(e4[1], ".").concat(e4[0], ".").concat(e4[2]),
      "".concat(
        e4[1],
        "."
      ).concat(e4[0], ".").concat(e4[3]),
      "".concat(e4[1], ".").concat(e4[2], ".").concat(e4[0]),
      "".concat(e4[1], ".").concat(e4[2], ".").concat(
        e4[3]
      ),
      "".concat(e4[1], ".").concat(e4[3], ".").concat(e4[0]),
      "".concat(e4[1], ".").concat(e4[3], ".").concat(e4[2]),
      "".concat(e4[2], ".").concat(
        e4[0],
        "."
      ).concat(e4[1]),
      "".concat(e4[2], ".").concat(e4[0], ".").concat(e4[3]),
      "".concat(e4[2], ".").concat(e4[1], ".").concat(e4[0]),
      "".concat(
        e4[2],
        "."
      ).concat(e4[1], ".").concat(e4[3]),
      "".concat(e4[2], ".").concat(e4[3], ".").concat(e4[0]),
      "".concat(e4[2], ".").concat(e4[3], ".").concat(
        e4[1]
      ),
      "".concat(e4[3], ".").concat(e4[0], ".").concat(e4[1]),
      "".concat(e4[3], ".").concat(e4[0], ".").concat(e4[2]),
      "".concat(e4[3], ".").concat(
        e4[1],
        "."
      ).concat(e4[0]),
      "".concat(e4[3], ".").concat(e4[1], ".").concat(e4[2]),
      "".concat(e4[3], ".").concat(e4[2], ".").concat(e4[0]),
      "".concat(
        e4[3],
        "."
      ).concat(e4[2], ".").concat(e4[1]),
      "".concat(e4[0], ".").concat(e4[1], ".").concat(e4[2], ".").concat(e4[3]),
      "".concat(e4[0], ".").concat(
        e4[1],
        "."
      ).concat(e4[3], ".").concat(e4[2]),
      "".concat(e4[0], ".").concat(e4[2], ".").concat(e4[1], ".").concat(e4[3]),
      "".concat(e4[0], ".").concat(
        e4[2],
        "."
      ).concat(e4[3], ".").concat(e4[1]),
      "".concat(e4[0], ".").concat(e4[3], ".").concat(e4[1], ".").concat(e4[2]),
      "".concat(e4[0], ".").concat(
        e4[3],
        "."
      ).concat(e4[2], ".").concat(e4[1]),
      "".concat(e4[1], ".").concat(e4[0], ".").concat(e4[2], ".").concat(e4[3]),
      "".concat(e4[1], ".").concat(
        e4[0],
        "."
      ).concat(e4[3], ".").concat(e4[2]),
      "".concat(e4[1], ".").concat(e4[2], ".").concat(e4[0], ".").concat(e4[3]),
      "".concat(e4[1], ".").concat(
        e4[2],
        "."
      ).concat(e4[3], ".").concat(e4[0]),
      "".concat(e4[1], ".").concat(e4[3], ".").concat(e4[0], ".").concat(e4[2]),
      "".concat(e4[1], ".").concat(
        e4[3],
        "."
      ).concat(e4[2], ".").concat(e4[0]),
      "".concat(e4[2], ".").concat(e4[0], ".").concat(e4[1], ".").concat(e4[3]),
      "".concat(e4[2], ".").concat(
        e4[0],
        "."
      ).concat(e4[3], ".").concat(e4[1]),
      "".concat(e4[2], ".").concat(e4[1], ".").concat(e4[0], ".").concat(e4[3]),
      "".concat(e4[2], ".").concat(
        e4[1],
        "."
      ).concat(e4[3], ".").concat(e4[0]),
      "".concat(e4[2], ".").concat(e4[3], ".").concat(e4[0], ".").concat(e4[1]),
      "".concat(e4[2], ".").concat(
        e4[3],
        "."
      ).concat(e4[1], ".").concat(e4[0]),
      "".concat(e4[3], ".").concat(e4[0], ".").concat(e4[1], ".").concat(e4[2]),
      "".concat(e4[3], ".").concat(
        e4[0],
        "."
      ).concat(e4[2], ".").concat(e4[1]),
      "".concat(e4[3], ".").concat(e4[1], ".").concat(e4[0], ".").concat(e4[2]),
      "".concat(e4[3], ".").concat(
        e4[1],
        "."
      ).concat(e4[2], ".").concat(e4[0]),
      "".concat(e4[3], ".").concat(e4[2], ".").concat(e4[0], ".").concat(e4[1]),
      "".concat(e4[3], ".").concat(
        e4[2],
        "."
      ).concat(e4[1], ".").concat(e4[0])
    ];
}
function p2(e4) {
  if (e4.length === 0 || e4.length === 1) return e4;
  var t = e4.join(".");
  return oa2[t] || (oa2[t] = d2(e4)), oa2[t];
}
function m2(e4) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, n = e4.filter(
    function(i) {
      return i !== "token";
    }
  ), a = p2(n);
  return a.reduce(function(i, c) {
    return fr2(fr2({}, i), r[c]);
  }, t);
}
function cc(e4) {
  return e4.join(" ");
}
function h2(e4, t) {
  var r = 0;
  return function(n) {
    return r += 1, n.map(function(a, i) {
      return _t2({
        node: a,
        stylesheet: e4,
        useInlineStyles: t,
        key: "code-segment-".concat(r, "-").concat(i)
      });
    });
  };
}
function _t2(e4) {
  var t = e4.node, r = e4.stylesheet, n = e4.style, a = n === void 0 ? {} : n, i = e4.useInlineStyles, c = e4.key, l = t.properties, s = t.type, u = t.tagName, f = t.value;
  if (s === "text")
    return f;
  if (u) {
    var d = h2(r, i), m;
    if (!i)
      m = fr2(fr2({}, l), {}, {
        className: cc(l.className)
      });
    else {
      var v = Object.keys(r).reduce(function(g, w) {
        return w.split(".").forEach(function(b) {
          g.includes(b) || g.push(b);
        }), g;
      }, []), R = l.className && l.className.includes("token") ? ["token"] : [], p = l.className && R.concat(l.className.filter(function(g) {
        return !v.includes(g);
      }));
      m = fr2(fr2({}, l), {}, {
        className: cc(p) || void 0,
        style: m2(l.className, Object.assign({}, l.style, a), r)
      });
    }
    var h4 = d(t.children);
    return import_react3.default.createElement(u, W2({
      key: c
    }, m), h4);
  }
}
var oa2;
var aa2 = C2(() => {
  Yr2();
  na2();
  o2(lc, "ownKeys");
  o2(fr2, "_objectSpread");
  o2(d2, "powerSetPermutations");
  oa2 = {};
  o2(p2, "getClassNameCombinations");
  o2(m2, "createStyleObject");
  o2(cc, "createClassNameString");
  o2(h2, "createChildren");
  o2(_t2, "createElement");
});
var sc;
var uc = C2(() => {
  sc = o2(function(e4, t) {
    var r = e4.listLanguages();
    return r.indexOf(t) !== -1;
  }, "default");
});
function fc(e4, t) {
  var r = Object.keys(e4);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e4);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e4, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bt2(e4) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fc(Object(r), true).forEach(function(n) {
      On2(e4, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(r)) : fc(Object(r)).forEach(function(n) {
      Object.defineProperty(e4, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e4;
}
function w2(e4) {
  return e4.match(v2);
}
function b2(e4) {
  var t = e4.lines, r = e4.startingLineNumber, n = e4.style;
  return t.map(function(a, i) {
    var c = i + r;
    return import_react4.default.createElement("span", {
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number",
      style: typeof n == "function" ? n(c) : n
    }, "".concat(c, `
`));
  });
}
function R2(e4) {
  var t = e4.codeString, r = e4.codeStyle, n = e4.containerStyle, a = n === void 0 ? {
    float: "left",
    paddingRight: "10px"
  } : n, i = e4.numberStyle, c = i === void 0 ? {} : i, l = e4.startingLineNumber;
  return import_react4.default.createElement("code", {
    style: Object.assign({}, r, a)
  }, b2({
    lines: t.replace(/\n$/, "").split(`
`),
    style: c,
    startingLineNumber: l
  }));
}
function y2(e4) {
  return "".concat(e4.toString().length, ".25em");
}
function dc(e4, t) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(e4),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: t
    },
    children: [{
      type: "text",
      value: e4
    }]
  };
}
function pc(e4, t, r) {
  var n = {
    display: "inline-block",
    minWidth: y2(r),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  }, a = typeof e4 == "function" ? e4(t) : e4, i = bt2(bt2({}, n), a);
  return i;
}
function Bn(e4) {
  var t = e4.children, r = e4.lineNumber, n = e4.lineNumberStyle, a = e4.largestLineNumber, i = e4.showInlineLineNumbers, c = e4.lineProps, l = c === void 0 ? {} : c, s = e4.className, u = s === void 0 ? [] : s, f = e4.showLineNumbers, d = e4.wrapLongLines, m = e4.wrapLines, v = m === void 0 ? false : m, R = v ? bt2({}, typeof l == "function" ? l(r) : l) : {};
  if (R.className = R.className ? [].concat(kn2(R.className.trim().split(/\s+/)), kn2(u)) : u, r && i) {
    var p = pc(n, r, a);
    t.unshift(dc(r, p));
  }
  return d & f && (R.style = bt2({
    display: "flex"
  }, R.style)), {
    type: "element",
    tagName: "span",
    properties: R,
    children: t
  };
}
function mc(e4) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = 0; n < e4.length; n++) {
    var a = e4[n];
    if (a.type === "text")
      r.push(Bn({
        children: [a],
        className: kn2(new Set(t))
      }));
    else if (a.children) {
      var i = t.concat(a.properties.className);
      mc(a.children, i).forEach(function(c) {
        return r.push(c);
      });
    }
  }
  return r;
}
function x2(e4, t, r, n, a, i, c, l, s) {
  var u, f = mc(e4.value), d = [], m = -1, v = 0;
  function R(E4, y) {
    var S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return Bn({
      children: E4,
      lineNumber: y,
      lineNumberStyle: l,
      largestLineNumber: c,
      showInlineLineNumbers: a,
      lineProps: r,
      className: S,
      showLineNumbers: n,
      wrapLongLines: s,
      wrapLines: t
    });
  }
  o2(R, "createWrappedLine");
  function p(E4, y) {
    if (n && y && a) {
      var S = pc(l, y, c);
      E4.unshift(dc(y, S));
    }
    return E4;
  }
  o2(p, "createUnwrappedLine");
  function h4(E4, y) {
    var S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || S.length > 0 ? R(E4, y, S) : p(E4, y);
  }
  o2(h4, "createLine");
  for (var g = o2(function() {
    var y = f[v], S = y.children[0].value, L2 = w2(S);
    if (L2) {
      var M2 = S.split(`
`);
      M2.forEach(function(A, P2) {
        var _2 = n && d.length + i, F = {
          type: "text",
          value: "".concat(A, `
`)
        };
        if (P2 === 0) {
          var K2 = f.slice(m + 1, v).concat(Bn({
            children: [F],
            className: y.properties.className
          })), T = h4(K2, _2);
          d.push(T);
        } else if (P2 === M2.length - 1) {
          var z2 = f[v + 1] && f[v + 1].children && f[v + 1].children[0], k2 = {
            type: "text",
            value: "".concat(A)
          };
          if (z2) {
            var V2 = Bn({
              children: [k2],
              className: y.properties.className
            });
            f.splice(v + 1, 0, V2);
          } else {
            var D2 = [k2], j2 = h4(D2, _2, y.properties.className);
            d.push(j2);
          }
        } else {
          var O = [F], G = h4(O, _2, y.properties.className);
          d.push(G);
        }
      }), m = v;
    }
    v++;
  }, "_loop"); v < f.length; )
    g();
  if (m !== f.length - 1) {
    var w = f.slice(m + 1, f.length);
    if (w && w.length) {
      var b = n && d.length + i, x = h4(w, b);
      d.push(x);
    }
  }
  return t ? d : (u = []).concat.apply(u, d);
}
function E2(e4) {
  var t = e4.rows, r = e4.stylesheet, n = e4.useInlineStyles;
  return t.map(function(a, i) {
    return _t2({
      node: a,
      stylesheet: r,
      useInlineStyles: n,
      key: "code-segement".concat(i)
    });
  });
}
function hc(e4) {
  return e4 && typeof e4.highlightAuto < "u";
}
function S2(e4) {
  var t = e4.astGenerator, r = e4.language, n = e4.code, a = e4.defaultCodeValue;
  if (hc(t)) {
    var i = sc(t, r);
    return r === "text" ? {
      value: a,
      language: "text"
    } : i ? t.highlight(r, n) : t.highlightAuto(n);
  }
  try {
    return r && r !== "text" ? {
      value: t.highlight(n, r)
    } : {
      value: a
    };
  } catch {
    return {
      value: a
    };
  }
}
function ia2(e4, t) {
  return o2(function(n) {
    var a = n.language, i = n.children, c = n.style, l = c === void 0 ? t : c, s = n.customStyle, u = s === void 0 ? {} : s, f = n.codeTagProps, d = f === void 0 ? {
      className: a ? "language-".concat(a) : void 0,
      style: bt2(bt2({}, l['code[class*="language-"]']), l['code[class*="language-'.concat(a, '"]')])
    } : f, m = n.useInlineStyles, v = m === void 0 ? true : m, R = n.showLineNumbers, p = R === void 0 ? false : R, h4 = n.showInlineLineNumbers, g = h4 === void 0 ? true : h4, w = n.startingLineNumber, b = w === void 0 ? 1 : w, x = n.lineNumberContainerStyle, E4 = n.lineNumberStyle, y = E4 === void 0 ? {} : E4, S = n.wrapLines, L2 = n.wrapLongLines, M2 = L2 === void 0 ? false : L2, A = n.lineProps, P2 = A === void 0 ? {} : A, _2 = n.renderer, F = n.PreTag, K2 = F === void 0 ? "pre" : F, T = n.CodeTag, z2 = T === void 0 ? "code" : T, k2 = n.code, V2 = k2 === void 0 ? (Array.isArray(i) ? i[0] : i) || "" : k2, D2 = n.astGenerator, j2 = ql(n, g2);
    D2 = D2 || e4;
    var O = p ? import_react4.default.createElement(R2, {
      containerStyle: x,
      codeStyle: d.style || {},
      numberStyle: y,
      startingLineNumber: b,
      codeString: V2
    }) : null, G = l.hljs || l['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    }, Ee2 = hc(D2) ? "hljs" : "prismjs", pe2 = v ? Object.assign({}, j2, {
      style: Object.assign({}, G, u)
    }) : Object.assign({}, j2, {
      className: j2.className ? "".concat(Ee2, " ").concat(j2.className) : Ee2,
      style: Object.assign({}, u)
    });
    if (M2 ? d.style = bt2({
      whiteSpace: "pre-wrap"
    }, d.style) : d.style = bt2({
      whiteSpace: "pre"
    }, d.style), !D2)
      return import_react4.default.createElement(K2, pe2, O, import_react4.default.createElement(z2, d, V2));
    (S === void 0 && _2 || M2) && (S = true), _2 = _2 || E2;
    var se2 = [{
      type: "text",
      value: V2
    }], ue = S2({
      astGenerator: D2,
      language: a,
      code: V2,
      defaultCodeValue: se2
    });
    ue.language === null && (ue.value = se2);
    var ve2 = ue.value.length;
    ve2 === 1 && ue.value[0].type === "text" && (ve2 = ue.value[0].value.split(`
`).length);
    var Se2 = ve2 + b, Ot2 = x2(ue, S, P2, p, g, b, Se2, y, M2);
    return import_react4.default.createElement(K2, pe2, import_react4.default.createElement(z2, d, !g && O, _2({
      rows: Ot2,
      stylesheet: l,
      useInlineStyles: v
    })));
  }, "SyntaxHighlighter");
}
var g2;
var v2;
var gc = C2(() => {
  Gl();
  rc();
  na2();
  aa2();
  uc();
  g2 = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
  o2(fc, "ownKeys");
  o2(bt2, "_objectSpread");
  v2 = /\n/g;
  o2(w2, "getNewLines");
  o2(b2, "getAllLineNumbers");
  o2(R2, "AllLineNumbers");
  o2(y2, "getEmWidthOfNumber");
  o2(dc, "getInlineLineNumber");
  o2(pc, "assembleLineNumberStyles");
  o2(Bn, "createLineElement");
  o2(mc, "flattenCodeTree");
  o2(x2, "processLines");
  o2(E2, "defaultRenderer");
  o2(hc, "isHighlightJs");
  o2(S2, "getCodeTree");
  o2(ia2, "default");
});
var wc = H2((yb, vc) => {
  vc.exports = M2;
  var C22 = Object.prototype.hasOwnProperty;
  function M2() {
    for (var e4 = {}, t = 0; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        C22.call(r, n) && (e4[n] = r[n]);
    }
    return e4;
  }
  o2(M2, "extend");
});
var ca2 = H2((Eb, Rc) => {
  "use strict";
  Rc.exports = bc;
  var la2 = bc.prototype;
  la2.space = null;
  la2.normal = {};
  la2.property = {};
  function bc(e4, t, r) {
    this.property = e4, this.normal = t, r && (this.space = r);
  }
  o2(bc, "Schema");
});
var Ec = H2((Cb, xc) => {
  "use strict";
  var yc = wc(), L2 = ca2();
  xc.exports = A2;
  function A2(e4) {
    for (var t = e4.length, r = [], n = [], a = -1, i, c; ++a < t; )
      i = e4[a], r.push(i.property), n.push(i.normal), c = i.space;
    return new L2(
      yc.apply(null, r),
      yc.apply(null, n),
      c
    );
  }
  o2(A2, "merge");
});
var Nn2 = H2((Lb, Sc) => {
  "use strict";
  Sc.exports = I22;
  function I22(e4) {
    return e4.toLowerCase();
  }
  o2(I22, "normalize");
});
var sa2 = H2((Ib, Mc) => {
  "use strict";
  Mc.exports = Cc;
  var De2 = Cc.prototype;
  De2.space = null;
  De2.attribute = null;
  De2.property = null;
  De2.boolean = false;
  De2.booleanish = false;
  De2.overloadedBoolean = false;
  De2.number = false;
  De2.commaSeparated = false;
  De2.spaceSeparated = false;
  De2.commaOrSpaceSeparated = false;
  De2.mustUseProperty = false;
  De2.defined = false;
  function Cc(e4, t) {
    this.property = e4, this.attribute = t;
  }
  o2(Cc, "Info");
});
var Dn = H2((Rt2) => {
  "use strict";
  var z2 = 0;
  Rt2.boolean = Vt();
  Rt2.booleanish = Vt();
  Rt2.overloadedBoolean = Vt();
  Rt2.number = Vt();
  Rt2.spaceSeparated = Vt();
  Rt2.commaSeparated = Vt();
  Rt2.commaOrSpaceSeparated = Vt();
  function Vt() {
    return Math.pow(2, ++z2);
  }
  o2(Vt, "increment");
});
var fa2 = H2((Pb, Tc) => {
  "use strict";
  var Ic = sa2(), Lc = Dn();
  Tc.exports = ua2;
  ua2.prototype = new Ic();
  ua2.prototype.defined = true;
  var zc = [
    "boolean",
    "booleanish",
    "overloadedBoolean",
    "number",
    "commaSeparated",
    "spaceSeparated",
    "commaOrSpaceSeparated"
  ], T2 = zc.length;
  function ua2(e4, t, r, n) {
    var a = -1, i;
    for (Ac(this, "space", n), Ic.call(this, e4, t); ++a < T2; )
      i = zc[a], Ac(this, i, (r & Lc[i]) === Lc[i]);
  }
  o2(ua2, "DefinedInfo");
  function Ac(e4, t, r) {
    r && (e4[t] = r);
  }
  o2(Ac, "mark");
});
var dr = H2((Ob, Pc) => {
  "use strict";
  var Hc = Nn2(), H22 = ca2(), P2 = fa2();
  Pc.exports = k2;
  function k2(e4) {
    var t = e4.space, r = e4.mustUseProperty || [], n = e4.attributes || {}, a = e4.properties, i = e4.transform, c = {}, l = {}, s, u;
    for (s in a)
      u = new P2(
        s,
        i(n, s),
        a[s],
        t
      ), r.indexOf(s) !== -1 && (u.mustUseProperty = true), c[s] = u, l[Hc(s)] = s, l[Hc(u.attribute)] = s;
    return new H22(c, l, t);
  }
  o2(k2, "create");
});
var Oc = H2((Nb, kc) => {
  "use strict";
  var O2 = dr();
  kc.exports = O2({
    space: "xlink",
    transform: B2,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    }
  });
  function B2(e4, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
  o2(B2, "xlinkTransform");
});
var Nc = H2((Fb, Bc) => {
  "use strict";
  var N22 = dr();
  Bc.exports = N22({
    space: "xml",
    transform: D2,
    properties: {
      xmlLang: null,
      xmlBase: null,
      xmlSpace: null
    }
  });
  function D2(e4, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
  o2(D2, "xmlTransform");
});
var Fc = H2(($b, Dc) => {
  "use strict";
  Dc.exports = F2;
  function F2(e4, t) {
    return t in e4 ? e4[t] : t;
  }
  o2(F2, "caseSensitiveTransform");
});
var da2 = H2((jb, _c) => {
  "use strict";
  var _2 = Fc();
  _c.exports = $22;
  function $22(e4, t) {
    return _2(e4, t.toLowerCase());
  }
  o2($22, "caseInsensitiveTransform");
});
var Vc = H2((Ub, $c) => {
  "use strict";
  var V2 = dr(), j2 = da2();
  $c.exports = V2({
    space: "xmlns",
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    transform: j2,
    properties: {
      xmlns: null,
      xmlnsXLink: null
    }
  });
});
var Wc = H2((qb, jc) => {
  "use strict";
  var pa2 = Dn(), W22 = dr(), Le2 = pa2.booleanish, Fe2 = pa2.number, jt2 = pa2.spaceSeparated;
  jc.exports = W22({
    transform: U22,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Le2,
      ariaAutoComplete: null,
      ariaBusy: Le2,
      ariaChecked: Le2,
      ariaColCount: Fe2,
      ariaColIndex: Fe2,
      ariaColSpan: Fe2,
      ariaControls: jt2,
      ariaCurrent: null,
      ariaDescribedBy: jt2,
      ariaDetails: null,
      ariaDisabled: Le2,
      ariaDropEffect: jt2,
      ariaErrorMessage: null,
      ariaExpanded: Le2,
      ariaFlowTo: jt2,
      ariaGrabbed: Le2,
      ariaHasPopup: null,
      ariaHidden: Le2,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: jt2,
      ariaLevel: Fe2,
      ariaLive: null,
      ariaModal: Le2,
      ariaMultiLine: Le2,
      ariaMultiSelectable: Le2,
      ariaOrientation: null,
      ariaOwns: jt2,
      ariaPlaceholder: null,
      ariaPosInSet: Fe2,
      ariaPressed: Le2,
      ariaReadOnly: Le2,
      ariaRelevant: null,
      ariaRequired: Le2,
      ariaRoleDescription: jt2,
      ariaRowCount: Fe2,
      ariaRowIndex: Fe2,
      ariaRowSpan: Fe2,
      ariaSelected: Le2,
      ariaSetSize: Fe2,
      ariaSort: null,
      ariaValueMax: Fe2,
      ariaValueMin: Fe2,
      ariaValueNow: Fe2,
      ariaValueText: null,
      role: null
    }
  });
  function U22(e4, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
  o2(U22, "ariaTransform");
});
var qc = H2((Xb, Uc) => {
  "use strict";
  var pr = Dn(), q22 = dr(), G2 = da2(), B2 = pr.boolean, X2 = pr.overloadedBoolean, Qr2 = pr.booleanish, X4 = pr.number, Re2 = pr.spaceSeparated, Fn2 = pr.commaSeparated;
  Uc.exports = q22({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    transform: G2,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      // Standard Properties.
      abbr: null,
      accept: Fn2,
      acceptCharset: Re2,
      accessKey: Re2,
      action: null,
      allow: null,
      allowFullScreen: B2,
      allowPaymentRequest: B2,
      allowUserMedia: B2,
      alt: null,
      as: null,
      async: B2,
      autoCapitalize: null,
      autoComplete: Re2,
      autoFocus: B2,
      autoPlay: B2,
      capture: B2,
      charSet: null,
      checked: B2,
      cite: null,
      className: Re2,
      cols: X4,
      colSpan: null,
      content: null,
      contentEditable: Qr2,
      controls: B2,
      controlsList: Re2,
      coords: X4 | Fn2,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: B2,
      defer: B2,
      dir: null,
      dirName: null,
      disabled: B2,
      download: X2,
      draggable: Qr2,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: B2,
      formTarget: null,
      headers: Re2,
      height: X4,
      hidden: B2,
      high: X4,
      href: null,
      hrefLang: null,
      htmlFor: Re2,
      httpEquiv: Re2,
      id: null,
      imageSizes: null,
      imageSrcSet: Fn2,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: B2,
      itemId: null,
      itemProp: Re2,
      itemRef: Re2,
      itemScope: B2,
      itemType: Re2,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: B2,
      low: X4,
      manifest: null,
      max: null,
      maxLength: X4,
      media: null,
      method: null,
      min: null,
      minLength: X4,
      multiple: B2,
      muted: B2,
      name: null,
      nonce: null,
      noModule: B2,
      noValidate: B2,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: B2,
      optimum: X4,
      pattern: null,
      ping: Re2,
      placeholder: null,
      playsInline: B2,
      poster: null,
      preload: null,
      readOnly: B2,
      referrerPolicy: null,
      rel: Re2,
      required: B2,
      reversed: B2,
      rows: X4,
      rowSpan: X4,
      sandbox: Re2,
      scope: null,
      scoped: B2,
      seamless: B2,
      selected: B2,
      shape: null,
      size: X4,
      sizes: null,
      slot: null,
      span: X4,
      spellCheck: Qr2,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: Fn2,
      start: X4,
      step: null,
      style: null,
      tabIndex: X4,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: B2,
      useMap: null,
      value: Qr2,
      width: X4,
      wrap: null,
      // Legacy.
      // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
      align: null,
      // Several. Use CSS `text-align` instead,
      aLink: null,
      // `<body>`. Use CSS `a:active {color}` instead
      archive: Re2,
      // `<object>`. List of URIs to archives
      axis: null,
      // `<td>` and `<th>`. Use `scope` on `<th>`
      background: null,
      // `<body>`. Use CSS `background-image` instead
      bgColor: null,
      // `<body>` and table elements. Use CSS `background-color` instead
      border: X4,
      // `<table>`. Use CSS `border-width` instead,
      borderColor: null,
      // `<table>`. Use CSS `border-color` instead,
      bottomMargin: X4,
      // `<body>`
      cellPadding: null,
      // `<table>`
      cellSpacing: null,
      // `<table>`
      char: null,
      // Several table elements. When `align=char`, sets the character to align on
      charOff: null,
      // Several table elements. When `char`, offsets the alignment
      classId: null,
      // `<object>`
      clear: null,
      // `<br>`. Use CSS `clear` instead
      code: null,
      // `<object>`
      codeBase: null,
      // `<object>`
      codeType: null,
      // `<object>`
      color: null,
      // `<font>` and `<hr>`. Use CSS instead
      compact: B2,
      // Lists. Use CSS to reduce space between items instead
      declare: B2,
      // `<object>`
      event: null,
      // `<script>`
      face: null,
      // `<font>`. Use CSS instead
      frame: null,
      // `<table>`
      frameBorder: null,
      // `<iframe>`. Use CSS `border` instead
      hSpace: X4,
      // `<img>` and `<object>`
      leftMargin: X4,
      // `<body>`
      link: null,
      // `<body>`. Use CSS `a:link {color: *}` instead
      longDesc: null,
      // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
      lowSrc: null,
      // `<img>`. Use a `<picture>`
      marginHeight: X4,
      // `<body>`
      marginWidth: X4,
      // `<body>`
      noResize: B2,
      // `<frame>`
      noHref: B2,
      // `<area>`. Use no href instead of an explicit `nohref`
      noShade: B2,
      // `<hr>`. Use background-color and height instead of borders
      noWrap: B2,
      // `<td>` and `<th>`
      object: null,
      // `<applet>`
      profile: null,
      // `<head>`
      prompt: null,
      // `<isindex>`
      rev: null,
      // `<link>`
      rightMargin: X4,
      // `<body>`
      rules: null,
      // `<table>`
      scheme: null,
      // `<meta>`
      scrolling: Qr2,
      // `<frame>`. Use overflow in the child context
      standby: null,
      // `<object>`
      summary: null,
      // `<table>`
      text: null,
      // `<body>`. Use CSS `color` instead
      topMargin: X4,
      // `<body>`
      valueType: null,
      // `<param>`
      version: null,
      // `<html>`. Use a doctype.
      vAlign: null,
      // Several. Use CSS `vertical-align` instead
      vLink: null,
      // `<body>`. Use CSS `a:visited {color}` instead
      vSpace: X4,
      // `<img>` and `<object>`
      // Non-standard Properties.
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: B2,
      disableRemotePlayback: B2,
      prefix: null,
      property: null,
      results: X4,
      security: null,
      unselectable: null
    }
  });
});
var Xc = H2((Yb, Gc) => {
  "use strict";
  var Y2 = Ec(), Z22 = Oc(), K2 = Nc(), J22 = Vc(), Q22 = Wc(), e4 = qc();
  Gc.exports = Y2([K2, Z22, J22, Q22, e4]);
});
var Kc = H2((Zb, Zc) => {
  "use strict";
  var t4 = Nn2(), r4 = fa2(), n4 = sa2(), ma2 = "data";
  Zc.exports = i4;
  var o4 = /^data[-\w.:]+$/i, Yc = /-[a-z]/g, a4 = /[A-Z]/g;
  function i4(e4, t) {
    var r = t4(t), n = t, a = n4;
    return r in e4.normal ? e4.property[e4.normal[r]] : (r.length > 4 && r.slice(0, 4) === ma2 && o4.test(t) && (t.charAt(4) === "-" ? n = l4(t) : t = c4(t), a = r4), new a(n, t));
  }
  o2(i4, "find");
  function l4(e4) {
    var t = e4.slice(5).replace(Yc, u4);
    return ma2 + t.charAt(0).toUpperCase() + t.slice(1);
  }
  o2(l4, "datasetToProperty");
  function c4(e4) {
    var t = e4.slice(4);
    return Yc.test(t) ? e4 : (t = t.replace(a4, s4), t.charAt(0) !== "-" && (t = "-" + t), ma2 + t);
  }
  o2(c4, "datasetToAttribute");
  function s4(e4) {
    return "-" + e4.toLowerCase();
  }
  o2(s4, "kebab");
  function u4(e4) {
    return e4.charAt(1).toUpperCase();
  }
  o2(u4, "camelcase");
});
var es = H2((Jb, Qc) => {
  "use strict";
  Qc.exports = f4;
  var Jc = /[#.]/g;
  function f4(e4, t) {
    for (var r = e4 || "", n = t || "div", a = {}, i = 0, c, l, s; i < r.length; )
      Jc.lastIndex = i, s = Jc.exec(r), c = r.slice(i, s ? s.index : r.length), c && (l ? l === "#" ? a.id = c : a.className ? a.className.push(
        c
      ) : a.className = [c] : n = c, i += c.length), s && (l = s[0], i++);
    return { type: "element", tagName: n, properties: a, children: [] };
  }
  o2(f4, "parse");
});
var rs = H2((ha2) => {
  "use strict";
  ha2.parse = m4;
  ha2.stringify = h4;
  var ts = "", d4 = " ", p4 = /[ \t\n\r\f]+/g;
  function m4(e4) {
    var t = String(e4 || ts).trim();
    return t === ts ? [] : t.split(p4);
  }
  o2(m4, "parse");
  function h4(e4) {
    return e4.join(d4).trim();
  }
  o2(h4, "stringify");
});
var os = H2((va2) => {
  "use strict";
  va2.parse = g4;
  va2.stringify = v4;
  var ga2 = ",", ns = " ", en2 = "";
  function g4(e4) {
    for (var t = [], r = String(e4 || en2), n = r.indexOf(ga2), a = 0, i = false, c; !i; )
      n === -1 && (n = r.length, i = true), c = r.slice(a, n).trim(), (c || !i) && t.push(c), a = n + 1, n = r.indexOf(ga2, a);
    return t;
  }
  o2(g4, "parse");
  function v4(e4, t) {
    var r = t || {}, n = r.padLeft === false ? en2 : ns, a = r.padRight ? ns : en2;
    return e4[e4.length - 1] === en2 && (e4 = e4.concat(en2)), e4.join(a + ga2 + n).trim();
  }
  o2(v4, "stringify");
});
var fs = H2((o9, us) => {
  "use strict";
  var w4 = Kc(), as = Nn2(), b4 = es(), is = rs().parse, ls = os().parse;
  us.exports = y4;
  var R4 = {}.hasOwnProperty;
  function y4(e4, t, r) {
    var n = r ? M4(r) : null;
    return a;
    function a(c, l) {
      var s = b4(c, t), u = Array.prototype.slice.call(arguments, 2), f = s.tagName.toLowerCase(), d;
      if (s.tagName = n && R4.call(n, f) ? n[f] : f, l && x4(l, s) && (u.unshift(l), l = null), l)
        for (d in l)
          i(s.properties, d, l[d]);
      return ss(s.children, u), s.tagName === "template" && (s.content = { type: "root", children: s.children }, s.children = []), s;
    }
    function i(c, l, s) {
      var u, f, d;
      s == null || s !== s || (u = w4(e4, l), f = u.property, d = s, typeof d == "string" && (u.spaceSeparated ? d = is(d) : u.commaSeparated ? d = ls(d) : u.commaOrSpaceSeparated && (d = is(ls(d).join(" ")))), f === "style" && typeof s != "string" && (d = C4(d)), f === "className" && c.className && (d = c.className.concat(d)), c[f] = S4(u, f, d));
    }
  }
  o2(y4, "factory");
  function x4(e4, t) {
    return typeof e4 == "string" || "length" in e4 || E4(t.tagName, e4);
  }
  o2(x4, "isChildren");
  function E4(e4, t) {
    var r = t.type;
    return e4 === "input" || !r || typeof r != "string" ? false : typeof t.children == "object" && "length" in t.children ? true : (r = r.toLowerCase(), e4 === "button" ? r !== "menu" && r !== "submit" && r !== "reset" && r !== "button" : "value" in t);
  }
  o2(E4, "isNode");
  function ss(e4, t) {
    var r, n;
    if (typeof t == "string" || typeof t == "number") {
      e4.push({ type: "text", value: String(t) });
      return;
    }
    if (typeof t == "object" && "length" in t) {
      for (r = -1, n = t.length; ++r < n; )
        ss(e4, t[r]);
      return;
    }
    if (typeof t != "object" || !("type" in t))
      throw new Error("Expected node, nodes, or string, got `" + t + "`");
    e4.push(t);
  }
  o2(ss, "addChild");
  function S4(e4, t, r) {
    var n, a, i;
    if (typeof r != "object" || !("length" in r))
      return cs(e4, t, r);
    for (a = r.length, n = -1, i = []; ++n < a; )
      i[n] = cs(e4, t, r[n]);
    return i;
  }
  o2(S4, "parsePrimitives");
  function cs(e4, t, r) {
    var n = r;
    return e4.number || e4.positiveNumber ? !isNaN(n) && n !== "" && (n = Number(n)) : (e4.boolean || e4.overloadedBoolean) && typeof n == "string" && (n === "" || as(r) === as(t)) && (n = true), n;
  }
  o2(cs, "parsePrimitive");
  function C4(e4) {
    var t = [], r;
    for (r in e4)
      t.push([r, e4[r]].join(": "));
    return t.join("; ");
  }
  o2(C4, "style");
  function M4(e4) {
    for (var t = e4.length, r = -1, n = {}, a; ++r < t; )
      a = e4[r], n[a.toLowerCase()] = a;
    return n;
  }
  o2(M4, "createAdjustMap");
});
var ms = H2((i9, ps) => {
  "use strict";
  var L4 = Xc(), A4 = fs(), ds = A4(L4, "div");
  ds.displayName = "html";
  ps.exports = ds;
});
var gs = H2((l9, hs) => {
  "use strict";
  hs.exports = ms();
});
var vs = H2((c9, I4) => {
  I4.exports = {
    AElig: "Æ",
    AMP: "&",
    Aacute: "Á",
    Acirc: "Â",
    Agrave: "À",
    Aring: "Å",
    Atilde: "Ã",
    Auml: "Ä",
    COPY: "©",
    Ccedil: "Ç",
    ETH: "Ð",
    Eacute: "É",
    Ecirc: "Ê",
    Egrave: "È",
    Euml: "Ë",
    GT: ">",
    Iacute: "Í",
    Icirc: "Î",
    Igrave: "Ì",
    Iuml: "Ï",
    LT: "<",
    Ntilde: "Ñ",
    Oacute: "Ó",
    Ocirc: "Ô",
    Ograve: "Ò",
    Oslash: "Ø",
    Otilde: "Õ",
    Ouml: "Ö",
    QUOT: '"',
    REG: "®",
    THORN: "Þ",
    Uacute: "Ú",
    Ucirc: "Û",
    Ugrave: "Ù",
    Uuml: "Ü",
    Yacute: "Ý",
    aacute: "á",
    acirc: "â",
    acute: "´",
    aelig: "æ",
    agrave: "à",
    amp: "&",
    aring: "å",
    atilde: "ã",
    auml: "ä",
    brvbar: "¦",
    ccedil: "ç",
    cedil: "¸",
    cent: "¢",
    copy: "©",
    curren: "¤",
    deg: "°",
    divide: "÷",
    eacute: "é",
    ecirc: "ê",
    egrave: "è",
    eth: "ð",
    euml: "ë",
    frac12: "½",
    frac14: "¼",
    frac34: "¾",
    gt: ">",
    iacute: "í",
    icirc: "î",
    iexcl: "¡",
    igrave: "ì",
    iquest: "¿",
    iuml: "ï",
    laquo: "«",
    lt: "<",
    macr: "¯",
    micro: "µ",
    middot: "·",
    nbsp: " ",
    not: "¬",
    ntilde: "ñ",
    oacute: "ó",
    ocirc: "ô",
    ograve: "ò",
    ordf: "ª",
    ordm: "º",
    oslash: "ø",
    otilde: "õ",
    ouml: "ö",
    para: "¶",
    plusmn: "±",
    pound: "£",
    quot: '"',
    raquo: "»",
    reg: "®",
    sect: "§",
    shy: "­",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    szlig: "ß",
    thorn: "þ",
    times: "×",
    uacute: "ú",
    ucirc: "û",
    ugrave: "ù",
    uml: "¨",
    uuml: "ü",
    yacute: "ý",
    yen: "¥",
    yuml: "ÿ"
  };
});
var ws = H2((s9, z4) => {
  z4.exports = {
    "0": "�",
    "128": "€",
    "130": "‚",
    "131": "ƒ",
    "132": "„",
    "133": "…",
    "134": "†",
    "135": "‡",
    "136": "ˆ",
    "137": "‰",
    "138": "Š",
    "139": "‹",
    "140": "Œ",
    "142": "Ž",
    "145": "‘",
    "146": "’",
    "147": "“",
    "148": "”",
    "149": "•",
    "150": "–",
    "151": "—",
    "152": "˜",
    "153": "™",
    "154": "š",
    "155": "›",
    "156": "œ",
    "158": "ž",
    "159": "Ÿ"
  };
});
var wa2 = H2((u9, bs) => {
  "use strict";
  bs.exports = T4;
  function T4(e4) {
    var t = typeof e4 == "string" ? e4.charCodeAt(0) : e4;
    return t >= 48 && t <= 57;
  }
  o2(T4, "decimal");
});
var ys = H2((d9, Rs) => {
  "use strict";
  Rs.exports = H4;
  function H4(e4) {
    var t = typeof e4 == "string" ? e4.charCodeAt(0) : e4;
    return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57;
  }
  o2(H4, "hexadecimal");
});
var Es = H2((m9, xs) => {
  "use strict";
  xs.exports = P4;
  function P4(e4) {
    var t = typeof e4 == "string" ? e4.charCodeAt(0) : e4;
    return t >= 97 && t <= 122 || t >= 65 && t <= 90;
  }
  o2(P4, "alphabetical");
});
var Cs = H2((g9, Ss) => {
  "use strict";
  var k4 = Es(), O4 = wa2();
  Ss.exports = B4;
  function B4(e4) {
    return k4(e4) || O4(e4);
  }
  o2(B4, "alphanumerical");
});
var Ls = H2((w9, Ms) => {
  "use strict";
  var _n2, N4 = 59;
  Ms.exports = D4;
  function D4(e4) {
    var t = "&" + e4 + ";", r;
    return _n2 = _n2 || document.createElement("i"), _n2.innerHTML = t, r = _n2.textContent, r.charCodeAt(r.length - 1) === N4 && e4 !== "semi" || r === t ? false : r;
  }
  o2(D4, "decodeEntity");
});
var $s = H2((R9, _s) => {
  "use strict";
  var As = vs(), Is = ws(), F4 = wa2(), _4 = ys(), Ps = Cs(), $4 = Ls();
  _s.exports = em;
  var V4 = {}.hasOwnProperty, mr2 = String.fromCharCode, j4 = Function.prototype, zs = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: false,
    nonTerminated: true
  }, W4 = 9, Ts = 10, U4 = 12, q4 = 32, Hs2 = 38, G4 = 59, X4 = 60, Y4 = 61, Z4 = 35, K4 = 88, J4 = 120, Q4 = 65533, hr2 = "named", Ra2 = "hexadecimal", ya2 = "decimal", xa2 = {};
  xa2[Ra2] = 16;
  xa2[ya2] = 10;
  var $n = {};
  $n[hr2] = Ps;
  $n[ya2] = F4;
  $n[Ra2] = _4;
  var ks = 1, Os = 2, Bs = 3, Ns = 4, Ds = 5, ba2 = 6, Fs = 7, yt2 = {};
  yt2[ks] = "Named character references must be terminated by a semicolon";
  yt2[Os] = "Numeric character references must be terminated by a semicolon";
  yt2[Bs] = "Named character references cannot be empty";
  yt2[Ns] = "Numeric character references cannot be empty";
  yt2[Ds] = "Named character references must be known";
  yt2[ba2] = "Numeric character references cannot be disallowed";
  yt2[Fs] = "Numeric character references cannot be outside the permissible Unicode range";
  function em(e4, t) {
    var r = {}, n, a;
    t || (t = {});
    for (a in zs)
      n = t[a], r[a] = n ?? zs[a];
    return (r.position.indent || r.position.start) && (r.indent = r.position.indent || [], r.position = r.position.start), tm(e4, r);
  }
  o2(em, "parseEntities");
  function tm(e4, t) {
    var r = t.additional, n = t.nonTerminated, a = t.text, i = t.reference, c = t.warning, l = t.textContext, s = t.referenceContext, u = t.warningContext, f = t.position, d = t.indent || [], m = e4.length, v = 0, R = -1, p = f.column || 1, h4 = f.line || 1, g = "", w = [], b, x, E4, y, S, L2, M2, A, P2, _2, F, K2, T, z2, k2, V2, D2, j2, O;
    for (typeof r == "string" && (r = r.charCodeAt(0)), V2 = G(), A = c ? Ee2 : j4, v--, m++; ++v < m; )
      if (S === Ts && (p = d[R] || 1), S = e4.charCodeAt(v), S === Hs2) {
        if (M2 = e4.charCodeAt(v + 1), M2 === W4 || M2 === Ts || M2 === U4 || M2 === q4 || M2 === Hs2 || M2 === X4 || M2 !== M2 || r && M2 === r) {
          g += mr2(S), p++;
          continue;
        }
        for (T = v + 1, K2 = T, O = T, M2 === Z4 ? (O = ++K2, M2 = e4.charCodeAt(O), M2 === K4 || M2 === J4 ? (z2 = Ra2, O = ++K2) : z2 = ya2) : z2 = hr2, b = "", F = "", y = "", k2 = $n[z2], O--; ++O < m && (M2 = e4.charCodeAt(O), !!k2(M2)); )
          y += mr2(M2), z2 === hr2 && V4.call(As, y) && (b = y, F = As[y]);
        E4 = e4.charCodeAt(O) === G4, E4 && (O++, x = z2 === hr2 ? $4(y) : false, x && (b = y, F = x)), j2 = 1 + O - T, !E4 && !n || (y ? z2 === hr2 ? (E4 && !F ? A(Ds, 1) : (b !== y && (O = K2 + b.length, j2 = 1 + O - K2, E4 = false), E4 || (P2 = b ? ks : Bs, t.attribute ? (M2 = e4.charCodeAt(O), M2 === Y4 ? (A(P2, j2), F = null) : Ps(M2) ? F = null : A(P2, j2)) : A(P2, j2))), L2 = F) : (E4 || A(Os, j2), L2 = parseInt(y, xa2[z2]), rm(L2) ? (A(Fs, j2), L2 = mr2(Q4)) : L2 in Is ? (A(ba2, j2), L2 = Is[L2]) : (_2 = "", nm(L2) && A(ba2, j2), L2 > 65535 && (L2 -= 65536, _2 += mr2(L2 >>> 10 | 55296), L2 = 56320 | L2 & 1023), L2 = _2 + mr2(L2))) : z2 !== hr2 && A(Ns, j2)), L2 ? (pe2(), V2 = G(), v = O - 1, p += O - T + 1, w.push(L2), D2 = G(), D2.offset++, i && i.call(
          s,
          L2,
          { start: V2, end: D2 },
          e4.slice(T - 1, O)
        ), V2 = D2) : (y = e4.slice(T - 1, O), g += y, p += y.length, v = O - 1);
      } else
        S === 10 && (h4++, R++, p = 0), S === S ? (g += mr2(S), p++) : pe2();
    return w.join("");
    function G() {
      return {
        line: h4,
        column: p,
        offset: v + (f.offset || 0)
      };
    }
    function Ee2(se2, ue) {
      var ve2 = G();
      ve2.column += ue, ve2.offset += ue, c.call(u, yt2[se2], ve2, se2);
    }
    function pe2() {
      g && (w.push(g), a && a.call(l, g, { start: V2, end: G() }), g = "");
    }
  }
  o2(tm, "parse");
  function rm(e4) {
    return e4 >= 55296 && e4 <= 57343 || e4 > 1114111;
  }
  o2(rm, "prohibited");
  function nm(e4) {
    return e4 >= 1 && e4 <= 8 || e4 === 11 || e4 >= 13 && e4 <= 31 || e4 >= 127 && e4 <= 159 || e4 >= 64976 && e4 <= 65007 || (e4 & 65535) === 65535 || (e4 & 65535) === 65534;
  }
  o2(nm, "disallowed");
});
var js2 = H2((x9, Vn2) => {
  var om = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  var Vs2 = function(e4) {
    var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, r = 0, n = {}, a = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: e4.Prism && e4.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: e4.Prism && e4.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: o2(function p(h4) {
          return h4 instanceof i ? new i(h4.type, p(h4.content), h4.alias) : Array.isArray(h4) ? h4.map(p) : h4.replace(/&/g, "&amp;").replace(
            /</g,
            "&lt;"
          ).replace(/\u00a0/g, " ");
        }, "encode"),
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: o2(function(p) {
          return Object.prototype.toString.call(p).slice(8, -1);
        }, "type"),
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: o2(function(p) {
          return p.__id || Object.defineProperty(p, "__id", { value: ++r }), p.__id;
        }, "objId"),
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: o2(function p(h4, g) {
          g = g || {};
          var w, b;
          switch (a.util.type(h4)) {
            case "Object":
              if (b = a.util.objId(h4), g[b])
                return g[b];
              w = /** @type {Record<string, any>} */
              {}, g[b] = w;
              for (var x in h4)
                h4.hasOwnProperty(x) && (w[x] = p(h4[x], g));
              return (
                /** @type {any} */
                w
              );
            case "Array":
              return b = a.util.objId(h4), g[b] ? g[b] : (w = [], g[b] = w, /** @type {Array} */
              /** @type {any} */
              h4.forEach(function(E4, y) {
                w[y] = p(E4, g);
              }), /** @type {any} */
              w);
            default:
              return h4;
          }
        }, "deepClone"),
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: o2(function(p) {
          for (; p; ) {
            var h4 = t.exec(p.className);
            if (h4)
              return h4[1].toLowerCase();
            p = p.parentElement;
          }
          return "none";
        }, "getLanguage"),
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: o2(function(p, h4) {
          p.className = p.className.replace(RegExp(t, "gi"), ""), p.classList.add("language-" + h4);
        }, "setLanguage"),
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: o2(function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (w) {
            var p = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack) || [])[1];
            if (p) {
              var h4 = document.getElementsByTagName("script");
              for (var g in h4)
                if (h4[g].src == p)
                  return h4[g];
            }
            return null;
          }
        }, "currentScript"),
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: o2(function(p, h4, g) {
          for (var w = "no-" + h4; p; ) {
            var b = p.classList;
            if (b.contains(h4))
              return true;
            if (b.contains(w))
              return false;
            p = p.parentElement;
          }
          return !!g;
        }, "isActive")
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: n,
        plaintext: n,
        text: n,
        txt: n,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: o2(function(p, h4) {
          var g = a.util.clone(a.languages[p]);
          for (var w in h4)
            g[w] = h4[w];
          return g;
        }, "extend"),
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: o2(function(p, h4, g, w) {
          w = w || /** @type {any} */
          a.languages;
          var b = w[p], x = {};
          for (var E4 in b)
            if (b.hasOwnProperty(E4)) {
              if (E4 == h4)
                for (var y in g)
                  g.hasOwnProperty(y) && (x[y] = g[y]);
              g.hasOwnProperty(E4) || (x[E4] = b[E4]);
            }
          var S = w[p];
          return w[p] = x, a.languages.DFS(a.languages, function(L2, M2) {
            M2 === S && L2 != p && (this[L2] = x);
          }), x;
        }, "insertBefore"),
        // Traverse a language definition with Depth First Search
        DFS: o2(function p(h4, g, w, b) {
          b = b || {};
          var x = a.util.objId;
          for (var E4 in h4)
            if (h4.hasOwnProperty(E4)) {
              g.call(h4, E4, h4[E4], w || E4);
              var y = h4[E4], S = a.util.type(y);
              S === "Object" && !b[x(y)] ? (b[x(y)] = true, p(y, g, null, b)) : S === "Array" && !b[x(y)] && (b[x(y)] = true, p(y, g, E4, b));
            }
        }, "DFS")
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: o2(function(p, h4) {
        a.highlightAllUnder(document, p, h4);
      }, "highlightAll"),
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: o2(function(p, h4, g) {
        var w = {
          callback: g,
          container: p,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        a.hooks.run("before-highlightall", w), w.elements = Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)), a.hooks.run(
          "before-all-elements-highlight",
          w
        );
        for (var b = 0, x; x = w.elements[b++]; )
          a.highlightElement(x, h4 === true, w.callback);
      }, "highlightAllUnder"),
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: o2(function(p, h4, g) {
        var w = a.util.getLanguage(p), b = a.languages[w];
        a.util.setLanguage(p, w);
        var x = p.parentElement;
        x && x.nodeName.toLowerCase() === "pre" && a.util.setLanguage(x, w);
        var E4 = p.textContent, y = {
          element: p,
          language: w,
          grammar: b,
          code: E4
        };
        function S(M2) {
          y.highlightedCode = M2, a.hooks.run("before-insert", y), y.element.innerHTML = y.highlightedCode, a.hooks.run("after-highlight", y), a.hooks.run("complete", y), g && g.call(y.element);
        }
        if (o2(S, "insertHighlightedCode"), a.hooks.run("before-sanity-check", y), x = y.element.parentElement, x && x.nodeName.toLowerCase() === "pre" && !x.hasAttribute("tabindex") && x.setAttribute("tabindex", "0"), !y.code) {
          a.hooks.run("complete", y), g && g.call(y.element);
          return;
        }
        if (a.hooks.run("before-highlight", y), !y.grammar) {
          S(a.util.encode(y.code));
          return;
        }
        if (h4 && e4.Worker) {
          var L2 = new Worker(a.filename);
          L2.onmessage = function(M2) {
            S(M2.data);
          }, L2.postMessage(JSON.stringify({
            language: y.language,
            code: y.code,
            immediateClose: true
          }));
        } else
          S(a.highlight(y.code, y.grammar, y.language));
      }, "highlightElement"),
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: o2(function(p, h4, g) {
        var w = {
          code: p,
          grammar: h4,
          language: g
        };
        if (a.hooks.run("before-tokenize", w), !w.grammar)
          throw new Error('The language "' + w.language + '" has no grammar.');
        return w.tokens = a.tokenize(w.code, w.grammar), a.hooks.run("after-tokenize", w), i.stringify(a.util.encode(w.tokens), w.language);
      }, "highlight"),
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: o2(function(p, h4) {
        var g = h4.rest;
        if (g) {
          for (var w in g)
            h4[w] = g[w];
          delete h4.rest;
        }
        var b = new s();
        return u(b, b.head, p), l(p, b, h4, b.head, 0), d(b);
      }, "tokenize"),
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: o2(function(p, h4) {
          var g = a.hooks.all;
          g[p] = g[p] || [], g[p].push(h4);
        }, "add"),
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: o2(function(p, h4) {
          var g = a.hooks.all[p];
          if (!(!g || !g.length))
            for (var w = 0, b; b = g[w++]; )
              b(h4);
        }, "run")
      },
      Token: i
    };
    e4.Prism = a;
    function i(p, h4, g, w) {
      this.type = p, this.content = h4, this.alias = g, this.length = (w || "").length | 0;
    }
    o2(i, "Token"), i.stringify = o2(function p(h4, g) {
      if (typeof h4 == "string")
        return h4;
      if (Array.isArray(h4)) {
        var w = "";
        return h4.forEach(function(S) {
          w += p(S, g);
        }), w;
      }
      var b = {
        type: h4.type,
        content: p(h4.content, g),
        tag: "span",
        classes: ["token", h4.type],
        attributes: {},
        language: g
      }, x = h4.alias;
      x && (Array.isArray(x) ? Array.prototype.push.apply(b.classes, x) : b.classes.push(x)), a.hooks.run("wrap", b);
      var E4 = "";
      for (var y in b.attributes)
        E4 += " " + y + '="' + (b.attributes[y] || "").replace(/"/g, "&quot;") + '"';
      return "<" + b.tag + ' class="' + b.classes.join(" ") + '"' + E4 + ">" + b.content + "</" + b.tag + ">";
    }, "stringify");
    function c(p, h4, g, w) {
      p.lastIndex = h4;
      var b = p.exec(g);
      if (b && w && b[1]) {
        var x = b[1].length;
        b.index += x, b[0] = b[0].slice(x);
      }
      return b;
    }
    o2(c, "matchPattern");
    function l(p, h4, g, w, b, x) {
      for (var E4 in g)
        if (!(!g.hasOwnProperty(E4) || !g[E4])) {
          var y = g[E4];
          y = Array.isArray(y) ? y : [y];
          for (var S = 0; S < y.length; ++S) {
            if (x && x.cause == E4 + "," + S)
              return;
            var L2 = y[S], M2 = L2.inside, A = !!L2.lookbehind, P2 = !!L2.greedy, _2 = L2.alias;
            if (P2 && !L2.pattern.global) {
              var F = L2.pattern.toString().match(/[imsuy]*$/)[0];
              L2.pattern = RegExp(L2.pattern.source, F + "g");
            }
            for (var K2 = L2.pattern || L2, T = w.next, z2 = b; T !== h4.tail && !(x && z2 >= x.reach); z2 += T.value.length, T = T.next) {
              var k2 = T.value;
              if (h4.length > p.length)
                return;
              if (!(k2 instanceof i)) {
                var V2 = 1, D2;
                if (P2) {
                  if (D2 = c(K2, z2, p, A), !D2 || D2.index >= p.length)
                    break;
                  var Ee2 = D2.index, j2 = D2.index + D2[0].length, O = z2;
                  for (O += T.value.length; Ee2 >= O; )
                    T = T.next, O += T.value.length;
                  if (O -= T.value.length, z2 = O, T.value instanceof i)
                    continue;
                  for (var G = T; G !== h4.tail && (O < j2 || typeof G.value == "string"); G = G.next)
                    V2++, O += G.value.length;
                  V2--, k2 = p.slice(z2, O), D2.index -= z2;
                } else if (D2 = c(K2, 0, k2, A), !D2)
                  continue;
                var Ee2 = D2.index, pe2 = D2[0], se2 = k2.slice(0, Ee2), ue = k2.slice(Ee2 + pe2.length), ve2 = z2 + k2.length;
                x && ve2 > x.reach && (x.reach = ve2);
                var Se2 = T.prev;
                se2 && (Se2 = u(h4, Se2, se2), z2 += se2.length), f(h4, Se2, V2);
                var Ot2 = new i(E4, M2 ? a.tokenize(pe2, M2) : pe2, _2, pe2);
                if (T = u(h4, Se2, Ot2), ue && u(h4, T, ue), V2 > 1) {
                  var qr2 = {
                    cause: E4 + "," + S,
                    reach: ve2
                  };
                  l(p, h4, g, T.prev, z2, qr2), x && qr2.reach > x.reach && (x.reach = qr2.reach);
                }
              }
            }
          }
        }
    }
    o2(l, "matchGrammar");
    function s() {
      var p = { value: null, prev: null, next: null }, h4 = { value: null, prev: p, next: null };
      p.next = h4, this.head = p, this.tail = h4, this.length = 0;
    }
    o2(s, "LinkedList");
    function u(p, h4, g) {
      var w = h4.next, b = { value: g, prev: h4, next: w };
      return h4.next = b, w.prev = b, p.length++, b;
    }
    o2(u, "addAfter");
    function f(p, h4, g) {
      for (var w = h4.next, b = 0; b < g && w !== p.tail; b++)
        w = w.next;
      h4.next = w, w.prev = h4, p.length -= b;
    }
    o2(f, "removeRange");
    function d(p) {
      for (var h4 = [], g = p.head.next; g !== p.tail; )
        h4.push(g.value), g = g.next;
      return h4;
    }
    if (o2(d, "toArray"), !e4.document)
      return e4.addEventListener && (a.disableWorkerMessageHandler || e4.addEventListener("message", function(p) {
        var h4 = JSON.parse(p.data), g = h4.language, w = h4.code, b = h4.immediateClose;
        e4.postMessage(a.highlight(w, a.languages[g], g)), b && e4.close();
      }, false)), a;
    var m = a.util.currentScript();
    m && (a.filename = m.src, m.hasAttribute("data-manual") && (a.manual = true));
    function v() {
      a.manual || a.highlightAll();
    }
    if (o2(v, "highlightAutomaticallyCallback"), !a.manual) {
      var R = document.readyState;
      R === "loading" || R === "interactive" && m && m.defer ? document.addEventListener("DOMContentLoaded", v) : window.requestAnimationFrame ? window.requestAnimationFrame(v) : window.setTimeout(v, 16);
    }
    return a;
  }(om);
  typeof Vn2 < "u" && Vn2.exports && (Vn2.exports = Vs2);
  typeof global < "u" && (global.Prism = Vs2);
});
var Sa2 = H2((S9, Ws2) => {
  "use strict";
  Ws2.exports = Ea2;
  Ea2.displayName = "markup";
  Ea2.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function Ea2(e4) {
    e4.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
      },
      doctype: {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: true,
            greedy: true,
            inside: null
            // see below
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: true
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    }, e4.languages.markup.tag.inside["attr-value"].inside.entity = e4.languages.markup.entity, e4.languages.markup.doctype.inside["internal-subset"].inside = e4.languages.markup, e4.hooks.add("wrap", function(t) {
      t.type === "entity" && (t.attributes.title = t.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(e4.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: o2(function(r, n) {
        var a = {};
        a["language-" + n] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: e4.languages[n]
        }, a.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var i = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: a
          }
        };
        i["language-" + n] = {
          pattern: /[\s\S]+/,
          inside: e4.languages[n]
        };
        var c = {};
        c[r] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function() {
                return r;
              }
            ),
            "i"
          ),
          lookbehind: true,
          greedy: true,
          inside: i
        }, e4.languages.insertBefore("markup", "cdata", c);
      }, "addInlined")
    }), Object.defineProperty(e4.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: o2(function(t, r) {
        e4.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + t + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: true,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: [r, "language-" + r],
                  inside: e4.languages[r]
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }, "value")
    }), e4.languages.html = e4.languages.markup, e4.languages.mathml = e4.languages.markup, e4.languages.svg = e4.languages.markup, e4.languages.xml = e4.languages.extend("markup", {}), e4.languages.ssml = e4.languages.xml, e4.languages.atom = e4.languages.xml, e4.languages.rss = e4.languages.xml;
  }
  o2(Ea2, "markup");
});
var Ma2 = H2((M9, Us2) => {
  "use strict";
  Us2.exports = Ca2;
  Ca2.displayName = "css";
  Ca2.aliases = [];
  function Ca2(e4) {
    (function(t) {
      var r = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      t.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: true,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: true
            }
            // See rest below
          }
        },
        url: {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp(
            "\\burl\\((?:" + r.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)",
            "i"
          ),
          greedy: true,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + r.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(
            `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + r.source + ")*(?=\\s*\\{)"
          ),
          lookbehind: true
        },
        string: {
          pattern: r,
          greedy: true
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: true
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: true
        },
        punctuation: /[(){};:,]/
      }, t.languages.css.atrule.inside.rest = t.languages.css;
      var n = t.languages.markup;
      n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
    })(e4);
  }
  o2(Ca2, "css");
});
var Gs2 = H2((A9, qs2) => {
  "use strict";
  qs2.exports = La2;
  La2.displayName = "clike";
  La2.aliases = [];
  function La2(e4) {
    e4.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    };
  }
  o2(La2, "clike");
});
var Ys2 = H2((z9, Xs) => {
  "use strict";
  Xs.exports = Aa2;
  Aa2.displayName = "javascript";
  Aa2.aliases = ["js"];
  function Aa2(e4) {
    e4.languages.javascript = e4.languages.extend("clike", {
      "class-name": [
        e4.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: true
        }
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: true
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: true
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: true
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), e4.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e4.languages.insertBefore("javascript", "keyword", {
      regex: {
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: e4.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: true,
          inside: e4.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: true,
          inside: e4.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: true,
          inside: e4.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: true,
          inside: e4.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), e4.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: true,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: e4.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: "property"
      }
    }), e4.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property"
      }
    }), e4.languages.markup && (e4.languages.markup.tag.addInlined("script", "javascript"), e4.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), e4.languages.js = e4.languages.javascript;
  }
  o2(Aa2, "javascript");
});
var Qs = H2((H9, Js2) => {
  "use strict";
  var tn2 = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, am = Rm();
  tn2.Prism = { manual: true, disableWorkerMessageHandler: true };
  var im = gs(), lm = $s(), Zs = js2(), cm = Sa2(), sm = Ma2(), um = Gs2(), fm = Ys2();
  am();
  var Ia2 = {}.hasOwnProperty;
  function Ks2() {
  }
  o2(Ks2, "Refractor");
  Ks2.prototype = Zs;
  var oe2 = new Ks2();
  Js2.exports = oe2;
  oe2.highlight = pm;
  oe2.register = rn2;
  oe2.alias = dm;
  oe2.registered = mm;
  oe2.listLanguages = hm;
  rn2(cm);
  rn2(sm);
  rn2(um);
  rn2(fm);
  oe2.util.encode = wm;
  oe2.Token.stringify = gm;
  function rn2(e4) {
    if (typeof e4 != "function" || !e4.displayName)
      throw new Error("Expected `function` for `grammar`, got `" + e4 + "`");
    oe2.languages[e4.displayName] === void 0 && e4(oe2);
  }
  o2(rn2, "register");
  function dm(e4, t) {
    var r = oe2.languages, n = e4, a, i, c, l;
    t && (n = {}, n[e4] = t);
    for (a in n)
      for (i = n[a], i = typeof i == "string" ? [i] : i, c = i.length, l = -1; ++l < c; )
        r[i[l]] = r[a];
  }
  o2(dm, "alias");
  function pm(e4, t) {
    var r = Zs.highlight, n;
    if (typeof e4 != "string")
      throw new Error("Expected `string` for `value`, got `" + e4 + "`");
    if (oe2.util.type(t) === "Object")
      n = t, t = null;
    else {
      if (typeof t != "string")
        throw new Error("Expected `string` for `name`, got `" + t + "`");
      if (Ia2.call(oe2.languages, t))
        n = oe2.languages[t];
      else
        throw new Error("Unknown language: `" + t + "` is not registered");
    }
    return r.call(this, e4, n, t);
  }
  o2(pm, "highlight");
  function mm(e4) {
    if (typeof e4 != "string")
      throw new Error("Expected `string` for `language`, got `" + e4 + "`");
    return Ia2.call(oe2.languages, e4);
  }
  o2(mm, "registered");
  function hm() {
    var e4 = oe2.languages, t = [], r;
    for (r in e4)
      Ia2.call(e4, r) && typeof e4[r] == "object" && t.push(r);
    return t;
  }
  o2(hm, "listLanguages");
  function gm(e4, t, r) {
    var n;
    return typeof e4 == "string" ? { type: "text", value: e4 } : oe2.util.type(e4) === "Array" ? vm(e4, t) : (n = {
      type: e4.type,
      content: oe2.Token.stringify(e4.content, t, r),
      tag: "span",
      classes: ["token", e4.type],
      attributes: {},
      language: t,
      parent: r
    }, e4.alias && (n.classes = n.classes.concat(e4.alias)), oe2.hooks.run("wrap", n), im(
      n.tag + "." + n.classes.join("."),
      bm(n.attributes),
      n.content
    ));
  }
  o2(gm, "stringify");
  function vm(e4, t) {
    for (var r = [], n = e4.length, a = -1, i; ++a < n; )
      i = e4[a], i !== "" && i !== null && i !== void 0 && r.push(i);
    for (a = -1, n = r.length; ++a < n; )
      i = r[a], r[a] = oe2.Token.stringify(i, t, r);
    return r;
  }
  o2(vm, "stringifyAll");
  function wm(e4) {
    return e4;
  }
  o2(wm, "encode");
  function bm(e4) {
    var t;
    for (t in e4)
      e4[t] = lm(e4[t]);
    return e4;
  }
  o2(bm, "attributes");
  function Rm() {
    var e4 = "Prism" in tn2, t = e4 ? tn2.Prism : void 0;
    return r;
    function r() {
      e4 ? tn2.Prism = t : delete tn2.Prism, e4 = void 0, t = void 0;
    }
  }
  o2(Rm, "capture");
});
var jn;
var za2;
var Wn;
var e1 = C2(() => {
  gc();
  jn = me2(Qs()), za2 = ia2(jn.default, {});
  za2.registerLanguage = function(e4, t) {
    return jn.default.register(t);
  };
  za2.alias = function(e4, t) {
    return jn.default.alias(e4, t);
  };
  Wn = za2;
});
var t1 = C2(() => {
  aa2();
});
var n1 = H2((D9, r1) => {
  "use strict";
  r1.exports = Ta2;
  Ta2.displayName = "bash";
  Ta2.aliases = ["shell"];
  function Ta2(e4) {
    (function(t) {
      var r = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: true,
        alias: "punctuation",
        // this looks reasonably well in all themes
        inside: null
        // see below
      }, a = {
        bash: n,
        environment: {
          pattern: RegExp("\\$" + r),
          alias: "constant"
        },
        variable: [
          // [0]: Arithmetic Environment
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: true,
            inside: {
              // If there is a $ sign at the beginning highlight $(( and )) as variable
              variable: [
                {
                  pattern: /(^\$\(\([\s\S]+)\)\)/,
                  lookbehind: true
                },
                /^\$\(\(/
              ],
              number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
              operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              // If there is no $ sign at the beginning highlight (( and )) as punctuation
              punctuation: /\(\(?|\)\)?|,|;/
            }
          },
          // [1]: Command Substitution
          {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: true,
            inside: {
              variable: /^\$\(|^`|\)$|`$/
            }
          },
          // [2]: Brace expansion
          {
            pattern: /\$\{[^}]+\}/,
            greedy: true,
            inside: {
              operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
              punctuation: /[\[\]]/,
              environment: {
                pattern: RegExp("(\\{)" + r),
                lookbehind: true,
                alias: "constant"
              }
            }
          },
          /\$(?:\w+|[#?*!@$])/
        ],
        // Escape sequences from echo and printf's manuals, and escaped quotes.
        entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
      };
      t.languages.bash = {
        shebang: {
          pattern: /^#!\s*\/.*/,
          alias: "important"
        },
        comment: {
          pattern: /(^|[^"{\\$])#.*/,
          lookbehind: true
        },
        "function-name": [
          // a) function foo {
          // b) foo() {
          // c) function foo() {
          // but not “foo {”
          {
            // a) and c)
            pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
            lookbehind: true,
            alias: "function"
          },
          {
            // b)
            pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
            alias: "function"
          }
        ],
        // Highlight variable names as variables in for and select beginnings.
        "for-or-select": {
          pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
          alias: "variable",
          lookbehind: true
        },
        // Highlight variable names as variables in the left-hand part
        // of assignments (“=” and “+=”).
        "assign-left": {
          pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
          inside: {
            environment: {
              pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + r),
              lookbehind: true,
              alias: "constant"
            }
          },
          alias: "variable",
          lookbehind: true
        },
        string: [
          // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
          {
            pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
            lookbehind: true,
            greedy: true,
            inside: a
          },
          // Here-document with quotes around the tag
          // → No expansion (so no “inside”).
          {
            pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
            lookbehind: true,
            greedy: true,
            inside: {
              bash: n
            }
          },
          // “Normal” string
          {
            // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
            pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
            lookbehind: true,
            greedy: true,
            inside: a
          },
          {
            // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
            pattern: /(^|[^$\\])'[^']*'/,
            lookbehind: true,
            greedy: true
          },
          {
            // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
            pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
            greedy: true,
            inside: {
              entity: a.entity
            }
          }
        ],
        environment: {
          pattern: RegExp("\\$?" + r),
          alias: "constant"
        },
        variable: a.variable,
        function: {
          pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        keyword: {
          pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        builtin: {
          pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
          lookbehind: true,
          // Alias added to make those easier to distinguish from strings.
          alias: "class-name"
        },
        boolean: {
          pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        "file-descriptor": {
          pattern: /\B&\d\b/,
          alias: "important"
        },
        operator: {
          // Lots of redirections here, but not just that.
          pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
          inside: {
            "file-descriptor": {
              pattern: /^\d/,
              alias: "important"
            }
          }
        },
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        number: {
          pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
          lookbehind: true
        }
      }, n.inside = t.languages.bash;
      for (var i = [
        "comment",
        "function-name",
        "for-or-select",
        "assign-left",
        "string",
        "environment",
        "function",
        "keyword",
        "builtin",
        "boolean",
        "file-descriptor",
        "operator",
        "punctuation",
        "number"
      ], c = a.variable[1].inside, l = 0; l < i.length; l++)
        c[i[l]] = t.languages.bash[i[l]];
      t.languages.shell = t.languages.bash;
    })(e4);
  }
  o2(Ta2, "bash");
});
var o1;
var a1;
var i1 = C2(() => {
  o1 = me2(n1()), a1 = o1.default;
});
var l1;
var c1;
var s1 = C2(() => {
  l1 = me2(Ma2()), c1 = l1.default;
});
var f1 = H2((V9, u1) => {
  "use strict";
  u1.exports = Ha2;
  Ha2.displayName = "graphql";
  Ha2.aliases = [];
  function Ha2(e4) {
    e4.languages.graphql = {
      comment: /#.*/,
      description: {
        pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
        greedy: true,
        alias: "string",
        inside: {
          "language-markdown": {
            pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
            lookbehind: true,
            inside: e4.languages.markdown
          }
        }
      },
      string: {
        pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
        greedy: true
      },
      number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      boolean: /\b(?:false|true)\b/,
      variable: /\$[a-z_]\w*/i,
      directive: {
        pattern: /@[a-z_]\w*/i,
        alias: "function"
      },
      "attr-name": {
        pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
        greedy: true
      },
      "atom-input": {
        pattern: /\b[A-Z]\w*Input\b/,
        alias: "class-name"
      },
      scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
      constant: /\b[A-Z][A-Z_\d]*\b/,
      "class-name": {
        pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
        lookbehind: true
      },
      fragment: {
        pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
        lookbehind: true,
        alias: "function"
      },
      "definition-mutation": {
        pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
        lookbehind: true,
        alias: "function"
      },
      "definition-query": {
        pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
        lookbehind: true,
        alias: "function"
      },
      keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
      operator: /[!=|&]|\.{3}/,
      "property-query": /\w+(?=\s*\()/,
      object: /\w+(?=\s*\{)/,
      punctuation: /[!(){}\[\]:=,]/,
      property: /\w+/
    }, e4.hooks.add("after-tokenize", o2(function(r) {
      if (r.language !== "graphql")
        return;
      var n = r.tokens.filter(function(h4) {
        return typeof h4 != "string" && h4.type !== "comment" && h4.type !== "scalar";
      }), a = 0;
      function i(h4) {
        return n[a + h4];
      }
      o2(i, "getToken");
      function c(h4, g) {
        g = g || 0;
        for (var w = 0; w < h4.length; w++) {
          var b = i(w + g);
          if (!b || b.type !== h4[w])
            return false;
        }
        return true;
      }
      o2(c, "isTokenType");
      function l(h4, g) {
        for (var w = 1, b = a; b < n.length; b++) {
          var x = n[b], E4 = x.content;
          if (x.type === "punctuation" && typeof E4 == "string") {
            if (h4.test(E4))
              w++;
            else if (g.test(E4) && (w--, w === 0))
              return b;
          }
        }
        return -1;
      }
      o2(l, "findClosingBracket");
      function s(h4, g) {
        var w = h4.alias;
        w ? Array.isArray(w) || (h4.alias = w = [w]) : h4.alias = w = [], w.push(g);
      }
      for (o2(s, "addAlias"); a < n.length; ) {
        var u = n[a++];
        if (u.type === "keyword" && u.content === "mutation") {
          var f = [];
          if (c(["definition-mutation", "punctuation"]) && i(1).content === "(") {
            a += 2;
            var d = l(/^\($/, /^\)$/);
            if (d === -1)
              continue;
            for (; a < d; a++) {
              var m = i(0);
              m.type === "variable" && (s(m, "variable-input"), f.push(m.content));
            }
            a = d + 1;
          }
          if (c(["punctuation", "property-query"]) && i(0).content === "{" && (a++, s(i(0), "property-mutation"), f.length > 0)) {
            var v = l(/^\{$/, /^\}$/);
            if (v === -1)
              continue;
            for (var R = a; R < v; R++) {
              var p = n[R];
              p.type === "variable" && f.indexOf(p.content) >= 0 && s(p, "variable-input");
            }
          }
        }
      }
    }, "afterTokenizeGraphql"));
  }
  o2(Ha2, "graphql");
});
var d1;
var p1;
var m1 = C2(() => {
  d1 = me2(f1()), p1 = d1.default;
});
var g1 = H2((U9, h1) => {
  "use strict";
  h1.exports = Pa2;
  Pa2.displayName = "jsExtras";
  Pa2.aliases = [];
  function Pa2(e4) {
    (function(t) {
      t.languages.insertBefore("javascript", "function-variable", {
        "method-variable": {
          pattern: RegExp(
            "(\\.\\s*)" + t.languages.javascript["function-variable"].pattern.source
          ),
          lookbehind: true,
          alias: ["function-variable", "method", "function", "property-access"]
        }
      }), t.languages.insertBefore("javascript", "function", {
        method: {
          pattern: RegExp(
            "(\\.\\s*)" + t.languages.javascript.function.source
          ),
          lookbehind: true,
          alias: ["function", "property-access"]
        }
      }), t.languages.insertBefore("javascript", "constant", {
        "known-class-name": [
          {
            // standard built-ins
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
            pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: "class-name"
          },
          {
            // errors
            pattern: /\b(?:[A-Z]\w*)Error\b/,
            alias: "class-name"
          }
        ]
      });
      function r(s, u) {
        return RegExp(
          s.replace(/<ID>/g, function() {
            return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
          }),
          u
        );
      }
      o2(r, "withId"), t.languages.insertBefore("javascript", "keyword", {
        imports: {
          // https://tc39.es/ecma262/#sec-imports
          pattern: r(
            /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source
          ),
          lookbehind: true,
          inside: t.languages.javascript
        },
        exports: {
          // https://tc39.es/ecma262/#sec-exports
          pattern: r(
            /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source
          ),
          lookbehind: true,
          inside: t.languages.javascript
        }
      }), t.languages.javascript.keyword.unshift(
        {
          pattern: /\b(?:as|default|export|from|import)\b/,
          alias: "module"
        },
        {
          pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: "control-flow"
        },
        {
          pattern: /\bnull\b/,
          alias: ["null", "nil"]
        },
        {
          pattern: /\bundefined\b/,
          alias: "nil"
        }
      ), t.languages.insertBefore("javascript", "operator", {
        spread: {
          pattern: /\.{3}/,
          alias: "operator"
        },
        arrow: {
          pattern: /=>/,
          alias: "operator"
        }
      }), t.languages.insertBefore("javascript", "punctuation", {
        "property-access": {
          pattern: r(/(\.\s*)#?<ID>/.source),
          lookbehind: true
        },
        "maybe-class-name": {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: true
        },
        dom: {
          // this contains only a few commonly used DOM variables
          pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: "variable"
        },
        console: {
          pattern: /\bconsole(?=\s*\.)/,
          alias: "class-name"
        }
      });
      for (var n = [
        "function",
        "function-variable",
        "method",
        "method-variable",
        "property-access"
      ], a = 0; a < n.length; a++) {
        var i = n[a], c = t.languages.javascript[i];
        t.util.type(c) === "RegExp" && (c = t.languages.javascript[i] = {
          pattern: c
        });
        var l = c.inside || {};
        c.inside = l, l["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(e4);
  }
  o2(Pa2, "jsExtras");
});
var v1;
var w1;
var b1 = C2(() => {
  v1 = me2(g1()), w1 = v1.default;
});
var y1 = H2((X9, R1) => {
  "use strict";
  R1.exports = ka2;
  ka2.displayName = "json";
  ka2.aliases = ["webmanifest"];
  function ka2(e4) {
    e4.languages.json = {
      property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true
      },
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
      },
      comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
      },
      number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      punctuation: /[{}[\],]/,
      operator: /:/,
      boolean: /\b(?:false|true)\b/,
      null: {
        pattern: /\bnull\b/,
        alias: "keyword"
      }
    }, e4.languages.webmanifest = e4.languages.json;
  }
  o2(ka2, "json");
});
var x1;
var E1;
var S1 = C2(() => {
  x1 = me2(y1()), E1 = x1.default;
});
var Ba2 = H2((K9, C1) => {
  "use strict";
  C1.exports = Oa2;
  Oa2.displayName = "jsx";
  Oa2.aliases = [];
  function Oa2(e4) {
    (function(t) {
      var r = t.util.clone(t.languages.javascript), n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, a = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, i = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function c(u, f) {
        return u = u.replace(/<S>/g, function() {
          return n;
        }).replace(/<BRACES>/g, function() {
          return a;
        }).replace(/<SPREAD>/g, function() {
          return i;
        }), RegExp(u, f);
      }
      o2(c, "re"), i = c(i).source, t.languages.jsx = t.languages.extend("markup", r), t.languages.jsx.tag.pattern = c(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source
      ), t.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, t.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, t.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, t.languages.jsx.tag.inside.comment = r.comment, t.languages.insertBefore(
        "inside",
        "attr-name",
        {
          spread: {
            pattern: c(/<SPREAD>/.source),
            inside: t.languages.jsx
          }
        },
        t.languages.jsx.tag
      ), t.languages.insertBefore(
        "inside",
        "special-attr",
        {
          script: {
            // Allow for two levels of nesting
            pattern: c(/=<BRACES>/.source),
            alias: "language-javascript",
            inside: {
              "script-punctuation": {
                pattern: /^=(?=\{)/,
                alias: "punctuation"
              },
              rest: t.languages.jsx
            }
          }
        },
        t.languages.jsx.tag
      );
      var l = o2(function(u) {
        return u ? typeof u == "string" ? u : typeof u.content == "string" ? u.content : u.content.map(l).join("") : "";
      }, "stringifyToken"), s = o2(function(u) {
        for (var f = [], d = 0; d < u.length; d++) {
          var m = u[d], v = false;
          if (typeof m != "string" && (m.type === "tag" && m.content[0] && m.content[0].type === "tag" ? m.content[0].content[0].content === "</" ? f.length > 0 && f[f.length - 1].tagName === l(m.content[0].content[1]) && f.pop() : m.content[m.content.length - 1].content === "/>" || f.push({
            tagName: l(m.content[0].content[1]),
            openedBraces: 0
          }) : f.length > 0 && m.type === "punctuation" && m.content === "{" ? f[f.length - 1].openedBraces++ : f.length > 0 && f[f.length - 1].openedBraces > 0 && m.type === "punctuation" && m.content === "}" ? f[f.length - 1].openedBraces-- : v = true), (v || typeof m == "string") && f.length > 0 && f[f.length - 1].openedBraces === 0) {
            var R = l(m);
            d < u.length - 1 && (typeof u[d + 1] == "string" || u[d + 1].type === "plain-text") && (R += l(u[d + 1]), u.splice(d + 1, 1)), d > 0 && (typeof u[d - 1] == "string" || u[d - 1].type === "plain-text") && (R = l(u[d - 1]) + R, u.splice(d - 1, 1), d--), u[d] = new t.Token(
              "plain-text",
              R,
              null,
              R
            );
          }
          m.content && typeof m.content != "string" && s(m.content);
        }
      }, "walkTokens");
      t.hooks.add("after-tokenize", function(u) {
        u.language !== "jsx" && u.language !== "tsx" || s(u.tokens);
      });
    })(e4);
  }
  o2(Oa2, "jsx");
});
var M1;
var L1;
var A1 = C2(() => {
  M1 = me2(Ba2()), L1 = M1.default;
});
var z1 = H2((eR, I1) => {
  "use strict";
  I1.exports = Na2;
  Na2.displayName = "markdown";
  Na2.aliases = ["md"];
  function Na2(e4) {
    (function(t) {
      var r = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function n(d) {
        return d = d.replace(/<inner>/g, function() {
          return r;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + d + ")");
      }
      o2(n, "createInline");
      var a = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function() {
          return a;
        }
      ), c = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      t.languages.markdown = t.languages.extend("markup", {}), t.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: true,
          greedy: true,
          inside: {
            punctuation: /^---|---$/,
            "front-matter": {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ["yaml", "language-yaml"],
              inside: t.languages.yaml
            }
          }
        },
        blockquote: {
          // > ...
          pattern: /^>(?:[\t ]*>)*/m,
          alias: "punctuation"
        },
        table: {
          pattern: RegExp(
            "^" + i + c + "(?:" + i + ")*",
            "m"
          ),
          inside: {
            "table-data-rows": {
              pattern: RegExp(
                "^(" + i + c + ")(?:" + i + ")*$"
              ),
              lookbehind: true,
              inside: {
                "table-data": {
                  pattern: RegExp(a),
                  inside: t.languages.markdown
                },
                punctuation: /\|/
              }
            },
            "table-line": {
              pattern: RegExp("^(" + i + ")" + c + "$"),
              lookbehind: true,
              inside: {
                punctuation: /\||:?-{3,}:?/
              }
            },
            "table-header-row": {
              pattern: RegExp("^" + i + "$"),
              inside: {
                "table-header": {
                  pattern: RegExp(a),
                  alias: "important",
                  inside: t.languages.markdown
                },
                punctuation: /\|/
              }
            }
          }
        },
        code: [
          {
            // Prefixed by 4 spaces or 1 tab and preceded by an empty line
            pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: true,
            alias: "keyword"
          },
          {
            // ```optional language
            // code block
            // ```
            pattern: /^```[\s\S]*?^```$/m,
            greedy: true,
            inside: {
              "code-block": {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: true
              },
              "code-language": {
                pattern: /^(```).+/,
                lookbehind: true
              },
              punctuation: /```/
            }
          }
        ],
        title: [
          {
            // title 1
            // =======
            // title 2
            // -------
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: {
              punctuation: /==+$|--+$/
            }
          },
          {
            // # title 1
            // ###### title 6
            pattern: /(^\s*)#.+/m,
            lookbehind: true,
            alias: "important",
            inside: {
              punctuation: /^#+|#+$/
            }
          }
        ],
        hr: {
          // ***
          // ---
          // * * *
          // -----------
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: true,
          alias: "punctuation"
        },
        list: {
          // * item
          // + item
          // - item
          // 1. item
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: true,
          alias: "punctuation"
        },
        "url-reference": {
          // [id]: http://example.com "Optional title"
          // [id]: http://example.com 'Optional title'
          // [id]: http://example.com (Optional title)
          // [id]: <http://example.com> "Optional title"
          pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: {
              pattern: /^(!?\[)[^\]]+/,
              lookbehind: true
            },
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
          },
          alias: "url"
        },
        bold: {
          // **strong**
          // __strong__
          // allow one nested instance of italic text using the same delimiter
          pattern: n(
            /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /\*\*|__/
          }
        },
        italic: {
          // *em*
          // _em_
          // allow one nested instance of bold text using the same delimiter
          pattern: n(
            /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^.)[\s\S]+(?=.$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /[*_]/
          }
        },
        strike: {
          // ~~strike through~~
          // ~strike~
          // eslint-disable-next-line regexp/strict
          pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /~~?/
          }
        },
        "code-snippet": {
          // `code`
          // ``code``
          pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: true,
          greedy: true,
          alias: ["code", "keyword"]
        },
        url: {
          // [example](http://example.com "Optional title")
          // [example][id]
          // [example] [id]
          pattern: n(
            /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            operator: /^!/,
            content: {
              pattern: /(^\[)[^\]]+(?=\])/,
              lookbehind: true,
              inside: {}
              // see below
            },
            variable: {
              pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
              lookbehind: true
            },
            url: {
              pattern: /(^\]\()[^\s)]+/,
              lookbehind: true
            },
            string: {
              pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
              lookbehind: true
            }
          }
        }
      }), ["url", "bold", "italic", "strike"].forEach(function(d) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(m) {
          d !== m && (t.languages.markdown[d].inside.content.inside[m] = t.languages.markdown[m]);
        });
      }), t.hooks.add("after-tokenize", function(d) {
        if (d.language !== "markdown" && d.language !== "md")
          return;
        function m(v) {
          if (!(!v || typeof v == "string"))
            for (var R = 0, p = v.length; R < p; R++) {
              var h4 = v[R];
              if (h4.type !== "code") {
                m(h4.content);
                continue;
              }
              var g = h4.content[1], w = h4.content[3];
              if (g && w && g.type === "code-language" && w.type === "code-block" && typeof g.content == "string") {
                var b = g.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                b = (/[a-z][\w-]*/i.exec(b) || [""])[0].toLowerCase();
                var x = "language-" + b;
                w.alias ? typeof w.alias == "string" ? w.alias = [w.alias, x] : w.alias.push(x) : w.alias = [x];
              }
            }
        }
        o2(m, "walkTokens"), m(d.tokens);
      }), t.hooks.add("wrap", function(d) {
        if (d.type === "code-block") {
          for (var m = "", v = 0, R = d.classes.length; v < R; v++) {
            var p = d.classes[v], h4 = /language-(.+)/.exec(p);
            if (h4) {
              m = h4[1];
              break;
            }
          }
          var g = t.languages[m];
          if (g)
            d.content = t.highlight(
              f(d.content.value),
              g,
              m
            );
          else if (m && m !== "none" && t.plugins.autoloader) {
            var w = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            d.attributes.id = w, t.plugins.autoloader.loadLanguages(m, function() {
              var b = document.getElementById(w);
              b && (b.innerHTML = t.highlight(
                b.textContent,
                t.languages[m],
                m
              ));
            });
          }
        }
      });
      var l = RegExp(t.languages.markup.tag.pattern.source, "gi"), s = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"'
      }, u = String.fromCodePoint || String.fromCharCode;
      function f(d) {
        var m = d.replace(l, "");
        return m = m.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(v, R) {
          if (R = R.toLowerCase(), R[0] === "#") {
            var p;
            return R[1] === "x" ? p = parseInt(R.slice(2), 16) : p = Number(R.slice(1)), u(p);
          } else {
            var h4 = s[R];
            return h4 || v;
          }
        }), m;
      }
      o2(f, "textContent"), t.languages.md = t.languages.markdown;
    })(e4);
  }
  o2(Na2, "markdown");
});
var T1;
var H1;
var P1 = C2(() => {
  T1 = me2(z1()), H1 = T1.default;
});
var k1;
var O1;
var B1 = C2(() => {
  k1 = me2(Sa2()), O1 = k1.default;
});
var Fa2 = H2((oR, N1) => {
  "use strict";
  N1.exports = Da2;
  Da2.displayName = "typescript";
  Da2.aliases = ["ts"];
  function Da2(e4) {
    (function(t) {
      t.languages.typescript = t.languages.extend("javascript", {
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
          lookbehind: true,
          greedy: true,
          inside: null
          // see below
        },
        builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
      }), t.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        // keywords that have to be followed by an identifier
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        // This is for `import type *, {}`
        /\btype\b(?=\s*(?:[\{*]|$))/
      ), delete t.languages.typescript.parameter, delete t.languages.typescript["literal-property"];
      var r = t.languages.extend("typescript", {});
      delete r["class-name"], t.languages.typescript["class-name"].inside = r, t.languages.insertBefore("typescript", "function", {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            at: {
              pattern: /^@/,
              alias: "operator"
            },
            function: /^[\s\S]+/
          }
        },
        "generic-function": {
          // e.g. foo<T extends "bar" | "baz">( ...
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: true,
          inside: {
            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: {
              pattern: /<[\s\S]+/,
              // everything after the first <
              alias: "class-name",
              inside: r
            }
          }
        }
      }), t.languages.ts = t.languages.typescript;
    })(e4);
  }
  o2(Da2, "typescript");
});
var F1 = H2((iR, D1) => {
  "use strict";
  var ym = Ba2(), xm = Fa2();
  D1.exports = _a2;
  _a2.displayName = "tsx";
  _a2.aliases = [];
  function _a2(e4) {
    e4.register(ym), e4.register(xm), function(t) {
      var r = t.util.clone(t.languages.typescript);
      t.languages.tsx = t.languages.extend("jsx", r), delete t.languages.tsx.parameter, delete t.languages.tsx["literal-property"];
      var n = t.languages.tsx.tag;
      n.pattern = RegExp(
        /(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")",
        n.pattern.flags
      ), n.lookbehind = true;
    }(e4);
  }
  o2(_a2, "tsx");
});
var _1;
var $1;
var V1 = C2(() => {
  _1 = me2(F1()), $1 = _1.default;
});
var j1;
var W1;
var U1 = C2(() => {
  j1 = me2(Fa2()), W1 = j1.default;
});
var G1 = H2((uR, q1) => {
  "use strict";
  q1.exports = $a2;
  $a2.displayName = "yaml";
  $a2.aliases = ["yml"];
  function $a2(e4) {
    (function(t) {
      var r = /[*&][^\s[\]{},]+/, n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, a = "(?:" + n.source + "(?:[ 	]+" + r.source + ")?|" + r.source + "(?:[ 	]+" + n.source + ")?)", i = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
        /<PLAIN>/g,
        function() {
          return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
        }
      ), c = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function l(s, u) {
        u = (u || "").replace(/m/g, "") + "m";
        var f = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return a;
        }).replace(/<<value>>/g, function() {
          return s;
        });
        return RegExp(f, u);
      }
      o2(l, "createValuePattern"), t.languages.yaml = {
        scalar: {
          pattern: RegExp(
            /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
              /<<prop>>/g,
              function() {
                return a;
              }
            )
          ),
          lookbehind: true,
          alias: "string"
        },
        comment: /#.*/,
        key: {
          pattern: RegExp(
            /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
              return a;
            }).replace(/<<key>>/g, function() {
              return "(?:" + i + "|" + c + ")";
            })
          ),
          lookbehind: true,
          greedy: true,
          alias: "atrule"
        },
        directive: {
          pattern: /(^[ \t]*)%.+/m,
          lookbehind: true,
          alias: "important"
        },
        datetime: {
          pattern: l(
            /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source
          ),
          lookbehind: true,
          alias: "number"
        },
        boolean: {
          pattern: l(/false|true/.source, "i"),
          lookbehind: true,
          alias: "important"
        },
        null: {
          pattern: l(/null|~/.source, "i"),
          lookbehind: true,
          alias: "important"
        },
        string: {
          pattern: l(c),
          lookbehind: true,
          greedy: true
        },
        number: {
          pattern: l(
            /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,
            "i"
          ),
          lookbehind: true
        },
        tag: n,
        important: r,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
      }, t.languages.yml = t.languages.yaml;
    })(e4);
  }
  o2($a2, "yaml");
});
var X1;
var Y1;
var Z1 = C2(() => {
  X1 = me2(G1()), Y1 = X1.default;
});
var Em;
var Q1;
var Va2;
var ja2 = C2(() => {
  "use strict";
  Em = xr.div(({ theme: e4 }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth: "100%",
    display: "flex",
    background: e4.background.content,
    zIndex: 1
  })), Q1 = xr.button(
    ({ theme: e4 }) => ({
      margin: 0,
      border: "0 none",
      padding: "4px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: e4.color.defaultText,
      background: e4.background.content,
      fontSize: 12,
      lineHeight: "16px",
      fontFamily: e4.typography.fonts.base,
      fontWeight: e4.typography.weight.bold,
      borderTop: `1px solid ${e4.appBorderColor}`,
      borderLeft: `1px solid ${e4.appBorderColor}`,
      marginLeft: -1,
      borderRadius: "4px 0 0 0",
      "&:not(:last-child)": { borderRight: `1px solid ${e4.appBorderColor}` },
      "& + *": {
        borderLeft: `1px solid ${e4.appBorderColor}`,
        borderRadius: 0
      },
      "&:focus": {
        boxShadow: `${e4.color.secondary} 0 -3px 0 0 inset`,
        outline: "0 none"
      }
    }),
    ({ disabled: e4 }) => e4 && {
      cursor: "not-allowed",
      opacity: 0.5
    }
  );
  Q1.displayName = "ActionButton";
  Va2 = o2(({ actionItems: e4, ...t }) => import_react5.default.createElement(Em, { ...t }, e4.map(({
    title: r,
    className: n,
    onClick: a,
    disabled: i
  }, c) => import_react5.default.createElement(Q1, { key: c, className: n, onClick: a, disabled: !!i }, r))), "ActionBar");
});
function Sm(e4, t) {
  typeof e4 == "function" ? e4(t) : e4 != null && (e4.current = t);
}
function Wa2(...e4) {
  return (t) => e4.forEach((r) => Sm(r, t));
}
function it(...e4) {
  return e5.useCallback(Wa2(...e4), e4);
}
var Un = C2(() => {
  o2(Sm, "setRef");
  o2(Wa2, "composeRefs");
  o2(it, "useComposedRefs");
});
function Lm(e4) {
  return he2.isValidElement(e4) && e4.type === Mm;
}
function Am(e4, t) {
  let r = { ...t };
  for (let n in t) {
    let a = e4[n], i = t[n];
    /^on[A-Z]/.test(n) ? a && i ? r[n] = (...l) => {
      i(...l), a(...l);
    } : a && (r[n] = a) : n === "style" ? r[n] = { ...a, ...i } : n === "className" && (r[n] = [a, i].filter(Boolean).join(" "));
  }
  return { ...e4, ...r };
}
function Im(e4) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e4.props, "ref")) == null ? void 0 : _a2.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e4.ref : (t = (_b = Object.getOwnPropertyDescriptor(e4, "ref")) == null ? void 0 : _b.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e4.props.ref : e4.props.ref || e4.ref);
}
var Ga2;
var qa2;
var Mm;
var t5 = C2(() => {
  Un();
  Ga2 = he2.forwardRef((e4, t) => {
    let { children: r, ...n } = e4, a = he2.Children.toArray(r), i = a.find(Lm);
    if (i) {
      let c = i.props.children, l = a.map((s) => s === i ? he2.Children.count(c) > 1 ? he2.Children.only(null) : he2.isValidElement(c) ? c.props.children : null : s);
      return (0, import_jsx_runtime.jsx)(qa2, { ...n, ref: t, children: he2.isValidElement(c) ? he2.cloneElement(c, void 0, l) : null });
    }
    return (0, import_jsx_runtime.jsx)(qa2, { ...n, ref: t, children: r });
  });
  Ga2.displayName = "Slot";
  qa2 = he2.forwardRef((e4, t) => {
    let { children: r, ...n } = e4;
    if (he2.isValidElement(r)) {
      let a = Im(r);
      return he2.cloneElement(r, {
        ...Am(n, r.props),
        // @ts-ignore
        ref: t ? Wa2(t, a) : a
      });
    }
    return he2.Children.count(r) > 1 ? he2.Children.only(null) : null;
  });
  qa2.displayName = "SlotClone";
  Mm = o2(({ children: e4 }) => (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: e4 }), "Slottable");
  o2(Lm, "isSlottable");
  o2(Am, "mergeProps");
  o2(Im, "getElementRef");
});
var Hm;
var gr2;
var n5 = C2(() => {
  t5();
  Hm = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
  ], gr2 = Hm.reduce((e4, t) => {
    let r = r5.forwardRef((n, a) => {
      let { asChild: i, ...c } = n, l = i ? Ga2 : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), (0, import_jsx_runtime2.jsx)(l, { ...c, ref: a });
    });
    return r.displayName = `Primitive.${t}`, { ...e4, [t]: r };
  }, {});
});
var nn2;
var Xa2 = C2(() => {
  nn2 = (globalThis == null ? void 0 : globalThis.document) ? o5.useLayoutEffect : () => {
  };
});
function Pm(e4, t) {
  return i5.useReducer((r, n) => t[r][n] ?? r, e4);
}
function km(e4) {
  let [t, r] = Ae2.useState(), n = Ae2.useRef({}), a = Ae2.useRef(e4), i = Ae2.useRef("none"), c = e4 ? "mounted" : "unmounted", [l, s] = Pm(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return Ae2.useEffect(() => {
    let u = qn2(n.current);
    i.current = l === "mounted" ? u : "none";
  }, [l]), nn2(() => {
    let u = n.current, f = a.current;
    if (f !== e4) {
      let m = i.current, v = qn2(u);
      e4 ? s("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(f && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e4;
    }
  }, [e4, s]), nn2(() => {
    if (t) {
      let u = o2((d) => {
        let v = qn2(n.current).includes(d.animationName);
        d.target === t && v && a5.flushSync(() => s("ANIMATION_END"));
      }, "handleAnimationEnd"), f = o2((d) => {
        d.target === t && (i.current = qn2(n.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      s("ANIMATION_END");
  }, [t, s]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: Ae2.useCallback((u) => {
      u && (n.current = getComputedStyle(u)), r(u);
    }, [])
  };
}
function qn2(e4) {
  return (e4 == null ? void 0 : e4.animationName) || "none";
}
function Om(e4) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e4.props, "ref")) == null ? void 0 : _a2.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e4.ref : (t = (_b = Object.getOwnPropertyDescriptor(e4, "ref")) == null ? void 0 : _b.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e4.props.ref : e4.props.ref || e4.ref);
}
var vr2;
var l5 = C2(() => {
  "use client";
  Un();
  Xa2();
  o2(Pm, "useStateMachine");
  vr2 = o2((e4) => {
    let { present: t, children: r } = e4, n = km(t), a = typeof r == "function" ? r({ present: n.isPresent }) : Ae2.Children.only(r), i = it(n.ref, Om(a));
    return typeof r == "function" || n.isPresent ? Ae2.cloneElement(a, { ref: i }) : null;
  }, "Presence");
  vr2.displayName = "Presence";
  o2(km, "usePresence");
  o2(qn2, "getAnimationName");
  o2(Om, "getElementRef");
});
function c5(e4, t = []) {
  let r = [];
  function n(i, c) {
    let l = lt.createContext(c), s = r.length;
    r = [...r, c];
    function u(d) {
      let { scope: m, children: v, ...R } = d, p = (m == null ? void 0 : m[e4][s]) || l, h4 = lt.useMemo(() => R, Object.values(R));
      return (0, import_jsx_runtime3.jsx)(p.Provider, { value: h4, children: v });
    }
    o2(u, "Provider");
    function f(d, m) {
      let v = (m == null ? void 0 : m[e4][s]) || l, R = lt.useContext(v);
      if (R) return R;
      if (c !== void 0) return c;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return o2(f, "useContext2"), u.displayName = i + "Provider", [u, f];
  }
  o2(n, "createContext3");
  let a = o2(() => {
    let i = r.map((c) => lt.createContext(c));
    return o2(function(l) {
      let s = (l == null ? void 0 : l[e4]) || i;
      return lt.useMemo(
        () => ({ [`__scope${e4}`]: { ...l, [e4]: s } }),
        [l, s]
      );
    }, "useScope");
  }, "createScope");
  return a.scopeName = e4, [n, Nm(a, ...t)];
}
function Nm(...e4) {
  let t = e4[0];
  if (e4.length === 1) return t;
  let r = o2(() => {
    let n = e4.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return o2(function(i) {
      let c = n.reduce((l, { useScope: s, scopeName: u }) => {
        let d = s(i)[`__scope${u}`];
        return { ...l, ...d };
      }, {});
      return lt.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    }, "useComposedScopes");
  }, "createScope");
  return r.scopeName = t.scopeName, r;
}
var s5 = C2(() => {
  o2(c5, "createContextScope");
  o2(Nm, "composeContextScopes");
});
function xt2(e4) {
  let t = wr2.useRef(e4);
  return wr2.useEffect(() => {
    t.current = e4;
  }), wr2.useMemo(() => (...r) => {
    var _a2;
    return (_a2 = t.current) == null ? void 0 : _a2.call(t, ...r);
  }, []);
}
var u5 = C2(() => {
  o2(xt2, "useCallbackRef");
});
function f5(e4) {
  let t = Gn2.useContext(Dm);
  return e4 || t || "ltr";
}
var Dm;
var d5 = C2(() => {
  Dm = Gn2.createContext(void 0);
  o2(f5, "useDirection");
});
function p5(e4, [t, r]) {
  return Math.min(r, Math.max(t, e4));
}
var m5 = C2(() => {
  o2(p5, "clamp");
});
function Et2(e4, t, { checkForDefaultPrevented: r = true } = {}) {
  return o2(function(a) {
    if (e4 == null ? void 0 : e4(a), r === false || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  }, "handleEvent");
}
var h5 = C2(() => {
  o2(Et2, "composeEventHandlers");
});
function Fm(e4, t) {
  return v5.useReducer((r, n) => t[r][n] ?? r, e4);
}
function Yn2(e4) {
  return e4 ? parseInt(e4, 10) : 0;
}
function A5(e4, t) {
  let r = e4 / t;
  return isNaN(r) ? 0 : r;
}
function Zn2(e4) {
  let t = A5(e4.viewport, e4.content), r = e4.scrollbar.paddingStart + e4.scrollbar.paddingEnd, n = (e4.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function Zm(e4, t, r, n = "ltr") {
  let a = Zn2(r), i = a / 2, c = t || i, l = a - c, s = r.scrollbar.paddingStart + c, u = r.scrollbar.size - r.scrollbar.paddingEnd - l, f = r.content - r.viewport, d = n === "ltr" ? [0, f] : [f * -1, 0];
  return I5([s, u], d)(e4);
}
function g5(e4, t, r = "ltr") {
  let n = Zn2(t), a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - a, c = t.content - t.viewport, l = i - n, s = r === "ltr" ? [0, c] : [c * -1, 0], u = p5(e4, s);
  return I5([0, c], [0, l])(u);
}
function I5(e4, t) {
  return (r) => {
    if (e4[0] === e4[1] || t[0] === t[1]) return t[0];
    let n = (t[1] - t[0]) / (e4[1] - e4[0]);
    return t[0] + n * (r - e4[0]);
  };
}
function z5(e4, t) {
  return e4 > 0 && e4 < t;
}
function Kn2(e4, t) {
  let r = xt2(e4), n = I3.useRef(0);
  return I3.useEffect(() => () => window.clearTimeout(n.current), []), I3.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function br2(e4, t) {
  let r = xt2(t);
  nn2(() => {
    let n = 0;
    if (e4) {
      let a = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return a.observe(e4), () => {
        window.cancelAnimationFrame(n), a.unobserve(e4);
      };
    }
  }, [e4, r]);
}
function Jm(e4, t) {
  let { asChild: r, children: n } = e4;
  if (!r) return typeof t == "function" ? t(n) : t;
  let a = I3.Children.only(n);
  return I3.cloneElement(a, {
    children: typeof t == "function" ? t(a.props.children) : t
  });
}
var Ya2;
var w5;
var ty;
var Vm;
var _e2;
var b5;
var R5;
var y5;
var rt2;
var x5;
var jm;
var Wm;
var E5;
var Za2;
var Um;
var qm;
var Gm;
var S5;
var C5;
var Xn2;
var M5;
var Xm;
var Ka2;
var L5;
var Ym;
var Km;
var T5;
var H5;
var P5;
var k5;
var O5;
var B5 = C2(() => {
  "use client";
  n5();
  l5();
  s5();
  Un();
  u5();
  d5();
  Xa2();
  m5();
  h5();
  o2(Fm, "useStateMachine");
  Ya2 = "ScrollArea", [w5, ty] = c5(Ya2), [Vm, _e2] = w5(Ya2), b5 = I3.forwardRef(
    (e4, t) => {
      let {
        __scopeScrollArea: r,
        type: n = "hover",
        dir: a,
        scrollHideDelay: i = 600,
        ...c
      } = e4, [l, s] = I3.useState(null), [u, f] = I3.useState(null), [d, m] = I3.useState(null), [v, R] = I3.useState(null), [p, h4] = I3.useState(
        null
      ), [g, w] = I3.useState(0), [b, x] = I3.useState(0), [E4, y] = I3.useState(false), [S, L2] = I3.useState(false), M2 = it(t, (P2) => s(P2)), A = f5(
        a
      );
      return (0, import_jsx_runtime5.jsx)(
        Vm,
        {
          scope: r,
          type: n,
          dir: A,
          scrollHideDelay: i,
          scrollArea: l,
          viewport: u,
          onViewportChange: f,
          content: d,
          onContentChange: m,
          scrollbarX: v,
          onScrollbarXChange: R,
          scrollbarXEnabled: E4,
          onScrollbarXEnabledChange: y,
          scrollbarY: p,
          onScrollbarYChange: h4,
          scrollbarYEnabled: S,
          onScrollbarYEnabledChange: L2,
          onCornerWidthChange: w,
          onCornerHeightChange: x,
          children: (0, import_jsx_runtime5.jsx)(
            gr2.div,
            {
              dir: A,
              ...c,
              ref: M2,
              style: {
                position: "relative",
                // Pass corner sizes as CSS vars to reduce re-renders of context consumers
                "--radix-scroll-area-corner-width": g + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e4.style
              }
            }
          )
        }
      );
    }
  );
  b5.displayName = Ya2;
  R5 = "ScrollAreaViewport", y5 = I3.forwardRef(
    (e4, t) => {
      let { __scopeScrollArea: r, children: n, asChild: a, nonce: i, ...c } = e4, l = _e2(R5, r), s = I3.useRef(null), u = it(t, s, l.onViewportChange);
      return (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
        (0, import_jsx_runtime5.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`
            },
            nonce: i
          }
        ),
        (0, import_jsx_runtime5.jsx)(
          gr2.div,
          {
            "data-radix-scroll-area-viewport": "",
            ...c,
            asChild: a,
            ref: u,
            style: {
              /**
               * We don't support `visible` because the intention is to have at least one scrollbar
               * if this component is used and `visible` will behave like `auto` in that case
               * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
               *
               * We don't handle `auto` because the intention is for the native implementation
               * to be hidden if using this component. We just want to ensure the node is scrollable
               * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
               * the browser from having to work out whether to render native scrollbars or not,
               * we tell it to with the intention of hiding them in CSS.
               */
              overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
              overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
              ...e4.style
            },
            children: Jm({ asChild: a, children: n }, (f) => (0, import_jsx_runtime5.jsx)(
              "div",
              {
                "data-radix-scroll-area-content": "",
                ref: l.onContentChange,
                style: { minWidth: l.scrollbarXEnabled ? "fit-content" : void 0 },
                children: f
              }
            ))
          }
        )
      ] });
    }
  );
  y5.displayName = R5;
  rt2 = "ScrollAreaScrollbar", x5 = I3.forwardRef(
    (e4, t) => {
      let { forceMount: r, ...n } = e4, a = _e2(rt2, e4.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: c } = a, l = e4.orientation === "horizontal";
      return I3.useEffect(() => (l ? i(true) : c(true), () => {
        l ? i(false) : c(false);
      }), [l, i, c]), a.type === "hover" ? (0, import_jsx_runtime5.jsx)(jm, { ...n, ref: t, forceMount: r }) : a.type === "scroll" ? (0, import_jsx_runtime5.jsx)(
        Wm,
        { ...n, ref: t, forceMount: r }
      ) : a.type === "auto" ? (0, import_jsx_runtime5.jsx)(E5, { ...n, ref: t, forceMount: r }) : a.type === "always" ? (0, import_jsx_runtime5.jsx)(Za2, { ...n, ref: t }) : null;
    }
  );
  x5.displayName = rt2;
  jm = I3.forwardRef((e4, t) => {
    let { forceMount: r, ...n } = e4, a = _e2(rt2, e4.__scopeScrollArea), [i, c] = I3.useState(false);
    return I3.useEffect(() => {
      let l = a.scrollArea, s = 0;
      if (l) {
        let u = o2(() => {
          window.clearTimeout(s), c(true);
        }, "handlePointerEnter"), f = o2(() => {
          s = window.setTimeout(() => c(false), a.scrollHideDelay);
        }, "handlePointerLeave");
        return l.addEventListener("pointerenter", u), l.addEventListener("pointerleave", f), () => {
          window.clearTimeout(s), l.removeEventListener("pointerenter", u), l.removeEventListener("pointerleave", f);
        };
      }
    }, [a.scrollArea, a.scrollHideDelay]), (0, import_jsx_runtime5.jsx)(vr2, { present: r || i, children: (0, import_jsx_runtime5.jsx)(
      E5,
      {
        "data-state": i ? "visible" : "hidden",
        ...n,
        ref: t
      }
    ) });
  }), Wm = I3.forwardRef((e4, t) => {
    let { forceMount: r, ...n } = e4, a = _e2(rt2, e4.__scopeScrollArea), i = e4.orientation === "horizontal", c = Kn2(() => s("SCROLL_END"), 100), [l, s] = Fm("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    return I3.useEffect(() => {
      if (l === "idle") {
        let u = window.setTimeout(() => s("HIDE"), a.scrollHideDelay);
        return () => window.clearTimeout(u);
      }
    }, [l, a.scrollHideDelay, s]), I3.useEffect(() => {
      let u = a.viewport, f = i ? "scrollLeft" : "scrollTop";
      if (u) {
        let d = u[f], m = o2(() => {
          let v = u[f];
          d !== v && (s("SCROLL"), c()), d = v;
        }, "handleScroll");
        return u.addEventListener("scroll", m), () => u.removeEventListener("scroll", m);
      }
    }, [a.viewport, i, s, c]), (0, import_jsx_runtime5.jsx)(vr2, { present: r || l !== "hidden", children: (0, import_jsx_runtime5.jsx)(
      Za2,
      {
        "data-state": l === "hidden" ? "hidden" : "visible",
        ...n,
        ref: t,
        onPointerEnter: Et2(e4.onPointerEnter, () => s("POINTER_ENTER")),
        onPointerLeave: Et2(e4.onPointerLeave, () => s("POINTER_LEAVE"))
      }
    ) });
  }), E5 = I3.forwardRef((e4, t) => {
    let r = _e2(rt2, e4.__scopeScrollArea), { forceMount: n, ...a } = e4, [i, c] = I3.useState(false), l = e4.orientation === "horizontal", s = Kn2(() => {
      if (r.viewport) {
        let u = r.viewport.offsetWidth < r.viewport.scrollWidth, f = r.viewport.offsetHeight < r.viewport.scrollHeight;
        c(l ? u : f);
      }
    }, 10);
    return br2(r.viewport, s), br2(r.content, s), (0, import_jsx_runtime5.jsx)(vr2, { present: n || i, children: (0, import_jsx_runtime5.jsx)(
      Za2,
      {
        "data-state": i ? "visible" : "hidden",
        ...a,
        ref: t
      }
    ) });
  }), Za2 = I3.forwardRef((e4, t) => {
    let { orientation: r = "vertical", ...n } = e4, a = _e2(rt2, e4.__scopeScrollArea), i = I3.useRef(null), c = I3.useRef(0), [l, s] = I3.useState(
      {
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
      }
    ), u = A5(l.viewport, l.content), f = {
      ...n,
      sizes: l,
      onSizesChange: s,
      hasThumb: u > 0 && u < 1,
      onThumbChange: o2((m) => i.current = m, "onThumbChange"),
      onThumbPointerUp: o2(() => c.current = 0, "onThumbPointerUp"),
      onThumbPointerDown: o2((m) => c.current = m, "onThumbPointerDown")
    };
    function d(m, v) {
      return Zm(m, c.current, l, v);
    }
    return o2(d, "getScrollPosition"), r === "horizontal" ? (0, import_jsx_runtime5.jsx)(
      Um,
      {
        ...f,
        ref: t,
        onThumbPositionChange: o2(() => {
          if (a.viewport && i.current) {
            let m = a.viewport.scrollLeft, v = g5(m, l, a.dir);
            i.current.style.transform = `translate3d(${v}px, 0, 0)`;
          }
        }, "onThumbPositionChange"),
        onWheelScroll: o2((m) => {
          a.viewport && (a.viewport.scrollLeft = m);
        }, "onWheelScroll"),
        onDragScroll: o2((m) => {
          a.viewport && (a.viewport.scrollLeft = d(m, a.dir));
        }, "onDragScroll")
      }
    ) : r === "vertical" ? (0, import_jsx_runtime5.jsx)(
      qm,
      {
        ...f,
        ref: t,
        onThumbPositionChange: o2(() => {
          if (a.viewport && i.current) {
            let m = a.viewport.scrollTop, v = g5(m, l);
            i.current.style.transform = `translate3d(0, ${v}px, 0)`;
          }
        }, "onThumbPositionChange"),
        onWheelScroll: o2((m) => {
          a.viewport && (a.viewport.scrollTop = m);
        }, "onWheelScroll"),
        onDragScroll: o2((m) => {
          a.viewport && (a.viewport.scrollTop = d(m));
        }, "onDragScroll")
      }
    ) : null;
  }), Um = I3.forwardRef((e4, t) => {
    let { sizes: r, onSizesChange: n, ...a } = e4, i = _e2(rt2, e4.__scopeScrollArea), [c, l] = I3.useState(), s = I3.useRef(null), u = it(t, s, i.onScrollbarXChange);
    return I3.useEffect(() => {
      s.current && l(getComputedStyle(s.current));
    }, [s]), (0, import_jsx_runtime5.jsx)(
      C5,
      {
        "data-orientation": "horizontal",
        ...a,
        ref: u,
        sizes: r,
        style: {
          bottom: 0,
          left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": Zn2(r) + "px",
          ...e4.style
        },
        onThumbPointerDown: o2((f) => e4.onThumbPointerDown(f.x), "onThumbPointerDown"),
        onDragScroll: o2((f) => e4.onDragScroll(f.x), "onDragScroll"),
        onWheelScroll: o2((f, d) => {
          if (i.viewport) {
            let m = i.viewport.scrollLeft + f.deltaX;
            e4.onWheelScroll(m), z5(m, d) && f.preventDefault();
          }
        }, "onWheelScroll"),
        onResize: o2(() => {
          s.current && i.viewport && c && n({
            content: i.viewport.scrollWidth,
            viewport: i.viewport.offsetWidth,
            scrollbar: {
              size: s.current.clientWidth,
              paddingStart: Yn2(c.paddingLeft),
              paddingEnd: Yn2(c.paddingRight)
            }
          });
        }, "onResize")
      }
    );
  }), qm = I3.forwardRef((e4, t) => {
    let { sizes: r, onSizesChange: n, ...a } = e4, i = _e2(rt2, e4.__scopeScrollArea), [c, l] = I3.useState(), s = I3.useRef(null), u = it(t, s, i.onScrollbarYChange);
    return I3.useEffect(() => {
      s.current && l(getComputedStyle(s.current));
    }, [s]), (0, import_jsx_runtime5.jsx)(
      C5,
      {
        "data-orientation": "vertical",
        ...a,
        ref: u,
        sizes: r,
        style: {
          top: 0,
          right: i.dir === "ltr" ? 0 : void 0,
          left: i.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": Zn2(r) + "px",
          ...e4.style
        },
        onThumbPointerDown: o2((f) => e4.onThumbPointerDown(f.y), "onThumbPointerDown"),
        onDragScroll: o2((f) => e4.onDragScroll(f.y), "onDragScroll"),
        onWheelScroll: o2((f, d) => {
          if (i.viewport) {
            let m = i.viewport.scrollTop + f.deltaY;
            e4.onWheelScroll(m), z5(m, d) && f.preventDefault();
          }
        }, "onWheelScroll"),
        onResize: o2(() => {
          s.current && i.viewport && c && n({
            content: i.viewport.scrollHeight,
            viewport: i.viewport.offsetHeight,
            scrollbar: {
              size: s.current.clientHeight,
              paddingStart: Yn2(c.paddingTop),
              paddingEnd: Yn2(c.paddingBottom)
            }
          });
        }, "onResize")
      }
    );
  }), [Gm, S5] = w5(rt2), C5 = I3.forwardRef((e4, t) => {
    let {
      __scopeScrollArea: r,
      sizes: n,
      hasThumb: a,
      onThumbChange: i,
      onThumbPointerUp: c,
      onThumbPointerDown: l,
      onThumbPositionChange: s,
      onDragScroll: u,
      onWheelScroll: f,
      onResize: d,
      ...m
    } = e4, v = _e2(rt2, r), [R, p] = I3.useState(null), h4 = it(t, (M2) => p(M2)), g = I3.useRef(null), w = I3.useRef(""), b = v.viewport, x = n.content - n.viewport, E4 = xt2(f), y = xt2(s), S = Kn2(d, 10);
    function L2(M2) {
      if (g.current) {
        let A = M2.clientX - g.current.left, P2 = M2.clientY - g.current.top;
        u({ x: A, y: P2 });
      }
    }
    return o2(L2, "handleDragScroll"), I3.useEffect(() => {
      let M2 = o2((A) => {
        let P2 = A.target;
        (R == null ? void 0 : R.contains(P2)) && E4(A, x);
      }, "handleWheel");
      return document.addEventListener("wheel", M2, { passive: false }), () => document.removeEventListener("wheel", M2, { passive: false });
    }, [b, R, x, E4]), I3.useEffect(y, [n, y]), br2(R, S), br2(v.content, S), (0, import_jsx_runtime5.jsx)(
      Gm,
      {
        scope: r,
        scrollbar: R,
        hasThumb: a,
        onThumbChange: xt2(i),
        onThumbPointerUp: xt2(c),
        onThumbPositionChange: y,
        onThumbPointerDown: xt2(l),
        children: (0, import_jsx_runtime5.jsx)(
          gr2.div,
          {
            ...m,
            ref: h4,
            style: { position: "absolute", ...m.style },
            onPointerDown: Et2(e4.onPointerDown, (M2) => {
              M2.button === 0 && (M2.target.setPointerCapture(M2.pointerId), g.current = R.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), L2(M2));
            }),
            onPointerMove: Et2(e4.onPointerMove, L2),
            onPointerUp: Et2(e4.onPointerUp, (M2) => {
              let A = M2.target;
              A.hasPointerCapture(M2.pointerId) && A.releasePointerCapture(M2.pointerId), document.body.style.webkitUserSelect = w.current, v.viewport && (v.viewport.style.scrollBehavior = ""), g.current = null;
            })
          }
        )
      }
    );
  }), Xn2 = "ScrollAreaThumb", M5 = I3.forwardRef(
    (e4, t) => {
      let { forceMount: r, ...n } = e4, a = S5(Xn2, e4.__scopeScrollArea);
      return (0, import_jsx_runtime5.jsx)(vr2, { present: r || a.hasThumb, children: (0, import_jsx_runtime5.jsx)(Xm, { ref: t, ...n }) });
    }
  ), Xm = I3.forwardRef(
    (e4, t) => {
      let { __scopeScrollArea: r, style: n, ...a } = e4, i = _e2(Xn2, r), c = S5(Xn2, r), { onThumbPositionChange: l } = c, s = it(
        t,
        (d) => c.onThumbChange(d)
      ), u = I3.useRef(), f = Kn2(() => {
        u.current && (u.current(), u.current = void 0);
      }, 100);
      return I3.useEffect(() => {
        let d = i.viewport;
        if (d) {
          let m = o2(() => {
            if (f(), !u.current) {
              let v = Km(d, l);
              u.current = v, l();
            }
          }, "handleScroll");
          return l(), d.addEventListener("scroll", m), () => d.removeEventListener("scroll", m);
        }
      }, [i.viewport, f, l]), (0, import_jsx_runtime5.jsx)(
        gr2.div,
        {
          "data-state": c.hasThumb ? "visible" : "hidden",
          ...a,
          ref: s,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...n
          },
          onPointerDownCapture: Et2(e4.onPointerDownCapture, (d) => {
            let v = d.target.getBoundingClientRect(), R = d.clientX - v.left, p = d.clientY - v.top;
            c.onThumbPointerDown({ x: R, y: p });
          }),
          onPointerUp: Et2(e4.onPointerUp, c.onThumbPointerUp)
        }
      );
    }
  );
  M5.displayName = Xn2;
  Ka2 = "ScrollAreaCorner", L5 = I3.forwardRef(
    (e4, t) => {
      let r = _e2(Ka2, e4.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
      return r.type !== "scroll" && n ? (0, import_jsx_runtime5.jsx)(Ym, { ...e4, ref: t }) : null;
    }
  );
  L5.displayName = Ka2;
  Ym = I3.forwardRef((e4, t) => {
    let { __scopeScrollArea: r, ...n } = e4, a = _e2(Ka2, r), [i, c] = I3.useState(0), [l, s] = I3.useState(0), u = !!(i && l);
    return br2(a.scrollbarX, () => {
      var _a2;
      let f = ((_a2 = a.scrollbarX) == null ? void 0 : _a2.offsetHeight) || 0;
      a.onCornerHeightChange(f), s(f);
    }), br2(a.scrollbarY, () => {
      var _a2;
      let f = ((_a2 = a.scrollbarY) == null ? void 0 : _a2.offsetWidth) || 0;
      a.onCornerWidthChange(f), c(f);
    }), u ? (0, import_jsx_runtime5.jsx)(
      gr2.div,
      {
        ...n,
        ref: t,
        style: {
          width: i,
          height: l,
          position: "absolute",
          right: a.dir === "ltr" ? 0 : void 0,
          left: a.dir === "rtl" ? 0 : void 0,
          bottom: 0,
          ...e4.style
        }
      }
    ) : null;
  });
  o2(Yn2, "toInt");
  o2(A5, "getThumbRatio");
  o2(Zn2, "getThumbSize");
  o2(Zm, "getScrollPositionFromPointer");
  o2(g5, "getThumbOffsetFromScroll");
  o2(I5, "linearScale");
  o2(z5, "isScrollingWithinScrollbarBounds");
  Km = o2((e4, t = () => {
  }) => {
    let r = { left: e4.scrollLeft, top: e4.scrollTop }, n = 0;
    return o2(function a() {
      let i = { left: e4.scrollLeft, top: e4.scrollTop }, c = r.left !== i.left, l = r.top !== i.top;
      (c || l) && t(), r = i, n = window.requestAnimationFrame(a);
    }, "loop")(), () => window.cancelAnimationFrame(n);
  }, "addUnlinkedScrollListener");
  o2(Kn2, "useDebounceCallback");
  o2(br2, "useResizeObserver");
  o2(Jm, "getSubtree");
  T5 = b5, H5 = y5, P5 = x5, k5 = M5, O5 = L5;
});
var th;
var rh;
var N5;
var D5;
var Rr;
var Qn2 = C2(() => {
  "use strict";
  B5();
  th = xr(T5)(
    ({ scrollbarsize: e4, offset: t }) => ({
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "--scrollbar-size": `${e4 + t}px`,
      "--radix-scroll-area-thumb-width": `${e4}px`
    })
  ), rh = xr(H5)({
    width: "100%",
    height: "100%"
  }), N5 = xr(P5)(({ offset: e4, horizontal: t, vertical: r }) => ({
    display: "flex",
    userSelect: "none",
    // ensures no selection
    touchAction: "none",
    // disable browser handling of all panning and zooming gestures on touch devices
    background: "transparent",
    transition: "all 0.2s ease-out",
    borderRadius: "var(--scrollbar-size)",
    zIndex: 1,
    '&[data-orientation="vertical"]': {
      width: "var(--scrollbar-size)",
      paddingRight: e4,
      marginTop: e4,
      marginBottom: t === "true" && r === "true" ? 0 : e4
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: "column",
      height: "var(--scrollbar-size)",
      paddingBottom: e4,
      marginLeft: e4,
      marginRight: t === "true" && r === "true" ? 0 : e4
    }
  })), D5 = xr(k5)(({ theme: e4 }) => ({
    flex: 1,
    background: e4.textMutedColor,
    opacity: 0.5,
    borderRadius: "var(--scrollbar-size)",
    position: "relative",
    transition: "opacity 0.2s ease-out",
    "&:hover": { opacity: 0.8 },
    /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
    "::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100%",
      height: "100%"
    }
  })), Rr = (0, import_react6.forwardRef)(
    ({ children: e4, horizontal: t = false, vertical: r = false, offset: n = 2, scrollbarSize: a = 6, className: i }, c) => import_react6.default.createElement(
      th,
      { scrollbarsize: a, offset: n, className: i },
      import_react6.default.createElement(rh, { ref: c }, e4),
      t && import_react6.default.createElement(
        N5,
        {
          orientation: "horizontal",
          offset: n,
          horizontal: t.toString(),
          vertical: r.toString()
        },
        import_react6.default.createElement(D5, null)
      ),
      r && import_react6.default.createElement(
        N5,
        {
          orientation: "vertical",
          offset: n,
          horizontal: t.toString(),
          vertical: r.toString()
        },
        import_react6.default.createElement(D5, null)
      ),
      t && r && import_react6.default.createElement(O5, null)
    )
  );
  Rr.displayName = "ScrollArea";
});
var Qa2 = {};
Xr2(Qa2, {
  SyntaxHighlighter: () => ln,
  createCopyToClipboardFunction: () => Ja2,
  default: () => gh,
  supportedLanguages: () => $5
});
function Ja2() {
  var _a2;
  return ((_a2 = eo2.navigator) == null ? void 0 : _a2.clipboard) ? async (e4) => {
    var _a3;
    try {
      await ((_a3 = eo2.top) == null ? void 0 : _a3.navigator.clipboard.writeText(e4));
    } catch {
      await eo2.navigator.clipboard.writeText(e4);
    }
  } : async (e4) => {
    let t = on.createElement("TEXTAREA"), r = on.activeElement;
    t.value = e4, on.body.appendChild(t), t.select(), on.execCommand("copy"), on.body.removeChild(t), r.focus();
  };
}
var _5;
var on;
var eo2;
var $5;
var lh;
var ch;
var sh;
var uh;
var fh;
var dh;
var ph;
var V5;
var mh;
var hh;
var ln;
var gh;
var cn = C2(() => {
  "use strict";
  _5 = me2(Kr2(), 1);
  t1();
  i1();
  s1();
  m1();
  b1();
  S1();
  A1();
  P1();
  B1();
  V1();
  U1();
  Z1();
  e1();
  ja2();
  Qn2();
  ({ document: on, window: eo2 } = import_global2.global), $5 = {
    jsextra: w1,
    jsx: L1,
    json: E1,
    yml: Y1,
    md: H1,
    bash: a1,
    css: c1,
    html: O1,
    tsx: $1,
    typescript: W1,
    graphql: p1
  };
  Object.entries($5).forEach(([e4, t]) => {
    Wn.registerLanguage(e4, t);
  });
  lh = (0, _5.default)(2)(
    (e4) => Object.entries(e4.code || {}).reduce((t, [r, n]) => ({ ...t, [`* .${r}`]: n }), {})
  ), ch = Ja2();
  o2(Ja2, "createCopyToClipboardFunction");
  sh = xr.div(
    ({ theme: e4 }) => ({
      position: "relative",
      overflow: "hidden",
      color: e4.color.defaultText
    }),
    ({ theme: e4, bordered: t }) => t ? {
      border: `1px solid ${e4.appBorderColor}`,
      borderRadius: e4.borderRadius,
      background: e4.background.content
    } : {},
    ({ showLineNumbers: e4 }) => e4 ? {
      // use the before pseudo element to display line numbers
      ".react-syntax-highlighter-line-number::before": {
        content: "attr(data-line-number)"
      }
    } : {}
  ), uh = o2(({ children: e4, className: t }) => import_react7.default.createElement(
    Rr,
    { horizontal: true, vertical: true, className: t },
    e4
  ), "UnstyledScroller"), fh = xr(uh)(
    {
      position: "relative"
    },
    ({ theme: e4 }) => lh(e4)
  ), dh = xr.pre(({ theme: e4, padded: t }) => ({
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: t ? e4.layoutMargin : 0
  })), ph = xr.div(({ theme: e4 }) => ({
    flex: 1,
    paddingLeft: 2,
    // TODO: To match theming/global.ts for now
    paddingRight: e4.layoutMargin,
    opacity: 1,
    fontFamily: e4.typography.fonts.mono
  })), V5 = o2((e4) => {
    let t = [...e4.children], r = t[0], n = r.children[0].value, a = {
      ...r,
      // empty the line-number element
      children: [],
      properties: {
        ...r.properties,
        // add a data-line-number attribute to line-number element, so we can access the line number with `content: attr(data-line-number)`
        "data-line-number": n,
        // remove the 'userSelect: none' style, which will produce extra empty lines when copy-pasting in firefox
        style: { ...r.properties.style, userSelect: "auto" }
      }
    };
    return t[0] = a, { ...e4, children: t };
  }, "processLineNumber"), mh = o2(({ rows: e4, stylesheet: t, useInlineStyles: r }) => e4.map((n, a) => _t2({
    node: V5(n),
    stylesheet: t,
    useInlineStyles: r,
    key: `code-segement${a}`
  })), "defaultRenderer"), hh = o2((e4, t) => t ? e4 ? ({ rows: r, ...n }) => e4({ rows: r.map((a) => V5(a)), ...n }) : mh : e4, "wrapRenderer"), ln = o2(({
    children: e4,
    language: t = "jsx",
    copyable: r = false,
    bordered: n = false,
    padded: a = false,
    format: i = true,
    formatter: c = void 0,
    className: l = void 0,
    showLineNumbers: s = false,
    ...u
  }) => {
    if (typeof e4 != "string" || !e4.trim())
      return null;
    let [f, d] = (0, import_react7.useState)("");
    (0, import_react7.useEffect)(() => {
      c ? c(i, e4).then(d) : d(e4.trim());
    }, [e4, i, c]);
    let [m, v] = (0, import_react7.useState)(false), R = (0, import_react7.useCallback)(
      (h4) => {
        h4.preventDefault(), ch(f).then(() => {
          v(true), eo2.setTimeout(() => v(false), 1500);
        }).catch(import_client_logger3.logger.error);
      },
      [f]
    ), p = hh(u.renderer, s);
    return import_react7.default.createElement(
      sh,
      {
        bordered: n,
        padded: a,
        showLineNumbers: s,
        className: l
      },
      import_react7.default.createElement(fh, null, import_react7.default.createElement(
        Wn,
        {
          padded: a || n,
          language: t,
          showLineNumbers: s,
          showInlineLineNumbers: s,
          useInlineStyles: false,
          PreTag: dh,
          CodeTag: ph,
          lineNumberContainerStyle: {},
          ...u,
          renderer: p
        },
        f
      )),
      r ? import_react7.default.createElement(Va2, { actionItems: [{ title: m ? "Copied" : "Copy", onClick: R }] }) : null
    );
  }, "SyntaxHighlighter");
  ln.registerLanguage = (...e4) => Wn.registerLanguage(...e4);
  gh = ln;
});
function Z5(e4) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = Array.from(typeof e4 == "string" ? [e4] : e4);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var a = n.reduce(function(l, s) {
    var u = s.match(/\n([\t ]+|(?!\s).)/g);
    return u ? l.concat(u.map(function(f) {
      var d, m;
      return (m = (d = f.match(/[\t ]/g)) === null || d === void 0 ? void 0 : d.length) !== null && m !== void 0 ? m : 0;
    })) : l;
  }, []);
  if (a.length) {
    var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, a) + "}", "g");
    n = n.map(function(l) {
      return l.replace(i, `
`);
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var c = n[0];
  return t.forEach(function(l, s) {
    var u = c.match(/(?:^|\n)( *)$/), f = u ? u[1] : "", d = l;
    typeof l == "string" && l.includes(`
`) && (d = String(l).split(`
`).map(function(m, v) {
      return v === 0 ? m : "" + f + m;
    }).join(`
`)), c += d + n[s + 1];
  }), c;
}
var K5 = C2(() => {
  o2(Z5, "dedent");
});
var Q5 = {};
Xr2(Q5, {
  formatter: () => Qh
});
var J5;
var Qh;
var eu = C2(() => {
  "use strict";
  J5 = me2(Kr2(), 1);
  K5();
  Qh = (0, J5.default)(2)(async (e4, t) => e4 === false ? t : Z5(t));
});
var A0;
var I0;
var Of = C2(() => {
  A0 = o2(function(t) {
    return t.reduce(function(r, n) {
      var a = n[0], i = n[1];
      return r[a] = i, r;
    }, {});
  }, "fromEntries"), I0 = typeof window < "u" && window.document && window.document.createElement ? xo2.useLayoutEffect : xo2.useEffect;
});
var te2;
var le2;
var ae2;
var ne2;
var Eo;
var Lt2;
var ut;
var Kt2;
var Bf;
var So;
var Hr2;
var Nf;
var z0;
var Co2;
var D7;
var F7;
var _7;
var $7;
var V7;
var j7;
var W7;
var U7;
var q7;
var Df;
var ke2 = C2(() => {
  te2 = "top", le2 = "bottom", ae2 = "right", ne2 = "left", Eo = "auto", Lt2 = [te2, le2, ae2, ne2], ut = "start", Kt2 = "end", Bf = "clippingParents", So = "viewport", Hr2 = "popper", Nf = "reference", z0 = Lt2.reduce(function(e4, t) {
    return e4.concat([t + "-" + ut, t + "-" + Kt2]);
  }, []), Co2 = [].concat(Lt2, [Eo]).reduce(function(e4, t) {
    return e4.concat([t, t + "-" + ut, t + "-" + Kt2]);
  }, []), D7 = "beforeRead", F7 = "read", _7 = "afterRead", $7 = "beforeMain", V7 = "main", j7 = "afterMain", W7 = "beforeWrite", U7 = "write", q7 = "afterWrite", Df = [D7, F7, _7, $7, V7, j7, W7, U7, q7];
});
function fe(e4) {
  return e4 ? (e4.nodeName || "").toLowerCase() : null;
}
var At2 = C2(() => {
  o2(fe, "getNodeName");
});
function Z2(e4) {
  if (e4 == null)
    return window;
  if (e4.toString() !== "[object Window]") {
    var t = e4.ownerDocument;
    return t && t.defaultView || window;
  }
  return e4;
}
var Je2 = C2(() => {
  o2(Z2, "getWindow");
});
function We2(e4) {
  var t = Z2(e4).Element;
  return e4 instanceof t || e4 instanceof Element;
}
function ce2(e4) {
  var t = Z2(e4).HTMLElement;
  return e4 instanceof t || e4 instanceof HTMLElement;
}
function Pr2(e4) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = Z2(e4).ShadowRoot;
  return e4 instanceof t || e4 instanceof ShadowRoot;
}
var Oe2 = C2(() => {
  Je2();
  o2(We2, "isElement");
  o2(ce2, "isHTMLElement");
  o2(Pr2, "isShadowRoot");
});
function G7(e4) {
  var t = e4.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, a = t.attributes[r] || {}, i = t.elements[r];
    !ce2(i) || !fe(i) || (Object.assign(i.style, n), Object.keys(a).forEach(function(c) {
      var l = a[c];
      l === false ? i.removeAttribute(c) : i.setAttribute(c, l === true ? "" : l);
    }));
  });
}
function X7(e4) {
  var t = e4.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var a = t.elements[n], i = t.attributes[n] || {}, c = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), l = c.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !ce2(a) || !fe(a) || (Object.assign(a.style, l), Object.keys(i).forEach(function(s) {
        a.removeAttribute(s);
      }));
    });
  };
}
var Ff;
var _f = C2(() => {
  At2();
  Oe2();
  o2(G7, "applyStyles");
  o2(X7, "effect");
  Ff = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: G7,
    effect: X7,
    requires: ["computeStyles"]
  };
});
function de2(e4) {
  return e4.split("-")[0];
}
var It2 = C2(() => {
  o2(de2, "getBasePlacement");
});
var Qe2;
var Jt2;
var ft;
var zt2 = C2(() => {
  Qe2 = Math.max, Jt2 = Math.min, ft = Math.round;
});
function kr2() {
  var e4 = navigator.userAgentData;
  return e4 != null && e4.brands && Array.isArray(e4.brands) ? e4.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
var T0 = C2(() => {
  o2(kr2, "getUAString");
});
function hn() {
  return !/^((?!chrome|android).)*safari/i.test(kr2());
}
var H0 = C2(() => {
  T0();
  o2(hn, "isLayoutViewport");
});
function Ue2(e4, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e4.getBoundingClientRect(), a = 1, i = 1;
  t && ce2(e4) && (a = e4.offsetWidth > 0 && ft(n.width) / e4.offsetWidth || 1, i = e4.offsetHeight > 0 && ft(n.height) / e4.offsetHeight || 1);
  var c = We2(e4) ? Z2(e4) : window, l = c.visualViewport, s = !hn() && r, u = (n.left + (s && l ? l.offsetLeft : 0)) / a, f = (n.top + (s && l ? l.offsetTop : 0)) / i, d = n.width / a, m = n.height / i;
  return {
    width: d,
    height: m,
    top: f,
    right: u + d,
    bottom: f + m,
    left: u,
    x: u,
    y: f
  };
}
var Or2 = C2(() => {
  Oe2();
  zt2();
  Je2();
  H0();
  o2(Ue2, "getBoundingClientRect");
});
function Qt2(e4) {
  var t = Ue2(e4), r = e4.offsetWidth, n = e4.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e4.offsetLeft,
    y: e4.offsetTop,
    width: r,
    height: n
  };
}
var Mo = C2(() => {
  Or2();
  o2(Qt2, "getLayoutRect");
});
function gn(e4, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e4.contains(t))
    return true;
  if (r && Pr2(r)) {
    var n = t;
    do {
      if (n && e4.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
var P0 = C2(() => {
  Oe2();
  o2(gn, "contains");
});
function xe2(e4) {
  return Z2(e4).getComputedStyle(e4);
}
var Br2 = C2(() => {
  Je2();
  o2(xe2, "getComputedStyle");
});
function k0(e4) {
  return ["table", "td", "th"].indexOf(fe(e4)) >= 0;
}
var $f = C2(() => {
  At2();
  o2(k0, "isTableElement");
});
function ge2(e4) {
  return ((We2(e4) ? e4.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e4.document
  )) || window.document).documentElement;
}
var dt2 = C2(() => {
  Oe2();
  o2(ge2, "getDocumentElement");
});
function pt2(e4) {
  return fe(e4) === "html" ? e4 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e4.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e4.parentNode || // DOM Element detected
    (Pr2(e4) ? e4.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ge2(e4)
  );
}
var vn = C2(() => {
  At2();
  dt2();
  Oe2();
  o2(pt2, "getParentNode");
});
function Vf(e4) {
  return !ce2(e4) || // https://github.com/popperjs/popper-core/issues/837
  xe2(e4).position === "fixed" ? null : e4.offsetParent;
}
function Y7(e4) {
  var t = /firefox/i.test(kr2()), r = /Trident/i.test(kr2());
  if (r && ce2(e4)) {
    var n = xe2(e4);
    if (n.position === "fixed")
      return null;
  }
  var a = pt2(e4);
  for (Pr2(a) && (a = a.host); ce2(a) && ["html", "body"].indexOf(fe(a)) < 0; ) {
    var i = xe2(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function et2(e4) {
  for (var t = Z2(e4), r = Vf(e4); r && k0(r) && xe2(r).position === "static"; )
    r = Vf(r);
  return r && (fe(r) === "html" || fe(r) === "body" && xe2(r).position === "static") ? t : r || Y7(e4) || t;
}
var Nr2 = C2(() => {
  Je2();
  At2();
  Br2();
  Oe2();
  $f();
  vn();
  T0();
  o2(Vf, "getTrueOffsetParent");
  o2(Y7, "getContainingBlock");
  o2(et2, "getOffsetParent");
});
function er2(e4) {
  return ["top", "bottom"].indexOf(e4) >= 0 ? "x" : "y";
}
var Lo = C2(() => {
  o2(er2, "getMainAxisFromPlacement");
});
function tr(e4, t, r) {
  return Qe2(e4, Jt2(t, r));
}
function jf(e4, t, r) {
  var n = tr(e4, t, r);
  return n > r ? r : n;
}
var O0 = C2(() => {
  zt2();
  o2(tr, "within");
  o2(jf, "withinMaxClamp");
});
function wn2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
var B0 = C2(() => {
  o2(wn2, "getFreshSideObject");
});
function bn(e4) {
  return Object.assign({}, wn2(), e4);
}
var N0 = C2(() => {
  B0();
  o2(bn, "mergePaddingObject");
});
function Rn2(e4, t) {
  return t.reduce(function(r, n) {
    return r[n] = e4, r;
  }, {});
}
var D0 = C2(() => {
  o2(Rn2, "expandToHashMap");
});
function K7(e4) {
  var t, r = e4.state, n = e4.name, a = e4.options, i = r.elements.arrow, c = r.modifiersData.popperOffsets, l = de2(r.placement), s = er2(l), u = [
    ne2,
    ae2
  ].indexOf(l) >= 0, f = u ? "height" : "width";
  if (!(!i || !c)) {
    var d = Z7(a.padding, r), m = Qt2(i), v = s === "y" ? te2 : ne2, R = s === "y" ? le2 : ae2, p = r.rects.reference[f] + r.rects.reference[s] - c[s] - r.rects.popper[f], h4 = c[s] - r.rects.reference[s], g = et2(i), w = g ? s === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = p / 2 - h4 / 2, x = d[v], E4 = w - m[f] - d[R], y = w / 2 - m[f] / 2 + b, S = tr(x, y, E4), L2 = s;
    r.modifiersData[n] = (t = {}, t[L2] = S, t.centerOffset = S - y, t);
  }
}
function J7(e4) {
  var t = e4.state, r = e4.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || gn(t.elements.popper, a) && (t.elements.arrow = a));
}
var Z7;
var Wf;
var Uf = C2(() => {
  It2();
  Mo();
  P0();
  Nr2();
  Lo();
  O0();
  N0();
  D0();
  ke2();
  Z7 = o2(function(t, r) {
    return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
      placement: r.placement
    })) : t, bn(typeof t != "number" ? t : Rn2(t, Lt2));
  }, "toPaddingObject");
  o2(K7, "arrow");
  o2(J7, "effect");
  Wf = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: K7,
    effect: J7,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
});
function qe2(e4) {
  return e4.split("-")[1];
}
var Dr2 = C2(() => {
  o2(qe2, "getVariation");
});
function e3(e4, t) {
  var r = e4.x, n = e4.y, a = t.devicePixelRatio || 1;
  return {
    x: ft(r * a) / a || 0,
    y: ft(n * a) / a || 0
  };
}
function qf(e4) {
  var t, r = e4.popper, n = e4.popperRect, a = e4.placement, i = e4.variation, c = e4.offsets, l = e4.position, s = e4.gpuAcceleration, u = e4.adaptive, f = e4.roundOffsets, d = e4.isFixed, m = c.x, v = m === void 0 ? 0 : m, R = c.y, p = R === void 0 ? 0 : R, h4 = typeof f == "function" ? f({
    x: v,
    y: p
  }) : {
    x: v,
    y: p
  };
  v = h4.x, p = h4.y;
  var g = c.hasOwnProperty("x"), w = c.hasOwnProperty("y"), b = ne2, x = te2, E4 = window;
  if (u) {
    var y = et2(r), S = "clientHeight", L2 = "clientWidth";
    if (y === Z2(r) && (y = ge2(r), xe2(y).position !== "static" && l === "absolute" && (S = "scrollHeight", L2 = "scrollWidth")), y = y, a === te2 || (a === ne2 || a === ae2) && i === Kt2) {
      x = le2;
      var M2 = d && y === E4 && E4.visualViewport ? E4.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        y[S]
      );
      p -= M2 - n.height, p *= s ? 1 : -1;
    }
    if (a === ne2 || (a === te2 || a === le2) && i === Kt2) {
      b = ae2;
      var A = d && y === E4 && E4.visualViewport ? E4.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        y[L2]
      );
      v -= A - n.width, v *= s ? 1 : -1;
    }
  }
  var P2 = Object.assign({
    position: l
  }, u && Q7), _2 = f === true ? e3({
    x: v,
    y: p
  }, Z2(r)) : {
    x: v,
    y: p
  };
  if (v = _2.x, p = _2.y, s) {
    var F;
    return Object.assign({}, P2, (F = {}, F[x] = w ? "0" : "", F[b] = g ? "0" : "", F.transform = (E4.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + p + "px)" : "translate3d(" + v + "px, " + p + "px, 0)", F));
  }
  return Object.assign({}, P2, (t = {}, t[x] = w ? p + "px" : "", t[b] = g ? v + "px" : "", t.transform = "", t));
}
function t3(e4) {
  var t = e4.state, r = e4.options, n = r.gpuAcceleration, a = n === void 0 ? true : n, i = r.adaptive, c = i === void 0 ? true : i, l = r.roundOffsets, s = l === void 0 ? true : l, u = {
    placement: de2(t.placement),
    variation: qe2(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, qf(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, qf(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var Q7;
var Gf;
var Xf = C2(() => {
  ke2();
  Nr2();
  Je2();
  dt2();
  Br2();
  It2();
  Dr2();
  zt2();
  Q7 = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  o2(e3, "roundOffsetsByDPR");
  o2(qf, "mapToStyles");
  o2(t3, "computeStyles");
  Gf = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: t3,
    data: {}
  };
});
function r3(e4) {
  var t = e4.state, r = e4.instance, n = e4.options, a = n.scroll, i = a === void 0 ? true : a, c = n.resize, l = c === void 0 ? true : c, s = Z2(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(f) {
    f.addEventListener("scroll", r.update, Ao);
  }), l && s.addEventListener("resize", r.update, Ao), function() {
    i && u.forEach(function(f) {
      f.removeEventListener("scroll", r.update, Ao);
    }), l && s.removeEventListener("resize", r.update, Ao);
  };
}
var Ao;
var Yf;
var Zf = C2(() => {
  Je2();
  Ao = {
    passive: true
  };
  o2(r3, "effect");
  Yf = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: o2(function() {
    }, "fn"),
    effect: r3,
    data: {}
  };
});
function Fr2(e4) {
  return e4.replace(/left|right|bottom|top/g, function(t) {
    return n3[t];
  });
}
var n3;
var Kf = C2(() => {
  n3 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  o2(Fr2, "getOppositePlacement");
});
function Io(e4) {
  return e4.replace(/start|end/g, function(t) {
    return o3[t];
  });
}
var o3;
var Jf = C2(() => {
  o3 = {
    start: "end",
    end: "start"
  };
  o2(Io, "getOppositeVariationPlacement");
});
function rr(e4) {
  var t = Z2(e4), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
var zo = C2(() => {
  Je2();
  o2(rr, "getWindowScroll");
});
function nr(e4) {
  return Ue2(ge2(e4)).left + rr(e4).scrollLeft;
}
var To = C2(() => {
  Or2();
  dt2();
  zo();
  o2(nr, "getWindowScrollBarX");
});
function F0(e4, t) {
  var r = Z2(e4), n = ge2(e4), a = r.visualViewport, i = n.clientWidth, c = n.clientHeight, l = 0, s = 0;
  if (a) {
    i = a.width, c = a.height;
    var u = hn();
    (u || !u && t === "fixed") && (l = a.offsetLeft, s = a.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: l + nr(e4),
    y: s
  };
}
var Qf = C2(() => {
  Je2();
  dt2();
  To();
  H0();
  o2(F0, "getViewportRect");
});
function _0(e4) {
  var t, r = ge2(e4), n = rr(e4), a = (t = e4.ownerDocument) == null ? void 0 : t.body, i = Qe2(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), c = Qe2(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), l = -n.scrollLeft + nr(
    e4
  ), s = -n.scrollTop;
  return xe2(a || r).direction === "rtl" && (l += Qe2(r.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: c,
    x: l,
    y: s
  };
}
var ed = C2(() => {
  dt2();
  Br2();
  To();
  zo();
  zt2();
  o2(_0, "getDocumentRect");
});
function or2(e4) {
  var t = xe2(e4), r = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
var Ho = C2(() => {
  Br2();
  o2(or2, "isScrollParent");
});
function Po(e4) {
  return ["html", "body", "#document"].indexOf(fe(e4)) >= 0 ? e4.ownerDocument.body : ce2(e4) && or2(e4) ? e4 : Po(pt2(e4));
}
var td = C2(() => {
  vn();
  Ho();
  At2();
  Oe2();
  o2(Po, "getScrollParent");
});
function Tt2(e4, t) {
  var r;
  t === void 0 && (t = []);
  var n = Po(e4), a = n === ((r = e4.ownerDocument) == null ? void 0 : r.body), i = Z2(n), c = a ? [i].concat(i.visualViewport || [], or2(n) ? n : []) : n, l = t.concat(c);
  return a ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Tt2(pt2(c)))
  );
}
var $0 = C2(() => {
  td();
  vn();
  Je2();
  Ho();
  o2(Tt2, "listScrollParents");
});
function _r2(e4) {
  return Object.assign({}, e4, {
    left: e4.x,
    top: e4.y,
    right: e4.x + e4.width,
    bottom: e4.y + e4.height
  });
}
var V0 = C2(() => {
  o2(_r2, "rectToClientRect");
});
function a3(e4, t) {
  var r = Ue2(e4, false, t === "fixed");
  return r.top = r.top + e4.clientTop, r.left = r.left + e4.clientLeft, r.bottom = r.top + e4.clientHeight, r.right = r.left + e4.clientWidth, r.width = e4.clientWidth, r.height = e4.clientHeight, r.x = r.left, r.y = r.top, r;
}
function rd(e4, t, r) {
  return t === So ? _r2(F0(e4, r)) : We2(t) ? a3(t, r) : _r2(_0(ge2(e4)));
}
function i3(e4) {
  var t = Tt2(pt2(e4)), r = ["absolute", "fixed"].indexOf(xe2(e4).position) >= 0, n = r && ce2(e4) ? et2(e4) : e4;
  return We2(n) ? t.filter(function(a) {
    return We2(a) && gn(a, n) && fe(a) !== "body";
  }) : [];
}
function j0(e4, t, r, n) {
  var a = t === "clippingParents" ? i3(e4) : [].concat(t), i = [].concat(a, [r]), c = i[0], l = i.reduce(function(s, u) {
    var f = rd(e4, u, n);
    return s.top = Qe2(f.top, s.top), s.right = Jt2(f.right, s.right), s.bottom = Jt2(f.bottom, s.bottom), s.left = Qe2(f.left, s.left), s;
  }, rd(e4, c, n));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
var nd = C2(() => {
  ke2();
  Qf();
  ed();
  $0();
  Nr2();
  dt2();
  Br2();
  Oe2();
  Or2();
  vn();
  P0();
  At2();
  V0();
  zt2();
  o2(a3, "getInnerBoundingClientRect");
  o2(rd, "getClientRectFromMixedType");
  o2(i3, "getClippingParents");
  o2(j0, "getClippingRect");
});
function yn(e4) {
  var t = e4.reference, r = e4.element, n = e4.placement, a = n ? de2(n) : null, i = n ? qe2(n) : null, c = t.x + t.width / 2 - r.width / 2, l = t.y + t.height / 2 - r.height / 2, s;
  switch (a) {
    case te2:
      s = {
        x: c,
        y: t.y - r.height
      };
      break;
    case le2:
      s = {
        x: c,
        y: t.y + t.height
      };
      break;
    case ae2:
      s = {
        x: t.x + t.width,
        y: l
      };
      break;
    case ne2:
      s = {
        x: t.x - r.width,
        y: l
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var u = a ? er2(a) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (i) {
      case ut:
        s[u] = s[u] - (t[f] / 2 - r[f] / 2);
        break;
      case Kt2:
        s[u] = s[u] + (t[f] / 2 - r[f] / 2);
        break;
      default:
    }
  }
  return s;
}
var W0 = C2(() => {
  It2();
  Dr2();
  Lo();
  ke2();
  o2(yn, "computeOffsets");
});
function tt2(e4, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = n === void 0 ? e4.placement : n, i = r.strategy, c = i === void 0 ? e4.strategy : i, l = r.boundary, s = l === void 0 ? Bf : l, u = r.rootBoundary, f = u === void 0 ? So : u, d = r.elementContext, m = d === void 0 ? Hr2 : d, v = r.altBoundary, R = v === void 0 ? false : v, p = r.padding, h4 = p === void 0 ? 0 : p, g = bn(typeof h4 != "number" ? h4 : Rn2(h4, Lt2)), w = m === Hr2 ? Nf : Hr2, b = e4.rects.popper, x = e4.elements[R ? w : m], E4 = j0(We2(x) ? x : x.contextElement || ge2(e4.elements.popper), s, f, c), y = Ue2(e4.elements.reference), S = yn(
    {
      reference: y,
      element: b,
      strategy: "absolute",
      placement: a
    }
  ), L2 = _r2(Object.assign({}, b, S)), M2 = m === Hr2 ? L2 : y, A = {
    top: E4.top - M2.top + g.top,
    bottom: M2.bottom - E4.bottom + g.bottom,
    left: E4.left - M2.left + g.left,
    right: M2.right - E4.right + g.right
  }, P2 = e4.modifiersData.offset;
  if (m === Hr2 && P2) {
    var _2 = P2[a];
    Object.keys(A).forEach(function(F) {
      var K2 = [ae2, le2].indexOf(F) >= 0 ? 1 : -1, T = [te2, le2].indexOf(F) >= 0 ? "y" : "x";
      A[F] += _2[T] * K2;
    });
  }
  return A;
}
var xn = C2(() => {
  nd();
  dt2();
  Or2();
  W0();
  V0();
  ke2();
  Oe2();
  N0();
  D0();
  o2(tt2, "detectOverflow");
});
function U0(e4, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = r.boundary, i = r.rootBoundary, c = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Co2 : s, f = qe2(n), d = f ? l ? z0 : z0.filter(function(R) {
    return qe2(R) === f;
  }) : Lt2, m = d.filter(function(R) {
    return u.indexOf(R) >= 0;
  });
  m.length === 0 && (m = d);
  var v = m.reduce(function(R, p) {
    return R[p] = tt2(e4, {
      placement: p,
      boundary: a,
      rootBoundary: i,
      padding: c
    })[de2(p)], R;
  }, {});
  return Object.keys(v).sort(function(R, p) {
    return v[R] - v[p];
  });
}
var od = C2(() => {
  Dr2();
  ke2();
  xn();
  It2();
  o2(U0, "computeAutoPlacement");
});
function l3(e4) {
  if (de2(e4) === Eo)
    return [];
  var t = Fr2(e4);
  return [Io(e4), t, Io(t)];
}
function c3(e4) {
  var t = e4.state, r = e4.options, n = e4.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = r.mainAxis, i = a === void 0 ? true : a, c = r.altAxis, l = c === void 0 ? true : c, s = r.fallbackPlacements, u = r.padding, f = r.boundary, d = r.rootBoundary, m = r.altBoundary, v = r.flipVariations, R = v === void 0 ? true : v, p = r.allowedAutoPlacements, h4 = t.options.placement, g = de2(h4), w = g === h4, b = s || (w || !R ? [Fr2(h4)] : l3(h4)), x = [h4].concat(b).reduce(function(pe2, se2) {
      return pe2.concat(de2(se2) === Eo ? U0(t, {
        placement: se2,
        boundary: f,
        rootBoundary: d,
        padding: u,
        flipVariations: R,
        allowedAutoPlacements: p
      }) : se2);
    }, []), E4 = t.rects.reference, y = t.rects.popper, S = /* @__PURE__ */ new Map(), L2 = true, M2 = x[0], A = 0; A < x.length; A++) {
      var P2 = x[A], _2 = de2(P2), F = qe2(P2) === ut, K2 = [te2, le2].indexOf(_2) >= 0, T = K2 ? "width" : "height", z2 = tt2(t, {
        placement: P2,
        boundary: f,
        rootBoundary: d,
        altBoundary: m,
        padding: u
      }), k2 = K2 ? F ? ae2 : ne2 : F ? le2 : te2;
      E4[T] > y[T] && (k2 = Fr2(k2));
      var V2 = Fr2(k2), D2 = [];
      if (i && D2.push(z2[_2] <= 0), l && D2.push(z2[k2] <= 0, z2[V2] <= 0), D2.every(function(pe2) {
        return pe2;
      })) {
        M2 = P2, L2 = false;
        break;
      }
      S.set(P2, D2);
    }
    if (L2)
      for (var j2 = R ? 3 : 1, O = o2(function(se2) {
        var ue = x.find(function(ve2) {
          var Se2 = S.get(ve2);
          if (Se2)
            return Se2.slice(0, se2).every(function(Ot2) {
              return Ot2;
            });
        });
        if (ue)
          return M2 = ue, "break";
      }, "_loop"), G = j2; G > 0; G--) {
        var Ee2 = O(G);
        if (Ee2 === "break") break;
      }
    t.placement !== M2 && (t.modifiersData[n]._skip = true, t.placement = M2, t.reset = true);
  }
}
var ad;
var id = C2(() => {
  Kf();
  It2();
  Jf();
  xn();
  od();
  ke2();
  Dr2();
  o2(l3, "getExpandedFallbackPlacements");
  o2(c3, "flip");
  ad = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: c3,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
});
function ld(e4, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e4.top - t.height - r.y,
    right: e4.right - t.width + r.x,
    bottom: e4.bottom - t.height + r.y,
    left: e4.left - t.width - r.x
  };
}
function cd(e4) {
  return [te2, ae2, le2, ne2].some(function(t) {
    return e4[t] >= 0;
  });
}
function s3(e4) {
  var t = e4.state, r = e4.name, n = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, c = tt2(t, {
    elementContext: "reference"
  }), l = tt2(t, {
    altBoundary: true
  }), s = ld(c, n), u = ld(l, a, i), f = cd(s), d = cd(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: u,
    isReferenceHidden: f,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": d
  });
}
var sd;
var ud = C2(() => {
  ke2();
  xn();
  o2(ld, "getSideOffsets");
  o2(cd, "isAnySideFullyClipped");
  o2(s3, "hide");
  sd = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: s3
  };
});
function u3(e4, t, r) {
  var n = de2(e4), a = [ne2, te2].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e4
  })) : r, c = i[0], l = i[1];
  return c = c || 0, l = (l || 0) * a, [ne2, ae2].indexOf(n) >= 0 ? {
    x: l,
    y: c
  } : {
    x: c,
    y: l
  };
}
function f3(e4) {
  var t = e4.state, r = e4.options, n = e4.name, a = r.offset, i = a === void 0 ? [0, 0] : a, c = Co2.reduce(function(f, d) {
    return f[d] = u3(d, t.rects, i), f;
  }, {}), l = c[t.placement], s = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = c;
}
var fd;
var dd = C2(() => {
  It2();
  ke2();
  o2(u3, "distanceAndSkiddingToXY");
  o2(f3, "offset");
  fd = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: f3
  };
});
function d3(e4) {
  var t = e4.state, r = e4.name;
  t.modifiersData[r] = yn({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var pd;
var md = C2(() => {
  W0();
  o2(d3, "popperOffsets");
  pd = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: d3,
    data: {}
  };
});
function q0(e4) {
  return e4 === "x" ? "y" : "x";
}
var hd = C2(() => {
  o2(q0, "getAltAxis");
});
function p3(e4) {
  var t = e4.state, r = e4.options, n = e4.name, a = r.mainAxis, i = a === void 0 ? true : a, c = r.altAxis, l = c === void 0 ? false : c, s = r.boundary, u = r.rootBoundary, f = r.altBoundary, d = r.padding, m = r.tether, v = m === void 0 ? true : m, R = r.tetherOffset, p = R === void 0 ? 0 : R, h4 = tt2(t, {
    boundary: s,
    rootBoundary: u,
    padding: d,
    altBoundary: f
  }), g = de2(t.placement), w = qe2(t.placement), b = !w, x = er2(g), E4 = q0(x), y = t.modifiersData.popperOffsets, S = t.rects.reference, L2 = t.rects.popper, M2 = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, A = typeof M2 == "number" ? {
    mainAxis: M2,
    altAxis: M2
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M2), P2 = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, _2 = {
    x: 0,
    y: 0
  };
  if (y) {
    if (i) {
      var F, K2 = x === "y" ? te2 : ne2, T = x === "y" ? le2 : ae2, z2 = x === "y" ? "height" : "width", k2 = y[x], V2 = k2 + h4[K2], D2 = k2 - h4[T], j2 = v ? -L2[z2] / 2 : 0, O = w === ut ? S[z2] : L2[z2], G = w === ut ? -L2[z2] : -S[z2], Ee2 = t.elements.arrow, pe2 = v && Ee2 ? Qt2(Ee2) : {
        width: 0,
        height: 0
      }, se2 = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wn2(), ue = se2[K2], ve2 = se2[T], Se2 = tr(
        0,
        S[z2],
        pe2[z2]
      ), Ot2 = b ? S[z2] / 2 - j2 - Se2 - ue - A.mainAxis : O - Se2 - ue - A.mainAxis, qr2 = b ? -S[z2] / 2 + j2 + Se2 + ve2 + A.mainAxis : G + Se2 + ve2 + A.mainAxis, jo = t.elements.arrow && et2(t.elements.arrow), fp = jo ? x === "y" ? jo.clientTop || 0 : jo.clientLeft || 0 : 0, xl = (F = P2 == null ? void 0 : P2[x]) != null ? F : 0, dp = k2 + Ot2 - xl - fp, pp = k2 + qr2 - xl, El = tr(v ? Jt2(V2, dp) : V2, k2, v ? Qe2(D2, pp) : D2);
      y[x] = El, _2[x] = El - k2;
    }
    if (l) {
      var Sl, mp = x === "x" ? te2 : ne2, hp = x === "x" ? le2 : ae2, Bt2 = y[E4], Ln2 = E4 === "y" ? "height" : "width", Cl = Bt2 + h4[mp], Ml = Bt2 - h4[hp], Wo = [te2, ne2].indexOf(g) !== -1, Ll = (Sl = P2 == null ? void 0 : P2[E4]) != null ? Sl : 0, Al = Wo ? Cl : Bt2 - S[Ln2] - L2[Ln2] - Ll + A.altAxis, Il = Wo ? Bt2 + S[Ln2] + L2[Ln2] - Ll - A.altAxis : Ml, zl = v && Wo ? jf(Al, Bt2, Il) : tr(v ? Al : Cl, Bt2, v ? Il : Ml);
      y[E4] = zl, _2[E4] = zl - Bt2;
    }
    t.modifiersData[n] = _2;
  }
}
var gd;
var vd = C2(() => {
  ke2();
  It2();
  Lo();
  hd();
  O0();
  Mo();
  Nr2();
  xn();
  Dr2();
  B0();
  zt2();
  o2(p3, "preventOverflow");
  gd = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: p3,
    requiresIfExists: ["offset"]
  };
});
var G0 = C2(() => {
});
function X0(e4) {
  return {
    scrollLeft: e4.scrollLeft,
    scrollTop: e4.scrollTop
  };
}
var wd = C2(() => {
  o2(X0, "getHTMLElementScroll");
});
function Y0(e4) {
  return e4 === Z2(e4) || !ce2(e4) ? rr(e4) : X0(e4);
}
var bd = C2(() => {
  zo();
  Je2();
  Oe2();
  wd();
  o2(Y0, "getNodeScroll");
});
function m3(e4) {
  var t = e4.getBoundingClientRect(), r = ft(t.width) / e4.offsetWidth || 1, n = ft(t.height) / e4.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Z0(e4, t, r) {
  r === void 0 && (r = false);
  var n = ce2(t), a = ce2(t) && m3(t), i = ge2(t), c = Ue2(e4, a, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((fe(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  or2(i)) && (l = Y0(t)), ce2(t) ? (s = Ue2(t, true), s.x += t.clientLeft, s.y += t.clientTop) : i && (s.x = nr(i))), {
    x: c.left + l.scrollLeft - s.x,
    y: c.top + l.scrollTop - s.y,
    width: c.width,
    height: c.height
  };
}
var Rd = C2(() => {
  Or2();
  bd();
  At2();
  Oe2();
  To();
  dt2();
  Ho();
  zt2();
  o2(m3, "isElementScaled");
  o2(Z0, "getCompositeRect");
});
function h3(e4) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e4.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    r.add(i.name);
    var c = [].concat(i.requires || [], i.requiresIfExists || []);
    c.forEach(function(l) {
      if (!r.has(l)) {
        var s = t.get(l);
        s && a(s);
      }
    }), n.push(i);
  }
  return o2(a, "sort"), e4.forEach(function(i) {
    r.has(i.name) || a(i);
  }), n;
}
function K0(e4) {
  var t = h3(e4);
  return Df.reduce(function(r, n) {
    return r.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
var yd = C2(() => {
  ke2();
  o2(h3, "order");
  o2(K0, "orderModifiers");
});
function J0(e4) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e4());
      });
    })), t;
  };
}
var xd = C2(() => {
  o2(J0, "debounce");
});
function Q0(e4) {
  var t = e4.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, {
      options: Object.assign({}, a.options, n.options),
      data: Object.assign({}, a.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Ed = C2(() => {
  o2(Q0, "mergeByName");
});
function Cd() {
  for (var e4 = arguments.length, t = new Array(e4), r = 0; r < e4; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Md(e4) {
  e4 === void 0 && (e4 = {});
  var t = e4, r = t.defaultModifiers, n = r === void 0 ? [] : r, a = t.defaultOptions, i = a === void 0 ? Sd : a;
  return o2(function(l, s, u) {
    u === void 0 && (u = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Sd, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, d = [], m = false, v = {
      state: f,
      setOptions: o2(function(g) {
        var w = typeof g == "function" ? g(f.options) : g;
        p(), f.options = Object.assign({}, i, f.options, w), f.scrollParents = {
          reference: We2(l) ? Tt2(l) : l.contextElement ? Tt2(l.contextElement) : [],
          popper: Tt2(s)
        };
        var b = K0(Q0([].concat(n, f.options.modifiers)));
        return f.orderedModifiers = b.filter(function(x) {
          return x.enabled;
        }), R(), v.update();
      }, "setOptions"),
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: o2(function() {
        if (!m) {
          var g = f.elements, w = g.reference, b = g.popper;
          if (Cd(w, b)) {
            f.rects = {
              reference: Z0(w, et2(b), f.options.strategy === "fixed"),
              popper: Qt2(b)
            }, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(A) {
              return f.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var x = 0; x < f.orderedModifiers.length; x++) {
              if (f.reset === true) {
                f.reset = false, x = -1;
                continue;
              }
              var E4 = f.orderedModifiers[x], y = E4.fn, S = E4.options, L2 = S === void 0 ? {} : S, M2 = E4.name;
              typeof y == "function" && (f = y({
                state: f,
                options: L2,
                name: M2,
                instance: v
              }) || f);
            }
          }
        }
      }, "forceUpdate"),
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: J0(function() {
        return new Promise(function(h4) {
          v.forceUpdate(), h4(f);
        });
      }),
      destroy: o2(function() {
        p(), m = true;
      }, "destroy")
    };
    if (!Cd(l, s))
      return v;
    v.setOptions(u).then(function(h4) {
      !m && u.onFirstUpdate && u.onFirstUpdate(h4);
    });
    function R() {
      f.orderedModifiers.forEach(function(h4) {
        var g = h4.name, w = h4.options, b = w === void 0 ? {} : w, x = h4.effect;
        if (typeof x == "function") {
          var E4 = x({
            state: f,
            name: g,
            instance: v,
            options: b
          }), y = o2(function() {
          }, "noopFn");
          d.push(E4 || y);
        }
      });
    }
    o2(R, "runModifierEffects");
    function p() {
      d.forEach(function(h4) {
        return h4();
      }), d = [];
    }
    return o2(p, "cleanupModifierEffects"), v;
  }, "createPopper");
}
var Sd;
var Ld = C2(() => {
  Rd();
  Mo();
  $0();
  Nr2();
  yd();
  xd();
  Ed();
  Oe2();
  Sd = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  o2(Cd, "areValidElements");
  o2(Md, "popperGenerator");
});
var g3;
var el;
var Ad = C2(() => {
  Ld();
  Zf();
  md();
  Xf();
  _f();
  dd();
  id();
  vd();
  Uf();
  ud();
  G0();
  g3 = [Yf, pd, Gf, Ff, fd, ad, gd, Wf, sd], el = Md({
    defaultModifiers: g3
  });
});
var Id = C2(() => {
  ke2();
  G0();
  Ad();
});
var Td = H2((TH, zd) => {
  var v3 = typeof Element < "u", w3 = typeof Map == "function", b3 = typeof Set == "function", R3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function ko(e4, t) {
    if (e4 === t) return true;
    if (e4 && t && typeof e4 == "object" && typeof t == "object") {
      if (e4.constructor !== t.constructor) return false;
      var r, n, a;
      if (Array.isArray(e4)) {
        if (r = e4.length, r != t.length) return false;
        for (n = r; n-- !== 0; )
          if (!ko(e4[n], t[n])) return false;
        return true;
      }
      var i;
      if (w3 && e4 instanceof Map && t instanceof Map) {
        if (e4.size !== t.size) return false;
        for (i = e4.entries(); !(n = i.next()).done; )
          if (!t.has(n.value[0])) return false;
        for (i = e4.entries(); !(n = i.next()).done; )
          if (!ko(n.value[1], t.get(n.value[0]))) return false;
        return true;
      }
      if (b3 && e4 instanceof Set && t instanceof Set) {
        if (e4.size !== t.size) return false;
        for (i = e4.entries(); !(n = i.next()).done; )
          if (!t.has(n.value[0])) return false;
        return true;
      }
      if (R3 && ArrayBuffer.isView(e4) && ArrayBuffer.isView(t)) {
        if (r = e4.length, r != t.length) return false;
        for (n = r; n-- !== 0; )
          if (e4[n] !== t[n]) return false;
        return true;
      }
      if (e4.constructor === RegExp) return e4.source === t.source && e4.flags === t.flags;
      if (e4.valueOf !== Object.prototype.valueOf && typeof e4.valueOf == "function" && typeof t.valueOf == "function") return e4.valueOf() === t.valueOf();
      if (e4.toString !== Object.prototype.toString && typeof e4.toString == "function" && typeof t.toString == "function") return e4.toString() === t.toString();
      if (a = Object.keys(e4), r = a.length, r !== Object.keys(t).length) return false;
      for (n = r; n-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, a[n])) return false;
      if (v3 && e4 instanceof Element) return false;
      for (n = r; n-- !== 0; )
        if (!((a[n] === "_owner" || a[n] === "__v" || a[n] === "__o") && e4.$$typeof) && !ko(e4[a[n]], t[a[n]]))
          return false;
      return true;
    }
    return e4 !== e4 && t !== t;
  }
  o2(ko, "equal");
  zd.exports = o2(function(t, r) {
    try {
      return ko(t, r);
    } catch (n) {
      if ((n.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw n;
    }
  }, "isEqual");
});
var Pd;
var y3;
var tl;
var kd = C2(() => {
  Id();
  Pd = me2(Td());
  Of();
  y3 = [], tl = o2(function(t, r, n) {
    n === void 0 && (n = {});
    var a = Ht2.useRef(null), i = {
      onFirstUpdate: n.onFirstUpdate,
      placement: n.placement || "bottom",
      strategy: n.strategy || "absolute",
      modifiers: n.modifiers || y3
    }, c = Ht2.useState({
      styles: {
        popper: {
          position: i.strategy,
          left: "0",
          top: "0"
        },
        arrow: {
          position: "absolute"
        }
      },
      attributes: {}
    }), l = c[0], s = c[1], u = Ht2.useMemo(function() {
      return {
        name: "updateState",
        enabled: true,
        phase: "write",
        fn: o2(function(v) {
          var R = v.state, p = Object.keys(R.elements);
          Hd.flushSync(function() {
            s({
              styles: A0(p.map(function(h4) {
                return [h4, R.styles[h4] || {}];
              })),
              attributes: A0(p.map(function(h4) {
                return [h4, R.attributes[h4]];
              }))
            });
          });
        }, "fn"),
        requires: ["computeStyles"]
      };
    }, []), f = Ht2.useMemo(function() {
      var m = {
        onFirstUpdate: i.onFirstUpdate,
        placement: i.placement,
        strategy: i.strategy,
        modifiers: [].concat(i.modifiers, [u, {
          name: "applyStyles",
          enabled: false
        }])
      };
      return (0, Pd.default)(a.current, m) ? a.current || m : (a.current = m, m);
    }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, u]), d = Ht2.useRef();
    return I0(function() {
      d.current && d.current.setOptions(f);
    }, [f]), I0(function() {
      if (!(t == null || r == null)) {
        var m = n.createPopper || el, v = m(t, r, f);
        return d.current = v, function() {
          v.destroy(), d.current = null;
        };
      }
    }, [t, r, n.createPopper]), {
      state: d.current ? d.current.state : null,
      styles: l.styles,
      attributes: l.attributes,
      update: d.current ? d.current.update : null,
      forceUpdate: d.current ? d.current.forceUpdate : null
    };
  }, "usePopper");
});
var Od = C2(() => {
  kd();
});
function Dd(e4) {
  var t = $2.useRef(e4);
  return t.current = e4, $2.useCallback(function() {
    return t.current;
  }, []);
}
function E3(e4) {
  var t = e4.initial, r = e4.value, n = e4.onChange, a = n === void 0 ? x3 : n;
  if (t === void 0 && r === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var i = $2.useState(t), c = i[0], l = i[1], s = Dd(c), u = $2.useCallback(function(d) {
    var m = s(), v = typeof d == "function" ? d(m) : d;
    typeof v.persist == "function" && v.persist(), l(v), typeof a == "function" && a(v);
  }, [s, a]), f = r !== void 0;
  return [f ? r : c, f ? a : u];
}
function Fd(e4, t) {
  return e4 === void 0 && (e4 = 0), t === void 0 && (t = 0), function() {
    return {
      width: 0,
      height: 0,
      top: t,
      right: e4,
      bottom: t,
      left: e4,
      x: 0,
      y: 0,
      toJSON: o2(function() {
        return null;
      }, "toJSON")
    };
  };
}
function _d(e4, t) {
  var r, n, a;
  e4 === void 0 && (e4 = {}), t === void 0 && (t = {});
  var i = Object.keys(Nd).reduce(function(T, z2) {
    var k2;
    return W2({}, T, (k2 = {}, k2[z2] = T[z2] !== void 0 ? T[z2] : Nd[z2], k2));
  }, e4), c = $2.useMemo(
    function() {
      return [{
        name: "offset",
        options: {
          offset: i.offset
        }
      }];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(i.offset) ? i.offset : []
  ), l = W2({}, t, {
    placement: t.placement || i.placement,
    modifiers: t.modifiers || c
  }), s = $2.useState(null), u = s[0], f = s[1], d = $2.useState(null), m = d[0], v = d[1], R = E3({
    initial: i.defaultVisible,
    value: i.visible,
    onChange: i.onVisibleChange
  }), p = R[0], h4 = R[1], g = $2.useRef();
  $2.useEffect(function() {
    return function() {
      return clearTimeout(g.current);
    };
  }, []);
  var w = tl(i.followCursor ? Bd : u, m, l), b = w.styles, x = w.attributes, E4 = ur2(w, S3), y = E4.update, S = Dd({
    visible: p,
    triggerRef: u,
    tooltipRef: m,
    finalConfig: i
  }), L2 = $2.useCallback(
    function(T) {
      return Array.isArray(i.trigger) ? i.trigger.includes(T) : i.trigger === T;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(i.trigger) ? i.trigger : [i.trigger]
  ), M2 = $2.useCallback(function() {
    clearTimeout(g.current), g.current = window.setTimeout(function() {
      return h4(false);
    }, i.delayHide);
  }, [i.delayHide, h4]), A = $2.useCallback(function() {
    clearTimeout(g.current), g.current = window.setTimeout(function() {
      return h4(true);
    }, i.delayShow);
  }, [i.delayShow, h4]), P2 = $2.useCallback(function() {
    S().visible ? M2() : A();
  }, [S, M2, A]);
  $2.useEffect(function() {
    if (S().finalConfig.closeOnOutsideClick) {
      var T = o2(function(k2) {
        var V2, D2 = S(), j2 = D2.tooltipRef, O = D2.triggerRef, G = (k2.composedPath == null || (V2 = k2.composedPath()) == null ? void 0 : V2[0]) || k2.target;
        G instanceof Node && j2 != null && O != null && !j2.contains(G) && !O.contains(G) && M2();
      }, "handleClickOutside");
      return document.addEventListener("mousedown", T), function() {
        return document.removeEventListener("mousedown", T);
      };
    }
  }, [S, M2]), $2.useEffect(function() {
    if (!(u == null || !L2("click")))
      return u.addEventListener("click", P2), function() {
        return u.removeEventListener("click", P2);
      };
  }, [u, L2, P2]), $2.useEffect(function() {
    if (!(u == null || !L2("double-click")))
      return u.addEventListener("dblclick", P2), function() {
        return u.removeEventListener("dblclick", P2);
      };
  }, [u, L2, P2]), $2.useEffect(function() {
    if (!(u == null || !L2("right-click"))) {
      var T = o2(function(k2) {
        k2.preventDefault(), P2();
      }, "preventDefaultAndToggle");
      return u.addEventListener("contextmenu", T), function() {
        return u.removeEventListener("contextmenu", T);
      };
    }
  }, [u, L2, P2]), $2.useEffect(function() {
    if (!(u == null || !L2("focus")))
      return u.addEventListener("focus", A), u.addEventListener("blur", M2), function() {
        u.removeEventListener("focus", A), u.removeEventListener("blur", M2);
      };
  }, [u, L2, A, M2]), $2.useEffect(function() {
    if (!(u == null || !L2("hover")))
      return u.addEventListener("mouseenter", A), u.addEventListener("mouseleave", M2), function() {
        u.removeEventListener("mouseenter", A), u.removeEventListener("mouseleave", M2);
      };
  }, [u, L2, A, M2]), $2.useEffect(function() {
    if (!(m == null || !L2("hover") || !S().finalConfig.interactive))
      return m.addEventListener("mouseenter", A), m.addEventListener("mouseleave", M2), function() {
        m.removeEventListener("mouseenter", A), m.removeEventListener("mouseleave", M2);
      };
  }, [m, L2, A, M2, S]);
  var _2 = E4 == null || (r = E4.state) == null || (n = r.modifiersData) == null || (a = n.hide) == null ? void 0 : a.isReferenceHidden;
  $2.useEffect(function() {
    i.closeOnTriggerHidden && _2 && M2();
  }, [i.closeOnTriggerHidden, M2, _2]), $2.useEffect(function() {
    if (!i.followCursor || u == null) return;
    function T(z2) {
      var k2 = z2.clientX, V2 = z2.clientY;
      Bd.getBoundingClientRect = Fd(k2, V2), y == null ? void 0 : y();
    }
    return o2(T, "setMousePosition"), u.addEventListener("mousemove", T), function() {
      return u.removeEventListener("mousemove", T);
    };
  }, [i.followCursor, u, y]), $2.useEffect(function() {
    if (!(m == null || y == null || i.mutationObserverOptions == null)) {
      var T = new MutationObserver(y);
      return T.observe(m, i.mutationObserverOptions), function() {
        return T.disconnect();
      };
    }
  }, [i.mutationObserverOptions, m, y]);
  var F = o2(function(z2) {
    return z2 === void 0 && (z2 = {}), W2({}, z2, {
      style: W2({}, z2.style, b.popper)
    }, x.popper, {
      "data-popper-interactive": i.interactive
    });
  }, "getTooltipProps"), K2 = o2(function(z2) {
    return z2 === void 0 && (z2 = {}), W2({}, z2, x.arrow, {
      style: W2({}, z2.style, b.arrow),
      "data-popper-arrow": true
    });
  }, "getArrowProps");
  return W2({
    getArrowProps: K2,
    getTooltipProps: F,
    setTooltipRef: v,
    setTriggerRef: f,
    tooltipRef: m,
    triggerRef: u,
    visible: p
  }, E4);
}
var x3;
var S3;
var Bd;
var Nd;
var $d = C2(() => {
  Pn2();
  Yr2();
  Od();
  o2(Dd, "useGetLatest");
  x3 = o2(function() {
  }, "noop");
  o2(E3, "useControlledState");
  o2(Fd, "generateBoundingClientRect");
  S3 = ["styles", "attributes"], Bd = {
    getBoundingClientRect: Fd()
  }, Nd = {
    closeOnOutsideClick: true,
    closeOnTriggerHidden: false,
    defaultVisible: false,
    delayHide: 0,
    delayShow: 0,
    followCursor: false,
    interactive: false,
    mutationObserverOptions: {
      attributes: true,
      childList: true,
      subtree: true
    },
    offset: [0, 6],
    trigger: "hover"
  };
  o2(_d, "usePopperTooltip");
});
var Vd;
var Ge2;
var Pt2;
var C3;
var M3;
var nl;
var Wd = C2(() => {
  "use strict";
  Vd = me2(Kr2(), 1), Ge2 = (0, Vd.default)(1e3)(
    (e4, t, r, n = 0) => t.split("-")[0] === e4 ? r : n
  ), Pt2 = 8, C3 = xr.div(
    {
      position: "absolute",
      borderStyle: "solid"
    },
    ({ placement: e4 }) => {
      let t = 0, r = 0;
      switch (true) {
        case (e4.startsWith("left") || e4.startsWith("right")): {
          r = 8;
          break;
        }
        case (e4.startsWith("top") || e4.startsWith("bottom")): {
          t = 8;
          break;
        }
        default:
      }
      return { transform: `translate3d(${t}px, ${r}px, 0px)` };
    },
    ({ theme: e4, color: t, placement: r }) => ({
      bottom: `${Ge2("top", r, `${Pt2 * -1}px`, "auto")}`,
      top: `${Ge2("bottom", r, `${Pt2 * -1}px`, "auto")}`,
      right: `${Ge2("left", r, `${Pt2 * -1}px`, "auto")}`,
      left: `${Ge2("right", r, `${Pt2 * -1}px`, "auto")}`,
      borderBottomWidth: `${Ge2("top", r, "0", Pt2)}px`,
      borderTopWidth: `${Ge2("bottom", r, "0", Pt2)}px`,
      borderRightWidth: `${Ge2("left", r, "0", Pt2)}px`,
      borderLeftWidth: `${Ge2("right", r, "0", Pt2)}px`,
      borderTopColor: Ge2(
        "top",
        r,
        e4.color[t] || t || e4.base === "light" ? fo(e4.background.app) : e4.background.app,
        "transparent"
      ),
      borderBottomColor: Ge2(
        "bottom",
        r,
        e4.color[t] || t || e4.base === "light" ? fo(e4.background.app) : e4.background.app,
        "transparent"
      ),
      borderLeftColor: Ge2(
        "left",
        r,
        e4.color[t] || t || e4.base === "light" ? fo(e4.background.app) : e4.background.app,
        "transparent"
      ),
      borderRightColor: Ge2(
        "right",
        r,
        e4.color[t] || t || e4.base === "light" ? fo(e4.background.app) : e4.background.app,
        "transparent"
      )
    })
  ), M3 = xr.div(
    ({ hidden: e4 }) => ({
      display: e4 ? "none" : "inline-block",
      zIndex: 2147483647
    }),
    ({ theme: e4, color: t, hasChrome: r }) => r ? {
      background: t && e4.color[t] || t || e4.base === "light" ? fo(e4.background.app) : e4.background.app,
      filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
      borderRadius: e4.appBorderRadius + 2,
      fontSize: e4.typography.size.s1
    } : {}
  ), nl = import_react8.default.forwardRef(
    ({
      placement: e4 = "top",
      hasChrome: t = true,
      children: r,
      arrowProps: n = {},
      tooltipRef: a,
      color: i,
      withArrows: c,
      ...l
    }, s) => import_react8.default.createElement(M3, { "data-testid": "tooltip", hasChrome: t, ref: s, ...l, color: i }, t && c && import_react8.default.createElement(C3, { placement: e4, ...n, color: i }), r)
  );
  nl.displayName = "Tooltip";
});
var al = {};
Xr2(al, {
  WithToolTipState: () => ol,
  WithTooltip: () => ol,
  WithTooltipPure: () => qd
});
var Oo;
var H3;
var P3;
var qd;
var ol;
var Bo = C2(() => {
  "use strict";
  $d();
  Wd();
  ({ document: Oo } = import_global3.global), H3 = xr.div`
  display: inline-block;
  cursor: ${(e4) => {
    var _a2;
    return e4.trigger === "hover" || ((_a2 = e4.trigger) == null ? void 0 : _a2.includes("hover")) ? "default" : "pointer";
  }};
`, P3 = xr.g`
  cursor: ${(e4) => {
    var _a2;
    return e4.trigger === "hover" || ((_a2 = e4.trigger) == null ? void 0 : _a2.includes("hover")) ? "default" : "pointer";
  }};
`, qd = o2(({
    svg: e4 = false,
    trigger: t = "click",
    closeOnOutsideClick: r = false,
    placement: n = "top",
    modifiers: a = [
      {
        name: "preventOverflow",
        options: {
          padding: 8
        }
      },
      {
        name: "offset",
        options: {
          offset: [8, 8]
        }
      },
      {
        name: "arrow",
        options: {
          padding: 8
        }
      }
    ],
    hasChrome: i = true,
    defaultVisible: c = false,
    withArrows: l,
    offset: s,
    tooltip: u,
    children: f,
    closeOnTriggerHidden: d,
    mutationObserverOptions: m,
    delayHide: v = t === "hover" ? 200 : 0,
    visible: R,
    interactive: p,
    delayShow: h4 = t === "hover" ? 400 : 0,
    strategy: g,
    followCursor: w,
    onVisibleChange: b,
    ...x
  }) => {
    let E4 = e4 ? P3 : H3, {
      getArrowProps: y,
      getTooltipProps: S,
      setTooltipRef: L2,
      setTriggerRef: M2,
      visible: A,
      state: P2
    } = _d(
      {
        trigger: t,
        placement: n,
        defaultVisible: c,
        delayHide: v,
        interactive: p,
        closeOnOutsideClick: r,
        closeOnTriggerHidden: d,
        onVisibleChange: b,
        delayShow: h4,
        followCursor: w,
        mutationObserverOptions: m,
        visible: R,
        offset: s
      },
      {
        modifiers: a,
        strategy: g
      }
    ), _2 = A ? import_react9.default.createElement(
      nl,
      {
        placement: P2 == null ? void 0 : P2.placement,
        ref: L2,
        hasChrome: i,
        arrowProps: y(),
        withArrows: l,
        ...S()
      },
      typeof u == "function" ? u({ onHide: o2(() => b(false), "onHide") }) : u
    ) : null;
    return import_react9.default.createElement(import_react9.default.Fragment, null, import_react9.default.createElement(E4, { trigger: t, ref: M2, ...x }, f), A && import_react_dom.default.createPortal(_2, Oo.body));
  }, "WithTooltipPure"), ol = o2(({
    startOpen: e4 = false,
    onVisibleChange: t,
    ...r
  }) => {
    let [n, a] = (0, import_react9.useState)(e4), i = (0, import_react9.useCallback)(
      (c) => {
        t && t(c) === false || a(c);
      },
      [t]
    );
    return (0, import_react9.useEffect)(() => {
      let c = o2(() => i(false), "hide");
      Oo.addEventListener("keydown", c, false);
      let l = Array.from(Oo.getElementsByTagName("iframe")), s = [];
      return l.forEach((u) => {
        let f = o2(() => {
          try {
            u.contentWindow.document && (u.contentWindow.document.addEventListener("click", c), s.push(() => {
              try {
                u.contentWindow.document.removeEventListener("click", c);
              } catch {
              }
            }));
          } catch {
          }
        }, "bind");
        f(), u.addEventListener("load", f), s.push(() => {
          u.removeEventListener("load", f);
        });
      }), () => {
        Oo.removeEventListener("keydown", c), s.forEach((u) => {
          u();
        });
      };
    }), import_react9.default.createElement(qd, { ...r, visible: n, onVisibleChange: i });
  }, "WithToolTipState");
});
var J2 = o2(({ ...e4 }, t) => {
  let r = [e4.class, e4.className];
  return delete e4.class, e4.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" "), e4;
}, "nameSpaceClassNames");
Yr2();
Hl();
In2();
function Pl(e4, t) {
  e4.prototype = Object.create(t.prototype), e4.prototype.constructor = e4, ht2(e4, t);
}
o2(Pl, "_inheritsLoose");
kl();
In2();
function Ol(e4) {
  try {
    return Function.toString.call(e4).indexOf("[native code]") !== -1;
  } catch {
    return typeof e4 == "function";
  }
}
o2(Ol, "_isNativeFunction");
function Uo() {
  try {
    var e4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Uo = o2(function() {
    return !!e4;
  }, "_isNativeReflectConstruct"))();
}
o2(Uo, "_isNativeReflectConstruct");
In2();
function Bl(e4, t, r) {
  if (Uo()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e4.bind.apply(e4, n))();
  return r && ht2(a, r.prototype), a;
}
o2(Bl, "_construct");
function Tn2(e4) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Tn2 = o2(function(n) {
    if (n === null || !Ol(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, a);
    }
    function a() {
      return Bl(n, arguments, zn2(this).constructor);
    }
    return o2(a, "Wrapper"), a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), ht2(a, n);
  }, "_wrapNativeSuper"), Tn2(e4);
}
o2(Tn2, "_wrapNativeSuper");
var xp = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function Ep() {
  for (var e4 = arguments.length, t = new Array(e4), r = 0; r < e4; r++)
    t[r] = arguments[r];
  var n = t[0], a = [], i;
  for (i = 1; i < t.length; i += 1)
    a.push(t[i]);
  return a.forEach(function(c) {
    n = n.replace(/%[a-z]/, c);
  }), n;
}
o2(Ep, "format");
var Ce2 = function(e4) {
  Pl(t, e4);
  function t(r) {
    for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
      i[c - 1] = arguments[c];
    return n = e4.call(this, Ep.apply(void 0, [xp[r]].concat(i))) || this, Tl(n);
  }
  return o2(t, "PolishedError"), t;
}(Tn2(Error));
function Nl(e4, t) {
  return e4.substr(-t.length) === t;
}
o2(Nl, "endsWith");
var Sp = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
function Dl(e4) {
  if (typeof e4 != "string") return e4;
  var t = e4.match(Sp);
  return t ? parseFloat(e4) : e4;
}
o2(Dl, "stripUnit");
var Cp = o2(function(t) {
  return function(r, n) {
    n === void 0 && (n = "16px");
    var a = r, i = n;
    if (typeof r == "string") {
      if (!Nl(r, "px"))
        throw new Ce2(69, t, r);
      a = Dl(r);
    }
    if (typeof n == "string") {
      if (!Nl(n, "px"))
        throw new Ce2(70, t, n);
      i = Dl(n);
    }
    if (typeof a == "string")
      throw new Ce2(71, r, t);
    if (typeof i == "string")
      throw new Ce2(72, n, t);
    return "" + a / i + t;
  };
}, "pxtoFactory");
var _l = Cp;
var Yw = _l("em");
var Zw = _l("rem");
function qo(e4) {
  return Math.round(e4 * 255);
}
o2(qo, "colorToInt");
function Mp(e4, t, r) {
  return qo(e4) + "," + qo(t) + "," + qo(r);
}
o2(Mp, "convertToInt");
function Zr2(e4, t, r, n) {
  if (n === void 0 && (n = Mp), t === 0)
    return n(r, r, r);
  var a = (e4 % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * t, c = i * (1 - Math.abs(a % 2 - 1)), l = 0, s = 0, u = 0;
  a >= 0 && a < 1 ? (l = i, s = c) : a >= 1 && a < 2 ? (l = c, s = i) : a >= 2 && a < 3 ? (s = i, u = c) : a >= 3 && a < 4 ? (s = c, u = i) : a >= 4 && a < 5 ? (l = c, u = i) : a >= 5 && a < 6 && (l = i, u = c);
  var f = r - i / 2, d = l + f, m = s + f, v = u + f;
  return n(d, m, v);
}
o2(Zr2, "hslToRgb");
var Fl = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function Lp(e4) {
  if (typeof e4 != "string") return e4;
  var t = e4.toLowerCase();
  return Fl[t] ? "#" + Fl[t] : e4;
}
o2(Lp, "nameToHex");
var Ap = /^#[a-fA-F0-9]{6}$/;
var Ip = /^#[a-fA-F0-9]{8}$/;
var zp = /^#[a-fA-F0-9]{3}$/;
var Tp = /^#[a-fA-F0-9]{4}$/;
var Go = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var Hp = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var Pp = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var kp = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function cr2(e4) {
  if (typeof e4 != "string")
    throw new Ce2(3);
  var t = Lp(e4);
  if (t.match(Ap))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(Ip)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r
    };
  }
  if (t.match(zp))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(Tp)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n
    };
  }
  var a = Go.exec(t);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10)
    };
  var i = Hp.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4])
    };
  var c = Pp.exec(t);
  if (c) {
    var l = parseInt("" + c[1], 10), s = parseInt("" + c[2], 10) / 100, u = parseInt("" + c[3], 10) / 100, f = "rgb(" + Zr2(l, s, u) + ")", d = Go.exec(f);
    if (!d)
      throw new Ce2(4, t, f);
    return {
      red: parseInt("" + d[1], 10),
      green: parseInt("" + d[2], 10),
      blue: parseInt("" + d[3], 10)
    };
  }
  var m = kp.exec(t.substring(0, 50));
  if (m) {
    var v = parseInt("" + m[1], 10), R = parseInt("" + m[2], 10) / 100, p = parseInt("" + m[3], 10) / 100, h4 = "rgb(" + Zr2(v, R, p) + ")", g = Go.exec(h4);
    if (!g)
      throw new Ce2(4, t, h4);
    return {
      red: parseInt("" + g[1], 10),
      green: parseInt("" + g[2], 10),
      blue: parseInt("" + g[3], 10),
      alpha: parseFloat("" + m[4]) > 1 ? parseFloat("" + m[4]) / 100 : parseFloat("" + m[4])
    };
  }
  throw new Ce2(5);
}
o2(cr2, "parseToRgb");
function Op(e4) {
  var t = e4.red / 255, r = e4.green / 255, n = e4.blue / 255, a = Math.max(t, r, n), i = Math.min(t, r, n), c = (a + i) / 2;
  if (a === i)
    return e4.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: c,
      alpha: e4.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: c
    };
  var l, s = a - i, u = c > 0.5 ? s / (2 - a - i) : s / (a + i);
  switch (a) {
    case t:
      l = (r - n) / s + (r < n ? 6 : 0);
      break;
    case r:
      l = (n - t) / s + 2;
      break;
    default:
      l = (t - r) / s + 4;
      break;
  }
  return l *= 60, e4.alpha !== void 0 ? {
    hue: l,
    saturation: u,
    lightness: c,
    alpha: e4.alpha
  } : {
    hue: l,
    saturation: u,
    lightness: c
  };
}
o2(Op, "rgbToHsl");
function gt2(e4) {
  return Op(cr2(e4));
}
o2(gt2, "parseToHsl");
var Bp = o2(function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, "reduceHexValue");
var Yo = Bp;
function Nt2(e4) {
  var t = e4.toString(16);
  return t.length === 1 ? "0" + t : t;
}
o2(Nt2, "numberToHex");
function Xo(e4) {
  return Nt2(Math.round(e4 * 255));
}
o2(Xo, "colorToHex");
function Np(e4, t, r) {
  return Yo("#" + Xo(e4) + Xo(t) + Xo(r));
}
o2(Np, "convertToHex");
function Hn(e4, t, r) {
  return Zr2(e4, t, r, Np);
}
o2(Hn, "hslToHex");
function Dp(e4, t, r) {
  if (typeof e4 == "number" && typeof t == "number" && typeof r == "number")
    return Hn(e4, t, r);
  if (typeof e4 == "object" && t === void 0 && r === void 0)
    return Hn(e4.hue, e4.saturation, e4.lightness);
  throw new Ce2(1);
}
o2(Dp, "hsl");
function Fp(e4, t, r, n) {
  if (typeof e4 == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? Hn(e4, t, r) : "rgba(" + Zr2(e4, t, r) + "," + n + ")";
  if (typeof e4 == "object" && t === void 0 && r === void 0 && n === void 0)
    return e4.alpha >= 1 ? Hn(e4.hue, e4.saturation, e4.lightness) : "rgba(" + Zr2(e4.hue, e4.saturation, e4.lightness) + "," + e4.alpha + ")";
  throw new Ce2(2);
}
o2(Fp, "hsla");
function Zo(e4, t, r) {
  if (typeof e4 == "number" && typeof t == "number" && typeof r == "number")
    return Yo("#" + Nt2(e4) + Nt2(t) + Nt2(r));
  if (typeof e4 == "object" && t === void 0 && r === void 0)
    return Yo("#" + Nt2(e4.red) + Nt2(e4.green) + Nt2(e4.blue));
  throw new Ce2(6);
}
o2(Zo, "rgb");
function Dt2(e4, t, r, n) {
  if (typeof e4 == "string" && typeof t == "number") {
    var a = cr2(e4);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (typeof e4 == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? Zo(e4, t, r) : "rgba(" + e4 + "," + t + "," + r + "," + n + ")";
    if (typeof e4 == "object" && t === void 0 && r === void 0 && n === void 0)
      return e4.alpha >= 1 ? Zo(e4.red, e4.green, e4.blue) : "rgba(" + e4.red + "," + e4.green + "," + e4.blue + "," + e4.alpha + ")";
  }
  throw new Ce2(7);
}
o2(Dt2, "rgba");
var _p = o2(function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, "isRgb");
var $p = o2(function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, "isRgba");
var Vp = o2(function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, "isHsl");
var jp = o2(function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
}, "isHsla");
function vt2(e4) {
  if (typeof e4 != "object") throw new Ce2(8);
  if ($p(e4)) return Dt2(e4);
  if (_p(e4)) return Zo(e4);
  if (jp(e4)) return Fp(e4);
  if (Vp(e4)) return Dp(e4);
  throw new Ce2(8);
}
o2(vt2, "toColorString");
function $l(e4, t, r) {
  return o2(function() {
    var a = r.concat(Array.prototype.slice.call(arguments));
    return a.length >= t ? e4.apply(this, a) : $l(e4, t, a);
  }, "fn");
}
o2($l, "curried");
function He2(e4) {
  return $l(e4, e4.length, []);
}
o2(He2, "curry");
function Wp(e4, t) {
  if (t === "transparent") return t;
  var r = gt2(t);
  return vt2(W2({}, r, {
    hue: r.hue + parseFloat(e4)
  }));
}
o2(Wp, "adjustHue");
var Kw = He2(Wp);
function sr2(e4, t, r) {
  return Math.max(e4, Math.min(t, r));
}
o2(sr2, "guard");
function Up(e4, t) {
  if (t === "transparent") return t;
  var r = gt2(t);
  return vt2(W2({}, r, {
    lightness: sr2(0, 1, r.lightness - parseFloat(e4))
  }));
}
o2(Up, "darken");
var qp = He2(Up);
var wt2 = qp;
function Gp(e4, t) {
  if (t === "transparent") return t;
  var r = gt2(t);
  return vt2(W2({}, r, {
    saturation: sr2(0, 1, r.saturation - parseFloat(e4))
  }));
}
o2(Gp, "desaturate");
var Jw = He2(Gp);
function Xp(e4, t) {
  if (t === "transparent") return t;
  var r = gt2(t);
  return vt2(W2({}, r, {
    lightness: sr2(0, 1, r.lightness + parseFloat(e4))
  }));
}
o2(Xp, "lighten");
var Yp = He2(Xp);
var Ko = Yp;
function Zp(e4, t, r) {
  if (t === "transparent") return r;
  if (r === "transparent") return t;
  if (e4 === 0) return r;
  var n = cr2(t), a = W2({}, n, {
    alpha: typeof n.alpha == "number" ? n.alpha : 1
  }), i = cr2(r), c = W2({}, i, {
    alpha: typeof i.alpha == "number" ? i.alpha : 1
  }), l = a.alpha - c.alpha, s = parseFloat(e4) * 2 - 1, u = s * l === -1 ? s : s + l, f = 1 + s * l, d = (u / f + 1) / 2, m = 1 - d, v = {
    red: Math.floor(a.red * d + c.red * m),
    green: Math.floor(a.green * d + c.green * m),
    blue: Math.floor(a.blue * d + c.blue * m),
    alpha: a.alpha * parseFloat(e4) + c.alpha * (1 - parseFloat(e4))
  };
  return Dt2(v);
}
o2(Zp, "mix");
var Kp = He2(Zp);
var Vl = Kp;
function Jp(e4, t) {
  if (t === "transparent") return t;
  var r = cr2(t), n = typeof r.alpha == "number" ? r.alpha : 1, a = W2({}, r, {
    alpha: sr2(0, 1, (n * 100 + parseFloat(e4) * 100) / 100)
  });
  return Dt2(a);
}
o2(Jp, "opacify");
var Qw = He2(Jp);
function Qp(e4, t) {
  if (t === "transparent") return t;
  var r = gt2(t);
  return vt2(W2({}, r, {
    saturation: sr2(0, 1, r.saturation + parseFloat(e4))
  }));
}
o2(Qp, "saturate");
var e8 = He2(Qp);
function e22(e4, t) {
  return t === "transparent" ? t : vt2(W2({}, gt2(t), {
    hue: parseFloat(e4)
  }));
}
o2(e22, "setHue");
var t8 = He2(e22);
function t2(e4, t) {
  return t === "transparent" ? t : vt2(W2({}, gt2(t), {
    lightness: parseFloat(e4)
  }));
}
o2(t2, "setLightness");
var r8 = He2(t2);
function r2(e4, t) {
  return t === "transparent" ? t : vt2(W2({}, gt2(t), {
    saturation: parseFloat(e4)
  }));
}
o2(r2, "setSaturation");
var n8 = He2(r2);
function n2(e4, t) {
  return t === "transparent" ? t : Vl(parseFloat(e4), "rgb(0, 0, 0)", t);
}
o2(n2, "shade");
var o8 = He2(n2);
function o22(e4, t) {
  return t === "transparent" ? t : Vl(parseFloat(e4), "rgb(255, 255, 255)", t);
}
o2(o22, "tint");
var a8 = He2(o22);
function a2(e4, t) {
  if (t === "transparent") return t;
  var r = cr2(t), n = typeof r.alpha == "number" ? r.alpha : 1, a = W2({}, r, {
    alpha: sr2(0, 1, +(n * 100 - parseFloat(e4) * 100).toFixed(2) / 100)
  });
  return Dt2(a);
}
o2(a2, "transparentize");
var i2 = He2(a2);
var we2 = i2;
var Ne2 = o2(({ theme: e4 }) => ({
  margin: "20px 0 8px",
  padding: 0,
  cursor: "text",
  position: "relative",
  color: e4.color.defaultText,
  "&:first-of-type": {
    marginTop: 0,
    paddingTop: 0
  },
  "&:hover a.anchor": {
    textDecoration: "none"
  },
  "& tt, & code": {
    fontSize: "inherit"
  }
}), "headerCommon");
var at = o2(({ theme: e4 }) => ({
  lineHeight: 1,
  margin: "0 2px",
  padding: "3px 5px",
  whiteSpace: "nowrap",
  borderRadius: 3,
  fontSize: e4.typography.size.s2 - 1,
  border: e4.base === "light" ? `1px solid ${e4.color.mediumlight}` : `1px solid ${e4.color.darker}`,
  color: e4.base === "light" ? we2(0.1, e4.color.defaultText) : we2(0.3, e4.color.defaultText),
  backgroundColor: e4.base === "light" ? e4.color.lighter : e4.color.border
}), "codeCommon");
var N2 = o2(({ theme: e4 }) => ({
  fontFamily: e4.typography.fonts.base,
  fontSize: e4.typography.size.s3,
  margin: 0,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  WebkitOverflowScrolling: "touch"
}), "withReset");
var Me2 = {
  margin: "16px 0"
};
var jl = xr.div(N2);
var Wl = o2(({
  href: e4 = "",
  ...t
}) => {
  let n = /^\//.test(e4) ? `./?path=${e4}` : e4, i = /^#.*/.test(e4) ? "_self" : "_top";
  return import_react12.default.createElement("a", { href: n, target: i, ...t });
}, "Link");
var Jo = xr(Wl)(N2, ({ theme: e4 }) => ({
  fontSize: "inherit",
  lineHeight: "24px",
  color: e4.color.secondary,
  textDecoration: "none",
  "&.absent": {
    color: "#cc0000"
  },
  "&.anchor": {
    display: "block",
    paddingLeft: 30,
    marginLeft: -30,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0
  }
}));
var Qo = xr.blockquote(N2, Me2, ({ theme: e4 }) => ({
  borderLeft: `4px solid ${e4.color.medium}`,
  padding: "0 15px",
  color: e4.color.dark,
  "& > :first-of-type": {
    marginTop: 0
  },
  "& > :last-child": {
    marginBottom: 0
  }
}));
cn();
var j5 = o2((e4) => typeof e4 == "string", "isReactChildString");
var wh = /[\n\r]/g;
var bh = xr.code(
  ({ theme: e4 }) => ({
    // from reset
    fontFamily: e4.typography.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    display: "inline-block",
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: "baseline",
    color: "inherit"
  }),
  at
);
var Rh = xr(ln)(({ theme: e4 }) => ({
  // DocBlocks-specific styling and overrides
  fontFamily: e4.typography.fonts.mono,
  fontSize: `${e4.typography.size.s2 - 1}px`,
  lineHeight: "19px",
  margin: "25px 0 40px",
  borderRadius: e4.appBorderRadius,
  boxShadow: e4.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  "pre.prismjs": {
    padding: 20,
    background: "inherit"
  }
}));
var ei = o2(({
  className: e4,
  children: t,
  ...r
}) => {
  let n = (e4 || "").match(/lang-(\S+)/), a = import_react13.Children.toArray(t);
  return a.filter(j5).some((c) => c.match(wh)) ? import_react13.default.createElement(
    Rh,
    {
      bordered: true,
      copyable: true,
      language: (n == null ? void 0 : n[1]) ?? "text",
      format: false,
      ...r
    },
    t
  ) : import_react13.default.createElement(bh, { ...r, className: e4 }, a);
}, "Code");
var ti = xr.dl(N2, Me2, {
  padding: 0,
  "& dt": {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 0,
    margin: "16px 0 4px"
  },
  "& dt:first-of-type": {
    padding: 0
  },
  "& dt > :first-of-type": {
    marginTop: 0
  },
  "& dt > :last-child": {
    marginBottom: 0
  },
  "& dd": {
    margin: "0 0 16px",
    padding: "0 15px"
  },
  "& dd > :first-of-type": {
    marginTop: 0
  },
  "& dd > :last-child": {
    marginBottom: 0
  }
});
var ri = xr.div(N2);
var ni = xr.h1(N2, Ne2, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.l1}px`,
  fontWeight: e4.typography.weight.bold
}));
var oi = xr.h2(N2, Ne2, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.m2}px`,
  paddingBottom: 4,
  borderBottom: `1px solid ${e4.appBorderColor}`
}));
var ai = xr.h3(N2, Ne2, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.m1}px`
}));
var ii = xr.h4(N2, Ne2, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.s3}px`
}));
var li = xr.h5(N2, Ne2, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.s2}px`
}));
var ci = xr.h6(N2, Ne2, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.s2}px`,
  color: e4.color.dark
}));
var si = xr.hr(({ theme: e4 }) => ({
  border: "0 none",
  borderTop: `1px solid ${e4.appBorderColor}`,
  height: 4,
  padding: 0
}));
var ui = xr.img({
  maxWidth: "100%"
});
var fi = xr.li(N2, ({ theme: e4 }) => ({
  fontSize: e4.typography.size.s2,
  color: e4.color.defaultText,
  lineHeight: "24px",
  "& + li": {
    marginTop: ".25em"
  },
  "& ul, & ol": {
    marginTop: ".25em",
    marginBottom: 0
  },
  "& code": at({ theme: e4 })
}));
var Ph = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
};
var di = xr.ol(N2, Me2, Ph, {
  listStyle: "decimal"
});
var pi = xr.p(N2, Me2, ({ theme: e4 }) => ({
  fontSize: e4.typography.size.s2,
  lineHeight: "24px",
  color: e4.color.defaultText,
  "& code": at({ theme: e4 })
}));
var mi = xr.pre(N2, Me2, ({ theme: e4 }) => ({
  // reset
  fontFamily: e4.typography.fonts.mono,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  lineHeight: "18px",
  padding: "11px 1rem",
  whiteSpace: "pre-wrap",
  color: "inherit",
  borderRadius: 3,
  margin: "1rem 0",
  "&:not(.prismjs)": {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    padding: 0,
    margin: 0
  },
  "& pre, &.prismjs": {
    padding: 15,
    margin: 0,
    whiteSpace: "pre-wrap",
    color: "inherit",
    fontSize: "13px",
    lineHeight: "19px",
    code: {
      color: "inherit",
      fontSize: "inherit"
    }
  },
  "& code": {
    whiteSpace: "pre"
  },
  "& code, & tt": {
    border: "none"
  }
}));
var hi = xr.span(N2, ({ theme: e4 }) => ({
  "&.frame": {
    display: "block",
    overflow: "hidden",
    "& > span": {
      border: `1px solid ${e4.color.medium}`,
      display: "block",
      float: "left",
      overflow: "hidden",
      margin: "13px 0 0",
      padding: 7,
      width: "auto"
    },
    "& span img": {
      display: "block",
      float: "left"
    },
    "& span span": {
      clear: "both",
      color: e4.color.darkest,
      display: "block",
      padding: "5px 0 0"
    }
  },
  "&.align-center": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "center"
    },
    "& span img": {
      margin: "0 auto",
      textAlign: "center"
    }
  },
  "&.align-right": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px 0 0",
      textAlign: "right"
    },
    "& span img": {
      margin: 0,
      textAlign: "right"
    }
  },
  "&.float-left": {
    display: "block",
    marginRight: 13,
    overflow: "hidden",
    float: "left",
    "& span": {
      margin: "13px 0 0"
    }
  },
  "&.float-right": {
    display: "block",
    marginLeft: 13,
    overflow: "hidden",
    float: "right",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "right"
    }
  }
}));
var gi = xr.title(at);
var vi = xr.table(N2, Me2, ({ theme: e4 }) => ({
  fontSize: e4.typography.size.s2,
  lineHeight: "24px",
  padding: 0,
  borderCollapse: "collapse",
  "& tr": {
    borderTop: `1px solid ${e4.appBorderColor}`,
    backgroundColor: e4.appContentBg,
    margin: 0,
    padding: 0
  },
  "& tr:nth-of-type(2n)": {
    backgroundColor: e4.base === "dark" ? e4.color.darker : e4.color.lighter
  },
  "& tr th": {
    fontWeight: "bold",
    color: e4.color.defaultText,
    border: `1px solid ${e4.appBorderColor}`,
    margin: 0,
    padding: "6px 13px"
  },
  "& tr td": {
    border: `1px solid ${e4.appBorderColor}`,
    color: e4.color.defaultText,
    margin: 0,
    padding: "6px 13px"
  },
  "& tr th :first-of-type, & tr td :first-of-type": {
    marginTop: 0
  },
  "& tr th :last-child, & tr td :last-child": {
    marginBottom: 0
  }
}));
var _h = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
};
var wi = xr.ul(N2, Me2, _h, { listStyle: "disc" });
var bi = {
  h1: o2((e4) => import_react11.default.createElement(ni, { ...J2(e4, "h1") }), "h1"),
  h2: o2((e4) => import_react11.default.createElement(oi, { ...J2(e4, "h2") }), "h2"),
  h3: o2((e4) => import_react11.default.createElement(ai, { ...J2(e4, "h3") }), "h3"),
  h4: o2((e4) => import_react11.default.createElement(ii, { ...J2(e4, "h4") }), "h4"),
  h5: o2((e4) => import_react11.default.createElement(li, { ...J2(e4, "h5") }), "h5"),
  h6: o2((e4) => import_react11.default.createElement(ci, { ...J2(e4, "h6") }), "h6"),
  pre: o2((e4) => import_react11.default.createElement(mi, { ...J2(e4, "pre") }), "pre"),
  a: o2((e4) => import_react11.default.createElement(Jo, { ...J2(e4, "a") }), "a"),
  hr: o2((e4) => import_react11.default.createElement(si, { ...J2(e4, "hr") }), "hr"),
  dl: o2((e4) => import_react11.default.createElement(ti, { ...J2(e4, "dl") }), "dl"),
  blockquote: o2((e4) => import_react11.default.createElement(Qo, { ...J2(e4, "blockquote") }), "blockquote"),
  table: o2((e4) => import_react11.default.createElement(vi, { ...J2(e4, "table") }), "table"),
  img: o2((e4) => import_react11.default.createElement(ui, { ...J2(e4, "img") }), "img"),
  div: o2((e4) => import_react11.default.createElement(ri, { ...J2(e4, "div") }), "div"),
  span: o2((e4) => import_react11.default.createElement(hi, { ...J2(e4, "span") }), "span"),
  li: o2((e4) => import_react11.default.createElement(fi, { ...J2(e4, "li") }), "li"),
  ul: o2((e4) => import_react11.default.createElement(wi, { ...J2(e4, "ul") }), "ul"),
  ol: o2((e4) => import_react11.default.createElement(di, { ...J2(e4, "ol") }), "ol"),
  p: o2((e4) => import_react11.default.createElement(pi, { ...J2(e4, "p") }), "p"),
  code: o2((e4) => import_react11.default.createElement(ei, { ...J2(e4, "code") }), "code"),
  tt: o2((e4) => import_react11.default.createElement(gi, { ...J2(e4, "tt") }), "tt"),
  resetwrapper: o2((e4) => import_react11.default.createElement(jl, { ...J2(e4, "resetwrapper") }), "resetwrapper")
};
var Wh = xr.div(
  ({ theme: e4, compact: t }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: e4.typography.size.s1,
    fontWeight: e4.typography.weight.bold,
    lineHeight: "12px",
    minWidth: 20,
    borderRadius: 20,
    padding: t ? "4px 7px" : "4px 10px"
  }),
  {
    svg: {
      height: 12,
      width: 12,
      marginRight: 4,
      marginTop: -2,
      path: {
        fill: "currentColor"
      }
    }
  },
  ({ theme: e4, status: t }) => {
    switch (t) {
      case "critical":
        return {
          color: e4.color.critical,
          background: e4.background.critical
        };
      case "negative":
        return {
          color: e4.color.negativeText,
          background: e4.background.negative,
          boxShadow: e4.base === "light" ? `inset 0 0 0 1px ${we2(0.9, e4.color.negativeText)}` : "none"
        };
      case "warning":
        return {
          color: e4.color.warningText,
          background: e4.background.warning,
          boxShadow: e4.base === "light" ? `inset 0 0 0 1px ${we2(0.9, e4.color.warningText)}` : "none"
        };
      case "neutral":
        return {
          color: e4.textMutedColor,
          background: e4.base === "light" ? e4.background.app : e4.barBg,
          boxShadow: `inset 0 0 0 1px ${we2(0.8, e4.textMutedColor)}`
        };
      case "positive":
        return {
          color: e4.color.positiveText,
          background: e4.background.positive,
          boxShadow: e4.base === "light" ? `inset 0 0 0 1px ${we2(0.9, e4.color.positiveText)}` : "none"
        };
      case "active":
        return {
          color: e4.color.secondary,
          background: e4.background.hoverable,
          boxShadow: `inset 0 0 0 1px ${we2(0.9, e4.color.secondary)}`
        };
      default:
        return {};
    }
  }
);
var Uh = o2(({ ...e4 }) => import_react14.default.createElement(Wh, { ...e4 }), "Badge");
var q5 = Xe2.forwardRef(({ color: e4 = "currentColor", size: t = 14, ...r }, n) => Xe2.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  Xe2.createElement(
    "path",
    {
      d: "M10.139 8.725l1.36-1.323a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L5.464 4.05l.708.71 2.848-2.47-1.64 3.677.697.697 2.164.567-.81.787.708.708zM2.523 6.6a.566.566 0 00-.177.544.534.534 0 00.382.41l2.782.721-1.494 5.013a.563.563 0 00.217.627.496.496 0 00.629-.06l3.843-3.736-.708-.707-2.51 2.44 1.137-3.814-.685-.685-2.125-.55.844-.731-.71-.71L2.524 6.6zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z",
      fill: e4
    }
  )
));
var G5 = Xe2.forwardRef(({ color: e4 = "currentColor", size: t = 14, ...r }, n) => Xe2.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  Xe2.createElement(
    "path",
    {
      d: "M1.854 1.146a.5.5 0 10-.708.708L6.293 7l-5.147 5.146a.5.5 0 00.708.708L7 7.707l5.146 5.147a.5.5 0 00.708-.708L7.707 7l5.147-5.146a.5.5 0 00-.708-.708L7 6.293 1.854 1.146z",
      fill: e4
    }
  )
));
var X5 = Xe2.forwardRef(({ color: e4 = "currentColor", size: t = 14, ...r }, n) => Xe2.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  Xe2.createElement(
    "path",
    {
      d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
      fill: e4
    }
  )
));
var qh = 0;
var Gh = o2((e4) => e4.button === qh && !e4.altKey && !e4.ctrlKey && !e4.metaKey && !e4.shiftKey, "isPlainLeftClick");
var Xh = o2(
  (e4, t) => {
    Gh(e4) && (e4.preventDefault(), t(e4));
  },
  "cancelled"
);
var Yh = xr.span(
  ({ withArrow: e4 }) => e4 ? {
    "> svg:last-of-type": {
      height: "0.7em",
      width: "0.7em",
      marginRight: 0,
      marginLeft: "0.25em",
      bottom: "auto",
      verticalAlign: "inherit"
    }
  } : {},
  ({ containsIcon: e4 }) => e4 ? {
    svg: {
      height: "1em",
      width: "1em",
      verticalAlign: "middle",
      position: "relative",
      bottom: 0,
      marginRight: 0
    }
  } : {}
);
var Zh = xr.a(
  ({ theme: e4 }) => ({
    display: "inline-block",
    transition: "all 150ms ease-out",
    textDecoration: "none",
    color: e4.color.secondary,
    "&:hover, &:focus": {
      cursor: "pointer",
      color: wt2(0.07, e4.color.secondary),
      "svg path:not([fill])": {
        fill: wt2(0.07, e4.color.secondary)
      }
    },
    "&:active": {
      color: wt2(0.1, e4.color.secondary),
      "svg path:not([fill])": {
        fill: wt2(0.1, e4.color.secondary)
      }
    },
    svg: {
      display: "inline-block",
      height: "1em",
      width: "1em",
      verticalAlign: "text-top",
      position: "relative",
      bottom: "-0.125em",
      marginRight: "0.4em",
      "& path": {
        fill: e4.color.secondary
      }
    }
  }),
  ({ theme: e4, secondary: t, tertiary: r }) => {
    let n;
    return t && (n = [e4.textMutedColor, e4.color.dark, e4.color.darker]), r && (n = [e4.color.dark, e4.color.darkest, e4.textMutedColor]), n ? {
      color: n[0],
      "svg path:not([fill])": {
        fill: n[0]
      },
      "&:hover": {
        color: n[1],
        "svg path:not([fill])": {
          fill: n[1]
        }
      },
      "&:active": {
        color: n[2],
        "svg path:not([fill])": {
          fill: n[2]
        }
      }
    } : {};
  },
  ({ nochrome: e4 }) => e4 ? {
    color: "inherit",
    "&:hover, &:active": {
      color: "inherit",
      textDecoration: "underline"
    }
  } : {},
  ({ theme: e4, inverse: t }) => t ? {
    color: e4.color.lightest,
    ":not([fill])": {
      fill: e4.color.lightest
    },
    "&:hover": {
      color: e4.color.lighter,
      "svg path:not([fill])": {
        fill: e4.color.lighter
      }
    },
    "&:active": {
      color: e4.color.light,
      "svg path:not([fill])": {
        fill: e4.color.light
      }
    }
  } : {},
  ({ isButton: e4 }) => e4 ? {
    border: 0,
    borderRadius: 0,
    background: "none",
    padding: 0,
    fontSize: "inherit"
  } : {}
);
var yi = o2(({
  cancel: e4 = true,
  children: t,
  onClick: r = void 0,
  withArrow: n = false,
  containsIcon: a = false,
  className: i = void 0,
  style: c = void 0,
  ...l
}) => import_react15.default.createElement(
  Zh,
  {
    ...l,
    onClick: r && e4 ? (s) => Xh(s, r) : r,
    className: i
  },
  import_react15.default.createElement(Yh, { withArrow: n, containsIcon: a }, t, n && import_react15.default.createElement(X5, null))
), "Link");
var Jh = xr.div(({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.s2}px`,
  lineHeight: "1.6",
  h1: {
    fontSize: `${e4.typography.size.l1}px`,
    fontWeight: e4.typography.weight.bold
  },
  h2: {
    fontSize: `${e4.typography.size.m2}px`,
    borderBottom: `1px solid ${e4.appBorderColor}`
  },
  h3: {
    fontSize: `${e4.typography.size.m1}px`
  },
  h4: {
    fontSize: `${e4.typography.size.s3}px`
  },
  h5: {
    fontSize: `${e4.typography.size.s2}px`
  },
  h6: {
    fontSize: `${e4.typography.size.s2}px`,
    color: e4.color.dark
  },
  "pre:not(.prismjs)": {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    padding: 0,
    margin: 0
  },
  "pre pre, pre.prismjs": {
    padding: 15,
    margin: 0,
    whiteSpace: "pre-wrap",
    color: "inherit",
    fontSize: "13px",
    lineHeight: "19px"
  },
  "pre pre code, pre.prismjs code": {
    color: "inherit",
    fontSize: "inherit"
  },
  "pre code": {
    margin: 0,
    padding: 0,
    whiteSpace: "pre",
    border: "none",
    background: "transparent"
  },
  "pre code, pre tt": {
    backgroundColor: "transparent",
    border: "none"
  },
  /* GitHub inspired Markdown styles loosely from https://gist.github.com/tuzz/3331384 */
  "body > *:first-of-type": {
    marginTop: "0 !important"
  },
  "body > *:last-child": {
    marginBottom: "0 !important"
  },
  a: {
    color: e4.color.secondary,
    textDecoration: "none"
  },
  "a.absent": {
    color: "#cc0000"
  },
  "a.anchor": {
    display: "block",
    paddingLeft: 30,
    marginLeft: -30,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0
  },
  "h1, h2, h3, h4, h5, h6": {
    margin: "20px 0 10px",
    padding: 0,
    cursor: "text",
    position: "relative",
    "&:first-of-type": {
      marginTop: 0,
      paddingTop: 0
    },
    "&:hover a.anchor": {
      textDecoration: "none"
    },
    "& tt, & code": {
      fontSize: "inherit"
    }
  },
  "h1:first-of-type + h2": {
    marginTop: 0,
    paddingTop: 0
  },
  "p, blockquote, ul, ol, dl, li, table, pre": {
    margin: "15px 0"
  },
  hr: {
    border: "0 none",
    borderTop: `1px solid ${e4.appBorderColor}`,
    height: 4,
    padding: 0
  },
  "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": {
    marginTop: 0,
    paddingTop: 0
  },
  "body > h1:first-of-type + h2": {
    marginTop: 0,
    paddingTop: 0
  },
  "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": {
    marginTop: 0,
    paddingTop: 0
  },
  "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": {
    marginTop: 0
  },
  "li p.first": {
    display: "inline-block"
  },
  "ul, ol": {
    paddingLeft: 30,
    "& :first-of-type": {
      marginTop: 0
    },
    "& :last-child": {
      marginBottom: 0
    }
  },
  dl: {
    padding: 0
  },
  "dl dt": {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "italic",
    margin: "0 0 15px",
    padding: "0 15px",
    "&:first-of-type": {
      padding: 0
    },
    "& > :first-of-type": {
      marginTop: 0
    },
    "& > :last-child": {
      marginBottom: 0
    }
  },
  blockquote: {
    borderLeft: `4px solid ${e4.color.medium}`,
    padding: "0 15px",
    color: e4.color.dark,
    "& > :first-of-type": {
      marginTop: 0
    },
    "& > :last-child": {
      marginBottom: 0
    }
  },
  table: {
    padding: 0,
    borderCollapse: "collapse",
    "& tr": {
      borderTop: `1px solid ${e4.appBorderColor}`,
      backgroundColor: "white",
      margin: 0,
      padding: 0,
      "& th": {
        fontWeight: "bold",
        border: `1px solid ${e4.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "& td": {
        border: `1px solid ${e4.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "&:nth-of-type(2n)": {
        backgroundColor: e4.color.lighter
      },
      "& th :first-of-type, & td :first-of-type": {
        marginTop: 0
      },
      "& th :last-child, & td :last-child": {
        marginBottom: 0
      }
    }
  },
  img: {
    maxWidth: "100%"
  },
  "span.frame": {
    display: "block",
    overflow: "hidden",
    "& > span": {
      border: `1px solid ${e4.color.medium}`,
      display: "block",
      float: "left",
      overflow: "hidden",
      margin: "13px 0 0",
      padding: 7,
      width: "auto"
    },
    "& span img": {
      display: "block",
      float: "left"
    },
    "& span span": {
      clear: "both",
      color: e4.color.darkest,
      display: "block",
      padding: "5px 0 0"
    }
  },
  "span.align-center": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "center"
    },
    "& span img": {
      margin: "0 auto",
      textAlign: "center"
    }
  },
  "span.align-right": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px 0 0",
      textAlign: "right"
    },
    "& span img": {
      margin: 0,
      textAlign: "right"
    }
  },
  "span.float-left": {
    display: "block",
    marginRight: 13,
    overflow: "hidden",
    float: "left",
    "& span": {
      margin: "13px 0 0"
    }
  },
  "span.float-right": {
    display: "block",
    marginLeft: 13,
    overflow: "hidden",
    float: "right",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "right"
    }
  },
  "code, tt": {
    margin: "0 2px",
    padding: "0 5px",
    whiteSpace: "nowrap",
    border: `1px solid ${e4.color.mediumlight}`,
    backgroundColor: e4.color.lighter,
    borderRadius: 3,
    color: e4.base === "dark" ? e4.color.darkest : e4.color.dark
  }
}));
var Ut2 = [];
var xr2 = null;
var tg = (0, import_react16.lazy)(async () => {
  let { SyntaxHighlighter: e4 } = await Promise.resolve().then(() => (cn(), Qa2));
  return Ut2.length > 0 && (Ut2.forEach((t) => {
    e4.registerLanguage(...t);
  }), Ut2 = []), xr2 === null && (xr2 = e4), {
    default: o2((t) => import_react16.default.createElement(e4, { ...t }), "default")
  };
});
var rg = (0, import_react16.lazy)(async () => {
  let [{ SyntaxHighlighter: e4 }, { formatter: t }] = await Promise.all([
    Promise.resolve().then(() => (cn(), Qa2)),
    Promise.resolve().then(() => (eu(), Q5))
  ]);
  return Ut2.length > 0 && (Ut2.forEach((r) => {
    e4.registerLanguage(...r);
  }), Ut2 = []), xr2 === null && (xr2 = e4), {
    default: o2((r) => import_react16.default.createElement(e4, { ...r, formatter: t }), "default")
  };
});
var ru = o2((e4) => import_react16.default.createElement(import_react16.Suspense, { fallback: import_react16.default.createElement("div", null) }, e4.format !== false ? import_react16.default.createElement(rg, { ...e4 }) : import_react16.default.createElement(tg, { ...e4 })), "SyntaxHighlighter");
ru.registerLanguage = (...e4) => {
  if (xr2 !== null) {
    xr2.registerLanguage(...e4);
    return;
  }
  Ut2.push(e4);
};
cn();
ja2();
var wo = {};
Xr2(wo, {
  Close: () => s0,
  Content: () => i0,
  Description: () => c0,
  Dialog: () => qi,
  DialogClose: () => t0,
  DialogContent: () => Ki,
  DialogDescription: () => e0,
  DialogOverlay: () => Zi,
  DialogPortal: () => Yi,
  DialogTitle: () => Qi,
  DialogTrigger: () => Gi,
  Overlay: () => a0,
  Portal: () => o0,
  Root: () => n0,
  Title: () => l0,
  Trigger: () => bv,
  WarningProvider: () => hv,
  createDialogScope: () => cv
});
function Er2(e4, t, { checkForDefaultPrevented: r = true } = {}) {
  return o2(function(a) {
    if (e4 == null ? void 0 : e4(a), r === false || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  }, "handleEvent");
}
o2(Er2, "composeEventHandlers");
function nu(e4, t) {
  if (typeof e4 == "function")
    return e4(t);
  e4 != null && (e4.current = t);
}
o2(nu, "setRef");
function xi(...e4) {
  return (t) => {
    let r = false, n = e4.map((a) => {
      let i = nu(a, t);
      return !r && typeof i == "function" && (r = true), i;
    });
    if (r)
      return () => {
        for (let a = 0; a < n.length; a++) {
          let i = n[a];
          typeof i == "function" ? i() : nu(e4[a], null);
        }
      };
  };
}
o2(xi, "composeRefs");
function Ye2(...e4) {
  return ou.useCallback(xi(...e4), e4);
}
o2(Ye2, "useComposedRefs");
function iu(e4, t) {
  let r = $e2.createContext(t), n = o2((i) => {
    let { children: c, ...l } = i, s = $e2.useMemo(() => l, Object.values(l));
    return (0, import_jsx_runtime6.jsx)(r.Provider, { value: s, children: c });
  }, "Provider");
  n.displayName = e4 + "Provider";
  function a(i) {
    let c = $e2.useContext(r);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e4}\``);
  }
  return o2(a, "useContext2"), [n, a];
}
o2(iu, "createContext2");
function lu(e4, t = []) {
  let r = [];
  function n(i, c) {
    let l = $e2.createContext(c), s = r.length;
    r = [...r, c];
    let u = o2((d) => {
      var _a2;
      let { scope: m, children: v, ...R } = d, p = ((_a2 = m == null ? void 0 : m[e4]) == null ? void 0 : _a2[s]) || l, h4 = $e2.useMemo(() => R, Object.values(R));
      return (0, import_jsx_runtime6.jsx)(p.Provider, { value: h4, children: v });
    }, "Provider");
    u.displayName = i + "Provider";
    function f(d, m) {
      var _a2;
      let v = ((_a2 = m == null ? void 0 : m[e4]) == null ? void 0 : _a2[s]) || l, R = $e2.useContext(v);
      if (R) return R;
      if (c !== void 0) return c;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return o2(f, "useContext2"), [u, f];
  }
  o2(n, "createContext3");
  let a = o2(() => {
    let i = r.map((c) => $e2.createContext(c));
    return o2(function(l) {
      let s = (l == null ? void 0 : l[e4]) || i;
      return $e2.useMemo(
        () => ({ [`__scope${e4}`]: { ...l, [e4]: s } }),
        [l, s]
      );
    }, "useScope");
  }, "createScope");
  return a.scopeName = e4, [n, ng(a, ...t)];
}
o2(lu, "createContextScope");
function ng(...e4) {
  let t = e4[0];
  if (e4.length === 1) return t;
  let r = o2(() => {
    let n = e4.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return o2(function(i) {
      let c = n.reduce((l, { useScope: s, scopeName: u }) => {
        let d = s(i)[`__scope${u}`];
        return { ...l, ...d };
      }, {});
      return $e2.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    }, "useComposedScopes");
  }, "createScope");
  return r.scopeName = t.scopeName, r;
}
o2(ng, "composeContextScopes");
var ct = (globalThis == null ? void 0 : globalThis.document) ? cu.useLayoutEffect : () => {
};
var og = Ei[" useId ".trim().toString()] || (() => {
});
var ag = 0;
function ro2(e4) {
  let [t, r] = Ei.useState(og());
  return ct(() => {
    e4 || r((n) => n ?? String(ag++));
  }, [e4]), e4 || (t ? `radix-${t}` : "");
}
o2(ro2, "useId");
var ig = Ve2[" useInsertionEffect ".trim().toString()] || ct;
function su({
  prop: e4,
  defaultProp: t,
  onChange: r = o2(() => {
  }, "onChange"),
  caller: n
}) {
  let [a, i, c] = lg({
    defaultProp: t,
    onChange: r
  }), l = e4 !== void 0, s = l ? e4 : a;
  {
    let f = Ve2.useRef(e4 !== void 0);
    Ve2.useEffect(() => {
      let d = f.current;
      d !== l && console.warn(
        `${n} is changing from ${d ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = l;
    }, [l, n]);
  }
  let u = Ve2.useCallback(
    (f) => {
      var _a2;
      if (l) {
        let d = cg(f) ? f(e4) : f;
        d !== e4 && ((_a2 = c.current) == null ? void 0 : _a2.call(c, d));
      } else
        i(f);
    },
    [l, e4, i, c]
  );
  return [s, u];
}
o2(su, "useControllableState");
function lg({
  defaultProp: e4,
  onChange: t
}) {
  let [r, n] = Ve2.useState(e4), a = Ve2.useRef(r), i = Ve2.useRef(t);
  return ig(() => {
    i.current = t;
  }, [t]), Ve2.useEffect(() => {
    var _a2;
    a.current !== r && ((_a2 = i.current) == null ? void 0 : _a2.call(i, r), a.current = r);
  }, [r, a]), [r, n, i];
}
o2(lg, "useUncontrolledState");
function cg(e4) {
  return typeof e4 == "function";
}
o2(cg, "isFunction");
var BE = Symbol("RADIX:SYNC_STATE");
function oo2(e4, t, { checkForDefaultPrevented: r = true } = {}) {
  return o2(function(a) {
    if (e4 == null ? void 0 : e4(a), r === false || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  }, "handleEvent");
}
o2(oo2, "composeEventHandlers");
function sn(e4) {
  let t = sg(e4), r = ie2.forwardRef((n, a) => {
    let { children: i, ...c } = n, l = ie2.Children.toArray(i), s = l.find(fg);
    if (s) {
      let u = s.props.children, f = l.map((d) => d === s ? ie2.Children.count(u) > 1 ? ie2.Children.only(null) : ie2.isValidElement(u) ? u.props.children : null : d);
      return (0, import_jsx_runtime7.jsx)(t, { ...c, ref: a, children: ie2.isValidElement(u) ? ie2.cloneElement(u, void 0, f) : null });
    }
    return (0, import_jsx_runtime7.jsx)(t, { ...c, ref: a, children: i });
  });
  return r.displayName = `${e4}.Slot`, r;
}
o2(sn, "createSlot");
var fu = sn("Slot");
function sg(e4) {
  let t = ie2.forwardRef((r, n) => {
    let { children: a, ...i } = r;
    if (ie2.isValidElement(a)) {
      let c = pg(a), l = dg(i, a.props);
      return a.type !== ie2.Fragment && (l.ref = n ? xi(n, c) : c), ie2.cloneElement(a, l);
    }
    return ie2.Children.count(a) > 1 ? ie2.Children.only(null) : null;
  });
  return t.displayName = `${e4}.SlotClone`, t;
}
o2(sg, "createSlotClone");
var ug = Symbol("radix.slottable");
function fg(e4) {
  return ie2.isValidElement(e4) && typeof e4.type == "function" && "__radixId" in e4.type && e4.type.__radixId === ug;
}
o2(fg, "isSlottable");
function dg(e4, t) {
  let r = { ...t };
  for (let n in t) {
    let a = e4[n], i = t[n];
    /^on[A-Z]/.test(n) ? a && i ? r[n] = (...l) => {
      i(...l), a(...l);
    } : a && (r[n] = a) : n === "style" ? r[n] = { ...a, ...i } : n === "className" && (r[n] = [a, i].filter(Boolean).join(" "));
  }
  return { ...e4, ...r };
}
o2(dg, "mergeProps");
function pg(e4) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e4.props, "ref")) == null ? void 0 : _a2.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e4.ref : (t = (_b = Object.getOwnPropertyDescriptor(e4, "ref")) == null ? void 0 : _b.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e4.props.ref : e4.props.ref || e4.ref);
}
o2(pg, "getElementRef");
var hg = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Pe2 = hg.reduce((e4, t) => {
  let r = sn(`Primitive.${t}`), n = du.forwardRef((a, i) => {
    let { asChild: c, ...l } = a, s = c ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), (0, import_jsx_runtime8.jsx)(s, { ...l, ref: i });
  });
  return n.displayName = `Primitive.${t}`, { ...e4, [t]: n };
}, {});
function mu(e4, t) {
  e4 && pu.flushSync(() => e4.dispatchEvent(t));
}
o2(mu, "dispatchDiscreteCustomEvent");
function St2(e4) {
  let t = Sr2.useRef(e4);
  return Sr2.useEffect(() => {
    t.current = e4;
  }), Sr2.useMemo(() => (...r) => {
    var _a2;
    return (_a2 = t.current) == null ? void 0 : _a2.call(t, ...r);
  }, []);
}
o2(St2, "useCallbackRef");
function gu(e4, t = globalThis == null ? void 0 : globalThis.document) {
  let r = St2(e4);
  hu2.useEffect(() => {
    let n = o2((a) => {
      a.key === "Escape" && r(a);
    }, "handleKeyDown");
    return t.addEventListener("keydown", n, { capture: true }), () => t.removeEventListener("keydown", n, { capture: true });
  }, [r, t]);
}
o2(gu, "useEscapeKeydown");
var gg = "DismissableLayer";
var Si = "dismissableLayer.update";
var vg = "dismissableLayer.pointerDownOutside";
var wg = "dismissableLayer.focusOutside";
var vu;
var Ru = Q2.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var Ci = Q2.forwardRef(
  (e4, t) => {
    let {
      disableOutsidePointerEvents: r = false,
      onEscapeKeyDown: n,
      onPointerDownOutside: a,
      onFocusOutside: i,
      onInteractOutside: c,
      onDismiss: l,
      ...s
    } = e4, u = Q2.useContext(Ru), [f, d] = Q2.useState(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = Q2.useState({}), R = Ye2(t, (S) => d(
      S
    )), p = Array.from(u.layers), [h4] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = p.indexOf(h4), w = f ? p.indexOf(f) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = w >= g, E4 = yg((S) => {
      let L2 = S.target, M2 = [...u.branches].some((A) => A.contains(L2));
      !x || M2 || (a == null ? void 0 : a(S), c == null ? void 0 : c(S), S.defaultPrevented || (l == null ? void 0 : l()));
    }, m), y = xg((S) => {
      let L2 = S.target;
      [...u.branches].some((A) => A.contains(L2)) || (i == null ? void 0 : i(S), c == null ? void 0 : c(S), S.defaultPrevented || (l == null ? void 0 : l()));
    }, m);
    return gu((S) => {
      w === u.layers.size - 1 && (n == null ? void 0 : n(S), !S.defaultPrevented && l && (S.preventDefault(), l()));
    }, m), Q2.useEffect(() => {
      if (f)
        return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (vu = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), wu(), () => {
          r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = vu);
        };
    }, [f, m, r, u]), Q2.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), wu());
    }, [f, u]), Q2.useEffect(() => {
      let S = o2(() => v({}), "handleUpdate");
      return document.addEventListener(Si, S), () => document.removeEventListener(Si, S);
    }, []), (0, import_jsx_runtime9.jsx)(
      Pe2.div,
      {
        ...s,
        ref: R,
        style: {
          pointerEvents: b ? x ? "auto" : "none" : void 0,
          ...e4.style
        },
        onFocusCapture: oo2(e4.onFocusCapture, y.onFocusCapture),
        onBlurCapture: oo2(e4.onBlurCapture, y.onBlurCapture),
        onPointerDownCapture: oo2(
          e4.onPointerDownCapture,
          E4.onPointerDownCapture
        )
      }
    );
  }
);
Ci.displayName = gg;
var bg = "DismissableLayerBranch";
var Rg = Q2.forwardRef((e4, t) => {
  let r = Q2.useContext(Ru), n = Q2.useRef(null), a = Ye2(t, n);
  return Q2.useEffect(() => {
    let i = n.current;
    if (i)
      return r.branches.add(i), () => {
        r.branches.delete(i);
      };
  }, [r.branches]), (0, import_jsx_runtime9.jsx)(Pe2.div, { ...e4, ref: a });
});
Rg.displayName = bg;
function yg(e4, t = globalThis == null ? void 0 : globalThis.document) {
  let r = St2(e4), n = Q2.useRef(false), a = Q2.useRef(() => {
  });
  return Q2.useEffect(() => {
    let i = o2((l) => {
      if (l.target && !n.current) {
        let u = o2(function() {
          yu(
            vg,
            r,
            f,
            { discrete: true }
          );
        }, "handleAndDispatchPointerDownOutsideEvent2");
        var s = u;
        let f = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = u, t.addEventListener("click", a.current, { once: true })) : u();
      } else
        t.removeEventListener("click", a.current);
      n.current = false;
    }, "handlePointerDown"), c = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", i), t.removeEventListener("click", a.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: o2(() => n.current = true, "onPointerDownCapture")
  };
}
o2(yg, "usePointerDownOutside");
function xg(e4, t = globalThis == null ? void 0 : globalThis.document) {
  let r = St2(e4), n = Q2.useRef(false);
  return Q2.useEffect(() => {
    let a = o2((i) => {
      i.target && !n.current && yu(wg, r, { originalEvent: i }, {
        discrete: false
      });
    }, "handleFocus");
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [t, r]), {
    onFocusCapture: o2(() => n.current = true, "onFocusCapture"),
    onBlurCapture: o2(() => n.current = false, "onBlurCapture")
  };
}
o2(xg, "useFocusOutside");
function wu() {
  let e4 = new CustomEvent(Si);
  document.dispatchEvent(e4);
}
o2(wu, "dispatchUpdate");
function yu(e4, t, r, { discrete: n }) {
  let a = r.originalEvent.target, i = new CustomEvent(e4, { bubbles: false, cancelable: true, detail: r });
  t && a.addEventListener(e4, t, { once: true }), n ? mu(a, i) : a.dispatchEvent(i);
}
o2(yu, "handleAndDispatchCustomEvent");
var Mi = "focusScope.autoFocusOnMount";
var Li = "focusScope.autoFocusOnUnmount";
var xu = { bubbles: false, cancelable: true };
var Sg = "FocusScope";
var Ai = je2.forwardRef(
  (e4, t) => {
    let {
      loop: r = false,
      trapped: n = false,
      onMountAutoFocus: a,
      onUnmountAutoFocus: i,
      ...c
    } = e4, [l, s] = je2.useState(null), u = St2(a), f = St2(i), d = je2.useRef(null), m = Ye2(t, (p) => s(p)), v = je2.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    je2.useEffect(() => {
      if (n) {
        let w = o2(function(y) {
          if (v.paused || !l) return;
          let S = y.target;
          l.contains(S) ? d.current = S : Ct2(d.current, { select: true });
        }, "handleFocusIn2"), b = o2(function(y) {
          if (v.paused || !l) return;
          let S = y.relatedTarget;
          S !== null && (l.contains(S) || Ct2(d.current, { select: true }));
        }, "handleFocusOut2"), x = o2(function(y) {
          if (document.activeElement === document.body)
            for (let L2 of y)
              L2.removedNodes.length > 0 && Ct2(l);
        }, "handleMutations2");
        var p = w, h4 = b, g = x;
        document.addEventListener("focusin", w), document.addEventListener("focusout", b);
        let E4 = new MutationObserver(x);
        return l && E4.observe(l, { childList: true, subtree: true }), () => {
          document.removeEventListener("focusin", w), document.removeEventListener("focusout", b), E4.disconnect();
        };
      }
    }, [n, l, v.paused]), je2.useEffect(() => {
      if (l) {
        Su.add(v);
        let p = document.activeElement;
        if (!l.contains(p)) {
          let g = new CustomEvent(Mi, xu);
          l.addEventListener(Mi, u), l.dispatchEvent(g), g.defaultPrevented || (Cg(zg(Mu(l)), { select: true }), document.activeElement === p && Ct2(l));
        }
        return () => {
          l.removeEventListener(Mi, u), setTimeout(() => {
            let g = new CustomEvent(Li, xu);
            l.addEventListener(Li, f), l.dispatchEvent(g), g.defaultPrevented || Ct2(p ?? document.body, { select: true }), l.removeEventListener(
              Li,
              f
            ), Su.remove(v);
          }, 0);
        };
      }
    }, [l, u, f, v]);
    let R = je2.useCallback(
      (p) => {
        if (!r && !n || v.paused) return;
        let h4 = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, g = document.activeElement;
        if (h4 && g) {
          let w = p.currentTarget, [b, x] = Mg(w);
          b && x ? !p.shiftKey && g === x ? (p.preventDefault(), r && Ct2(b, { select: true })) : p.shiftKey && g === b && (p.preventDefault(), r && Ct2(x, { select: true })) : g === w && p.preventDefault();
        }
      },
      [r, n, v.paused]
    );
    return (0, import_jsx_runtime10.jsx)(Pe2.div, { tabIndex: -1, ...c, ref: m, onKeyDown: R });
  }
);
Ai.displayName = Sg;
function Cg(e4, { select: t = false } = {}) {
  let r = document.activeElement;
  for (let n of e4)
    if (Ct2(n, { select: t }), document.activeElement !== r) return;
}
o2(Cg, "focusFirst");
function Mg(e4) {
  let t = Mu(e4), r = Eu(t, e4), n = Eu(t.reverse(), e4);
  return [r, n];
}
o2(Mg, "getTabbableEdges");
function Mu(e4) {
  let t = [], r = document.createTreeWalker(e4, NodeFilter.SHOW_ELEMENT, {
    acceptNode: o2((n) => {
      let a = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
o2(Mu, "getTabbableCandidates");
function Eu(e4, t) {
  for (let r of e4)
    if (!Lg(r, { upTo: t })) return r;
}
o2(Eu, "findVisible");
function Lg(e4, { upTo: t }) {
  if (getComputedStyle(e4).visibility === "hidden") return true;
  for (; e4; ) {
    if (t !== void 0 && e4 === t) return false;
    if (getComputedStyle(e4).display === "none") return true;
    e4 = e4.parentElement;
  }
  return false;
}
o2(Lg, "isHidden");
function Ag(e4) {
  return e4 instanceof HTMLInputElement && "select" in e4;
}
o2(Ag, "isSelectableInput");
function Ct2(e4, { select: t = false } = {}) {
  if (e4 && e4.focus) {
    let r = document.activeElement;
    e4.focus({ preventScroll: true }), e4 !== r && Ag(e4) && t && e4.select();
  }
}
o2(Ct2, "focus");
var Su = Ig();
function Ig() {
  let e4 = [];
  return {
    add(t) {
      let r = e4[0];
      t !== r && (r == null ? void 0 : r.pause()), e4 = Cu(e4, t), e4.unshift(t);
    },
    remove(t) {
      var _a2;
      e4 = Cu(e4, t), (_a2 = e4[0]) == null ? void 0 : _a2.resume();
    }
  };
}
o2(Ig, "createFocusScopesStack");
function Cu(e4, t) {
  let r = [...e4], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
o2(Cu, "arrayRemove");
function zg(e4) {
  return e4.filter((t) => t.tagName !== "A");
}
o2(zg, "removeLinks");
var Pg = "Portal";
var Ii = ao2.forwardRef((e4, t) => {
  var _a2;
  let { container: r, ...n } = e4, [a, i] = ao2.useState(false);
  ct(() => i(true), []);
  let c = r || a && ((_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body);
  return c ? import_react_dom2.default.createPortal((0, import_jsx_runtime11.jsx)(Pe2.div, { ...n, ref: t }), c) : null;
});
Ii.displayName = Pg;
function kg(e4, t) {
  return Lu.useReducer((r, n) => t[r][n] ?? r, e4);
}
o2(kg, "useStateMachine");
var un = o2((e4) => {
  let { present: t, children: r } = e4, n = Og(t), a = typeof r == "function" ? r({ present: n.isPresent }) : Ie2.Children.only(r), i = Ye2(
    n.ref,
    Bg(a)
  );
  return typeof r == "function" || n.isPresent ? Ie2.cloneElement(a, { ref: i }) : null;
}, "Presence");
un.displayName = "Presence";
function Og(e4) {
  let [t, r] = Ie2.useState(), n = Ie2.useRef(null), a = Ie2.useRef(e4), i = Ie2.useRef("none"), c = e4 ? "mounted" : "unmounted", [l, s] = kg(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return Ie2.useEffect(() => {
    let u = io2(n.current);
    i.current = l === "mounted" ? u : "none";
  }, [l]), ct(() => {
    let u = n.current, f = a.current;
    if (f !== e4) {
      let m = i.current, v = io2(u);
      e4 ? s("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? s("UNMOUNT") : s(f && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e4;
    }
  }, [e4, s]), ct(() => {
    if (t) {
      let u, f = t.ownerDocument.defaultView ?? window, d = o2((v) => {
        let p = io2(n.current).includes(v.animationName);
        if (v.target === t && p && (s("ANIMATION_END"), !a.current)) {
          let h4 = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = h4);
          });
        }
      }, "handleAnimationEnd"), m = o2((v) => {
        v.target === t && (i.current = io2(n.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      s("ANIMATION_END");
  }, [t, s]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: Ie2.useCallback((u) => {
      n.current = u ? getComputedStyle(u) : null, r(u);
    }, [])
  };
}
o2(Og, "usePresence");
function io2(e4) {
  return (e4 == null ? void 0 : e4.animationName) || "none";
}
o2(io2, "getAnimationName");
function Bg(e4) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e4.props, "ref")) == null ? void 0 : _a2.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e4.ref : (t = (_b = Object.getOwnPropertyDescriptor(e4, "ref")) == null ? void 0 : _b.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e4.props.ref : e4.props.ref || e4.ref);
}
o2(Bg, "getElementRef");
var zi = 0;
function zu() {
  Iu.useEffect(() => {
    let e4 = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e4[0] ?? Au()), document.body.insertAdjacentElement("beforeend", e4[1] ?? Au()), zi++, () => {
      zi === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), zi--;
    };
  }, []);
}
o2(zu, "useFocusGuards");
function Au() {
  let e4 = document.createElement("span");
  return e4.setAttribute("data-radix-focus-guard", ""), e4.tabIndex = 0, e4.style.outline = "none", e4.style.opacity = "0", e4.style.position = "fixed", e4.style.pointerEvents = "none", e4;
}
o2(Au, "createFocusGuard");
var ze2 = o2(function() {
  return ze2 = Object.assign || o2(function(t) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, "__assign"), ze2.apply(this, arguments);
}, "__assign");
function lo2(e4, t) {
  var r = {};
  for (var n in e4) Object.prototype.hasOwnProperty.call(e4, n) && t.indexOf(n) < 0 && (r[n] = e4[n]);
  if (e4 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e4); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, n[a]) && (r[n[a]] = e4[n[a]]);
  return r;
}
o2(lo2, "__rest");
function Tu(e4, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, i; n < a; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e4.concat(i || Array.prototype.slice.call(t));
}
o2(Tu, "__spreadArray");
var qt2 = "right-scroll-bar-position";
var Gt2 = "width-before-scroll-bar";
var Ti = "with-scroll-bars-hidden";
var Hi2 = "--removed-body-scroll-bar-size";
function co2(e4, t) {
  return typeof e4 == "function" ? e4(t) : e4 && (e4.current = t), e4;
}
o2(co2, "assignRef");
function Hu(e4, t) {
  var r = (0, import_react18.useState)(function() {
    return {
      // value
      value: e4,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var a = r.value;
          a !== n && (r.value = n, r.callback(n, a));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
o2(Hu, "useCallbackRef");
var Dg = typeof window < "u" ? so2.useLayoutEffect : so2.useEffect;
var Pu = /* @__PURE__ */ new WeakMap();
function Pi(e4, t) {
  var r = Hu(t || null, function(n) {
    return e4.forEach(function(a) {
      return co2(a, n);
    });
  });
  return Dg(function() {
    var n = Pu.get(r);
    if (n) {
      var a = new Set(n), i = new Set(e4), c = r.current;
      a.forEach(function(l) {
        i.has(l) || co2(l, null);
      }), i.forEach(function(l) {
        a.has(l) || co2(l, c);
      });
    }
    Pu.set(r, e4);
  }, [e4]), r;
}
o2(Pi, "useMergeRefs");
function Fg(e4) {
  return e4;
}
o2(Fg, "ItoI");
function _g(e4, t) {
  t === void 0 && (t = Fg);
  var r = [], n = false, a = {
    read: o2(function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e4;
    }, "read"),
    useMedium: o2(function(i) {
      var c = t(i, n);
      return r.push(c), function() {
        r = r.filter(function(l) {
          return l !== c;
        });
      };
    }, "useMedium"),
    assignSyncMedium: o2(function(i) {
      for (n = true; r.length; ) {
        var c = r;
        r = [], c.forEach(i);
      }
      r = {
        push: o2(function(l) {
          return i(l);
        }, "push"),
        filter: o2(function() {
          return r;
        }, "filter")
      };
    }, "assignSyncMedium"),
    assignMedium: o2(function(i) {
      n = true;
      var c = [];
      if (r.length) {
        var l = r;
        r = [], l.forEach(i), c = r;
      }
      var s = o2(function() {
        var f = c;
        c = [], f.forEach(i);
      }, "executeQueue"), u = o2(function() {
        return Promise.resolve().then(s);
      }, "cycle");
      u(), r = {
        push: o2(function(f) {
          c.push(f), u();
        }, "push"),
        filter: o2(function(f) {
          return c = c.filter(f), r;
        }, "filter")
      };
    }, "assignMedium")
  };
  return a;
}
o2(_g, "innerCreateMedium");
function ki(e4) {
  e4 === void 0 && (e4 = {});
  var t = _g(null);
  return t.options = ze2({ async: true, ssr: false }, e4), t;
}
o2(ki, "createSidecarMedium");
var Ou = o2(function(e4) {
  var t = e4.sideCar, r = lo2(e4, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return ku.createElement(n, ze2({}, r));
}, "SideCar");
Ou.isSideCarExport = true;
function Oi(e4, t) {
  return e4.useMedium(t), Ou;
}
o2(Oi, "exportSidecar");
var uo2 = ki();
var Bi = o2(function() {
}, "nothing");
var fn = be2.forwardRef(function(e4, t) {
  var r = be2.useRef(null), n = be2.useState({
    onScrollCapture: Bi,
    onWheelCapture: Bi,
    onTouchMoveCapture: Bi
  }), a = n[0], i = n[1], c = e4.forwardProps, l = e4.children, s = e4.className, u = e4.removeScrollBar, f = e4.enabled, d = e4.shards, m = e4.sideCar, v = e4.noIsolation, R = e4.inert, p = e4.allowPinchZoom, h4 = e4.as, g = h4 === void 0 ? "div" : h4, w = e4.gapMode, b = lo2(e4, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = m, E4 = Pi([r, t]), y = ze2(ze2({}, b), a);
  return be2.createElement(
    be2.Fragment,
    null,
    f && be2.createElement(x, {
      sideCar: uo2,
      removeScrollBar: u,
      shards: d,
      noIsolation: v,
      inert: R,
      setCallbacks: i,
      allowPinchZoom: !!p,
      lockRef: r,
      gapMode: w
    }),
    c ? be2.cloneElement(be2.Children.only(l), ze2(ze2({}, y), { ref: E4 })) : be2.createElement(g, ze2({}, y, { className: s, ref: E4 }), l)
  );
});
fn.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
fn.classNames = {
  fullWidth: Gt2,
  zeroRight: qt2
};
var Bu;
var Nu = o2(function() {
  if (Bu)
    return Bu;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
}, "getNonce");
function $g() {
  if (!document)
    return null;
  var e4 = document.createElement("style");
  e4.type = "text/css";
  var t = Nu();
  return t && e4.setAttribute("nonce", t), e4;
}
o2($g, "makeStyleTag");
function Vg(e4, t) {
  e4.styleSheet ? e4.styleSheet.cssText = t : e4.appendChild(document.createTextNode(t));
}
o2(Vg, "injectStyles");
function jg(e4) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e4);
}
o2(jg, "insertStyleTag");
var Ni = o2(function() {
  var e4 = 0, t = null;
  return {
    add: o2(function(r) {
      e4 == 0 && (t = $g()) && (Vg(t, r), jg(t)), e4++;
    }, "add"),
    remove: o2(function() {
      e4--, !e4 && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }, "remove")
  };
}, "stylesheetSingleton");
var Di = o2(function() {
  var e4 = Ni();
  return function(t, r) {
    Du.useEffect(function() {
      return e4.add(t), function() {
        e4.remove();
      };
    }, [t && r]);
  };
}, "styleHookSingleton");
var dn = o2(function() {
  var e4 = Di(), t = o2(function(r) {
    var n = r.styles, a = r.dynamic;
    return e4(n, a), null;
  }, "Sheet");
  return t;
}, "styleSingleton");
var Wg = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var Fi = o2(function(e4) {
  return parseInt(e4 || "", 10) || 0;
}, "parse");
var Ug = o2(function(e4) {
  var t = window.getComputedStyle(document.body), r = t[e4 === "padding" ? "paddingLeft" : "marginLeft"], n = t[e4 === "padding" ? "paddingTop" : "marginTop"], a = t[e4 === "padding" ? "paddingRight" : "marginRight"];
  return [Fi(r), Fi(n), Fi(a)];
}, "getOffset");
var _i = o2(function(e4) {
  if (e4 === void 0 && (e4 = "margin"), typeof window > "u")
    return Wg;
  var t = Ug(e4), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, "getGapWidth");
var qg = dn();
var Cr2 = "data-scroll-locked";
var Gg = o2(function(e4, t, r, n) {
  var a = e4.left, i = e4.top, c = e4.right, l = e4.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Ti, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(l, "px ").concat(n, `;
  }
  body[`).concat(Cr2, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(l, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(qt2, ` {
    right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(Gt2, ` {
    margin-right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(qt2, " .").concat(qt2, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Gt2, " .").concat(Gt2, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Cr2, `] {
    `).concat(Hi2, ": ").concat(l, `px;
  }
`);
}, "getStyles");
var Fu = o2(function() {
  var e4 = parseInt(document.body.getAttribute(Cr2) || "0", 10);
  return isFinite(e4) ? e4 : 0;
}, "getCurrentUseCounter");
var Xg = o2(function() {
  Mr.useEffect(function() {
    return document.body.setAttribute(Cr2, (Fu() + 1).toString()), function() {
      var e4 = Fu() - 1;
      e4 <= 0 ? document.body.removeAttribute(Cr2) : document.body.setAttribute(Cr2, e4.toString());
    };
  }, []);
}, "useLockAttribute");
var $i = o2(function(e4) {
  var t = e4.noRelative, r = e4.noImportant, n = e4.gapMode, a = n === void 0 ? "margin" : n;
  Xg();
  var i = Mr.useMemo(function() {
    return _i(a);
  }, [a]);
  return Mr.createElement(qg, { styles: Gg(i, !t, a, r ? "" : "!important") });
}, "RemoveScrollBar");
var Vi = false;
if (typeof window < "u")
  try {
    pn = Object.defineProperty({}, "passive", {
      get: o2(function() {
        return Vi = true, true;
      }, "get")
    }), window.addEventListener("test", pn, pn), window.removeEventListener("test", pn, pn);
  } catch {
    Vi = false;
  }
var pn;
var Xt2 = Vi ? { passive: false } : false;
var Yg = o2(function(e4) {
  return e4.tagName === "TEXTAREA";
}, "alwaysContainsScroll");
var _u = o2(function(e4, t) {
  if (!(e4 instanceof Element))
    return false;
  var r = window.getComputedStyle(e4);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Yg(e4) && r[t] === "visible")
  );
}, "elementCanBeScrolled");
var Zg = o2(function(e4) {
  return _u(e4, "overflowY");
}, "elementCouldBeVScrolled");
var Kg = o2(function(e4) {
  return _u(e4, "overflowX");
}, "elementCouldBeHScrolled");
var ji = o2(function(e4, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var a = $u(e4, n);
    if (a) {
      var i = Vu(e4, n), c = i[1], l = i[2];
      if (c > l)
        return true;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return false;
}, "locationCouldBeScrolled");
var Jg = o2(function(e4) {
  var t = e4.scrollTop, r = e4.scrollHeight, n = e4.clientHeight;
  return [
    t,
    r,
    n
  ];
}, "getVScrollVariables");
var Qg = o2(function(e4) {
  var t = e4.scrollLeft, r = e4.scrollWidth, n = e4.clientWidth;
  return [
    t,
    r,
    n
  ];
}, "getHScrollVariables");
var $u = o2(function(e4, t) {
  return e4 === "v" ? Zg(t) : Kg(t);
}, "elementCouldBeScrolled");
var Vu = o2(function(e4, t) {
  return e4 === "v" ? Jg(t) : Qg(t);
}, "getScrollVariables");
var ev = o2(function(e4, t) {
  return e4 === "h" && t === "rtl" ? -1 : 1;
}, "getDirectionFactor");
var ju = o2(function(e4, t, r, n, a) {
  var i = ev(e4, window.getComputedStyle(t).direction), c = i * n, l = r.target, s = t.contains(l), u = false, f = c > 0, d = 0, m = 0;
  do {
    var v = Vu(e4, l), R = v[0], p = v[1], h4 = v[2], g = p - h4 - i * R;
    (R || g) && $u(e4, l) && (d += g, m += R), l instanceof ShadowRoot ? l = l.host : l = l.parentNode;
  } while (
    // portaled content
    !s && l !== document.body || // self content
    s && (t.contains(l) || t === l)
  );
  return (f && (a && Math.abs(d) < 1 || !a && c > d) || !f && (a && Math.abs(m) < 1 || !a && -c > m)) && (u = true), u;
}, "handleScroll");
var fo2 = o2(function(e4) {
  return "changedTouches" in e4 ? [e4.changedTouches[0].clientX, e4.changedTouches[0].clientY] : [0, 0];
}, "getTouchXY");
var Wu = o2(function(e4) {
  return [e4.deltaX, e4.deltaY];
}, "getDeltaXY");
var Uu = o2(function(e4) {
  return e4 && "current" in e4 ? e4.current : e4;
}, "extractRef");
var tv = o2(function(e4, t) {
  return e4[0] === t[0] && e4[1] === t[1];
}, "deltaCompare");
var rv = o2(function(e4) {
  return `
  .block-interactivity-`.concat(e4, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e4, ` {pointer-events: all;}
`);
}, "generateStyle");
var nv = 0;
var Lr = [];
function qu(e4) {
  var t = Y.useRef([]), r = Y.useRef([0, 0]), n = Y.useRef(), a = Y.useState(nv++)[0], i = Y.useState(dn)[0], c = Y.useRef(e4);
  Y.useEffect(function() {
    c.current = e4;
  }, [e4]), Y.useEffect(function() {
    if (e4.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var p = Tu([e4.lockRef.current], (e4.shards || []).map(Uu), true).filter(Boolean);
      return p.forEach(function(h4) {
        return h4.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), p.forEach(function(h4) {
          return h4.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e4.inert, e4.lockRef.current, e4.shards]);
  var l = Y.useCallback(function(p, h4) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !c.current.allowPinchZoom;
    var g = fo2(p), w = r.current, b = "deltaX" in p ? p.deltaX : w[0] - g[0], x = "deltaY" in p ? p.deltaY : w[1] - g[1], E4, y = p.target, S = Math.abs(b) > Math.abs(x) ? "h" : "v";
    if ("touches" in p && S === "h" && y.type === "range")
      return false;
    var L2 = ji(S, y);
    if (!L2)
      return true;
    if (L2 ? E4 = S : (E4 = S === "v" ? "h" : "v", L2 = ji(S, y)), !L2)
      return false;
    if (!n.current && "changedTouches" in p && (b || x) && (n.current = E4), !E4)
      return true;
    var M2 = n.current || E4;
    return ju(M2, h4, p, M2 === "h" ? b : x, true);
  }, []), s = Y.useCallback(function(p) {
    var h4 = p;
    if (!(!Lr.length || Lr[Lr.length - 1] !== i)) {
      var g = "deltaY" in h4 ? Wu(h4) : fo2(h4), w = t.current.filter(function(E4) {
        return E4.name === h4.type && (E4.target === h4.target || h4.target === E4.shadowParent) && tv(E4.delta, g);
      })[0];
      if (w && w.should) {
        h4.cancelable && h4.preventDefault();
        return;
      }
      if (!w) {
        var b = (c.current.shards || []).map(Uu).filter(Boolean).filter(function(E4) {
          return E4.contains(h4.target);
        }), x = b.length > 0 ? l(h4, b[0]) : !c.current.noIsolation;
        x && h4.cancelable && h4.preventDefault();
      }
    }
  }, []), u = Y.useCallback(function(p, h4, g, w) {
    var b = { name: p, delta: h4, target: g, should: w, shadowParent: ov(g) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== b;
      });
    }, 1);
  }, []), f = Y.useCallback(function(p) {
    r.current = fo2(p), n.current = void 0;
  }, []), d = Y.useCallback(function(p) {
    u(p.type, Wu(p), p.target, l(p, e4.lockRef.current));
  }, []), m = Y.useCallback(function(p) {
    u(p.type, fo2(p), p.target, l(p, e4.lockRef.current));
  }, []);
  Y.useEffect(function() {
    return Lr.push(i), e4.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", s, Xt2), document.addEventListener("touchmove", s, Xt2), document.addEventListener(
      "touchstart",
      f,
      Xt2
    ), function() {
      Lr = Lr.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", s, Xt2), document.removeEventListener("touchmove", s, Xt2), document.removeEventListener("touchstart", f, Xt2);
    };
  }, []);
  var v = e4.removeScrollBar, R = e4.inert;
  return Y.createElement(
    Y.Fragment,
    null,
    R ? Y.createElement(i, { styles: rv(a) }) : null,
    v ? Y.createElement($i, { gapMode: e4.gapMode }) : null
  );
}
o2(qu, "RemoveScrollSideCar");
function ov(e4) {
  for (var t = null; e4 !== null; )
    e4 instanceof ShadowRoot && (t = e4.host, e4 = e4.host), e4 = e4.parentNode;
  return t;
}
o2(ov, "getOutermostShadowParent");
var Gu = Oi(uo2, qu);
var Xu = po2.forwardRef(function(e4, t) {
  return po2.createElement(fn, ze2({}, e4, { ref: t, sideCar: Gu }));
});
Xu.classNames = fn.classNames;
var Wi = Xu;
var av = o2(function(e4) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e4) ? e4[0] : e4;
  return t.ownerDocument.body;
}, "getDefaultParent");
var Ar2 = /* @__PURE__ */ new WeakMap();
var mo2 = /* @__PURE__ */ new WeakMap();
var ho2 = {};
var Ui = 0;
var Yu = o2(function(e4) {
  return e4 && (e4.host || Yu(e4.parentNode));
}, "unwrapHost");
var iv = o2(function(e4, t) {
  return t.map(function(r) {
    if (e4.contains(r))
      return r;
    var n = Yu(r);
    return n && e4.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e4, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, "correctTargets");
var lv = o2(function(e4, t, r, n) {
  var a = iv(t, Array.isArray(e4) ? e4 : [e4]);
  ho2[r] || (ho2[r] = /* @__PURE__ */ new WeakMap());
  var i = ho2[r], c = [], l = /* @__PURE__ */ new Set(), s = new Set(a), u = o2(function(d) {
    !d || l.has(d) || (l.add(d), u(d.parentNode));
  }, "keep");
  a.forEach(u);
  var f = o2(function(d) {
    !d || s.has(d) || Array.prototype.forEach.call(d.children, function(m) {
      if (l.has(m))
        f(m);
      else
        try {
          var v = m.getAttribute(n), R = v !== null && v !== "false", p = (Ar2.get(m) || 0) + 1, h4 = (i.get(m) || 0) + 1;
          Ar2.set(m, p), i.set(m, h4), c.push(m), p === 1 && R && mo2.set(m, true), h4 === 1 && m.setAttribute(r, "true"), R || m.setAttribute(n, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", m, g);
        }
    });
  }, "deep");
  return f(t), l.clear(), Ui++, function() {
    c.forEach(function(d) {
      var m = Ar2.get(d) - 1, v = i.get(d) - 1;
      Ar2.set(d, m), i.set(d, v), m || (mo2.has(d) || d.removeAttribute(n), mo2.delete(d)), v || d.removeAttribute(r);
    }), Ui--, Ui || (Ar2 = /* @__PURE__ */ new WeakMap(), Ar2 = /* @__PURE__ */ new WeakMap(), mo2 = /* @__PURE__ */ new WeakMap(), ho2 = {});
  };
}, "applyAttributeToOthers");
var Zu = o2(function(e4, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e4) ? e4 : [e4]), a = t || av(e4);
  return a ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))), lv(n, a, r, "aria-hidden")) : function() {
    return null;
  };
}, "hideOthers");
var vo2 = "Dialog";
var [Qu, cv] = lu(vo2);
var [sv, Ze2] = Qu(vo2);
var qi = o2((e4) => {
  let {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: a,
    onOpenChange: i,
    modal: c = true
  } = e4, l = q2.useRef(null), s = q2.useRef(null), [u, f] = su({
    prop: n,
    defaultProp: a ?? false,
    onChange: i,
    caller: vo2
  });
  return (0, import_jsx_runtime12.jsx)(
    sv,
    {
      scope: t,
      triggerRef: l,
      contentRef: s,
      contentId: ro2(),
      titleId: ro2(),
      descriptionId: ro2(),
      open: u,
      onOpenChange: f,
      onOpenToggle: q2.useCallback(() => f((d) => !d), [f]),
      modal: c,
      children: r
    }
  );
}, "Dialog");
qi.displayName = vo2;
var ef = "DialogTrigger";
var Gi = q2.forwardRef(
  (e4, t) => {
    let { __scopeDialog: r, ...n } = e4, a = Ze2(ef, r), i = Ye2(t, a.triggerRef);
    return (0, import_jsx_runtime12.jsx)(
      Pe2.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": r0(a.open),
        ...n,
        ref: i,
        onClick: Er2(e4.onClick, a.onOpenToggle)
      }
    );
  }
);
Gi.displayName = ef;
var Xi = "DialogPortal";
var [uv, tf] = Qu(Xi, {
  forceMount: void 0
});
var Yi = o2((e4) => {
  let { __scopeDialog: t, forceMount: r, children: n, container: a } = e4, i = Ze2(Xi, t);
  return (0, import_jsx_runtime12.jsx)(uv, { scope: t, forceMount: r, children: q2.Children.map(n, (c) => (0, import_jsx_runtime12.jsx)(un, {
    present: r || i.open,
    children: (0, import_jsx_runtime12.jsx)(Ii, { asChild: true, container: a, children: c })
  })) });
}, "DialogPortal");
Yi.displayName = Xi;
var go2 = "DialogOverlay";
var Zi = q2.forwardRef(
  (e4, t) => {
    let r = tf(go2, e4.__scopeDialog), { forceMount: n = r.forceMount, ...a } = e4, i = Ze2(go2, e4.__scopeDialog);
    return i.modal ? (0, import_jsx_runtime12.jsx)(un, { present: n || i.open, children: (0, import_jsx_runtime12.jsx)(dv, { ...a, ref: t }) }) : null;
  }
);
Zi.displayName = go2;
var fv = sn("DialogOverlay.RemoveScroll");
var dv = q2.forwardRef(
  (e4, t) => {
    let { __scopeDialog: r, ...n } = e4, a = Ze2(go2, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      (0, import_jsx_runtime12.jsx)(Wi, { as: fv, allowPinchZoom: true, shards: [a.contentRef], children: (0, import_jsx_runtime12.jsx)(
        Pe2.div,
        {
          "data-state": r0(a.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
);
var Yt2 = "DialogContent";
var Ki = q2.forwardRef(
  (e4, t) => {
    let r = tf(Yt2, e4.__scopeDialog), { forceMount: n = r.forceMount, ...a } = e4, i = Ze2(Yt2, e4.__scopeDialog);
    return (0, import_jsx_runtime12.jsx)(un, { present: n || i.open, children: i.modal ? (0, import_jsx_runtime12.jsx)(pv, { ...a, ref: t }) : (0, import_jsx_runtime12.jsx)(
      mv,
      { ...a, ref: t }
    ) });
  }
);
Ki.displayName = Yt2;
var pv = q2.forwardRef(
  (e4, t) => {
    let r = Ze2(Yt2, e4.__scopeDialog), n = q2.useRef(null), a = Ye2(t, r.contentRef, n);
    return q2.useEffect(() => {
      let i = n.current;
      if (i) return Zu(i);
    }, []), (0, import_jsx_runtime12.jsx)(
      rf,
      {
        ...e4,
        ref: a,
        trapFocus: r.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: Er2(e4.onCloseAutoFocus, (i) => {
          var _a2;
          i.preventDefault(), (_a2 = r.triggerRef.current) == null ? void 0 : _a2.focus();
        }),
        onPointerDownOutside: Er2(e4.onPointerDownOutside, (i) => {
          let c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === true;
          (c.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: Er2(
          e4.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
);
var mv = q2.forwardRef(
  (e4, t) => {
    let r = Ze2(Yt2, e4.__scopeDialog), n = q2.useRef(false), a = q2.useRef(false);
    return (0, import_jsx_runtime12.jsx)(
      rf,
      {
        ...e4,
        ref: t,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: o2((i) => {
          var _a2, _b;
          (_a2 = e4.onCloseAutoFocus) == null ? void 0 : _a2.call(e4, i), i.defaultPrevented || (n.current || ((_b = r.triggerRef.current) == null ? void 0 : _b.focus()), i.preventDefault()), n.current = false, a.current = false;
        }, "onCloseAutoFocus"),
        onInteractOutside: o2((i) => {
          var _a2, _b;
          (_a2 = e4.onInteractOutside) == null ? void 0 : _a2.call(e4, i), i.defaultPrevented || (n.current = true, i.detail.originalEvent.type === "pointerdown" && (a.current = true));
          let c = i.target;
          ((_b = r.triggerRef.current) == null ? void 0 : _b.contains(c)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && a.current && i.preventDefault();
        }, "onInteractOutside")
      }
    );
  }
);
var rf = q2.forwardRef(
  (e4, t) => {
    let { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: a, onCloseAutoFocus: i, ...c } = e4, l = Ze2(Yt2, r), s = q2.useRef(null), u = Ye2(t, s);
    return zu(), (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
      (0, import_jsx_runtime12.jsx)(
        Ai,
        {
          asChild: true,
          loop: true,
          trapped: n,
          onMountAutoFocus: a,
          onUnmountAutoFocus: i,
          children: (0, import_jsx_runtime12.jsx)(
            Ci,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": r0(l.open),
              ...c,
              ref: u,
              onDismiss: o2(() => l.onOpenChange(false), "onDismiss")
            }
          )
        }
      ),
      (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
        (0, import_jsx_runtime12.jsx)(gv, { titleId: l.titleId }),
        (0, import_jsx_runtime12.jsx)(wv, { contentRef: s, descriptionId: l.descriptionId })
      ] })
    ] });
  }
);
var Ji = "DialogTitle";
var Qi = q2.forwardRef(
  (e4, t) => {
    let { __scopeDialog: r, ...n } = e4, a = Ze2(Ji, r);
    return (0, import_jsx_runtime12.jsx)(Pe2.h2, { id: a.titleId, ...n, ref: t });
  }
);
Qi.displayName = Ji;
var nf = "DialogDescription";
var e0 = q2.forwardRef(
  (e4, t) => {
    let { __scopeDialog: r, ...n } = e4, a = Ze2(nf, r);
    return (0, import_jsx_runtime12.jsx)(Pe2.p, { id: a.descriptionId, ...n, ref: t });
  }
);
e0.displayName = nf;
var of = "DialogClose";
var t0 = q2.forwardRef(
  (e4, t) => {
    let { __scopeDialog: r, ...n } = e4, a = Ze2(of, r);
    return (0, import_jsx_runtime12.jsx)(
      Pe2.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: Er2(e4.onClick, () => a.onOpenChange(false))
      }
    );
  }
);
t0.displayName = of;
function r0(e4) {
  return e4 ? "open" : "closed";
}
o2(r0, "getState");
var af = "DialogTitleWarning";
var [hv, lf] = iu(af, {
  contentName: Yt2,
  titleName: Ji,
  docsSlug: "dialog"
});
var gv = o2(({ titleId: e4 }) => {
  let t = lf(af), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return q2.useEffect(() => {
    e4 && (document.getElementById(e4) || console.error(r));
  }, [r, e4]), null;
}, "TitleWarning");
var vv = "DialogDescriptionWarning";
var wv = o2(({ contentRef: e4, descriptionId: t }) => {
  let n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${lf(vv).contentName}}.`;
  return q2.useEffect(() => {
    var _a2;
    let a = (_a2 = e4.current) == null ? void 0 : _a2.getAttribute("aria-describedby");
    t && a && (document.getElementById(t) || console.warn(n));
  }, [n, e4, t]), null;
}, "DescriptionWarning");
var n0 = qi;
var bv = Gi;
var o0 = Yi;
var a0 = Zi;
var i0 = Ki;
var l0 = Qi;
var c0 = e0;
var s0 = t0;
var p0 = {};
Xr2(p0, {
  Actions: () => Ov,
  CloseButton: () => sf,
  Col: () => ff,
  Container: () => d0,
  Content: () => Tv,
  Description: () => kv,
  Error: () => Bv,
  ErrorWrapper: () => df,
  Header: () => Hv,
  Overlay: () => f0,
  Row: () => uf,
  Title: () => Pv
});
var Ir2 = (0, import_react21.forwardRef)(
  ({
    asChild: e4 = false,
    animation: t = "none",
    size: r = "small",
    variant: n = "outline",
    padding: a = "medium",
    disabled: i = false,
    active: c = false,
    onClick: l,
    ...s
  }, u) => {
    let f = "button";
    e4 && (f = fu);
    let [d, m] = (0, import_react21.useState)(false), v = o2((R) => {
      l && l(R), t !== "none" && m(true);
    }, "handleClick");
    return (0, import_react21.useEffect)(() => {
      let R = setTimeout(() => {
        d && m(false);
      }, 1e3);
      return () => clearTimeout(R);
    }, [d]), import_react21.default.createElement(
      Mv,
      {
        as: f,
        ref: u,
        variant: n,
        size: r,
        padding: a,
        disabled: i,
        active: c,
        animating: d,
        animation: t,
        onClick: v,
        ...s
      }
    );
  }
);
Ir2.displayName = "Button";
var Mv = xr("button", {
  shouldForwardProp: o2((e4) => yr(e4), "shouldForwardProp")
})(({ theme: e4, variant: t, size: r, disabled: n, active: a, animating: i, animation: c = "none", padding: l }) => ({
  border: 0,
  cursor: n ? "not-allowed" : "pointer",
  display: "inline-flex",
  gap: "6px",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: l === "none" ? 0 : l === "small" && r === "small" ? "0 7px" : l === "small" && r === "medium" ? "0 9px" : r === "small" ? "0 10px" : r === "medium" ? "0 12px" : 0,
  height: r === "small" ? "28px" : "32px",
  position: "relative",
  textAlign: "center",
  textDecoration: "none",
  transitionProperty: "background, box-shadow",
  transitionDuration: "150ms",
  transitionTimingFunction: "ease-out",
  verticalAlign: "top",
  whiteSpace: "nowrap",
  userSelect: "none",
  opacity: n ? 0.5 : 1,
  margin: 0,
  fontSize: `${e4.typography.size.s1}px`,
  fontWeight: e4.typography.weight.bold,
  lineHeight: "1",
  background: t === "solid" ? e4.color.secondary : t === "outline" ? e4.button.background : t === "ghost" && a ? e4.background.hoverable : "transparent",
  ...t === "ghost" ? {
    // This is a hack to apply bar styles to the button as soon as it is part of a bar
    // It is a temporary solution until we have implemented Theming 2.0.
    ".sb-bar &": {
      background: a ? we2(0.9, e4.barTextColor) : "transparent",
      color: a ? e4.barSelectedColor : e4.barTextColor,
      "&:hover": {
        color: e4.barHoverColor,
        background: we2(0.86, e4.barHoverColor)
      },
      "&:active": {
        color: e4.barSelectedColor,
        background: we2(0.9, e4.barSelectedColor)
      },
      "&:focus": {
        boxShadow: `${Dt2(e4.barHoverColor, 1)} 0 0 0 1px inset`,
        outline: "none"
      }
    }
  } : {},
  color: t === "solid" ? e4.color.lightest : t === "outline" ? e4.input.color : t === "ghost" && a ? e4.color.secondary : t === "ghost" ? e4.color.mediumdark : e4.input.color,
  boxShadow: t === "outline" ? `${e4.button.border} 0 0 0 1px inset` : "none",
  borderRadius: e4.input.borderRadius,
  // Making sure that the button never shrinks below its minimum size
  flexShrink: 0,
  "&:hover": {
    color: t === "ghost" ? e4.color.secondary : void 0,
    background: (() => {
      let s = e4.color.secondary;
      return t === "solid" && (s = e4.color.secondary), t === "outline" && (s = e4.button.background), t === "ghost" ? we2(0.86, e4.color.secondary) : e4.base === "light" ? wt2(0.02, s) : Ko(0.03, s);
    })()
  },
  "&:active": {
    color: t === "ghost" ? e4.color.secondary : void 0,
    background: (() => {
      let s = e4.color.secondary;
      return t === "solid" && (s = e4.color.secondary), t === "outline" && (s = e4.button.background), t === "ghost" ? e4.background.hoverable : e4.base === "light" ? wt2(0.02, s) : Ko(0.03, s);
    })()
  },
  "&:focus": {
    boxShadow: `${Dt2(e4.color.secondary, 1)} 0 0 0 1px inset`,
    outline: "none"
  },
  "> svg": {
    animation: i && c !== "none" ? `${e4.animation[c]} 1000ms ease-out` : ""
  }
}));
var bo2 = (0, import_react20.forwardRef)(
  ({ padding: e4 = "small", variant: t = "ghost", ...r }, n) => import_react20.default.createElement(Ir2, { padding: e4, variant: t, ref: n, ...r })
);
bo2.displayName = "IconButton";
var cf = Ee({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
var Iv = Ee({
  from: { maxHeight: 0 },
  to: {}
});
var zv = Ee({
  from: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.9)"
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)"
  }
});
var f0 = xr.div({
  backdropFilter: "blur(24px)",
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 10,
  animation: `${cf} 200ms`
});
var d0 = xr.div(
  ({ theme: e4, width: t, height: r }) => ({
    backgroundColor: e4.background.bar,
    borderRadius: 6,
    boxShadow: "0px 4px 67px 0px #00000040",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: t ?? 740,
    height: r ?? "auto",
    maxWidth: "calc(100% - 40px)",
    maxHeight: "85vh",
    overflow: "hidden",
    zIndex: 11,
    animation: `${zv} 200ms`,
    "&:focus-visible": {
      outline: "none"
    }
  })
);
var sf = o2((e4) => import_react19.default.createElement(s0, { asChild: true }, import_react19.default.createElement(bo2, { ...e4 }, import_react19.default.createElement(G5, null))), "CloseButton");
var Tv = xr.div({
  display: "flex",
  flexDirection: "column",
  margin: 16,
  gap: 16
});
var uf = xr.div({
  display: "flex",
  justifyContent: "space-between",
  gap: 16
});
var ff = xr.div({
  display: "flex",
  flexDirection: "column",
  gap: 4
});
var Hv = o2((e4) => import_react19.default.createElement(uf, null, import_react19.default.createElement(ff, { ...e4 }), import_react19.default.createElement(sf, null)), "Header");
var Pv = xr(l0)(({ theme: e4 }) => ({
  margin: 0,
  fontSize: e4.typography.size.s3,
  fontWeight: e4.typography.weight.bold
}));
var kv = xr(c0)(({ theme: e4 }) => ({
  position: "relative",
  zIndex: 1,
  margin: 0,
  fontSize: e4.typography.size.s2
}));
var Ov = xr.div({
  display: "flex",
  flexDirection: "row-reverse",
  gap: 8
});
var df = xr.div(({ theme: e4 }) => ({
  maxHeight: 100,
  overflow: "auto",
  animation: `${Iv} 300ms, ${cf} 300ms`,
  backgroundColor: e4.background.critical,
  color: e4.color.lightest,
  fontSize: e4.typography.size.s2,
  "& > div": {
    position: "relative",
    padding: "8px 16px"
  }
}));
var Bv = o2(({
  children: e4,
  ...t
}) => import_react19.default.createElement(df, { ...t }, import_react19.default.createElement("div", null, e4)), "Error");
function Nv({
  children: e4,
  width: t,
  height: r,
  onEscapeKeyDown: n,
  onInteractOutside: a = o2((u) => u.preventDefault(), "onInteractOutside"),
  className: i,
  container: c,
  portalSelector: l,
  ...s
}) {
  let u = c ?? (l ? document.querySelector(l) : null) ?? document.body;
  return import_react17.default.createElement(n0, { ...s }, import_react17.default.createElement(o0, { container: u }, import_react17.default.createElement(
    a0,
    { asChild: true },
    import_react17.default.createElement(f0, null)
  ), import_react17.default.createElement(
    i0,
    {
      asChild: true,
      onInteractOutside: a,
      onEscapeKeyDown: n
    },
    import_react17.default.createElement(d0, { className: i, width: t, height: r }, e4)
  )));
}
o2(Nv, "BaseModal");
var Dv = Object.assign(Nv, p0, { Dialog: wo });
var $v = o2((e4) => typeof e4 == "number" ? e4 : Number(e4), "toNumber");
var Vv = xr.div(
  ({ theme: e4, col: t, row: r = 1 }) => t ? {
    display: "inline-block",
    verticalAlign: "inherit",
    "& > *": {
      marginLeft: t * e4.layoutMargin,
      verticalAlign: "inherit"
    },
    [`& > *:first-child${hf}`]: {
      marginLeft: 0
    }
  } : {
    "& > *": {
      marginTop: r * e4.layoutMargin
    },
    [`& > *:first-child${hf}`]: {
      marginTop: 0
    }
  },
  ({ theme: e4, outer: t, col: r, row: n }) => {
    switch (true) {
      case !!(t && r):
        return {
          marginLeft: t * e4.layoutMargin,
          marginRight: t * e4.layoutMargin
        };
      case !!(t && n):
        return {
          marginTop: t * e4.layoutMargin,
          marginBottom: t * e4.layoutMargin
        };
      default:
        return {};
    }
  }
);
var jv = o2(({ col: e4, row: t, outer: r, children: n, ...a }) => {
  let i = $v(typeof r == "number" || !r ? r : e4 || t);
  return import_react22.default.createElement(Vv, { col: e4, row: t, outer: i, ...a }, n);
}, "Spaced");
var Uv = xr.div(({ theme: e4 }) => ({
  fontWeight: e4.typography.weight.bold
}));
var qv = xr.div();
var Gv = xr.div(({ theme: e4 }) => ({
  padding: 30,
  textAlign: "center",
  color: e4.color.defaultText,
  fontSize: e4.typography.size.s2 - 1
}));
var Xv = o2(({ children: e4, ...t }) => {
  let [r, n] = import_react23.Children.toArray(e4);
  return import_react23.default.createElement(Gv, { ...t }, import_react23.default.createElement(Uv, null, r), n && import_react23.default.createElement(
    qv,
    null,
    n
  ));
}, "Placeholder");
Qn2();
function Kv(e4, t) {
  var r = (0, import_react25.useRef)(null), n = (0, import_react25.useRef)(null);
  n.current = t;
  var a = (0, import_react25.useRef)(null);
  (0, import_react25.useEffect)(function() {
    i();
  });
  var i = (0, import_react25.useCallback)(function() {
    var c = a.current, l = n.current, s = c || (l ? l instanceof Element ? l : l.current : null);
    r.current && r.current.element === s && r.current.subscriber === e4 || (r.current && r.current.cleanup && r.current.cleanup(), r.current = {
      element: s,
      subscriber: e4,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: s ? e4(s) : void 0
    });
  }, [e4]);
  return (0, import_react25.useEffect)(function() {
    return function() {
      r.current && r.current.cleanup && (r.current.cleanup(), r.current = null);
    };
  }, []), (0, import_react25.useCallback)(function(c) {
    a.current = c, i();
  }, [i]);
}
o2(Kv, "useResolvedElement");
function mf(e4, t, r) {
  return e4[t] ? e4[t][0] ? e4[t][0][r] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    e4[t][r]
  ) : t === "contentBoxSize" ? e4.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
o2(mf, "extractSize");
function Ro(e4) {
  e4 === void 0 && (e4 = {});
  var t = e4.onResize, r = (0, import_react25.useRef)(void 0);
  r.current = t;
  var n = e4.round || Math.round, a = (0, import_react25.useRef)(), i = (0, import_react25.useState)({
    width: void 0,
    height: void 0
  }), c = i[0], l = i[1], s = (0, import_react25.useRef)(false);
  (0, import_react25.useEffect)(function() {
    return s.current = false, function() {
      s.current = true;
    };
  }, []);
  var u = (0, import_react25.useRef)({
    width: void 0,
    height: void 0
  }), f = Kv((0, import_react25.useCallback)(function(d) {
    return (!a.current || a.current.box !== e4.box || a.current.round !== n) && (a.current = {
      box: e4.box,
      round: n,
      instance: new ResizeObserver(function(m) {
        var v = m[0], R = e4.box === "border-box" ? "borderBoxSize" : e4.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", p = mf(v, R, "inlineSize"), h4 = mf(v, R, "blockSize"), g = p ? n(p) : void 0, w = h4 ? n(h4) : void 0;
        if (u.current.width !== g || u.current.height !== w) {
          var b = {
            width: g,
            height: w
          };
          u.current.width = g, u.current.height = w, r.current ? r.current(b) : s.current || l(b);
        }
      })
    }), a.current.instance.observe(d, {
      box: e4.box
    }), function() {
      a.current && a.current.instance.unobserve(d);
    };
  }, [e4.box, n]), e4.ref);
  return (0, import_react25.useMemo)(function() {
    return {
      ref: f,
      width: c.width,
      height: c.height
    };
  }, [f, c.width, c.height]);
}
o2(Ro, "useResizeObserver");
var n7 = xr.div(
  ({ centered: e4 = false, scale: t = 1, elementHeight: r }) => ({
    height: r || "auto",
    transformOrigin: e4 ? "center top" : "left top",
    transform: `scale(${1 / t})`
  })
);
function gf({ centered: e4, scale: t, children: r }) {
  let n = (0, import_react24.useRef)(null), [a, i] = (0, import_react24.useState)(0), c = (0, import_react24.useCallback)(
    ({ height: l }) => {
      l && i(l / t);
    },
    [t]
  );
  return (0, import_react24.useEffect)(() => {
    n.current && i(n.current.getBoundingClientRect().height);
  }, [t]), Ro({
    ref: n,
    onResize: c
  }), import_react24.default.createElement(n7, { centered: e4, scale: t, elementHeight: a }, import_react24.default.createElement("div", { ref: n, className: "innerZoomElementWrapper" }, r));
}
o2(gf, "ZoomElement");
var w0 = class w02 extends import_react26.Component {
  constructor() {
    super(...arguments);
    this.iframe = null;
  }
  componentDidMount() {
    let { iFrameRef: r } = this.props;
    this.iframe = r.current;
  }
  shouldComponentUpdate(r) {
    let { scale: n, active: a } = this.props;
    return n !== r.scale && this.setIframeInnerZoom(r.scale), a !== r.active && this.iframe.setAttribute("data-is-storybook", r.active ? "true" : "false"), r.children.props.src !== this.props.children.props.src;
  }
  setIframeInnerZoom(r) {
    try {
      Object.assign(this.iframe.contentDocument.body.style, {
        width: `${r * 100}%`,
        height: `${r * 100}%`,
        transform: `scale(${1 / r})`,
        transformOrigin: "top left"
      });
    } catch {
      this.setIframeZoom(r);
    }
  }
  setIframeZoom(r) {
    Object.assign(this.iframe.style, {
      width: `${r * 100}%`,
      height: `${r * 100}%`,
      transform: `scale(${1 / r})`,
      transformOrigin: "top left"
    });
  }
  render() {
    let { children: r } = this.props;
    return import_react26.default.createElement(import_react26.default.Fragment, null, r);
  }
};
o2(w0, "ZoomIFrame");
var yo2 = w0;
var a7 = {
  Element: gf,
  IFrame: yo2
};
var { document: l7 } = import_global4.global;
var c7 = xr.strong(({ theme: e4 }) => ({
  color: e4.color.orange
}));
var s7 = xr.strong(({ theme: e4 }) => ({
  color: e4.color.ancillary,
  textDecoration: "underline"
}));
var wf = xr.em(({ theme: e4 }) => ({
  color: e4.textMutedColor
}));
var u7 = /(Error): (.*)\n/;
var f7 = /at (?:(.*) )?\(?(.+)\)?/;
var d7 = /([^@]+)?(?:\/<)?@(.+)?/;
var p7 = /([^@]+)?@(.+)?/;
var m7 = o2(({
  error: e4
}) => {
  if (!e4)
    return import_react27.default.createElement(import_react27.Fragment, null, "This error has no stack or message");
  if (!e4.stack)
    return import_react27.default.createElement(import_react27.Fragment, null, e4.message || "This error has no stack or message");
  let t = e4.stack.toString();
  t && e4.message && !t.includes(e4.message) && (t = `Error: ${e4.message}

${t}`);
  let r = t.match(u7);
  if (!r)
    return import_react27.default.createElement(import_react27.Fragment, null, t);
  let [, n, a] = r, i = t.split(/\n/).slice(1), [, ...c] = i.map((l) => {
    let s = l.match(f7) || l.match(d7) || l.match(p7);
    return s ? {
      name: (s[1] || "").replace("/<", ""),
      location: s[2].replace(l7.location.origin, "")
    } : null;
  }).filter(Boolean);
  return import_react27.default.createElement(import_react27.Fragment, null, import_react27.default.createElement("span", null, n), ": ", import_react27.default.createElement(
    c7,
    null,
    a
  ), import_react27.default.createElement("br", null), c.map(
    (l, s) => (l == null ? void 0 : l.name) ? import_react27.default.createElement(import_react27.Fragment, { key: s }, "  ", "at ", import_react27.default.createElement(s7, null, l.name), " (", import_react27.default.createElement(wf, null, l.location), ")", import_react27.default.createElement("br", null)) : import_react27.default.createElement(
      import_react27.Fragment,
      { key: s },
      "  ",
      "at ",
      import_react27.default.createElement(wf, null, l == null ? void 0 : l.location),
      import_react27.default.createElement("br", null)
    )
  ));
}, "ErrorFormatter");
var v7 = xr.input({
  appearance: "none",
  display: "grid",
  placeContent: "center",
  width: 14,
  height: 14,
  margin: 0,
  border: `1px solid ${h.border}`,
  borderRadius: 2,
  backgroundColor: "white",
  transition: "background-color 0.1s",
  "&:enabled": {
    cursor: "pointer"
  },
  "&:disabled": {
    backgroundColor: h.medium
  },
  "&:disabled:checked, &:disabled:indeterminate": {
    backgroundColor: h.mediumdark
  },
  "&:checked, &:indeterminate": {
    backgroundColor: h.secondary
  },
  "&:checked::before": {
    content: '""',
    width: 14,
    height: 14,
    background: `no-repeat center url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Cpath fill='none' stroke='%23fff' stroke-width='2' d='m3 7 2.5 2.5L11 4'/%3E%3C/svg%3E")`
  },
  "&:indeterminate::before": {
    content: '""',
    width: 8,
    height: 2,
    background: "white"
  },
  "&:enabled:focus": {
    outline: `1px solid ${h.secondary}`,
    outlineOffset: 1
  }
});
var w7 = o2((e4) => import_react28.default.createElement(v7, { ...e4, type: "checkbox" }), "Checkbox");
var b7 = xr.label(({ theme: e4 }) => ({
  display: "flex",
  borderBottom: `1px solid ${e4.appBorderColor}`,
  margin: "0 15px",
  padding: "8px 0",
  "&:last-child": {
    marginBottom: "3rem"
  }
}));
var R7 = xr.span(({ theme: e4 }) => ({
  minWidth: 100,
  fontWeight: e4.typography.weight.bold,
  marginRight: 15,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  lineHeight: "16px"
}));
var Rf = o2(({ label: e4, children: t, ...r }) => import_react29.default.createElement(b7, { ...r }, e4 ? import_react29.default.createElement(
  R7,
  null,
  import_react29.default.createElement("span", null, e4)
) : null, t), "Field");
Yr2();
Pn2();
var yf = import_react32.useLayoutEffect;
var xf = o2(function(t) {
  var r = import_react31.default.useRef(t);
  return yf(function() {
    r.current = t;
  }), r;
}, "useLatest");
var Sf = o2(function(t, r) {
  if (typeof t == "function") {
    t(r);
    return;
  }
  t.current = r;
}, "updateRef");
var Cf = o2(function(t, r) {
  var n = import_react33.default.useRef();
  return import_react33.default.useCallback(function(a) {
    t.current = a, n.current && Sf(n.current, null), n.current = r, r && Sf(r, a);
  }, [r]);
}, "useComposedRef");
var Mf = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0",
  display: "block"
};
var E7 = o2(function(t) {
  Object.keys(Mf).forEach(function(r) {
    t.style.setProperty(r, Mf[r], "important");
  });
}, "forceHiddenStyles");
var Lf = E7;
var ye2 = null;
var Af = o2(function(t, r) {
  var n = t.scrollHeight;
  return r.sizingStyle.boxSizing === "border-box" ? n + r.borderSize : n - r.paddingSize;
}, "getHeight");
function S7(e4, t, r, n) {
  r === void 0 && (r = 1), n === void 0 && (n = 1 / 0), ye2 || (ye2 = document.createElement("textarea"), ye2.setAttribute("tabindex", "-1"), ye2.setAttribute("aria-hidden", "true"), Lf(ye2)), ye2.parentNode === null && document.body.appendChild(ye2);
  var a = e4.paddingSize, i = e4.borderSize, c = e4.sizingStyle, l = c.boxSizing;
  Object.keys(c).forEach(function(m) {
    var v = m;
    ye2.style[v] = c[v];
  }), Lf(ye2), ye2.value = t;
  var s = Af(ye2, e4);
  ye2.value = t, s = Af(ye2, e4), ye2.value = "x";
  var u = ye2.scrollHeight - a, f = u * r;
  l === "border-box" && (f = f + a + i), s = Math.max(f, s);
  var d = u * n;
  return l === "border-box" && (d = d + a + i), s = Math.min(d, s), [s, u];
}
o2(S7, "calculateNodeHeight");
var If = o2(function() {
}, "noop");
var C7 = o2(function(t, r) {
  return t.reduce(function(n, a) {
    return n[a] = r[a], n;
  }, {});
}, "pick");
var M7 = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak",
  "wordSpacing",
  "scrollbarGutter"
];
var L7 = !!document.documentElement.currentStyle;
var A7 = o2(function(t) {
  var r = window.getComputedStyle(t);
  if (r === null)
    return null;
  var n = C7(M7, r), a = n.boxSizing;
  if (a === "")
    return null;
  L7 && a === "border-box" && (n.width = parseFloat(n.width) + parseFloat(n.borderRightWidth) + parseFloat(n.borderLeftWidth) + parseFloat(n.paddingRight) + parseFloat(n.paddingLeft) + "px");
  var i = parseFloat(n.paddingBottom) + parseFloat(n.paddingTop), c = parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth);
  return {
    sizingStyle: n,
    paddingSize: i,
    borderSize: c
  };
}, "getSizingData");
var I7 = A7;
function y0(e4, t, r) {
  var n = xf(r);
  Ke2.useLayoutEffect(function() {
    var a = o2(function(c) {
      return n.current(c);
    }, "handler");
    if (e4)
      return e4.addEventListener(t, a), function() {
        return e4.removeEventListener(t, a);
      };
  }, []);
}
o2(y0, "useListener");
var z7 = o2(function(t, r) {
  y0(document.body, "reset", function(n) {
    t.current.form === n.target && r(n);
  });
}, "useFormResetListener");
var T7 = o2(function(t) {
  y0(window, "resize", t);
}, "useWindowResizeListener");
var H7 = o2(function(t) {
  y0(document.fonts, "loadingdone", t);
}, "useFontsLoadedListener");
var P7 = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"];
var k7 = o2(function(t, r) {
  var n = t.cacheMeasurements, a = t.maxRows, i = t.minRows, c = t.onChange, l = c === void 0 ? If : c, s = t.onHeightChange, u = s === void 0 ? If : s, f = ur2(t, P7), d = f.value !== void 0, m = Ke2.useRef(null), v = Cf(m, r), R = Ke2.useRef(0), p = Ke2.useRef(), h4 = o2(
    function() {
      var b = m.current, x = n && p.current ? p.current : I7(b);
      if (x) {
        p.current = x;
        var E4 = S7(x, b.value || b.placeholder || "x", i, a), y = E4[0], S = E4[1];
        R.current !== y && (R.current = y, b.style.setProperty("height", y + "px", "important"), u(y, {
          rowHeight: S
        }));
      }
    },
    "resizeTextarea"
  ), g = o2(function(b) {
    d || h4(), l(b);
  }, "handleChange");
  return Ke2.useLayoutEffect(h4), z7(m, function() {
    if (!d) {
      var w = m.current.value;
      requestAnimationFrame(function() {
        var b = m.current;
        b && w !== b.value && h4();
      });
    }
  }), T7(h4), H7(h4), Ke2.createElement("textarea", W2({}, f, {
    onChange: g,
    ref: v
  }));
}, "TextareaAutosize");
var zf = Ke2.forwardRef(k7);
var O7 = {
  // resets
  appearance: "none",
  border: "0 none",
  boxSizing: "inherit",
  display: " block",
  margin: " 0",
  background: "transparent",
  padding: 0,
  fontSize: "inherit",
  position: "relative"
};
var C0 = o2(({ theme: e4 }) => ({
  ...O7,
  transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
  color: e4.input.color || "inherit",
  background: e4.input.background,
  boxShadow: `${e4.input.border} 0 0 0 1px inset`,
  borderRadius: e4.input.borderRadius,
  fontSize: e4.typography.size.s2 - 1,
  lineHeight: "20px",
  padding: "6px 10px",
  // 32
  boxSizing: "border-box",
  height: 32,
  '&[type="file"]': {
    height: "auto"
  },
  "&:focus": {
    boxShadow: `${e4.color.secondary} 0 0 0 1px inset`,
    outline: "none"
  },
  "&[disabled]": {
    cursor: "not-allowed",
    opacity: 0.5
  },
  "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e4.color.lightest} inset` },
  "&::placeholder": {
    color: e4.textMutedColor,
    opacity: 1
  }
}), "styles");
var M0 = o2(({ size: e4 }) => {
  switch (e4) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, "sizes");
var Tf = o2(({
  align: e4
}) => {
  switch (e4) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, "alignment");
var L0 = o2(({ valid: e4, theme: t }) => {
  switch (e4) {
    case "valid":
      return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` };
    case "error":
      return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` };
    case "warn":
      return {
        boxShadow: `${t.color.warning} 0 0 0 1px inset`
      };
    case void 0:
    case null:
    default:
      return {};
  }
}, "validation");
var Hf = Object.assign(
  xr(
    (0, import_react30.forwardRef)(o2(function({ size: t, valid: r, align: n, ...a }, i) {
      return import_react30.default.createElement("input", { ...a, ref: i });
    }, "Input"))
  )(C0, M0, Tf, L0, {
    minHeight: 32
  }),
  {
    displayName: "Input"
  }
);
var Pf = Object.assign(
  xr(
    (0, import_react30.forwardRef)(o2(function({ size: t, valid: r, align: n, ...a }, i) {
      return import_react30.default.createElement("select", { ...a, ref: i });
    }, "Select"))
  )(C0, M0, L0, {
    height: 32,
    userSelect: "none",
    paddingRight: 20,
    appearance: "menulist"
  }),
  {
    displayName: "Select"
  }
);
var kf = Object.assign(
  xr(
    (0, import_react30.forwardRef)(o2(function({ size: t, valid: r, align: n, ...a }, i) {
      return import_react30.default.createElement(zf, { ...a, ref: i });
    }, "Textarea"))
  )(C0, M0, Tf, L0, ({ height: e4 = 400 }) => ({
    overflow: "visible",
    maxHeight: e4
  })),
  {
    displayName: "Textarea"
  }
);
var N7 = Object.assign(
  xr.form({
    boxSizing: "border-box",
    width: "100%"
  }),
  {
    Field: Rf,
    Input: Hf,
    Select: Pf,
    Textarea: kf,
    Button: Ir2
  }
);
var k3 = (0, import_react34.lazy)(
  () => Promise.resolve().then(() => (Bo(), al)).then((e4) => ({ default: e4.WithTooltip }))
);
var O3 = o2((e4) => import_react34.default.createElement(import_react34.Suspense, { fallback: import_react34.default.createElement("div", null) }, import_react34.default.createElement(k3, { ...e4 })), "WithTooltip");
var B3 = (0, import_react34.lazy)(
  () => Promise.resolve().then(() => (Bo(), al)).then((e4) => ({ default: e4.WithTooltipPure }))
);
var N3 = o2((e4) => import_react34.default.createElement(import_react34.Suspense, { fallback: import_react34.default.createElement("div", null) }, import_react34.default.createElement(B3, { ...e4 })), "WithTooltipPure");
var D3 = xr.div(({ theme: e4 }) => ({
  fontWeight: e4.typography.weight.bold
}));
var F3 = xr.span();
var _3 = xr.div(({ theme: e4 }) => ({
  marginTop: 8,
  textAlign: "center",
  "> *": {
    margin: "0 8px",
    fontWeight: e4.typography.weight.bold
  }
}));
var $3 = xr.div(({ theme: e4 }) => ({
  color: e4.color.defaultText,
  lineHeight: "18px"
}));
var V3 = xr.div({
  padding: 15,
  width: 280,
  boxSizing: "border-box"
});
var j3 = o2(({ title: e4, desc: t, links: r }) => import_react35.default.createElement(V3, null, import_react35.default.createElement(
  $3,
  null,
  e4 && import_react35.default.createElement(D3, null, e4),
  t && import_react35.default.createElement(F3, null, t)
), r && import_react35.default.createElement(
  _3,
  null,
  r.map(({ title: n, ...a }) => import_react35.default.createElement(yi, { ...a, key: n }, n))
)), "TooltipMessage");
var q3 = xr.div(({ theme: e4 }) => ({
  padding: "2px 6px",
  lineHeight: "16px",
  fontSize: 10,
  fontWeight: e4.typography.weight.bold,
  color: e4.color.lightest,
  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
  borderRadius: 4,
  whiteSpace: "nowrap",
  pointerEvents: "none",
  zIndex: -1,
  background: e4.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)",
  margin: 6
}));
var G3 = o2(({ note: e4, ...t }) => import_react36.default.createElement(q3, { ...t }, e4), "TooltipNote");
var Yd = me2(Kr2(), 1);
var X3 = xr(({ active: e4, loading: t, disabled: r, ...n }) => import_react38.default.createElement("span", { ...n }))(
  ({ theme: e4 }) => ({
    color: e4.color.defaultText,
    // Previously was theme.typography.weight.normal but this weight does not exists in Theme
    fontWeight: e4.typography.weight.regular
  }),
  ({ active: e4, theme: t }) => e4 ? {
    color: t.color.secondary,
    fontWeight: t.typography.weight.bold
  } : {},
  ({ loading: e4, theme: t }) => e4 ? {
    display: "inline-block",
    flex: "none",
    ...t.animation.inlineGlow
  } : {},
  ({ disabled: e4, theme: t }) => e4 ? {
    color: t.textMutedColor
  } : {}
);
var Y3 = xr.span({
  display: "flex",
  "& svg": {
    height: 12,
    width: 12,
    margin: "3px 0",
    verticalAlign: "top"
  },
  "& path": {
    fill: "inherit"
  }
});
var Z3 = xr.span(
  {
    flex: 1,
    textAlign: "left",
    display: "flex",
    flexDirection: "column"
  },
  ({ isIndented: e4 }) => e4 ? { marginLeft: 24 } : {}
);
var K3 = xr.span(
  ({ theme: e4 }) => ({
    fontSize: "11px",
    lineHeight: "14px"
  }),
  ({ active: e4, theme: t }) => e4 ? {
    color: t.color.secondary
  } : {},
  ({ theme: e4, disabled: t }) => t ? {
    color: e4.textMutedColor
  } : {}
);
var J3 = xr.span(
  ({ active: e4, theme: t }) => e4 ? {
    color: t.color.secondary
  } : {},
  () => ({
    display: "flex",
    maxWidth: 14
  })
);
var Q3 = xr.div(
  ({ theme: e4 }) => ({
    width: "100%",
    border: "none",
    borderRadius: e4.appBorderRadius,
    background: "none",
    fontSize: e4.typography.size.s1,
    transition: "all 150ms ease-out",
    color: e4.color.dark,
    textDecoration: "none",
    justifyContent: "space-between",
    lineHeight: "18px",
    padding: "7px 10px",
    display: "flex",
    alignItems: "center",
    "& > * + *": {
      paddingLeft: 10
    }
  }),
  ({ theme: e4, href: t, onClick: r }) => (t || r) && {
    cursor: "pointer",
    "&:hover": {
      background: e4.background.hoverable
    },
    "&:hover svg": {
      opacity: 1
    }
  },
  ({ theme: e4, as: t }) => t === "label" && {
    "&:has(input:not(:disabled))": {
      cursor: "pointer",
      "&:hover": {
        background: e4.background.hoverable
      }
    }
  },
  ({ disabled: e4 }) => e4 && { cursor: "not-allowed" }
);
var e6 = (0, Yd.default)(100)(({ onClick: e4, input: t, href: r, LinkWrapper: n }) => ({
  ...e4 && {
    as: "button",
    onClick: e4
  },
  ...t && {
    as: "label"
  },
  ...r && {
    as: "a",
    href: r,
    ...n && {
      as: n,
      to: r
    }
  }
}));
var t6 = o2((e4) => {
  let {
    loading: t = false,
    title: r = import_react38.default.createElement("span", null, "Loading state"),
    center: n = null,
    right: a = null,
    active: i = false,
    disabled: c = false,
    isIndented: l = false,
    href: s = void 0,
    onClick: u = void 0,
    icon: f,
    input: d,
    LinkWrapper: m = void 0,
    ...v
  } = e4, R = { active: i, disabled: c }, p = e6(e4), h4 = f || d;
  return import_react38.default.createElement(Q3, { ...v, ...R, ...p }, import_react38.default.createElement(import_react38.default.Fragment, null, h4 && import_react38.default.createElement(J3, { ...R }, h4), r || n ? import_react38.default.createElement(Z3, { isIndented: l && !h4 }, r && import_react38.default.createElement(
    X3,
    { ...R, loading: t },
    r
  ), n && import_react38.default.createElement(K3, { ...R }, n)) : null, a && import_react38.default.createElement(
    Y3,
    { ...R },
    a
  )));
}, "ListItem");
var il = t6;
var o6 = xr.div(
  {
    minWidth: 180,
    overflow: "hidden",
    overflowY: "auto",
    maxHeight: 15.5 * 32 + 8
    // 15.5 items at 32px each + 8px padding
  },
  ({ theme: e4 }) => ({
    borderRadius: e4.appBorderRadius + 2
  }),
  ({ theme: e4 }) => e4.base === "dark" ? { background: e4.background.content } : {}
);
var a6 = xr.div(({ theme: e4 }) => ({
  padding: 4,
  "& + &": {
    borderTop: `1px solid ${e4.appBorderColor}`
  }
}));
var i6 = o2(({ id: e4, onClick: t, ...r }) => {
  let { active: n, disabled: a, title: i, href: c } = r, l = (0, import_react37.useCallback)(
    (s) => t == null ? void 0 : t(s, { id: e4, active: n, disabled: a, title: i, href: c }),
    [t, e4, n, a, i, c]
  );
  return import_react37.default.createElement(il, { id: `list-item-${e4}`, ...r, ...t && { onClick: l } });
}, "Item");
var ll = o2(({ links: e4, LinkWrapper: t, ...r }) => {
  let n = Array.isArray(e4[0]) ? e4 : [e4], a = n.some(
    (i) => i.some((c) => "icon" in c && c.icon || "input" in c && c.input)
  );
  return import_react37.default.createElement(o6, { ...r }, n.filter((i) => i.length).map((i, c) => import_react37.default.createElement(a6, { key: i.map((l) => l.id).join(`~${c}~`) }, i.map((l) => "content" in l ? import_react37.default.createElement(import_react37.Fragment, { key: l.id }, l.content) : import_react37.default.createElement(i6, { key: l.id, isIndented: a, LinkWrapper: t, ...l })))));
}, "TooltipLinkList");
Qn2();
var cl = xr.div(
  {
    display: "flex",
    whiteSpace: "nowrap",
    flexBasis: "auto",
    marginLeft: 3,
    marginRight: 10
  },
  ({ scrollable: e4 }) => e4 ? { flexShrink: 0 } : {},
  ({ left: e4 }) => e4 ? {
    "& > *": {
      marginLeft: 4
    }
  } : {},
  ({ right: e4 }) => e4 ? {
    gap: 6
  } : {}
);
cl.displayName = "Side";
var c6 = o2(({ children: e4, className: t, scrollable: r }) => r ? import_react40.default.createElement(
  Rr,
  { vertical: false, className: t },
  e4
) : import_react40.default.createElement("div", { className: t }, e4), "UnstyledBar");
var ul = xr(c6)(
  ({ backgroundColor: e4, theme: t, scrollable: r = true }) => ({
    color: t.barTextColor,
    width: "100%",
    minHeight: 40,
    flexShrink: 0,
    scrollbarColor: `${t.barTextColor} ${e4 || t.barBg}`,
    scrollbarWidth: "thin",
    overflow: r ? "auto" : "hidden",
    overflowY: "hidden"
  }),
  ({ theme: e4, border: t = false }) => t ? {
    boxShadow: `${e4.appBorderColor}  0 -1px 0 0 inset`,
    background: e4.barBg
  } : {}
);
ul.displayName = "Bar";
var s6 = xr.div(({ bgColor: e4 }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  backgroundColor: e4 || ""
}));
var No = o2(({ children: e4, backgroundColor: t, className: r, ...n }) => {
  let [a, i] = import_react40.Children.toArray(e4);
  return import_react40.default.createElement(ul, { backgroundColor: t, className: `sb-bar ${r}`, ...n }, import_react40.default.createElement(s6, {
    bgColor: t
  }, import_react40.default.createElement(cl, { scrollable: n.scrollable, left: true }, a), i ? import_react40.default.createElement(
    cl,
    { right: true },
    i
  ) : null));
}, "FlexBar");
No.displayName = "FlexBar";
var p6 = o2((e4) => typeof e4.props.href == "string", "isLink");
var m6 = o2(
  (e4) => typeof e4.props.href != "string",
  "isButton"
);
function h6({ children: e4, ...t }, r) {
  let n = { props: t, ref: r };
  if (p6(n))
    return import_react41.default.createElement("a", { ref: n.ref, ...n.props }, e4);
  if (m6(n))
    return import_react41.default.createElement("button", { ref: n.ref, type: "button", ...n.props }, e4);
  throw new Error("invalid props");
}
o2(h6, "ForwardRefFunction");
var Jd = (0, import_react41.forwardRef)(h6);
Jd.displayName = "ButtonOrLink";
var ar = xr(Jd, { shouldForwardProp: yr })(
  {
    whiteSpace: "normal",
    display: "inline-flex",
    overflow: "hidden",
    verticalAlign: "top",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textDecoration: "none",
    "&:empty": {
      display: "none"
    },
    "&[hidden]": {
      display: "none"
    }
  },
  ({ theme: e4 }) => ({
    padding: "0 15px",
    transition: "color 0.2s linear, border-bottom-color 0.2s linear",
    height: 40,
    lineHeight: "12px",
    cursor: "pointer",
    background: "transparent",
    border: "0 solid transparent",
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    fontWeight: "bold",
    fontSize: 13,
    "&:focus": {
      outline: "0 none",
      borderBottomColor: e4.barSelectedColor
    }
  }),
  ({ active: e4, textColor: t, theme: r }) => e4 ? {
    color: t || r.barSelectedColor,
    borderBottomColor: r.barSelectedColor
  } : {
    color: t || r.barTextColor,
    borderBottomColor: "transparent",
    "&:hover": {
      color: r.barHoverColor
    }
  }
);
ar.displayName = "TabButton";
var g6 = xr.div(({ theme: e4 }) => ({
  height: "100%",
  display: "flex",
  padding: 30,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 15,
  background: e4.background.content
}));
var v6 = xr.div({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  maxWidth: 415
});
var w6 = xr.div(({ theme: e4 }) => ({
  fontWeight: e4.typography.weight.bold,
  fontSize: e4.typography.size.s2 - 1,
  textAlign: "center",
  color: e4.textColor
}));
var b6 = xr.div(({ theme: e4 }) => ({
  fontWeight: e4.typography.weight.regular,
  fontSize: e4.typography.size.s2 - 1,
  textAlign: "center",
  color: e4.textMutedColor
}));
var _o = o2(({ title: e4, description: t, footer: r }) => import_react42.default.createElement(g6, null, import_react42.default.createElement(
  v6,
  null,
  import_react42.default.createElement(w6, null, e4),
  t && import_react42.default.createElement(b6, null, t)
), r), "EmptyTabContent");
var fl = xr.div(
  ({ active: e4 }) => e4 ? { display: "block" } : { display: "none" }
);
var Qd = o2((e4) => import_react43.Children.toArray(e4).map(
  // @ts-expect-error (non strict)
  ({
    props: { title: t, id: r, color: n, children: a }
  }) => {
    let i = Array.isArray(
      a
    ) ? a[0] : a;
    return {
      title: t,
      id: r,
      ...n ? { color: n } : {},
      render: typeof i == "function" ? i : ({ active: l }) => import_react43.default.createElement(fl, { active: l, role: "tabpanel" }, i)
    };
  }
), "childrenToList");
Bo();
var C6 = xr.span(({ theme: e4, isActive: t }) => ({
  display: "inline-block",
  width: 0,
  height: 0,
  marginLeft: 8,
  color: t ? e4.color.secondary : e4.color.mediumdark,
  borderRight: "3px solid transparent",
  borderLeft: "3px solid transparent",
  borderTop: "3px solid",
  transition: "transform .1s ease-out"
}));
var M6 = xr(ar)(({ active: e4, theme: t, preActive: r }) => `
    color: ${r || e4 ? t.barSelectedColor : t.barTextColor};
    .addon-collapsible-icon {
      color: ${r || e4 ? t.barSelectedColor : t.barTextColor};
    }
    &:hover {
      color: ${t.barHoverColor};
      .addon-collapsible-icon {
        color: ${t.barHoverColor};
      }
    }
  `);
function rp(e4) {
  let t = (0, import_react44.useRef)(), r = (0, import_react44.useRef)(), n = (0, import_react44.useRef)(/* @__PURE__ */ new Map()), { width: a = 1 } = Ro({
    // @ts-expect-error (non strict)
    ref: t
  }), [i, c] = (0, import_react44.useState)(e4), [l, s] = (0, import_react44.useState)([]), u = (0, import_react44.useRef)(e4), f = (0, import_react44.useCallback)(
    ({
      menuName: m,
      actions: v
    }) => {
      let R = l.some(({ active: g }) => g), [p, h4] = (0, import_react44.useState)(false);
      return import_react44.default.createElement(import_react44.default.Fragment, null, import_react44.default.createElement(
        ol,
        {
          interactive: true,
          visible: p,
          onVisibleChange: h4,
          placement: "bottom",
          delayHide: 100,
          tooltip: import_react44.default.createElement(
            ll,
            {
              links: l.map(({ title: g, id: w, color: b, active: x }) => ({
                id: w,
                title: g,
                color: b,
                active: x,
                onClick: o2((E4) => {
                  E4.preventDefault(), v.onSelect(w);
                }, "onClick")
              }))
            }
          )
        },
        import_react44.default.createElement(
          M6,
          {
            id: "addons-menu-button",
            ref: r,
            active: R,
            preActive: p,
            style: { visibility: l.length ? "visible" : "hidden" },
            "aria-hidden": !l.length,
            className: "tabbutton",
            type: "button",
            role: "tab"
          },
          m,
          import_react44.default.createElement(
            C6,
            {
              className: "addon-collapsible-icon",
              isActive: R || p
            }
          )
        )
      ), l.map(({ title: g, id: w, color: b }, x) => {
        let E4 = `index-${x}`;
        return import_react44.default.createElement(
          ar,
          {
            id: `tabbutton-${I(w) ?? E4}`,
            style: { visibility: "hidden" },
            "aria-hidden": true,
            tabIndex: -1,
            ref: (y) => {
              n.current.set(w, y);
            },
            className: "tabbutton",
            type: "button",
            key: w,
            textColor: b,
            role: "tab"
          },
          g
        );
      }));
    },
    [l]
  ), d = (0, import_react44.useCallback)(() => {
    if (!t.current || !r.current)
      return;
    let { x: m, width: v } = t.current.getBoundingClientRect(), { width: R } = r.current.getBoundingClientRect(), p = l.length ? m + v - R : m + v, h4 = [], g = 0, w = e4.filter((b) => {
      let { id: x } = b, E4 = n.current.get(x), { width: y = 0 } = (E4 == null ? void 0 : E4.getBoundingClientRect()) || {}, S = m + g + y > p;
      return (!S || !E4) && h4.push(b), g += y, S;
    });
    (h4.length !== i.length || u.current !== e4) && (c(h4), s(w), u.current = e4);
  }, [l.length, e4, i]);
  return (0, import_react44.useLayoutEffect)(d, [d, a]), {
    tabRefs: n,
    addonsRef: r,
    tabBarRef: t,
    visibleList: i,
    invisibleList: l,
    AddonTab: f
  };
}
o2(rp, "useList");
var z6 = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
var T6 = xr.div(
  ({ theme: e4, bordered: t }) => t ? {
    backgroundClip: "padding-box",
    border: `1px solid ${e4.appBorderColor}`,
    borderRadius: e4.appBorderRadius,
    overflow: "hidden",
    boxSizing: "border-box"
  } : {},
  ({ absolute: e4 }) => e4 ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column"
  } : {
    display: "block"
  }
);
var gl = xr.div({
  overflow: "hidden",
  "&:first-of-type": {
    marginLeft: -3
  },
  whiteSpace: "nowrap",
  flexGrow: 1
});
gl.displayName = "TabBar";
var H6 = xr.div(
  {
    display: "block",
    position: "relative"
  },
  ({ theme: e4 }) => ({
    fontSize: e4.typography.size.s2 - 1,
    background: e4.background.content
  }),
  ({ bordered: e4, theme: t }) => e4 ? {
    borderRadius: `0 0 ${t.appBorderRadius - 1}px ${t.appBorderRadius - 1}px`
  } : {},
  ({ absolute: e4, bordered: t }) => e4 ? {
    height: `calc(100% - ${t ? 42 : 40}px)`,
    position: "absolute",
    left: 0 + (t ? 1 : 0),
    right: 0 + (t ? 1 : 0),
    bottom: 0 + (t ? 1 : 0),
    top: 40 + (t ? 1 : 0),
    overflow: "auto",
    [`& > *:first-child${z6}`]: {
      position: "absolute",
      left: 0 + (t ? 1 : 0),
      right: 0 + (t ? 1 : 0),
      bottom: 0 + (t ? 1 : 0),
      top: 0 + (t ? 1 : 0),
      height: `calc(100% - ${t ? 2 : 0}px)`,
      overflow: "auto"
    }
  } : {}
);
var P6 = o2(({ active: e4, render: t, children: r }) => import_react39.default.createElement(fl, { active: e4 }, t ? t() : r), "TabWrapper");
var wl = class wl2 extends import_react39.Component {
  constructor(t) {
    super(t), this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(t, r) {
    console.error("Error rendering addon panel"), console.error(t), console.error(r.componentStack);
  }
  render() {
    return this.state.hasError && this.props.active ? import_react39.default.createElement(
      _o,
      {
        title: "This addon has errors",
        description: "Check your browser logs and addon code to pinpoint what went wrong. This issue was not caused by Storybook."
      }
    ) : this.props.children;
  }
};
o2(wl, "TabErrorBoundary");
var pl = wl;
var vl = (0, import_react39.memo)(
  ({
    children: e4,
    selected: t = null,
    actions: r,
    absolute: n = false,
    bordered: a = false,
    tools: i = null,
    backgroundColor: c,
    id: l = null,
    menuName: s = "Tabs",
    emptyState: u,
    showToolsWhenEmpty: f
  }) => {
    let d = (0, import_react39.useMemo)(
      () => Qd(e4).map((g, w) => ({
        ...g,
        active: t ? g.id === t : w === 0
      })),
      [e4, t]
    ), { visibleList: m, tabBarRef: v, tabRefs: R, AddonTab: p } = rp(d), h4 = u ?? import_react39.default.createElement(_o, { title: "Nothing found" });
    return !f && d.length === 0 ? h4 : (
      // @ts-expect-error (non strict)
      import_react39.default.createElement(T6, { absolute: n, bordered: a, id: l }, import_react39.default.createElement(No, {
        scrollable: false,
        border: true,
        backgroundColor: c
      }, import_react39.default.createElement(gl, { style: { whiteSpace: "normal" }, ref: v, role: "tablist" }, m.map(({
        title: g,
        id: w,
        active: b,
        color: x
      }, E4) => {
        let y = `index-${E4}`;
        return import_react39.default.createElement(
          ar,
          {
            id: `tabbutton-${I(w) ?? y}`,
            ref: (S) => {
              R.current.set(w, S);
            },
            className: `tabbutton ${b ? "tabbutton-active" : ""}`,
            type: "button",
            key: w,
            active: b,
            textColor: x,
            onClick: (S) => {
              S.preventDefault(), r.onSelect(w);
            },
            role: "tab"
          },
          typeof g == "function" ? import_react39.default.createElement("title", null) : g
        );
      }), import_react39.default.createElement(p, { menuName: s, actions: r })), i), import_react39.default.createElement(H6, { id: "panel-tab-content", bordered: a, absolute: n }, d.length ? d.map(({ id: g, active: w, render: b }) => import_react39.default.createElement(
        pl,
        { key: g, active: w },
        import_react39.default.createElement(b, { active: w }, null)
      )) : h4))
    );
  }
);
vl.displayName = "Tabs";
var Vo = class Vo2 extends import_react39.Component {
  constructor(r) {
    super(r);
    this.handlers = {
      onSelect: o2((r4) => this.setState({ selected: r4 }), "onSelect")
    };
    this.state = {
      selected: r.initial
    };
  }
  render() {
    let { bordered: r = false, absolute: n = false, children: a, backgroundColor: i, menuName: c } = this.props, { selected: l } = this.state;
    return import_react39.default.createElement(
      vl,
      {
        bordered: r,
        absolute: n,
        selected: l,
        backgroundColor: i,
        menuName: c,
        actions: this.handlers
      },
      a
    );
  }
};
o2(Vo, "TabsState"), Vo.defaultProps = {
  children: [],
  // @ts-expect-error (non strict)
  initial: null,
  absolute: false,
  bordered: false,
  backgroundColor: "",
  // @ts-expect-error (non strict)
  menuName: void 0
};
var ml = Vo;
var bl = xr.span(
  ({ theme: e4 }) => ({
    width: 1,
    height: 20,
    background: e4.appBorderColor,
    marginLeft: 2,
    marginRight: 2
  }),
  ({ force: e4 }) => e4 ? {} : {
    "& + &": {
      display: "none"
    }
  }
);
bl.displayName = "Separator";
var B6 = o2((e4) => e4.reduce(
  (t, r, n) => r ? import_react45.default.createElement(import_react45.Fragment, { key: r.id || r.key || `f-${n}` }, t, n > 0 ? import_react45.default.createElement(bl, {
    key: `s-${n}`
  }) : null, r.render() || r) : t,
  null
), "interleaveSeparators");
var _6 = o2((e4) => {
  let t = (0, import_react46.useRef)();
  return (0, import_react46.useEffect)(() => {
    t.current = e4;
  }, [e4]), t.current;
}, "usePrevious");
var $6 = o2((e4, t) => {
  let r = _6(t);
  return e4 ? t : r;
}, "useUpdate");
var V6 = o2(({ active: e4, children: t }) => (
  // the hidden attribute is an valid html element that's both accessible and works to visually hide content
  import_react46.default.createElement("div", { hidden: !e4 }, $6(e4, t))
), "AddonPanel");
var j6 = o2(({ alt: e4, ...t }) => import_react47.default.createElement("svg", { width: "200px", height: "40px", viewBox: "0 0 200 40", ...t, role: "img" }, e4 ? import_react47.default.createElement("title", null, e4) : null, import_react47.default.createElement("defs", null, import_react47.default.createElement(
  "path",
  {
    d: "M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z",
    id: "a"
  }
)), import_react47.default.createElement("g", { fill: "none", fillRule: "evenodd" }, import_react47.default.createElement(
  "path",
  {
    d: "M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z",
    fill: "currentColor"
  }
), import_react47.default.createElement("mask", { id: "b", fill: "#fff" }, import_react47.default.createElement("use", { xlinkHref: "#a" })), import_react47.default.createElement("use", { fill: "#FF4785", fillRule: "nonzero", xlinkHref: "#a" }), import_react47.default.createElement(
  "path",
  {
    d: "M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z",
    fill: "#FFF",
    fillRule: "nonzero",
    mask: "url(#b)"
  }
))), "StorybookLogo");
var W6 = o2((e4) => import_react48.default.createElement("svg", { viewBox: "0 0 64 64", ...e4 }, import_react48.default.createElement("title", null, "Storybook icon"), import_react48.default.createElement("g", { id: "Artboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }, import_react48.default.createElement(
  "path",
  {
    d: "M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z",
    id: "path-1",
    fill: "#FF4785",
    fillRule: "nonzero"
  }
), import_react48.default.createElement(
  "path",
  {
    d: "M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z",
    id: "path9_fill-path",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }
), import_react48.default.createElement(
  "path",
  {
    d: "M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z",
    id: "Path",
    fill: "#FFFFFF"
  }
))), "StorybookIcon");
var ap = Ee`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
var G6 = xr.div(({ size: e4 = 32 }) => ({
  borderRadius: "50%",
  cursor: "progress",
  display: "inline-block",
  overflow: "hidden",
  position: "absolute",
  transition: "all 200ms ease-out",
  verticalAlign: "top",
  top: "50%",
  left: "50%",
  marginTop: -(e4 / 2),
  marginLeft: -(e4 / 2),
  height: e4,
  width: e4,
  zIndex: 4,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "rgba(97, 97, 97, 0.29)",
  borderTopColor: "rgb(100,100,100)",
  animation: `${ap} 0.7s linear infinite`,
  mixBlendMode: "difference"
}));
var ip = xr.div({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%"
});
var X6 = xr.div(({ theme: e4 }) => ({
  position: "relative",
  width: "80%",
  marginBottom: "0.75rem",
  maxWidth: 300,
  height: 5,
  borderRadius: 5,
  background: we2(0.8, e4.color.secondary),
  overflow: "hidden",
  cursor: "progress"
}));
var Y6 = xr.div(({ theme: e4 }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  background: e4.color.secondary
}));
var lp = xr.div(({ theme: e4 }) => ({
  minHeight: "2em",
  fontSize: `${e4.typography.size.s1}px`,
  color: e4.textMutedColor
}));
var Z6 = xr(q5)(({ theme: e4 }) => ({
  width: 20,
  height: 20,
  marginBottom: "0.5rem",
  color: e4.textMutedColor
}));
var K6 = Ee`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`;
var J6 = xr.span({
  "&::after": {
    content: "'...'",
    animation: `${K6} 1s linear infinite`,
    animationDelay: "1s",
    display: "inline-block",
    width: "1em",
    height: "auto"
  }
});
var Q6 = o2(({ progress: e4, error: t, size: r, ...n }) => {
  if (t)
    return import_react49.default.createElement(ip, { "aria-label": t.toString(), "aria-live": "polite", role: "status", ...n }, import_react49.default.createElement(Z6, null), import_react49.default.createElement(lp, null, t.message));
  if (e4) {
    let { value: a, modules: i } = e4, { message: c } = e4;
    return i && (c += ` ${i.complete} / ${i.total} modules`), import_react49.default.createElement(
      ip,
      {
        "aria-label": "Content is loading...",
        "aria-live": "polite",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": a * 100,
        "aria-valuetext": c,
        role: "progressbar",
        ...n
      },
      import_react49.default.createElement(X6, null, import_react49.default.createElement(Y6, { style: { width: `${a * 100}%` } })),
      import_react49.default.createElement(lp, null, c, a < 1 && import_react49.default.createElement(J6, { key: c }))
    );
  }
  return import_react49.default.createElement(
    G6,
    {
      "aria-label": "Content is loading...",
      "aria-live": "polite",
      role: "status",
      size: r,
      ...n
    }
  );
}, "Loader");
var Rl = "http://www.w3.org/2000/svg";
var tw = Ee({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var cp = xr.div(({ size: e4 }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  minWidth: e4,
  minHeight: e4
}));
var yl = xr.svg(
  ({ size: e4, width: t }) => ({
    position: "absolute",
    width: `${e4}px!important`,
    height: `${e4}px!important`,
    transform: "rotate(-90deg)",
    circle: {
      r: (e4 - Math.ceil(t)) / 2,
      cx: e4 / 2,
      cy: e4 / 2,
      opacity: 0.15,
      fill: "transparent",
      stroke: "currentColor",
      strokeWidth: t,
      strokeLinecap: "round",
      strokeDasharray: Math.PI * (e4 - Math.ceil(t))
    }
  }),
  ({ progress: e4 }) => e4 && {
    circle: {
      opacity: 0.75
    }
  },
  ({ spinner: e4 }) => e4 && {
    animation: `${tw} 1s linear infinite`,
    circle: {
      opacity: 0.25
    }
  }
);
var rw = o2(({
  percentage: e4 = void 0,
  running: t = true,
  size: r = 24,
  width: n = 1.5,
  children: a = null,
  ...i
}) => typeof e4 == "number" ? import_react50.default.createElement(cp, { size: r, ...i }, a, import_react50.default.createElement(yl, {
  size: r,
  width: n,
  xmlns: Rl
}, import_react50.default.createElement("circle", null)), t && import_react50.default.createElement(
  yl,
  { size: r, width: n, xmlns: Rl, spinner: true },
  import_react50.default.createElement("circle", { strokeDashoffset: Math.PI * (r - Math.ceil(n)) * (1 - e4 / 100) })
), import_react50.default.createElement(
  yl,
  { size: r, width: n, xmlns: Rl, progress: true },
  import_react50.default.createElement("circle", { strokeDashoffset: Math.PI * (r - Math.ceil(
    n
  )) * (1 - e4 / 100) })
)) : import_react50.default.createElement(cp, { size: r, ...i }, a), "ProgressSpinner");
function nw(e4) {
  let t = {}, r = e4.split("&");
  for (let n = 0; n < r.length; n++) {
    let a = r[n].split("=");
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || "");
  }
  return t;
}
o2(nw, "parseQuery");
var ow = o2((e4, t, r = {}) => {
  let [n, a] = e4.split("?"), i = a ? {
    ...nw(a),
    ...r,
    id: t
  } : {
    ...r,
    id: t
  };
  return `${n}?${Object.entries(i).map((c) => `${c[0]}=${c[1]}`).join("&")}`;
}, "getStoryHref");
var cw = xr.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${h.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${W.fonts.mono};
  font-size: ${W.size.s2 - 1}px;
`;
var sw = o2(({ code: e4, ...t }) => import_react51.default.createElement(cw, { id: "clipboard-code", ...t }, e4), "ClipboardCode");
var Bk = bi;
var dw = {};
Object.keys(bi).forEach((e4) => {
  dw[e4] = (0, import_react10.forwardRef)((t, r) => (0, import_react10.createElement)(e4, { ...t, ref: r }));
});

export {
  require_client_logger,
  St,
  Tt,
  xr,
  Me,
  Ir,
  pf,
  hf,
  Va2 as Va,
  Rr,
  Ja2 as Ja,
  J2 as J,
  at,
  N2 as N,
  jl,
  Jo,
  Qo,
  ei,
  ti,
  ri,
  ni,
  oi,
  ai,
  ii,
  li,
  ci,
  si,
  ui,
  fi,
  di,
  pi,
  mi,
  hi,
  gi,
  vi,
  wi,
  Uh,
  yi,
  Jh,
  ru,
  Ir2,
  bo2 as bo,
  Dv,
  jv,
  Xv,
  a7,
  m7,
  w7,
  N7,
  O3,
  N3,
  j3,
  G3,
  il,
  ll,
  ul,
  No,
  ar,
  _o,
  gl,
  P6,
  vl,
  ml,
  bl,
  B6,
  V6,
  j6,
  W6,
  Q6,
  rw,
  ow,
  sw,
  Bk,
  dw
};
//# sourceMappingURL=chunk-CJYZD4FX.js.map
