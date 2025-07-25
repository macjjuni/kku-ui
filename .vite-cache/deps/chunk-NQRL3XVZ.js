import {
  AddIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronSmallDownIcon,
  ChevronSmallUpIcon,
  DocumentIcon,
  EyeCloseIcon,
  EyeIcon,
  LinkIcon,
  SubtractIcon,
  UndoIcon,
  ZoomIcon,
  ZoomOutIcon,
  ZoomResetIcon,
  __commonJS as __commonJS2,
  __require,
  __toESM as __toESM2,
  cloneDeep,
  getControlId,
  getControlSetterButtonId,
  pickBy,
  uniq2
} from "./chunk-43ZR6AGK.js";
import {
  Bk,
  Ir,
  Ir2,
  J,
  Me,
  N,
  N3,
  N7,
  No,
  Q6,
  St,
  Tt,
  Va,
  _o,
  a7,
  ai,
  at,
  bo,
  ei,
  hf,
  jl,
  m7,
  ml,
  oi,
  ow,
  pf,
  require_client_logger,
  ru,
  xr,
  yi
} from "./chunk-CJYZD4FX.js";
import {
  z
} from "./chunk-ATNKIQLT.js";
import {
  require_core_events
} from "./chunk-63M3JCJZ.js";
import {
  require_preview_errors
} from "./chunk-2JLXYUFI.js";
import {
  require_preview_api
} from "./chunk-PQCDBPLA.js";
import {
  require_react
} from "./chunk-ZFVCUJ6Q.js";
import {
  __commonJS,
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/.cache/sb-vite-plugin-externals/storybook/internal/channels.js
var require_channels = __commonJS({
  "node_modules/.cache/sb-vite-plugin-externals/storybook/internal/channels.js"(exports, module) {
    module.exports = __STORYBOOK_MODULE_CHANNELS__;
  }
});

// node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@19.1.8_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs
var React20 = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
var import_client_logger = __toESM(require_client_logger(), 1);
var import_core_events = __toESM(require_core_events(), 1);
var import_preview_api = __toESM(require_preview_api(), 1);

// node_modules/.pnpm/storybook@9.0.15_@testing-library+dom@10.4.0/node_modules/storybook/dist/docs-tools/index.js
var import_preview_errors = __toESM(require_preview_errors());
var import_preview_errors2 = __toESM(require_preview_errors());
var dr = Object.create;
var Ie = Object.defineProperty;
var Tr = Object.getOwnPropertyDescriptor;
var gr = Object.getOwnPropertyNames;
var xr2 = Object.getPrototypeOf;
var hr = Object.prototype.hasOwnProperty;
var r = (n2, s2) => Ie(n2, "name", { value: s2, configurable: true });
var Jr = (n2, s2) => () => (s2 || n2((s2 = { exports: {} }).exports, s2), s2.exports);
var wr = (n2, s2, a2, p2) => {
  if (s2 && typeof s2 == "object" || typeof s2 == "function")
    for (let c2 of gr(s2))
      !hr.call(n2, c2) && c2 !== a2 && Ie(n2, c2, { get: () => s2[c2], enumerable: !(p2 = Tr(s2, c2)) || p2.enumerable });
  return n2;
};
var Pr = (n2, s2, a2) => (a2 = n2 != null ? dr(xr2(n2)) : {}, wr(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  s2 || !n2 || !n2.__esModule ? Ie(a2, "default", { value: n2, enumerable: true }) : a2,
  n2
));
var dt = Jr((fe2, yt) => {
  (function(n2, s2) {
    typeof fe2 == "object" && typeof yt < "u" ? s2(fe2) : typeof define == "function" && define.amd ? define(["exports"], s2) : (n2 = typeof globalThis < "u" ? globalThis : n2 || self, s2(n2.jtpp = {}));
  })(fe2, function(n2) {
    "use strict";
    function s2(e) {
      return e.text !== void 0 && e.text !== "" ? `'${e.type}' with value '${e.text}'` : `'${e.type}'`;
    }
    r(s2, "tokenToString");
    let ne2 = class ne3 extends Error {
      constructor(t2) {
        super(`No parslet found for token: ${s2(t2)}`), this.token = t2, Object.setPrototypeOf(this, ne3.prototype);
      }
      getToken() {
        return this.token;
      }
    };
    r(ne2, "NoParsletFoundError");
    let a2 = ne2, oe2 = class oe3 extends Error {
      constructor(t2) {
        super(`The parsing ended early. The next token was: ${s2(t2)}`), this.token = t2, Object.setPrototypeOf(this, oe3.prototype);
      }
      getToken() {
        return this.token;
      }
    };
    r(oe2, "EarlyEndOfParseError");
    let p2 = oe2, se2 = class se3 extends Error {
      constructor(t2, o2) {
        let i2 = `Unexpected type: '${t2.type}'.`;
        o2 !== void 0 && (i2 += ` Message: ${o2}`), super(i2), Object.setPrototypeOf(this, se3.prototype);
      }
    };
    r(se2, "UnexpectedTypeError");
    let c2 = se2;
    function u2(e) {
      return (t2) => t2.startsWith(e) ? { type: e, text: e } : null;
    }
    r(u2, "makePunctuationRule");
    function m2(e) {
      let t2 = 0, o2, i2 = e[0], l2 = false;
      if (i2 !== "'" && i2 !== '"')
        return null;
      for (; t2 < e.length; ) {
        if (t2++, o2 = e[t2], !l2 && o2 === i2) {
          t2++;
          break;
        }
        l2 = !l2 && o2 === "\\";
      }
      if (o2 !== i2)
        throw new Error("Unterminated String");
      return e.slice(0, t2);
    }
    r(m2, "getQuoted");
    let T2 = new RegExp("[$_\\p{ID_Start}]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}", "u"), g2 = new RegExp(
      "[$\\-\\p{ID_Continue}\\u200C\\u200D]|\\\\u\\p{Hex_Digit}{4}|\\\\u\\{0*(?:\\p{Hex_Digit}{1,5}|10\\p{Hex_Digit}{4})\\}",
      "u"
    );
    function P2(e) {
      let t2 = e[0];
      if (!T2.test(t2))
        return null;
      let o2 = 1;
      do {
        if (t2 = e[o2], !g2.test(t2))
          break;
        o2++;
      } while (o2 < e.length);
      return e.slice(0, o2);
    }
    r(P2, "getIdentifier");
    let b2 = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;
    function de2(e) {
      var t2, o2;
      return (o2 = (t2 = b2.exec(e)) === null || t2 === void 0 ? void 0 : t2[0]) !== null && o2 !== void 0 ? o2 : null;
    }
    r(de2, "getNumber");
    let q2 = r((e) => {
      let t2 = P2(e);
      return t2 == null ? null : {
        type: "Identifier",
        text: t2
      };
    }, "identifierRule");
    function S2(e) {
      return (t2) => {
        if (!t2.startsWith(e))
          return null;
        let o2 = t2[e.length];
        return o2 !== void 0 && g2.test(o2) ? null : {
          type: e,
          text: e
        };
      };
    }
    r(S2, "makeKeyWordRule");
    let z3 = r((e) => {
      let t2 = m2(e);
      return t2 == null ? null : {
        type: "StringValue",
        text: t2
      };
    }, "stringValueRule"), Te2 = r((e) => e.length > 0 ? null : {
      type: "EOF",
      text: ""
    }, "eofRule"), ge2 = r((e) => {
      let t2 = de2(e);
      return t2 === null ? null : {
        type: "Number",
        text: t2
      };
    }, "numberRule"), Rt = [
      Te2,
      u2("=>"),
      u2("("),
      u2(")"),
      u2("{"),
      u2("}"),
      u2("["),
      u2("]"),
      u2("|"),
      u2("&"),
      u2("<"),
      u2(">"),
      u2(","),
      u2(";"),
      u2("*"),
      u2("?"),
      u2("!"),
      u2("="),
      u2(":"),
      u2("..."),
      u2("."),
      u2("#"),
      u2("~"),
      u2("/"),
      u2("@"),
      S2("undefined"),
      S2("null"),
      S2("function"),
      S2("this"),
      S2("new"),
      S2("module"),
      S2("event"),
      S2("external"),
      S2("typeof"),
      S2("keyof"),
      S2("readonly"),
      S2("import"),
      S2("is"),
      S2("in"),
      S2("asserts"),
      ge2,
      q2,
      z3
    ], jt = /^\s*\n\s*/, U2 = class U3 {
      static create(t2) {
        let o2 = this.read(t2);
        t2 = o2.text;
        let i2 = this.read(t2);
        return t2 = i2.text, new U3(t2, void 0, o2.token, i2.token);
      }
      constructor(t2, o2, i2, l2) {
        this.text = "", this.text = t2, this.previous = o2, this.current = i2, this.next = l2;
      }
      static read(t2, o2 = false) {
        o2 = o2 || jt.test(t2), t2 = t2.trim();
        for (let i2 of Rt) {
          let l2 = i2(t2);
          if (l2 !== null) {
            let f2 = Object.assign(Object.assign({}, l2), { startOfLine: o2 });
            return t2 = t2.slice(f2.text.length), { text: t2, token: f2 };
          }
        }
        throw new Error("Unexpected Token " + t2);
      }
      advance() {
        let t2 = U3.read(this.text);
        return new U3(t2.text, this.current, this.next, t2.token);
      }
    };
    r(U2, "Lexer");
    let xe2 = U2;
    function J3(e) {
      if (e === void 0)
        throw new Error("Unexpected undefined");
      if (e.type === "JsdocTypeKeyValue" || e.type === "JsdocTypeParameterList" || e.type === "JsdocTypeProperty" || e.type === "JsdocTypeReadonlyProperty" || e.type === "JsdocTypeObjectField" || e.type === "JsdocTypeJsdocObjectField" || e.type === "JsdocTypeIndexSignature" || e.type === "JsdocTypeMappedType")
        throw new c2(e);
      return e;
    }
    r(J3, "assertRootResult");
    function he2(e) {
      return e.type === "JsdocTypeKeyValue" ? H2(e) : J3(e);
    }
    r(he2, "assertPlainKeyValueOrRootResult");
    function Ft(e) {
      return e.type === "JsdocTypeName" ? e : H2(e);
    }
    r(Ft, "assertPlainKeyValueOrNameResult");
    function H2(e) {
      if (e.type !== "JsdocTypeKeyValue")
        throw new c2(e);
      return e;
    }
    r(H2, "assertPlainKeyValueResult");
    function _t(e) {
      var t2;
      if (e.type === "JsdocTypeVariadic") {
        if (((t2 = e.element) === null || t2 === void 0 ? void 0 : t2.type) === "JsdocTypeName")
          return e;
        throw new c2(e);
      }
      if (e.type !== "JsdocTypeNumber" && e.type !== "JsdocTypeName")
        throw new c2(e);
      return e;
    }
    r(_t, "assertNumberOrVariadicNameResult");
    function Je(e) {
      return e.type === "JsdocTypeIndexSignature" || e.type === "JsdocTypeMappedType";
    }
    r(Je, "isSquaredProperty");
    var y2;
    (function(e) {
      e[e.ALL = 0] = "ALL", e[e.PARAMETER_LIST = 1] = "PARAMETER_LIST", e[e.OBJECT = 2] = "OBJECT", e[e.KEY_VALUE = 3] = "KEY_VALUE", e[e.INDEX_BRACKETS = 4] = "INDEX_BRACKETS", e[e.UNION = 5] = "UNION", e[e.INTERSECTION = 6] = "INTERSECTION", e[e.PREFIX = 7] = "PREFIX", e[e.INFIX = 8] = "INFIX", e[e.TUPLE = 9] = "TUPLE", e[e.SYMBOL = 10] = "SYMBOL", e[e.OPTIONAL = 11] = "OPTIONAL", e[e.NULLABLE = 12] = "NULLABLE", e[e.KEY_OF_TYPE_OF = 13] = "KEY_OF_TYPE_OF", e[e.FUNCTION = 14] = "FUNCTION", e[e.ARROW = 15] = "ARROW", e[e.ARRAY_BRACKETS = 16] = "ARRAY_BRACKETS", e[e.GENERIC = 17] = "GENERIC", e[e.NAME_PATH = 18] = "NAME_PATH", e[e.PARENTHESIS = 19] = "PARENTHESIS", e[e.SPECIAL_TYPES = 20] = "SPECIAL_TYPES";
    })(y2 || (y2 = {}));
    let Ae2 = class Ae {
      constructor(t2, o2, i2) {
        this.grammar = t2, typeof o2 == "string" ? this._lexer = xe2.create(o2) : this._lexer = o2, this.baseParser = i2;
      }
      get lexer() {
        return this._lexer;
      }
      /**
       * Parses a given string and throws an error if the parse ended before the end of the string.
       */
      parse() {
        let t2 = this.parseType(y2.ALL);
        if (this.lexer.current.type !== "EOF")
          throw new p2(this.lexer.current);
        return t2;
      }
      /**
       * Parses with the current lexer and asserts that the result is a {@link RootResult}.
       */
      parseType(t2) {
        return J3(this.parseIntermediateType(t2));
      }
      /**
       * The main parsing function. First it tries to parse the current state in the prefix step, and then it continues
       * to parse the state in the infix step.
       */
      parseIntermediateType(t2) {
        let o2 = this.tryParslets(null, t2);
        if (o2 === null)
          throw new a2(this.lexer.current);
        return this.parseInfixIntermediateType(o2, t2);
      }
      /**
       * In the infix parsing step the parser continues to parse the current state with all parslets until none returns
       * a result.
       */
      parseInfixIntermediateType(t2, o2) {
        let i2 = this.tryParslets(t2, o2);
        for (; i2 !== null; )
          t2 = i2, i2 = this.tryParslets(t2, o2);
        return t2;
      }
      /**
       * Tries to parse the current state with all parslets in the grammar and returns the first non null result.
       */
      tryParslets(t2, o2) {
        for (let i2 of this.grammar) {
          let l2 = i2(this, o2, t2);
          if (l2 !== null)
            return l2;
        }
        return null;
      }
      /**
       * If the given type equals the current type of the {@link Lexer} advance the lexer. Return true if the lexer was
       * advanced.
       */
      consume(t2) {
        return Array.isArray(t2) || (t2 = [t2]), t2.includes(this.lexer.current.type) ? (this._lexer = this.lexer.advance(), true) : false;
      }
      acceptLexerState(t2) {
        this._lexer = t2.lexer;
      }
    };
    r(Ae2, "Parser");
    let I2 = Ae2;
    function Ye(e) {
      return e === "EOF" || e === "|" || e === "," || e === ")" || e === ">";
    }
    r(Ye, "isQuestionMarkUnknownType");
    let we2 = r((e, t2, o2) => {
      let i2 = e.lexer.current.type, l2 = e.lexer.next.type;
      return o2 == null && i2 === "?" && !Ye(l2) || o2 != null && i2 === "?" ? (e.consume("?"), o2 == null ? {
        type: "JsdocTypeNullable",
        element: e.parseType(y2.NULLABLE),
        meta: {
          position: "prefix"
        }
      } : {
        type: "JsdocTypeNullable",
        element: J3(o2),
        meta: {
          position: "suffix"
        }
      }) : null;
    }, "nullableParslet");
    function x2(e) {
      let t2 = r((o2, i2, l2) => {
        let f2 = o2.lexer.current.type, d2 = o2.lexer.next.type;
        if (l2 === null) {
          if ("parsePrefix" in e && e.accept(f2, d2))
            return e.parsePrefix(o2);
        } else if ("parseInfix" in e && e.precedence > i2 && e.accept(f2, d2))
          return e.parseInfix(o2, l2);
        return null;
      }, "parslet");
      return Object.defineProperty(t2, "name", {
        value: e.name
      }), t2;
    }
    r(x2, "composeParslet");
    let Q2 = x2({
      name: "optionalParslet",
      accept: r((e) => e === "=", "accept"),
      precedence: y2.OPTIONAL,
      parsePrefix: r((e) => (e.consume("="), {
        type: "JsdocTypeOptional",
        element: e.parseType(y2.OPTIONAL),
        meta: {
          position: "prefix"
        }
      }), "parsePrefix"),
      parseInfix: r((e, t2) => (e.consume("="), {
        type: "JsdocTypeOptional",
        element: J3(t2),
        meta: {
          position: "suffix"
        }
      }), "parseInfix")
    }), Z2 = x2({
      name: "numberParslet",
      accept: r((e) => e === "Number", "accept"),
      parsePrefix: r((e) => {
        let t2 = parseFloat(e.lexer.current.text);
        return e.consume("Number"), {
          type: "JsdocTypeNumber",
          value: t2
        };
      }, "parsePrefix")
    }), Vt = x2({
      name: "parenthesisParslet",
      accept: r((e) => e === "(", "accept"),
      parsePrefix: r((e) => {
        if (e.consume("("), e.consume(")"))
          return {
            type: "JsdocTypeParameterList",
            elements: []
          };
        let t2 = e.parseIntermediateType(y2.ALL);
        if (!e.consume(")"))
          throw new Error("Unterminated parenthesis");
        return t2.type === "JsdocTypeParameterList" ? t2 : t2.type === "JsdocTypeKeyValue" ? {
          type: "JsdocTypeParameterList",
          elements: [t2]
        } : {
          type: "JsdocTypeParenthesis",
          element: J3(t2)
        };
      }, "parsePrefix")
    }), Lt = x2({
      name: "specialTypesParslet",
      accept: r((e, t2) => e === "?" && Ye(t2) || e === "null" || e === "undefined" || e === "*", "accept"),
      parsePrefix: r((e) => {
        if (e.consume("null"))
          return {
            type: "JsdocTypeNull"
          };
        if (e.consume("undefined"))
          return {
            type: "JsdocTypeUndefined"
          };
        if (e.consume("*"))
          return {
            type: "JsdocTypeAny"
          };
        if (e.consume("?"))
          return {
            type: "JsdocTypeUnknown"
          };
        throw new Error("Unacceptable token: " + e.lexer.current.text);
      }, "parsePrefix")
    }), Ut = x2({
      name: "notNullableParslet",
      accept: r((e) => e === "!", "accept"),
      precedence: y2.NULLABLE,
      parsePrefix: r((e) => (e.consume("!"), {
        type: "JsdocTypeNotNullable",
        element: e.parseType(y2.NULLABLE),
        meta: {
          position: "prefix"
        }
      }), "parsePrefix"),
      parseInfix: r((e, t2) => (e.consume("!"), {
        type: "JsdocTypeNotNullable",
        element: J3(t2),
        meta: {
          position: "suffix"
        }
      }), "parseInfix")
    });
    function Bt({ allowTrailingComma: e }) {
      return x2({
        name: "parameterListParslet",
        accept: r((t2) => t2 === ",", "accept"),
        precedence: y2.PARAMETER_LIST,
        parseInfix: r((t2, o2) => {
          let i2 = [
            he2(o2)
          ];
          t2.consume(",");
          do
            try {
              let l2 = t2.parseIntermediateType(y2.PARAMETER_LIST);
              i2.push(he2(l2));
            } catch (l2) {
              if (e && l2 instanceof a2)
                break;
              throw l2;
            }
          while (t2.consume(","));
          if (i2.length > 0 && i2.slice(0, -1).some((l2) => l2.type === "JsdocTypeVariadic"))
            throw new Error("Only the last parameter may be a rest parameter");
          return {
            type: "JsdocTypeParameterList",
            elements: i2
          };
        }, "parseInfix")
      });
    }
    r(Bt, "createParameterListParslet");
    let Ct = x2({
      name: "genericParslet",
      accept: r((e, t2) => e === "<" || e === "." && t2 === "<", "accept"),
      precedence: y2.GENERIC,
      parseInfix: r((e, t2) => {
        let o2 = e.consume(".");
        e.consume("<");
        let i2 = [];
        do
          i2.push(e.parseType(y2.PARAMETER_LIST));
        while (e.consume(","));
        if (!e.consume(">"))
          throw new Error("Unterminated generic parameter list");
        return {
          type: "JsdocTypeGeneric",
          left: J3(t2),
          elements: i2,
          meta: {
            brackets: "angle",
            dot: o2
          }
        };
      }, "parseInfix")
    }), Mt = x2({
      name: "unionParslet",
      accept: r((e) => e === "|", "accept"),
      precedence: y2.UNION,
      parseInfix: r((e, t2) => {
        e.consume("|");
        let o2 = [];
        do
          o2.push(e.parseType(y2.UNION));
        while (e.consume("|"));
        return {
          type: "JsdocTypeUnion",
          elements: [J3(t2), ...o2]
        };
      }, "parseInfix")
    }), Pe2 = [
      we2,
      Q2,
      Z2,
      Vt,
      Lt,
      Ut,
      Bt({
        allowTrailingComma: true
      }),
      Ct,
      Mt,
      Q2
    ];
    function ee2({ allowSquareBracketsOnAnyType: e, allowJsdocNamePaths: t2, pathGrammar: o2 }) {
      return r(function(l2, f2, d2) {
        if (d2 == null || f2 >= y2.NAME_PATH)
          return null;
        let h2 = l2.lexer.current.type, D2 = l2.lexer.next.type;
        if (!(h2 === "." && D2 !== "<" || h2 === "[" && (e || d2.type === "JsdocTypeName") || t2 && (h2 === "~" || h2 === "#")))
          return null;
        let O2, ae2 = false;
        l2.consume(".") ? O2 = "property" : l2.consume("[") ? (O2 = "property-brackets", ae2 = true) : l2.consume("~") ? O2 = "inner" : (l2.consume("#"), O2 = "instance");
        let rt = o2 !== null ? new I2(o2, l2.lexer, l2) : l2, k2 = rt.parseIntermediateType(y2.NAME_PATH);
        l2.acceptLexerState(rt);
        let G2;
        switch (k2.type) {
          case "JsdocTypeName":
            G2 = {
              type: "JsdocTypeProperty",
              value: k2.value,
              meta: {
                quote: void 0
              }
            };
            break;
          case "JsdocTypeNumber":
            G2 = {
              type: "JsdocTypeProperty",
              value: k2.value.toString(10),
              meta: {
                quote: void 0
              }
            };
            break;
          case "JsdocTypeStringValue":
            G2 = {
              type: "JsdocTypeProperty",
              value: k2.value,
              meta: {
                quote: k2.meta.quote
              }
            };
            break;
          case "JsdocTypeSpecialNamePath":
            if (k2.specialType === "event")
              G2 = k2;
            else
              throw new c2(k2, "Type 'JsdocTypeSpecialNamePath' is only allowed with specialType 'event'");
            break;
          default:
            throw new c2(k2, "Expecting 'JsdocTypeName', 'JsdocTypeNumber', 'JsdocStringValue' or 'JsdocTypeSpecialNamePath'");
        }
        if (ae2 && !l2.consume("]")) {
          let nt = l2.lexer.current;
          throw new Error(`Unterminated square brackets. Next token is '${nt.type}' with text '${nt.text}'`);
        }
        return {
          type: "JsdocTypeNamePath",
          left: J3(d2),
          right: G2,
          pathType: O2
        };
      }, "namePathParslet");
    }
    r(ee2, "createNamePathParslet");
    function R2({ allowedAdditionalTokens: e }) {
      return x2({
        name: "nameParslet",
        accept: r((t2) => t2 === "Identifier" || t2 === "this" || t2 === "new" || e.includes(t2), "accept"),
        parsePrefix: r((t2) => {
          let { type: o2, text: i2 } = t2.lexer.current;
          return t2.consume(o2), {
            type: "JsdocTypeName",
            value: i2
          };
        }, "parsePrefix")
      });
    }
    r(R2, "createNameParslet");
    let Y2 = x2({
      name: "stringValueParslet",
      accept: r((e) => e === "StringValue", "accept"),
      parsePrefix: r((e) => {
        let t2 = e.lexer.current.text;
        return e.consume("StringValue"), {
          type: "JsdocTypeStringValue",
          value: t2.slice(1, -1),
          meta: {
            quote: t2[0] === "'" ? "single" : "double"
          }
        };
      }, "parsePrefix")
    });
    function te2({ pathGrammar: e, allowedTypes: t2 }) {
      return x2({
        name: "specialNamePathParslet",
        accept: r((o2) => t2.includes(o2), "accept"),
        parsePrefix: r((o2) => {
          let i2 = o2.lexer.current.type;
          if (o2.consume(i2), !o2.consume(":"))
            return {
              type: "JsdocTypeName",
              value: i2
            };
          let l2, f2 = o2.lexer.current;
          if (o2.consume("StringValue"))
            l2 = {
              type: "JsdocTypeSpecialNamePath",
              value: f2.text.slice(1, -1),
              specialType: i2,
              meta: {
                quote: f2.text[0] === "'" ? "single" : "double"
              }
            };
          else {
            let D2 = "", E2 = ["Identifier", "@", "/"];
            for (; E2.some((O2) => o2.consume(O2)); )
              D2 += f2.text, f2 = o2.lexer.current;
            l2 = {
              type: "JsdocTypeSpecialNamePath",
              value: D2,
              specialType: i2,
              meta: {
                quote: void 0
              }
            };
          }
          let d2 = new I2(e, o2.lexer, o2), h2 = d2.parseInfixIntermediateType(l2, y2.ALL);
          return o2.acceptLexerState(d2), J3(h2);
        }, "parsePrefix")
      });
    }
    r(te2, "createSpecialNamePathParslet");
    let We2 = [
      R2({
        allowedAdditionalTokens: ["external", "module"]
      }),
      Y2,
      Z2,
      ee2({
        allowSquareBracketsOnAnyType: false,
        allowJsdocNamePaths: true,
        pathGrammar: null
      })
    ], L2 = [
      ...We2,
      te2({
        allowedTypes: ["event"],
        pathGrammar: We2
      })
    ];
    function be2(e) {
      let t2;
      if (e.type === "JsdocTypeParameterList")
        t2 = e.elements;
      else if (e.type === "JsdocTypeParenthesis")
        t2 = [e.element];
      else
        throw new c2(e);
      return t2.map((o2) => he2(o2));
    }
    r(be2, "getParameters");
    function Kt(e) {
      let t2 = be2(e);
      if (t2.some((o2) => o2.type === "JsdocTypeKeyValue"))
        throw new Error("No parameter should be named");
      return t2;
    }
    r(Kt, "getUnnamedParameters");
    function Se2({ allowNamedParameters: e, allowNoReturnType: t2, allowWithoutParenthesis: o2, allowNewAsFunctionKeyword: i2 }) {
      return x2({
        name: "functionParslet",
        accept: r((l2, f2) => l2 === "function" || i2 && l2 === "new" && f2 === "(", "accept"),
        parsePrefix: r((l2) => {
          let f2 = l2.consume("new");
          l2.consume("function");
          let d2 = l2.lexer.current.type === "(";
          if (!d2) {
            if (!o2)
              throw new Error("function is missing parameter list");
            return {
              type: "JsdocTypeName",
              value: "function"
            };
          }
          let h2 = {
            type: "JsdocTypeFunction",
            parameters: [],
            arrow: false,
            constructor: f2,
            parenthesis: d2
          }, D2 = l2.parseIntermediateType(y2.FUNCTION);
          if (e === void 0)
            h2.parameters = Kt(D2);
          else {
            if (f2 && D2.type === "JsdocTypeFunction" && D2.arrow)
              return h2 = D2, h2.constructor = true, h2;
            h2.parameters = be2(D2);
            for (let E2 of h2.parameters)
              if (E2.type === "JsdocTypeKeyValue" && !e.includes(E2.key))
                throw new Error(`only allowed named parameters are ${e.join(", ")} but got ${E2.type}`);
          }
          if (l2.consume(":"))
            h2.returnType = l2.parseType(y2.PREFIX);
          else if (!t2)
            throw new Error("function is missing return type");
          return h2;
        }, "parsePrefix")
      });
    }
    r(Se2, "createFunctionParslet");
    function Ee2({ allowPostfix: e, allowEnclosingBrackets: t2 }) {
      return x2({
        name: "variadicParslet",
        accept: r((o2) => o2 === "...", "accept"),
        precedence: y2.PREFIX,
        parsePrefix: r((o2) => {
          o2.consume("...");
          let i2 = t2 && o2.consume("[");
          try {
            let l2 = o2.parseType(y2.PREFIX);
            if (i2 && !o2.consume("]"))
              throw new Error("Unterminated variadic type. Missing ']'");
            return {
              type: "JsdocTypeVariadic",
              element: J3(l2),
              meta: {
                position: "prefix",
                squareBrackets: i2
              }
            };
          } catch (l2) {
            if (l2 instanceof a2) {
              if (i2)
                throw new Error("Empty square brackets for variadic are not allowed.");
              return {
                type: "JsdocTypeVariadic",
                meta: {
                  position: void 0,
                  squareBrackets: false
                }
              };
            } else
              throw l2;
          }
        }, "parsePrefix"),
        parseInfix: e ? (o2, i2) => (o2.consume("..."), {
          type: "JsdocTypeVariadic",
          element: J3(i2),
          meta: {
            position: "suffix",
            squareBrackets: false
          }
        }) : void 0
      });
    }
    r(Ee2, "createVariadicParslet");
    let Ge2 = x2({
      name: "symbolParslet",
      accept: r((e) => e === "(", "accept"),
      precedence: y2.SYMBOL,
      parseInfix: r((e, t2) => {
        if (t2.type !== "JsdocTypeName")
          throw new Error("Symbol expects a name on the left side. (Reacting on '(')");
        e.consume("(");
        let o2 = {
          type: "JsdocTypeSymbol",
          value: t2.value
        };
        if (!e.consume(")")) {
          let i2 = e.parseIntermediateType(y2.SYMBOL);
          if (o2.element = _t(i2), !e.consume(")"))
            throw new Error("Symbol does not end after value");
        }
        return o2;
      }, "parseInfix")
    }), Xe2 = x2({
      name: "arrayBracketsParslet",
      precedence: y2.ARRAY_BRACKETS,
      accept: r((e, t2) => e === "[" && t2 === "]", "accept"),
      parseInfix: r((e, t2) => (e.consume("["), e.consume("]"), {
        type: "JsdocTypeGeneric",
        left: {
          type: "JsdocTypeName",
          value: "Array"
        },
        elements: [
          J3(t2)
        ],
        meta: {
          brackets: "square",
          dot: false
        }
      }), "parseInfix")
    });
    function Ne2({ objectFieldGrammar: e, allowKeyTypes: t2 }) {
      return x2({
        name: "objectParslet",
        accept: r((o2) => o2 === "{", "accept"),
        parsePrefix: r((o2) => {
          o2.consume("{");
          let i2 = {
            type: "JsdocTypeObject",
            meta: {
              separator: "comma"
            },
            elements: []
          };
          if (!o2.consume("}")) {
            let l2, f2 = new I2(e, o2.lexer, o2);
            for (; ; ) {
              f2.acceptLexerState(o2);
              let d2 = f2.parseIntermediateType(y2.OBJECT);
              o2.acceptLexerState(f2), d2 === void 0 && t2 && (d2 = o2.parseIntermediateType(y2.OBJECT));
              let h2 = false;
              if (d2.type === "JsdocTypeNullable" && (h2 = true, d2 = d2.element), d2.type === "JsdocTypeNumber" || d2.type === "JsdocTypeName" || d2.type === "JsdocTypeStringValue") {
                let E2;
                d2.type === "JsdocTypeStringValue" && (E2 = d2.meta.quote), i2.elements.push({
                  type: "JsdocTypeObjectField",
                  key: d2.value.toString(),
                  right: void 0,
                  optional: h2,
                  readonly: false,
                  meta: {
                    quote: E2
                  }
                });
              } else if (d2.type === "JsdocTypeObjectField" || d2.type === "JsdocTypeJsdocObjectField")
                i2.elements.push(d2);
              else
                throw new c2(d2);
              if (o2.lexer.current.startOfLine)
                l2 = "linebreak";
              else if (o2.consume(","))
                l2 = "comma";
              else if (o2.consume(";"))
                l2 = "semicolon";
              else
                break;
              if (o2.lexer.current.type === "}")
                break;
            }
            if (i2.meta.separator = l2 ?? "comma", !o2.consume("}"))
              throw new Error("Unterminated record type. Missing '}'");
          }
          return i2;
        }, "parsePrefix")
      });
    }
    r(Ne2, "createObjectParslet");
    function De2({ allowSquaredProperties: e, allowKeyTypes: t2, allowReadonly: o2, allowOptional: i2 }) {
      return x2({
        name: "objectFieldParslet",
        precedence: y2.KEY_VALUE,
        accept: r((l2) => l2 === ":", "accept"),
        parseInfix: r((l2, f2) => {
          var d2;
          let h2 = false, D2 = false;
          i2 && f2.type === "JsdocTypeNullable" && (h2 = true, f2 = f2.element), o2 && f2.type === "JsdocTypeReadonlyProperty" && (D2 = true, f2 = f2.element);
          let E2 = (d2 = l2.baseParser) !== null && d2 !== void 0 ? d2 : l2;
          if (E2.acceptLexerState(l2), f2.type === "JsdocTypeNumber" || f2.type === "JsdocTypeName" || f2.type === "JsdocTypeStringValue" || Je(f2)) {
            if (Je(f2) && !e)
              throw new c2(f2);
            E2.consume(":");
            let O2;
            f2.type === "JsdocTypeStringValue" && (O2 = f2.meta.quote);
            let ae2 = E2.parseType(y2.KEY_VALUE);
            return l2.acceptLexerState(E2), {
              type: "JsdocTypeObjectField",
              key: Je(f2) ? f2 : f2.value.toString(),
              right: ae2,
              optional: h2,
              readonly: D2,
              meta: {
                quote: O2
              }
            };
          } else {
            if (!t2)
              throw new c2(f2);
            E2.consume(":");
            let O2 = E2.parseType(y2.KEY_VALUE);
            return l2.acceptLexerState(E2), {
              type: "JsdocTypeJsdocObjectField",
              left: J3(f2),
              right: O2
            };
          }
        }, "parseInfix")
      });
    }
    r(De2, "createObjectFieldParslet");
    function Oe2({ allowOptional: e, allowVariadic: t2 }) {
      return x2({
        name: "keyValueParslet",
        precedence: y2.KEY_VALUE,
        accept: r((o2) => o2 === ":", "accept"),
        parseInfix: r((o2, i2) => {
          let l2 = false, f2 = false;
          if (e && i2.type === "JsdocTypeNullable" && (l2 = true, i2 = i2.element), t2 && i2.type === "JsdocTypeVariadic" && i2.element !== void 0 && (f2 = true, i2 = i2.element), i2.type !== "JsdocTypeName")
            throw new c2(i2);
          o2.consume(":");
          let d2 = o2.parseType(y2.KEY_VALUE);
          return {
            type: "JsdocTypeKeyValue",
            key: i2.value,
            right: d2,
            optional: l2,
            variadic: f2
          };
        }, "parseInfix")
      });
    }
    r(Oe2, "createKeyValueParslet");
    let ze2 = [
      ...Pe2,
      Se2({
        allowWithoutParenthesis: true,
        allowNamedParameters: ["this", "new"],
        allowNoReturnType: true,
        allowNewAsFunctionKeyword: false
      }),
      Y2,
      te2({
        allowedTypes: ["module", "external", "event"],
        pathGrammar: L2
      }),
      Ee2({
        allowEnclosingBrackets: true,
        allowPostfix: true
      }),
      R2({
        allowedAdditionalTokens: ["keyof"]
      }),
      Ge2,
      Xe2,
      ee2({
        allowSquareBracketsOnAnyType: false,
        allowJsdocNamePaths: true,
        pathGrammar: L2
      })
    ], $t = [
      ...ze2,
      Ne2({
        // jsdoc syntax allows full types as keys, so we need to pull in the full grammar here
        // we leave out the object type deliberately
        objectFieldGrammar: [
          R2({
            allowedAdditionalTokens: ["module", "in"]
          }),
          De2({
            allowSquaredProperties: false,
            allowKeyTypes: true,
            allowOptional: false,
            allowReadonly: false
          }),
          ...ze2
        ],
        allowKeyTypes: true
      }),
      Oe2({
        allowOptional: true,
        allowVariadic: true
      })
    ], He2 = x2({
      name: "typeOfParslet",
      accept: r((e) => e === "typeof", "accept"),
      parsePrefix: r((e) => (e.consume("typeof"), {
        type: "JsdocTypeTypeof",
        element: J3(e.parseType(y2.KEY_OF_TYPE_OF))
      }), "parsePrefix")
    }), qt = [
      R2({
        allowedAdditionalTokens: ["module", "keyof", "event", "external", "in"]
      }),
      we2,
      Q2,
      Y2,
      Z2,
      De2({
        allowSquaredProperties: false,
        allowKeyTypes: false,
        allowOptional: false,
        allowReadonly: false
      })
    ], Yt = [
      ...Pe2,
      Ne2({
        allowKeyTypes: false,
        objectFieldGrammar: qt
      }),
      R2({
        allowedAdditionalTokens: ["event", "external", "in"]
      }),
      He2,
      Se2({
        allowWithoutParenthesis: false,
        allowNamedParameters: ["this", "new"],
        allowNoReturnType: true,
        allowNewAsFunctionKeyword: false
      }),
      Ee2({
        allowEnclosingBrackets: false,
        allowPostfix: false
      }),
      // additional name parslet is needed for some special cases
      R2({
        allowedAdditionalTokens: ["keyof"]
      }),
      te2({
        allowedTypes: ["module"],
        pathGrammar: L2
      }),
      ee2({
        allowSquareBracketsOnAnyType: false,
        allowJsdocNamePaths: true,
        pathGrammar: L2
      }),
      Oe2({
        allowOptional: false,
        allowVariadic: false
      }),
      Ge2
    ], Wt = x2({
      name: "assertsParslet",
      accept: r((e) => e === "asserts", "accept"),
      parsePrefix: r((e) => {
        e.consume("asserts");
        let t2 = e.parseIntermediateType(y2.SYMBOL);
        if (t2.type !== "JsdocTypeName")
          throw new c2(t2, "A typescript asserts always has to have a name on the left side.");
        return e.consume("is"), {
          type: "JsdocTypeAsserts",
          left: t2,
          right: J3(e.parseIntermediateType(y2.INFIX))
        };
      }, "parsePrefix")
    });
    function Gt({ allowQuestionMark: e }) {
      return x2({
        name: "tupleParslet",
        accept: r((t2) => t2 === "[", "accept"),
        parsePrefix: r((t2) => {
          t2.consume("[");
          let o2 = {
            type: "JsdocTypeTuple",
            elements: []
          };
          if (t2.consume("]"))
            return o2;
          let i2 = t2.parseIntermediateType(y2.ALL);
          if (i2.type === "JsdocTypeParameterList" ? i2.elements[0].type === "JsdocTypeKeyValue" ? o2.elements = i2.elements.map(H2) : o2.elements = i2.elements.map(J3) : i2.type === "JsdocTypeKeyValue" ? o2.elements = [H2(i2)] : o2.elements = [J3(i2)], !t2.consume("]"))
            throw new Error("Unterminated '['");
          if (!e && o2.elements.some((l2) => l2.type === "JsdocTypeUnknown"))
            throw new Error("Question mark in tuple not allowed");
          return o2;
        }, "parsePrefix")
      });
    }
    r(Gt, "createTupleParslet");
    let Xt = x2({
      name: "keyOfParslet",
      accept: r((e) => e === "keyof", "accept"),
      parsePrefix: r((e) => (e.consume("keyof"), {
        type: "JsdocTypeKeyof",
        element: J3(e.parseType(y2.KEY_OF_TYPE_OF))
      }), "parsePrefix")
    }), zt = x2({
      name: "importParslet",
      accept: r((e) => e === "import", "accept"),
      parsePrefix: r((e) => {
        if (e.consume("import"), !e.consume("("))
          throw new Error("Missing parenthesis after import keyword");
        let t2 = e.parseType(y2.PREFIX);
        if (t2.type !== "JsdocTypeStringValue")
          throw new Error("Only string values are allowed as paths for imports");
        if (!e.consume(")"))
          throw new Error("Missing closing parenthesis after import keyword");
        return {
          type: "JsdocTypeImport",
          element: t2
        };
      }, "parsePrefix")
    }), Ht = x2({
      name: "readonlyPropertyParslet",
      accept: r((e) => e === "readonly", "accept"),
      parsePrefix: r((e) => (e.consume("readonly"), {
        type: "JsdocTypeReadonlyProperty",
        element: e.parseType(y2.KEY_VALUE)
      }), "parsePrefix")
    }), Qt = x2({
      name: "arrowFunctionParslet",
      precedence: y2.ARROW,
      accept: r((e) => e === "=>", "accept"),
      parseInfix: r((e, t2) => (e.consume("=>"), {
        type: "JsdocTypeFunction",
        parameters: be2(t2).map(Ft),
        arrow: true,
        constructor: false,
        parenthesis: true,
        returnType: e.parseType(y2.OBJECT)
      }), "parseInfix")
    }), Zt = x2({
      name: "intersectionParslet",
      accept: r((e) => e === "&", "accept"),
      precedence: y2.INTERSECTION,
      parseInfix: r((e, t2) => {
        e.consume("&");
        let o2 = [];
        do
          o2.push(e.parseType(y2.INTERSECTION));
        while (e.consume("&"));
        return {
          type: "JsdocTypeIntersection",
          elements: [J3(t2), ...o2]
        };
      }, "parseInfix")
    }), er = x2({
      name: "predicateParslet",
      precedence: y2.INFIX,
      accept: r((e) => e === "is", "accept"),
      parseInfix: r((e, t2) => {
        if (t2.type !== "JsdocTypeName")
          throw new c2(t2, "A typescript predicate always has to have a name on the left side.");
        return e.consume("is"), {
          type: "JsdocTypePredicate",
          left: t2,
          right: J3(e.parseIntermediateType(y2.INFIX))
        };
      }, "parseInfix")
    }), tr = x2({
      name: "objectSquareBracketPropertyParslet",
      accept: r((e) => e === "[", "accept"),
      parsePrefix: r((e) => {
        if (e.baseParser === void 0)
          throw new Error("Only allowed inside object grammar");
        e.consume("[");
        let t2 = e.lexer.current.text;
        e.consume("Identifier");
        let o2;
        if (e.consume(":")) {
          let i2 = e.baseParser;
          i2.acceptLexerState(e), o2 = {
            type: "JsdocTypeIndexSignature",
            key: t2,
            right: i2.parseType(y2.INDEX_BRACKETS)
          }, e.acceptLexerState(i2);
        } else if (e.consume("in")) {
          let i2 = e.baseParser;
          i2.acceptLexerState(e), o2 = {
            type: "JsdocTypeMappedType",
            key: t2,
            right: i2.parseType(y2.ARRAY_BRACKETS)
          }, e.acceptLexerState(i2);
        } else
          throw new Error("Missing ':' or 'in' inside square bracketed property.");
        if (!e.consume("]"))
          throw new Error("Unterminated square brackets");
        return o2;
      }, "parsePrefix")
    }), rr = [
      Ht,
      R2({
        allowedAdditionalTokens: ["module", "event", "keyof", "event", "external", "in"]
      }),
      we2,
      Q2,
      Y2,
      Z2,
      De2({
        allowSquaredProperties: true,
        allowKeyTypes: false,
        allowOptional: true,
        allowReadonly: true
      }),
      tr
    ], nr = [
      ...Pe2,
      Ne2({
        allowKeyTypes: false,
        objectFieldGrammar: rr
      }),
      He2,
      Xt,
      zt,
      Y2,
      Se2({
        allowWithoutParenthesis: true,
        allowNoReturnType: false,
        allowNamedParameters: ["this", "new", "args"],
        allowNewAsFunctionKeyword: true
      }),
      Gt({
        allowQuestionMark: false
      }),
      Ee2({
        allowEnclosingBrackets: false,
        allowPostfix: false
      }),
      Wt,
      R2({
        allowedAdditionalTokens: ["event", "external", "in"]
      }),
      te2({
        allowedTypes: ["module"],
        pathGrammar: L2
      }),
      Xe2,
      Qt,
      ee2({
        allowSquareBracketsOnAnyType: true,
        allowJsdocNamePaths: false,
        pathGrammar: L2
      }),
      Zt,
      er,
      Oe2({
        allowVariadic: true,
        allowOptional: true
      })
    ];
    function Qe2(e, t2) {
      switch (t2) {
        case "closure":
          return new I2(Yt, e).parse();
        case "jsdoc":
          return new I2($t, e).parse();
        case "typescript":
          return new I2(nr, e).parse();
      }
    }
    r(Qe2, "parse");
    function or(e, t2 = ["typescript", "closure", "jsdoc"]) {
      let o2;
      for (let i2 of t2)
        try {
          return Qe2(e, i2);
        } catch (l2) {
          o2 = l2;
        }
      throw o2;
    }
    r(or, "tryParse");
    function W2(e, t2) {
      let o2 = e[t2.type];
      if (o2 === void 0)
        throw new Error(`In this set of transform rules exists no rule for type ${t2.type}.`);
      return o2(t2, (i2) => W2(e, i2));
    }
    r(W2, "transform");
    function N4(e) {
      throw new Error("This transform is not available. Are you trying the correct parsing mode?");
    }
    r(N4, "notAvailableTransform");
    function Ze2(e) {
      let t2 = {
        params: []
      };
      for (let o2 of e.parameters)
        o2.type === "JsdocTypeKeyValue" ? o2.key === "this" ? t2.this = o2.right : o2.key === "new" ? t2.new = o2.right : t2.params.push(o2) : t2.params.push(o2);
      return t2;
    }
    r(Ze2, "extractSpecialParams");
    function re2(e, t2, o2) {
      return e === "prefix" ? o2 + t2 : t2 + o2;
    }
    r(re2, "applyPosition");
    function j2(e, t2) {
      switch (t2) {
        case "double":
          return `"${e}"`;
        case "single":
          return `'${e}'`;
        case void 0:
          return e;
      }
    }
    r(j2, "quote");
    function et() {
      return {
        JsdocTypeParenthesis: r((e, t2) => `(${e.element !== void 0 ? t2(e.element) : ""})`, "JsdocTypeParenthesis"),
        JsdocTypeKeyof: r((e, t2) => `keyof ${t2(e.element)}`, "JsdocTypeKeyof"),
        JsdocTypeFunction: r((e, t2) => {
          if (e.arrow) {
            if (e.returnType === void 0)
              throw new Error("Arrow function needs a return type.");
            let o2 = `(${e.parameters.map(t2).join(", ")}) => ${t2(e.returnType)}`;
            return e.constructor && (o2 = "new " + o2), o2;
          } else {
            let o2 = e.constructor ? "new" : "function";
            return e.parenthesis && (o2 += `(${e.parameters.map(t2).join(", ")})`, e.returnType !== void 0 && (o2 += `: ${t2(e.returnType)}`)), o2;
          }
        }, "JsdocTypeFunction"),
        JsdocTypeName: r((e) => e.value, "JsdocTypeName"),
        JsdocTypeTuple: r((e, t2) => `[${e.elements.map(t2).join(", ")}]`, "JsdocTypeTuple"),
        JsdocTypeVariadic: r((e, t2) => e.meta.position === void 0 ? "..." : re2(e.meta.position, t2(e.element), "..."), "JsdocTypeVariadic"),
        JsdocTypeNamePath: r((e, t2) => {
          let o2 = t2(e.left), i2 = t2(e.right);
          switch (e.pathType) {
            case "inner":
              return `${o2}~${i2}`;
            case "instance":
              return `${o2}#${i2}`;
            case "property":
              return `${o2}.${i2}`;
            case "property-brackets":
              return `${o2}[${i2}]`;
          }
        }, "JsdocTypeNamePath"),
        JsdocTypeStringValue: r((e) => j2(e.value, e.meta.quote), "JsdocTypeStringValue"),
        JsdocTypeAny: r(() => "*", "JsdocTypeAny"),
        JsdocTypeGeneric: r((e, t2) => {
          if (e.meta.brackets === "square") {
            let o2 = e.elements[0], i2 = t2(o2);
            return o2.type === "JsdocTypeUnion" || o2.type === "JsdocTypeIntersection" ? `(${i2})[]` : `${i2}[]`;
          } else
            return `${t2(e.left)}${e.meta.dot ? "." : ""}<${e.elements.map(t2).join(", ")}>`;
        }, "JsdocTypeGeneric"),
        JsdocTypeImport: r((e, t2) => `import(${t2(e.element)})`, "JsdocTypeImport"),
        JsdocTypeObjectField: r((e, t2) => {
          let o2 = "";
          return e.readonly && (o2 += "readonly "), typeof e.key == "string" ? o2 += j2(e.key, e.meta.quote) : o2 += t2(e.key), e.optional && (o2 += "?"), e.right === void 0 ? o2 : o2 + `: ${t2(e.right)}`;
        }, "JsdocTypeObjectField"),
        JsdocTypeJsdocObjectField: r((e, t2) => `${t2(e.left)}: ${t2(e.right)}`, "JsdocTypeJsdocObjectField"),
        JsdocTypeKeyValue: r((e, t2) => {
          let o2 = e.key;
          return e.optional && (o2 += "?"), e.variadic && (o2 = "..." + o2), e.right === void 0 ? o2 : o2 + `: ${t2(e.right)}`;
        }, "JsdocTypeKeyValue"),
        JsdocTypeSpecialNamePath: r((e) => `${e.specialType}:${j2(e.value, e.meta.quote)}`, "JsdocTypeSpecialNamePath"),
        JsdocTypeNotNullable: r((e, t2) => re2(e.meta.position, t2(e.element), "!"), "JsdocTypeNotNullable"),
        JsdocTypeNull: r(() => "null", "JsdocTypeNull"),
        JsdocTypeNullable: r((e, t2) => re2(e.meta.position, t2(e.element), "?"), "JsdocTypeNullable"),
        JsdocTypeNumber: r((e) => e.value.toString(), "JsdocTypeNumber"),
        JsdocTypeObject: r((e, t2) => `{${e.elements.map(t2).join((e.meta.separator === "comma" ? "," : ";") + " ")}}`, "JsdocTypeObject"),
        JsdocTypeOptional: r((e, t2) => re2(e.meta.position, t2(e.element), "="), "JsdocTypeOptional"),
        JsdocTypeSymbol: r((e, t2) => `${e.value}(${e.element !== void 0 ? t2(e.element) : ""})`, "JsdocTypeSymbol"),
        JsdocTypeTypeof: r((e, t2) => `typeof ${t2(e.element)}`, "JsdocTypeTypeof"),
        JsdocTypeUndefined: r(() => "undefined", "JsdocTypeUndefined"),
        JsdocTypeUnion: r((e, t2) => e.elements.map(t2).join(" | "), "JsdocTypeUnion"),
        JsdocTypeUnknown: r(() => "?", "JsdocTypeUnknown"),
        JsdocTypeIntersection: r((e, t2) => e.elements.map(t2).join(" & "), "JsdocTypeIntersection"),
        JsdocTypeProperty: r((e) => j2(e.value, e.meta.quote), "JsdocTypeProperty"),
        JsdocTypePredicate: r((e, t2) => `${t2(e.left)} is ${t2(e.right)}`, "JsdocTypePredicate"),
        JsdocTypeIndexSignature: r((e, t2) => `[${e.key}: ${t2(e.right)}]`, "JsdocTypeIndexSignature"),
        JsdocTypeMappedType: r((e, t2) => `[${e.key} in ${t2(e.right)}]`, "JsdocTypeMappedType"),
        JsdocTypeAsserts: r((e, t2) => `asserts ${t2(e.left)} is ${t2(e.right)}`, "JsdocTypeAsserts")
      };
    }
    r(et, "stringifyRules");
    let sr = et();
    function ar(e) {
      return W2(sr, e);
    }
    r(ar, "stringify");
    let ir = [
      "null",
      "true",
      "false",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "debugger",
      "default",
      "delete",
      "do",
      "else",
      "export",
      "extends",
      "finally",
      "for",
      "function",
      "if",
      "import",
      "in",
      "instanceof",
      "new",
      "return",
      "super",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "var",
      "void",
      "while",
      "with",
      "yield"
    ];
    function F2(e) {
      let t2 = {
        type: "NameExpression",
        name: e
      };
      return ir.includes(e) && (t2.reservedWord = true), t2;
    }
    r(F2, "makeName");
    let pr = {
      JsdocTypeOptional: r((e, t2) => {
        let o2 = t2(e.element);
        return o2.optional = true, o2;
      }, "JsdocTypeOptional"),
      JsdocTypeNullable: r((e, t2) => {
        let o2 = t2(e.element);
        return o2.nullable = true, o2;
      }, "JsdocTypeNullable"),
      JsdocTypeNotNullable: r((e, t2) => {
        let o2 = t2(e.element);
        return o2.nullable = false, o2;
      }, "JsdocTypeNotNullable"),
      JsdocTypeVariadic: r((e, t2) => {
        if (e.element === void 0)
          throw new Error("dots without value are not allowed in catharsis mode");
        let o2 = t2(e.element);
        return o2.repeatable = true, o2;
      }, "JsdocTypeVariadic"),
      JsdocTypeAny: r(() => ({
        type: "AllLiteral"
      }), "JsdocTypeAny"),
      JsdocTypeNull: r(() => ({
        type: "NullLiteral"
      }), "JsdocTypeNull"),
      JsdocTypeStringValue: r((e) => F2(j2(e.value, e.meta.quote)), "JsdocTypeStringValue"),
      JsdocTypeUndefined: r(() => ({
        type: "UndefinedLiteral"
      }), "JsdocTypeUndefined"),
      JsdocTypeUnknown: r(() => ({
        type: "UnknownLiteral"
      }), "JsdocTypeUnknown"),
      JsdocTypeFunction: r((e, t2) => {
        let o2 = Ze2(e), i2 = {
          type: "FunctionType",
          params: o2.params.map(t2)
        };
        return o2.this !== void 0 && (i2.this = t2(o2.this)), o2.new !== void 0 && (i2.new = t2(o2.new)), e.returnType !== void 0 && (i2.result = t2(e.returnType)), i2;
      }, "JsdocTypeFunction"),
      JsdocTypeGeneric: r((e, t2) => ({
        type: "TypeApplication",
        applications: e.elements.map((o2) => t2(o2)),
        expression: t2(e.left)
      }), "JsdocTypeGeneric"),
      JsdocTypeSpecialNamePath: r((e) => F2(e.specialType + ":" + j2(e.value, e.meta.quote)), "JsdocTypeSpecialNamePath"),
      JsdocTypeName: r((e) => e.value !== "function" ? F2(e.value) : {
        type: "FunctionType",
        params: []
      }, "JsdocTypeName"),
      JsdocTypeNumber: r((e) => F2(e.value.toString()), "JsdocTypeNumber"),
      JsdocTypeObject: r((e, t2) => {
        let o2 = {
          type: "RecordType",
          fields: []
        };
        for (let i2 of e.elements)
          i2.type !== "JsdocTypeObjectField" && i2.type !== "JsdocTypeJsdocObjectField" ? o2.fields.push({
            type: "FieldType",
            key: t2(i2),
            value: void 0
          }) : o2.fields.push(t2(i2));
        return o2;
      }, "JsdocTypeObject"),
      JsdocTypeObjectField: r((e, t2) => {
        if (typeof e.key != "string")
          throw new Error("Index signatures and mapped types are not supported");
        return {
          type: "FieldType",
          key: F2(j2(e.key, e.meta.quote)),
          value: e.right === void 0 ? void 0 : t2(e.right)
        };
      }, "JsdocTypeObjectField"),
      JsdocTypeJsdocObjectField: r((e, t2) => ({
        type: "FieldType",
        key: t2(e.left),
        value: t2(e.right)
      }), "JsdocTypeJsdocObjectField"),
      JsdocTypeUnion: r((e, t2) => ({
        type: "TypeUnion",
        elements: e.elements.map((o2) => t2(o2))
      }), "JsdocTypeUnion"),
      JsdocTypeKeyValue: r((e, t2) => ({
        type: "FieldType",
        key: F2(e.key),
        value: e.right === void 0 ? void 0 : t2(e.right)
      }), "JsdocTypeKeyValue"),
      JsdocTypeNamePath: r((e, t2) => {
        let o2 = t2(e.left), i2;
        e.right.type === "JsdocTypeSpecialNamePath" ? i2 = t2(e.right).name : i2 = j2(e.right.value, e.right.meta.quote);
        let l2 = e.pathType === "inner" ? "~" : e.pathType === "instance" ? "#" : ".";
        return F2(`${o2.name}${l2}${i2}`);
      }, "JsdocTypeNamePath"),
      JsdocTypeSymbol: r((e) => {
        let t2 = "", o2 = e.element, i2 = false;
        return (o2 == null ? void 0 : o2.type) === "JsdocTypeVariadic" && (o2.meta.position === "prefix" ? t2 = "..." : i2 = true, o2 = o2.element), (o2 == null ? void 0 : o2.type) === "JsdocTypeName" ? t2 += o2.value : (o2 == null ? void 0 : o2.type) === "JsdocTypeNumber" && (t2 += o2.value.toString()), i2 && (t2 += "..."), F2(`${e.value}(${t2})`);
      }, "JsdocTypeSymbol"),
      JsdocTypeParenthesis: r((e, t2) => t2(J3(e.element)), "JsdocTypeParenthesis"),
      JsdocTypeMappedType: N4,
      JsdocTypeIndexSignature: N4,
      JsdocTypeImport: N4,
      JsdocTypeKeyof: N4,
      JsdocTypeTuple: N4,
      JsdocTypeTypeof: N4,
      JsdocTypeIntersection: N4,
      JsdocTypeProperty: N4,
      JsdocTypePredicate: N4,
      JsdocTypeAsserts: N4
    };
    function cr(e) {
      return W2(pr, e);
    }
    r(cr, "catharsisTransform");
    function V2(e) {
      switch (e) {
        case void 0:
          return "none";
        case "single":
          return "single";
        case "double":
          return "double";
      }
    }
    r(V2, "getQuoteStyle");
    function lr(e) {
      switch (e) {
        case "inner":
          return "INNER_MEMBER";
        case "instance":
          return "INSTANCE_MEMBER";
        case "property":
          return "MEMBER";
        case "property-brackets":
          return "MEMBER";
      }
    }
    r(lr, "getMemberType");
    function ve2(e, t2) {
      return t2.length === 2 ? {
        type: e,
        left: t2[0],
        right: t2[1]
      } : {
        type: e,
        left: t2[0],
        right: ve2(e, t2.slice(1))
      };
    }
    r(ve2, "nestResults");
    let ur = {
      JsdocTypeOptional: r((e, t2) => ({
        type: "OPTIONAL",
        value: t2(e.element),
        meta: {
          syntax: e.meta.position === "prefix" ? "PREFIX_EQUAL_SIGN" : "SUFFIX_EQUALS_SIGN"
        }
      }), "JsdocTypeOptional"),
      JsdocTypeNullable: r((e, t2) => ({
        type: "NULLABLE",
        value: t2(e.element),
        meta: {
          syntax: e.meta.position === "prefix" ? "PREFIX_QUESTION_MARK" : "SUFFIX_QUESTION_MARK"
        }
      }), "JsdocTypeNullable"),
      JsdocTypeNotNullable: r((e, t2) => ({
        type: "NOT_NULLABLE",
        value: t2(e.element),
        meta: {
          syntax: e.meta.position === "prefix" ? "PREFIX_BANG" : "SUFFIX_BANG"
        }
      }), "JsdocTypeNotNullable"),
      JsdocTypeVariadic: r((e, t2) => {
        let o2 = {
          type: "VARIADIC",
          meta: {
            syntax: e.meta.position === "prefix" ? "PREFIX_DOTS" : e.meta.position === "suffix" ? "SUFFIX_DOTS" : "ONLY_DOTS"
          }
        };
        return e.element !== void 0 && (o2.value = t2(e.element)), o2;
      }, "JsdocTypeVariadic"),
      JsdocTypeName: r((e) => ({
        type: "NAME",
        name: e.value
      }), "JsdocTypeName"),
      JsdocTypeTypeof: r((e, t2) => ({
        type: "TYPE_QUERY",
        name: t2(e.element)
      }), "JsdocTypeTypeof"),
      JsdocTypeTuple: r((e, t2) => ({
        type: "TUPLE",
        entries: e.elements.map(t2)
      }), "JsdocTypeTuple"),
      JsdocTypeKeyof: r((e, t2) => ({
        type: "KEY_QUERY",
        value: t2(e.element)
      }), "JsdocTypeKeyof"),
      JsdocTypeImport: r((e) => ({
        type: "IMPORT",
        path: {
          type: "STRING_VALUE",
          quoteStyle: V2(e.element.meta.quote),
          string: e.element.value
        }
      }), "JsdocTypeImport"),
      JsdocTypeUndefined: r(() => ({
        type: "NAME",
        name: "undefined"
      }), "JsdocTypeUndefined"),
      JsdocTypeAny: r(() => ({
        type: "ANY"
      }), "JsdocTypeAny"),
      JsdocTypeFunction: r((e, t2) => {
        let o2 = Ze2(e), i2 = {
          type: e.arrow ? "ARROW" : "FUNCTION",
          params: o2.params.map((l2) => {
            if (l2.type === "JsdocTypeKeyValue") {
              if (l2.right === void 0)
                throw new Error("Function parameter without ':' is not expected to be 'KEY_VALUE'");
              return {
                type: "NAMED_PARAMETER",
                name: l2.key,
                typeName: t2(l2.right)
              };
            } else
              return t2(l2);
          }),
          new: null,
          returns: null
        };
        return o2.this !== void 0 ? i2.this = t2(o2.this) : e.arrow || (i2.this = null), o2.new !== void 0 && (i2.new = t2(o2.new)), e.returnType !== void 0 && (i2.returns = t2(e.returnType)), i2;
      }, "JsdocTypeFunction"),
      JsdocTypeGeneric: r((e, t2) => {
        let o2 = {
          type: "GENERIC",
          subject: t2(e.left),
          objects: e.elements.map(t2),
          meta: {
            syntax: e.meta.brackets === "square" ? "SQUARE_BRACKET" : e.meta.dot ? "ANGLE_BRACKET_WITH_DOT" : "ANGLE_BRACKET"
          }
        };
        return e.meta.brackets === "square" && e.elements[0].type === "JsdocTypeFunction" && !e.elements[0].parenthesis && (o2.objects[0] = {
          type: "NAME",
          name: "function"
        }), o2;
      }, "JsdocTypeGeneric"),
      JsdocTypeObjectField: r((e, t2) => {
        if (typeof e.key != "string")
          throw new Error("Index signatures and mapped types are not supported");
        if (e.right === void 0)
          return {
            type: "RECORD_ENTRY",
            key: e.key,
            quoteStyle: V2(e.meta.quote),
            value: null,
            readonly: false
          };
        let o2 = t2(e.right);
        return e.optional && (o2 = {
          type: "OPTIONAL",
          value: o2,
          meta: {
            syntax: "SUFFIX_KEY_QUESTION_MARK"
          }
        }), {
          type: "RECORD_ENTRY",
          key: e.key.toString(),
          quoteStyle: V2(e.meta.quote),
          value: o2,
          readonly: false
        };
      }, "JsdocTypeObjectField"),
      JsdocTypeJsdocObjectField: r(() => {
        throw new Error("Keys may not be typed in jsdoctypeparser.");
      }, "JsdocTypeJsdocObjectField"),
      JsdocTypeKeyValue: r((e, t2) => {
        if (e.right === void 0)
          return {
            type: "RECORD_ENTRY",
            key: e.key,
            quoteStyle: "none",
            value: null,
            readonly: false
          };
        let o2 = t2(e.right);
        return e.optional && (o2 = {
          type: "OPTIONAL",
          value: o2,
          meta: {
            syntax: "SUFFIX_KEY_QUESTION_MARK"
          }
        }), {
          type: "RECORD_ENTRY",
          key: e.key,
          quoteStyle: "none",
          value: o2,
          readonly: false
        };
      }, "JsdocTypeKeyValue"),
      JsdocTypeObject: r((e, t2) => {
        let o2 = [];
        for (let i2 of e.elements)
          (i2.type === "JsdocTypeObjectField" || i2.type === "JsdocTypeJsdocObjectField") && o2.push(t2(i2));
        return {
          type: "RECORD",
          entries: o2
        };
      }, "JsdocTypeObject"),
      JsdocTypeSpecialNamePath: r((e) => {
        if (e.specialType !== "module")
          throw new Error(`jsdoctypeparser does not support type ${e.specialType} at this point.`);
        return {
          type: "MODULE",
          value: {
            type: "FILE_PATH",
            quoteStyle: V2(e.meta.quote),
            path: e.value
          }
        };
      }, "JsdocTypeSpecialNamePath"),
      JsdocTypeNamePath: r((e, t2) => {
        let o2 = false, i2, l2;
        e.right.type === "JsdocTypeSpecialNamePath" && e.right.specialType === "event" ? (o2 = true, i2 = e.right.value, l2 = V2(e.right.meta.quote)) : (i2 = e.right.value, l2 = V2(e.right.meta.quote));
        let f2 = {
          type: lr(e.pathType),
          owner: t2(e.left),
          name: i2,
          quoteStyle: l2,
          hasEventPrefix: o2
        };
        if (f2.owner.type === "MODULE") {
          let d2 = f2.owner;
          return f2.owner = f2.owner.value, d2.value = f2, d2;
        } else
          return f2;
      }, "JsdocTypeNamePath"),
      JsdocTypeUnion: r((e, t2) => ve2("UNION", e.elements.map(t2)), "JsdocTypeUnion"),
      JsdocTypeParenthesis: r((e, t2) => ({
        type: "PARENTHESIS",
        value: t2(J3(e.element))
      }), "JsdocTypeParenthesis"),
      JsdocTypeNull: r(() => ({
        type: "NAME",
        name: "null"
      }), "JsdocTypeNull"),
      JsdocTypeUnknown: r(() => ({
        type: "UNKNOWN"
      }), "JsdocTypeUnknown"),
      JsdocTypeStringValue: r((e) => ({
        type: "STRING_VALUE",
        quoteStyle: V2(e.meta.quote),
        string: e.value
      }), "JsdocTypeStringValue"),
      JsdocTypeIntersection: r((e, t2) => ve2("INTERSECTION", e.elements.map(t2)), "JsdocTypeIntersection"),
      JsdocTypeNumber: r((e) => ({
        type: "NUMBER_VALUE",
        number: e.value.toString()
      }), "JsdocTypeNumber"),
      JsdocTypeSymbol: N4,
      JsdocTypeProperty: N4,
      JsdocTypePredicate: N4,
      JsdocTypeMappedType: N4,
      JsdocTypeIndexSignature: N4,
      JsdocTypeAsserts: N4
    };
    function mr(e) {
      return W2(ur, e);
    }
    r(mr, "jtpTransform");
    function fr() {
      return {
        JsdocTypeIntersection: r((e, t2) => ({
          type: "JsdocTypeIntersection",
          elements: e.elements.map(t2)
        }), "JsdocTypeIntersection"),
        JsdocTypeGeneric: r((e, t2) => ({
          type: "JsdocTypeGeneric",
          left: t2(e.left),
          elements: e.elements.map(t2),
          meta: {
            dot: e.meta.dot,
            brackets: e.meta.brackets
          }
        }), "JsdocTypeGeneric"),
        JsdocTypeNullable: r((e) => e, "JsdocTypeNullable"),
        JsdocTypeUnion: r((e, t2) => ({
          type: "JsdocTypeUnion",
          elements: e.elements.map(t2)
        }), "JsdocTypeUnion"),
        JsdocTypeUnknown: r((e) => e, "JsdocTypeUnknown"),
        JsdocTypeUndefined: r((e) => e, "JsdocTypeUndefined"),
        JsdocTypeTypeof: r((e, t2) => ({
          type: "JsdocTypeTypeof",
          element: t2(e.element)
        }), "JsdocTypeTypeof"),
        JsdocTypeSymbol: r((e, t2) => {
          let o2 = {
            type: "JsdocTypeSymbol",
            value: e.value
          };
          return e.element !== void 0 && (o2.element = t2(e.element)), o2;
        }, "JsdocTypeSymbol"),
        JsdocTypeOptional: r((e, t2) => ({
          type: "JsdocTypeOptional",
          element: t2(e.element),
          meta: {
            position: e.meta.position
          }
        }), "JsdocTypeOptional"),
        JsdocTypeObject: r((e, t2) => ({
          type: "JsdocTypeObject",
          meta: {
            separator: "comma"
          },
          elements: e.elements.map(t2)
        }), "JsdocTypeObject"),
        JsdocTypeNumber: r((e) => e, "JsdocTypeNumber"),
        JsdocTypeNull: r((e) => e, "JsdocTypeNull"),
        JsdocTypeNotNullable: r((e, t2) => ({
          type: "JsdocTypeNotNullable",
          element: t2(e.element),
          meta: {
            position: e.meta.position
          }
        }), "JsdocTypeNotNullable"),
        JsdocTypeSpecialNamePath: r((e) => e, "JsdocTypeSpecialNamePath"),
        JsdocTypeObjectField: r((e, t2) => ({
          type: "JsdocTypeObjectField",
          key: e.key,
          right: e.right === void 0 ? void 0 : t2(e.right),
          optional: e.optional,
          readonly: e.readonly,
          meta: e.meta
        }), "JsdocTypeObjectField"),
        JsdocTypeJsdocObjectField: r((e, t2) => ({
          type: "JsdocTypeJsdocObjectField",
          left: t2(e.left),
          right: t2(e.right)
        }), "JsdocTypeJsdocObjectField"),
        JsdocTypeKeyValue: r((e, t2) => ({
          type: "JsdocTypeKeyValue",
          key: e.key,
          right: e.right === void 0 ? void 0 : t2(e.right),
          optional: e.optional,
          variadic: e.variadic
        }), "JsdocTypeKeyValue"),
        JsdocTypeImport: r((e, t2) => ({
          type: "JsdocTypeImport",
          element: t2(e.element)
        }), "JsdocTypeImport"),
        JsdocTypeAny: r((e) => e, "JsdocTypeAny"),
        JsdocTypeStringValue: r((e) => e, "JsdocTypeStringValue"),
        JsdocTypeNamePath: r((e) => e, "JsdocTypeNamePath"),
        JsdocTypeVariadic: r((e, t2) => {
          let o2 = {
            type: "JsdocTypeVariadic",
            meta: {
              position: e.meta.position,
              squareBrackets: e.meta.squareBrackets
            }
          };
          return e.element !== void 0 && (o2.element = t2(e.element)), o2;
        }, "JsdocTypeVariadic"),
        JsdocTypeTuple: r((e, t2) => ({
          type: "JsdocTypeTuple",
          elements: e.elements.map(t2)
        }), "JsdocTypeTuple"),
        JsdocTypeName: r((e) => e, "JsdocTypeName"),
        JsdocTypeFunction: r((e, t2) => {
          let o2 = {
            type: "JsdocTypeFunction",
            arrow: e.arrow,
            parameters: e.parameters.map(t2),
            constructor: e.constructor,
            parenthesis: e.parenthesis
          };
          return e.returnType !== void 0 && (o2.returnType = t2(e.returnType)), o2;
        }, "JsdocTypeFunction"),
        JsdocTypeKeyof: r((e, t2) => ({
          type: "JsdocTypeKeyof",
          element: t2(e.element)
        }), "JsdocTypeKeyof"),
        JsdocTypeParenthesis: r((e, t2) => ({
          type: "JsdocTypeParenthesis",
          element: t2(e.element)
        }), "JsdocTypeParenthesis"),
        JsdocTypeProperty: r((e) => e, "JsdocTypeProperty"),
        JsdocTypePredicate: r((e, t2) => ({
          type: "JsdocTypePredicate",
          left: t2(e.left),
          right: t2(e.right)
        }), "JsdocTypePredicate"),
        JsdocTypeIndexSignature: r((e, t2) => ({
          type: "JsdocTypeIndexSignature",
          key: e.key,
          right: t2(e.right)
        }), "JsdocTypeIndexSignature"),
        JsdocTypeMappedType: r((e, t2) => ({
          type: "JsdocTypeMappedType",
          key: e.key,
          right: t2(e.right)
        }), "JsdocTypeMappedType"),
        JsdocTypeAsserts: r((e, t2) => ({
          type: "JsdocTypeAsserts",
          left: t2(e.left),
          right: t2(e.right)
        }), "JsdocTypeAsserts")
      };
    }
    r(fr, "identityTransformRules");
    let tt = {
      JsdocTypeAny: [],
      JsdocTypeFunction: ["parameters", "returnType"],
      JsdocTypeGeneric: ["left", "elements"],
      JsdocTypeImport: [],
      JsdocTypeIndexSignature: ["right"],
      JsdocTypeIntersection: ["elements"],
      JsdocTypeKeyof: ["element"],
      JsdocTypeKeyValue: ["right"],
      JsdocTypeMappedType: ["right"],
      JsdocTypeName: [],
      JsdocTypeNamePath: ["left", "right"],
      JsdocTypeNotNullable: ["element"],
      JsdocTypeNull: [],
      JsdocTypeNullable: ["element"],
      JsdocTypeNumber: [],
      JsdocTypeObject: ["elements"],
      JsdocTypeObjectField: ["right"],
      JsdocTypeJsdocObjectField: ["left", "right"],
      JsdocTypeOptional: ["element"],
      JsdocTypeParenthesis: ["element"],
      JsdocTypeSpecialNamePath: [],
      JsdocTypeStringValue: [],
      JsdocTypeSymbol: ["element"],
      JsdocTypeTuple: ["elements"],
      JsdocTypeTypeof: ["element"],
      JsdocTypeUndefined: [],
      JsdocTypeUnion: ["elements"],
      JsdocTypeUnknown: [],
      JsdocTypeVariadic: ["element"],
      JsdocTypeProperty: [],
      JsdocTypePredicate: ["left", "right"],
      JsdocTypeAsserts: ["left", "right"]
    };
    function ke2(e, t2, o2, i2, l2) {
      i2 == null ? void 0 : i2(e, t2, o2);
      let f2 = tt[e.type];
      for (let d2 of f2) {
        let h2 = e[d2];
        if (h2 !== void 0)
          if (Array.isArray(h2))
            for (let D2 of h2)
              ke2(D2, e, d2, i2, l2);
          else
            ke2(h2, e, d2, i2, l2);
      }
      l2 == null ? void 0 : l2(e, t2, o2);
    }
    r(ke2, "_traverse");
    function yr(e, t2, o2) {
      ke2(e, void 0, void 0, t2, o2);
    }
    r(yr, "traverse"), n2.catharsisTransform = cr, n2.identityTransformRules = fr, n2.jtpTransform = mr, n2.parse = Qe2, n2.stringify = ar, n2.stringifyRules = et, n2.transform = W2, n2.traverse = yr, n2.tryParse = or, n2.visitorKeys = tt;
  });
});
var Sr = r((n2) => n2.name === "literal", "isLiteral");
var Er = r((n2) => n2.value.replace(/['|"]/g, ""), "toEnumOption");
var Nr = r((n2) => {
  switch (n2.type) {
    case "function":
      return { name: "function" };
    case "object":
      let s2 = {};
      return n2.signature.properties.forEach((a2) => {
        s2[a2.key] = B(a2.value);
      }), {
        name: "object",
        value: s2
      };
    default:
      throw new import_preview_errors.UnknownArgTypesError({ type: n2, language: "Flow" });
  }
}, "convertSig");
var B = r((n2) => {
  var _a, _b, _c, _d;
  let { name: s2, raw: a2 } = n2, p2 = {};
  switch (typeof a2 < "u" && (p2.raw = a2), n2.name) {
    case "literal":
      return { ...p2, name: "other", value: n2.value };
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...p2, name: s2 };
    case "Array":
      return { ...p2, name: "array", value: n2.elements.map(B) };
    case "signature":
      return { ...p2, ...Nr(n2) };
    case "union":
      return ((_a = n2.elements) == null ? void 0 : _a.every(Sr)) ? { ...p2, name: "enum", value: (_b = n2.elements) == null ? void 0 : _b.map(Er) } : { ...p2, name: s2, value: (_c = n2.elements) == null ? void 0 : _c.map(B) };
    case "intersection":
      return { ...p2, name: s2, value: (_d = n2.elements) == null ? void 0 : _d.map(B) };
    default:
      return { ...p2, name: "other", value: s2 };
  }
}, "convert");
function X(n2) {
  if (!n2 || typeof n2 != "object")
    return false;
  let s2 = Object.getPrototypeOf(n2);
  return s2 === null || s2 === Object.prototype || Object.getPrototypeOf(s2) === null ? Object.prototype.toString.call(n2) === "[object Object]" : false;
}
r(X, "isPlainObject");
function Re(n2, s2) {
  let a2 = {}, p2 = Object.keys(n2);
  for (let c2 = 0; c2 < p2.length; c2++) {
    let u2 = p2[c2], m2 = n2[u2];
    a2[u2] = s2(m2, u2, n2);
  }
  return a2;
}
r(Re, "mapValues");
var ot = /^['"]|['"]$/g;
var Dr = r((n2) => n2.replace(ot, ""), "trimQuotes");
var Or = r((n2) => ot.test(n2), "includesQuotes");
var ie = r((n2) => {
  let s2 = Dr(n2);
  return Or(n2) || Number.isNaN(Number(s2)) ? s2 : Number(s2);
}, "parseLiteral");
var vr = /^\(.*\) => /;
var C = r((n2) => {
  let { name: s2, raw: a2, computed: p2, value: c2 } = n2, u2 = {};
  switch (typeof a2 < "u" && (u2.raw = a2), s2) {
    case "enum": {
      let T2 = p2 ? c2 : c2.map((g2) => ie(g2.value));
      return { ...u2, name: s2, value: T2 };
    }
    case "string":
    case "number":
    case "symbol":
      return { ...u2, name: s2 };
    case "func":
      return { ...u2, name: "function" };
    case "bool":
    case "boolean":
      return { ...u2, name: "boolean" };
    case "arrayOf":
    case "array":
      return { ...u2, name: "array", value: c2 && C(c2) };
    case "object":
      return { ...u2, name: s2 };
    case "objectOf":
      return { ...u2, name: s2, value: C(c2) };
    case "shape":
    case "exact":
      let m2 = Re(c2, (T2) => C(T2));
      return { ...u2, name: "object", value: m2 };
    case "union":
      return { ...u2, name: "union", value: c2.map((T2) => C(T2)) };
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if ((s2 == null ? void 0 : s2.indexOf("|")) > 0)
        try {
          let P2 = s2.split("|").map((b2) => JSON.parse(b2));
          return { ...u2, name: "enum", value: P2 };
        } catch {
        }
      let T2 = c2 ? `${s2}(${c2})` : s2, g2 = vr.test(s2) ? "function" : "other";
      return { ...u2, name: g2, value: T2 };
    }
  }
}, "convert");
var Ar = r((n2) => {
  switch (n2.type) {
    case "function":
      return { name: "function" };
    case "object":
      let s2 = {};
      return n2.signature.properties.forEach((a2) => {
        s2[a2.key] = M(a2.value);
      }), {
        name: "object",
        value: s2
      };
    default:
      throw new import_preview_errors2.UnknownArgTypesError({ type: n2, language: "Typescript" });
  }
}, "convertSig");
var M = r((n2) => {
  var _a, _b, _c, _d;
  let { name: s2, raw: a2 } = n2, p2 = {};
  switch (typeof a2 < "u" && (p2.raw = a2), n2.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...p2, name: s2 };
    case "Array":
      return { ...p2, name: "array", value: n2.elements.map(M) };
    case "signature":
      return { ...p2, ...Ar(n2) };
    case "union":
      let c2;
      return ((_a = n2.elements) == null ? void 0 : _a.every((u2) => u2.name === "literal")) ? c2 = {
        ...p2,
        name: "enum",
        // @ts-expect-error fix types
        value: (_b = n2.elements) == null ? void 0 : _b.map((u2) => ie(u2.value))
      } : c2 = { ...p2, name: s2, value: (_c = n2.elements) == null ? void 0 : _c.map(M) }, c2;
    case "intersection":
      return { ...p2, name: s2, value: (_d = n2.elements) == null ? void 0 : _d.map(M) };
    default:
      return { ...p2, name: "other", value: s2 };
  }
}, "convert");
var pe = r((n2) => {
  let { type: s2, tsType: a2, flowType: p2 } = n2;
  try {
    if (s2 != null)
      return C(s2);
    if (a2 != null)
      return M(a2);
    if (p2 != null)
      return B(p2);
  } catch (c2) {
    console.error(c2);
  }
  return null;
}, "convert");
var Ir3 = ((c2) => (c2.JAVASCRIPT = "JavaScript", c2.FLOW = "Flow", c2.TYPESCRIPT = "TypeScript", c2.UNKNOWN = "Unknown", c2))(Ir3 || {});
var Rr = ["null", "undefined"];
function K(n2) {
  return Rr.some((s2) => s2 === n2);
}
r(K, "isDefaultValueBlacklisted");
var st = r((n2) => {
  if (!n2)
    return "";
  if (typeof n2 == "string")
    return n2;
  throw new Error(`Description: expected string, got: ${JSON.stringify(n2)}`);
}, "str");
function at2(n2) {
  return !!n2.__docgenInfo;
}
r(at2, "hasDocgen");
function it(n2) {
  return n2 != null && Object.keys(n2).length > 0;
}
r(it, "isValidDocgenSection");
function pt(n2, s2) {
  return at2(n2) ? n2.__docgenInfo[s2] : null;
}
r(pt, "getDocgenSection");
function ct(n2) {
  return at2(n2) ? st(n2.__docgenInfo.description) : "";
}
r(ct, "getDocgenDescription");
var v;
(function(n2) {
  n2.start = "/**", n2.nostart = "/***", n2.delim = "*", n2.end = "*/";
})(v = v || (v = {}));
function je(n2) {
  return /^\s+$/.test(n2);
}
r(je, "isSpace");
function lt(n2) {
  let s2 = n2.match(/\r+$/);
  return s2 == null ? ["", n2] : [n2.slice(-s2[0].length), n2.slice(0, -s2[0].length)];
}
r(lt, "splitCR");
function A(n2) {
  let s2 = n2.match(/^\s+/);
  return s2 == null ? ["", n2] : [n2.slice(0, s2[0].length), n2.slice(s2[0].length)];
}
r(A, "splitSpace");
function ut(n2) {
  return n2.split(/\n/);
}
r(ut, "splitLines");
function mt(n2 = {}) {
  return Object.assign({ tag: "", name: "", type: "", optional: false, description: "", problems: [], source: [] }, n2);
}
r(mt, "seedSpec");
function Fe(n2 = {}) {
  return Object.assign({
    start: "",
    delimiter: "",
    postDelimiter: "",
    tag: "",
    postTag: "",
    name: "",
    postName: "",
    type: "",
    postType: "",
    description: "",
    end: "",
    lineEnd: ""
  }, n2);
}
r(Fe, "seedTokens");
var jr = /^@\S+/;
function _e({ fence: n2 = "```" } = {}) {
  let s2 = Fr(n2), a2 = r((p2, c2) => s2(p2) ? !c2 : c2, "toggleFence");
  return r(function(c2) {
    let u2 = [[]], m2 = false;
    for (let T2 of c2)
      jr.test(T2.tokens.description) && !m2 ? u2.push([T2]) : u2[u2.length - 1].push(T2), m2 = a2(T2.tokens.description, m2);
    return u2;
  }, "parseBlock");
}
r(_e, "getParser");
function Fr(n2) {
  return typeof n2 == "string" ? (s2) => s2.split(n2).length % 2 === 0 : n2;
}
r(Fr, "getFencer");
function Ve({ startLine: n2 = 0, markers: s2 = v } = {}) {
  let a2 = null, p2 = n2;
  return r(function(u2) {
    let m2 = u2, T2 = Fe();
    if ([T2.lineEnd, m2] = lt(m2), [T2.start, m2] = A(m2), a2 === null && m2.startsWith(s2.start) && !m2.startsWith(s2.nostart) && (a2 = [], T2.delimiter = m2.slice(0, s2.start.length), m2 = m2.slice(s2.start.length), [T2.postDelimiter, m2] = A(m2)), a2 === null)
      return p2++, null;
    let g2 = m2.trimRight().endsWith(s2.end);
    if (T2.delimiter === "" && m2.startsWith(s2.delim) && !m2.startsWith(s2.end) && (T2.delimiter = s2.delim, m2 = m2.slice(s2.delim.length), [
      T2.postDelimiter,
      m2
    ] = A(m2)), g2) {
      let P2 = m2.trimRight();
      T2.end = m2.slice(P2.length - s2.end.length), m2 = P2.slice(0, -s2.end.length);
    }
    if (T2.description = m2, a2.push({ number: p2, source: u2, tokens: T2 }), p2++, g2) {
      let P2 = a2.slice();
      return a2 = null, P2;
    }
    return null;
  }, "parseSource");
}
r(Ve, "getParser");
function Le({ tokenizers: n2 }) {
  return r(function(a2) {
    var p2;
    let c2 = mt({ source: a2 });
    for (let u2 of n2)
      if (c2 = u2(c2), !((p2 = c2.problems[c2.problems.length - 1]) === null || p2 === void 0) && p2.critical)
        break;
    return c2;
  }, "parseSpec");
}
r(Le, "getParser");
function ce() {
  return (n2) => {
    let { tokens: s2 } = n2.source[0], a2 = s2.description.match(/\s*(@(\S+))(\s*)/);
    return a2 === null ? (n2.problems.push({
      code: "spec:tag:prefix",
      message: 'tag should start with "@" symbol',
      line: n2.source[0].number,
      critical: true
    }), n2) : (s2.tag = a2[1], s2.postTag = a2[3], s2.description = s2.description.slice(a2[0].length), n2.tag = a2[2], n2);
  };
}
r(ce, "tagTokenizer");
function le(n2 = "compact") {
  let s2 = Vr(n2);
  return (a2) => {
    let p2 = 0, c2 = [];
    for (let [T2, { tokens: g2 }] of a2.source.entries()) {
      let P2 = "";
      if (T2 === 0 && g2.description[0] !== "{")
        return a2;
      for (let b2 of g2.description)
        if (b2 === "{" && p2++, b2 === "}" && p2--, P2 += b2, p2 === 0)
          break;
      if (c2.push([g2, P2]), p2 === 0)
        break;
    }
    if (p2 !== 0)
      return a2.problems.push({
        code: "spec:type:unpaired-curlies",
        message: "unpaired curlies",
        line: a2.source[0].number,
        critical: true
      }), a2;
    let u2 = [], m2 = c2[0][0].postDelimiter.length;
    for (let [T2, [g2, P2]] of c2.entries())
      g2.type = P2, T2 > 0 && (g2.type = g2.postDelimiter.slice(m2) + P2, g2.postDelimiter = g2.postDelimiter.slice(0, m2)), [g2.postType, g2.description] = A(g2.description.slice(P2.length)), u2.push(g2.type);
    return u2[0] = u2[0].slice(1), u2[u2.length - 1] = u2[u2.length - 1].slice(0, -1), a2.type = s2(u2), a2;
  };
}
r(le, "typeTokenizer");
var _r = r((n2) => n2.trim(), "trim");
function Vr(n2) {
  return n2 === "compact" ? (s2) => s2.map(_r).join("") : n2 === "preserve" ? (s2) => s2.join(`
`) : n2;
}
r(Vr, "getJoiner");
var Lr = r((n2) => n2 && n2.startsWith('"') && n2.endsWith('"'), "isQuoted");
function ue() {
  let n2 = r((s2, { tokens: a2 }, p2) => a2.type === "" ? s2 : p2, "typeEnd");
  return (s2) => {
    let { tokens: a2 } = s2.source[s2.source.reduce(n2, 0)], p2 = a2.description.trimLeft(), c2 = p2.split('"');
    if (c2.length > 1 && c2[0] === "" && c2.length % 2 === 1)
      return s2.name = c2[1], a2.name = `"${c2[1]}"`, [a2.postName, a2.description] = A(p2.slice(a2.name.length)), s2;
    let u2 = 0, m2 = "", T2 = false, g2;
    for (let b2 of p2) {
      if (u2 === 0 && je(b2))
        break;
      b2 === "[" && u2++, b2 === "]" && u2--, m2 += b2;
    }
    if (u2 !== 0)
      return s2.problems.push({
        code: "spec:name:unpaired-brackets",
        message: "unpaired brackets",
        line: s2.source[0].number,
        critical: true
      }), s2;
    let P2 = m2;
    if (m2[0] === "[" && m2[m2.length - 1] === "]") {
      T2 = true, m2 = m2.slice(1, -1);
      let b2 = m2.split("=");
      if (m2 = b2[0].trim(), b2[1] !== void 0 && (g2 = b2.slice(1).join("=").trim()), m2 === "")
        return s2.problems.push({
          code: "spec:name:empty-name",
          message: "empty name",
          line: s2.source[0].number,
          critical: true
        }), s2;
      if (g2 === "")
        return s2.problems.push({
          code: "spec:name:empty-default",
          message: "empty default value",
          line: s2.source[0].number,
          critical: true
        }), s2;
      if (!Lr(g2) && /=(?!>)/.test(g2))
        return s2.problems.push({
          code: "spec:name:invalid-default",
          message: "invalid default value syntax",
          line: s2.source[0].number,
          critical: true
        }), s2;
    }
    return s2.optional = T2, s2.name = m2, a2.name = P2, g2 !== void 0 && (s2.default = g2), [a2.postName, a2.description] = A(p2.slice(a2.name.length)), s2;
  };
}
r(ue, "nameTokenizer");
function me(n2 = "compact", s2 = v) {
  let a2 = Ue(n2);
  return (p2) => (p2.description = a2(p2.source, s2), p2);
}
r(me, "descriptionTokenizer");
function Ue(n2) {
  return n2 === "compact" ? Ur : n2 === "preserve" ? Mr : n2;
}
r(Ue, "getJoiner");
function Ur(n2, s2 = v) {
  return n2.map(({ tokens: { description: a2 } }) => a2.trim()).filter((a2) => a2 !== "").join(" ");
}
r(Ur, "compactJoiner");
var Br = r((n2, { tokens: s2 }, a2) => s2.type === "" ? n2 : a2, "lineNo");
var Cr = r(({ tokens: n2 }) => (n2.delimiter === "" ? n2.start : n2.postDelimiter.slice(1)) + n2.description, "getDescription");
function Mr(n2, s2 = v) {
  if (n2.length === 0)
    return "";
  n2[0].tokens.description === "" && n2[0].tokens.delimiter === s2.start && (n2 = n2.slice(1));
  let a2 = n2[n2.length - 1];
  return a2 !== void 0 && a2.tokens.description === "" && a2.tokens.end.endsWith(s2.end) && (n2 = n2.slice(0, -1)), n2 = n2.slice(n2.reduce(Br, 0)), n2.map(Cr).join(`
`);
}
r(Mr, "preserveJoiner");
function Be({ startLine: n2 = 0, fence: s2 = "```", spacing: a2 = "compact", markers: p2 = v, tokenizers: c2 = [
  ce(),
  le(a2),
  ue(),
  me(a2)
] } = {}) {
  if (n2 < 0 || n2 % 1 > 0)
    throw new Error("Invalid startLine");
  let u2 = Ve({ startLine: n2, markers: p2 }), m2 = _e({ fence: s2 }), T2 = Le({ tokenizers: c2 }), g2 = Ue(a2);
  return function(P2) {
    let b2 = [];
    for (let de2 of ut(P2)) {
      let q2 = u2(de2);
      if (q2 === null)
        continue;
      let S2 = m2(q2), z3 = S2.slice(1).map(T2);
      b2.push({
        description: g2(S2[0], p2),
        tags: z3,
        source: q2,
        problems: z3.reduce((Te2, ge2) => Te2.concat(ge2.problems), [])
      });
    }
    return b2;
  };
}
r(Be, "getParser");
function Kr(n2) {
  return n2.start + n2.delimiter + n2.postDelimiter + n2.tag + n2.postTag + n2.type + n2.postType + n2.name + n2.postName + n2.description + n2.end + n2.lineEnd;
}
r(Kr, "join");
function Ce() {
  return (n2) => n2.source.map(({ tokens: s2 }) => Kr(s2)).join(`
`);
}
r(Ce, "getStringifier");
var $r = {
  line: 0,
  start: 0,
  delimiter: 0,
  postDelimiter: 0,
  tag: 0,
  postTag: 0,
  name: 0,
  postName: 0,
  type: 0,
  postType: 0,
  description: 0,
  end: 0,
  lineEnd: 0
};
var Wo = Object.keys($r);
function ft(n2, s2 = {}) {
  return Be(s2)(n2);
}
r(ft, "parse");
var ys = Ce();
var $ = Pr(dt(), 1);
function qr(n2) {
  return n2 != null && n2.includes("@");
}
r(qr, "containsJsDoc");
function Yr(n2) {
  let p2 = `/**
` + (n2 ?? "").split(`
`).map((u2) => ` * ${u2}`).join(`
`) + `
*/`, c2 = ft(p2, {
    spacing: "preserve"
  });
  if (!c2 || c2.length === 0)
    throw new Error("Cannot parse JSDoc tags.");
  return c2[0];
}
r(Yr, "parse");
var Wr = {
  tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"]
};
var Tt2 = r((n2, s2 = Wr) => {
  if (!qr(n2))
    return {
      includesJsDoc: false,
      ignore: false
    };
  let a2 = Yr(n2), p2 = Gr(a2, s2.tags);
  return p2.ignore ? {
    includesJsDoc: true,
    ignore: true
  } : {
    includesJsDoc: true,
    ignore: false,
    // Always use the parsed description to ensure JSDoc is removed from the description.
    description: a2.description.trim(),
    extractedTags: p2
  };
}, "parseJsDoc");
function Gr(n2, s2) {
  let a2 = {
    params: null,
    deprecated: null,
    returns: null,
    ignore: false
  };
  for (let p2 of n2.tags)
    if (!(s2 !== void 0 && !s2.includes(p2.tag)))
      if (p2.tag === "ignore") {
        a2.ignore = true;
        break;
      } else
        switch (p2.tag) {
          // arg & argument are aliases for param.
          case "param":
          case "arg":
          case "argument": {
            let c2 = zr(p2);
            c2 != null && (a2.params == null && (a2.params = []), a2.params.push(c2));
            break;
          }
          case "deprecated": {
            let c2 = Hr(p2);
            c2 != null && (a2.deprecated = c2);
            break;
          }
          case "returns": {
            let c2 = Qr(p2);
            c2 != null && (a2.returns = c2);
            break;
          }
          default:
            break;
        }
  return a2;
}
r(Gr, "extractJsDocTags");
function Xr(n2) {
  return n2.replace(/[\.-]$/, "");
}
r(Xr, "normaliseParamName");
function zr(n2) {
  if (!n2.name || n2.name === "-")
    return null;
  let s2 = ht(n2.type);
  return {
    name: n2.name,
    type: s2,
    description: xt(n2.description),
    getPrettyName: r(() => Xr(n2.name), "getPrettyName"),
    getTypeName: r(() => s2 ? Jt(s2) : null, "getTypeName")
  };
}
r(zr, "extractParam");
function Hr(n2) {
  return n2.name ? gt(n2.name, n2.description) : null;
}
r(Hr, "extractDeprecated");
function gt(n2, s2) {
  let a2 = n2 === "" ? s2 : `${n2} ${s2}`;
  return xt(a2);
}
r(gt, "joinNameAndDescription");
function xt(n2) {
  let s2 = n2.replace(/^- /g, "").trim();
  return s2 === "" ? null : s2;
}
r(xt, "normaliseDescription");
function Qr(n2) {
  let s2 = ht(n2.type);
  return s2 ? {
    type: s2,
    description: gt(n2.name, n2.description),
    getTypeName: r(() => Jt(s2), "getTypeName")
  } : null;
}
r(Qr, "extractReturns");
var _ = (0, $.stringifyRules)();
var Zr = _.JsdocTypeObject;
_.JsdocTypeAny = () => "any";
_.JsdocTypeObject = (n2, s2) => `(${Zr(n2, s2)})`;
_.JsdocTypeOptional = (n2, s2) => s2(n2.element);
_.JsdocTypeNullable = (n2, s2) => s2(n2.element);
_.JsdocTypeNotNullable = (n2, s2) => s2(n2.element);
_.JsdocTypeUnion = (n2, s2) => n2.elements.map(s2).join("|");
function ht(n2) {
  try {
    return (0, $.parse)(n2, "typescript");
  } catch {
    return null;
  }
}
r(ht, "extractType");
function Jt(n2) {
  return (0, $.transform)(_, n2);
}
r(Jt, "extractTypeName");
function Ke(n2) {
  return n2.length > 90;
}
r(Ke, "isTooLongForTypeSummary");
function wt(n2) {
  return n2.length > 50;
}
r(wt, "isTooLongForDefaultValueSummary");
function w(n2, s2) {
  return n2 === s2 ? { summary: n2 } : { summary: n2, detail: s2 };
}
r(w, "createSummaryValue");
var Es = r((n2) => n2.replace(/\\r\\n/g, "\\n"), "normalizeNewlines");
function Pt(n2, s2) {
  if (n2 != null) {
    let { value: a2 } = n2;
    if (!K(a2))
      return wt(a2) ? w(s2 == null ? void 0 : s2.name, a2) : w(a2);
  }
  return null;
}
r(Pt, "createDefaultValue");
function bt({ name: n2, value: s2, elements: a2, raw: p2 }) {
  return s2 ?? (a2 != null ? a2.map(bt).join(" | ") : p2 ?? n2);
}
r(bt, "generateUnionElement");
function en({ name: n2, raw: s2, elements: a2 }) {
  return a2 != null ? w(a2.map(bt).join(" | ")) : s2 != null ? w(s2.replace(/^\|\s*/, "")) : w(n2);
}
r(en, "generateUnion");
function tn({ type: n2, raw: s2 }) {
  return s2 != null ? w(s2) : w(n2);
}
r(tn, "generateFuncSignature");
function rn({ type: n2, raw: s2 }) {
  return s2 != null ? Ke(s2) ? w(n2, s2) : w(s2) : w(n2);
}
r(rn, "generateObjectSignature");
function nn(n2) {
  let { type: s2 } = n2;
  return s2 === "object" ? rn(n2) : tn(n2);
}
r(nn, "generateSignature");
function on({ name: n2, raw: s2 }) {
  return s2 != null ? Ke(s2) ? w(n2, s2) : w(s2) : w(n2);
}
r(on, "generateDefault");
function St2(n2) {
  if (n2 == null)
    return null;
  switch (n2.name) {
    case "union":
      return en(n2);
    case "signature":
      return nn(n2);
    default:
      return on(n2);
  }
}
r(St2, "createType");
var Et = r((n2, s2) => {
  let { flowType: a2, description: p2, required: c2, defaultValue: u2 } = s2;
  return {
    name: n2,
    type: St2(a2),
    required: c2,
    description: p2,
    defaultValue: Pt(u2 ?? null, a2 ?? null)
  };
}, "createFlowPropDef");
function Nt({ defaultValue: n2 }) {
  if (n2 != null) {
    let { value: s2 } = n2;
    if (!K(s2))
      return w(s2);
  }
  return null;
}
r(Nt, "createDefaultValue");
function Dt({ tsType: n2, required: s2 }) {
  if (n2 == null)
    return null;
  let a2 = n2.name;
  return s2 || (a2 = a2.replace(" | undefined", "")), w(
    ["Array", "Record", "signature"].includes(n2.name) ? n2.raw : a2
  );
}
r(Dt, "createType");
var Ot = r((n2, s2) => {
  let { description: a2, required: p2 } = s2;
  return {
    name: n2,
    type: Dt(s2),
    required: p2,
    description: a2,
    defaultValue: Nt(s2)
  };
}, "createTsPropDef");
function sn(n2) {
  return n2 != null ? w(n2.name) : null;
}
r(sn, "createType");
function an(n2) {
  let { computed: s2, func: a2 } = n2;
  return typeof s2 > "u" && typeof a2 > "u";
}
r(an, "isReactDocgenTypescript");
function pn(n2) {
  return n2 ? n2.name === "string" ? true : n2.name === "enum" ? Array.isArray(n2.value) && n2.value.every(
    ({ value: s2 }) => typeof s2 == "string" && s2[0] === '"' && s2[s2.length - 1] === '"'
  ) : false : false;
}
r(pn, "isStringValued");
function cn(n2, s2) {
  if (n2 != null) {
    let { value: a2 } = n2;
    if (!K(a2))
      return an(n2) && pn(s2) ? w(JSON.stringify(a2)) : w(a2);
  }
  return null;
}
r(cn, "createDefaultValue");
function vt(n2, s2, a2) {
  let { description: p2, required: c2, defaultValue: u2 } = a2;
  return {
    name: n2,
    type: sn(s2),
    required: c2,
    description: p2,
    defaultValue: cn(u2, s2)
  };
}
r(vt, "createBasicPropDef");
function ye(n2, s2) {
  var _a;
  if (s2 == null ? void 0 : s2.includesJsDoc) {
    let { description: a2, extractedTags: p2 } = s2;
    a2 != null && (n2.description = s2.description);
    let c2 = {
      ...p2,
      params: (_a = p2 == null ? void 0 : p2.params) == null ? void 0 : _a.map(
        (u2) => ({
          name: u2.getPrettyName(),
          description: u2.description
        })
      )
    };
    Object.values(c2).filter(Boolean).length > 0 && (n2.jsDocTags = c2);
  }
  return n2;
}
r(ye, "applyJsDocResult");
var ln = r((n2, s2, a2) => {
  let p2 = vt(n2, s2.type, s2);
  return p2.sbType = pe(s2), ye(p2, a2);
}, "javaScriptFactory");
var un = r((n2, s2, a2) => {
  let p2 = Ot(n2, s2);
  return p2.sbType = pe(s2), ye(p2, a2);
}, "tsFactory");
var mn = r((n2, s2, a2) => {
  let p2 = Et(n2, s2);
  return p2.sbType = pe(s2), ye(p2, a2);
}, "flowFactory");
var fn = r((n2, s2, a2) => {
  let p2 = vt(n2, { name: "unknown" }, s2);
  return ye(p2, a2);
}, "unknownFactory");
var $e = r((n2) => {
  switch (n2) {
    case "JavaScript":
      return ln;
    case "TypeScript":
      return un;
    case "Flow":
      return mn;
    default:
      return fn;
  }
}, "getPropDefFactory");
var kt = r(
  (n2) => n2.type != null ? "JavaScript" : n2.flowType != null ? "Flow" : n2.tsType != null ? "TypeScript" : "Unknown",
  "getTypeSystem"
);
var yn = r((n2) => {
  let s2 = kt(n2[0]), a2 = $e(s2);
  return n2.map((p2) => {
    var _a;
    let c2 = p2;
    return ((_a = p2.type) == null ? void 0 : _a.elements) && (c2 = {
      ...p2,
      type: {
        ...p2.type,
        value: p2.type.elements
      }
    }), At(c2.name, c2, s2, a2);
  });
}, "extractComponentSectionArray");
var dn = r((n2) => {
  let s2 = Object.keys(n2), a2 = kt(n2[s2[0]]), p2 = $e(a2);
  return s2.map((c2) => {
    let u2 = n2[c2];
    return u2 != null ? At(c2, u2, a2, p2) : null;
  }).filter(Boolean);
}, "extractComponentSectionObject");
var aa = r((n2, s2) => {
  let a2 = pt(n2, s2);
  return it(a2) ? Array.isArray(a2) ? yn(a2) : dn(a2) : [];
}, "extractComponentProps");
function At(n2, s2, a2, p2) {
  let c2 = Tt2(s2.description);
  return c2.includesJsDoc && c2.ignore ? null : {
    propDef: p2(n2, s2, c2),
    jsDocTags: c2.extractedTags,
    docgenInfo: s2,
    typeSystem: a2
  };
}
r(At, "extractProp");
function ia(n2) {
  return n2 != null ? ct(n2) : "";
}
r(ia, "extractComponentDescription");
var qe = r((...n2) => {
  let s2 = {}, a2 = n2.filter(Boolean), p2 = a2.reduce((c2, u2) => (Object.entries(u2).forEach(([m2, T2]) => {
    let g2 = c2[m2];
    Array.isArray(T2) || typeof g2 > "u" ? c2[m2] = T2 : X(T2) && X(g2) ? s2[m2] = true : typeof T2 < "u" && (c2[m2] = T2);
  }), c2), {});
  return Object.keys(s2).forEach((c2) => {
    let u2 = a2.filter(Boolean).map((m2) => m2[c2]).filter((m2) => typeof m2 < "u");
    u2.every((m2) => X(m2)) ? p2[c2] = qe(...u2) : p2[c2] = u2[u2.length - 1];
  }), p2;
}, "combineParameters");
var ya = r((n2) => {
  let {
    component: s2,
    argTypes: a2,
    parameters: { docs: p2 = {} }
  } = n2, { extractArgTypes: c2 } = p2;
  if (!c2 || !s2)
    return a2;
  let u2 = c2(s2);
  return u2 ? qe(u2, a2) : a2;
}, "enhanceArgTypes");
var It = "storybook/docs";
var ga = `${It}/panel`;
var ha = `${It}/snippet-rendered`;
var Tn = ((p2) => (p2.AUTO = "auto", p2.CODE = "code", p2.DYNAMIC = "dynamic", p2))(Tn || {});

// node_modules/.pnpm/ts-dedent@2.2.0/node_modules/ts-dedent/esm/index.js
function dedent(templ) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    if (matches) {
      return arr.concat(matches.map(function(match) {
        var _a, _b;
        return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
      }));
    }
    return arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str) {
      return str.replace(pattern_1, "\n");
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  values.forEach(function(value2, i2) {
    var endentations = string.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : "";
    var indentedValue = value2;
    if (typeof value2 === "string" && value2.includes("\n")) {
      indentedValue = String(value2).split("\n").map(function(str, i3) {
        return i3 === 0 ? str : "" + endentation + str;
      }).join("\n");
    }
    string += indentedValue + strings[i2 + 1];
  });
  return string;
}

// node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@19.1.8_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/blocks.mjs
var import_channels = __toESM(require_channels(), 1);
var require_memoizerific = __commonJS2({ "../../node_modules/memoizerific/memoizerific.js"(exports, module) {
  (function(f2) {
    if (typeof exports == "object" && typeof module < "u") module.exports = f2();
    else if (typeof define == "function" && define.amd) define([], f2);
    else {
      var g2;
      typeof window < "u" ? g2 = window : typeof global < "u" ? g2 = global : typeof self < "u" ? g2 = self : g2 = this, g2.memoizerific = f2();
    }
  })(function() {
    return function e2(t2, n2, r22) {
      function s2(o3, u2) {
        if (!n2[o3]) {
          if (!t2[o3]) {
            var a2 = typeof __require == "function" && __require;
            if (!u2 && a2) return a2(o3, true);
            if (i2) return i2(o3, true);
            var f2 = new Error("Cannot find module '" + o3 + "'");
            throw f2.code = "MODULE_NOT_FOUND", f2;
          }
          var l2 = n2[o3] = { exports: {} };
          t2[o3][0].call(l2.exports, function(e3) {
            var n3 = t2[o3][1][e3];
            return s2(n3 || e3);
          }, l2, l2.exports, e2, t2, n2, r22);
        }
        return n2[o3].exports;
      }
      for (var i2 = typeof __require == "function" && __require, o2 = 0; o2 < r22.length; o2++) s2(r22[o2]);
      return s2;
    }({ 1: [function(_dereq_, module3, exports3) {
      module3.exports = function(forceSimilar) {
        if (typeof Map != "function" || forceSimilar) {
          var Similar = _dereq_("./similar");
          return new Similar();
        } else return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(_dereq_, module3, exports3) {
      function Similar() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      Similar.prototype.get = function(key) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key)) return this.lastItem.val;
        if (index = this.indexOf(key), index >= 0) return this.lastItem = this.list[index], this.list[index].val;
      }, Similar.prototype.set = function(key, val) {
        var index;
        return this.lastItem && this.isEqual(this.lastItem.key, key) ? (this.lastItem.val = val, this) : (index = this.indexOf(key), index >= 0 ? (this.lastItem = this.list[index], this.list[index].val = val, this) : (this.lastItem = { key, val }, this.list.push(this.lastItem), this.size++, this));
      }, Similar.prototype.delete = function(key) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key) && (this.lastItem = void 0), index = this.indexOf(key), index >= 0) return this.size--, this.list.splice(index, 1)[0];
      }, Similar.prototype.has = function(key) {
        var index;
        return this.lastItem && this.isEqual(this.lastItem.key, key) ? true : (index = this.indexOf(key), index >= 0 ? (this.lastItem = this.list[index], true) : false);
      }, Similar.prototype.forEach = function(callback, thisArg) {
        var i2;
        for (i2 = 0; i2 < this.size; i2++) callback.call(thisArg || this, this.list[i2].val, this.list[i2].key, this);
      }, Similar.prototype.indexOf = function(key) {
        var i2;
        for (i2 = 0; i2 < this.size; i2++) if (this.isEqual(this.list[i2].key, key)) return i2;
        return -1;
      }, Similar.prototype.isEqual = function(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      }, module3.exports = Similar;
    }, {}], 3: [function(_dereq_, module3, exports3) {
      var MapOrSimilar = _dereq_("map-or-similar");
      module3.exports = function(limit) {
        var cache = new MapOrSimilar(false), lru = [];
        return function(fn2) {
          var memoizerific = function() {
            var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i2;
            if ((memoizerific.numArgs || memoizerific.numArgs === 0) && memoizerific.numArgs !== argsLengthMinusOne + 1) throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (i2 = 0; i2 < argsLengthMinusOne; i2++) {
              if (lruPath[i2] = { cacheItem: currentCache, arg: arguments[i2] }, currentCache.has(arguments[i2])) {
                currentCache = currentCache.get(arguments[i2]);
                continue;
              }
              isMemoized = false, newMap = new MapOrSimilar(false), currentCache.set(arguments[i2], newMap), currentCache = newMap;
            }
            return isMemoized && (currentCache.has(arguments[argsLengthMinusOne]) ? fnResult = currentCache.get(arguments[argsLengthMinusOne]) : isMemoized = false), isMemoized || (fnResult = fn2.apply(null, arguments), currentCache.set(arguments[argsLengthMinusOne], fnResult)), limit > 0 && (lruPath[argsLengthMinusOne] = { cacheItem: currentCache, arg: arguments[argsLengthMinusOne] }, isMemoized ? moveToMostRecentLru(lru, lruPath) : lru.push(lruPath), lru.length > limit && removeCachedResult(lru.shift())), memoizerific.wasMemoized = isMemoized, memoizerific.numArgs = argsLengthMinusOne + 1, fnResult;
          };
          return memoizerific.limit = limit, memoizerific.wasMemoized = false, memoizerific.cache = cache, memoizerific.lru = lru, memoizerific;
        };
      };
      function moveToMostRecentLru(lru, lruPath) {
        var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i2, ii;
        for (i2 = 0; i2 < lruLen; i2++) {
          for (isMatch = true, ii = 0; ii < lruPathLen; ii++) if (!isEqual(lru[i2][ii].arg, lruPath[ii].arg)) {
            isMatch = false;
            break;
          }
          if (isMatch) break;
        }
        lru.push(lru.splice(i2, 1)[0]);
      }
      function removeCachedResult(removedLru) {
        var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i2;
        for (currentLru.cacheItem.delete(currentLru.arg), i2 = removedLruLen - 2; i2 >= 0 && (currentLru = removedLru[i2], tmp = currentLru.cacheItem.get(currentLru.arg), !tmp || !tmp.size); i2--) currentLru.cacheItem.delete(currentLru.arg);
      }
      function isEqual(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
} });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r22 in t2) ({}).hasOwnProperty.call(t2, r22) && (n2[r22] = t2[r22]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}
function _assertThisInitialized(e2) {
  if (e2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}
function _inheritsLoose(t2, o2) {
  t2.prototype = Object.create(o2.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o2);
}
function _getPrototypeOf(t2) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, _getPrototypeOf(t2);
}
function _isNativeFunction(t2) {
  try {
    return Function.toString.call(t2).indexOf("[native code]") !== -1;
  } catch {
    return typeof t2 == "function";
  }
}
function _isNativeReflectConstruct() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t2;
  })();
}
function _construct(t2, e2, r22) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o2 = [null];
  o2.push.apply(o2, e2);
  var p2 = new (t2.bind.apply(t2, o2))();
  return r22 && _setPrototypeOf(p2, r22.prototype), p2;
}
function _wrapNativeSuper(t2) {
  var r22 = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(t3) {
    if (t3 === null || !_isNativeFunction(t3)) return t3;
    if (typeof t3 != "function") throw new TypeError("Super expression must either be null or a function");
    if (r22 !== void 0) {
      if (r22.has(t3)) return r22.get(t3);
      r22.set(t3, Wrapper11);
    }
    function Wrapper11() {
      return _construct(t3, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper11.prototype = Object.create(t3.prototype, { constructor: { value: Wrapper11, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(Wrapper11, t3);
  }, _wrapNativeSuper(t2);
}
var ERRORS = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`, 2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`, 3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`, 4: `Couldn't generate valid rgb string from %s, it returned %s.

`, 5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`, 6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`, 7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`, 8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`, 9: `Please provide a number of steps to the modularScale helper.

`, 10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`, 12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`, 13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`, 14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`, 15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`, 16: `You must provide a template to this method.

`, 17: `You passed an unsupported selector state to this method.

`, 18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 19: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 23: `fontFace expects a name of a font-family.

`, 24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 25: `fontFace expects localFonts to be an array.

`, 26: `fontFace expects fileFormats to be an array.

`, 27: `radialGradient requries at least 2 color-stops to properly render.

`, 28: `Please supply a filename to retinaImage() as the first argument.

`, 29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`, 32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`, 33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`, 34: `borderRadius expects a radius value as a string or number as the second argument.

`, 35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 36: `Property must be a string value.

`, 37: `Syntax Error at %s.

`, 38: `Formula contains a function that needs parentheses at %s.

`, 39: `Formula is missing closing parenthesis at %s.

`, 40: `Formula has too many closing parentheses at %s.

`, 41: `All values in a formula must have the same unit or be unitless.

`, 42: `Please provide a number of steps to the modularScale helper.

`, 43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`, 45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`, 46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`, 47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 48: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`, 51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`, 52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 53: `fontFace expects localFonts to be an array.

`, 54: `fontFace expects fileFormats to be an array.

`, 55: `fontFace expects a name of a font-family.

`, 56: `linearGradient requries at least 2 color-stops to properly render.

`, 57: `radialGradient requries at least 2 color-stops to properly render.

`, 58: `Please supply a filename to retinaImage() as the first argument.

`, 59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 61: `Property must be a string value.

`, 62: `borderRadius expects a radius value as a string or number as the second argument.

`, 63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`, 65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`, 66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`, 67: `You must provide a template to this method.

`, 68: `You passed an unsupported selector state to this method.

`, 69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`, 70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`, 71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`, 72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`, 73: `Please provide a valid CSS variable.

`, 74: `CSS variable not found and no default was provided.

`, 75: `important requires a valid style object, got a %s instead.

`, 76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`, 77: `remToPx expects a value in "rem" but you provided it in "%s".

`, 78: `base must be set in "px" or "%" but you set it in "%s".
` };
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
  var a2 = args[0], b2 = [], c2;
  for (c2 = 1; c2 < args.length; c2 += 1) b2.push(args[c2]);
  return b2.forEach(function(d2) {
    a2 = a2.replace(/%[a-z]/, d2);
  }), a2;
}
var PolishedError = function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    for (var _this, _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
    return _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this, _assertThisInitialized(_this);
  }
  return PolishedError2;
}(_wrapNativeSuper(Error));
function colorToInt(color) {
  return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert2) {
  if (convert2 === void 0 && (convert2 = convertToInt), saturation === 0) return convert2(lightness, lightness, lightness);
  var huePrime = (hue % 360 + 360) % 360 / 60, chroma = (1 - Math.abs(2 * lightness - 1)) * saturation, secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1)), red = 0, green = 0, blue = 0;
  huePrime >= 0 && huePrime < 1 ? (red = chroma, green = secondComponent) : huePrime >= 1 && huePrime < 2 ? (red = secondComponent, green = chroma) : huePrime >= 2 && huePrime < 3 ? (green = chroma, blue = secondComponent) : huePrime >= 3 && huePrime < 4 ? (green = secondComponent, blue = chroma) : huePrime >= 4 && huePrime < 5 ? (red = secondComponent, blue = chroma) : huePrime >= 5 && huePrime < 6 && (red = chroma, blue = secondComponent);
  var lightnessModification = lightness - chroma / 2, finalRed = red + lightnessModification, finalGreen = green + lightnessModification, finalBlue = blue + lightnessModification;
  return convert2(finalRed, finalGreen, finalBlue);
}
var namedColorMap = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function nameToHex(color) {
  if (typeof color != "string") return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color) {
  if (typeof color != "string") throw new PolishedError(3);
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16) };
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16), alpha };
  }
  if (normalizedColor.match(reducedHexRegex)) return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16) };
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16), alpha: _alpha };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) return { red: parseInt("" + rgbMatched[1], 10), green: parseInt("" + rgbMatched[2], 10), blue: parseInt("" + rgbMatched[3], 10) };
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) return { red: parseInt("" + rgbaMatched[1], 10), green: parseInt("" + rgbaMatched[2], 10), blue: parseInt("" + rgbaMatched[3], 10), alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4]) };
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10), saturation = parseInt("" + hslMatched[2], 10) / 100, lightness = parseInt("" + hslMatched[3], 10) / 100, rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")", hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) throw new PolishedError(4, normalizedColor, rgbColorString);
    return { red: parseInt("" + hslRgbMatched[1], 10), green: parseInt("" + hslRgbMatched[2], 10), blue: parseInt("" + hslRgbMatched[3], 10) };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10), _saturation = parseInt("" + hslaMatched[2], 10) / 100, _lightness = parseInt("" + hslaMatched[3], 10) / 100, _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")", _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) throw new PolishedError(4, normalizedColor, _rgbColorString);
    return { red: parseInt("" + _hslRgbMatched[1], 10), green: parseInt("" + _hslRgbMatched[2], 10), blue: parseInt("" + _hslRgbMatched[3], 10), alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4]) };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color) {
  var red = color.red / 255, green = color.green / 255, blue = color.blue / 255, max = Math.max(red, green, blue), min = Math.min(red, green, blue), lightness = (max + min) / 2;
  if (max === min) return color.alpha !== void 0 ? { hue: 0, saturation: 0, lightness, alpha: color.alpha } : { hue: 0, saturation: 0, lightness };
  var hue, delta = max - min, saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  return hue *= 60, color.alpha !== void 0 ? { hue, saturation, lightness, alpha: color.alpha } : { hue, saturation, lightness };
}
function parseToHsl(color) {
  return rgbToHsl(parseToRgb(color));
}
var reduceHexValue = function(value2) {
  return value2.length === 7 && value2[1] === value2[2] && value2[3] === value2[4] && value2[5] === value2[6] ? "#" + value2[1] + value2[3] + value2[5] : value2;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value2) {
  var hex = value2.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value2, saturation, lightness) {
  if (typeof value2 == "number" && typeof saturation == "number" && typeof lightness == "number") return hslToHex(value2, saturation, lightness);
  if (typeof value2 == "object" && saturation === void 0 && lightness === void 0) return hslToHex(value2.hue, value2.saturation, value2.lightness);
  throw new PolishedError(1);
}
function hsla(value2, saturation, lightness, alpha) {
  if (typeof value2 == "number" && typeof saturation == "number" && typeof lightness == "number" && typeof alpha == "number") return alpha >= 1 ? hslToHex(value2, saturation, lightness) : "rgba(" + hslToRgb(value2, saturation, lightness) + "," + alpha + ")";
  if (typeof value2 == "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) return value2.alpha >= 1 ? hslToHex(value2.hue, value2.saturation, value2.lightness) : "rgba(" + hslToRgb(value2.hue, value2.saturation, value2.lightness) + "," + value2.alpha + ")";
  throw new PolishedError(2);
}
function rgb(value2, green, blue) {
  if (typeof value2 == "number" && typeof green == "number" && typeof blue == "number") return reduceHexValue$1("#" + numberToHex(value2) + numberToHex(green) + numberToHex(blue));
  if (typeof value2 == "object" && green === void 0 && blue === void 0) return reduceHexValue$1("#" + numberToHex(value2.red) + numberToHex(value2.green) + numberToHex(value2.blue));
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue == "string" && typeof secondValue == "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else {
    if (typeof firstValue == "number" && typeof secondValue == "number" && typeof thirdValue == "number" && typeof fourthValue == "number") return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
    if (typeof firstValue == "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function(color) {
  return typeof color.red == "number" && typeof color.green == "number" && typeof color.blue == "number" && (typeof color.alpha != "number" || typeof color.alpha > "u");
};
var isRgba = function(color) {
  return typeof color.red == "number" && typeof color.green == "number" && typeof color.blue == "number" && typeof color.alpha == "number";
};
var isHsl = function(color) {
  return typeof color.hue == "number" && typeof color.saturation == "number" && typeof color.lightness == "number" && (typeof color.alpha != "number" || typeof color.alpha > "u");
};
var isHsla = function(color) {
  return typeof color.hue == "number" && typeof color.saturation == "number" && typeof color.lightness == "number" && typeof color.alpha == "number";
};
function toColorString(color) {
  if (typeof color != "object") throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}
function curried(f2, length, acc) {
  return function() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f2.apply(this, combined) : curried(f2, length, combined);
  };
}
function curry(f2) {
  return curried(f2, f2.length, []);
}
function adjustHue(degree, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { hue: hslColor.hue + parseFloat(degree) }));
}
curry(adjustHue);
function guard(lowerBoundary, upperBoundary, value2) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value2));
}
function darken(amount, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness - parseFloat(amount)) }));
}
var curriedDarken = curry(darken);
var curriedDarken$1 = curriedDarken;
function desaturate(amount, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { saturation: guard(0, 1, hslColor.saturation - parseFloat(amount)) }));
}
curry(desaturate);
function lighten(amount, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness + parseFloat(amount)) }));
}
var curriedLighten = curry(lighten);
var curriedLighten$1 = curriedLighten;
function mix(weight, color, otherColor) {
  if (color === "transparent") return otherColor;
  if (otherColor === "transparent") return color;
  if (weight === 0) return otherColor;
  var parsedColor1 = parseToRgb(color), color1 = _extends({}, parsedColor1, { alpha: typeof parsedColor1.alpha == "number" ? parsedColor1.alpha : 1 }), parsedColor2 = parseToRgb(otherColor), color2 = _extends({}, parsedColor2, { alpha: typeof parsedColor2.alpha == "number" ? parsedColor2.alpha : 1 }), alphaDelta = color1.alpha - color2.alpha, x2 = parseFloat(weight) * 2 - 1, y2 = x2 * alphaDelta === -1 ? x2 : x2 + alphaDelta, z22 = 1 + x2 * alphaDelta, weight1 = (y2 / z22 + 1) / 2, weight2 = 1 - weight1, mixedColor = { red: Math.floor(color1.red * weight1 + color2.red * weight2), green: Math.floor(color1.green * weight1 + color2.green * weight2), blue: Math.floor(color1.blue * weight1 + color2.blue * weight2), alpha: color1.alpha * parseFloat(weight) + color2.alpha * (1 - parseFloat(weight)) };
  return rgba(mixedColor);
}
var curriedMix = curry(mix);
var mix$1 = curriedMix;
function opacify(amount, color) {
  if (color === "transparent") return color;
  var parsedColor = parseToRgb(color), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends({}, parsedColor, { alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100) });
  return rgba(colorWithAlpha);
}
var curriedOpacify = curry(opacify);
var curriedOpacify$1 = curriedOpacify;
function saturate(amount, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { saturation: guard(0, 1, hslColor.saturation + parseFloat(amount)) }));
}
curry(saturate);
function setHue(hue, color) {
  return color === "transparent" ? color : toColorString(_extends({}, parseToHsl(color), { hue: parseFloat(hue) }));
}
curry(setHue);
function setLightness(lightness, color) {
  return color === "transparent" ? color : toColorString(_extends({}, parseToHsl(color), { lightness: parseFloat(lightness) }));
}
curry(setLightness);
function setSaturation(saturation, color) {
  return color === "transparent" ? color : toColorString(_extends({}, parseToHsl(color), { saturation: parseFloat(saturation) }));
}
curry(setSaturation);
function shade(percentage, color) {
  return color === "transparent" ? color : mix$1(parseFloat(percentage), "rgb(0, 0, 0)", color);
}
curry(shade);
function tint(percentage, color) {
  return color === "transparent" ? color : mix$1(parseFloat(percentage), "rgb(255, 255, 255)", color);
}
curry(tint);
function transparentize(amount, color) {
  if (color === "transparent") return color;
  var parsedColor = parseToRgb(color), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends({}, parsedColor, { alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100) });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = curry(transparentize);
var curriedTransparentize$1 = curriedTransparentize;
var Wrapper = xr.div(N, ({ theme }) => ({ backgroundColor: theme.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: theme.appBorderRadius, border: `1px dashed ${theme.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: curriedTransparentize$1(0.3, theme.color.defaultText), fontSize: theme.typography.size.s2 }));
var EmptyBlock = (props) => import_react.default.createElement(Wrapper, { ...props, className: "docblock-emptyblock sb-unstyled" });
var StyledSyntaxHighlighter = xr(ru)(({ theme }) => ({ fontSize: `${theme.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: theme.appBorderRadius, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } }));
var SourceSkeletonWrapper = xr.div(({ theme }) => ({ background: theme.background.content, borderRadius: theme.appBorderRadius, border: `1px solid ${theme.appBorderColor}`, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" }));
var SourceSkeletonPlaceholder = xr.div(({ theme }) => ({ animation: `${theme.animation.glow} 1.5s ease-in-out infinite`, background: theme.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${hf}`]: { margin: 0 } }));
var SourceSkeleton = () => import_react.default.createElement(SourceSkeletonWrapper, null, import_react.default.createElement(SourceSkeletonPlaceholder, null), import_react.default.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }), import_react.default.createElement(SourceSkeletonPlaceholder, { style: { width: "30%" } }), import_react.default.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }));
var Source = ({ isLoading, error, language, code, dark, format: format3 = true, ...rest }) => {
  let { typography } = St();
  if (isLoading) return import_react.default.createElement(SourceSkeleton, null);
  if (error) return import_react.default.createElement(EmptyBlock, null, error);
  let syntaxHighlighter = import_react.default.createElement(StyledSyntaxHighlighter, { bordered: true, copyable: true, format: format3, language: language ?? "jsx", className: "docblock-source sb-unstyled", ...rest }, code);
  if (typeof dark > "u") return syntaxHighlighter;
  let overrideTheme = dark ? Me.dark : Me.light;
  return import_react.default.createElement(Tt, { theme: Ir({ ...overrideTheme, fontCode: typography.fonts.mono, fontBase: typography.fonts.base }) }, syntaxHighlighter);
};
var toGlobalSelector = (element) => `& :where(${element}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${element}))`;
var breakpoint = 600;
var Title = xr.h1(N, ({ theme }) => ({ color: theme.color.defaultText, fontSize: theme.typography.size.m3, fontWeight: theme.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } }));
var Subtitle = xr.h2(N, ({ theme }) => ({ fontWeight: theme.typography.weight.regular, fontSize: theme.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: curriedTransparentize$1(0.25, theme.color.defaultText) }));
var DocsContent = xr.div(({ theme }) => {
  let reset = { fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, headers = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: theme.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, code = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: theme.typography.size.s2 - 1, border: theme.base === "light" ? `1px solid ${theme.color.mediumlight}` : `1px solid ${theme.color.darker}`, color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), backgroundColor: theme.base === "light" ? theme.color.lighter : theme.color.border };
  return { maxWidth: 1e3, width: "100%", minWidth: 0, [toGlobalSelector("a")]: { ...reset, fontSize: "inherit", lineHeight: "24px", color: theme.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [toGlobalSelector("blockquote")]: { ...reset, margin: "16px 0", borderLeft: `4px solid ${theme.color.medium}`, padding: "0 15px", color: theme.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [toGlobalSelector("div")]: reset, [toGlobalSelector("dl")]: { ...reset, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [toGlobalSelector("h1")]: { ...reset, ...headers, fontSize: `${theme.typography.size.l1}px`, fontWeight: theme.typography.weight.bold }, [toGlobalSelector("h2")]: { ...reset, ...headers, fontSize: `${theme.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${theme.appBorderColor}` }, [toGlobalSelector("h3")]: { ...reset, ...headers, fontSize: `${theme.typography.size.m1}px`, fontWeight: theme.typography.weight.bold }, [toGlobalSelector("h4")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s3}px` }, [toGlobalSelector("h5")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s2}px` }, [toGlobalSelector("h6")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s2}px`, color: theme.color.dark }, [toGlobalSelector("hr")]: { border: "0 none", borderTop: `1px solid ${theme.appBorderColor}`, height: 4, padding: 0 }, [toGlobalSelector("img")]: { maxWidth: "100%" }, [toGlobalSelector("li")]: { ...reset, fontSize: theme.typography.size.s2, color: theme.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": code }, [toGlobalSelector("ol")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [toGlobalSelector("p")]: { ...reset, margin: "16px 0", fontSize: theme.typography.size.s2, lineHeight: "24px", color: theme.color.defaultText, "& code": code }, [toGlobalSelector("pre")]: { ...reset, fontFamily: theme.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [toGlobalSelector("span")]: { ...reset, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${theme.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [toGlobalSelector("table")]: { ...reset, margin: "16px 0", fontSize: theme.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${theme.appBorderColor}`, backgroundColor: theme.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: theme.base === "dark" ? theme.color.darker : theme.color.lighter }, "& tr th": { fontWeight: "bold", color: theme.color.defaultText, border: `1px solid ${theme.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${theme.appBorderColor}`, color: theme.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [toGlobalSelector("ul")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
});
var DocsWrapper = xr.div(({ theme }) => ({ background: theme.background.content, display: "flex", flexDirection: "row-reverse", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${breakpoint}px)`]: {} }));
var DocsPageWrapper = ({ children, toc }) => import_react.default.createElement(DocsWrapper, { className: "sbdocs sbdocs-wrapper" }, toc, import_react.default.createElement(DocsContent, { className: "sbdocs sbdocs-content" }, children));
var getBlockBackgroundStyle = (theme) => ({ borderRadius: theme.appBorderRadius, background: theme.background.content, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${theme.appBorderColor}` });
var { window: globalWindow } = globalThis;
var IFrame = class extends import_react.Component {
  constructor() {
    super(...arguments);
    this.iframe = null;
  }
  componentDidMount() {
    let { id } = this.props;
    this.iframe = globalWindow.document.getElementById(id);
  }
  shouldComponentUpdate(nextProps) {
    let { scale } = nextProps;
    return scale !== this.props.scale && this.setIframeBodyStyle({ width: `${scale * 100}%`, height: `${scale * 100}%`, transform: `scale(${1 / scale})`, transformOrigin: "top left" }), false;
  }
  setIframeBodyStyle(style) {
    return Object.assign(this.iframe.contentDocument.body.style, style);
  }
  render() {
    let { id, title, src, allowFullScreen, scale, ...rest } = this.props;
    return import_react.default.createElement("iframe", { id, title, src, ...allowFullScreen ? { allow: "fullscreen" } : {}, loading: "lazy", ...rest });
  }
};
var ZoomContext = (0, import_react.createContext)({ scale: 1 });
var { PREVIEW_URL } = globalThis;
var BASE_URL = PREVIEW_URL || "iframe.html";
var storyBlockIdFromId = ({ story, primary }) => `story--${story.id}${primary ? "--primary" : ""}`;
var InlineStory = (props) => {
  let storyRef = (0, import_react.useRef)(), [showLoader, setShowLoader] = (0, import_react.useState)(true), [error, setError] = (0, import_react.useState)(), { story, height, autoplay, forceInitialArgs, renderStoryToElement } = props;
  return (0, import_react.useEffect)(() => {
    if (!(story && storyRef.current)) return () => {
    };
    let element = storyRef.current, cleanup = renderStoryToElement(story, element, { showMain: () => {
    }, showError: ({ title, description }) => setError(new Error(`${title} - ${description}`)), showException: (err) => setError(err) }, { autoplay, forceInitialArgs });
    return setShowLoader(false), () => {
      Promise.resolve().then(() => cleanup());
    };
  }, [autoplay, renderStoryToElement, story]), error ? import_react.default.createElement("pre", null, import_react.default.createElement(m7, { error })) : import_react.default.createElement(import_react.default.Fragment, null, height ? import_react.default.createElement("style", null, `#${storyBlockIdFromId(props)} { min-height: ${height}; transform: translateZ(0); overflow: auto }`) : null, showLoader && import_react.default.createElement(StorySkeleton, null), import_react.default.createElement("div", { ref: storyRef, id: `${storyBlockIdFromId(props)}-inner`, "data-name": story.name }));
};
var IFrameStory = ({ story, height = "500px" }) => import_react.default.createElement("div", { style: { width: "100%", height } }, import_react.default.createElement(ZoomContext.Consumer, null, ({ scale }) => import_react.default.createElement(IFrame, { key: "iframe", id: `iframe--${story.id}`, title: story.name, src: ow(BASE_URL, story.id, { viewMode: "story" }), allowFullScreen: true, scale, style: { width: "100%", height: "100%", border: "0 none" } })));
var ErrorMessage = xr.strong(({ theme }) => ({ color: theme.color.orange }));
var Story = (props) => {
  let { inline, story } = props;
  return inline && !props.autoplay && story.usesMount ? import_react.default.createElement(ErrorMessage, null, "This story mounts inside of play. Set", " ", import_react.default.createElement("a", { href: "https://storybook.js.org/docs/api/doc-blocks/doc-block-story#autoplay" }, "autoplay"), " ", "to true to view this story.") : import_react.default.createElement("div", { id: storyBlockIdFromId(props), className: "sb-story sb-unstyled", "data-story-block": "true" }, inline ? import_react.default.createElement(InlineStory, { ...props }) : import_react.default.createElement(IFrameStory, { ...props }));
};
var StorySkeleton = () => import_react.default.createElement(Q6, null);
var Bar = xr(No)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" });
var Wrapper2 = xr.div({ display: "flex", alignItems: "center", gap: 4 });
var IconPlaceholder = xr.div(({ theme }) => ({ width: 14, height: 14, borderRadius: 2, margin: "0 7px", backgroundColor: theme.appBorderColor, animation: `${theme.animation.glow} 1.5s ease-in-out infinite` }));
var Toolbar = ({ isLoading, storyId, baseUrl, zoom, resetZoom, ...rest }) => import_react.default.createElement(Bar, { ...rest }, import_react.default.createElement(Wrapper2, { key: "left" }, isLoading ? [1, 2, 3].map((key) => import_react.default.createElement(IconPlaceholder, { key })) : import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(bo, { key: "zoomin", onClick: (e2) => {
  e2.preventDefault(), zoom(0.8);
}, title: "Zoom in" }, import_react.default.createElement(ZoomIcon, null)), import_react.default.createElement(bo, { key: "zoomout", onClick: (e2) => {
  e2.preventDefault(), zoom(1.25);
}, title: "Zoom out" }, import_react.default.createElement(ZoomOutIcon, null)), import_react.default.createElement(bo, { key: "zoomreset", onClick: (e2) => {
  e2.preventDefault(), resetZoom();
}, title: "Reset zoom" }, import_react.default.createElement(ZoomResetIcon, null)))));
var ChildrenContainer = xr.div(({ isColumn, columns, layout }) => ({ display: isColumn || !columns ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: isColumn ? "column" : "row", "& .innerZoomElementWrapper > *": isColumn ? { width: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout = "padded", inline }) => layout === "centered" || layout === "padded" ? { padding: inline ? "32px 22px" : "0px", "& .innerZoomElementWrapper > *": { width: "auto", border: "8px solid transparent!important" } } : {}, ({ layout = "padded", inline }) => layout === "centered" && inline ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns }) => columns && columns > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${columns} - 20px)` } } : {});
var StyledSource = xr(Source)(({ theme }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: theme.appBorderRadius, borderBottomRightRadius: theme.appBorderRadius, border: "none", background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme.background.content), color: theme.color.lightest, button: { background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme.background.content) } }));
var PreviewContainer = xr.div(({ theme, withSource, isExpanded }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...getBlockBackgroundStyle(theme), borderBottomLeftRadius: withSource && isExpanded && 0, borderBottomRightRadius: withSource && isExpanded && 0, borderBottomWidth: isExpanded && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar }) => withToolbar && { paddingTop: 40 });
var getSource = (withSource, expanded, setExpanded) => {
  switch (true) {
    case !!(withSource && withSource.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: true, onClick: () => setExpanded(false) } };
    case expanded:
      return { source: import_react.default.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => setExpanded(false) } };
    default:
      return { source: import_react.default.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => setExpanded(true) } };
  }
};
function getStoryId(children) {
  if (import_react.Children.count(children) === 1) {
    let elt = children;
    if (elt.props) return elt.props.id;
  }
  return null;
}
var PositionedToolbar = xr(Toolbar)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 });
var Relative = xr.div({ overflow: "hidden", position: "relative" });
var Preview = ({ isLoading, isColumn, columns, children, withSource, withToolbar = false, isExpanded = false, additionalActions, className, layout = "padded", inline = false, ...props }) => {
  let [expanded, setExpanded] = (0, import_react.useState)(isExpanded), { source, actionItem } = getSource(withSource, expanded, setExpanded), [scale, setScale] = (0, import_react.useState)(1), previewClasses = [className].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), defaultActionItems = withSource ? [actionItem] : [], [additionalActionItems, setAdditionalActionItems] = (0, import_react.useState)(additionalActions ? [...additionalActions] : []), actionItems = [...defaultActionItems, ...additionalActionItems], { window: globalWindow4 } = globalThis, copyToClipboard = (0, import_react.useCallback)(async (text) => {
    let { createCopyToClipboardFunction } = await import("./components-INCZFR66.js");
    createCopyToClipboardFunction();
  }, []), onCopyCapture = (e2) => {
    let selection = globalWindow4.getSelection();
    selection && selection.type === "Range" || (e2.preventDefault(), additionalActionItems.filter((item) => item.title === "Copied").length === 0 && copyToClipboard((source == null ? void 0 : source.props.code) ?? "").then(() => {
      setAdditionalActionItems([...additionalActionItems, { title: "Copied", onClick: () => {
      } }]), globalWindow4.setTimeout(() => setAdditionalActionItems(additionalActionItems.filter((item) => item.title !== "Copied")), 1500);
    }));
  };
  return import_react.default.createElement(PreviewContainer, { withSource, withToolbar, ...props, className: previewClasses.join(" ") }, withToolbar && import_react.default.createElement(PositionedToolbar, { isLoading, border: true, zoom: (z22) => setScale(scale * z22), resetZoom: () => setScale(1), storyId: getStoryId(children), baseUrl: "./iframe.html" }), import_react.default.createElement(ZoomContext.Provider, { value: { scale } }, import_react.default.createElement(Relative, { className: "docs-story", onCopyCapture: withSource && onCopyCapture }, import_react.default.createElement(ChildrenContainer, { isColumn: isColumn || !Array.isArray(children), columns, layout, inline }, import_react.default.createElement(a7.Element, { centered: layout === "centered", scale: inline ? scale : 1 }, Array.isArray(children) ? children.map((child, i2) => import_react.default.createElement("div", { key: i2 }, child)) : import_react.default.createElement("div", null, children))), import_react.default.createElement(Va, { actionItems }))), withSource && expanded && source);
};
xr(Preview)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } }));
var TabbedArgsTable = ({ tabs, ...props }) => {
  let entries = Object.entries(tabs);
  return entries.length === 1 ? import_react.default.createElement(ArgsTable, { ...entries[0][1], ...props }) : import_react.default.createElement(ml, null, entries.map((entry, index) => {
    let [label, table] = entry, id = `prop_table_div_${label}`, Component4 = "div", argsTableProps = index === 0 ? props : { sort: props.sort };
    return import_react.default.createElement(Component4, { key: id, id, title: label }, ({ active }) => active ? import_react.default.createElement(ArgsTable, { key: `prop_table_${label}`, ...table, ...argsTableProps }) : null);
  }));
};
var Label = xr.div(({ theme }) => ({ marginRight: 30, fontSize: `${theme.typography.size.s1}px`, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
var Sample = xr.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
var TypeSpecimen = xr.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
var Wrapper3 = xr.div(N, ({ theme }) => ({ ...getBlockBackgroundStyle(theme), margin: "25px 0 40px", padding: "30px 20px" }));
var Typeset = ({ fontFamily, fontSizes, fontWeight, sampleText, ...props }) => import_react.default.createElement(Wrapper3, { ...props, className: "docblock-typeset sb-unstyled" }, fontSizes.map((size) => import_react.default.createElement(TypeSpecimen, { key: size }, import_react.default.createElement(Label, null, size), import_react.default.createElement(Sample, { style: { fontFamily, fontSize: size, fontWeight, lineHeight: 1.2 } }, sampleText || "Was he a beast if music could move him so?"))));
var ItemTitle = xr.div(({ theme }) => ({ fontWeight: theme.typography.weight.bold, color: theme.color.defaultText }));
var ItemSubtitle = xr.div(({ theme }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.2, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
var ItemDescription = xr.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
var SwatchLabel = xr.div(({ theme }) => ({ flex: 1, textAlign: "center", fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, lineHeight: 1, overflow: "hidden", color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
var SwatchLabels = xr.div({ display: "flex", flexDirection: "row" });
var Swatch = xr.div(({ background }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background, content: '""' } }));
var SwatchColors = xr.div(({ theme }) => ({ ...getBlockBackgroundStyle(theme), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
var SwatchSpecimen = xr.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
var Swatches = xr.div({ flex: 1, display: "flex", flexDirection: "row" });
var Item = xr.div({ display: "flex", alignItems: "flex-start" });
var ListName = xr.div({ flex: "0 0 30%" });
var ListSwatches = xr.div({ flex: 1 });
var ListHeading = xr.div(({ theme }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: theme.typography.weight.bold, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
var List = xr.div(({ theme }) => ({ fontSize: theme.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
function renderSwatch(color, index) {
  return import_react.default.createElement(Swatch, { key: `${color}-${index}`, title: color, background: color });
}
function renderSwatchLabel(color, index, colorDescription) {
  return import_react.default.createElement(SwatchLabel, { key: `${color}-${index}`, title: color }, import_react.default.createElement("div", null, color, colorDescription && import_react.default.createElement("span", null, colorDescription)));
}
function renderSwatchSpecimen(colors) {
  if (Array.isArray(colors)) return import_react.default.createElement(SwatchSpecimen, null, import_react.default.createElement(SwatchColors, null, colors.map((color, index) => renderSwatch(color, index))), import_react.default.createElement(SwatchLabels, null, colors.map((color, index) => renderSwatchLabel(color, index))));
  let swatchElements = [], labelElements = [];
  for (let colorKey in colors) {
    let colorValue = colors[colorKey];
    swatchElements.push(renderSwatch(colorValue, swatchElements.length)), labelElements.push(renderSwatchLabel(colorKey, labelElements.length, colorValue));
  }
  return import_react.default.createElement(SwatchSpecimen, null, import_react.default.createElement(SwatchColors, null, swatchElements), import_react.default.createElement(SwatchLabels, null, labelElements));
}
var ColorItem = ({ title, subtitle, colors }) => import_react.default.createElement(Item, null, import_react.default.createElement(ItemDescription, null, import_react.default.createElement(ItemTitle, null, title), import_react.default.createElement(ItemSubtitle, null, subtitle)), import_react.default.createElement(Swatches, null, renderSwatchSpecimen(colors)));
var ColorPalette = ({ children, ...props }) => import_react.default.createElement(jl, null, import_react.default.createElement(List, { ...props, className: "docblock-colorpalette sb-unstyled" }, import_react.default.createElement(ListHeading, null, import_react.default.createElement(ListName, null, "Name"), import_react.default.createElement(ListSwatches, null, "Swatches")), children));
var ItemLabel = xr.div(({ theme }) => ({ fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s1, color: theme.color.defaultText, marginLeft: 10, lineHeight: 1.2, display: "-webkit-box", overflow: "hidden", wordBreak: "break-word", textOverflow: "ellipsis", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }));
var ItemSpecimen = xr.div(({ theme }) => ({ ...getBlockBackgroundStyle(theme), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
var Item2 = xr.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", width: "100%" });
var List2 = xr.div({ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gridGap: "8px 16px", gridAutoFlow: "row dense", gridAutoRows: 50 });
var IconItem = ({ name, children }) => import_react.default.createElement(Item2, null, import_react.default.createElement(ItemSpecimen, null, children), import_react.default.createElement(ItemLabel, null, name));
var IconGallery = ({ children, ...props }) => import_react.default.createElement(jl, null, import_react.default.createElement(List2, { ...props, className: "docblock-icongallery sb-unstyled" }, children));
function build_html_default(options) {
  let forEach = [].forEach, some = [].some, body = typeof window < "u" && document.body, SPACE_CHAR = " ", tocElement, currentlyHighlighting = true, eventCount = 0;
  function createEl(d2, container) {
    let link = container.appendChild(createLink(d2));
    if (d2.children.length) {
      let list = createList(d2.isCollapsed);
      d2.children.forEach((child) => {
        createEl(child, list);
      }), link.appendChild(list);
    }
  }
  function render(parent, data) {
    let container = createList(false);
    if (data.forEach((d2) => {
      createEl(d2, container);
    }), tocElement = parent || tocElement, tocElement !== null) return tocElement.firstChild && tocElement.removeChild(tocElement.firstChild), data.length === 0 ? tocElement : tocElement.appendChild(container);
  }
  function createLink(data) {
    let item = document.createElement("li"), a2 = document.createElement("a");
    return options.listItemClass && item.setAttribute("class", options.listItemClass), options.onClick && (a2.onclick = options.onClick), options.includeTitleTags && a2.setAttribute("title", data.textContent), options.includeHtml && data.childNodes.length ? forEach.call(data.childNodes, (node) => {
      a2.appendChild(node.cloneNode(true));
    }) : a2.textContent = data.textContent, a2.setAttribute("href", `${options.basePath}#${data.id}`), a2.setAttribute("class", `${options.linkClass + SPACE_CHAR}node-name--${data.nodeName}${SPACE_CHAR}${options.extraLinkClasses}`), item.appendChild(a2), item;
  }
  function createList(isCollapsed) {
    let listElement = options.orderedList ? "ol" : "ul", list = document.createElement(listElement), classes = options.listClass + SPACE_CHAR + options.extraListClasses;
    return isCollapsed && (classes = classes + SPACE_CHAR + options.collapsibleClass, classes = classes + SPACE_CHAR + options.isCollapsedClass), list.setAttribute("class", classes), list;
  }
  function updateFixedSidebarClass() {
    let scrollTop = getScrollTop(), posFixedEl = document.querySelector(options.positionFixedSelector);
    options.fixedSidebarOffset === "auto" && (options.fixedSidebarOffset = tocElement.offsetTop), scrollTop > options.fixedSidebarOffset ? posFixedEl.className.indexOf(options.positionFixedClass) === -1 && (posFixedEl.className += SPACE_CHAR + options.positionFixedClass) : posFixedEl.className = posFixedEl.className.replace(SPACE_CHAR + options.positionFixedClass, "");
  }
  function getHeadingTopPos(obj) {
    let position = 0;
    return obj !== null && (position = obj.offsetTop, options.hasInnerContainers && (position += getHeadingTopPos(obj.offsetParent))), position;
  }
  function updateClassname(obj, className) {
    return obj && obj.className !== className && (obj.className = className), obj;
  }
  function updateToc(headingsArray, event) {
    var _a, _b;
    options.positionFixedSelector && updateFixedSidebarClass();
    let headings = headingsArray, clickedHref = ((_a = event == null ? void 0 : event.target) == null ? void 0 : _a.getAttribute) ? (_b = event == null ? void 0 : event.target) == null ? void 0 : _b.getAttribute("href") : null, isBottomMode = clickedHref && clickedHref.charAt(0) === "#" ? getIsHeaderBottomMode(clickedHref.replace("#", "")) : false, shouldUpdate = currentlyHighlighting || isBottomMode;
    if (event && eventCount < 5 && eventCount++, shouldUpdate && tocElement && headings.length > 0) {
      let topHeader = getTopHeader(headings), oldActiveTocLink = tocElement.querySelector(`.${options.activeLinkClass}`), topHeaderId = topHeader.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1"), hashId = window.location.hash.replace("#", ""), activeId = topHeaderId, isPageBottomMode = getIsPageBottomMode();
      clickedHref && isBottomMode ? activeId = clickedHref.replace("#", "") : hashId && hashId !== topHeaderId && isPageBottomMode && (getIsHeaderBottomMode(topHeaderId) || eventCount <= 2) && (activeId = hashId);
      let activeTocLink = tocElement.querySelector(`.${options.linkClass}[href="${options.basePath}#${activeId}"]`);
      if (oldActiveTocLink === activeTocLink) return;
      let tocLinks = tocElement.querySelectorAll(`.${options.linkClass}`);
      forEach.call(tocLinks, (tocLink) => {
        updateClassname(tocLink, tocLink.className.replace(SPACE_CHAR + options.activeLinkClass, ""));
      });
      let tocLis = tocElement.querySelectorAll(`.${options.listItemClass}`);
      forEach.call(tocLis, (tocLi) => {
        updateClassname(tocLi, tocLi.className.replace(SPACE_CHAR + options.activeListItemClass, ""));
      }), activeTocLink && activeTocLink.className.indexOf(options.activeLinkClass) === -1 && (activeTocLink.className += SPACE_CHAR + options.activeLinkClass);
      let li = activeTocLink == null ? void 0 : activeTocLink.parentNode;
      li && li.className.indexOf(options.activeListItemClass) === -1 && (li.className += SPACE_CHAR + options.activeListItemClass);
      let tocLists = tocElement.querySelectorAll(`.${options.listClass}.${options.collapsibleClass}`);
      forEach.call(tocLists, (list) => {
        list.className.indexOf(options.isCollapsedClass) === -1 && (list.className += SPACE_CHAR + options.isCollapsedClass);
      }), (activeTocLink == null ? void 0 : activeTocLink.nextSibling) && activeTocLink.nextSibling.className.indexOf(options.isCollapsedClass) !== -1 && updateClassname(activeTocLink.nextSibling, activeTocLink.nextSibling.className.replace(SPACE_CHAR + options.isCollapsedClass, "")), removeCollapsedFromParents(activeTocLink == null ? void 0 : activeTocLink.parentNode.parentNode);
    }
  }
  function removeCollapsedFromParents(element) {
    return element && element.className.indexOf(options.collapsibleClass) !== -1 && element.className.indexOf(options.isCollapsedClass) !== -1 ? (updateClassname(element, element.className.replace(SPACE_CHAR + options.isCollapsedClass, "")), removeCollapsedFromParents(element.parentNode.parentNode)) : element;
  }
  function disableTocAnimation(event) {
    let target = event.target || event.srcElement;
    typeof target.className != "string" || target.className.indexOf(options.linkClass) === -1 || (currentlyHighlighting = false);
  }
  function enableTocAnimation() {
    currentlyHighlighting = true;
  }
  function getCurrentlyHighlighting() {
    return currentlyHighlighting;
  }
  function getIsHeaderBottomMode(headerId) {
    let scrollEl = getScrollEl();
    return (document == null ? void 0 : document.getElementById(headerId)).offsetTop > scrollEl.offsetHeight - scrollEl.clientHeight * 1.4 - options.bottomModeThreshold;
  }
  function getIsPageBottomMode() {
    let scrollEl = getScrollEl(), isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight, isBottomMode = getScrollTop() + scrollEl.clientHeight > scrollEl.offsetHeight - options.bottomModeThreshold;
    return isScrollable && isBottomMode;
  }
  function getScrollEl() {
    let el;
    return options.scrollContainer && document.querySelector(options.scrollContainer) ? el = document.querySelector(options.scrollContainer) : el = document.documentElement || body, el;
  }
  function getScrollTop() {
    var _a;
    return ((_a = getScrollEl()) == null ? void 0 : _a.scrollTop) || 0;
  }
  function getTopHeader(headings, scrollTop = getScrollTop()) {
    let topHeader;
    return some.call(headings, (heading, i2) => {
      if (getHeadingTopPos(heading) > scrollTop + options.headingsOffset + 10) {
        let index = i2 === 0 ? i2 : i2 - 1;
        return topHeader = headings[index], true;
      }
      if (i2 === headings.length - 1) return topHeader = headings[headings.length - 1], true;
    }), topHeader;
  }
  function updateUrlHashForHeader(headingsArray) {
    let scrollTop = getScrollTop(), topHeader = getTopHeader(headingsArray, scrollTop), isPageBottomMode = getIsPageBottomMode();
    if ((!topHeader || scrollTop < 5) && !isPageBottomMode) window.location.hash === "#" || window.location.hash === "" || window.history.pushState(null, null, "#");
    else if (topHeader && !isPageBottomMode) {
      let newHash = `#${topHeader.id}`;
      window.location.hash !== newHash && window.history.pushState(null, null, newHash);
    }
  }
  return { enableTocAnimation, disableTocAnimation, render, updateToc, getCurrentlyHighlighting, getTopHeader, getScrollTop, updateUrlHashForHeader };
}
var default_options_default = { tocSelector: ".js-toc", tocElement: null, contentSelector: ".js-toc-content", contentElement: null, headingSelector: "h1, h2, h3", ignoreSelector: ".js-toc-ignore", hasInnerContainers: false, linkClass: "toc-link", extraLinkClasses: "", activeLinkClass: "is-active-link", listClass: "toc-list", extraListClasses: "", isCollapsedClass: "is-collapsed", collapsibleClass: "is-collapsible", listItemClass: "toc-list-item", activeListItemClass: "is-active-li", collapseDepth: 0, scrollSmooth: true, scrollSmoothDuration: 420, scrollSmoothOffset: 0, scrollEndCallback: function(e2) {
}, headingsOffset: 1, enableUrlHashUpdateOnScroll: false, scrollHandlerType: "auto", scrollHandlerTimeout: 50, throttleTimeout: 50, positionFixedSelector: null, positionFixedClass: "is-position-fixed", fixedSidebarOffset: "auto", includeHtml: false, includeTitleTags: false, onClick: function(e2) {
}, orderedList: true, scrollContainer: null, skipRendering: false, headingLabelCallback: false, ignoreHiddenElements: false, headingObjectCallback: null, basePath: "", disableTocScrollSync: false, tocScrollingWrapper: null, tocScrollOffset: 30, bottomModeThreshold: 30 };
function parseContent(options) {
  let reduce = [].reduce;
  function getLastItem(array2) {
    return array2[array2.length - 1];
  }
  function getHeadingLevel(heading) {
    return +heading.nodeName.toUpperCase().replace("H", "");
  }
  function isHTMLElement(maybeElement) {
    try {
      return maybeElement instanceof window.HTMLElement || maybeElement instanceof window.parent.HTMLElement;
    } catch {
      return maybeElement instanceof window.HTMLElement;
    }
  }
  function getHeadingObject(heading) {
    if (!isHTMLElement(heading)) return heading;
    if (options.ignoreHiddenElements && (!heading.offsetHeight || !heading.offsetParent)) return null;
    let headingLabel = heading.getAttribute("data-heading-label") || (options.headingLabelCallback ? String(options.headingLabelCallback(heading.innerText)) : (heading.innerText || heading.textContent).trim()), obj = { id: heading.id, children: [], nodeName: heading.nodeName, headingLevel: getHeadingLevel(heading), textContent: headingLabel };
    return options.includeHtml && (obj.childNodes = heading.childNodes), options.headingObjectCallback ? options.headingObjectCallback(obj, heading) : obj;
  }
  function addNode(node, nest) {
    let obj = getHeadingObject(node), level = obj.headingLevel, array2 = nest, lastItem = getLastItem(array2), lastItemLevel = lastItem ? lastItem.headingLevel : 0, counter = level - lastItemLevel;
    for (; counter > 0 && (lastItem = getLastItem(array2), !(lastItem && level === lastItem.headingLevel)); ) lastItem && lastItem.children !== void 0 && (array2 = lastItem.children), counter--;
    return level >= options.collapseDepth && (obj.isCollapsed = true), array2.push(obj), array2;
  }
  function selectHeadings(contentElement, headingSelector) {
    let selectors = headingSelector;
    options.ignoreSelector && (selectors = headingSelector.split(",").map(function(selector) {
      return `${selector.trim()}:not(${options.ignoreSelector})`;
    }));
    try {
      return contentElement.querySelectorAll(selectors);
    } catch {
      return console.warn(`Headers not found with selector: ${selectors}`), null;
    }
  }
  function nestHeadingsArray(headingsArray) {
    return reduce.call(headingsArray, function(prev, curr) {
      let currentHeading = getHeadingObject(curr);
      return currentHeading && addNode(currentHeading, prev.nest), prev;
    }, { nest: [] });
  }
  return { nestHeadingsArray, selectHeadings };
}
function initSmoothScrolling(options) {
  var duration = options.duration, offset = options.offset;
  if (typeof window > "u" || typeof location > "u") return;
  var pageUrl = location.hash ? stripHash(location.href) : location.href;
  delegatedLinkHijacking();
  function delegatedLinkHijacking() {
    document.body.addEventListener("click", onClick, false);
    function onClick(e2) {
      !isInPageLink(e2.target) || e2.target.className.indexOf("no-smooth-scroll") > -1 || e2.target.href.charAt(e2.target.href.length - 2) === "#" && e2.target.href.charAt(e2.target.href.length - 1) === "!" || e2.target.className.indexOf(options.linkClass) === -1 || jump(e2.target.hash, { duration, offset, callback: function() {
        setFocus(e2.target.hash);
      } });
    }
  }
  function isInPageLink(n2) {
    return n2.tagName.toLowerCase() === "a" && (n2.hash.length > 0 || n2.href.charAt(n2.href.length - 1) === "#") && (stripHash(n2.href) === pageUrl || stripHash(n2.href) + "#" === pageUrl);
  }
  function stripHash(url) {
    return url.slice(0, url.lastIndexOf("#"));
  }
  function setFocus(hash) {
    var element = document.getElementById(hash.substring(1));
    element && (/^(?:a|select|input|button|textarea)$/i.test(element.tagName) || (element.tabIndex = -1), element.focus());
  }
}
function jump(target, options) {
  var start = window.pageYOffset, opt = { duration: options.duration, offset: options.offset || 0, callback: options.callback, easing: options.easing || easeInOutQuad }, tgt = document.querySelector('[id="' + decodeURI(target).split("#").join("") + '"]') || document.querySelector('[id="' + target.split("#").join("") + '"]'), distance = typeof target == "string" ? opt.offset + (target ? tgt && tgt.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : target, duration = typeof opt.duration == "function" ? opt.duration(distance) : opt.duration, timeStart, timeElapsed;
  requestAnimationFrame(function(time) {
    timeStart = time, loop(time);
  });
  function loop(time) {
    timeElapsed = time - timeStart, window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration)), timeElapsed < duration ? requestAnimationFrame(loop) : end();
  }
  function end() {
    window.scrollTo(0, start + distance), typeof opt.callback == "function" && opt.callback();
  }
  function easeInOutQuad(t2, b2, c2, d2) {
    return t2 /= d2 / 2, t2 < 1 ? c2 / 2 * t2 * t2 + b2 : (t2--, -c2 / 2 * (t2 * (t2 - 2) - 1) + b2);
  }
}
function updateTocScroll(options) {
  let toc = options.tocScrollingWrapper || options.tocElement || document.querySelector(options.tocSelector);
  if (toc && toc.scrollHeight > toc.clientHeight) {
    let activeItem = toc.querySelector(`.${options.activeListItemClass}`);
    if (activeItem) {
      let scrollAmount = activeItem.offsetTop - options.tocScrollOffset;
      toc.scrollTop = scrollAmount > 0 ? scrollAmount : 0;
    }
  }
}
var _options = {};
var _buildHtml;
var _parseContent;
var _headingsArray;
var _scrollListener;
var clickListener;
function init(customOptions) {
  let hasInitialized = false;
  _options = extend(default_options_default, customOptions || {}), _options.scrollSmooth && (_options.duration = _options.scrollSmoothDuration, _options.offset = _options.scrollSmoothOffset, initSmoothScrolling(_options)), _buildHtml = build_html_default(_options), _parseContent = parseContent(_options), destroy();
  let contentElement = getContentElement(_options);
  if (contentElement === null) return;
  let tocElement = getTocElement(_options);
  if (tocElement === null || (_headingsArray = _parseContent.selectHeadings(contentElement, _options.headingSelector), _headingsArray === null)) return;
  let nestedHeadings = _parseContent.nestHeadingsArray(_headingsArray).nest;
  if (!_options.skipRendering) _buildHtml.render(tocElement, nestedHeadings);
  else return this;
  let isClick = false, scrollHandlerTimeout = _options.scrollHandlerTimeout || _options.throttleTimeout;
  _scrollListener = ((fn2, delay) => getScrollHandler(fn2, delay, _options.scrollHandlerType))((e2) => {
    var _a, _b, _c;
    _buildHtml.updateToc(_headingsArray, e2), !_options.disableTocScrollSync && !isClick && updateTocScroll(_options), _options.enableUrlHashUpdateOnScroll && hasInitialized && _buildHtml.getCurrentlyHighlighting() && _buildHtml.updateUrlHashForHeader(_headingsArray);
    let isTop = ((_b = (_a = e2 == null ? void 0 : e2.target) == null ? void 0 : _a.scrollingElement) == null ? void 0 : _b.scrollTop) === 0;
    (e2 && (e2.eventPhase === 0 || e2.currentTarget === null) || isTop) && (_buildHtml.updateToc(_headingsArray), (_c = _options.scrollEndCallback) == null ? void 0 : _c.call(_options, e2));
  }, scrollHandlerTimeout), hasInitialized || (_scrollListener(), hasInitialized = true), window.onhashchange = window.onscrollend = (e2) => {
    _scrollListener(e2);
  }, _options.scrollContainer && document.querySelector(_options.scrollContainer) ? (document.querySelector(_options.scrollContainer).addEventListener("scroll", _scrollListener, false), document.querySelector(_options.scrollContainer).addEventListener("resize", _scrollListener, false)) : (document.addEventListener("scroll", _scrollListener, false), document.addEventListener("resize", _scrollListener, false));
  let timeout = null;
  clickListener = throttle((event) => {
    isClick = true, _options.scrollSmooth && _buildHtml.disableTocAnimation(event), _buildHtml.updateToc(_headingsArray, event), timeout && clearTimeout(timeout), timeout = setTimeout(() => {
      _buildHtml.enableTocAnimation();
    }, _options.scrollSmoothDuration), setTimeout(() => {
      isClick = false;
    }, _options.scrollSmoothDuration + 100);
  }, _options.throttleTimeout), _options.scrollContainer && document.querySelector(_options.scrollContainer) ? document.querySelector(_options.scrollContainer).addEventListener("click", clickListener, false) : document.addEventListener("click", clickListener, false);
}
function destroy() {
  let tocElement = getTocElement(_options);
  tocElement !== null && (_options.skipRendering || tocElement && (tocElement.innerHTML = ""), _options.scrollContainer && document.querySelector(_options.scrollContainer) ? (document.querySelector(_options.scrollContainer).removeEventListener("scroll", _scrollListener, false), document.querySelector(_options.scrollContainer).removeEventListener("resize", _scrollListener, false), _buildHtml && document.querySelector(_options.scrollContainer).removeEventListener("click", clickListener, false)) : (document.removeEventListener("scroll", _scrollListener, false), document.removeEventListener("resize", _scrollListener, false), _buildHtml && document.removeEventListener("click", clickListener, false)));
}
function refresh(customOptions) {
  destroy(), init(customOptions || _options);
}
var hasOwnProp = Object.prototype.hasOwnProperty;
function extend(...args) {
  let target = {};
  for (let i2 = 0; i2 < args.length; i2++) {
    let source = args[i2];
    for (let key in source) hasOwnProp.call(source, key) && (target[key] = source[key]);
  }
  return target;
}
function throttle(fn2, threshold, scope) {
  threshold || (threshold = 250);
  let last, deferTimer;
  return function(...args) {
    let context = scope || this, now = +/* @__PURE__ */ new Date();
    last && now < last + threshold ? (clearTimeout(deferTimer), deferTimer = setTimeout(() => {
      last = now, fn2.apply(context, args);
    }, threshold)) : (last = now, fn2.apply(context, args));
  };
}
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout), timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
function getScrollHandler(func, timeout, type = "auto") {
  switch (type) {
    case "debounce":
      return debounce(func, timeout);
    case "throttle":
      return throttle(func, timeout);
    default:
      return timeout < 334 ? debounce(func, timeout) : throttle(func, timeout);
  }
}
function getContentElement(options) {
  try {
    return options.contentElement || document.querySelector(options.contentSelector);
  } catch {
    return console.warn(`Contents element not found: ${options.contentSelector}`), null;
  }
}
function getTocElement(options) {
  try {
    return options.tocElement || document.querySelector(options.tocSelector);
  } catch {
    return console.warn(`TOC element not found: ${options.tocSelector}`), null;
  }
}
var tocbot = { destroy, init, refresh };
var tocbot_default = tocbot;
var Aside = xr.aside(() => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } }));
var Nav = xr.nav(({ theme }) => ({ position: "fixed", bottom: 0, top: 0, width: "10rem", paddingTop: "4rem", paddingBottom: "2rem", overflowY: "auto", fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${theme.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: theme.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: theme.color.secondary, textDecoration: "none" } }));
var Heading = xr.p(({ theme }) => ({ fontWeight: 600, fontSize: "0.875em", color: theme.textColor, textTransform: "uppercase", marginBottom: 10 }));
var Title2 = ({ headingId, title }) => typeof title == "string" || !title ? import_react.default.createElement(Heading, { as: "h2", id: headingId, className: title ? "" : "sb-sr-only" }, title || "Table of contents") : import_react.default.createElement("div", { id: headingId }, title);
var TableOfContents = ({ title, disable, headingSelector, contentsSelector, ignoreSelector, unsafeTocbotOptions, channel, className }) => {
  (0, import_react.useEffect)(() => {
    if (disable) return () => {
    };
    let configuration = { tocSelector: ".toc-wrapper", contentSelector: contentsSelector ?? ".sbdocs-content", headingSelector: headingSelector ?? "h3", ignoreSelector: ignoreSelector ?? ".docs-story *, .skip-toc", headingsOffset: 40, scrollSmoothOffset: -40, orderedList: false, onClick: (e2) => {
      if (e2.preventDefault(), e2.currentTarget instanceof HTMLAnchorElement) {
        let [, headerId] = e2.currentTarget.href.split("#");
        headerId && channel.emit(import_core_events.NAVIGATE_URL, `#${headerId}`);
      }
    }, ...unsafeTocbotOptions }, timeout = setTimeout(() => tocbot_default.init(configuration), 100);
    return () => {
      clearTimeout(timeout), tocbot_default.destroy();
    };
  }, [channel, disable, ignoreSelector, contentsSelector, headingSelector, unsafeTocbotOptions]);
  let headingId = (0, import_react.useId)();
  return import_react.default.createElement(Aside, { className }, disable ? null : import_react.default.createElement(Nav, { "aria-labelledby": headingId }, import_react.default.createElement(Title2, { headingId, title }), import_react.default.createElement("div", { className: "toc-wrapper" })));
};
function t() {
  return t = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r22 in n2) Object.prototype.hasOwnProperty.call(n2, r22) && (e2[r22] = n2[r22]);
    }
    return e2;
  }, t.apply(this, arguments);
}
var n = ["children", "options"];
var r2 = { blockQuote: "0", breakLine: "1", breakThematic: "2", codeBlock: "3", codeFenced: "4", codeInline: "5", footnote: "6", footnoteReference: "7", gfmTask: "8", heading: "9", headingSetext: "10", htmlBlock: "11", htmlComment: "12", htmlSelfClosing: "13", image: "14", link: "15", linkAngleBraceStyleDetector: "16", linkBareUrlDetector: "17", linkMailtoDetector: "18", newlineCoalescer: "19", orderedList: "20", paragraph: "21", ref: "22", refImage: "23", refLink: "24", table: "25", tableSeparator: "26", text: "27", textBolded: "28", textEmphasized: "29", textEscaped: "30", textMarked: "31", textStrikethroughed: "32", unorderedList: "33" };
var i;
(function(e2) {
  e2[e2.MAX = 0] = "MAX", e2[e2.HIGH = 1] = "HIGH", e2[e2.MED = 2] = "MED", e2[e2.LOW = 3] = "LOW", e2[e2.MIN = 4] = "MIN";
})(i || (i = {}));
var l = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e2, t2) => (e2[t2.toLowerCase()] = t2, e2), { class: "className", for: "htmlFor" });
var o = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" };
var a = ["style", "script"];
var c = ["src", "href", "data", "formAction", "srcDoc", "action"];
var s = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi;
var d = /mailto:/i;
var u = /\n{2,}$/;
var p = /^(\s*>[\s\S]*?)(?=\n\n|$)/;
var f = /^ *> ?/gm;
var h = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/;
var m = /^ {2,}\n/;
var g = /^(?:( *[-*_])){3,} *(?:\n *)+\n/;
var y = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/;
var k = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/;
var x = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/;
var b = /^(?:\n *)*\n/;
var v2 = /\r\n?/g;
var C2 = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/;
var $2 = /^\[\^([^\]]+)]/;
var S = /\f/g;
var w2 = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/;
var E = /^\s*?\[(x|\s)\]/;
var z2 = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
var L = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
var A2 = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/;
var O = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i;
var T = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi;
var B2 = /^<!--[\s\S]*?(?:-->)/;
var M2 = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/;
var R = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i;
var I = /^\{.*\}$/;
var D = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/;
var U = /^<([^ >]+@[^ >]+)>/;
var N2 = /^<([^ >]+:\/[^ >]+)>/;
var j = /-([a-z])?/gi;
var H = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/;
var P = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/;
var _2 = /^!\[([^\]]*)\] ?\[([^\]]*)\]/;
var F = /^\[([^\]]*)\] ?\[([^\]]*)\]/;
var W = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/;
var G = /\t/g;
var Z = /(^ *\||\| *$)/g;
var q = /^ *:-+: *$/;
var Q = /^ *:-+ *$/;
var V = /^ *-+: *$/;
var X2 = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)";
var J2 = new RegExp(`^([*_])\\1${X2}\\1\\1(?!\\1)`);
var K2 = new RegExp(`^([*_])${X2}\\1(?!\\1)`);
var Y = new RegExp(`^(==)${X2}\\1`);
var ee = new RegExp(`^(~~)${X2}\\1`);
var te = /^\\([^0-9A-Za-z\s])/;
var ne = /\\([^0-9A-Za-z\s])/g;
var re = /^([\s\S](?:(?!  |[0-9]\.)[^=*_~\-\n<`\\\[!])*)/;
var ie2 = /^\n+/;
var le2 = /^([ \t]*)/;
var oe = /\\([^\\])/g;
var ae = /(?:^|\n)( *)$/;
var ce2 = "(?:\\d+\\.)";
var se = "(?:[*+-])";
function de(e2) {
  return "( *)(" + (e2 === 1 ? ce2 : se) + ") +";
}
var ue2 = de(1);
var pe2 = de(2);
function fe(e2) {
  return new RegExp("^" + (e2 === 1 ? ue2 : pe2));
}
var he = fe(1);
var me2 = fe(2);
function ge(e2) {
  return new RegExp("^" + (e2 === 1 ? ue2 : pe2) + "[^\\n]*(?:\\n(?!\\1" + (e2 === 1 ? ce2 : se) + " )[^\\n]*)*(\\n|$)", "gm");
}
var ye2 = ge(1);
var ke = ge(2);
function xe(e2) {
  let t2 = e2 === 1 ? ce2 : se;
  return new RegExp("^( *)(" + t2 + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t2 + " (?!" + t2 + " ))\\n*|\\s*\\n*$)");
}
var be = xe(1);
var ve = xe(2);
function Ce2(e2, t2) {
  let n2 = t2 === 1, i2 = n2 ? be : ve, l2 = n2 ? ye2 : ke, o2 = n2 ? he : me2;
  return { match: Me2(function(e3, t3) {
    let n3 = ae.exec(t3.prevCapture);
    return n3 && (t3.list || !t3.inline && !t3.simple) ? i2.exec(e3 = n3[1] + e3) : null;
  }), order: 1, parse(e3, t3, r22) {
    let i3 = n2 ? +e3[2] : void 0, a2 = e3[0].replace(u, `
`).match(l2), c2 = false;
    return { items: a2.map(function(e4, n3) {
      let i4 = o2.exec(e4)[0].length, l3 = new RegExp("^ {1," + i4 + "}", "gm"), s2 = e4.replace(l3, "").replace(o2, ""), d2 = n3 === a2.length - 1, u2 = s2.indexOf(`

`) !== -1 || d2 && c2;
      c2 = u2;
      let p2 = r22.inline, f2 = r22.list, h2;
      r22.list = true, u2 ? (r22.inline = false, h2 = ze(s2) + `

`) : (r22.inline = true, h2 = ze(s2));
      let m2 = t3(h2, r22);
      return r22.inline = p2, r22.list = f2, m2;
    }), ordered: n2, start: i3 };
  }, render: (t3, n3, i3) => e2(t3.ordered ? "ol" : "ul", { key: i3.key, start: t3.type === r2.orderedList ? t3.start : void 0 }, t3.items.map(function(t4, r22) {
    return e2("li", { key: r22 }, n3(t4, i3));
  })) };
}
var $e2 = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`);
var Se = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
var we = [p, y, k, z2, A2, L, H, be, ve];
var Ee = [...we, /^[^\n]+(?:  \n|\n{2,})/, O, B2, R];
function ze(e2) {
  let t2 = e2.length;
  for (; t2 > 0 && e2[t2 - 1] <= " "; ) t2--;
  return e2.slice(0, t2);
}
function Le2(e2) {
  return e2.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Ae(e2) {
  return V.test(e2) ? "right" : q.test(e2) ? "center" : Q.test(e2) ? "left" : null;
}
function Oe(e2, t2, n2, r22) {
  let i2 = n2.inTable;
  n2.inTable = true;
  let l2 = [[]], o2 = "";
  function a2() {
    if (!o2) return;
    let e3 = l2[l2.length - 1];
    e3.push.apply(e3, t2(o2, n2)), o2 = "";
  }
  return e2.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((e3, t3, n3) => {
    e3.trim() === "|" && (a2(), r22) ? t3 !== 0 && t3 !== n3.length - 1 && l2.push([]) : o2 += e3;
  }), a2(), n2.inTable = i2, l2;
}
function Te(e2, t2, n2) {
  n2.inline = true;
  let i2 = e2[2] ? e2[2].replace(Z, "").split("|").map(Ae) : [], l2 = e2[3] ? function(e3, t3, n3) {
    return e3.trim().split(`
`).map(function(e4) {
      return Oe(e4, t3, n3, true);
    });
  }(e2[3], t2, n2) : [], o2 = Oe(e2[1], t2, n2, !!l2.length);
  return n2.inline = false, l2.length ? { align: i2, cells: l2, header: o2, type: r2.table } : { children: o2, type: r2.paragraph };
}
function Be2(e2, t2) {
  return e2.align[t2] == null ? {} : { textAlign: e2.align[t2] };
}
function Me2(e2) {
  return e2.inline = 1, e2;
}
function Re2(e2) {
  return Me2(function(t2, n2) {
    return n2.inline ? e2.exec(t2) : null;
  });
}
function Ie2(e2) {
  return Me2(function(t2, n2) {
    return n2.inline || n2.simple ? e2.exec(t2) : null;
  });
}
function De(e2) {
  return function(t2, n2) {
    return n2.inline || n2.simple ? null : e2.exec(t2);
  };
}
function Ue2(e2) {
  return Me2(function(t2) {
    return e2.exec(t2);
  });
}
function Ne(e2, t2) {
  if (t2.inline || t2.simple) return null;
  let n2 = "";
  e2.split(`
`).every((e3) => (e3 += `
`, !we.some((t3) => t3.test(e3)) && (n2 += e3, !!e3.trim())));
  let r22 = ze(n2);
  return r22 == "" ? null : [n2, , r22];
}
var je2 = /(javascript|vbscript|data(?!:image)):/i;
function He(e2) {
  try {
    let t2 = decodeURIComponent(e2).replace(/[^A-Za-z0-9/:]/g, "");
    if (je2.test(t2)) return null;
  } catch {
    return null;
  }
  return e2;
}
function Pe(e2) {
  return e2.replace(oe, "$1");
}
function _e2(e2, t2, n2) {
  let r22 = n2.inline || false, i2 = n2.simple || false;
  n2.inline = true, n2.simple = true;
  let l2 = e2(t2, n2);
  return n2.inline = r22, n2.simple = i2, l2;
}
function Fe2(e2, t2, n2) {
  let r22 = n2.inline || false, i2 = n2.simple || false;
  n2.inline = false, n2.simple = true;
  let l2 = e2(t2, n2);
  return n2.inline = r22, n2.simple = i2, l2;
}
function We(e2, t2, n2) {
  let r22 = n2.inline || false;
  n2.inline = false;
  let i2 = e2(t2, n2);
  return n2.inline = r22, i2;
}
var Ge = (e2, t2, n2) => ({ children: _e2(t2, e2[2], n2) });
function Ze() {
  return {};
}
function qe2() {
  return null;
}
function Qe(...e2) {
  return e2.filter(Boolean).join(" ");
}
function Ve2(e2, t2, n2) {
  let r22 = e2, i2 = t2.split(".");
  for (; i2.length && (r22 = r22[i2[0]], r22 !== void 0); ) i2.shift();
  return r22 || n2;
}
function Xe(n2 = "", i2 = {}) {
  function u2(e2, n3, ...r22) {
    let l2 = Ve2(i2.overrides, `${e2}.props`, {});
    return i2.createElement(function(e3, t2) {
      let n4 = Ve2(t2, e3);
      return n4 ? typeof n4 == "function" || typeof n4 == "object" && "render" in n4 ? n4 : Ve2(t2, `${e3}.component`, e3) : e3;
    }(e2, i2.overrides), t({}, n3, l2, { className: Qe(n3 == null ? void 0 : n3.className, l2.className) || void 0 }), ...r22);
  }
  function Z2(e2) {
    e2 = e2.replace(w2, "");
    let t2 = false;
    i2.forceInline ? t2 = true : i2.forceBlock || (t2 = W.test(e2) === false);
    let n3 = ae2(oe2(t2 ? e2 : `${ze(e2).replace(ie2, "")}

`, { inline: t2 }));
    for (; typeof n3[n3.length - 1] == "string" && !n3[n3.length - 1].trim(); ) n3.pop();
    if (i2.wrapper === null) return n3;
    let r22 = i2.wrapper || (t2 ? "span" : "div"), l2;
    if (n3.length > 1 || i2.forceWrapper) l2 = n3;
    else {
      if (n3.length === 1) return l2 = n3[0], typeof l2 == "string" ? u2("span", { key: "outer" }, l2) : l2;
      l2 = null;
    }
    return i2.createElement(r22, { key: "outer" }, l2);
  }
  function q2(e2, t2) {
    let n3 = t2.match(s);
    return n3 ? n3.reduce(function(t3, n4) {
      let r22 = n4.indexOf("=");
      if (r22 !== -1) {
        let o2 = function(e3) {
          return e3.indexOf("-") !== -1 && e3.match(M2) === null && (e3 = e3.replace(j, function(e4, t4) {
            return t4.toUpperCase();
          })), e3;
        }(n4.slice(0, r22)).trim(), a2 = function(e3) {
          let t4 = e3[0];
          return (t4 === '"' || t4 === "'") && e3.length >= 2 && e3[e3.length - 1] === t4 ? e3.slice(1, -1) : e3;
        }(n4.slice(r22 + 1).trim()), s2 = l[o2] || o2;
        if (s2 === "ref") return t3;
        let d2 = t3[s2] = function(e3, t4, n5, r3) {
          return t4 === "style" ? function(e4) {
            let t5 = [], n6 = "", r4 = false, i3 = false, l2 = "";
            if (!e4) return t5;
            for (let o4 = 0; o4 < e4.length; o4++) {
              let a3 = e4[o4];
              if (a3 !== '"' && a3 !== "'" || r4 || (i3 ? a3 === l2 && (i3 = false, l2 = "") : (i3 = true, l2 = a3)), a3 === "(" && n6.endsWith("url") ? r4 = true : a3 === ")" && r4 && (r4 = false), a3 !== ";" || i3 || r4) n6 += a3;
              else {
                let e5 = n6.trim();
                if (e5) {
                  let n7 = e5.indexOf(":");
                  if (n7 > 0) {
                    let r5 = e5.slice(0, n7).trim(), i4 = e5.slice(n7 + 1).trim();
                    t5.push([r5, i4]);
                  }
                }
                n6 = "";
              }
            }
            let o3 = n6.trim();
            if (o3) {
              let e5 = o3.indexOf(":");
              if (e5 > 0) {
                let n7 = o3.slice(0, e5).trim(), r5 = o3.slice(e5 + 1).trim();
                t5.push([n7, r5]);
              }
            }
            return t5;
          }(n5).reduce(function(t5, [n6, i3]) {
            return t5[n6.replace(/(-[a-z])/g, (e4) => e4[1].toUpperCase())] = r3(i3, e3, n6), t5;
          }, {}) : c.indexOf(t4) !== -1 ? r3(n5, e3, t4) : (n5.match(I) && (n5 = n5.slice(1, n5.length - 1)), n5 === "true" || n5 !== "false" && n5);
        }(e2, o2, a2, i2.sanitizer);
        typeof d2 == "string" && (O.test(d2) || R.test(d2)) && (t3[s2] = Z2(d2.trim()));
      } else n4 !== "style" && (t3[l[n4] || n4] = true);
      return t3;
    }, {}) : null;
  }
  i2.overrides = i2.overrides || {}, i2.sanitizer = i2.sanitizer || He, i2.slugify = i2.slugify || Le2, i2.namedCodesToUnicode = i2.namedCodesToUnicode ? t({}, o, i2.namedCodesToUnicode) : o, i2.createElement = i2.createElement || React20.createElement;
  let Q2 = [], V2 = {}, X22 = { [r2.blockQuote]: { match: De(p), order: 1, parse(e2, t2, n3) {
    let [, r22, i3] = e2[0].replace(f, "").match(h);
    return { alert: r22, children: t2(i3, n3) };
  }, render(e2, t2, n3) {
    let l2 = { key: n3.key };
    return e2.alert && (l2.className = "markdown-alert-" + i2.slugify(e2.alert.toLowerCase(), Le2), e2.children.unshift({ attrs: {}, children: [{ type: r2.text, text: e2.alert }], noInnerParse: true, type: r2.htmlBlock, tag: "header" })), u2("blockquote", l2, t2(e2.children, n3));
  } }, [r2.breakLine]: { match: Ue2(m), order: 1, parse: Ze, render: (e2, t2, n3) => u2("br", { key: n3.key }) }, [r2.breakThematic]: { match: De(g), order: 1, parse: Ze, render: (e2, t2, n3) => u2("hr", { key: n3.key }) }, [r2.codeBlock]: { match: De(k), order: 0, parse: (e2) => ({ lang: void 0, text: ze(e2[0].replace(/^ {4}/gm, "")).replace(ne, "$1") }), render: (e2, n3, r22) => u2("pre", { key: r22.key }, u2("code", t({}, e2.attrs, { className: e2.lang ? `lang-${e2.lang}` : "" }), e2.text)) }, [r2.codeFenced]: { match: De(y), order: 0, parse: (e2) => ({ attrs: q2("code", e2[3] || ""), lang: e2[2] || void 0, text: e2[4], type: r2.codeBlock }) }, [r2.codeInline]: { match: Ie2(x), order: 3, parse: (e2) => ({ text: e2[2].replace(ne, "$1") }), render: (e2, t2, n3) => u2("code", { key: n3.key }, e2.text) }, [r2.footnote]: { match: De(C2), order: 0, parse: (e2) => (Q2.push({ footnote: e2[2], identifier: e2[1] }), {}), render: qe2 }, [r2.footnoteReference]: { match: Re2($2), order: 1, parse: (e2) => ({ target: `#${i2.slugify(e2[1], Le2)}`, text: e2[1] }), render: (e2, t2, n3) => u2("a", { key: n3.key, href: i2.sanitizer(e2.target, "a", "href") }, u2("sup", { key: n3.key }, e2.text)) }, [r2.gfmTask]: { match: Re2(E), order: 1, parse: (e2) => ({ completed: e2[1].toLowerCase() === "x" }), render: (e2, t2, n3) => u2("input", { checked: e2.completed, key: n3.key, readOnly: true, type: "checkbox" }) }, [r2.heading]: { match: De(i2.enforceAtxHeadings ? L : z2), order: 1, parse: (e2, t2, n3) => ({ children: _e2(t2, e2[2], n3), id: i2.slugify(e2[2], Le2), level: e2[1].length }), render: (e2, t2, n3) => u2(`h${e2.level}`, { id: e2.id, key: n3.key }, t2(e2.children, n3)) }, [r2.headingSetext]: { match: De(A2), order: 0, parse: (e2, t2, n3) => ({ children: _e2(t2, e2[1], n3), level: e2[2] === "=" ? 1 : 2, type: r2.heading }) }, [r2.htmlBlock]: { match: Ue2(O), order: 1, parse(e2, t2, n3) {
    let [, r22] = e2[3].match(le2), i3 = new RegExp(`^${r22}`, "gm"), l2 = e2[3].replace(i3, ""), o2 = (c2 = l2, Ee.some((e3) => e3.test(c2)) ? We : _e2);
    var c2;
    let s2 = e2[1].toLowerCase(), d2 = a.indexOf(s2) !== -1, u3 = (d2 ? s2 : e2[1]).trim(), p2 = { attrs: q2(u3, e2[2]), noInnerParse: d2, tag: u3 };
    return n3.inAnchor = n3.inAnchor || s2 === "a", d2 ? p2.text = e2[3] : p2.children = o2(t2, l2, n3), n3.inAnchor = false, p2;
  }, render: (e2, n3, r22) => u2(e2.tag, t({ key: r22.key }, e2.attrs), e2.text || (e2.children ? n3(e2.children, r22) : "")) }, [r2.htmlSelfClosing]: { match: Ue2(R), order: 1, parse(e2) {
    let t2 = e2[1].trim();
    return { attrs: q2(t2, e2[2] || ""), tag: t2 };
  }, render: (e2, n3, r22) => u2(e2.tag, t({}, e2.attrs, { key: r22.key })) }, [r2.htmlComment]: { match: Ue2(B2), order: 1, parse: () => ({}), render: qe2 }, [r2.image]: { match: Ie2(Se), order: 1, parse: (e2) => ({ alt: e2[1], target: Pe(e2[2]), title: e2[3] }), render: (e2, t2, n3) => u2("img", { key: n3.key, alt: e2.alt || void 0, title: e2.title || void 0, src: i2.sanitizer(e2.target, "img", "src") }) }, [r2.link]: { match: Re2($e2), order: 3, parse: (e2, t2, n3) => ({ children: Fe2(t2, e2[1], n3), target: Pe(e2[2]), title: e2[3] }), render: (e2, t2, n3) => u2("a", { key: n3.key, href: i2.sanitizer(e2.target, "a", "href"), title: e2.title }, t2(e2.children, n3)) }, [r2.linkAngleBraceStyleDetector]: { match: Re2(N2), order: 0, parse: (e2) => ({ children: [{ text: e2[1], type: r2.text }], target: e2[1], type: r2.link }) }, [r2.linkBareUrlDetector]: { match: Me2((e2, t2) => t2.inAnchor || i2.disableAutoLink ? null : Re2(D)(e2, t2)), order: 0, parse: (e2) => ({ children: [{ text: e2[1], type: r2.text }], target: e2[1], title: void 0, type: r2.link }) }, [r2.linkMailtoDetector]: { match: Re2(U), order: 0, parse(e2) {
    let t2 = e2[1], n3 = e2[1];
    return d.test(n3) || (n3 = "mailto:" + n3), { children: [{ text: t2.replace("mailto:", ""), type: r2.text }], target: n3, type: r2.link };
  } }, [r2.orderedList]: Ce2(u2, 1), [r2.unorderedList]: Ce2(u2, 2), [r2.newlineCoalescer]: { match: De(b), order: 3, parse: Ze, render: () => `
` }, [r2.paragraph]: { match: Me2(Ne), order: 3, parse: Ge, render: (e2, t2, n3) => u2("p", { key: n3.key }, t2(e2.children, n3)) }, [r2.ref]: { match: Re2(P), order: 0, parse: (e2) => (V2[e2[1]] = { target: e2[2], title: e2[4] }, {}), render: qe2 }, [r2.refImage]: { match: Ie2(_2), order: 0, parse: (e2) => ({ alt: e2[1] || void 0, ref: e2[2] }), render: (e2, t2, n3) => V2[e2.ref] ? u2("img", { key: n3.key, alt: e2.alt, src: i2.sanitizer(V2[e2.ref].target, "img", "src"), title: V2[e2.ref].title }) : null }, [r2.refLink]: { match: Re2(F), order: 0, parse: (e2, t2, n3) => ({ children: t2(e2[1], n3), fallbackChildren: e2[0], ref: e2[2] }), render: (e2, t2, n3) => V2[e2.ref] ? u2("a", { key: n3.key, href: i2.sanitizer(V2[e2.ref].target, "a", "href"), title: V2[e2.ref].title }, t2(e2.children, n3)) : u2("span", { key: n3.key }, e2.fallbackChildren) }, [r2.table]: { match: De(H), order: 1, parse: Te, render(e2, t2, n3) {
    let r22 = e2;
    return u2("table", { key: n3.key }, u2("thead", null, u2("tr", null, r22.header.map(function(e3, i3) {
      return u2("th", { key: i3, style: Be2(r22, i3) }, t2(e3, n3));
    }))), u2("tbody", null, r22.cells.map(function(e3, i3) {
      return u2("tr", { key: i3 }, e3.map(function(e4, i4) {
        return u2("td", { key: i4, style: Be2(r22, i4) }, t2(e4, n3));
      }));
    })));
  } }, [r2.text]: { match: Ue2(re), order: 4, parse: (e2) => ({ text: e2[0].replace(T, (e3, t2) => i2.namedCodesToUnicode[t2] ? i2.namedCodesToUnicode[t2] : e3) }), render: (e2) => e2.text }, [r2.textBolded]: { match: Ie2(J2), order: 2, parse: (e2, t2, n3) => ({ children: t2(e2[2], n3) }), render: (e2, t2, n3) => u2("strong", { key: n3.key }, t2(e2.children, n3)) }, [r2.textEmphasized]: { match: Ie2(K2), order: 3, parse: (e2, t2, n3) => ({ children: t2(e2[2], n3) }), render: (e2, t2, n3) => u2("em", { key: n3.key }, t2(e2.children, n3)) }, [r2.textEscaped]: { match: Ie2(te), order: 1, parse: (e2) => ({ text: e2[1], type: r2.text }) }, [r2.textMarked]: { match: Ie2(Y), order: 3, parse: Ge, render: (e2, t2, n3) => u2("mark", { key: n3.key }, t2(e2.children, n3)) }, [r2.textStrikethroughed]: { match: Ie2(ee), order: 3, parse: Ge, render: (e2, t2, n3) => u2("del", { key: n3.key }, t2(e2.children, n3)) } };
  i2.disableParsingRawHTML === true && (delete X22[r2.htmlBlock], delete X22[r2.htmlSelfClosing]);
  let oe2 = function(e2) {
    let t2 = Object.keys(e2);
    function n3(r22, i3) {
      let l2, o2, a2 = [], c2 = "", s2 = "";
      for (i3.prevCapture = i3.prevCapture || ""; r22; ) {
        let d2 = 0;
        for (; d2 < t2.length; ) {
          if (c2 = t2[d2], l2 = e2[c2], i3.inline && !l2.match.inline) {
            d2++;
            continue;
          }
          let u3 = l2.match(r22, i3);
          if (u3) {
            s2 = u3[0], i3.prevCapture += s2, r22 = r22.substring(s2.length), o2 = l2.parse(u3, n3, i3), o2.type == null && (o2.type = c2), a2.push(o2);
            break;
          }
          d2++;
        }
      }
      return i3.prevCapture = "", a2;
    }
    return t2.sort(function(t3, n4) {
      let r22 = e2[t3].order, i3 = e2[n4].order;
      return r22 !== i3 ? r22 - i3 : t3 < n4 ? -1 : 1;
    }), function(e3, t3) {
      return n3(function(e4) {
        return e4.replace(v2, `
`).replace(S, "").replace(G, "    ");
      }(e3), t3);
    };
  }(X22), ae2 = (ce22 = /* @__PURE__ */ function(e2, t2) {
    return function(n3, r22, i3) {
      let l2 = e2[n3.type].render;
      return t2 ? t2(() => l2(n3, r22, i3), n3, r22, i3) : l2(n3, r22, i3);
    };
  }(X22, i2.renderRule), function e2(t2, n3 = {}) {
    if (Array.isArray(t2)) {
      let r22 = n3.key, i3 = [], l2 = false;
      for (let r3 = 0; r3 < t2.length; r3++) {
        n3.key = r3;
        let o2 = e2(t2[r3], n3), a2 = typeof o2 == "string";
        a2 && l2 ? i3[i3.length - 1] += o2 : o2 !== null && i3.push(o2), l2 = a2;
      }
      return n3.key = r22, i3;
    }
    return ce22(t2, e2, n3);
  });
  var ce22;
  let se2 = Z2(n2);
  return Q2.length ? u2("div", null, se2, u2("footer", { key: "footer" }, Q2.map(function(e2) {
    return u2("div", { id: i2.slugify(e2.identifier, Le2), key: e2.identifier }, e2.identifier, ae2(oe2(e2.footnote, { inline: true })));
  }))) : se2;
}
var index_modern_default = (t2) => {
  let { children: r22 = "", options: i2 } = t2, l2 = function(e2, t3) {
    if (e2 == null) return {};
    var n2, r3, i3 = {}, l3 = Object.keys(e2);
    for (r3 = 0; r3 < l3.length; r3++) t3.indexOf(n2 = l3[r3]) >= 0 || (i3[n2] = e2[n2]);
    return i3;
  }(t2, n);
  return React20.cloneElement(Xe(r22, i2), l2);
};
var Label2 = xr.label(({ theme }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: theme.boolean.background, borderRadius: "3em", padding: 1, '&[aria-disabled="true"]': { opacity: 0.5, input: { cursor: "not-allowed" } }, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${theme.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: theme.typography.size.s1, fontWeight: theme.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: curriedTransparentize$1(0.5, theme.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${curriedOpacify$1(0.3, theme.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${curriedOpacify$1(0.05, theme.appBorderColor)} 0 0 0 2px inset`, color: curriedOpacify$1(1, theme.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: theme.boolean.selectedBackground, boxShadow: theme.base === "light" ? `${curriedOpacify$1(0.1, theme.appBorderColor)} 0 0 2px` : `${theme.appBorderColor} 0 0 0 1px`, color: theme.color.defaultText, padding: "7px 15px" } }));
var parse = (value2) => value2 === "true";
var BooleanControl = ({ name, value: value2, onChange, onBlur, onFocus, argType }) => {
  var _a;
  let onSetFalse = (0, import_react.useCallback)(() => onChange(false), [onChange]), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  if (value2 === void 0) return import_react.default.createElement(Ir2, { variant: "outline", size: "medium", id: getControlSetterButtonId(name), onClick: onSetFalse, disabled: readonly }, "Set boolean");
  let controlId = getControlId(name), parsedValue = typeof value2 == "string" ? parse(value2) : value2;
  return import_react.default.createElement(Label2, { "aria-disabled": readonly, htmlFor: controlId, "aria-label": name }, import_react.default.createElement("input", { id: controlId, type: "checkbox", onChange: (e2) => onChange(e2.target.checked), checked: parsedValue, role: "switch", disabled: readonly, name, onBlur, onFocus }), import_react.default.createElement("span", { "aria-hidden": "true" }, "False"), import_react.default.createElement("span", { "aria-hidden": "true" }, "True"));
};
var parseDate = (value2) => {
  let [year, month, day] = value2.split("-"), result = /* @__PURE__ */ new Date();
  return result.setFullYear(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10)), result;
};
var parseTime = (value2) => {
  let [hours, minutes] = value2.split(":"), result = /* @__PURE__ */ new Date();
  return result.setHours(parseInt(hours, 10)), result.setMinutes(parseInt(minutes, 10)), result;
};
var formatDate = (value2) => {
  let date = new Date(value2), year = `000${date.getFullYear()}`.slice(-4), month = `0${date.getMonth() + 1}`.slice(-2), day = `0${date.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
};
var formatTime = (value2) => {
  let date = new Date(value2), hours = `0${date.getHours()}`.slice(-2), minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
};
var FormInput = xr(N7.Input)(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 }));
var FlexSpaced = xr.div(({ theme }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: theme.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } }));
var DateControl = ({ name, value: value2, onChange, onFocus, onBlur, argType }) => {
  var _a;
  let [valid, setValid] = (0, import_react.useState)(true), dateRef = (0, import_react.useRef)(), timeRef = (0, import_react.useRef)(), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  (0, import_react.useEffect)(() => {
    valid !== false && (dateRef && dateRef.current && (dateRef.current.value = value2 ? formatDate(value2) : ""), timeRef && timeRef.current && (timeRef.current.value = value2 ? formatTime(value2) : ""));
  }, [value2]);
  let onDateChange = (e2) => {
    if (!e2.target.value) return onChange();
    let parsed = parseDate(e2.target.value), result = new Date(value2 ?? "");
    result.setFullYear(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
    let time = result.getTime();
    time && onChange(time), setValid(!!time);
  }, onTimeChange = (e2) => {
    if (!e2.target.value) return onChange();
    let parsed = parseTime(e2.target.value), result = new Date(value2 ?? "");
    result.setHours(parsed.getHours()), result.setMinutes(parsed.getMinutes());
    let time = result.getTime();
    time && onChange(time), setValid(!!time);
  }, controlId = getControlId(name);
  return import_react.default.createElement(FlexSpaced, null, import_react.default.createElement(FormInput, { type: "date", max: "9999-12-31", ref: dateRef, id: `${controlId}-date`, name: `${controlId}-date`, readOnly: readonly, onChange: onDateChange, onFocus, onBlur }), import_react.default.createElement(FormInput, { type: "time", id: `${controlId}-time`, name: `${controlId}-time`, ref: timeRef, onChange: onTimeChange, readOnly: readonly, onFocus, onBlur }), valid ? null : import_react.default.createElement("div", null, "invalid"));
};
var Wrapper4 = xr.label({ display: "flex" });
var parse2 = (value2) => {
  let result = parseFloat(value2);
  return Number.isNaN(result) ? void 0 : result;
};
var format2 = (value2) => value2 != null ? String(value2) : "";
var FormInput2 = xr(N7.Input)(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 }));
var NumberControl = ({ name, value: value2, onChange, min, max, step, onBlur, onFocus, argType }) => {
  var _a;
  let [inputValue, setInputValue] = (0, import_react.useState)(typeof value2 == "number" ? value2 : ""), [forceVisible, setForceVisible] = (0, import_react.useState)(false), [parseError, setParseError] = (0, import_react.useState)(null), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), handleChange = (0, import_react.useCallback)((event) => {
    setInputValue(event.target.value);
    let result = parseFloat(event.target.value);
    Number.isNaN(result) ? setParseError(new Error(`'${event.target.value}' is not a number`)) : (onChange(result), setParseError(null));
  }, [onChange, setParseError]), onForceVisible = (0, import_react.useCallback)(() => {
    setInputValue("0"), onChange(0), setForceVisible(true);
  }, [setForceVisible]), htmlElRef = (0, import_react.useRef)(null);
  return (0, import_react.useEffect)(() => {
    forceVisible && htmlElRef.current && htmlElRef.current.select();
  }, [forceVisible]), (0, import_react.useEffect)(() => {
    let newInputValue = typeof value2 == "number" ? value2 : "";
    inputValue !== newInputValue && setInputValue(newInputValue);
  }, [value2]), value2 === void 0 ? import_react.default.createElement(Ir2, { variant: "outline", size: "medium", id: getControlSetterButtonId(name), onClick: onForceVisible, disabled: readonly }, "Set number") : import_react.default.createElement(Wrapper4, null, import_react.default.createElement(FormInput2, { ref: htmlElRef, id: getControlId(name), type: "number", onChange: handleChange, size: "flex", placeholder: "Edit number...", value: inputValue, valid: parseError ? "error" : void 0, autoFocus: forceVisible, readOnly: readonly, name, min, max, step, onFocus, onBlur }));
};
var selectedKey = (value2, options) => {
  let entry = options && Object.entries(options).find(([_key, val]) => val === value2);
  return entry ? entry[0] : void 0;
};
var selectedKeys = (value2, options) => value2 && options ? Object.entries(options).filter((entry) => value2.includes(entry[1])).map((entry) => entry[0]) : [];
var selectedValues = (keys, options) => keys && options && keys.map((key) => options[key]);
var Wrapper5 = xr.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }, (props) => {
  if (props["aria-readonly"] === "true") return { input: { cursor: "not-allowed" } };
});
var Text = xr.span({ "[aria-readonly=true] &": { opacity: 0.5 } });
var Label3 = xr.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } });
var CheckboxControl = ({ name, options, value: value2, onChange, isInline, argType }) => {
  var _a;
  if (!options) return import_client_logger.logger.warn(`Checkbox with no options: ${name}`), import_react.default.createElement(import_react.default.Fragment, null, "-");
  let initial = selectedKeys(value2 || [], options), [selected, setSelected] = (0, import_react.useState)(initial), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), handleChange = (e2) => {
    let option = e2.target.value, updated = [...selected];
    updated.includes(option) ? updated.splice(updated.indexOf(option), 1) : updated.push(option), onChange(selectedValues(updated, options)), setSelected(updated);
  };
  (0, import_react.useEffect)(() => {
    setSelected(selectedKeys(value2 || [], options));
  }, [value2]);
  let controlId = getControlId(name);
  return import_react.default.createElement(Wrapper5, { "aria-readonly": readonly, isInline }, Object.keys(options).map((key, index) => {
    let id = `${controlId}-${index}`;
    return import_react.default.createElement(Label3, { key: id, htmlFor: id }, import_react.default.createElement("input", { type: "checkbox", disabled: readonly, id, name: id, value: key, onChange: handleChange, checked: selected == null ? void 0 : selected.includes(key) }), import_react.default.createElement(Text, null, key));
  }));
};
var Wrapper6 = xr.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }, (props) => {
  if (props["aria-readonly"] === "true") return { input: { cursor: "not-allowed" } };
});
var Text2 = xr.span({ "[aria-readonly=true] &": { opacity: 0.5 } });
var Label4 = xr.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } });
var RadioControl = ({ name, options, value: value2, onChange, isInline, argType }) => {
  var _a;
  if (!options) return import_client_logger.logger.warn(`Radio with no options: ${name}`), import_react.default.createElement(import_react.default.Fragment, null, "-");
  let selection = selectedKey(value2, options), controlId = getControlId(name), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return import_react.default.createElement(Wrapper6, { "aria-readonly": readonly, isInline }, Object.keys(options).map((key, index) => {
    let id = `${controlId}-${index}`;
    return import_react.default.createElement(Label4, { key: id, htmlFor: id }, import_react.default.createElement("input", { type: "radio", id, name: controlId, disabled: readonly, value: key, onChange: (e2) => onChange(options[e2.currentTarget.value]), checked: key === selection }), import_react.default.createElement(Text2, null, key));
  }));
};
var styleResets = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" };
var OptionsSelect = xr.select(styleResets, ({ theme }) => ({ boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: theme.input.color || "inherit", background: theme.input.background, borderRadius: theme.input.borderRadius, boxShadow: `${theme.input.border} 0 0 0 1px inset`, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${theme.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: theme.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } }));
var SelectWrapper = xr.span(({ theme }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: theme.textMutedColor, path: { fill: theme.textMutedColor } } }));
var NO_SELECTION = "Choose option...";
var SingleSelect = ({ name, value: value2, options, onChange, argType }) => {
  var _a;
  let handleChange = (e2) => {
    onChange(options[e2.currentTarget.value]);
  }, selection = selectedKey(value2, options) || NO_SELECTION, controlId = getControlId(name), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return import_react.default.createElement(SelectWrapper, null, import_react.default.createElement(ChevronSmallDownIcon, null), import_react.default.createElement(OptionsSelect, { disabled: readonly, id: controlId, value: selection, onChange: handleChange }, import_react.default.createElement("option", { key: "no-selection", disabled: true }, NO_SELECTION), Object.keys(options).map((key) => import_react.default.createElement("option", { key, value: key }, key))));
};
var MultiSelect = ({ name, value: value2, options, onChange, argType }) => {
  var _a;
  let handleChange = (e2) => {
    let selection2 = Array.from(e2.currentTarget.options).filter((option) => option.selected).map((option) => option.value);
    onChange(selectedValues(selection2, options));
  }, selection = selectedKeys(value2, options), controlId = getControlId(name), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return import_react.default.createElement(SelectWrapper, null, import_react.default.createElement(OptionsSelect, { disabled: readonly, id: controlId, multiple: true, value: selection, onChange: handleChange }, Object.keys(options).map((key) => import_react.default.createElement("option", { key, value: key }, key))));
};
var SelectControl = (props) => {
  let { name, options } = props;
  return options ? props.isMulti ? import_react.default.createElement(MultiSelect, { ...props }) : import_react.default.createElement(SingleSelect, { ...props }) : (import_client_logger.logger.warn(`Select with no options: ${name}`), import_react.default.createElement(import_react.default.Fragment, null, "-"));
};
var normalizeOptions = (options, labels) => Array.isArray(options) ? options.reduce((acc, item) => (acc[(labels == null ? void 0 : labels[item]) || String(item)] = item, acc), {}) : options;
var Controls = { check: CheckboxControl, "inline-check": CheckboxControl, radio: RadioControl, "inline-radio": RadioControl, select: SelectControl, "multi-select": SelectControl };
var OptionsControl = (props) => {
  let { type = "select", labels, argType } = props, normalized = { ...props, argType, options: argType ? normalizeOptions(argType.options, labels) : {}, isInline: type.includes("inline"), isMulti: type.includes("multi") }, Control = Controls[type];
  if (Control) return import_react.default.createElement(Control, { ...normalized });
  throw new Error(`Unknown options type: ${type}`);
};
var ERROR = "Error";
var OBJECT = "Object";
var ARRAY = "Array";
var STRING = "String";
var NUMBER = "Number";
var BOOLEAN = "Boolean";
var DATE = "Date";
var NULL = "Null";
var UNDEFINED = "Undefined";
var FUNCTION = "Function";
var SYMBOL = "Symbol";
var ADD_DELTA_TYPE = "ADD_DELTA_TYPE";
var REMOVE_DELTA_TYPE = "REMOVE_DELTA_TYPE";
var UPDATE_DELTA_TYPE = "UPDATE_DELTA_TYPE";
var VALUE = "value";
var KEY = "key";
function getObjectType(obj) {
  return obj !== null && typeof obj == "object" && !Array.isArray(obj) && typeof obj[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(obj).slice(8, -1);
}
function isComponentWillChange(oldValue, newValue) {
  let oldType = getObjectType(oldValue), newType = getObjectType(newValue);
  return (oldType === "Function" || newType === "Function") && newType !== oldType;
}
var JsonAddValue = class extends import_react.Component {
  constructor(props) {
    super(props), this.state = { inputRefKey: null, inputRefValue: null }, this.refInputValue = this.refInputValue.bind(this), this.refInputKey = this.refInputKey.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let { inputRefKey, inputRefValue } = this.state, { onlyValue } = this.props;
    inputRefKey && typeof inputRefKey.focus == "function" && inputRefKey.focus(), onlyValue && inputRefValue && typeof inputRefValue.focus == "function" && inputRefValue.focus(), document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.onSubmit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let { handleAdd, onlyValue, onSubmitValueParser, keyPath, deep } = this.props, { inputRefKey, inputRefValue } = this.state, result = {};
    if (!onlyValue) {
      if (!inputRefKey.value) return;
      result.key = inputRefKey.value;
    }
    result.newValue = onSubmitValueParser(false, keyPath, deep, result.key, inputRefValue.value), handleAdd(result);
  }
  refInputKey(node) {
    this.state.inputRefKey = node;
  }
  refInputValue(node) {
    this.state.inputRefValue = node;
  }
  render() {
    let { handleCancel, onlyValue, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep } = this.props, addButtonElementLayout = addButtonElement && (0, import_react.cloneElement)(addButtonElement, { onClick: this.onSubmit }), cancelButtonElementLayout = cancelButtonElement && (0, import_react.cloneElement)(cancelButtonElement, { onClick: handleCancel }), inputElementValue = inputElementGenerator(VALUE, keyPath, deep), inputElementValueLayout = (0, import_react.cloneElement)(inputElementValue, { placeholder: "Value", ref: this.refInputValue }), inputElementKeyLayout = null;
    if (!onlyValue) {
      let inputElementKey = inputElementGenerator(KEY, keyPath, deep);
      inputElementKeyLayout = (0, import_react.cloneElement)(inputElementKey, { placeholder: "Key", ref: this.refInputKey });
    }
    return import_react.default.createElement("span", { className: "rejt-add-value-node" }, inputElementKeyLayout, inputElementValueLayout, cancelButtonElementLayout, addButtonElementLayout);
  }
};
JsonAddValue.defaultProps = { onlyValue: false, addButtonElement: import_react.default.createElement("button", null, "+"), cancelButtonElement: import_react.default.createElement("button", null, "c") };
var JsonArray = class extends import_react.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath || [], props.name];
    this.state = { data: props.data, name: props.name, keyPath, deep: props.deep ?? 0, nextDeep: (props.deep ?? 0) + 1, collapsed: props.isCollapsed(keyPath, props.deep ?? 0, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveItem = this.handleRemoveItem.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath = [] } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleRemoveItem(index) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[index];
      (beforeRemoveAction || Promise.resolve.bind(Promise))(index, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key: index, oldValue, type: REMOVE_DELTA_TYPE };
        data.splice(index, 1), this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleAddValueAdd({ key, newValue }) {
    let { data, keyPath = [], nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    (beforeAddAction || Promise.resolve.bind(Promise))(key, keyPath, deep, newValue).then(() => {
      data[key] = newValue, this.setState({ data }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key, newValue });
    }).catch(logger4.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleEditValue({ key, value: value2 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key];
      (beforeUpdateAction || Promise.resolve.bind(Promise))(key, keyPath, deep, oldValue, value2).then(() => {
        data[key] = value2, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key, newValue: value2, oldValue }), resolve(void 0);
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name, data, keyPath, deep } = this.state, { handleRemove, readOnly, getStyle, dataType, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name, data, keyPath, deep, dataType), isReadOnly = readOnly(name, data, keyPath, deep, dataType), removeItemButton = minusMenuElement && (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return import_react.default.createElement("span", { className: "rejt-collapsed" }, import_react.default.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "[...] ", data.length, " ", data.length === 1 ? "item" : "items"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name, data, keyPath, deep, addFormVisible, nextDeep } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, delimiter, ul, addForm } = getStyle(name, data, keyPath, deep, dataType), isReadOnly = readOnly(name, data, keyPath, deep, dataType), addItemButton = plusMenuElement && (0, import_react.cloneElement)(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus }), removeItemButton = minusMenuElement && (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return import_react.default.createElement("span", { className: "rejt-not-collapsed" }, import_react.default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "["), !addFormVisible && addItemButton, import_react.default.createElement("ul", { className: "rejt-not-collapsed-list", style: ul }, data.map((item, index) => import_react.default.createElement(JsonNode, { key: index, name: index.toString(), data: item, keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveItem(index), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser }))), !isReadOnly && addFormVisible && import_react.default.createElement("div", { className: "rejt-add-form", style: addForm }, import_react.default.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: true, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), import_react.default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "]"), !isReadOnly && removeItemButton);
  }
  render() {
    let { name, collapsed, data, keyPath, deep } = this.state, { dataType, getStyle } = this.props, value2 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(), style = getStyle(name, data, keyPath, deep, dataType);
    return import_react.default.createElement("div", { className: "rejt-array-node" }, import_react.default.createElement("span", { onClick: this.handleCollapseMode }, import_react.default.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " ")), value2);
  }
};
JsonArray.defaultProps = { keyPath: [], deep: 0, minusMenuElement: import_react.default.createElement("span", null, " - "), plusMenuElement: import_react.default.createElement("span", null, " + ") };
var JsonFunctionValue = class extends import_react.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath || [], props.name];
    this.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name, value: value2, keyPath, deep } = this.state, { readOnly, dataType } = this.props, readOnlyResult = readOnly(name, value2, keyPath, deep, dataType);
    editEnabled && !readOnlyResult && typeof inputRef.focus == "function" && inputRef.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name, deep } = this.state;
    if (!inputRef) return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name, inputRef.value), result = { value: newValue, key: name };
    (handleUpdateValue || Promise.resolve.bind(Promise))(result).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node) {
    this.state.inputRef = node;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name, value: value2, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, editButtonElement, cancelButtonElement, textareaElementGenerator, minusMenuElement, keyPath: comeFromKeyPath } = this.props, style = getStyle(name, originalValue, keyPath, deep, dataType), result = null, minusElement = null, resultOnlyResult = readOnly(name, originalValue, keyPath, deep, dataType);
    if (editEnabled && !resultOnlyResult) {
      let textareaElement = textareaElementGenerator(VALUE, comeFromKeyPath, deep, name, originalValue, dataType), editButtonElementLayout = editButtonElement && (0, import_react.cloneElement)(editButtonElement, { onClick: this.handleEdit }), cancelButtonElementLayout = cancelButtonElement && (0, import_react.cloneElement)(cancelButtonElement, { onClick: this.handleCancelEdit }), textareaElementLayout = (0, import_react.cloneElement)(textareaElement, { ref: this.refInput, defaultValue: originalValue });
      result = import_react.default.createElement("span", { className: "rejt-edit-form", style: style.editForm }, textareaElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout), minusElement = null;
    } else {
      result = import_react.default.createElement("span", { className: "rejt-value", style: style.value, onClick: resultOnlyResult ? void 0 : this.handleEditMode }, value2);
      let minusMenuLayout = minusMenuElement && (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
      minusElement = resultOnlyResult ? null : minusMenuLayout;
    }
    return import_react.default.createElement("li", { className: "rejt-function-value-node", style: style.li }, import_react.default.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " "), result, minusElement);
  }
};
JsonFunctionValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: import_react.default.createElement("button", null, "e"), cancelButtonElement: import_react.default.createElement("button", null, "c"), minusMenuElement: import_react.default.createElement("span", null, " - ") };
var JsonNode = class extends import_react.Component {
  constructor(props) {
    super(props), this.state = { data: props.data, name: props.name, keyPath: props.keyPath, deep: props.deep };
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  render() {
    let { data, name, keyPath, deep } = this.state, { isCollapsed, handleRemove, handleUpdateValue, onUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, readOnlyTrue = () => true, dataType = getObjectType(data);
    switch (dataType) {
      case ERROR:
        return import_react.default.createElement(JsonObject, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly: readOnlyTrue, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case OBJECT:
        return import_react.default.createElement(JsonObject, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case ARRAY:
        return import_react.default.createElement(JsonArray, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case STRING:
        return import_react.default.createElement(JsonValue, { name, value: `"${data}"`, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NUMBER:
        return import_react.default.createElement(JsonValue, { name, value: data, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case BOOLEAN:
        return import_react.default.createElement(JsonValue, { name, value: data ? "true" : "false", originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case DATE:
        return import_react.default.createElement(JsonValue, { name, value: data.toISOString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NULL:
        return import_react.default.createElement(JsonValue, { name, value: "null", originalValue: "null", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case UNDEFINED:
        return import_react.default.createElement(JsonValue, { name, value: "undefined", originalValue: "undefined", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case FUNCTION:
        return import_react.default.createElement(JsonFunctionValue, { name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, textareaElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case SYMBOL:
        return import_react.default.createElement(JsonValue, { name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      default:
        return null;
    }
  }
};
JsonNode.defaultProps = { keyPath: [], deep: 0 };
var JsonObject = class extends import_react.Component {
  constructor(props) {
    super(props);
    let keyPath = props.deep === -1 ? [] : [...props.keyPath || [], props.name];
    this.state = { name: props.name, data: props.data, keyPath, deep: props.deep ?? 0, nextDeep: (props.deep ?? 0) + 1, collapsed: props.isCollapsed(keyPath, props.deep ?? 0, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveValue = this.handleRemoveValue.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath = [] } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleAddValueAdd({ key, newValue }) {
    let { data, keyPath = [], nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    (beforeAddAction || Promise.resolve.bind(Promise))(key, keyPath, deep, newValue).then(() => {
      data[key] = newValue, this.setState({ data }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key, newValue });
    }).catch(logger4.error);
  }
  handleRemoveValue(key) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath = [], nextDeep: deep } = this.state, oldValue = data[key];
      (beforeRemoveAction || Promise.resolve.bind(Promise))(key, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key, oldValue, type: REMOVE_DELTA_TYPE };
        delete data[key], this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleEditValue({ key, value: value2 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath = [], nextDeep: deep } = this.state, oldValue = data[key];
      (beforeUpdateAction || Promise.resolve.bind(Promise))(key, keyPath, deep, oldValue, value2).then(() => {
        data[key] = value2, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key, newValue: value2, oldValue }), resolve();
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name, keyPath, deep, data } = this.state, { handleRemove, readOnly, dataType, getStyle, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name, data, keyPath, deep, dataType), removeItemButton = minusMenuElement && (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return import_react.default.createElement("span", { className: "rejt-collapsed" }, import_react.default.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "{...}", " ", keyList.length, " ", keyList.length === 1 ? "key" : "keys"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name, data, keyPath, deep, nextDeep, addFormVisible } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, addForm, ul, delimiter } = getStyle(name, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name, data, keyPath, deep, dataType), addItemButton = plusMenuElement && (0, import_react.cloneElement)(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus }), removeItemButton = minusMenuElement && (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus }), list = keyList.map((key) => import_react.default.createElement(JsonNode, { key, name: key, data: data[key], keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveValue(key), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser }));
    return import_react.default.createElement("span", { className: "rejt-not-collapsed" }, import_react.default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "{"), !isReadOnly && addItemButton, import_react.default.createElement("ul", { className: "rejt-not-collapsed-list", style: ul }, list), !isReadOnly && addFormVisible && import_react.default.createElement("div", { className: "rejt-add-form", style: addForm }, import_react.default.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), import_react.default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "}"), !isReadOnly && removeItemButton);
  }
  render() {
    let { name, collapsed, data, keyPath, deep } = this.state, { getStyle, dataType } = this.props, value2 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(), style = getStyle(name, data, keyPath, deep, dataType);
    return import_react.default.createElement("div", { className: "rejt-object-node" }, import_react.default.createElement("span", { onClick: this.handleCollapseMode }, import_react.default.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " ")), value2);
  }
};
JsonObject.defaultProps = { keyPath: [], deep: 0, minusMenuElement: import_react.default.createElement("span", null, " - "), plusMenuElement: import_react.default.createElement("span", null, " + ") };
var JsonValue = class extends import_react.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath || [], props.name];
    this.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name, value: value2, keyPath, deep } = this.state, { readOnly, dataType } = this.props, isReadOnly = readOnly(name, value2, keyPath, deep, dataType);
    editEnabled && !isReadOnly && typeof inputRef.focus == "function" && inputRef.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(event) {
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name, deep } = this.state;
    if (!inputRef) return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name, inputRef.value), result = { value: newValue, key: name };
    (handleUpdateValue || Promise.resolve.bind(Promise))(result).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node) {
    this.state.inputRef = node;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name, value: value2, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, editButtonElement, cancelButtonElement, inputElementGenerator, minusMenuElement, keyPath: comeFromKeyPath } = this.props, style = getStyle(name, originalValue, keyPath, deep, dataType), isReadOnly = readOnly(name, originalValue, keyPath, deep, dataType), isEditing = editEnabled && !isReadOnly, inputElement = inputElementGenerator(VALUE, comeFromKeyPath, deep, name, originalValue, dataType), editButtonElementLayout = editButtonElement && (0, import_react.cloneElement)(editButtonElement, { onClick: this.handleEdit }), cancelButtonElementLayout = cancelButtonElement && (0, import_react.cloneElement)(cancelButtonElement, { onClick: this.handleCancelEdit }), inputElementLayout = (0, import_react.cloneElement)(inputElement, { ref: this.refInput, defaultValue: JSON.stringify(originalValue) }), minusMenuLayout = minusMenuElement && (0, import_react.cloneElement)(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
    return import_react.default.createElement("li", { className: "rejt-value-node", style: style.li }, import_react.default.createElement("span", { className: "rejt-name", style: style.name }, name, " : "), isEditing ? import_react.default.createElement("span", { className: "rejt-edit-form", style: style.editForm }, inputElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout) : import_react.default.createElement("span", { className: "rejt-value", style: style.value, onClick: isReadOnly ? void 0 : this.handleEditMode }, String(value2)), !isReadOnly && !isEditing && minusMenuLayout);
  }
};
JsonValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: import_react.default.createElement("button", null, "e"), cancelButtonElement: import_react.default.createElement("button", null, "c"), minusMenuElement: import_react.default.createElement("span", null, " - ") };
function parse3(string) {
  let result = string;
  if (result.indexOf("function") === 0) return (0, eval)(`(${result})`);
  try {
    result = JSON.parse(string);
  } catch {
  }
  return result;
}
var object = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} };
var array = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} };
var value = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
var JsonTree = class extends import_react.Component {
  constructor(props) {
    super(props), this.state = { data: props.data, rootName: props.rootName }, this.onUpdate = this.onUpdate.bind(this), this.removeRoot = this.removeRoot.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data || props.rootName !== state.rootName ? { data: props.data, rootName: props.rootName } : null;
  }
  onUpdate(key, data) {
    var _a, _b;
    this.setState({ data }), (_b = (_a = this.props).onFullyUpdate) == null ? void 0 : _b.call(_a, data);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data, rootName } = this.state, { isCollapsed, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElement, textareaElement, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser, fallback = null } = this.props, dataType = getObjectType(data), readOnlyFunction = readOnly;
    getObjectType(readOnly) === "Boolean" && (readOnlyFunction = () => readOnly);
    let inputElementFunction = inputElement;
    inputElement && getObjectType(inputElement) !== "Function" && (inputElementFunction = () => inputElement);
    let textareaElementFunction = textareaElement;
    return textareaElement && getObjectType(textareaElement) !== "Function" && (textareaElementFunction = () => textareaElement), dataType === "Object" || dataType === "Array" ? import_react.default.createElement("div", { className: "rejt-tree" }, import_react.default.createElement(JsonNode, { data, name: rootName || "root", deep: -1, isCollapsed: isCollapsed ?? (() => false), onUpdate: this.onUpdate, onDeltaUpdate: onDeltaUpdate ?? (() => {
    }), readOnly: readOnlyFunction, getStyle: getStyle ?? (() => ({})), addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator: inputElementFunction, textareaElementGenerator: textareaElementFunction, minusMenuElement, plusMenuElement, handleRemove: this.removeRoot, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4 ?? {}, onSubmitValueParser: onSubmitValueParser ?? ((val) => val) })) : fallback;
  }
};
JsonTree.defaultProps = { rootName: "root", isCollapsed: (keyPath, deep) => deep !== -1, getStyle: (keyName, data, keyPath, deep, dataType) => {
  switch (dataType) {
    case "Object":
    case "Error":
      return object;
    case "Array":
      return array;
    default:
      return value;
  }
}, readOnly: () => false, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (isEditMode, keyPath, deep, name, rawValue) => parse3(rawValue), inputElement: () => import_react.default.createElement("input", null), textareaElement: () => import_react.default.createElement("textarea", null), fallback: null };
var { window: globalWindow2 } = globalThis;
var Wrapper7 = xr.div(({ theme }) => ({ position: "relative", display: "flex", '&[aria-readonly="true"]': { opacity: 0.5 }, ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: theme.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: theme.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: theme.color.lighter, borderColor: theme.appBorderColor } }));
var ButtonInline = xr.button(({ theme, primary }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: primary ? theme.color.secondary : "transparent", color: primary ? theme.color.lightest : theme.color.dark, fontWeight: primary ? "bold" : "normal", cursor: "pointer", order: primary ? "initial" : 9 }));
var ActionAddIcon = xr(AddIcon)(({ theme, disabled }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: disabled ? "not-allowed" : "pointer", color: theme.textMutedColor, "&:hover": disabled ? {} : { color: theme.color.ancillary }, "svg + &": { marginLeft: 0 } }));
var ActionSubstractIcon = xr(SubtractIcon)(({ theme, disabled }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: disabled ? "not-allowed" : "pointer", color: theme.textMutedColor, "&:hover": disabled ? {} : { color: theme.color.negative }, "svg + &": { marginLeft: 0 } }));
var Input = xr.input(({ theme, placeholder }) => ({ outline: 0, margin: placeholder ? 1 : "1px 0", padding: "3px 4px", color: theme.color.defaultText, background: theme.background.app, border: `1px solid ${theme.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: placeholder === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${theme.color.secondary}` } }));
var RawButton = xr(bo)(({ theme }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: theme.background.bar, border: `1px solid ${theme.appBorderColor}`, borderRadius: 3, color: theme.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } }));
var RawInput = xr(N7.Textarea)(({ theme }) => ({ flex: 1, padding: "7px 6px", fontFamily: theme.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: theme.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } }));
var ENTER_EVENT = { bubbles: true, cancelable: true, key: "Enter", code: "Enter", keyCode: 13 };
var dispatchEnterKey = (event) => {
  event.currentTarget.dispatchEvent(new globalWindow2.KeyboardEvent("keydown", ENTER_EVENT));
};
var selectValue = (event) => {
  event.currentTarget.select();
};
var getCustomStyleFunction = (theme) => () => ({ name: { color: theme.color.secondary }, collapsed: { color: theme.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } });
var ObjectControl = ({ name, value: value2, onChange, argType }) => {
  var _a;
  let theme = St(), data = (0, import_react.useMemo)(() => value2 && cloneDeep(value2), [value2]), hasData = data != null, [showRaw, setShowRaw] = (0, import_react.useState)(!hasData), [parseError, setParseError] = (0, import_react.useState)(null), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), updateRaw = (0, import_react.useCallback)((raw) => {
    try {
      raw && onChange(JSON.parse(raw)), setParseError(null);
    } catch (e2) {
      setParseError(e2);
    }
  }, [onChange]), [forceVisible, setForceVisible] = (0, import_react.useState)(false), onForceVisible = (0, import_react.useCallback)(() => {
    onChange({}), setForceVisible(true);
  }, [setForceVisible]), htmlElRef = (0, import_react.useRef)(null);
  if ((0, import_react.useEffect)(() => {
    forceVisible && htmlElRef.current && htmlElRef.current.select();
  }, [forceVisible]), !hasData) return import_react.default.createElement(Ir2, { disabled: readonly, id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set object");
  let rawJSONForm = import_react.default.createElement(RawInput, { ref: htmlElRef, id: getControlId(name), name, defaultValue: value2 === null ? "" : JSON.stringify(value2, null, 2), onBlur: (event) => updateRaw(event.target.value), placeholder: "Edit JSON string...", autoFocus: forceVisible, valid: parseError ? "error" : void 0, readOnly: readonly }), isObjectOrArray = Array.isArray(value2) || typeof value2 == "object" && (value2 == null ? void 0 : value2.constructor) === Object;
  return import_react.default.createElement(Wrapper7, { "aria-readonly": readonly }, isObjectOrArray && import_react.default.createElement(RawButton, { onClick: (e2) => {
    e2.preventDefault(), setShowRaw((v22) => !v22);
  } }, showRaw ? import_react.default.createElement(EyeCloseIcon, null) : import_react.default.createElement(EyeIcon, null), import_react.default.createElement("span", null, "RAW")), showRaw ? rawJSONForm : import_react.default.createElement(JsonTree, { readOnly: readonly || !isObjectOrArray, isCollapsed: isObjectOrArray ? void 0 : () => true, data, rootName: name, onFullyUpdate: onChange, getStyle: getCustomStyleFunction(theme), cancelButtonElement: import_react.default.createElement(ButtonInline, { type: "button" }, "Cancel"), editButtonElement: import_react.default.createElement(ButtonInline, { type: "submit" }, "Save"), addButtonElement: import_react.default.createElement(ButtonInline, { type: "submit", primary: true }, "Save"), plusMenuElement: import_react.default.createElement(ActionAddIcon, null), minusMenuElement: import_react.default.createElement(ActionSubstractIcon, null), inputElement: (_22, __, ___, key) => key ? import_react.default.createElement(Input, { onFocus: selectValue, onBlur: dispatchEnterKey }) : import_react.default.createElement(Input, null), fallback: rawJSONForm }));
};
var RangeInput = xr.input(({ theme, min, max, value: value2, disabled }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: disabled ? "not-allowed" : "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`, cursor: disabled ? "not-allowed" : "grab", appearance: "none", background: `${theme.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: disabled ? "not-allowed" : "grab" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: rgba(theme.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: theme.color.secondary, boxShadow: `0 0px 5px 0px ${theme.color.secondary}` } }, "&::-moz-range-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: disabled ? "not-allowed" : "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`, cursor: disabled ? "not-allowed" : "grap", background: `${theme.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${theme.input.background}`, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } }));
var RangeLabel = xr.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums", "[aria-readonly=true] &": { opacity: 0.5 } });
var RangeCurrentAndMaxLabel = xr(RangeLabel)(({ numberOFDecimalsPlaces, max }) => ({ width: `${numberOFDecimalsPlaces + max.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 }));
var RangeWrapper = xr.div({ display: "flex", alignItems: "center", width: "100%" });
function getNumberOfDecimalPlaces(number) {
  let match = number.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return match ? Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0)) : 0;
}
var RangeControl = ({ name, value: value2, onChange, min = 0, max = 100, step = 1, onBlur, onFocus, argType }) => {
  var _a;
  let handleChange = (event) => {
    onChange(parse2(event.target.value));
  }, hasValue = value2 !== void 0, numberOFDecimalsPlaces = (0, import_react.useMemo)(() => getNumberOfDecimalPlaces(step), [step]), readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly);
  return import_react.default.createElement(RangeWrapper, { "aria-readonly": readonly }, import_react.default.createElement(RangeLabel, null, min), import_react.default.createElement(RangeInput, { id: getControlId(name), type: "range", disabled: readonly, onChange: handleChange, name, min, max, step, onFocus, onBlur, value: value2 ?? min }), import_react.default.createElement(RangeCurrentAndMaxLabel, { numberOFDecimalsPlaces, max }, hasValue ? value2.toFixed(numberOFDecimalsPlaces) : "--", " / ", max));
};
var Wrapper8 = xr.label({ display: "flex" });
var MaxLength = xr.div(({ isMaxed }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: isMaxed ? "red" : void 0 }));
var TextControl = ({ name, value: value2, onChange, onFocus, onBlur, maxLength, argType }) => {
  var _a;
  let handleChange = (event) => {
    onChange(event.target.value);
  }, readonly = !!((_a = argType == null ? void 0 : argType.table) == null ? void 0 : _a.readonly), [forceVisible, setForceVisible] = (0, import_react.useState)(false), onForceVisible = (0, import_react.useCallback)(() => {
    onChange(""), setForceVisible(true);
  }, [setForceVisible]);
  if (value2 === void 0) return import_react.default.createElement(Ir2, { variant: "outline", size: "medium", disabled: readonly, id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set string");
  let isValid = typeof value2 == "string";
  return import_react.default.createElement(Wrapper8, null, import_react.default.createElement(N7.Textarea, { id: getControlId(name), maxLength, onChange: handleChange, disabled: readonly, size: "flex", placeholder: "Edit string...", autoFocus: forceVisible, valid: isValid ? void 0 : "error", name, value: isValid ? value2 : "", onFocus, onBlur }), maxLength && import_react.default.createElement(MaxLength, { isMaxed: (value2 == null ? void 0 : value2.length) === maxLength }, (value2 == null ? void 0 : value2.length) ?? 0, " / ", maxLength));
};
var FileInput = xr(N7.Input)({ padding: 10 });
function revokeOldUrls(urls) {
  urls.forEach((url) => {
    url.startsWith("blob:") && URL.revokeObjectURL(url);
  });
}
var FilesControl = ({ onChange, name, accept = "image/*", value: value2, argType }) => {
  var _a;
  let inputElement = (0, import_react.useRef)(null), readonly = (_a = argType == null ? void 0 : argType.control) == null ? void 0 : _a.readOnly;
  function handleFileChange(e2) {
    if (!e2.target.files) return;
    let fileUrls = Array.from(e2.target.files).map((file) => URL.createObjectURL(file));
    onChange(fileUrls), revokeOldUrls(value2 || []);
  }
  return (0, import_react.useEffect)(() => {
    value2 == null && inputElement.current && (inputElement.current.value = "");
  }, [value2, name]), import_react.default.createElement(FileInput, { ref: inputElement, id: getControlId(name), type: "file", name, multiple: true, disabled: readonly, onChange: handleFileChange, accept, size: "flex" });
};
var LazyColorControl = (0, import_react.lazy)(() => import("./Color-AVL7NMMY-TFFWMYCD.js"));
var ColorControl = (props) => import_react.default.createElement(import_react.Suspense, { fallback: import_react.default.createElement("div", null) }, import_react.default.createElement(LazyColorControl, { ...props }));
var Controls2 = { array: ObjectControl, object: ObjectControl, boolean: BooleanControl, color: ColorControl, date: DateControl, number: NumberControl, check: OptionsControl, "inline-check": OptionsControl, radio: OptionsControl, "inline-radio": OptionsControl, select: OptionsControl, "multi-select": OptionsControl, range: RangeControl, text: TextControl, file: FilesControl };
var NoControl = () => import_react.default.createElement(import_react.default.Fragment, null, "-");
var ArgControl = ({ row, arg, updateArgs, isHovered }) => {
  var _a;
  let { key, control } = row, [isFocused, setFocused] = (0, import_react.useState)(false), [boxedValue, setBoxedValue] = (0, import_react.useState)({ value: arg });
  (0, import_react.useEffect)(() => {
    isFocused || setBoxedValue({ value: arg });
  }, [isFocused, arg]);
  let onChange = (0, import_react.useCallback)((argVal) => (setBoxedValue({ value: argVal }), updateArgs({ [key]: argVal }), argVal), [updateArgs, key]), onBlur = (0, import_react.useCallback)(() => setFocused(false), []), onFocus = (0, import_react.useCallback)(() => setFocused(true), []);
  if (!control || control.disable) {
    let canBeSetup = (control == null ? void 0 : control.disable) !== true && ((_a = row == null ? void 0 : row.type) == null ? void 0 : _a.name) !== "function";
    return isHovered && canBeSetup ? import_react.default.createElement(yi, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: true }, "Setup controls") : import_react.default.createElement(NoControl, null);
  }
  let props = { name: key, argType: row, value: boxedValue.value, onChange, onBlur, onFocus }, Control = Controls2[control.type] || NoControl;
  return import_react.default.createElement(Control, { ...props, ...control, controlType: control.type });
};
var Table = xr.table(({ theme }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: at({ theme }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: theme.typography.size.s1 } } }));
var ArgJsDoc = ({ tags }) => {
  var _a, _b;
  let params = (tags.params || []).filter((x2) => x2.description), hasDisplayableParams = params.length !== 0, hasDisplayableDeprecated = tags.deprecated != null, hasDisplayableReturns = tags.returns != null && tags.returns.description != null;
  return !hasDisplayableParams && !hasDisplayableReturns && !hasDisplayableDeprecated ? null : import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(Table, null, import_react.default.createElement("tbody", null, hasDisplayableDeprecated && import_react.default.createElement("tr", { key: "deprecated" }, import_react.default.createElement("td", { colSpan: 2 }, import_react.default.createElement("strong", null, "Deprecated"), ": ", (_a = tags.deprecated) == null ? void 0 : _a.toString())), hasDisplayableParams && params.map((x2) => import_react.default.createElement("tr", { key: x2.name }, import_react.default.createElement("td", null, import_react.default.createElement("code", null, x2.name)), import_react.default.createElement("td", null, x2.description))), hasDisplayableReturns && import_react.default.createElement("tr", { key: "returns" }, import_react.default.createElement("td", null, import_react.default.createElement("code", null, "Returns")), import_react.default.createElement("td", null, (_b = tags.returns) == null ? void 0 : _b.description)))));
};
var import_memoizerific = __toESM2(require_memoizerific());
var ITEMS_BEFORE_EXPANSION = 8;
var Summary = xr.div(({ isExpanded }) => ({ display: "flex", flexDirection: isExpanded ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 }));
var Text3 = xr.span(at, ({ theme, simple = false }) => ({ flex: "0 0 auto", fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...simple && { background: "transparent", border: "0 none", paddingLeft: 0 } }));
var ExpandButton = xr.button(({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, marginBottom: "4px", background: "none", border: "none" }));
var Expandable = xr.div(at, ({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, fontSize: theme.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" }));
var Detail = xr.div(({ theme, width }) => ({ width, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } }));
var ChevronUpIcon = xr(ChevronSmallUpIcon)({ marginLeft: 4 });
var ChevronDownIcon2 = xr(ChevronSmallDownIcon)({ marginLeft: 4 });
var EmptyArg = () => import_react.default.createElement("span", null, "-");
var ArgText = ({ text, simple }) => import_react.default.createElement(Text3, { simple }, text);
var calculateDetailWidth = (0, import_memoizerific.default)(1e3)((detail) => {
  let lines = detail.split(/\r?\n/);
  return `${Math.max(...lines.map((x2) => x2.length))}ch`;
});
var getSummaryItems = (summary) => {
  if (!summary) return [summary];
  let summaryItems = summary.split("|").map((value2) => value2.trim());
  return uniq2(summaryItems);
};
var renderSummaryItems = (summaryItems, isExpanded = true) => {
  let items = summaryItems;
  return isExpanded || (items = summaryItems.slice(0, ITEMS_BEFORE_EXPANSION)), items.map((item) => import_react.default.createElement(ArgText, { key: item, text: item === "" ? '""' : item }));
};
var ArgSummary = ({ value: value2, initialExpandedArgs }) => {
  let { summary, detail } = value2, [isOpen, setIsOpen] = (0, import_react.useState)(false), [isExpanded, setIsExpanded] = (0, import_react.useState)(initialExpandedArgs || false);
  if (summary == null) return null;
  let summaryAsString = typeof summary.toString == "function" ? summary.toString() : summary;
  if (detail == null) {
    if (/[(){}[\]<>]/.test(summaryAsString)) return import_react.default.createElement(ArgText, { text: summaryAsString });
    let summaryItems = getSummaryItems(summaryAsString), itemsCount = summaryItems.length;
    return itemsCount > ITEMS_BEFORE_EXPANSION ? import_react.default.createElement(Summary, { isExpanded }, renderSummaryItems(summaryItems, isExpanded), import_react.default.createElement(ExpandButton, { onClick: () => setIsExpanded(!isExpanded) }, isExpanded ? "Show less..." : `Show ${itemsCount - ITEMS_BEFORE_EXPANSION} more...`)) : import_react.default.createElement(Summary, null, renderSummaryItems(summaryItems));
  }
  return import_react.default.createElement(N3, { closeOnOutsideClick: true, placement: "bottom", visible: isOpen, onVisibleChange: (isVisible) => {
    setIsOpen(isVisible);
  }, tooltip: import_react.default.createElement(Detail, { width: calculateDetailWidth(detail) }, import_react.default.createElement(ru, { language: "jsx", format: false }, detail)) }, import_react.default.createElement(Expandable, { className: "sbdocs-expandable" }, import_react.default.createElement("span", null, summaryAsString), isOpen ? import_react.default.createElement(ChevronUpIcon, null) : import_react.default.createElement(ChevronDownIcon2, null)));
};
var ArgValue = ({ value: value2, initialExpandedArgs }) => value2 == null ? import_react.default.createElement(EmptyArg, null) : import_react.default.createElement(ArgSummary, { value: value2, initialExpandedArgs });
var Name = xr.span({ fontWeight: "bold" });
var Required = xr.span(({ theme }) => ({ color: theme.color.negative, fontFamily: theme.typography.fonts.mono, cursor: "help" }));
var Description = xr.div(({ theme }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: theme.color.secondary } }, code: { ...at({ theme }), fontSize: 12, fontFamily: theme.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } }));
var Type = xr.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 4 : 0 }));
var TypeWithJsDoc = xr.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 12 : 0, marginBottom: 12 }));
var StyledTd = xr.td(({ expandable }) => ({ paddingLeft: expandable ? "40px !important" : "20px !important" }));
var toSummary = (value2) => value2 && { summary: typeof value2 == "string" ? value2 : value2.name };
var ArgRow = (props) => {
  var _a;
  let [isHovered, setIsHovered] = (0, import_react.useState)(false), { row, updateArgs, compact, expandable, initialExpandedArgs } = props, { name, description } = row, table = row.table || {}, type = table.type || toSummary(row.type), defaultValue = table.defaultValue || row.defaultValue, required = (_a = row.type) == null ? void 0 : _a.required, hasDescription = description != null && description !== "";
  return import_react.default.createElement("tr", { onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false) }, import_react.default.createElement(StyledTd, { expandable: expandable ?? false }, import_react.default.createElement(Name, null, name), required ? import_react.default.createElement(Required, { title: "Required" }, "*") : null), compact ? null : import_react.default.createElement("td", null, hasDescription && import_react.default.createElement(Description, null, import_react.default.createElement(index_modern_default, null, description)), table.jsDocTags != null ? import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(TypeWithJsDoc, { hasDescription }, import_react.default.createElement(ArgValue, { value: type, initialExpandedArgs })), import_react.default.createElement(ArgJsDoc, { tags: table.jsDocTags })) : import_react.default.createElement(Type, { hasDescription }, import_react.default.createElement(ArgValue, { value: type, initialExpandedArgs }))), compact ? null : import_react.default.createElement("td", null, import_react.default.createElement(ArgValue, { value: defaultValue, initialExpandedArgs })), updateArgs ? import_react.default.createElement("td", null, import_react.default.createElement(ArgControl, { ...props, isHovered })) : null);
};
var Wrapper9 = xr.div(({ inAddonPanel, theme }) => ({ height: inAddonPanel ? "100%" : "auto", display: "flex", border: inAddonPanel ? "none" : `1px solid ${theme.appBorderColor}`, borderRadius: inAddonPanel ? 0 : theme.appBorderRadius, padding: inAddonPanel ? 0 : 40, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: theme.background.content }));
var Links = xr.div(({ theme }) => ({ display: "flex", fontSize: theme.typography.size.s2 - 1, gap: 25 }));
var Empty = ({ inAddonPanel }) => {
  let [isLoading, setIsLoading] = (0, import_react.useState)(true);
  return (0, import_react.useEffect)(() => {
    let load = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(load);
  }, []), isLoading ? null : import_react.default.createElement(Wrapper9, { inAddonPanel }, import_react.default.createElement(_o, { title: inAddonPanel ? "Interactive story playground" : "Args table with interactive controls couldn't be auto-generated", description: import_react.default.createElement(import_react.default.Fragment, null, "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."), footer: import_react.default.createElement(Links, null, inAddonPanel && import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(yi, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: true }, import_react.default.createElement(DocumentIcon, null), " Read docs")), !inAddonPanel && import_react.default.createElement(yi, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: true }, import_react.default.createElement(DocumentIcon, null), " Learn how to set that up")) }));
};
var ExpanderIconDown = xr(ChevronDownIcon)(({ theme }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), border: "none", display: "inline-block" }));
var ExpanderIconRight = xr(ChevronRightIcon)(({ theme }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), border: "none", display: "inline-block" }));
var FlexWrapper = xr.span(({ theme }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" }));
var Section = xr.td(({ theme }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s1 - 1, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText), background: `${theme.background.app} !important`, "& ~ td": { background: `${theme.background.app} !important` } }));
var Subsection = xr.td(({ theme }) => ({ position: "relative", fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s2 - 1, background: theme.background.app }));
var StyledTd2 = xr.td({ position: "relative" });
var StyledTr = xr.tr(({ theme }) => ({ "&:hover > td": { backgroundColor: `${curriedLighten$1(5e-3, theme.background.app)} !important`, boxShadow: `${theme.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } }));
var ClickIntercept = xr.button({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" });
var SectionRow = ({ level = "section", label, children, initialExpanded = true, colSpan = 3 }) => {
  let [expanded, setExpanded] = (0, import_react.useState)(initialExpanded), Level = level === "subsection" ? Subsection : Section, itemCount = (children == null ? void 0 : children.length) || 0, caption = level === "subsection" ? `${itemCount} item${itemCount !== 1 ? "s" : ""}` : "", helperText = `${expanded ? "Hide" : "Show"} ${level === "subsection" ? itemCount : label} item${itemCount !== 1 ? "s" : ""}`;
  return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(StyledTr, { title: helperText }, import_react.default.createElement(Level, { colSpan: 1 }, import_react.default.createElement(ClickIntercept, { onClick: (e2) => setExpanded(!expanded), tabIndex: 0 }, helperText), import_react.default.createElement(FlexWrapper, null, expanded ? import_react.default.createElement(ExpanderIconDown, null) : import_react.default.createElement(ExpanderIconRight, null), label)), import_react.default.createElement(StyledTd2, { colSpan: colSpan - 1 }, import_react.default.createElement(ClickIntercept, { onClick: (e2) => setExpanded(!expanded), tabIndex: -1, style: { outline: "none" } }, helperText), expanded ? null : caption)), expanded ? children : null);
};
var TableWrapper = xr.div(({ theme }) => ({ width: "100%", borderSpacing: 0, color: theme.color.defaultText }));
var Row = xr.div(({ theme }) => ({ display: "flex", borderBottom: `1px solid ${theme.appBorderColor}`, "&:last-child": { borderBottom: 0 } }));
var Column = xr.div(({ position, theme }) => {
  let baseStyles = { display: "flex", flexDirection: "column", gap: 5, padding: "10px 15px", alignItems: "flex-start" };
  switch (position) {
    case "first":
      return { ...baseStyles, width: "25%", paddingLeft: 20 };
    case "second":
      return { ...baseStyles, width: "35%" };
    case "third":
      return { ...baseStyles, width: "15%" };
    case "last":
      return { ...baseStyles, width: "25%", paddingRight: 20 };
  }
});
var SkeletonText = xr.div(({ theme, width, height }) => ({ animation: `${theme.animation.glow} 1.5s ease-in-out infinite`, background: theme.appBorderColor, width: width || "100%", height: height || 16, borderRadius: 3 }));
var Skeleton = () => import_react.default.createElement(TableWrapper, null, import_react.default.createElement(Row, null, import_react.default.createElement(Column, { position: "first" }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { position: "second" }, import_react.default.createElement(SkeletonText, { width: "30%" })), import_react.default.createElement(Column, { position: "third" }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { position: "last" }, import_react.default.createElement(SkeletonText, { width: "60%" }))), import_react.default.createElement(Row, null, import_react.default.createElement(Column, { position: "first" }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { position: "second" }, import_react.default.createElement(SkeletonText, { width: "80%" }), import_react.default.createElement(SkeletonText, { width: "30%" })), import_react.default.createElement(Column, { position: "third" }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { position: "last" }, import_react.default.createElement(SkeletonText, { width: "60%" }))), import_react.default.createElement(Row, null, import_react.default.createElement(Column, { position: "first" }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { position: "second" }, import_react.default.createElement(SkeletonText, { width: "80%" }), import_react.default.createElement(SkeletonText, { width: "30%" })), import_react.default.createElement(Column, { position: "third" }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { position: "last" }, import_react.default.createElement(SkeletonText, { width: "60%" }))), import_react.default.createElement(Row, null, import_react.default.createElement(Column, { position: "first" }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { position: "second" }, import_react.default.createElement(SkeletonText, { width: "80%" }), import_react.default.createElement(SkeletonText, { width: "30%" })), import_react.default.createElement(Column, { position: "third" }, import_react.default.createElement(SkeletonText, { width: "60%" })), import_react.default.createElement(Column, { position: "last" }, import_react.default.createElement(SkeletonText, { width: "60%" }))));
var TableWrapper2 = xr.table(({ theme, compact, inAddonPanel }) => ({ "&&": { borderSpacing: 0, color: theme.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: inAddonPanel ? 0 : 25, marginBottom: inAddonPanel ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...compact ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...compact ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...compact ? null : { width: "25%" } }, th: { color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.45, theme.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: inAddonPanel ? 0 : 1, marginRight: inAddonPanel ? 0 : 1, tbody: { ...inAddonPanel ? null : { filter: theme.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: theme.background.content, borderTop: `1px solid ${theme.appBorderColor}` }, ...inAddonPanel ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${theme.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${theme.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${theme.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${theme.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: theme.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: theme.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: theme.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: theme.appBorderRadius } } } } }));
var StyledIconButton = xr(bo)(({ theme }) => ({ margin: "-4px -12px -4px 0" }));
var ControlHeadingWrapper = xr.span({ display: "flex", justifyContent: "space-between" });
var sortFns = { alpha: (a2, b2) => (a2.name ?? "").localeCompare(b2.name ?? ""), requiredFirst: (a2, b2) => {
  var _a, _b;
  return +!!((_a = b2.type) == null ? void 0 : _a.required) - +!!((_b = a2.type) == null ? void 0 : _b.required) || (a2.name ?? "").localeCompare(b2.name ?? "");
}, none: null };
var groupRows = (rows, sort) => {
  let sections = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
  if (!rows) return sections;
  Object.entries(rows).forEach(([key, row]) => {
    let { category, subcategory } = (row == null ? void 0 : row.table) || {};
    if (category) {
      let section = sections.sections[category] || { ungrouped: [], subsections: {} };
      if (!subcategory) section.ungrouped.push({ key, ...row });
      else {
        let subsection = section.subsections[subcategory] || [];
        subsection.push({ key, ...row }), section.subsections[subcategory] = subsection;
      }
      sections.sections[category] = section;
    } else if (subcategory) {
      let subsection = sections.ungroupedSubsections[subcategory] || [];
      subsection.push({ key, ...row }), sections.ungroupedSubsections[subcategory] = subsection;
    } else sections.ungrouped.push({ key, ...row });
  });
  let sortFn = sortFns[sort], sortSubsection = (record) => sortFn ? Object.keys(record).reduce((acc, cur) => ({ ...acc, [cur]: record[cur].sort(sortFn) }), {}) : record;
  return { ungrouped: sortFn ? sections.ungrouped.sort(sortFn) : sections.ungrouped, ungroupedSubsections: sortSubsection(sections.ungroupedSubsections), sections: Object.keys(sections.sections).reduce((acc, cur) => ({ ...acc, [cur]: { ungrouped: sortFn ? sections.sections[cur].ungrouped.sort(sortFn) : sections.sections[cur].ungrouped, subsections: sortSubsection(sections.sections[cur].subsections) } }), {}) };
};
var safeIncludeConditionalArg = (row, args, globals) => {
  try {
    return z(row, args, globals);
  } catch (err) {
    return import_client_logger.once.warn(err.message), false;
  }
};
var ArgsTable = (props) => {
  let { updateArgs, resetArgs, compact, inAddonPanel, initialExpandedArgs, sort = "none", isLoading } = props;
  if ("error" in props) {
    let { error } = props;
    return import_react.default.createElement(EmptyBlock, null, error, " ", import_react.default.createElement(yi, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: true }, import_react.default.createElement(DocumentIcon, null), " Read the docs"));
  }
  if (isLoading) return import_react.default.createElement(Skeleton, null);
  let { rows, args, globals } = "rows" in props ? props : { rows: void 0, args: void 0, globals: void 0 }, groups = groupRows(pickBy(rows || {}, (row) => {
    var _a;
    return !((_a = row == null ? void 0 : row.table) == null ? void 0 : _a.disable) && safeIncludeConditionalArg(row, args || {}, globals || {});
  }), sort), hasNoUngrouped = groups.ungrouped.length === 0, hasNoSections = Object.entries(groups.sections).length === 0, hasNoUngroupedSubsections = Object.entries(groups.ungroupedSubsections).length === 0;
  if (hasNoUngrouped && hasNoSections && hasNoUngroupedSubsections) return import_react.default.createElement(Empty, { inAddonPanel });
  let colSpan = 1;
  updateArgs && (colSpan += 1), compact || (colSpan += 2);
  let expandable = Object.keys(groups.sections).length > 0, common = { updateArgs, compact, inAddonPanel, initialExpandedArgs };
  return import_react.default.createElement(jl, null, import_react.default.createElement(TableWrapper2, { compact, inAddonPanel, className: "docblock-argstable sb-unstyled" }, import_react.default.createElement("thead", { className: "docblock-argstable-head" }, import_react.default.createElement("tr", null, import_react.default.createElement("th", null, import_react.default.createElement("span", null, "Name")), compact ? null : import_react.default.createElement("th", null, import_react.default.createElement("span", null, "Description")), compact ? null : import_react.default.createElement("th", null, import_react.default.createElement("span", null, "Default")), updateArgs ? import_react.default.createElement("th", null, import_react.default.createElement(ControlHeadingWrapper, null, "Control", " ", !isLoading && resetArgs && import_react.default.createElement(StyledIconButton, { onClick: () => resetArgs(), title: "Reset controls" }, import_react.default.createElement(UndoIcon, { "aria-hidden": true })))) : null)), import_react.default.createElement("tbody", { className: "docblock-argstable-body" }, groups.ungrouped.map((row) => import_react.default.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], ...common })), Object.entries(groups.ungroupedSubsections).map(([subcategory, subsection]) => import_react.default.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => import_react.default.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], expandable, ...common })))), Object.entries(groups.sections).map(([category, section]) => import_react.default.createElement(SectionRow, { key: category, label: category, level: "section", colSpan }, section.ungrouped.map((row) => import_react.default.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], ...common })), Object.entries(section.subsections).map(([subcategory, subsection]) => import_react.default.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => import_react.default.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], expandable, ...common })))))))));
};
var anchorBlockIdFromId = (storyId) => `anchor--${storyId}`;
var Anchor = ({ storyId, children }) => import_react.default.createElement("div", { id: anchorBlockIdFromId(storyId), className: "sb-anchor" }, children);
globalThis && globalThis.__DOCS_CONTEXT__ === void 0 && (globalThis.__DOCS_CONTEXT__ = (0, import_react.createContext)(null), globalThis.__DOCS_CONTEXT__.displayName = "DocsContext");
var DocsContext = globalThis ? globalThis.__DOCS_CONTEXT__ : (0, import_react.createContext)(null);
var useOf = (moduleExportOrType, validTypes) => (0, import_react.useContext)(DocsContext).resolveOf(moduleExportOrType, validTypes);
var titleCase = (str) => str.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
var getComponentName = (component) => {
  if (component) return typeof component == "string" ? component.includes("-") ? titleCase(component) : component : component.__docgenInfo && component.__docgenInfo.displayName ? component.__docgenInfo.displayName : component.name;
};
function scrollToElement(element, block = "start") {
  element.scrollIntoView({ behavior: "smooth", block, inline: "nearest" });
}
function extractComponentArgTypes(component, parameters) {
  let { extractArgTypes } = parameters.docs || {};
  if (!extractArgTypes) throw new Error("Args unsupported. See Args documentation for your framework.");
  return extractArgTypes(component);
}
function getArgTypesFromResolved(resolved) {
  if (resolved.type === "component") {
    let { component: component2, projectAnnotations: { parameters: parameters2 } } = resolved;
    return { argTypes: extractComponentArgTypes(component2, parameters2), parameters: parameters2, component: component2 };
  }
  if (resolved.type === "meta") {
    let { preparedMeta: { argTypes: argTypes2, parameters: parameters2, component: component2, subcomponents: subcomponents2 } } = resolved;
    return { argTypes: argTypes2, parameters: parameters2, component: component2, subcomponents: subcomponents2 };
  }
  let { story: { argTypes, parameters, component, subcomponents } } = resolved;
  return { argTypes, parameters, component, subcomponents };
}
var ArgTypes = (props) => {
  var _a;
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let resolved = useOf(of || "meta"), { argTypes, parameters, component, subcomponents } = getArgTypesFromResolved(resolved), argTypesParameters = ((_a = parameters == null ? void 0 : parameters.docs) == null ? void 0 : _a.argTypes) || {}, include = props.include ?? argTypesParameters.include, exclude = props.exclude ?? argTypesParameters.exclude, sort = props.sort ?? argTypesParameters.sort, filteredArgTypes = (0, import_preview_api.filterArgTypes)(argTypes, include, exclude);
  if (!(!!subcomponents && Object.keys(subcomponents || {}).length > 0)) return import_react.default.createElement(ArgsTable, { rows: filteredArgTypes, sort });
  let mainComponentName = getComponentName(component) || "Main", subcomponentTabs = Object.fromEntries(Object.entries(subcomponents || {}).map(([key, comp]) => [key, { rows: (0, import_preview_api.filterArgTypes)(extractComponentArgTypes(comp, parameters), include, exclude), sort }])), tabs = { [mainComponentName]: { rows: filteredArgTypes, sort }, ...subcomponentTabs };
  return import_react.default.createElement(TabbedArgsTable, { tabs, sort });
};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS22 = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM22 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var eventProperties = ["bubbles", "cancelBubble", "cancelable", "composed", "currentTarget", "defaultPrevented", "eventPhase", "isTrusted", "returnValue", "srcElement", "target", "timeStamp", "type"];
var customEventSpecificProperties = ["detail"];
function extractEventHiddenProperties(event) {
  let rebuildEvent = eventProperties.filter((value2) => event[value2] !== void 0).reduce((acc, value2) => (acc[value2] = event[value2], acc), {});
  if (event instanceof CustomEvent) for (let value2 of customEventSpecificProperties.filter((value22) => event[value22] !== void 0)) rebuildEvent[value2] = event[value2];
  return rebuildEvent;
}
var require_es_object_atoms = __commonJS22({ "node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js"(exports, module) {
  module.exports = Object;
} });
var require_es_errors = __commonJS22({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js"(exports, module) {
  module.exports = Error;
} });
var require_eval = __commonJS22({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js"(exports, module) {
  module.exports = EvalError;
} });
var require_range = __commonJS22({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js"(exports, module) {
  module.exports = RangeError;
} });
var require_ref = __commonJS22({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js"(exports, module) {
  module.exports = ReferenceError;
} });
var require_syntax = __commonJS22({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js"(exports, module) {
  module.exports = SyntaxError;
} });
var require_type = __commonJS22({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js"(exports, module) {
  module.exports = TypeError;
} });
var require_uri = __commonJS22({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js"(exports, module) {
  module.exports = URIError;
} });
var require_abs = __commonJS22({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js"(exports, module) {
  module.exports = Math.abs;
} });
var require_floor = __commonJS22({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js"(exports, module) {
  module.exports = Math.floor;
} });
var require_max = __commonJS22({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js"(exports, module) {
  module.exports = Math.max;
} });
var require_min = __commonJS22({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js"(exports, module) {
  module.exports = Math.min;
} });
var require_pow = __commonJS22({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js"(exports, module) {
  module.exports = Math.pow;
} });
var require_round = __commonJS22({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js"(exports, module) {
  module.exports = Math.round;
} });
var require_isNaN = __commonJS22({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js"(exports, module) {
  module.exports = Number.isNaN || function(a2) {
    return a2 !== a2;
  };
} });
var require_sign = __commonJS22({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js"(exports, module) {
  var $isNaN = require_isNaN();
  module.exports = function(number) {
    return $isNaN(number) || number === 0 ? number : number < 0 ? -1 : 1;
  };
} });
var require_gOPD = __commonJS22({ "node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js"(exports, module) {
  module.exports = Object.getOwnPropertyDescriptor;
} });
var require_gopd = __commonJS22({ "node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js"(exports, module) {
  var $gOPD = require_gOPD();
  if ($gOPD) try {
    $gOPD([], "length");
  } catch {
    $gOPD = null;
  }
  module.exports = $gOPD;
} });
var require_es_define_property = __commonJS22({ "node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js"(exports, module) {
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) try {
    $defineProperty({}, "a", { value: 1 });
  } catch {
    $defineProperty = false;
  }
  module.exports = $defineProperty;
} });
var require_shams = __commonJS22({ "node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js"(exports, module) {
  module.exports = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return false;
    if (typeof Symbol.iterator == "symbol") return true;
    var obj = {}, sym = Symbol("test"), symObj = Object(sym);
    if (typeof sym == "string" || Object.prototype.toString.call(sym) !== "[object Symbol]" || Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    var symVal = 42;
    obj[sym] = symVal;
    for (var _22 in obj) return false;
    if (typeof Object.keys == "function" && Object.keys(obj).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym || !Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
      if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
  };
} });
var require_has_symbols = __commonJS22({ "node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js"(exports, module) {
  var origSymbol = typeof Symbol < "u" && Symbol, hasSymbolSham = require_shams();
  module.exports = function() {
    return typeof origSymbol != "function" || typeof Symbol != "function" || typeof origSymbol("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : hasSymbolSham();
  };
} });
var require_Reflect_getPrototypeOf = __commonJS22({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
  module.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
} });
var require_Object_getPrototypeOf = __commonJS22({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
  var $Object = require_es_object_atoms();
  module.exports = $Object.getPrototypeOf || null;
} });
var require_implementation = __commonJS22({ "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js"(exports, module) {
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ", toStr = Object.prototype.toString, max = Math.max, funcType = "[object Function]", concatty = function(a2, b2) {
    for (var arr = [], i2 = 0; i2 < a2.length; i2 += 1) arr[i2] = a2[i2];
    for (var j2 = 0; j2 < b2.length; j2 += 1) arr[j2 + a2.length] = b2[j2];
    return arr;
  }, slicy = function(arrLike, offset) {
    for (var arr = [], i2 = offset || 0, j2 = 0; i2 < arrLike.length; i2 += 1, j2 += 1) arr[j2] = arrLike[i2];
    return arr;
  }, joiny = function(arr, joiner) {
    for (var str = "", i2 = 0; i2 < arr.length; i2 += 1) str += arr[i2], i2 + 1 < arr.length && (str += joiner);
    return str;
  };
  module.exports = function(that) {
    var target = this;
    if (typeof target != "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    for (var args = slicy(arguments, 1), bound, binder = function() {
      if (this instanceof bound) {
        var result = target.apply(this, concatty(args, arguments));
        return Object(result) === result ? result : this;
      }
      return target.apply(that, concatty(args, arguments));
    }, boundLength = max(0, target.length - args.length), boundArgs = [], i2 = 0; i2 < boundLength; i2++) boundArgs[i2] = "$" + i2;
    if (bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder), target.prototype) {
      var Empty2 = function() {
      };
      Empty2.prototype = target.prototype, bound.prototype = new Empty2(), Empty2.prototype = null;
    }
    return bound;
  };
} });
var require_function_bind = __commonJS22({ "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js"(exports, module) {
  var implementation = require_implementation();
  module.exports = Function.prototype.bind || implementation;
} });
var require_functionCall = __commonJS22({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
  module.exports = Function.prototype.call;
} });
var require_functionApply = __commonJS22({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
  module.exports = Function.prototype.apply;
} });
var require_reflectApply = __commonJS22({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
  module.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
} });
var require_actualApply = __commonJS22({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
  var bind = require_function_bind(), $apply = require_functionApply(), $call = require_functionCall(), $reflectApply = require_reflectApply();
  module.exports = $reflectApply || bind.call($call, $apply);
} });
var require_call_bind_apply_helpers = __commonJS22({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js"(exports, module) {
  var bind = require_function_bind(), $TypeError = require_type(), $call = require_functionCall(), $actualApply = require_actualApply();
  module.exports = function(args) {
    if (args.length < 1 || typeof args[0] != "function") throw new $TypeError("a function is required");
    return $actualApply(bind, $call, args);
  };
} });
var require_get = __commonJS22({ "node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js"(exports, module) {
  var callBind = require_call_bind_apply_helpers(), gOPD = require_gopd(), hasProtoAccessor;
  try {
    hasProtoAccessor = [].__proto__ === Array.prototype;
  } catch (e2) {
    if (!e2 || typeof e2 != "object" || !("code" in e2) || e2.code !== "ERR_PROTO_ACCESS") throw e2;
  }
  var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, "__proto__"), $Object = Object, $getPrototypeOf = $Object.getPrototypeOf;
  module.exports = desc && typeof desc.get == "function" ? callBind([desc.get]) : typeof $getPrototypeOf == "function" ? function(value2) {
    return $getPrototypeOf(value2 == null ? value2 : $Object(value2));
  } : false;
} });
var require_get_proto = __commonJS22({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js"(exports, module) {
  var reflectGetProto = require_Reflect_getPrototypeOf(), originalGetProto = require_Object_getPrototypeOf(), getDunderProto = require_get();
  module.exports = reflectGetProto ? function(O2) {
    return reflectGetProto(O2);
  } : originalGetProto ? function(O2) {
    if (!O2 || typeof O2 != "object" && typeof O2 != "function") throw new TypeError("getProto: not an object");
    return originalGetProto(O2);
  } : getDunderProto ? function(O2) {
    return getDunderProto(O2);
  } : null;
} });
var require_hasown = __commonJS22({ "node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js"(exports, module) {
  var call = Function.prototype.call, $hasOwn = Object.prototype.hasOwnProperty, bind = require_function_bind();
  module.exports = bind.call(call, $hasOwn);
} });
var require_get_intrinsic = __commonJS22({ "node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js"(exports, module) {
  var undefined2, $Object = require_es_object_atoms(), $Error = require_es_errors(), $EvalError = require_eval(), $RangeError = require_range(), $ReferenceError = require_ref(), $SyntaxError = require_syntax(), $TypeError = require_type(), $URIError = require_uri(), abs = require_abs(), floor = require_floor(), max = require_max(), min = require_min(), pow = require_pow(), round = require_round(), sign = require_sign(), $Function = Function, getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch {
    }
  }, $gOPD = require_gopd(), $defineProperty = require_es_define_property(), throwTypeError = function() {
    throw new $TypeError();
  }, ThrowTypeError = $gOPD ? function() {
    try {
      return arguments.callee, throwTypeError;
    } catch {
      try {
        return $gOPD(arguments, "callee").get;
      } catch {
        return throwTypeError;
      }
    }
  }() : throwTypeError, hasSymbols = require_has_symbols()(), getProto = require_get_proto(), $ObjectGPO = require_Object_getPrototypeOf(), $ReflectGPO = require_Reflect_getPrototypeOf(), $apply = require_functionApply(), $call = require_functionCall(), needsEval = {}, TypedArray = typeof Uint8Array > "u" || !getProto ? undefined2 : getProto(Uint8Array), INTRINSICS = { __proto__: null, "%AggregateError%": typeof AggregateError > "u" ? undefined2 : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? undefined2 : ArrayBuffer, "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2, "%AsyncFromSyncIteratorPrototype%": undefined2, "%AsyncFunction%": needsEval, "%AsyncGenerator%": needsEval, "%AsyncGeneratorFunction%": needsEval, "%AsyncIteratorPrototype%": needsEval, "%Atomics%": typeof Atomics > "u" ? undefined2 : Atomics, "%BigInt%": typeof BigInt > "u" ? undefined2 : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? undefined2 : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? undefined2 : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? undefined2 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": $Error, "%eval%": eval, "%EvalError%": $EvalError, "%Float16Array%": typeof Float16Array > "u" ? undefined2 : Float16Array, "%Float32Array%": typeof Float32Array > "u" ? undefined2 : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? undefined2 : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? undefined2 : FinalizationRegistry, "%Function%": $Function, "%GeneratorFunction%": needsEval, "%Int8Array%": typeof Int8Array > "u" ? undefined2 : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? undefined2 : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? undefined2 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2, "%JSON%": typeof JSON == "object" ? JSON : undefined2, "%Map%": typeof Map > "u" ? undefined2 : Map, "%MapIteratorPrototype%": typeof Map > "u" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": $Object, "%Object.getOwnPropertyDescriptor%": $gOPD, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? undefined2 : Promise, "%Proxy%": typeof Proxy > "u" ? undefined2 : Proxy, "%RangeError%": $RangeError, "%ReferenceError%": $ReferenceError, "%Reflect%": typeof Reflect > "u" ? undefined2 : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? undefined2 : Set, "%SetIteratorPrototype%": typeof Set > "u" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? undefined2 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2, "%Symbol%": hasSymbols ? Symbol : undefined2, "%SyntaxError%": $SyntaxError, "%ThrowTypeError%": ThrowTypeError, "%TypedArray%": TypedArray, "%TypeError%": $TypeError, "%Uint8Array%": typeof Uint8Array > "u" ? undefined2 : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? undefined2 : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? undefined2 : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? undefined2 : Uint32Array, "%URIError%": $URIError, "%WeakMap%": typeof WeakMap > "u" ? undefined2 : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? undefined2 : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? undefined2 : WeakSet, "%Function.prototype.call%": $call, "%Function.prototype.apply%": $apply, "%Object.defineProperty%": $defineProperty, "%Object.getPrototypeOf%": $ObjectGPO, "%Math.abs%": abs, "%Math.floor%": floor, "%Math.max%": max, "%Math.min%": min, "%Math.pow%": pow, "%Math.round%": round, "%Math.sign%": sign, "%Reflect.getPrototypeOf%": $ReflectGPO };
  if (getProto) try {
    null.error;
  } catch (e2) {
    errorProto = getProto(getProto(e2)), INTRINSICS["%Error.prototype%"] = errorProto;
  }
  var errorProto, doEval = function doEval2(name) {
    var value2;
    if (name === "%AsyncFunction%") value2 = getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value2 = getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value2 = getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
      var fn2 = doEval2("%AsyncGeneratorFunction%");
      fn2 && (value2 = fn2.prototype);
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      gen && getProto && (value2 = getProto(gen.prototype));
    }
    return INTRINSICS[name] = value2, value2;
  }, LEGACY_ALIASES = { __proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, bind = require_function_bind(), hasOwn = require_hasown(), $concat = bind.call($call, Array.prototype.concat), $spliceApply = bind.call($apply, Array.prototype.splice), $replace = bind.call($call, String.prototype.replace), $strSlice = bind.call($call, String.prototype.slice), $exec = bind.call($call, RegExp.prototype.exec), rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, reEscapeChar2 = /\\(\\)?/g, stringToPath2 = function(string) {
    var first = $strSlice(string, 0, 1), last = $strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    return $replace(string, rePropName2, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar2, "$1") : number || match;
    }), result;
  }, getBaseIntrinsic = function(name, allowMissing) {
    var intrinsicName = name, alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName) && (alias = LEGACY_ALIASES[intrinsicName], intrinsicName = "%" + alias[0] + "%"), hasOwn(INTRINSICS, intrinsicName)) {
      var value2 = INTRINSICS[intrinsicName];
      if (value2 === needsEval && (value2 = doEval(intrinsicName)), typeof value2 > "u" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      return { alias, name: intrinsicName, value: value2 };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  module.exports = function(name, allowMissing) {
    if (typeof name != "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing != "boolean") throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = stringToPath2(name), intrinsicBaseName = parts.length > 0 ? parts[0] : "", intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing), intrinsicRealName = intrinsic.name, value2 = intrinsic.value, skipFurtherCaching = false, alias = intrinsic.alias;
    alias && (intrinsicBaseName = alias[0], $spliceApply(parts, $concat([0, 1], alias)));
    for (var i2 = 1, isOwn = true; i2 < parts.length; i2 += 1) {
      var part = parts[i2], first = $strSlice(part, 0, 1), last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
      if ((part === "constructor" || !isOwn) && (skipFurtherCaching = true), intrinsicBaseName += "." + part, intrinsicRealName = "%" + intrinsicBaseName + "%", hasOwn(INTRINSICS, intrinsicRealName)) value2 = INTRINSICS[intrinsicRealName];
      else if (value2 != null) {
        if (!(part in value2)) {
          if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          return;
        }
        if ($gOPD && i2 + 1 >= parts.length) {
          var desc = $gOPD(value2, part);
          isOwn = !!desc, isOwn && "get" in desc && !("originalValue" in desc.get) ? value2 = desc.get : value2 = value2[part];
        } else isOwn = hasOwn(value2, part), value2 = value2[part];
        isOwn && !skipFurtherCaching && (INTRINSICS[intrinsicRealName] = value2);
      }
    }
    return value2;
  };
} });
var require_call_bound = __commonJS22({ "node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js"(exports, module) {
  var GetIntrinsic = require_get_intrinsic(), callBindBasic = require_call_bind_apply_helpers(), $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
  module.exports = function(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    return typeof intrinsic == "function" && $indexOf(name, ".prototype.") > -1 ? callBindBasic([intrinsic]) : intrinsic;
  };
} });
var require_shams2 = __commonJS22({ "node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js"(exports, module) {
  var hasSymbols = require_shams();
  module.exports = function() {
    return hasSymbols() && !!Symbol.toStringTag;
  };
} });
var require_is_regex = __commonJS22({ "node_modules/.pnpm/is-regex@1.2.1/node_modules/is-regex/index.js"(exports, module) {
  var callBound = require_call_bound(), hasToStringTag = require_shams2()(), hasOwn = require_hasown(), gOPD = require_gopd(), fn2;
  hasToStringTag ? ($exec = callBound("RegExp.prototype.exec"), isRegexMarker = {}, throwRegexMarker = function() {
    throw isRegexMarker;
  }, badStringifier = { toString: throwRegexMarker, valueOf: throwRegexMarker }, typeof Symbol.toPrimitive == "symbol" && (badStringifier[Symbol.toPrimitive] = throwRegexMarker), fn2 = function(value2) {
    if (!value2 || typeof value2 != "object") return false;
    var descriptor = gOPD(value2, "lastIndex"), hasLastIndexDataProperty = descriptor && hasOwn(descriptor, "value");
    if (!hasLastIndexDataProperty) return false;
    try {
      $exec(value2, badStringifier);
    } catch (e2) {
      return e2 === isRegexMarker;
    }
  }) : ($toString = callBound("Object.prototype.toString"), regexClass = "[object RegExp]", fn2 = function(value2) {
    return !value2 || typeof value2 != "object" && typeof value2 != "function" ? false : $toString(value2) === regexClass;
  });
  var $exec, isRegexMarker, throwRegexMarker, badStringifier, $toString, regexClass;
  module.exports = fn2;
} });
var require_is_function = __commonJS22({ "node_modules/.pnpm/is-function@1.0.2/node_modules/is-function/index.js"(exports, module) {
  module.exports = isFunction3;
  var toString2 = Object.prototype.toString;
  function isFunction3(fn2) {
    if (!fn2) return false;
    var string = toString2.call(fn2);
    return string === "[object Function]" || typeof fn2 == "function" && string !== "[object RegExp]" || typeof window < "u" && (fn2 === window.setTimeout || fn2 === window.alert || fn2 === window.confirm || fn2 === window.prompt);
  }
} });
var require_safe_regex_test = __commonJS22({ "node_modules/.pnpm/safe-regex-test@1.1.0/node_modules/safe-regex-test/index.js"(exports, module) {
  var callBound = require_call_bound(), isRegex = require_is_regex(), $exec = callBound("RegExp.prototype.exec"), $TypeError = require_type();
  module.exports = function(regex2) {
    if (!isRegex(regex2)) throw new $TypeError("`regex` must be a RegExp");
    return function(s2) {
      return $exec(regex2, s2) !== null;
    };
  };
} });
var require_is_symbol = __commonJS22({ "node_modules/.pnpm/is-symbol@1.1.1/node_modules/is-symbol/index.js"(exports, module) {
  var callBound = require_call_bound(), $toString = callBound("Object.prototype.toString"), hasSymbols = require_has_symbols()(), safeRegexTest = require_safe_regex_test();
  hasSymbols ? ($symToStr = callBound("Symbol.prototype.toString"), isSymString = safeRegexTest(/^Symbol\(.*\)$/), isSymbolObject = function(value2) {
    return typeof value2.valueOf() != "symbol" ? false : isSymString($symToStr(value2));
  }, module.exports = function(value2) {
    if (typeof value2 == "symbol") return true;
    if (!value2 || typeof value2 != "object" || $toString(value2) !== "[object Symbol]") return false;
    try {
      return isSymbolObject(value2);
    } catch {
      return false;
    }
  }) : module.exports = function(value2) {
    return false;
  };
  var $symToStr, isSymString, isSymbolObject;
} });
var import_is_regex = __toESM22(require_is_regex());
var import_is_function = __toESM22(require_is_function());
var import_is_symbol = __toESM22(require_is_symbol());
function isObject(val) {
  return val != null && typeof val == "object" && Array.isArray(val) === false;
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value2) {
  var isOwn = hasOwnProperty.call(value2, symToStringTag), tag = value2[symToStringTag];
  try {
    value2[symToStringTag] = void 0;
    var unmasked = true;
  } catch {
  }
  var result = nativeObjectToString.call(value2);
  return unmasked && (isOwn ? value2[symToStringTag] = tag : delete value2[symToStringTag]), result;
}
var getRawTag_default = getRawTag;
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value2) {
  return nativeObjectToString2.call(value2);
}
var objectToString_default = objectToString;
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value2) {
  return value2 == null ? value2 === void 0 ? undefinedTag : nullTag : symToStringTag2 && symToStringTag2 in Object(value2) ? getRawTag_default(value2) : objectToString_default(value2);
}
var baseGetTag_default = baseGetTag;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
symbolProto ? symbolProto.toString : void 0;
function isObject2(value2) {
  var type = typeof value2;
  return value2 != null && (type == "object" || type == "function");
}
var isObject_default = isObject2;
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value2) {
  if (!isObject_default(value2)) return false;
  var tag = baseGetTag_default(value2);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch {
    }
    try {
      return func + "";
    } catch {
    }
  }
  return "";
}
var toSource_default = toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value2) {
  if (!isObject_default(value2) || isMasked_default(value2)) return false;
  var pattern = isFunction_default(value2) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value2));
}
var baseIsNative_default = baseIsNative;
function getValue(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
var getValue_default = getValue;
function getNative(object2, key) {
  var value2 = getValue_default(object2, key);
  return baseIsNative_default(value2) ? value2 : void 0;
}
var getNative_default = getNative;
function eq(value2, other) {
  return value2 === other || value2 !== value2 && other !== other;
}
var eq_default = eq;
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {}, this.size = 0;
}
var hashClear_default = hashClear;
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  return this.size -= result ? 1 : 0, result;
}
var hashDelete_default = hashDelete;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty3.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
}
var hashHas_default = hashHas;
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value2) {
  var data = this.__data__;
  return this.size += this.has(key) ? 0 : 1, data[key] = nativeCreate_default && value2 === void 0 ? HASH_UNDEFINED2 : value2, this;
}
var hashSet_default = hashSet;
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  for (this.clear(); ++index < length; ) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype.delete = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;
function listCacheClear() {
  this.__data__ = [], this.size = 0;
}
var listCacheClear_default = listCacheClear;
function assocIndexOf(array2, key) {
  for (var length = array2.length; length--; ) if (eq_default(array2[length][0], key)) return length;
  return -1;
}
var assocIndexOf_default = assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) return false;
  var lastIndex = data.length - 1;
  return index == lastIndex ? data.pop() : splice.call(data, index, 1), --this.size, true;
}
var listCacheDelete_default = listCacheDelete;
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;
function listCacheSet(key, value2) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? (++this.size, data.push([key, value2])) : data[index][1] = value2, this;
}
var listCacheSet_default = listCacheSet;
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  for (this.clear(); ++index < length; ) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype.delete = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;
function mapCacheClear() {
  this.size = 0, this.__data__ = { hash: new Hash_default(), map: new (Map_default || ListCache_default)(), string: new Hash_default() };
}
var mapCacheClear_default = mapCacheClear;
function isKeyable(value2) {
  var type = typeof value2;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
}
var isKeyable_default = isKeyable;
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;
function mapCacheDelete(key) {
  var result = getMapData_default(this, key).delete(key);
  return this.size -= result ? 1 : 0, result;
}
var mapCacheDelete_default = mapCacheDelete;
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;
function mapCacheSet(key, value2) {
  var data = getMapData_default(this, key), size = data.size;
  return data.set(key, value2), this.size += data.size == size ? 0 : 1, this;
}
var mapCacheSet_default = mapCacheSet;
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  for (this.clear(); ++index < length; ) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype.delete = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize2(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) return cache.get(key);
    var result = func.apply(this, args);
    return memoized.cache = cache.set(key, result) || cache, result;
  };
  return memoized.cache = new (memoize2.Cache || MapCache_default)(), memoized;
}
memoize2.Cache = MapCache_default;
var memoize_default = memoize2;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    return cache.size === MAX_MEMOIZE_SIZE && cache.clear(), key;
  }), cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
memoizeCapped_default(function(string) {
  var result = [];
  return string.charCodeAt(0) === 46 && result.push(""), string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  }), result;
});
var isObject3 = isObject;
var dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function convertUnconventionalData(data) {
  if (!isObject3(data)) return data;
  let result = data, wasMutated = false;
  return typeof Event < "u" && data instanceof Event && (result = extractEventHiddenProperties(result), wasMutated = true), result = Object.keys(result).reduce((acc, key) => {
    try {
      result[key] && result[key].toJSON, acc[key] = result[key];
    } catch {
      wasMutated = true;
    }
    return acc;
  }, {}), wasMutated ? result : data;
}
var replacer = function(options) {
  let objects, map, stack, keys;
  return function(key, value2) {
    var _a;
    try {
      if (key === "") return keys = [], objects = /* @__PURE__ */ new Map([[value2, "[]"]]), map = /* @__PURE__ */ new Map(), stack = [], value2;
      let origin = map.get(this) || this;
      for (; stack.length && origin !== stack[0]; ) stack.shift(), keys.pop();
      if (typeof value2 == "boolean") return value2;
      if (value2 === void 0) return options.allowUndefined ? "_undefined_" : void 0;
      if (value2 === null) return null;
      if (typeof value2 == "number") return value2 === Number.NEGATIVE_INFINITY ? "_-Infinity_" : value2 === Number.POSITIVE_INFINITY ? "_Infinity_" : Number.isNaN(value2) ? "_NaN_" : value2;
      if (typeof value2 == "bigint") return `_bigint_${value2.toString()}`;
      if (typeof value2 == "string") return dateFormat.test(value2) ? options.allowDate ? `_date_${value2}` : void 0 : value2;
      if ((0, import_is_regex.default)(value2)) return options.allowRegExp ? `_regexp_${value2.flags}|${value2.source}` : void 0;
      if ((0, import_is_function.default)(value2)) return;
      if ((0, import_is_symbol.default)(value2)) {
        if (!options.allowSymbol) return;
        let globalRegistryKey = Symbol.keyFor(value2);
        return globalRegistryKey !== void 0 ? `_gsymbol_${globalRegistryKey}` : `_symbol_${value2.toString().slice(7, -1)}`;
      }
      if (stack.length >= options.maxDepth) return Array.isArray(value2) ? `[Array(${value2.length})]` : "[Object]";
      if (value2 === this) return `_duplicate_${JSON.stringify(keys)}`;
      if (value2 instanceof Error && options.allowError) return { __isConvertedError__: true, errorProperties: { ...value2.cause ? { cause: value2.cause } : {}, ...value2, name: value2.name, message: value2.message, stack: value2.stack, "_constructor-name_": value2.constructor.name } };
      if (((_a = value2 == null ? void 0 : value2.constructor) == null ? void 0 : _a.name) && value2.constructor.name !== "Object" && !Array.isArray(value2)) {
        let found2 = objects.get(value2);
        if (!found2) {
          let plainObject = { __isClassInstance__: true, __className__: value2.constructor.name, ...Object.getOwnPropertyNames(value2).reduce((acc, prop) => {
            try {
              acc[prop] = value2[prop];
            } catch {
            }
            return acc;
          }, {}) };
          return keys.push(key), stack.unshift(plainObject), objects.set(value2, JSON.stringify(keys)), value2 !== plainObject && map.set(value2, plainObject), plainObject;
        }
        return `_duplicate_${found2}`;
      }
      let found = objects.get(value2);
      if (!found) {
        let converted = Array.isArray(value2) ? value2 : convertUnconventionalData(value2);
        return keys.push(key), stack.unshift(converted), objects.set(value2, JSON.stringify(keys)), value2 !== converted && map.set(value2, converted), converted;
      }
      return `_duplicate_${found}`;
    } catch {
      return;
    }
  };
};
var defaultOptions = { maxDepth: 10, space: void 0, allowRegExp: true, allowDate: true, allowError: true, allowUndefined: true, allowSymbol: true };
var stringify = (data, options = {}) => {
  let mergedOptions = { ...defaultOptions, ...options };
  return JSON.stringify(convertUnconventionalData(data), replacer(mergedOptions), options.space);
};
function argsHash(args) {
  return stringify(args, { maxDepth: 50 });
}
var SourceContext = (0, import_react.createContext)({ sources: {} });
var UNKNOWN_ARGS_HASH = "--unknown--";
var SourceContainer = ({ children, channel }) => {
  let [sources, setSources] = (0, import_react.useState)({});
  return (0, import_react.useEffect)(() => {
    let handleSnippetRendered = (idOrEvent, inputSource = null, inputFormat = false) => {
      let { id, args = void 0, source, format: format3 } = typeof idOrEvent == "string" ? { id: idOrEvent, source: inputSource, format: inputFormat } : idOrEvent, hash = args ? argsHash(args) : UNKNOWN_ARGS_HASH;
      setSources((current) => ({ ...current, [id]: { ...current[id], [hash]: { code: source || "", format: format3 } } }));
    };
    return channel.on(ha, handleSnippetRendered), () => channel.off(ha, handleSnippetRendered);
  }, []), import_react.default.createElement(SourceContext.Provider, { value: { sources } }, children);
};
function useTransformCode(source, transform, storyContext) {
  let [transformedCode, setTransformedCode] = (0, import_react.useState)("Transforming..."), transformed = transform ? transform == null ? void 0 : transform(source, storyContext) : source;
  return (0, import_react.useEffect)(() => {
    async function getTransformedCode() {
      let transformResult = await transformed;
      transformResult !== transformedCode && setTransformedCode(transformResult);
    }
    getTransformedCode();
  }), typeof transformed == "object" && typeof transformed.then == "function" ? transformedCode : transformed;
}
var getStorySource = (storyId, args, sourceContext) => {
  let { sources } = sourceContext, sourceMap = sources == null ? void 0 : sources[storyId];
  return (sourceMap == null ? void 0 : sourceMap[argsHash(args)]) || (sourceMap == null ? void 0 : sourceMap[UNKNOWN_ARGS_HASH]) || { code: "" };
};
var useCode = ({ snippet, storyContext, typeFromProps, transformFromProps }) => {
  var _a;
  let parameters = storyContext.parameters ?? {}, { __isArgsStory: isArgsStory } = parameters, sourceParameters = ((_a = parameters.docs) == null ? void 0 : _a.source) || {}, type = typeFromProps || sourceParameters.type || Tn.AUTO, code = type === Tn.DYNAMIC || type === Tn.AUTO && snippet && isArgsStory ? snippet : sourceParameters.originalSource || "", transformer = transformFromProps ?? sourceParameters.transform, transformedCode = transformer ? useTransformCode(code, transformer, storyContext) : code;
  return sourceParameters.code !== void 0 ? sourceParameters.code : transformedCode;
};
var useSourceProps = (props, docsContext, sourceContext) => {
  var _a, _b;
  let { of } = props, story = (0, import_react.useMemo)(() => {
    if (of) return docsContext.resolveOf(of, ["story"]).story;
    try {
      return docsContext.storyById();
    } catch {
    }
  }, [docsContext, of]), storyContext = story ? docsContext.getStoryContext(story) : {}, argsForSource = props.__forceInitialArgs ? storyContext.initialArgs : storyContext.unmappedArgs, source = story ? getStorySource(story.id, argsForSource, sourceContext) : null, transformedCode = useCode({ snippet: source ? source.code : "", storyContext: { ...storyContext, args: argsForSource }, typeFromProps: props.type, transformFromProps: props.transform });
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let sourceParameters = ((_b = (_a = story == null ? void 0 : story.parameters) == null ? void 0 : _a.docs) == null ? void 0 : _b.source) || {}, format3 = props.format, language = props.language ?? sourceParameters.language ?? "jsx", dark = props.dark ?? sourceParameters.dark ?? false;
  return !props.code && !story ? { error: "Oh no! The source is not available." } : props.code ? { code: props.code, format: format3, language, dark } : (format3 = (source == null ? void 0 : source.format) ?? true, { code: transformedCode, format: format3, language, dark });
};
var Source2 = (props) => {
  let sourceContext = (0, import_react.useContext)(SourceContext), docsContext = (0, import_react.useContext)(DocsContext), sourceProps = useSourceProps(props, docsContext, sourceContext);
  return import_react.default.createElement(Source, { ...sourceProps });
};
function useStory(storyId, context) {
  let stories = useStories([storyId], context);
  return stories && stories[0];
}
function useStories(storyIds, context) {
  let [storiesById, setStories] = (0, import_react.useState)({});
  return (0, import_react.useEffect)(() => {
    Promise.all(storyIds.map(async (storyId) => {
      let story = await context.loadStory(storyId);
      setStories((current) => current[storyId] === story ? current : { ...current, [storyId]: story });
    }));
  }), storyIds.map((storyId) => {
    if (storiesById[storyId]) return storiesById[storyId];
    try {
      return context.storyById(storyId);
    } catch {
      return;
    }
  });
}
var getStoryId2 = (props, context) => {
  let { of, meta } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  return meta && context.referenceMeta(meta, false), context.resolveOf(of || "story", ["story"]).story.id;
};
var getStoryProps = (props, story, context) => {
  let { parameters = {} } = story || {}, { docs = {} } = parameters, storyParameters = docs.story || {};
  if (docs.disable) return null;
  if (props.inline ?? storyParameters.inline ?? false) {
    let height2 = props.height ?? storyParameters.height, autoplay = props.autoplay ?? storyParameters.autoplay ?? false;
    return { story, inline: true, height: height2, autoplay, forceInitialArgs: !!props.__forceInitialArgs, primary: !!props.__primary, renderStoryToElement: context.renderStoryToElement };
  }
  let height = props.height ?? storyParameters.height ?? storyParameters.iframeHeight ?? "100px";
  return { story, inline: false, height, primary: !!props.__primary };
};
var Story2 = (props = { __forceInitialArgs: false, __primary: false }) => {
  let context = (0, import_react.useContext)(DocsContext), storyId = getStoryId2(props, context), story = useStory(storyId, context);
  if (!story) return import_react.default.createElement(StorySkeleton, null);
  let storyProps = getStoryProps(props, story, context);
  return storyProps ? import_react.default.createElement(Story, { ...storyProps }) : null;
};
var Canvas = (props) => {
  var _a, _b, _c, _d, _e3, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  let docsContext = (0, import_react.useContext)(DocsContext), sourceContext = (0, import_react.useContext)(SourceContext), { of, source } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { story } = useOf(of || "story", ["story"]), sourceProps = useSourceProps({ ...source, ...of && { of } }, docsContext, sourceContext), layout = props.layout ?? story.parameters.layout ?? ((_b = (_a = story.parameters.docs) == null ? void 0 : _a.canvas) == null ? void 0 : _b.layout) ?? "padded", withToolbar = props.withToolbar ?? ((_d = (_c = story.parameters.docs) == null ? void 0 : _c.canvas) == null ? void 0 : _d.withToolbar) ?? false, additionalActions = props.additionalActions ?? ((_f = (_e3 = story.parameters.docs) == null ? void 0 : _e3.canvas) == null ? void 0 : _f.additionalActions), sourceState = props.sourceState ?? ((_h = (_g = story.parameters.docs) == null ? void 0 : _g.canvas) == null ? void 0 : _h.sourceState) ?? "hidden", className = props.className ?? ((_j = (_i = story.parameters.docs) == null ? void 0 : _i.canvas) == null ? void 0 : _j.className), inline = ((_k = props.story) == null ? void 0 : _k.inline) ?? ((_n = (_m = (_l = story.parameters) == null ? void 0 : _l.docs) == null ? void 0 : _m.story) == null ? void 0 : _n.inline) ?? false;
  return import_react.default.createElement(Preview, { withSource: sourceState === "none" ? void 0 : sourceProps, isExpanded: sourceState === "shown", withToolbar, additionalActions, className, layout, inline }, import_react.default.createElement(Story2, { of: of || story.moduleExport, meta: props.meta, ...props.story }));
};
var useArgs = (story, context) => {
  let result = useArgsIfDefined(story, context);
  if (!result) throw new Error("No result when story was defined");
  return result;
};
var useArgsIfDefined = (story, context) => {
  let storyContext = story ? context.getStoryContext(story) : { args: {} }, { id: storyId } = story || { id: "none" }, [args, setArgs] = (0, import_react.useState)(storyContext.args);
  (0, import_react.useEffect)(() => {
    let onArgsUpdated = (changed) => {
      changed.storyId === storyId && setArgs(changed.args);
    };
    return context.channel.on(import_core_events.STORY_ARGS_UPDATED, onArgsUpdated), () => context.channel.off(import_core_events.STORY_ARGS_UPDATED, onArgsUpdated);
  }, [storyId, context.channel]);
  let updateArgs = (0, import_react.useCallback)((updatedArgs) => context.channel.emit(import_core_events.UPDATE_STORY_ARGS, { storyId, updatedArgs }), [storyId, context.channel]), resetArgs = (0, import_react.useCallback)((argNames) => context.channel.emit(import_core_events.RESET_STORY_ARGS, { storyId, argNames }), [storyId, context.channel]);
  return story && [args, updateArgs, resetArgs];
};
var useGlobals = (story, context) => {
  let storyContext = context.getStoryContext(story), [globals, setGlobals] = (0, import_react.useState)(storyContext.globals);
  return (0, import_react.useEffect)(() => {
    let onGlobalsUpdated = (changed) => {
      setGlobals(changed.globals);
    };
    return context.channel.on(import_core_events.GLOBALS_UPDATED, onGlobalsUpdated), () => context.channel.off(import_core_events.GLOBALS_UPDATED, onGlobalsUpdated);
  }, [context.channel]), [globals];
};
function extractComponentArgTypes2(component, parameters) {
  let { extractArgTypes } = parameters.docs || {};
  if (!extractArgTypes) throw new Error("Args unsupported. See Args documentation for your framework.");
  return extractArgTypes(component);
}
var Controls3 = (props) => {
  var _a;
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let context = (0, import_react.useContext)(DocsContext), { story } = context.resolveOf(of || "story", ["story"]), { parameters, argTypes, component, subcomponents } = story, controlsParameters = ((_a = parameters.docs) == null ? void 0 : _a.controls) || {}, include = props.include ?? controlsParameters.include, exclude = props.exclude ?? controlsParameters.exclude, sort = props.sort ?? controlsParameters.sort, [args, updateArgs, resetArgs] = useArgs(story, context), [globals] = useGlobals(story, context), filteredArgTypes = (0, import_preview_api.filterArgTypes)(argTypes, include, exclude);
  if (!(!!subcomponents && Object.keys(subcomponents || {}).length > 0)) return Object.keys(filteredArgTypes).length > 0 || Object.keys(args).length > 0 ? import_react.default.createElement(ArgsTable, { rows: filteredArgTypes, sort, args, globals, updateArgs, resetArgs }) : null;
  let mainComponentName = getComponentName(component) || "Story", subcomponentTabs = Object.fromEntries(Object.entries(subcomponents || {}).map(([key, comp]) => [key, { rows: (0, import_preview_api.filterArgTypes)(extractComponentArgTypes2(comp, parameters), include, exclude), sort }])), tabs = { [mainComponentName]: { rows: filteredArgTypes, sort }, ...subcomponentTabs };
  return import_react.default.createElement(TabbedArgsTable, { tabs, sort, args, globals, updateArgs, resetArgs });
};
var { document: document2 } = globalThis;
var assertIsFn = (val) => {
  if (typeof val != "function") throw new Error(`Expected story function, got: ${val}`);
  return val;
};
var AddContext = (props) => {
  let { children, ...rest } = props, parentContext = import_react.default.useContext(DocsContext);
  return import_react.default.createElement(DocsContext.Provider, { value: { ...parentContext, ...rest } }, children);
};
var CodeOrSourceMdx = ({ className, children, ...rest }) => {
  if (typeof className != "string" && (typeof children != "string" || !children.match(/[\n\r]/g))) return import_react.default.createElement(ei, null, children);
  let language = className && className.split("-");
  return import_react.default.createElement(Source, { language: language && language[1] || "text", format: false, code: children, ...rest });
};
function navigate(context, url) {
  context.channel.emit(import_core_events.NAVIGATE_URL, url);
}
var A22 = Bk.a;
var AnchorInPage = ({ hash, children }) => {
  let context = (0, import_react.useContext)(DocsContext);
  return import_react.default.createElement(A22, { href: hash, target: "_self", onClick: (event) => {
    let id = hash.substring(1);
    document2.getElementById(id) && navigate(context, hash);
  } }, children);
};
var AnchorMdx = (props) => {
  let { href, target, children, ...rest } = props, context = (0, import_react.useContext)(DocsContext);
  return !href || target === "_blank" || /^https?:\/\//.test(href) ? import_react.default.createElement(A22, { ...props }) : href.startsWith("#") ? import_react.default.createElement(AnchorInPage, { hash: href }, children) : import_react.default.createElement(A22, { href, onClick: (event) => {
    event.button === 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey && (event.preventDefault(), navigate(context, event.currentTarget.getAttribute("href") || ""));
  }, target, ...rest }, children);
};
var SUPPORTED_MDX_HEADERS = ["h1", "h2", "h3", "h4", "h5", "h6"];
var OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: xr(headerType)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {});
var OcticonAnchor = xr.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" }));
var HeaderWithOcticonAnchor = ({ as, id, children, ...rest }) => {
  let context = (0, import_react.useContext)(DocsContext), OcticonHeader = OcticonHeaders[as], hash = `#${id}`;
  return import_react.default.createElement(OcticonHeader, { id, ...rest }, import_react.default.createElement(OcticonAnchor, { "aria-hidden": "true", href: hash, tabIndex: -1, target: "_self", onClick: (event) => {
    document2.getElementById(id) && navigate(context, hash);
  } }, import_react.default.createElement(LinkIcon, null)), children);
};
var HeaderMdx = (props) => {
  let { as, id, children, ...rest } = props;
  if (id) return import_react.default.createElement(HeaderWithOcticonAnchor, { as, id, ...rest }, children);
  let Component4 = as, { as: omittedAs, ...withoutAs } = props;
  return import_react.default.createElement(Component4, { ...J(withoutAs, as) });
};
var HeadersMdx = SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: (props) => import_react.default.createElement(HeaderMdx, { as: headerType, ...props }) }), {});
var Markdown = (props) => {
  var _a;
  if (!props.children) return null;
  if (typeof props.children != "string") throw new Error(dedent`The Markdown block only accepts children as a single string, but children were of type: '${typeof props.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
  return import_react.default.createElement(index_modern_default, { ...props, options: { forceBlock: true, overrides: { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx, ...(_a = props == null ? void 0 : props.options) == null ? void 0 : _a.overrides }, ...props == null ? void 0 : props.options } });
};
var DescriptionType = ((DescriptionType2) => (DescriptionType2.INFO = "info", DescriptionType2.NOTES = "notes", DescriptionType2.DOCGEN = "docgen", DescriptionType2.AUTO = "auto", DescriptionType2))(DescriptionType || {});
var getDescriptionFromResolvedOf = (resolvedOf) => {
  var _a, _b, _c, _d, _e3, _f, _g, _h;
  switch (resolvedOf.type) {
    case "story":
      return ((_b = (_a = resolvedOf.story.parameters.docs) == null ? void 0 : _a.description) == null ? void 0 : _b.story) || null;
    case "meta": {
      let { parameters, component } = resolvedOf.preparedMeta, metaDescription = (_d = (_c = parameters.docs) == null ? void 0 : _c.description) == null ? void 0 : _d.component;
      return metaDescription || ((_f = (_e3 = parameters.docs) == null ? void 0 : _e3.extractComponentDescription) == null ? void 0 : _f.call(_e3, component, { component, parameters })) || null;
    }
    case "component": {
      let { component, projectAnnotations: { parameters } } = resolvedOf;
      return ((_h = (_g = parameters == null ? void 0 : parameters.docs) == null ? void 0 : _g.extractComponentDescription) == null ? void 0 : _h.call(_g, component, { component, parameters })) || null;
    }
    default:
      throw new Error(`Unrecognized module type resolved from 'useOf', got: ${resolvedOf.type}`);
  }
};
var DescriptionContainer = (props) => {
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let resolvedOf = useOf(of || "meta"), markdown = getDescriptionFromResolvedOf(resolvedOf);
  return markdown ? import_react.default.createElement(Markdown, null, markdown) : null;
};
var { document: document3, window: globalWindow3 } = globalThis;
var DocsContainer = ({ context, theme, children }) => {
  var _a, _b, _c, _d, _e3;
  let toc;
  try {
    toc = (_b = (_a = context.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null ? void 0 : _a.docs) == null ? void 0 : _b.toc;
  } catch {
    toc = (_e3 = (_d = (_c = context == null ? void 0 : context.projectAnnotations) == null ? void 0 : _c.parameters) == null ? void 0 : _d.docs) == null ? void 0 : _e3.toc;
  }
  return (0, import_react.useEffect)(() => {
    let url;
    try {
      if (url = new URL(globalWindow3.parent.location.toString()), url.hash) {
        let element = document3.getElementById(decodeURIComponent(url.hash.substring(1)));
        element && setTimeout(() => {
          scrollToElement(element);
        }, 200);
      }
    } catch {
    }
  }), import_react.default.createElement(DocsContext.Provider, { value: context }, import_react.default.createElement(SourceContainer, { channel: context.channel }, import_react.default.createElement(Tt, { theme: pf(theme) }, import_react.default.createElement(DocsPageWrapper, { toc: toc ? import_react.default.createElement(TableOfContents, { className: "sbdocs sbdocs-toc--custom", channel: context.channel, ...toc }) : null }, children))));
};
var regex = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;
var own = Object.hasOwnProperty;
var BananaSlug = class {
  constructor() {
    this.occurrences, this.reset();
  }
  slug(value2, maintainCase) {
    let self2 = this, result = slug(value2, maintainCase === true), originalSlug = result;
    for (; own.call(self2.occurrences, result); ) self2.occurrences[originalSlug]++, result = originalSlug + "-" + self2.occurrences[originalSlug];
    return self2.occurrences[result] = 0, result;
  }
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
};
function slug(value2, maintainCase) {
  return typeof value2 != "string" ? "" : (maintainCase || (value2 = value2.toLowerCase()), value2.replace(regex, "").replace(/ /g, "-"));
}
var slugs = new BananaSlug();
var Heading2 = ({ children, disableAnchor, ...props }) => {
  if (disableAnchor || typeof children != "string") return import_react.default.createElement(oi, null, children);
  let tagID = slugs.slug(children.toLowerCase());
  return import_react.default.createElement(HeaderMdx, { as: "h2", id: tagID, ...props }, children);
};
var Subheading = ({ children, disableAnchor }) => {
  if (disableAnchor || typeof children != "string") return import_react.default.createElement(ai, null, children);
  let tagID = slugs.slug(children.toLowerCase());
  return import_react.default.createElement(HeaderMdx, { as: "h3", id: tagID }, children);
};
var DocsStory = ({ of, expanded = true, withToolbar: withToolbarProp = false, __forceInitialArgs = false, __primary = false }) => {
  var _a, _b;
  let { story } = useOf(of || "story", ["story"]), withToolbar = ((_b = (_a = story.parameters.docs) == null ? void 0 : _a.canvas) == null ? void 0 : _b.withToolbar) ?? withToolbarProp;
  return import_react.default.createElement(Anchor, { storyId: story.id }, expanded && import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(Subheading, null, story.name), import_react.default.createElement(DescriptionContainer, { of })), import_react.default.createElement(Canvas, { of, withToolbar, story: { __forceInitialArgs, __primary }, source: { __forceInitialArgs } }));
};
var Primary = (props) => {
  let { of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { csfFile } = useOf(of || "meta", ["meta"]), primaryStory = (0, import_react.useContext)(DocsContext).componentStoriesFromCSFFile(csfFile)[0];
  return primaryStory ? import_react.default.createElement(DocsStory, { of: primaryStory.moduleExport, expanded: false, __primary: true, withToolbar: true }) : null;
};
var StyledHeading = xr(Heading2)(({ theme }) => ({ fontSize: `${theme.typography.size.s2 - 1}px`, fontWeight: theme.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: theme.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } }));
var Stories = ({ title = "Stories", includePrimary = true }) => {
  var _a;
  let { componentStories, projectAnnotations, getStoryContext } = (0, import_react.useContext)(DocsContext), stories = componentStories(), { stories: { filter } = { filter: void 0 } } = ((_a = projectAnnotations.parameters) == null ? void 0 : _a.docs) || {};
  return filter && (stories = stories.filter((story) => filter(story, getStoryContext(story)))), stories.some((story) => {
    var _a2;
    return (_a2 = story.tags) == null ? void 0 : _a2.includes("autodocs");
  }) && (stories = stories.filter((story) => {
    var _a2;
    return ((_a2 = story.tags) == null ? void 0 : _a2.includes("autodocs")) && !story.usesMount;
  })), includePrimary || (stories = stories.slice(1)), !stories || stories.length === 0 ? null : import_react.default.createElement(import_react.default.Fragment, null, typeof title == "string" ? import_react.default.createElement(StyledHeading, null, title) : title, stories.map((story) => story && import_react.default.createElement(DocsStory, { key: story.id, of: story.moduleExport, expanded: true, __forceInitialArgs: true })));
};
var DEPRECATION_MIGRATION_LINK = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#subtitle-block-and-parameterscomponentsubtitle";
var Subtitle2 = (props) => {
  let { of, children } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let preparedMeta;
  try {
    preparedMeta = useOf(of || "meta", ["meta"]).preparedMeta;
  } catch (error) {
    if (children && !error.message.includes("did you forget to use <Meta of={} />?")) throw error;
  }
  let { componentSubtitle, docs } = (preparedMeta == null ? void 0 : preparedMeta.parameters) || {};
  componentSubtitle && (0, import_client_logger.deprecate)(`Using 'parameters.componentSubtitle' property to subtitle stories is deprecated. See ${DEPRECATION_MIGRATION_LINK}`);
  let content = children || (docs == null ? void 0 : docs.subtitle) || componentSubtitle;
  return content ? import_react.default.createElement(Subtitle, { className: "sbdocs-subtitle sb-unstyled" }, content) : null;
};
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/;
var extractTitle = (title) => {
  let groups = title.trim().split(STORY_KIND_PATH_SEPARATOR);
  return (groups == null ? void 0 : groups[(groups == null ? void 0 : groups.length) - 1]) || title;
};
var Title3 = (props) => {
  let { children, of } = props;
  if ("of" in props && of === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let preparedMeta;
  try {
    preparedMeta = useOf(of || "meta", ["meta"]).preparedMeta;
  } catch (error) {
    if (children && error instanceof Error && !error.message.includes("did you forget to use <Meta of={} />?")) throw error;
  }
  let content = children || extractTitle((preparedMeta == null ? void 0 : preparedMeta.title) || "");
  return content ? import_react.default.createElement(Title, { className: "sbdocs-title sb-unstyled" }, content) : null;
};
var DocsPage = () => {
  let resolvedOf = useOf("meta", ["meta"]), { stories } = resolvedOf.csfFile, isSingleStory = Object.keys(stories).length === 1;
  return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(Title3, null), import_react.default.createElement(Subtitle2, null), import_react.default.createElement(DescriptionContainer, { of: "meta" }), isSingleStory ? import_react.default.createElement(DescriptionContainer, { of: "story" }) : null, import_react.default.createElement(Primary, null), import_react.default.createElement(Controls3, null), isSingleStory ? null : import_react.default.createElement(Stories, null));
};
function Docs({ context, docsParameter }) {
  let Container = docsParameter.container || DocsContainer, Page = docsParameter.page || DocsPage;
  return import_react.default.createElement(Container, { context, theme: docsParameter.theme }, import_react.default.createElement(Page, null));
}
var ExternalDocsContext = class extends import_preview_api.DocsContext {
  constructor(channel, store, renderStoryToElement, processMetaExports) {
    super(channel, store, renderStoryToElement, []);
    this.channel = channel;
    this.store = store;
    this.renderStoryToElement = renderStoryToElement;
    this.processMetaExports = processMetaExports;
    this.referenceMeta = (metaExports, attach) => {
      let csfFile = this.processMetaExports(metaExports);
      this.referenceCSFFile(csfFile), super.referenceMeta(metaExports, attach);
    };
  }
};
var ConstantMap = class {
  constructor(prefix) {
    this.prefix = prefix;
    this.entries = /* @__PURE__ */ new Map();
  }
  get(key) {
    return this.entries.has(key) || this.entries.set(key, `${this.prefix}${this.entries.size}`), this.entries.get(key);
  }
};
var ExternalPreview = class extends import_preview_api.Preview {
  constructor(projectAnnotations) {
    super((path) => Promise.resolve(this.moduleExportsByImportPath[path]), () => (0, import_preview_api.composeConfigs)([{ parameters: { docs: { story: { inline: true } } } }, this.projectAnnotations]), new import_channels.Channel({}));
    this.projectAnnotations = projectAnnotations;
    this.importPaths = new ConstantMap("./importPath/");
    this.titles = new ConstantMap("title-");
    this.storyIndex = { v: 5, entries: {} };
    this.moduleExportsByImportPath = {};
    this.processMetaExports = (metaExports) => {
      let importPath = this.importPaths.get(metaExports);
      this.moduleExportsByImportPath[importPath] = metaExports;
      let title = metaExports.default.title || this.titles.get(metaExports), csfFile = this.storyStoreValue.processCSFFileWithCache(metaExports, importPath, title);
      return Object.values(csfFile.stories).forEach(({ id, name }) => {
        this.storyIndex.entries[id] = { id, importPath, title, name, type: "story" };
      }), this.onStoriesChanged({ storyIndex: this.storyIndex }), csfFile;
    };
    this.docsContext = () => new ExternalDocsContext(this.channel, this.storyStoreValue, this.renderStoryToElement.bind(this), this.processMetaExports.bind(this));
  }
  async getStoryIndexFromServer() {
    return this.storyIndex;
  }
};
function usePreview(projectAnnotations) {
  let previewRef = (0, import_react.useRef)();
  return previewRef.current || (previewRef.current = new ExternalPreview(projectAnnotations)), previewRef.current;
}
function ExternalDocs({ projectAnnotationsList, children }) {
  var _a;
  let projectAnnotations = (0, import_preview_api.composeConfigs)(projectAnnotationsList), preview2 = usePreview(projectAnnotations), docsParameter = { ...(_a = projectAnnotations.parameters) == null ? void 0 : _a.docs, page: () => children };
  return import_react.default.createElement(Docs, { docsParameter, context: preview2.docsContext() });
}
var preview;
var ExternalDocsContainer = ({ projectAnnotations, children }) => (preview || (preview = new ExternalPreview(projectAnnotations)), import_react.default.createElement(DocsContext.Provider, { value: preview.docsContext() }, import_react.default.createElement(Tt, { theme: pf(Me.light) }, children)));
var Meta = ({ of }) => {
  let context = (0, import_react.useContext)(DocsContext);
  of && context.referenceMeta(of, true);
  try {
    let primary = context.storyById();
    return import_react.default.createElement(Anchor, { storyId: primary.id });
  } catch {
    return null;
  }
};
var Unstyled = (props) => import_react.default.createElement("div", { ...props, className: "sb-unstyled" });
var Wrapper10 = ({ children }) => import_react.default.createElement("div", { style: { fontFamily: "sans-serif" } }, children);
var PRIMARY_STORY = "^";

export {
  Typeset,
  ColorItem,
  ColorPalette,
  IconItem,
  IconGallery,
  TableOfContents,
  BooleanControl,
  parseDate,
  parseTime,
  formatDate,
  formatTime,
  DateControl,
  parse2,
  format2,
  NumberControl,
  OptionsControl,
  ObjectControl,
  RangeControl,
  TextControl,
  FilesControl,
  ColorControl,
  ArgsTable,
  anchorBlockIdFromId,
  Anchor,
  DocsContext,
  useOf,
  ArgTypes,
  argsHash,
  SourceContext,
  UNKNOWN_ARGS_HASH,
  SourceContainer,
  useSourceProps,
  Source2,
  getStoryId2,
  getStoryProps,
  Story2,
  Canvas,
  Controls3,
  assertIsFn,
  AddContext,
  CodeOrSourceMdx,
  AnchorMdx,
  HeaderMdx,
  HeadersMdx,
  Markdown,
  DescriptionType,
  DescriptionContainer,
  DocsContainer,
  slugs,
  Heading2,
  Subheading,
  DocsStory,
  Primary,
  Stories,
  Subtitle2,
  extractTitle,
  Title3,
  DocsPage,
  Docs,
  ExternalDocs,
  ExternalDocsContainer,
  Meta,
  Unstyled,
  Wrapper10,
  PRIMARY_STORY
};
//# sourceMappingURL=chunk-NQRL3XVZ.js.map
