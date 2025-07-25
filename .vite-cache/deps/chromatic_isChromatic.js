import "./chunk-2TUXWMP5.js";

// node_modules/.pnpm/chromatic@10.9.6/node_modules/chromatic/isChromatic.mjs
function isChromatic(windowArg) {
  const windowToCheck = windowArg || typeof window !== "undefined" && window;
  return !!(windowToCheck && (windowToCheck.navigator.userAgent.match(/Chromatic/) || windowToCheck.location.href.match(/chromatic=true/)));
}
export {
  isChromatic as default
};
//# sourceMappingURL=chromatic_isChromatic.js.map
