import {
  require_react
} from "./chunk-ZFVCUJ6Q.js";
import {
  __commonJS
} from "./chunk-2TUXWMP5.js";

// node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/cjs/react-dom-test-utils.development.js
var require_react_dom_test_utils_development = __commonJS({
  "node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/cjs/react-dom-test-utils.development.js"(exports) {
    "use strict";
    (function() {
      var React = require_react(), didWarnAboutUsingAct = false;
      exports.act = function(callback) {
        false === didWarnAboutUsingAct && (didWarnAboutUsingAct = true, console.error(
          "`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info."
        ));
        return React.act(callback);
      };
    })();
  }
});

// node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/test-utils.js
var require_test_utils = __commonJS({
  "node_modules/.pnpm/react-dom@19.1.0_react@19.1.0/node_modules/react-dom/test-utils.js"(exports, module) {
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_dom_test_utils_development();
    }
  }
});
export default require_test_utils();
/*! Bundled license information:

react-dom/cjs/react-dom-test-utils.development.js:
  (**
   * @license React
   * react-dom-test-utils.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react-dom_test-utils.js.map
