import {
  __commonJS
} from "./chunk-4DCYVLBB.js";

// amd.js
var require_amd = __commonJS({
  "amd.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(function() {
          return factory(root);
        });
      } else if (typeof module === "object" && module.exports) {
        module.exports = factory(root);
      } else {
        return root.AA = factory(root);
      }
    })({}, function() {
      return {
        a: 1,
        b: 1
      };
    });
  }
});
export default require_amd();
