! function i(a, s, u) {
  function l(t, e) {
    if (!s[t]) {
      if (!a[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (c) return c(t, !0);
        var r = new Error("Cannot find module '" + t + "'");
        throw r.code = "MODULE_NOT_FOUND", r
      }
      var o = s[t] = {
        exports: {}
      };
      a[t][0].call(o.exports, function (e) {
        return l(a[t][1][e] || e)
      }, o, o.exports, i, a, s, u)
    }
    return s[t].exports
  }
  for (var c = "function" == typeof require && require, e = 0; e < u.length; e++) l(u[e]);
  return l
}({
  1: [function (e, t, n) {
    var r = '.xxst{font-size:8px}.st{font-size:10px}.xl{margin:4px;padding:3px;font-size:16px;font-weight:700;border-radius:3px}.xxl{margin:4px;padding:3px;font-size:26px;font-weight:700;border-radius:6px}.xxxl{margin:4px;padding:3px;font-size:36px;font-weight:700;border-radius:6px}.err{background-color:red;color:#fff}.warn{background-color:#ff0;color:#000}.serious{background-color:orange;color:#fff}.widgetLinks a{color:#fff}.hyphenate{word-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.current-conditions{padding:10px;margin:5px;border-color:#fff;border-width:0;border-radius:10px;max-width:250px}.paWidget{border:1px solid #000;border-radius:10px;padding:10px}.paWidget .message{font-size:12px}.paWidget h2{font-size:20px;margin-top:0}.averageWrapper{width:100%;position:relative}.averageCell{width:11%;font-size:9px;float:left;font-weight:700;padding:4px;margin:10px 2% 10px 0;text-align:center}.averageWrapper:after{content:"";display:table;clear:both}.popup-time-stamp{padding:3px 0 3px;white-space:nowrap}.popup-conditions{font-size:16px;font-weight:700;float:left;width:50%}.popup-sensor-name{font-size:16px;font-weight:700;margin:0 0 5px 0}.popup-error-message{font-size:14px;background-color:red;color:#fff;padding:3px}.popup-error-help{line-height:1.1em}.popup-error-help ul{padding-left:1em}.popup-aqi{float:right;width:48%;font-weight:700;text-align:center;line-height:1em}.popup-small{font-size:38px}.popup-medium{font-size:52px}.popup-large{font-size:68px}.legend-tooltip{min-height:1em;position:relative;display:inline-block}.legend-tooltip .legend-tooltiptext{visibility:hidden;width:220px;background-color:#000;color:#fff;padding:5px 0;border-radius:6px;position:absolute;z-index:1;line-height:1.3em;padding:5px;bottom:105%;left:50%;margin-left:-20px;white-space:normal}.legend-tooltip:hover .legend-tooltiptext{visibility:visible}.legend-tooltip .legend-tooltiptext::after{content:" ";position:absolute;top:100%;left:10%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#000 transparent transparent transparent}.legend-tooltip-popup{position:relative;display:inline-block;margin-bottom:10px}.legend-tooltip-popup .legend-tooltiptext{visibility:hidden;width:220px;background-color:#000;color:#fff;padding:5px 0;border-radius:6px;position:absolute;z-index:1;line-height:1.3em;padding:5px;bottom:105%;left:50%;margin-left:-20px}.legend-tooltip-popup:hover .legend-tooltiptext{visibility:visible}.legend-tooltip-popup .legend-tooltiptext::after{content:" ";position:absolute;top:100%;left:10%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#000 transparent transparent transparent}.deviceIcon{border:1px solid #000;border-radius:3px;white-space:nowrap;display:inline;line-height:1.7em;padding:2px;position:relative;cursor:pointer}.fault{background-color:#a00;color:#fff}.warn{background-color:orange;color:#fff}.sbsm{display:inline-block;width:30px;height:20px}.sbmed{display:inline-block;width:60px;height:30px}.si{display:inline-block;width:100%;height:100%}.q{-webkit-box-sizing:border-box;box-sizing:border-box;width:15%;margin-left:5%;min-height:20%;display:inline-block}.si .q.fir{height:20%}.si .q.se{height:40%}.si .q.th{height:60%}.si .q.fo{height:80%}.si .q.fif{height:99%}.gd .q{background-color:#16a085}.bd .q{background-color:#e74c3c}.ok .q{background-color:#f1c40f}.fo .q.fif,.on .q:not(.fir),.th .q.fif,.th .q.fo,.tw .q:not(.fir):not(.se){background-color:silver;border:thin solid grey}.fr{float:right}.nb{border:0}.widgetText{width:100%;height:60px;color:#000}';
    e("./../node_modules/cssify")(r, void 0, "_10csf31"), t.exports = r
  }, {
    "./../node_modules/cssify": 2
  }],
  2: [function (e, t, n) {
    "use strict";
    t.exports = function (t, e, n) {
      var r, o, i, a, s, u = e || document;
      if (u.createStyleSheet) {
        var l = u.createStyleSheet();
        return l.cssText = t, l.ownerNode
      }
      return o = n, i = function (e) {
        e.styleSheet ? e.styleSheet.cssText = t : e.innerHTML = t
      }, (s = (r = u).getElementById(o)) ? i(s) : (a = r.getElementsByTagName("head")[0], s = r.createElement("style"), null != o && (s.id = o), i(s), a.appendChild(s)), s
    }, t.exports.byUrl = function (e) {
      if (document.createStyleSheet) return document.createStyleSheet(e).ownerNode;
      var t = document.getElementsByTagName("head")[0],
        n = document.createElement("link");
      return n.rel = "stylesheet", n.href = e, t.appendChild(n), n
    }
  }, {}],
  3: [function (e, t, n) {
    ! function (e) {
      "use strict";
      var v, b, x, w = (v = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g, b = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, x = /[^-+\dA-Z]/g, function (e, t, n, r) {
        if (1 !== arguments.length || "string" !== function (e) {
            return null === e ? "null" : void 0 === e ? "undefined" : "object" != typeof e ? typeof e : Array.isArray(e) ? "array" : {}.toString.call(e).slice(8, -1).toLowerCase()
          }(e) || /\d/.test(e) || (t = e, e = void 0), (e = e || new Date) instanceof Date || (e = new Date(e)), isNaN(e)) throw TypeError("Invalid date");
        var o = (t = String(w.masks[t] || t || w.masks.default)).slice(0, 4);
        "UTC:" !== o && "GMT:" !== o || (t = t.slice(4), n = !0, "GMT:" === o && (r = !0));
        var i = n ? "getUTC" : "get",
          a = e[i + "Date"](),
          s = e[i + "Day"](),
          u = e[i + "Month"](),
          l = e[i + "FullYear"](),
          c = e[i + "Hours"](),
          p = e[i + "Minutes"](),
          d = e[i + "Seconds"](),
          f = e[i + "Milliseconds"](),
          h = n ? 0 : e.getTimezoneOffset(),
          m = function (e) {
            var t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
            t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
            var n = new Date(t.getFullYear(), 0, 4);
            n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
            var r = t.getTimezoneOffset() - n.getTimezoneOffset();
            t.setHours(t.getHours() - r);
            var o = (t - n) / 6048e5;
            return 1 + Math.floor(o)
          }(e),
          g = function (e) {
            var t = e.getDay();
            return 0 === t && (t = 7), t
          }(e),
          y = {
            d: a,
            dd: T(a),
            ddd: w.i18n.dayNames[s],
            dddd: w.i18n.dayNames[s + 7],
            m: u + 1,
            mm: T(u + 1),
            mmm: w.i18n.monthNames[u],
            mmmm: w.i18n.monthNames[u + 12],
            yy: String(l).slice(2),
            yyyy: l,
            h: c % 12 || 12,
            hh: T(c % 12 || 12),
            H: c,
            HH: T(c),
            M: p,
            MM: T(p),
            s: d,
            ss: T(d),
            l: T(f, 3),
            L: T(Math.round(f / 10)),
            t: c < 12 ? w.i18n.timeNames[0] : w.i18n.timeNames[1],
            tt: c < 12 ? w.i18n.timeNames[2] : w.i18n.timeNames[3],
            T: c < 12 ? w.i18n.timeNames[4] : w.i18n.timeNames[5],
            TT: c < 12 ? w.i18n.timeNames[6] : w.i18n.timeNames[7],
            Z: r ? "GMT" : n ? "UTC" : (String(e).match(b) || [""]).pop().replace(x, ""),
            o: (0 < h ? "-" : "+") + T(100 * Math.floor(Math.abs(h) / 60) + Math.abs(h) % 60, 4),
            S: ["th", "st", "nd", "rd"][3 < a % 10 ? 0 : (a % 100 - a % 10 != 10) * a % 10],
            W: m,
            N: g
          };
        return t.replace(v, function (e) {
          return e in y ? y[e] : e.slice(1, e.length - 1)
        })
      });

      function T(e, t) {
        for (e = String(e), t = t || 2; e.length < t;) e = "0" + e;
        return e
      }
      w.masks = {
        default: "ddd mmm dd yyyy HH:MM:ss",
        shortDate: "m/d/yy",
        mediumDate: "mmm d, yyyy",
        longDate: "mmmm d, yyyy",
        fullDate: "dddd, mmmm d, yyyy",
        shortTime: "h:MM TT",
        mediumTime: "h:MM:ss TT",
        longTime: "h:MM:ss TT Z",
        isoDate: "yyyy-mm-dd",
        isoTime: "HH:MM:ss",
        isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
        expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z"
      }, w.i18n = {
        dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]
      }, "function" == typeof define && define.amd ? define(function () {
        return w
      }) : "object" == typeof n ? t.exports = w : e.dateFormat = w
    }(this)
  }, {}],
  4: [function (e, n, t) {
    ! function (e, t) {
      "use strict";
      "object" == typeof n && "object" == typeof n.exports ? n.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
      } : t(e)
    }("undefined" != typeof window ? window : this, function (C, e) {
      "use strict";

      function m(e) {
        return null != e && e === e.window
      }
      var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function (e) {
          return t.flat.call(e)
        } : function (e) {
          return t.concat.apply([], e)
        },
        u = t.push,
        o = t.indexOf,
        n = {},
        i = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        v = {},
        b = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType
        },
        A = C.document,
        c = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
        };

      function x(e, t, n) {
        var r, o, i = (n = n || A).createElement("script");
        if (i.text = e, t)
          for (r in c)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i)
      }

      function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
      }
      var _ = function (e, t) {
        return new _.fn.init(e, t)
      };

      function p(e) {
        var t = !!e && "length" in e && e.length,
          n = w(e);
        return !b(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
      }
      _.fn = _.prototype = {
        jquery: "3.5.1",
        constructor: _,
        length: 0,
        toArray: function () {
          return s.call(this)
        },
        get: function (e) {
          return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
          var t = _.merge(this.constructor(), e);
          return t.prevObject = this, t
        },
        each: function (e) {
          return _.each(this, e)
        },
        map: function (n) {
          return this.pushStack(_.map(this, function (e, t) {
            return n.call(e, t, e)
          }))
        },
        slice: function () {
          return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
          return this.eq(0)
        },
        last: function () {
          return this.eq(-1)
        },
        even: function () {
          return this.pushStack(_.grep(this, function (e, t) {
            return (t + 1) % 2
          }))
        },
        odd: function () {
          return this.pushStack(_.grep(this, function (e, t) {
            return t % 2
          }))
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
          return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
      }, _.extend = _.fn.extend = function () {
        var e, t, n, r, o, i, a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
          if (null != (e = arguments[s]))
            for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (_.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || _.isPlainObject(n) ? n : {}, o = !1, a[t] = _.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        return a
      }, _.extend({
        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0
        },
        globalEval: function (e, t, n) {
          x(e, {
            nonce: t && t.nonce
          }, n)
        },
        each: function (e, t) {
          var n, r = 0;
          if (p(e))
            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
          else
            for (r in e)
              if (!1 === t.call(e[r], r, e[r])) break;
          return e
        },
        makeArray: function (e, t) {
          var n = t || [];
          return null != e && (p(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : o.call(t, e, n)
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
          return e.length = o, e
        },
        grep: function (e, t, n) {
          for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) != a && r.push(e[o]);
          return r
        },
        map: function (e, t, n) {
          var r, o, i = 0,
            a = [];
          if (p(e))
            for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
          else
            for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
          return g(a)
        },
        guid: 1,
        support: v
      }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = t[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
      });
      var d = function (n) {
        function p(e, t) {
          var n = "0x" + e.slice(1) - 65536;
          return t || (n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }

        function o() {
          T()
        }
        var e, f, x, i, a, h, d, m, w, u, l, T, C, s, A, g, c, y, v, _ = "sizzle" + +new Date,
          b = n.document,
          k = 0,
          r = 0,
          M = ue(),
          E = ue(),
          S = ue(),
          N = ue(),
          V = function (e, t) {
            return e === t && (l = !0), 0
          },
          L = {}.hasOwnProperty,
          t = [],
          D = t.pop,
          P = t.push,
          H = t.push,
          O = t.slice,
          j = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              if (e[n] === t) return n;
            return -1
          },
          q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          I = "[\\x20\\t\\r\\n\\f]",
          F = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          R = "\\[" + I + "*(" + F + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + I + "*\\]",
          z = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
          B = new RegExp(I + "+", "g"),
          W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
          U = new RegExp("^" + I + "*," + I + "*"),
          G = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
          $ = new RegExp(I + "|>"),
          X = new RegExp(z),
          Q = new RegExp("^" + F + "$"),
          Y = {
            ID: new RegExp("^#(" + F + ")"),
            CLASS: new RegExp("^\\.(" + F + ")"),
            TAG: new RegExp("^(" + F + "|[*])"),
            ATTR: new RegExp("^" + R),
            PSEUDO: new RegExp("^" + z),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + q + ")$", "i"),
            needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
          },
          J = /HTML$/i,
          K = /^(?:input|select|textarea|button)$/i,
          Z = /^h\d$/i,
          ee = /^[^{]+\{\s*\[native \w/,
          te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ne = /[+~]/,
          re = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
          oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ie = function (e, t) {
            return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          },
          ae = ve(function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
          }, {
            dir: "parentNode",
            next: "legend"
          });
        try {
          H.apply(t = O.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
        } catch (e) {
          H = {
            apply: t.length ? function (e, t) {
              P.apply(e, O.call(t))
            } : function (e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];);
              e.length = n - 1
            }
          }
        }

        function se(t, e, n, r) {
          var o, i, a, s, u, l, c, p = e && e.ownerDocument,
            d = e ? e.nodeType : 9;
          if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
          if (!r && (T(e), e = e || C, A)) {
            if (11 !== d && (u = te.exec(t)))
              if (o = u[1]) {
                if (9 === d) {
                  if (!(a = e.getElementById(o))) return n;
                  if (a.id === o) return n.push(a), n
                } else if (p && (a = p.getElementById(o)) && v(e, a) && a.id === o) return n.push(a), n
              } else {
                if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                if ((o = u[3]) && f.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(o)), n
              } if (f.qsa && !N[t + " "] && (!g || !g.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
              if (c = t, p = e, 1 === d && ($.test(t) || G.test(t))) {
                for ((p = ne.test(t) && me(e.parentNode) || e) === e && f.scope || ((s = e.getAttribute("id")) ? s = s.replace(oe, ie) : e.setAttribute("id", s = _)), i = (l = h(t)).length; i--;) l[i] = (s ? "#" + s : ":scope") + " " + ye(l[i]);
                c = l.join(",")
              }
              try {
                return H.apply(n, p.querySelectorAll(c)), n
              } catch (e) {
                N(t, !0)
              } finally {
                s === _ && e.removeAttribute("id")
              }
            }
          }
          return m(t.replace(W, "$1"), e, n, r)
        }

        function ue() {
          var n = [];

          function r(e, t) {
            return n.push(e + " ") > x.cacheLength && delete r[n.shift()], r[e + " "] = t
          }
          return r
        }

        function le(e) {
          return e[_] = !0, e
        }

        function ce(e) {
          var t = C.createElement("fieldset");
          try {
            return !!e(t)
          } catch (e) {
            return !1
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
          }
        }

        function pe(e, t) {
          for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function de(e, t) {
          var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n)
            for (; n = n.nextSibling;)
              if (n === t) return -1;
          return e ? 1 : -1
        }

        function fe(t) {
          return function (e) {
            return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
          }
        }

        function he(a) {
          return le(function (i) {
            return i = +i, le(function (e, t) {
              for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
            })
          })
        }

        function me(e) {
          return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in f = se.support = {}, a = se.isXML = function (e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !J.test(t || n && n.nodeName || "HTML")
          }, T = se.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : b;
            return r != C && 9 === r.nodeType && r.documentElement && (s = (C = r).documentElement, A = !a(C), b != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", o, !1) : n.attachEvent && n.attachEvent("onunload", o)), f.scope = ce(function (e) {
              return s.appendChild(e).appendChild(C.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }), f.attributes = ce(function (e) {
              return e.className = "i", !e.getAttribute("className")
            }), f.getElementsByTagName = ce(function (e) {
              return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), f.getElementsByClassName = ee.test(C.getElementsByClassName), f.getById = ce(function (e) {
              return s.appendChild(e).id = _, !C.getElementsByName || !C.getElementsByName(_).length
            }), f.getById ? (x.filter.ID = function (e) {
              var t = e.replace(re, p);
              return function (e) {
                return e.getAttribute("id") === t
              }
            }, x.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && A) {
                var n = t.getElementById(e);
                return n ? [n] : []
              }
            }) : (x.filter.ID = function (e) {
              var n = e.replace(re, p);
              return function (e) {
                var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return t && t.value === n
              }
            }, x.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && A) {
                var n, r, o, i = t.getElementById(e);
                if (i) {
                  if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                  for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                }
                return []
              }
            }), x.find.TAG = f.getElementsByTagName ? function (e, t) {
              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
              var n, r = [],
                o = 0,
                i = t.getElementsByTagName(e);
              if ("*" !== e) return i;
              for (; n = i[o++];) 1 === n.nodeType && r.push(n);
              return r
            }, x.find.CLASS = f.getElementsByClassName && function (e, t) {
              if (void 0 !== t.getElementsByClassName && A) return t.getElementsByClassName(e)
            }, c = [], g = [], (f.qsa = ee.test(C.querySelectorAll)) && (ce(function (e) {
              var t;
              s.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
            }), ce(function (e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = C.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (f.matchesSelector = ee.test(y = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function (e) {
              f.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), c.push("!=", z)
            }), g = g.length && new RegExp(g.join("|")), c = c.length && new RegExp(c.join("|")), t = ee.test(s.compareDocumentPosition), v = t || ee.test(s.contains) ? function (e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
              if (t)
                for (; t = t.parentNode;)
                  if (t === e) return !0;
              return !1
            }, V = t ? function (e, t) {
              if (e === t) return l = !0, 0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == b && v(b, e) ? -1 : t == C || t.ownerDocument == b && v(b, t) ? 1 : u ? j(u, e) - j(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
              if (e === t) return l = !0, 0;
              var n, r = 0,
                o = e.parentNode,
                i = t.parentNode,
                a = [e],
                s = [t];
              if (!o || !i) return e == C ? -1 : t == C ? 1 : o ? -1 : i ? 1 : u ? j(u, e) - j(u, t) : 0;
              if (o === i) return de(e, t);
              for (n = e; n = n.parentNode;) a.unshift(n);
              for (n = t; n = n.parentNode;) s.unshift(n);
              for (; a[r] === s[r];) r++;
              return r ? de(a[r], s[r]) : a[r] == b ? -1 : s[r] == b ? 1 : 0
            }), C
          }, se.matches = function (e, t) {
            return se(e, null, null, t)
          }, se.matchesSelector = function (e, t) {
            if (T(e), f.matchesSelector && A && !N[t + " "] && (!c || !c.test(t)) && (!g || !g.test(t))) try {
              var n = y.call(e, t);
              if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
              N(t, !0)
            }
            return 0 < se(t, C, null, [e]).length
          }, se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), v(e, t)
          }, se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = x.attrHandle[t.toLowerCase()],
              r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
            return void 0 !== r ? r : f.attributes || !A ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
          }, se.escape = function (e) {
            return (e + "").replace(oe, ie)
          }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
          }, se.uniqueSort = function (e) {
            var t, n = [],
              r = 0,
              o = 0;
            if (l = !f.detectDuplicates, u = !f.sortStable && e.slice(0), e.sort(V), l) {
              for (; t = e[o++];) t === e[o] && (r = n.push(o));
              for (; r--;) e.splice(n[r], 1)
            }
            return u = null, e
          }, i = se.getText = function (e) {
            var t, n = "",
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
              } else if (3 === o || 4 === o) return e.nodeValue
            } else
              for (; t = e[r++];) n += i(t);
            return n
          }, (x = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: Y,
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
              ATTR: function (e) {
                return e[1] = e[1].replace(re, p), e[3] = (e[3] || e[4] || e[5] || "").replace(re, p), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              },
              CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
              },
              PSEUDO: function (e) {
                var t, n = !e[6] && e[2];
                return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
              }
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(re, p).toLowerCase();
                return "*" === e ? function () {
                  return !0
                } : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
              },
              CLASS: function (e) {
                var t = M[e + " "];
                return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && M(e, function (e) {
                  return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                })
              },
              ATTR: function (n, r, o) {
                return function (e) {
                  var t = se.attr(e, n);
                  return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                }
              },
              CHILD: function (h, e, t, m, g) {
                var y = "nth" !== h.slice(0, 3),
                  v = "last" !== h.slice(-4),
                  b = "of-type" === e;
                return 1 === m && 0 === g ? function (e) {
                  return !!e.parentNode
                } : function (e, t, n) {
                  var r, o, i, a, s, u, l = y != v ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    p = b && e.nodeName.toLowerCase(),
                    d = !n && !b,
                    f = !1;
                  if (c) {
                    if (y) {
                      for (; l;) {
                        for (a = e; a = a[l];)
                          if (b ? a.nodeName.toLowerCase() === p : 1 === a.nodeType) return !1;
                        u = l = "only" === h && !u && "nextSibling"
                      }
                      return !0
                    }
                    if (u = [v ? c.firstChild : c.lastChild], v && d) {
                      for (f = (s = (r = (o = (i = (a = c)[_] || (a[_] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (f = s = 0) || u.pop();)
                        if (1 === a.nodeType && ++f && a === e) {
                          o[h] = [k, s, f];
                          break
                        }
                    } else if (d && (f = s = (r = (o = (i = (a = e)[_] || (a[_] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === f)
                      for (;
                        (a = ++s && a && a[l] || (f = s = 0) || u.pop()) && ((b ? a.nodeName.toLowerCase() !== p : 1 !== a.nodeType) || !++f || (d && ((o = (i = a[_] || (a[_] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] = [k, f]), a !== e)););
                    return (f -= g) === m || f % m == 0 && 0 <= f / m
                  }
                }
              },
              PSEUDO: function (e, i) {
                var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                return a[_] ? a(i) : 1 < a.length ? (t = [e, e, "", i], x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                  for (var n, r = a(e, i), o = r.length; o--;) e[n = j(e, r[o])] = !(t[n] = r[o])
                }) : function (e) {
                  return a(e, 0, t)
                }) : a
              }
            },
            pseudos: {
              not: le(function (e) {
                var r = [],
                  o = [],
                  s = d(e.replace(W, "$1"));
                return s[_] ? le(function (e, t, n, r) {
                  for (var o, i = s(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o))
                }) : function (e, t, n) {
                  return r[0] = e, s(r, null, n, o), r[0] = null, !o.pop()
                }
              }),
              has: le(function (t) {
                return function (e) {
                  return 0 < se(t, e).length
                }
              }),
              contains: le(function (t) {
                return t = t.replace(re, p),
                  function (e) {
                    return -1 < (e.textContent || i(e)).indexOf(t)
                  }
              }),
              lang: le(function (n) {
                return Q.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(re, p).toLowerCase(),
                  function (e) {
                    var t;
                    do {
                      if (t = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1
                  }
              }),
              target: function (e) {
                var t = n.location && n.location.hash;
                return t && t.slice(1) === e.id
              },
              root: function (e) {
                return e === s
              },
              focus: function (e) {
                return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: fe(!1),
              disabled: fe(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0
              },
              parent: function (e) {
                return !x.pseudos.empty(e)
              },
              header: function (e) {
                return Z.test(e.nodeName)
              },
              input: function (e) {
                return K.test(e.nodeName)
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
              },
              text: function (e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: he(function () {
                return [0]
              }),
              last: he(function (e, t) {
                return [t - 1]
              }),
              eq: he(function (e, t, n) {
                return [n < 0 ? n + t : n]
              }),
              even: he(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e
              }),
              odd: he(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e
              }),
              lt: he(function (e, t, n) {
                for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                return e
              }),
              gt: he(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                return e
              })
            }
          }).pseudos.nth = x.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) x.pseudos[e] = function (t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
          }
        }(e);
        for (e in {
            submit: !0,
            reset: !0
          }) x.pseudos[e] = function (n) {
          return function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n
          }
        }(e);

        function ge() {}

        function ye(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r
        }

        function ve(s, e, t) {
          var u = e.dir,
            l = e.next,
            c = l || u,
            p = t && "parentNode" === c,
            d = r++;
          return e.first ? function (e, t, n) {
            for (; e = e[u];)
              if (1 === e.nodeType || p) return s(e, t, n);
            return !1
          } : function (e, t, n) {
            var r, o, i, a = [k, d];
            if (n) {
              for (; e = e[u];)
                if ((1 === e.nodeType || p) && s(e, t, n)) return !0
            } else
              for (; e = e[u];)
                if (1 === e.nodeType || p)
                  if (o = (i = e[_] || (e[_] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                  else {
                    if ((r = o[c]) && r[0] === k && r[1] === d) return a[2] = r[2];
                    if ((o[c] = a)[2] = s(e, t, n)) return !0
                  } return !1
          }
        }

        function be(o) {
          return 1 < o.length ? function (e, t, n) {
            for (var r = o.length; r--;)
              if (!o[r](e, t, n)) return !1;
            return !0
          } : o[0]
        }

        function xe(e, t, n, r, o) {
          for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
          return a
        }

        function we(f, h, m, g, y, e) {
          return g && !g[_] && (g = we(g)), y && !y[_] && (y = we(y, e)), le(function (e, t, n, r) {
            var o, i, a, s = [],
              u = [],
              l = t.length,
              c = e || function (e, t, n) {
                for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                return n
              }(h || "*", n.nodeType ? [n] : n, []),
              p = !f || !e && h ? c : xe(c, s, f, n, r),
              d = m ? y || (e ? f : l || g) ? [] : t : p;
            if (m && m(p, d, n, r), g)
              for (o = xe(d, u), g(o, [], n, r), i = o.length; i--;)(a = o[i]) && (d[u[i]] = !(p[u[i]] = a));
            if (e) {
              if (y || f) {
                if (y) {
                  for (o = [], i = d.length; i--;)(a = d[i]) && o.push(p[i] = a);
                  y(null, d = [], o, r)
                }
                for (i = d.length; i--;)(a = d[i]) && -1 < (o = y ? j(e, a) : s[i]) && (e[o] = !(t[o] = a))
              }
            } else d = xe(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : H.apply(t, d)
          })
        }

        function Te(g, y) {
          function e(e, t, n, r, o) {
            var i, a, s, u = 0,
              l = "0",
              c = e && [],
              p = [],
              d = w,
              f = e || b && x.find.TAG("*", o),
              h = k += null == d ? 1 : Math.random() || .1,
              m = f.length;
            for (o && (w = t == C || t || o); l !== m && null != (i = f[l]); l++) {
              if (b && i) {
                for (a = 0, t || i.ownerDocument == C || (T(i), n = !A); s = g[a++];)
                  if (s(i, t || C, n)) {
                    r.push(i);
                    break
                  } o && (k = h)
              }
              v && ((i = !s && i) && u--, e && c.push(i))
            }
            if (u += l, v && l !== u) {
              for (a = 0; s = y[a++];) s(c, p, t, n);
              if (e) {
                if (0 < u)
                  for (; l--;) c[l] || p[l] || (p[l] = D.call(r));
                p = xe(p)
              }
              H.apply(r, p), o && !e && 0 < p.length && 1 < u + y.length && se.uniqueSort(r)
            }
            return o && (k = h, w = d), c
          }
          var v = 0 < y.length,
            b = 0 < g.length;
          return v ? le(e) : e
        }
        return ge.prototype = x.filters = x.pseudos, x.setFilters = new ge, h = se.tokenize = function (e, t) {
          var n, r, o, i, a, s, u, l = E[e + " "];
          if (l) return t ? 0 : l.slice(0);
          for (a = e, s = [], u = x.preFilter; a;) {
            for (i in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(o = [])), n = !1, (r = G.exec(a)) && (n = r.shift(), o.push({
                value: n,
                type: r[0].replace(W, " ")
              }), a = a.slice(n.length)), x.filter) !(r = Y[i].exec(a)) || u[i] && !(r = u[i](r)) || (n = r.shift(), o.push({
              value: n,
              type: i,
              matches: r
            }), a = a.slice(n.length));
            if (!n) break
          }
          return t ? a.length : a ? se.error(e) : E(e, s).slice(0)
        }, d = se.compile = function (e, t) {
          var n, r = [],
            o = [],
            i = S[e + " "];
          if (!i) {
            for (n = (t = t || h(e)).length; n--;)(i = function e(t) {
              for (var o, n, r, i = t.length, a = x.relative[t[0].type], s = a || x.relative[" "], u = a ? 1 : 0, l = ve(function (e) {
                  return e === o
                }, s, !0), c = ve(function (e) {
                  return -1 < j(o, e)
                }, s, !0), p = [function (e, t, n) {
                  var r = !a && (n || t !== w) || ((o = t).nodeType ? l : c)(e, t, n);
                  return o = null, r
                }]; u < i; u++)
                if (n = x.relative[t[u].type]) p = [ve(be(p), n)];
                else {
                  if ((n = x.filter[t[u].type].apply(null, t[u].matches))[_]) {
                    for (r = ++u; r < i && !x.relative[t[r].type]; r++);
                    return we(1 < u && be(p), 1 < u && ye(t.slice(0, u - 1).concat({
                      value: " " === t[u - 2].type ? "*" : ""
                    })).replace(W, "$1"), n, u < r && e(t.slice(u, r)), r < i && e(t = t.slice(r)), r < i && ye(t))
                  }
                  p.push(n)
                } return be(p)
            }(t[n]))[_] ? r.push(i) : o.push(i);
            (i = S(e, Te(o, r))).selector = e
          }
          return i
        }, m = se.select = function (e, t, n, r) {
          var o, i, a, s, u, l = "function" == typeof e && e,
            c = !r && h(e = l.selector || e);
          if (n = n || [], 1 === c.length) {
            if (2 < (i = c[0] = c[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === t.nodeType && A && x.relative[i[1].type]) {
              if (!(t = (x.find.ID(a.matches[0].replace(re, p), t) || [])[0])) return n;
              l && (t = t.parentNode), e = e.slice(i.shift().value.length)
            }
            for (o = Y.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !x.relative[s = a.type]);)
              if ((u = x.find[s]) && (r = u(a.matches[0].replace(re, p), ne.test(i[0].type) && me(t.parentNode) || t))) {
                if (i.splice(o, 1), !(e = r.length && ye(i))) return H.apply(n, r), n;
                break
              }
          }
          return (l || d(e, c))(r, t, !A, n, !t || ne.test(e) && me(t.parentNode) || t), n
        }, f.sortStable = _.split("").sort(V).join("") === _, f.detectDuplicates = !!l, T(), f.sortDetached = ce(function (e) {
          return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || pe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && ce(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || pe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
          return null == e.getAttribute("disabled")
        }) || pe(q, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
      }(C);
      _.find = d, _.expr = d.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = d.uniqueSort, _.text = d.getText, _.isXMLDoc = d.isXML, _.contains = d.contains, _.escapeSelector = d.escape;

      function f(e, t, n) {
        for (var r = [], o = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (o && _(e).is(n)) break;
            r.push(e)
          } return r
      }

      function h(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      }
      var T = _.expr.match.needsContext;

      function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }
      var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function E(e, n, r) {
        return b(n) ? _.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r
        }) : n.nodeType ? _.grep(e, function (e) {
          return e === n !== r
        }) : "string" != typeof n ? _.grep(e, function (e) {
          return -1 < o.call(n, e) !== r
        }) : _.filter(n, e, r)
      }
      _.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? _.find.matchesSelector(r, e) ? [r] : [] : _.find.matches(e, _.grep(t, function (e) {
          return 1 === e.nodeType
        }))
      }, _.fn.extend({
        find: function (e) {
          var t, n, r = this.length,
            o = this;
          if ("string" != typeof e) return this.pushStack(_(e).filter(function () {
            for (t = 0; t < r; t++)
              if (_.contains(o[t], this)) return !0
          }));
          for (n = this.pushStack([]), t = 0; t < r; t++) _.find(e, o[t], n);
          return 1 < r ? _.uniqueSort(n) : n
        },
        filter: function (e) {
          return this.pushStack(E(this, e || [], !1))
        },
        not: function (e) {
          return this.pushStack(E(this, e || [], !0))
        },
        is: function (e) {
          return !!E(this, "string" == typeof e && T.test(e) ? _(e) : e || [], !1).length
        }
      });
      var S, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (_.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || S, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
          if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : A, !0)), M.test(r[1]) && _.isPlainObject(t))
            for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this
        }
        return (o = A.getElementById(r[2])) && (this[0] = o, this.length = 1), this
      }).prototype = _.fn, S = _(A);
      var V = /^(?:parents|prev(?:Until|All))/,
        L = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };

      function D(e, t) {
        for (;
          (e = e[t]) && 1 !== e.nodeType;);
        return e
      }
      _.fn.extend({
        has: function (e) {
          var t = _(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++)
              if (_.contains(this, t[e])) return !0
          })
        },
        closest: function (e, t) {
          var n, r = 0,
            o = this.length,
            i = [],
            a = "string" != typeof e && _(e);
          if (!T.test(e))
            for (; r < o; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                  i.push(n);
                  break
                } return this.pushStack(1 < i.length ? _.uniqueSort(i) : i)
        },
        index: function (e) {
          return e ? "string" == typeof e ? o.call(_(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
          return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
      }), _.each({
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
          return f(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
          return f(e, "parentNode", n)
        },
        next: function (e) {
          return D(e, "nextSibling")
        },
        prev: function (e) {
          return D(e, "previousSibling")
        },
        nextAll: function (e) {
          return f(e, "nextSibling")
        },
        prevAll: function (e) {
          return f(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
          return f(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
          return f(e, "previousSibling", n)
        },
        siblings: function (e) {
          return h((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
          return h(e.firstChild)
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
      }, function (r, o) {
        _.fn[r] = function (e, t) {
          var n = _.map(this, o, e);
          return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = _.filter(t, n)), 1 < this.length && (L[r] || _.uniqueSort(n), V.test(r) && n.reverse()), this.pushStack(n)
        }
      });
      var P = /[^\x20\t\r\n\f]+/g;

      function H(e) {
        return e
      }

      function O(e) {
        throw e
      }

      function j(e, t, n, r) {
        var o;
        try {
          e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
          n.apply(void 0, [e])
        }
      }
      _.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, _.each(e.match(P) || [], function (e, t) {
          n[t] = !0
        }), n) : _.extend({}, r);

        function o() {
          for (s = s || r.once, a = i = !0; l.length; c = -1)
            for (t = l.shift(); ++c < u.length;) !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && (c = u.length, t = !1);
          r.memory || (t = !1), i = !1, s && (u = t ? [] : "")
        }
        var i, t, a, s, u = [],
          l = [],
          c = -1,
          p = {
            add: function () {
              return u && (t && !i && (c = u.length - 1, l.push(t)), function n(e) {
                _.each(e, function (e, t) {
                  b(t) ? r.unique && p.has(t) || u.push(t) : t && t.length && "string" !== w(t) && n(t)
                })
              }(arguments), t && !i && o()), this
            },
            remove: function () {
              return _.each(arguments, function (e, t) {
                for (var n; - 1 < (n = _.inArray(t, u, n));) u.splice(n, 1), n <= c && c--
              }), this
            },
            has: function (e) {
              return e ? -1 < _.inArray(e, u) : 0 < u.length
            },
            empty: function () {
              return u = u && [], this
            },
            disable: function () {
              return s = l = [], u = t = "", this
            },
            disabled: function () {
              return !u
            },
            lock: function () {
              return s = l = [], t || i || (u = t = ""), this
            },
            locked: function () {
              return !!s
            },
            fireWith: function (e, t) {
              return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || o()), this
            },
            fire: function () {
              return p.fireWith(this, arguments), this
            },
            fired: function () {
              return !!a
            }
          };
        return p
      }, _.extend({
        Deferred: function (e) {
          var i = [
              ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
              ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
              ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
            ],
            o = "pending",
            a = {
              state: function () {
                return o
              },
              always: function () {
                return s.done(arguments).fail(arguments), this
              },
              catch: function (e) {
                return a.then(null, e)
              },
              pipe: function () {
                var o = arguments;
                return _.Deferred(function (r) {
                  _.each(i, function (e, t) {
                    var n = b(o[t[4]]) && o[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                    })
                  }), o = null
                }).promise()
              },
              then: function (t, n, r) {
                var u = 0;

                function l(o, i, a, s) {
                  return function () {
                    function e() {
                      var e, t;
                      if (!(o < u)) {
                        if ((e = a.apply(n, r)) === i.promise()) throw new TypeError("Thenable self-resolution");
                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, l(u, i, H, s), l(u, i, O, s)) : (u++, t.call(e, l(u, i, H, s), l(u, i, O, s), l(u, i, H, i.notifyWith))) : (a !== H && (n = void 0, r = [e]), (s || i.resolveWith)(n, r))
                      }
                    }
                    var n = this,
                      r = arguments,
                      t = s ? e : function () {
                        try {
                          e()
                        } catch (e) {
                          _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, t.stackTrace), u <= o + 1 && (a !== O && (n = void 0, r = [e]), i.rejectWith(n, r))
                        }
                      };
                    o ? t() : (_.Deferred.getStackHook && (t.stackTrace = _.Deferred.getStackHook()), C.setTimeout(t))
                  }
                }
                return _.Deferred(function (e) {
                  i[0][3].add(l(0, e, b(r) ? r : H, e.notifyWith)), i[1][3].add(l(0, e, b(t) ? t : H)), i[2][3].add(l(0, e, b(n) ? n : O))
                }).promise()
              },
              promise: function (e) {
                return null != e ? _.extend(e, a) : a
              }
            },
            s = {};
          return _.each(i, function (e, t) {
            var n = t[2],
              r = t[5];
            a[t[1]] = n.add, r && n.add(function () {
              o = r
            }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
              return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
            }, s[t[0] + "With"] = n.fireWith
          }), a.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
          function t(t) {
            return function (e) {
              o[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(o, i)
            }
          }
          var n = arguments.length,
            r = n,
            o = Array(r),
            i = s.call(arguments),
            a = _.Deferred();
          if (n <= 1 && (j(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || b(i[r] && i[r].then))) return a.then();
          for (; r--;) j(i[r], t(r), a.reject);
          return a.promise()
        }
      });
      var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      _.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && q.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
      }, _.readyException = function (e) {
        C.setTimeout(function () {
          throw e
        })
      };
      var I = _.Deferred();

      function F() {
        A.removeEventListener("DOMContentLoaded", F), C.removeEventListener("load", F), _.ready()
      }
      _.fn.ready = function (e) {
        return I.then(e).catch(function (e) {
          _.readyException(e)
        }), this
      }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0) !== e && 0 < --_.readyWait || I.resolveWith(A, [_])
        }
      }), _.ready.then = I.then, "complete" === A.readyState || "loading" !== A.readyState && !A.documentElement.doScroll ? C.setTimeout(_.ready) : (A.addEventListener("DOMContentLoaded", F), C.addEventListener("load", F));
      var R = function (e, t, n, r, o, i, a) {
          var s = 0,
            u = e.length,
            l = null == n;
          if ("object" === w(n))
            for (s in o = !0, n) R(e, t, s, n[s], !0, i, a);
          else if (void 0 !== r && (o = !0, b(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function (e, t, n) {
              return l.call(_(e), n)
            })), t))
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
        },
        z = /^-ms-/,
        B = /-([a-z])/g;

      function W(e, t) {
        return t.toUpperCase()
      }

      function U(e) {
        return e.replace(z, "ms-").replace(B, W)
      }

      function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      }

      function $() {
        this.expando = _.expando + $.uid++
      }
      $.uid = 1, $.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t
        },
        set: function (e, t, n) {
          var r, o = this.cache(e);
          if ("string" == typeof t) o[U(t)] = n;
          else
            for (r in t) o[U(r)] = t[r];
          return o
        },
        get: function (e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function (e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
          var n, r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in r ? [t] : t.match(P) || []).length;
              for (; n--;) delete r[t[n]]
            }
            void 0 !== t && !_.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !_.isEmptyObject(t)
        }
      };
      var X = new $,
        Q = new $,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

      function K(e, t, n) {
        var r, o;
        if (void 0 === n && 1 === e.nodeType)
          if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
              n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Y.test(o) ? JSON.parse(o) : o)
            } catch (e) {}
            Q.set(e, t, n)
          } else n = void 0;
        return n
      }
      _.extend({
        hasData: function (e) {
          return Q.hasData(e) || X.hasData(e)
        },
        data: function (e, t, n) {
          return Q.access(e, t, n)
        },
        removeData: function (e, t) {
          Q.remove(e, t)
        },
        _data: function (e, t, n) {
          return X.access(e, t, n)
        },
        _removeData: function (e, t) {
          X.remove(e, t)
        }
      }), _.fn.extend({
        data: function (n, e) {
          var t, r, o, i = this[0],
            a = i && i.attributes;
          if (void 0 !== n) return "object" == typeof n ? this.each(function () {
            Q.set(this, n)
          }) : R(this, function (e) {
            var t;
            return i && void 0 === e ? void 0 !== (t = Q.get(i, n)) || void 0 !== (t = K(i, n)) ? t : void 0 : void this.each(function () {
              Q.set(this, n, e)
            })
          }, null, e, 1 < arguments.length, null, !0);
          if (this.length && (o = Q.get(i), 1 === i.nodeType && !X.get(i, "hasDataAttrs"))) {
            for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = U(r.slice(5)), K(i, r, o[r]));
            X.set(i, "hasDataAttrs", !0)
          }
          return o
        },
        removeData: function (e) {
          return this.each(function () {
            Q.remove(this, e)
          })
        }
      }), _.extend({
        queue: function (e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = X.get(e, t), n && (!r || Array.isArray(n) ? r = X.access(e, t, _.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = _.queue(e, t),
            r = n.length,
            o = n.shift(),
            i = _._queueHooks(e, t);
          "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
            _.dequeue(e, t)
          }, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return X.get(e, n) || X.access(e, n, {
            empty: _.Callbacks("once memory").add(function () {
              X.remove(e, [t + "queue", n])
            })
          })
        }
      }), _.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? _.queue(this[0], t) : void 0 === n ? this : this.each(function () {
            var e = _.queue(this, t, n);
            _._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && _.dequeue(this, t)
          })
        },
        dequeue: function (e) {
          return this.each(function () {
            _.dequeue(this, e)
          })
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
          function n() {
            --o || i.resolveWith(a, [a])
          }
          var r, o = 1,
            i = _.Deferred(),
            a = this,
            s = this.length;
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(r = X.get(a[s], e + "queueHooks")) && r.empty && (o++, r.empty.add(n));
          return n(), i.promise(t)
        }
      });
      var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
        te = ["Top", "Right", "Bottom", "Left"],
        ne = A.documentElement,
        re = function (e) {
          return _.contains(e.ownerDocument, e)
        },
        oe = {
          composed: !0
        };
      ne.getRootNode && (re = function (e) {
        return _.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      });
      var ie = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === _.css(e, "display")
      };

      function ae(e, t, n, r) {
        var o, i, a = 20,
          s = r ? function () {
            return r.cur()
          } : function () {
            return _.css(e, t, "")
          },
          u = s(),
          l = n && n[3] || (_.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (_.cssNumber[t] || "px" !== l && +u) && ee.exec(_.css(e, t));
        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--;) _.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
          c *= 2, _.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
      }
      var se = {};

      function ue(e, t) {
        for (var n, r, o, i, a, s, u, l = [], c = 0, p = e.length; c < p; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = X.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ie(r) && (l[c] = (u = a = i = void 0, a = (o = r).ownerDocument, s = o.nodeName, (u = se[s]) || (i = a.body.appendChild(a.createElement(s)), u = _.css(i, "display"), i.parentNode.removeChild(i), "none" === u && (u = "block"), se[s] = u)))) : "none" !== n && (l[c] = "none", X.set(r, "display", n)));
        for (c = 0; c < p; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
      }
      _.fn.extend({
        show: function () {
          return ue(this, !0)
        },
        hide: function () {
          return ue(this)
        },
        toggle: function (e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            ie(this) ? _(this).show() : _(this).hide()
          })
        }
      });
      var le, ce, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i;
      le = A.createDocumentFragment().appendChild(A.createElement("div")), (ce = A.createElement("input")).setAttribute("type", "radio"), ce.setAttribute("checked", "checked"), ce.setAttribute("name", "t"), le.appendChild(ce), v.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked, le.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue, le.innerHTML = "<option></option>", v.option = !!le.lastChild;
      var he = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

      function me(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && k(e, t) ? _.merge([e], n) : n
      }

      function ge(e, t) {
        for (var n = 0, r = e.length; n < r; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
      }
      he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, v.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);
      var ye = /<|&#?\w+;/;

      function ve(e, t, n, r, o) {
        for (var i, a, s, u, l, c, p = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
          if ((i = e[f]) || 0 === i)
            if ("object" === w(i)) _.merge(d, i.nodeType ? [i] : i);
            else if (ye.test(i)) {
          for (a = a || p.appendChild(t.createElement("div")), s = (de.exec(i) || ["", ""])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + _.htmlPrefilter(i) + u[2], c = u[0]; c--;) a = a.lastChild;
          _.merge(d, a.childNodes), (a = p.firstChild).textContent = ""
        } else d.push(t.createTextNode(i));
        for (p.textContent = "", f = 0; i = d[f++];)
          if (r && -1 < _.inArray(i, r)) o && o.push(i);
          else if (l = re(i), a = me(p.appendChild(i), "script"), l && ge(a), n)
          for (c = 0; i = a[c++];) fe.test(i.type || "") && n.push(i);
        return p
      }
      var be = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;

      function Te() {
        return !0
      }

      function Ce() {
        return !1
      }

      function Ae(e, t) {
        return e === function () {
          try {
            return A.activeElement
          } catch (e) {}
        }() == ("focus" === t)
      }

      function _e(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
          for (s in "string" != typeof n && (r = r || n, n = void 0), t) _e(e, s, n, r, t[s], i);
          return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ce;
        else if (!o) return e;
        return 1 === i && (a = o, (o = function (e) {
          return _().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = _.guid++)), e.each(function () {
          _.event.add(this, t, o, r, n)
        })
      }

      function ke(e, o, i) {
        i ? (X.set(e, o, !1), _.event.add(e, o, {
          namespace: !1,
          handler: function (e) {
            var t, n, r = X.get(this, o);
            if (1 & e.isTrigger && this[o]) {
              if (r.length)(_.event.special[o] || {}).delegateType && e.stopPropagation();
              else if (r = s.call(arguments), X.set(this, o, r), t = i(this, o), this[o](), r !== (n = X.get(this, o)) || t ? X.set(this, o, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
            } else r.length && (X.set(this, o, {
              value: _.event.trigger(_.extend(r[0], _.Event.prototype), r.slice(1), this)
            }), e.stopImmediatePropagation())
          }
        })) : void 0 === X.get(e, o) && _.event.add(e, o, Te)
      }
      _.event = {
        global: {},
        add: function (t, e, n, r, o) {
          var i, a, s, u, l, c, p, d, f, h, m, g = X.get(t);
          if (G(t))
            for (n.handler && (n = (i = n).handler, o = i.selector), o && _.find.matchesSelector(ne, o), n.guid || (n.guid = _.guid++), (u = g.events) || (u = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function (e) {
                return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0
              }), l = (e = (e || "").match(P) || [""]).length; l--;) f = m = (s = we.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), f && (p = _.event.special[f] || {}, f = (o ? p.delegateType : p.bindType) || f, p = _.event.special[f] || {}, c = _.extend({
              type: f,
              origType: m,
              data: r,
              handler: n,
              guid: n.guid,
              selector: o,
              needsContext: o && _.expr.match.needsContext.test(o),
              namespace: h.join(".")
            }, i), (d = u[f]) || ((d = u[f] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(f, a)), p.add && (p.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), _.event.global[f] = !0)
        },
        remove: function (e, t, n, r, o) {
          var i, a, s, u, l, c, p, d, f, h, m, g = X.hasData(e) && X.get(e);
          if (g && (u = g.events)) {
            for (l = (t = (t || "").match(P) || [""]).length; l--;)
              if (f = m = (s = we.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), f) {
                for (p = _.event.special[f] || {}, d = u[f = (r ? p.delegateType : p.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) c = d[i], !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                a && !d.length && (p.teardown && !1 !== p.teardown.call(e, h, g.handle) || _.removeEvent(e, f, g.handle), delete u[f])
              } else
                for (f in u) _.event.remove(e, f + t[l], n, r, !0);
            _.isEmptyObject(u) && X.remove(e, "handle events")
          }
        },
        dispatch: function (e) {
          var t, n, r, o, i, a, s = new Array(arguments.length),
            u = _.event.fix(e),
            l = (X.get(this, "events") || Object.create(null))[u.type] || [],
            c = _.event.special[u.type] || {};
          for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
            for (a = _.event.handlers.call(this, u, l), t = 0;
              (o = a[t++]) && !u.isPropagationStopped();)
              for (u.currentTarget = o.elem, n = 0;
                (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i, u.data = i.data, void 0 !== (r = ((_.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, u), u.result
          }
        },
        handlers: function (e, t) {
          var n, r, o, i, a, s = [],
            u = t.delegateCount,
            l = e.target;
          if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
            for (; l !== this; l = l.parentNode || this)
              if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < _(o, this).index(l) : _.find(o, this, null, [l]).length), a[o] && i.push(r);
                i.length && s.push({
                  elem: l,
                  handlers: i
                })
              } return l = this, u < t.length && s.push({
            elem: l,
            handlers: t.slice(u)
          }), s
        },
        addProp: function (t, e) {
          Object.defineProperty(_.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: b(e) ? function () {
              if (this.originalEvent) return e(this.originalEvent)
            } : function () {
              if (this.originalEvent) return this.originalEvent[t]
            },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e
              })
            }
          })
        },
        fix: function (e) {
          return e[_.expando] ? e : new _.Event(e)
        },
        special: {
          load: {
            noBubble: !0
          },
          click: {
            setup: function (e) {
              var t = this || e;
              return pe.test(t.type) && t.click && k(t, "input") && ke(t, "click", Te), !1
            },
            trigger: function (e) {
              var t = this || e;
              return pe.test(t.type) && t.click && k(t, "input") && ke(t, "click"), !0
            },
            _default: function (e) {
              var t = e.target;
              return pe.test(t.type) && t.click && k(t, "input") && X.get(t, "click") || k(t, "a")
            }
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
          }
        }
      }, _.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
      }, _.Event = function (e, t) {
        if (!(this instanceof _.Event)) return new _.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
      }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
      }, _.each({
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
        code: !0,
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
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
      }, _.event.addProp), _.each({
        focus: "focusin",
        blur: "focusout"
      }, function (e, t) {
        _.event.special[e] = {
          setup: function () {
            return ke(this, e, Ae), !1
          },
          trigger: function () {
            return ke(this, e), !0
          },
          delegateType: t
        }
      }), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, o) {
        _.event.special[e] = {
          delegateType: o,
          bindType: o,
          handle: function (e) {
            var t, n = e.relatedTarget,
              r = e.handleObj;
            return n && (n === this || _.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
          }
        }
      }), _.fn.extend({
        on: function (e, t, n, r) {
          return _e(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
          return _e(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
          var r, o;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, _(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
            _.event.remove(this, e, n, t)
          });
          for (o in e) this.off(o, t, e[o]);
          return this
        }
      });
      var Me = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function Ne(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
      }

      function Ve(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
      }

      function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
      }

      function De(e, t) {
        var n, r, o, i, a, s;
        if (1 === t.nodeType) {
          if (X.hasData(e) && (s = X.get(e).events))
            for (o in X.remove(t, "handle events"), s)
              for (n = 0, r = s[o].length; n < r; n++) _.event.add(t, o, s[o][n]);
          Q.hasData(e) && (i = Q.access(e), a = _.extend({}, i), Q.set(t, a))
        }
      }

      function Pe(n, r, o, i) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
          p = n.length,
          d = p - 1,
          f = r[0],
          h = b(f);
        if (h || 1 < p && "string" == typeof f && !v.checkClone && Ee.test(f)) return n.each(function (e) {
          var t = n.eq(e);
          h && (r[0] = f.call(this, e, t.html())), Pe(t, r, o, i)
        });
        if (p && (t = (e = ve(r, n[0].ownerDocument, !1, n, i)).firstChild, 1 === e.childNodes.length && (e = t), t || i)) {
          for (s = (a = _.map(me(e, "script"), Ve)).length; c < p; c++) u = e, c !== d && (u = _.clone(u, !0, !0), s && _.merge(a, me(u, "script"))), o.call(n[c], u, c);
          if (s)
            for (l = a[a.length - 1].ownerDocument, _.map(a, Le), c = 0; c < s; c++) u = a[c], fe.test(u.type || "") && !X.access(u, "globalEval") && _.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? _._evalUrl && !u.noModule && _._evalUrl(u.src, {
              nonce: u.nonce || u.getAttribute("nonce")
            }, l) : x(u.textContent.replace(Se, ""), u, l))
        }
        return n
      }

      function He(e, t, n) {
        for (var r, o = t ? _.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || _.cleanData(me(r)), r.parentNode && (n && re(r) && ge(me(r, "script")), r.parentNode.removeChild(r));
        return e
      }
      _.extend({
        htmlPrefilter: function (e) {
          return e
        },
        clone: function (e, t, n) {
          var r, o, i, a, s, u, l, c = e.cloneNode(!0),
            p = re(e);
          if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
            for (a = me(c), r = 0, o = (i = me(e)).length; r < o; r++) s = i[r], u = a[r], "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
          if (t)
            if (n)
              for (i = i || me(e), a = a || me(c), r = 0, o = i.length; r < o; r++) De(i[r], a[r]);
            else De(e, c);
          return 0 < (a = me(c, "script")).length && ge(a, !p && me(e, "script")), c
        },
        cleanData: function (e) {
          for (var t, n, r, o = _.event.special, i = 0; void 0 !== (n = e[i]); i++)
            if (G(n)) {
              if (t = n[X.expando]) {
                if (t.events)
                  for (r in t.events) o[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                n[X.expando] = void 0
              }
              n[Q.expando] && (n[Q.expando] = void 0)
            }
        }
      }), _.fn.extend({
        detach: function (e) {
          return He(this, e, !0)
        },
        remove: function (e) {
          return He(this, e)
        },
        text: function (e) {
          return R(this, function (e) {
            return void 0 === e ? _.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
            })
          }, null, e, arguments.length)
        },
        append: function () {
          return Pe(this, arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
          })
        },
        prepend: function () {
          return Pe(this, arguments, function (e) {
            var t;
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Ne(this, e)).insertBefore(e, t.firstChild)
          })
        },
        before: function () {
          return Pe(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
          })
        },
        after: function () {
          return Pe(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(me(e, !1)), e.textContent = "");
          return this
        },
        clone: function (e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return _.clone(this, e, t)
          })
        },
        html: function (e) {
          return R(this, function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Me.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = _.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(me(t, !1)), t.innerHTML = e);
                t = 0
              } catch (e) {}
            }
            t && this.empty().append(e)
          }, null, e, arguments.length)
        },
        replaceWith: function () {
          var n = [];
          return Pe(this, arguments, function (e) {
            var t = this.parentNode;
            _.inArray(this, n) < 0 && (_.cleanData(me(this)), t && t.replaceChild(e, this))
          }, n)
        }
      }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, a) {
        _.fn[e] = function (e) {
          for (var t, n = [], r = _(e), o = r.length - 1, i = 0; i <= o; i++) t = i === o ? this : this.clone(!0), _(r[i])[a](t), u.apply(n, t.get());
          return this.pushStack(n)
        }
      });

      function Oe(e, t, n) {
        var r, o, i = {};
        for (o in t) i[o] = e.style[o], e.style[o] = t[o];
        for (o in r = n.call(e), t) e.style[o] = i[o];
        return r
      }
      var je, qe, Ie, Fe, Re, ze, Be, We, Ue = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        Ge = function (e) {
          var t = e.ownerDocument.defaultView;
          return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        $e = new RegExp(te.join("|"), "i");

      function Xe() {
        var e;
        We && (Be.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", We.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(Be).appendChild(We), e = C.getComputedStyle(We), je = "1%" !== e.top, ze = 12 === Qe(e.marginLeft), We.style.right = "60%", Fe = 36 === Qe(e.right), qe = 36 === Qe(e.width), We.style.position = "absolute", Ie = 12 === Qe(We.offsetWidth / 3), ne.removeChild(Be), We = null)
      }

      function Qe(e) {
        return Math.round(parseFloat(e))
      }

      function Ye(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || Ge(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || re(e) || (a = _.style(e, t)), !v.pixelBoxStyles() && Ue.test(a) && $e.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
      }

      function Je(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get
          }
        }
      }
      Be = A.createElement("div"), (We = A.createElement("div")).style && (We.style.backgroundClip = "content-box", We.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === We.style.backgroundClip, _.extend(v, {
        boxSizingReliable: function () {
          return Xe(), qe
        },
        pixelBoxStyles: function () {
          return Xe(), Fe
        },
        pixelPosition: function () {
          return Xe(), je
        },
        reliableMarginLeft: function () {
          return Xe(), ze
        },
        scrollboxSize: function () {
          return Xe(), Ie
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return null == Re && (e = A.createElement("table"), t = A.createElement("tr"), n = A.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", ne.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), Re = 3 < parseInt(r.height), ne.removeChild(e)), Re
        }
      }));
      var Ke = ["Webkit", "Moz", "ms"],
        Ze = A.createElement("div").style,
        et = {};

      function tt(e) {
        var t = _.cssProps[e] || et[e];
        return t || (e in Ze ? e : et[e] = function (e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--;)
            if ((e = Ke[n] + t) in Ze) return e
        }(e) || e)
      }
      var nt = /^(none|table(?!-c[ea]).+)/,
        rt = /^--/,
        ot = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        it = {
          letterSpacing: "0",
          fontWeight: "400"
        };

      function at(e, t, n) {
        var r = ee.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
      }

      function st(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += _.css(e, n + te[a], !0, o)), r ? ("content" === n && (u -= _.css(e, "padding" + te[a], !0, o)), "margin" !== n && (u -= _.css(e, "border" + te[a] + "Width", !0, o))) : (u += _.css(e, "padding" + te[a], !0, o), "padding" !== n ? u += _.css(e, "border" + te[a] + "Width", !0, o) : s += _.css(e, "border" + te[a] + "Width", !0, o));
        return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u
      }

      function ut(e, t, n) {
        var r = Ge(e),
          o = (!v.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, r),
          i = o,
          a = Ye(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ue.test(a)) {
          if (!n) return a;
          a = "auto"
        }
        return (!v.boxSizingReliable() && o || !v.reliableTrDimensions() && k(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === _.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === _.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + st(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
      }

      function lt(e, t, n, r, o) {
        return new lt.prototype.init(e, t, n, r, o)
      }
      _.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ye(e, "opacity");
                return "" === n ? "1" : n
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
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o, i, a, s = U(t),
              u = rt.test(t),
              l = e.style;
            if (u || (t = tt(s)), a = _.cssHooks[t] || _.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
            "string" === (i = typeof n) && (o = ee.exec(n)) && o[1] && (n = ae(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (_.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
          }
        },
        css: function (e, t, n, r) {
          var o, i, a, s = U(t);
          return rt.test(t) || (t = tt(s)), (a = _.cssHooks[t] || _.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ye(e, t, r)), "normal" === o && t in it && (o = it[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
      }), _.each(["height", "width"], function (e, u) {
        _.cssHooks[u] = {
          get: function (e, t, n) {
            if (t) return !nt.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, u, n) : Oe(e, ot, function () {
              return ut(e, u, n)
            })
          },
          set: function (e, t, n) {
            var r, o = Ge(e),
              i = !v.scrollboxSize() && "absolute" === o.position,
              a = (i || n) && "border-box" === _.css(e, "boxSizing", !1, o),
              s = n ? st(e, u, n, a, o) : 0;
            return a && i && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(o[u]) - st(e, u, "border", !1, o) - .5)), s && (r = ee.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = _.css(e, u)), at(0, t, s)
          }
        }
      }), _.cssHooks.marginLeft = Je(v.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - Oe(e, {
          marginLeft: 0
        }, function () {
          return e.getBoundingClientRect().left
        })) + "px"
      }), _.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (o, i) {
        _.cssHooks[o + i] = {
          expand: function (e) {
            for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + te[t] + i] = r[t] || r[t - 2] || r[0];
            return n
          }
        }, "margin" !== o && (_.cssHooks[o + i].set = at)
      }), _.fn.extend({
        css: function (e, t) {
          return R(this, function (e, t, n) {
            var r, o, i = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ge(e), o = t.length; a < o; a++) i[t[a]] = _.css(e, t[a], !1, r);
              return i
            }
            return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
          }, e, t, 1 < arguments.length)
        }
      }), (_.Tween = lt).prototype = {
        constructor: lt,
        init: function (e, t, n, r, o, i) {
          this.elem = e, this.prop = n, this.easing = o || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (_.cssNumber[n] ? "" : "px")
        },
        cur: function () {
          var e = lt.propHooks[this.prop];
          return e && e.get ? e.get(this) : lt.propHooks._default.get(this)
        },
        run: function (e) {
          var t, n = lt.propHooks[this.prop];
          return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : lt.propHooks._default.set(this), this
        }
      }, lt.prototype.init.prototype = lt.prototype, lt.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function (e) {
            _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !_.cssHooks[e.prop] && null == e.elem.style[tt(e.prop)] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
          }
        }
      }, lt.propHooks.scrollTop = lt.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      }, _.easing = {
        linear: function (e) {
          return e
        },
        swing: function (e) {
          return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
      }, _.fx = lt.prototype.init, _.fx.step = {};
      var ct, pt, dt, ft, ht = /^(?:toggle|show|hide)$/,
        mt = /queueHooks$/;

      function gt() {
        pt && (!1 === A.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(gt) : C.setTimeout(gt, _.fx.interval), _.fx.tick())
      }

      function yt() {
        return C.setTimeout(function () {
          ct = void 0
        }), ct = Date.now()
      }

      function vt(e, t) {
        var n, r = 0,
          o = {
            height: e
          };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = te[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
      }

      function bt(e, t, n) {
        for (var r, o = (xt.tweeners[t] || []).concat(xt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
          if (r = o[i].call(n, t, e)) return r
      }

      function xt(i, e, t) {
        var n, a, r = 0,
          o = xt.prefilters.length,
          s = _.Deferred().always(function () {
            delete u.elem
          }),
          u = function () {
            if (a) return !1;
            for (var e = ct || yt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, o = l.tweens.length; r < o; r++) l.tweens[r].run(n);
            return s.notifyWith(i, [l, n, t]), n < 1 && o ? t : (o || s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l]), !1)
          },
          l = s.promise({
            elem: i,
            props: _.extend({}, e),
            opts: _.extend(!0, {
              specialEasing: {},
              easing: _.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: ct || yt(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
              var n = _.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
              return l.tweens.push(n), n
            },
            stop: function (e) {
              var t = 0,
                n = e ? l.tweens.length : 0;
              if (a) return this;
              for (a = !0; t < n; t++) l.tweens[t].run(1);
              return e ? (s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l, e])) : s.rejectWith(i, [l, e]), this
            }
          }),
          c = l.props;
        for (! function (e, t) {
            var n, r, o, i, a;
            for (n in e)
              if (o = t[r = U(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = _.cssHooks[r]) && "expand" in a)
                for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
              else t[r] = o
          }(c, l.opts.specialEasing); r < o; r++)
          if (n = xt.prefilters[r].call(l, i, c, l.opts)) return b(n.stop) && (_._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return _.map(c, bt, l), b(l.opts.start) && l.opts.start.call(i, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), _.fx.timer(_.extend(u, {
          elem: i,
          anim: l,
          queue: l.opts.queue
        })), l
      }
      _.Animation = _.extend(xt, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return ae(n.elem, e, ee.exec(t), n), n
          }]
        },
        tweener: function (e, t) {
          for (var n, r = 0, o = (e = b(e) ? (t = e, ["*"]) : e.match(P)).length; r < o; r++) n = e[r], xt.tweeners[n] = xt.tweeners[n] || [], xt.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
          var r, o, i, a, s, u, l, c, p = "width" in t || "height" in t,
            d = this,
            f = {},
            h = e.style,
            m = e.nodeType && ie(e),
            g = X.get(e, "fxshow");
          for (r in n.queue || (null == (a = _._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
              a.unqueued || s()
            }), a.unqueued++, d.always(function () {
              d.always(function () {
                a.unqueued--, _.queue(e, "fx").length || a.empty.fire()
              })
            })), t)
            if (o = t[r], ht.test(o)) {
              if (delete t[r], i = i || "toggle" === o, o === (m ? "hide" : "show")) {
                if ("show" !== o || !g || void 0 === g[r]) continue;
                m = !0
              }
              f[r] = g && g[r] || _.style(e, r)
            } if ((u = !_.isEmptyObject(t)) || !_.isEmptyObject(f))
            for (r in p && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = g && g.display) && (l = X.get(e, "display")), "none" === (c = _.css(e, "display")) && (l ? c = l : (ue([e], !0), l = e.style.display || l, c = _.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === _.css(e, "float") && (u || (d.done(function () {
                h.display = l
              }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
              })), u = !1, f) u || (g ? "hidden" in g && (m = g.hidden) : g = X.access(e, "fxshow", {
              display: l
            }), i && (g.hidden = !m), m && ue([e], !0), d.done(function () {
              for (r in m || ue([e]), X.remove(e, "fxshow"), f) _.style(e, r, f[r])
            })), u = bt(m ? g[r] : 0, r, d), r in g || (g[r] = u.start, m && (u.end = u.start, u.start = 0))
        }],
        prefilter: function (e, t) {
          t ? xt.prefilters.unshift(e) : xt.prefilters.push(e)
        }
      }), _.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? _.extend({}, e) : {
          complete: n || !n && t || b(e) && e,
          duration: e,
          easing: n && t || t && !b(t) && t
        };
        return _.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in _.fx.speeds ? r.duration = _.fx.speeds[r.duration] : r.duration = _.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
          b(r.old) && r.old.call(this), r.queue && _.dequeue(this, r.queue)
        }, r
      }, _.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(ie).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, r)
        },
        animate: function (t, e, n, r) {
          function o() {
            var e = xt(this, _.extend({}, t), a);
            (i || X.get(this, "finish")) && e.stop(!0)
          }
          var i = _.isEmptyObject(t),
            a = _.speed(e, n, r);
          return o.finish = o, i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function (o, e, i) {
          function a(e) {
            var t = e.stop;
            delete e.stop, t(i)
          }
          return "string" != typeof o && (i = e, e = o, o = void 0), e && this.queue(o || "fx", []), this.each(function () {
            var e = !0,
              t = null != o && o + "queueHooks",
              n = _.timers,
              r = X.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else
              for (t in r) r[t] && r[t].stop && mt.test(t) && a(r[t]);
            for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(i), e = !1, n.splice(t, 1));
            !e && i || _.dequeue(this, o)
          })
        },
        finish: function (a) {
          return !1 !== a && (a = a || "fx"), this.each(function () {
            var e, t = X.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              o = _.timers,
              i = n ? n.length : 0;
            for (t.finish = !0, _.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < i; e++) n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish
          })
        }
      }), _.each(["toggle", "show", "hide"], function (e, r) {
        var o = _.fn[r];
        _.fn[r] = function (e, t, n) {
          return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(vt(r, !0), e, t, n)
        }
      }), _.each({
        slideDown: vt("show"),
        slideUp: vt("hide"),
        slideToggle: vt("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (e, r) {
        _.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n)
        }
      }), _.timers = [], _.fx.tick = function () {
        var e, t = 0,
          n = _.timers;
        for (ct = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || _.fx.stop(), ct = void 0
      }, _.fx.timer = function (e) {
        _.timers.push(e), _.fx.start()
      }, _.fx.interval = 13, _.fx.start = function () {
        pt || (pt = !0, gt())
      }, _.fx.stop = function () {
        pt = null
      }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, _.fn.delay = function (r, e) {
        return r = _.fx && _.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n)
          }
        })
      }, dt = A.createElement("input"), ft = A.createElement("select").appendChild(A.createElement("option")), dt.type = "checkbox", v.checkOn = "" !== dt.value, v.optSelected = ft.selected, (dt = A.createElement("input")).value = "t", dt.type = "radio", v.radioValue = "t" === dt.value;
      var wt, Tt = _.expr.attrHandle;
      _.fn.extend({
        attr: function (e, t) {
          return R(this, _.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
          return this.each(function () {
            _.removeAttr(this, e)
          })
        }
      }), _.extend({
        attr: function (e, t, n) {
          var r, o, i = e.nodeType;
          if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === i && _.isXMLDoc(e) || (o = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? wt : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : !(o && "get" in o && null !== (r = o.get(e, t))) && null == (r = _.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!v.radioValue && "radio" === t && k(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t
              }
            }
          }
        },
        removeAttr: function (e, t) {
          var n, r = 0,
            o = t && t.match(P);
          if (o && 1 === e.nodeType)
            for (; n = o[r++];) e.removeAttribute(n)
        }
      }), wt = {
        set: function (e, t, n) {
          return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
        }
      }, _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = Tt[t] || _.find.attr;
        Tt[t] = function (e, t, n) {
          var r, o, i = t.toLowerCase();
          return n || (o = Tt[i], Tt[i] = r, r = null != a(e, t, n) ? i : null, Tt[i] = o), r
        }
      });
      var Ct = /^(?:input|select|textarea|button)$/i,
        At = /^(?:a|area)$/i;

      function _t(e) {
        return (e.match(P) || []).join(" ")
      }

      function kt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
      }

      function Mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
      }
      _.fn.extend({
        prop: function (e, t) {
          return R(this, _.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[_.propFix[e] || e]
          })
        }
      }), _.extend({
        prop: function (e, t, n) {
          var r, o, i = e.nodeType;
          if (3 !== i && 8 !== i && 2 !== i) return 1 === i && _.isXMLDoc(e) || (t = _.propFix[t] || t, o = _.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = _.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : Ct.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), v.optSelected || (_.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
      }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        _.propFix[this.toLowerCase()] = this
      }), _.fn.extend({
        addClass: function (t) {
          var e, n, r, o, i, a, s, u = 0;
          if (b(t)) return this.each(function (e) {
            _(this).addClass(t.call(this, e, kt(this)))
          });
          if ((e = Mt(t)).length)
            for (; n = this[u++];)
              if (o = kt(n), r = 1 === n.nodeType && " " + _t(o) + " ") {
                for (a = 0; i = e[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                o !== (s = _t(r)) && n.setAttribute("class", s)
              } return this
        },
        removeClass: function (t) {
          var e, n, r, o, i, a, s, u = 0;
          if (b(t)) return this.each(function (e) {
            _(this).removeClass(t.call(this, e, kt(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ((e = Mt(t)).length)
            for (; n = this[u++];)
              if (o = kt(n), r = 1 === n.nodeType && " " + _t(o) + " ") {
                for (a = 0; i = e[a++];)
                  for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                o !== (s = _t(r)) && n.setAttribute("class", s)
              } return this
        },
        toggleClass: function (o, t) {
          var i = typeof o,
            a = "string" == i || Array.isArray(o);
          return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function (e) {
            _(this).toggleClass(o.call(this, e, kt(this), t), t)
          }) : this.each(function () {
            var e, t, n, r;
            if (a)
              for (t = 0, n = _(this), r = Mt(o); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
            else void 0 !== o && "boolean" != i || ((e = kt(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && X.get(this, "__className__") || ""))
          })
        },
        hasClass: function (e) {
          for (var t, n = 0, r = " " + e + " "; t = this[n++];)
            if (1 === t.nodeType && -1 < (" " + _t(kt(t)) + " ").indexOf(r)) return !0;
          return !1
        }
      });
      var Et = /\r/g;
      _.fn.extend({
        val: function (n) {
          var r, e, o, t = this[0];
          return arguments.length ? (o = b(n), this.each(function (e) {
            var t;
            1 === this.nodeType && (null == (t = o ? n.call(this, e, _(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = _.map(t, function (e) {
              return null == e ? "" : e + ""
            })), (r = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
          })) : t ? (r = _.valHooks[t.type] || _.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(Et, "") : null == e ? "" : e : void 0
        }
      }), _.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = _.find.attr(e, "value");
              return null != t ? t : _t(_.text(e))
            }
          },
          select: {
            get: function (e) {
              for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type, a = i ? null : [], s = i ? o + 1 : r.length, u = o < 0 ? s : i ? o : 0; u < s; u++)
                if (((n = r[u]).selected || u === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                  if (t = _(n).val(), i) return t;
                  a.push(t)
                } return a
            },
            set: function (e, t) {
              for (var n, r, o = e.options, i = _.makeArray(t), a = o.length; a--;)((r = o[a]).selected = -1 < _.inArray(_.valHooks.option.get(r), i)) && (n = !0);
              return n || (e.selectedIndex = -1), i
            }
          }
        }
      }), _.each(["radio", "checkbox"], function () {
        _.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t)) return e.checked = -1 < _.inArray(_(e).val(), t)
          }
        }, v.checkOn || (_.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value
        })
      }), v.focusin = "onfocusin" in C;

      function St(e) {
        e.stopPropagation()
      }
      var Nt = /^(?:focusinfocus|focusoutblur)$/;
      _.extend(_.event, {
        trigger: function (e, t, n, r) {
          var o, i, a, s, u, l, c, p = [n || A],
            d = y.call(e, "type") ? e.type : e,
            f = y.call(e, "namespace") ? e.namespace.split(".") : [],
            h = c = i = n = n || A;
          if (3 !== n.nodeType && 8 !== n.nodeType && !Nt.test(d + _.event.triggered) && (-1 < d.indexOf(".") && (d = (f = d.split(".")).shift(), f.sort()), s = d.indexOf(":") < 0 && "on" + d, (e = e[_.expando] ? e : new _.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : _.makeArray(t, [e]), l = _.event.special[d] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
            if (!r && !l.noBubble && !m(n)) {
              for (a = l.delegateType || d, Nt.test(a + d) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
              i === (n.ownerDocument || A) && p.push(i.defaultView || i.parentWindow || C)
            }
            for (o = 0;
              (h = p[o++]) && !e.isPropagationStopped();) c = h, e.type = 1 < o ? a : l.bindType || d, (u = (X.get(h, "events") || Object.create(null))[e.type] && X.get(h, "handle")) && u.apply(h, t), (u = s && h[s]) && u.apply && G(h) && (e.result = u.apply(h, t), !1 === e.result && e.preventDefault());
            return e.type = d, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(p.pop(), t) || !G(n) || s && b(n[d]) && !m(n) && ((i = n[s]) && (n[s] = null), _.event.triggered = d, e.isPropagationStopped() && c.addEventListener(d, St), n[d](), e.isPropagationStopped() && c.removeEventListener(d, St), _.event.triggered = void 0, i && (n[s] = i)), e.result
          }
        },
        simulate: function (e, t, n) {
          var r = _.extend(new _.Event, n, {
            type: e,
            isSimulated: !0
          });
          _.event.trigger(r, null, t)
        }
      }), _.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            _.event.trigger(e, t, this)
          })
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return _.event.trigger(e, t, n, !0)
        }
      }), v.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
      }, function (n, r) {
        function o(e) {
          _.event.simulate(r, e.target, _.event.fix(e))
        }
        _.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = X.access(e, r);
            t || e.addEventListener(n, o, !0), X.access(e, r, (t || 0) + 1)
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = X.access(e, r) - 1;
            t ? X.access(e, r, t) : (e.removeEventListener(n, o, !0), X.remove(e, r))
          }
        }
      });
      var Vt = C.location,
        Lt = {
          guid: Date.now()
        },
        Dt = /\?/;
      _.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
          t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + e), t
      };
      var Pt = /\[\]$/,
        Ht = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
      _.param = function (e, t) {
        function n(e, t) {
          var n = b(t) ? t() : t;
          o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var r, o = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function () {
          n(this.name, this.value)
        });
        else
          for (r in e) ! function n(r, e, o, i) {
            var t;
            if (Array.isArray(e)) _.each(e, function (e, t) {
              o || Pt.test(r) ? i(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, i)
            });
            else if (o || "object" !== w(e)) i(r, e);
            else
              for (t in e) n(r + "[" + t + "]", e[t], o, i)
          }(r, e[r], t, n);
        return o.join("&")
      }, _.fn.extend({
        serialize: function () {
          return _.param(this.serializeArray())
        },
        serializeArray: function () {
          return this.map(function () {
            var e = _.prop(this, "elements");
            return e ? _.makeArray(e) : this
          }).filter(function () {
            var e = this.type;
            return this.name && !_(this).is(":disabled") && jt.test(this.nodeName) && !Ot.test(e) && (this.checked || !pe.test(e))
          }).map(function (e, t) {
            var n = _(this).val();
            return null == n ? null : Array.isArray(n) ? _.map(n, function (e) {
              return {
                name: t.name,
                value: e.replace(Ht, "\r\n")
              }
            }) : {
              name: t.name,
              value: n.replace(Ht, "\r\n")
            }
          }).get()
        }
      });
      var qt = /%20/g,
        It = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        zt = /^(?:GET|HEAD)$/,
        Bt = /^\/\//,
        Wt = {},
        Ut = {},
        Gt = "*/".concat("*"),
        $t = A.createElement("a");

      function Xt(i) {
        return function (e, t) {
          "string" != typeof e && (t = e, e = "*");
          var n, r = 0,
            o = e.toLowerCase().match(P) || [];
          if (b(t))
            for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t)
        }
      }

      function Qt(t, o, i, a) {
        var s = {},
          u = t === Ut;

        function l(e) {
          var r;
          return s[e] = !0, _.each(t[e] || [], function (e, t) {
            var n = t(o, i, a);
            return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (o.dataTypes.unshift(n), l(n), !1)
          }), r
        }
        return l(o.dataTypes[0]) || !s["*"] && l("*")
      }

      function Yt(e, t) {
        var n, r, o = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r = r || {})[n] = t[n]);
        return r && _.extend(!0, e, r), e
      }
      $t.href = Vt.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Vt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Vt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Gt,
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
            "text xml": _.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function (e, t) {
          return t ? Yt(Yt(e, _.ajaxSettings), t) : Yt(_.ajaxSettings, e)
        },
        ajaxPrefilter: Xt(Wt),
        ajaxTransport: Xt(Ut),
        ajax: function (e, t) {
          "object" == typeof e && (t = e, e = void 0), t = t || {};
          var c, p, d, n, f, r, h, m, o, i, g = _.ajaxSetup({}, t),
            y = g.context || g,
            v = g.context && (y.nodeType || y.jquery) ? _(y) : _.event,
            b = _.Deferred(),
            x = _.Callbacks("once memory"),
            w = g.statusCode || {},
            a = {},
            s = {},
            u = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (h) {
                  if (!n)
                    for (n = {}; t = Rt.exec(d);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                  t = n[e.toLowerCase() + " "]
                }
                return null == t ? null : t.join(", ")
              },
              getAllResponseHeaders: function () {
                return h ? d : null
              },
              setRequestHeader: function (e, t) {
                return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
              },
              overrideMimeType: function (e) {
                return null == h && (g.mimeType = e), this
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (h) T.always(e[T.status]);
                  else
                    for (t in e) w[t] = [w[t], e[t]];
                return this
              },
              abort: function (e) {
                var t = e || u;
                return c && c.abort(t), l(0, t), this
              }
            };
          if (b.promise(T), g.url = ((e || g.url || Vt.href) + "").replace(Bt, Vt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(P) || [""], null == g.crossDomain) {
            r = A.createElement("a");
            try {
              r.href = g.url, r.href = r.href, g.crossDomain = $t.protocol + "//" + $t.host != r.protocol + "//" + r.host
            } catch (e) {
              g.crossDomain = !0
            }
          }
          if (g.data && g.processData && "string" != typeof g.data && (g.data = _.param(g.data, g.traditional)), Qt(Wt, g, t, T), h) return T;
          for (o in (m = _.event && g.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !zt.test(g.type), p = g.url.replace(It, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(qt, "+")) : (i = g.url.slice(p.length), g.data && (g.processData || "string" == typeof g.data) && (p += (Dt.test(p) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (p = p.replace(Ft, "$1"), i = (Dt.test(p) ? "&" : "?") + "_=" + Lt.guid++ + i), g.url = p + i), g.ifModified && (_.lastModified[p] && T.setRequestHeader("If-Modified-Since", _.lastModified[p]), _.etag[p] && T.setRequestHeader("If-None-Match", _.etag[p])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(o, g.headers[o]);
          if (g.beforeSend && (!1 === g.beforeSend.call(y, T, g) || h)) return T.abort();
          if (u = "abort", x.add(g.complete), T.done(g.success), T.fail(g.error), c = Qt(Ut, g, t, T)) {
            if (T.readyState = 1, m && v.trigger("ajaxSend", [T, g]), h) return T;
            g.async && 0 < g.timeout && (f = C.setTimeout(function () {
              T.abort("timeout")
            }, g.timeout));
            try {
              h = !1, c.send(a, l)
            } catch (e) {
              if (h) throw e;
              l(-1, e)
            }
          } else l(-1, "No Transport");

          function l(e, t, n, r) {
            var o, i, a, s, u, l = t;
            h || (h = !0, f && C.clearTimeout(f), c = void 0, d = r || "", T.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
              for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              if (r)
                for (o in s)
                  if (s[o] && s[o].test(r)) {
                    u.unshift(o);
                    break
                  } if (u[0] in n) i = u[0];
              else {
                for (o in n) {
                  if (!u[0] || e.converters[o + " " + u[0]]) {
                    i = o;
                    break
                  }
                  a = a || o
                }
                i = i || a
              }
              if (i) return i !== u[0] && u.unshift(i), n[i]
            }(g, T, n)), !o && -1 < _.inArray("script", g.dataTypes) && (g.converters["text script"] = function () {}), s = function (e, t, n, r) {
              var o, i, a, s, u, l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (i = c.shift(); i;)
                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                  if ("*" === i) i = u;
                  else if ("*" !== u && u !== i) {
                if (!(a = l[u + " " + i] || l["* " + i]))
                  for (o in l)
                    if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                      !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                      break
                    } if (!0 !== a)
                  if (a && e.throws) t = a(t);
                  else try {
                    t = a(t)
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: a ? e : "No conversion from " + u + " to " + i
                    }
                  }
              }
              return {
                state: "success",
                data: t
              }
            }(g, s, T, o), o ? (g.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (_.lastModified[p] = u), (u = T.getResponseHeader("etag")) && (_.etag[p] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, i = s.data, o = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", o ? b.resolveWith(y, [i, l, T]) : b.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, m && v.trigger(o ? "ajaxSuccess" : "ajaxError", [T, g, o ? i : a]), x.fireWith(y, [T, l]), m && (v.trigger("ajaxComplete", [T, g]), --_.active || _.event.trigger("ajaxStop")))
          }
          return T
        },
        getJSON: function (e, t, n) {
          return _.get(e, t, n, "json")
        },
        getScript: function (e, t) {
          return _.get(e, void 0, t, "script")
        }
      }), _.each(["get", "post"], function (e, o) {
        _[o] = function (e, t, n, r) {
          return b(t) && (r = r || n, n = t, t = void 0), _.ajax(_.extend({
            url: e,
            type: o,
            dataType: r,
            data: t,
            success: n
          }, _.isPlainObject(e) && e))
        }
      }), _.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
      }), _._evalUrl = function (e, t, n) {
        return _.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function () {}
          },
          dataFilter: function (e) {
            _.globalEval(e, t, n)
          }
        })
      }, _.fn.extend({
        wrapAll: function (e) {
          var t;
          return this[0] && (b(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e
          }).append(this)), this
        },
        wrapInner: function (n) {
          return b(n) ? this.each(function (e) {
            _(this).wrapInner(n.call(this, e))
          }) : this.each(function () {
            var e = _(this),
              t = e.contents();
            t.length ? t.wrapAll(n) : e.append(n)
          })
        },
        wrap: function (t) {
          var n = b(t);
          return this.each(function (e) {
            _(this).wrapAll(n ? t.call(this, e) : t)
          })
        },
        unwrap: function (e) {
          return this.parent(e).not("body").each(function () {
            _(this).replaceWith(this.childNodes)
          }), this
        }
      }), _.expr.pseudos.hidden = function (e) {
        return !_.expr.pseudos.visible(e)
      }, _.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      }, _.ajaxSettings.xhr = function () {
        try {
          return new C.XMLHttpRequest
        } catch (e) {}
      };
      var Jt = {
          0: 200,
          1223: 204
        },
        Kt = _.ajaxSettings.xhr();
      v.cors = !!Kt && "withCredentials" in Kt, v.ajax = Kt = !!Kt, _.ajaxTransport(function (o) {
        var i, a;
        if (v.cors || Kt && !o.crossDomain) return {
          send: function (e, t) {
            var n, r = o.xhr();
            if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
              for (n in o.xhrFields) r[n] = o.xhrFields[n];
            for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
            i = function (e) {
              return function () {
                i && (i = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Jt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                  binary: r.response
                } : {
                  text: r.responseText
                }, r.getAllResponseHeaders()))
              }
            }, r.onload = i(), a = r.onerror = r.ontimeout = i("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
              4 === r.readyState && C.setTimeout(function () {
                i && a()
              })
            }, i = i("abort");
            try {
              r.send(o.hasContent && o.data || null)
            } catch (e) {
              if (i) throw e
            }
          },
          abort: function () {
            i && i()
          }
        }
      }), _.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
      }), _.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function (e) {
            return _.globalEval(e), e
          }
        }
      }), _.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
      }), _.ajaxTransport("script", function (n) {
        var r, o;
        if (n.crossDomain || n.scriptAttrs) return {
          send: function (e, t) {
            r = _("<script>").attr(n.scriptAttrs || {}).prop({
              charset: n.scriptCharset,
              src: n.url
            }).on("load error", o = function (e) {
              r.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
            }), A.head.appendChild(r[0])
          },
          abort: function () {
            o && o()
          }
        }
      });
      var Zt, en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
      _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = en.pop() || _.expando + "_" + Lt.guid++;
          return this[e] = !0, e
        }
      }), _.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, o, i, a = !1 !== e.jsonp && (tn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(tn, "$1" + r) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
          return i || _.error(r + " was not called"), i[0]
        }, e.dataTypes[0] = "json", o = C[r], C[r] = function () {
          i = arguments
        }, n.always(function () {
          void 0 === o ? _(C).removeProp(r) : C[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, en.push(r)), i && b(o) && o(i[0]), i = o = void 0
        }), "script"
      }), v.createHTMLDocument = ((Zt = A.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Zt.childNodes.length), _.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = A.implementation.createHTMLDocument("")).createElement("base")).href = A.location.href, t.head.appendChild(r)) : t = A), i = !n && [], (o = M.exec(e)) ? [t.createElement(o[1])] : (o = ve([e], t, i), i && i.length && _(i).remove(), _.merge([], o.childNodes)));
        var r, o, i
      }, _.fn.load = function (e, t, n) {
        var r, o, i, a = this,
          s = e.indexOf(" ");
        return -1 < s && (r = _t(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && _.ajax({
          url: e,
          type: o || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          i = arguments, a.html(r ? _("<div>").append(_.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
          a.each(function () {
            n.apply(this, i || [e.responseText, t, e])
          })
        }), this
      }, _.expr.pseudos.animated = function (t) {
        return _.grep(_.timers, function (e) {
          return t === e.elem
        }).length
      }, _.offset = {
        setOffset: function (e, t, n) {
          var r, o, i, a, s, u, l = _.css(e, "position"),
            c = _(e),
            p = {};
          "static" === l && (e.style.position = "relative"), s = c.offset(), i = _.css(e, "top"), u = _.css(e, "left"), o = ("absolute" === l || "fixed" === l) && -1 < (i + u).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(i) || 0, parseFloat(u) || 0), b(t) && (t = t.call(e, n, _.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : ("number" == typeof p.top && (p.top += "px"), "number" == typeof p.left && (p.left += "px"), c.css(p))
        }
      }, _.fn.extend({
        offset: function (t) {
          if (arguments.length) return void 0 === t ? this : this.each(function (e) {
            _.offset.setOffset(this, t, e)
          });
          var e, n, r = this[0];
          return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
            top: e.top + n.pageYOffset,
            left: e.left + n.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0
        },
        position: function () {
          if (this[0]) {
            var e, t, n, r = this[0],
              o = {
                top: 0,
                left: 0
              };
            if ("fixed" === _.css(r, "position")) t = r.getBoundingClientRect();
            else {
              for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
              e && e !== r && 1 === e.nodeType && ((o = _(e).offset()).top += _.css(e, "borderTopWidth", !0), o.left += _.css(e, "borderLeftWidth", !0))
            }
            return {
              top: t.top - o.top - _.css(r, "marginTop", !0),
              left: t.left - o.left - _.css(r, "marginLeft", !0)
            }
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
            return e || ne
          })
        }
      }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (t, o) {
        var i = "pageYOffset" === o;
        _.fn[t] = function (e) {
          return R(this, function (e, t, n) {
            var r;
            return m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n ? r ? r[o] : e[t] : void(r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : e[t] = n)
          }, t, e, arguments.length)
        }
      }), _.each(["top", "left"], function (e, n) {
        _.cssHooks[n] = Je(v.pixelPosition, function (e, t) {
          if (t) return t = Ye(e, n), Ue.test(t) ? _(e).position()[n] + "px" : t
        })
      }), _.each({
        Height: "height",
        Width: "width"
      }, function (a, s) {
        _.each({
          padding: "inner" + a,
          content: s,
          "": "outer" + a
        }, function (r, i) {
          _.fn[i] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              o = r || (!0 === e || !0 === t ? "margin" : "border");
            return R(this, function (e, t, n) {
              var r;
              return m(e) ? 0 === i.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? _.css(e, t, o) : _.style(e, t, n, o)
            }, s, n ? e : void 0, n)
          }
        })
      }), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        _.fn[t] = function (e) {
          return this.on(t, e)
        }
      }), _.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
          return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e)
        }
      }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        _.fn[n] = function (e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
      });
      var nn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      _.proxy = function (e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = s.call(arguments, 2), (o = function () {
          return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || _.guid++, o
      }, _.holdReady = function (e) {
        e ? _.readyWait++ : _.ready(!0)
      }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = k, _.isFunction = b, _.isWindow = m, _.camelCase = U, _.type = w, _.now = Date.now, _.isNumeric = function (e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
      }, _.trim = function (e) {
        return null == e ? "" : (e + "").replace(nn, "")
      }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return _
      });
      var rn = C.jQuery,
        on = C.$;
      return _.noConflict = function (e) {
        return C.$ === _ && (C.$ = on), e && C.jQuery === _ && (C.jQuery = rn), _
      }, void 0 === e && (C.jQuery = C.$ = _), _
    })
  }, {}],
  5: [function (e, t, n) {
    var r, o, i = t.exports = {};

    function a() {
      throw new Error("setTimeout has not been defined")
    }

    function s() {
      throw new Error("clearTimeout has not been defined")
    }

    function u(t) {
      if (r === setTimeout) return setTimeout(t, 0);
      if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
      try {
        return r(t, 0)
      } catch (e) {
        try {
          return r.call(null, t, 0)
        } catch (e) {
          return r.call(this, t, 0)
        }
      }
    }! function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : a
      } catch (e) {
        r = a
      }
      try {
        o = "function" == typeof clearTimeout ? clearTimeout : s
      } catch (e) {
        o = s
      }
    }();
    var l, c = [],
      p = !1,
      d = -1;

    function f() {
      p && l && (p = !1, l.length ? c = l.concat(c) : d = -1, c.length && h())
    }

    function h() {
      if (!p) {
        var e = u(f);
        p = !0;
        for (var t = c.length; t;) {
          for (l = c, c = []; ++d < t;) l && l[d].run();
          d = -1, t = c.length
        }
        l = null, p = !1,
          function (t) {
            if (o === clearTimeout) return clearTimeout(t);
            if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(t);
            try {
              o(t)
            } catch (e) {
              try {
                return o.call(null, t)
              } catch (e) {
                return o.call(this, t)
              }
            }
          }(e)
      }
    }

    function m(e, t) {
      this.fun = e, this.array = t
    }

    function g() {}
    i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (1 < arguments.length)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new m(e, t)), 1 !== c.length || p || u(h)
    }, m.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function (e) {
      return []
    }, i.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, i.cwd = function () {
      return "/"
    }, i.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, i.umask = function () {
      return 0
    }
  }, {}],
  6: [function (e, n, r) {
    (function (e) {
      ! function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof r ? n.exports = t() : e.textFit = t()
      }("object" == typeof e ? e : this, function () {
        "use strict";
        var a = {
          alignVert: !1,
          alignHoriz: !1,
          multiLine: !1,
          detectMultiLine: !0,
          minFontSize: 6,
          maxFontSize: 80,
          reProcess: !0,
          widthOnly: !1,
          alignVertWithFlexbox: !1
        };
        return function (e, t) {
          t = t || {};
          var n = {};
          for (var r in a) t.hasOwnProperty(r) ? n[r] = t[r] : n[r] = a[r];
          "function" == typeof e.toArray && (e = e.toArray());
          var o = Object.prototype.toString.call(e);
          "[object Array]" !== o && "[object NodeList]" !== o && "[object HTMLCollection]" !== o && (e = [e]);
          for (var i = 0; i < e.length; i++) ! function (e, t) {
            if (! function (e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
              }(e) || !t.reProcess && e.getAttribute("textFitted")) return;
            t.reProcess || e.setAttribute("textFitted", 1);
            var n, r, o, i, a, s, u;
            if (o = e.innerHTML, i = function (e) {
                var t = window.getComputedStyle(e, null);
                return e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10)
              }(e), r = function (e) {
                var t = window.getComputedStyle(e, null);
                return e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10)
              }(e), !i || !t.widthOnly && !r) throw t.widthOnly ? new Error("Set a static width on the target element " + e.outerHTML + " before using textFit!") : new Error("Set a static height and width on the target element " + e.outerHTML + " before using textFit!"); - 1 === o.indexOf("textFitted") ? ((n = document.createElement("span")).className = "textFitted", n.style.display = "inline-block", n.innerHTML = o, e.innerHTML = "", e.appendChild(n)) : d(n = e.querySelector("span.textFitted"), "textFitAlignVert") && (n.className = n.className.replace("textFitAlignVert", ""), n.style.height = "", e.className.replace("textFitAlignVertFlex", ""));
            t.alignHoriz && (e.style["text-align"] = "center", n.style["text-align"] = "center");
            var l = t.multiLine;
            t.detectMultiLine && !l && n.scrollHeight >= 2 * parseInt(window.getComputedStyle(n)["font-size"], 10) && (l = !0);
            l || (e.style["white-space"] = "nowrap");
            a = t.minFontSize, u = t.maxFontSize;
            var c = a;
            for (; a <= u;) s = u + a >> 1, n.style.fontSize = s + "px", n.scrollWidth <= i && (t.widthOnly || n.scrollHeight <= r) ? a = 1 + (c = s) : u = s - 1;
            n.style.fontSize != c + "px" && (n.style.fontSize = c + "px"); {
              var p;
              t.alignVert && (function () {
                if (document.getElementById("textFitStyleSheet")) return;
                var e = [".textFitAlignVert{", "position: absolute;", "top: 0; right: 0; bottom: 0; left: 0;", "margin: auto;", "display: flex;", "justify-content: center;", "flex-direction: column;", "}", ".textFitAlignVertFlex{", "display: flex;", "}", ".textFitAlignVertFlex .textFitAlignVert{", "position: static;", "}"].join(""),
                  t = document.createElement("style");
                t.type = "text/css", t.id = "textFitStyleSheet", t.innerHTML = e, document.body.appendChild(t)
              }(), p = n.scrollHeight, "static" === window.getComputedStyle(e).position && (e.style.position = "relative"), d(n, "textFitAlignVert") || (n.className = n.className + " textFitAlignVert"), n.style.height = p + "px", t.alignVertWithFlexbox && !d(e, "textFitAlignVertFlex") && (e.className = e.className + " textFitAlignVertFlex"))
            }
          }(e[i], n)
        };

        function d(e, t) {
          return -1 < (" " + e.className + " ").indexOf(" " + t + " ")
        }
      })
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
  }, {}],
  7: [function (e, t, n) {
    "use strict";

    function r() {
      o = l, this.select = function (e) {
        e == l.id ? o = l : e == u.id ? o = u : e == s.id ? o = s : e == a.id ? o = a : e == i.id && (o = i)
      }, this.list = function () {
        var e = [];
        return e.push([l.id, l.name, l.description]), e.push([u.id, u.name, u.description]), e.push([i.id, i.name, i.description]), e
      }
    }
    var o, i = e("./compensators/cp4"),
      a = e("./compensators/cp3"),
      s = e("./compensators/cp2"),
      u = e("./compensators/cp1"),
      l = e("./compensators/cp0");
    r.prototype.getFields = function () {
      return o.fields
    }, r.prototype.getId = function () {
      return o.id
    }, r.prototype.getName = function () {
      return o.name
    }, r.prototype.getDescription = function () {
      return o.description
    }, r.prototype.convert = function (e) {
      return o.convert(e)
    }, r.prototype.compensate = function (e) {
      return o.compensate(e)
    }, t.exports = new r
  }, {
    "./compensators/cp0": 8,
    "./compensators/cp1": 9,
    "./compensators/cp2": 10,
    "./compensators/cp3": 11,
    "./compensators/cp4": 12
  }],
  8: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "C0", this.name = "None", this.description = "No conversion applied to the data", this.fields = ""
    }
    r.prototype.convert = function (e) {
      return e
    }, r.prototype.compensate = function (e) {
      return e
    }, t.exports = new r
  }, {}],
  9: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "C1", this.name = "AQandU", this.description = "Courtesy of the University of Utah, conversion factors from their <a href='http://www.aqandu.org/airu_sensor#calibrationSection' target='_blank'>study of the PA sensors</a> during winter in Salt Lake City. <a href='http://aqandu.org' target='_blank'>Visit their web site</a>.<code style='font-size: 8px;line-height: 0.8em;'><br>PM2.5 (Âµg/mÂ³) = 0.778 x PA + 2.65</code>", this.fields = ""
    }
    r.prototype.convert = function (e) {
      return Math.round(.778 * e + 2.65)
    }, r.prototype.compensate = function (e) {
      e.pm2_5 && (e.pm2_5 = this.convert(e.pm2_5)), e.pm_0 && (e.pm_0 = this.convert(e.pm_0)), e.pm_1 && (e.pm_1 = this.convert(e.pm_1)), e.pm_2 && (e.pm_2 = this.convert(e.pm_2)), e.pm_3 && (e.pm_3 = this.convert(e.pm_3)), e.pm_4 && (e.pm_4 = this.convert(e.pm_4)), e.pm_5 && (e.pm_5 = this.convert(e.pm_5)), e.pm_6 && (e.pm_6 = this.convert(e.pm_6))
    }, t.exports = new r
  }, {}],
  10: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "C2", this.name = "PCPW", this.description = "Courtesy of Polk County Public Works, a conversion factor based on their study of PA sensors.<code style='font-size: 8px;line-height: 0.8em;'><br>PM2.5 (Âµg/mÂ³) = 0.4456 x PA + 1.6103</code>", this.fields = ""
    }
    r.prototype.compensate = function (e) {}, t.exports = new r
  }, {}],
  11: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "C3", this.name = "Cp3", this.description = "An attempt to compensate readings", this.fields = ""
    }
    r.prototype.compensate = function (e) {}, t.exports = new r
  }, {}],
  12: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "C4", this.name = "LRAPA", this.description = "Courtesy of the Lane Regional Air Protection Agency, conversion factors from their <a href='https://www.lrapa.org/DocumentCenter/View/4147/PurpleAir-Correction-Summary' target='_blank'>study of the PA sensors</a>. <a href=\"http://www.lrapa.org/\" target=\"_blank\">Visit their web site</a>.<code style='font-size: 8px;line-height: 0.8em;'><br>0 - 65 Âµg/mÂ³ range:<br>LRAPA PM2.5 (Âµg/mÂ³) = 0.5 x PA (PM2.5 CF=ATM) â€“ 0.66</code>", this.fields = "NONE"
    }
    r.prototype.convert = function (e) {
      var t = Math.round(.5 * e - .66);
      return t < 0 && (t = 0), t
    }, r.prototype.compensate = function (e) {
      e.pm2_5 && (e.pm2_5 = this.convert(e.pm2_5)), e.pm_0 && (e.pm_0 = this.convert(e.pm_0)), e.pm_1 && (e.pm_1 = this.convert(e.pm_1)), e.pm_2 && (e.pm_2 = this.convert(e.pm_2)), e.pm_3 && (e.pm_3 = this.convert(e.pm_3)), e.pm_4 && (e.pm_4 = this.convert(e.pm_4)), e.pm_5 && (e.pm_5 = this.convert(e.pm_5)), e.pm_6 && (e.pm_6 = this.convert(e.pm_6))
    }, t.exports = new r
  }, {}],
  13: [function (e, t, n) {
    "use strict";
    e("./modules/common");
    var $, X, Q = e("./utils"),
      r = e("./modules/pm25"),
      o = e("./modules/pm1"),
      i = e("./modules/particles_0_3"),
      a = e("./modules/particles_0_5"),
      s = e("./modules/particles_1_0"),
      u = e("./modules/particles_2_5"),
      l = e("./modules/particles_5_0"),
      c = e("./modules/particles_10"),
      p = e("./modules/aqi"),
      d = e("./modules/imeca"),
      f = e("./modules/aireysalud"),
      h = e("./modules/aqhi"),
      m = e("./modules/pm10"),
      g = e("./modules/pm10aqi"),
      y = e("./modules/temperature"),
      v = e("./modules/temperature_c"),
      b = e("./modules/temperature_raw"),
      x = e("./modules/humidity"),
      w = e("./modules/humidity_raw"),
      T = e("./modules/humidex"),
      C = e("./modules/humidex_f"),
      A = e("./modules/village_green"),
      _ = e("./modules/ozone"),
      k = e("./modules/voc"),
      M = e("./modules/pressure"),
      E = e("./modules/AbsHumidity"),
      S = new p,
      N = new d,
      V = new f,
      L = new h,
      D = new r,
      P = new m,
      H = new o,
      O = new i,
      j = new a,
      q = new s,
      I = new u,
      F = new l,
      R = new c,
      z = new g,
      B = new y,
      W = new v,
      U = new b,
      G = new x,
      Y = new w,
      J = new T,
      K = new C,
      Z = new E,
      ee = new A,
      te = new _,
      ne = new k,
      re = new M,
      oe = e("./compensatorSelector");

    function ie(e, t, n) {
      var r = document.createElement("span");
      r.setAttribute("class", "lg-container");
      var o = document.createElement("input");
      o.setAttribute("id", e), n && o.setAttribute("checked", !0), o.setAttribute("type", "checkbox");
      var i = document.createElement("label");
      i.setAttribute("for", e), i.innerHTML = t;
      var a = document.createElement("span");
      return a.setAttribute("class", e + "-container"), a.appendChild(o), r.appendChild(a), r.appendChild(i), r
    }
    t.exports = function (e, t) {
      this.getLegend = function (e, t, n, r, o, i, a, s, u) {
        var l = document.createElement("div");
        l.setAttribute("id", "paControls"), l.setAttribute("class", "clearfix");
        var c = document.createElement("div");
        c.setAttribute("class", "legendTopContainer");
        var p = document.createElement("span");
        p.setAttribute("class", "listtitle"), p.textContent = "Map Data Layer:", c.appendChild(p);
        var d = document.createElement("span"),
          f = document.createElement("span"),
          h = "<p><strong>The following data layers are available to view on the PurpleAir map:</strong>";
        f.setAttribute("class", "pa-tooltiptext"), d.setAttribute("class", "pa-tooltip clearfix"), d.textContent = "?", d.appendChild(f), c.appendChild(d), l.appendChild(c);
        var m = document.createElement("div");
        m.setAttribute("class", "legendListContainer");
        var g = document.createElement("select");
        g.setAttribute("id", "paStandard");
        var y = this.list(u);
        for (var v in y) {
          var b = new Option(y[v][1], y[v][0]);
          this.getId() == y[v][0] && (b.selected = !0), g.appendChild(b), h += "<p><strong>" + y[v][1] + "</strong>", y[v][2] && (h += "<br>" + y[v][2])
        }
        f.innerHTML = "<div style='position:relative;height:100%;'>" + h + "</div>", m.appendChild(g), this.getDescription() && (document.createElement("div").innerHTML = this.getDescription()), l.appendChild(m);
        var x = document.createElement("span");
        x.setAttribute("class", "rightControl");
        var w = document.createElement("span");
        w.setAttribute("class", "convtitle"), w.textContent = "Conversion:", x.appendChild(w);
        var T = oe.list(),
          C = "<p><strong>Conversions help accomodate different types of pollution with different particle densities.</strong><br>For the same reason that wood floats and rocks sink in water, different particles have different densities - for example wild fire smoke vs road dust in the air. This is why a conversion may be needed when calculating the mass of any combination of particulates derived from particle counts.",
          A = document.createElement("select");
        for (var v in A.setAttribute("id", "paCompensate"), T) {
          b = new Option(T[v][1], T[v][0]);
          r == T[v][0] && (oe.select(T[v][0]), b.selected = !0, $ = 0 < v ? T[v] : null), A.appendChild(b), C += "<p><strong>" + T[v][1], T[v][2] && (C += ":</strong> " + T[v][2])
        }
        var _ = document.createElement("span"),
          k = document.createElement("span");
        k.innerHTML = "<div style='position:relative;height:100%;'>" + C + "</div>", k.setAttribute("class", "pa-tooltiptext"), _.setAttribute("class", "pa-tooltip clearfix"), _.textContent = "?", _.appendChild(k), x.appendChild(_);
        var M = document.createElement("button");
        M.setAttribute("id", "paLegendHide"), M.setAttribute("class", "clearfix"), M.setAttribute("style", "float:right;"), M.setAttribute("onclick", "document.getElementById('paLegendShow').style.display='block';document.getElementById('paLegendContainer').style.display='none';"), M.innerText = "X", x.appendChild(M), m.appendChild(A), c.appendChild(x), e.appendChild(l);
        var E = document.createElement("div");
        E.setAttribute("id", "layerTools"), E.setAttribute("class", "layerTools");
        var S = document.createElement("select");
        S.setAttribute("id", "paBaseLayers");
        var N = [
          ["standard", "Standard"],
          ["satellite", "Satellite"],
          ["topo", "Topographic"],
          ["dark", "Dark"]
        ];
        for (var v in N) {
          b = new Option(N[v][1], N[v][0]);
          t == N[v][0] && (b.selected = !0), S.appendChild(b)
        }
        E.appendChild(S);
        var V = document.createElement("select");
        V.setAttribute("id", "paAverages");
        var L = [
          [0, "Show Realtime"],
          [10, "10 Minute Average"],
          [30, "30 Minute Average"],
          [60, "One Hour Average"],
          [1440, "One Day Average"],
          [10080, "One Week Average"]
        ];
        for (var v in L) {
          b = new Option(L[v][1], L[v][0]);
          n == L[v][0] && (b.selected = !0), V.appendChild(b)
        }
        E.appendChild(V), e.appendChild(E);
        var D = document.createElement("div");
        D.setAttribute("id", "paLegend"), D.setAttribute("class", "clearfix");
        var P = document.createElement("div");
        P.setAttribute("id", "paLabels"), P.setAttribute("class", "clearfix");
        for (var H = Math.floor(100 / X.bp.length), v = 0; v < X.bp.length; v++) {
          var O = document.createElement("span");
          O.setAttribute("class", "legend-tooltip");
          var j = [255, 0, 255];
          v < X.colors.length && (j = X.colors[v]);
          var q = j;
          0 < v && v + 1 < X.colors.length && (q = X.colors[v + 1]);
          var I, F = "rgba(" + j[0] + "," + j[1] + "," + j[2] + ",1.0)",
            R = "rgba(" + q[0] + "," + q[1] + "," + q[2] + ",1.0)";
          O.setAttribute("style", "width:" + H + "%;background-image: linear-gradient(to right, " + F + ", " + R + ");"), X.textValues && X.textValues.length - 1 >= v && ((I = document.createElement("span")).innerHTML = "<div style='position:relative;height:100%;'>" + X.textValues[v] + "</div>", I.setAttribute("class", "legend-tooltiptext"), O.appendChild(I)), D.appendChild(O);
          var z = document.createElement("label"),
            B = Q.getTextColorContrasted(F);
          z.setAttribute("style", "width:" + H + "%;border-left:1px solid " + B + ";color:" + B + ";background-color: " + F + ";");
          Math.floor(X.bp[v]);
          var W = "function" == typeof X.getLegendLabels ? X.getLegendLabels(v) : X.bp[v];
          1e3 <= parseInt(W) && (W = Math.round(W / 100) / 10 + "k"), v == X.bp.length - 1 && (W += "+"), 0 < v ? (z.setAttribute("class", "label-marked"), z.innerHTML = W) : (z.setAttribute("class", "label-unmarked"), z.innerHTML = "n/a"), P.appendChild(z)
        }
        e.appendChild(D), e.appendChild(P);
        var U = document.createElement("div");
        U.setAttribute("id", "paLayers"), U.setAttribute("class", "clearfix"), U.appendChild(ie("outside", "Outside<br>Sensors", i)), U.appendChild(ie("inside", "Inside<br>Sensors", a)), U.appendChild(ie("mine", "Show My<br>Sensors", s)), U.appendChild(ie("averages", "Averages<br>as Rings", o)), e.appendChild(U);
        var G = document.createElement("div");
        G.setAttribute("id", "timeStamp"), G.setAttribute("class", "timeStamp"), G.innerText = "Loading...", e.appendChild(G)
      }, this.list = function (e) {
        var t = [];
        return t.push([S.id, S.name, S.description]), t.push([z.id, z.name, z.description]), t.push([ee.id, ee.name, ee.description]), t.push([L.id, L.name, L.description]), t.push([N.id, N.name, N.description]), t.push([V.id, V.name, V.description]), t.push([J.id, J.name, J.description]), t.push([K.id, K.name, K.description]), t.push([B.id, B.name, B.description]), t.push([W.id, W.name, W.description]), t.push([G.id, G.name, G.description]), e && (t.push([Z.id, Z.name, Z.description]), t.push([re.id, re.name, re.description]), t.push([ne.id, ne.name, ne.description]), t.push([te.id, te.name, te.description])), t.push(["", "----------------------"]), t.push([H.id, H.name, H.description]), t.push([D.id, D.name, D.description]), t.push([P.id, P.name, P.description]), t.push([O.id, O.name, O.description]), t.push([j.id, j.name, j.description]), t.push([q.id, q.name, q.description]), t.push([I.id, I.name, I.description]), t.push([F.id, F.name, F.description]), t.push([R.id, R.name, R.description]), t
      }, this.select = function (e, t) {
        if (X = e == S.id ? S : e == D.id ? D : e == N.id ? N : e == V.id ? V : e == L.id ? L : e == H.id ? H : e == ee.id ? ee : e == P.id ? P : e == z.id ? z : e == J.id ? J : e == K.id ? K : e == B.id ? B : e == W.id ? W : e == U.id ? U : e == G.id ? G : e == Y.id ? Y : e == Z.id ? Z : e == O.id ? O : e == j.id ? j : e == q.id ? q : e == I.id ? I : e == F.id ? F : e == R.id ? R : e == te.id ? te : e == ne.id ? ne : e == re.id ? re : S, t) {
          var n = oe.list();
          for (var r in n) t == n[r][0] && (oe.select(n[r][0]), $ = 0 < r ? n[r] : null)
        }
      }, this.getTextValueExtended = function (e) {
        return "function" == typeof X.getTextValueExtended ? X.getTextValueExtended(e) : e
      }, this.hasAverages = function () {
        return "function" == typeof X.hasAverages && X.hasAverages()
      }, this.getAverageText = function (e) {
        return "function" == typeof X.getAverageText ? X.getAverageText(e) : "Real Time"
      }, this.getTextValue = function (e) {
        return X.getTextValue(e)
      }, this.compensate = function (e) {
        oe.compensate(e)
      }, this.convert = function (e, t, n) {
        return X.convert(e, t, oe.convert, n)
      }, this.getValue = function (e, t, n, r) {
        return X.getValue(e, t, n, r)
      }, this.getBp = function () {
        return X.bp
      }, this.getColorsArray = function () {
        var e = [];
        for (var t in X.colors) e.push("rgb(" + X.colors[t][0] + "," + X.colors[t][1] + "," + X.colors[t][2] + ")");
        return e
      }, this.getColors = function () {
        return X.colors
      }, this.getValueColor = function (e, t) {
        return X.getValueColor(e, t)
      }, this.getValueColors = function (e, t) {
        return X.getValueColors(e, t)
      }, this.getValueText = function (e) {
        return X.getValueText(e)
      }, this.getDescription = function () {
        return X.description
      }, this.getId = function () {
        return X.id
      }, this.getName = function () {
        return X.name
      }, this.getUnits = function () {
        return X.units
      }, this.getConversionName = function () {
        return $ ? $[1] : null
      }, this.getFields = function (e, t) {
        var n = "";
        return oe && "function" == typeof oe.getFields && (n = oe.getFields(t)), X && "function" == typeof X.getFields ? [X.getFields(e, t), n] : null
      }, e && t && this.select(e, t)
    }
  }, {
    "./compensatorSelector": 7,
    "./modules/AbsHumidity": 14,
    "./modules/aireysalud": 15,
    "./modules/aqhi": 16,
    "./modules/aqi": 17,
    "./modules/common": 18,
    "./modules/humidex": 19,
    "./modules/humidex_f": 20,
    "./modules/humidity": 21,
    "./modules/humidity_raw": 22,
    "./modules/imeca": 23,
    "./modules/ozone": 24,
    "./modules/particles_0_3": 25,
    "./modules/particles_0_5": 26,
    "./modules/particles_10": 27,
    "./modules/particles_1_0": 28,
    "./modules/particles_2_5": 29,
    "./modules/particles_5_0": 30,
    "./modules/pm1": 31,
    "./modules/pm10": 32,
    "./modules/pm10aqi": 33,
    "./modules/pm25": 34,
    "./modules/pressure": 35,
    "./modules/temperature": 36,
    "./modules/temperature_c": 37,
    "./modules/temperature_raw": 38,
    "./modules/village_green": 39,
    "./modules/voc": 40,
    "./utils": 41
  }],
  14: [function (e, t, n) {
    "use strict";
    var r = e("./common");

    function o() {
      this.id = "ABSHUMIDITY", this.name = "Absolute Humidity (g/mÂ³)", this.description = "Absolute humidity is the measure of water vapor (moisture) in the air, regardless of temperature expressed as grams of moisture per cubic meter of air (g/m3).", this.units = "g/mÂ³", this.textValues = ["No current data"]
    }
    o.prototype.bp = [-1, 0, 5, 9, 10, 25, 30], o.prototype.colors = [
      [150, 150, 150],
      [234, 51, 36],
      [239, 133, 51],
      [255, 255, 85],
      [104, 225, 67],
      [52, 187, 142],
      [49, 121, 187]
    ], o.prototype.getFields = function (e) {
      return "temperature,humidity"
    }, o.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, o.prototype.convert = function (e, t) {
      console.log(Math.round(r.getAbsHumidity(75.4, 59.6)));
      var n = parseInt(t) + r.humidityOffset;
      return 100 < n && (n = 100), Math.round(r.getAbsHumidity(parseInt(e) + r.temperatureOffset, n))
    }, o.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > r.expires || null == e.temp ? this.bp[0] : this.getVal(e)
    }, o.prototype.getValueColor = function (e, t) {
      return r.getValueColor(this.bp, this.colors, e, t)
    }, o.prototype.getValueColors = function (e, t) {
      return r.getValueColors(this.bp, this.colors, e, t)
    }, o.prototype.getValueText = function (e) {
      return r.getValueText(this.bp, this.textValues, e)
    }, o.prototype.getVal = function (e) {
      if (null == e.h || null == e.temp) return this.bp[0];
      var t = e.h + r.humidityOffset;
      return 100 < t && (t = 100), Math.round(r.getAbsHumidity(e.temp + r.temperatureOffset, t))
    }, t.exports = o
  }, {
    "./common": 18
  }],
  15: [function (e, t, n) {
    "use strict";
    e("./common");

    function r() {
      this.id = "AIREYSALUD", this.name = "Ãndice de Aire y Salud PM.2.5", this.description = "El nuevo Ãndice de Aire y Salud relaciona la concentraciÃ³n de cada contaminante criterio con una categorÃ­a de calidad del aire, asignando un nivel de riesgo y las recomendaciones para la protecciÃ³n de los grupos sensibles y la poblaciÃ³n en general.", this.bp = [-1, 0, 25, 45, 79, 147], this.units = "", this.textValues = ["No current data", "0-25: Disfruta las actividades al aire libre.", "25 - 45: Grupo Sensible: Considera reducir las actividades fiÌsicas vigorosas al aire libre. \nPoblaciÃ³n General: Disfruta las actividades al aire libre.", "45 - 79: Grupo Sensible: Evita las actividades fiÌsicas (tanto moderadas como vigorosas) al aire libre. \nPoblaciÃ³n General: Reduce las actividades fiÌsicas vigorosas al aire libre.", "79 - 147: Grupo Sensible: No realices actividades al aire libre. Acudir al meÌdico si se presentan siÌntomas respiratorios o cardiacos. \nPoblaciÃ³n General: Evita las actividades fiÌsicas moderadas y vigorosas al aire libre .", "> 147: Grupo Sensible: Permanece en espacios interiores. Acudir al meÌdico si se presentan siÌntomas respiratorios o cardiacos. \nPoblaciÃ³n General: Permanece en espacios interiores. Acudir al meÌdico si se presentan siÌntomas respiratorios o cardiacos."], this.colors = [
        [150, 150, 150],
        [33, 225, 6],
        [255, 255, 102],
        [253, 128, 8],
        [252, 1, 7],
        [204, 102, 255]
      ]
    }
    var o = new(e("./pm25"));
    (r.prototype = Object.create(o.__proto__)).constructor = o, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? Math.round(e) : ""
    }, r.prototype.convert = function (e, t, n) {
      return n(e)
    }, r.prototype.getValue = function (e, t, n) {
      var r = o.getValue(e, t, n);
      return r != o.bp[0] ? r : this.bp[0]
    }, t.exports = r
  }, {
    "./common": 18,
    "./pm25": 34
  }],
  16: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "AQHI", this.name = "Canadian AQHI", this.description = "The Air Quality Health Index or (AQHI) is a scale designed in Canada to help understand the impact of air quality on health.", this.bp = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], this.units = "", this.textValues = ["No current data", "1-3: Ideal air quality for outdoor activities. Enjoy your usual outdoor activities.", "1-3: Ideal air quality for outdoor activities. Enjoy your usual outdoor activities.", "1-3: Ideal air quality for outdoor activities. Enjoy your usual outdoor activities.", "4-6: No need to modify your usual outdoor activities unless you experience symptoms such as coughing and throat irritation. Consider reducing or rescheduling strenuous activities outdoors if you are experiencing symptoms.", "4-6: No need to modify your usual outdoor activities unless you experience symptoms such as coughing and throat irritation. Consider reducing or rescheduling strenuous activities outdoors if you are experiencing symptoms.", "4-6: No need to modify your usual outdoor activities unless you experience symptoms such as coughing and throat irritation. Consider reducing or rescheduling strenuous activities outdoors if you are experiencing symptoms.", "7-10: Consider reducing or rescheduling strenuous activities outdoors if you experience symptoms such as coughing and throat irritation. Reduce or reschedule strenuous activities outdoors. Children and the elderly should also take it easy.", "7-10: Consider reducing or rescheduling strenuous activities outdoors if you experience symptoms such as coughing and throat irritation. Reduce or reschedule strenuous activities outdoors. Children and the elderly should also take it easy.", "7-10: Consider reducing or rescheduling strenuous activities outdoors if you experience symptoms such as coughing and throat irritation. Reduce or reschedule strenuous activities outdoors. Children and the elderly should also take it easy.", "7-10: Consider reducing or rescheduling strenuous activities outdoors if you experience symptoms such as coughing and throat irritation. Reduce or reschedule strenuous activities outdoors. Children and the elderly should also take it easy.", "10+: Reduce or reschedule strenuous activities outdoors, especially if you experience symptoms such as coughing and throat irritation. Avoid strenuous activities outdoors. Children and the elderly should also avoid outdoor physical exertion."], this.colors = [
        [150, 150, 150],
        [89, 202, 250],
        [65, 152, 199],
        [40, 102, 148],
        [243, 241, 80],
        [237, 195, 67],
        [221, 144, 68],
        [212, 100, 95],
        [209, 45, 31],
        [178, 36, 25],
        [125, 24, 15],
        [93, 14, 7]
      ]
    }
    var o = e("./common"),
      i = new(e("./pm25"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, r.prototype.convert = function (e, t, n) {
      return o.aqhi(n(e))
    }, r.prototype.getValue = function (e, t, n) {
      var r = i.getValue(e, t, n);
      return r != this.bp[0] ? o.aqhi(r) : this.bp[0]
    }, t.exports = r
  }, {
    "./common": 18,
    "./pm25": 34
  }],
  17: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "AQI", this.name = "US EPA PM2.5 AQI", this.description = "An air quality index (AQI) is a number used by government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become.", this.bp = [-1, 0, 50, 100, 150, 200, 250, 300, 350, 400, 500], this.units = "", this.textValues = ["No current data", "0-50: Air quality is considered satisfactory, and air pollution poses little or no risk.", "51-100: Air quality is acceptable; however, if they are exposed for 24 hours there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.", "101-150: Members of sensitive groups may experience health effects if they are exposed for 24 hours. The general public is not likely to be affected.", "151-200: Everyone may begin to experience health effects if they are exposed for 24 hours; members of sensitive groups may experience more serious health effects.", "201-300: Health alert: everyone may experience more serious health effects if they are exposed for 24 hours.", "201-300: Health alert: everyone may experience more serious health effects if they are exposed for 24 hours.", "301-400: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected.", "301-400: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected.", ">401: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected.", ">401: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected."]
    }
    var o = e("./common"),
      i = new(e("./pm25"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, r.prototype.convert = function (e, t, n) {
      return o.aqiFromPM(n(e))
    }, r.prototype.getValue = function (e, t, n) {
      var r = i.getValue(e, t, n);
      return r != i.bp[0] ? o.aqiFromPM(r) : this.bp[0]
    }, t.exports = r
  }, {
    "./common": 18,
    "./pm25": 34
  }],
  18: [function (e, t, n) {
    "use strict";

    function r() {}

    function o(e, t, n, r) {
      r = r || 1;
      var o, i, a, s, u = "rgba(" + t[0][0] + "," + t[0][1] + "," + t[0][2] + "," + r + ")",
        l = e.length - 1;
      for (var c in n > e[l] && t.length >= e.length && (u = "rgba(" + t[l][0] + "," + t[l][1] + "," + t[l][2] + "," + r + ")"), e) {
        0 < c && (i = e[o = parseInt(c) - 1], a = e[c], i < n && n <= a && (s = (n - i) / (a - i), u = function (e, t, n, r) {
          null == r && (r = 1);
          var o = p(e, t, n);
          return "rgba(" + o[0] + ", " + o[1] + ", " + o[2] + ", " + r + ")"
        }(t[c], t[o], s, r)))
      }
      return u
    }

    function i(e, t, n, r, o) {
      var i = t - n,
        a = r - o,
        s = e - o;
      return Math.round(i / a * s + n)
    }

    function p(e, t, n) {
      var r = (1 + (2 * n - 1)) / 2,
        o = 1 - r;
      return [Math.round(e[0] * r + t[0] * o), Math.round(e[1] * r + t[1] * o), Math.round(e[2] * r + t[2] * o)]
    }
    r.prototype.temperatureOffset = -8, r.prototype.humidityOffset = 4, r.prototype.expires = 10, r.prototype.getAbsHumidity = function (e, t) {
      var n = this.dew(e, t),
        r = this.ftoc(n);
      return 1e3 * (100 * (6.11 * Math.pow(10, 7.5 * r / (237.7 + r))) / (461.5 * (e + 273)))
    }, r.prototype.dew = function (e, t) {
      return 243.04 * (Math.log(t / 100) + 17.625 * e / (243.04 + e)) / (17.625 - Math.log(t / 100) - 17.625 * e / (243.04 + e))
    }, r.prototype.ftoc = function (e) {
      return +Math.round(5 / 9 * (e - 32) * 1)
    }, r.prototype.ctof = function (e) {
      return +Math.round(1.8 * e + 32)
    }, r.prototype.getHumidex = function (e, t) {
      e = this.ftoc(e), 100 < t && (t = 100);
      var n = this.dew(e, t) + 273.15,
        r = e + .5555 * (6.11 * Math.exp(5417.753 * (1 / 273.16 - 1 / n)) - 10);
      return Math.round(r)
    }, r.prototype.getValueText = function (e, t, n) {
      var r = "No description available",
        o = e.length - 1;
      for (var i in n >= e[o] && t.length >= e.length && (r = t[o]), e)
        if (0 < i && n >= e[i] && n < e[parseInt(i) + 1] && t.length > i) return t[i];
      return r
    }, r.prototype.getValueColor = o, r.prototype.getTextColor = o, r.prototype.getValueColors = function (e, t, n, r) {
      var o = [];
      for (var i in o.push([e[0] - 1, "rgba(0,0,0,0)"]), e) {
        var a = [e[i], "rgba(" + t[i][0] + "," + t[i][1] + "," + t[i][2] + "," + r + ")"];
        o.push(a)
      }
      return {
        property: n,
        stops: o
      }
    }, r.prototype.getTextColorContrasted = function (e) {
      var t;
      return -1 < e.indexOf("(") && (t = e.substring(e.indexOf("(") + 1, e.length - 1).split(",")), -1 < e.indexOf("#") && (t = [parseInt("0x" + e.substring(1, 3)), parseInt("0x" + e.substring(3, 5)), parseInt("0x" + e.substring(5, 7))]), null == t ? null : (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 123 ? "white" : "black"
    }, r.prototype.getTextColors = function (e, t, n, r) {
      var o = ["step", ["get", n]];
      for (var i in e) t[i][0] != e[0] && (o.push("rgba(" + t[i][0] + "," + t[i][1] + "," + t[i][2] + "," + r + ")"), parseInt(i) + 1 < e.length && o.push(e[parseInt(i) + 1]));
      return o
    }, r.prototype.getOzone = function (e, t) {
      return null != e.ozone1 ? t ? e.ozone1 : Math.round(37.5 * (e.ozone1 - 1)) : null
    }, r.prototype.aqiFromPM = function (e) {
      return e < 0 ? e : 350.5 < e ? i(e, 500, 401, 500, 350.5) : 250.5 < e ? i(e, 400, 301, 350.4, 250.5) : 150.5 < e ? i(e, 300, 201, 250.4, 150.5) : 55.5 < e ? i(e, 200, 151, 150.4, 55.5) : 35.5 < e ? i(e, 150, 101, 55.4, 35.5) : 12.1 < e ? i(e, 100, 51, 35.4, 12.1) : 0 <= e ? i(e, 50, 0, 12, 0) : -1
    }, r.prototype.imecaFromPM = function (e) {
      if (e < 0) return e;
      var t = 0 <= e && e <= 12 ? 4.1667 * e : 12 < e && e <= 45 ? 1.4894 * (e - 12.1) + 51 : 45 < e && e <= 97.4 ? .9369 * (e - 45.1) + 101 : 97.4 < e && e <= 150.4 ? .9263 * (e - 97.5) + 151 : 150.4 < e && e <= 250.4 ? .991 * (e - 150.5) + 201 : 250.4 < e && e <= 350.4 ? .991 * (e - 250.5) + 301 : 350.4 < e && e <= 500.4 ? .6604 * (e - 350.5) + 401 : null;
      return Math.round(t)
    }, r.prototype.aqiFromPM10 = function (e) {
      return e < 0 ? e : 500.5 < e ? i(e, 500, 401, 1e3, 500.5) : 424.5 < e ? i(e, 400, 301, 500.4, 424.5) : 354.5 < e ? i(e, 300, 201, 424.4, 354.5) : 254.5 < e ? i(e, 200, 151, 354.4, 254.5) : 154.5 < e ? i(e, 150, 101, 254.4, 154.5) : 54.1 < e ? i(e, 100, 51, 154.4, 54.1) : 0 <= e ? i(e, 50, 0, 54, 0) : -1
    }, r.prototype.aqhi = function (e) {
      var t = Math.ceil(1e3 / 10.4 * (Math.pow(Math.E, 487e-6 * e) - 1));
      return t < 1 && (t = 1), t
    }, t.exports = new r
  }, {}],
  19: [function (e, t, n) {
    "use strict";
    var r = e("./common");

    function o() {
      this.id = "HUMIDEX", this.name = "Humidex (Â°C)", this.description = "The humidex (short for humidity index) is an index number used by Canadian meteorologists to describe how hot the weather feels to the average person, by combining the effect of heat and humidity.", this.units = "", this.textValues = ["No current data", "Less than 0", "Less than 29: No discomfort", "30 to 39: Some discomfort", "40 to 45: Great discomfort; avoid exertion", "Above 45: Dangerous; heat stroke quite possible", "Above 55: Dangerous; heat stroke imminent"]
    }
    o.prototype.bp = [-200, -50, 0, 30, 40, 45, 55], o.prototype.colors = [
      [150, 150, 150],
      [136, 227, 251],
      [136, 227, 251],
      [126, 250, 162],
      [255, 253, 97],
      [241, 157, 105],
      [235, 72, 63]
    ], o.prototype.getFields = function (e) {
      return "temperature,humidity"
    }, o.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, o.prototype.convert = function (e, t) {
      var n = parseInt(t) + r.humidityOffset;
      return 100 < n && (n = 100), r.getHumidex(parseInt(e) + r.temperatureOffset, n)
    }, o.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > r.expires || null == e.temp ? this.bp[0] : this.getVal(e)
    }, o.prototype.getValueColor = function (e, t) {
      return r.getValueColor(this.bp, this.colors, e, t)
    }, o.prototype.getValueColors = function (e, t) {
      return r.getValueColors(this.bp, this.colors, e, t)
    }, o.prototype.getValueText = function (e) {
      return r.getValueText(this.bp, this.textValues, e)
    }, o.prototype.getVal = function (e) {
      if (null == e.h || null == e.temp) return this.bp[0];
      var t = e.h + r.humidityOffset;
      return 100 < t && (t = 100), r.getHumidex(e.temp + r.temperatureOffset, t)
    }, t.exports = o
  }, {
    "./common": 18
  }],
  20: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "HUMIDEX_F", this.name = "Humidex (Â°F)", this.units = "", this.textValues = ["No current data", "Less than " + o.ctof(0), "Less than " + o.ctof(29) + ": No discomfort", o.ctof(30) + " to " + o.ctof(39) + ": Some discomfort", o.ctof(40) + " to " + o.ctof(45) + ": Great discomfort; avoid exertion", "Above " + o.ctof(45) + ": Dangerous; heat stroke quite possible", "Above " + o.ctof(55) + ": Dangerous; heat stroke imminent"]
    }
    var o = e("./common"),
      i = new(e("./humidex"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.bp = [-200, o.ctof(-50), o.ctof(0), o.ctof(30), o.ctof(40), o.ctof(45), o.ctof(55)], r.prototype.convert = function (e, t) {
      return o.ctof(i.convert(e, t))
    }, r.prototype.getVal = function (e) {
      var t = i.getVal(e);
      return t != i.bp[0] ? o.ctof(t) : this.bp[0]
    }, t.exports = r
  }, {
    "./common": 18,
    "./humidex": 19
  }],
  21: [function (e, t, n) {
    "use strict";
    var r = e("./common"),
      o = new(e("./temperature"));

    function i() {
      this.id = "HUMIDITY", this.name = "Humidity", this.description = "", this.units = "%"
    }
    i.prototype.bp = [-1, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], i.prototype.textValues = ["No current data", "Uncomfortably dry", "Uncomfortably dry", "Uncomfortably dry", "Comfortable", "Comfortable", "Comfortable", "Comfortable", "Uncomfortably wet", "Uncomfortably wet", "Uncomfortably wet", "Uncomfortably wet"], i.prototype.colors = [
      [150, 150, 150],
      [247, 207, 78],
      [219, 202, 78],
      [190, 196, 79],
      [162, 191, 81],
      [139, 187, 83],
      [120, 184, 86],
      [80, 151, 134],
      [59, 132, 166],
      [52, 124, 182],
      [49, 121, 187],
      [49, 121, 187]
    ], i.prototype.getFields = function (e) {
      return "humidity"
    }, i.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, i.prototype.convert = function (e) {
      return parseInt(e) + r.humidityOffset
    }, i.prototype.getValue = function (e, t) {
      if (!isNaN(t)) return this.bp[0];
      if (e.age > r.expires || null == e.h) return this.bp[0];
      if (e.temp <= o.bp[0]) return this.bp[0];
      var n = e.h + r.humidityOffset;
      return 100 < n && (n = 100), e.h > this.bp[0] ? n : this.bp[0]
    }, i.prototype.getValueColor = function (e, t) {
      return r.getValueColor(this.bp, this.colors, e, t)
    }, i.prototype.getValueColors = function (e, t) {
      return r.getValueColors(this.bp, this.colors, e, t)
    }, i.prototype.getValueText = function (e) {
      return r.getValueText(this.bp, this.textValues, e)
    }, t.exports = i
  }, {
    "./common": 18,
    "./temperature": 36
  }],
  22: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "HUMIDITY_U", this.name = "Raw Humidity", this.description = ""
    }
    var o = e("./common"),
      i = new(e("./humidity"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, r.prototype.getValue = function (e, t) {
      return isNaN(t) ? e.age > o.expires || null == e.h ? this.bp[0] : e.h : bp[0]
    }, t.exports = r
  }, {
    "./common": 18,
    "./humidity": 21
  }],
  23: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "IMECA", this.name = "Mexican PM2.5 IMECA", this.description = "An air quality index used by Mexican government agencies to communicate to the public how polluted the air currently is or how polluted it is forecast to become.", this.bp = [-1, 0, 50, 100, 150, 200, 250, 300, 350, 400, 500], this.units = "", this.textValues = ["No current data", "0-50: BUENA: Bajo. Existe poco o ningÃºn riesgo para la salud.\tSe puede realizar cualquier actividad al aire libre.", "51-100: REGULAR: Moderado. Los grupos susceptibles pueden presentar sÃ­ntomas en la salud. Las personas que son extremadamente susceptibles a la contaminaciÃ³n deben considerar limitar la exposiciÃ³n aire libre.", "101-150: MALA: Alto. Los grupos susceptibles presentan efectos en la salud. Los niÃ±os, adultos mayores, personas con enfermedades respiratorias y cardiovasculares, asÃ­ como personas que realizan actividad fÃ­sica al aire libre deben limitar la exposiciÃ³n.", "151-200: MUY MALA: Muy alto. Todos pueden presentar efectos en la salud; quienes pertenecen a los grupos susceptibles experimentan efectos graves. Los niÃ±os, adultos mayores, personas que realizan actividad fÃ­sica intensa o con enfermedades respiratorias y cardiovasculares, deben evitar la exposiciÃ³n al aire libre y el resto de la poblaciÃ³n debe limitar la exposiciÃ³n al aire libre.", "201-300: EXTREMADAMENTE MALA: Extremadamente alto. Toda la poblaciÃ³n tiene probabilidades de experimentar efectos graves en la salud.\tToda la poblaciÃ³n debe evitar la exposiciÃ³n al aire libre.", "201-300: EXTREMADAMENTE MALA: Extremadamente alto. Toda la poblaciÃ³n tiene probabilidades de experimentar efectos graves en la salud.\tToda la poblaciÃ³n debe evitar la exposiciÃ³n al aire libre.", "301-400: PELIGROSA: Peligro. Toda la poblaciÃ³n experimenta efectos graves en la salud. SuspensiÃ³n de actividades al aire libre.", "301-400: PELIGROSA: Peligro. Toda la poblaciÃ³n experimenta efectos graves en la salud. SuspensiÃ³n de actividades al aire libre.", ">401: PELIGROSA: Peligro. Toda la poblaciÃ³n experimenta efectos graves en la salud. SuspensiÃ³n de actividades al aire libre.", ">401: PELIGROSA: Peligro. Toda la poblaciÃ³n experimenta efectos graves en la salud. SuspensiÃ³n de actividades al aire libre."], this.colors = [
        [150, 150, 150],
        [104, 225, 67],
        [247, 233, 80],
        [237, 155, 63],
        [219, 59, 50],
        [114, 47, 121],
        [114, 47, 121],
        [115, 20, 37],
        [115, 20, 37],
        [115, 20, 37],
        [115, 20, 37]
      ]
    }
    var o = e("./common"),
      i = new(e("./pm25"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, r.prototype.convert = function (e, t, n) {
      return o.imecaFromPM(n(e))
    }, r.prototype.getValue = function (e, t, n) {
      var r = i.getValue(e, t, n);
      return r != i.bp[0] ? o.imecaFromPM(r) : this.bp[0]
    }, t.exports = r
  }, {
    "./common": 18,
    "./pm25": 34
  }],
  24: [function (e, t, n) {
    "use strict";
    var i = e("./common");

    function r() {
      this.id = "OZONE", this.name = "Ozone (ppb) EXPERIMENTAL", this.description = "Ozone in parts per billion", this.bp = [-1, 0, 54, 70, 86, 105, 200, 5e3], this.units = "ppb", this.textValues = ["No current data", "0-54: Good", "54-70: Average", "70-86: A little bad", "86-105: Bad", "105-200: Worse", "200-5000: Very bad", ">5000: Very bad"]
    }
    r.prototype.colors = [
      [150, 150, 150],
      [104, 225, 67],
      [255, 255, 85],
      [239, 133, 51],
      [234, 51, 36],
      [140, 26, 75],
      [140, 26, 75],
      [115, 20, 37]
    ], r.prototype.getFields = function (e) {
      return "ozone1"
    }, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, r.prototype.convert = function (e, t, n, r) {
      return r ? value == this.bp[0] ? null : e : ((e = Math.round(37.5 * (e - 1))) < 0 && (e = null), e)
    }, r.prototype.getValue = function (e, t, n, r) {
      if (!isNaN(t)) return this.bp[0];
      var o = i.getOzone(e, r);
      return e.age > i.expires || null == o || o < 0 ? this.bp[0] : o
    }, r.prototype.getValueColor = function (e, t) {
      return i.getValueColor(this.bp, this.colors, e, t)
    }, r.prototype.getValueColors = function (e, t) {
      return i.getValueColors(this.bp, this.colors, e, t)
    }, r.prototype.getValueText = function (e) {
      return i.getValueText(this.bp, this.textValues, e)
    }, t.exports = r
  }, {
    "./common": 18
  }],
  25: [function (e, t, n) {
    "use strict";
    var r = e("./common");

    function o() {
      this.id = "P1", this.name = "Particles >=0.3Âµm: count/dl", this.description = "", this.bp = [-1, 0, 1e3, 5e3, 1e4, 2e4, 3e4, 5e4, 1e5]
    }
    o.prototype.textValues = ["No current data"], o.prototype.units = "particles/dl", o.prototype.colors = [
      [150, 150, 150],
      [104, 225, 67],
      [255, 255, 85],
      [239, 133, 51],
      [234, 51, 36],
      [140, 26, 75],
      [115, 20, 37],
      [115, 20, 37],
      [115, 20, 37]
    ], o.prototype.getFields = function (e, t) {
      return 1 == t ? "0.3_um_count" : "p1"
    }, o.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? Math.round(e) : ""
    }, o.prototype.convert = function (e) {
      return e
    }, o.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > r.expires || null == e.p1 ? this.bp[0] : e.p1
    }, o.prototype.getValueColor = function (e, t) {
      return r.getValueColor(this.bp, this.colors, e, t)
    }, o.prototype.getValueColors = function (e, t) {
      return r.getValueColors(this.bp, this.colors, e, t)
    }, o.prototype.getValueText = function (e) {
      return r.getValueText(this.bp, this.textValues, e)
    }, t.exports = o
  }, {
    "./common": 18
  }],
  26: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "P2", this.name = "Particles >=0.5Âµm: count/dl", this.description = "", this.bp = [-1, 0, 1e3, 2e3, 4e3, 8e3, 16e3, 24e3, 5e4]
    }
    var o = e("./common"),
      i = new(e("./particles_0_3"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getFields = function (e, t) {
      return 1 == t ? "0.5_um_count" : "p2"
    }, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? Math.round(e) : ""
    }, r.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > o.expires || null == e.p2 ? this.bp[0] : e.p2
    }, t.exports = r
  }, {
    "./common": 18,
    "./particles_0_3": 25
  }],
  27: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "P6", this.name = "Particles >=10Âµm: count/dl", this.description = "", this.bp = [-1, 0, 2, 4, 6, 10, 15, 20, 30]
    }
    var o = e("./common"),
      i = new(e("./particles_0_3"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, r.prototype.getFields = function (e, t) {
      return 1 == t ? "10.0_um_count" : "p6"
    }, r.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > o.expires || null == e.p6 ? this.bp[0] : e.p6
    }, t.exports = r
  }, {
    "./common": 18,
    "./particles_0_3": 25
  }],
  28: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "P3", this.name = "Particles >=1.0Âµm: count/dl", this.description = "", this.bp = [-1, 0, 100, 200, 400, 600, 800, 1200, 2e3]
    }
    var o = e("./common"),
      i = new(e("./particles_0_3"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getFields = function (e, t) {
      return 1 == t ? "1.0_um_count" : "p3"
    }, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? Math.round(e) : ""
    }, r.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > o.expires || null == e.p3 ? this.bp[0] : e.p3
    }, t.exports = r
  }, {
    "./common": 18,
    "./particles_0_3": 25
  }],
  29: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "P4", this.name = "Particles >=2.5Âµm: count/dl", this.description = "", this.bp = [-1, 0, 8, 16, 24, 40, 60, 80, 120]
    }
    var o = e("./common"),
      i = new(e("./particles_0_3"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? Math.round(e) : ""
    }, r.prototype.getFields = function (e, t) {
      return 1 == t ? "2.5_um_count" : "p4"
    }, r.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > o.expires || null == e.p4 ? this.bp[0] : e.p4
    }, t.exports = r
  }, {
    "./common": 18,
    "./particles_0_3": 25
  }],
  30: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "P5", this.name = "Particles >=5.0Âµm: count/dl", this.description = "", this.bp = [-1, 0, 4, 8, 12, 20, 30, 40, 60]
    }
    var o = e("./common"),
      i = new(e("./particles_0_3"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, r.prototype.getFields = function (e, t) {
      return 1 == t ? "5.0_um_count" : "p5"
    }, r.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > o.expires || null == e.p5 ? this.bp[0] : e.p5
    }, t.exports = r
  }, {
    "./common": 18,
    "./particles_0_3": 25
  }],
  31: [function (e, t, n) {
    "use strict";
    var r = e("./common");

    function o() {
      this.id = "PM1", this.name = "Raw PM1.0 in Âµg/mÂ³", this.description = "Raw PM1.0 measurements in micrograms per cubic meter of air", this.bp = [-1, 0, 12, 35.4, 55.4, 150.4, 250.4, 350.4, 500], this.units = "Âµg/mÂ³", this.textValues = ["No current data"]
    }
    o.prototype.colors = [
      [150, 150, 150],
      [104, 225, 67],
      [255, 255, 85],
      [239, 133, 51],
      [234, 51, 36],
      [140, 26, 75],
      [115, 20, 37],
      [115, 20, 37],
      [115, 20, 37]
    ], o.prototype.getFields = function (e, t) {
      return 1 == t ? "pm1.0" : "pm1"
    }, o.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? Math.round(e) : ""
    }, o.prototype.convert = function (e) {
      return e
    }, o.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > r.expires || null == e.pm1 ? this.bp[0] : e.pm1
    }, o.prototype.getValueColor = function (e, t) {
      return r.getValueColor(this.bp, this.colors, e, t)
    }, o.prototype.getValueColors = function (e, t) {
      return r.getValueColors(this.bp, this.colors, e, t)
    }, o.prototype.getValueText = function (e) {
      return r.getValueText(this.bp, this.textValues, e)
    }, t.exports = o
  }, {
    "./common": 18
  }],
  32: [function (e, t, n) {
    "use strict";
    var r = e("./common");

    function o() {
      this.id = "PM10", this.name = "Raw PM10 in Âµg/mÂ³", this.description = "Raw PM10 measurements in micrograms per cubic meter of air", this.bp = [-1, 0, 54, 154, 254, 354, 424, 524], this.units = "Âµg/mÂ³", this.xtextValues = ["No current data", "0-54Âµg/mÂ³: Air quality is considered satisfactory, and air pollution poses little or no risk", "54-154Âµg/mÂ³: Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.", "154-254Âµg/mÂ³: Members of sensitive groups may experience health effects. The general public is not likely to be affected.", "254-354Âµg/mÂ³: Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.", "354-424Âµg/mÂ³: Health warnings of emergency conditions. The entire population is more likely to be affected. ", ">424Âµg/mÂ³: Health alert: everyone may experience more serious health effects", ">424Âµg/mÂ³: Health alert: everyone may experience more serious health effects", ">424Âµg/mÂ³: Health alert: everyone may experience more serious health effects"], this.textValues = ["No current data", "0-54Âµg/mÂ³: Air quality is considered satisfactory, and air pollution poses little or no risk", "54-154Âµg/mÂ³: Air quality is acceptable; however, if they are exposed for 24 hours there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.", "154-254Âµg/mÂ³: Members of sensitive groups may experience health effects if they are exposed for 24 hours. The general public is not likely to be affected.", "254-354Âµg/mÂ³: Everyone may begin to experience health effects if they are exposed for 24 hours; members of sensitive groups may experience more serious health effects.", "354-424Âµg/mÂ³: Health alert: everyone may experience more serious health effects if they are exposed for 24 hours.", ">424Âµg/mÂ³: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected.", ">424Âµg/mÂ³: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected.", ">424Âµg/mÂ³: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected."]
    }
    o.prototype.colors = [
      [150, 150, 150],
      [104, 225, 67],
      [255, 255, 85],
      [239, 133, 51],
      [234, 51, 36],
      [140, 26, 75],
      [115, 20, 37],
      [115, 20, 37],
      [115, 20, 37]
    ], o.prototype.getFields = function (e, t) {
      return 1 == t ? "pm10.0" : "pm_10"
    }, o.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? Math.round(e) : ""
    }, o.prototype.convert = function (e) {
      return e
    }, o.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > r.expires || null == e.pm10 ? this.bp[0] : e.pm10
    }, o.prototype.getValueColor = function (e, t) {
      return r.getValueColor(this.bp, this.colors, e, t)
    }, o.prototype.getValueColors = function (e, t) {
      return r.getValueColors(this.bp, this.colors, e, t)
    }, o.prototype.getValueText = function (e) {
      return r.getValueText(this.bp, this.textValues, e)
    }, t.exports = o
  }, {
    "./common": 18
  }],
  33: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "PM10AQI", this.name = "US EPA PM10 AQI", this.description = "AQI based on PM10 particulate matter.", this.bp = [-1, 0, 50, 100, 150, 200, 300, 400, 500], this.units = "", this.xtextValues = ["No current data", "0-50: Air quality is considered satisfactory, and air pollution poses little or no risk", "51-100: Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.", "101-150: Members of sensitive groups may experience health effects. The general public is not likely to be affected.", "151-200: Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.", "201-300: Health warnings of emergency conditions. The entire population is more likely to be affected. ", ">300: Health alert: everyone may experience more serious health effects", ">300: Health alert: everyone may experience more serious health effects", ">300: Health alert: everyone may experience more serious health effects", ">300: Health alert: everyone may experience more serious health effects"], this.textValues = ["No current data", "0-50: Air quality is considered satisfactory, and air pollution poses little or no risk", "51-100: Air quality is acceptable; however, if they are exposed for 24 hours there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.", "101-150: Members of sensitive groups may experience health effects if they are exposed for 24 hours. The general public is not likely to be affected.", "151-200: Everyone may begin to experience health effects if they are exposed for 24 hours; members of sensitive groups may experience more serious health effects.", "201-300: Health alert: everyone may experience more serious health effects if they are exposed for 24 hours.", ">300: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected.", ">300: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected.", ">300: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected.", ">300: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected."]
    }
    var o = e("./common"),
      i = new(e("./pm10"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, r.prototype.convert = function (e) {
      return o.aqiFromPM10(e)
    }, r.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > o.expires || null == e.pm10 ? this.bp[0] : o.aqiFromPM10(e.pm10)
    }, t.exports = r
  }, {
    "./common": 18,
    "./pm10": 32
  }],
  34: [function (e, t, n) {
    "use strict";
    var r = e("./common");

    function o() {
      this.id = "PM25", this.name = "Raw PM2.5 in Âµg/mÂ³", this.description = "Raw PM2.5 measurements in micrograms per cubic meter of air", this.bp = [-1, 0, 12, 35, 55, 150, 250, 350, 500], this.units = "Âµg/mÂ³", this.textValues = ["No current data", "0-12Âµg/mÂ³: Air quality is considered satisfactory, and air pollution poses little or no risk.", "12-35Âµg/mÂ³: Air quality is acceptable; however, if they are exposed for 24 hours there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.", "35-55Âµg/mÂ³: Members of sensitive groups may experience health effects if they are exposed for 24 hours. The general public is not likely to be affected with 24 hours of exposure.", "55-150Âµg/mÂ³: Everyone may begin to experience health effects if they are exposed for 24 hours; members of sensitive groups may experience more serious health effects with 24 hours of exposure.", "150-250Âµg/mÂ³: Health alert: everyone may experience more serious health effects if they are exposed for 24 hours.", "250-350Âµg/mÂ³: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected with 24 hours of exposure.", "350-500Âµg/mÂ³: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected with 24 hours of exposure.", ">500Âµg/mÂ³: Health warnings of emergency conditions if they are exposed for 24 hours. The entire population is more likely to be affected with 24 hours of exposure."]
    }
    o.prototype.colors = [
      [150, 150, 150],
      [104, 225, 67],
      [255, 255, 85],
      [239, 133, 51],
      [234, 51, 36],
      [140, 26, 75],
      [140, 26, 75],
      [115, 20, 37],
      [115, 20, 37],
      [115, 20, 37],
      [115, 20, 37]
    ], o.prototype.getFields = function (e, t) {
      return 1 == t ? 10080 <= e ? "pm2.5_24hour" : 1440 <= e ? "pm2.5_12hour" : 360 <= e ? "pm2.5_6hour" : 60 <= e ? "pm2.5_60minute" : 30 <= e ? "pm2.5_30minute" : 10 <= e ? "pm2.5_10minute" : "pm2.5" : 10080 <= e ? "pm_6" : 1440 <= e ? "pm_5" : 360 <= e ? "pm_4" : 60 <= e ? "pm_3" : 30 <= e ? "pm_2" : 10 <= e ? "pm_1" : "pm_0"
    }, o.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? Math.round(e) : ""
    }, o.prototype.convert = function (e, t, n) {
      return n(e)
    }, o.prototype.getAverageText = function (e) {
      return 10080 <= e ? "One Week Average" : 1440 <= e ? "One Day Average" : 360 <= e ? "Six Hour Average" : 60 <= e ? "One Hour Average" : 30 <= e ? "30 Minute Average" : 10 <= e ? "10 Minute Average" : "Real Time"
    }, o.prototype.hasAverages = function () {
      return !0
    }, o.prototype.getValue = function (e, t, n) {
      if (n = parseFloat(n), !isNaN(t)) {
        if (0 == t) return 10 < e.age ? this.bp[0] : e.pm_0;
        if (1 == t) return 20 < e.age ? this.bp[0] : e.pm_1;
        if (2 == t) return 30 < e.age ? this.bp[0] : e.pm_2;
        if (3 == t) return 60 < e.age ? this.bp[0] : e.pm_3;
        if (4 == t) return 360 < e.age ? this.bp[0] : e.pm_4;
        if (5 == t) return 720 < e.age ? this.bp[0] : e.pm_5;
        if (6 == t) return 5040 < e.age ? this.bp[0] : e.pm_6
      }
      var r = e.pm_0;
      return 10080 <= n ? r = e.pm_6 : 1440 <= n ? r = e.pm_5 : 360 <= n ? r = e.pm_4 : 60 <= n ? r = e.pm_3 : 30 <= n ? r = e.pm_2 : 10 <= n && (r = e.pm_1), e.age > n + 5 || null == r ? this.bp[0] : r
    }, o.prototype.getValueColor = function (e, t) {
      return r.getValueColor(this.bp, this.colors, e, t)
    }, o.prototype.getValueColors = function (e, t) {
      return r.getValueColors(this.bp, this.colors, e, t)
    }, o.prototype.getValueText = function (e) {
      return r.getValueText(this.bp, this.textValues, e)
    }, t.exports = o
  }, {
    "./common": 18
  }],
  35: [function (e, t, n) {
    "use strict";
    var o = e("./common");

    function r() {
      this.id = "PRESSURE", this.name = "Pressure (mb)", this.description = "Atmospheric pressure in millibars", this.bp = [-1, 980, 1e3, 1010, 1020, 1030, 1040, 1050], this.units = "mb", this.textValues = ["No current data", "Very low", "Low", "Normal", "Normal", "High", "High", "> Very high"]
    }
    r.prototype.colors = [
      [150, 150, 150],
      [75, 75, 255],
      [100, 100, 255],
      [125, 125, 255],
      [150, 150, 255],
      [175, 175, 255],
      [200, 200, 255],
      [225, 225, 255]
    ], r.prototype.getFields = function (e, t) {
      return 1 == t ? "pressure,altitude" : "pressure,elevation"
    }, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, r.prototype.convert = function (e, t) {
      if (null == e || null == t) return this.bp[0];
      var n = e / Math.pow(1 - t / 44330, 5.255);
      return Math.round(n)
    }, r.prototype.getValue = function (e, t) {
      if (!isNaN(t)) return this.bp[0];
      if (e.age > o.expires || null == e.p || null == e.e) return this.bp[0];
      var n = e.e,
        r = e.p / Math.pow(1 - n / 44330, 5.255);
      return Math.round(r)
    }, r.prototype.getValueColor = function (e, t) {
      return o.getValueColor(this.bp, this.colors, e, t)
    }, r.prototype.getValueColors = function (e, t) {
      return o.getValueColors(this.bp, this.colors, e, t)
    }, r.prototype.getValueText = function (e) {
      return o.getValueText(this.bp, this.textValues, e)
    }, t.exports = r
  }, {
    "./common": 18
  }],
  36: [function (e, t, n) {
    "use strict";
    var r = e("./common");

    function o() {
      this.id = "TEMP", this.name = "Temperature (Â°F)", this.description = "", this.bp = [-200, -100, -10, 14, 23, 32, 41, 50, 59, 68, 77, 86, 95, 104], this.units = "Â°F"
    }
    o.prototype.textValues = ["No current data", "Extreme cold", "Really really cold", "Really cold", "Quite cold", "Freezing", "Cold", "Chilly", "Cool", "Nice", "Warm", "Quite hot", "Very hot", "Very very hot"], o.prototype.colors = [
      [150, 150, 150],
      [48, 48, 48],
      [48, 48, 48],
      [46, 51, 149],
      [0, 12, 125],
      [0, 35, 242],
      [56, 105, 244],
      [163, 204, 248],
      [101, 206, 201],
      [55, 125, 34],
      [166, 205, 64],
      [247, 208, 71],
      [237, 112, 46],
      [233, 50, 36]
    ], o.prototype.getFields = function (e) {
      return "temperature"
    }, o.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, o.prototype.convert = function (e) {
      return parseInt(e) + r.temperatureOffset
    }, o.prototype.getValue = function (e, t) {
      return isNaN(t) && !(e.age > r.expires || null == e.temp) && e.temp > this.bp[0] ? e.temp + r.temperatureOffset : this.bp[0]
    }, o.prototype.getValueColor = function (e, t) {
      return r.getValueColor(this.bp, this.colors, e, t)
    }, o.prototype.getValueColors = function (e, t) {
      return r.getValueColors(this.bp, this.colors, e, t)
    }, o.prototype.getValueText = function (e) {
      return r.getValueText(this.bp, this.textValues, e)
    }, t.exports = o
  }, {
    "./common": 18
  }],
  37: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "TEMP_C", this.name = "Temperature (Â°C)", this.description = "", this.bp = [-200, o.ftoc(-100), o.ftoc(-10), o.ftoc(14), o.ftoc(23), o.ftoc(32), o.ftoc(41), o.ftoc(50), o.ftoc(59), o.ftoc(68), o.ftoc(77), o.ftoc(86), o.ftoc(95), o.ftoc(104)], this.units = "Â°C"
    }
    var o = e("./common"),
      i = new(e("./temperature"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, r.prototype.convert = function (e) {
      return o.ftoc(parseInt(e) + o.temperatureOffset)
    }, r.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > o.expires || null == e.temp || e.temp < -100 ? this.bp[0] : o.ftoc(e.temp + o.temperatureOffset)
    }, t.exports = r
  }, {
    "./common": 18,
    "./temperature": 36
  }],
  38: [function (e, t, n) {
    "use strict";

    function r() {
      this.id = "TEMP_U", this.name = "Raw Temperature", this.description = "", this.bp = [-200, -100, -10, 14, 23, 32, 41, 50, 59, 68, 77, 86, 95, 104]
    }
    var o = e("./common"),
      i = new(e("./temperature"));
    (r.prototype = Object.create(i.__proto__)).constructor = i, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, r.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > o.expires || null == e.temp ? this.bp[0] : e.temp
    }, t.exports = r
  }, {
    "./common": 18,
    "./temperature": 36
  }],
  39: [function (e, t, n) {
    "use strict";
    e("./common");

    function r() {
      this.id = "VG", this.name = "US EPA Village Green", this.description = "The Village Green Project is a community-based activity to demonstrate the capabilities of new real-time monitoring technology for residents and citizen scientists to learn about local air quality.", this.textValues = ["No current data", "Enjoy your activities.", "If medium readings continue (for an hour or more), use the Air Quality Index to plan activities.", "You may be near a source of particle pollution like dust, smoke or exhaust. Check the Air Quality Index to plan activities.", "You may be near a source of particle pollution like dust, smoke or exhaust. Check the Air Quality Index to find out if you should adjust activities. Very high readings may mean the sensor is not working properly."], this.bp = [-1, 0, 30, 70, 500], this.textValuesShort = ["-", "L", "M", "H", "V"], this.textValuesLong = ["-", "Low", "Medium", "High", "Very High"], this.colors = [
        [150, 150, 150],
        [222, 234, 246],
        [190, 214, 237],
        [34, 79, 120],
        [34, 79, 120]
      ], this.units = ""
    }
    var o = new(e("./pm25"));
    (r.prototype = Object.create(o.__proto__)).constructor = o, r.prototype.getLegendLabels = function (e) {
      return this.textValuesLong[e]
    }, r.prototype.getTextValueExtended = function (e) {
      for (var t in this.textValuesShort)
        if (this.textValuesShort[t] == e) return this.textValuesLong[t];
      return ""
    }, r.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? this.getVG(e) : ""
    }, r.prototype.convert = function (e, t, n) {
      return n(e)
    }, r.prototype.getValue = function (e, t, n) {
      var r = o.getValue(e, t, n);
      return r != o.bp[0] ? r : this.bp[0]
    }, r.prototype.getVG = function (e) {
      for (var t = this.bp.length; 0 < t; t--)
        if (e >= this.bp[t - 1]) return this.textValuesShort[t - 1]
    }, t.exports = r
  }, {
    "./common": 18,
    "./pm25": 34
  }],
  40: [function (e, t, n) {
    "use strict";
    var r = e("./common");

    function o() {
      this.id = "VOC", this.name = "VOC (iaq) EXPERIMENTAL", this.description = "VOC in Bosch static iaq units", this.bp = [-1, 0, 50, 100, 150, 200, 300, 500], this.units = "IAQ", this.textValues = ["No current data", "0-50: Good", "50-100: Average", "100-150: A little bad", "150-200: Bad", "200-300: Worse", "300-500: Very bad", ">500: Very bad"]
    }
    o.prototype.colors = [
      [150, 150, 150],
      [104, 225, 67],
      [255, 255, 85],
      [239, 133, 51],
      [234, 51, 36],
      [140, 26, 75],
      [140, 26, 75],
      [115, 20, 37]
    ], o.prototype.getFields = function (e) {
      return "voc"
    }, o.prototype.getTextValue = function (e) {
      return e != this.bp[0] ? e : ""
    }, o.prototype.convert = function (e) {
      return e
    }, o.prototype.getValue = function (e, t) {
      return !isNaN(t) || e.age > r.expires || null == e.voc ? this.bp[0] : Math.round(e.voc)
    }, o.prototype.getValueColor = function (e, t) {
      return r.getValueColor(this.bp, this.colors, e, t)
    }, o.prototype.getValueColors = function (e, t) {
      return r.getValueColors(this.bp, this.colors, e, t)
    }, o.prototype.getValueText = function (e) {
      return r.getValueText(this.bp, this.textValues, e)
    }, t.exports = o
  }, {
    "./common": 18
  }],
  41: [function (t, e, n) {
    "use strict";
    var r = t("./modules/common"),
      a = new(t("./modules/pm25")),
      s = new(t("./modules/pm10")),
      u = new(t("./modules/temperature")),
      l = new(t("./modules/humidity"));

    function c(e) {
      return e < -100 ? null : e + r.temperatureOffset
    }

    function p(e) {
      return e + r.humidityOffset
    }

    function d(e) {
      return t("dateformat")(e, "mmmm dS, yyyy, h:MM:ss TT Z")
    }

    function f(e, t) {
      var n = document.createElement("div");
      n.setAttribute("class", "current-conditions-averages");
      for (var r = 0; r < 7; r++) {
        var o, i, a, s, u, l, c = document.createElement("span");
        c.setAttribute("class", "legend-tooltip-popup"), 0 == r && (a = t.getTextValue(e.value0), s = e.value0, o = t.getValueColor(s, 1), 2 < e.age && (o = "#ccc", a = "-"), i = T(o), u = "Real Time", l = "Now"), 1 == r && (a = t.getTextValue(e.value1), s = e.value1, o = t.getValueColor(s, 1), 10 < e.age && (o = "#ccc", a = "-"), i = T(o), u = "10 Minute Average", l = "10 Min"), 2 == r && (a = t.getTextValue(e.value2), s = e.value2, o = t.getValueColor(s, 1), 30 < e.age && (o = "#ccc", a = "-"), i = T(o), u = "30 Minute Average", l = "30 Min"), 3 == r && (a = t.getTextValue(e.value3), s = e.value3, o = t.getValueColor(s, 1), 60 < e.age && (o = "#ccc", a = "-"), i = T(o), u = "One hour average", l = "1 hr"), 4 == r && (a = t.getTextValue(e.value4), s = e.value4, i = T(o = t.getValueColor(s, 1)), 360 < e.age && (o = "#ccc", a = "-"), u = "Six hour average", l = "6 hr"), 5 == r && (a = t.getTextValue(e.value5), s = e.value5, o = t.getValueColor(s, 1), 1440 < e.age && (o = "#ccc", a = "-"), i = T(o), u = "One day average", l = "1 Day"), 6 == r && (a = t.getTextValue(e.value6), s = e.value6, o = t.getValueColor(s, 1), 10080 < e.age && (o = "#ccc", a = "-"), i = T(o), u = "One week average", l = "Week"), c.setAttribute("style", "text-align:center;width:" + 100 / 7 + "%;background:" + o + ";color:" + i), c.innerHTML = "<div class=xxst>" + l + "</div>" + a;
        var p = document.createElement("span");
        p.innerHTML = "<div style='position:relative;height:100%;'>" + u + ": " + t.getValueText(s) + "</div>", p.setAttribute("class", "legend-tooltiptext"), c.appendChild(p), n.appendChild(c)
      }
      return n
    }

    function o(e, t) {
      if (null == e) return "";
      var n = "\n\n";
      n += "<div class='averageWrapper'>";
      var r = "";
      return n += "<div class='averageCell' style='clear: left; background-color: " + (r = t <= 2 ? x(e.v, 1) : "#ccc") + ";color:" + T(r) + ";'>Real Time<br><font size=+2>" + A(e.v) + "</font><br><font size=-1>" + +Math.round(+e.v) + "</font><font size=-3>&#181;g/m3</font></div>", n += "<div class='averageCell' style='background-color: " + (r = t <= 10 ? x(e.v1, 1) : "#ccc") + ";color:" + T(r) + ";'>Short-term<br><font size=+2>" + A(e.v1) + "</font><br><font size=-1>" + +Math.round(+e.v1) + "</font><font size=-3>&#181;g/m3</font></div>", n += "<div class='averageCell' style='background-color: " + (r = t <= 30 ? x(e.v2, 1) : "#ccc") + ";color:" + T(r) + ";'>30 minute<br><font size=+2>" + A(e.v2) + "</font><br><font size=-1>" + +Math.round(+e.v2) + "</font><font size=-3>&#181;g/m3</font></div>", n += "<div class='averageCell' style='background-color: " + (r = t <= 60 ? x(e.v3, 1) : "#ccc") + ";color:" + T(r) + ";'>1    hour<br><font size=+2>" + A(e.v3) + "</font><br><font size=-1>" + +Math.round(+e.v3) + "</font><font size=-3>&#181;g/m3</font></div>", n += "<div class='averageCell' style='background-color: " + (r = t <= 360 ? x(e.v4, 1) : "#ccc") + ";color:" + T(r) + ";'>6    hour<br><font size=+2>" + A(e.v4) + "</font><br><font size=-1>" + +Math.round(+e.v4) + "</font><font size=-3>&#181;g/m3</font></div>", n += "<div class='averageCell' style='background-color: " + (r = t <= 1440 ? x(e.v5, 1) : "#ccc") + ";color:" + T(r) + ";'>24   hour<br><font size=+2>" + A(e.v5) + "</font><br><font size=-1>" + +Math.round(+e.v5) + "</font><font size=-3>&#181;g/m3</font></div>", n += "<div class='averageCell' style='background-color: " + (r = t <= 10080 ? x(e.v6, 1) : "#ccc") + ";color:" + T(r) + ";'>One  week<br><font size=+2>" + A(e.v6) + "</font><br><font size=-1>" + +Math.round(+e.v6) + "</font><font size=-3>&#181;g/m3</font></div>", n += "</div>"
    }

    function h(e) {
      var t = [Math.floor(e / 60 / 24), Math.floor(e / 60) % 24, Math.floor(e) % 60];
      return 0 == t[0] && 0 == t[1] ? t[2] + " minutes" : 0 == t[0] ? (t[1] < 10 ? "0" : "") + t[1] + "h" + (t[2] < 10 ? "0" : "") + t[2] + "m" : t[0] + "d" + (t[1] < 10 ? "0" : "") + t[1] + "h" + (t[2] < 10 ? "0" : "") + t[2] + "m"
    }

    function i(e, t, n, r) {
      null == r && (r = 1);
      var o, i, a, s, u = (o = e, i = t, s = 1 - (a = (2 * n - 1 + 1) / 2), [Math.round(o[0] * a + i[0] * s), Math.round(o[1] * a + i[1] * s), Math.round(o[2] * a + i[2] * s)]);
      return "rgba(" + u[0] + ", " + u[1] + ", " + u[2] + ", " + r + ")"
    }

    function m(e, t) {
      if (null == e) return null;
      var n = 2 == t ? 100 : 10;
      return Math.round(e * n) / n
    }

    function g(e, t, n, r) {
      if (t && r) return null;
      if (null == e && null == n) return null;
      if (null == e) return n;
      if (null == n) return e;
      var o = {};
      t ? (o.v = n.v, o.v1 = n.v1, o.v2 = n.v2, o.v3 = n.v3, o.v4 = n.v4, o.v5 = n.v5, o.v6 = n.v6) : r ? (o.v = e.v, o.v1 = e.v1, o.v2 = e.v2, o.v3 = e.v3, o.v4 = e.v4, o.v5 = e.v5, o.v6 = e.v6) : (o.v = (e.v + n.v) / 2, o.v1 = (e.v1 + n.v1) / 2, o.v2 = (e.v2 + n.v2) / 2, o.v3 = (e.v3 + n.v3) / 2, o.v4 = (e.v4 + n.v4) / 2, o.v5 = (e.v5 + n.v5) / 2, o.v6 = (e.v6 + n.v6) / 2);
      var i = e.v;
      i += e.v1, i += e.v2, i += e.v3, i += e.v4, i += e.v5, i += e.v6;
      var a = n.v;
      return a += n.v1, a += n.v2, a += n.v3, a += n.v4, a += n.v5, a += n.v6, o.conf = function (e, t) {
        var n = Math.abs(e - t),
          r = (e + t) / 2,
          o = Math.round(n / r * 100 / 1.6);
        (o -= 25) < 0 && (o = 0);
        var i = 0;
        (i = 100 - o) < 0 && (i = 0);
        var a = 500 - n;
        a < 1 && (a = 1);
        o = Math.round(o * (a / 500)), 100 - o < 0 && 0;
        return i
      }(i, a), o
    }

    function y(e, t, n, r, o) {
      var i = t - n,
        a = r - o,
        s = e - o;
      return Math.round(i / a * s + n)
    }

    function v(e, t, n) {
      return "#" + (16777216 + n + 256 * t + 65536 * e).toString(16).substr(1)
    }

    function b(e) {
      return isNaN(e) ? "#808080" : 250.5 <= e || 150.5 <= e || 55.5 <= e ? v(255, 255, 255) : 35.5 <= e || 12.1 <= e || 0 <= e ? v(0, 0, 0) : void 0
    }

    function x(e, t) {
      if (null == t && (t = 1), isNaN(e)) return "#808080";
      if (e < 0) return "#fff";
      var n = A(e),
        r = C(50 * Math.floor(n / 50) + 1);
      return i(C(50 * (Math.floor(n / 50) + 1) + 1), r, 2 * (n - 50 * Math.floor(n / 50)) / 100, t)
    }

    function w(e, t) {
      e.hardware || (e.hardware = "");
      var n = "",
        r = "",
        o = "",
        i = "Laser counter channel ",
        a = " is downgraded.<br>This is usually due to abnormal readings caused by faulty hardware or contamination with debris or insects.",
        s = " is not found.<br>This is usually due to faulty hardware. Sometimes resetting power can fix this.";
      1 != e.ch && 3 != e.ch || (n = -1 < e.hardware.indexOf("PMSX003-A") || -1 < e.hardware.indexOf("PMSX003A") ? _("A", e.downgraded[0] ? "st fault" : "st", e.downgraded[0] ? i + "A" + a : i + "A") : _("A", "st fault", i + "A" + s)), 2 != e.ch && 3 != e.ch || (r = -1 < e.hardware.indexOf("PMSX003-A") || -1 < e.hardware.indexOf("PMSX003A") ? _("B", e.downgraded[1] ? "st fault" : "st", e.downgraded[1] ? i + "B" + a : i + "B") : _("B", "st fault", i + "B" + s));
      var o = "",
        u = "st ";
      o = _((o = e.conf < 50 ? (u += "fault", "&#x2717;") : (e.conf < 70 && (u += "warn"), "&#x2713;")) + e.conf + "%", u, "Confidence is a measure of how much this sensor's particulate or particle data can be trusted. It is calculated by comparing channel A and B."), null == e.conf && (o = ""), 0 == e.ch && (o = "");
      var l = "SD card hardware is present",
        c = _("&#x1f4be;", "", l + "."),
        p = _("&#x1f4be;", "fault", l + ", however an SD card is not detected and data will not be written to it."),
        d = _("&#x1f4be;", "fault", "SD logger is not detected and data may not be written to the SD card."),
        f = _("&#x1f4be;", "fault", l + ", however a real time clock is missing."),
        h = "Temperature, humidity and pressure sensor",
        m = _("&#x1f321;", "", h + "."),
        g = _("&#x1f321;", "fault", h + " is not detected."),
        y = _("&#x1f321;", "fault", h + " is detected but faulty."),
        v = ""; - 1 < e.hardware.indexOf("OPENLOG") && -1 < e.hardware.indexOf("DS3231") ? -1 < e.hardware.indexOf("NO-DISK") ? v += p : v += c : -1 == e.hardware.indexOf("OPENLOG") && -1 < e.hardware.indexOf("DS3231") ? v += d : -1 < e.hardware.indexOf("OPENLOG") && -1 == e.hardware.indexOf("DS3231") && (v += f), -1 < e.hardware.indexOf("BME") ? null == e.temp || isNaN(e.temp) ? v += y : v += m : v += g, v += n, v += r, v += o;
      var b = _(e.version, "st", "Firmware Version"),
        x = ""; - 1 < e.hardware.indexOf("PMSX003B") || -1 < e.hardware.indexOf("PMSX003-B") ? x += "PA-II" : -1 < e.hardware.indexOf("PMSX003-A") ? x += "PA-I" : -1 < e.hardware.indexOf("PMSX003-0") || -1 < e.hardware.indexOf("PMSX003-O") ? x += "PA-V1" : -1 < e.hardware.indexOf("PMSX003A") && (x += "PA-I"), (-1 < e.hardware.indexOf("DS3231") || -1 < e.hardware.indexOf("OPENLOG")) && (x += "-SD"), x = _(x, "st", "The type or model of sensor");
      var w, T, C, A = _("&#x29c9; Get This Widget", "nb", "Use this widget on a web site. Copy and paste the following text into the desired location on your web page: " + ("<textarea class='widgetText' onclick='this.focus();this.select()' readonly='readonly'>&lt;div id='" + (T = "PurpleAirWidget_" + (w = e).id + "_" + w.info.replace(/&/g, "_").replace(/=/g, "_")) + "'&gt;Loading PurpleAir Widget...&lt;/div&gt;\n&lt;script src='https://www.purpleair.com/pa.widget.js?key=" + w.key + "&" + w.info + "&container=" + T + "'&gt;&lt;/script&gt;</textarea>" + function (e) {
        var t = "<div class='widgetLinks'><a href='/sensorlist?key=" + e.key + "&show=" + e.id + "' target='_blank'>Download</a>";
        return t += " | <a href='/json?key=" + e.key + "&show=" + e.id, t += "' target='_blank'>JSON</a>", t += " | <a href='/data.json?key=" + e.key + "&show=" + e.id, t += "' target='_blank'>DATA.JSON</a></div>"
      }(w)));
      return t && (A = _("<a style='color:" + e.textColor + ";' target='_blank' href='https://www.purpleair.com/map?key=" + e.key + "&select=" + e.id + "&" + e.info + "#14/" + e.lat + "/" + e.lon + "'>&#x29c9; PurpleAir Map</a>", "nb", "View this sensor on the PurpleAir map...")), v + x + b + A + _(k(e.rssi), "sbsm fr nb", "This sensor's WiFi signal strength is " + (0 <= (C = e.rssi) ? "unknown" : -50 <= C ? "excellent" : -60 <= C ? "good" : -70 <= C ? "fair" : -80 <= C ? "weak" : "unstable") + " at " + e.rssi + "dbm")
    }

    function _(e, t, n) {
      if (!e) return "";
      var r = "<span class='legend-tooltip deviceIcon" + (t = t && " " + t) + "'>" + e;
      return n && (r += "<span class='legend-tooltiptext'><div style='position:relative;height:100%;'>" + n + "</div></span>"), r += "</span> "
    }

    function k(e) {
      return "<span class='si " + (0 <= (t = e) ? "bd on" : -50 <= t ? "gd fi" : -60 <= t ? "gd fo" : -70 <= t ? "ok th" : -80 <= t ? "bd tw" : "bd on") + "' id=''><span class='fir q'></span><span class='se q'></span><span class='th q'></span><span class='fo q'></span><span class='fif q'></span></span>";
      var t
    }

    function T(e) {
      var t;
      return -1 < e.indexOf("(") && (t = e.substring(e.indexOf("(") + 1, e.length - 1).split(",")), -1 < e.indexOf("#") && (t = [parseInt("0x" + e.substring(1, 3)), parseInt("0x" + e.substring(3, 5)), parseInt("0x" + e.substring(5, 7))]), null == t ? null : (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 123 ? "white" : "black"
    }

    function C(e) {
      return isNaN(e) ? [200, 200, 200] : e < 0 ? [255, 255, 255] : 401 <= e || 301 <= e ? [126, 0, 35] : 201 <= e ? [153, 0, 76] : 151 <= e ? [255, 0, 0] : 101 <= e ? [255, 126, 0] : 51 <= e ? [255, 255, 0] : 0 <= e ? [0, 228, 0] : void 0
    }

    function A(e) {
      return isNaN(e) || null == e ? "-" : e < 0 ? e : 2e3 < e ? "*" : 350.5 < e ? y(e, 500, 401, 500, 350.5) : 250.5 < e ? y(e, 400, 301, 350.4, 250.5) : 150.5 < e ? y(e, 300, 201, 250.4, 150.5) : 55.5 < e ? y(e, 200, 151, 150.4, 55.5) : 35.5 < e ? y(e, 150, 101, 55.4, 35.5) : 12.1 < e ? y(e, 100, 51, 35.4, 12.1) : 0 <= e ? y(e, 50, 0, 12, 0) : void 0
    }

    function M(e) {
      var t;
      if (null != e && "" != e) try {
        t = JSON.parse(e)
      } catch (e) {}
      return t
    }

    function b(e) {
      return isNaN(e) || null == e || e < 0 || 2e3 < e ? "red" : 350.5 < e || 250.5 < e || 150.5 < e || 55.5 < e || 35.5 < e ? v(255, 255, 255) : 12.1 < e || 0 <= e ? v(0, 0, 0) : "red"
    }
    e.exports = {
      getTimeString: d,
      pickRGBA: i,
      getCurrentConditions: function (e, t, n, r, o) {
        var i = document.createElement("div");
        i.setAttribute("id", "currentConditions"), i.setAttribute("class", "current-conditions"), i.setAttribute("style", "background-color: " + r.getValueColor(t.value) + ";color: " + T(r.getValueColor(t.value)));
        var a = "<div class='fit popup-time-stamp' id='popup-time-stamp'>On " + d(e) + "</div>",
          s = "";
        r.getConversionName() && (s = " (" + r.getConversionName() + ")"), a += "<div class='popup-conditions' >" + r.getAverageText(n) + " " + r.getName() + s + " is now</div>";
        var u = r.getTextValueExtended(t.textValue),
          l = r.getValueText(t.value);
        t.value == r.getBp()[0] && (u = "-", l = "This sensor is not reporting this parameter at the moment."), a += 3 < ("" + u).length ? "<div class='popup-aqi popup-small'>" + u + "</div>" : 2 < ("" + u).length ? "<div class='popup-aqi popup-medium'>" + u + "</div>" : "<div class='popup-aqi popup-large'>" + u + "</div>";
        var c = "-1";
        l.length < 50 && (c = 0), l.length < 35 && (c = "+1"), l.length < 25 && (c = "+2"), l.length < 15 && (c = "+3"), l.length < 10 && (c = "+4"), l.length < 5 && (c = "+5"), a += "<div style='clear: both;padding:5px 0 10px 0;'><font size='" + c + "'>" + l + "</font></div>", -1 < t.value6 && (a += f(t, r).innerHTML), a += "<div  class='popup-sensor-name hyphenate' >", "inside" == t.t && (a += "<span class='glyphicon glyphicon-home' ></span>"), a += " Sensor: " + t.l + "</div>", 10 < t.age && (a += "<div class='popup-error-message'>Current status not received for " + h(t.age) + "</div><div class='popup-error-help'><ul><li>Ensure the sensor has power (look for a red glow inside the device).</li><li>If a WiFi network with a name like 'AirMonitor_' or 'PurpleAir-xxxx' is visible then the sensor needs to be <a href='/configure'>configured</a> to connect to WiFi.</li></ul></div>"), i.innerHTML = a;
        var p = document.createElement("div");
        return p.setAttribute("id", "popupSensorInfo"), p.setAttribute("class", "clearfix"), o && (p.innerHTML = o), i.appendChild(p), i.outerHTML
      },
      fToC: function (e) {
        return (t = e) < -100 ? null : (t += r.temperatureOffset, Math.round(5 * (t - 32) / 9 * 100) / 100);
        var t
      },
      fToF: c,
      hToH: p,
      getParameterByName: function (e, t) {
        t = t || window.location.href, e = e.replace(/[\[\]]/g, "\\$&");
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
      },
      getRootUrl: function (e) {
        return e.toString().replace(/^(.*\/\/[^\/?#]*).*$/, "$1")
      },
      getIcons: function () {
        return ""
      },
      getRating: function (e) {
        var t = M(e);
        if (null == t) return "--";
        var n = t.conf - 50;
        return n < 0 && (n = 0), 0 - 20 * (Math.round(n / 10) - 1)
      },
      getConfScore: function (e, t) {
        if (10 < t) return "";
        var n = M(e);
        return null == n || null == n.conf ? "" : n.conf + "%"
      },
      hasConf: function (e) {
        var t = M(e);
        return null != t && (!!t.conf || void 0)
      },
      getConf: function (e) {
        var t = M(e);
        if (null == t) return "--";
        var n = t.conf - 50;
        return n < 0 && (n = 0), Math.round(n / 10)
      },
      getConfColor: function (e) {
        return 30 < e ? "default" : "ok"
      },
      getConfVis: function (e) {
        var t = M(e);
        return null == t || isNaN(t.conf) ? "hide" : ""
      },
      getClassedContent: function (e, t) {
        var n = M(e);
        return null == n ? "" : function (e, t) {
          if (null == e) return "";
          var n = "\n\n";
          return n += "<div class='aw3'>", n += "<div class='c-" + (t <= 2 ? e.v : "g") + "'></div>", n += "<div class='c-" + (t <= 10 ? e.v1 : "g") + "'></div>", n += "<div class='c-" + (t <= 30 ? e.v2 : "g") + "'></div>", n += "<div class='c-" + (t <= 60 ? e.v3 : "g") + "'></div>", n += "<div class='c-" + (t <= 360 ? e.v4 : "g") + "'></div>", n += "<div class='c-" + (t <= 1440 ? e.v5 : "g") + "'></div>", n += "<div class='c-" + (t <= 10080 ? e.v6 : "g") + "'></div>", n += "</div>"
        }(n, t)
      },
      getAveragesChannelContent: function (e, t) {
        return n = t, null == (r = M(e)) ? "" : o(r, n);
        var n, r
      },
      getAveragesChannelContentJSON: o,
      getAveragesChannelContent2: function (e, t) {
        var n = M(e);
        return null == n ? "" : function (e, t) {
          if (null == e) return "";
          var n = "\n\n";
          return n += "<div class='aw'>", n += "<div style='clear: left; background-color: " + (t <= 2 ? x(e.v, 1) : "#ccc") + ";'></div>", n += "<div style='background-color: " + (t <= 10 ? x(e.v1, 1) : "#ccc") + ";'></div>", n += "<div style='background-color: " + (t <= 30 ? x(e.v2, 1) : "#ccc") + ";'></div>", n += "<div style='background-color: " + (t <= 60 ? x(e.v3, 1) : "#ccc") + ";'></div>", n += "<div style='background-color: " + (t <= 360 ? x(e.v4, 1) : "#ccc") + ";'></div>", n += "<div style='background-color: " + (t <= 1440 ? x(e.v5, 1) : "#ccc") + ";'></div>", n += "<div style='background-color: " + (t <= 10080 ? x(e.v6, 1) : "#ccc") + ";'></div>", n += "</div>"
        }(n, t)
      },
      getAveragesChannelContent22: function (e, t) {
        var n = M(e);
        return null == n ? "" : function (e, t) {
          if (null == e) return "";
          var n = "\n\n";
          return n += "<div class='aw2'>", n += "<div style='clear: left; background-color: " + (t <= 2 ? x(e.v, 1) : "#ccc") + ";color:" + b(e.v) + ";'>Now<br><font size=+0>" + +Math.round(+e.v) + "</font></div>", n += "<div style='background-color: " + (t <= 10 ? x(e.v1, 1) : "#ccc") + ";color:" + b(e.v1) + ";'>10min<br><font size=+0>" + +Math.round(+e.v1) + "</font></div>", n += "<div style='background-color: " + (t <= 30 ? x(e.v2, 1) : "#ccc") + ";color:" + b(e.v2) + ";'>30min<br><font size=+0>" + +Math.round(+e.v2) + "</font></div>", n += "<div style='background-color: " + (t <= 60 ? x(e.v3, 1) : "#ccc") + ";color:" + b(e.v3) + ";'>60min<br><font size=+0>" + +Math.round(+e.v3) + "</font></div>", n += "<div style='background-color: " + (t <= 360 ? x(e.v4, 1) : "#ccc") + ";color:" + b(e.v4) + ";'>6hr<br><font size=+0>" + +Math.round(+e.v4) + "</font></div>", n += "<div style='background-color: " + (t <= 1440 ? x(e.v5, 1) : "#ccc") + ";color:" + b(e.v5) + ";'>24hr<br><font size=+0>" + +Math.round(+e.v5) + "</font></div>", n += "<div style='background-color: " + (t <= 10080 ? x(e.v6, 1) : "#ccc") + ";color:" + b(e.v6) + ";'>Week<br><font size=+0>" + +Math.round(+e.v6) + "</font></div>", n += "</div>"
        }(n, t)
      },
      getContent3: function (e) {
        var t = e.pm2_5,
          n = e.age,
          r = "\n\n";
        r += "<div class='aw4'>";
        var o, i = "";
        return r += "<div style='line-height: 1.2em;clear: left; background-color: " + (i = n <= 10 ? a.getValueColor(t, 1) : "#ccc") + ";color:" + T(i) + ";'>PM2.5 (Âµg/mÂ³)<br><br><font size=+0>", r += 10 < n ? "--" : t + "", r += "</font></div>", r += "<div style='line-height: 1.2em;background-color: " + (i = n <= 10 ? s.getValueColor(e.pm10) : "#ccc") + ";color:" + T(i) + ";'>PM10 (Âµg/mÂ³)<br><br><font size=+0>", r += 10 < n ? "--" : e.pm10 + "", r += "</font></div>", r += "<div style='background-color: " + (i = n <= 10 ? u.getValueColor(c(e.temp)) : "#ccc") + ";color:" + T(i) + ";'>Temp<br><font size=+0>", r += 10 < n ? "--" : c(e.temp) + "Â°F", r += "</font></div>", r += "<div style='background-color: " + (i = n <= 10 ? l.getValueColor(p(e.h)) : "#ccc") + ";color:" + T(i) + ";'>Humidity<br><font size=+0>", r += 10 < n ? "--" : p(e.h) + "%", r += "</font></div>", r += "<div style='line-height: 1.2em;background-color: " + (i = "#eee") + ";color:black;'>Pressure (hPa)<br><br><font size=+0>", r += 10 < n ? "--" : e.p, r += "</font></div>", r += "</div>", r += "<div style='line-height: 1.2em;clear: both;font-weight:normal;'><br>", r += n <= 10 ? 2e3 <= (o = t) ? ">2000&#181;g/m3+: This sensor is likely to be faulty." : 500 <= o ? "500&#181;g/m3+&#181;g/m3: Health warnings of emergency conditions. The entire population is more likely to be affected. This sensor may also be faulty." : 250 <= o ? "250-500&#181;g/m3: Health warnings of emergency conditions. The entire population is more likely to be affected. " : 150 <= o ? "150-250&#181;g/m3: Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects." : 35 <= o ? "35-150&#181;g/m3: Members of sensitive groups may experience health effects. The general public is not likely to be affected." : 12 <= o ? "12-35&#181;g/m3: Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution." : 0 <= o ? "0-12&#181;g/m3: Air quality is considered satisfactory, and air pollution poses little or no risk" : "Unknown conditions" : "<font style='color:red;font-weight:bold;' size='+0'>This sensor has not reported for " + h(n) + ".</red>", r += "</div>"
      },
      multiply: function (e, t) {
        return e * t
      },
      aqiFromPM: A,
      getAQIDescription: function (e) {
        return 401 <= (t = A(e)) || 301 <= t ? "Hazardous" : 201 <= t ? "Very Unhealthy" : 151 <= t ? "Unhealthy" : 101 <= t ? "Unhealthy for Sensitive Groups" : 51 <= t ? "Moderate" : 0 <= t ? "Good" : void 0;
        var t
      },
      getAQIMessage: function (e) {
        return 401 <= (t = A(e)) ? ">401: Health alert: everyone may experience more serious health effects" : 301 <= t ? "301-400: Health warnings of emergency conditions. The entire population is more likely to be affected. " : 201 <= t ? "201-300: Health alert: everyone may experience more serious health effects" : 151 <= t ? "151-200: Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects." : 101 <= t ? "101-150: Members of sensitive groups may experience health effects. The general public is not likely to be affected." : 51 <= t ? "51-100: Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution." : 0 <= t ? "0-50: Air quality is considered satisfactory, and air pollution poses little or no risk" : void 0;
        var t
      },
      getPM: function (e, t, n, r) {
        return o = e, a = n, s = r, (i = t) && s ? null : i ? m(a, 1) : s ? m(o, 1) : null == o && null != a ? m(a, 1) : null == a && null != o ? m(o, 1) : null == a && null == o ? null : m((o + a) / 2, 1);
        var o, i, a, s
      },
      getAQIColorGradedRGBA: x,
      getTextColorContrasted: T,
      getDowngraded: function (e, t, n, r, o, i) {
        return function (e, t, n, r, o, i) {
          var a = [!1, !1],
            s = [!1, !1];
          a[0] = o, a[1] = i, null != n && 2e3 < n && (a[0] = !0), null != r && 2e3 < r && (a[1] = !0);
          var u = -1;
          null != e && null != e.v && null != e.v1 && null != e.v2 && null != e.v3 && (u = e.v + e.v1 + e.v2 + e.v3);
          var l = -1;
          return null != t && null != t.v && null != t.v1 && null != t.v2 && null != t.v3 && (l = t.v + t.v1 + t.v2 + t.v3), !a[0] && !a[1] && u < l / 10 && (s[0] = !0), !a[0] && !a[1] && l < u / 10 && (s[1] = !0), s[0] && (a[0] = !0), s[1] && (a[1] = !0), a
        }(M(e), M(t), n, r, o, i)
      },
      calculateValues: function (e, t, n, r) {
        return g(M(e), t, M(n), r)
      },
      getAveragesSmall: f,
      getModel: w,
      getRSSI: k
    }
  }, {
    "./modules/common": 18,
    "./modules/humidity": 21,
    "./modules/pm10": 32,
    "./modules/pm25": 34,
    "./modules/temperature": 36,
    dateformat: 3
  }],
  42: [function (t, e, n) {
    (function (e) {
      "use strict";
      ! function () {
        var l = new function () {
            var t;
            try {
              throw new Error
            } catch (e) {
              var n = e.stack.split("\n"),
                r = 0;
              for (var o in n)
                if (n[o].match(/http[s]?:\/\//)) {
                  r = Number(o);
                  break
                } t = n[r].match(/((http[s]?:\/\/.+\/)([^\/]+\.js)(\?)(.+))+:.+:/)
            }
            this.fullPath = function () {
              return t[1]
            }, this.path = function () {
              return t[2]
            }, this.file = function () {
              return t[3]
            }, this.fileNoExt = function () {
              var e = this.file().split(".");
              return e.length = 1 != e.length ? e.length - 1 : 1, e.join(".")
            }
          },
          d = new(t("./moduleSelector")),
          f = t("./compensatorSelector"),
          h = (t(".././css/widget.min.css"), t("jquery"));
        window.jQuery = t("jquery");
        var m = t("./utils.js"),
          g = t("textfit"),
          a = !1,
          s = !1;

        function c(e, t) {
          t = t || window.location.href, e = e.replace(/[\[\]]/g, "\\$&");
          var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
          return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
        }

        function p() {
          function e(e) {
            var t = "visible",
              n = "hidden",
              r = {
                focus: t,
                focusin: t,
                pageshow: t,
                blur: n,
                focusout: n,
                pagehide: n
              };
            (e = e || window.event).type in r ? document.body.className = r[e.type] : document.body.className = this[o] ? "hidden" : "visible", "visible" == document.body.className ? (a = !0, s && (s = !1, u())) : a = !1
          }
          var o;
          (o = "hidden") in document ? document.addEventListener("visibilitychange", e) : (o = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", e) : (o = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", e) : (o = "msHidden") in document ? document.addEventListener("msvisibilitychange", e) : "onfocusin" in document ? document.onfocusin = document.onfocusout = e : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = e, void 0 !== document[o] && e({
            type: document[o] ? "blur" : "focus"
          }), u()
        }

        function u() {
          if (window.paloader && window.clearTimeout(window.paloader), window.paloader = window.setTimeout(u, 12e4), a) {
            var e = l.path(); - 1 < e.indexOf("9966") && e.replace("9966", "8080");
            var t = "",
              n = "";
            for (var r in window.widgetList) window.widgetList[r].id && (h("#" + window.widgetList[r].container).find("#popup-time-stamp").html("Refreshing information..."), n += "" == n ? window.widgetList[r].id : "|" + window.widgetList[r].id), window.widgetList[r].key && (h("#" + window.widgetList[r].container).find("#popup-time-stamp").html("Refreshing information..."), t += "" == t ? window.widgetList[r].key : "|" + window.widgetList[r].key);
            var o = !1,
              i = e + "json?callback=?";
            n && (i += "&show=" + n, o = !0), t && (i += "&key=" + t, o = !0), o && h.getJSON(i, function (e) {
              var t = e.results;
              y(t), y(t)
            })
          } else s = !0
        }

        function y(e) {
          for (var t in e) {
            var n = e[t];
            for (var r in window.widgetList)(window.widgetList[r].key == n.THINGSPEAK_PRIMARY_ID_READ_KEY || window.widgetList[r].data && window.widgetList[r].data.id == n.ParentID) && function (e, t) {
              var n = window.widgetList[e].data;
              n = n || {};
              n.p_array || (n.p_array = [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ]);
              n.pm_array || (n.pm_array = [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
              ]);
              null == t.ParentID ? (n.l = t.Label, n.objStatsA = t.Stats, n.PM_A = parseFloat(t.PM2_5Value), "true" === t.A_H && (n.A_H = !0), n.AGE_A = t.AGE, n.lat = t.Lat, n.lon = t.Lon, n.p_array[0][0] = parseFloat(t.p_0_3_um), n.p_array[1][0] = parseFloat(t.p_0_5_um), n.p_array[2][0] = parseFloat(t.p_1_0_um), n.p_array[3][0] = parseFloat(t.p_2_5_um), n.p_array[4][0] = parseFloat(t.p_5_0_um), n.p_array[5][0] = parseFloat(t.p_10_0_um), n.pm_array[0][0] = parseFloat(t.pm1_0_cf_1), n.pm_array[1][0] = parseFloat(t.pm2_5_cf_1), n.pm_array[2][0] = parseFloat(t.pm10_0_cf_1), n.pm_array[3][0] = parseFloat(t.pm1_0_atm), n.pm_array[4][0] = parseFloat(t.pm2_5_atm), n.pm_array[5][0] = parseFloat(t.pm10_0_atm), n.key = t.THINGSPEAK_PRIMARY_ID_READ_KEY, n.id = t.ID) : null != t.ParentID && (n.objStatsB = t.Stats, n.PM_B = parseFloat(t.PM2_5Value), "true" === t.A_H && (n.B_H = !0), n.AGE_B = t.AGE, n.p_array[0][1] = parseFloat(t.p_0_3_um), n.p_array[1][1] = parseFloat(t.p_0_5_um), n.p_array[2][1] = parseFloat(t.p_1_0_um), n.p_array[3][1] = parseFloat(t.p_2_5_um), n.p_array[4][1] = parseFloat(t.p_5_0_um), n.p_array[5][1] = parseFloat(t.p_10_0_um), n.pm_array[0][1] = parseFloat(t.pm1_0_cf_1), n.pm_array[1][1] = parseFloat(t.pm2_5_cf_1), n.pm_array[2][1] = parseFloat(t.pm10_0_cf_1), n.pm_array[3][1] = parseFloat(t.pm1_0_atm), n.pm_array[4][1] = parseFloat(t.pm2_5_atm), n.pm_array[5][1] = parseFloat(t.pm10_0_atm));
              t.pressure && (n.pressure = parseInt(t.pressure));
              t.humidity && (n.h = parseInt(t.humidity));
              t.temp_f && (n.temp = parseInt(t.temp_f));
              t.Ozone1 && (n.ozone1 = t.Ozone1);
              t.Voc && (n.voc = t.Voc);
              t.DEVICE_HARDWAREDISCOVERED && (n.hardware = t.DEVICE_HARDWAREDISCOVERED);
              t.Version && (n.version = t.Version);
              t.RSSI && (n.rssi = parseInt(t.RSSI));
              var r = n.AGE_A;
              n.AGE_B < r && (r = n.AGE_B);
              n.downgraded = m.getDowngraded(n.objStatsA, n.objStatsB, n.PM_A, n.PM_B, n.A_H, n.B_H);
              var o = m.getPM(n.PM_A, n.downgraded[0], n.PM_B, n.downgraded[1]),
                i = m.calculateValues(n.objStatsA, n.downgraded[0], n.objStatsB, n.downgraded[1]);
              n.ch = 0, null != n.PM_A && (n.ch = n.ch + 1);
              null != n.PM_B && (n.ch = n.ch + 2);
              n.pm2_5 = o, n.pm_0 = i.v, n.pm_1 = i.v1, n.pm_2 = i.v2, n.pm_3 = i.v3, n.pm_4 = i.v4, n.pm_5 = i.v5, n.pm_6 = i.v6, n.conf = i.conf, n.p1 = m.getPM(n.p_array[0][0], n.downgraded[0], n.p_array[0][1], n.downgraded[1]), n.p2 = m.getPM(n.p_array[1][0], n.downgraded[0], n.p_array[1][1], n.downgraded[1]), n.p3 = m.getPM(n.p_array[2][0], n.downgraded[0], n.p_array[2][1], n.downgraded[1]), n.p4 = m.getPM(n.p_array[3][0], n.downgraded[0], n.p_array[3][1], n.downgraded[1]), n.p5 = m.getPM(n.p_array[4][0], n.downgraded[0], n.p_array[4][1], n.downgraded[1]), n.p6 = m.getPM(n.p_array[5][0], n.downgraded[0], n.p_array[5][1], n.downgraded[1]), n.pm1 = m.getPM(n.pm_array[0][0], n.downgraded[0], n.pm_array[0][1], n.downgraded[1]), n.pm25 = m.getPM(n.pm_array[1][0], n.downgraded[0], n.pm_array[1][1], n.downgraded[1]), n.pm10 = m.getPM(n.pm_array[2][0], n.downgraded[0], n.pm_array[2][1], n.downgraded[1]), n.pm1a = m.getPM(n.pm_array[3][0], n.downgraded[0], n.pm_array[3][1], n.downgraded[1]), n.pm25a = m.getPM(n.pm_array[4][0], n.downgraded[0], n.pm_array[4][1], n.downgraded[1]), n.pm10a = m.getPM(n.pm_array[5][0], n.downgraded[0], n.pm_array[5][1], n.downgraded[1]), n.age = r, d.select(window.widgetList[e].theModule, window.widgetList[e].theConversion), f.select(window.widgetList[e].theConversion);
              var a = window.widgetList[e].theAverage;
              (n = f.compensate(n)).value = d.getValue(n, void 0, a), n.textValue = d.getTextValue(n.value), n.value0 = d.getValue(n, 0, a), n.value1 = d.getValue(n, 1, a), n.value2 = d.getValue(n, 2, a), n.value3 = d.getValue(n, 3, a), n.value4 = d.getValue(n, 4, a), n.value5 = d.getValue(n, 5, a), n.value6 = d.getValue(n, 6, a);
              var s = new Date,
                u = "";
              n.info = "module=" + window.widgetList[e].theModule + "&conversion=" + window.widgetList[e].theConversion + "&average=" + a + "&layer=" + window.widgetList[e].theLayer;
              var l = d.getValueColor(n.value, 1),
                c = m.getTextColorContrasted(l);
              n.textColor = c, window.widgetList[e].data = n;
              var p = m.getModel(n, !0);
              u += m.getCurrentConditions(s, n, window.widgetList[e].theAverage, d, p), h("#" + window.widgetList[e].container).html(u), g(document.getElementsByClassName("fit"))
            }(r, n)
          }
        }
        jQuery(document).ready(function () {
          var e = l.fullPath(),
            t = c("id", e),
            n = c("key", e),
            r = c("container", e);
          null == t && (t = r.split("_")[1]);
          var o = c("module", e),
            i = c("conversion", e),
            a = c("average", e),
            s = c("layer", e);
          null == o && (o = "AQI"), null == i && (i = "C0"), null == a && (a = 10), null == s && (s = "standard"), window.widgetList || (window.widgetList = []);
          var u = {};
          u.id = t, u.key = n, u.container = r, u.theModule = o, u.theConversion = i, u.theAverage = a, u.theLayer = s, window.widgetList.push(u), window.paloader && window.clearTimeout(window.paloader), window.paloader = window.setTimeout(p, 1e3)
        })
      }()
    }).call(this, t("_process"))
  }, {
    ".././css/widget.min.css": 1,
    "./compensatorSelector": 7,
    "./moduleSelector": 13,
    "./utils.js": 41,
    _process: 5,
    jquery: 4,
    textfit: 6
  }]
}, {}, [42]);
