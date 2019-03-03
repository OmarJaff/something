// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"jquery-3.3.1.e083116e.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
      o = "function" == typeof require && require;

  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && "string" == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[n][1][r] || r;
      }, p.cache = {};
      var l = r[n] = new u.Module(n);
      e[n][0].call(l.exports, p, l, l.exports, this);
    }

    return r[n].exports;

    function p(e) {
      return u(p.resolve(e));
    }
  }

  u.isParcelRequire = !0, u.Module = function (e) {
    this.id = e, this.bundle = u, this.exports = {};
  }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
    e[r] = [function (e, r) {
      r.exports = n;
    }, {}];
  };

  for (var f = 0; f < n.length; f++) {
    u(n[f]);
  }

  if (n.length) {
    var c = u(n[n.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
      return c;
    }) : t && (this[t] = c);
  }

  return u;
}({
  "2lwA": [function (require, module, exports) {
    var t,
        e,
        n = module.exports = {};

    function r() {
      throw new Error("setTimeout has not been defined");
    }

    function o() {
      throw new Error("clearTimeout has not been defined");
    }

    function i(e) {
      if (t === setTimeout) return setTimeout(e, 0);
      if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);

      try {
        return t(e, 0);
      } catch (n) {
        try {
          return t.call(null, e, 0);
        } catch (n) {
          return t.call(this, e, 0);
        }
      }
    }

    function u(t) {
      if (e === clearTimeout) return clearTimeout(t);
      if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);

      try {
        return e(t);
      } catch (n) {
        try {
          return e.call(null, t);
        } catch (n) {
          return e.call(this, t);
        }
      }
    }

    !function () {
      try {
        t = "function" == typeof setTimeout ? setTimeout : r;
      } catch (n) {
        t = r;
      }

      try {
        e = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (n) {
        e = o;
      }
    }();
    var c,
        s = [],
        l = !1,
        a = -1;

    function f() {
      l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h());
    }

    function h() {
      if (!l) {
        var t = i(f);
        l = !0;

        for (var e = s.length; e;) {
          for (c = s, s = []; ++a < e;) {
            c && c[a].run();
          }

          a = -1, e = s.length;
        }

        c = null, l = !1, u(t);
      }
    }

    function m(t, e) {
      this.fun = t, this.array = e;
    }

    function p() {}

    n.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
      s.push(new m(t, e)), 1 !== s.length || l || i(h);
    }, m.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function (t) {
      return [];
    }, n.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, n.cwd = function () {
      return "/";
    }, n.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, n.umask = function () {
      return 0;
    };
  }, {}],
  "UgNe": [function (require, module, exports) {
    var global = arguments[3];

    var process = require("process");

    var define;

    var e,
        t = arguments[3],
        n = require("process");

    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    !function (e, t) {
      "use strict";

      "object" === ("undefined" == typeof module ? "undefined" : r(module)) && "object" === r(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
      } : t(e);
    }("undefined" != typeof window ? window : this, function (t, n) {
      "use strict";

      var i = [],
          o = t.document,
          a = Object.getPrototypeOf,
          s = i.slice,
          u = i.concat,
          l = i.push,
          c = i.indexOf,
          f = {},
          p = f.toString,
          d = f.hasOwnProperty,
          h = d.toString,
          g = h.call(Object),
          v = {},
          m = function m(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
      },
          y = function y(e) {
        return null != e && e === e.window;
      },
          x = {
        type: !0,
        src: !0,
        noModule: !0
      };

      function b(e, t, n) {
        var r,
            i = (t = t || o).createElement("script");
        if (i.text = e, n) for (r in x) {
          n[r] && (i[r] = n[r]);
        }
        t.head.appendChild(i).parentNode.removeChild(i);
      }

      function w(e) {
        return null == e ? e + "" : "object" === r(e) || "function" == typeof e ? f[p.call(e)] || "object" : r(e);
      }

      var T = function e(t, n) {
        return new e.fn.init(t, n);
      },
          C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

      function E(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
      }

      T.fn = T.prototype = {
        jquery: "3.3.1",
        constructor: T,
        length: 0,
        toArray: function toArray() {
          return s.call(this);
        },
        get: function get(e) {
          return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function pushStack(e) {
          var t = T.merge(this.constructor(), e);
          return t.prevObject = this, t;
        },
        each: function each(e) {
          return T.each(this, e);
        },
        map: function map(e) {
          return this.pushStack(T.map(this, function (t, n) {
            return e.call(t, n, t);
          }));
        },
        slice: function slice() {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function first() {
          return this.eq(0);
        },
        last: function last() {
          return this.eq(-1);
        },
        eq: function eq(e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function end() {
          return this.prevObject || this.constructor();
        },
        push: l,
        sort: i.sort,
        splice: i.splice
      }, T.extend = T.fn.extend = function () {
        var e,
            t,
            n,
            i,
            o,
            a,
            s = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;

        for ("boolean" == typeof s && (c = s, s = arguments[u] || {}, u++), "object" === r(s) || m(s) || (s = {}), u === l && (s = this, u--); u < l; u++) {
          if (null != (e = arguments[u])) for (t in e) {
            n = s[t], s !== (i = e[t]) && (c && i && (T.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, a = n && Array.isArray(n) ? n : []) : a = n && T.isPlainObject(n) ? n : {}, s[t] = T.extend(c, a, i)) : void 0 !== i && (s[t] = i));
          }
        }

        return s;
      }, T.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function error(e) {
          throw new Error(e);
        },
        noop: function noop() {},
        isPlainObject: function isPlainObject(e) {
          var t, n;
          return !(!e || "[object Object]" !== p.call(e)) && (!(t = a(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && h.call(n) === g);
        },
        isEmptyObject: function isEmptyObject(e) {
          var t;

          for (t in e) {
            return !1;
          }

          return !0;
        },
        globalEval: function globalEval(e) {
          b(e);
        },
        each: function each(e, t) {
          var n,
              r = 0;
          if (E(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {
            ;
          } else for (r in e) {
            if (!1 === t.call(e[r], r, e[r])) break;
          }
          return e;
        },
        trim: function trim(e) {
          return null == e ? "" : (e + "").replace(C, "");
        },
        makeArray: function makeArray(e, t) {
          var n = t || [];
          return null != e && (E(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n;
        },
        inArray: function inArray(e, t, n) {
          return null == t ? -1 : c.call(t, e, n);
        },
        merge: function merge(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
            e[i++] = t[r];
          }

          return e.length = i, e;
        },
        grep: function grep(e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
            !t(e[i], i) !== a && r.push(e[i]);
          }

          return r;
        },
        map: function map(e, t, n) {
          var r,
              i,
              o = 0,
              a = [];
          if (E(e)) for (r = e.length; o < r; o++) {
            null != (i = t(e[o], o, n)) && a.push(i);
          } else for (o in e) {
            null != (i = t(e[o], o, n)) && a.push(i);
          }
          return u.apply([], a);
        },
        guid: 1,
        support: v
      }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = i[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        f["[object " + t + "]"] = t.toLowerCase();
      });

      var S = function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            m,
            y,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            S = ae(),
            k = ae(),
            D = function D(e, t) {
          return e === t && (f = !0), 0;
        },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function O(e, t) {
          for (var n = 0, r = e.length; n < r; n++) {
            if (e[n] === t) return n;
          }

          return -1;
        },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
          ID: new RegExp("^#(" + R + ")"),
          CLASS: new RegExp("^\\.(" + R + ")"),
          TAG: new RegExp("^(" + R + "|[*])"),
          ATTR: new RegExp("^" + I),
          PSEUDO: new RegExp("^" + W),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + P + ")$", "i"),
          needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function ee(e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function ne(e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            re = function re() {
          p();
        },
            ie = ye(function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
          dir: "parentNode",
          next: "legend"
        });

        try {
          L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (Ce) {
          L = {
            apply: A.length ? function (e, t) {
              q.apply(e, H.call(t));
            } : function (e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];) {
                ;
              }

              e.length = n - 1;
            }
          };
        }

        function oe(e, t, r, i) {
          var o,
              s,
              l,
              c,
              f,
              h,
              m,
              y = t && t.ownerDocument,
              T = t ? t.nodeType : 9;
          if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

          if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
            if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
              if (9 === T) {
                if (!(l = t.getElementById(o))) return r;
                if (l.id === o) return r.push(l), r;
              } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
            } else {
              if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
              if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
            }

            if (n.qsa && !k[e + " "] && (!v || !v.test(e))) {
              if (1 !== T) y = t, m = e;else if ("object" !== t.nodeName.toLowerCase()) {
                for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) {
                  h[s] = "#" + c + " " + me(h[s]);
                }

                m = h.join(","), y = K.test(e) && ge(t.parentNode) || t;
              }
              if (m) try {
                return L.apply(r, y.querySelectorAll(m)), r;
              } catch (C) {} finally {
                c === b && t.removeAttribute("id");
              }
            }
          }

          return u(e.replace(B, "$1"), t, r, i);
        }

        function ae() {
          var e = [];
          return function t(n, i) {
            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
          };
        }

        function se(e) {
          return e[b] = !0, e;
        }

        function ue(e) {
          var t = d.createElement("fieldset");

          try {
            return !!e(t);
          } catch (Ce) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null;
          }
        }

        function le(e, t) {
          for (var n = e.split("|"), i = n.length; i--;) {
            r.attrHandle[n[i]] = t;
          }
        }

        function ce(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; n = n.nextSibling;) {
            if (n === t) return -1;
          }
          return e ? 1 : -1;
        }

        function fe(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }

        function pe(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }

        function de(e) {
          return function (t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
          };
        }

        function he(e) {
          return se(function (t) {
            return t = +t, se(function (n, r) {
              for (var i, o = e([], n.length, t), a = o.length; a--;) {
                n[i = o[a]] && (n[i] = !(r[i] = n[i]));
              }
            });
          });
        }

        function ge(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }

        for (t in n = oe.support = {}, o = oe.isXML = function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }, p = oe.setDocument = function (e) {
          var t,
              i,
              a = e ? e.ownerDocument || e : w;
          return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
            return e.className = "i", !e.getAttribute("className");
          }), n.getElementsByTagName = ue(function (e) {
            return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
          }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
            return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
          }), n.getById ? (r.filter.ID = function (e) {
            var t = e.replace(Z, ee);
            return function (e) {
              return e.getAttribute("id") === t;
            };
          }, r.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n = t.getElementById(e);
              return n ? [n] : [];
            }
          }) : (r.filter.ID = function (e) {
            var t = e.replace(Z, ee);
            return function (e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t;
            };
          }, r.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n,
                  r,
                  i,
                  o = t.getElementById(e);

              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];

                for (i = t.getElementsByName(e), r = 0; o = i[r++];) {
                  if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                }
              }

              return [];
            }
          }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
          } : function (e, t) {
            var n,
                r = [],
                i = 0,
                o = t.getElementsByTagName(e);

            if ("*" === e) {
              for (; n = o[i++];) {
                1 === n.nodeType && r.push(n);
              }

              return r;
            }

            return o;
          }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
          }, m = [], v = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]");
          }), ue(function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = d.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
          })), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", W);
          }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
          } : function (e, t) {
            if (t) for (; t = t.parentNode;) {
              if (t === e) return !0;
            }
            return !1;
          }, D = t ? function (e, t) {
            if (e === t) return f = !0, 0;
            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
          } : function (e, t) {
            if (e === t) return f = !0, 0;
            var n,
                r = 0,
                i = e.parentNode,
                o = t.parentNode,
                a = [e],
                s = [t];
            if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
            if (i === o) return ce(e, t);

            for (n = e; n = n.parentNode;) {
              a.unshift(n);
            }

            for (n = t; n = n.parentNode;) {
              s.unshift(n);
            }

            for (; a[r] === s[r];) {
              r++;
            }

            return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
          }, d) : d;
        }, oe.matches = function (e, t) {
          return oe(e, null, null, t);
        }, oe.matchesSelector = function (e, t) {
          if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !k[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
            var r = y.call(e, t);
            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
          } catch (Ce) {}
          return oe(t, d, null, [e]).length > 0;
        }, oe.contains = function (e, t) {
          return (e.ownerDocument || e) !== d && p(e), x(e, t);
        }, oe.attr = function (e, t) {
          (e.ownerDocument || e) !== d && p(e);
          var i = r.attrHandle[t.toLowerCase()],
              o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, oe.escape = function (e) {
          return (e + "").replace(te, ne);
        }, oe.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }, oe.uniqueSort = function (e) {
          var t,
              r = [],
              i = 0,
              o = 0;

          if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
            for (; t = e[o++];) {
              t === e[o] && (i = r.push(o));
            }

            for (; i--;) {
              e.splice(r[i], 1);
            }
          }

          return c = null, e;
        }, i = oe.getText = function (e) {
          var t,
              n = "",
              r = 0,
              o = e.nodeType;

          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;

              for (e = e.firstChild; e; e = e.nextSibling) {
                n += i(e);
              }
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; t = e[r++];) {
            n += i(t);
          }

          return n;
        }, (r = oe.selectors = {
          cacheLength: 50,
          createPseudo: se,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function ATTR(e) {
              return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
            },
            CHILD: function CHILD(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
            },
            PSEUDO: function PSEUDO(e) {
              var t,
                  n = !e[6] && e[2];
              return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
            }
          },
          filter: {
            TAG: function TAG(e) {
              var t = e.replace(Z, ee).toLowerCase();
              return "*" === e ? function () {
                return !0;
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
            },
            CLASS: function CLASS(e) {
              var t = E[e + " "];
              return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
              });
            },
            ATTR: function ATTR(e, t, n) {
              return function (r) {
                var i = oe.attr(r, e);
                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function CHILD(e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
              return 1 === r && 0 === i ? function (e) {
                return !!e.parentNode;
              } : function (t, n, u) {
                var l,
                    c,
                    f,
                    p,
                    d,
                    h,
                    g = o !== a ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    m = s && t.nodeName.toLowerCase(),
                    y = !u && !s,
                    x = !1;

                if (v) {
                  if (o) {
                    for (; g;) {
                      for (p = t; p = p[g];) {
                        if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                      }

                      h = g = "only" === e && !h && "nextSibling";
                    }

                    return !0;
                  }

                  if (h = [a ? v.firstChild : v.lastChild], a && y) {
                    for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) {
                      if (1 === p.nodeType && ++x && p === t) {
                        c[e] = [T, d, x];
                        break;
                      }
                    }
                  } else if (y && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t));) {
                    ;
                  }

                  return (x -= i) === r || x % r == 0 && x / r >= 0;
                }
              };
            },
            PSEUDO: function PSEUDO(e, t) {
              var n,
                  i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
              return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                for (var r, o = i(e, t), a = o.length; a--;) {
                  e[r = O(e, o[a])] = !(n[r] = o[a]);
                }
              }) : function (e) {
                return i(e, 0, n);
              }) : i;
            }
          },
          pseudos: {
            not: se(function (e) {
              var t = [],
                  n = [],
                  r = s(e.replace(B, "$1"));
              return r[b] ? se(function (e, t, n, i) {
                for (var o, a = r(e, null, i, []), s = e.length; s--;) {
                  (o = a[s]) && (e[s] = !(t[s] = o));
                }
              }) : function (e, i, o) {
                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
              };
            }),
            has: se(function (e) {
              return function (t) {
                return oe(e, t).length > 0;
              };
            }),
            contains: se(function (e) {
              return e = e.replace(Z, ee), function (t) {
                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
              };
            }),
            lang: se(function (e) {
              return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
                var n;

                do {
                  if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);

                return !1;
              };
            }),
            target: function target(t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function root(e) {
              return e === h;
            },
            focus: function focus(e) {
              return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            },
            enabled: de(!1),
            disabled: de(!0),
            checked: function checked(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected;
            },
            selected: function selected(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
            },
            empty: function empty(e) {
              for (e = e.firstChild; e; e = e.nextSibling) {
                if (e.nodeType < 6) return !1;
              }

              return !0;
            },
            parent: function parent(e) {
              return !r.pseudos.empty(e);
            },
            header: function header(e) {
              return Y.test(e.nodeName);
            },
            input: function input(e) {
              return G.test(e.nodeName);
            },
            button: function button(e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t;
            },
            text: function text(e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
            },
            first: he(function () {
              return [0];
            }),
            last: he(function (e, t) {
              return [t - 1];
            }),
            eq: he(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: he(function (e, t) {
              for (var n = 0; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            odd: he(function (e, t) {
              for (var n = 1; n < t; n += 2) {
                e.push(n);
              }

              return e;
            }),
            lt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0;) {
                e.push(r);
              }

              return e;
            }),
            gt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) {
                e.push(r);
              }

              return e;
            })
          }
        }).pseudos.nth = r.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) {
          r.pseudos[t] = fe(t);
        }

        for (t in {
          submit: !0,
          reset: !0
        }) {
          r.pseudos[t] = pe(t);
        }

        function ve() {}

        function me(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) {
            r += e[t].value;
          }

          return r;
        }

        function ye(e, t, n) {
          var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = C++;
          return t.first ? function (t, n, i) {
            for (; t = t[r];) {
              if (1 === t.nodeType || a) return e(t, n, i);
            }

            return !1;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p = [T, s];

            if (u) {
              for (; t = t[r];) {
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
              }
            } else for (; t = t[r];) {
              if (1 === t.nodeType || a) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                if (c[o] = p, p[2] = e(t, n, u)) return !0;
              }
            }

            return !1;
          };
        }

        function xe(e) {
          return e.length > 1 ? function (t, n, r) {
            for (var i = e.length; i--;) {
              if (!e[i](t, n, r)) return !1;
            }

            return !0;
          } : e[0];
        }

        function be(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
            (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
          }

          return a;
        }

        function we(e, t, n, r, i, o) {
          return r && !r[b] && (r = we(r)), i && !i[b] && (i = we(i, o)), se(function (o, a, s, u) {
            var l,
                c,
                f,
                p = [],
                d = [],
                h = a.length,
                g = o || function (e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) {
                oe(e, t[r], n);
              }

              return n;
            }(t || "*", s.nodeType ? [s] : s, []),
                v = !e || !o && t ? g : be(g, p, e, s, u),
                m = n ? i || (o ? e : h || r) ? [] : a : v;

            if (n && n(v, m, s, u), r) for (l = be(m, d), r(l, [], s, u), c = l.length; c--;) {
              (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
            }

            if (o) {
              if (i || e) {
                if (i) {
                  for (l = [], c = m.length; c--;) {
                    (f = m[c]) && l.push(v[c] = f);
                  }

                  i(null, m = [], l, u);
                }

                for (c = m.length; c--;) {
                  (f = m[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                }
              }
            } else m = be(m === a ? m.splice(h, m.length) : m), i ? i(null, a, m, u) : L.apply(a, m);
          });
        }

        function Te(e) {
          for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = ye(function (e) {
            return e === t;
          }, s, !0), f = ye(function (e) {
            return O(t, e) > -1;
          }, s, !0), p = [function (e, n, r) {
            var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
            return t = null, i;
          }]; u < o; u++) {
            if (n = r.relative[e[u].type]) p = [ye(xe(p), n)];else {
              if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                for (i = ++u; i < o && !r.relative[e[i].type]; i++) {
                  ;
                }

                return we(u > 1 && xe(p), u > 1 && me(e.slice(0, u - 1).concat({
                  value: " " === e[u - 2].type ? "*" : ""
                })).replace(B, "$1"), n, u < i && Te(e.slice(u, i)), i < o && Te(e = e.slice(i)), i < o && me(e));
              }

              p.push(n);
            }
          }

          return xe(p);
        }

        return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve(), a = oe.tokenize = function (e, t) {
          var n,
              i,
              o,
              a,
              s,
              u,
              l,
              c = S[e + " "];
          if (c) return t ? 0 : c.slice(0);

          for (s = e, u = [], l = r.preFilter; s;) {
            for (a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
              value: n,
              type: i[0].replace(B, " ")
            }), s = s.slice(n.length)), r.filter) {
              !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                value: n,
                type: a,
                matches: i
              }), s = s.slice(n.length));
            }

            if (!n) break;
          }

          return t ? s.length : s ? oe.error(e) : S(e, u).slice(0);
        }, s = oe.compile = function (e, t) {
          var n,
              i = [],
              o = [],
              s = k[e + " "];

          if (!s) {
            for (t || (t = a(e)), n = t.length; n--;) {
              (s = Te(t[n]))[b] ? i.push(s) : o.push(s);
            }

            (s = k(e, function (e, t) {
              var n = t.length > 0,
                  i = e.length > 0,
                  o = function o(_o, a, s, u, c) {
                var f,
                    h,
                    v,
                    m = 0,
                    y = "0",
                    x = _o && [],
                    b = [],
                    w = l,
                    C = _o || i && r.find.TAG("*", c),
                    E = T += null == w ? 1 : Math.random() || .1,
                    S = C.length;

                for (c && (l = a === d || a || c); y !== S && null != (f = C[y]); y++) {
                  if (i && f) {
                    for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];) {
                      if (v(f, a || d, s)) {
                        u.push(f);
                        break;
                      }
                    }

                    c && (T = E);
                  }

                  n && ((f = !v && f) && m--, _o && x.push(f));
                }

                if (m += y, n && y !== m) {
                  for (h = 0; v = t[h++];) {
                    v(x, b, a, s);
                  }

                  if (_o) {
                    if (m > 0) for (; y--;) {
                      x[y] || b[y] || (b[y] = j.call(u));
                    }
                    b = be(b);
                  }

                  L.apply(u, b), c && !_o && b.length > 0 && m + t.length > 1 && oe.uniqueSort(u);
                }

                return c && (T = E, l = w), x;
              };

              return n ? se(o) : o;
            }(o, i))).selector = e;
          }

          return s;
        }, u = oe.select = function (e, t, n, i) {
          var o,
              u,
              l,
              c,
              f,
              p = "function" == typeof e && e,
              d = !i && a(e = p.selector || e);

          if (n = n || [], 1 === d.length) {
            if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
              if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
              p && (t = t.parentNode), e = e.slice(u.shift().value.length);
            }

            for (o = V.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);) {
              if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                if (u.splice(o, 1), !(e = i.length && me(u))) return L.apply(n, i), n;
                break;
              }
            }
          }

          return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
          return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
        }), ue(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || le("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && ue(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || le("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ue(function (e) {
          return null == e.getAttribute("disabled");
        }) || le(P, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), oe;
      }(t);

      T.find = S, T.expr = S.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = S.uniqueSort, T.text = S.getText, T.isXMLDoc = S.isXML, T.contains = S.contains, T.escapeSelector = S.escape;

      var k = function k(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
          if (1 === e.nodeType) {
            if (i && T(e).is(n)) break;
            r.push(e);
          }
        }

        return r;
      },
          D = function D(e, t) {
        for (var n = []; e; e = e.nextSibling) {
          1 === e.nodeType && e !== t && n.push(e);
        }

        return n;
      },
          N = T.expr.match.needsContext;

      function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }

      var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function q(e, t, n) {
        return m(t) ? T.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? T.grep(e, function (e) {
          return e === t !== n;
        }) : "string" != typeof t ? T.grep(e, function (e) {
          return c.call(t, e) > -1 !== n;
        }) : T.filter(t, e, n);
      }

      T.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function (e) {
          return 1 === e.nodeType;
        }));
      }, T.fn.extend({
        find: function find(e) {
          var t,
              n,
              r = this.length,
              i = this;
          if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
            for (t = 0; t < r; t++) {
              if (T.contains(i[t], this)) return !0;
            }
          }));

          for (n = this.pushStack([]), t = 0; t < r; t++) {
            T.find(e, i[t], n);
          }

          return r > 1 ? T.uniqueSort(n) : n;
        },
        filter: function filter(e) {
          return this.pushStack(q(this, e || [], !1));
        },
        not: function not(e) {
          return this.pushStack(q(this, e || [], !0));
        },
        is: function is(e) {
          return !!q(this, "string" == typeof e && N.test(e) ? T(e) : e || [], !1).length;
        }
      });
      var L,
          H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (T.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;

        if (n = n || L, "string" == typeof e) {
          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : H.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

          if (r[1]) {
            if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), j.test(r[1]) && T.isPlainObject(t)) for (r in t) {
              m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            }
            return this;
          }

          return (i = o.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
        }

        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
      }).prototype = T.fn, L = T(o);
      var O = /^(?:parents|prev(?:Until|All))/,
          P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

      function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) {
          ;
        }

        return e;
      }

      T.fn.extend({
        has: function has(e) {
          var t = T(e, this),
              n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) {
              if (T.contains(this, t[e])) return !0;
            }
          });
        },
        closest: function closest(e, t) {
          var n,
              r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof e && T(e);
          if (!N.test(e)) for (; r < i; r++) {
            for (n = this[r]; n && n !== t; n = n.parentNode) {
              if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                o.push(n);
                break;
              }
            }
          }
          return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
        },
        index: function index(e) {
          return e ? "string" == typeof e ? c.call(T(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function add(e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function addBack(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
      }), T.each({
        parent: function parent(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function parents(e) {
          return k(e, "parentNode");
        },
        parentsUntil: function parentsUntil(e, t, n) {
          return k(e, "parentNode", n);
        },
        next: function next(e) {
          return M(e, "nextSibling");
        },
        prev: function prev(e) {
          return M(e, "previousSibling");
        },
        nextAll: function nextAll(e) {
          return k(e, "nextSibling");
        },
        prevAll: function prevAll(e) {
          return k(e, "previousSibling");
        },
        nextUntil: function nextUntil(e, t, n) {
          return k(e, "nextSibling", n);
        },
        prevUntil: function prevUntil(e, t, n) {
          return k(e, "previousSibling", n);
        },
        siblings: function siblings(e) {
          return D((e.parentNode || {}).firstChild, e);
        },
        children: function children(e) {
          return D(e.firstChild);
        },
        contents: function contents(e) {
          return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e), T.merge([], e.childNodes));
        }
      }, function (e, t) {
        T.fn[e] = function (n, r) {
          var i = T.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), this.length > 1 && (P[e] || T.uniqueSort(i), O.test(e) && i.reverse()), this.pushStack(i);
        };
      });
      var R = /[^\x20\t\r\n\f]+/g;

      function I(e) {
        return e;
      }

      function W(e) {
        throw e;
      }

      function $(e, t, n, r) {
        var i;

        try {
          e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }

      T.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
          var t = {};
          return T.each(e.match(R) || [], function (e, n) {
            t[n] = !0;
          }), t;
        }(e) : T.extend({}, e);

        var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function u() {
          for (i = i || e.once, r = t = !0; a.length; s = -1) {
            for (n = a.shift(); ++s < o.length;) {
              !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
            }
          }

          e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        },
            l = {
          add: function add() {
            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
              T.each(n, function (n, r) {
                m(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== w(r) && t(r);
              });
            }(arguments), n && !t && u()), this;
          },
          remove: function remove() {
            return T.each(arguments, function (e, t) {
              for (var n; (n = T.inArray(t, o, n)) > -1;) {
                o.splice(n, 1), n <= s && s--;
              }
            }), this;
          },
          has: function has(e) {
            return e ? T.inArray(e, o) > -1 : o.length > 0;
          },
          empty: function empty() {
            return o && (o = []), this;
          },
          disable: function disable() {
            return i = a = [], o = n = "", this;
          },
          disabled: function disabled() {
            return !o;
          },
          lock: function lock() {
            return i = a = [], n || t || (o = n = ""), this;
          },
          locked: function locked() {
            return !!i;
          },
          fireWith: function fireWith(e, n) {
            return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
          },
          fire: function fire() {
            return l.fireWith(this, arguments), this;
          },
          fired: function fired() {
            return !!r;
          }
        };

        return l;
      }, T.extend({
        Deferred: function Deferred(e) {
          var n = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
              i = "pending",
              o = {
            state: function state() {
              return i;
            },
            always: function always() {
              return a.done(arguments).fail(arguments), this;
            },
            catch: function _catch(e) {
              return o.then(null, e);
            },
            pipe: function pipe() {
              var e = arguments;
              return T.Deferred(function (t) {
                T.each(n, function (n, r) {
                  var i = m(e[r[4]]) && e[r[4]];
                  a[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }), e = null;
              }).promise();
            },
            then: function then(e, i, o) {
              var a = 0;

              function s(e, n, i, o) {
                return function () {
                  var u = this,
                      l = arguments,
                      c = function c() {
                    var t, c;

                    if (!(e < a)) {
                      if ((t = i.apply(u, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                      c = t && ("object" === r(t) || "function" == typeof t) && t.then, m(c) ? o ? c.call(t, s(a, n, I, o), s(a, n, W, o)) : (a++, c.call(t, s(a, n, I, o), s(a, n, W, o), s(a, n, I, n.notifyWith))) : (i !== I && (u = void 0, l = [t]), (o || n.resolveWith)(u, l));
                    }
                  },
                      f = o ? c : function () {
                    try {
                      c();
                    } catch (t) {
                      T.Deferred.exceptionHook && T.Deferred.exceptionHook(t, f.stackTrace), e + 1 >= a && (i !== W && (u = void 0, l = [t]), n.rejectWith(u, l));
                    }
                  };

                  e ? f() : (T.Deferred.getStackHook && (f.stackTrace = T.Deferred.getStackHook()), t.setTimeout(f));
                };
              }

              return T.Deferred(function (t) {
                n[0][3].add(s(0, t, m(o) ? o : I, t.notifyWith)), n[1][3].add(s(0, t, m(e) ? e : I)), n[2][3].add(s(0, t, m(i) ? i : W));
              }).promise();
            },
            promise: function promise(e) {
              return null != e ? T.extend(e, o) : o;
            }
          },
              a = {};
          return T.each(n, function (e, t) {
            var r = t[2],
                s = t[5];
            o[t[1]] = r.add, s && r.add(function () {
              i = s;
            }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), r.add(t[3].fire), a[t[0]] = function () {
              return a[t[0] + "With"](this === a ? void 0 : this, arguments), this;
            }, a[t[0] + "With"] = r.fireWith;
          }), o.promise(a), e && e.call(a, a), a;
        },
        when: function when(e) {
          var t = arguments.length,
              n = t,
              r = Array(n),
              i = s.call(arguments),
              o = T.Deferred(),
              a = function a(e) {
            return function (n) {
              r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i);
            };
          };

          if (t <= 1 && ($(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || m(i[n] && i[n].then))) return o.then();

          for (; n--;) {
            $(i[n], a(n), o.reject);
          }

          return o.promise();
        }
      });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      T.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && B.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
      }, T.readyException = function (e) {
        t.setTimeout(function () {
          throw e;
        });
      };
      var F = T.Deferred();

      function _() {
        o.removeEventListener("DOMContentLoaded", _), t.removeEventListener("load", _), T.ready();
      }

      T.fn.ready = function (e) {
        return F.then(e).catch(function (e) {
          T.readyException(e);
        }), this;
      }, T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function ready(e) {
          (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || F.resolveWith(o, [T]));
        }
      }), T.ready.then = F.then, "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? t.setTimeout(T.ready) : (o.addEventListener("DOMContentLoaded", _), t.addEventListener("load", _));

      var z = function e(t, n, r, i, o, a, s) {
        var u = 0,
            l = t.length,
            c = null == r;
        if ("object" === w(r)) for (u in o = !0, r) {
          e(t, n, u, r[u], !0, a, s);
        } else if (void 0 !== i && (o = !0, m(i) || (s = !0), c && (s ? (n.call(t, i), n = null) : (c = n, n = function n(e, t, _n) {
          return c.call(T(e), _n);
        })), n)) for (; u < l; u++) {
          n(t[u], r, s ? i : i.call(t[u], u, n(t[u], r)));
        }
        return o ? t : c ? n.call(t) : l ? n(t[0], r) : a;
      },
          X = /^-ms-/,
          U = /-([a-z])/g;

      function V(e, t) {
        return t.toUpperCase();
      }

      function G(e) {
        return e.replace(X, "ms-").replace(U, V);
      }

      var Y = function Y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };

      function Q() {
        this.expando = T.expando + Q.uid++;
      }

      Q.uid = 1, Q.prototype = {
        cache: function cache(e) {
          var t = e[this.expando];
          return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t;
        },
        set: function set(e, t, n) {
          var r,
              i = this.cache(e);
          if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
            i[G(r)] = t[r];
          }
          return i;
        },
        get: function get(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
        },
        access: function access(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function remove(e, t) {
          var n,
              r = e[this.expando];

          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(R) || []).length;

              for (; n--;) {
                delete r[t[n]];
              }
            }

            (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function hasData(e) {
          var t = e[this.expando];
          return void 0 !== t && !T.isEmptyObject(t);
        }
      };
      var J = new Q(),
          K = new Q(),
          Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          ee = /[A-Z]/g;

      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
          try {
            n = function (e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
            }(n);
          } catch (i) {}

          K.set(e, t, n);
        } else n = void 0;
        return n;
      }

      T.extend({
        hasData: function hasData(e) {
          return K.hasData(e) || J.hasData(e);
        },
        data: function data(e, t, n) {
          return K.access(e, t, n);
        },
        removeData: function removeData(e, t) {
          K.remove(e, t);
        },
        _data: function _data(e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function _removeData(e, t) {
          J.remove(e, t);
        }
      }), T.fn.extend({
        data: function data(e, t) {
          var n,
              i,
              o,
              a = this[0],
              s = a && a.attributes;

          if (void 0 === e) {
            if (this.length && (o = K.get(a), 1 === a.nodeType && !J.get(a, "hasDataAttrs"))) {
              for (n = s.length; n--;) {
                s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = G(i.slice(5)), te(a, i, o[i]));
              }

              J.set(a, "hasDataAttrs", !0);
            }

            return o;
          }

          return "object" === r(e) ? this.each(function () {
            K.set(this, e);
          }) : z(this, function (t) {
            var n;
            if (a && void 0 === t) return void 0 !== (n = K.get(a, e)) ? n : void 0 !== (n = te(a, e)) ? n : void 0;
            this.each(function () {
              K.set(this, e, t);
            });
          }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function removeData(e) {
          return this.each(function () {
            K.remove(this, e);
          });
        }
      }), T.extend({
        queue: function queue(e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, T.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function dequeue(e, t) {
          t = t || "fx";

          var n = T.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = T._queueHooks(e, t);

          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
            T.dequeue(e, t);
          }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function _queueHooks(e, t) {
          var n = t + "queueHooks";
          return J.get(e, n) || J.access(e, n, {
            empty: T.Callbacks("once memory").add(function () {
              J.remove(e, [t + "queue", n]);
            })
          });
        }
      }), T.fn.extend({
        queue: function queue(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function () {
            var n = T.queue(this, e, t);
            T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
          });
        },
        dequeue: function dequeue(e) {
          return this.each(function () {
            T.dequeue(this, e);
          });
        },
        clearQueue: function clearQueue(e) {
          return this.queue(e || "fx", []);
        },
        promise: function promise(e, t) {
          var n,
              r = 1,
              i = T.Deferred(),
              o = this,
              a = this.length,
              s = function s() {
            --r || i.resolveWith(o, [o]);
          };

          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
            (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
          }

          return s(), i.promise(t);
        }
      });

      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
          ie = ["Top", "Right", "Bottom", "Left"],
          oe = function oe(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && T.contains(e.ownerDocument, e) && "none" === T.css(e, "display");
      },
          ae = function ae(e, t, n, r) {
        var i,
            o,
            a = {};

        for (o in t) {
          a[o] = e.style[o], e.style[o] = t[o];
        }

        for (o in i = n.apply(e, r || []), t) {
          e.style[o] = a[o];
        }

        return i;
      };

      function se(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r ? function () {
          return r.cur();
        } : function () {
          return T.css(e, t, "");
        },
            u = s(),
            l = n && n[3] || (T.cssNumber[t] ? "" : "px"),
            c = (T.cssNumber[t] || "px" !== l && +u) && re.exec(T.css(e, t));

        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--;) {
            T.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
          }

          c *= 2, T.style(e, t, c + l), n = n || [];
        }

        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
      }

      var ue = {};

      function le(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = ue[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = T.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i);
      }

      function ce(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
          (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && oe(r) && (i[o] = le(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        }

        for (o = 0; o < a; o++) {
          null != i[o] && (e[o].style.display = i[o]);
        }

        return e;
      }

      T.fn.extend({
        show: function show() {
          return ce(this, !0);
        },
        hide: function hide() {
          return ce(this);
        },
        toggle: function toggle(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            oe(this) ? T(this).show() : T(this).hide();
          });
        }
      });
      var fe = /^(?:checkbox|radio)$/i,
          pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          de = /^$|^module$|\/(?:java|ecma)script/i,
          he = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

      function ge(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? T.merge([e], n) : n;
      }

      function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
        }
      }

      he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
      var me,
          ye,
          xe = /<|&#?\w+;/;

      function be(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
          if ((o = e[d]) || 0 === o) if ("object" === w(o)) T.merge(p, o.nodeType ? [o] : o);else if (xe.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + T.htmlPrefilter(o) + u[2], c = u[0]; c--;) {
              a = a.lastChild;
            }

            T.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
          } else p.push(t.createTextNode(o));
        }

        for (f.textContent = "", d = 0; o = p[d++];) {
          if (r && T.inArray(o, r) > -1) i && i.push(o);else if (l = T.contains(o.ownerDocument, o), a = ge(f.appendChild(o), "script"), l && ve(a), n) for (c = 0; o = a[c++];) {
            de.test(o.type || "") && n.push(o);
          }
        }

        return f;
      }

      me = o.createDocumentFragment().appendChild(o.createElement("div")), (ye = o.createElement("input")).setAttribute("type", "radio"), ye.setAttribute("checked", "checked"), ye.setAttribute("name", "t"), me.appendChild(ye), v.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
      var we = o.documentElement,
          Te = /^key/,
          Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ee = /^([^.]*)(?:\.(.+)|)/;

      function Se() {
        return !0;
      }

      function ke() {
        return !1;
      }

      function De() {
        try {
          return o.activeElement;
        } catch (e) {}
      }

      function Ne(e, t, n, i, o, a) {
        var s, u;

        if ("object" === r(t)) {
          for (u in "string" != typeof n && (i = i || n, n = void 0), t) {
            Ne(e, u, n, i, t[u], a);
          }

          return e;
        }

        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = ke;else if (!o) return e;
        return 1 === a && (s = o, (o = function o(e) {
          return T().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = T.guid++)), e.each(function () {
          T.event.add(this, t, o, i, n);
        });
      }

      T.event = {
        global: {},
        add: function add(e, t, n, r, i) {
          var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = J.get(e);
          if (v) for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(we, i), n.guid || (n.guid = T.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
            return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
          }), l = (t = (t || "").match(R) || [""]).length; l--;) {
            d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = T.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = T.event.special[d] || {}, c = T.extend({
              type: d,
              origType: g,
              data: r,
              handler: n,
              guid: n.guid,
              selector: i,
              needsContext: i && T.expr.match.needsContext.test(i),
              namespace: h.join(".")
            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), T.event.global[d] = !0);
          }
        },
        remove: function remove(e, t, n, r, i) {
          var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = J.hasData(e) && J.get(e);

          if (v && (u = v.events)) {
            for (l = (t = (t || "").match(R) || [""]).length; l--;) {
              if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                for (f = T.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) {
                  c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                }

                a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || T.removeEvent(e, d, v.handle), delete u[d]);
              } else for (d in u) {
                T.event.remove(e, d + t[l], n, r, !0);
              }
            }

            T.isEmptyObject(u) && J.remove(e, "handle events");
          }
        },
        dispatch: function dispatch(e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s = T.event.fix(e),
              u = new Array(arguments.length),
              l = (J.get(this, "events") || {})[s.type] || [],
              c = T.event.special[s.type] || {};

          for (u[0] = s, t = 1; t < arguments.length; t++) {
            u[t] = arguments[t];
          }

          if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
            for (a = T.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped();) {
              for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) {
                s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
              }
            }

            return c.postDispatch && c.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function handlers(e, t) {
          var n,
              r,
              i,
              o,
              a,
              s = [],
              u = t.delegateCount,
              l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
              for (o = [], a = {}, n = 0; n < u; n++) {
                void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? T(i, this).index(l) > -1 : T.find(i, this, null, [l]).length), a[i] && o.push(r);
              }

              o.length && s.push({
                elem: l,
                handlers: o
              });
            }
          }
          return l = this, u < t.length && s.push({
            elem: l,
            handlers: t.slice(u)
          }), s;
        },
        addProp: function addProp(e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t) ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            } : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
            set: function set(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              });
            }
          });
        },
        fix: function fix(e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: {
            noBubble: !0
          },
          focus: {
            trigger: function trigger() {
              if (this !== De() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function trigger() {
              if (this === De() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function trigger() {
              if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1;
            },
            _default: function _default(e) {
              return A(e.target, "a");
            }
          },
          beforeunload: {
            postDispatch: function postDispatch(e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }, T.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }, T.Event = function (e, t) {
        if (!(this instanceof T.Event)) return new T.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0;
      }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function preventDefault() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function stopPropagation() {
          var e = this.originalEvent;
          this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
      }, T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function which(e) {
          var t = e.button;
          return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
      }, T.event.addProp), T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, t) {
        T.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function handle(e) {
            var n,
                r = e.relatedTarget,
                i = e.handleObj;
            return r && (r === this || T.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
          }
        };
      }), T.fn.extend({
        on: function on(e, t, n, r) {
          return Ne(this, e, t, n, r);
        },
        one: function one(e, t, n, r) {
          return Ne(this, e, t, n, r, 1);
        },
        off: function off(e, t, n) {
          var i, o;
          if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

          if ("object" === r(e)) {
            for (o in e) {
              this.off(o, t, e[o]);
            }

            return this;
          }

          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
            T.event.remove(this, e, n, t);
          });
        }
      });
      var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          je = /<script|<style|<link/i,
          qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function He(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e;
      }

      function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
      }

      function Pe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }

      function Me(e, t) {
        var n, r, i, o, a, s, u, l;

        if (1 === t.nodeType) {
          if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
            for (n = 0, r = l[i].length; n < r; n++) {
              T.event.add(t, i, l[i][n]);
            }
          }
          K.hasData(e) && (s = K.access(e), u = T.extend({}, s), K.set(t, u));
        }
      }

      function Re(e, t, n, r) {
        t = u.apply([], t);
        var i,
            o,
            a,
            s,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = m(h);
        if (g || p > 1 && "string" == typeof h && !v.checkClone && qe.test(h)) return e.each(function (i) {
          var o = e.eq(i);
          g && (t[0] = h.call(this, i, o.html())), Re(o, t, n, r);
        });

        if (p && (o = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
          for (s = (a = T.map(ge(i, "script"), Oe)).length; f < p; f++) {
            l = i, f !== d && (l = T.clone(l, !0, !0), s && T.merge(a, ge(l, "script"))), n.call(e[f], l, f);
          }

          if (s) for (c = a[a.length - 1].ownerDocument, T.map(a, Pe), f = 0; f < s; f++) {
            l = a[f], de.test(l.type || "") && !J.access(l, "globalEval") && T.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : b(l.textContent.replace(Le, ""), c, l));
          }
        }

        return e;
      }

      function Ie(e, t, n) {
        for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
          n || 1 !== r.nodeType || T.cleanData(ge(r)), r.parentNode && (n && T.contains(r.ownerDocument, r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
        }

        return e;
      }

      T.extend({
        htmlPrefilter: function htmlPrefilter(e) {
          return e.replace(Ae, "<$1></$2>");
        },
        clone: function clone(e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c = e.cloneNode(!0),
              f = T.contains(e.ownerDocument, e);
          if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++) {
            s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
          }
          if (t) if (n) for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) {
            Me(o[r], a[r]);
          } else Me(e, c);
          return (a = ge(c, "script")).length > 0 && ve(a, !f && ge(e, "script")), c;
        },
        cleanData: function cleanData(e) {
          for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++) {
            if (Y(n)) {
              if (t = n[J.expando]) {
                if (t.events) for (r in t.events) {
                  i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                }
                n[J.expando] = void 0;
              }

              n[K.expando] && (n[K.expando] = void 0);
            }
          }
        }
      }), T.fn.extend({
        detach: function detach(e) {
          return Ie(this, e, !0);
        },
        remove: function remove(e) {
          return Ie(this, e);
        },
        text: function text(e) {
          return z(this, function (e) {
            return void 0 === e ? T.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
            });
          }, null, e, arguments.length);
        },
        append: function append() {
          return Re(this, arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || He(this, e).appendChild(e);
          });
        },
        prepend: function prepend() {
          return Re(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = He(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function before() {
          return Re(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function after() {
          return Re(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function empty() {
          for (var e, t = 0; null != (e = this[t]); t++) {
            1 === e.nodeType && (T.cleanData(ge(e, !1)), e.textContent = "");
          }

          return this;
        },
        clone: function clone(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return T.clone(this, e, t);
          });
        },
        html: function html(e) {
          return z(this, function (e) {
            var t = this[0] || {},
                n = 0,
                r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

            if ("string" == typeof e && !je.test(e) && !he[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = T.htmlPrefilter(e);

              try {
                for (; n < r; n++) {
                  1 === (t = this[n] || {}).nodeType && (T.cleanData(ge(t, !1)), t.innerHTML = e);
                }

                t = 0;
              } catch (i) {}
            }

            t && this.empty().append(e);
          }, null, e, arguments.length);
        },
        replaceWith: function replaceWith() {
          var e = [];
          return Re(this, arguments, function (t) {
            var n = this.parentNode;
            T.inArray(this, e) < 0 && (T.cleanData(ge(this)), n && n.replaceChild(t, this));
          }, e);
        }
      }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, t) {
        T.fn[e] = function (e) {
          for (var n, r = [], i = T(e), o = i.length - 1, a = 0; a <= o; a++) {
            n = a === o ? this : this.clone(!0), T(i[a])[t](n), l.apply(r, n.get());
          }

          return this.pushStack(r);
        };
      });

      var We = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
          $e = function $e(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e);
      },
          Be = new RegExp(ie.join("|"), "i");

      function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || T.contains(e.ownerDocument, e) || (a = T.style(e, t)), !v.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
      }

      function _e(e, t) {
        return {
          get: function get() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }

      !function () {
        function e() {
          if (c) {
            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", we.appendChild(l).appendChild(c);
            var e = t.getComputedStyle(c);
            r = "1%" !== e.top, u = 12 === n(e.marginLeft), c.style.right = "60%", s = 36 === n(e.right), i = 36 === n(e.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", we.removeChild(l), c = null;
          }
        }

        function n(e) {
          return Math.round(parseFloat(e));
        }

        var r,
            i,
            a,
            s,
            u,
            l = o.createElement("div"),
            c = o.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(v, {
          boxSizingReliable: function boxSizingReliable() {
            return e(), i;
          },
          pixelBoxStyles: function pixelBoxStyles() {
            return e(), s;
          },
          pixelPosition: function pixelPosition() {
            return e(), r;
          },
          reliableMarginLeft: function reliableMarginLeft() {
            return e(), u;
          },
          scrollboxSize: function scrollboxSize() {
            return e(), a;
          }
        }));
      }();
      var ze = /^(none|table(?!-c[ea]).+)/,
          Xe = /^--/,
          Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
          Ve = {
        letterSpacing: "0",
        fontWeight: "400"
      },
          Ge = ["Webkit", "Moz", "ms"],
          Ye = o.createElement("div").style;

      function Qe(e) {
        var t = T.cssProps[e];
        return t || (t = T.cssProps[e] = function (e) {
          if (e in Ye) return e;

          for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--;) {
            if ((e = Ge[n] + t) in Ye) return e;
          }
        }(e) || e), t;
      }

      function Je(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }

      function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;

        for (; a < 4; a += 2) {
          "margin" === n && (u += T.css(e, n + ie[a], !0, i)), r ? ("content" === n && (u -= T.css(e, "padding" + ie[a], !0, i)), "margin" !== n && (u -= T.css(e, "border" + ie[a] + "Width", !0, i))) : (u += T.css(e, "padding" + ie[a], !0, i), "padding" !== n ? u += T.css(e, "border" + ie[a] + "Width", !0, i) : s += T.css(e, "border" + ie[a] + "Width", !0, i));
        }

        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
      }

      function Ze(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === T.css(e, "boxSizing", !1, r),
            a = o;

        if (We.test(i)) {
          if (!n) return i;
          i = "auto";
        }

        return a = a && (v.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === T.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ke(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
      }

      function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i);
      }

      T.extend({
        cssHooks: {
          opacity: {
            get: function get(e, t) {
              if (t) {
                var n = Fe(e, "opacity");
                return "" === n ? "1" : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function style(e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
                a,
                s,
                u = G(t),
                l = Xe.test(t),
                c = e.style;
            if (l || (t = Qe(u)), s = T.cssHooks[t] || T.cssHooks[u], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
            "string" === (a = r(n)) && (o = re.exec(n)) && o[1] && (n = se(e, t, o), a = "number"), null != n && n == n && ("number" === a && (n += o && o[3] || (T.cssNumber[u] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
          }
        },
        css: function css(e, t, n, r) {
          var i,
              o,
              a,
              s = G(t);
          return Xe.test(t) || (t = Qe(s)), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
      }), T.each(["height", "width"], function (e, t) {
        T.cssHooks[t] = {
          get: function get(e, n, r) {
            if (n) return !ze.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, r) : ae(e, Ue, function () {
              return Ze(e, t, r);
            });
          },
          set: function set(e, n, r) {
            var i,
                o = $e(e),
                a = "border-box" === T.css(e, "boxSizing", !1, o),
                s = r && Ke(e, t, r, a, o);
            return a && v.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ke(e, t, "border", !1, o) - .5)), s && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = T.css(e, t)), Je(0, n, s);
          }
        };
      }), T.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
          marginLeft: 0
        }, function () {
          return e.getBoundingClientRect().left;
        })) + "px";
      }), T.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (e, t) {
        T.cssHooks[e + t] = {
          expand: function expand(n) {
            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
              i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
            }

            return i;
          }
        }, "margin" !== e && (T.cssHooks[e + t].set = Je);
      }), T.fn.extend({
        css: function css(e, t) {
          return z(this, function (e, t, n) {
            var r,
                i,
                o = {},
                a = 0;

            if (Array.isArray(t)) {
              for (r = $e(e), i = t.length; a < i; a++) {
                o[t[a]] = T.css(e, t[a], !1, r);
              }

              return o;
            }

            return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
          }, e, t, arguments.length > 1);
        }
      }), T.Tween = et, et.prototype = {
        constructor: et,
        init: function init(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px");
        },
        cur: function cur() {
          var e = et.propHooks[this.prop];
          return e && e.get ? e.get(this) : et.propHooks._default.get(this);
        },
        run: function run(e) {
          var t,
              n = et.propHooks[this.prop];
          return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
        }
      }, et.prototype.init.prototype = et.prototype, et.propHooks = {
        _default: {
          get: function get(e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
          },
          set: function set(e) {
            T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
          }
        }
      }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
        set: function set(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }, T.easing = {
        linear: function linear(e) {
          return e;
        },
        swing: function swing(e) {
          return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
      }, T.fx = et.prototype.init, T.fx.step = {};
      var tt,
          nt,
          rt = /^(?:toggle|show|hide)$/,
          it = /queueHooks$/;

      function ot() {
        nt && (!1 === o.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ot) : t.setTimeout(ot, T.fx.interval), T.fx.tick());
      }

      function at() {
        return t.setTimeout(function () {
          tt = void 0;
        }), tt = Date.now();
      }

      function st(e, t) {
        var n,
            r = 0,
            i = {
          height: e
        };

        for (t = t ? 1 : 0; r < 4; r += 2 - t) {
          i["margin" + (n = ie[r])] = i["padding" + n] = e;
        }

        return t && (i.opacity = i.width = e), i;
      }

      function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
          if (r = i[o].call(n, t, e)) return r;
        }
      }

      function lt(e, t, n) {
        var r,
            i,
            o = 0,
            a = lt.prefilters.length,
            s = T.Deferred().always(function () {
          delete u.elem;
        }),
            u = function u() {
          if (i) return !1;

          for (var t = tt || at(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
            l.tweens[o].run(r);
          }

          return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
        },
            l = s.promise({
          elem: e,
          props: T.extend({}, t),
          opts: T.extend(!0, {
            specialEasing: {},
            easing: T.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: tt || at(),
          duration: n.duration,
          tweens: [],
          createTween: function createTween(t, n) {
            var r = T.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
            return l.tweens.push(r), r;
          },
          stop: function stop(t) {
            var n = 0,
                r = t ? l.tweens.length : 0;
            if (i) return this;

            for (i = !0; n < r; n++) {
              l.tweens[n].run(1);
            }

            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
          }
        }),
            c = l.props;

        for (!function (e, t) {
          var n, r, i, o, a;

          for (n in e) {
            if (i = t[r = G(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = T.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
              (n in e) || (e[n] = o[n], t[n] = i);
            } else t[r] = i;
          }
        }(c, l.opts.specialEasing); o < a; o++) {
          if (r = lt.prefilters[o].call(l, e, c, l.opts)) return m(r.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        }

        return T.map(c, ut, l), m(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), T.fx.timer(T.extend(u, {
          elem: e,
          anim: l,
          queue: l.opts.queue
        })), l;
      }

      T.Animation = T.extend(lt, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return se(n.elem, e, re.exec(t), n), n;
          }]
        },
        tweener: function tweener(e, t) {
          m(e) ? (t = e, e = ["*"]) : e = e.match(R);

          for (var n, r = 0, i = e.length; r < i; r++) {
            n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t);
          }
        },
        prefilters: [function (e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f = "width" in t || "height" in t,
              p = this,
              d = {},
              h = e.style,
              g = e.nodeType && oe(e),
              v = J.get(e, "fxshow");

          for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s();
          }), a.unqueued++, p.always(function () {
            p.always(function () {
              a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
            });
          })), t) {
            if (i = t[r], rt.test(i)) {
              if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !v || void 0 === v[r]) continue;
                g = !0;
              }

              d[r] = v && v[r] || T.style(e, r);
            }
          }

          if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = J.get(e, "display")), "none" === (c = T.css(e, "display")) && (l ? c = l : (ce([e], !0), l = e.style.display || l, c = T.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === T.css(e, "float") && (u || (p.done(function () {
            h.display = l;
          }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
          })), u = !1, d) {
            u || (v ? "hidden" in v && (g = v.hidden) : v = J.access(e, "fxshow", {
              display: l
            }), o && (v.hidden = !g), g && ce([e], !0), p.done(function () {
              for (r in g || ce([e]), J.remove(e, "fxshow"), d) {
                T.style(e, r, d[r]);
              }
            })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
          }
        }],
        prefilter: function prefilter(e, t) {
          t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
        }
      }), T.speed = function (e, t, n) {
        var i = e && "object" === r(e) ? T.extend({}, e) : {
          complete: n || !n && t || m(e) && e,
          duration: e,
          easing: n && t || t && !m(t) && t
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
          m(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
        }, i;
      }, T.fn.extend({
        fadeTo: function fadeTo(e, t, n, r) {
          return this.filter(oe).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, r);
        },
        animate: function animate(e, t, n, r) {
          var i = T.isEmptyObject(e),
              o = T.speed(t, n, r),
              a = function a() {
            var t = lt(this, T.extend({}, e), o);
            (i || J.get(this, "finish")) && t.stop(!0);
          };

          return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function stop(e, t, n) {
          var r = function r(e) {
            var t = e.stop;
            delete e.stop, t(n);
          };

          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
            var t = !0,
                i = null != e && e + "queueHooks",
                o = T.timers,
                a = J.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
              a[i] && a[i].stop && it.test(i) && r(a[i]);
            }

            for (i = o.length; i--;) {
              o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
            }

            !t && n || T.dequeue(this, e);
          });
        },
        finish: function finish(e) {
          return !1 !== e && (e = e || "fx"), this.each(function () {
            var t,
                n = J.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = T.timers,
                a = r ? r.length : 0;

            for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            }

            for (t = 0; t < a; t++) {
              r[t] && r[t].finish && r[t].finish.call(this);
            }

            delete n.finish;
          });
        }
      }), T.each(["toggle", "show", "hide"], function (e, t) {
        var n = T.fn[t];

        T.fn[t] = function (e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, r, i);
        };
      }), T.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (e, t) {
        T.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }), T.timers = [], T.fx.tick = function () {
        var e,
            t = 0,
            n = T.timers;

        for (tt = Date.now(); t < n.length; t++) {
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }

        n.length || T.fx.stop(), tt = void 0;
      }, T.fx.timer = function (e) {
        T.timers.push(e), T.fx.start();
      }, T.fx.interval = 13, T.fx.start = function () {
        nt || (nt = !0, ot());
      }, T.fx.stop = function () {
        nt = null;
      }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, T.fn.delay = function (e, n) {
        return e = T.fx && T.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, r) {
          var i = t.setTimeout(n, e);

          r.stop = function () {
            t.clearTimeout(i);
          };
        });
      }, function () {
        var e = o.createElement("input"),
            t = o.createElement("select").appendChild(o.createElement("option"));
        e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = o.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value;
      }();
      var ct,
          ft = T.expr.attrHandle;
      T.fn.extend({
        attr: function attr(e, t) {
          return z(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function removeAttr(e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        }
      }), T.extend({
        attr: function attr(e, t, n) {
          var r,
              i,
              o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
          type: {
            set: function set(e, t) {
              if (!v.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            }
          }
        },
        removeAttr: function removeAttr(e, t) {
          var n,
              r = 0,
              i = t && t.match(R);
          if (i && 1 === e.nodeType) for (; n = i[r++];) {
            e.removeAttribute(n);
          }
        }
      }), ct = {
        set: function set(e, t, n) {
          return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
      }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ft[t] || T.find.attr;

        ft[t] = function (e, t, r) {
          var i,
              o,
              a = t.toLowerCase();
          return r || (o = ft[a], ft[a] = i, i = null != n(e, t, r) ? a : null, ft[a] = o), i;
        };
      });
      var pt = /^(?:input|select|textarea|button)$/i,
          dt = /^(?:a|area)$/i;

      function ht(e) {
        return (e.match(R) || []).join(" ");
      }

      function gt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }

      function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
      }

      T.fn.extend({
        prop: function prop(e, t) {
          return z(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function removeProp(e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        }
      }), T.extend({
        prop: function prop(e, t, n) {
          var r,
              i,
              o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, i = T.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
          tabIndex: {
            get: function get(e) {
              var t = T.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), v.optSelected || (T.propHooks.selected = {
        get: function get(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function set(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        T.propFix[this.toLowerCase()] = this;
      }), T.fn.extend({
        addClass: function addClass(e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
          if (m(e)) return this.each(function (t) {
            T(this).addClass(e.call(this, t, gt(this)));
          });
          if ((t = vt(e)).length) for (; n = this[u++];) {
            if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
              for (a = 0; o = t[a++];) {
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              }

              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
          }
          return this;
        },
        removeClass: function removeClass(e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
          if (m(e)) return this.each(function (t) {
            T(this).removeClass(e.call(this, t, gt(this)));
          });
          if (!arguments.length) return this.attr("class", "");
          if ((t = vt(e)).length) for (; n = this[u++];) {
            if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
              for (a = 0; o = t[a++];) {
                for (; r.indexOf(" " + o + " ") > -1;) {
                  r = r.replace(" " + o + " ", " ");
                }
              }

              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
          }
          return this;
        },
        toggleClass: function toggleClass(e, t) {
          var n = r(e),
              i = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (n) {
            T(this).toggleClass(e.call(this, n, gt(this), t), t);
          }) : this.each(function () {
            var t, r, o, a;
            if (i) for (r = 0, o = T(this), a = vt(e); t = a[r++];) {
              o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else void 0 !== e && "boolean" !== n || ((t = gt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
          });
        },
        hasClass: function hasClass(e) {
          var t,
              n,
              r = 0;

          for (t = " " + e + " "; n = this[r++];) {
            if (1 === n.nodeType && (" " + ht(gt(n)) + " ").indexOf(t) > -1) return !0;
          }

          return !1;
        }
      });
      var mt = /\r/g;
      T.fn.extend({
        val: function val(e) {
          var t,
              n,
              r,
              i = this[0];
          return arguments.length ? (r = m(e), this.each(function (n) {
            var i;
            1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, function (e) {
              return null == e ? "" : e + "";
            })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
          })) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(mt, "") : null == n ? "" : n : void 0;
        }
      }), T.extend({
        valHooks: {
          option: {
            get: function get(e) {
              var t = T.find.attr(e, "value");
              return null != t ? t : ht(T.text(e));
            }
          },
          select: {
            get: function get(e) {
              var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  u = a ? o + 1 : i.length;

              for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
                if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                  if (t = T(n).val(), a) return t;
                  s.push(t);
                }
              }

              return s;
            },
            set: function set(e, t) {
              for (var n, r, i = e.options, o = T.makeArray(t), a = i.length; a--;) {
                ((r = i[a]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
              }

              return n || (e.selectedIndex = -1), o;
            }
          }
        }
      }), T.each(["radio", "checkbox"], function () {
        T.valHooks[this] = {
          set: function set(e, t) {
            if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1;
          }
        }, v.checkOn || (T.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value;
        });
      }), v.focusin = "onfocusin" in t;

      var yt = /^(?:focusinfocus|focusoutblur)$/,
          xt = function xt(e) {
        e.stopPropagation();
      };

      T.extend(T.event, {
        trigger: function trigger(e, n, i, a) {
          var s,
              u,
              l,
              c,
              f,
              p,
              h,
              g,
              v = [i || o],
              x = d.call(e, "type") ? e.type : e,
              b = d.call(e, "namespace") ? e.namespace.split(".") : [];

          if (u = g = l = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !yt.test(x + T.event.triggered) && (x.indexOf(".") > -1 && (b = x.split("."), x = b.shift(), b.sort()), f = x.indexOf(":") < 0 && "on" + x, (e = e[T.expando] ? e : new T.Event(x, "object" === r(e) && e)).isTrigger = a ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : T.makeArray(n, [e]), h = T.event.special[x] || {}, a || !h.trigger || !1 !== h.trigger.apply(i, n))) {
            if (!a && !h.noBubble && !y(i)) {
              for (c = h.delegateType || x, yt.test(c + x) || (u = u.parentNode); u; u = u.parentNode) {
                v.push(u), l = u;
              }

              l === (i.ownerDocument || o) && v.push(l.defaultView || l.parentWindow || t);
            }

            for (s = 0; (u = v[s++]) && !e.isPropagationStopped();) {
              g = u, e.type = s > 1 ? c : h.bindType || x, (p = (J.get(u, "events") || {})[e.type] && J.get(u, "handle")) && p.apply(u, n), (p = f && u[f]) && p.apply && Y(u) && (e.result = p.apply(u, n), !1 === e.result && e.preventDefault());
            }

            return e.type = x, a || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !Y(i) || f && m(i[x]) && !y(i) && ((l = i[f]) && (i[f] = null), T.event.triggered = x, e.isPropagationStopped() && g.addEventListener(x, xt), i[x](), e.isPropagationStopped() && g.removeEventListener(x, xt), T.event.triggered = void 0, l && (i[f] = l)), e.result;
          }
        },
        simulate: function simulate(e, t, n) {
          var r = T.extend(new T.Event(), n, {
            type: e,
            isSimulated: !0
          });
          T.event.trigger(r, null, t);
        }
      }), T.fn.extend({
        trigger: function trigger(e, t) {
          return this.each(function () {
            T.event.trigger(e, t, this);
          });
        },
        triggerHandler: function triggerHandler(e, t) {
          var n = this[0];
          if (n) return T.event.trigger(e, t, n, !0);
        }
      }), v.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
      }, function (e, t) {
        var n = function n(e) {
          T.event.simulate(t, e.target, T.event.fix(e));
        };

        T.event.special[t] = {
          setup: function setup() {
            var r = this.ownerDocument || this,
                i = J.access(r, t);
            i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
          },
          teardown: function teardown() {
            var r = this.ownerDocument || this,
                i = J.access(r, t) - 1;
            i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
          }
        };
      });
      var bt = t.location,
          wt = Date.now(),
          Tt = /\?/;

      T.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;

        try {
          n = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (r) {
          n = void 0;
        }

        return n && !n.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), n;
      };

      var Ct = /\[\]$/,
          Et = /\r?\n/g,
          St = /^(?:submit|button|image|reset|file)$/i,
          kt = /^(?:input|select|textarea|keygen)/i;

      function Dt(e, t, n, i) {
        var o;
        if (Array.isArray(t)) T.each(t, function (t, o) {
          n || Ct.test(e) ? i(e, o) : Dt(e + "[" + ("object" === r(o) && null != o ? t : "") + "]", o, n, i);
        });else if (n || "object" !== w(t)) i(e, t);else for (o in t) {
          Dt(e + "[" + o + "]", t[o], n, i);
        }
      }

      T.param = function (e, t) {
        var n,
            r = [],
            i = function i(e, t) {
          var n = m(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };

        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
          i(this.name, this.value);
        });else for (n in e) {
          Dt(n, e[n], t, i);
        }
        return r.join("&");
      }, T.fn.extend({
        serialize: function serialize() {
          return T.param(this.serializeArray());
        },
        serializeArray: function serializeArray() {
          return this.map(function () {
            var e = T.prop(this, "elements");
            return e ? T.makeArray(e) : this;
          }).filter(function () {
            var e = this.type;
            return this.name && !T(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !fe.test(e));
          }).map(function (e, t) {
            var n = T(this).val();
            return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
              return {
                name: t.name,
                value: e.replace(Et, "\r\n")
              };
            }) : {
              name: t.name,
              value: n.replace(Et, "\r\n")
            };
          }).get();
        }
      });
      var Nt = /%20/g,
          At = /#.*$/,
          jt = /([?&])_=[^&]*/,
          qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Lt = /^(?:GET|HEAD)$/,
          Ht = /^\/\//,
          Ot = {},
          Pt = {},
          Mt = "*/".concat("*"),
          Rt = o.createElement("a");

      function It(e) {
        return function (t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r,
              i = 0,
              o = t.toLowerCase().match(R) || [];
          if (m(n)) for (; r = o[i++];) {
            "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
          }
        };
      }

      function Wt(e, t, n, r) {
        var i = {},
            o = e === Pt;

        function a(s) {
          var u;
          return i[s] = !0, T.each(e[s] || [], function (e, s) {
            var l = s(t, n, r);
            return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
          }), u;
        }

        return a(t.dataTypes[0]) || !i["*"] && a("*");
      }

      function $t(e, t) {
        var n,
            r,
            i = T.ajaxSettings.flatOptions || {};

        for (n in t) {
          void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        }

        return r && T.extend(!0, e, r), e;
      }

      Rt.href = bt.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: bt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Mt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": T.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function ajaxSetup(e, t) {
          return t ? $t($t(e, T.ajaxSettings), t) : $t(T.ajaxSettings, e);
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function ajax(e, n) {
          "object" === r(e) && (n = e, e = void 0), n = n || {};
          var i,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g = T.ajaxSetup({}, n),
              v = g.context || g,
              m = g.context && (v.nodeType || v.jquery) ? T(v) : T.event,
              y = T.Deferred(),
              x = T.Callbacks("once memory"),
              b = g.statusCode || {},
              w = {},
              C = {},
              E = "canceled",
              S = {
            readyState: 0,
            getResponseHeader: function getResponseHeader(e) {
              var t;

              if (f) {
                if (!u) for (u = {}; t = qt.exec(s);) {
                  u[t[1].toLowerCase()] = t[2];
                }
                t = u[e.toLowerCase()];
              }

              return null == t ? null : t;
            },
            getAllResponseHeaders: function getAllResponseHeaders() {
              return f ? s : null;
            },
            setRequestHeader: function setRequestHeader(e, t) {
              return null == f && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, w[e] = t), this;
            },
            overrideMimeType: function overrideMimeType(e) {
              return null == f && (g.mimeType = e), this;
            },
            statusCode: function statusCode(e) {
              var t;
              if (e) if (f) S.always(e[S.status]);else for (t in e) {
                b[t] = [b[t], e[t]];
              }
              return this;
            },
            abort: function abort(e) {
              var t = e || E;
              return i && i.abort(t), k(0, t), this;
            }
          };

          if (y.promise(S), g.url = ((e || g.url || bt.href) + "").replace(Ht, bt.protocol + "//"), g.type = n.method || n.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(R) || [""], null == g.crossDomain) {
            c = o.createElement("a");

            try {
              c.href = g.url, c.href = c.href, g.crossDomain = Rt.protocol + "//" + Rt.host != c.protocol + "//" + c.host;
            } catch (D) {
              g.crossDomain = !0;
            }
          }

          if (g.data && g.processData && "string" != typeof g.data && (g.data = T.param(g.data, g.traditional)), Wt(Ot, g, n, S), f) return S;

          for (d in (p = T.event && g.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Lt.test(g.type), a = g.url.replace(At, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Nt, "+")) : (h = g.url.slice(a.length), g.data && (g.processData || "string" == typeof g.data) && (a += (Tt.test(a) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (a = a.replace(jt, "$1"), h = (Tt.test(a) ? "&" : "?") + "_=" + wt++ + h), g.url = a + h), g.ifModified && (T.lastModified[a] && S.setRequestHeader("If-Modified-Since", T.lastModified[a]), T.etag[a] && S.setRequestHeader("If-None-Match", T.etag[a])), (g.data && g.hasContent && !1 !== g.contentType || n.contentType) && S.setRequestHeader("Content-Type", g.contentType), S.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : g.accepts["*"]), g.headers) {
            S.setRequestHeader(d, g.headers[d]);
          }

          if (g.beforeSend && (!1 === g.beforeSend.call(v, S, g) || f)) return S.abort();

          if (E = "abort", x.add(g.complete), S.done(g.success), S.fail(g.error), i = Wt(Pt, g, n, S)) {
            if (S.readyState = 1, p && m.trigger("ajaxSend", [S, g]), f) return S;
            g.async && g.timeout > 0 && (l = t.setTimeout(function () {
              S.abort("timeout");
            }, g.timeout));

            try {
              f = !1, i.send(w, k);
            } catch (D) {
              if (f) throw D;
              k(-1, D);
            }
          } else k(-1, "No Transport");

          function k(e, n, r, o) {
            var u,
                c,
                d,
                h,
                w,
                C = n;
            f || (f = !0, l && t.clearTimeout(l), i = void 0, s = o || "", S.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, r && (h = function (e, t, n) {
              for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) {
                u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              }

              if (r) for (i in s) {
                if (s[i] && s[i].test(r)) {
                  u.unshift(i);
                  break;
                }
              }
              if (u[0] in n) o = u[0];else {
                for (i in n) {
                  if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                  }

                  a || (a = i);
                }

                o = o || a;
              }
              if (o) return o !== u[0] && u.unshift(o), n[o];
            }(g, S, r)), h = function (e, t, n, r) {
              var i,
                  o,
                  a,
                  s,
                  u,
                  l = {},
                  c = e.dataTypes.slice();
              if (c[1]) for (a in e.converters) {
                l[a.toLowerCase()] = e.converters[a];
              }

              for (o = c.shift(); o;) {
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                  if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                      !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                      break;
                    }
                  }
                  if (!0 !== a) if (a && e.throws) t = a(t);else try {
                    t = a(t);
                  } catch (D) {
                    return {
                      state: "parsererror",
                      error: a ? D : "No conversion from " + u + " to " + o
                    };
                  }
                }
              }

              return {
                state: "success",
                data: t
              };
            }(g, h, S, u), u ? (g.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (T.lastModified[a] = w), (w = S.getResponseHeader("etag")) && (T.etag[a] = w)), 204 === e || "HEAD" === g.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = h.state, c = h.data, u = !(d = h.error))) : (d = C, !e && C || (C = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (n || C) + "", u ? y.resolveWith(v, [c, C, S]) : y.rejectWith(v, [S, C, d]), S.statusCode(b), b = void 0, p && m.trigger(u ? "ajaxSuccess" : "ajaxError", [S, g, u ? c : d]), x.fireWith(v, [S, C]), p && (m.trigger("ajaxComplete", [S, g]), --T.active || T.event.trigger("ajaxStop")));
          }

          return S;
        },
        getJSON: function getJSON(e, t, n) {
          return T.get(e, t, n, "json");
        },
        getScript: function getScript(e, t) {
          return T.get(e, void 0, t, "script");
        }
      }), T.each(["get", "post"], function (e, t) {
        T[t] = function (e, n, r, i) {
          return m(n) && (i = i || r, r = n, n = void 0), T.ajax(T.extend({
            url: e,
            type: t,
            dataType: i,
            data: n,
            success: r
          }, T.isPlainObject(e) && e));
        };
      }), T._evalUrl = function (e) {
        return T.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0
        });
      }, T.fn.extend({
        wrapAll: function wrapAll(e) {
          var t;
          return this[0] && (m(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) {
              e = e.firstElementChild;
            }

            return e;
          }).append(this)), this;
        },
        wrapInner: function wrapInner(e) {
          return m(e) ? this.each(function (t) {
            T(this).wrapInner(e.call(this, t));
          }) : this.each(function () {
            var t = T(this),
                n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e);
          });
        },
        wrap: function wrap(e) {
          var t = m(e);
          return this.each(function (n) {
            T(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function unwrap(e) {
          return this.parent(e).not("body").each(function () {
            T(this).replaceWith(this.childNodes);
          }), this;
        }
      }), T.expr.pseudos.hidden = function (e) {
        return !T.expr.pseudos.visible(e);
      }, T.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }, T.ajaxSettings.xhr = function () {
        try {
          return new t.XMLHttpRequest();
        } catch (e) {}
      };
      var Bt = {
        0: 200,
        1223: 204
      },
          Ft = T.ajaxSettings.xhr();
      v.cors = !!Ft && "withCredentials" in Ft, v.ajax = Ft = !!Ft, T.ajaxTransport(function (e) {
        var _n2, r;

        if (v.cors || Ft && !e.crossDomain) return {
          send: function send(i, o) {
            var a,
                s = e.xhr();
            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) {
              s[a] = e.xhrFields[a];
            }

            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) {
              s.setRequestHeader(a, i[a]);
            }

            _n2 = function n(e) {
              return function () {
                _n2 && (_n2 = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                  binary: s.response
                } : {
                  text: s.responseText
                }, s.getAllResponseHeaders()));
              };
            }, s.onload = _n2(), r = s.onerror = s.ontimeout = _n2("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
              4 === s.readyState && t.setTimeout(function () {
                _n2 && r();
              });
            }, _n2 = _n2("abort");

            try {
              s.send(e.hasContent && e.data || null);
            } catch (u) {
              if (_n2) throw u;
            }
          },
          abort: function abort() {
            _n2 && _n2();
          }
        };
      }), T.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }), T.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function textScript(e) {
            return T.globalEval(e), e;
          }
        }
      }), T.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), T.ajaxTransport("script", function (e) {
        var t, _n3;

        if (e.crossDomain) return {
          send: function send(r, i) {
            t = T("<script>").prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", _n3 = function n(e) {
              t.remove(), _n3 = null, e && i("error" === e.type ? 404 : 200, e.type);
            }), o.head.appendChild(t[0]);
          },
          abort: function abort() {
            _n3 && _n3();
          }
        };
      });

      var _t,
          zt = [],
          Xt = /(=)\?(?=&|$)|\?\?/;

      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function jsonpCallback() {
          var e = zt.pop() || T.expando + "_" + wt++;
          return this[e] = !0, e;
        }
      }), T.ajaxPrefilter("json jsonp", function (e, n, r) {
        var i,
            o,
            a,
            s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
          return a || T.error(i + " was not called"), a[0];
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function () {
          a = arguments;
        }, r.always(function () {
          void 0 === o ? T(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, zt.push(i)), a && m(o) && o(a[0]), a = o = void 0;
        }), "script";
      }), v.createHTMLDocument = ((_t = o.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), T.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = o.implementation.createHTMLDocument("")).createElement("base")).href = o.location.href, t.head.appendChild(r)) : t = o), a = !n && [], (i = j.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, a), a && a.length && T(a).remove(), T.merge([], i.childNodes)));
        var r, i, a;
      }, T.fn.load = function (e, t, n) {
        var i,
            o,
            a,
            s = this,
            u = e.indexOf(" ");
        return u > -1 && (i = ht(e.slice(u)), e = e.slice(0, u)), m(t) ? (n = t, t = void 0) : t && "object" === r(t) && (o = "POST"), s.length > 0 && T.ajax({
          url: e,
          type: o || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          a = arguments, s.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e);
        }).always(n && function (e, t) {
          s.each(function () {
            n.apply(this, a || [e.responseText, t, e]);
          });
        }), this;
      }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        T.fn[t] = function (e) {
          return this.on(t, e);
        };
      }), T.expr.pseudos.animated = function (e) {
        return T.grep(T.timers, function (t) {
          return e === t.elem;
        }).length;
      }, T.offset = {
        setOffset: function setOffset(e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              u,
              l = T.css(e, "position"),
              c = T(e),
              f = {};
          "static" === l && (e.style.position = "relative"), s = c.offset(), o = T.css(e, "top"), u = T.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, T.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
        }
      }, T.fn.extend({
        offset: function offset(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
            T.offset.setOffset(this, e, t);
          });
          var t,
              n,
              r = this[0];
          return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0;
        },
        position: function position() {
          if (this[0]) {
            var e,
                t,
                n,
                r = this[0],
                i = {
              top: 0,
              left: 0
            };
            if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();else {
              for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) {
                e = e.parentNode;
              }

              e && e !== r && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0), i.left += T.css(e, "borderLeftWidth", !0));
            }
            return {
              top: t.top - i.top - T.css(r, "marginTop", !0),
              left: t.left - i.left - T.css(r, "marginLeft", !0)
            };
          }
        },
        offsetParent: function offsetParent() {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === T.css(e, "position");) {
              e = e.offsetParent;
            }

            return e || we;
          });
        }
      }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (e, t) {
        var n = "pageYOffset" === t;

        T.fn[e] = function (r) {
          return z(this, function (e, r, i) {
            var o;
            if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
          }, e, r, arguments.length);
        };
      }), T.each(["top", "left"], function (e, t) {
        T.cssHooks[t] = _e(v.pixelPosition, function (e, n) {
          if (n) return n = Fe(e, t), We.test(n) ? T(e).position()[t] + "px" : n;
        });
      }), T.each({
        Height: "height",
        Width: "width"
      }, function (e, t) {
        T.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
        }, function (n, r) {
          T.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
                s = n || (!0 === i || !0 === o ? "margin" : "border");
            return z(this, function (t, n, i) {
              var o;
              return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, s) : T.style(t, n, i, s);
            }, t, a ? i : void 0, a);
          };
        });
      }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        T.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
      }), T.fn.extend({
        hover: function hover(e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        }
      }), T.fn.extend({
        bind: function bind(e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function unbind(e, t) {
          return this.off(e, null, t);
        },
        delegate: function delegate(e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function undelegate(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
      }), T.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid = e.guid || T.guid++, i;
      }, T.holdReady = function (e) {
        e ? T.readyWait++ : T.ready(!0);
      }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = A, T.isFunction = m, T.isWindow = y, T.camelCase = G, T.type = w, T.now = Date.now, T.isNumeric = function (e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }, "function" == typeof e && e.amd && e("jquery", [], function () {
        return T;
      });
      var Ut = t.jQuery,
          Vt = t.$;
      return T.noConflict = function (e) {
        return t.$ === T && (t.$ = Vt), e && t.jQuery === T && (t.jQuery = Ut), T;
      }, n || (t.jQuery = t.$ = T), T;
    });
  }, {
    "process": "2lwA"
  }]
}, {}, ["UgNe"], null);
},{}]