(() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // dist/chunk-4DCYVLBB.js
  var __commonJS;
  var init_chunk_4DCYVLBB = __esm({
    "dist/chunk-4DCYVLBB.js"() {
      __commonJS = (cb, mod) => function __require() {
        return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
      };
    }
  });

  // dist/amd-C466QYII.js
  var amd_C466QYII_exports = {};
  __export(amd_C466QYII_exports, {
    default: () => amd_C466QYII_default
  });
  var require_amd, amd_C466QYII_default;
  var init_amd_C466QYII = __esm({
    "dist/amd-C466QYII.js"() {
      init_chunk_4DCYVLBB();
      require_amd = __commonJS({
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
      amd_C466QYII_default = require_amd();
    }
  });

  // dist/input.js
  init_chunk_4DCYVLBB();
  Promise.resolve().then(() => (init_amd_C466QYII(), amd_C466QYII_exports)).then(console.log);
})();
