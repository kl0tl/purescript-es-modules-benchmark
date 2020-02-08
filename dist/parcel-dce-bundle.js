(function () {
// ASSET: index.js
var $Focm$exports = {};

var $CEFT$export$log = function (s) {
  return function () {
    console.log(s);
    return {};
  };
};

;
var $Focm$export$main = $CEFT$export$log("Hello world");
;
$Focm$exports.main = $Focm$export$main;

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $Focm$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $Focm$exports;
  });
}
})();