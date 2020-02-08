(function () {
// ASSET: ../Effect.Console/foreign.js
var $CEFT$export$log = function (s) {
  return function () {
    console.log(s);
    return {};
  };
};

var $CEFT$export$warn = function (s) {
  return function () {
    console.warn(s);
    return {};
  };
};

var $CEFT$export$error = function (s) {
  return function () {
    console.error(s);
    return {};
  };
};

var $CEFT$export$info = function (s) {
  return function () {
    console.info(s);
    return {};
  };
};

var $CEFT$export$time = function (s) {
  return function () {
    console.time(s);
    return {};
  };
};

var $CEFT$export$timeLog = function (s) {
  return function () {
    console.timeLog(s);
    return {};
  };
};

var $CEFT$export$timeEnd = function (s) {
  return function () {
    console.timeEnd(s);
    return {};
  };
};

var $CEFT$export$clear = function () {
  console.clear();
  return {};
};

var $nRor$export$showIntImpl = function (n) {
  return n.toString();
};

var $nRor$export$showNumberImpl = function (n) {
  var str = n.toString();
  return isNaN(str + ".0") ? str : str + ".0";
};

var $nRor$export$showCharImpl = function (c) {
  var code = c.charCodeAt(0);

  if (code < 0x20 || code === 0x7F) {
    switch (c) {
      case "\x07":
        return "'\\a'";

      case "\b":
        return "'\\b'";

      case "\f":
        return "'\\f'";

      case "\n":
        return "'\\n'";

      case "\r":
        return "'\\r'";

      case "\t":
        return "'\\t'";

      case "\v":
        return "'\\v'";
    }

    return "'\\" + code.toString(10) + "'";
  }

  return c === "'" || c === "\\" ? "'\\" + c + "'" : "'" + c + "'";
};

var $nRor$export$showStringImpl = function (s) {
  var l = s.length;
  return "\"" + s.replace(/[\0-\x1F\x7F"\\]/g, // eslint-disable-line no-control-regex
  function (c, i) {
    switch (c) {
      case "\"":
      case "\\":
        return "\\" + c;

      case "\x07":
        return "\\a";

      case "\b":
        return "\\b";

      case "\f":
        return "\\f";

      case "\n":
        return "\\n";

      case "\r":
        return "\\r";

      case "\t":
        return "\\t";

      case "\v":
        return "\\v";
    }

    var k = i + 1;
    var empty = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
    return "\\" + c.charCodeAt(0).toString(10) + empty;
  }) + "\"";
};

var $nRor$export$showArrayImpl = function (f) {
  return function (xs) {
    var ss = [];

    for (var i = 0, l = xs.length; i < l; i++) {
      ss[i] = f(xs[i]);
    }

    return "[" + ss.join(",") + "]";
  };
};

var $nRor$export$cons = function (head) {
  return function (tail) {
    return [head].concat(tail);
  };
};

var $nRor$export$join = function (separator) {
  return function (xs) {
    return xs.join(separator);
  };
};

var $wsO7$export$unsafeCoerce = function (arg) {
  return arg;
}; // module Data.Symbol


// ASSET: ../Data.Symbol/index.js
var $kaX7$exports = {};

var $kaX7$var$SProxy = function () {
  function SProxy() {}

  ;
  SProxy.value = new SProxy();
  return SProxy;
}();

var $kaX7$var$IsSymbol = function IsSymbol(reflectSymbol) {
  this.reflectSymbol = reflectSymbol;
};

var $kaX7$var$reifySymbol = function reifySymbol(s) {
  return function (f) {
    return $wsO7$export$unsafeCoerce(function (dictIsSymbol) {
      return f(dictIsSymbol);
    })({
      reflectSymbol: function reflectSymbol(v) {
        return s;
      }
    })($kaX7$var$SProxy.value);
  };
};

var $kaX7$var$reflectSymbol = function reflectSymbol(dict) {
  return dict.reflectSymbol;
};

$kaX7$exports = {
  IsSymbol: $kaX7$var$IsSymbol,
  reflectSymbol: $kaX7$var$reflectSymbol,
  reifySymbol: $kaX7$var$reifySymbol,
  SProxy: $kaX7$var$SProxy
};

var $Vr6t$export$unsafeHas = function (label) {
  return function (rec) {
    return {}.hasOwnProperty.call(rec, label);
  };
};

var $Vr6t$export$unsafeGet = function (label) {
  return function (rec) {
    return rec[label];
  };
};

var $Vr6t$export$unsafeSet = function (label) {
  return function (value) {
    return function (rec) {
      var copy = {};

      for (var key in rec) {
        if ({}.hasOwnProperty.call(rec, key)) {
          copy[key] = rec[key];
        }
      }

      copy[label] = value;
      return copy;
    };
  };
};

var $Vr6t$export$unsafeDelete = function (label) {
  return function (rec) {
    var copy = {};

    for (var key in rec) {
      if (key !== label && {}.hasOwnProperty.call(rec, key)) {
        copy[key] = rec[key];
      }
    }

    return copy;
  };
};

// ASSET: ../Record.Unsafe/index.js
var $xJqK$exports = {};
$xJqK$exports = {
  unsafeHas: $Vr6t$export$unsafeHas,
  unsafeGet: $Vr6t$export$unsafeGet,
  unsafeSet: $Vr6t$export$unsafeSet,
  unsafeDelete: $Vr6t$export$unsafeDelete
};
// ASSET: ../Type.Data.RowList/index.js
var $oEsU$exports = {};

var $oEsU$var$RLProxy = function () {
  function RLProxy() {}

  ;
  RLProxy.value = new RLProxy();
  return RLProxy;
}();

$oEsU$exports = {
  RLProxy: $oEsU$var$RLProxy
};
// ASSET: ../Data.Show/index.js
var $LZIe$exports = {};

var $LZIe$var$ShowRecordFields = function ShowRecordFields(showRecordFields) {
  this.showRecordFields = showRecordFields;
};

var $LZIe$var$Show = function Show(show) {
  this.show = show;
};

var $LZIe$var$showString = new $LZIe$var$Show($nRor$export$showStringImpl);
var $LZIe$var$showRecordFieldsNil = new $LZIe$var$ShowRecordFields(function (v) {
  return function (v1) {
    return [];
  };
});

var $LZIe$var$showRecordFields = function showRecordFields(dict) {
  return dict.showRecordFields;
};

var $LZIe$var$showRecord = function showRecord(dictRowToList) {
  return function (dictShowRecordFields) {
    return new $LZIe$var$Show(function (record) {
      var v = $LZIe$var$showRecordFields(dictShowRecordFields)($oEsU$exports.RLProxy.value)(record);

      if (v.length === 0) {
        return "{}";
      }

      ;
      return $nRor$export$join(" ")(["{", $nRor$export$join(", ")(v), "}"]);
    });
  };
};

var $LZIe$var$showNumber = new $LZIe$var$Show($nRor$export$showNumberImpl);
var $LZIe$var$showInt = new $LZIe$var$Show($nRor$export$showIntImpl);
var $LZIe$var$showChar = new $LZIe$var$Show($nRor$export$showCharImpl);
var $LZIe$var$showBoolean = new $LZIe$var$Show(function (v) {
  if (v) {
    return "true";
  }

  ;

  if (!v) {
    return "false";
  }

  ;
  throw new Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [v.constructor.name]);
});

var $LZIe$var$show = function show(dict) {
  return dict.show;
};

var $LZIe$var$showArray = function showArray(dictShow) {
  return new $LZIe$var$Show($nRor$export$showArrayImpl($LZIe$var$show(dictShow)));
};

var $LZIe$var$showRecordFieldsCons = function showRecordFieldsCons(dictIsSymbol) {
  return function (dictShowRecordFields) {
    return function (dictShow) {
      return new $LZIe$var$ShowRecordFields(function (v) {
        return function (record) {
          var tail = $LZIe$var$showRecordFields(dictShowRecordFields)($oEsU$exports.RLProxy.value)(record);
          var key = $kaX7$exports.reflectSymbol(dictIsSymbol)($kaX7$exports.SProxy.value);
          var focus = $xJqK$exports.unsafeGet(key)(record);
          return $nRor$export$cons($nRor$export$join(": ")([key, $LZIe$var$show(dictShow)(focus)]))(tail);
        };
      });
    };
  };
};

$LZIe$exports = {
  Show: $LZIe$var$Show,
  show: $LZIe$var$show,
  ShowRecordFields: $LZIe$var$ShowRecordFields,
  showRecordFields: $LZIe$var$showRecordFields,
  showBoolean: $LZIe$var$showBoolean,
  showInt: $LZIe$var$showInt,
  showNumber: $LZIe$var$showNumber,
  showChar: $LZIe$var$showChar,
  showString: $LZIe$var$showString,
  showArray: $LZIe$var$showArray,
  showRecord: $LZIe$var$showRecord,
  showRecordFieldsNil: $LZIe$var$showRecordFieldsNil,
  showRecordFieldsCons: $LZIe$var$showRecordFieldsCons
};
// ASSET: ../Effect.Console/index.js
var $bfEs$exports = {};

var $bfEs$var$warnShow = function warnShow(dictShow) {
  return function (a) {
    return $CEFT$export$warn($LZIe$exports.show(dictShow)(a));
  };
};

var $bfEs$var$logShow = function logShow(dictShow) {
  return function (a) {
    return $CEFT$export$log($LZIe$exports.show(dictShow)(a));
  };
};

var $bfEs$var$infoShow = function infoShow(dictShow) {
  return function (a) {
    return $CEFT$export$info($LZIe$exports.show(dictShow)(a));
  };
};

var $bfEs$var$errorShow = function errorShow(dictShow) {
  return function (a) {
    return $CEFT$export$error($LZIe$exports.show(dictShow)(a));
  };
};

$bfEs$exports = {
  logShow: $bfEs$var$logShow,
  warnShow: $bfEs$var$warnShow,
  errorShow: $bfEs$var$errorShow,
  infoShow: $bfEs$var$infoShow,
  log: $CEFT$export$log,
  warn: $CEFT$export$warn,
  error: $CEFT$export$error,
  info: $CEFT$export$info,
  time: $CEFT$export$time,
  timeLog: $CEFT$export$timeLog,
  timeEnd: $CEFT$export$timeEnd,
  clear: $CEFT$export$clear
};
// ASSET: index.js
var $Focm$exports = {};
var $Focm$var$main = $bfEs$exports.log("Hello world");
$Focm$exports = {
  main: $Focm$var$main
};

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