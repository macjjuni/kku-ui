import "./chunk-2TUXWMP5.js";

// node_modules/.pnpm/@storybook+addon-docs@9.0.15_@types+react@19.1.8_storybook@9.0.15_@testing-library+dom@10.4.0_/node_modules/@storybook/addon-docs/dist/preview.mjs
var excludeTags = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((acc, entry) => {
  let [tag, option] = entry;
  return option.excludeFromDocsStories && (acc[tag] = true), acc;
}, {});
var parameters = { docs: { renderer: async () => {
  let { DocsRenderer } = await import("./DocsRenderer-PQXLIZUC-R6PKTWLN.js");
  return new DocsRenderer();
}, stories: { filter: (story) => {
  var _a;
  return (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 && !((_a = story.parameters.docs) == null ? void 0 : _a.disable);
} } } };
export {
  parameters
};
//# sourceMappingURL=@storybook_addon-docs_preview.js.map
