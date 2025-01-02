/*! For license information please see main.2d2a9d00.js.LICENSE.txt */
!function() {
    var e = {
        881: function(e, t, n) {
            var r = "Expected a function"
              , a = NaN
              , o = "[object Symbol]"
              , i = /^\s+|\s+$/g
              , l = /^[-+]0x[0-9a-f]+$/i
              , s = /^0b[01]+$/i
              , u = /^0o[0-7]+$/i
              , c = parseInt
              , f = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
              , d = "object" == typeof self && self && self.Object === Object && self
              , p = f || d || Function("return this")()
              , h = Object.prototype.toString
              , v = Math.max
              , m = Math.min
              , g = function() {
                return p.Date.now()
            };
            function y(e, t, n) {
                var a, o, i, l, s, u, c = 0, f = !1, d = !1, p = !0;
                if ("function" != typeof e)
                    throw new TypeError(r);
                function h(t) {
                    var n = a
                      , r = o;
                    return a = o = void 0,
                    c = t,
                    l = e.apply(r, n)
                }
                function y(e) {
                    var n = e - u;
                    return void 0 === u || n >= t || n < 0 || d && e - c >= i
                }
                function w() {
                    var e = g();
                    if (y(e))
                        return k(e);
                    s = setTimeout(w, function(e) {
                        var n = t - (e - u);
                        return d ? m(n, i - (e - c)) : n
                    }(e))
                }
                function k(e) {
                    return s = void 0,
                    p && a ? h(e) : (a = o = void 0,
                    l)
                }
                function S() {
                    var e = g()
                      , n = y(e);
                    if (a = arguments,
                    o = this,
                    u = e,
                    n) {
                        if (void 0 === s)
                            return function(e) {
                                return c = e,
                                s = setTimeout(w, t),
                                f ? h(e) : l
                            }(u);
                        if (d)
                            return s = setTimeout(w, t),
                            h(u)
                    }
                    return void 0 === s && (s = setTimeout(w, t)),
                    l
                }
                return t = x(t) || 0,
                b(n) && (f = !!n.leading,
                i = (d = "maxWait"in n) ? v(x(n.maxWait) || 0, t) : i,
                p = "trailing"in n ? !!n.trailing : p),
                S.cancel = function() {
                    void 0 !== s && clearTimeout(s),
                    c = 0,
                    a = u = o = s = void 0
                }
                ,
                S.flush = function() {
                    return void 0 === s ? l : k(g())
                }
                ,
                S
            }
            function b(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function x(e) {
                if ("number" == typeof e)
                    return e;
                if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return !!e && "object" == typeof e
                    }(e) && h.call(e) == o
                }(e))
                    return a;
                if (b(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = b(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(i, "");
                var n = s.test(e);
                return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : l.test(e) ? a : +e
            }
            e.exports = function(e, t, n) {
                var a = !0
                  , o = !0;
                if ("function" != typeof e)
                    throw new TypeError(r);
                return b(n) && (a = "leading"in n ? !!n.leading : a,
                o = "trailing"in n ? !!n.trailing : o),
                y(e, t, {
                    leading: a,
                    maxWait: t,
                    trailing: o
                })
            }
        },
        888: function(e, t, n) {
            "use strict";
            var r = n(47);
            function a() {}
            function o() {}
            o.resetWarningCache = a,
            e.exports = function() {
                function e(e, t, n, a, o, i) {
                    if (i !== r) {
                        var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw l.name = "Invariant Violation",
                        l
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: a
                };
                return n.PropTypes = n,
                n
            }
        },
        7: function(e, t, n) {
            e.exports = n(888)()
        },
        47: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        463: function(e, t, n) {
            "use strict";
            var r = n(791)
              , a = n(296);
            function o(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var i = new Set
              , l = {};
            function s(e, t) {
                u(e, t),
                u(e + "Capture", t)
            }
            function u(e, t) {
                for (l[e] = t,
                e = 0; e < t.length; e++)
                    i.add(t[e])
            }
            var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement)
              , f = Object.prototype.hasOwnProperty
              , d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , p = {}
              , h = {};
            function v(e, t, n, r, a, o, i) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
                this.attributeName = r,
                this.attributeNamespace = a,
                this.mustUseProperty = n,
                this.propertyName = e,
                this.type = t,
                this.sanitizeURL = o,
                this.removeEmptyString = i
            }
            var m = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                m[e] = new v(e,0,!1,e,null,!1,!1)
            }
            )),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
                var t = e[0];
                m[t] = new v(t,1,!1,e[1],null,!1,!1)
            }
            )),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                m[e] = new v(e,2,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                m[e] = new v(e,2,!1,e,null,!1,!1)
            }
            )),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                m[e] = new v(e,3,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                m[e] = new v(e,3,!0,e,null,!1,!1)
            }
            )),
            ["capture", "download"].forEach((function(e) {
                m[e] = new v(e,4,!1,e,null,!1,!1)
            }
            )),
            ["cols", "rows", "size", "span"].forEach((function(e) {
                m[e] = new v(e,6,!1,e,null,!1,!1)
            }
            )),
            ["rowSpan", "start"].forEach((function(e) {
                m[e] = new v(e,5,!1,e.toLowerCase(),null,!1,!1)
            }
            ));
            var g = /[\-:]([a-z])/g;
            function y(e) {
                return e[1].toUpperCase()
            }
            function b(e, t, n, r) {
                var a = m.hasOwnProperty(t) ? m[t] : null;
                (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                    if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                        if (null !== n && 0 === n.type)
                            return !1;
                        switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                        }
                    }(e, t, n, r))
                        return !0;
                    if (r)
                        return !1;
                    if (null !== n)
                        switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                        }
                    return !1
                }(t, n, a, r) && (n = null),
                r || null === a ? function(e) {
                    return !!f.call(h, e) || !f.call(p, e) && (d.test(e) ? h[e] = !0 : (p[e] = !0,
                    !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName,
                r = a.attributeNamespace,
                null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var t = e.replace(g, y);
                m[t] = new v(t,1,!1,e,null,!1,!1)
            }
            )),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var t = e.replace(g, y);
                m[t] = new v(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
            }
            )),
            ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var t = e.replace(g, y);
                m[t] = new v(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
            }
            )),
            ["tabIndex", "crossOrigin"].forEach((function(e) {
                m[e] = new v(e,1,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            m.xlinkHref = new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
            ["src", "href", "action", "formAction"].forEach((function(e) {
                m[e] = new v(e,1,!1,e.toLowerCase(),null,!0,!0)
            }
            ));
            var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , w = Symbol.for("react.element")
              , k = Symbol.for("react.portal")
              , S = Symbol.for("react.fragment")
              , E = Symbol.for("react.strict_mode")
              , C = Symbol.for("react.profiler")
              , P = Symbol.for("react.provider")
              , j = Symbol.for("react.context")
              , T = Symbol.for("react.forward_ref")
              , O = Symbol.for("react.suspense")
              , N = Symbol.for("react.suspense_list")
              , _ = Symbol.for("react.memo")
              , M = Symbol.for("react.lazy");
            Symbol.for("react.scope"),
            Symbol.for("react.debug_trace_mode");
            var R = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker");
            var L = Symbol.iterator;
            function A(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = L && e[L] || e["@@iterator"]) ? e : null
            }
            var D, V = Object.assign;
            function I(e) {
                if (void 0 === D)
                    try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        D = t && t[1] || ""
                    }
                return "\n" + D + e
            }
            var z = !1;
            function F(e, t) {
                if (!e || z)
                    return "";
                z = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                            throw Error()
                        }
                        ,
                        Object.defineProperty(t.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (u) {
                                var r = u
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (u) {
                                r = u
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (u) {
                            r = u
                        }
                        e()
                    }
                } catch (u) {
                    if (u && r && "string" === typeof u.stack) {
                        for (var a = u.stack.split("\n"), o = r.stack.split("\n"), i = a.length - 1, l = o.length - 1; 1 <= i && 0 <= l && a[i] !== o[l]; )
                            l--;
                        for (; 1 <= i && 0 <= l; i--,
                        l--)
                            if (a[i] !== o[l]) {
                                if (1 !== i || 1 !== l)
                                    do {
                                        if (i--,
                                        0 > --l || a[i] !== o[l]) {
                                            var s = "\n" + a[i].replace(" at new ", " at ");
                                            return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                            s
                                        }
                                    } while (1 <= i && 0 <= l);
                                break
                            }
                    }
                } finally {
                    z = !1,
                    Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? I(e) : ""
            }
            function B(e) {
                switch (e.tag) {
                case 5:
                    return I(e.type);
                case 16:
                    return I("Lazy");
                case 13:
                    return I("Suspense");
                case 19:
                    return I("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = F(e.type, !1);
                case 11:
                    return e = F(e.type.render, !1);
                case 1:
                    return e = F(e.type, !0);
                default:
                    return ""
                }
            }
            function U(e) {
                if (null == e)
                    return null;
                if ("function" === typeof e)
                    return e.displayName || e.name || null;
                if ("string" === typeof e)
                    return e;
                switch (e) {
                case S:
                    return "Fragment";
                case k:
                    return "Portal";
                case C:
                    return "Profiler";
                case E:
                    return "StrictMode";
                case O:
                    return "Suspense";
                case N:
                    return "SuspenseList"
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                    case j:
                        return (e.displayName || "Context") + ".Consumer";
                    case P:
                        return (e._context.displayName || "Context") + ".Provider";
                    case T:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                    case _:
                        return null !== (t = e.displayName || null) ? t : U(e.type) || "Memo";
                    case M:
                        t = e._payload,
                        e = e._init;
                        try {
                            return U(e(t))
                        } catch (n) {}
                    }
                return null
            }
            function H(e) {
                var t = e.type;
                switch (e.tag) {
                case 24:
                    return "Cache";
                case 9:
                    return (t.displayName || "Context") + ".Consumer";
                case 10:
                    return (t._context.displayName || "Context") + ".Provider";
                case 18:
                    return "DehydratedFragment";
                case 11:
                    return e = (e = t.render).displayName || e.name || "",
                    t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                case 7:
                    return "Fragment";
                case 5:
                    return t;
                case 4:
                    return "Portal";
                case 3:
                    return "Root";
                case 6:
                    return "Text";
                case 16:
                    return U(t);
                case 8:
                    return t === E ? "StrictMode" : "Mode";
                case 22:
                    return "Offscreen";
                case 12:
                    return "Profiler";
                case 21:
                    return "Scope";
                case 13:
                    return "Suspense";
                case 19:
                    return "SuspenseList";
                case 25:
                    return "TracingMarker";
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                    if ("function" === typeof t)
                        return t.displayName || t.name || null;
                    if ("string" === typeof t)
                        return t
                }
                return null
            }
            function W(e) {
                switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return ""
                }
            }
            function $(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }
            function Q(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = $(e) ? "checked" : "value"
                      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
                      , r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var a = n.get
                          , o = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return a.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                o.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[t]
                            }
                        }
                    }
                }(e))
            }
            function Y(e) {
                if (!e)
                    return !1;
                var t = e._valueTracker;
                if (!t)
                    return !0;
                var n = t.getValue()
                  , r = "";
                return e && (r = $(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== n && (t.setValue(e),
                !0)
            }
            function q(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
            function X(e, t) {
                var n = t.checked;
                return V({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }
            function K(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue
                  , r = null != t.checked ? t.checked : t.defaultChecked;
                n = W(null != t.value ? t.value : n),
                e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }
            function G(e, t) {
                null != (t = t.checked) && b(e, "checked", t, !1)
            }
            function Z(e, t) {
                G(e, t);
                var n = W(t.value)
                  , r = t.type;
                if (null != n)
                    "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r)
                    return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, W(t.defaultValue)),
                null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }
            function J(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                        return;
                    t = "" + e._wrapperState.initialValue,
                    n || t === e.value || (e.value = t),
                    e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""),
                e.defaultChecked = !!e._wrapperState.initialChecked,
                "" !== n && (e.name = n)
            }
            function ee(e, t, n) {
                "number" === t && q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }
            var te = Array.isArray;
            function ne(e, t, n, r) {
                if (e = e.options,
                t) {
                    t = {};
                    for (var a = 0; a < n.length; a++)
                        t["$" + n[a]] = !0;
                    for (n = 0; n < e.length; n++)
                        a = t.hasOwnProperty("$" + e[n].value),
                        e[n].selected !== a && (e[n].selected = a),
                        a && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + W(n),
                    t = null,
                    a = 0; a < e.length; a++) {
                        if (e[a].value === n)
                            return e[a].selected = !0,
                            void (r && (e[a].defaultSelected = !0));
                        null !== t || e[a].disabled || (t = e[a])
                    }
                    null !== t && (t.selected = !0)
                }
            }
            function re(e, t) {
                if (null != t.dangerouslySetInnerHTML)
                    throw Error(o(91));
                return V({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }
            function ae(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children,
                    t = t.defaultValue,
                    null != n) {
                        if (null != t)
                            throw Error(o(92));
                        if (te(n)) {
                            if (1 < n.length)
                                throw Error(o(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""),
                    n = t
                }
                e._wrapperState = {
                    initialValue: W(n)
                }
            }
            function oe(e, t) {
                var n = W(t.value)
                  , r = W(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n),
                null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
                null != r && (e.defaultValue = "" + r)
            }
            function ie(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }
            function le(e) {
                switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
                }
            }
            function se(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var ue, ce, fe = (ce = function(e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML"in e)
                    e.innerHTML = t;
                else {
                    for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild; e.firstChild; )
                        e.removeChild(e.firstChild);
                    for (; t.firstChild; )
                        e.appendChild(t.firstChild)
                }
            }
            ,
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ce(e, t)
                }
                ))
            }
            : ce);
            function de(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType)
                        return void (n.nodeValue = t)
                }
                e.textContent = t
            }
            var pe = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , he = ["Webkit", "ms", "Moz", "O"];
            function ve(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
            }
            function me(e, t) {
                for (var n in e = e.style,
                t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--")
                          , a = ve(n, t[n], r);
                        "float" === n && (n = "cssFloat"),
                        r ? e.setProperty(n, a) : e[n] = a
                    }
            }
            Object.keys(pe).forEach((function(e) {
                he.forEach((function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1),
                    pe[t] = pe[e]
                }
                ))
            }
            ));
            var ge = V({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function ye(e, t) {
                if (t) {
                    if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                        throw Error(o(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children)
                            throw Error(o(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html"in t.dangerouslySetInnerHTML))
                            throw Error(o(61))
                    }
                    if (null != t.style && "object" !== typeof t.style)
                        throw Error(o(62))
                }
            }
            function be(e, t) {
                if (-1 === e.indexOf("-"))
                    return "string" === typeof t.is;
                switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
                }
            }
            var xe = null;
            function we(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var ke = null
              , Se = null
              , Ee = null;
            function Ce(e) {
                if (e = ba(e)) {
                    if ("function" !== typeof ke)
                        throw Error(o(280));
                    var t = e.stateNode;
                    t && (t = wa(t),
                    ke(e.stateNode, e.type, t))
                }
            }
            function Pe(e) {
                Se ? Ee ? Ee.push(e) : Ee = [e] : Se = e
            }
            function je() {
                if (Se) {
                    var e = Se
                      , t = Ee;
                    if (Ee = Se = null,
                    Ce(e),
                    t)
                        for (e = 0; e < t.length; e++)
                            Ce(t[e])
                }
            }
            function Te(e, t) {
                return e(t)
            }
            function Oe() {}
            var Ne = !1;
            function _e(e, t, n) {
                if (Ne)
                    return e(t, n);
                Ne = !0;
                try {
                    return Te(e, t, n)
                } finally {
                    Ne = !1,
                    (null !== Se || null !== Ee) && (Oe(),
                    je())
                }
            }
            function Me(e, t) {
                var n = e.stateNode;
                if (null === n)
                    return null;
                var r = wa(n);
                if (null === r)
                    return null;
                n = r[t];
                e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (n && "function" !== typeof n)
                    throw Error(o(231, t, typeof n));
                return n
            }
            var Re = !1;
            if (c)
                try {
                    var Le = {};
                    Object.defineProperty(Le, "passive", {
                        get: function() {
                            Re = !0
                        }
                    }),
                    window.addEventListener("test", Le, Le),
                    window.removeEventListener("test", Le, Le)
                } catch (ce) {
                    Re = !1
                }
            function Ae(e, t, n, r, a, o, i, l, s) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, u)
                } catch (c) {
                    this.onError(c)
                }
            }
            var De = !1
              , Ve = null
              , Ie = !1
              , ze = null
              , Fe = {
                onError: function(e) {
                    De = !0,
                    Ve = e
                }
            };
            function Be(e, t, n, r, a, o, i, l, s) {
                De = !1,
                Ve = null,
                Ae.apply(Fe, arguments)
            }
            function Ue(e) {
                var t = e
                  , n = e;
                if (e.alternate)
                    for (; t.return; )
                        t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (n = t.return),
                        e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }
            function He(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)),
                    null !== t)
                        return t.dehydrated
                }
                return null
            }
            function We(e) {
                if (Ue(e) !== e)
                    throw Error(o(188))
            }
            function $e(e) {
                return null !== (e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Ue(e)))
                            throw Error(o(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ; ) {
                        var a = n.return;
                        if (null === a)
                            break;
                        var i = a.alternate;
                        if (null === i) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (a.child === i.child) {
                            for (i = a.child; i; ) {
                                if (i === n)
                                    return We(a),
                                    e;
                                if (i === r)
                                    return We(a),
                                    t;
                                i = i.sibling
                            }
                            throw Error(o(188))
                        }
                        if (n.return !== r.return)
                            n = a,
                            r = i;
                        else {
                            for (var l = !1, s = a.child; s; ) {
                                if (s === n) {
                                    l = !0,
                                    n = a,
                                    r = i;
                                    break
                                }
                                if (s === r) {
                                    l = !0,
                                    r = a,
                                    n = i;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!l) {
                                for (s = i.child; s; ) {
                                    if (s === n) {
                                        l = !0,
                                        n = i,
                                        r = a;
                                        break
                                    }
                                    if (s === r) {
                                        l = !0,
                                        r = i,
                                        n = a;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!l)
                                    throw Error(o(189))
                            }
                        }
                        if (n.alternate !== r)
                            throw Error(o(190))
                    }
                    if (3 !== n.tag)
                        throw Error(o(188));
                    return n.stateNode.current === n ? e : t
                }(e)) ? Qe(e) : null
            }
            function Qe(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e;
                for (e = e.child; null !== e; ) {
                    var t = Qe(e);
                    if (null !== t)
                        return t;
                    e = e.sibling
                }
                return null
            }
            var Ye = a.unstable_scheduleCallback
              , qe = a.unstable_cancelCallback
              , Xe = a.unstable_shouldYield
              , Ke = a.unstable_requestPaint
              , Ge = a.unstable_now
              , Ze = a.unstable_getCurrentPriorityLevel
              , Je = a.unstable_ImmediatePriority
              , et = a.unstable_UserBlockingPriority
              , tt = a.unstable_NormalPriority
              , nt = a.unstable_LowPriority
              , rt = a.unstable_IdlePriority
              , at = null
              , ot = null;
            var it = Math.clz32 ? Math.clz32 : function(e) {
                return e >>>= 0,
                0 === e ? 32 : 31 - (lt(e) / st | 0) | 0
            }
              , lt = Math.log
              , st = Math.LN2;
            var ut = 64
              , ct = 4194304;
            function ft(e) {
                switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return 4194240 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return 130023424 & e;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e
                }
            }
            function dt(e, t) {
                var n = e.pendingLanes;
                if (0 === n)
                    return 0;
                var r = 0
                  , a = e.suspendedLanes
                  , o = e.pingedLanes
                  , i = 268435455 & n;
                if (0 !== i) {
                    var l = i & ~a;
                    0 !== l ? r = ft(l) : 0 !== (o &= i) && (r = ft(o))
                } else
                    0 !== (i = n & ~a) ? r = ft(i) : 0 !== o && (r = ft(o));
                if (0 === r)
                    return 0;
                if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (o = t & -t) || 16 === a && 0 !== (4194240 & o)))
                    return t;
                if (0 !== (4 & r) && (r |= 16 & n),
                0 !== (t = e.entangledLanes))
                    for (e = e.entanglements,
                    t &= r; 0 < t; )
                        a = 1 << (n = 31 - it(t)),
                        r |= e[n],
                        t &= ~a;
                return r
            }
            function pt(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 4:
                    return t + 250;
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                default:
                    return -1
                }
            }
            function ht(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }
            function vt() {
                var e = ut;
                return 0 === (4194240 & (ut <<= 1)) && (ut = 64),
                e
            }
            function mt(e) {
                for (var t = [], n = 0; 31 > n; n++)
                    t.push(e);
                return t
            }
            function gt(e, t, n) {
                e.pendingLanes |= t,
                536870912 !== t && (e.suspendedLanes = 0,
                e.pingedLanes = 0),
                (e = e.eventTimes)[t = 31 - it(t)] = n
            }
            function yt(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n; ) {
                    var r = 31 - it(n)
                      , a = 1 << r;
                    a & t | e[r] & t && (e[r] |= t),
                    n &= ~a
                }
            }
            var bt = 0;
            function xt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
            }
            var wt, kt, St, Et, Ct, Pt = !1, jt = [], Tt = null, Ot = null, Nt = null, _t = new Map, Mt = new Map, Rt = [], Lt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function At(e, t) {
                switch (e) {
                case "focusin":
                case "focusout":
                    Tt = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Ot = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Nt = null;
                    break;
                case "pointerover":
                case "pointerout":
                    _t.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Mt.delete(t.pointerId)
                }
            }
            function Dt(e, t, n, r, a, o) {
                return null === e || e.nativeEvent !== o ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: o,
                    targetContainers: [a]
                },
                null !== t && (null !== (t = ba(t)) && kt(t)),
                e) : (e.eventSystemFlags |= r,
                t = e.targetContainers,
                null !== a && -1 === t.indexOf(a) && t.push(a),
                e)
            }
            function Vt(e) {
                var t = ya(e.target);
                if (null !== t) {
                    var n = Ue(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = He(n)))
                                return e.blockedOn = t,
                                void Ct(e.priority, (function() {
                                    St(n)
                                }
                                ))
                        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function It(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var t = e.targetContainers; 0 < t.length; ) {
                    var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n)
                        return null !== (t = ba(n)) && kt(t),
                        e.blockedOn = n,
                        !1;
                    var r = new (n = e.nativeEvent).constructor(n.type,n);
                    xe = r,
                    n.target.dispatchEvent(r),
                    xe = null,
                    t.shift()
                }
                return !0
            }
            function zt(e, t, n) {
                It(e) && n.delete(t)
            }
            function Ft() {
                Pt = !1,
                null !== Tt && It(Tt) && (Tt = null),
                null !== Ot && It(Ot) && (Ot = null),
                null !== Nt && It(Nt) && (Nt = null),
                _t.forEach(zt),
                Mt.forEach(zt)
            }
            function Bt(e, t) {
                e.blockedOn === t && (e.blockedOn = null,
                Pt || (Pt = !0,
                a.unstable_scheduleCallback(a.unstable_NormalPriority, Ft)))
            }
            function Ut(e) {
                function t(t) {
                    return Bt(t, e)
                }
                if (0 < jt.length) {
                    Bt(jt[0], e);
                    for (var n = 1; n < jt.length; n++) {
                        var r = jt[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== Tt && Bt(Tt, e),
                null !== Ot && Bt(Ot, e),
                null !== Nt && Bt(Nt, e),
                _t.forEach(t),
                Mt.forEach(t),
                n = 0; n < Rt.length; n++)
                    (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
                    Vt(n),
                    null === n.blockedOn && Rt.shift()
            }
            var Ht = x.ReactCurrentBatchConfig
              , Wt = !0;
            function $t(e, t, n, r) {
                var a = bt
                  , o = Ht.transition;
                Ht.transition = null;
                try {
                    bt = 1,
                    Yt(e, t, n, r)
                } finally {
                    bt = a,
                    Ht.transition = o
                }
            }
            function Qt(e, t, n, r) {
                var a = bt
                  , o = Ht.transition;
                Ht.transition = null;
                try {
                    bt = 4,
                    Yt(e, t, n, r)
                } finally {
                    bt = a,
                    Ht.transition = o
                }
            }
            function Yt(e, t, n, r) {
                if (Wt) {
                    var a = Xt(e, t, n, r);
                    if (null === a)
                        Wr(e, t, r, qt, n),
                        At(e, r);
                    else if (function(e, t, n, r, a) {
                        switch (t) {
                        case "focusin":
                            return Tt = Dt(Tt, e, t, n, r, a),
                            !0;
                        case "dragenter":
                            return Ot = Dt(Ot, e, t, n, r, a),
                            !0;
                        case "mouseover":
                            return Nt = Dt(Nt, e, t, n, r, a),
                            !0;
                        case "pointerover":
                            var o = a.pointerId;
                            return _t.set(o, Dt(_t.get(o) || null, e, t, n, r, a)),
                            !0;
                        case "gotpointercapture":
                            return o = a.pointerId,
                            Mt.set(o, Dt(Mt.get(o) || null, e, t, n, r, a)),
                            !0
                        }
                        return !1
                    }(a, e, t, n, r))
                        r.stopPropagation();
                    else if (At(e, r),
                    4 & t && -1 < Lt.indexOf(e)) {
                        for (; null !== a; ) {
                            var o = ba(a);
                            if (null !== o && wt(o),
                            null === (o = Xt(e, t, n, r)) && Wr(e, t, r, qt, n),
                            o === a)
                                break;
                            a = o
                        }
                        null !== a && r.stopPropagation()
                    } else
                        Wr(e, t, r, null, n)
                }
            }
            var qt = null;
            function Xt(e, t, n, r) {
                if (qt = null,
                null !== (e = ya(e = we(r))))
                    if (null === (t = Ue(e)))
                        e = null;
                    else if (13 === (n = t.tag)) {
                        if (null !== (e = He(t)))
                            return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated)
                            return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else
                        t !== e && (e = null);
                return qt = e,
                null
            }
            function Kt(e) {
                switch (e) {
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 1;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "toggle":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 4;
                case "message":
                    switch (Ze()) {
                    case Je:
                        return 1;
                    case et:
                        return 4;
                    case tt:
                    case nt:
                        return 16;
                    case rt:
                        return 536870912;
                    default:
                        return 16
                    }
                default:
                    return 16
                }
            }
            var Gt = null
              , Zt = null
              , Jt = null;
            function en() {
                if (Jt)
                    return Jt;
                var e, t, n = Zt, r = n.length, a = "value"in Gt ? Gt.value : Gt.textContent, o = a.length;
                for (e = 0; e < r && n[e] === a[e]; e++)
                    ;
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === a[o - t]; t++)
                    ;
                return Jt = a.slice(e, 1 < t ? 1 - t : void 0)
            }
            function tn(e) {
                var t = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function nn() {
                return !0
            }
            function rn() {
                return !1
            }
            function an(e) {
                function t(t, n, r, a, o) {
                    for (var i in this._reactName = t,
                    this._targetInst = r,
                    this.type = n,
                    this.nativeEvent = a,
                    this.target = o,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(i) && (t = e[i],
                        this[i] = t ? t(a) : a[i]);
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn,
                    this.isPropagationStopped = rn,
                    this
                }
                return V(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = nn)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = nn)
                    },
                    persist: function() {},
                    isPersistent: nn
                }),
                t
            }
            var on, ln, sn, un = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, cn = an(un), fn = V({}, un, {
                view: 0,
                detail: 0
            }), dn = an(fn), pn = V({}, fn, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: Cn,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== sn && (sn && "mousemove" === e.type ? (on = e.screenX - sn.screenX,
                    ln = e.screenY - sn.screenY) : ln = on = 0,
                    sn = e),
                    on)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : ln
                }
            }), hn = an(pn), vn = an(V({}, pn, {
                dataTransfer: 0
            })), mn = an(V({}, fn, {
                relatedTarget: 0
            })), gn = an(V({}, un, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), yn = V({}, un, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            }), bn = an(yn), xn = an(V({}, un, {
                data: 0
            })), wn = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, kn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, Sn = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function En(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
            }
            function Cn() {
                return En
            }
            var Pn = V({}, fn, {
                key: function(e) {
                    if (e.key) {
                        var t = wn[e.key] || e.key;
                        if ("Unidentified" !== t)
                            return t
                    }
                    return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Cn,
                charCode: function(e) {
                    return "keypress" === e.type ? tn(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            })
              , jn = an(Pn)
              , Tn = an(V({}, pn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , On = an(V({}, fn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Cn
            }))
              , Nn = an(V({}, un, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , _n = V({}, pn, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            })
              , Mn = an(_n)
              , Rn = [9, 13, 27, 32]
              , Ln = c && "CompositionEvent"in window
              , An = null;
            c && "documentMode"in document && (An = document.documentMode);
            var Dn = c && "TextEvent"in window && !An
              , Vn = c && (!Ln || An && 8 < An && 11 >= An)
              , In = String.fromCharCode(32)
              , zn = !1;
            function Fn(e, t) {
                switch (e) {
                case "keyup":
                    return -1 !== Rn.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function Bn(e) {
                return "object" === typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var Un = !1;
            var Hn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function Wn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Hn[e.type] : "textarea" === t
            }
            function $n(e, t, n, r) {
                Pe(r),
                0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange","change",null,n,r),
                e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Qn = null
              , Yn = null;
            function qn(e) {
                Ir(e, 0)
            }
            function Xn(e) {
                if (Y(xa(e)))
                    return e
            }
            function Kn(e, t) {
                if ("change" === e)
                    return t
            }
            var Gn = !1;
            if (c) {
                var Zn;
                if (c) {
                    var Jn = "oninput"in document;
                    if (!Jn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"),
                        Jn = "function" === typeof er.oninput
                    }
                    Zn = Jn
                } else
                    Zn = !1;
                Gn = Zn && (!document.documentMode || 9 < document.documentMode)
            }
            function tr() {
                Qn && (Qn.detachEvent("onpropertychange", nr),
                Yn = Qn = null)
            }
            function nr(e) {
                if ("value" === e.propertyName && Xn(Yn)) {
                    var t = [];
                    $n(t, Yn, e, we(e)),
                    _e(qn, t)
                }
            }
            function rr(e, t, n) {
                "focusin" === e ? (tr(),
                Yn = n,
                (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }
            function ar(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return Xn(Yn)
            }
            function or(e, t) {
                if ("click" === e)
                    return Xn(t)
            }
            function ir(e, t) {
                if ("input" === e || "change" === e)
                    return Xn(t)
            }
            var lr = "function" === typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            }
            ;
            function sr(e, t) {
                if (lr(e, t))
                    return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
                    return !1;
                var n = Object.keys(e)
                  , r = Object.keys(t);
                if (n.length !== r.length)
                    return !1;
                for (r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (!f.call(t, a) || !lr(e[a], t[a]))
                        return !1
                }
                return !0
            }
            function ur(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function cr(e, t) {
                var n, r = ur(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length,
                        e <= t && n >= t)
                            return {
                                node: r,
                                offset: t - e
                            };
                        e = n
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = ur(r)
                }
            }
            function fr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }
            function dr() {
                for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n)
                        break;
                    t = q((e = t.contentWindow).document)
                }
                return t
            }
            function pr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            function hr(e) {
                var t = dr()
                  , n = e.focusedElem
                  , r = e.selectionRange;
                if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
                    if (null !== r && pr(n))
                        if (t = r.start,
                        void 0 === (e = r.end) && (e = t),
                        "selectionStart"in n)
                            n.selectionStart = t,
                            n.selectionEnd = Math.min(e, n.value.length);
                        else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = n.textContent.length
                              , o = Math.min(r.start, a);
                            r = void 0 === r.end ? o : Math.min(r.end, a),
                            !e.extend && o > r && (a = r,
                            r = o,
                            o = a),
                            a = cr(n, o);
                            var i = cr(n, r);
                            a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(a.node, a.offset),
                            e.removeAllRanges(),
                            o > r ? (e.addRange(t),
                            e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                            e.addRange(t)))
                        }
                    for (t = [],
                    e = n; e = e.parentNode; )
                        1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                    for ("function" === typeof n.focus && n.focus(),
                    n = 0; n < t.length; n++)
                        (e = t[n]).element.scrollLeft = e.left,
                        e.element.scrollTop = e.top
                }
            }
            var vr = c && "documentMode"in document && 11 >= document.documentMode
              , mr = null
              , gr = null
              , yr = null
              , br = !1;
            function xr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                br || null == mr || mr !== q(r) || ("selectionStart"in (r = mr) && pr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                },
                yr && sr(yr, r) || (yr = r,
                0 < (r = Qr(gr, "onSelect")).length && (t = new cn("onSelect","select",null,t,n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = mr)))
            }
            function wr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(),
                n["Webkit" + e] = "webkit" + t,
                n["Moz" + e] = "moz" + t,
                n
            }
            var kr = {
                animationend: wr("Animation", "AnimationEnd"),
                animationiteration: wr("Animation", "AnimationIteration"),
                animationstart: wr("Animation", "AnimationStart"),
                transitionend: wr("Transition", "TransitionEnd")
            }
              , Sr = {}
              , Er = {};
            function Cr(e) {
                if (Sr[e])
                    return Sr[e];
                if (!kr[e])
                    return e;
                var t, n = kr[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in Er)
                        return Sr[e] = n[t];
                return e
            }
            c && (Er = document.createElement("div").style,
            "AnimationEvent"in window || (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
            "TransitionEvent"in window || delete kr.transitionend.transition);
            var Pr = Cr("animationend")
              , jr = Cr("animationiteration")
              , Tr = Cr("animationstart")
              , Or = Cr("transitionend")
              , Nr = new Map
              , _r = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
            function Mr(e, t) {
                Nr.set(e, t),
                s(t, [e])
            }
            for (var Rr = 0; Rr < _r.length; Rr++) {
                var Lr = _r[Rr];
                Mr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)))
            }
            Mr(Pr, "onAnimationEnd"),
            Mr(jr, "onAnimationIteration"),
            Mr(Tr, "onAnimationStart"),
            Mr("dblclick", "onDoubleClick"),
            Mr("focusin", "onFocus"),
            Mr("focusout", "onBlur"),
            Mr(Or, "onTransitionEnd"),
            u("onMouseEnter", ["mouseout", "mouseover"]),
            u("onMouseLeave", ["mouseout", "mouseover"]),
            u("onPointerEnter", ["pointerout", "pointerover"]),
            u("onPointerLeave", ["pointerout", "pointerover"]),
            s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , Dr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));
            function Vr(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n,
                function(e, t, n, r, a, i, l, s, u) {
                    if (Be.apply(this, arguments),
                    De) {
                        if (!De)
                            throw Error(o(198));
                        var c = Ve;
                        De = !1,
                        Ve = null,
                        Ie || (Ie = !0,
                        ze = c)
                    }
                }(r, t, void 0, e),
                e.currentTarget = null
            }
            function Ir(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]
                      , a = r.event;
                    r = r.listeners;
                    e: {
                        var o = void 0;
                        if (t)
                            for (var i = r.length - 1; 0 <= i; i--) {
                                var l = r[i]
                                  , s = l.instance
                                  , u = l.currentTarget;
                                if (l = l.listener,
                                s !== o && a.isPropagationStopped())
                                    break e;
                                Vr(a, l, u),
                                o = s
                            }
                        else
                            for (i = 0; i < r.length; i++) {
                                if (s = (l = r[i]).instance,
                                u = l.currentTarget,
                                l = l.listener,
                                s !== o && a.isPropagationStopped())
                                    break e;
                                Vr(a, l, u),
                                o = s
                            }
                    }
                }
                if (Ie)
                    throw e = ze,
                    Ie = !1,
                    ze = null,
                    e
            }
            function zr(e, t) {
                var n = t[va];
                void 0 === n && (n = t[va] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Hr(t, e, 2, !1),
                n.add(r))
            }
            function Fr(e, t, n) {
                var r = 0;
                t && (r |= 4),
                Hr(n, e, r, t)
            }
            var Br = "_reactListening" + Math.random().toString(36).slice(2);
            function Ur(e) {
                if (!e[Br]) {
                    e[Br] = !0,
                    i.forEach((function(t) {
                        "selectionchange" !== t && (Dr.has(t) || Fr(t, !1, e),
                        Fr(t, !0, e))
                    }
                    ));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[Br] || (t[Br] = !0,
                    Fr("selectionchange", !1, t))
                }
            }
            function Hr(e, t, n, r) {
                switch (Kt(t)) {
                case 1:
                    var a = $t;
                    break;
                case 4:
                    a = Qt;
                    break;
                default:
                    a = Yt
                }
                n = a.bind(null, t, n, e),
                a = void 0,
                !Re || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0),
                r ? void 0 !== a ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                    passive: a
                }) : e.addEventListener(t, n, !1)
            }
            function Wr(e, t, n, r, a) {
                var o = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r)
                    e: for (; ; ) {
                        if (null === r)
                            return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var l = r.stateNode.containerInfo;
                            if (l === a || 8 === l.nodeType && l.parentNode === a)
                                break;
                            if (4 === i)
                                for (i = r.return; null !== i; ) {
                                    var s = i.tag;
                                    if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === a || 8 === s.nodeType && s.parentNode === a))
                                        return;
                                    i = i.return
                                }
                            for (; null !== l; ) {
                                if (null === (i = ya(l)))
                                    return;
                                if (5 === (s = i.tag) || 6 === s) {
                                    r = o = i;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }
                _e((function() {
                    var r = o
                      , a = we(n)
                      , i = [];
                    e: {
                        var l = Nr.get(e);
                        if (void 0 !== l) {
                            var s = cn
                              , u = e;
                            switch (e) {
                            case "keypress":
                                if (0 === tn(n))
                                    break e;
                            case "keydown":
                            case "keyup":
                                s = jn;
                                break;
                            case "focusin":
                                u = "focus",
                                s = mn;
                                break;
                            case "focusout":
                                u = "blur",
                                s = mn;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                s = mn;
                                break;
                            case "click":
                                if (2 === n.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                s = hn;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                s = vn;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                s = On;
                                break;
                            case Pr:
                            case jr:
                            case Tr:
                                s = gn;
                                break;
                            case Or:
                                s = Nn;
                                break;
                            case "scroll":
                                s = dn;
                                break;
                            case "wheel":
                                s = Mn;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                s = bn;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                s = Tn
                            }
                            var c = 0 !== (4 & t)
                              , f = !c && "scroll" === e
                              , d = c ? null !== l ? l + "Capture" : null : l;
                            c = [];
                            for (var p, h = r; null !== h; ) {
                                var v = (p = h).stateNode;
                                if (5 === p.tag && null !== v && (p = v,
                                null !== d && (null != (v = Me(h, d)) && c.push($r(h, v, p)))),
                                f)
                                    break;
                                h = h.return
                            }
                            0 < c.length && (l = new s(l,u,null,n,a),
                            i.push({
                                event: l,
                                listeners: c
                            }))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (s = "mouseout" === e || "pointerout" === e,
                        (!(l = "mouseover" === e || "pointerover" === e) || n === xe || !(u = n.relatedTarget || n.fromElement) || !ya(u) && !u[ha]) && (s || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window,
                        s ? (s = r,
                        null !== (u = (u = n.relatedTarget || n.toElement) ? ya(u) : null) && (u !== (f = Ue(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null,
                        u = r),
                        s !== u)) {
                            if (c = hn,
                            v = "onMouseLeave",
                            d = "onMouseEnter",
                            h = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (c = Tn,
                            v = "onPointerLeave",
                            d = "onPointerEnter",
                            h = "pointer"),
                            f = null == s ? l : xa(s),
                            p = null == u ? l : xa(u),
                            (l = new c(v,h + "leave",s,n,a)).target = f,
                            l.relatedTarget = p,
                            v = null,
                            ya(a) === r && ((c = new c(d,h + "enter",u,n,a)).target = p,
                            c.relatedTarget = f,
                            v = c),
                            f = v,
                            s && u)
                                e: {
                                    for (d = u,
                                    h = 0,
                                    p = c = s; p; p = Yr(p))
                                        h++;
                                    for (p = 0,
                                    v = d; v; v = Yr(v))
                                        p++;
                                    for (; 0 < h - p; )
                                        c = Yr(c),
                                        h--;
                                    for (; 0 < p - h; )
                                        d = Yr(d),
                                        p--;
                                    for (; h--; ) {
                                        if (c === d || null !== d && c === d.alternate)
                                            break e;
                                        c = Yr(c),
                                        d = Yr(d)
                                    }
                                    c = null
                                }
                            else
                                c = null;
                            null !== s && qr(i, l, s, c, !1),
                            null !== u && null !== f && qr(i, f, u, c, !0)
                        }
                        if ("select" === (s = (l = r ? xa(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type)
                            var m = Kn;
                        else if (Wn(l))
                            if (Gn)
                                m = ir;
                            else {
                                m = ar;
                                var g = rr
                            }
                        else
                            (s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (m = or);
                        switch (m && (m = m(e, r)) ? $n(i, m, n, a) : (g && g(e, l, r),
                        "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && ee(l, "number", l.value)),
                        g = r ? xa(r) : window,
                        e) {
                        case "focusin":
                            (Wn(g) || "true" === g.contentEditable) && (mr = g,
                            gr = r,
                            yr = null);
                            break;
                        case "focusout":
                            yr = gr = mr = null;
                            break;
                        case "mousedown":
                            br = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            br = !1,
                            xr(i, n, a);
                            break;
                        case "selectionchange":
                            if (vr)
                                break;
                        case "keydown":
                        case "keyup":
                            xr(i, n, a)
                        }
                        var y;
                        if (Ln)
                            e: {
                                switch (e) {
                                case "compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                                }
                                b = void 0
                            }
                        else
                            Un ? Fn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (Vn && "ko" !== n.locale && (Un || "onCompositionStart" !== b ? "onCompositionEnd" === b && Un && (y = en()) : (Zt = "value"in (Gt = a) ? Gt.value : Gt.textContent,
                        Un = !0)),
                        0 < (g = Qr(r, b)).length && (b = new xn(b,e,null,n,a),
                        i.push({
                            event: b,
                            listeners: g
                        }),
                        y ? b.data = y : null !== (y = Bn(n)) && (b.data = y))),
                        (y = Dn ? function(e, t) {
                            switch (e) {
                            case "compositionend":
                                return Bn(t);
                            case "keypress":
                                return 32 !== t.which ? null : (zn = !0,
                                In);
                            case "textInput":
                                return (e = t.data) === In && zn ? null : e;
                            default:
                                return null
                            }
                        }(e, n) : function(e, t) {
                            if (Un)
                                return "compositionend" === e || !Ln && Fn(e, t) ? (e = en(),
                                Jt = Zt = Gt = null,
                                Un = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length)
                                        return t.char;
                                    if (t.which)
                                        return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return Vn && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (r = Qr(r, "onBeforeInput")).length && (a = new xn("onBeforeInput","beforeinput",null,n,a),
                        i.push({
                            event: a,
                            listeners: r
                        }),
                        a.data = y))
                    }
                    Ir(i, t)
                }
                ))
            }
            function $r(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }
            function Qr(e, t) {
                for (var n = t + "Capture", r = []; null !== e; ) {
                    var a = e
                      , o = a.stateNode;
                    5 === a.tag && null !== o && (a = o,
                    null != (o = Me(e, n)) && r.unshift($r(e, o, a)),
                    null != (o = Me(e, t)) && r.push($r(e, o, a))),
                    e = e.return
                }
                return r
            }
            function Yr(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }
            function qr(e, t, n, r, a) {
                for (var o = t._reactName, i = []; null !== n && n !== r; ) {
                    var l = n
                      , s = l.alternate
                      , u = l.stateNode;
                    if (null !== s && s === r)
                        break;
                    5 === l.tag && null !== u && (l = u,
                    a ? null != (s = Me(n, o)) && i.unshift($r(n, s, l)) : a || null != (s = Me(n, o)) && i.push($r(n, s, l))),
                    n = n.return
                }
                0 !== i.length && e.push({
                    event: t,
                    listeners: i
                })
            }
            var Xr = /\r\n?/g
              , Kr = /\u0000|\uFFFD/g;
            function Gr(e) {
                return ("string" === typeof e ? e : "" + e).replace(Xr, "\n").replace(Kr, "")
            }
            function Zr(e, t, n) {
                if (t = Gr(t),
                Gr(e) !== t && n)
                    throw Error(o(425))
            }
            function Jr() {}
            var ea = null
              , ta = null;
            function na(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var ra = "function" === typeof setTimeout ? setTimeout : void 0
              , aa = "function" === typeof clearTimeout ? clearTimeout : void 0
              , oa = "function" === typeof Promise ? Promise : void 0
              , ia = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof oa ? function(e) {
                return oa.resolve(null).then(e).catch(la)
            }
            : ra;
            function la(e) {
                setTimeout((function() {
                    throw e
                }
                ))
            }
            function sa(e, t) {
                var n = t
                  , r = 0;
                do {
                    var a = n.nextSibling;
                    if (e.removeChild(n),
                    a && 8 === a.nodeType)
                        if ("/$" === (n = a.data)) {
                            if (0 === r)
                                return e.removeChild(a),
                                void Ut(t);
                            r--
                        } else
                            "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = a
                } while (n);
                Ut(t)
            }
            function ua(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t)
                        break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                            break;
                        if ("/$" === t)
                            return null
                    }
                }
                return e
            }
            function ca(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t)
                                return e;
                            t--
                        } else
                            "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var fa = Math.random().toString(36).slice(2)
              , da = "__reactFiber$" + fa
              , pa = "__reactProps$" + fa
              , ha = "__reactContainer$" + fa
              , va = "__reactEvents$" + fa
              , ma = "__reactListeners$" + fa
              , ga = "__reactHandles$" + fa;
            function ya(e) {
                var t = e[da];
                if (t)
                    return t;
                for (var n = e.parentNode; n; ) {
                    if (t = n[ha] || n[da]) {
                        if (n = t.alternate,
                        null !== t.child || null !== n && null !== n.child)
                            for (e = ca(e); null !== e; ) {
                                if (n = e[da])
                                    return n;
                                e = ca(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }
            function ba(e) {
                return !(e = e[da] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }
            function xa(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e.stateNode;
                throw Error(o(33))
            }
            function wa(e) {
                return e[pa] || null
            }
            var ka = []
              , Sa = -1;
            function Ea(e) {
                return {
                    current: e
                }
            }
            function Ca(e) {
                0 > Sa || (e.current = ka[Sa],
                ka[Sa] = null,
                Sa--)
            }
            function Pa(e, t) {
                Sa++,
                ka[Sa] = e.current,
                e.current = t
            }
            var ja = {}
              , Ta = Ea(ja)
              , Oa = Ea(!1)
              , Na = ja;
            function _a(e, t) {
                var n = e.type.contextTypes;
                if (!n)
                    return ja;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var a, o = {};
                for (a in n)
                    o[a] = t[a];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
                e.__reactInternalMemoizedMaskedChildContext = o),
                o
            }
            function Ma(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }
            function Ra() {
                Ca(Oa),
                Ca(Ta)
            }
            function La(e, t, n) {
                if (Ta.current !== ja)
                    throw Error(o(168));
                Pa(Ta, t),
                Pa(Oa, n)
            }
            function Aa(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes,
                "function" !== typeof r.getChildContext)
                    return n;
                for (var a in r = r.getChildContext())
                    if (!(a in t))
                        throw Error(o(108, H(e) || "Unknown", a));
                return V({}, n, r)
            }
            function Da(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ja,
                Na = Ta.current,
                Pa(Ta, e),
                Pa(Oa, Oa.current),
                !0
            }
            function Va(e, t, n) {
                var r = e.stateNode;
                if (!r)
                    throw Error(o(169));
                n ? (e = Aa(e, t, Na),
                r.__reactInternalMemoizedMergedChildContext = e,
                Ca(Oa),
                Ca(Ta),
                Pa(Ta, e)) : Ca(Oa),
                Pa(Oa, n)
            }
            var Ia = null
              , za = !1
              , Fa = !1;
            function Ba(e) {
                null === Ia ? Ia = [e] : Ia.push(e)
            }
            function Ua() {
                if (!Fa && null !== Ia) {
                    Fa = !0;
                    var e = 0
                      , t = bt;
                    try {
                        var n = Ia;
                        for (bt = 1; e < n.length; e++) {
                            var r = n[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        Ia = null,
                        za = !1
                    } catch (a) {
                        throw null !== Ia && (Ia = Ia.slice(e + 1)),
                        Ye(Je, Ua),
                        a
                    } finally {
                        bt = t,
                        Fa = !1
                    }
                }
                return null
            }
            var Ha = []
              , Wa = 0
              , $a = null
              , Qa = 0
              , Ya = []
              , qa = 0
              , Xa = null
              , Ka = 1
              , Ga = "";
            function Za(e, t) {
                Ha[Wa++] = Qa,
                Ha[Wa++] = $a,
                $a = e,
                Qa = t
            }
            function Ja(e, t, n) {
                Ya[qa++] = Ka,
                Ya[qa++] = Ga,
                Ya[qa++] = Xa,
                Xa = e;
                var r = Ka;
                e = Ga;
                var a = 32 - it(r) - 1;
                r &= ~(1 << a),
                n += 1;
                var o = 32 - it(t) + a;
                if (30 < o) {
                    var i = a - a % 5;
                    o = (r & (1 << i) - 1).toString(32),
                    r >>= i,
                    a -= i,
                    Ka = 1 << 32 - it(t) + a | n << a | r,
                    Ga = o + e
                } else
                    Ka = 1 << o | n << a | r,
                    Ga = e
            }
            function eo(e) {
                null !== e.return && (Za(e, 1),
                Ja(e, 1, 0))
            }
            function to(e) {
                for (; e === $a; )
                    $a = Ha[--Wa],
                    Ha[Wa] = null,
                    Qa = Ha[--Wa],
                    Ha[Wa] = null;
                for (; e === Xa; )
                    Xa = Ya[--qa],
                    Ya[qa] = null,
                    Ga = Ya[--qa],
                    Ya[qa] = null,
                    Ka = Ya[--qa],
                    Ya[qa] = null
            }
            var no = null
              , ro = null
              , ao = !1
              , oo = null;
            function io(e, t) {
                var n = Mu(5, null, null, 0);
                n.elementType = "DELETED",
                n.stateNode = t,
                n.return = e,
                null === (t = e.deletions) ? (e.deletions = [n],
                e.flags |= 16) : t.push(n)
            }
            function lo(e, t) {
                switch (e.tag) {
                case 5:
                    var n = e.type;
                    return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
                    no = e,
                    ro = ua(t.firstChild),
                    !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
                    no = e,
                    ro = null,
                    !0);
                case 13:
                    return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Xa ? {
                        id: Ka,
                        overflow: Ga
                    } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    (n = Mu(18, null, null, 0)).stateNode = t,
                    n.return = e,
                    e.child = n,
                    no = e,
                    ro = null,
                    !0);
                default:
                    return !1
                }
            }
            function so(e) {
                return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
            }
            function uo(e) {
                if (ao) {
                    var t = ro;
                    if (t) {
                        var n = t;
                        if (!lo(e, t)) {
                            if (so(e))
                                throw Error(o(418));
                            t = ua(n.nextSibling);
                            var r = no;
                            t && lo(e, t) ? io(r, n) : (e.flags = -4097 & e.flags | 2,
                            ao = !1,
                            no = e)
                        }
                    } else {
                        if (so(e))
                            throw Error(o(418));
                        e.flags = -4097 & e.flags | 2,
                        ao = !1,
                        no = e
                    }
                }
            }
            function co(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                no = e
            }
            function fo(e) {
                if (e !== no)
                    return !1;
                if (!ao)
                    return co(e),
                    ao = !0,
                    !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)),
                t && (t = ro)) {
                    if (so(e))
                        throw po(),
                        Error(o(418));
                    for (; t; )
                        io(e, t),
                        t = ua(t.nextSibling)
                }
                if (co(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(o(317));
                    e: {
                        for (e = e.nextSibling,
                        t = 0; e; ) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        ro = ua(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else
                                    "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        ro = null
                    }
                } else
                    ro = no ? ua(e.stateNode.nextSibling) : null;
                return !0
            }
            function po() {
                for (var e = ro; e; )
                    e = ua(e.nextSibling)
            }
            function ho() {
                ro = no = null,
                ao = !1
            }
            function vo(e) {
                null === oo ? oo = [e] : oo.push(e)
            }
            var mo = x.ReactCurrentBatchConfig;
            function go(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = V({}, t),
                    e = e.defaultProps)
                        void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }
            var yo = Ea(null)
              , bo = null
              , xo = null
              , wo = null;
            function ko() {
                wo = xo = bo = null
            }
            function So(e) {
                var t = yo.current;
                Ca(yo),
                e._currentValue = t
            }
            function Eo(e, t, n) {
                for (; null !== e; ) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                    null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
                    e === n)
                        break;
                    e = e.return
                }
            }
            function Co(e, t) {
                bo = e,
                wo = xo = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (xl = !0),
                e.firstContext = null)
            }
            function Po(e) {
                var t = e._currentValue;
                if (wo !== e)
                    if (e = {
                        context: e,
                        memoizedValue: t,
                        next: null
                    },
                    null === xo) {
                        if (null === bo)
                            throw Error(o(308));
                        xo = e,
                        bo.dependencies = {
                            lanes: 0,
                            firstContext: e
                        }
                    } else
                        xo = xo.next = e;
                return t
            }
            var jo = null;
            function To(e) {
                null === jo ? jo = [e] : jo.push(e)
            }
            function Oo(e, t, n, r) {
                var a = t.interleaved;
                return null === a ? (n.next = n,
                To(t)) : (n.next = a.next,
                a.next = n),
                t.interleaved = n,
                No(e, r)
            }
            function No(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t),
                n = e,
                e = e.return; null !== e; )
                    e.childLanes |= t,
                    null !== (n = e.alternate) && (n.childLanes |= t),
                    n = e,
                    e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }
            var _o = !1;
            function Mo(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                }
            }
            function Ro(e, t) {
                e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function Lo(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function Ao(e, t, n) {
                var r = e.updateQueue;
                if (null === r)
                    return null;
                if (r = r.shared,
                0 !== (2 & Os)) {
                    var a = r.pending;
                    return null === a ? t.next = t : (t.next = a.next,
                    a.next = t),
                    r.pending = t,
                    No(e, n)
                }
                return null === (a = r.interleaved) ? (t.next = t,
                To(r)) : (t.next = a.next,
                a.next = t),
                r.interleaved = t,
                No(e, n)
            }
            function Do(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared,
                0 !== (4194240 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    yt(e, n)
                }
            }
            function Vo(e, t) {
                var n = e.updateQueue
                  , r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var a = null
                      , o = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var i = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === o ? a = o = i : o = o.next = i,
                            n = n.next
                        } while (null !== n);
                        null === o ? a = o = t : o = o.next = t
                    } else
                        a = o = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: o,
                        shared: r.shared,
                        effects: r.effects
                    },
                    void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
                n.lastBaseUpdate = t
            }
            function Io(e, t, n, r) {
                var a = e.updateQueue;
                _o = !1;
                var o = a.firstBaseUpdate
                  , i = a.lastBaseUpdate
                  , l = a.shared.pending;
                if (null !== l) {
                    a.shared.pending = null;
                    var s = l
                      , u = s.next;
                    s.next = null,
                    null === i ? o = u : i.next = u,
                    i = s;
                    var c = e.alternate;
                    null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? c.firstBaseUpdate = u : l.next = u,
                    c.lastBaseUpdate = s))
                }
                if (null !== o) {
                    var f = a.baseState;
                    for (i = 0,
                    c = u = s = null,
                    l = o; ; ) {
                        var d = l.lane
                          , p = l.eventTime;
                        if ((r & d) === d) {
                            null !== c && (c = c.next = {
                                eventTime: p,
                                lane: 0,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            });
                            e: {
                                var h = e
                                  , v = l;
                                switch (d = t,
                                p = n,
                                v.tag) {
                                case 1:
                                    if ("function" === typeof (h = v.payload)) {
                                        f = h.call(p, f, d);
                                        break e
                                    }
                                    f = h;
                                    break e;
                                case 3:
                                    h.flags = -65537 & h.flags | 128;
                                case 0:
                                    if (null === (d = "function" === typeof (h = v.payload) ? h.call(p, f, d) : h) || void 0 === d)
                                        break e;
                                    f = V({}, f, d);
                                    break e;
                                case 2:
                                    _o = !0
                                }
                            }
                            null !== l.callback && 0 !== l.lane && (e.flags |= 64,
                            null === (d = a.effects) ? a.effects = [l] : d.push(l))
                        } else
                            p = {
                                eventTime: p,
                                lane: d,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            },
                            null === c ? (u = c = p,
                            s = f) : c = c.next = p,
                            i |= d;
                        if (null === (l = l.next)) {
                            if (null === (l = a.shared.pending))
                                break;
                            l = (d = l).next,
                            d.next = null,
                            a.lastBaseUpdate = d,
                            a.shared.pending = null
                        }
                    }
                    if (null === c && (s = f),
                    a.baseState = s,
                    a.firstBaseUpdate = u,
                    a.lastBaseUpdate = c,
                    null !== (t = a.shared.interleaved)) {
                        a = t;
                        do {
                            i |= a.lane,
                            a = a.next
                        } while (a !== t)
                    } else
                        null === o && (a.shared.lanes = 0);
                    Vs |= i,
                    e.lanes = i,
                    e.memoizedState = f
                }
            }
            function zo(e, t, n) {
                if (e = t.effects,
                t.effects = null,
                null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t]
                          , a = r.callback;
                        if (null !== a) {
                            if (r.callback = null,
                            r = n,
                            "function" !== typeof a)
                                throw Error(o(191, a));
                            a.call(r)
                        }
                    }
            }
            var Fo = (new r.Component).refs;
            function Bo(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : V({}, t, n),
                e.memoizedState = n,
                0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var Uo = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && Ue(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = tu()
                      , a = nu(e)
                      , o = Lo(r, a);
                    o.payload = t,
                    void 0 !== n && null !== n && (o.callback = n),
                    null !== (t = Ao(e, o, a)) && (ru(t, e, a, r),
                    Do(t, e, a))
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = tu()
                      , a = nu(e)
                      , o = Lo(r, a);
                    o.tag = 1,
                    o.payload = t,
                    void 0 !== n && null !== n && (o.callback = n),
                    null !== (t = Ao(e, o, a)) && (ru(t, e, a, r),
                    Do(t, e, a))
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = tu()
                      , r = nu(e)
                      , a = Lo(n, r);
                    a.tag = 2,
                    void 0 !== t && null !== t && (a.callback = t),
                    null !== (t = Ao(e, a, r)) && (ru(t, e, r, n),
                    Do(t, e, r))
                }
            };
            function Ho(e, t, n, r, a, o, i) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!sr(n, r) || !sr(a, o))
            }
            function Wo(e, t, n) {
                var r = !1
                  , a = ja
                  , o = t.contextType;
                return "object" === typeof o && null !== o ? o = Po(o) : (a = Ma(t) ? Na : Ta.current,
                o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? _a(e, a) : ja),
                t = new t(n,o),
                e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
                t.updater = Uo,
                e.stateNode = t,
                t._reactInternals = e,
                r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a,
                e.__reactInternalMemoizedMaskedChildContext = o),
                t
            }
            function $o(e, t, n, r) {
                e = t.state,
                "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && Uo.enqueueReplaceState(t, t.state, null)
            }
            function Qo(e, t, n, r) {
                var a = e.stateNode;
                a.props = n,
                a.state = e.memoizedState,
                a.refs = Fo,
                Mo(e);
                var o = t.contextType;
                "object" === typeof o && null !== o ? a.context = Po(o) : (o = Ma(t) ? Na : Ta.current,
                a.context = _a(e, o)),
                a.state = e.memoizedState,
                "function" === typeof (o = t.getDerivedStateFromProps) && (Bo(e, t, o, n),
                a.state = e.memoizedState),
                "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state,
                "function" === typeof a.componentWillMount && a.componentWillMount(),
                "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                t !== a.state && Uo.enqueueReplaceState(a, a.state, null),
                Io(e, n, a, r),
                a.state = e.memoizedState),
                "function" === typeof a.componentDidMount && (e.flags |= 4194308)
            }
            function Yo(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag)
                                throw Error(o(309));
                            var r = n.stateNode
                        }
                        if (!r)
                            throw Error(o(147, e));
                        var a = r
                          , i = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function(e) {
                            var t = a.refs;
                            t === Fo && (t = a.refs = {}),
                            null === e ? delete t[i] : t[i] = e
                        }
                        ,
                        t._stringRef = i,
                        t)
                    }
                    if ("string" !== typeof e)
                        throw Error(o(284));
                    if (!n._owner)
                        throw Error(o(290, e))
                }
                return e
            }
            function qo(e, t) {
                throw e = Object.prototype.toString.call(t),
                Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }
            function Xo(e) {
                return (0,
                e._init)(e._payload)
            }
            function Ko(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n],
                        t.flags |= 16) : r.push(n)
                    }
                }
                function n(n, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        t(n, r),
                        r = r.sibling;
                    return null
                }
                function r(e, t) {
                    for (e = new Map; null !== t; )
                        null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                        t = t.sibling;
                    return e
                }
                function a(e, t) {
                    return (e = Lu(e, t)).index = 0,
                    e.sibling = null,
                    e
                }
                function i(t, n, r) {
                    return t.index = r,
                    e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2,
                    n) : r : (t.flags |= 2,
                    n) : (t.flags |= 1048576,
                    n)
                }
                function l(t) {
                    return e && null === t.alternate && (t.flags |= 2),
                    t
                }
                function s(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Iu(n, e.mode, r)).return = e,
                    t) : ((t = a(t, n)).return = e,
                    t)
                }
                function u(e, t, n, r) {
                    var o = n.type;
                    return o === S ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" === typeof o && null !== o && o.$$typeof === M && Xo(o) === t.type) ? ((r = a(t, n.props)).ref = Yo(e, t, n),
                    r.return = e,
                    r) : ((r = Au(n.type, n.key, n.props, null, e.mode, r)).ref = Yo(e, t, n),
                    r.return = e,
                    r)
                }
                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = zu(n, e.mode, r)).return = e,
                    t) : ((t = a(t, n.children || [])).return = e,
                    t)
                }
                function f(e, t, n, r, o) {
                    return null === t || 7 !== t.tag ? ((t = Du(n, e.mode, r, o)).return = e,
                    t) : ((t = a(t, n)).return = e,
                    t)
                }
                function d(e, t, n) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t)
                        return (t = Iu("" + t, e.mode, n)).return = e,
                        t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case w:
                            return (n = Au(t.type, t.key, t.props, null, e.mode, n)).ref = Yo(e, null, t),
                            n.return = e,
                            n;
                        case k:
                            return (t = zu(t, e.mode, n)).return = e,
                            t;
                        case M:
                            return d(e, (0,
                            t._init)(t._payload), n)
                        }
                        if (te(t) || A(t))
                            return (t = Du(t, e.mode, n, null)).return = e,
                            t;
                        qo(e, t)
                    }
                    return null
                }
                function p(e, t, n, r) {
                    var a = null !== t ? t.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n)
                        return null !== a ? null : s(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case w:
                            return n.key === a ? u(e, t, n, r) : null;
                        case k:
                            return n.key === a ? c(e, t, n, r) : null;
                        case M:
                            return p(e, t, (a = n._init)(n._payload), r)
                        }
                        if (te(n) || A(n))
                            return null !== a ? null : f(e, t, n, r, null);
                        qo(e, n)
                    }
                    return null
                }
                function h(e, t, n, r, a) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r)
                        return s(t, e = e.get(n) || null, "" + r, a);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case w:
                            return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                        case k:
                            return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                        case M:
                            return h(e, t, n, (0,
                            r._init)(r._payload), a)
                        }
                        if (te(r) || A(r))
                            return f(t, e = e.get(n) || null, r, a, null);
                        qo(t, r)
                    }
                    return null
                }
                function v(a, o, l, s) {
                    for (var u = null, c = null, f = o, v = o = 0, m = null; null !== f && v < l.length; v++) {
                        f.index > v ? (m = f,
                        f = null) : m = f.sibling;
                        var g = p(a, f, l[v], s);
                        if (null === g) {
                            null === f && (f = m);
                            break
                        }
                        e && f && null === g.alternate && t(a, f),
                        o = i(g, o, v),
                        null === c ? u = g : c.sibling = g,
                        c = g,
                        f = m
                    }
                    if (v === l.length)
                        return n(a, f),
                        ao && Za(a, v),
                        u;
                    if (null === f) {
                        for (; v < l.length; v++)
                            null !== (f = d(a, l[v], s)) && (o = i(f, o, v),
                            null === c ? u = f : c.sibling = f,
                            c = f);
                        return ao && Za(a, v),
                        u
                    }
                    for (f = r(a, f); v < l.length; v++)
                        null !== (m = h(f, a, v, l[v], s)) && (e && null !== m.alternate && f.delete(null === m.key ? v : m.key),
                        o = i(m, o, v),
                        null === c ? u = m : c.sibling = m,
                        c = m);
                    return e && f.forEach((function(e) {
                        return t(a, e)
                    }
                    )),
                    ao && Za(a, v),
                    u
                }
                function m(a, l, s, u) {
                    var c = A(s);
                    if ("function" !== typeof c)
                        throw Error(o(150));
                    if (null == (s = c.call(s)))
                        throw Error(o(151));
                    for (var f = c = null, v = l, m = l = 0, g = null, y = s.next(); null !== v && !y.done; m++,
                    y = s.next()) {
                        v.index > m ? (g = v,
                        v = null) : g = v.sibling;
                        var b = p(a, v, y.value, u);
                        if (null === b) {
                            null === v && (v = g);
                            break
                        }
                        e && v && null === b.alternate && t(a, v),
                        l = i(b, l, m),
                        null === f ? c = b : f.sibling = b,
                        f = b,
                        v = g
                    }
                    if (y.done)
                        return n(a, v),
                        ao && Za(a, m),
                        c;
                    if (null === v) {
                        for (; !y.done; m++,
                        y = s.next())
                            null !== (y = d(a, y.value, u)) && (l = i(y, l, m),
                            null === f ? c = y : f.sibling = y,
                            f = y);
                        return ao && Za(a, m),
                        c
                    }
                    for (v = r(a, v); !y.done; m++,
                    y = s.next())
                        null !== (y = h(v, a, m, y.value, u)) && (e && null !== y.alternate && v.delete(null === y.key ? m : y.key),
                        l = i(y, l, m),
                        null === f ? c = y : f.sibling = y,
                        f = y);
                    return e && v.forEach((function(e) {
                        return t(a, e)
                    }
                    )),
                    ao && Za(a, m),
                    c
                }
                return function e(r, o, i, s) {
                    if ("object" === typeof i && null !== i && i.type === S && null === i.key && (i = i.props.children),
                    "object" === typeof i && null !== i) {
                        switch (i.$$typeof) {
                        case w:
                            e: {
                                for (var u = i.key, c = o; null !== c; ) {
                                    if (c.key === u) {
                                        if ((u = i.type) === S) {
                                            if (7 === c.tag) {
                                                n(r, c.sibling),
                                                (o = a(c, i.props.children)).return = r,
                                                r = o;
                                                break e
                                            }
                                        } else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === M && Xo(u) === c.type) {
                                            n(r, c.sibling),
                                            (o = a(c, i.props)).ref = Yo(r, c, i),
                                            o.return = r,
                                            r = o;
                                            break e
                                        }
                                        n(r, c);
                                        break
                                    }
                                    t(r, c),
                                    c = c.sibling
                                }
                                i.type === S ? ((o = Du(i.props.children, r.mode, s, i.key)).return = r,
                                r = o) : ((s = Au(i.type, i.key, i.props, null, r.mode, s)).ref = Yo(r, o, i),
                                s.return = r,
                                r = s)
                            }
                            return l(r);
                        case k:
                            e: {
                                for (c = i.key; null !== o; ) {
                                    if (o.key === c) {
                                        if (4 === o.tag && o.stateNode.containerInfo === i.containerInfo && o.stateNode.implementation === i.implementation) {
                                            n(r, o.sibling),
                                            (o = a(o, i.children || [])).return = r,
                                            r = o;
                                            break e
                                        }
                                        n(r, o);
                                        break
                                    }
                                    t(r, o),
                                    o = o.sibling
                                }
                                (o = zu(i, r.mode, s)).return = r,
                                r = o
                            }
                            return l(r);
                        case M:
                            return e(r, o, (c = i._init)(i._payload), s)
                        }
                        if (te(i))
                            return v(r, o, i, s);
                        if (A(i))
                            return m(r, o, i, s);
                        qo(r, i)
                    }
                    return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i,
                    null !== o && 6 === o.tag ? (n(r, o.sibling),
                    (o = a(o, i)).return = r,
                    r = o) : (n(r, o),
                    (o = Iu(i, r.mode, s)).return = r,
                    r = o),
                    l(r)) : n(r, o)
                }
            }
            var Go = Ko(!0)
              , Zo = Ko(!1)
              , Jo = {}
              , ei = Ea(Jo)
              , ti = Ea(Jo)
              , ni = Ea(Jo);
            function ri(e) {
                if (e === Jo)
                    throw Error(o(174));
                return e
            }
            function ai(e, t) {
                switch (Pa(ni, t),
                Pa(ti, e),
                Pa(ei, Jo),
                e = t.nodeType) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
                    break;
                default:
                    t = se(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                Ca(ei),
                Pa(ei, t)
            }
            function oi() {
                Ca(ei),
                Ca(ti),
                Ca(ni)
            }
            function ii(e) {
                ri(ni.current);
                var t = ri(ei.current)
                  , n = se(t, e.type);
                t !== n && (Pa(ti, e),
                Pa(ei, n))
            }
            function li(e) {
                ti.current === e && (Ca(ei),
                Ca(ti))
            }
            var si = Ea(0);
            function ui(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                            return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags))
                            return t
                    } else if (null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
                return null
            }
            var ci = [];
            function fi() {
                for (var e = 0; e < ci.length; e++)
                    ci[e]._workInProgressVersionPrimary = null;
                ci.length = 0
            }
            var di = x.ReactCurrentDispatcher
              , pi = x.ReactCurrentBatchConfig
              , hi = 0
              , vi = null
              , mi = null
              , gi = null
              , yi = !1
              , bi = !1
              , xi = 0
              , wi = 0;
            function ki() {
                throw Error(o(321))
            }
            function Si(e, t) {
                if (null === t)
                    return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!lr(e[n], t[n]))
                        return !1;
                return !0
            }
            function Ei(e, t, n, r, a, i) {
                if (hi = i,
                vi = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.lanes = 0,
                di.current = null === e || null === e.memoizedState ? ll : sl,
                e = n(r, a),
                bi) {
                    i = 0;
                    do {
                        if (bi = !1,
                        xi = 0,
                        25 <= i)
                            throw Error(o(301));
                        i += 1,
                        gi = mi = null,
                        t.updateQueue = null,
                        di.current = ul,
                        e = n(r, a)
                    } while (bi)
                }
                if (di.current = il,
                t = null !== mi && null !== mi.next,
                hi = 0,
                gi = mi = vi = null,
                yi = !1,
                t)
                    throw Error(o(300));
                return e
            }
            function Ci() {
                var e = 0 !== xi;
                return xi = 0,
                e
            }
            function Pi() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === gi ? vi.memoizedState = gi = e : gi = gi.next = e,
                gi
            }
            function ji() {
                if (null === mi) {
                    var e = vi.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = mi.next;
                var t = null === gi ? vi.memoizedState : gi.next;
                if (null !== t)
                    gi = t,
                    mi = e;
                else {
                    if (null === e)
                        throw Error(o(310));
                    e = {
                        memoizedState: (mi = e).memoizedState,
                        baseState: mi.baseState,
                        baseQueue: mi.baseQueue,
                        queue: mi.queue,
                        next: null
                    },
                    null === gi ? vi.memoizedState = gi = e : gi = gi.next = e
                }
                return gi
            }
            function Ti(e, t) {
                return "function" === typeof t ? t(e) : t
            }
            function Oi(e) {
                var t = ji()
                  , n = t.queue;
                if (null === n)
                    throw Error(o(311));
                n.lastRenderedReducer = e;
                var r = mi
                  , a = r.baseQueue
                  , i = n.pending;
                if (null !== i) {
                    if (null !== a) {
                        var l = a.next;
                        a.next = i.next,
                        i.next = l
                    }
                    r.baseQueue = a = i,
                    n.pending = null
                }
                if (null !== a) {
                    i = a.next,
                    r = r.baseState;
                    var s = l = null
                      , u = null
                      , c = i;
                    do {
                        var f = c.lane;
                        if ((hi & f) === f)
                            null !== u && (u = u.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }),
                            r = c.hasEagerState ? c.eagerState : e(r, c.action);
                        else {
                            var d = {
                                lane: f,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (s = u = d,
                            l = r) : u = u.next = d,
                            vi.lanes |= f,
                            Vs |= f
                        }
                        c = c.next
                    } while (null !== c && c !== i);
                    null === u ? l = r : u.next = s,
                    lr(r, t.memoizedState) || (xl = !0),
                    t.memoizedState = r,
                    t.baseState = l,
                    t.baseQueue = u,
                    n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    a = e;
                    do {
                        i = a.lane,
                        vi.lanes |= i,
                        Vs |= i,
                        a = a.next
                    } while (a !== e)
                } else
                    null === a && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }
            function Ni(e) {
                var t = ji()
                  , n = t.queue;
                if (null === n)
                    throw Error(o(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch
                  , a = n.pending
                  , i = t.memoizedState;
                if (null !== a) {
                    n.pending = null;
                    var l = a = a.next;
                    do {
                        i = e(i, l.action),
                        l = l.next
                    } while (l !== a);
                    lr(i, t.memoizedState) || (xl = !0),
                    t.memoizedState = i,
                    null === t.baseQueue && (t.baseState = i),
                    n.lastRenderedState = i
                }
                return [i, r]
            }
            function _i() {}
            function Mi(e, t) {
                var n = vi
                  , r = ji()
                  , a = t()
                  , i = !lr(r.memoizedState, a);
                if (i && (r.memoizedState = a,
                xl = !0),
                r = r.queue,
                Wi(Ai.bind(null, n, r, e), [e]),
                r.getSnapshot !== t || i || null !== gi && 1 & gi.memoizedState.tag) {
                    if (n.flags |= 2048,
                    zi(9, Li.bind(null, n, r, a, t), void 0, null),
                    null === Ns)
                        throw Error(o(349));
                    0 !== (30 & hi) || Ri(n, t, a)
                }
                return a
            }
            function Ri(e, t, n) {
                e.flags |= 16384,
                e = {
                    getSnapshot: t,
                    value: n
                },
                null === (t = vi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                },
                vi.updateQueue = t,
                t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }
            function Li(e, t, n, r) {
                t.value = n,
                t.getSnapshot = r,
                Di(t) && Vi(e)
            }
            function Ai(e, t, n) {
                return n((function() {
                    Di(t) && Vi(e)
                }
                ))
            }
            function Di(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !lr(e, n)
                } catch (r) {
                    return !0
                }
            }
            function Vi(e) {
                var t = No(e, 1);
                null !== t && ru(t, e, 1, -1)
            }
            function Ii(e) {
                var t = Pi();
                return "function" === typeof e && (e = e()),
                t.memoizedState = t.baseState = e,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ti,
                    lastRenderedState: e
                },
                t.queue = e,
                e = e.dispatch = nl.bind(null, vi, e),
                [t.memoizedState, e]
            }
            function zi(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                },
                null === (t = vi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                },
                vi.updateQueue = t,
                t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
                n.next = e,
                e.next = r,
                t.lastEffect = e),
                e
            }
            function Fi() {
                return ji().memoizedState
            }
            function Bi(e, t, n, r) {
                var a = Pi();
                vi.flags |= e,
                a.memoizedState = zi(1 | t, n, void 0, void 0 === r ? null : r)
            }
            function Ui(e, t, n, r) {
                var a = ji();
                r = void 0 === r ? null : r;
                var o = void 0;
                if (null !== mi) {
                    var i = mi.memoizedState;
                    if (o = i.destroy,
                    null !== r && Si(r, i.deps))
                        return void (a.memoizedState = zi(t, n, o, r))
                }
                vi.flags |= e,
                a.memoizedState = zi(1 | t, n, o, r)
            }
            function Hi(e, t) {
                return Bi(8390656, 8, e, t)
            }
            function Wi(e, t) {
                return Ui(2048, 8, e, t)
            }
            function $i(e, t) {
                return Ui(4, 2, e, t)
            }
            function Qi(e, t) {
                return Ui(4, 4, e, t)
            }
            function Yi(e, t) {
                return "function" === typeof t ? (e = e(),
                t(e),
                function() {
                    t(null)
                }
                ) : null !== t && void 0 !== t ? (e = e(),
                t.current = e,
                function() {
                    t.current = null
                }
                ) : void 0
            }
            function qi(e, t, n) {
                return n = null !== n && void 0 !== n ? n.concat([e]) : null,
                Ui(4, 4, Yi.bind(null, t, e), n)
            }
            function Xi() {}
            function Ki(e, t) {
                var n = ji();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && Si(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
                e)
            }
            function Gi(e, t) {
                var n = ji();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && Si(t, r[1]) ? r[0] : (e = e(),
                n.memoizedState = [e, t],
                e)
            }
            function Zi(e, t, n) {
                return 0 === (21 & hi) ? (e.baseState && (e.baseState = !1,
                xl = !0),
                e.memoizedState = n) : (lr(n, t) || (n = vt(),
                vi.lanes |= n,
                Vs |= n,
                e.baseState = !0),
                t)
            }
            function Ji(e, t) {
                var n = bt;
                bt = 0 !== n && 4 > n ? n : 4,
                e(!0);
                var r = pi.transition;
                pi.transition = {};
                try {
                    e(!1),
                    t()
                } finally {
                    bt = n,
                    pi.transition = r
                }
            }
            function el() {
                return ji().memoizedState
            }
            function tl(e, t, n) {
                var r = nu(e);
                if (n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                rl(e))
                    al(t, n);
                else if (null !== (n = Oo(e, t, n, r))) {
                    ru(n, e, r, tu()),
                    ol(n, t, r)
                }
            }
            function nl(e, t, n) {
                var r = nu(e)
                  , a = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (rl(e))
                    al(t, a);
                else {
                    var o = e.alternate;
                    if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
                        try {
                            var i = t.lastRenderedState
                              , l = o(i, n);
                            if (a.hasEagerState = !0,
                            a.eagerState = l,
                            lr(l, i)) {
                                var s = t.interleaved;
                                return null === s ? (a.next = a,
                                To(t)) : (a.next = s.next,
                                s.next = a),
                                void (t.interleaved = a)
                            }
                        } catch (u) {}
                    null !== (n = Oo(e, t, a, r)) && (ru(n, e, r, a = tu()),
                    ol(n, t, r))
                }
            }
            function rl(e) {
                var t = e.alternate;
                return e === vi || null !== t && t === vi
            }
            function al(e, t) {
                bi = yi = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next,
                n.next = t),
                e.pending = t
            }
            function ol(e, t, n) {
                if (0 !== (4194240 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes,
                    t.lanes = n,
                    yt(e, n)
                }
            }
            var il = {
                readContext: Po,
                useCallback: ki,
                useContext: ki,
                useEffect: ki,
                useImperativeHandle: ki,
                useInsertionEffect: ki,
                useLayoutEffect: ki,
                useMemo: ki,
                useReducer: ki,
                useRef: ki,
                useState: ki,
                useDebugValue: ki,
                useDeferredValue: ki,
                useTransition: ki,
                useMutableSource: ki,
                useSyncExternalStore: ki,
                useId: ki,
                unstable_isNewReconciler: !1
            }
              , ll = {
                readContext: Po,
                useCallback: function(e, t) {
                    return Pi().memoizedState = [e, void 0 === t ? null : t],
                    e
                },
                useContext: Po,
                useEffect: Hi,
                useImperativeHandle: function(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null,
                    Bi(4194308, 4, Yi.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return Bi(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    return Bi(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = Pi();
                    return t = void 0 === t ? null : t,
                    e = e(),
                    n.memoizedState = [e, t],
                    e
                },
                useReducer: function(e, t, n) {
                    var r = Pi();
                    return t = void 0 !== n ? n(t) : t,
                    r.memoizedState = r.baseState = t,
                    e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    },
                    r.queue = e,
                    e = e.dispatch = tl.bind(null, vi, e),
                    [r.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    },
                    Pi().memoizedState = e
                },
                useState: Ii,
                useDebugValue: Xi,
                useDeferredValue: function(e) {
                    return Pi().memoizedState = e
                },
                useTransition: function() {
                    var e = Ii(!1)
                      , t = e[0];
                    return e = Ji.bind(null, e[1]),
                    Pi().memoizedState = e,
                    [t, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, t, n) {
                    var r = vi
                      , a = Pi();
                    if (ao) {
                        if (void 0 === n)
                            throw Error(o(407));
                        n = n()
                    } else {
                        if (n = t(),
                        null === Ns)
                            throw Error(o(349));
                        0 !== (30 & hi) || Ri(r, t, n)
                    }
                    a.memoizedState = n;
                    var i = {
                        value: n,
                        getSnapshot: t
                    };
                    return a.queue = i,
                    Hi(Ai.bind(null, r, i, e), [e]),
                    r.flags |= 2048,
                    zi(9, Li.bind(null, r, i, n, t), void 0, null),
                    n
                },
                useId: function() {
                    var e = Pi()
                      , t = Ns.identifierPrefix;
                    if (ao) {
                        var n = Ga;
                        t = ":" + t + "R" + (n = (Ka & ~(1 << 32 - it(Ka) - 1)).toString(32) + n),
                        0 < (n = xi++) && (t += "H" + n.toString(32)),
                        t += ":"
                    } else
                        t = ":" + t + "r" + (n = wi++).toString(32) + ":";
                    return e.memoizedState = t
                },
                unstable_isNewReconciler: !1
            }
              , sl = {
                readContext: Po,
                useCallback: Ki,
                useContext: Po,
                useEffect: Wi,
                useImperativeHandle: qi,
                useInsertionEffect: $i,
                useLayoutEffect: Qi,
                useMemo: Gi,
                useReducer: Oi,
                useRef: Fi,
                useState: function() {
                    return Oi(Ti)
                },
                useDebugValue: Xi,
                useDeferredValue: function(e) {
                    return Zi(ji(), mi.memoizedState, e)
                },
                useTransition: function() {
                    return [Oi(Ti)[0], ji().memoizedState]
                },
                useMutableSource: _i,
                useSyncExternalStore: Mi,
                useId: el,
                unstable_isNewReconciler: !1
            }
              , ul = {
                readContext: Po,
                useCallback: Ki,
                useContext: Po,
                useEffect: Wi,
                useImperativeHandle: qi,
                useInsertionEffect: $i,
                useLayoutEffect: Qi,
                useMemo: Gi,
                useReducer: Ni,
                useRef: Fi,
                useState: function() {
                    return Ni(Ti)
                },
                useDebugValue: Xi,
                useDeferredValue: function(e) {
                    var t = ji();
                    return null === mi ? t.memoizedState = e : Zi(t, mi.memoizedState, e)
                },
                useTransition: function() {
                    return [Ni(Ti)[0], ji().memoizedState]
                },
                useMutableSource: _i,
                useSyncExternalStore: Mi,
                useId: el,
                unstable_isNewReconciler: !1
            };
            function cl(e, t) {
                try {
                    var n = ""
                      , r = t;
                    do {
                        n += B(r),
                        r = r.return
                    } while (r);
                    var a = n
                } catch (o) {
                    a = "\nError generating stack: " + o.message + "\n" + o.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: a,
                    digest: null
                }
            }
            function fl(e, t, n) {
                return {
                    value: e,
                    source: null,
                    stack: null != n ? n : null,
                    digest: null != t ? t : null
                }
            }
            function dl(e, t) {
                try {
                    console.error(t.value)
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }
                    ))
                }
            }
            var pl = "function" === typeof WeakMap ? WeakMap : Map;
            function hl(e, t, n) {
                (n = Lo(-1, n)).tag = 3,
                n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    $s || ($s = !0,
                    Qs = r),
                    dl(0, t)
                }
                ,
                n
            }
            function vl(e, t, n) {
                (n = Lo(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var a = t.value;
                    n.payload = function() {
                        return r(a)
                    }
                    ,
                    n.callback = function() {
                        dl(0, t)
                    }
                }
                var o = e.stateNode;
                return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function() {
                    dl(0, t),
                    "function" !== typeof r && (null === Ys ? Ys = new Set([this]) : Ys.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                ),
                n
            }
            function ml(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new pl;
                    var a = new Set;
                    r.set(t, a)
                } else
                    void 0 === (a = r.get(t)) && (a = new Set,
                    r.set(t, a));
                a.has(n) || (a.add(n),
                e = Pu.bind(null, e, t, n),
                t.then(e, e))
            }
            function gl(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
                    t)
                        return e;
                    e = e.return
                } while (null !== e);
                return null
            }
            function yl(e, t, n, r, a) {
                return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
                n.flags |= 131072,
                n.flags &= -52805,
                1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Lo(-1, 1)).tag = 2,
                Ao(n, t, 1))),
                n.lanes |= 1),
                e) : (e.flags |= 65536,
                e.lanes = a,
                e)
            }
            var bl = x.ReactCurrentOwner
              , xl = !1;
            function wl(e, t, n, r) {
                t.child = null === e ? Zo(t, null, n, r) : Go(t, e.child, n, r)
            }
            function kl(e, t, n, r, a) {
                n = n.render;
                var o = t.ref;
                return Co(t, a),
                r = Ei(e, t, n, r, o, a),
                n = Ci(),
                null === e || xl ? (ao && n && eo(t),
                t.flags |= 1,
                wl(e, t, r, a),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~a,
                $l(e, t, a))
            }
            function Sl(e, t, n, r, a) {
                if (null === e) {
                    var o = n.type;
                    return "function" !== typeof o || Ru(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Au(n.type, null, r, t, t.mode, a)).ref = t.ref,
                    e.return = t,
                    t.child = e) : (t.tag = 15,
                    t.type = o,
                    El(e, t, o, r, a))
                }
                if (o = e.child,
                0 === (e.lanes & a)) {
                    var i = o.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : sr)(i, r) && e.ref === t.ref)
                        return $l(e, t, a)
                }
                return t.flags |= 1,
                (e = Lu(o, r)).ref = t.ref,
                e.return = t,
                t.child = e
            }
            function El(e, t, n, r, a) {
                if (null !== e) {
                    var o = e.memoizedProps;
                    if (sr(o, r) && e.ref === t.ref) {
                        if (xl = !1,
                        t.pendingProps = r = o,
                        0 === (e.lanes & a))
                            return t.lanes = e.lanes,
                            $l(e, t, a);
                        0 !== (131072 & e.flags) && (xl = !0)
                    }
                }
                return jl(e, t, n, r, a)
            }
            function Cl(e, t, n) {
                var r = t.pendingProps
                  , a = r.children
                  , o = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode)
                    if (0 === (1 & t.mode))
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        Pa(Ls, Rs),
                        Rs |= n;
                    else {
                        if (0 === (1073741824 & n))
                            return e = null !== o ? o.baseLanes | n : n,
                            t.lanes = t.childLanes = 1073741824,
                            t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            },
                            t.updateQueue = null,
                            Pa(Ls, Rs),
                            Rs |= e,
                            null;
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        r = null !== o ? o.baseLanes : n,
                        Pa(Ls, Rs),
                        Rs |= r
                    }
                else
                    null !== o ? (r = o.baseLanes | n,
                    t.memoizedState = null) : r = n,
                    Pa(Ls, Rs),
                    Rs |= r;
                return wl(e, t, a, n),
                t.child
            }
            function Pl(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512,
                t.flags |= 2097152)
            }
            function jl(e, t, n, r, a) {
                var o = Ma(n) ? Na : Ta.current;
                return o = _a(t, o),
                Co(t, a),
                n = Ei(e, t, n, r, o, a),
                r = Ci(),
                null === e || xl ? (ao && r && eo(t),
                t.flags |= 1,
                wl(e, t, n, a),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~a,
                $l(e, t, a))
            }
            function Tl(e, t, n, r, a) {
                if (Ma(n)) {
                    var o = !0;
                    Da(t)
                } else
                    o = !1;
                if (Co(t, a),
                null === t.stateNode)
                    Wl(e, t),
                    Wo(t, n, r),
                    Qo(t, n, r, a),
                    r = !0;
                else if (null === e) {
                    var i = t.stateNode
                      , l = t.memoizedProps;
                    i.props = l;
                    var s = i.context
                      , u = n.contextType;
                    "object" === typeof u && null !== u ? u = Po(u) : u = _a(t, u = Ma(n) ? Na : Ta.current);
                    var c = n.getDerivedStateFromProps
                      , f = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
                    f || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== r || s !== u) && $o(t, i, r, u),
                    _o = !1;
                    var d = t.memoizedState;
                    i.state = d,
                    Io(t, r, i, a),
                    s = t.memoizedState,
                    l !== r || d !== s || Oa.current || _o ? ("function" === typeof c && (Bo(t, n, c, r),
                    s = t.memoizedState),
                    (l = _o || Ho(t, n, l, r, d, s, u)) ? (f || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(),
                    "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
                    "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308),
                    t.memoizedProps = r,
                    t.memoizedState = s),
                    i.props = r,
                    i.state = s,
                    i.context = u,
                    r = l) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308),
                    r = !1)
                } else {
                    i = t.stateNode,
                    Ro(e, t),
                    l = t.memoizedProps,
                    u = t.type === t.elementType ? l : go(t.type, l),
                    i.props = u,
                    f = t.pendingProps,
                    d = i.context,
                    "object" === typeof (s = n.contextType) && null !== s ? s = Po(s) : s = _a(t, s = Ma(n) ? Na : Ta.current);
                    var p = n.getDerivedStateFromProps;
                    (c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== f || d !== s) && $o(t, i, r, s),
                    _o = !1,
                    d = t.memoizedState,
                    i.state = d,
                    Io(t, r, i, a);
                    var h = t.memoizedState;
                    l !== f || d !== h || Oa.current || _o ? ("function" === typeof p && (Bo(t, n, p, r),
                    h = t.memoizedState),
                    (u = _o || Ho(t, n, u, r, d, h, s) || !1) ? (c || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, s),
                    "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate && (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = h),
                    i.props = r,
                    i.state = h,
                    i.context = s,
                    r = u) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
                    r = !1)
                }
                return Ol(e, t, n, r, o, a)
            }
            function Ol(e, t, n, r, a, o) {
                Pl(e, t);
                var i = 0 !== (128 & t.flags);
                if (!r && !i)
                    return a && Va(t, n, !1),
                    $l(e, t, o);
                r = t.stateNode,
                bl.current = t;
                var l = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1,
                null !== e && i ? (t.child = Go(t, e.child, null, o),
                t.child = Go(t, null, l, o)) : wl(e, t, l, o),
                t.memoizedState = r.state,
                a && Va(t, n, !0),
                t.child
            }
            function Nl(e) {
                var t = e.stateNode;
                t.pendingContext ? La(0, t.pendingContext, t.pendingContext !== t.context) : t.context && La(0, t.context, !1),
                ai(e, t.containerInfo)
            }
            function _l(e, t, n, r, a) {
                return ho(),
                vo(a),
                t.flags |= 256,
                wl(e, t, n, r),
                t.child
            }
            var Ml, Rl, Ll, Al, Dl = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function Vl(e) {
                return {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }
            }
            function Il(e, t, n) {
                var r, a = t.pendingProps, i = si.current, l = !1, s = 0 !== (128 & t.flags);
                if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
                r ? (l = !0,
                t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1),
                Pa(si, 1 & i),
                null === e)
                    return uo(t),
                    null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824,
                    null) : (s = a.children,
                    e = a.fallback,
                    l ? (a = t.mode,
                    l = t.child,
                    s = {
                        mode: "hidden",
                        children: s
                    },
                    0 === (1 & a) && null !== l ? (l.childLanes = 0,
                    l.pendingProps = s) : l = Vu(s, a, 0, null),
                    e = Du(e, a, n, null),
                    l.return = t,
                    e.return = t,
                    l.sibling = e,
                    t.child = l,
                    t.child.memoizedState = Vl(n),
                    t.memoizedState = Dl,
                    e) : zl(t, s));
                if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
                    return function(e, t, n, r, a, i, l) {
                        if (n)
                            return 256 & t.flags ? (t.flags &= -257,
                            Fl(e, t, l, r = fl(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child,
                            t.flags |= 128,
                            null) : (i = r.fallback,
                            a = t.mode,
                            r = Vu({
                                mode: "visible",
                                children: r.children
                            }, a, 0, null),
                            (i = Du(i, a, l, null)).flags |= 2,
                            r.return = t,
                            i.return = t,
                            r.sibling = i,
                            t.child = r,
                            0 !== (1 & t.mode) && Go(t, e.child, null, l),
                            t.child.memoizedState = Vl(l),
                            t.memoizedState = Dl,
                            i);
                        if (0 === (1 & t.mode))
                            return Fl(e, t, l, null);
                        if ("$!" === a.data) {
                            if (r = a.nextSibling && a.nextSibling.dataset)
                                var s = r.dgst;
                            return r = s,
                            Fl(e, t, l, r = fl(i = Error(o(419)), r, void 0))
                        }
                        if (s = 0 !== (l & e.childLanes),
                        xl || s) {
                            if (null !== (r = Ns)) {
                                switch (l & -l) {
                                case 4:
                                    a = 2;
                                    break;
                                case 16:
                                    a = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    a = 32;
                                    break;
                                case 536870912:
                                    a = 268435456;
                                    break;
                                default:
                                    a = 0
                                }
                                0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) && a !== i.retryLane && (i.retryLane = a,
                                No(e, a),
                                ru(r, e, a, -1))
                            }
                            return mu(),
                            Fl(e, t, l, r = fl(Error(o(421))))
                        }
                        return "$?" === a.data ? (t.flags |= 128,
                        t.child = e.child,
                        t = Tu.bind(null, e),
                        a._reactRetry = t,
                        null) : (e = i.treeContext,
                        ro = ua(a.nextSibling),
                        no = t,
                        ao = !0,
                        oo = null,
                        null !== e && (Ya[qa++] = Ka,
                        Ya[qa++] = Ga,
                        Ya[qa++] = Xa,
                        Ka = e.id,
                        Ga = e.overflow,
                        Xa = t),
                        t = zl(t, r.children),
                        t.flags |= 4096,
                        t)
                    }(e, t, s, a, r, i, n);
                if (l) {
                    l = a.fallback,
                    s = t.mode,
                    r = (i = e.child).sibling;
                    var u = {
                        mode: "hidden",
                        children: a.children
                    };
                    return 0 === (1 & s) && t.child !== i ? ((a = t.child).childLanes = 0,
                    a.pendingProps = u,
                    t.deletions = null) : (a = Lu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags,
                    null !== r ? l = Lu(r, l) : (l = Du(l, s, n, null)).flags |= 2,
                    l.return = t,
                    a.return = t,
                    a.sibling = l,
                    t.child = a,
                    a = l,
                    l = t.child,
                    s = null === (s = e.child.memoizedState) ? Vl(n) : {
                        baseLanes: s.baseLanes | n,
                        cachePool: null,
                        transitions: s.transitions
                    },
                    l.memoizedState = s,
                    l.childLanes = e.childLanes & ~n,
                    t.memoizedState = Dl,
                    a
                }
                return e = (l = e.child).sibling,
                a = Lu(l, {
                    mode: "visible",
                    children: a.children
                }),
                0 === (1 & t.mode) && (a.lanes = n),
                a.return = t,
                a.sibling = null,
                null !== e && (null === (n = t.deletions) ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
                t.child = a,
                t.memoizedState = null,
                a
            }
            function zl(e, t) {
                return (t = Vu({
                    mode: "visible",
                    children: t
                }, e.mode, 0, null)).return = e,
                e.child = t
            }
            function Fl(e, t, n, r) {
                return null !== r && vo(r),
                Go(t, e.child, null, n),
                (e = zl(t, t.pendingProps.children)).flags |= 2,
                t.memoizedState = null,
                e
            }
            function Bl(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t),
                Eo(e.return, t, n)
            }
            function Ul(e, t, n, r, a) {
                var o = e.memoizedState;
                null === o ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: a
                } : (o.isBackwards = t,
                o.rendering = null,
                o.renderingStartTime = 0,
                o.last = r,
                o.tail = n,
                o.tailMode = a)
            }
            function Hl(e, t, n) {
                var r = t.pendingProps
                  , a = r.revealOrder
                  , o = r.tail;
                if (wl(e, t, r.children, n),
                0 !== (2 & (r = si.current)))
                    r = 1 & r | 2,
                    t.flags |= 128;
                else {
                    if (null !== e && 0 !== (128 & e.flags))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && Bl(e, n, t);
                            else if (19 === e.tag)
                                Bl(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === t)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                if (Pa(si, r),
                0 === (1 & t.mode))
                    t.memoizedState = null;
                else
                    switch (a) {
                    case "forwards":
                        for (n = t.child,
                        a = null; null !== n; )
                            null !== (e = n.alternate) && null === ui(e) && (a = n),
                            n = n.sibling;
                        null === (n = a) ? (a = t.child,
                        t.child = null) : (a = n.sibling,
                        n.sibling = null),
                        Ul(t, !1, a, n, o);
                        break;
                    case "backwards":
                        for (n = null,
                        a = t.child,
                        t.child = null; null !== a; ) {
                            if (null !== (e = a.alternate) && null === ui(e)) {
                                t.child = a;
                                break
                            }
                            e = a.sibling,
                            a.sibling = n,
                            n = a,
                            a = e
                        }
                        Ul(t, !0, n, null, o);
                        break;
                    case "together":
                        Ul(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                    }
                return t.child
            }
            function Wl(e, t) {
                0 === (1 & t.mode) && null !== e && (e.alternate = null,
                t.alternate = null,
                t.flags |= 2)
            }
            function $l(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies),
                Vs |= t.lanes,
                0 === (n & t.childLanes))
                    return null;
                if (null !== e && t.child !== e.child)
                    throw Error(o(153));
                if (null !== t.child) {
                    for (n = Lu(e = t.child, e.pendingProps),
                    t.child = n,
                    n.return = t; null !== e.sibling; )
                        e = e.sibling,
                        (n = n.sibling = Lu(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }
            function Ql(e, t) {
                if (!ao)
                    switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            null !== t.alternate && (n = t),
                            t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            null !== n.alternate && (r = n),
                            n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function Yl(e) {
                var t = null !== e.alternate && e.alternate.child === e.child
                  , n = 0
                  , r = 0;
                if (t)
                    for (var a = e.child; null !== a; )
                        n |= a.lanes | a.childLanes,
                        r |= 14680064 & a.subtreeFlags,
                        r |= 14680064 & a.flags,
                        a.return = e,
                        a = a.sibling;
                else
                    for (a = e.child; null !== a; )
                        n |= a.lanes | a.childLanes,
                        r |= a.subtreeFlags,
                        r |= a.flags,
                        a.return = e,
                        a = a.sibling;
                return e.subtreeFlags |= r,
                e.childLanes = n,
                t
            }
            function ql(e, t, n) {
                var r = t.pendingProps;
                switch (to(t),
                t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Yl(t),
                    null;
                case 1:
                case 17:
                    return Ma(t.type) && Ra(),
                    Yl(t),
                    null;
                case 3:
                    return r = t.stateNode,
                    oi(),
                    Ca(Oa),
                    Ca(Ta),
                    fi(),
                    r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                    null !== e && null !== e.child || (fo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024,
                    null !== oo && (lu(oo),
                    oo = null))),
                    Rl(e, t),
                    Yl(t),
                    null;
                case 5:
                    li(t);
                    var a = ri(ni.current);
                    if (n = t.type,
                    null !== e && null != t.stateNode)
                        Ll(e, t, n, r, a),
                        e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
                    else {
                        if (!r) {
                            if (null === t.stateNode)
                                throw Error(o(166));
                            return Yl(t),
                            null
                        }
                        if (e = ri(ei.current),
                        fo(t)) {
                            r = t.stateNode,
                            n = t.type;
                            var i = t.memoizedProps;
                            switch (r[da] = t,
                            r[pa] = i,
                            e = 0 !== (1 & t.mode),
                            n) {
                            case "dialog":
                                zr("cancel", r),
                                zr("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                zr("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Ar.length; a++)
                                    zr(Ar[a], r);
                                break;
                            case "source":
                                zr("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                zr("error", r),
                                zr("load", r);
                                break;
                            case "details":
                                zr("toggle", r);
                                break;
                            case "input":
                                K(r, i),
                                zr("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                },
                                zr("invalid", r);
                                break;
                            case "textarea":
                                ae(r, i),
                                zr("invalid", r)
                            }
                            for (var s in ye(n, i),
                            a = null,
                            i)
                                if (i.hasOwnProperty(s)) {
                                    var u = i[s];
                                    "children" === s ? "string" === typeof u ? r.textContent !== u && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, u, e),
                                    a = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, u, e),
                                    a = ["children", "" + u]) : l.hasOwnProperty(s) && null != u && "onScroll" === s && zr("scroll", r)
                                }
                            switch (n) {
                            case "input":
                                Q(r),
                                J(r, i, !0);
                                break;
                            case "textarea":
                                Q(r),
                                ie(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" === typeof i.onClick && (r.onclick = Jr)
                            }
                            r = a,
                            t.updateQueue = r,
                            null !== r && (t.flags |= 4)
                        } else {
                            s = 9 === a.nodeType ? a : a.ownerDocument,
                            "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                            "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(n, {
                                is: r.is
                            }) : (e = s.createElement(n),
                            "select" === n && (s = e,
                            r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                            e[da] = t,
                            e[pa] = r,
                            Ml(e, t, !1, !1),
                            t.stateNode = e;
                            e: {
                                switch (s = be(n, r),
                                n) {
                                case "dialog":
                                    zr("cancel", e),
                                    zr("close", e),
                                    a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    zr("load", e),
                                    a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Ar.length; a++)
                                        zr(Ar[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    zr("error", e),
                                    a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    zr("error", e),
                                    zr("load", e),
                                    a = r;
                                    break;
                                case "details":
                                    zr("toggle", e),
                                    a = r;
                                    break;
                                case "input":
                                    K(e, r),
                                    a = X(e, r),
                                    zr("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    },
                                    a = V({}, r, {
                                        value: void 0
                                    }),
                                    zr("invalid", e);
                                    break;
                                case "textarea":
                                    ae(e, r),
                                    a = re(e, r),
                                    zr("invalid", e)
                                }
                                for (i in ye(n, a),
                                u = a)
                                    if (u.hasOwnProperty(i)) {
                                        var c = u[i];
                                        "style" === i ? me(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === i ? "string" === typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" === typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != c && "onScroll" === i && zr("scroll", e) : null != c && b(e, i, c, s))
                                    }
                                switch (n) {
                                case "input":
                                    Q(e),
                                    J(e, r, !1);
                                    break;
                                case "textarea":
                                    Q(e),
                                    ie(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + W(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple,
                                    null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    "function" === typeof a.onClick && (e.onclick = Jr)
                                }
                                switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                                }
                            }
                            r && (t.flags |= 4)
                        }
                        null !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152)
                    }
                    return Yl(t),
                    null;
                case 6:
                    if (e && null != t.stateNode)
                        Al(e, t, e.memoizedProps, r);
                    else {
                        if ("string" !== typeof r && null === t.stateNode)
                            throw Error(o(166));
                        if (n = ri(ni.current),
                        ri(ei.current),
                        fo(t)) {
                            if (r = t.stateNode,
                            n = t.memoizedProps,
                            r[da] = t,
                            (i = r.nodeValue !== n) && null !== (e = no))
                                switch (e.tag) {
                                case 3:
                                    Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                                    break;
                                case 5:
                                    !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 !== (1 & e.mode))
                                }
                            i && (t.flags |= 4)
                        } else
                            (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[da] = t,
                            t.stateNode = r
                    }
                    return Yl(t),
                    null;
                case 13:
                    if (Ca(si),
                    r = t.memoizedState,
                    null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                        if (ao && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                            po(),
                            ho(),
                            t.flags |= 98560,
                            i = !1;
                        else if (i = fo(t),
                        null !== r && null !== r.dehydrated) {
                            if (null === e) {
                                if (!i)
                                    throw Error(o(318));
                                if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                                    throw Error(o(317));
                                i[da] = t
                            } else
                                ho(),
                                0 === (128 & t.flags) && (t.memoizedState = null),
                                t.flags |= 4;
                            Yl(t),
                            i = !1
                        } else
                            null !== oo && (lu(oo),
                            oo = null),
                            i = !0;
                        if (!i)
                            return 65536 & t.flags ? t : null
                    }
                    return 0 !== (128 & t.flags) ? (t.lanes = n,
                    t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192,
                    0 !== (1 & t.mode) && (null === e || 0 !== (1 & si.current) ? 0 === As && (As = 3) : mu())),
                    null !== t.updateQueue && (t.flags |= 4),
                    Yl(t),
                    null);
                case 4:
                    return oi(),
                    Rl(e, t),
                    null === e && Ur(t.stateNode.containerInfo),
                    Yl(t),
                    null;
                case 10:
                    return So(t.type._context),
                    Yl(t),
                    null;
                case 19:
                    if (Ca(si),
                    null === (i = t.memoizedState))
                        return Yl(t),
                        null;
                    if (r = 0 !== (128 & t.flags),
                    null === (s = i.rendering))
                        if (r)
                            Ql(i, !1);
                        else {
                            if (0 !== As || null !== e && 0 !== (128 & e.flags))
                                for (e = t.child; null !== e; ) {
                                    if (null !== (s = ui(e))) {
                                        for (t.flags |= 128,
                                        Ql(i, !1),
                                        null !== (r = s.updateQueue) && (t.updateQueue = r,
                                        t.flags |= 4),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child; null !== n; )
                                            e = r,
                                            (i = n).flags &= 14680066,
                                            null === (s = i.alternate) ? (i.childLanes = 0,
                                            i.lanes = e,
                                            i.child = null,
                                            i.subtreeFlags = 0,
                                            i.memoizedProps = null,
                                            i.memoizedState = null,
                                            i.updateQueue = null,
                                            i.dependencies = null,
                                            i.stateNode = null) : (i.childLanes = s.childLanes,
                                            i.lanes = s.lanes,
                                            i.child = s.child,
                                            i.subtreeFlags = 0,
                                            i.deletions = null,
                                            i.memoizedProps = s.memoizedProps,
                                            i.memoizedState = s.memoizedState,
                                            i.updateQueue = s.updateQueue,
                                            i.type = s.type,
                                            e = s.dependencies,
                                            i.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }),
                                            n = n.sibling;
                                        return Pa(si, 1 & si.current | 2),
                                        t.child
                                    }
                                    e = e.sibling
                                }
                            null !== i.tail && Ge() > Hs && (t.flags |= 128,
                            r = !0,
                            Ql(i, !1),
                            t.lanes = 4194304)
                        }
                    else {
                        if (!r)
                            if (null !== (e = ui(s))) {
                                if (t.flags |= 128,
                                r = !0,
                                null !== (n = e.updateQueue) && (t.updateQueue = n,
                                t.flags |= 4),
                                Ql(i, !0),
                                null === i.tail && "hidden" === i.tailMode && !s.alternate && !ao)
                                    return Yl(t),
                                    null
                            } else
                                2 * Ge() - i.renderingStartTime > Hs && 1073741824 !== n && (t.flags |= 128,
                                r = !0,
                                Ql(i, !1),
                                t.lanes = 4194304);
                        i.isBackwards ? (s.sibling = t.child,
                        t.child = s) : (null !== (n = i.last) ? n.sibling = s : t.child = s,
                        i.last = s)
                    }
                    return null !== i.tail ? (t = i.tail,
                    i.rendering = t,
                    i.tail = t.sibling,
                    i.renderingStartTime = Ge(),
                    t.sibling = null,
                    n = si.current,
                    Pa(si, r ? 1 & n | 2 : 1 & n),
                    t) : (Yl(t),
                    null);
                case 22:
                case 23:
                    return du(),
                    r = null !== t.memoizedState,
                    null !== e && null !== e.memoizedState !== r && (t.flags |= 8192),
                    r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Rs) && (Yl(t),
                    6 & t.subtreeFlags && (t.flags |= 8192)) : Yl(t),
                    null;
                case 24:
                case 25:
                    return null
                }
                throw Error(o(156, t.tag))
            }
            function Xl(e, t) {
                switch (to(t),
                t.tag) {
                case 1:
                    return Ma(t.type) && Ra(),
                    65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 3:
                    return oi(),
                    Ca(Oa),
                    Ca(Ta),
                    fi(),
                    0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 5:
                    return li(t),
                    null;
                case 13:
                    if (Ca(si),
                    null !== (e = t.memoizedState) && null !== e.dehydrated) {
                        if (null === t.alternate)
                            throw Error(o(340));
                        ho()
                    }
                    return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128,
                    t) : null;
                case 19:
                    return Ca(si),
                    null;
                case 4:
                    return oi(),
                    null;
                case 10:
                    return So(t.type._context),
                    null;
                case 22:
                case 23:
                    return du(),
                    null;
                default:
                    return null
                }
            }
            Ml = function(e, t) {
                for (var n = t.child; null !== n; ) {
                    if (5 === n.tag || 6 === n.tag)
                        e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === t)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === t)
                            return;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            }
            ,
            Rl = function() {}
            ,
            Ll = function(e, t, n, r) {
                var a = e.memoizedProps;
                if (a !== r) {
                    e = t.stateNode,
                    ri(ei.current);
                    var o, i = null;
                    switch (n) {
                    case "input":
                        a = X(e, a),
                        r = X(e, r),
                        i = [];
                        break;
                    case "select":
                        a = V({}, a, {
                            value: void 0
                        }),
                        r = V({}, r, {
                            value: void 0
                        }),
                        i = [];
                        break;
                    case "textarea":
                        a = re(e, a),
                        r = re(e, r),
                        i = [];
                        break;
                    default:
                        "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Jr)
                    }
                    for (c in ye(n, r),
                    n = null,
                    a)
                        if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                            if ("style" === c) {
                                var s = a[c];
                                for (o in s)
                                    s.hasOwnProperty(o) && (n || (n = {}),
                                    n[o] = "")
                            } else
                                "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
                    for (c in r) {
                        var u = r[c];
                        if (s = null != a ? a[c] : void 0,
                        r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                            if ("style" === c)
                                if (s) {
                                    for (o in s)
                                        !s.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}),
                                        n[o] = "");
                                    for (o in u)
                                        u.hasOwnProperty(o) && s[o] !== u[o] && (n || (n = {}),
                                        n[o] = u[o])
                                } else
                                    n || (i || (i = []),
                                    i.push(c, n)),
                                    n = u;
                            else
                                "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0,
                                s = s ? s.__html : void 0,
                                null != u && s !== u && (i = i || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (i = i || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != u && "onScroll" === c && zr("scroll", e),
                                i || s === u || (i = [])) : (i = i || []).push(c, u))
                    }
                    n && (i = i || []).push("style", n);
                    var c = i;
                    (t.updateQueue = c) && (t.flags |= 4)
                }
            }
            ,
            Al = function(e, t, n, r) {
                n !== r && (t.flags |= 4)
            }
            ;
            var Kl = !1
              , Gl = !1
              , Zl = "function" === typeof WeakSet ? WeakSet : Set
              , Jl = null;
            function es(e, t) {
                var n = e.ref;
                if (null !== n)
                    if ("function" === typeof n)
                        try {
                            n(null)
                        } catch (r) {
                            Cu(e, t, r)
                        }
                    else
                        n.current = null
            }
            function ts(e, t, n) {
                try {
                    n()
                } catch (r) {
                    Cu(e, t, r)
                }
            }
            var ns = !1;
            function rs(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var a = r = r.next;
                    do {
                        if ((a.tag & e) === e) {
                            var o = a.destroy;
                            a.destroy = void 0,
                            void 0 !== o && ts(t, n, o)
                        }
                        a = a.next
                    } while (a !== r)
                }
            }
            function as(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }
            function os(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e.tag,
                    e = n,
                    "function" === typeof t ? t(e) : t.current = e
                }
            }
            function is(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null,
                is(t)),
                e.child = null,
                e.deletions = null,
                e.sibling = null,
                5 === e.tag && (null !== (t = e.stateNode) && (delete t[da],
                delete t[pa],
                delete t[va],
                delete t[ma],
                delete t[ga])),
                e.stateNode = null,
                e.return = null,
                e.dependencies = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.stateNode = null,
                e.updateQueue = null
            }
            function ls(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function ss(e) {
                e: for (; ; ) {
                    for (; null === e.sibling; ) {
                        if (null === e.return || ls(e.return))
                            return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return,
                    e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
                        if (2 & e.flags)
                            continue e;
                        if (null === e.child || 4 === e.tag)
                            continue e;
                        e.child.return = e,
                        e = e.child
                    }
                    if (!(2 & e.flags))
                        return e.stateNode
                }
            }
            function us(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                    null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
                else if (4 !== r && null !== (e = e.child))
                    for (us(e, t, n),
                    e = e.sibling; null !== e; )
                        us(e, t, n),
                        e = e.sibling
            }
            function cs(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (cs(e, t, n),
                    e = e.sibling; null !== e; )
                        cs(e, t, n),
                        e = e.sibling
            }
            var fs = null
              , ds = !1;
            function ps(e, t, n) {
                for (n = n.child; null !== n; )
                    hs(e, t, n),
                    n = n.sibling
            }
            function hs(e, t, n) {
                if (ot && "function" === typeof ot.onCommitFiberUnmount)
                    try {
                        ot.onCommitFiberUnmount(at, n)
                    } catch (l) {}
                switch (n.tag) {
                case 5:
                    Gl || es(n, t);
                case 6:
                    var r = fs
                      , a = ds;
                    fs = null,
                    ps(e, t, n),
                    ds = a,
                    null !== (fs = r) && (ds ? (e = fs,
                    n = n.stateNode,
                    8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : fs.removeChild(n.stateNode));
                    break;
                case 18:
                    null !== fs && (ds ? (e = fs,
                    n = n.stateNode,
                    8 === e.nodeType ? sa(e.parentNode, n) : 1 === e.nodeType && sa(e, n),
                    Ut(e)) : sa(fs, n.stateNode));
                    break;
                case 4:
                    r = fs,
                    a = ds,
                    fs = n.stateNode.containerInfo,
                    ds = !0,
                    ps(e, t, n),
                    fs = r,
                    ds = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!Gl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                        a = r = r.next;
                        do {
                            var o = a
                              , i = o.destroy;
                            o = o.tag,
                            void 0 !== i && (0 !== (2 & o) || 0 !== (4 & o)) && ts(n, t, i),
                            a = a.next
                        } while (a !== r)
                    }
                    ps(e, t, n);
                    break;
                case 1:
                    if (!Gl && (es(n, t),
                    "function" === typeof (r = n.stateNode).componentWillUnmount))
                        try {
                            r.props = n.memoizedProps,
                            r.state = n.memoizedState,
                            r.componentWillUnmount()
                        } catch (l) {
                            Cu(n, t, l)
                        }
                    ps(e, t, n);
                    break;
                case 21:
                    ps(e, t, n);
                    break;
                case 22:
                    1 & n.mode ? (Gl = (r = Gl) || null !== n.memoizedState,
                    ps(e, t, n),
                    Gl = r) : ps(e, t, n);
                    break;
                default:
                    ps(e, t, n)
                }
            }
            function vs(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Zl),
                    t.forEach((function(t) {
                        var r = Ou.bind(null, e, t);
                        n.has(t) || (n.add(t),
                        t.then(r, r))
                    }
                    ))
                }
            }
            function ms(e, t) {
                var n = t.deletions;
                if (null !== n)
                    for (var r = 0; r < n.length; r++) {
                        var a = n[r];
                        try {
                            var i = e
                              , l = t
                              , s = l;
                            e: for (; null !== s; ) {
                                switch (s.tag) {
                                case 5:
                                    fs = s.stateNode,
                                    ds = !1;
                                    break e;
                                case 3:
                                case 4:
                                    fs = s.stateNode.containerInfo,
                                    ds = !0;
                                    break e
                                }
                                s = s.return
                            }
                            if (null === fs)
                                throw Error(o(160));
                            hs(i, l, a),
                            fs = null,
                            ds = !1;
                            var u = a.alternate;
                            null !== u && (u.return = null),
                            a.return = null
                        } catch (c) {
                            Cu(a, t, c)
                        }
                    }
                if (12854 & t.subtreeFlags)
                    for (t = t.child; null !== t; )
                        gs(t, e),
                        t = t.sibling
            }
            function gs(e, t) {
                var n = e.alternate
                  , r = e.flags;
                switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (ms(t, e),
                    ys(e),
                    4 & r) {
                        try {
                            rs(3, e, e.return),
                            as(3, e)
                        } catch (m) {
                            Cu(e, e.return, m)
                        }
                        try {
                            rs(5, e, e.return)
                        } catch (m) {
                            Cu(e, e.return, m)
                        }
                    }
                    break;
                case 1:
                    ms(t, e),
                    ys(e),
                    512 & r && null !== n && es(n, n.return);
                    break;
                case 5:
                    if (ms(t, e),
                    ys(e),
                    512 & r && null !== n && es(n, n.return),
                    32 & e.flags) {
                        var a = e.stateNode;
                        try {
                            de(a, "")
                        } catch (m) {
                            Cu(e, e.return, m)
                        }
                    }
                    if (4 & r && null != (a = e.stateNode)) {
                        var i = e.memoizedProps
                          , l = null !== n ? n.memoizedProps : i
                          , s = e.type
                          , u = e.updateQueue;
                        if (e.updateQueue = null,
                        null !== u)
                            try {
                                "input" === s && "radio" === i.type && null != i.name && G(a, i),
                                be(s, l);
                                var c = be(s, i);
                                for (l = 0; l < u.length; l += 2) {
                                    var f = u[l]
                                      , d = u[l + 1];
                                    "style" === f ? me(a, d) : "dangerouslySetInnerHTML" === f ? fe(a, d) : "children" === f ? de(a, d) : b(a, f, d, c)
                                }
                                switch (s) {
                                case "input":
                                    Z(a, i);
                                    break;
                                case "textarea":
                                    oe(a, i);
                                    break;
                                case "select":
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!i.multiple;
                                    var h = i.value;
                                    null != h ? ne(a, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(a, !!i.multiple, i.defaultValue, !0) : ne(a, !!i.multiple, i.multiple ? [] : "", !1))
                                }
                                a[pa] = i
                            } catch (m) {
                                Cu(e, e.return, m)
                            }
                    }
                    break;
                case 6:
                    if (ms(t, e),
                    ys(e),
                    4 & r) {
                        if (null === e.stateNode)
                            throw Error(o(162));
                        a = e.stateNode,
                        i = e.memoizedProps;
                        try {
                            a.nodeValue = i
                        } catch (m) {
                            Cu(e, e.return, m)
                        }
                    }
                    break;
                case 3:
                    if (ms(t, e),
                    ys(e),
                    4 & r && null !== n && n.memoizedState.isDehydrated)
                        try {
                            Ut(t.containerInfo)
                        } catch (m) {
                            Cu(e, e.return, m)
                        }
                    break;
                case 4:
                default:
                    ms(t, e),
                    ys(e);
                    break;
                case 13:
                    ms(t, e),
                    ys(e),
                    8192 & (a = e.child).flags && (i = null !== a.memoizedState,
                    a.stateNode.isHidden = i,
                    !i || null !== a.alternate && null !== a.alternate.memoizedState || (Us = Ge())),
                    4 & r && vs(e);
                    break;
                case 22:
                    if (f = null !== n && null !== n.memoizedState,
                    1 & e.mode ? (Gl = (c = Gl) || f,
                    ms(t, e),
                    Gl = c) : ms(t, e),
                    ys(e),
                    8192 & r) {
                        if (c = null !== e.memoizedState,
                        (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                            for (Jl = e,
                            f = e.child; null !== f; ) {
                                for (d = Jl = f; null !== Jl; ) {
                                    switch (h = (p = Jl).child,
                                    p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        rs(4, p, p.return);
                                        break;
                                    case 1:
                                        es(p, p.return);
                                        var v = p.stateNode;
                                        if ("function" === typeof v.componentWillUnmount) {
                                            r = p,
                                            n = p.return;
                                            try {
                                                t = r,
                                                v.props = t.memoizedProps,
                                                v.state = t.memoizedState,
                                                v.componentWillUnmount()
                                            } catch (m) {
                                                Cu(r, n, m)
                                            }
                                        }
                                        break;
                                    case 5:
                                        es(p, p.return);
                                        break;
                                    case 22:
                                        if (null !== p.memoizedState) {
                                            ks(d);
                                            continue
                                        }
                                    }
                                    null !== h ? (h.return = p,
                                    Jl = h) : ks(d)
                                }
                                f = f.sibling
                            }
                        e: for (f = null,
                        d = e; ; ) {
                            if (5 === d.tag) {
                                if (null === f) {
                                    f = d;
                                    try {
                                        a = d.stateNode,
                                        c ? "function" === typeof (i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (s = d.stateNode,
                                        l = void 0 !== (u = d.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null,
                                        s.style.display = ve("display", l))
                                    } catch (m) {
                                        Cu(e, e.return, m)
                                    }
                                }
                            } else if (6 === d.tag) {
                                if (null === f)
                                    try {
                                        d.stateNode.nodeValue = c ? "" : d.memoizedProps
                                    } catch (m) {
                                        Cu(e, e.return, m)
                                    }
                            } else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
                                d.child.return = d,
                                d = d.child;
                                continue
                            }
                            if (d === e)
                                break e;
                            for (; null === d.sibling; ) {
                                if (null === d.return || d.return === e)
                                    break e;
                                f === d && (f = null),
                                d = d.return
                            }
                            f === d && (f = null),
                            d.sibling.return = d.return,
                            d = d.sibling
                        }
                    }
                    break;
                case 19:
                    ms(t, e),
                    ys(e),
                    4 & r && vs(e);
                case 21:
                }
            }
            function ys(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e: {
                            for (var n = e.return; null !== n; ) {
                                if (ls(n)) {
                                    var r = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(o(160))
                        }
                        switch (r.tag) {
                        case 5:
                            var a = r.stateNode;
                            32 & r.flags && (de(a, ""),
                            r.flags &= -33),
                            cs(e, ss(e), a);
                            break;
                        case 3:
                        case 4:
                            var i = r.stateNode.containerInfo;
                            us(e, ss(e), i);
                            break;
                        default:
                            throw Error(o(161))
                        }
                    } catch (l) {
                        Cu(e, e.return, l)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }
            function bs(e, t, n) {
                Jl = e,
                xs(e, t, n)
            }
            function xs(e, t, n) {
                for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
                    var a = Jl
                      , o = a.child;
                    if (22 === a.tag && r) {
                        var i = null !== a.memoizedState || Kl;
                        if (!i) {
                            var l = a.alternate
                              , s = null !== l && null !== l.memoizedState || Gl;
                            l = Kl;
                            var u = Gl;
                            if (Kl = i,
                            (Gl = s) && !u)
                                for (Jl = a; null !== Jl; )
                                    s = (i = Jl).child,
                                    22 === i.tag && null !== i.memoizedState ? Ss(a) : null !== s ? (s.return = i,
                                    Jl = s) : Ss(a);
                            for (; null !== o; )
                                Jl = o,
                                xs(o, t, n),
                                o = o.sibling;
                            Jl = a,
                            Kl = l,
                            Gl = u
                        }
                        ws(e)
                    } else
                        0 !== (8772 & a.subtreeFlags) && null !== o ? (o.return = a,
                        Jl = o) : ws(e)
                }
            }
            function ws(e) {
                for (; null !== Jl; ) {
                    var t = Jl;
                    if (0 !== (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 !== (8772 & t.flags))
                                switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Gl || as(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !Gl)
                                        if (null === n)
                                            r.componentDidMount();
                                        else {
                                            var a = t.elementType === t.type ? n.memoizedProps : go(t.type, n.memoizedProps);
                                            r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var i = t.updateQueue;
                                    null !== i && zo(t, i, r);
                                    break;
                                case 3:
                                    var l = t.updateQueue;
                                    if (null !== l) {
                                        if (n = null,
                                        null !== t.child)
                                            switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                n = t.child.stateNode
                                            }
                                        zo(t, l, n)
                                    }
                                    break;
                                case 5:
                                    var s = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = s;
                                        var u = t.memoizedProps;
                                        switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            u.autoFocus && n.focus();
                                            break;
                                        case "img":
                                            u.src && (n.src = u.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var c = t.alternate;
                                        if (null !== c) {
                                            var f = c.memoizedState;
                                            if (null !== f) {
                                                var d = f.dehydrated;
                                                null !== d && Ut(d)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(o(163))
                                }
                            Gl || 512 & t.flags && os(t)
                        } catch (p) {
                            Cu(t, t.return, p)
                        }
                    }
                    if (t === e) {
                        Jl = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return,
                        Jl = n;
                        break
                    }
                    Jl = t.return
                }
            }
            function ks(e) {
                for (; null !== Jl; ) {
                    var t = Jl;
                    if (t === e) {
                        Jl = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return,
                        Jl = n;
                        break
                    }
                    Jl = t.return
                }
            }
            function Ss(e) {
                for (; null !== Jl; ) {
                    var t = Jl;
                    try {
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var n = t.return;
                            try {
                                as(4, t)
                            } catch (s) {
                                Cu(t, n, s)
                            }
                            break;
                        case 1:
                            var r = t.stateNode;
                            if ("function" === typeof r.componentDidMount) {
                                var a = t.return;
                                try {
                                    r.componentDidMount()
                                } catch (s) {
                                    Cu(t, a, s)
                                }
                            }
                            var o = t.return;
                            try {
                                os(t)
                            } catch (s) {
                                Cu(t, o, s)
                            }
                            break;
                        case 5:
                            var i = t.return;
                            try {
                                os(t)
                            } catch (s) {
                                Cu(t, i, s)
                            }
                        }
                    } catch (s) {
                        Cu(t, t.return, s)
                    }
                    if (t === e) {
                        Jl = null;
                        break
                    }
                    var l = t.sibling;
                    if (null !== l) {
                        l.return = t.return,
                        Jl = l;
                        break
                    }
                    Jl = t.return
                }
            }
            var Es, Cs = Math.ceil, Ps = x.ReactCurrentDispatcher, js = x.ReactCurrentOwner, Ts = x.ReactCurrentBatchConfig, Os = 0, Ns = null, _s = null, Ms = 0, Rs = 0, Ls = Ea(0), As = 0, Ds = null, Vs = 0, Is = 0, zs = 0, Fs = null, Bs = null, Us = 0, Hs = 1 / 0, Ws = null, $s = !1, Qs = null, Ys = null, qs = !1, Xs = null, Ks = 0, Gs = 0, Zs = null, Js = -1, eu = 0;
            function tu() {
                return 0 !== (6 & Os) ? Ge() : -1 !== Js ? Js : Js = Ge()
            }
            function nu(e) {
                return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Os) && 0 !== Ms ? Ms & -Ms : null !== mo.transition ? (0 === eu && (eu = vt()),
                eu) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Kt(e.type)
            }
            function ru(e, t, n, r) {
                if (50 < Gs)
                    throw Gs = 0,
                    Zs = null,
                    Error(o(185));
                gt(e, n, r),
                0 !== (2 & Os) && e === Ns || (e === Ns && (0 === (2 & Os) && (Is |= n),
                4 === As && su(e, Ms)),
                au(e, r),
                1 === n && 0 === Os && 0 === (1 & t.mode) && (Hs = Ge() + 500,
                za && Ua()))
            }
            function au(e, t) {
                var n = e.callbackNode;
                !function(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
                        var i = 31 - it(o)
                          , l = 1 << i
                          , s = a[i];
                        -1 === s ? 0 !== (l & n) && 0 === (l & r) || (a[i] = pt(l, t)) : s <= t && (e.expiredLanes |= l),
                        o &= ~l
                    }
                }(e, t);
                var r = dt(e, e === Ns ? Ms : 0);
                if (0 === r)
                    null !== n && qe(n),
                    e.callbackNode = null,
                    e.callbackPriority = 0;
                else if (t = r & -r,
                e.callbackPriority !== t) {
                    if (null != n && qe(n),
                    1 === t)
                        0 === e.tag ? function(e) {
                            za = !0,
                            Ba(e)
                        }(uu.bind(null, e)) : Ba(uu.bind(null, e)),
                        ia((function() {
                            0 === (6 & Os) && Ua()
                        }
                        )),
                        n = null;
                    else {
                        switch (xt(r)) {
                        case 1:
                            n = Je;
                            break;
                        case 4:
                            n = et;
                            break;
                        case 16:
                        default:
                            n = tt;
                            break;
                        case 536870912:
                            n = rt
                        }
                        n = Nu(n, ou.bind(null, e))
                    }
                    e.callbackPriority = t,
                    e.callbackNode = n
                }
            }
            function ou(e, t) {
                if (Js = -1,
                eu = 0,
                0 !== (6 & Os))
                    throw Error(o(327));
                var n = e.callbackNode;
                if (Su() && e.callbackNode !== n)
                    return null;
                var r = dt(e, e === Ns ? Ms : 0);
                if (0 === r)
                    return null;
                if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t)
                    t = gu(e, r);
                else {
                    t = r;
                    var a = Os;
                    Os |= 2;
                    var i = vu();
                    for (Ns === e && Ms === t || (Ws = null,
                    Hs = Ge() + 500,
                    pu(e, t)); ; )
                        try {
                            bu();
                            break
                        } catch (s) {
                            hu(e, s)
                        }
                    ko(),
                    Ps.current = i,
                    Os = a,
                    null !== _s ? t = 0 : (Ns = null,
                    Ms = 0,
                    t = As)
                }
                if (0 !== t) {
                    if (2 === t && (0 !== (a = ht(e)) && (r = a,
                    t = iu(e, a))),
                    1 === t)
                        throw n = Ds,
                        pu(e, 0),
                        su(e, r),
                        au(e, Ge()),
                        n;
                    if (6 === t)
                        su(e, r);
                    else {
                        if (a = e.current.alternate,
                        0 === (30 & r) && !function(e) {
                            for (var t = e; ; ) {
                                if (16384 & t.flags) {
                                    var n = t.updateQueue;
                                    if (null !== n && null !== (n = n.stores))
                                        for (var r = 0; r < n.length; r++) {
                                            var a = n[r]
                                              , o = a.getSnapshot;
                                            a = a.value;
                                            try {
                                                if (!lr(o(), a))
                                                    return !1
                                            } catch (l) {
                                                return !1
                                            }
                                        }
                                }
                                if (n = t.child,
                                16384 & t.subtreeFlags && null !== n)
                                    n.return = t,
                                    t = n;
                                else {
                                    if (t === e)
                                        break;
                                    for (; null === t.sibling; ) {
                                        if (null === t.return || t.return === e)
                                            return !0;
                                        t = t.return
                                    }
                                    t.sibling.return = t.return,
                                    t = t.sibling
                                }
                            }
                            return !0
                        }(a) && (2 === (t = gu(e, r)) && (0 !== (i = ht(e)) && (r = i,
                        t = iu(e, i))),
                        1 === t))
                            throw n = Ds,
                            pu(e, 0),
                            su(e, r),
                            au(e, Ge()),
                            n;
                        switch (e.finishedWork = a,
                        e.finishedLanes = r,
                        t) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 2:
                        case 5:
                            ku(e, Bs, Ws);
                            break;
                        case 3:
                            if (su(e, r),
                            (130023424 & r) === r && 10 < (t = Us + 500 - Ge())) {
                                if (0 !== dt(e, 0))
                                    break;
                                if (((a = e.suspendedLanes) & r) !== r) {
                                    tu(),
                                    e.pingedLanes |= e.suspendedLanes & a;
                                    break
                                }
                                e.timeoutHandle = ra(ku.bind(null, e, Bs, Ws), t);
                                break
                            }
                            ku(e, Bs, Ws);
                            break;
                        case 4:
                            if (su(e, r),
                            (4194240 & r) === r)
                                break;
                            for (t = e.eventTimes,
                            a = -1; 0 < r; ) {
                                var l = 31 - it(r);
                                i = 1 << l,
                                (l = t[l]) > a && (a = l),
                                r &= ~i
                            }
                            if (r = a,
                            10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cs(r / 1960)) - r)) {
                                e.timeoutHandle = ra(ku.bind(null, e, Bs, Ws), r);
                                break
                            }
                            ku(e, Bs, Ws);
                            break;
                        default:
                            throw Error(o(329))
                        }
                    }
                }
                return au(e, Ge()),
                e.callbackNode === n ? ou.bind(null, e) : null
            }
            function iu(e, t) {
                var n = Fs;
                return e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
                2 !== (e = gu(e, t)) && (t = Bs,
                Bs = n,
                null !== t && lu(t)),
                e
            }
            function lu(e) {
                null === Bs ? Bs = e : Bs.push.apply(Bs, e)
            }
            function su(e, t) {
                for (t &= ~zs,
                t &= ~Is,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes; 0 < t; ) {
                    var n = 31 - it(t)
                      , r = 1 << n;
                    e[n] = -1,
                    t &= ~r
                }
            }
            function uu(e) {
                if (0 !== (6 & Os))
                    throw Error(o(327));
                Su();
                var t = dt(e, 0);
                if (0 === (1 & t))
                    return au(e, Ge()),
                    null;
                var n = gu(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = ht(e);
                    0 !== r && (t = r,
                    n = iu(e, r))
                }
                if (1 === n)
                    throw n = Ds,
                    pu(e, 0),
                    su(e, t),
                    au(e, Ge()),
                    n;
                if (6 === n)
                    throw Error(o(345));
                return e.finishedWork = e.current.alternate,
                e.finishedLanes = t,
                ku(e, Bs, Ws),
                au(e, Ge()),
                null
            }
            function cu(e, t) {
                var n = Os;
                Os |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Os = n) && (Hs = Ge() + 500,
                    za && Ua())
                }
            }
            function fu(e) {
                null !== Xs && 0 === Xs.tag && 0 === (6 & Os) && Su();
                var t = Os;
                Os |= 1;
                var n = Ts.transition
                  , r = bt;
                try {
                    if (Ts.transition = null,
                    bt = 1,
                    e)
                        return e()
                } finally {
                    bt = r,
                    Ts.transition = n,
                    0 === (6 & (Os = t)) && Ua()
                }
            }
            function du() {
                Rs = Ls.current,
                Ca(Ls)
            }
            function pu(e, t) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1,
                aa(n)),
                null !== _s)
                    for (n = _s.return; null !== n; ) {
                        var r = n;
                        switch (to(r),
                        r.tag) {
                        case 1:
                            null !== (r = r.type.childContextTypes) && void 0 !== r && Ra();
                            break;
                        case 3:
                            oi(),
                            Ca(Oa),
                            Ca(Ta),
                            fi();
                            break;
                        case 5:
                            li(r);
                            break;
                        case 4:
                            oi();
                            break;
                        case 13:
                        case 19:
                            Ca(si);
                            break;
                        case 10:
                            So(r.type._context);
                            break;
                        case 22:
                        case 23:
                            du()
                        }
                        n = n.return
                    }
                if (Ns = e,
                _s = e = Lu(e.current, null),
                Ms = Rs = t,
                As = 0,
                Ds = null,
                zs = Is = Vs = 0,
                Bs = Fs = null,
                null !== jo) {
                    for (t = 0; t < jo.length; t++)
                        if (null !== (r = (n = jo[t]).interleaved)) {
                            n.interleaved = null;
                            var a = r.next
                              , o = n.pending;
                            if (null !== o) {
                                var i = o.next;
                                o.next = a,
                                r.next = i
                            }
                            n.pending = r
                        }
                    jo = null
                }
                return e
            }
            function hu(e, t) {
                for (; ; ) {
                    var n = _s;
                    try {
                        if (ko(),
                        di.current = il,
                        yi) {
                            for (var r = vi.memoizedState; null !== r; ) {
                                var a = r.queue;
                                null !== a && (a.pending = null),
                                r = r.next
                            }
                            yi = !1
                        }
                        if (hi = 0,
                        gi = mi = vi = null,
                        bi = !1,
                        xi = 0,
                        js.current = null,
                        null === n || null === n.return) {
                            As = 1,
                            Ds = t,
                            _s = null;
                            break
                        }
                        e: {
                            var i = e
                              , l = n.return
                              , s = n
                              , u = t;
                            if (t = Ms,
                            s.flags |= 32768,
                            null !== u && "object" === typeof u && "function" === typeof u.then) {
                                var c = u
                                  , f = s
                                  , d = f.tag;
                                if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                                    var p = f.alternate;
                                    p ? (f.updateQueue = p.updateQueue,
                                    f.memoizedState = p.memoizedState,
                                    f.lanes = p.lanes) : (f.updateQueue = null,
                                    f.memoizedState = null)
                                }
                                var h = gl(l);
                                if (null !== h) {
                                    h.flags &= -257,
                                    yl(h, l, s, 0, t),
                                    1 & h.mode && ml(i, c, t),
                                    u = c;
                                    var v = (t = h).updateQueue;
                                    if (null === v) {
                                        var m = new Set;
                                        m.add(u),
                                        t.updateQueue = m
                                    } else
                                        v.add(u);
                                    break e
                                }
                                if (0 === (1 & t)) {
                                    ml(i, c, t),
                                    mu();
                                    break e
                                }
                                u = Error(o(426))
                            } else if (ao && 1 & s.mode) {
                                var g = gl(l);
                                if (null !== g) {
                                    0 === (65536 & g.flags) && (g.flags |= 256),
                                    yl(g, l, s, 0, t),
                                    vo(cl(u, s));
                                    break e
                                }
                            }
                            i = u = cl(u, s),
                            4 !== As && (As = 2),
                            null === Fs ? Fs = [i] : Fs.push(i),
                            i = l;
                            do {
                                switch (i.tag) {
                                case 3:
                                    i.flags |= 65536,
                                    t &= -t,
                                    i.lanes |= t,
                                    Vo(i, hl(0, u, t));
                                    break e;
                                case 1:
                                    s = u;
                                    var y = i.type
                                      , b = i.stateNode;
                                    if (0 === (128 & i.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Ys || !Ys.has(b)))) {
                                        i.flags |= 65536,
                                        t &= -t,
                                        i.lanes |= t,
                                        Vo(i, vl(i, s, t));
                                        break e
                                    }
                                }
                                i = i.return
                            } while (null !== i)
                        }
                        wu(n)
                    } catch (x) {
                        t = x,
                        _s === n && null !== n && (_s = n = n.return);
                        continue
                    }
                    break
                }
            }
            function vu() {
                var e = Ps.current;
                return Ps.current = il,
                null === e ? il : e
            }
            function mu() {
                0 !== As && 3 !== As && 2 !== As || (As = 4),
                null === Ns || 0 === (268435455 & Vs) && 0 === (268435455 & Is) || su(Ns, Ms)
            }
            function gu(e, t) {
                var n = Os;
                Os |= 2;
                var r = vu();
                for (Ns === e && Ms === t || (Ws = null,
                pu(e, t)); ; )
                    try {
                        yu();
                        break
                    } catch (a) {
                        hu(e, a)
                    }
                if (ko(),
                Os = n,
                Ps.current = r,
                null !== _s)
                    throw Error(o(261));
                return Ns = null,
                Ms = 0,
                As
            }
            function yu() {
                for (; null !== _s; )
                    xu(_s)
            }
            function bu() {
                for (; null !== _s && !Xe(); )
                    xu(_s)
            }
            function xu(e) {
                var t = Es(e.alternate, e, Rs);
                e.memoizedProps = e.pendingProps,
                null === t ? wu(e) : _s = t,
                js.current = null
            }
            function wu(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return,
                    0 === (32768 & t.flags)) {
                        if (null !== (n = ql(n, t, Rs)))
                            return void (_s = n)
                    } else {
                        if (null !== (n = Xl(n, t)))
                            return n.flags &= 32767,
                            void (_s = n);
                        if (null === e)
                            return As = 6,
                            void (_s = null);
                        e.flags |= 32768,
                        e.subtreeFlags = 0,
                        e.deletions = null
                    }
                    if (null !== (t = t.sibling))
                        return void (_s = t);
                    _s = t = e
                } while (null !== t);
                0 === As && (As = 5)
            }
            function ku(e, t, n) {
                var r = bt
                  , a = Ts.transition;
                try {
                    Ts.transition = null,
                    bt = 1,
                    function(e, t, n, r) {
                        do {
                            Su()
                        } while (null !== Xs);
                        if (0 !== (6 & Os))
                            throw Error(o(327));
                        n = e.finishedWork;
                        var a = e.finishedLanes;
                        if (null === n)
                            return null;
                        if (e.finishedWork = null,
                        e.finishedLanes = 0,
                        n === e.current)
                            throw Error(o(177));
                        e.callbackNode = null,
                        e.callbackPriority = 0;
                        var i = n.lanes | n.childLanes;
                        if (function(e, t) {
                            var n = e.pendingLanes & ~t;
                            e.pendingLanes = t,
                            e.suspendedLanes = 0,
                            e.pingedLanes = 0,
                            e.expiredLanes &= t,
                            e.mutableReadLanes &= t,
                            e.entangledLanes &= t,
                            t = e.entanglements;
                            var r = e.eventTimes;
                            for (e = e.expirationTimes; 0 < n; ) {
                                var a = 31 - it(n)
                                  , o = 1 << a;
                                t[a] = 0,
                                r[a] = -1,
                                e[a] = -1,
                                n &= ~o
                            }
                        }(e, i),
                        e === Ns && (_s = Ns = null,
                        Ms = 0),
                        0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || qs || (qs = !0,
                        Nu(tt, (function() {
                            return Su(),
                            null
                        }
                        ))),
                        i = 0 !== (15990 & n.flags),
                        0 !== (15990 & n.subtreeFlags) || i) {
                            i = Ts.transition,
                            Ts.transition = null;
                            var l = bt;
                            bt = 1;
                            var s = Os;
                            Os |= 4,
                            js.current = null,
                            function(e, t) {
                                if (ea = Wt,
                                pr(e = dr())) {
                                    if ("selectionStart"in e)
                                        var n = {
                                            start: e.selectionStart,
                                            end: e.selectionEnd
                                        };
                                    else
                                        e: {
                                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                            if (r && 0 !== r.rangeCount) {
                                                n = r.anchorNode;
                                                var a = r.anchorOffset
                                                  , i = r.focusNode;
                                                r = r.focusOffset;
                                                try {
                                                    n.nodeType,
                                                    i.nodeType
                                                } catch (w) {
                                                    n = null;
                                                    break e
                                                }
                                                var l = 0
                                                  , s = -1
                                                  , u = -1
                                                  , c = 0
                                                  , f = 0
                                                  , d = e
                                                  , p = null;
                                                t: for (; ; ) {
                                                    for (var h; d !== n || 0 !== a && 3 !== d.nodeType || (s = l + a),
                                                    d !== i || 0 !== r && 3 !== d.nodeType || (u = l + r),
                                                    3 === d.nodeType && (l += d.nodeValue.length),
                                                    null !== (h = d.firstChild); )
                                                        p = d,
                                                        d = h;
                                                    for (; ; ) {
                                                        if (d === e)
                                                            break t;
                                                        if (p === n && ++c === a && (s = l),
                                                        p === i && ++f === r && (u = l),
                                                        null !== (h = d.nextSibling))
                                                            break;
                                                        p = (d = p).parentNode
                                                    }
                                                    d = h
                                                }
                                                n = -1 === s || -1 === u ? null : {
                                                    start: s,
                                                    end: u
                                                }
                                            } else
                                                n = null
                                        }
                                    n = n || {
                                        start: 0,
                                        end: 0
                                    }
                                } else
                                    n = null;
                                for (ta = {
                                    focusedElem: e,
                                    selectionRange: n
                                },
                                Wt = !1,
                                Jl = t; null !== Jl; )
                                    if (e = (t = Jl).child,
                                    0 !== (1028 & t.subtreeFlags) && null !== e)
                                        e.return = t,
                                        Jl = e;
                                    else
                                        for (; null !== Jl; ) {
                                            t = Jl;
                                            try {
                                                var v = t.alternate;
                                                if (0 !== (1024 & t.flags))
                                                    switch (t.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (null !== v) {
                                                            var m = v.memoizedProps
                                                              , g = v.memoizedState
                                                              , y = t.stateNode
                                                              , b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? m : go(t.type, m), g);
                                                            y.__reactInternalSnapshotBeforeUpdate = b
                                                        }
                                                        break;
                                                    case 3:
                                                        var x = t.stateNode.containerInfo;
                                                        1 === x.nodeType ? x.textContent = "" : 9 === x.nodeType && x.documentElement && x.removeChild(x.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(o(163))
                                                    }
                                            } catch (w) {
                                                Cu(t, t.return, w)
                                            }
                                            if (null !== (e = t.sibling)) {
                                                e.return = t.return,
                                                Jl = e;
                                                break
                                            }
                                            Jl = t.return
                                        }
                                v = ns,
                                ns = !1
                            }(e, n),
                            gs(n, e),
                            hr(ta),
                            Wt = !!ea,
                            ta = ea = null,
                            e.current = n,
                            bs(n, e, a),
                            Ke(),
                            Os = s,
                            bt = l,
                            Ts.transition = i
                        } else
                            e.current = n;
                        if (qs && (qs = !1,
                        Xs = e,
                        Ks = a),
                        i = e.pendingLanes,
                        0 === i && (Ys = null),
                        function(e) {
                            if (ot && "function" === typeof ot.onCommitFiberRoot)
                                try {
                                    ot.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                                } catch (t) {}
                        }(n.stateNode),
                        au(e, Ge()),
                        null !== t)
                            for (r = e.onRecoverableError,
                            n = 0; n < t.length; n++)
                                a = t[n],
                                r(a.value, {
                                    componentStack: a.stack,
                                    digest: a.digest
                                });
                        if ($s)
                            throw $s = !1,
                            e = Qs,
                            Qs = null,
                            e;
                        0 !== (1 & Ks) && 0 !== e.tag && Su(),
                        i = e.pendingLanes,
                        0 !== (1 & i) ? e === Zs ? Gs++ : (Gs = 0,
                        Zs = e) : Gs = 0,
                        Ua()
                    }(e, t, n, r)
                } finally {
                    Ts.transition = a,
                    bt = r
                }
                return null
            }
            function Su() {
                if (null !== Xs) {
                    var e = xt(Ks)
                      , t = Ts.transition
                      , n = bt;
                    try {
                        if (Ts.transition = null,
                        bt = 16 > e ? 16 : e,
                        null === Xs)
                            var r = !1;
                        else {
                            if (e = Xs,
                            Xs = null,
                            Ks = 0,
                            0 !== (6 & Os))
                                throw Error(o(331));
                            var a = Os;
                            for (Os |= 4,
                            Jl = e.current; null !== Jl; ) {
                                var i = Jl
                                  , l = i.child;
                                if (0 !== (16 & Jl.flags)) {
                                    var s = i.deletions;
                                    if (null !== s) {
                                        for (var u = 0; u < s.length; u++) {
                                            var c = s[u];
                                            for (Jl = c; null !== Jl; ) {
                                                var f = Jl;
                                                switch (f.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rs(8, f, i)
                                                }
                                                var d = f.child;
                                                if (null !== d)
                                                    d.return = f,
                                                    Jl = d;
                                                else
                                                    for (; null !== Jl; ) {
                                                        var p = (f = Jl).sibling
                                                          , h = f.return;
                                                        if (is(f),
                                                        f === c) {
                                                            Jl = null;
                                                            break
                                                        }
                                                        if (null !== p) {
                                                            p.return = h,
                                                            Jl = p;
                                                            break
                                                        }
                                                        Jl = h
                                                    }
                                            }
                                        }
                                        var v = i.alternate;
                                        if (null !== v) {
                                            var m = v.child;
                                            if (null !== m) {
                                                v.child = null;
                                                do {
                                                    var g = m.sibling;
                                                    m.sibling = null,
                                                    m = g
                                                } while (null !== m)
                                            }
                                        }
                                        Jl = i
                                    }
                                }
                                if (0 !== (2064 & i.subtreeFlags) && null !== l)
                                    l.return = i,
                                    Jl = l;
                                else
                                    e: for (; null !== Jl; ) {
                                        if (0 !== (2048 & (i = Jl).flags))
                                            switch (i.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                rs(9, i, i.return)
                                            }
                                        var y = i.sibling;
                                        if (null !== y) {
                                            y.return = i.return,
                                            Jl = y;
                                            break e
                                        }
                                        Jl = i.return
                                    }
                            }
                            var b = e.current;
                            for (Jl = b; null !== Jl; ) {
                                var x = (l = Jl).child;
                                if (0 !== (2064 & l.subtreeFlags) && null !== x)
                                    x.return = l,
                                    Jl = x;
                                else
                                    e: for (l = b; null !== Jl; ) {
                                        if (0 !== (2048 & (s = Jl).flags))
                                            try {
                                                switch (s.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    as(9, s)
                                                }
                                            } catch (k) {
                                                Cu(s, s.return, k)
                                            }
                                        if (s === l) {
                                            Jl = null;
                                            break e
                                        }
                                        var w = s.sibling;
                                        if (null !== w) {
                                            w.return = s.return,
                                            Jl = w;
                                            break e
                                        }
                                        Jl = s.return
                                    }
                            }
                            if (Os = a,
                            Ua(),
                            ot && "function" === typeof ot.onPostCommitFiberRoot)
                                try {
                                    ot.onPostCommitFiberRoot(at, e)
                                } catch (k) {}
                            r = !0
                        }
                        return r
                    } finally {
                        bt = n,
                        Ts.transition = t
                    }
                }
                return !1
            }
            function Eu(e, t, n) {
                e = Ao(e, t = hl(0, t = cl(n, t), 1), 1),
                t = tu(),
                null !== e && (gt(e, 1, t),
                au(e, t))
            }
            function Cu(e, t, n) {
                if (3 === e.tag)
                    Eu(e, e, n);
                else
                    for (; null !== t; ) {
                        if (3 === t.tag) {
                            Eu(t, e, n);
                            break
                        }
                        if (1 === t.tag) {
                            var r = t.stateNode;
                            if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Ys || !Ys.has(r))) {
                                t = Ao(t, e = vl(t, e = cl(n, e), 1), 1),
                                e = tu(),
                                null !== t && (gt(t, 1, e),
                                au(t, e));
                                break
                            }
                        }
                        t = t.return
                    }
            }
            function Pu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                t = tu(),
                e.pingedLanes |= e.suspendedLanes & n,
                Ns === e && (Ms & n) === n && (4 === As || 3 === As && (130023424 & Ms) === Ms && 500 > Ge() - Us ? pu(e, 0) : zs |= n),
                au(e, t)
            }
            function ju(e, t) {
                0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct,
                0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                var n = tu();
                null !== (e = No(e, t)) && (gt(e, t, n),
                au(e, n))
            }
            function Tu(e) {
                var t = e.memoizedState
                  , n = 0;
                null !== t && (n = t.retryLane),
                ju(e, n)
            }
            function Ou(e, t) {
                var n = 0;
                switch (e.tag) {
                case 13:
                    var r = e.stateNode
                      , a = e.memoizedState;
                    null !== a && (n = a.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                default:
                    throw Error(o(314))
                }
                null !== r && r.delete(t),
                ju(e, n)
            }
            function Nu(e, t) {
                return Ye(e, t)
            }
            function _u(e, t, n, r) {
                this.tag = e,
                this.key = n,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.subtreeFlags = this.flags = 0,
                this.deletions = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function Mu(e, t, n, r) {
                return new _u(e,t,n,r)
            }
            function Ru(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function Lu(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Mu(e.tag, t, e.key, e.mode)).elementType = e.elementType,
                n.type = e.type,
                n.stateNode = e.stateNode,
                n.alternate = e,
                e.alternate = n) : (n.pendingProps = t,
                n.type = e.type,
                n.flags = 0,
                n.subtreeFlags = 0,
                n.deletions = null),
                n.flags = 14680064 & e.flags,
                n.childLanes = e.childLanes,
                n.lanes = e.lanes,
                n.child = e.child,
                n.memoizedProps = e.memoizedProps,
                n.memoizedState = e.memoizedState,
                n.updateQueue = e.updateQueue,
                t = e.dependencies,
                n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                },
                n.sibling = e.sibling,
                n.index = e.index,
                n.ref = e.ref,
                n
            }
            function Au(e, t, n, r, a, i) {
                var l = 2;
                if (r = e,
                "function" === typeof e)
                    Ru(e) && (l = 1);
                else if ("string" === typeof e)
                    l = 5;
                else
                    e: switch (e) {
                    case S:
                        return Du(n.children, a, i, t);
                    case E:
                        l = 8,
                        a |= 8;
                        break;
                    case C:
                        return (e = Mu(12, n, t, 2 | a)).elementType = C,
                        e.lanes = i,
                        e;
                    case O:
                        return (e = Mu(13, n, t, a)).elementType = O,
                        e.lanes = i,
                        e;
                    case N:
                        return (e = Mu(19, n, t, a)).elementType = N,
                        e.lanes = i,
                        e;
                    case R:
                        return Vu(n, a, i, t);
                    default:
                        if ("object" === typeof e && null !== e)
                            switch (e.$$typeof) {
                            case P:
                                l = 10;
                                break e;
                            case j:
                                l = 9;
                                break e;
                            case T:
                                l = 11;
                                break e;
                            case _:
                                l = 14;
                                break e;
                            case M:
                                l = 16,
                                r = null;
                                break e
                            }
                        throw Error(o(130, null == e ? e : typeof e, ""))
                    }
                return (t = Mu(l, n, t, a)).elementType = e,
                t.type = r,
                t.lanes = i,
                t
            }
            function Du(e, t, n, r) {
                return (e = Mu(7, e, r, t)).lanes = n,
                e
            }
            function Vu(e, t, n, r) {
                return (e = Mu(22, e, r, t)).elementType = R,
                e.lanes = n,
                e.stateNode = {
                    isHidden: !1
                },
                e
            }
            function Iu(e, t, n) {
                return (e = Mu(6, e, null, t)).lanes = n,
                e
            }
            function zu(e, t, n) {
                return (t = Mu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
            }
            function Fu(e, t, n, r, a) {
                this.tag = t,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.callbackNode = this.pendingContext = this.context = null,
                this.callbackPriority = 0,
                this.eventTimes = mt(0),
                this.expirationTimes = mt(-1),
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = mt(0),
                this.identifierPrefix = r,
                this.onRecoverableError = a,
                this.mutableSourceEagerHydrationData = null
            }
            function Bu(e, t, n, r, a, o, i, l, s) {
                return e = new Fu(e,t,n,l,s),
                1 === t ? (t = 1,
                !0 === o && (t |= 8)) : t = 0,
                o = Mu(3, null, null, t),
                e.current = o,
                o.stateNode = e,
                o.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                },
                Mo(o),
                e
            }
            function Uu(e) {
                if (!e)
                    return ja;
                e: {
                    if (Ue(e = e._reactInternals) !== e || 1 !== e.tag)
                        throw Error(o(170));
                    var t = e;
                    do {
                        switch (t.tag) {
                        case 3:
                            t = t.stateNode.context;
                            break e;
                        case 1:
                            if (Ma(t.type)) {
                                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(o(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (Ma(n))
                        return Aa(e, n, t)
                }
                return t
            }
            function Hu(e, t, n, r, a, o, i, l, s) {
                return (e = Bu(n, r, !0, e, 0, o, 0, l, s)).context = Uu(null),
                n = e.current,
                (o = Lo(r = tu(), a = nu(n))).callback = void 0 !== t && null !== t ? t : null,
                Ao(n, o, a),
                e.current.lanes = a,
                gt(e, a, r),
                au(e, r),
                e
            }
            function Wu(e, t, n, r) {
                var a = t.current
                  , o = tu()
                  , i = nu(a);
                return n = Uu(n),
                null === t.context ? t.context = n : t.pendingContext = n,
                (t = Lo(o, i)).payload = {
                    element: e
                },
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                null !== (e = Ao(a, t, i)) && (ru(e, a, i, o),
                Do(e, a, i)),
                i
            }
            function $u(e) {
                return (e = e.current).child ? (e.child.tag,
                e.child.stateNode) : null
            }
            function Qu(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }
            function Yu(e, t) {
                Qu(e, t),
                (e = e.alternate) && Qu(e, t)
            }
            Es = function(e, t, n) {
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || Oa.current)
                        xl = !0;
                    else {
                        if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                            return xl = !1,
                            function(e, t, n) {
                                switch (t.tag) {
                                case 3:
                                    Nl(t),
                                    ho();
                                    break;
                                case 5:
                                    ii(t);
                                    break;
                                case 1:
                                    Ma(t.type) && Da(t);
                                    break;
                                case 4:
                                    ai(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    var r = t.type._context
                                      , a = t.memoizedProps.value;
                                    Pa(yo, r._currentValue),
                                    r._currentValue = a;
                                    break;
                                case 13:
                                    if (null !== (r = t.memoizedState))
                                        return null !== r.dehydrated ? (Pa(si, 1 & si.current),
                                        t.flags |= 128,
                                        null) : 0 !== (n & t.child.childLanes) ? Il(e, t, n) : (Pa(si, 1 & si.current),
                                        null !== (e = $l(e, t, n)) ? e.sibling : null);
                                    Pa(si, 1 & si.current);
                                    break;
                                case 19:
                                    if (r = 0 !== (n & t.childLanes),
                                    0 !== (128 & e.flags)) {
                                        if (r)
                                            return Hl(e, t, n);
                                        t.flags |= 128
                                    }
                                    if (null !== (a = t.memoizedState) && (a.rendering = null,
                                    a.tail = null,
                                    a.lastEffect = null),
                                    Pa(si, si.current),
                                    r)
                                        break;
                                    return null;
                                case 22:
                                case 23:
                                    return t.lanes = 0,
                                    Cl(e, t, n)
                                }
                                return $l(e, t, n)
                            }(e, t, n);
                        xl = 0 !== (131072 & e.flags)
                    }
                else
                    xl = !1,
                    ao && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index);
                switch (t.lanes = 0,
                t.tag) {
                case 2:
                    var r = t.type;
                    Wl(e, t),
                    e = t.pendingProps;
                    var a = _a(t, Ta.current);
                    Co(t, n),
                    a = Ei(null, t, r, e, a, n);
                    var i = Ci();
                    return t.flags |= 1,
                    "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    Ma(r) ? (i = !0,
                    Da(t)) : i = !1,
                    t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null,
                    Mo(t),
                    a.updater = Uo,
                    t.stateNode = a,
                    a._reactInternals = t,
                    Qo(t, r, e, n),
                    t = Ol(null, t, r, !0, i, n)) : (t.tag = 0,
                    ao && i && eo(t),
                    wl(null, t, a, n),
                    t = t.child),
                    t;
                case 16:
                    r = t.elementType;
                    e: {
                        switch (Wl(e, t),
                        e = t.pendingProps,
                        r = (a = r._init)(r._payload),
                        t.type = r,
                        a = t.tag = function(e) {
                            if ("function" === typeof e)
                                return Ru(e) ? 1 : 0;
                            if (void 0 !== e && null !== e) {
                                if ((e = e.$$typeof) === T)
                                    return 11;
                                if (e === _)
                                    return 14
                            }
                            return 2
                        }(r),
                        e = go(r, e),
                        a) {
                        case 0:
                            t = jl(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Tl(null, t, r, e, n);
                            break e;
                        case 11:
                            t = kl(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Sl(null, t, r, go(r.type, e), n);
                            break e
                        }
                        throw Error(o(306, r, ""))
                    }
                    return t;
                case 0:
                    return r = t.type,
                    a = t.pendingProps,
                    jl(e, t, r, a = t.elementType === r ? a : go(r, a), n);
                case 1:
                    return r = t.type,
                    a = t.pendingProps,
                    Tl(e, t, r, a = t.elementType === r ? a : go(r, a), n);
                case 3:
                    e: {
                        if (Nl(t),
                        null === e)
                            throw Error(o(387));
                        r = t.pendingProps,
                        a = (i = t.memoizedState).element,
                        Ro(e, t),
                        Io(t, r, null, n);
                        var l = t.memoizedState;
                        if (r = l.element,
                        i.isDehydrated) {
                            if (i = {
                                element: r,
                                isDehydrated: !1,
                                cache: l.cache,
                                pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                                transitions: l.transitions
                            },
                            t.updateQueue.baseState = i,
                            t.memoizedState = i,
                            256 & t.flags) {
                                t = _l(e, t, r, n, a = cl(Error(o(423)), t));
                                break e
                            }
                            if (r !== a) {
                                t = _l(e, t, r, n, a = cl(Error(o(424)), t));
                                break e
                            }
                            for (ro = ua(t.stateNode.containerInfo.firstChild),
                            no = t,
                            ao = !0,
                            oo = null,
                            n = Zo(t, null, r, n),
                            t.child = n; n; )
                                n.flags = -3 & n.flags | 4096,
                                n = n.sibling
                        } else {
                            if (ho(),
                            r === a) {
                                t = $l(e, t, n);
                                break e
                            }
                            wl(e, t, r, n)
                        }
                        t = t.child
                    }
                    return t;
                case 5:
                    return ii(t),
                    null === e && uo(t),
                    r = t.type,
                    a = t.pendingProps,
                    i = null !== e ? e.memoizedProps : null,
                    l = a.children,
                    na(r, a) ? l = null : null !== i && na(r, i) && (t.flags |= 32),
                    Pl(e, t),
                    wl(e, t, l, n),
                    t.child;
                case 6:
                    return null === e && uo(t),
                    null;
                case 13:
                    return Il(e, t, n);
                case 4:
                    return ai(t, t.stateNode.containerInfo),
                    r = t.pendingProps,
                    null === e ? t.child = Go(t, null, r, n) : wl(e, t, r, n),
                    t.child;
                case 11:
                    return r = t.type,
                    a = t.pendingProps,
                    kl(e, t, r, a = t.elementType === r ? a : go(r, a), n);
                case 7:
                    return wl(e, t, t.pendingProps, n),
                    t.child;
                case 8:
                case 12:
                    return wl(e, t, t.pendingProps.children, n),
                    t.child;
                case 10:
                    e: {
                        if (r = t.type._context,
                        a = t.pendingProps,
                        i = t.memoizedProps,
                        l = a.value,
                        Pa(yo, r._currentValue),
                        r._currentValue = l,
                        null !== i)
                            if (lr(i.value, l)) {
                                if (i.children === a.children && !Oa.current) {
                                    t = $l(e, t, n);
                                    break e
                                }
                            } else
                                for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                                    var s = i.dependencies;
                                    if (null !== s) {
                                        l = i.child;
                                        for (var u = s.firstContext; null !== u; ) {
                                            if (u.context === r) {
                                                if (1 === i.tag) {
                                                    (u = Lo(-1, n & -n)).tag = 2;
                                                    var c = i.updateQueue;
                                                    if (null !== c) {
                                                        var f = (c = c.shared).pending;
                                                        null === f ? u.next = u : (u.next = f.next,
                                                        f.next = u),
                                                        c.pending = u
                                                    }
                                                }
                                                i.lanes |= n,
                                                null !== (u = i.alternate) && (u.lanes |= n),
                                                Eo(i.return, n, t),
                                                s.lanes |= n;
                                                break
                                            }
                                            u = u.next
                                        }
                                    } else if (10 === i.tag)
                                        l = i.type === t.type ? null : i.child;
                                    else if (18 === i.tag) {
                                        if (null === (l = i.return))
                                            throw Error(o(341));
                                        l.lanes |= n,
                                        null !== (s = l.alternate) && (s.lanes |= n),
                                        Eo(l, n, t),
                                        l = i.sibling
                                    } else
                                        l = i.child;
                                    if (null !== l)
                                        l.return = i;
                                    else
                                        for (l = i; null !== l; ) {
                                            if (l === t) {
                                                l = null;
                                                break
                                            }
                                            if (null !== (i = l.sibling)) {
                                                i.return = l.return,
                                                l = i;
                                                break
                                            }
                                            l = l.return
                                        }
                                    i = l
                                }
                        wl(e, t, a.children, n),
                        t = t.child
                    }
                    return t;
                case 9:
                    return a = t.type,
                    r = t.pendingProps.children,
                    Co(t, n),
                    r = r(a = Po(a)),
                    t.flags |= 1,
                    wl(e, t, r, n),
                    t.child;
                case 14:
                    return a = go(r = t.type, t.pendingProps),
                    Sl(e, t, r, a = go(r.type, a), n);
                case 15:
                    return El(e, t, t.type, t.pendingProps, n);
                case 17:
                    return r = t.type,
                    a = t.pendingProps,
                    a = t.elementType === r ? a : go(r, a),
                    Wl(e, t),
                    t.tag = 1,
                    Ma(r) ? (e = !0,
                    Da(t)) : e = !1,
                    Co(t, n),
                    Wo(t, r, a),
                    Qo(t, r, a, n),
                    Ol(null, t, r, !0, e, n);
                case 19:
                    return Hl(e, t, n);
                case 22:
                    return Cl(e, t, n)
                }
                throw Error(o(156, t.tag))
            }
            ;
            var qu = "function" === typeof reportError ? reportError : function(e) {
                console.error(e)
            }
            ;
            function Xu(e) {
                this._internalRoot = e
            }
            function Ku(e) {
                this._internalRoot = e
            }
            function Gu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }
            function Zu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }
            function Ju() {}
            function ec(e, t, n, r, a) {
                var o = n._reactRootContainer;
                if (o) {
                    var i = o;
                    if ("function" === typeof a) {
                        var l = a;
                        a = function() {
                            var e = $u(i);
                            l.call(e)
                        }
                    }
                    Wu(t, i, e, a)
                } else
                    i = function(e, t, n, r, a) {
                        if (a) {
                            if ("function" === typeof r) {
                                var o = r;
                                r = function() {
                                    var e = $u(i);
                                    o.call(e)
                                }
                            }
                            var i = Hu(t, r, e, 0, null, !1, 0, "", Ju);
                            return e._reactRootContainer = i,
                            e[ha] = i.current,
                            Ur(8 === e.nodeType ? e.parentNode : e),
                            fu(),
                            i
                        }
                        for (; a = e.lastChild; )
                            e.removeChild(a);
                        if ("function" === typeof r) {
                            var l = r;
                            r = function() {
                                var e = $u(s);
                                l.call(e)
                            }
                        }
                        var s = Bu(e, 0, !1, null, 0, !1, 0, "", Ju);
                        return e._reactRootContainer = s,
                        e[ha] = s.current,
                        Ur(8 === e.nodeType ? e.parentNode : e),
                        fu((function() {
                            Wu(t, s, n, r)
                        }
                        )),
                        s
                    }(n, t, e, a, r);
                return $u(i)
            }
            Ku.prototype.render = Xu.prototype.render = function(e) {
                var t = this._internalRoot;
                if (null === t)
                    throw Error(o(409));
                Wu(e, t, null, null)
            }
            ,
            Ku.prototype.unmount = Xu.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    fu((function() {
                        Wu(null, e, null, null)
                    }
                    )),
                    t[ha] = null
                }
            }
            ,
            Ku.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var t = Et();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: t
                    };
                    for (var n = 0; n < Rt.length && 0 !== t && t < Rt[n].priority; n++)
                        ;
                    Rt.splice(n, 0, e),
                    0 === n && Vt(e)
                }
            }
            ,
            wt = function(e) {
                switch (e.tag) {
                case 3:
                    var t = e.stateNode;
                    if (t.current.memoizedState.isDehydrated) {
                        var n = ft(t.pendingLanes);
                        0 !== n && (yt(t, 1 | n),
                        au(t, Ge()),
                        0 === (6 & Os) && (Hs = Ge() + 500,
                        Ua()))
                    }
                    break;
                case 13:
                    fu((function() {
                        var t = No(e, 1);
                        if (null !== t) {
                            var n = tu();
                            ru(t, e, 1, n)
                        }
                    }
                    )),
                    Yu(e, 1)
                }
            }
            ,
            kt = function(e) {
                if (13 === e.tag) {
                    var t = No(e, 134217728);
                    if (null !== t)
                        ru(t, e, 134217728, tu());
                    Yu(e, 134217728)
                }
            }
            ,
            St = function(e) {
                if (13 === e.tag) {
                    var t = nu(e)
                      , n = No(e, t);
                    if (null !== n)
                        ru(n, e, t, tu());
                    Yu(e, t)
                }
            }
            ,
            Et = function() {
                return bt
            }
            ,
            Ct = function(e, t) {
                var n = bt;
                try {
                    return bt = e,
                    t()
                } finally {
                    bt = n
                }
            }
            ,
            ke = function(e, t, n) {
                switch (t) {
                case "input":
                    if (Z(e, n),
                    t = n.name,
                    "radio" === n.type && null != t) {
                        for (n = e; n.parentNode; )
                            n = n.parentNode;
                        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                        t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var a = wa(r);
                                if (!a)
                                    throw Error(o(90));
                                Y(r),
                                Z(r, a)
                            }
                        }
                    }
                    break;
                case "textarea":
                    oe(e, n);
                    break;
                case "select":
                    null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                }
            }
            ,
            Te = cu,
            Oe = fu;
            var tc = {
                usingClientEntryPoint: !1,
                Events: [ba, xa, wa, Pe, je, cu]
            }
              , nc = {
                findFiberByHostInstance: ya,
                bundleType: 0,
                version: "18.2.0",
                rendererPackageName: "react-dom"
            }
              , rc = {
                bundleType: nc.bundleType,
                version: nc.version,
                rendererPackageName: nc.rendererPackageName,
                rendererConfig: nc.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: x.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return null === (e = $e(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: nc.findFiberByHostInstance || function() {
                    return null
                }
                ,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!ac.isDisabled && ac.supportsFiber)
                    try {
                        at = ac.inject(rc),
                        ot = ac
                    } catch (ce) {}
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc,
            t.createPortal = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Gu(t))
                    throw Error(o(200));
                return function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: k,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, n)
            }
            ,
            t.createRoot = function(e, t) {
                if (!Gu(e))
                    throw Error(o(299));
                var n = !1
                  , r = ""
                  , a = qu;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
                t = Bu(e, 1, !1, null, 0, n, 0, r, a),
                e[ha] = t.current,
                Ur(8 === e.nodeType ? e.parentNode : e),
                new Xu(t)
            }
            ,
            t.findDOMNode = function(e) {
                if (null == e)
                    return null;
                if (1 === e.nodeType)
                    return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render)
                        throw Error(o(188));
                    throw e = Object.keys(e).join(","),
                    Error(o(268, e))
                }
                return e = null === (e = $e(t)) ? null : e.stateNode
            }
            ,
            t.flushSync = function(e) {
                return fu(e)
            }
            ,
            t.hydrate = function(e, t, n) {
                if (!Zu(t))
                    throw Error(o(200));
                return ec(null, e, t, !0, n)
            }
            ,
            t.hydrateRoot = function(e, t, n) {
                if (!Gu(e))
                    throw Error(o(405));
                var r = null != n && n.hydratedSources || null
                  , a = !1
                  , i = ""
                  , l = qu;
                if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
                t = Hu(t, null, e, 1, null != n ? n : null, a, 0, i, l),
                e[ha] = t.current,
                Ur(e),
                r)
                    for (e = 0; e < r.length; e++)
                        a = (a = (n = r[e])._getVersion)(n._source),
                        null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                return new Ku(t)
            }
            ,
            t.render = function(e, t, n) {
                if (!Zu(t))
                    throw Error(o(200));
                return ec(null, e, t, !1, n)
            }
            ,
            t.unmountComponentAtNode = function(e) {
                if (!Zu(e))
                    throw Error(o(40));
                return !!e._reactRootContainer && (fu((function() {
                    ec(null, null, e, !1, (function() {
                        e._reactRootContainer = null,
                        e[ha] = null
                    }
                    ))
                }
                )),
                !0)
            }
            ,
            t.unstable_batchedUpdates = cu,
            t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                if (!Zu(n))
                    throw Error(o(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(o(38));
                return ec(e, t, n, !1, r)
            }
            ,
            t.version = "18.2.0-next-9e3b772b8-20220608"
        },
        250: function(e, t, n) {
            "use strict";
            var r = n(164);
            t.createRoot = r.createRoot,
            t.hydrateRoot = r.hydrateRoot
        },
        164: function(e, t, n) {
            "use strict";
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
            }(),
            e.exports = n(463)
        },
        592: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , a = i(n(791))
              , o = i(n(585));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e),
                r(t, [{
                    key: "render",
                    value: function() {
                        return a.default.createElement("input", this.props, this.props.children)
                    }
                }]),
                t
            }(a.default.Component);
            t.default = (0,
            o.default)(l)
        },
        532: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , o = s(n(791))
              , i = s(n(671))
              , l = s(n(7));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e),
                a(t, [{
                    key: "render",
                    value: function() {
                        var e = this
                          , t = r({}, this.props);
                        return t.parentBindings && delete t.parentBindings,
                        o.default.createElement("div", r({}, t, {
                            ref: function(t) {
                                e.props.parentBindings.domNode = t
                            }
                        }), this.props.children)
                    }
                }]),
                t
            }(o.default.Component);
            u.propTypes = {
                name: l.default.string,
                id: l.default.string
            },
            t.default = (0,
            i.default)(u)
        },
        582: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(n(791))
              , a = o(n(585));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function i(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== typeof t && "function" !== typeof t ? e : t
            }
            var l = function(e) {
                function t() {
                    var e, n, a;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var o = arguments.length, l = Array(o), s = 0; s < o; s++)
                        l[s] = arguments[s];
                    return n = a = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))),
                    a.render = function() {
                        return r.default.createElement("a", a.props, a.props.children)
                    }
                    ,
                    i(a, n)
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e),
                t
            }(r.default.Component);
            t.default = (0,
            a.default)(l)
        },
        667: function(e, t, n) {
            "use strict";
            t.NY = t.rU = void 0;
            var r = p(n(582))
              , a = p(n(592))
              , o = p(n(532))
              , i = p(n(338))
              , l = p(n(979))
              , s = p(n(688))
              , u = p(n(102))
              , c = p(n(585))
              , f = p(n(671))
              , d = p(n(719));
            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.rU = r.default,
            a.default,
            o.default,
            i.default,
            l.default,
            s.default,
            t.NY = u.default,
            c.default,
            f.default,
            d.default,
            r.default,
            a.default,
            o.default,
            i.default,
            l.default,
            s.default,
            u.default,
            c.default,
            f.default,
            d.default
        },
        719: function(e, t, n) {
            "use strict";
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }();
            function o(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function i(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== typeof t && "function" !== typeof t ? e : t
            }
            function l(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            var s = n(791)
              , u = (n(164),
            n(183),
            n(688))
              , c = n(338)
              , f = n(7)
              , d = n(203)
              , p = {
                to: f.string.isRequired,
                containerId: f.string,
                container: f.object,
                activeClass: f.string,
                spy: f.bool,
                smooth: f.oneOfType([f.bool, f.string]),
                offset: f.number,
                delay: f.number,
                isDynamic: f.bool,
                onClick: f.func,
                duration: f.oneOfType([f.number, f.func]),
                absolute: f.bool,
                onSetActive: f.func,
                onSetInactive: f.func,
                ignoreCancelEvents: f.bool,
                hashSpy: f.bool,
                spyThrottle: f.number
            }
              , h = {
                Scroll: function(e, t) {
                    console.warn("Helpers.Scroll is deprecated since v1.7.0");
                    var n = t || c
                      , f = function(t) {
                        function c(e) {
                            o(this, c);
                            var t = i(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, e));
                            return h.call(t),
                            t.state = {
                                active: !1
                            },
                            t
                        }
                        return l(c, t),
                        a(c, [{
                            key: "getScrollSpyContainer",
                            value: function() {
                                var e = this.props.containerId
                                  , t = this.props.container;
                                return e ? document.getElementById(e) : t && t.nodeType ? t : document
                            }
                        }, {
                            key: "componentDidMount",
                            value: function() {
                                if (this.props.spy || this.props.hashSpy) {
                                    var e = this.getScrollSpyContainer();
                                    u.isMounted(e) || u.mount(e, this.props.spyThrottle),
                                    this.props.hashSpy && (d.isMounted() || d.mount(n),
                                    d.mapContainer(this.props.to, e)),
                                    this.props.spy && u.addStateHandler(this.stateHandler),
                                    u.addSpyHandler(this.spyHandler, e),
                                    this.setState({
                                        container: e
                                    })
                                }
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                u.unmount(this.stateHandler, this.spyHandler)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t = "";
                                t = this.state && this.state.active ? ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : this.props.className;
                                var n = r({}, this.props);
                                for (var a in p)
                                    n.hasOwnProperty(a) && delete n[a];
                                return n.className = t,
                                n.onClick = this.handleClick,
                                s.createElement(e, n)
                            }
                        }]),
                        c
                    }(s.Component)
                      , h = function() {
                        var e = this;
                        this.scrollTo = function(t, a) {
                            n.scrollTo(t, r({}, e.state, a))
                        }
                        ,
                        this.handleClick = function(t) {
                            e.props.onClick && e.props.onClick(t),
                            t.stopPropagation && t.stopPropagation(),
                            t.preventDefault && t.preventDefault(),
                            e.scrollTo(e.props.to, e.props)
                        }
                        ,
                        this.stateHandler = function() {
                            n.getActiveLink() !== e.props.to && (null !== e.state && e.state.active && e.props.onSetInactive && e.props.onSetInactive(),
                            e.setState({
                                active: !1
                            }))
                        }
                        ,
                        this.spyHandler = function(t) {
                            var r = e.getScrollSpyContainer();
                            if (!d.isMounted() || d.isInitialized()) {
                                var a = e.props.to
                                  , o = null
                                  , i = 0
                                  , l = 0
                                  , s = 0;
                                if (r.getBoundingClientRect)
                                    s = r.getBoundingClientRect().top;
                                if (!o || e.props.isDynamic) {
                                    if (!(o = n.get(a)))
                                        return;
                                    var c = o.getBoundingClientRect();
                                    l = (i = c.top - s + t) + c.height
                                }
                                var f = t - e.props.offset
                                  , p = f >= Math.floor(i) && f < Math.floor(l)
                                  , h = f < Math.floor(i) || f >= Math.floor(l)
                                  , v = n.getActiveLink();
                                return h ? (a === v && n.setActiveLink(void 0),
                                e.props.hashSpy && d.getHash() === a && d.changeHash(),
                                e.props.spy && e.state.active && (e.setState({
                                    active: !1
                                }),
                                e.props.onSetInactive && e.props.onSetInactive()),
                                u.updateStates()) : p && v !== a ? (n.setActiveLink(a),
                                e.props.hashSpy && d.changeHash(a),
                                e.props.spy && (e.setState({
                                    active: !0
                                }),
                                e.props.onSetActive && e.props.onSetActive(a)),
                                u.updateStates()) : void 0
                            }
                        }
                    };
                    return f.propTypes = p,
                    f.defaultProps = {
                        offset: 0
                    },
                    f
                },
                Element: function(e) {
                    console.warn("Helpers.Element is deprecated since v1.7.0");
                    var t = function(t) {
                        function n(e) {
                            o(this, n);
                            var t = i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                            return t.childBindings = {
                                domNode: null
                            },
                            t
                        }
                        return l(n, t),
                        a(n, [{
                            key: "componentDidMount",
                            value: function() {
                                if ("undefined" === typeof window)
                                    return !1;
                                this.registerElems(this.props.name)
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function(e) {
                                this.props.name !== e.name && this.registerElems(this.props.name)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                if ("undefined" === typeof window)
                                    return !1;
                                c.unregister(this.props.name)
                            }
                        }, {
                            key: "registerElems",
                            value: function(e) {
                                c.register(e, this.childBindings.domNode)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return s.createElement(e, r({}, this.props, {
                                    parentBindings: this.childBindings
                                }))
                            }
                        }]),
                        n
                    }(s.Component);
                    return t.propTypes = {
                        name: f.string,
                        id: f.string
                    },
                    t
                }
            };
            e.exports = h
        },
        102: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , a = (l(n(183)),
            l(n(987)))
              , o = l(n(616))
              , i = l(n(979));
            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = function(e) {
                return a.default[e.smooth] || a.default.defaultEasing
            }
              , u = function() {
                if ("undefined" !== typeof window)
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame
            }() || function(e, t, n) {
                window.setTimeout(e, n || 1e3 / 60, (new Date).getTime())
            }
              , c = function(e) {
                var t = e.data.containerElement;
                if (t && t !== document && t !== document.body)
                    return t.scrollLeft;
                var n = void 0 !== window.pageXOffset
                  , r = "CSS1Compat" === (document.compatMode || "");
                return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft
            }
              , f = function(e) {
                var t = e.data.containerElement;
                if (t && t !== document && t !== document.body)
                    return t.scrollTop;
                var n = void 0 !== window.pageXOffset
                  , r = "CSS1Compat" === (document.compatMode || "");
                return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop
            }
              , d = function e(t, n, r) {
                var a = n.data;
                if (n.ignoreCancelEvents || !a.cancel)
                    if (a.delta = Math.round(a.targetPosition - a.startPosition),
                    null === a.start && (a.start = r),
                    a.progress = r - a.start,
                    a.percent = a.progress >= a.duration ? 1 : t(a.progress / a.duration),
                    a.currentPosition = a.startPosition + Math.ceil(a.delta * a.percent),
                    a.containerElement && a.containerElement !== document && a.containerElement !== document.body ? n.horizontal ? a.containerElement.scrollLeft = a.currentPosition : a.containerElement.scrollTop = a.currentPosition : n.horizontal ? window.scrollTo(a.currentPosition, 0) : window.scrollTo(0, a.currentPosition),
                    a.percent < 1) {
                        var o = e.bind(null, t, n);
                        u.call(window, o)
                    } else
                        i.default.registered.end && i.default.registered.end(a.to, a.target, a.currentPosition);
                else
                    i.default.registered.end && i.default.registered.end(a.to, a.target, a.currentPositionY)
            }
              , p = function(e) {
                e.data.containerElement = e ? e.containerId ? document.getElementById(e.containerId) : e.container && e.container.nodeType ? e.container : document : null
            }
              , h = function(e, t, n, r) {
                if (t.data = t.data || {
                    currentPosition: 0,
                    startPosition: 0,
                    targetPosition: 0,
                    progress: 0,
                    duration: 0,
                    cancel: !1,
                    target: null,
                    containerElement: null,
                    to: null,
                    start: null,
                    delta: null,
                    percent: null,
                    delayTimeout: null
                },
                window.clearTimeout(t.data.delayTimeout),
                o.default.subscribe((function() {
                    t.data.cancel = !0
                }
                )),
                p(t),
                t.data.start = null,
                t.data.cancel = !1,
                t.data.startPosition = t.horizontal ? c(t) : f(t),
                t.data.targetPosition = t.absolute ? e : e + t.data.startPosition,
                t.data.startPosition !== t.data.targetPosition) {
                    var a;
                    t.data.delta = Math.round(t.data.targetPosition - t.data.startPosition),
                    t.data.duration = ("function" === typeof (a = t.duration) ? a : function() {
                        return a
                    }
                    )(t.data.delta),
                    t.data.duration = isNaN(parseFloat(t.data.duration)) ? 1e3 : parseFloat(t.data.duration),
                    t.data.to = n,
                    t.data.target = r;
                    var l = s(t)
                      , h = d.bind(null, l, t);
                    t && t.delay > 0 ? t.data.delayTimeout = window.setTimeout((function() {
                        i.default.registered.begin && i.default.registered.begin(t.data.to, t.data.target),
                        u.call(window, h)
                    }
                    ), t.delay) : (i.default.registered.begin && i.default.registered.begin(t.data.to, t.data.target),
                    u.call(window, h))
                } else
                    i.default.registered.end && i.default.registered.end(t.data.to, t.data.target, t.data.currentPosition)
            }
              , v = function(e) {
                return (e = r({}, e)).data = e.data || {
                    currentPosition: 0,
                    startPosition: 0,
                    targetPosition: 0,
                    progress: 0,
                    duration: 0,
                    cancel: !1,
                    target: null,
                    containerElement: null,
                    to: null,
                    start: null,
                    delta: null,
                    percent: null,
                    delayTimeout: null
                },
                e.absolute = !0,
                e
            };
            t.default = {
                animateTopScroll: h,
                getAnimationType: s,
                scrollToTop: function(e) {
                    h(0, v(e))
                },
                scrollToBottom: function(e) {
                    e = v(e),
                    p(e),
                    h(e.horizontal ? function(e) {
                        var t = e.data.containerElement;
                        if (t && t !== document && t !== document.body)
                            return t.scrollWidth - t.offsetWidth;
                        var n = document.body
                          , r = document.documentElement;
                        return Math.max(n.scrollWidth, n.offsetWidth, r.clientWidth, r.scrollWidth, r.offsetWidth)
                    }(e) : function(e) {
                        var t = e.data.containerElement;
                        if (t && t !== document && t !== document.body)
                            return t.scrollHeight - t.offsetHeight;
                        var n = document.body
                          , r = document.documentElement;
                        return Math.max(n.scrollHeight, n.offsetHeight, r.clientHeight, r.scrollHeight, r.offsetHeight)
                    }(e), e)
                },
                scrollTo: function(e, t) {
                    h(e, v(t))
                },
                scrollMore: function(e, t) {
                    t = v(t),
                    p(t);
                    var n = t.horizontal ? c(t) : f(t);
                    h(e + n, t)
                }
            }
        },
        616: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(360)
              , a = ["mousedown", "mousewheel", "touchmove", "keydown"];
            t.default = {
                subscribe: function(e) {
                    return "undefined" !== typeof document && a.forEach((function(t) {
                        return (0,
                        r.addPassiveEventListener)(document, t, e)
                    }
                    ))
                }
            }
        },
        360: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.addPassiveEventListener = function(e, t, n) {
                var r = function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        window.addEventListener("test", null, t)
                    } catch (n) {}
                    return e
                }();
                e.addEventListener(t, n, !!r && {
                    passive: !0
                })
            }
            ,
            t.removePassiveEventListener = function(e, t, n) {
                e.removeEventListener(t, n)
            }
        },
        671: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , o = s(n(791))
              , i = (s(n(164)),
            s(n(338)))
              , l = s(n(7));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                var t = function(t) {
                    function n(e) {
                        !function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var t = function(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                        return t.childBindings = {
                            domNode: null
                        },
                        t
                    }
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, t),
                    a(n, [{
                        key: "componentDidMount",
                        value: function() {
                            if ("undefined" === typeof window)
                                return !1;
                            this.registerElems(this.props.name)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            this.props.name !== e.name && this.registerElems(this.props.name)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            if ("undefined" === typeof window)
                                return !1;
                            i.default.unregister(this.props.name)
                        }
                    }, {
                        key: "registerElems",
                        value: function(e) {
                            i.default.register(e, this.childBindings.domNode)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return o.default.createElement(e, r({}, this.props, {
                                parentBindings: this.childBindings
                            }))
                        }
                    }]),
                    n
                }(o.default.Component);
                return t.propTypes = {
                    name: l.default.string,
                    id: l.default.string
                },
                t
            }
        },
        979: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                registered: {},
                scrollEvent: {
                    register: function(e, t) {
                        n.registered[e] = t
                    },
                    remove: function(e) {
                        n.registered[e] = null
                    }
                }
            };
            t.default = n
        },
        203: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            n(360);
            var r, a = n(183), o = (r = a) && r.__esModule ? r : {
                default: r
            };
            var i = {
                mountFlag: !1,
                initialized: !1,
                scroller: null,
                containers: {},
                mount: function(e) {
                    this.scroller = e,
                    this.handleHashChange = this.handleHashChange.bind(this),
                    window.addEventListener("hashchange", this.handleHashChange),
                    this.initStateFromHash(),
                    this.mountFlag = !0
                },
                mapContainer: function(e, t) {
                    this.containers[e] = t
                },
                isMounted: function() {
                    return this.mountFlag
                },
                isInitialized: function() {
                    return this.initialized
                },
                initStateFromHash: function() {
                    var e = this
                      , t = this.getHash();
                    t ? window.setTimeout((function() {
                        e.scrollTo(t, !0),
                        e.initialized = !0
                    }
                    ), 10) : this.initialized = !0
                },
                scrollTo: function(e, t) {
                    var n = this.scroller;
                    if (n.get(e) && (t || e !== n.getActiveLink())) {
                        var r = this.containers[e] || document;
                        n.scrollTo(e, {
                            container: r
                        })
                    }
                },
                getHash: function() {
                    return o.default.getHash()
                },
                changeHash: function(e, t) {
                    this.isInitialized() && o.default.getHash() !== e && o.default.updateHash(e, t)
                },
                handleHashChange: function() {
                    this.scrollTo(this.getHash())
                },
                unmount: function() {
                    this.scroller = null,
                    this.containers = null,
                    window.removeEventListener("hashchange", this.handleHashChange)
                }
            };
            t.default = i
        },
        585: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , o = c(n(791))
              , i = c(n(688))
              , l = c(n(338))
              , s = c(n(7))
              , u = c(n(203));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = {
                to: s.default.string.isRequired,
                containerId: s.default.string,
                container: s.default.object,
                activeClass: s.default.string,
                activeStyle: s.default.object,
                spy: s.default.bool,
                horizontal: s.default.bool,
                smooth: s.default.oneOfType([s.default.bool, s.default.string]),
                offset: s.default.number,
                delay: s.default.number,
                isDynamic: s.default.bool,
                onClick: s.default.func,
                duration: s.default.oneOfType([s.default.number, s.default.func]),
                absolute: s.default.bool,
                onSetActive: s.default.func,
                onSetInactive: s.default.func,
                ignoreCancelEvents: s.default.bool,
                hashSpy: s.default.bool,
                saveHashHistory: s.default.bool,
                spyThrottle: s.default.number
            };
            t.default = function(e, t) {
                var n = t || l.default
                  , s = function(t) {
                    function l(e) {
                        !function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, l);
                        var t = function(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, e));
                        return c.call(t),
                        t.state = {
                            active: !1
                        },
                        t
                    }
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(l, t),
                    a(l, [{
                        key: "getScrollSpyContainer",
                        value: function() {
                            var e = this.props.containerId
                              , t = this.props.container;
                            return e && !t ? document.getElementById(e) : t && t.nodeType ? t : document
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            if (this.props.spy || this.props.hashSpy) {
                                var e = this.getScrollSpyContainer();
                                i.default.isMounted(e) || i.default.mount(e, this.props.spyThrottle),
                                this.props.hashSpy && (u.default.isMounted() || u.default.mount(n),
                                u.default.mapContainer(this.props.to, e)),
                                i.default.addSpyHandler(this.spyHandler, e),
                                this.setState({
                                    container: e
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            i.default.unmount(this.stateHandler, this.spyHandler)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = "";
                            t = this.state && this.state.active ? ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : this.props.className;
                            var n = {};
                            n = this.state && this.state.active ? r({}, this.props.style, this.props.activeStyle) : r({}, this.props.style);
                            var a = r({}, this.props);
                            for (var i in f)
                                a.hasOwnProperty(i) && delete a[i];
                            return a.className = t,
                            a.style = n,
                            a.onClick = this.handleClick,
                            o.default.createElement(e, a)
                        }
                    }]),
                    l
                }(o.default.PureComponent)
                  , c = function() {
                    var e = this;
                    this.scrollTo = function(t, a) {
                        n.scrollTo(t, r({}, e.state, a))
                    }
                    ,
                    this.handleClick = function(t) {
                        e.props.onClick && e.props.onClick(t),
                        t.stopPropagation && t.stopPropagation(),
                        t.preventDefault && t.preventDefault(),
                        e.scrollTo(e.props.to, e.props)
                    }
                    ,
                    this.spyHandler = function(t, r) {
                        var a = e.getScrollSpyContainer();
                        if (!u.default.isMounted() || u.default.isInitialized()) {
                            var o = e.props.horizontal
                              , i = e.props.to
                              , l = null
                              , s = void 0
                              , c = void 0;
                            if (o) {
                                var f = 0
                                  , d = 0
                                  , p = 0;
                                if (a.getBoundingClientRect)
                                    p = a.getBoundingClientRect().left;
                                if (!l || e.props.isDynamic) {
                                    if (!(l = n.get(i)))
                                        return;
                                    var h = l.getBoundingClientRect();
                                    d = (f = h.left - p + t) + h.width
                                }
                                var v = t - e.props.offset;
                                s = v >= Math.floor(f) && v < Math.floor(d),
                                c = v < Math.floor(f) || v >= Math.floor(d)
                            } else {
                                var m = 0
                                  , g = 0
                                  , y = 0;
                                if (a.getBoundingClientRect)
                                    y = a.getBoundingClientRect().top;
                                if (!l || e.props.isDynamic) {
                                    if (!(l = n.get(i)))
                                        return;
                                    var b = l.getBoundingClientRect();
                                    g = (m = b.top - y + r) + b.height
                                }
                                var x = r - e.props.offset;
                                s = x >= Math.floor(m) && x < Math.floor(g),
                                c = x < Math.floor(m) || x >= Math.floor(g)
                            }
                            var w = n.getActiveLink();
                            if (c) {
                                if (i === w && n.setActiveLink(void 0),
                                e.props.hashSpy && u.default.getHash() === i) {
                                    var k = e.props.saveHashHistory
                                      , S = void 0 !== k && k;
                                    u.default.changeHash("", S)
                                }
                                e.props.spy && e.state.active && (e.setState({
                                    active: !1
                                }),
                                e.props.onSetInactive && e.props.onSetInactive(i, l))
                            }
                            if (s && (w !== i || !1 === e.state.active)) {
                                n.setActiveLink(i);
                                var E = e.props.saveHashHistory
                                  , C = void 0 !== E && E;
                                e.props.hashSpy && u.default.changeHash(i, C),
                                e.props.spy && (e.setState({
                                    active: !0
                                }),
                                e.props.onSetActive && e.props.onSetActive(i, l))
                            }
                        }
                    }
                };
                return s.propTypes = f,
                s.defaultProps = {
                    offset: 0
                },
                s
            }
        },
        688: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r, a = n(881), o = (r = a) && r.__esModule ? r : {
                default: r
            }, i = n(360);
            var l = {
                spyCallbacks: [],
                spySetState: [],
                scrollSpyContainers: [],
                mount: function(e, t) {
                    if (e) {
                        var n = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 66;
                            return (0,
                            o.default)(e, t)
                        }((function(t) {
                            l.scrollHandler(e)
                        }
                        ), t);
                        l.scrollSpyContainers.push(e),
                        (0,
                        i.addPassiveEventListener)(e, "scroll", n)
                    }
                },
                isMounted: function(e) {
                    return -1 !== l.scrollSpyContainers.indexOf(e)
                },
                currentPositionX: function(e) {
                    if (e === document) {
                        var t = void 0 !== window.pageYOffset
                          , n = "CSS1Compat" === (document.compatMode || "");
                        return t ? window.pageXOffset : n ? document.documentElement.scrollLeft : document.body.scrollLeft
                    }
                    return e.scrollLeft
                },
                currentPositionY: function(e) {
                    if (e === document) {
                        var t = void 0 !== window.pageXOffset
                          , n = "CSS1Compat" === (document.compatMode || "");
                        return t ? window.pageYOffset : n ? document.documentElement.scrollTop : document.body.scrollTop
                    }
                    return e.scrollTop
                },
                scrollHandler: function(e) {
                    (l.scrollSpyContainers[l.scrollSpyContainers.indexOf(e)].spyCallbacks || []).forEach((function(t) {
                        return t(l.currentPositionX(e), l.currentPositionY(e))
                    }
                    ))
                },
                addStateHandler: function(e) {
                    l.spySetState.push(e)
                },
                addSpyHandler: function(e, t) {
                    var n = l.scrollSpyContainers[l.scrollSpyContainers.indexOf(t)];
                    n.spyCallbacks || (n.spyCallbacks = []),
                    n.spyCallbacks.push(e),
                    e(l.currentPositionX(t), l.currentPositionY(t))
                },
                updateStates: function() {
                    l.spySetState.forEach((function(e) {
                        return e()
                    }
                    ))
                },
                unmount: function(e, t) {
                    l.scrollSpyContainers.forEach((function(e) {
                        return e.spyCallbacks && e.spyCallbacks.length && e.spyCallbacks.indexOf(t) > -1 && e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
                    }
                    )),
                    l.spySetState && l.spySetState.length && l.spySetState.indexOf(e) > -1 && l.spySetState.splice(l.spySetState.indexOf(e), 1),
                    document.removeEventListener("scroll", l.scrollHandler)
                },
                update: function() {
                    return l.scrollSpyContainers.forEach((function(e) {
                        return l.scrollHandler(e)
                    }
                    ))
                }
            };
            t.default = l
        },
        338: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , a = l(n(183))
              , o = l(n(102))
              , i = l(n(979));
            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = {}
              , u = void 0;
            t.default = {
                unmount: function() {
                    s = {}
                },
                register: function(e, t) {
                    s[e] = t
                },
                unregister: function(e) {
                    delete s[e]
                },
                get: function(e) {
                    return s[e] || document.getElementById(e) || document.getElementsByName(e)[0] || document.getElementsByClassName(e)[0]
                },
                setActiveLink: function(e) {
                    return u = e
                },
                getActiveLink: function() {
                    return u
                },
                scrollTo: function(e, t) {
                    var n = this.get(e);
                    if (n) {
                        var l = (t = r({}, t, {
                            absolute: !1
                        })).containerId
                          , s = t.container
                          , u = void 0;
                        u = l ? document.getElementById(l) : s && s.nodeType ? s : document,
                        t.absolute = !0;
                        var c = t.horizontal
                          , f = a.default.scrollOffset(u, n, c) + (t.offset || 0);
                        if (!t.smooth)
                            return i.default.registered.begin && i.default.registered.begin(e, n),
                            u === document ? t.horizontal ? window.scrollTo(f, 0) : window.scrollTo(0, f) : u.scrollTop = f,
                            void (i.default.registered.end && i.default.registered.end(e, n));
                        o.default.animateTopScroll(f, t, e, n)
                    } else
                        console.warn("target Element not found")
                }
            }
        },
        987: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = {
                defaultEasing: function(e) {
                    return e < .5 ? Math.pow(2 * e, 2) / 2 : 1 - Math.pow(2 * (1 - e), 2) / 2
                },
                linear: function(e) {
                    return e
                },
                easeInQuad: function(e) {
                    return e * e
                },
                easeOutQuad: function(e) {
                    return e * (2 - e)
                },
                easeInOutQuad: function(e) {
                    return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
                },
                easeInCubic: function(e) {
                    return e * e * e
                },
                easeOutCubic: function(e) {
                    return --e * e * e + 1
                },
                easeInOutCubic: function(e) {
                    return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
                },
                easeInQuart: function(e) {
                    return e * e * e * e
                },
                easeOutQuart: function(e) {
                    return 1 - --e * e * e * e
                },
                easeInOutQuart: function(e) {
                    return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
                },
                easeInQuint: function(e) {
                    return e * e * e * e * e
                },
                easeOutQuint: function(e) {
                    return 1 + --e * e * e * e * e
                },
                easeInOutQuint: function(e) {
                    return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                }
            }
        },
        183: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e, t) {
                for (var n = e.offsetTop, r = e.offsetParent; r && !t(r); )
                    n += r.offsetTop,
                    r = r.offsetParent;
                return {
                    offsetTop: n,
                    offsetParent: r
                }
            };
            t.default = {
                updateHash: function(e, t) {
                    var n = 0 === e.indexOf("#") ? e.substring(1) : e
                      , r = n ? "#" + n : ""
                      , a = window && window.location
                      , o = r ? a.pathname + a.search + r : a.pathname + a.search;
                    t ? history.pushState(history.state, "", o) : history.replaceState(history.state, "", o)
                },
                getHash: function() {
                    return window.location.hash.replace(/^#/, "")
                },
                filterElementInContainer: function(e) {
                    return function(t) {
                        return e.contains ? e != t && e.contains(t) : !!(16 & e.compareDocumentPosition(t))
                    }
                },
                scrollOffset: function(e, t, r) {
                    if (r)
                        return e === document ? t.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : "static" !== getComputedStyle(e).position ? t.offsetLeft : t.offsetLeft - e.offsetLeft;
                    if (e === document)
                        return t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
                    if ("static" !== getComputedStyle(e).position) {
                        if (t.offsetParent !== e) {
                            var a = n(t, (function(t) {
                                return t === e || t === document
                            }
                            ))
                              , o = a.offsetTop;
                            if (a.offsetParent !== e)
                                throw new Error("Seems containerElement is not an ancestor of the Element");
                            return o
                        }
                        return t.offsetTop
                    }
                    if (t.offsetParent === e.offsetParent)
                        return t.offsetTop - e.offsetTop;
                    var i = function(e) {
                        return e === document
                    };
                    return n(t, i).offsetTop - n(e, i).offsetTop
                }
            }
        },
        374: function(e, t, n) {
            "use strict";
            var r = n(791)
              , a = Symbol.for("react.element")
              , o = Symbol.for("react.fragment")
              , i = Object.prototype.hasOwnProperty
              , l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
              , s = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function u(e, t, n) {
                var r, o = {}, u = null, c = null;
                for (r in void 0 !== n && (u = "" + n),
                void 0 !== t.key && (u = "" + t.key),
                void 0 !== t.ref && (c = t.ref),
                t)
                    i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps)
                        void 0 === o[r] && (o[r] = t[r]);
                return {
                    $$typeof: a,
                    type: e,
                    key: u,
                    ref: c,
                    props: o,
                    _owner: l.current
                }
            }
            t.Fragment = o,
            t.jsx = u,
            t.jsxs = u
        },
        117: function(e, t) {
            "use strict";
            var n = Symbol.for("react.element")
              , r = Symbol.for("react.portal")
              , a = Symbol.for("react.fragment")
              , o = Symbol.for("react.strict_mode")
              , i = Symbol.for("react.profiler")
              , l = Symbol.for("react.provider")
              , s = Symbol.for("react.context")
              , u = Symbol.for("react.forward_ref")
              , c = Symbol.for("react.suspense")
              , f = Symbol.for("react.memo")
              , d = Symbol.for("react.lazy")
              , p = Symbol.iterator;
            var h = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , v = Object.assign
              , m = {};
            function g(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = m,
                this.updater = n || h
            }
            function y() {}
            function b(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = m,
                this.updater = n || h
            }
            g.prototype.isReactComponent = {},
            g.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e)
                    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }
            ,
            g.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            y.prototype = g.prototype;
            var x = b.prototype = new y;
            x.constructor = b,
            v(x, g.prototype),
            x.isPureReactComponent = !0;
            var w = Array.isArray
              , k = Object.prototype.hasOwnProperty
              , S = {
                current: null
            }
              , E = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function C(e, t, r) {
                var a, o = {}, i = null, l = null;
                if (null != t)
                    for (a in void 0 !== t.ref && (l = t.ref),
                    void 0 !== t.key && (i = "" + t.key),
                    t)
                        k.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
                var s = arguments.length - 2;
                if (1 === s)
                    o.children = r;
                else if (1 < s) {
                    for (var u = Array(s), c = 0; c < s; c++)
                        u[c] = arguments[c + 2];
                    o.children = u
                }
                if (e && e.defaultProps)
                    for (a in s = e.defaultProps)
                        void 0 === o[a] && (o[a] = s[a]);
                return {
                    $$typeof: n,
                    type: e,
                    key: i,
                    ref: l,
                    props: o,
                    _owner: S.current
                }
            }
            function P(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }
            var j = /\/+/g;
            function T(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }
                    ))
                }("" + e.key) : t.toString(36)
            }
            function O(e, t, a, o, i) {
                var l = typeof e;
                "undefined" !== l && "boolean" !== l || (e = null);
                var s = !1;
                if (null === e)
                    s = !0;
                else
                    switch (l) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case n:
                        case r:
                            s = !0
                        }
                    }
                if (s)
                    return i = i(s = e),
                    e = "" === o ? "." + T(s, 0) : o,
                    w(i) ? (a = "",
                    null != e && (a = e.replace(j, "$&/") + "/"),
                    O(i, t, a, "", (function(e) {
                        return e
                    }
                    ))) : null != i && (P(i) && (i = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(i, a + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(j, "$&/") + "/") + e)),
                    t.push(i)),
                    1;
                if (s = 0,
                o = "" === o ? "." : o + ":",
                w(e))
                    for (var u = 0; u < e.length; u++) {
                        var c = o + T(l = e[u], u);
                        s += O(l, t, a, c, i)
                    }
                else if (c = function(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                }(e),
                "function" === typeof c)
                    for (e = c.call(e),
                    u = 0; !(l = e.next()).done; )
                        s += O(l = l.value, t, a, c = o + T(l, u++), i);
                else if ("object" === l)
                    throw t = String(e),
                    Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
            }
            function N(e, t, n) {
                if (null == e)
                    return e;
                var r = []
                  , a = 0;
                return O(e, r, "", "", (function(e) {
                    return t.call(n, e, a++)
                }
                )),
                r
            }
            function _(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1,
                        e._result = t)
                    }
                    ), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2,
                        e._result = t)
                    }
                    )),
                    -1 === e._status && (e._status = 0,
                    e._result = t)
                }
                if (1 === e._status)
                    return e._result.default;
                throw e._result
            }
            var M = {
                current: null
            }
              , R = {
                transition: null
            }
              , L = {
                ReactCurrentDispatcher: M,
                ReactCurrentBatchConfig: R,
                ReactCurrentOwner: S
            };
            t.Children = {
                map: N,
                forEach: function(e, t, n) {
                    N(e, (function() {
                        t.apply(this, arguments)
                    }
                    ), n)
                },
                count: function(e) {
                    var t = 0;
                    return N(e, (function() {
                        t++
                    }
                    )),
                    t
                },
                toArray: function(e) {
                    return N(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!P(e))
                        throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            },
            t.Component = g,
            t.Fragment = a,
            t.Profiler = i,
            t.PureComponent = b,
            t.StrictMode = o,
            t.Suspense = c,
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L,
            t.cloneElement = function(e, t, r) {
                if (null === e || void 0 === e)
                    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var a = v({}, e.props)
                  , o = e.key
                  , i = e.ref
                  , l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref,
                    l = S.current),
                    void 0 !== t.key && (o = "" + t.key),
                    e.type && e.type.defaultProps)
                        var s = e.type.defaultProps;
                    for (u in t)
                        k.call(t, u) && !E.hasOwnProperty(u) && (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
                }
                var u = arguments.length - 2;
                if (1 === u)
                    a.children = r;
                else if (1 < u) {
                    s = Array(u);
                    for (var c = 0; c < u; c++)
                        s[c] = arguments[c + 2];
                    a.children = s
                }
                return {
                    $$typeof: n,
                    type: e.type,
                    key: o,
                    ref: i,
                    props: a,
                    _owner: l
                }
            }
            ,
            t.createContext = function(e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: l,
                    _context: e
                },
                e.Consumer = e
            }
            ,
            t.createElement = C,
            t.createFactory = function(e) {
                var t = C.bind(null, e);
                return t.type = e,
                t
            }
            ,
            t.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            t.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }
            ,
            t.isValidElement = P,
            t.lazy = function(e) {
                return {
                    $$typeof: d,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: _
                }
            }
            ,
            t.memo = function(e, t) {
                return {
                    $$typeof: f,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }
            ,
            t.startTransition = function(e) {
                var t = R.transition;
                R.transition = {};
                try {
                    e()
                } finally {
                    R.transition = t
                }
            }
            ,
            t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }
            ,
            t.useCallback = function(e, t) {
                return M.current.useCallback(e, t)
            }
            ,
            t.useContext = function(e) {
                return M.current.useContext(e)
            }
            ,
            t.useDebugValue = function() {}
            ,
            t.useDeferredValue = function(e) {
                return M.current.useDeferredValue(e)
            }
            ,
            t.useEffect = function(e, t) {
                return M.current.useEffect(e, t)
            }
            ,
            t.useId = function() {
                return M.current.useId()
            }
            ,
            t.useImperativeHandle = function(e, t, n) {
                return M.current.useImperativeHandle(e, t, n)
            }
            ,
            t.useInsertionEffect = function(e, t) {
                return M.current.useInsertionEffect(e, t)
            }
            ,
            t.useLayoutEffect = function(e, t) {
                return M.current.useLayoutEffect(e, t)
            }
            ,
            t.useMemo = function(e, t) {
                return M.current.useMemo(e, t)
            }
            ,
            t.useReducer = function(e, t, n) {
                return M.current.useReducer(e, t, n)
            }
            ,
            t.useRef = function(e) {
                return M.current.useRef(e)
            }
            ,
            t.useState = function(e) {
                return M.current.useState(e)
            }
            ,
            t.useSyncExternalStore = function(e, t, n) {
                return M.current.useSyncExternalStore(e, t, n)
            }
            ,
            t.useTransition = function() {
                return M.current.useTransition()
            }
            ,
            t.version = "18.2.0"
        },
        791: function(e, t, n) {
            "use strict";
            e.exports = n(117)
        },
        184: function(e, t, n) {
            "use strict";
            e.exports = n(374)
        },
        813: function(e, t) {
            "use strict";
            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n; ) {
                    var r = n - 1 >>> 1
                      , a = e[r];
                    if (!(0 < o(a, t)))
                        break e;
                    e[r] = t,
                    e[n] = a,
                    n = r
                }
            }
            function r(e) {
                return 0 === e.length ? null : e[0]
            }
            function a(e) {
                if (0 === e.length)
                    return null;
                var t = e[0]
                  , n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
                        var l = 2 * (r + 1) - 1
                          , s = e[l]
                          , u = l + 1
                          , c = e[u];
                        if (0 > o(s, n))
                            u < a && 0 > o(c, s) ? (e[r] = c,
                            e[u] = n,
                            r = u) : (e[r] = s,
                            e[l] = n,
                            r = l);
                        else {
                            if (!(u < a && 0 > o(c, n)))
                                break e;
                            e[r] = c,
                            e[u] = n,
                            r = u
                        }
                    }
                }
                return t
            }
            function o(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var i = performance;
                t.unstable_now = function() {
                    return i.now()
                }
            } else {
                var l = Date
                  , s = l.now();
                t.unstable_now = function() {
                    return l.now() - s
                }
            }
            var u = []
              , c = []
              , f = 1
              , d = null
              , p = 3
              , h = !1
              , v = !1
              , m = !1
              , g = "function" === typeof setTimeout ? setTimeout : null
              , y = "function" === typeof clearTimeout ? clearTimeout : null
              , b = "undefined" !== typeof setImmediate ? setImmediate : null;
            function x(e) {
                for (var t = r(c); null !== t; ) {
                    if (null === t.callback)
                        a(c);
                    else {
                        if (!(t.startTime <= e))
                            break;
                        a(c),
                        t.sortIndex = t.expirationTime,
                        n(u, t)
                    }
                    t = r(c)
                }
            }
            function w(e) {
                if (m = !1,
                x(e),
                !v)
                    if (null !== r(u))
                        v = !0,
                        R(k);
                    else {
                        var t = r(c);
                        null !== t && L(w, t.startTime - e)
                    }
            }
            function k(e, n) {
                v = !1,
                m && (m = !1,
                y(P),
                P = -1),
                h = !0;
                var o = p;
                try {
                    for (x(n),
                    d = r(u); null !== d && (!(d.expirationTime > n) || e && !O()); ) {
                        var i = d.callback;
                        if ("function" === typeof i) {
                            d.callback = null,
                            p = d.priorityLevel;
                            var l = i(d.expirationTime <= n);
                            n = t.unstable_now(),
                            "function" === typeof l ? d.callback = l : d === r(u) && a(u),
                            x(n)
                        } else
                            a(u);
                        d = r(u)
                    }
                    if (null !== d)
                        var s = !0;
                    else {
                        var f = r(c);
                        null !== f && L(w, f.startTime - n),
                        s = !1
                    }
                    return s
                } finally {
                    d = null,
                    p = o,
                    h = !1
                }
            }
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var S, E = !1, C = null, P = -1, j = 5, T = -1;
            function O() {
                return !(t.unstable_now() - T < j)
            }
            function N() {
                if (null !== C) {
                    var e = t.unstable_now();
                    T = e;
                    var n = !0;
                    try {
                        n = C(!0, e)
                    } finally {
                        n ? S() : (E = !1,
                        C = null)
                    }
                } else
                    E = !1
            }
            if ("function" === typeof b)
                S = function() {
                    b(N)
                }
                ;
            else if ("undefined" !== typeof MessageChannel) {
                var _ = new MessageChannel
                  , M = _.port2;
                _.port1.onmessage = N,
                S = function() {
                    M.postMessage(null)
                }
            } else
                S = function() {
                    g(N, 0)
                }
                ;
            function R(e) {
                C = e,
                E || (E = !0,
                S())
            }
            function L(e, n) {
                P = g((function() {
                    e(t.unstable_now())
                }
                ), n)
            }
            t.unstable_IdlePriority = 5,
            t.unstable_ImmediatePriority = 1,
            t.unstable_LowPriority = 4,
            t.unstable_NormalPriority = 3,
            t.unstable_Profiling = null,
            t.unstable_UserBlockingPriority = 2,
            t.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            t.unstable_continueExecution = function() {
                v || h || (v = !0,
                R(k))
            }
            ,
            t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < e ? Math.floor(1e3 / e) : 5
            }
            ,
            t.unstable_getCurrentPriorityLevel = function() {
                return p
            }
            ,
            t.unstable_getFirstCallbackNode = function() {
                return r(u)
            }
            ,
            t.unstable_next = function(e) {
                switch (p) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = p
                }
                var n = p;
                p = t;
                try {
                    return e()
                } finally {
                    p = n
                }
            }
            ,
            t.unstable_pauseExecution = function() {}
            ,
            t.unstable_requestPaint = function() {}
            ,
            t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var n = p;
                p = e;
                try {
                    return t()
                } finally {
                    p = n
                }
            }
            ,
            t.unstable_scheduleCallback = function(e, a, o) {
                var i = t.unstable_now();
                switch ("object" === typeof o && null !== o ? o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i : o = i,
                e) {
                case 1:
                    var l = -1;
                    break;
                case 2:
                    l = 250;
                    break;
                case 5:
                    l = 1073741823;
                    break;
                case 4:
                    l = 1e4;
                    break;
                default:
                    l = 5e3
                }
                return e = {
                    id: f++,
                    callback: a,
                    priorityLevel: e,
                    startTime: o,
                    expirationTime: l = o + l,
                    sortIndex: -1
                },
                o > i ? (e.sortIndex = o,
                n(c, e),
                null === r(u) && e === r(c) && (m ? (y(P),
                P = -1) : m = !0,
                L(w, o - i))) : (e.sortIndex = l,
                n(u, e),
                v || h || (v = !0,
                R(k))),
                e
            }
            ,
            t.unstable_shouldYield = O,
            t.unstable_wrapCallback = function(e) {
                var t = p;
                return function() {
                    var n = p;
                    p = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        p = n
                    }
                }
            }
        },
        296: function(e, t, n) {
            "use strict";
            e.exports = n(813)
        }
    }
      , t = {};
    function n(r) {
        var a = t[r];
        if (void 0 !== a)
            return a.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r](o, o.exports, n),
        o.exports
    }
    !function() {
        var e, t = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        }
        : function(e) {
            return e.__proto__
        }
        ;
        n.t = function(r, a) {
            if (1 & a && (r = this(r)),
            8 & a)
                return r;
            if ("object" === typeof r && r) {
                if (4 & a && r.__esModule)
                    return r;
                if (16 & a && "function" === typeof r.then)
                    return r
            }
            var o = Object.create(null);
            n.r(o);
            var i = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var l = 2 & a && r; "object" == typeof l && !~e.indexOf(l); l = t(l))
                Object.getOwnPropertyNames(l).forEach((function(e) {
                    i[e] = function() {
                        return r[e]
                    }
                }
                ));
            return i.default = function() {
                return r
            }
            ,
            n.d(o, i),
            o
        }
    }(),
    n.d = function(e, t) {
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.p = "./",
    function() {
        "use strict";
        var e, t = n(791), r = n.t(t, 2), a = n(250);
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function i(e) {
            if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }
        function l(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
            }
        }
        function s(e) {
            return function(e) {
                if (Array.isArray(e))
                    return o(e)
            }(e) || i(e) || l(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function u(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function c(e) {
            return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            c(e)
        }
        function f(e) {
            var t = function(e, t) {
                if ("object" !== c(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== c(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === c(t) ? t : String(t)
        }
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, f(r.key), r)
            }
        }
        function p(e, t, n) {
            return t && d(e.prototype, t),
            n && d(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function h(e, t) {
            return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            h(e, t)
        }
        function v(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && h(e, t)
        }
        function m(e) {
            return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            m(e)
        }
        function g() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function y(e, t) {
            if (t && ("object" === c(t) || "function" === typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }
        function b(e) {
            var t = g();
            return function() {
                var n, r = m(e);
                if (t) {
                    var a = m(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else
                    n = r.apply(this, arguments);
                return y(this, n)
            }
        }
        function x(e) {
            if (Array.isArray(e))
                return e
        }
        function w() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function k(e, t) {
            return x(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, o, i, l = [], s = !0, u = !1;
                    try {
                        if (o = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            s = !1
                        } else
                            for (; !(s = (r = o.call(n)).done) && (l.push(r.value),
                            l.length !== t); s = !0)
                                ;
                    } catch (c) {
                        u = !0,
                        a = c
                    } finally {
                        try {
                            if (!s && null != n.return && (i = n.return(),
                            Object(i) !== i))
                                return
                        } finally {
                            if (u)
                                throw a
                        }
                    }
                    return l
                }
            }(e, t) || l(e, t) || w()
        }
        function S(e, t, n) {
            return S = g() ? Reflect.construct.bind() : function(e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r));
                return n && h(a, n.prototype),
                a
            }
            ,
            S.apply(null, arguments)
        }
        function E(e) {
            var t = "function" === typeof Map ? new Map : void 0;
            return E = function(e) {
                if (null === e || (n = e,
                -1 === Function.toString.call(n).indexOf("[native code]")))
                    return e;
                var n;
                if ("function" !== typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if ("undefined" !== typeof t) {
                    if (t.has(e))
                        return t.get(e);
                    t.set(e, r)
                }
                function r() {
                    return S(e, arguments, m(this).constructor)
                }
                return r.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                h(r, e)
            }
            ,
            E(e)
        }
        function C(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = l(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0
                      , a = function() {};
                    return {
                        s: a,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, i = !0, s = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return i = e.done,
                    e
                },
                e: function(e) {
                    s = !0,
                    o = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw o
                    }
                }
            }
        }
        function P() {
            return P = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            P.apply(this, arguments)
        }
        !function(e) {
            e.Pop = "POP",
            e.Push = "PUSH",
            e.Replace = "REPLACE"
        }(e || (e = {}));
        var j, T = "popstate";
        function O(e, t) {
            if (!1 === e || null === e || "undefined" === typeof e)
                throw new Error(t)
        }
        function N(e, t) {
            return {
                usr: e.state,
                key: e.key,
                idx: t
            }
        }
        function _(e, t, n, r) {
            return void 0 === n && (n = null),
            P({
                pathname: "string" === typeof e ? e : e.pathname,
                search: "",
                hash: ""
            }, "string" === typeof t ? R(t) : t, {
                state: n,
                key: t && t.key || r || Math.random().toString(36).substr(2, 8)
            })
        }
        function M(e) {
            var t = e.pathname
              , n = void 0 === t ? "/" : t
              , r = e.search
              , a = void 0 === r ? "" : r
              , o = e.hash
              , i = void 0 === o ? "" : o;
            return a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
            i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
            n
        }
        function R(e) {
            var t = {};
            if (e) {
                var n = e.indexOf("#");
                n >= 0 && (t.hash = e.substr(n),
                e = e.substr(0, n));
                var r = e.indexOf("?");
                r >= 0 && (t.search = e.substr(r),
                e = e.substr(0, r)),
                e && (t.pathname = e)
            }
            return t
        }
        function L(t, n, r, a) {
            void 0 === a && (a = {});
            var o = a
              , i = o.window
              , l = void 0 === i ? document.defaultView : i
              , s = o.v5Compat
              , u = void 0 !== s && s
              , c = l.history
              , f = e.Pop
              , d = null
              , p = h();
            function h() {
                return (c.state || {
                    idx: null
                }).idx
            }
            function v() {
                f = e.Pop;
                var t = h()
                  , n = null == t ? null : t - p;
                p = t,
                d && d({
                    action: f,
                    location: g.location,
                    delta: n
                })
            }
            function m(e) {
                var t = "null" !== l.location.origin ? l.location.origin : l.location.href
                  , n = "string" === typeof e ? e : M(e);
                return O(t, "No window.location.(origin|href) available to create URL for href: " + n),
                new URL(n,t)
            }
            null == p && (p = 0,
            c.replaceState(P({}, c.state, {
                idx: p
            }), ""));
            var g = {
                get action() {
                    return f
                },
                get location() {
                    return t(l, c)
                },
                listen: function(e) {
                    if (d)
                        throw new Error("A history only accepts one active listener");
                    return l.addEventListener(T, v),
                    d = e,
                    function() {
                        l.removeEventListener(T, v),
                        d = null
                    }
                },
                createHref: function(e) {
                    return n(l, e)
                },
                createURL: m,
                encodeLocation: function(e) {
                    var t = m(e);
                    return {
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash
                    }
                },
                push: function(t, n) {
                    f = e.Push;
                    var a = _(g.location, t, n);
                    r && r(a, t);
                    var o = N(a, p = h() + 1)
                      , i = g.createHref(a);
                    try {
                        c.pushState(o, "", i)
                    } catch (s) {
                        l.location.assign(i)
                    }
                    u && d && d({
                        action: f,
                        location: g.location,
                        delta: 1
                    })
                },
                replace: function(t, n) {
                    f = e.Replace;
                    var a = _(g.location, t, n);
                    r && r(a, t);
                    var o = N(a, p = h())
                      , i = g.createHref(a);
                    c.replaceState(o, "", i),
                    u && d && d({
                        action: f,
                        location: g.location,
                        delta: 0
                    })
                },
                go: function(e) {
                    return c.go(e)
                }
            };
            return g
        }
        function A(e, t, n) {
            void 0 === n && (n = "/");
            var r = X(("string" === typeof t ? R(t) : t).pathname || "/", n);
            if (null == r)
                return null;
            var a = D(e);
            !function(e) {
                e.sort((function(e, t) {
                    return e.score !== t.score ? t.score - e.score : function(e, t) {
                        var n = e.length === t.length && e.slice(0, -1).every((function(e, n) {
                            return e === t[n]
                        }
                        ));
                        return n ? e[e.length - 1] - t[t.length - 1] : 0
                    }(e.routesMeta.map((function(e) {
                        return e.childrenIndex
                    }
                    )), t.routesMeta.map((function(e) {
                        return e.childrenIndex
                    }
                    )))
                }
                ))
            }(a);
            for (var o = null, i = 0; null == o && i < a.length; ++i)
                o = Q(a[i], q(r));
            return o
        }
        function D(e, t, n, r) {
            void 0 === t && (t = []),
            void 0 === n && (n = []),
            void 0 === r && (r = "");
            var a = function(e, a, o) {
                var i = {
                    relativePath: void 0 === o ? e.path || "" : o,
                    caseSensitive: !0 === e.caseSensitive,
                    childrenIndex: a,
                    route: e
                };
                i.relativePath.startsWith("/") && (O(i.relativePath.startsWith(r), 'Absolute route path "' + i.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),
                i.relativePath = i.relativePath.slice(r.length));
                var l = ee([r, i.relativePath])
                  , s = n.concat(i);
                e.children && e.children.length > 0 && (O(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'),
                D(e.children, t, s, l)),
                (null != e.path || e.index) && t.push({
                    path: l,
                    score: $(l, e.index),
                    routesMeta: s
                })
            };
            return e.forEach((function(e, t) {
                var n;
                if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
                    var r, o = C(V(e.path));
                    try {
                        for (o.s(); !(r = o.n()).done; ) {
                            var i = r.value;
                            a(e, t, i)
                        }
                    } catch (l) {
                        o.e(l)
                    } finally {
                        o.f()
                    }
                } else
                    a(e, t)
            }
            )),
            t
        }
        function V(e) {
            var t = e.split("/");
            if (0 === t.length)
                return [];
            var n, r = x(n = t) || i(n) || l(n) || w(), a = r[0], o = r.slice(1), u = a.endsWith("?"), c = a.replace(/\?$/, "");
            if (0 === o.length)
                return u ? [c, ""] : [c];
            var f = V(o.join("/"))
              , d = [];
            return d.push.apply(d, s(f.map((function(e) {
                return "" === e ? c : [c, e].join("/")
            }
            )))),
            u && d.push.apply(d, s(f)),
            d.map((function(t) {
                return e.startsWith("/") && "" === t ? "/" : t
            }
            ))
        }
        !function(e) {
            e.data = "data",
            e.deferred = "deferred",
            e.redirect = "redirect",
            e.error = "error"
        }(j || (j = {}));
        var I = /^:\w+$/
          , z = 3
          , F = 2
          , B = 1
          , U = 10
          , H = -2
          , W = function(e) {
            return "*" === e
        };
        function $(e, t) {
            var n = e.split("/")
              , r = n.length;
            return n.some(W) && (r += H),
            t && (r += F),
            n.filter((function(e) {
                return !W(e)
            }
            )).reduce((function(e, t) {
                return e + (I.test(t) ? z : "" === t ? B : U)
            }
            ), r)
        }
        function Q(e, t) {
            for (var n = e.routesMeta, r = {}, a = "/", o = [], i = 0; i < n.length; ++i) {
                var l = n[i]
                  , s = i === n.length - 1
                  , u = "/" === a ? t : t.slice(a.length) || "/"
                  , c = Y({
                    path: l.relativePath,
                    caseSensitive: l.caseSensitive,
                    end: s
                }, u);
                if (!c)
                    return null;
                Object.assign(r, c.params);
                var f = l.route;
                o.push({
                    params: r,
                    pathname: ee([a, c.pathname]),
                    pathnameBase: te(ee([a, c.pathnameBase])),
                    route: f
                }),
                "/" !== c.pathnameBase && (a = ee([a, c.pathnameBase]))
            }
            return o
        }
        function Y(e, t) {
            "string" === typeof e && (e = {
                path: e,
                caseSensitive: !1,
                end: !0
            });
            var n = function(e, t, n) {
                void 0 === t && (t = !1);
                void 0 === n && (n = !0);
                K("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                var r = []
                  , a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (function(e, t) {
                    return r.push(t),
                    "/([^\\/]+)"
                }
                ));
                e.endsWith("*") ? (r.push("*"),
                a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
                var o = new RegExp(a,t ? void 0 : "i");
                return [o, r]
            }(e.path, e.caseSensitive, e.end)
              , r = k(n, 2)
              , a = r[0]
              , o = r[1]
              , i = t.match(a);
            if (!i)
                return null;
            var l = i[0]
              , s = l.replace(/(.)\/+$/, "$1")
              , u = i.slice(1);
            return {
                params: o.reduce((function(e, t, n) {
                    if ("*" === t) {
                        var r = u[n] || "";
                        s = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1")
                    }
                    return e[t] = function(e, t) {
                        try {
                            return decodeURIComponent(e)
                        } catch (n) {
                            return K(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."),
                            e
                        }
                    }(u[n] || "", t),
                    e
                }
                ), {}),
                pathname: l,
                pathnameBase: s,
                pattern: e
            }
        }
        function q(e) {
            try {
                return decodeURI(e)
            } catch (t) {
                return K(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."),
                e
            }
        }
        function X(e, t) {
            if ("/" === t)
                return e;
            if (!e.toLowerCase().startsWith(t.toLowerCase()))
                return null;
            var n = t.endsWith("/") ? t.length - 1 : t.length
              , r = e.charAt(n);
            return r && "/" !== r ? null : e.slice(n) || "/"
        }
        function K(e, t) {
            if (!e) {
                "undefined" !== typeof console && console.warn(t);
                try {
                    throw new Error(t)
                } catch (n) {}
            }
        }
        function G(e, t, n, r) {
            return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        }
        function Z(e) {
            return e.filter((function(e, t) {
                return 0 === t || e.route.path && e.route.path.length > 0
            }
            ))
        }
        function J(e, t, n, r) {
            var a;
            void 0 === r && (r = !1),
            "string" === typeof e ? a = R(e) : (O(!(a = P({}, e)).pathname || !a.pathname.includes("?"), G("?", "pathname", "search", a)),
            O(!a.pathname || !a.pathname.includes("#"), G("#", "pathname", "hash", a)),
            O(!a.search || !a.search.includes("#"), G("#", "search", "hash", a)));
            var o, i = "" === e || "" === a.pathname, l = i ? "/" : a.pathname;
            if (r || null == l)
                o = n;
            else {
                var s = t.length - 1;
                if (l.startsWith("..")) {
                    for (var u = l.split("/"); ".." === u[0]; )
                        u.shift(),
                        s -= 1;
                    a.pathname = u.join("/")
                }
                o = s >= 0 ? t[s] : "/"
            }
            var c = function(e, t) {
                void 0 === t && (t = "/");
                var n = "string" === typeof e ? R(e) : e
                  , r = n.pathname
                  , a = n.search
                  , o = void 0 === a ? "" : a
                  , i = n.hash
                  , l = void 0 === i ? "" : i
                  , s = r ? r.startsWith("/") ? r : function(e, t) {
                    var n = t.replace(/\/+$/, "").split("/");
                    return e.split("/").forEach((function(e) {
                        ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                    }
                    )),
                    n.length > 1 ? n.join("/") : "/"
                }(r, t) : t;
                return {
                    pathname: s,
                    search: ne(o),
                    hash: re(l)
                }
            }(a, o)
              , f = l && "/" !== l && l.endsWith("/")
              , d = (i || "." === l) && n.endsWith("/");
            return c.pathname.endsWith("/") || !f && !d || (c.pathname += "/"),
            c
        }
        var ee = function(e) {
            return e.join("/").replace(/\/\/+/g, "/")
        }
          , te = function(e) {
            return e.replace(/\/+$/, "").replace(/^\/*/, "/")
        }
          , ne = function(e) {
            return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""
        }
          , re = function(e) {
            return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""
        }
          , ae = function(e) {
            v(n, e);
            var t = b(n);
            function n() {
                return u(this, n),
                t.apply(this, arguments)
            }
            return p(n)
        }(E(Error));
        function oe(e) {
            return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data"in e
        }
        var ie = ["post", "put", "patch", "delete"]
          , le = (new Set(ie),
        ["get"].concat(ie));
        new Set(le),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window && "undefined" !== typeof window.document && window.document.createElement;
        Symbol("deferred");
        function se() {
            return se = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            se.apply(this, arguments)
        }
        var ue = "function" === typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
        }
          , ce = t.useState
          , fe = t.useEffect
          , de = t.useLayoutEffect
          , pe = t.useDebugValue;
        function he(e) {
            var t = e.getSnapshot
              , n = e.value;
            try {
                var r = t();
                return !ue(n, r)
            } catch (a) {
                return !0
            }
        }
        "undefined" === typeof window || "undefined" === typeof window.document || window.document.createElement,
        r.useSyncExternalStore;
        var ve = t.createContext(null);
        var me = t.createContext(null);
        var ge = t.createContext(null);
        var ye = t.createContext(null);
        var be = t.createContext(null);
        var xe = t.createContext({
            outlet: null,
            matches: []
        });
        var we = t.createContext(null);
        function ke() {
            return null != t.useContext(be)
        }
        function Se() {
            return ke() || O(!1),
            t.useContext(be).location
        }
        function Ee() {
            ke() || O(!1);
            var e = t.useContext(ye)
              , n = e.basename
              , r = e.navigator
              , a = t.useContext(xe).matches
              , o = Se().pathname
              , i = JSON.stringify(Z(a).map((function(e) {
                return e.pathnameBase
            }
            )))
              , l = t.useRef(!1);
            return t.useEffect((function() {
                l.current = !0
            }
            )),
            t.useCallback((function(e, t) {
                if (void 0 === t && (t = {}),
                l.current)
                    if ("number" !== typeof e) {
                        var a = J(e, JSON.parse(i), o, "path" === t.relative);
                        "/" !== n && (a.pathname = "/" === a.pathname ? n : ee([n, a.pathname])),
                        (t.replace ? r.replace : r.push)(a, t.state, t)
                    } else
                        r.go(e)
            }
            ), [n, r, i, o])
        }
        function Ce(e, n) {
            var r = (void 0 === n ? {} : n).relative
              , a = t.useContext(xe).matches
              , o = Se().pathname
              , i = JSON.stringify(Z(a).map((function(e) {
                return e.pathnameBase
            }
            )));
            return t.useMemo((function() {
                return J(e, JSON.parse(i), o, "path" === r)
            }
            ), [e, i, o, r])
        }
        function Pe() {
            var e = function() {
                var e, n = t.useContext(we), r = Me(Te.UseRouteError), a = Re(Te.UseRouteError);
                if (n)
                    return n;
                return null == (e = r.errors) ? void 0 : e[a]
            }()
              , n = oe(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
              , r = e instanceof Error ? e.stack : null
              , a = "rgba(200,200,200, 0.5)"
              , o = {
                padding: "0.5rem",
                backgroundColor: a
            };
            return t.createElement(t.Fragment, null, t.createElement("h2", null, "Unexpected Application Error!"), t.createElement("h3", {
                style: {
                    fontStyle: "italic"
                }
            }, n), r ? t.createElement("pre", {
                style: o
            }, r) : null, null)
        }
        var je, Te, Oe = function(e) {
            v(r, e);
            var n = b(r);
            function r(e) {
                var t;
                return u(this, r),
                (t = n.call(this, e)).state = {
                    location: e.location,
                    error: e.error
                },
                t
            }
            return p(r, [{
                key: "componentDidCatch",
                value: function(e, t) {
                    console.error("React Router caught the following error during render", e, t)
                }
            }, {
                key: "render",
                value: function() {
                    return this.state.error ? t.createElement(xe.Provider, {
                        value: this.props.routeContext
                    }, t.createElement(we.Provider, {
                        value: this.state.error,
                        children: this.props.component
                    })) : this.props.children
                }
            }], [{
                key: "getDerivedStateFromError",
                value: function(e) {
                    return {
                        error: e
                    }
                }
            }, {
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return t.location !== e.location ? {
                        error: e.error,
                        location: e.location
                    } : {
                        error: e.error || t.error,
                        location: t.location
                    }
                }
            }]),
            r
        }(t.Component);
        function Ne(e) {
            var n = e.routeContext
              , r = e.match
              , a = e.children
              , o = t.useContext(ve);
            return o && o.static && o.staticContext && r.route.errorElement && (o.staticContext._deepestRenderedBoundaryId = r.route.id),
            t.createElement(xe.Provider, {
                value: n
            }, a)
        }
        function _e(e, n, r) {
            if (void 0 === n && (n = []),
            null == e) {
                if (null == r || !r.errors)
                    return null;
                e = r.matches
            }
            var a = e
              , o = null == r ? void 0 : r.errors;
            if (null != o) {
                var i = a.findIndex((function(e) {
                    return e.route.id && (null == o ? void 0 : o[e.route.id])
                }
                ));
                i >= 0 || O(!1),
                a = a.slice(0, Math.min(a.length, i + 1))
            }
            return a.reduceRight((function(e, i, l) {
                var s = i.route.id ? null == o ? void 0 : o[i.route.id] : null
                  , u = r ? i.route.errorElement || t.createElement(Pe, null) : null
                  , c = n.concat(a.slice(0, l + 1))
                  , f = function() {
                    return t.createElement(Ne, {
                        match: i,
                        routeContext: {
                            outlet: e,
                            matches: c
                        }
                    }, s ? u : void 0 !== i.route.element ? i.route.element : e)
                };
                return r && (i.route.errorElement || 0 === l) ? t.createElement(Oe, {
                    location: r.location,
                    component: u,
                    error: s,
                    children: f(),
                    routeContext: {
                        outlet: null,
                        matches: c
                    }
                }) : f()
            }
            ), null)
        }
        function Me(e) {
            var n = t.useContext(me);
            return n || O(!1),
            n
        }
        function Re(e) {
            var n = function(e) {
                var n = t.useContext(xe);
                return n || O(!1),
                n
            }()
              , r = n.matches[n.matches.length - 1];
            return r.route.id || O(!1),
            r.route.id
        }
        !function(e) {
            e.UseBlocker = "useBlocker",
            e.UseRevalidator = "useRevalidator"
        }(je || (je = {})),
        function(e) {
            e.UseLoaderData = "useLoaderData",
            e.UseActionData = "useActionData",
            e.UseRouteError = "useRouteError",
            e.UseNavigation = "useNavigation",
            e.UseRouteLoaderData = "useRouteLoaderData",
            e.UseMatches = "useMatches",
            e.UseRevalidator = "useRevalidator"
        }(Te || (Te = {}));
        var Le;
        function Ae(e) {
            O(!1)
        }
        function De(n) {
            var r = n.basename
              , a = void 0 === r ? "/" : r
              , o = n.children
              , i = void 0 === o ? null : o
              , l = n.location
              , s = n.navigationType
              , u = void 0 === s ? e.Pop : s
              , c = n.navigator
              , f = n.static
              , d = void 0 !== f && f;
            ke() && O(!1);
            var p = a.replace(/^\/*/, "/")
              , h = t.useMemo((function() {
                return {
                    basename: p,
                    navigator: c,
                    static: d
                }
            }
            ), [p, c, d]);
            "string" === typeof l && (l = R(l));
            var v = l
              , m = v.pathname
              , g = void 0 === m ? "/" : m
              , y = v.search
              , b = void 0 === y ? "" : y
              , x = v.hash
              , w = void 0 === x ? "" : x
              , k = v.state
              , S = void 0 === k ? null : k
              , E = v.key
              , C = void 0 === E ? "default" : E
              , P = t.useMemo((function() {
                var e = X(g, p);
                return null == e ? null : {
                    pathname: e,
                    search: b,
                    hash: w,
                    state: S,
                    key: C
                }
            }
            ), [p, g, b, w, S, C]);
            return null == P ? null : t.createElement(ye.Provider, {
                value: h
            }, t.createElement(be.Provider, {
                children: i,
                value: {
                    location: P,
                    navigationType: u
                }
            }))
        }
        function Ve(n) {
            var r = n.children
              , a = n.location
              , o = t.useContext(ve);
            return function(n, r) {
                ke() || O(!1);
                var a, o = t.useContext(ye).navigator, i = t.useContext(me), l = t.useContext(xe).matches, s = l[l.length - 1], u = s ? s.params : {}, c = (s && s.pathname,
                s ? s.pathnameBase : "/"), f = (s && s.route,
                Se());
                if (r) {
                    var d, p = "string" === typeof r ? R(r) : r;
                    "/" === c || (null == (d = p.pathname) ? void 0 : d.startsWith(c)) || O(!1),
                    a = p
                } else
                    a = f;
                var h = a.pathname || "/"
                  , v = A(n, {
                    pathname: "/" === c ? h : h.slice(c.length) || "/"
                })
                  , m = _e(v && v.map((function(e) {
                    return Object.assign({}, e, {
                        params: Object.assign({}, u, e.params),
                        pathname: ee([c, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]),
                        pathnameBase: "/" === e.pathnameBase ? c : ee([c, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                    })
                }
                )), l, i || void 0);
                return r && m ? t.createElement(be.Provider, {
                    value: {
                        location: se({
                            pathname: "/",
                            search: "",
                            hash: "",
                            state: null,
                            key: "default"
                        }, a),
                        navigationType: e.Pop
                    }
                }, m) : m
            }(o && !r ? o.router.routes : ze(r), a)
        }
        !function(e) {
            e[e.pending = 0] = "pending",
            e[e.success = 1] = "success",
            e[e.error = 2] = "error"
        }(Le || (Le = {}));
        var Ie = new Promise((function() {}
        ));
        t.Component;
        function ze(e, n) {
            void 0 === n && (n = []);
            var r = [];
            return t.Children.forEach(e, (function(e, a) {
                if (t.isValidElement(e))
                    if (e.type !== t.Fragment) {
                        e.type !== Ae && O(!1),
                        e.props.index && e.props.children && O(!1);
                        var o = [].concat(s(n), [a])
                          , i = {
                            id: e.props.id || o.join("-"),
                            caseSensitive: e.props.caseSensitive,
                            element: e.props.element,
                            index: e.props.index,
                            path: e.props.path,
                            loader: e.props.loader,
                            action: e.props.action,
                            errorElement: e.props.errorElement,
                            hasErrorBoundary: null != e.props.errorElement,
                            shouldRevalidate: e.props.shouldRevalidate,
                            handle: e.props.handle
                        };
                        e.props.children && (i.children = ze(e.props.children, o)),
                        r.push(i)
                    } else
                        r.push.apply(r, ze(e.props.children, n))
            }
            )),
            r
        }
        function Fe(e, t, n) {
            return (t = f(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function Be(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Ue(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Be(Object(n), !0).forEach((function(t) {
                    Fe(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var He = (0,
        t.createContext)({
            transformPagePoint: function(e) {
                return e
            },
            isStatic: !1,
            reducedMotion: "never"
        })
          , We = (0,
        t.createContext)({});
        var $e = (0,
        t.createContext)(null)
          , Qe = "undefined" !== typeof document
          , Ye = Qe ? t.useLayoutEffect : t.useEffect
          , qe = (0,
        t.createContext)({
            strict: !1
        });
        function Xe(e, n, r, a) {
            var o = (0,
            t.useContext)(We).visualElement
              , i = (0,
            t.useContext)(qe)
              , l = (0,
            t.useContext)($e)
              , s = (0,
            t.useContext)(He).reducedMotion
              , u = (0,
            t.useRef)();
            a = a || i.renderer,
            !u.current && a && (u.current = a(e, {
                visualState: n,
                parent: o,
                props: r,
                presenceId: l ? l.id : void 0,
                blockInitialAnimation: !!l && !1 === l.initial,
                reducedMotionConfig: s
            }));
            var c = u.current;
            return Ye((function() {
                c && c.render()
            }
            )),
            (window.HandoffAppearAnimations ? Ye : t.useEffect)((function() {
                c && c.animationState && c.animationState.animateChanges()
            }
            )),
            c
        }
        function Ke(e) {
            return "object" === typeof e && Object.prototype.hasOwnProperty.call(e, "current")
        }
        function Ge(e) {
            return "string" === typeof e || Array.isArray(e)
        }
        function Ze(e) {
            return "object" === typeof e && "function" === typeof e.start
        }
        var Je = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];
        function et(e) {
            return Ze(e.animate) || Je.some((function(t) {
                return Ge(e[t])
            }
            ))
        }
        function tt(e) {
            return Boolean(et(e) || e.variants)
        }
        function nt(e) {
            var n = function(e, t) {
                if (et(e)) {
                    var n = e.initial
                      , r = e.animate;
                    return {
                        initial: !1 === n || Ge(n) ? n : void 0,
                        animate: Ge(r) ? r : void 0
                    }
                }
                return !1 !== e.inherit ? t : {}
            }(e, (0,
            t.useContext)(We))
              , r = n.initial
              , a = n.animate;
            return (0,
            t.useMemo)((function() {
                return {
                    initial: r,
                    animate: a
                }
            }
            ), [rt(r), rt(a)])
        }
        function rt(e) {
            return Array.isArray(e) ? e.join(" ") : e
        }
        var at = function(e) {
            return {
                isEnabled: function(t) {
                    return e.some((function(e) {
                        return !!t[e]
                    }
                    ))
                }
            }
        }
          , ot = {
            measureLayout: at(["layout", "layoutId", "drag"]),
            animation: at(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
            exit: at(["exit"]),
            drag: at(["drag", "dragControls"]),
            focus: at(["whileFocus"]),
            hover: at(["whileHover", "onHoverStart", "onHoverEnd"]),
            tap: at(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
            pan: at(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
            inView: at(["whileInView", "onViewportEnter", "onViewportLeave"])
        };
        function it(e) {
            var n = (0,
            t.useRef)(null);
            return null === n.current && (n.current = e()),
            n.current
        }
        var lt = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        }
          , st = 1;
        var ut = (0,
        t.createContext)({})
          , ct = function(e) {
            v(n, e);
            var t = b(n);
            function n() {
                return u(this, n),
                t.apply(this, arguments)
            }
            return p(n, [{
                key: "getSnapshotBeforeUpdate",
                value: function() {
                    var e = this.props
                      , t = e.visualElement
                      , n = e.props;
                    return t && t.setProps(n),
                    null
                }
            }, {
                key: "componentDidUpdate",
                value: function() {}
            }, {
                key: "render",
                value: function() {
                    return this.props.children
                }
            }]),
            n
        }(t.Component)
          , ft = (0,
        t.createContext)({})
          , dt = Symbol.for("motionComponentSymbol");
        function pt(e) {
            var n = e.preloadedFeatures
              , r = e.createVisualElement
              , a = e.projectionNodeConstructor
              , o = e.useRender
              , i = e.useVisualState
              , l = e.Component;
            n && function(e) {
                for (var t in e)
                    "projectionNodeConstructor" === t ? ot.projectionNodeConstructor = e[t] : ot[t].Component = e[t]
            }(n);
            var s = (0,
            t.forwardRef)((function(e, s) {
                var u = Ue(Ue(Ue({}, (0,
                t.useContext)(He)), e), {}, {
                    layoutId: ht(e)
                })
                  , c = u.isStatic
                  , f = null
                  , d = nt(e)
                  , p = c ? void 0 : it((function() {
                    if (lt.hasEverUpdated)
                        return st++
                }
                ))
                  , h = i(e, c);
                if (!c && Qe) {
                    d.visualElement = Xe(l, h, u, r);
                    var v = (0,
                    t.useContext)(ft);
                    d.visualElement && (f = d.visualElement.loadFeatures(u, (0,
                    t.useContext)(qe).strict, n, p, a || ot.projectionNodeConstructor, v))
                }
                return t.createElement(ct, {
                    visualElement: d.visualElement,
                    props: u
                }, f, t.createElement(We.Provider, {
                    value: d
                }, o(l, e, p, function(e, n, r) {
                    return (0,
                    t.useCallback)((function(t) {
                        t && e.mount && e.mount(t),
                        n && (t ? n.mount(t) : n.unmount()),
                        r && ("function" === typeof r ? r(t) : Ke(r) && (r.current = t))
                    }
                    ), [n])
                }(h, d.visualElement, s), h, c, d.visualElement)))
            }
            ));
            return s[dt] = l,
            s
        }
        function ht(e) {
            var n = e.layoutId
              , r = (0,
            t.useContext)(ut).id;
            return r && void 0 !== n ? r + "-" + n : n
        }
        function vt(e) {
            function t(t) {
                return pt(e(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}))
            }
            if ("undefined" === typeof Proxy)
                return t;
            var n = new Map;
            return new Proxy(t,{
                get: function(e, r) {
                    return n.has(r) || n.set(r, t(r)),
                    n.get(r)
                }
            })
        }
        var mt = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function gt(e) {
            return "string" === typeof e && !e.includes("-") && !!(mt.indexOf(e) > -1 || /[A-Z]/.test(e))
        }
        var yt = {};
        var bt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , xt = new Set(bt);
        function wt(e, t) {
            var n = t.layout
              , r = t.layoutId;
            return xt.has(e) || e.startsWith("origin") || (n || void 0 !== r) && (!!yt[e] || "opacity" === e)
        }
        var kt = function(e) {
            return !!(null === e || void 0 === e ? void 0 : e.getVelocity)
        }
          , St = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , Et = function(e, t) {
            return bt.indexOf(e) - bt.indexOf(t)
        };
        function Ct(e) {
            return e.startsWith("--")
        }
        var Pt = function(e, t) {
            return t && "number" === typeof e ? t.transform(e) : e
        }
          , jt = function(e, t, n) {
            return Math.min(Math.max(n, e), t)
        }
          , Tt = {
            test: function(e) {
                return "number" === typeof e
            },
            parse: parseFloat,
            transform: function(e) {
                return e
            }
        }
          , Ot = Ue(Ue({}, Tt), {}, {
            transform: function(e) {
                return jt(0, 1, e)
            }
        })
          , Nt = Ue(Ue({}, Tt), {}, {
            default: 1
        })
          , _t = function(e) {
            return Math.round(1e5 * e) / 1e5
        }
          , Mt = /(-)?([\d]*\.?[\d])+/g
          , Rt = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
          , Lt = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
        function At(e) {
            return "string" === typeof e
        }
        var Dt = function(e) {
            return {
                test: function(t) {
                    return At(t) && t.endsWith(e) && 1 === t.split(" ").length
                },
                parse: parseFloat,
                transform: function(t) {
                    return "".concat(t).concat(e)
                }
            }
        }
          , Vt = Dt("deg")
          , It = Dt("%")
          , zt = Dt("px")
          , Ft = Dt("vh")
          , Bt = Dt("vw")
          , Ut = Ue(Ue({}, It), {}, {
            parse: function(e) {
                return It.parse(e) / 100
            },
            transform: function(e) {
                return It.transform(100 * e)
            }
        })
          , Ht = Ue(Ue({}, Tt), {}, {
            transform: Math.round
        })
          , Wt = {
            borderWidth: zt,
            borderTopWidth: zt,
            borderRightWidth: zt,
            borderBottomWidth: zt,
            borderLeftWidth: zt,
            borderRadius: zt,
            radius: zt,
            borderTopLeftRadius: zt,
            borderTopRightRadius: zt,
            borderBottomRightRadius: zt,
            borderBottomLeftRadius: zt,
            width: zt,
            maxWidth: zt,
            height: zt,
            maxHeight: zt,
            size: zt,
            top: zt,
            right: zt,
            bottom: zt,
            left: zt,
            padding: zt,
            paddingTop: zt,
            paddingRight: zt,
            paddingBottom: zt,
            paddingLeft: zt,
            margin: zt,
            marginTop: zt,
            marginRight: zt,
            marginBottom: zt,
            marginLeft: zt,
            rotate: Vt,
            rotateX: Vt,
            rotateY: Vt,
            rotateZ: Vt,
            scale: Nt,
            scaleX: Nt,
            scaleY: Nt,
            scaleZ: Nt,
            skew: Vt,
            skewX: Vt,
            skewY: Vt,
            distance: zt,
            translateX: zt,
            translateY: zt,
            translateZ: zt,
            x: zt,
            y: zt,
            z: zt,
            perspective: zt,
            transformPerspective: zt,
            opacity: Ot,
            originX: Ut,
            originY: Ut,
            originZ: zt,
            zIndex: Ht,
            fillOpacity: Ot,
            strokeOpacity: Ot,
            numOctaves: Ht
        };
        function $t(e, t, n, r) {
            var a = e.style
              , o = e.vars
              , i = e.transform
              , l = e.transformKeys
              , s = e.transformOrigin;
            l.length = 0;
            var u = !1
              , c = !1
              , f = !0;
            for (var d in t) {
                var p = t[d];
                if (Ct(d))
                    o[d] = p;
                else {
                    var h = Wt[d]
                      , v = Pt(p, h);
                    if (xt.has(d)) {
                        if (u = !0,
                        i[d] = v,
                        l.push(d),
                        !f)
                            continue;
                        p !== (h.default || 0) && (f = !1)
                    } else
                        d.startsWith("origin") ? (c = !0,
                        s[d] = v) : a[d] = v
                }
            }
            if (t.transform || (u || r ? a.transform = function(e, t, n, r) {
                var a = e.transform
                  , o = e.transformKeys
                  , i = t.enableHardwareAcceleration
                  , l = void 0 === i || i
                  , s = t.allowTransformNone
                  , u = void 0 === s || s
                  , c = "";
                o.sort(Et);
                var f, d = C(o);
                try {
                    for (d.s(); !(f = d.n()).done; ) {
                        var p = f.value;
                        c += "".concat(St[p] || p, "(").concat(a[p], ") ")
                    }
                } catch (h) {
                    d.e(h)
                } finally {
                    d.f()
                }
                return l && !a.z && (c += "translateZ(0)"),
                c = c.trim(),
                r ? c = r(a, n ? "" : c) : u && n && (c = "none"),
                c
            }(e, n, f, r) : a.transform && (a.transform = "none")),
            c) {
                var m = s.originX
                  , g = void 0 === m ? "50%" : m
                  , y = s.originY
                  , b = void 0 === y ? "50%" : y
                  , x = s.originZ
                  , w = void 0 === x ? 0 : x;
                a.transformOrigin = "".concat(g, " ").concat(b, " ").concat(w)
            }
        }
        var Qt = function() {
            return {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            }
        };
        function Yt(e, t, n) {
            for (var r in t)
                kt(t[r]) || wt(r, n) || (e[r] = t[r])
        }
        function qt(e, n, r) {
            var a = {};
            return Yt(a, e.style || {}, e),
            Object.assign(a, function(e, n, r) {
                var a = e.transformTemplate;
                return (0,
                t.useMemo)((function() {
                    var e = Qt();
                    return $t(e, n, {
                        enableHardwareAcceleration: !r
                    }, a),
                    Object.assign({}, e.vars, e.style)
                }
                ), [n])
            }(e, n, r)),
            e.transformValues ? e.transformValues(a) : a
        }
        function Xt(e, t, n) {
            var r = {}
              , a = qt(e, t, n);
            return e.drag && !1 !== e.dragListener && (r.draggable = !1,
            a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none",
            a.touchAction = !0 === e.drag ? "none" : "pan-".concat("x" === e.drag ? "y" : "x")),
            void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
            r.style = a,
            r
        }
        var Kt = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
        function Gt(e) {
            return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Kt.has(e)
        }
        var Zt, Jt = function(e) {
            return !Gt(e)
        };
        try {
            (Zt = require("@emotion/is-prop-valid").default) && (Jt = function(e) {
                return e.startsWith("on") ? !Gt(e) : Zt(e)
            }
            )
        } catch (Lu) {}
        function en(e, t) {
            if (null == e)
                return {};
            var n, r, a = function(e, t) {
                if (null == e)
                    return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        function tn(e, t, n) {
            return "string" === typeof e ? e : zt.transform(t + n * e)
        }
        var nn = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , rn = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        var an = ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"];
        function on(e, t, n, r, a) {
            var o = t.attrX
              , i = t.attrY
              , l = t.originX
              , s = t.originY
              , u = t.pathLength
              , c = t.pathSpacing
              , f = void 0 === c ? 1 : c
              , d = t.pathOffset
              , p = void 0 === d ? 0 : d;
            if ($t(e, en(t, an), n, a),
            r)
                e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
            else {
                e.attrs = e.style,
                e.style = {};
                var h = e.attrs
                  , v = e.style
                  , m = e.dimensions;
                h.transform && (m && (v.transform = h.transform),
                delete h.transform),
                m && (void 0 !== l || void 0 !== s || v.transform) && (v.transformOrigin = function(e, t, n) {
                    var r = tn(t, e.x, e.width)
                      , a = tn(n, e.y, e.height);
                    return "".concat(r, " ").concat(a)
                }(m, void 0 !== l ? l : .5, void 0 !== s ? s : .5)),
                void 0 !== o && (h.x = o),
                void 0 !== i && (h.y = i),
                void 0 !== u && function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    e.pathLength = 1;
                    var o = a ? nn : rn;
                    e[o.offset] = zt.transform(-r);
                    var i = zt.transform(t)
                      , l = zt.transform(n);
                    e[o.array] = "".concat(i, " ").concat(l)
                }(h, u, f, p, !1)
            }
        }
        var ln = function() {
            return Ue(Ue({}, Qt()), {}, {
                attrs: {}
            })
        }
          , sn = function(e) {
            return "string" === typeof e && "svg" === e.toLowerCase()
        };
        function un(e, n, r, a) {
            var o = (0,
            t.useMemo)((function() {
                var t = ln();
                return on(t, n, {
                    enableHardwareAcceleration: !1
                }, sn(a), e.transformTemplate),
                Ue(Ue({}, t.attrs), {}, {
                    style: Ue({}, t.style)
                })
            }
            ), [n]);
            if (e.style) {
                var i = {};
                Yt(i, e.style, e),
                o.style = Ue(Ue({}, i), o.style)
            }
            return o
        }
        function cn() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return function(n, r, a, o, i, l) {
                var s = i.latestValues
                  , u = (gt(n) ? un : Xt)(r, s, l, n)
                  , c = function(e, t, n) {
                    var r = {};
                    for (var a in e)
                        "values" === a && "object" === typeof e.values || (Jt(a) || !0 === n && Gt(a) || !t && !Gt(a) || e.draggable && a.startsWith("onDrag")) && (r[a] = e[a]);
                    return r
                }(r, "string" === typeof n, e)
                  , f = Ue(Ue(Ue({}, c), u), {}, {
                    ref: o
                })
                  , d = r.children
                  , p = (0,
                t.useMemo)((function() {
                    return kt(d) ? d.get() : d
                }
                ), [d]);
                return a && (f["data-projection-id"] = a),
                (0,
                t.createElement)(n, Ue(Ue({}, f), {}, {
                    children: p
                }))
            }
        }
        var fn = function(e) {
            return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        };
        function dn(e, t, n, r) {
            var a = t.style
              , o = t.vars;
            for (var i in Object.assign(e.style, a, r && r.getProjectionStyles(n)),
            o)
                e.style.setProperty(i, o[i])
        }
        var pn = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function hn(e, t, n, r) {
            for (var a in dn(e, t, void 0, r),
            t.attrs)
                e.setAttribute(pn.has(a) ? a : fn(a), t.attrs[a])
        }
        function vn(e, t) {
            var n = e.style
              , r = {};
            for (var a in n)
                (kt(n[a]) || t.style && kt(t.style[a]) || wt(a, e)) && (r[a] = n[a]);
            return r
        }
        function mn(e, t) {
            var n = vn(e, t);
            for (var r in e) {
                if (kt(e[r]) || kt(t[r]))
                    n["x" === r || "y" === r ? "attr" + r.toUpperCase() : r] = e[r]
            }
            return n
        }
        function gn(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            return "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
            "string" === typeof t && (t = e.variants && e.variants[t]),
            "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
            t
        }
        var yn = function(e) {
            return Array.isArray(e)
        }
          , bn = function(e) {
            return Boolean(e && "object" === typeof e && e.mix && e.toValue)
        }
          , xn = function(e) {
            return yn(e) ? e[e.length - 1] || 0 : e
        };
        function wn(e) {
            var t = kt(e) ? e.get() : e;
            return bn(t) ? t.toValue() : t
        }
        var kn = ["transitionEnd", "transition"];
        var Sn = function(e) {
            return function(n, r) {
                var a = (0,
                t.useContext)(We)
                  , o = (0,
                t.useContext)($e)
                  , i = function() {
                    return function(e, t, n, r) {
                        var a = e.scrapeMotionValuesFromProps
                          , o = e.createRenderState
                          , i = e.onMount
                          , l = {
                            latestValues: En(t, n, r, a),
                            renderState: o()
                        };
                        return i && (l.mount = function(e) {
                            return i(t, e, l)
                        }
                        ),
                        l
                    }(e, n, a, o)
                };
                return r ? i() : it(i)
            }
        };
        function En(e, t, n, r) {
            var a = {}
              , o = r(e, {});
            for (var i in o)
                a[i] = wn(o[i]);
            var l = e.initial
              , s = e.animate
              , u = et(e)
              , c = tt(e);
            t && c && !u && !1 !== e.inherit && (void 0 === l && (l = t.initial),
            void 0 === s && (s = t.animate));
            var f = !!n && !1 === n.initial
              , d = (f = f || !1 === l) ? s : l;
            d && "boolean" !== typeof d && !Ze(d) && (Array.isArray(d) ? d : [d]).forEach((function(t) {
                var n = gn(e, t);
                if (n) {
                    var r = n.transitionEnd
                      , o = (n.transition,
                    en(n, kn));
                    for (var i in o) {
                        var l = o[i];
                        if (Array.isArray(l))
                            l = l[f ? l.length - 1 : 0];
                        null !== l && (a[i] = l)
                    }
                    for (var s in r)
                        a[s] = r[s]
                }
            }
            ));
            return a
        }
        var Cn, Pn = {
            useVisualState: Sn({
                scrapeMotionValuesFromProps: mn,
                createRenderState: ln,
                onMount: function(e, t, n) {
                    var r = n.renderState
                      , a = n.latestValues;
                    try {
                        r.dimensions = "function" === typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                    } catch (o) {
                        r.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    on(r, a, {
                        enableHardwareAcceleration: !1
                    }, sn(t.tagName), e.transformTemplate),
                    hn(t, r)
                }
            })
        }, jn = {
            useVisualState: Sn({
                scrapeMotionValuesFromProps: vn,
                createRenderState: Qt
            })
        };
        function Tn(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                passive: !0
            };
            return e.addEventListener(t, n, r),
            function() {
                return e.removeEventListener(t, n)
            }
        }
        function On(e, n, r, a) {
            (0,
            t.useEffect)((function() {
                var t = e.current;
                if (r && t)
                    return Tn(t, n, r, a)
            }
            ), [e, n, r, a])
        }
        !function(e) {
            e.Animate = "animate",
            e.Hover = "whileHover",
            e.Tap = "whileTap",
            e.Drag = "whileDrag",
            e.Focus = "whileFocus",
            e.InView = "whileInView",
            e.Exit = "exit"
        }(Cn || (Cn = {}));
        var Nn = function(e) {
            return "mouse" === e.pointerType ? "number" !== typeof e.button || e.button <= 0 : !1 !== e.isPrimary
        };
        function _n(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "page";
            return {
                point: {
                    x: e[t + "X"],
                    y: e[t + "Y"]
                }
            }
        }
        var Mn = function(e) {
            return function(t) {
                return Nn(t) && e(t, _n(t))
            }
        };
        function Rn(e, t, n, r) {
            return Tn(e, t, Mn(n), r)
        }
        function Ln(e, t, n, r) {
            return On(e, t, n && Mn(n), r)
        }
        function An(e) {
            var t = null;
            return function() {
                return null === t && (t = e,
                function() {
                    t = null
                }
                )
            }
        }
        var Dn = An("dragHorizontal")
          , Vn = An("dragVertical");
        function In(e) {
            var t = !1;
            if ("y" === e)
                t = Vn();
            else if ("x" === e)
                t = Dn();
            else {
                var n = Dn()
                  , r = Vn();
                n && r ? t = function() {
                    n(),
                    r()
                }
                : (n && n(),
                r && r())
            }
            return t
        }
        function zn() {
            var e = In(!0);
            return !e || (e(),
            !1)
        }
        function Fn(e, t, n, r) {
            return function(a, o) {
                "touch" === a.type || zn() || (n && e.animationState && e.animationState.setActive(Cn.Hover, t),
                r && r(a, o))
            }
        }
        var Bn = function e(t, n) {
            return !!n && (t === n || e(t, n.parentElement))
        };
        function Un(e) {
            return (0,
            t.useEffect)((function() {
                return function() {
                    return e()
                }
            }
            ), [])
        }
        var Hn = function(e, t) {
            return function(n) {
                return t(e(n))
            }
        }
          , Wn = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.reduce(Hn)
        }
          , $n = ["onTap", "onTapStart", "onTapCancel", "whileTap", "visualElement"];
        function Qn(e, t) {
            if (t) {
                var n = new PointerEvent("pointer" + e);
                t(n, _n(n))
            }
        }
        var Yn = ["root"]
          , qn = new WeakMap
          , Xn = new WeakMap
          , Kn = function(e) {
            var t = qn.get(e.target);
            t && t(e)
        }
          , Gn = function(e) {
            e.forEach(Kn)
        };
        function Zn(e, t, n) {
            var r = function(e) {
                var t = e.root
                  , n = en(e, Yn)
                  , r = t || document;
                Xn.has(r) || Xn.set(r, {});
                var a = Xn.get(r)
                  , o = JSON.stringify(n);
                return a[o] || (a[o] = new IntersectionObserver(Gn,Ue({
                    root: t
                }, n))),
                a[o]
            }(t);
            return qn.set(e, n),
            r.observe(e),
            function() {
                qn.delete(e),
                r.unobserve(e)
            }
        }
        var Jn = {
            some: 0,
            all: 1
        };
        function er(e, n, r, a) {
            var o = a.root
              , i = a.margin
              , l = a.amount
              , s = void 0 === l ? "some" : l
              , u = a.once;
            (0,
            t.useEffect)((function() {
                if (e && r.current) {
                    var t = {
                        root: null === o || void 0 === o ? void 0 : o.current,
                        rootMargin: i,
                        threshold: "number" === typeof s ? s : Jn[s]
                    };
                    return Zn(r.current, t, (function(e) {
                        var t = e.isIntersecting;
                        if (n.isInView !== t && (n.isInView = t,
                        !u || t || !n.hasEnteredView)) {
                            t && (n.hasEnteredView = !0),
                            r.animationState && r.animationState.setActive(Cn.InView, t);
                            var a = r.getProps()
                              , o = t ? a.onViewportEnter : a.onViewportLeave;
                            o && o(e)
                        }
                    }
                    ))
                }
            }
            ), [e, o, i, s])
        }
        function tr(e, n, r, a) {
            var o = a.fallback
              , i = void 0 === o || o;
            (0,
            t.useEffect)((function() {
                e && i && requestAnimationFrame((function() {
                    n.hasEnteredView = !0;
                    var e = r.getProps().onViewportEnter;
                    e && e(null),
                    r.animationState && r.animationState.setActive(Cn.InView, !0)
                }
                ))
            }
            ), [e])
        }
        var nr = function(e) {
            return function(t) {
                return e(t),
                null
            }
        }
          , rr = {
            inView: nr((function(e) {
                var n = e.visualElement
                  , r = e.whileInView
                  , a = e.onViewportEnter
                  , o = e.onViewportLeave
                  , i = e.viewport
                  , l = void 0 === i ? {} : i
                  , s = (0,
                t.useRef)({
                    hasEnteredView: !1,
                    isInView: !1
                })
                  , u = Boolean(r || a || o);
                l.once && s.current.hasEnteredView && (u = !1),
                ("undefined" === typeof IntersectionObserver ? tr : er)(u, s.current, n, l)
            }
            )),
            tap: nr((function(e) {
                var n = e.onTap
                  , r = e.onTapStart
                  , a = e.onTapCancel
                  , o = e.whileTap
                  , i = e.visualElement
                  , l = en(e, $n)
                  , s = n || r || a || o
                  , u = (0,
                t.useRef)(!1)
                  , c = (0,
                t.useRef)(null)
                  , f = {
                    passive: !(r || n || a || l.onPointerDown)
                };
                function d() {
                    c.current && c.current(),
                    c.current = null
                }
                function p() {
                    return d(),
                    u.current = !1,
                    i.getProps().whileTap && i.animationState && i.animationState.setActive(Cn.Tap, !1),
                    !zn()
                }
                function h(e, t) {
                    var n, r, a, o;
                    p() && (Bn(i.current, e.target) ? null === (o = (a = i.getProps()).onTap) || void 0 === o || o.call(a, e, t) : null === (r = (n = i.getProps()).onTapCancel) || void 0 === r || r.call(n, e, t))
                }
                function v(e, t) {
                    var n, r;
                    p() && (null === (r = (n = i.getProps()).onTapCancel) || void 0 === r || r.call(n, e, t))
                }
                function m(e, t) {
                    var n, r = i.getProps();
                    r.whileTap && i.animationState && i.animationState.setActive(Cn.Tap, !0),
                    null === (n = r.onTapStart) || void 0 === n || n.call(r, e, t)
                }
                var g = [Boolean(r), Boolean(n), Boolean(o), i]
                  , y = (0,
                t.useCallback)((function(e, t) {
                    d(),
                    u.current || (u.current = !0,
                    c.current = Wn(Rn(window, "pointerup", h, f), Rn(window, "pointercancel", v, f)),
                    m(e, t))
                }
                ), g);
                Ln(i, "pointerdown", s ? y : void 0, f);
                var b = (0,
                t.useCallback)((function() {
                    var e = Tn(i.current, "keydown", (function(e) {
                        "Enter" !== e.key || u.current || (u.current = !0,
                        c.current = Tn(i.current, "keyup", (function() {
                            "Enter" === e.key && p() && Qn("up", i.getProps().onTap)
                        }
                        ), f),
                        Qn("down", m))
                    }
                    ))
                      , t = Tn(i.current, "blur", (function() {
                        e(),
                        t(),
                        u.current && Qn("cancel", v)
                    }
                    ))
                }
                ), g);
                On(i, "focus", s ? b : void 0),
                Un(d)
            }
            )),
            focus: nr((function(e) {
                var n = e.whileFocus
                  , r = e.visualElement
                  , a = (0,
                t.useRef)(!1)
                  , o = r.animationState
                  , i = (0,
                t.useCallback)((function() {
                    var e = !1;
                    try {
                        e = r.current.matches(":focus-visible")
                    } catch (t) {
                        e = !0
                    }
                    e && o && (o.setActive(Cn.Focus, !0),
                    a.current = !0)
                }
                ), [o])
                  , l = (0,
                t.useCallback)((function() {
                    a.current && o && (o.setActive(Cn.Focus, !1),
                    a.current = !1)
                }
                ), [o]);
                On(r, "focus", n ? i : void 0),
                On(r, "blur", n ? l : void 0)
            }
            )),
            hover: nr((function(e) {
                var n = e.onHoverStart
                  , r = e.onHoverEnd
                  , a = e.whileHover
                  , o = e.visualElement;
                Ln(o, "pointerenter", (0,
                t.useMemo)((function() {
                    return n || a ? Fn(o, !0, Boolean(a), n) : void 0
                }
                ), [n, Boolean(a), o]), {
                    passive: !n
                }),
                Ln(o, "pointerleave", (0,
                t.useMemo)((function() {
                    return r || a ? Fn(o, !1, Boolean(a), r) : void 0
                }
                ), [n, Boolean(a), o]), {
                    passive: !r
                })
            }
            ))
        };
        function ar() {
            var e = (0,
            t.useContext)($e);
            if (null === e)
                return [!0, null];
            var n = e.isPresent
              , r = e.onExitComplete
              , a = e.register
              , o = (0,
            t.useId)();
            (0,
            t.useEffect)((function() {
                return a(o)
            }
            ), []);
            return !n && r ? [!1, function() {
                return r && r(o)
            }
            ] : [!0]
        }
        function or(e, t) {
            if (!Array.isArray(t))
                return !1;
            var n = t.length;
            if (n !== e.length)
                return !1;
            for (var r = 0; r < n; r++)
                if (t[r] !== e[r])
                    return !1;
            return !0
        }
        var ir = function(e) {
            return /^\-?\d*\.?\d+$/.test(e)
        }
          , lr = function(e) {
            return /^0[^.\s]+$/.test(e)
        }
          , sr = {
            delta: 0,
            timestamp: 0
        }
          , ur = 1 / 60 * 1e3
          , cr = "undefined" !== typeof performance ? function() {
            return performance.now()
        }
        : function() {
            return Date.now()
        }
          , fr = "undefined" !== typeof window ? function(e) {
            return window.requestAnimationFrame(e)
        }
        : function(e) {
            return setTimeout((function() {
                return e(cr())
            }
            ), ur)
        }
        ;
        var dr = !0
          , pr = !1
          , hr = !1
          , vr = ["read", "update", "preRender", "render", "postRender"]
          , mr = vr.reduce((function(e, t) {
            return e[t] = function(e) {
                var t = []
                  , n = []
                  , r = 0
                  , a = !1
                  , o = !1
                  , i = new WeakSet
                  , l = {
                    schedule: function(e) {
                        var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && a
                          , l = o ? t : n;
                        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && i.add(e),
                        -1 === l.indexOf(e) && (l.push(e),
                        o && a && (r = t.length)),
                        e
                    },
                    cancel: function(e) {
                        var t = n.indexOf(e);
                        -1 !== t && n.splice(t, 1),
                        i.delete(e)
                    },
                    process: function(s) {
                        if (a)
                            o = !0;
                        else {
                            a = !0;
                            var u = [n, t];
                            if (t = u[0],
                            (n = u[1]).length = 0,
                            r = t.length)
                                for (var c = 0; c < r; c++) {
                                    var f = t[c];
                                    f(s),
                                    i.has(f) && (l.schedule(f),
                                    e())
                                }
                            a = !1,
                            o && (o = !1,
                            l.process(s))
                        }
                    }
                };
                return l
            }((function() {
                return pr = !0
            }
            )),
            e
        }
        ), {})
          , gr = vr.reduce((function(e, t) {
            var n = mr[t];
            return e[t] = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return pr || kr(),
                n.schedule(e, t, r)
            }
            ,
            e
        }
        ), {})
          , yr = vr.reduce((function(e, t) {
            return e[t] = mr[t].cancel,
            e
        }
        ), {})
          , br = vr.reduce((function(e, t) {
            return e[t] = function() {
                return mr[t].process(sr)
            }
            ,
            e
        }
        ), {})
          , xr = function(e) {
            return mr[e].process(sr)
        }
          , wr = function e(t) {
            pr = !1,
            sr.delta = dr ? ur : Math.max(Math.min(t - sr.timestamp, 40), 1),
            sr.timestamp = t,
            hr = !0,
            vr.forEach(xr),
            hr = !1,
            pr && (dr = !1,
            fr(e))
        }
          , kr = function() {
            pr = !0,
            dr = !0,
            hr || fr(wr)
        };
        function Sr(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }
        function Er(e, t) {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
        var Cr = function() {
            function e() {
                u(this, e),
                this.subscriptions = []
            }
            return p(e, [{
                key: "add",
                value: function(e) {
                    var t = this;
                    return Sr(this.subscriptions, e),
                    function() {
                        return Er(t.subscriptions, e)
                    }
                }
            }, {
                key: "notify",
                value: function(e, t, n) {
                    var r = this.subscriptions.length;
                    if (r)
                        if (1 === r)
                            this.subscriptions[0](e, t, n);
                        else
                            for (var a = 0; a < r; a++) {
                                var o = this.subscriptions[a];
                                o && o(e, t, n)
                            }
                }
            }, {
                key: "getSize",
                value: function() {
                    return this.subscriptions.length
                }
            }, {
                key: "clear",
                value: function() {
                    this.subscriptions.length = 0
                }
            }]),
            e
        }();
        function Pr(e, t) {
            return t ? e * (1e3 / t) : 0
        }
        var jr = function(e) {
            return !isNaN(parseFloat(e))
        }
          , Tr = function() {
            function e(t) {
                var n = this
                  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                u(this, e),
                this.version = "9.0.2",
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    n.prev = n.current,
                    n.current = e;
                    var r = sr.delta
                      , a = sr.timestamp;
                    n.lastUpdated !== a && (n.timeDelta = r,
                    n.lastUpdated = a,
                    gr.postRender(n.scheduleVelocityCheck)),
                    n.prev !== n.current && n.events.change && n.events.change.notify(n.current),
                    n.events.velocityChange && n.events.velocityChange.notify(n.getVelocity()),
                    t && n.events.renderRequest && n.events.renderRequest.notify(n.current)
                }
                ,
                this.scheduleVelocityCheck = function() {
                    return gr.postRender(n.velocityCheck)
                }
                ,
                this.velocityCheck = function(e) {
                    e.timestamp !== n.lastUpdated && (n.prev = n.current,
                    n.events.velocityChange && n.events.velocityChange.notify(n.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = t,
                this.canTrackVelocity = jr(this.current),
                this.owner = r.owner
            }
            return p(e, [{
                key: "onChange",
                value: function(e) {
                    return this.on("change", e)
                }
            }, {
                key: "on",
                value: function(e, t) {
                    var n = this;
                    this.events[e] || (this.events[e] = new Cr);
                    var r = this.events[e].add(t);
                    return "change" === e ? function() {
                        r(),
                        gr.read((function() {
                            n.events.change.getSize() || n.stop()
                        }
                        ))
                    }
                    : r
                }
            }, {
                key: "clearListeners",
                value: function() {
                    for (var e in this.events)
                        this.events[e].clear()
                }
            }, {
                key: "attach",
                value: function(e, t) {
                    this.passiveEffect = e,
                    this.stopPassiveEffect = t
                }
            }, {
                key: "set",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
                }
            }, {
                key: "setWithVelocity",
                value: function(e, t, n) {
                    this.set(t),
                    this.prev = e,
                    this.timeDelta = n
                }
            }, {
                key: "jump",
                value: function(e) {
                    this.updateAndNotify(e),
                    this.prev = e,
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }, {
                key: "get",
                value: function() {
                    return this.current
                }
            }, {
                key: "getPrevious",
                value: function() {
                    return this.prev
                }
            }, {
                key: "getVelocity",
                value: function() {
                    return this.canTrackVelocity ? Pr(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
            }, {
                key: "start",
                value: function(e) {
                    var t = this;
                    return this.stop(),
                    new Promise((function(n) {
                        t.hasAnimated = !0,
                        t.animation = e(n) || null,
                        t.events.animationStart && t.events.animationStart.notify()
                    }
                    )).then((function() {
                        t.events.animationComplete && t.events.animationComplete.notify(),
                        t.clearAnimation()
                    }
                    ))
                }
            }, {
                key: "stop",
                value: function() {
                    this.animation && (this.animation.stop(),
                    this.events.animationCancel && this.events.animationCancel.notify()),
                    this.clearAnimation()
                }
            }, {
                key: "isAnimating",
                value: function() {
                    return !!this.animation
                }
            }, {
                key: "clearAnimation",
                value: function() {
                    this.animation = null
                }
            }, {
                key: "destroy",
                value: function() {
                    this.clearListeners(),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }]),
            e
        }();
        function Or(e, t) {
            return new Tr(e,t)
        }
        var Nr = function(e, t) {
            return function(n) {
                return Boolean(At(n) && Lt.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
            }
        }
          , _r = function(e, t, n) {
            return function(r) {
                var a;
                if (!At(r))
                    return r;
                var o = k(r.match(Mt), 4)
                  , i = o[0]
                  , l = o[1]
                  , s = o[2]
                  , u = o[3];
                return Fe(a = {}, e, parseFloat(i)),
                Fe(a, t, parseFloat(l)),
                Fe(a, n, parseFloat(s)),
                Fe(a, "alpha", void 0 !== u ? parseFloat(u) : 1),
                a
            }
        }
          , Mr = Ue(Ue({}, Tt), {}, {
            transform: function(e) {
                return Math.round(function(e) {
                    return jt(0, 255, e)
                }(e))
            }
        })
          , Rr = {
            test: Nr("rgb", "red"),
            parse: _r("red", "green", "blue"),
            transform: function(e) {
                var t = e.red
                  , n = e.green
                  , r = e.blue
                  , a = e.alpha
                  , o = void 0 === a ? 1 : a;
                return "rgba(" + Mr.transform(t) + ", " + Mr.transform(n) + ", " + Mr.transform(r) + ", " + _t(Ot.transform(o)) + ")"
            }
        };
        var Lr = {
            test: Nr("#"),
            parse: function(e) {
                var t = ""
                  , n = ""
                  , r = ""
                  , a = "";
                return e.length > 5 ? (t = e.substring(1, 3),
                n = e.substring(3, 5),
                r = e.substring(5, 7),
                a = e.substring(7, 9)) : (t = e.substring(1, 2),
                n = e.substring(2, 3),
                r = e.substring(3, 4),
                a = e.substring(4, 5),
                t += t,
                n += n,
                r += r,
                a += a),
                {
                    red: parseInt(t, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(r, 16),
                    alpha: a ? parseInt(a, 16) / 255 : 1
                }
            },
            transform: Rr.transform
        }
          , Ar = {
            test: Nr("hsl", "hue"),
            parse: _r("hue", "saturation", "lightness"),
            transform: function(e) {
                var t = e.hue
                  , n = e.saturation
                  , r = e.lightness
                  , a = e.alpha
                  , o = void 0 === a ? 1 : a;
                return "hsla(" + Math.round(t) + ", " + It.transform(_t(n)) + ", " + It.transform(_t(r)) + ", " + _t(Ot.transform(o)) + ")"
            }
        }
          , Dr = {
            test: function(e) {
                return Rr.test(e) || Lr.test(e) || Ar.test(e)
            },
            parse: function(e) {
                return Rr.test(e) ? Rr.parse(e) : Ar.test(e) ? Ar.parse(e) : Lr.parse(e)
            },
            transform: function(e) {
                return At(e) ? e : e.hasOwnProperty("red") ? Rr.transform(e) : Ar.transform(e)
            }
        }
          , Vr = "${c}"
          , Ir = "${n}";
        function zr(e) {
            "number" === typeof e && (e = "".concat(e));
            var t = []
              , n = 0
              , r = 0
              , a = e.match(Rt);
            a && (n = a.length,
            e = e.replace(Rt, Vr),
            t.push.apply(t, s(a.map(Dr.parse))));
            var o = e.match(Mt);
            return o && (r = o.length,
            e = e.replace(Mt, Ir),
            t.push.apply(t, s(o.map(Tt.parse)))),
            {
                values: t,
                numColors: n,
                numNumbers: r,
                tokenised: e
            }
        }
        function Fr(e) {
            return zr(e).values
        }
        function Br(e) {
            var t = zr(e)
              , n = t.values
              , r = t.numColors
              , a = t.tokenised
              , o = n.length;
            return function(e) {
                for (var t = a, n = 0; n < o; n++)
                    t = t.replace(n < r ? Vr : Ir, n < r ? Dr.transform(e[n]) : _t(e[n]));
                return t
            }
        }
        var Ur = function(e) {
            return "number" === typeof e ? 0 : e
        };
        var Hr = {
            test: function(e) {
                var t, n;
                return isNaN(e) && At(e) && ((null === (t = e.match(Mt)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(Rt)) || void 0 === n ? void 0 : n.length) || 0) > 0
            },
            parse: Fr,
            createTransformer: Br,
            getAnimatableNone: function(e) {
                var t = Fr(e);
                return Br(e)(t.map(Ur))
            }
        }
          , Wr = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function $r(e) {
            var t = k(e.slice(0, -1).split("("), 2)
              , n = t[0]
              , r = t[1];
            if ("drop-shadow" === n)
                return e;
            var a = k(r.match(Mt) || [], 1)[0];
            if (!a)
                return e;
            var o = r.replace(a, "")
              , i = Wr.has(n) ? 1 : 0;
            return a !== r && (i *= 100),
            n + "(" + i + o + ")"
        }
        var Qr = /([a-z-]*)\(.*?\)/g
          , Yr = Ue(Ue({}, Hr), {}, {
            getAnimatableNone: function(e) {
                var t = e.match(Qr);
                return t ? t.map($r).join(" ") : e
            }
        })
          , qr = Ue(Ue({}, Wt), {}, {
            color: Dr,
            backgroundColor: Dr,
            outlineColor: Dr,
            fill: Dr,
            stroke: Dr,
            borderColor: Dr,
            borderTopColor: Dr,
            borderRightColor: Dr,
            borderBottomColor: Dr,
            borderLeftColor: Dr,
            filter: Yr,
            WebkitFilter: Yr
        })
          , Xr = function(e) {
            return qr[e]
        };
        function Kr(e, t) {
            var n, r = Xr(e);
            return r !== Yr && (r = Hr),
            null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, t)
        }
        var Gr = function(e) {
            return function(t) {
                return t.test(e)
            }
        }
          , Zr = [Tt, zt, It, Vt, Bt, Ft, {
            test: function(e) {
                return "auto" === e
            },
            parse: function(e) {
                return e
            }
        }]
          , Jr = function(e) {
            return Zr.find(Gr(e))
        }
          , ea = [].concat(s(Zr), [Dr, Hr])
          , ta = function(e) {
            return ea.find(Gr(e))
        };
        function na(e, t, n) {
            var r = e.getProps();
            return gn(r, t, void 0 !== n ? n : r.custom, function(e) {
                var t = {};
                return e.values.forEach((function(e, n) {
                    return t[n] = e.get()
                }
                )),
                t
            }(e), function(e) {
                var t = {};
                return e.values.forEach((function(e, n) {
                    return t[n] = e.getVelocity()
                }
                )),
                t
            }(e))
        }
        var ra = ["transitionEnd", "transition"];
        function aa(e, t, n) {
            e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Or(n))
        }
        function oa(e, t) {
            var n = na(e, t)
              , r = n ? e.makeTargetAnimatable(n, !1) : {}
              , a = r.transitionEnd
              , o = void 0 === a ? {} : a
              , i = (r.transition,
            en(r, ra));
            for (var l in i = Ue(Ue({}, i), o)) {
                aa(e, l, xn(i[l]))
            }
        }
        function ia(e, t) {
            if (t)
                return (t[e] || t.default || t).from
        }
        function la(e) {
            return Boolean(kt(e) && e.add)
        }
        var sa = "data-" + fn("framerAppearId")
          , ua = function() {}
          , ca = function() {};
        var fa = function(e) {
            return 1e3 * e
        }
          , da = {
            current: !1
        }
          , pa = function(e) {
            return function(t) {
                return t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
            }
        }
          , ha = function(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        }
          , va = function(e) {
            return e * e
        }
          , ma = ha(va)
          , ga = pa(va)
          , ya = function(e, t, n) {
            return -n * e + n * t + e
        };
        function ba(e, t, n) {
            return n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var xa = function(e, t, n) {
            var r = e * e;
            return Math.sqrt(Math.max(0, n * (t * t - r) + r))
        }
          , wa = [Lr, Rr, Ar]
          , ka = function(e) {
            return wa.find((function(t) {
                return t.test(e)
            }
            ))
        };
        function Sa(e) {
            var t = ka(e);
            ca(Boolean(t), "'".concat(e, "' is not an animatable color. Use the equivalent color code instead."));
            var n = t.parse(e);
            return t === Ar && (n = function(e) {
                var t = e.hue
                  , n = e.saturation
                  , r = e.lightness
                  , a = e.alpha;
                t /= 360,
                r /= 100;
                var o = 0
                  , i = 0
                  , l = 0;
                if (n /= 100) {
                    var s = r < .5 ? r * (1 + n) : r + n - r * n
                      , u = 2 * r - s;
                    o = ba(u, s, t + 1 / 3),
                    i = ba(u, s, t),
                    l = ba(u, s, t - 1 / 3)
                } else
                    o = i = l = r;
                return {
                    red: Math.round(255 * o),
                    green: Math.round(255 * i),
                    blue: Math.round(255 * l),
                    alpha: a
                }
            }(n)),
            n
        }
        var Ea = function(e, t) {
            var n = Sa(e)
              , r = Sa(t)
              , a = Ue({}, n);
            return function(e) {
                return a.red = xa(n.red, r.red, e),
                a.green = xa(n.green, r.green, e),
                a.blue = xa(n.blue, r.blue, e),
                a.alpha = ya(n.alpha, r.alpha, e),
                Rr.transform(a)
            }
        };
        function Ca(e, t) {
            return "number" === typeof e ? function(n) {
                return ya(e, t, n)
            }
            : Dr.test(e) ? Ea(e, t) : Ta(e, t)
        }
        var Pa = function(e, t) {
            var n = s(e)
              , r = n.length
              , a = e.map((function(e, n) {
                return Ca(e, t[n])
            }
            ));
            return function(e) {
                for (var t = 0; t < r; t++)
                    n[t] = a[t](e);
                return n
            }
        }
          , ja = function(e, t) {
            var n = Ue(Ue({}, e), t)
              , r = {};
            for (var a in n)
                void 0 !== e[a] && void 0 !== t[a] && (r[a] = Ca(e[a], t[a]));
            return function(e) {
                for (var t in r)
                    n[t] = r[t](e);
                return n
            }
        }
          , Ta = function(e, t) {
            var n = Hr.createTransformer(t)
              , r = zr(e)
              , a = zr(t);
            return r.numColors === a.numColors && r.numNumbers >= a.numNumbers ? Wn(Pa(r.values, a.values), n) : (ua(!0, "Complex values '".concat(e, "' and '").concat(t, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.")),
            function(n) {
                return "".concat(n > 0 ? t : e)
            }
            )
        }
          , Oa = function(e, t, n) {
            var r = t - e;
            return 0 === r ? 1 : (n - e) / r
        }
          , Na = function(e, t) {
            return function(n) {
                return ya(e, t, n)
            }
        };
        function _a(e, t, n) {
            for (var r, a = [], o = n || ("number" === typeof (r = e[0]) ? Na : "string" === typeof r ? Dr.test(r) ? Ea : Ta : Array.isArray(r) ? Pa : "object" === typeof r ? ja : Na), i = e.length - 1, l = 0; l < i; l++) {
                var s = o(e[l], e[l + 1]);
                if (t) {
                    var u = Array.isArray(t) ? t[l] : t;
                    s = Wn(u, s)
                }
                a.push(s)
            }
            return a
        }
        function Ma(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = n.clamp
              , a = void 0 === r || r
              , o = n.ease
              , i = n.mixer
              , l = e.length;
            ca(l === t.length, "Both input and output ranges must be the same length"),
            ca(!o || !Array.isArray(o) || o.length === l - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),
            e[0] > e[l - 1] && (e = s(e).reverse(),
            t = s(t).reverse());
            var u = _a(t, o, i)
              , c = u.length
              , f = function(t) {
                var n = 0;
                if (c > 1)
                    for (; n < e.length - 2 && !(t < e[n + 1]); n++)
                        ;
                var r = Oa(e[n], e[n + 1], t);
                return u[n](r)
            };
            return a ? function(t) {
                return f(jt(e[0], e[l - 1], t))
            }
            : f
        }
        var Ra = function(e) {
            return e
        }
          , La = function(e, t, n) {
            return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
        }
          , Aa = 1e-7
          , Da = 12;
        function Va(e, t, n, r) {
            if (e === t && n === r)
                return Ra;
            var a = function(t) {
                return function(e, t, n, r, a) {
                    var o, i, l = 0;
                    do {
                        (o = La(i = t + (n - t) / 2, r, a) - e) > 0 ? n = i : t = i
                    } while (Math.abs(o) > Aa && ++l < Da);
                    return i
                }(t, 0, 1, e, n)
            };
            return function(e) {
                return 0 === e || 1 === e ? e : La(a(e), t, r)
            }
        }
        var Ia = function(e) {
            return 1 - Math.sin(Math.acos(e))
        }
          , za = ha(Ia)
          , Fa = pa(za)
          , Ba = Va(.33, 1.53, .69, .99)
          , Ua = ha(Ba)
          , Ha = pa(Ua)
          , Wa = {
            linear: Ra,
            easeIn: va,
            easeInOut: ga,
            easeOut: ma,
            circIn: Ia,
            circInOut: Fa,
            circOut: za,
            backIn: Ua,
            backInOut: Ha,
            backOut: Ba,
            anticipate: function(e) {
                return (e *= 2) < 1 ? .5 * Ua(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            }
        }
          , $a = function(e) {
            if (Array.isArray(e)) {
                ca(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                var t = k(e, 4);
                return Va(t[0], t[1], t[2], t[3])
            }
            return "string" === typeof e ? (ca(void 0 !== Wa[e], "Invalid easing type '".concat(e, "'")),
            Wa[e]) : e
        }
          , Qa = function(e) {
            return Array.isArray(e) && "number" !== typeof e[0]
        };
        function Ya(e) {
            var t = e.keyframes
              , n = e.ease
              , r = void 0 === n ? ga : n
              , a = e.times
              , o = e.duration
              , i = void 0 === o ? 300 : o;
            t = s(t);
            var l = Qa(r) ? r.map($a) : $a(r)
              , u = {
                done: !1,
                value: t[0]
            }
              , c = function(e, t) {
                return e.map((function(e) {
                    return e * t
                }
                ))
            }(a && a.length === t.length ? a : function(e) {
                var t = e.length;
                return e.map((function(e, n) {
                    return 0 !== n ? n / (t - 1) : 0
                }
                ))
            }(t), i);
            function f() {
                return Ma(c, t, {
                    ease: Array.isArray(l) ? l : (e = t,
                    n = l,
                    e.map((function() {
                        return n || ga
                    }
                    )).splice(0, e.length - 1))
                });
                var e, n
            }
            var d = f();
            return {
                next: function(e) {
                    return u.value = d(e),
                    u.done = e >= i,
                    u
                },
                flipTarget: function() {
                    t.reverse(),
                    d = f()
                }
            }
        }
        var qa = .001
          , Xa = .01
          , Ka = 10
          , Ga = .05
          , Za = 1;
        function Ja(e) {
            var t, n, r = e.duration, a = void 0 === r ? 800 : r, o = e.bounce, i = void 0 === o ? .25 : o, l = e.velocity, s = void 0 === l ? 0 : l, u = e.mass, c = void 0 === u ? 1 : u;
            ua(a <= 1e3 * Ka, "Spring duration must be 10 seconds or less");
            var f = 1 - i;
            f = jt(Ga, Za, f),
            a = jt(Xa, Ka, a / 1e3),
            f < 1 ? (t = function(e) {
                var t = e * f
                  , n = t * a
                  , r = t - s
                  , o = to(e, f)
                  , i = Math.exp(-n);
                return qa - r / o * i
            }
            ,
            n = function(e) {
                var n = e * f * a
                  , r = n * s + s
                  , o = Math.pow(f, 2) * Math.pow(e, 2) * a
                  , i = Math.exp(-n)
                  , l = to(Math.pow(e, 2), f);
                return (-t(e) + qa > 0 ? -1 : 1) * ((r - o) * i) / l
            }
            ) : (t = function(e) {
                return Math.exp(-e * a) * ((e - s) * a + 1) - qa
            }
            ,
            n = function(e) {
                return Math.exp(-e * a) * (a * a * (s - e))
            }
            );
            var d = function(e, t, n) {
                for (var r = n, a = 1; a < eo; a++)
                    r -= e(r) / t(r);
                return r
            }(t, n, 5 / a);
            if (a *= 1e3,
            isNaN(d))
                return {
                    stiffness: 100,
                    damping: 10,
                    duration: a
                };
            var p = Math.pow(d, 2) * c;
            return {
                stiffness: p,
                damping: 2 * f * Math.sqrt(c * p),
                duration: a
            }
        }
        var eo = 12;
        function to(e, t) {
            return e * Math.sqrt(1 - t * t)
        }
        var no = ["keyframes", "restDelta", "restSpeed"]
          , ro = ["duration", "bounce"]
          , ao = ["stiffness", "damping", "mass"];
        function oo(e, t) {
            return t.some((function(t) {
                return void 0 !== e[t]
            }
            ))
        }
        var io = 5;
        function lo(e) {
            var t = e.keyframes
              , n = e.restDelta
              , r = e.restSpeed
              , a = en(e, no)
              , o = t[0]
              , i = t[t.length - 1]
              , l = {
                done: !1,
                value: o
            }
              , s = function(e) {
                var t = Ue({
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1
                }, e);
                if (!oo(e, ao) && oo(e, ro)) {
                    var n = Ja(e);
                    (t = Ue(Ue(Ue({}, t), n), {}, {
                        velocity: 0,
                        mass: 1
                    })).isResolvedFromDuration = !0
                }
                return t
            }(a)
              , u = s.stiffness
              , c = s.damping
              , f = s.mass
              , d = s.velocity
              , p = s.duration
              , h = s.isResolvedFromDuration
              , v = so
              , m = d ? -d / 1e3 : 0
              , g = c / (2 * Math.sqrt(u * f));
            function y() {
                var e = i - o
                  , t = Math.sqrt(u / f) / 1e3
                  , a = Math.abs(e) < 5;
                if (r || (r = a ? .01 : 2),
                n || (n = a ? .005 : .5),
                g < 1) {
                    var l = to(t, g);
                    v = function(n) {
                        var r = Math.exp(-g * t * n);
                        return i - r * ((m + g * t * e) / l * Math.sin(l * n) + e * Math.cos(l * n))
                    }
                } else if (1 === g)
                    v = function(n) {
                        return i - Math.exp(-t * n) * (e + (m + t * e) * n)
                    }
                    ;
                else {
                    var s = t * Math.sqrt(g * g - 1);
                    v = function(n) {
                        var r = Math.exp(-g * t * n)
                          , a = Math.min(s * n, 300);
                        return i - r * ((m + g * t * e) * Math.sinh(a) + s * e * Math.cosh(a)) / s
                    }
                }
            }
            return y(),
            {
                next: function(e) {
                    var t = v(e);
                    if (h)
                        l.done = e >= p;
                    else {
                        var a = m;
                        if (0 !== e)
                            if (g < 1) {
                                var o = Math.max(0, e - io);
                                a = Pr(t - v(o), e - o)
                            } else
                                a = 0;
                        var s = Math.abs(a) <= r
                          , u = Math.abs(i - t) <= n;
                        l.done = s && u
                    }
                    return l.value = l.done ? i : t,
                    l
                },
                flipTarget: function() {
                    m = -m;
                    var e = [i, o];
                    o = e[0],
                    i = e[1],
                    y()
                }
            }
        }
        lo.needsInterpolation = function(e, t) {
            return "string" === typeof e || "string" === typeof t
        }
        ;
        var so = function(e) {
            return 0
        };
        var uo = ["duration", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "keyframes", "autoplay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate", "type"]
          , co = {
            decay: function(e) {
                var t = e.keyframes
                  , n = void 0 === t ? [0] : t
                  , r = e.velocity
                  , a = void 0 === r ? 0 : r
                  , o = e.power
                  , i = void 0 === o ? .8 : o
                  , l = e.timeConstant
                  , s = void 0 === l ? 350 : l
                  , u = e.restDelta
                  , c = void 0 === u ? .5 : u
                  , f = e.modifyTarget
                  , d = n[0]
                  , p = {
                    done: !1,
                    value: d
                }
                  , h = i * a
                  , v = d + h
                  , m = void 0 === f ? v : f(v);
                return m !== v && (h = m - d),
                {
                    next: function(e) {
                        var t = -h * Math.exp(-e / s);
                        return p.done = !(t > c || t < -c),
                        p.value = p.done ? m : m + t,
                        p
                    },
                    flipTarget: function() {}
                }
            },
            keyframes: Ya,
            tween: Ya,
            spring: lo
        };
        function fo(e, t) {
            return e - t - (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0)
        }
        var po = function(e) {
            var t = function(t) {
                var n = t.delta;
                return e(n)
            };
            return {
                start: function() {
                    return gr.update(t, !0)
                },
                stop: function() {
                    return yr.update(t)
                }
            }
        };
        function ho(e) {
            var t, n, r, a, o = e.duration, i = e.driver, l = void 0 === i ? po : i, s = e.elapsed, u = void 0 === s ? 0 : s, c = e.repeat, f = void 0 === c ? 0 : c, d = e.repeatType, p = void 0 === d ? "loop" : d, h = e.repeatDelay, v = void 0 === h ? 0 : h, m = e.keyframes, g = e.autoplay, y = void 0 === g || g, b = e.onPlay, x = e.onStop, w = e.onComplete, k = e.onRepeat, S = e.onUpdate, E = e.type, C = void 0 === E ? "keyframes" : E, P = en(e, uo), j = u, T = 0, O = o, N = !1, _ = !0, M = co[m.length > 2 ? "keyframes" : C] || Ya, R = m[0], L = m[m.length - 1], A = {
                done: !1,
                value: R
            };
            (null === (n = (t = M).needsInterpolation) || void 0 === n ? void 0 : n.call(t, R, L)) && (a = Ma([0, 100], [R, L], {
                clamp: !1
            }),
            m = [0, 100]);
            var D = M(Ue(Ue({}, P), {}, {
                duration: o,
                keyframes: m
            }));
            function V() {
                T++,
                "reverse" === p ? u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return arguments.length > 3 && void 0 !== arguments[3] && !arguments[3] ? t - (e - t) + n : fo(t + -e, t, n)
                }(u, O, v, _ = T % 2 === 0) : (u = fo(u, O, v),
                "mirror" === p && D.flipTarget()),
                N = !1,
                k && k()
            }
            function I(e) {
                _ || (e = -e),
                u += e,
                N || (A = D.next(Math.max(0, u)),
                a && (A.value = a(A.value)),
                N = _ ? A.done : u <= 0),
                S && S(A.value),
                N && (0 === T && (O = void 0 !== O ? O : u),
                T < f ? function(e, t, n, r) {
                    return r ? e >= t + n : e <= -n
                }(u, O, v, _) && V() : (r && r.stop(),
                w && w()))
            }
            return y && (b && b(),
            (r = l(I)).start()),
            {
                stop: function() {
                    x && x(),
                    r && r.stop()
                },
                set currentTime(e) {
                    u = j,
                    I(e)
                },
                sample: function(e) {
                    u = j;
                    var t = o && "number" === typeof o ? Math.max(.5 * o, 50) : 50
                      , n = 0;
                    for (I(0); n <= e; ) {
                        var r = e - n;
                        I(Math.min(r, t)),
                        n += t
                    }
                    return A
                }
            }
        }
        var vo = function(e) {
            var t = k(e, 4)
              , n = t[0]
              , r = t[1]
              , a = t[2]
              , o = t[3];
            return "cubic-bezier(".concat(n, ", ").concat(r, ", ").concat(a, ", ").concat(o, ")")
        }
          , mo = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: vo([0, .65, .55, 1]),
            circOut: vo([.55, 0, 1, .45]),
            backIn: vo([.31, .01, .66, -.59]),
            backOut: vo([.33, 1.53, .69, .99])
        };
        function go(e) {
            if (e)
                return Array.isArray(e) ? vo(e) : mo[e]
        }
        var yo = {
            waapi: function() {
                return Object.hasOwnProperty.call(Element.prototype, "animate")
            }
        }
          , bo = {}
          , xo = {}
          , wo = function(e) {
            xo[e] = function() {
                return void 0 === bo[e] && (bo[e] = yo[e]()),
                bo[e]
            }
        };
        for (var ko in yo)
            wo(ko);
        var So = ["onUpdate", "onComplete"]
          , Eo = new Set(["opacity"])
          , Co = 10;
        function Po(e, t, n) {
            n.onUpdate;
            var r = n.onComplete
              , a = en(n, So);
            if (!(xo.waapi() && Eo.has(t) && !a.repeatDelay && "mirror" !== a.repeatType && 0 !== a.damping))
                return !1;
            var o, i = a.keyframes, l = a.duration, s = void 0 === l ? 300 : l, u = a.elapsed, c = void 0 === u ? 0 : u, f = a.ease;
            if ("spring" === a.type || !(!(o = a.ease) || Array.isArray(o) || "string" === typeof o && mo[o])) {
                if (a.repeat === 1 / 0)
                    return;
                for (var d = ho(Ue(Ue({}, a), {}, {
                    elapsed: 0
                })), p = {
                    done: !1,
                    value: i[0]
                }, h = [], v = 0; !p.done && v < 2e4; )
                    p = d.sample(v),
                    h.push(p.value),
                    v += Co;
                i = h,
                s = v - Co,
                f = "linear"
            }
            var m = function(e, t, n) {
                var r, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = a.delay, i = void 0 === o ? 0 : o, l = a.duration, s = a.repeat, u = void 0 === s ? 0 : s, c = a.repeatType, f = void 0 === c ? "loop" : c, d = a.ease, p = a.times;
                return e.animate((Fe(r = {}, t, n),
                Fe(r, "offset", p),
                r), {
                    delay: i,
                    duration: l,
                    easing: go(d),
                    fill: "both",
                    iterations: u + 1,
                    direction: "reverse" === f ? "alternate" : "normal"
                })
            }(e.owner.current, t, i, Ue(Ue({}, a), {}, {
                delay: -c,
                duration: s,
                ease: f
            }));
            return m.onfinish = function() {
                e.set(function(e, t) {
                    var n = t.repeat
                      , r = t.repeatType;
                    return e[n && "loop" !== (void 0 === r ? "loop" : r) && n % 2 === 1 ? 0 : e.length - 1]
                }(i, a)),
                gr.update((function() {
                    return m.cancel()
                }
                )),
                r && r()
            }
            ,
            {
                get currentTime() {
                    return m.currentTime || 0
                },
                set currentTime(e) {
                    m.currentTime = e
                },
                stop: function() {
                    var t = m.currentTime;
                    if (t) {
                        var n = ho(Ue(Ue({}, a), {}, {
                            autoplay: !1
                        }));
                        e.setWithVelocity(n.sample(t - Co).value, n.sample(t).value, Co)
                    }
                    gr.update((function() {
                        return m.cancel()
                    }
                    ))
                }
            }
        }
        function jo(e, t) {
            var n = performance.now()
              , r = function r(a) {
                var o = a.timestamp - n;
                o >= t && (yr.read(r),
                e(o - t))
            };
            return gr.read(r, !0),
            function() {
                return yr.read(r)
            }
        }
        function To(e) {
            var t = e.keyframes
              , n = e.elapsed
              , r = e.onUpdate
              , a = e.onComplete
              , o = function() {
                r && r(t[t.length - 1]),
                a && a()
            };
            return n ? {
                stop: jo(o, -n)
            } : o()
        }
        var Oo = function() {
            return {
                type: "spring",
                stiffness: 500,
                damping: 25,
                restSpeed: 10
            }
        }
          , No = function(e) {
            return {
                type: "spring",
                stiffness: 550,
                damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            }
        }
          , _o = function() {
            return {
                type: "keyframes",
                ease: "linear",
                duration: .3
            }
        }
          , Mo = {
            type: "keyframes",
            duration: .8
        }
          , Ro = {
            x: Oo,
            y: Oo,
            z: Oo,
            rotate: Oo,
            rotateX: Oo,
            rotateY: Oo,
            rotateZ: Oo,
            scaleX: No,
            scaleY: No,
            scale: No,
            opacity: _o,
            backgroundColor: _o,
            color: _o,
            default: No
        }
          , Lo = function(e, t) {
            var n = t.keyframes;
            return n.length > 2 ? Mo : (Ro[e] || Ro.default)(n[1])
        }
          , Ao = function(e, t) {
            return "zIndex" !== e && (!("number" !== typeof t && !Array.isArray(t)) || !("string" !== typeof t || !Hr.test(t) || t.startsWith("url(")))
        }
          , Do = ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"];
        function Vo(e) {
            return 0 === e || "string" === typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
        }
        function Io(e) {
            return "number" === typeof e ? 0 : Kr("", e)
        }
        function zo(e, t) {
            return e[t] || e.default || e
        }
        var Fo = function(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return function(a) {
                var o = zo(r, e) || {}
                  , i = o.delay || r.delay || 0
                  , l = r.elapsed
                  , s = void 0 === l ? 0 : l;
                s -= fa(i);
                var u = function(e, t, n, r) {
                    var a = Ao(t, n)
                      , o = void 0 !== r.from ? r.from : e.get();
                    return "none" === o && a && "string" === typeof n ? o = Kr(t, n) : Vo(o) && "string" === typeof n ? o = Io(n) : !Array.isArray(n) && Vo(n) && "string" === typeof o && (n = Io(o)),
                    Array.isArray(n) ? (null === n[0] && (n[0] = o),
                    n) : [o, n]
                }(t, e, n, o)
                  , c = u[0]
                  , f = u[u.length - 1]
                  , d = Ao(e, c)
                  , p = Ao(e, f);
                ua(d === p, "You are trying to animate ".concat(e, ' from "').concat(c, '" to "').concat(f, '". ').concat(c, " is not an animatable value - to enable this animation set ").concat(c, " to a value animatable to ").concat(f, " via the `style` property."));
                var h = Ue(Ue({
                    keyframes: u,
                    velocity: t.getVelocity()
                }, o), {}, {
                    elapsed: s,
                    onUpdate: function(e) {
                        t.set(e),
                        o.onUpdate && o.onUpdate(e)
                    },
                    onComplete: function() {
                        a(),
                        o.onComplete && o.onComplete()
                    }
                });
                if (!d || !p || da.current || !1 === o.type)
                    return To(h);
                if ("inertia" === o.type)
                    return function(e) {
                        var t, n = e.keyframes, r = e.velocity, a = void 0 === r ? 0 : r, o = e.min, i = e.max, l = e.power, s = void 0 === l ? .8 : l, u = e.timeConstant, c = void 0 === u ? 750 : u, f = e.bounceStiffness, d = void 0 === f ? 500 : f, p = e.bounceDamping, h = void 0 === p ? 10 : p, v = e.restDelta, m = void 0 === v ? 1 : v, g = e.modifyTarget, y = e.driver, b = e.onUpdate, x = e.onComplete, w = e.onStop, k = n[0];
                        function S(e) {
                            return void 0 !== o && e < o || void 0 !== i && e > i
                        }
                        function E(e) {
                            return void 0 === o ? i : void 0 === i || Math.abs(o - e) < Math.abs(i - e) ? o : i
                        }
                        function C(e) {
                            null === t || void 0 === t || t.stop(),
                            t = ho(Ue(Ue({
                                keyframes: [0, 1],
                                velocity: 0
                            }, e), {}, {
                                driver: y,
                                onUpdate: function(t) {
                                    var n;
                                    null === b || void 0 === b || b(t),
                                    null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                                },
                                onComplete: x,
                                onStop: w
                            }))
                        }
                        function P(e) {
                            C(Ue({
                                type: "spring",
                                stiffness: d,
                                damping: h,
                                restDelta: m
                            }, e))
                        }
                        if (S(k))
                            P({
                                velocity: a,
                                keyframes: [k, E(k)]
                            });
                        else {
                            var j = s * a + k;
                            "undefined" !== typeof g && (j = g(j));
                            var T, O, N = E(j), _ = N === o ? -1 : 1;
                            C({
                                type: "decay",
                                keyframes: [k, 0],
                                velocity: a,
                                timeConstant: c,
                                power: s,
                                restDelta: m,
                                modifyTarget: g,
                                onUpdate: S(j) ? function(e) {
                                    T = O,
                                    O = e,
                                    a = Pr(e - T, sr.delta),
                                    (1 === _ && e > N || -1 === _ && e < N) && P({
                                        keyframes: [e, N],
                                        velocity: a
                                    })
                                }
                                : void 0
                            })
                        }
                        return {
                            stop: function() {
                                return null === t || void 0 === t ? void 0 : t.stop()
                            }
                        }
                    }(h);
                (function(e) {
                    e.when,
                    e.delay,
                    e.delayChildren,
                    e.staggerChildren,
                    e.staggerDirection,
                    e.repeat,
                    e.repeatType,
                    e.repeatDelay,
                    e.from,
                    e.elapsed;
                    var t = en(e, Do);
                    return !!Object.keys(t).length
                }
                )(o) || (h = Ue(Ue({}, h), Lo(e, h))),
                h.duration && (h.duration = fa(h.duration)),
                h.repeatDelay && (h.repeatDelay = fa(h.repeatDelay));
                var v = t.owner
                  , m = v && v.current;
                if (v && m instanceof HTMLElement && !(null === v || void 0 === v ? void 0 : v.getProps().onUpdate)) {
                    var g = Po(t, e, h);
                    if (g)
                        return g
                }
                return ho(h)
            }
        }
          , Bo = ["transition", "transitionEnd"];
        function Uo(e, t) {
            var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = na(e, t, r.custom), o = (a || {}).transition, i = void 0 === o ? e.getDefaultTransition() || {} : o;
            r.transitionOverride && (i = r.transitionOverride);
            var l = a ? function() {
                return Ho(e, a, r)
            }
            : function() {
                return Promise.resolve()
            }
              , s = (null === (n = e.variantChildren) || void 0 === n ? void 0 : n.size) ? function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , a = i
                  , o = a.delayChildren
                  , l = void 0 === o ? 0 : o
                  , s = a.staggerChildren
                  , u = a.staggerDirection;
                return function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1
                      , o = arguments.length > 5 ? arguments[5] : void 0
                      , i = []
                      , l = (e.variantChildren.size - 1) * r
                      , s = 1 === a ? function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) * r
                    }
                    : function() {
                        return l - (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) * r
                    }
                    ;
                    return Array.from(e.variantChildren).sort(Wo).forEach((function(e, r) {
                        e.notify("AnimationStart", t),
                        i.push(Uo(e, t, Ue(Ue({}, o), {}, {
                            delay: n + s(r)
                        })).then((function() {
                            return e.notify("AnimationComplete", t)
                        }
                        )))
                    }
                    )),
                    Promise.all(i)
                }(e, t, l + n, s, u, r)
            }
            : function() {
                return Promise.resolve()
            }
              , u = i.when;
            if (u) {
                var c = k("beforeChildren" === u ? [l, s] : [s, l], 2)
                  , f = c[0]
                  , d = c[1];
                return f().then(d)
            }
            return Promise.all([l(), s(r.delay)])
        }
        function Ho(e, t) {
            var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = r.delay, o = void 0 === a ? 0 : a, i = r.transitionOverride, l = r.type, s = e.makeTargetAnimatable(t), u = s.transition, c = void 0 === u ? e.getDefaultTransition() : u, f = s.transitionEnd, d = en(s, Bo), p = e.getValue("willChange");
            i && (c = i);
            var h = []
              , v = l && (null === (n = e.animationState) || void 0 === n ? void 0 : n.getState()[l])
              , m = function(t) {
                var n = e.getValue(t)
                  , r = d[t];
                if (!n || void 0 === r || v && function(e, t) {
                    var n = e.protectedKeys
                      , r = e.needsAnimating
                      , a = n.hasOwnProperty(t) && !0 !== r[t];
                    return r[t] = !1,
                    a
                }(v, t))
                    return "continue";
                var a = Ue({
                    delay: o,
                    elapsed: 0
                }, c);
                if (window.HandoffAppearAnimations && !n.hasAnimated) {
                    var i = e.getProps()[sa];
                    i && (a.elapsed = window.HandoffAppearAnimations(i, t, n, gr))
                }
                var l = n.start(Fo(t, n, r, e.shouldReduceMotion && xt.has(t) ? {
                    type: !1
                } : a));
                la(p) && (p.add(t),
                l = l.then((function() {
                    return p.remove(t)
                }
                ))),
                h.push(l)
            };
            for (var g in d)
                m(g);
            return Promise.all(h).then((function() {
                f && oa(e, f)
            }
            ))
        }
        function Wo(e, t) {
            return e.sortNodePosition(t)
        }
        var $o = ["transition", "transitionEnd"]
          , Qo = [Cn.Animate, Cn.InView, Cn.Focus, Cn.Hover, Cn.Tap, Cn.Drag, Cn.Exit]
          , Yo = [].concat(Qo).reverse()
          , qo = Qo.length;
        function Xo(e) {
            return function(t) {
                return Promise.all(t.map((function(t) {
                    var n = t.animation
                      , r = t.options;
                    return function(e, t) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (e.notify("AnimationStart", t),
                        Array.isArray(t)) {
                            var a = t.map((function(t) {
                                return Uo(e, t, r)
                            }
                            ));
                            n = Promise.all(a)
                        } else if ("string" === typeof t)
                            n = Uo(e, t, r);
                        else {
                            var o = "function" === typeof t ? na(e, t, r.custom) : t;
                            n = Ho(e, o, r)
                        }
                        return n.then((function() {
                            return e.notify("AnimationComplete", t)
                        }
                        ))
                    }(e, n, r)
                }
                )))
            }
        }
        function Ko(e) {
            var t = Xo(e)
              , n = function() {
                var e;
                return Fe(e = {}, Cn.Animate, Go(!0)),
                Fe(e, Cn.InView, Go()),
                Fe(e, Cn.Hover, Go()),
                Fe(e, Cn.Tap, Go()),
                Fe(e, Cn.Drag, Go()),
                Fe(e, Cn.Focus, Go()),
                Fe(e, Cn.Exit, Go()),
                e
            }()
              , r = !0
              , a = function(t, n) {
                var r = na(e, n);
                if (r) {
                    r.transition;
                    var a = r.transitionEnd
                      , o = en(r, $o);
                    t = Ue(Ue(Ue({}, t), o), a)
                }
                return t
            };
            function o(o, i) {
                for (var l = e.getProps(), u = e.getVariantContext(!0) || {}, c = [], f = new Set, d = {}, p = 1 / 0, h = function() {
                    var t = Yo[v]
                      , h = n[t]
                      , m = void 0 !== l[t] ? l[t] : u[t]
                      , g = Ge(m)
                      , y = t === i ? h.isActive : null;
                    !1 === y && (p = v);
                    var b = m === u[t] && m !== l[t] && g;
                    if (b && r && e.manuallyAnimateOnMount && (b = !1),
                    h.protectedKeys = Ue({}, d),
                    !h.isActive && null === y || !m && !h.prevProp || Ze(m) || "boolean" === typeof m)
                        return "continue";
                    var x = function(e, t) {
                        if ("string" === typeof t)
                            return t !== e;
                        if (Array.isArray(t))
                            return !or(t, e);
                        return !1
                    }(h.prevProp, m)
                      , w = x || t === i && h.isActive && !b && g || v > p && g
                      , k = Array.isArray(m) ? m : [m]
                      , S = k.reduce(a, {});
                    !1 === y && (S = {});
                    var E = h.prevResolvedValues
                      , C = void 0 === E ? {} : E
                      , P = Ue(Ue({}, C), S)
                      , j = function(e) {
                        w = !0,
                        f.delete(e),
                        h.needsAnimating[e] = !0
                    };
                    for (var T in P) {
                        var O = S[T]
                          , N = C[T];
                        d.hasOwnProperty(T) || (O !== N ? yn(O) && yn(N) ? !or(O, N) || x ? j(T) : h.protectedKeys[T] = !0 : void 0 !== O ? j(T) : f.add(T) : void 0 !== O && f.has(T) ? j(T) : h.protectedKeys[T] = !0)
                    }
                    h.prevProp = m,
                    h.prevResolvedValues = S,
                    h.isActive && (d = Ue(Ue({}, d), S)),
                    r && e.blockInitialAnimation && (w = !1),
                    w && !b && c.push.apply(c, s(k.map((function(e) {
                        return {
                            animation: e,
                            options: Ue({
                                type: t
                            }, o)
                        }
                    }
                    ))))
                }, v = 0; v < qo; v++)
                    h();
                if (f.size) {
                    var m = {};
                    f.forEach((function(t) {
                        var n = e.getBaseTarget(t);
                        void 0 !== n && (m[t] = n)
                    }
                    )),
                    c.push({
                        animation: m
                    })
                }
                var g = Boolean(c.length);
                return r && !1 === l.initial && !e.manuallyAnimateOnMount && (g = !1),
                r = !1,
                g ? t(c) : Promise.resolve()
            }
            return {
                animateChanges: o,
                setActive: function(t, r, a) {
                    var i;
                    if (n[t].isActive === r)
                        return Promise.resolve();
                    null === (i = e.variantChildren) || void 0 === i || i.forEach((function(e) {
                        var n;
                        return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                    }
                    )),
                    n[t].isActive = r;
                    var l = o(a, t);
                    for (var s in n)
                        n[s].protectedKeys = {};
                    return l
                },
                setAnimateFunction: function(n) {
                    t = n(e)
                },
                getState: function() {
                    return n
                }
            }
        }
        function Go() {
            return {
                isActive: arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        var Zo = {
            animation: nr((function(e) {
                var n = e.visualElement
                  , r = e.animate;
                n.animationState || (n.animationState = Ko(n)),
                Ze(r) && (0,
                t.useEffect)((function() {
                    return r.subscribe(n)
                }
                ), [r])
            }
            )),
            exit: nr((function(e) {
                var n = e.custom
                  , r = e.visualElement
                  , a = k(ar(), 2)
                  , o = a[0]
                  , i = a[1]
                  , l = (0,
                t.useContext)($e);
                (0,
                t.useEffect)((function() {
                    r.isPresent = o;
                    var e = r.animationState && r.animationState.setActive(Cn.Exit, !o, {
                        custom: l && l.custom || n
                    });
                    e && !o && e.then(i)
                }
                ), [o])
            }
            ))
        }
          , Jo = function(e, t) {
            return Math.abs(e - t)
        };
        var ei = function() {
            function e(t, n) {
                var r = this
                  , a = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).transformPagePoint;
                if (u(this, e),
                this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = function() {
                    if (r.lastMoveEvent && r.lastMoveEventInfo) {
                        var e = ri(r.lastMoveEventInfo, r.history)
                          , t = null !== r.startEvent
                          , n = function(e, t) {
                            var n = Jo(e.x, t.x)
                              , r = Jo(e.y, t.y);
                            return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2))
                        }(e.offset, {
                            x: 0,
                            y: 0
                        }) >= 3;
                        if (t || n) {
                            var a = e.point
                              , o = sr.timestamp;
                            r.history.push(Ue(Ue({}, a), {}, {
                                timestamp: o
                            }));
                            var i = r.handlers
                              , l = i.onStart
                              , s = i.onMove;
                            t || (l && l(r.lastMoveEvent, e),
                            r.startEvent = r.lastMoveEvent),
                            s && s(r.lastMoveEvent, e)
                        }
                    }
                }
                ,
                this.handlePointerMove = function(e, t) {
                    r.lastMoveEvent = e,
                    r.lastMoveEventInfo = ti(t, r.transformPagePoint),
                    gr.update(r.updatePoint, !0)
                }
                ,
                this.handlePointerUp = function(e, t) {
                    if (r.end(),
                    r.lastMoveEvent && r.lastMoveEventInfo) {
                        var n = r.handlers
                          , a = n.onEnd
                          , o = n.onSessionEnd
                          , i = ri("pointercancel" === e.type ? r.lastMoveEventInfo : ti(t, r.transformPagePoint), r.history);
                        r.startEvent && a && a(e, i),
                        o && o(e, i)
                    }
                }
                ,
                Nn(t)) {
                    this.handlers = n,
                    this.transformPagePoint = a;
                    var o = ti(_n(t), this.transformPagePoint)
                      , i = o.point
                      , l = sr.timestamp;
                    this.history = [Ue(Ue({}, i), {}, {
                        timestamp: l
                    })];
                    var s = n.onSessionStart;
                    s && s(t, ri(o, this.history)),
                    this.removeListeners = Wn(Rn(window, "pointermove", this.handlePointerMove), Rn(window, "pointerup", this.handlePointerUp), Rn(window, "pointercancel", this.handlePointerUp))
                }
            }
            return p(e, [{
                key: "updateHandlers",
                value: function(e) {
                    this.handlers = e
                }
            }, {
                key: "end",
                value: function() {
                    this.removeListeners && this.removeListeners(),
                    yr.update(this.updatePoint)
                }
            }]),
            e
        }();
        function ti(e, t) {
            return t ? {
                point: t(e.point)
            } : e
        }
        function ni(e, t) {
            return {
                x: e.x - t.x,
                y: e.y - t.y
            }
        }
        function ri(e, t) {
            var n = e.point;
            return {
                point: n,
                delta: ni(n, oi(t)),
                offset: ni(n, ai(t)),
                velocity: ii(t, .1)
            }
        }
        function ai(e) {
            return e[0]
        }
        function oi(e) {
            return e[e.length - 1]
        }
        function ii(e, t) {
            if (e.length < 2)
                return {
                    x: 0,
                    y: 0
                };
            for (var n = e.length - 1, r = null, a = oi(e); n >= 0 && (r = e[n],
            !(a.timestamp - r.timestamp > fa(t))); )
                n--;
            if (!r)
                return {
                    x: 0,
                    y: 0
                };
            var o = (a.timestamp - r.timestamp) / 1e3;
            if (0 === o)
                return {
                    x: 0,
                    y: 0
                };
            var i = {
                x: (a.x - r.x) / o,
                y: (a.y - r.y) / o
            };
            return i.x === 1 / 0 && (i.x = 0),
            i.y === 1 / 0 && (i.y = 0),
            i
        }
        function li(e) {
            return e.max - e.min
        }
        function si(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .01;
            return Math.abs(e - t) <= n
        }
        function ui(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
            e.origin = r,
            e.originPoint = ya(t.min, t.max, e.origin),
            e.scale = li(n) / li(t),
            (si(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
            e.translate = ya(n.min, n.max, e.origin) - e.originPoint,
            (si(e.translate) || isNaN(e.translate)) && (e.translate = 0)
        }
        function ci(e, t, n, r) {
            ui(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
            ui(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY)
        }
        function fi(e, t, n) {
            e.min = n.min + t.min,
            e.max = e.min + li(t)
        }
        function di(e, t, n) {
            e.min = t.min - n.min,
            e.max = e.min + li(t)
        }
        function pi(e, t, n) {
            di(e.x, t.x, n.x),
            di(e.y, t.y, n.y)
        }
        function hi(e, t, n) {
            return {
                min: void 0 !== t ? e.min + t : void 0,
                max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
            }
        }
        function vi(e, t) {
            var n = t.min - e.min
              , r = t.max - e.max;
            if (t.max - t.min < e.max - e.min) {
                var a = [r, n];
                n = a[0],
                r = a[1]
            }
            return {
                min: n,
                max: r
            }
        }
        var mi = .35;
        function gi(e, t, n) {
            return {
                min: yi(e, t),
                max: yi(e, n)
            }
        }
        function yi(e, t) {
            return "number" === typeof e ? e : e[t] || 0
        }
        var bi = function() {
            return {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            }
        }
          , xi = function() {
            return {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            }
        };
        function wi(e) {
            return [e("x"), e("y")]
        }
        function ki(e) {
            var t = e.top;
            return {
                x: {
                    min: e.left,
                    max: e.right
                },
                y: {
                    min: t,
                    max: e.bottom
                }
            }
        }
        function Si(e) {
            return void 0 === e || 1 === e
        }
        function Ei(e) {
            var t = e.scale
              , n = e.scaleX
              , r = e.scaleY;
            return !Si(t) || !Si(n) || !Si(r)
        }
        function Ci(e) {
            return Ei(e) || Pi(e) || e.z || e.rotate || e.rotateX || e.rotateY
        }
        function Pi(e) {
            return ji(e.x) || ji(e.y)
        }
        function ji(e) {
            return e && "0%" !== e
        }
        function Ti(e, t, n) {
            return n + t * (e - n)
        }
        function Oi(e, t, n, r, a) {
            return void 0 !== a && (e = Ti(e, a, r)),
            Ti(e, n, r) + t
        }
        function Ni(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
              , r = arguments.length > 3 ? arguments[3] : void 0
              , a = arguments.length > 4 ? arguments[4] : void 0;
            e.min = Oi(e.min, t, n, r, a),
            e.max = Oi(e.max, t, n, r, a)
        }
        function _i(e, t) {
            var n = t.x
              , r = t.y;
            Ni(e.x, n.translate, n.scale, n.originPoint),
            Ni(e.y, r.translate, r.scale, r.originPoint)
        }
        function Mi(e) {
            return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
        }
        function Ri(e, t) {
            e.min = e.min + t,
            e.max = e.max + t
        }
        function Li(e, t, n) {
            var r = k(n, 3)
              , a = r[0]
              , o = r[1]
              , i = r[2]
              , l = void 0 !== t[i] ? t[i] : .5
              , s = ya(e.min, e.max, l);
            Ni(e, t[a], t[o], s, t.scale)
        }
        var Ai = ["x", "scaleX", "originX"]
          , Di = ["y", "scaleY", "originY"];
        function Vi(e, t) {
            Li(e.x, t, Ai),
            Li(e.y, t, Di)
        }
        function Ii(e, t) {
            return ki(function(e, t) {
                if (!t)
                    return e;
                var n = t({
                    x: e.left,
                    y: e.top
                })
                  , r = t({
                    x: e.right,
                    y: e.bottom
                });
                return {
                    top: n.y,
                    left: n.x,
                    bottom: r.y,
                    right: r.x
                }
            }(e.getBoundingClientRect(), t))
        }
        var zi = new WeakMap
          , Fi = function() {
            function e(t) {
                u(this, e),
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = xi(),
                this.visualElement = t
            }
            return p(e, [{
                key: "start",
                value: function(e) {
                    var t = this
                      , n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).snapToCursor
                      , r = void 0 !== n && n;
                    if (!1 !== this.visualElement.isPresent) {
                        this.panSession = new ei(e,{
                            onSessionStart: function(e) {
                                t.stopAnimation(),
                                r && t.snapToCursor(_n(e, "page").point)
                            },
                            onStart: function(e, n) {
                                var r, a = t.getProps(), o = a.drag, i = a.dragPropagation, l = a.onDragStart;
                                (!o || i || (t.openGlobalLock && t.openGlobalLock(),
                                t.openGlobalLock = In(o),
                                t.openGlobalLock)) && (t.isDragging = !0,
                                t.currentDirection = null,
                                t.resolveConstraints(),
                                t.visualElement.projection && (t.visualElement.projection.isAnimationBlocked = !0,
                                t.visualElement.projection.target = void 0),
                                wi((function(e) {
                                    var n, r, a = t.getAxisMotionValue(e).get() || 0;
                                    if (It.test(a)) {
                                        var o = null === (r = null === (n = t.visualElement.projection) || void 0 === n ? void 0 : n.layout) || void 0 === r ? void 0 : r.layoutBox[e];
                                        if (o)
                                            a = li(o) * (parseFloat(a) / 100)
                                    }
                                    t.originPoint[e] = a
                                }
                                )),
                                null === l || void 0 === l || l(e, n),
                                null === (r = t.visualElement.animationState) || void 0 === r || r.setActive(Cn.Drag, !0))
                            },
                            onMove: function(e, n) {
                                var r = t.getProps()
                                  , a = r.dragPropagation
                                  , o = r.dragDirectionLock
                                  , i = r.onDirectionLock
                                  , l = r.onDrag;
                                if (a || t.openGlobalLock) {
                                    var s = n.offset;
                                    if (o && null === t.currentDirection)
                                        return t.currentDirection = function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10
                                              , n = null;
                                            Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x");
                                            return n
                                        }(s),
                                        void (null !== t.currentDirection && (null === i || void 0 === i || i(t.currentDirection)));
                                    t.updateAxis("x", n.point, s),
                                    t.updateAxis("y", n.point, s),
                                    t.visualElement.render(),
                                    null === l || void 0 === l || l(e, n)
                                }
                            },
                            onSessionEnd: function(e, n) {
                                return t.stop(e, n)
                            }
                        },{
                            transformPagePoint: this.visualElement.getTransformPagePoint()
                        })
                    }
                }
            }, {
                key: "stop",
                value: function(e, t) {
                    var n = this.isDragging;
                    if (this.cancel(),
                    n) {
                        var r = t.velocity;
                        this.startAnimation(r);
                        var a = this.getProps().onDragEnd;
                        null === a || void 0 === a || a(e, t)
                    }
                }
            }, {
                key: "cancel",
                value: function() {
                    var e, t;
                    this.isDragging = !1,
                    this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
                    null === (e = this.panSession) || void 0 === e || e.end(),
                    this.panSession = void 0,
                    !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(),
                    this.openGlobalLock = null),
                    null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(Cn.Drag, !1)
                }
            }, {
                key: "updateAxis",
                value: function(e, t, n) {
                    var r = this.getProps().drag;
                    if (n && Bi(e, r, this.currentDirection)) {
                        var a = this.getAxisMotionValue(e)
                          , o = this.originPoint[e] + n[e];
                        this.constraints && this.constraints[e] && (o = function(e, t, n) {
                            var r = t.min
                              , a = t.max;
                            return void 0 !== r && e < r ? e = n ? ya(r, e, n.min) : Math.max(e, r) : void 0 !== a && e > a && (e = n ? ya(a, e, n.max) : Math.min(e, a)),
                            e
                        }(o, this.constraints[e], this.elastic[e])),
                        a.set(o)
                    }
                }
            }, {
                key: "resolveConstraints",
                value: function() {
                    var e = this
                      , t = this.getProps()
                      , n = t.dragConstraints
                      , r = t.dragElastic
                      , a = (this.visualElement.projection || {}).layout
                      , o = this.constraints;
                    n && Ke(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !a) && function(e, t) {
                        var n = t.top
                          , r = t.left
                          , a = t.bottom
                          , o = t.right;
                        return {
                            x: hi(e.x, r, o),
                            y: hi(e.y, n, a)
                        }
                    }(a.layoutBox, n),
                    this.elastic = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mi;
                        return !1 === e ? e = 0 : !0 === e && (e = mi),
                        {
                            x: gi(e, "left", "right"),
                            y: gi(e, "top", "bottom")
                        }
                    }(r),
                    o !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && wi((function(t) {
                        e.getAxisMotionValue(t) && (e.constraints[t] = function(e, t) {
                            var n = {};
                            return void 0 !== t.min && (n.min = t.min - e.min),
                            void 0 !== t.max && (n.max = t.max - e.min),
                            n
                        }(a.layoutBox[t], e.constraints[t]))
                    }
                    ))
                }
            }, {
                key: "resolveRefConstraints",
                value: function() {
                    var e = this.getProps()
                      , t = e.dragConstraints
                      , n = e.onMeasureDragConstraints;
                    if (!t || !Ke(t))
                        return !1;
                    var r = t.current;
                    ca(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    var a = this.visualElement.projection;
                    if (!a || !a.layout)
                        return !1;
                    var o = function(e, t, n) {
                        var r = Ii(e, n)
                          , a = t.scroll;
                        return a && (Ri(r.x, a.offset.x),
                        Ri(r.y, a.offset.y)),
                        r
                    }(r, a.root, this.visualElement.getTransformPagePoint())
                      , i = function(e, t) {
                        return {
                            x: vi(e.x, t.x),
                            y: vi(e.y, t.y)
                        }
                    }(a.layout.layoutBox, o);
                    if (n) {
                        var l = n(function(e) {
                            var t = e.x
                              , n = e.y;
                            return {
                                top: n.min,
                                right: t.max,
                                bottom: n.max,
                                left: t.min
                            }
                        }(i));
                        this.hasMutatedConstraints = !!l,
                        l && (i = ki(l))
                    }
                    return i
                }
            }, {
                key: "startAnimation",
                value: function(e) {
                    var t = this
                      , n = this.getProps()
                      , r = n.drag
                      , a = n.dragMomentum
                      , o = n.dragElastic
                      , i = n.dragTransition
                      , l = n.dragSnapToOrigin
                      , s = n.onDragTransitionEnd
                      , u = this.constraints || {}
                      , c = wi((function(n) {
                        if (Bi(n, r, t.currentDirection)) {
                            var s = (null === u || void 0 === u ? void 0 : u[n]) || {};
                            l && (s = {
                                min: 0,
                                max: 0
                            });
                            var c = o ? 200 : 1e6
                              , f = o ? 40 : 1e7
                              , d = Ue(Ue({
                                type: "inertia",
                                velocity: a ? e[n] : 0,
                                bounceStiffness: c,
                                bounceDamping: f,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10
                            }, i), s);
                            return t.startAxisValueAnimation(n, d)
                        }
                    }
                    ));
                    return Promise.all(c).then(s)
                }
            }, {
                key: "startAxisValueAnimation",
                value: function(e, t) {
                    var n = this.getAxisMotionValue(e);
                    return n.start(Fo(e, n, 0, t))
                }
            }, {
                key: "stopAnimation",
                value: function() {
                    var e = this;
                    wi((function(t) {
                        return e.getAxisMotionValue(t).stop()
                    }
                    ))
                }
            }, {
                key: "getAxisMotionValue",
                value: function(e) {
                    var t, n = "_drag" + e.toUpperCase(), r = this.visualElement.getProps()[n];
                    return r || this.visualElement.getValue(e, (null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) || 0)
                }
            }, {
                key: "snapToCursor",
                value: function(e) {
                    var t = this;
                    wi((function(n) {
                        if (Bi(n, t.getProps().drag, t.currentDirection)) {
                            var r = t.visualElement.projection
                              , a = t.getAxisMotionValue(n);
                            if (r && r.layout) {
                                var o = r.layout.layoutBox[n]
                                  , i = o.min
                                  , l = o.max;
                                a.set(e[n] - ya(i, l, .5))
                            }
                        }
                    }
                    ))
                }
            }, {
                key: "scalePositionWithinConstraints",
                value: function() {
                    var e, t = this;
                    if (this.visualElement.current) {
                        var n = this.getProps()
                          , r = n.drag
                          , a = n.dragConstraints
                          , o = this.visualElement.projection;
                        if (Ke(a) && o && this.constraints) {
                            this.stopAnimation();
                            var i = {
                                x: 0,
                                y: 0
                            };
                            wi((function(e) {
                                var n = t.getAxisMotionValue(e);
                                if (n) {
                                    var r = n.get();
                                    i[e] = function(e, t) {
                                        var n = .5
                                          , r = li(e)
                                          , a = li(t);
                                        return a > r ? n = Oa(t.min, t.max - r, e.min) : r > a && (n = Oa(e.min, e.max - a, t.min)),
                                        jt(0, 1, n)
                                    }({
                                        min: r,
                                        max: r
                                    }, t.constraints[e])
                                }
                            }
                            ));
                            var l = this.visualElement.getProps().transformTemplate;
                            this.visualElement.current.style.transform = l ? l({}, "") : "none",
                            null === (e = o.root) || void 0 === e || e.updateScroll(),
                            o.updateLayout(),
                            this.resolveConstraints(),
                            wi((function(e) {
                                if (Bi(e, r, null)) {
                                    var n = t.getAxisMotionValue(e)
                                      , a = t.constraints[e]
                                      , o = a.min
                                      , l = a.max;
                                    n.set(ya(o, l, i[e]))
                                }
                            }
                            ))
                        }
                    }
                }
            }, {
                key: "addListeners",
                value: function() {
                    var e, t = this;
                    if (this.visualElement.current) {
                        zi.set(this.visualElement, this);
                        var n = Rn(this.visualElement.current, "pointerdown", (function(e) {
                            var n = t.getProps()
                              , r = n.drag
                              , a = n.dragListener;
                            r && (void 0 === a || a) && t.start(e)
                        }
                        ))
                          , r = function() {
                            Ke(t.getProps().dragConstraints) && (t.constraints = t.resolveRefConstraints())
                        }
                          , a = this.visualElement.projection
                          , o = a.addEventListener("measure", r);
                        a && !a.layout && (null === (e = a.root) || void 0 === e || e.updateScroll(),
                        a.updateLayout()),
                        r();
                        var i = Tn(window, "resize", (function() {
                            return t.scalePositionWithinConstraints()
                        }
                        ))
                          , l = a.addEventListener("didUpdate", (function(e) {
                            var n = e.delta
                              , r = e.hasLayoutChanged;
                            t.isDragging && r && (wi((function(e) {
                                var r = t.getAxisMotionValue(e);
                                r && (t.originPoint[e] += n[e].translate,
                                r.set(r.get() + n[e].translate))
                            }
                            )),
                            t.visualElement.render())
                        }
                        ));
                        return function() {
                            i(),
                            n(),
                            o(),
                            null === l || void 0 === l || l()
                        }
                    }
                }
            }, {
                key: "getProps",
                value: function() {
                    var e = this.visualElement.getProps()
                      , t = e.drag
                      , n = void 0 !== t && t
                      , r = e.dragDirectionLock
                      , a = void 0 !== r && r
                      , o = e.dragPropagation
                      , i = void 0 !== o && o
                      , l = e.dragConstraints
                      , s = void 0 !== l && l
                      , u = e.dragElastic
                      , c = void 0 === u ? mi : u
                      , f = e.dragMomentum
                      , d = void 0 === f || f;
                    return Ue(Ue({}, e), {}, {
                        drag: n,
                        dragDirectionLock: a,
                        dragPropagation: i,
                        dragConstraints: s,
                        dragElastic: c,
                        dragMomentum: d
                    })
                }
            }]),
            e
        }();
        function Bi(e, t, n) {
            return (!0 === t || t === e) && (null === n || n === e)
        }
        var Ui = {
            pan: nr((function(e) {
                var n = e.onPan
                  , r = e.onPanStart
                  , a = e.onPanEnd
                  , o = e.onPanSessionStart
                  , i = e.visualElement
                  , l = n || r || a || o
                  , s = (0,
                t.useRef)(null)
                  , u = (0,
                t.useContext)(He).transformPagePoint
                  , c = {
                    onSessionStart: o,
                    onStart: r,
                    onMove: n,
                    onEnd: function(e, t) {
                        s.current = null,
                        a && a(e, t)
                    }
                };
                (0,
                t.useEffect)((function() {
                    null !== s.current && s.current.updateHandlers(c)
                }
                )),
                Ln(i, "pointerdown", l && function(e) {
                    s.current = new ei(e,c,{
                        transformPagePoint: u
                    })
                }
                ),
                Un((function() {
                    return s.current && s.current.end()
                }
                ))
            }
            )),
            drag: nr((function(e) {
                var n = e.dragControls
                  , r = e.visualElement
                  , a = it((function() {
                    return new Fi(r)
                }
                ));
                (0,
                t.useEffect)((function() {
                    return n && n.subscribe(a)
                }
                ), [a, n]),
                (0,
                t.useEffect)((function() {
                    return a.addListeners()
                }
                ), [a])
            }
            ))
        };
        function Hi(e) {
            return "string" === typeof e && e.startsWith("var(--")
        }
        var Wi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        var $i = 4;
        function Qi(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            ca(n <= $i, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'));
            var r = function(e) {
                var t = Wi.exec(e);
                if (!t)
                    return [, ];
                var n = k(t, 3);
                return [n[1], n[2]]
            }(e)
              , a = k(r, 2)
              , o = a[0]
              , i = a[1];
            if (o) {
                var l = window.getComputedStyle(t).getPropertyValue(o);
                return l ? l.trim() : Hi(i) ? Qi(i, t, n + 1) : i
            }
        }
        function Yi(e, t, n) {
            var r = Object.assign({}, (function(e) {
                if (null == e)
                    throw new TypeError("Cannot destructure " + e)
            }(t),
            t))
              , a = e.current;
            if (!(a instanceof Element))
                return {
                    target: r,
                    transitionEnd: n
                };
            for (var o in n && (n = Ue({}, n)),
            e.values.forEach((function(e) {
                var t = e.get();
                if (Hi(t)) {
                    var n = Qi(t, a);
                    n && e.set(n)
                }
            }
            )),
            r) {
                var i = r[o];
                if (Hi(i)) {
                    var l = Qi(i, a);
                    l && (r[o] = l,
                    n && void 0 === n[o] && (n[o] = i))
                }
            }
            return {
                target: r,
                transitionEnd: n
            }
        }
        var qi, Xi = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]), Ki = function(e) {
            return Xi.has(e)
        }, Gi = function(e) {
            return Object.keys(e).some(Ki)
        }, Zi = function(e) {
            return e === Tt || e === zt
        };
        !function(e) {
            e.width = "width",
            e.height = "height",
            e.left = "left",
            e.right = "right",
            e.top = "top",
            e.bottom = "bottom"
        }(qi || (qi = {}));
        var Ji = function(e, t) {
            return parseFloat(e.split(", ")[t])
        }
          , el = function(e, t) {
            return function(n, r) {
                var a = r.transform;
                if ("none" === a || !a)
                    return 0;
                var o = a.match(/^matrix3d\((.+)\)$/);
                if (o)
                    return Ji(o[1], t);
                var i = a.match(/^matrix\((.+)\)$/);
                return i ? Ji(i[1], e) : 0
            }
        }
          , tl = new Set(["x", "y", "z"])
          , nl = bt.filter((function(e) {
            return !tl.has(e)
        }
        ));
        var rl = {
            width: function(e, t) {
                var n = e.x
                  , r = t.paddingLeft
                  , a = void 0 === r ? "0" : r
                  , o = t.paddingRight
                  , i = void 0 === o ? "0" : o;
                return n.max - n.min - parseFloat(a) - parseFloat(i)
            },
            height: function(e, t) {
                var n = e.y
                  , r = t.paddingTop
                  , a = void 0 === r ? "0" : r
                  , o = t.paddingBottom
                  , i = void 0 === o ? "0" : o;
                return n.max - n.min - parseFloat(a) - parseFloat(i)
            },
            top: function(e, t) {
                var n = t.top;
                return parseFloat(n)
            },
            left: function(e, t) {
                var n = t.left;
                return parseFloat(n)
            },
            bottom: function(e, t) {
                var n = e.y
                  , r = t.top;
                return parseFloat(r) + (n.max - n.min)
            },
            right: function(e, t) {
                var n = e.x
                  , r = t.left;
                return parseFloat(r) + (n.max - n.min)
            },
            x: el(4, 13),
            y: el(5, 14)
        }
          , al = function(e, t, n) {
            var r = t.measureViewportBox()
              , a = t.current
              , o = getComputedStyle(a)
              , i = o.display
              , l = {};
            "none" === i && t.setStaticValue("display", e.display || "block"),
            n.forEach((function(e) {
                l[e] = rl[e](r, o)
            }
            )),
            t.render();
            var s = t.measureViewportBox();
            return n.forEach((function(n) {
                var r = t.getValue(n);
                r && r.jump(l[n]),
                e[n] = rl[n](s, o)
            }
            )),
            e
        }
          , ol = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            t = Ue({}, t),
            r = Ue({}, r);
            var a = Object.keys(t).filter(Ki)
              , o = []
              , i = !1
              , l = [];
            if (a.forEach((function(a) {
                var s = e.getValue(a);
                if (e.hasValue(a)) {
                    var u, c = n[a], f = Jr(c), d = t[a];
                    if (yn(d)) {
                        var p = d.length
                          , h = null === d[0] ? 1 : 0;
                        c = d[h],
                        f = Jr(c);
                        for (var v = h; v < p; v++)
                            u ? ca(Jr(d[v]) === u, "All keyframes must be of the same type") : (u = Jr(d[v]),
                            ca(u === f || Zi(f) && Zi(u), "Keyframes must be of the same dimension as the current value"))
                    } else
                        u = Jr(d);
                    if (f !== u)
                        if (Zi(f) && Zi(u)) {
                            var m = s.get();
                            "string" === typeof m && s.set(parseFloat(m)),
                            "string" === typeof d ? t[a] = parseFloat(d) : Array.isArray(d) && u === zt && (t[a] = d.map(parseFloat))
                        } else
                            (null === f || void 0 === f ? void 0 : f.transform) && (null === u || void 0 === u ? void 0 : u.transform) && (0 === c || 0 === d) ? 0 === c ? s.set(u.transform(c)) : t[a] = f.transform(d) : (i || (o = function(e) {
                                var t = [];
                                return nl.forEach((function(n) {
                                    var r = e.getValue(n);
                                    void 0 !== r && (t.push([n, r.get()]),
                                    r.set(n.startsWith("scale") ? 1 : 0))
                                }
                                )),
                                t.length && e.render(),
                                t
                            }(e),
                            i = !0),
                            l.push(a),
                            r[a] = void 0 !== r[a] ? r[a] : t[a],
                            s.jump(d))
                }
            }
            )),
            l.length) {
                var s = l.indexOf("height") >= 0 ? window.pageYOffset : null
                  , u = al(t, e, l);
                return o.length && o.forEach((function(t) {
                    var n = k(t, 2)
                      , r = n[0]
                      , a = n[1];
                    e.getValue(r).set(a)
                }
                )),
                e.render(),
                Qe && null !== s && window.scrollTo({
                    top: s
                }),
                {
                    target: u,
                    transitionEnd: r
                }
            }
            return {
                target: t,
                transitionEnd: r
            }
        };
        var il = function(e, t, n, r) {
            var a = Yi(e, t, r);
            return function(e, t, n, r) {
                return Gi(t) ? ol(e, t, n, r) : {
                    target: t,
                    transitionEnd: r
                }
            }(e, t = a.target, n, r = a.transitionEnd)
        }
          , ll = {
            current: null
        }
          , sl = {
            current: !1
        };
        var ul = ["willChange"]
          , cl = ["children"]
          , fl = Object.keys(ot)
          , dl = fl.length
          , pl = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
          , hl = function() {
            function e(t) {
                var n = this
                  , r = t.parent
                  , a = t.props
                  , o = t.reducedMotionConfig
                  , i = t.visualState
                  , l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                u(this, e),
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.isPresent = !0,
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = function() {
                    return n.notify("Update", n.latestValues)
                }
                ,
                this.render = function() {
                    n.current && (n.triggerBuild(),
                    n.renderInstance(n.current, n.renderState, n.props.style, n.projection))
                }
                ,
                this.scheduleRender = function() {
                    return gr.render(n.render, !1, !0)
                }
                ;
                var s = i.latestValues
                  , c = i.renderState;
                this.latestValues = s,
                this.baseTarget = Ue({}, s),
                this.initialValues = a.initial ? Ue({}, s) : {},
                this.renderState = c,
                this.parent = r,
                this.props = a,
                this.depth = r ? r.depth + 1 : 0,
                this.reducedMotionConfig = o,
                this.options = l,
                this.isControllingVariants = et(a),
                this.isVariantNode = tt(a),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = Boolean(r && r.current);
                var f = this.scrapeMotionValuesFromProps(a, {})
                  , d = f.willChange
                  , p = en(f, ul);
                for (var h in p) {
                    var v = p[h];
                    void 0 !== s[h] && kt(v) && (v.set(s[h], !1),
                    la(d) && d.add(h))
                }
            }
            return p(e, [{
                key: "scrapeMotionValuesFromProps",
                value: function(e, t) {
                    return {}
                }
            }, {
                key: "mount",
                value: function(e) {
                    var t, n = this;
                    this.current = e,
                    this.projection && this.projection.mount(e),
                    this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (t = this.parent) || void 0 === t ? void 0 : t.addVariantChild(this)),
                    this.values.forEach((function(e, t) {
                        return n.bindToMotionValue(t, e)
                    }
                    )),
                    sl.current || function() {
                        if (sl.current = !0,
                        Qe)
                            if (window.matchMedia) {
                                var e = window.matchMedia("(prefers-reduced-motion)")
                                  , t = function() {
                                    return ll.current = e.matches
                                };
                                e.addListener(t),
                                t()
                            } else
                                ll.current = !1
                    }(),
                    this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ll.current),
                    this.parent && this.parent.children.add(this),
                    this.setProps(this.props)
                }
            }, {
                key: "unmount",
                value: function() {
                    var e, t, n;
                    for (var r in null === (e = this.projection) || void 0 === e || e.unmount(),
                    yr.update(this.notifyUpdate),
                    yr.render(this.render),
                    this.valueSubscriptions.forEach((function(e) {
                        return e()
                    }
                    )),
                    null === (t = this.removeFromVariantTree) || void 0 === t || t.call(this),
                    null === (n = this.parent) || void 0 === n || n.children.delete(this),
                    this.events)
                        this.events[r].clear();
                    this.current = null
                }
            }, {
                key: "bindToMotionValue",
                value: function(e, t) {
                    var n = this
                      , r = xt.has(e)
                      , a = t.on("change", (function(t) {
                        n.latestValues[e] = t,
                        n.props.onUpdate && gr.update(n.notifyUpdate, !1, !0),
                        r && n.projection && (n.projection.isTransformDirty = !0)
                    }
                    ))
                      , o = t.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(e, (function() {
                        a(),
                        o()
                    }
                    ))
                }
            }, {
                key: "sortNodePosition",
                value: function(e) {
                    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
                }
            }, {
                key: "loadFeatures",
                value: function(e, n, r, a, o, i) {
                    for (var l = this, s = (e.children,
                    en(e, cl)), u = [], c = 0; c < dl; c++) {
                        var f = fl[c]
                          , d = ot[f]
                          , p = d.isEnabled
                          , h = d.Component;
                        p(s) && h && u.push((0,
                        t.createElement)(h, Ue(Ue({
                            key: f
                        }, s), {}, {
                            visualElement: this
                        })))
                    }
                    if (!this.projection && o) {
                        this.projection = new o(a,this.latestValues,this.parent && this.parent.projection);
                        var v = s.layoutId
                          , m = s.layout
                          , g = s.drag
                          , y = s.dragConstraints
                          , b = s.layoutScroll
                          , x = s.layoutRoot;
                        this.projection.setOptions({
                            layoutId: v,
                            layout: m,
                            alwaysMeasureLayout: Boolean(g) || y && Ke(y),
                            visualElement: this,
                            scheduleRender: function() {
                                return l.scheduleRender()
                            },
                            animationType: "string" === typeof m ? m : "both",
                            initialPromotionConfig: i,
                            layoutScroll: b,
                            layoutRoot: x
                        })
                    }
                    return u
                }
            }, {
                key: "triggerBuild",
                value: function() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
            }, {
                key: "measureViewportBox",
                value: function() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : xi()
                }
            }, {
                key: "getStaticValue",
                value: function(e) {
                    return this.latestValues[e]
                }
            }, {
                key: "setStaticValue",
                value: function(e, t) {
                    this.latestValues[e] = t
                }
            }, {
                key: "makeTargetAnimatable",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return this.makeTargetAnimatableFromInstance(e, this.props, t)
                }
            }, {
                key: "setProps",
                value: function(e) {
                    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender();
                    var t = this.props;
                    this.props = e;
                    for (var n = 0; n < pl.length; n++) {
                        var r = pl[n];
                        this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](),
                        delete this.propEventSubscriptions[r]);
                        var a = e["on" + r];
                        a && (this.propEventSubscriptions[r] = this.on(r, a))
                    }
                    this.prevMotionValues = function(e, t, n) {
                        var r = t.willChange;
                        for (var a in t) {
                            var o = t[a]
                              , i = n[a];
                            if (kt(o))
                                e.addValue(a, o),
                                la(r) && r.add(a);
                            else if (kt(i))
                                e.addValue(a, Or(o, {
                                    owner: e
                                })),
                                la(r) && r.remove(a);
                            else if (i !== o)
                                if (e.hasValue(a)) {
                                    var l = e.getValue(a);
                                    !l.hasAnimated && l.set(o)
                                } else {
                                    var s = e.getStaticValue(a);
                                    e.addValue(a, Or(void 0 !== s ? s : o, {
                                        owner: e
                                    }))
                                }
                        }
                        for (var u in n)
                            void 0 === t[u] && e.removeValue(u);
                        return t
                    }(this, this.scrapeMotionValuesFromProps(e, t), this.prevMotionValues),
                    this.handleChildMotionValue && this.handleChildMotionValue()
                }
            }, {
                key: "getProps",
                value: function() {
                    return this.props
                }
            }, {
                key: "getVariant",
                value: function(e) {
                    var t;
                    return null === (t = this.props.variants) || void 0 === t ? void 0 : t[e]
                }
            }, {
                key: "getDefaultTransition",
                value: function() {
                    return this.props.transition
                }
            }, {
                key: "getTransformPagePoint",
                value: function() {
                    return this.props.transformPagePoint
                }
            }, {
                key: "getClosestVariantNode",
                value: function() {
                    var e;
                    return this.isVariantNode ? this : null === (e = this.parent) || void 0 === e ? void 0 : e.getClosestVariantNode()
                }
            }, {
                key: "getVariantContext",
                value: function() {
                    var e, t;
                    if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
                        return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
                    if (!this.isControllingVariants) {
                        var n = (null === (t = this.parent) || void 0 === t ? void 0 : t.getVariantContext()) || {};
                        return void 0 !== this.props.initial && (n.initial = this.props.initial),
                        n
                    }
                    for (var r = {}, a = 0; a < ml; a++) {
                        var o = vl[a]
                          , i = this.props[o];
                        (Ge(i) || !1 === i) && (r[o] = i)
                    }
                    return r
                }
            }, {
                key: "addVariantChild",
                value: function(e) {
                    var t, n = this.getClosestVariantNode();
                    if (n)
                        return null === (t = n.variantChildren) || void 0 === t || t.add(e),
                        function() {
                            return n.variantChildren.delete(e)
                        }
                }
            }, {
                key: "addValue",
                value: function(e, t) {
                    t !== this.values.get(e) && (this.removeValue(e),
                    this.bindToMotionValue(e, t)),
                    this.values.set(e, t),
                    this.latestValues[e] = t.get()
                }
            }, {
                key: "removeValue",
                value: function(e) {
                    var t;
                    this.values.delete(e),
                    null === (t = this.valueSubscriptions.get(e)) || void 0 === t || t(),
                    this.valueSubscriptions.delete(e),
                    delete this.latestValues[e],
                    this.removeValueFromRenderState(e, this.renderState)
                }
            }, {
                key: "hasValue",
                value: function(e) {
                    return this.values.has(e)
                }
            }, {
                key: "getValue",
                value: function(e, t) {
                    if (this.props.values && this.props.values[e])
                        return this.props.values[e];
                    var n = this.values.get(e);
                    return void 0 === n && void 0 !== t && (n = Or(t, {
                        owner: this
                    }),
                    this.addValue(e, n)),
                    n
                }
            }, {
                key: "readValue",
                value: function(e) {
                    return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
                }
            }, {
                key: "setBaseTarget",
                value: function(e, t) {
                    this.baseTarget[e] = t
                }
            }, {
                key: "getBaseTarget",
                value: function(e) {
                    var t, n = this.props.initial, r = "string" === typeof n || "object" === typeof n ? null === (t = gn(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
                    if (n && void 0 !== r)
                        return r;
                    var a = this.getBaseTargetFromProps(this.props, e);
                    return void 0 === a || kt(a) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : a
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return this.events[e] || (this.events[e] = new Cr),
                    this.events[e].add(t)
                }
            }, {
                key: "notify",
                value: function(e) {
                    for (var t, n, r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                        a[o - 1] = arguments[o];
                    null === (n = this.events[e]) || void 0 === n || (t = n).notify.apply(t, a)
                }
            }]),
            e
        }()
          , vl = ["initial"].concat(s(Qo))
          , ml = vl.length
          , gl = ["transition", "transitionEnd"]
          , yl = function(e) {
            v(n, e);
            var t = b(n);
            function n() {
                return u(this, n),
                t.apply(this, arguments)
            }
            return p(n, [{
                key: "sortInstanceNodePosition",
                value: function(e, t) {
                    return 2 & e.compareDocumentPosition(t) ? 1 : -1
                }
            }, {
                key: "getBaseTargetFromProps",
                value: function(e, t) {
                    var n;
                    return null === (n = e.style) || void 0 === n ? void 0 : n[t]
                }
            }, {
                key: "removeValueFromRenderState",
                value: function(e, t) {
                    var n = t.vars
                      , r = t.style;
                    delete n[e],
                    delete r[e]
                }
            }, {
                key: "makeTargetAnimatableFromInstance",
                value: function(e, t, n) {
                    var r = e.transition
                      , a = e.transitionEnd
                      , o = en(e, gl)
                      , i = t.transformValues
                      , l = function(e, t, n) {
                        var r, a = {};
                        for (var o in e) {
                            var i = ia(o, t);
                            a[o] = void 0 !== i ? i : null === (r = n.getValue(o)) || void 0 === r ? void 0 : r.get()
                        }
                        return a
                    }(o, r || {}, this);
                    if (i && (a && (a = i(a)),
                    o && (o = i(o)),
                    l && (l = i(l))),
                    n) {
                        !function(e, t, n) {
                            var r, a, o = Object.keys(t).filter((function(t) {
                                return !e.hasValue(t)
                            }
                            )), i = o.length;
                            if (i)
                                for (var l = 0; l < i; l++) {
                                    var s = o[l]
                                      , u = t[s]
                                      , c = null;
                                    Array.isArray(u) && (c = u[0]),
                                    null === c && (c = null !== (a = null !== (r = n[s]) && void 0 !== r ? r : e.readValue(s)) && void 0 !== a ? a : t[s]),
                                    void 0 !== c && null !== c && ("string" === typeof c && (ir(c) || lr(c)) ? c = parseFloat(c) : !ta(c) && Hr.test(u) && (c = Kr(s, u)),
                                    e.addValue(s, Or(c, {
                                        owner: e
                                    })),
                                    void 0 === n[s] && (n[s] = c),
                                    null !== c && e.setBaseTarget(s, c))
                                }
                        }(this, o, l);
                        var s = il(this, o, l, a);
                        a = s.transitionEnd,
                        o = s.target
                    }
                    return Ue({
                        transition: r,
                        transitionEnd: a
                    }, o)
                }
            }]),
            n
        }(hl);
        var bl = function(e) {
            v(n, e);
            var t = b(n);
            function n() {
                return u(this, n),
                t.apply(this, arguments)
            }
            return p(n, [{
                key: "readValueFromInstance",
                value: function(e, t) {
                    if (xt.has(t)) {
                        var n = Xr(t);
                        return n && n.default || 0
                    }
                    var r, a = (r = e,
                    window.getComputedStyle(r)), o = (Ct(t) ? a.getPropertyValue(t) : a[t]) || 0;
                    return "string" === typeof o ? o.trim() : o
                }
            }, {
                key: "measureInstanceViewportBox",
                value: function(e, t) {
                    return Ii(e, t.transformPagePoint)
                }
            }, {
                key: "build",
                value: function(e, t, n, r) {
                    $t(e, t, n, r.transformTemplate)
                }
            }, {
                key: "scrapeMotionValuesFromProps",
                value: function(e, t) {
                    return vn(e, t)
                }
            }, {
                key: "handleChildMotionValue",
                value: function() {
                    var e = this;
                    this.childSubscription && (this.childSubscription(),
                    delete this.childSubscription);
                    var t = this.props.children;
                    kt(t) && (this.childSubscription = t.on("change", (function(t) {
                        e.current && (e.current.textContent = "".concat(t))
                    }
                    )))
                }
            }, {
                key: "renderInstance",
                value: function(e, t, n, r) {
                    dn(e, t, n, r)
                }
            }]),
            n
        }(yl);
        function xl() {
            return xl = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                var r = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = m(e)); )
                        ;
                    return e
                }(e, t);
                if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get ? a.get.call(arguments.length < 3 ? e : n) : a.value
                }
            }
            ,
            xl.apply(this, arguments)
        }
        var wl = function(e) {
            v(n, e);
            var t = b(n);
            function n() {
                var e;
                return u(this, n),
                (e = t.apply(this, arguments)).isSVGTag = !1,
                e
            }
            return p(n, [{
                key: "getBaseTargetFromProps",
                value: function(e, t) {
                    return e[t]
                }
            }, {
                key: "readValueFromInstance",
                value: function(e, t) {
                    var n;
                    return xt.has(t) ? (null === (n = Xr(t)) || void 0 === n ? void 0 : n.default) || 0 : (t = pn.has(t) ? t : fn(t),
                    e.getAttribute(t))
                }
            }, {
                key: "measureInstanceViewportBox",
                value: function() {
                    return xi()
                }
            }, {
                key: "scrapeMotionValuesFromProps",
                value: function(e, t) {
                    return mn(e, t)
                }
            }, {
                key: "build",
                value: function(e, t, n, r) {
                    on(e, t, n, this.isSVGTag, r.transformTemplate)
                }
            }, {
                key: "renderInstance",
                value: function(e, t, n, r) {
                    hn(e, t, 0, r)
                }
            }, {
                key: "mount",
                value: function(e) {
                    this.isSVGTag = sn(e.tagName),
                    xl(m(n.prototype), "mount", this).call(this, e)
                }
            }]),
            n
        }(yl)
          , kl = function(e, t) {
            return gt(e) ? new wl(t,{
                enableHardwareAcceleration: !1
            }) : new bl(t,{
                enableHardwareAcceleration: !0
            })
        };
        function Sl(e, t) {
            return t.max === t.min ? 0 : e / (t.max - t.min) * 100
        }
        var El = {
            correct: function(e, t) {
                if (!t.target)
                    return e;
                if ("string" === typeof e) {
                    if (!zt.test(e))
                        return e;
                    e = parseFloat(e)
                }
                var n = Sl(e, t.target.x)
                  , r = Sl(e, t.target.y);
                return "".concat(n, "% ").concat(r, "%")
            }
        }
          , Cl = "_$css"
          , Pl = {
            correct: function(e, t) {
                var n = t.treeScale
                  , r = t.projectionDelta
                  , a = e
                  , o = e.includes("var(")
                  , i = [];
                o && (e = e.replace(Wi, (function(e) {
                    return i.push(e),
                    Cl
                }
                )));
                var l = Hr.parse(e);
                if (l.length > 5)
                    return a;
                var s = Hr.createTransformer(e)
                  , u = "number" !== typeof l[0] ? 1 : 0
                  , c = r.x.scale * n.x
                  , f = r.y.scale * n.y;
                l[0 + u] /= c,
                l[1 + u] /= f;
                var d = ya(c, f, .5);
                "number" === typeof l[2 + u] && (l[2 + u] /= d),
                "number" === typeof l[3 + u] && (l[3 + u] /= d);
                var p = s(l);
                if (o) {
                    var h = 0;
                    p = p.replace(Cl, (function() {
                        var e = i[h];
                        return h++,
                        e
                    }
                    ))
                }
                return p
            }
        }
          , jl = function(e) {
            v(n, e);
            var t = b(n);
            function n() {
                return u(this, n),
                t.apply(this, arguments)
            }
            return p(n, [{
                key: "componentDidMount",
                value: function() {
                    var e, t = this, n = this.props, r = n.visualElement, a = n.layoutGroup, o = n.switchLayoutGroup, i = n.layoutId, l = r.projection;
                    e = Tl,
                    Object.assign(yt, e),
                    l && (a.group && a.group.add(l),
                    o && o.register && i && o.register(l),
                    l.root.didUpdate(),
                    l.addEventListener("animationComplete", (function() {
                        t.safeToRemove()
                    }
                    )),
                    l.setOptions(Ue(Ue({}, l.options), {}, {
                        onExitComplete: function() {
                            return t.safeToRemove()
                        }
                    }))),
                    lt.hasEverUpdated = !0
                }
            }, {
                key: "getSnapshotBeforeUpdate",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , r = n.layoutDependency
                      , a = n.visualElement
                      , o = n.drag
                      , i = n.isPresent
                      , l = a.projection;
                    return l ? (l.isPresent = i,
                    o || e.layoutDependency !== r || void 0 === r ? l.willUpdate() : this.safeToRemove(),
                    e.isPresent !== i && (i ? l.promote() : l.relegate() || gr.postRender((function() {
                        var e;
                        (null === (e = l.getStack()) || void 0 === e ? void 0 : e.members.length) || t.safeToRemove()
                    }
                    ))),
                    null) : null
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props.visualElement.projection;
                    e && (e.root.didUpdate(),
                    !e.currentAnimation && e.isLead() && this.safeToRemove())
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this.props
                      , t = e.visualElement
                      , n = e.layoutGroup
                      , r = e.switchLayoutGroup
                      , a = t.projection;
                    a && (a.scheduleCheckAfterUnmount(),
                    (null === n || void 0 === n ? void 0 : n.group) && n.group.remove(a),
                    (null === r || void 0 === r ? void 0 : r.deregister) && r.deregister(a))
                }
            }, {
                key: "safeToRemove",
                value: function() {
                    var e = this.props.safeToRemove;
                    null === e || void 0 === e || e()
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]),
            n
        }(t.Component);
        var Tl = {
            borderRadius: Ue(Ue({}, El), {}, {
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            }),
            borderTopLeftRadius: El,
            borderTopRightRadius: El,
            borderBottomLeftRadius: El,
            borderBottomRightRadius: El,
            boxShadow: Pl
        }
          , Ol = {
            measureLayout: function(e) {
                var n = k(ar(), 2)
                  , r = n[0]
                  , a = n[1]
                  , o = (0,
                t.useContext)(ut);
                return t.createElement(jl, Ue(Ue({}, e), {}, {
                    layoutGroup: o,
                    switchLayoutGroup: (0,
                    t.useContext)(ft),
                    isPresent: r,
                    safeToRemove: a
                }))
            }
        };
        var Nl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , _l = Nl.length
          , Ml = function(e) {
            return "string" === typeof e ? parseFloat(e) : e
        }
          , Rl = function(e) {
            return "number" === typeof e || zt.test(e)
        };
        function Ll(e, t) {
            return void 0 !== e[t] ? e[t] : e.borderRadius
        }
        var Al = Vl(0, .5, za)
          , Dl = Vl(.5, .95, Ra);
        function Vl(e, t, n) {
            return function(r) {
                return r < e ? 0 : r > t ? 1 : n(Oa(e, t, r))
            }
        }
        function Il(e, t) {
            e.min = t.min,
            e.max = t.max
        }
        function zl(e, t) {
            Il(e.x, t.x),
            Il(e.y, t.y)
        }
        function Fl(e, t, n, r, a) {
            return e = Ti(e -= t, 1 / n, r),
            void 0 !== a && (e = Ti(e, 1 / a, r)),
            e
        }
        function Bl(e, t, n, r, a) {
            var o = k(n, 3)
              , i = o[0]
              , l = o[1]
              , s = o[2];
            !function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5
                  , a = arguments.length > 4 ? arguments[4] : void 0
                  , o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e
                  , i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
                if (It.test(t) && (t = parseFloat(t),
                t = ya(i.min, i.max, t / 100) - i.min),
                "number" === typeof t) {
                    var l = ya(o.min, o.max, r);
                    e === o && (l -= t),
                    e.min = Fl(e.min, t, n, l, a),
                    e.max = Fl(e.max, t, n, l, a)
                }
            }(e, t[i], t[l], t[s], t.scale, r, a)
        }
        var Ul = ["x", "scaleX", "originX"]
          , Hl = ["y", "scaleY", "originY"];
        function Wl(e, t, n, r) {
            Bl(e.x, t, Ul, null === n || void 0 === n ? void 0 : n.x, null === r || void 0 === r ? void 0 : r.x),
            Bl(e.y, t, Hl, null === n || void 0 === n ? void 0 : n.y, null === r || void 0 === r ? void 0 : r.y)
        }
        function $l(e) {
            return 0 === e.translate && 1 === e.scale
        }
        function Ql(e) {
            return $l(e.x) && $l(e.y)
        }
        function Yl(e, t) {
            return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
        }
        function ql(e) {
            return li(e.x) / li(e.y)
        }
        var Xl = function() {
            function e() {
                u(this, e),
                this.members = []
            }
            return p(e, [{
                key: "add",
                value: function(e) {
                    Sr(this.members, e),
                    e.scheduleRender()
                }
            }, {
                key: "remove",
                value: function(e) {
                    if (Er(this.members, e),
                    e === this.prevLead && (this.prevLead = void 0),
                    e === this.lead) {
                        var t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
            }, {
                key: "relegate",
                value: function(e) {
                    var t, n = this.members.findIndex((function(t) {
                        return e === t
                    }
                    ));
                    if (0 === n)
                        return !1;
                    for (var r = n; r >= 0; r--) {
                        var a = this.members[r];
                        if (!1 !== a.isPresent) {
                            t = a;
                            break
                        }
                    }
                    return !!t && (this.promote(t),
                    !0)
                }
            }, {
                key: "promote",
                value: function(e, t) {
                    var n, r = this.lead;
                    e !== r && (this.prevLead = r,
                    this.lead = e,
                    e.show(),
                    r && (r.instance && r.scheduleRender(),
                    e.scheduleRender(),
                    e.resumeFrom = r,
                    t && (e.resumeFrom.preserveOpacity = !0),
                    r.snapshot && (e.snapshot = r.snapshot,
                    e.snapshot.latestValues = r.animationValues || r.latestValues),
                    (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0),
                    !1 === e.options.crossfade && r.hide()))
                }
            }, {
                key: "exitAnimationComplete",
                value: function() {
                    this.members.forEach((function(e) {
                        var t, n, r, a, o;
                        null === (n = (t = e.options).onExitComplete) || void 0 === n || n.call(t),
                        null === (o = null === (r = e.resumingFrom) || void 0 === r ? void 0 : (a = r.options).onExitComplete) || void 0 === o || o.call(a)
                    }
                    ))
                }
            }, {
                key: "scheduleRender",
                value: function() {
                    this.members.forEach((function(e) {
                        e.instance && e.scheduleRender(!1)
                    }
                    ))
                }
            }, {
                key: "removeLeadSnapshot",
                value: function() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }]),
            e
        }();
        function Kl(e, t, n) {
            var r = ""
              , a = e.x.translate / t.x
              , o = e.y.translate / t.y;
            if ((a || o) && (r = "translate3d(".concat(a, "px, ").concat(o, "px, 0) ")),
            1 === t.x && 1 === t.y || (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
            n) {
                var i = n.rotate
                  , l = n.rotateX
                  , s = n.rotateY;
                i && (r += "rotate(".concat(i, "deg) ")),
                l && (r += "rotateX(".concat(l, "deg) ")),
                s && (r += "rotateY(".concat(s, "deg) "))
            }
            var u = e.x.scale * t.x
              , c = e.y.scale * t.y;
            return 1 === u && 1 === c || (r += "scale(".concat(u, ", ").concat(c, ")")),
            r || "none"
        }
        var Gl = function(e, t) {
            return e.depth - t.depth
        }
          , Zl = function() {
            function e() {
                u(this, e),
                this.children = [],
                this.isDirty = !1
            }
            return p(e, [{
                key: "add",
                value: function(e) {
                    Sr(this.children, e),
                    this.isDirty = !0
                }
            }, {
                key: "remove",
                value: function(e) {
                    Er(this.children, e),
                    this.isDirty = !0
                }
            }, {
                key: "forEach",
                value: function(e) {
                    this.isDirty && this.children.sort(Gl),
                    this.isDirty = !1,
                    this.children.forEach(e)
                }
            }]),
            e
        }()
          , Jl = ["", "X", "Y", "Z"]
          , es = 1e3
          , ts = 0;
        function ns(e) {
            var t = e.attachResizeListener
              , n = e.defaultParent
              , r = e.measureScroll
              , a = e.checkIsScrollRoot
              , o = e.resetTransform;
            return function() {
                function e(t) {
                    var r = this
                      , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === n || void 0 === n ? void 0 : n();
                    u(this, e),
                    this.id = ts++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isTransformDirty = !1,
                    this.isProjectionDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.potentialNodes = new Map,
                    this.checkUpdateFailed = function() {
                        r.isUpdating && (r.isUpdating = !1,
                        r.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = function() {
                        r.nodes.forEach(os),
                        r.nodes.forEach(cs),
                        r.nodes.forEach(fs)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.elementId = t,
                    this.latestValues = a,
                    this.root = o ? o.root || o : this,
                    this.path = o ? [].concat(s(o.path), [o]) : [],
                    this.parent = o,
                    this.depth = o ? o.depth + 1 : 0,
                    t && this.root.registerPotentialNode(t, this);
                    for (var i = 0; i < this.path.length; i++)
                        this.path[i].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new Zl)
                }
                return p(e, [{
                    key: "addEventListener",
                    value: function(e, t) {
                        return this.eventHandlers.has(e) || this.eventHandlers.set(e, new Cr),
                        this.eventHandlers.get(e).add(t)
                    }
                }, {
                    key: "notifyListeners",
                    value: function(e) {
                        for (var t = this.eventHandlers.get(e), n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                            r[a - 1] = arguments[a];
                        null === t || void 0 === t || t.notify.apply(t, r)
                    }
                }, {
                    key: "hasListeners",
                    value: function(e) {
                        return this.eventHandlers.has(e)
                    }
                }, {
                    key: "registerPotentialNode",
                    value: function(e, t) {
                        this.potentialNodes.set(e, t)
                    }
                }, {
                    key: "mount",
                    value: function(e) {
                        var n, r = this, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!this.instance) {
                            this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                            this.instance = e;
                            var o = this.options
                              , i = o.layoutId
                              , l = o.layout
                              , s = o.visualElement;
                            if (s && !s.current && s.mount(e),
                            this.root.nodes.add(this),
                            null === (n = this.parent) || void 0 === n || n.children.add(this),
                            this.elementId && this.root.potentialNodes.delete(this.elementId),
                            a && (l || i) && (this.isLayoutDirty = !0),
                            t) {
                                var u, c = function() {
                                    return r.root.updateBlockedByResize = !1
                                };
                                t(e, (function() {
                                    r.root.updateBlockedByResize = !0,
                                    u && u(),
                                    u = jo(c, 250),
                                    lt.hasAnimatedSinceResize && (lt.hasAnimatedSinceResize = !1,
                                    r.nodes.forEach(us))
                                }
                                ))
                            }
                            i && this.root.registerSharedNode(i, this),
                            !1 !== this.options.animate && s && (i || l) && this.addEventListener("didUpdate", (function(e) {
                                var t, n, a, o, i, l = e.delta, u = e.hasLayoutChanged, c = e.hasRelativeTargetChanged, f = e.layout;
                                if (r.isTreeAnimationBlocked())
                                    return r.target = void 0,
                                    void (r.relativeTarget = void 0);
                                var d = null !== (n = null !== (t = r.options.transition) && void 0 !== t ? t : s.getDefaultTransition()) && void 0 !== n ? n : gs
                                  , p = s.getProps()
                                  , h = p.onLayoutAnimationStart
                                  , v = p.onLayoutAnimationComplete
                                  , m = !r.targetLayout || !Yl(r.targetLayout, f) || c
                                  , g = !u && c;
                                if (r.options.layoutRoot || (null === (a = r.resumeFrom) || void 0 === a ? void 0 : a.instance) || g || u && (m || !r.currentAnimation)) {
                                    r.resumeFrom && (r.resumingFrom = r.resumeFrom,
                                    r.resumingFrom.resumingFrom = void 0),
                                    r.setAnimationOrigin(l, g);
                                    var y = Ue(Ue({}, zo(d, "layout")), {}, {
                                        onPlay: h,
                                        onComplete: v
                                    });
                                    (s.shouldReduceMotion || r.options.layoutRoot) && (y.delay = 0,
                                    y.type = !1),
                                    r.startAnimation(y)
                                } else
                                    u || 0 !== r.animationProgress || us(r),
                                    r.isLead() && (null === (i = (o = r.options).onExitComplete) || void 0 === i || i.call(o));
                                r.targetLayout = f
                            }
                            ))
                        }
                    }
                }, {
                    key: "unmount",
                    value: function() {
                        var e, t;
                        this.options.layoutId && this.willUpdate(),
                        this.root.nodes.remove(this),
                        null === (e = this.getStack()) || void 0 === e || e.remove(this),
                        null === (t = this.parent) || void 0 === t || t.children.delete(this),
                        this.instance = void 0,
                        yr.preRender(this.updateProjection)
                    }
                }, {
                    key: "blockUpdate",
                    value: function() {
                        this.updateManuallyBlocked = !0
                    }
                }, {
                    key: "unblockUpdate",
                    value: function() {
                        this.updateManuallyBlocked = !1
                    }
                }, {
                    key: "isUpdateBlocked",
                    value: function() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                }, {
                    key: "isTreeAnimationBlocked",
                    value: function() {
                        var e;
                        return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
                    }
                }, {
                    key: "startUpdate",
                    value: function() {
                        var e;
                        this.isUpdateBlocked() || (this.isUpdating = !0,
                        null === (e = this.nodes) || void 0 === e || e.forEach(ds),
                        this.animationId++)
                    }
                }, {
                    key: "getTransformTemplate",
                    value: function() {
                        var e;
                        return null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate
                    }
                }, {
                    key: "willUpdate",
                    value: function() {
                        var e, t, n, r = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (this.root.isUpdateBlocked())
                            null === (t = (e = this.options).onExitComplete) || void 0 === t || t.call(e);
                        else if (!this.root.isUpdating && this.root.startUpdate(),
                        !this.isLayoutDirty) {
                            this.isLayoutDirty = !0;
                            for (var a = 0; a < this.path.length; a++) {
                                var o = this.path[a];
                                o.shouldResetTransform = !0,
                                o.updateScroll("snapshot"),
                                o.options.layoutRoot && o.willUpdate(!1)
                            }
                            var i = this.options
                              , l = i.layoutId
                              , s = i.layout;
                            (void 0 !== l || s) && (this.prevTransformTemplateValue = null === (n = this.getTransformTemplate()) || void 0 === n ? void 0 : n(this.latestValues, ""),
                            this.updateSnapshot(),
                            r && this.notifyListeners("willUpdate"))
                        }
                    }
                }, {
                    key: "didUpdate",
                    value: function() {
                        if (this.isUpdateBlocked())
                            return this.unblockUpdate(),
                            this.clearAllSnapshots(),
                            void this.nodes.forEach(ls);
                        this.isUpdating && (this.isUpdating = !1,
                        this.potentialNodes.size && (this.potentialNodes.forEach(ys),
                        this.potentialNodes.clear()),
                        this.nodes.forEach(ss),
                        this.nodes.forEach(rs),
                        this.nodes.forEach(as),
                        this.clearAllSnapshots(),
                        br.update(),
                        br.preRender(),
                        br.render())
                    }
                }, {
                    key: "clearAllSnapshots",
                    value: function() {
                        this.nodes.forEach(is),
                        this.sharedNodes.forEach(ps)
                    }
                }, {
                    key: "scheduleUpdateProjection",
                    value: function() {
                        gr.preRender(this.updateProjection, !1, !0)
                    }
                }, {
                    key: "scheduleCheckAfterUnmount",
                    value: function() {
                        var e = this;
                        gr.postRender((function() {
                            e.isLayoutDirty ? e.root.didUpdate() : e.root.checkUpdateFailed()
                        }
                        ))
                    }
                }, {
                    key: "updateSnapshot",
                    value: function() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                }, {
                    key: "updateLayout",
                    value: function() {
                        var e;
                        if (this.instance && (this.updateScroll(),
                        this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                            if (this.resumeFrom && !this.resumeFrom.instance)
                                for (var t = 0; t < this.path.length; t++) {
                                    this.path[t].updateScroll()
                                }
                            var n = this.layout;
                            this.layout = this.measure(!1),
                            this.layoutCorrected = xi(),
                            this.isLayoutDirty = !1,
                            this.projectionDelta = void 0,
                            this.notifyListeners("measure", this.layout.layoutBox),
                            null === (e = this.options.visualElement) || void 0 === e || e.notify("LayoutMeasure", this.layout.layoutBox, null === n || void 0 === n ? void 0 : n.layoutBox)
                        }
                    }
                }, {
                    key: "updateScroll",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure"
                          , t = Boolean(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1),
                        t && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: e,
                            isRoot: a(this.instance),
                            offset: r(this.instance)
                        })
                    }
                }, {
                    key: "resetTransform",
                    value: function() {
                        var e;
                        if (o) {
                            var t = this.isLayoutDirty || this.shouldResetTransform
                              , n = this.projectionDelta && !Ql(this.projectionDelta)
                              , r = null === (e = this.getTransformTemplate()) || void 0 === e ? void 0 : e(this.latestValues, "")
                              , a = r !== this.prevTransformTemplateValue;
                            t && (n || Ci(this.latestValues) || a) && (o(this.instance, r),
                            this.shouldResetTransform = !1,
                            this.scheduleRender())
                        }
                    }
                }, {
                    key: "measure",
                    value: function() {
                        var e, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], n = this.measurePageBox(), r = this.removeElementScroll(n);
                        return t && (r = this.removeTransform(r)),
                        bs((e = r).x),
                        bs(e.y),
                        {
                            animationId: this.root.animationId,
                            measuredBox: n,
                            layoutBox: r,
                            latestValues: {},
                            source: this.id
                        }
                    }
                }, {
                    key: "measurePageBox",
                    value: function() {
                        var e = this.options.visualElement;
                        if (!e)
                            return xi();
                        var t = e.measureViewportBox()
                          , n = this.root.scroll;
                        return n && (Ri(t.x, n.offset.x),
                        Ri(t.y, n.offset.y)),
                        t
                    }
                }, {
                    key: "removeElementScroll",
                    value: function(e) {
                        var t = xi();
                        zl(t, e);
                        for (var n = 0; n < this.path.length; n++) {
                            var r = this.path[n]
                              , a = r.scroll
                              , o = r.options;
                            if (r !== this.root && a && o.layoutScroll) {
                                if (a.isRoot) {
                                    zl(t, e);
                                    var i = this.root.scroll;
                                    i && (Ri(t.x, -i.offset.x),
                                    Ri(t.y, -i.offset.y))
                                }
                                Ri(t.x, a.offset.x),
                                Ri(t.y, a.offset.y)
                            }
                        }
                        return t
                    }
                }, {
                    key: "applyTransform",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                          , n = xi();
                        zl(n, e);
                        for (var r = 0; r < this.path.length; r++) {
                            var a = this.path[r];
                            !t && a.options.layoutScroll && a.scroll && a !== a.root && Vi(n, {
                                x: -a.scroll.offset.x,
                                y: -a.scroll.offset.y
                            }),
                            Ci(a.latestValues) && Vi(n, a.latestValues)
                        }
                        return Ci(this.latestValues) && Vi(n, this.latestValues),
                        n
                    }
                }, {
                    key: "removeTransform",
                    value: function(e) {
                        var t, n = xi();
                        zl(n, e);
                        for (var r = 0; r < this.path.length; r++) {
                            var a = this.path[r];
                            if (a.instance && Ci(a.latestValues)) {
                                Ei(a.latestValues) && a.updateSnapshot();
                                var o = xi();
                                zl(o, a.measurePageBox()),
                                Wl(n, a.latestValues, null === (t = a.snapshot) || void 0 === t ? void 0 : t.layoutBox, o)
                            }
                        }
                        return Ci(this.latestValues) && Wl(n, this.latestValues),
                        n
                    }
                }, {
                    key: "setTargetDelta",
                    value: function(e) {
                        this.targetDelta = e,
                        this.isProjectionDirty = !0,
                        this.root.scheduleUpdateProjection()
                    }
                }, {
                    key: "setOptions",
                    value: function(e) {
                        this.options = Ue(Ue(Ue({}, this.options), e), {}, {
                            crossfade: void 0 === e.crossfade || e.crossfade
                        })
                    }
                }, {
                    key: "clearMeasurements",
                    value: function() {
                        this.scroll = void 0,
                        this.layout = void 0,
                        this.snapshot = void 0,
                        this.prevTransformTemplateValue = void 0,
                        this.targetDelta = void 0,
                        this.target = void 0,
                        this.isLayoutDirty = !1
                    }
                }, {
                    key: "resolveTargetDelta",
                    value: function() {
                        var e, t = this.getLead();
                        if (this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty),
                        this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty),
                        this.isProjectionDirty || this.attemptToResolveRelativeTarget) {
                            var n = this.options
                              , r = n.layout
                              , a = n.layoutId;
                            if (this.layout && (r || a)) {
                                if (!this.targetDelta && !this.relativeTarget) {
                                    var o = this.getClosestProjectingParent();
                                    o && o.layout ? (this.relativeParent = o,
                                    this.relativeTarget = xi(),
                                    this.relativeTargetOrigin = xi(),
                                    pi(this.relativeTargetOrigin, this.layout.layoutBox, o.layout.layoutBox),
                                    zl(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                var i, l, s;
                                if (this.relativeTarget || this.targetDelta)
                                    if (this.target || (this.target = xi(),
                                    this.targetWithTransforms = xi()),
                                    this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target) ? (i = this.target,
                                    l = this.relativeTarget,
                                    s = this.relativeParent.target,
                                    fi(i.x, l.x, s.x),
                                    fi(i.y, l.y, s.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : zl(this.target, this.layout.layoutBox),
                                    _i(this.target, this.targetDelta)) : zl(this.target, this.layout.layoutBox),
                                    this.attemptToResolveRelativeTarget) {
                                        this.attemptToResolveRelativeTarget = !1;
                                        var u = this.getClosestProjectingParent();
                                        u && Boolean(u.resumingFrom) === Boolean(this.resumingFrom) && !u.options.layoutScroll && u.target ? (this.relativeParent = u,
                                        this.relativeTarget = xi(),
                                        this.relativeTargetOrigin = xi(),
                                        pi(this.relativeTargetOrigin, this.target, u.target),
                                        zl(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                    }
                            }
                        }
                    }
                }, {
                    key: "getClosestProjectingParent",
                    value: function() {
                        if (this.parent && !Ei(this.parent.latestValues) && !Pi(this.parent.latestValues))
                            return (this.parent.relativeTarget || this.parent.targetDelta || this.parent.options.layoutRoot) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }
                }, {
                    key: "calcProjection",
                    value: function() {
                        var e, t = this.isProjectionDirty, n = this.isTransformDirty;
                        this.isProjectionDirty = this.isTransformDirty = !1;
                        var r = this.getLead()
                          , a = Boolean(this.resumingFrom) || this !== r
                          , o = !0;
                        if (t && (o = !1),
                        a && n && (o = !1),
                        !o) {
                            var i = this.options
                              , l = i.layout
                              , s = i.layoutId;
                            if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation),
                            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                            this.layout && (l || s)) {
                                zl(this.layoutCorrected, this.layout.layoutBox),
                                function(e, t, n) {
                                    var r, a, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i = n.length;
                                    if (i) {
                                        var l, s;
                                        t.x = t.y = 1;
                                        for (var u = 0; u < i; u++)
                                            s = (l = n[u]).projectionDelta,
                                            "contents" !== (null === (a = null === (r = l.instance) || void 0 === r ? void 0 : r.style) || void 0 === a ? void 0 : a.display) && (o && l.options.layoutScroll && l.scroll && l !== l.root && Vi(e, {
                                                x: -l.scroll.offset.x,
                                                y: -l.scroll.offset.y
                                            }),
                                            s && (t.x *= s.x.scale,
                                            t.y *= s.y.scale,
                                            _i(e, s)),
                                            o && Ci(l.latestValues) && Vi(e, l.latestValues));
                                        t.x = Mi(t.x),
                                        t.y = Mi(t.y)
                                    }
                                }(this.layoutCorrected, this.treeScale, this.path, a);
                                var u = r.target;
                                if (u) {
                                    this.projectionDelta || (this.projectionDelta = bi(),
                                    this.projectionDeltaWithTransform = bi());
                                    var c = this.treeScale.x
                                      , f = this.treeScale.y
                                      , d = this.projectionTransform;
                                    ci(this.projectionDelta, this.layoutCorrected, u, this.latestValues),
                                    this.projectionTransform = Kl(this.projectionDelta, this.treeScale),
                                    this.projectionTransform === d && this.treeScale.x === c && this.treeScale.y === f || (this.hasProjected = !0,
                                    this.scheduleRender(),
                                    this.notifyListeners("projectionUpdate", u))
                                }
                            }
                        }
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.isVisible = !1
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.isVisible = !0
                    }
                }, {
                    key: "scheduleRender",
                    value: function() {
                        var e, t, n, r = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        null === (t = (e = this.options).scheduleRender) || void 0 === t || t.call(e),
                        r && (null === (n = this.getStack()) || void 0 === n || n.scheduleRender()),
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                }, {
                    key: "setAnimationOrigin",
                    value: function(e) {
                        var t, n, r = this, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = this.snapshot, i = (null === o || void 0 === o ? void 0 : o.latestValues) || {}, l = Ue({}, this.latestValues), s = bi();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                        this.attemptToResolveRelativeTarget = !a;
                        var u = xi()
                          , c = (null === o || void 0 === o ? void 0 : o.source) !== (null === (t = this.layout) || void 0 === t ? void 0 : t.source)
                          , f = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1
                          , d = Boolean(c && !f && !0 === this.options.crossfade && !this.path.some(ms));
                        this.animationProgress = 0,
                        this.mixTargetDelta = function(t) {
                            var n, a, o, p, h, v = t / 1e3;
                            hs(s.x, e.x, v),
                            hs(s.y, e.y, v),
                            r.setTargetDelta(s),
                            r.relativeTarget && r.relativeTargetOrigin && r.layout && (null === (n = r.relativeParent) || void 0 === n ? void 0 : n.layout) && (pi(u, r.layout.layoutBox, r.relativeParent.layout.layoutBox),
                            a = r.relativeTarget,
                            o = r.relativeTargetOrigin,
                            p = u,
                            h = v,
                            vs(a.x, o.x, p.x, h),
                            vs(a.y, o.y, p.y, h)),
                            c && (r.animationValues = l,
                            function(e, t, n, r, a, o) {
                                a ? (e.opacity = ya(0, void 0 !== n.opacity ? n.opacity : 1, Al(r)),
                                e.opacityExit = ya(void 0 !== t.opacity ? t.opacity : 1, 0, Dl(r))) : o && (e.opacity = ya(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                                for (var i = 0; i < _l; i++) {
                                    var l = "border".concat(Nl[i], "Radius")
                                      , s = Ll(t, l)
                                      , u = Ll(n, l);
                                    void 0 === s && void 0 === u || (s || (s = 0),
                                    u || (u = 0),
                                    0 === s || 0 === u || Rl(s) === Rl(u) ? (e[l] = Math.max(ya(Ml(s), Ml(u), r), 0),
                                    (It.test(u) || It.test(s)) && (e[l] += "%")) : e[l] = u)
                                }
                                (t.rotate || n.rotate) && (e.rotate = ya(t.rotate || 0, n.rotate || 0, r))
                            }(l, i, r.latestValues, v, d, f)),
                            r.root.scheduleUpdateProjection(),
                            r.scheduleRender(),
                            r.animationProgress = v
                        }
                        ,
                        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                }, {
                    key: "startAnimation",
                    value: function(e) {
                        var t, n, r = this;
                        this.notifyListeners("animationStart"),
                        null === (t = this.currentAnimation) || void 0 === t || t.stop(),
                        this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()),
                        this.pendingAnimation && (yr.update(this.pendingAnimation),
                        this.pendingAnimation = void 0),
                        this.pendingAnimation = gr.update((function() {
                            lt.hasAnimatedSinceResize = !0,
                            r.currentAnimation = function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                                  , r = kt(e) ? e : Or(e);
                                return r.start(Fo("", r, t, n)),
                                {
                                    stop: function() {
                                        return r.stop()
                                    },
                                    isAnimating: function() {
                                        return r.isAnimating()
                                    }
                                }
                            }(0, es, Ue(Ue({}, e), {}, {
                                onUpdate: function(t) {
                                    var n;
                                    r.mixTargetDelta(t),
                                    null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                                },
                                onComplete: function() {
                                    var t;
                                    null === (t = e.onComplete) || void 0 === t || t.call(e),
                                    r.completeAnimation()
                                }
                            })),
                            r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation),
                            r.pendingAnimation = void 0
                        }
                        ))
                    }
                }, {
                    key: "completeAnimation",
                    value: function() {
                        var e;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                        this.resumingFrom.preserveOpacity = void 0),
                        null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(),
                        this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                        this.notifyListeners("animationComplete")
                    }
                }, {
                    key: "finishAnimation",
                    value: function() {
                        var e;
                        this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, es),
                        this.currentAnimation.stop()),
                        this.completeAnimation()
                    }
                }, {
                    key: "applyTransformsToTarget",
                    value: function() {
                        var e = this.getLead()
                          , t = e.targetWithTransforms
                          , n = e.target
                          , r = e.layout
                          , a = e.latestValues;
                        if (t && n && r) {
                            if (this !== e && this.layout && r && xs(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                                n = this.target || xi();
                                var o = li(this.layout.layoutBox.x);
                                n.x.min = e.target.x.min,
                                n.x.max = n.x.min + o;
                                var i = li(this.layout.layoutBox.y);
                                n.y.min = e.target.y.min,
                                n.y.max = n.y.min + i
                            }
                            zl(t, n),
                            Vi(t, a),
                            ci(this.projectionDeltaWithTransform, this.layoutCorrected, t, a)
                        }
                    }
                }, {
                    key: "registerSharedNode",
                    value: function(e, t) {
                        var n, r, a;
                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new Xl),
                        this.sharedNodes.get(e).add(t),
                        t.promote({
                            transition: null === (n = t.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (a = null === (r = t.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === a ? void 0 : a.call(r, t)
                        })
                    }
                }, {
                    key: "isLead",
                    value: function() {
                        var e = this.getStack();
                        return !e || e.lead === this
                    }
                }, {
                    key: "getLead",
                    value: function() {
                        var e;
                        return this.options.layoutId && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                    }
                }, {
                    key: "getPrevLead",
                    value: function() {
                        var e;
                        return this.options.layoutId ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                    }
                }, {
                    key: "getStack",
                    value: function() {
                        var e = this.options.layoutId;
                        if (e)
                            return this.root.sharedNodes.get(e)
                    }
                }, {
                    key: "promote",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , t = e.needsReset
                          , n = e.transition
                          , r = e.preserveFollowOpacity
                          , a = this.getStack();
                        a && a.promote(this, r),
                        t && (this.projectionDelta = void 0,
                        this.needsReset = !0),
                        n && this.setOptions({
                            transition: n
                        })
                    }
                }, {
                    key: "relegate",
                    value: function() {
                        var e = this.getStack();
                        return !!e && e.relegate(this)
                    }
                }, {
                    key: "resetRotation",
                    value: function() {
                        var e = this.options.visualElement;
                        if (e) {
                            var t = !1
                              , n = e.latestValues;
                            if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0),
                            t) {
                                for (var r = {}, a = 0; a < Jl.length; a++) {
                                    var o = "rotate" + Jl[a];
                                    n[o] && (r[o] = n[o],
                                    e.setStaticValue(o, 0))
                                }
                                for (var i in null === e || void 0 === e || e.render(),
                                r)
                                    e.setStaticValue(i, r[i]);
                                e.scheduleRender()
                            }
                        }
                    }
                }, {
                    key: "getProjectionStyles",
                    value: function() {
                        var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = {};
                        if (!this.instance || this.isSVG)
                            return r;
                        if (!this.isVisible)
                            return {
                                visibility: "hidden"
                            };
                        r.visibility = "";
                        var a = this.getTransformTemplate();
                        if (this.needsReset)
                            return this.needsReset = !1,
                            r.opacity = "",
                            r.pointerEvents = wn(n.pointerEvents) || "",
                            r.transform = a ? a(this.latestValues, "") : "none",
                            r;
                        var o = this.getLead();
                        if (!this.projectionDelta || !this.layout || !o.target) {
                            var i = {};
                            return this.options.layoutId && (i.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                            i.pointerEvents = wn(n.pointerEvents) || ""),
                            this.hasProjected && !Ci(this.latestValues) && (i.transform = a ? a({}, "") : "none",
                            this.hasProjected = !1),
                            i
                        }
                        var l = o.animationValues || o.latestValues;
                        this.applyTransformsToTarget(),
                        r.transform = Kl(this.projectionDeltaWithTransform, this.treeScale, l),
                        a && (r.transform = a(l, r.transform));
                        var s = this.projectionDelta
                          , u = s.x
                          , c = s.y;
                        for (var f in r.transformOrigin = "".concat(100 * u.origin, "% ").concat(100 * c.origin, "% 0"),
                        o.animationValues ? r.opacity = o === this ? null !== (t = null !== (e = l.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== t ? t : 1 : this.preserveOpacity ? this.latestValues.opacity : l.opacityExit : r.opacity = o === this ? void 0 !== l.opacity ? l.opacity : "" : void 0 !== l.opacityExit ? l.opacityExit : 0,
                        yt)
                            if (void 0 !== l[f]) {
                                var d = yt[f]
                                  , p = d.correct
                                  , h = d.applyTo
                                  , v = "none" === r.transform ? l[f] : p(l[f], o);
                                if (h)
                                    for (var m = h.length, g = 0; g < m; g++)
                                        r[h[g]] = v;
                                else
                                    r[f] = v
                            }
                        return this.options.layoutId && (r.pointerEvents = o === this ? wn(n.pointerEvents) || "" : "none"),
                        r
                    }
                }, {
                    key: "clearSnapshot",
                    value: function() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                }, {
                    key: "resetTree",
                    value: function() {
                        this.root.nodes.forEach((function(e) {
                            var t;
                            return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                        }
                        )),
                        this.root.nodes.forEach(ls),
                        this.root.sharedNodes.clear()
                    }
                }]),
                e
            }()
        }
        function rs(e) {
            e.updateLayout()
        }
        function as(e) {
            var t, n, r, a = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
            if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
                var o = e.layout
                  , i = o.layoutBox
                  , l = o.measuredBox
                  , s = e.options.animationType
                  , u = a.source !== e.layout.source;
                "size" === s ? wi((function(e) {
                    var t = u ? a.measuredBox[e] : a.layoutBox[e]
                      , n = li(t);
                    t.min = i[e].min,
                    t.max = t.min + n
                }
                )) : xs(s, a.layoutBox, i) && wi((function(e) {
                    var t = u ? a.measuredBox[e] : a.layoutBox[e]
                      , n = li(i[e]);
                    t.max = t.min + n
                }
                ));
                var c = bi();
                ci(c, i, a.layoutBox);
                var f = bi();
                u ? ci(f, e.applyTransform(l, !0), a.measuredBox) : ci(f, i, a.layoutBox);
                var d = !Ql(c)
                  , p = !1;
                if (!e.resumeFrom) {
                    var h = e.getClosestProjectingParent();
                    if (h && !h.resumeFrom) {
                        var v = h.snapshot
                          , m = h.layout;
                        if (v && m) {
                            var g = xi();
                            pi(g, a.layoutBox, v.layoutBox);
                            var y = xi();
                            pi(y, i, m.layoutBox),
                            Yl(g, y) || (p = !0),
                            h.options.layoutRoot && (e.relativeTarget = y,
                            e.relativeTargetOrigin = g,
                            e.relativeParent = h)
                        }
                    }
                }
                e.notifyListeners("didUpdate", {
                    layout: i,
                    snapshot: a,
                    delta: f,
                    layoutDelta: c,
                    hasLayoutChanged: d,
                    hasRelativeTargetChanged: p
                })
            } else
                e.isLead() && (null === (r = (n = e.options).onExitComplete) || void 0 === r || r.call(n));
            e.options.transition = void 0
        }
        function os(e) {
            e.isProjectionDirty || (e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)),
            e.isTransformDirty || (e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty))
        }
        function is(e) {
            e.clearSnapshot()
        }
        function ls(e) {
            e.clearMeasurements()
        }
        function ss(e) {
            var t = e.options.visualElement;
            (null === t || void 0 === t ? void 0 : t.getProps().onBeforeLayoutMeasure) && t.notify("BeforeLayoutMeasure"),
            e.resetTransform()
        }
        function us(e) {
            e.finishAnimation(),
            e.targetDelta = e.relativeTarget = e.target = void 0
        }
        function cs(e) {
            e.resolveTargetDelta()
        }
        function fs(e) {
            e.calcProjection()
        }
        function ds(e) {
            e.resetRotation()
        }
        function ps(e) {
            e.removeLeadSnapshot()
        }
        function hs(e, t, n) {
            e.translate = ya(t.translate, 0, n),
            e.scale = ya(t.scale, 1, n),
            e.origin = t.origin,
            e.originPoint = t.originPoint
        }
        function vs(e, t, n, r) {
            e.min = ya(t.min, n.min, r),
            e.max = ya(t.max, n.max, r)
        }
        function ms(e) {
            return e.animationValues && void 0 !== e.animationValues.opacityExit
        }
        var gs = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        };
        function ys(e, t) {
            for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
                if (Boolean(e.path[r].instance)) {
                    n = e.path[r];
                    break
                }
            var a = (n && n !== e.root ? n.instance : document).querySelector('[data-projection-id="'.concat(t, '"]'));
            a && e.mount(a, !0)
        }
        function bs(e) {
            e.min = Math.round(e.min),
            e.max = Math.round(e.max)
        }
        function xs(e, t, n) {
            return "position" === e || "preserve-aspect" === e && !si(ql(t), ql(n), .2)
        }
        var ws = ns({
            attachResizeListener: function(e, t) {
                return Tn(e, "resize", t)
            },
            measureScroll: function() {
                return {
                    x: document.documentElement.scrollLeft || document.body.scrollLeft,
                    y: document.documentElement.scrollTop || document.body.scrollTop
                }
            },
            checkIsScrollRoot: function() {
                return !0
            }
        })
          , ks = {
            current: void 0
        }
          , Ss = ns({
            measureScroll: function(e) {
                return {
                    x: e.scrollLeft,
                    y: e.scrollTop
                }
            },
            defaultParent: function() {
                if (!ks.current) {
                    var e = new ws(0,{});
                    e.mount(window),
                    e.setOptions({
                        layoutScroll: !0
                    }),
                    ks.current = e
                }
                return ks.current
            },
            resetTransform: function(e, t) {
                e.style.transform = void 0 !== t ? t : "none"
            },
            checkIsScrollRoot: function(e) {
                return Boolean("fixed" === window.getComputedStyle(e).position)
            }
        })
          , Es = Ue(Ue(Ue(Ue({}, Zo), rr), Ui), Ol)
          , Cs = vt((function(e, t) {
            return function(e, t, n, r, a) {
                var o = t.forwardMotionProps
                  , i = void 0 !== o && o;
                return Ue(Ue({}, gt(e) ? Pn : jn), {}, {
                    preloadedFeatures: n,
                    useRender: cn(i),
                    createVisualElement: r,
                    projectionNodeConstructor: a,
                    Component: e
                })
            }(e, t, Es, kl, Ss)
        }
        ));
        var Ps = function(e, t) {
            return {
                hidden: {
                    y: "up" === e ? 80 : "down" === e ? -80 : 0,
                    opacity: 0,
                    x: "left" === e ? 80 : "right" === e ? -80 : 0
                },
                show: {
                    y: 0,
                    x: 0,
                    opacity: 1,
                    transition: {
                        type: "tween",
                        duration: 1.2,
                        delay: t,
                        ease: [.25, .25, .25, .75]
                    }
                }
            }
        }
          , js = n(184)
          , Ts = function() {
            return (0,
            js.jsx)("section", {
                className: "min-h-[100vh] lg:min-h-[108vh] flex items-center bg-banner ",
                id: "home",
                children: (0,
                js.jsx)("div", {
                    className: "container mx-auto",
                    children: (0,
                    js.jsx)("div", {
                        className: "flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-6",
                        children: (0,
                        js.jsxs)("div", {
                            className: "flex-1 text-center mt-[50px] mb-[150px] lg:mt-[0px] ",
                            children: [(0,
                            js.jsxs)(Cs.h1, {
                                variants: Ps("up", .3),
                                initial: "hidden",
                                whileInView: "show",
                                viewport: {
                                    once: !1,
                                    amount: .7
                                },
                                className: " text-black/90  text-[42px] leading-[0.9] lg:text-[90px] lg:mt-[200px] mt-10 mb-10 ",
                                children: ["Tierra ", (0,
                                js.jsx)("br", {}), " Productividad ", (0,
                                js.jsx)("br", {}), (0,
                                js.jsx)("span", {
                                    className: "text-new-blue",
                                    children: " Sustentable "
                                })]
                            }), (0,
                            js.jsx)(Cs.h2, {
                                variants: Ps("up", .5),
                                initial: "hidden",
                                whileInView: "show",
                                viewport: {
                                    once: !1,
                                    amount: .7
                                },
                                className: "px-12 mb-4 max-w-xl mt-5 mx-auto text-black/70 font-sans font-medium text-new-green text-[15px] uppercase",
                                children: "Consultora/Asesor\xeda Ambiental y en Seguridad e Higiene"
                            }), (0,
                            js.jsxs)(Cs.p, {
                                variants: Ps("up", .5),
                                initial: "hidden",
                                whileInView: "show",
                                viewport: {
                                    once: !1,
                                    amount: .7
                                },
                                className: "px-12 mb-12 max-w-lg mx-auto text-black/70 font-sans font-normal ",
                                children: ["Adquir\xed un asesoramiento integral en materia de medioambiente y seguridad e higiene, para ", (0,
                                js.jsx)("b", {
                                    children: "empresas y emprendedores"
                                }), "."]
                            })]
                        })
                    })
                })
            })
        };
        function Os() {
            return (0,
            js.jsx)("section", {
                id: "acerca",
                children: (0,
                js.jsx)("div", {
                    className: "overflow-hidden bg-gradient-to-b from-gray-200  to-white pt-20 sm:pb-10 lg:px-[10%]",
                    children: (0,
                    js.jsx)("div", {
                        className: "mx-auto max-w-7xl px-6 lg:px-8",
                        children: (0,
                        js.jsxs)("div", {
                            className: "mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2",
                            children: [(0,
                            js.jsx)("div", {
                                className: "lg:pr-8 lg:pt-4",
                                children: (0,
                                js.jsxs)(Cs.div, {
                                    variants: Ps("down", .3),
                                    initial: "hidden",
                                    whileInView: "show",
                                    viewport: {
                                        once: !1,
                                        amount: .3
                                    },
                                    className: "lg:max-w-lg",
                                    children: [(0,
                                    js.jsx)("h2", {
                                        className: "mt-2 text-3xl font-bold tracking-tight text-new-blue sm:text-4xl",
                                        children: "Acerca de"
                                    }), (0,
                                    js.jsx)("p", {
                                        className: "mt-6 text-lg leading-8 text-gray-600",
                                        children: "Brindamos un servicio de asesoramiento/consultor\xeda, con perspectiva integral en materia medioambiental y en seguridad e higiene, con un alto grado de especificidad y dise\xf1ado a las exactas necesidades del caso."
                                    })]
                                })
                            }), (0,
                            js.jsx)(Cs.div, {
                                variants: Ps("up", .3),
                                initial: "hidden",
                                whileInView: "show",
                                viewport: {
                                    once: !1,
                                    amount: .3
                                },
                                className: "lg:pr-8 lg:pt-4",
                                children: (0,
                                js.jsxs)("div", {
                                    className: "lg:max-w-lg",
                                    children: [(0,
                                    js.jsx)("h2", {
                                        className: "mt-2 text-3xl font-bold tracking-tight text-new-green sm:text-4xl",
                                        children: "Nuestra visi\xf3n"
                                    }), (0,
                                    js.jsx)("p", {
                                        className: "mt-6 text-lg leading-8 text-gray-600",
                                        children: "Aportar mayor grado de sustentabilidad a los productos y servicios que asesoramos, con el objetivo de lograr una mejor\xeda en la productividad, y como consecuencia lograr mayor compromiso ambiental y en materia de seguridad."
                                    })]
                                })
                            })]
                        })
                    })
                })
            })
        }
        var Ns = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , _s = t.createContext && t.createContext(Ns)
          , Ms = function() {
            return Ms = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            Ms.apply(this, arguments)
        }
          , Rs = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
            }
            return n
        };
        function Ls(e) {
            return e && e.map((function(e, n) {
                return t.createElement(e.tag, Ms({
                    key: n
                }, e.attr), Ls(e.child))
            }
            ))
        }
        function As(e) {
            return function(n) {
                return t.createElement(Ds, Ms({
                    attr: Ms({}, e.attr)
                }, n), Ls(e.child))
            }
        }
        function Ds(e) {
            var n = function(n) {
                var r, a = e.attr, o = e.size, i = e.title, l = Rs(e, ["attr", "size", "title"]), s = o || n.size || "1em";
                return n.className && (r = n.className),
                e.className && (r = (r ? r + " " : "") + e.className),
                t.createElement("svg", Ms({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, n.attr, a, l, {
                    className: r,
                    style: Ms(Ms({
                        color: e.color || n.color
                    }, n.style), e.style),
                    height: s,
                    width: s,
                    xmlns: "http://www.w3.org/2000/svg"
                }), i && t.createElement("title", null, i), e.children)
            };
            return void 0 !== _s ? t.createElement(_s.Consumer, null, (function(e) {
                return n(e)
            }
            )) : n(Ns)
        }
        function Vs(e) {
            return As({
                tag: "svg",
                attr: {
                    version: "1",
                    viewBox: "0 0 48 48",
                    enableBackground: "new 0 0 48 48"
                },
                child: [{
                    tag: "polygon",
                    attr: {
                        fill: "#3F51B5",
                        points: "41,7 41,25 23,7"
                    }
                }, {
                    tag: "rect",
                    attr: {
                        x: "17.4",
                        y: "10.3",
                        transform: "matrix(-.707 -.707 .707 -.707 17.661 60.567)",
                        fill: "#3F51B5",
                        width: "8",
                        height: "32.7"
                    }
                }]
            })(e)
        }
        function Is() {
            return Is = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            Is.apply(this, arguments)
        }
        function zs(e, t) {
            if (null == e)
                return {};
            var n, r, a = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++)
                n = o[r],
                t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }
        var Fs = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"]
          , Bs = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
        function Us(e) {
            var n, r = e.basename, a = e.children, o = e.window, i = t.useRef();
            null == i.current && (i.current = (void 0 === (n = {
                window: o,
                v5Compat: !0
            }) && (n = {}),
            L((function(e, t) {
                var n = e.location;
                return _("", {
                    pathname: n.pathname,
                    search: n.search,
                    hash: n.hash
                }, t.state && t.state.usr || null, t.state && t.state.key || "default")
            }
            ), (function(e, t) {
                return "string" === typeof t ? t : M(t)
            }
            ), null, n)));
            var l = i.current
              , s = k(t.useState({
                action: l.action,
                location: l.location
            }), 2)
              , u = s[0]
              , c = s[1];
            return t.useLayoutEffect((function() {
                return l.listen(c)
            }
            ), [l]),
            t.createElement(De, {
                basename: r,
                children: a,
                location: u.location,
                navigationType: u.action,
                navigator: l
            })
        }
        var Hs = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement
          , Ws = t.forwardRef((function(e, n) {
            var r, a = e.onClick, o = e.relative, i = e.reloadDocument, l = e.replace, s = e.state, u = e.target, c = e.to, f = e.preventScrollReset, d = zs(e, Fs), p = !1;
            if (Hs && "string" === typeof c && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(c)) {
                r = c;
                var h = new URL(window.location.href)
                  , v = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c);
                v.origin === h.origin ? c = v.pathname + v.search + v.hash : p = !0
            }
            var m = function(e, n) {
                var r = (void 0 === n ? {} : n).relative;
                ke() || O(!1);
                var a = t.useContext(ye)
                  , o = a.basename
                  , i = a.navigator
                  , l = Ce(e, {
                    relative: r
                })
                  , s = l.hash
                  , u = l.pathname
                  , c = l.search
                  , f = u;
                return "/" !== o && (f = "/" === u ? o : ee([o, u])),
                i.createHref({
                    pathname: f,
                    search: c,
                    hash: s
                })
            }(c, {
                relative: o
            })
              , g = function(e, n) {
                var r = void 0 === n ? {} : n
                  , a = r.target
                  , o = r.replace
                  , i = r.state
                  , l = r.preventScrollReset
                  , s = r.relative
                  , u = Ee()
                  , c = Se()
                  , f = Ce(e, {
                    relative: s
                });
                return t.useCallback((function(t) {
                    if (function(e, t) {
                        return 0 === e.button && (!t || "_self" === t) && !function(e) {
                            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                        }(e)
                    }(t, a)) {
                        t.preventDefault();
                        var n = void 0 !== o ? o : M(c) === M(f);
                        u(e, {
                            replace: n,
                            state: i,
                            preventScrollReset: l,
                            relative: s
                        })
                    }
                }
                ), [c, u, f, o, i, a, e, l, s])
            }(c, {
                replace: l,
                state: s,
                target: u,
                preventScrollReset: f,
                relative: o
            });
            return t.createElement("a", Is({}, d, {
                href: r || m,
                onClick: p || i ? a : function(e) {
                    a && a(e),
                    e.defaultPrevented || g(e)
                }
                ,
                ref: n,
                target: u
            }))
        }
        ));
        var $s = t.forwardRef((function(e, n) {
            var r = e["aria-current"]
              , a = void 0 === r ? "page" : r
              , o = e.caseSensitive
              , i = void 0 !== o && o
              , l = e.className
              , s = void 0 === l ? "" : l
              , u = e.end
              , c = void 0 !== u && u
              , f = e.style
              , d = e.to
              , p = e.children
              , h = zs(e, Bs)
              , v = Ce(d, {
                relative: h.relative
            })
              , m = Se()
              , g = t.useContext(me)
              , y = t.useContext(ye).navigator
              , b = y.encodeLocation ? y.encodeLocation(v).pathname : v.pathname
              , x = m.pathname
              , w = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
            i || (x = x.toLowerCase(),
            w = w ? w.toLowerCase() : null,
            b = b.toLowerCase());
            var k, S = x === b || !c && x.startsWith(b) && "/" === x.charAt(b.length), E = null != w && (w === b || !c && w.startsWith(b) && "/" === w.charAt(b.length)), C = S ? a : void 0;
            k = "function" === typeof s ? s({
                isActive: S,
                isPending: E
            }) : [s, S ? "active" : null, E ? "pending" : null].filter(Boolean).join(" ");
            var P = "function" === typeof f ? f({
                isActive: S,
                isPending: E
            }) : f;
            return t.createElement(Ws, Is({}, h, {
                "aria-current": C,
                className: k,
                ref: n,
                style: P,
                to: d
            }), "function" === typeof p ? p({
                isActive: S,
                isPending: E
            }) : p)
        }
        ));
        var Qs, Ys;
        (function(e) {
            e.UseScrollRestoration = "useScrollRestoration",
            e.UseSubmitImpl = "useSubmitImpl",
            e.UseFetcher = "useFetcher"
        }
        )(Qs || (Qs = {})),
        function(e) {
            e.UseFetchers = "useFetchers",
            e.UseScrollRestoration = "useScrollRestoration"
        }(Ys || (Ys = {}));
        var qs = function() {
            return (0,
            js.jsx)("section", {
                className: "section my-1 lg:mb-0 lg:py-0 lg:mt-10 ",
                id: "about",
                children: (0,
                js.jsx)("div", {
                    className: "container px-[11.5%] mx-auto",
                    children: (0,
                    js.jsxs)("div", {
                        className: "flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ",
                        children: [(0,
                        js.jsx)(Cs.div, {
                            variants: Ps("right", .3),
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: !1,
                                amount: .3
                            },
                            className: "lg:flex-1 bg-about bg-contain bg-no-repeat h-[300px] lg:h-[440px] rounded-lg lg:bg-top bg-bottom mb-10 lg:mb-0 lg:mt-20  "
                        }), (0,
                        js.jsxs)(Cs.div, {
                            className: "flex-1",
                            variants: Ps("left", .5),
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: !1,
                                amount: .3
                            },
                            children: [(0,
                            js.jsx)("h2", {
                                className: "h2 text-new-green text-3xl mb-3 leading-1 font-semibold",
                                children: "Asesoramiento, Consultor\xeda y Gesti\xf3n Ambiental"
                            }), (0,
                            js.jsxs)("p", {
                                className: "mb-6 text-lg",
                                children: ["Ofrecemos un servicio general e integral del proceso productivo, y tambi\xe9n uno enfocado en la resoluci\xf3n de situaciones y o gestiones particulares. ", (0,
                                js.jsx)("br", {}), " Realizamos elaboraci\xf3n de informes para tramitaci\xf3n de expedientes tanto en organismos municipales como en ADA, Ministerio de Ambiente de Provincia De Buenos Aires (OPDS), APrA, INA y ACUMAR."]
                            }), (0,
                            js.jsx)("div", {
                                className: "flex gap-x-8 items-center",
                                children: (0,
                                js.jsxs)(Ws, {
                                    to: "/gestionambiental",
                                    className: "text-new-blue text-lg font-medium flex hover:text-green-600 hover:underline ",
                                    children: ["Ver m\xe1s", (0,
                                    js.jsx)(Vs, {
                                        className: "flex ml-2 text-white justify-center items-center text-xl mt-1"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            })
        }
          , Xs = function() {
            return (0,
            js.jsx)("section", {
                className: "section mt-10 mb-1 lg:my-0 lg:py-0 ",
                id: "seguridad",
                children: (0,
                js.jsx)("div", {
                    className: "container px-[11.5%] mx-auto",
                    children: (0,
                    js.jsxs)("div", {
                        className: "flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-10",
                        children: [(0,
                        js.jsxs)(Cs.div, {
                            className: "flex-1",
                            variants: Ps("right", .5),
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: !1,
                                amount: .3
                            },
                            children: [(0,
                            js.jsx)("h2", {
                                className: "h2 text-new-blue text-3xl mb-8 leading-1 font-semibold",
                                children: "Asesoramiento, Consultor\xeda en Seguridad e Higiene"
                            }), (0,
                            js.jsx)("p", {
                                className: "lg:mb-6 text-lg",
                                children: "Realizamos diagn\xf3sticos e informes sobre la seguridad empresarial o sobre situaciones espec\xedficas."
                            }), (0,
                            js.jsx)("div", {
                                className: "flex gap-x-8 items-center",
                                children: (0,
                                js.jsxs)(Ws, {
                                    to: "/seguridad",
                                    className: "text-new-green text-lg font-medium flex hover:text-blue-600 hover:underline mt-6",
                                    children: ["Ver m\xe1s", (0,
                                    js.jsx)(Vs, {
                                        className: "flex ml-2 text-white justify-center items-center text-xl mt-1"
                                    })]
                                })
                            })]
                        }), (0,
                        js.jsx)(Cs.div, {
                            variants: Ps("left", .3),
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: !1,
                                amount: .3
                            },
                            className: "lg:flex-1 bg-aboutOne bg-contain bg-no-repeat h-[250px] lg:h-[440px] rounded-lg lg:bg-top bg-bottom lg:mt-20 my-0  "
                        })]
                    })
                })
            })
        }
          , Ks = function() {
            return (0,
            js.jsx)("section", {
                className: "section my-1 lg:mb-0 lg:py-0 lg:mt-10 ",
                id: "capacitaciones",
                children: (0,
                js.jsx)("div", {
                    className: "container px-[11.5%] mx-auto",
                    children: (0,
                    js.jsxs)("div", {
                        className: "flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ",
                        children: [(0,
                        js.jsx)(Cs.div, {
                            variants: Ps("right", .3),
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: !1,
                                amount: .3
                            },
                            className: "lg:flex-1 bg-aboutTwo bg-contain bg-no-repeat h-[200px] lg:h-[440px] rounded-lg lg:bg-top bg-bottom mb-10 lg:mb-0 lg:mt-20  "
                        }), (0,
                        js.jsxs)(Cs.div, {
                            className: "flex-1",
                            variants: Ps("left", .5),
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: !1,
                                amount: .3
                            },
                            children: [(0,
                            js.jsx)("h2", {
                                className: "h2 text-new-blue text-3xl mb-8 leading-1 font-semibold",
                                children: "Capacitaciones"
                            }), (0,
                            js.jsx)("p", {
                                className: "mb-6 text-lg",
                                children: "Dictamos capacitaciones para empresas, a trabajadores y/o directivos, en tem\xe1ticas ambientales y de seguridad e higiene en el \xe1mbito laboral, con material de soporte, dictados de forma presencial y/o remota."
                            }), (0,
                            js.jsx)("div", {
                                className: "flex gap-x-8 items-center",
                                children: (0,
                                js.jsxs)(Ws, {
                                    to: "/capacitaciones",
                                    className: "text-new-green text-lg font-medium flex hover:text-blue-600 hover:underline ",
                                    children: ["Ver m\xe1s", (0,
                                    js.jsx)(Vs, {
                                        className: "flex ml-2 text-white justify-center items-center text-xl mt-1"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            })
        }
          , Gs = function() {
            return (0,
            js.jsx)("section", {
                className: "section mt-2 mb-1 lg:my-0 lg:py-0",
                id: "agenda",
                children: (0,
                js.jsx)("div", {
                    className: "container px-[11.5%] mx-auto",
                    children: (0,
                    js.jsxs)("div", {
                        className: "flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-10",
                        children: [(0,
                        js.jsxs)(Cs.div, {
                            className: "flex-1",
                            variants: Ps("right", .5),
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: !1,
                                amount: .3
                            },
                            children: [(0,
                            js.jsx)("h2", {
                                className: "h2 text-new-green text-3xl mb-8 leading-1 font-semibold",
                                children: "Agenda de Objetivos Sostenibles y Comunicaci\xf3n ambiental"
                            }), (0,
                            js.jsx)("p", {
                                className: "mb-2 text-lg",
                                children: "Dise\xf1o y gesti\xf3n de la comunicaci\xf3n, y difusi\xf3n de la sostenibilidad de la empresa, de los procesos que se llevan a cabo para lograrla, programaci\xf3n y seguimiento de agenda de objetivos sostenibles, etc."
                            })]
                        }), (0,
                        js.jsx)(Cs.div, {
                            variants: Ps("left", .3),
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: !1,
                                amount: .3
                            },
                            className: "lg:flex-1 bg-aboutThree bg-contain bg-no-repeat h-[300px] lg:h-[440px] rounded-lg lg:bg-top bg-bottom mb-10 lg:mb-0 lg:mt-20  "
                        })]
                    })
                })
            })
        }
          , Zs = function() {
            return (0,
            js.jsxs)(js.Fragment, {
                children: [(0,
                js.jsx)(qs, {}), (0,
                js.jsx)(Xs, {}), (0,
                js.jsx)(Ks, {}), (0,
                js.jsx)(Gs, {})]
            })
        }
          , Js = function() {
            return (0,
            js.jsxs)(js.Fragment, {
                children: [(0,
                js.jsx)(Ts, {}), (0,
                js.jsx)(Os, {}), (0,
                js.jsx)(Zs, {})]
            })
        }
          , eu = function() {
            return (0,
            js.jsx)("div", {
                name: "about",
                className: "w-full h-screen bg-[#0a192f] text-gray-300",
                children: (0,
                js.jsxs)("div", {
                    className: "flex flex-col justify-center items-center w-full h-full",
                    children: [(0,
                    js.jsxs)("div", {
                        className: "max-w-[1000px] w-full grid grid-cols-2 gap-8",
                        children: [(0,
                        js.jsx)("div", {
                            className: "sm:text-right pb-8 pl-4",
                            children: (0,
                            js.jsx)("p", {
                                className: "text-4xl font-bold inline border-b-4 border-pink-600",
                                children: "About"
                            })
                        }), (0,
                        js.jsx)("div", {})]
                    }), (0,
                    js.jsxs)("div", {
                        className: "max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4",
                        children: [(0,
                        js.jsx)("div", {
                            className: "sm:text-right text-4xl font-bold",
                            children: (0,
                            js.jsx)("p", {
                                children: "Hi. I'm Sai Kumar, nice to meet you. Please take a look around."
                            })
                        }), (0,
                        js.jsx)("div", {
                            children: (0,
                            js.jsx)("p", {
                                children: "I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?"
                            })
                        })]
                    })]
                })
            })
        }
          , tu = n.p + "static/media/logo.b5293b9c7fba3dc7e545.png"
          , nu = n(667)
          , ru = function() {
            return ru = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ,
            ru.apply(this, arguments)
        };
        var au = ""
          , ou = null
          , iu = null
          , lu = null;
        function su() {
            au = "",
            null !== ou && ou.disconnect(),
            null !== iu && (window.clearTimeout(iu),
            iu = null)
        }
        function uu(e) {
            return ["BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(e.tagName) && !e.hasAttribute("disabled") || ["A", "AREA"].includes(e.tagName) && e.hasAttribute("href")
        }
        function cu() {
            var e = null;
            if ("#" === au)
                e = document.body;
            else {
                var t = au.replace("#", "");
                null === (e = document.getElementById(t)) && "#top" === au && (e = document.body)
            }
            if (null !== e) {
                lu(e);
                var n = e.getAttribute("tabindex");
                return null !== n || uu(e) || e.setAttribute("tabindex", -1),
                e.focus({
                    preventScroll: !0
                }),
                null !== n || uu(e) || (e.blur(),
                e.removeAttribute("tabindex")),
                su(),
                !0
            }
            return !1
        }
        function fu(e) {
            return t.forwardRef((function(n, r) {
                var a = "";
                "string" === typeof n.to && n.to.includes("#") ? a = "#" + n.to.split("#").slice(1).join("#") : "object" === typeof n.to && "string" === typeof n.to.hash && (a = n.to.hash);
                var o = {};
                e === $s && (o.isActive = function(e, t) {
                    return e && e.isExact && t.hash === a
                }
                );
                var i = function(e, t) {
                    var n = {};
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var a = 0;
                        for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                            t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                    }
                    return n
                }(n, ["scroll", "smooth", "timeout", "elementId"]);
                return t.createElement(e, ru({}, o, i, {
                    onClick: function(e) {
                        var t;
                        su(),
                        au = n.elementId ? "#" + n.elementId : a,
                        n.onClick && n.onClick(e),
                        "" === au || e.defaultPrevented || 0 !== e.button || n.target && "_self" !== n.target || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || (lu = n.scroll || function(e) {
                            return n.smooth ? e.scrollIntoView({
                                behavior: "smooth"
                            }) : e.scrollIntoView()
                        }
                        ,
                        t = n.timeout,
                        window.setTimeout((function() {
                            !1 === cu() && (null === ou && (ou = new MutationObserver(cu)),
                            ou.observe(document, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            }),
                            iu = window.setTimeout((function() {
                                su()
                            }
                            ), t || 1e4))
                        }
                        ), 0))
                    },
                    ref: r
                }), n.children)
            }
            ))
        }
        var du = fu(Ws)
          , pu = (fu($s),
        function() {
            return (0,
            js.jsx)("div", {
                className: " grid justify-items-center ",
                children: (0,
                js.jsxs)("div", {
                    className: "dropdown inline-block relative",
                    children: [(0,
                    js.jsxs)("button", {
                        className: "bg-transparent  px-4 rounded inline-flex items-center  ",
                        children: [(0,
                        js.jsx)("span", {
                            className: "mx-1",
                            children: "Servicios"
                        }), (0,
                        js.jsxs)("svg", {
                            className: "fill-current h-4 w-4",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            children: [(0,
                            js.jsx)("path", {
                                d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            }), " "]
                        })]
                    }), (0,
                    js.jsxs)("ul", {
                        className: "dropdown-menu absolute hidden text-gray font-normal pt-1",
                        children: [(0,
                        js.jsx)("li", {
                            children: (0,
                            js.jsx)(Ws, {
                                to: "/gestionambiental",
                                className: "cursor-pointer rounded-t bg-blue-200 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap",
                                children: "Gesti\xf3n Ambiental"
                            })
                        }), (0,
                        js.jsx)("li", {
                            children: (0,
                            js.jsx)(Ws, {
                                to: "/seguridad",
                                className: "cursor-pointer rounded-t bg-blue-300 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap",
                                children: "Seguridad e Higiene"
                            })
                        }), (0,
                        js.jsx)("li", {
                            children: (0,
                            js.jsx)(Ws, {
                                to: "/capacitaciones",
                                className: "cursor-pointer rounded-t bg-blue-400 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap",
                                children: "Capacitaciones"
                            })
                        }), (0,
                        js.jsx)("li", {
                            children: (0,
                            js.jsx)(du, {
                                to: "/#agenda",
                                className: "cursor-pointer rounded-t bg-blue-500 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap",
                                smooth: !0,
                                offset: -140,
                                children: "Agenda de Objetivos Sostenibles y Comunicaci\xf3n ambiental"
                            })
                        })]
                    })]
                })
            })
        }
        )
          , hu = function() {
            var e = k((0,
            t.useState)(!1), 2)
              , n = e[0]
              , r = e[1];
            return (0,
            js.jsx)("div", {
                children: (0,
                js.jsx)("nav", {
                    className: "bg-blue-100 fixed z-50 w-full shadow px-[6%]",
                    children: (0,
                    js.jsxs)("div", {
                        className: "justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8",
                        children: [(0,
                        js.jsx)("div", {
                            children: (0,
                            js.jsxs)("div", {
                                className: "cursor-pointer flex items-center justify-between py-0 md:py-0 md:block",
                                children: [(0,
                                js.jsx)(du, {
                                    to: "/#home",
                                    smooth: !0,
                                    children: (0,
                                    js.jsx)("img", {
                                        src: tu,
                                        className: "w-[30%] lg:w-[20%]",
                                        alt: "logo tierra productividad sustentable"
                                    })
                                }), (0,
                                js.jsx)("div", {
                                    className: "md:hidden",
                                    children: (0,
                                    js.jsx)("button", {
                                        className: "p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border",
                                        onClick: function() {
                                            return r(!n)
                                        },
                                        children: n ? (0,
                                        js.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-6 h-6 text-black",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0,
                                            js.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                                clipRule: "evenodd"
                                            })
                                        }) : (0,
                                        js.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-6 h-6 text-black",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: (0,
                                            js.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M4 6h16M4 12h16M4 18h16"
                                            })
                                        })
                                    })
                                })]
                            })
                        }), (0,
                        js.jsx)("div", {
                            children: (0,
                            js.jsx)("div", {
                                className: "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ".concat(n ? "block" : "hidden"),
                                children: (0,
                                js.jsxs)("ul", {
                                    className: "items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0",
                                    children: [(0,
                                    js.jsx)("li", {
                                        className: "text-black/90",
                                        children: (0,
                                        js.jsx)(du, {
                                            to: "/#home",
                                            smooth: !0,
                                            className: "cursor-pointer h-[60px] flex items-center justify-center",
                                            children: "Inicio"
                                        })
                                    }), (0,
                                    js.jsx)("li", {
                                        className: "text-black/90",
                                        children: (0,
                                        js.jsx)(du, {
                                            to: "/#acerca",
                                            smooth: !0,
                                            offset: -70,
                                            className: "cursor-pointer h-[60px] flex items-center justify-center",
                                            children: "Acerca de"
                                        })
                                    }), (0,
                                    js.jsx)("li", {
                                        children: (0,
                                        js.jsx)(pu, {
                                            className: "cursor-pointer h-[60px] flex items-center justify-center"
                                        })
                                    }), (0,
                                    js.jsx)("li", {
                                        className: "text-black/90",
                                        children: (0,
                                        js.jsx)(nu.rU, {
                                            to: "contact",
                                            smooth: !0,
                                            className: "cursor-pointer h-[60px] flex items-center justify-center",
                                            children: "Contacto"
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                })
            })
        }
          , vu = function() {
            return (0,
            js.jsx)("footer", {
                className: "flex flex-col justify-end items-center  text-black/70 mb-[20px] mt-28 lg:px-24 px-10 ",
                children: (0,
                js.jsx)("div", {
                    className: "container",
                    children: (0,
                    js.jsx)("div", {
                        className: "row",
                        children: (0,
                        js.jsx)("div", {
                            className: "col-md-12 text-center",
                            children: (0,
                            js.jsxs)("p", {
                                children: ["Copyright \xa9 Todos los derechos reservados | Powered by", " ", (0,
                                js.jsx)(Ws, {
                                    to: "https://www.linkedin.com/in/thiagoredondo/",
                                    target: "_blank",
                                    className: "text-new-blue hover:text-black hover:underline",
                                    children: "Thiago Redondo"
                                })]
                            })
                        })
                    })
                })
            })
        };
        function mu(e) {
            return As({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    }
                }]
            })(e)
        }
        function gu(e) {
            return As({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    }
                }]
            })(e)
        }
        function yu(e) {
            return As({
                tag: "svg",
                attr: {
                    viewBox: "0 0 512 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    }
                }]
            })(e)
        }
        var bu = function() {
            return (0,
            js.jsx)("section", {
                className: "bg-blue-200 mt-20 py-10 ",
                id: "contact",
                children: (0,
                js.jsx)("div", {
                    className: "container mx-auto",
                    children: (0,
                    js.jsx)("div", {
                        className: "flex justify-between items-center",
                        children: (0,
                        js.jsxs)(Cs.div, {
                            variants: Ps("up", .7),
                            whileInView: "show",
                            viewport: {
                                once: !1,
                                amount: .7
                            },
                            className: "text-black/90 flex text-[50px] gap-x-12 max-w-max mx-auto lg:mx-auto ",
                            children: [(0,
                            js.jsx)(Ws, {
                                to: "mailto:tierra.productividadsustentable@gmail.com",
                                className: "text-black/70 hover:text-blue-400",
                                children: (0,
                                js.jsx)(yu, {})
                            }), (0,
                            js.jsx)(Ws, {
                                to: "https://api.whatsapp.com/send?phone=5492915162375&text=Buenas,%20me%20gustar\xeda%20asesorarme%20sobre%20Tierra%20Productividad%20Sustentable%20",
                                className: "text-black/70 hover:text-blue-400",
                                children: (0,
                                js.jsx)(gu, {})
                            }), (0,
                            js.jsx)(Ws, {
                                to: "https://www.instagram.com/tierraproductividadsustentable/",
                                className: "text-black/70 hover:text-blue-400",
                                children: (0,
                                js.jsx)(mu, {})
                            })]
                        })
                    })
                })
            })
        }
          , xu = n.p + "static/media/portfolio-img5.429e28d3c8843f0d4fff.jpg"
          , wu = n.p + "static/media/portfolio-img6.cab0a1680bfd9c9a0861.jpg"
          , ku = function() {
            return (0,
            js.jsx)(du, {
                to: "/#home",
                smooth: !0,
                children: (0,
                js.jsx)("button", {
                    type: "button",
                    className: "flex mx-auto mt-28 justify-center items-center px-6 py-2.5 bg-blue-400 text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out",
                    children: "\u2190 Volver al Inicio"
                })
            })
        }
          , Su = function(e) {
            v(n, e);
            var t = b(n);
            function n() {
                return u(this, n),
                t.apply(this, arguments)
            }
            return p(n, [{
                key: "componentDidMount",
                value: function() {
                    nu.NY.scrollToTop()
                }
            }, {
                key: "render",
                value: function() {
                    return (0,
                    js.jsx)("div", {
                        className: "bg-site bg-no-repeat bg-cover overflow-hidden",
                        children: (0,
                        js.jsxs)("section", {
                            className: "bg-gray-100 text-black/90 px-[12%] py-32 mt-12 ",
                            children: [(0,
                            js.jsxs)("div", {
                                className: "container lg:mx-auto grid grid-cols-1 items-center justify-center md:justify-between",
                                children: [(0,
                                js.jsxs)("div", {
                                    className: "lg:pr-28",
                                    children: [(0,
                                    js.jsx)("h2", {
                                        className: "text-4xl font-bold mb-5 border-b-[5px] lg:w-[768px] border-blue-600 pb-2",
                                        children: "Asesoramiento, Consultor\xeda en Seguridad e Higiene"
                                    }), (0,
                                    js.jsx)("p", {
                                        children: "Realizamos diagn\xf3sticos e informes sobre la seguridad empresarial o sobre situaciones espec\xedficas, entre las cuales pueden destacarse las m\xe1s habituales como:"
                                    }), (0,
                                    js.jsx)("p", {
                                        children: (0,
                                        js.jsxs)("ul", {
                                            class: "list-disc ml-2 leading-1",
                                            children: [(0,
                                            js.jsxs)("li", {
                                                children: ["Evaluaci\xf3n de riesgos laborales en acuerdo a OSHAS 18001, confecci\xf3n de matrices de riesgos.", " "]
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Asesoramiento en Ley 19.587 y Decreto 351/96."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Dise\xf1o y ejecuci\xf3n de planes de mejora continua."
                                            }), (0,
                                            js.jsxs)("li", {
                                                children: [" ", "Investigaci\xf3n y evaluaci\xf3n en prevenci\xf3n de accidentes."]
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Asesoramiento e implementaci\xf3n de sistemas de organizaci\xf3n empresarial para minimizar riesgos en el \xe1mbito laboral."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Asesoramiento en gesti\xf3n de normas ISO 9001 e ISO 45001 en evaluaci\xf3n y desarrollo de Sistemas de Seguridad en el Trabajo."
                                            }), (0,
                                            js.jsxs)("li", {
                                                children: [" ", "Estudios de contaminaci\xf3n en ambiente laboral, Resoluci\xf3n SRT 861/15."]
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "\uf0b7 Estudios de iluminaci\xf3n, Resoluci\xf3n SRT N\xb0 84/12 e iluminaci\xf3n cronobiol\xf3gica."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Estudios de ruido, Resoluci\xf3n SRT N\xb0 85/12."
                                            })]
                                        })
                                    })]
                                }), (0,
                                js.jsxs)("div", {
                                    className: "about-img grid md:grid-cols-2 lg:space-x-2 lg:mt-14",
                                    children: [(0,
                                    js.jsx)("img", {
                                        src: xu,
                                        alt: "coding illustration",
                                        className: "lgw-[80%] md:ml-auto mt-10 lg:mt-0"
                                    }), (0,
                                    js.jsx)("img", {
                                        src: wu,
                                        alt: "coding illustration",
                                        className: "lgw-[80%] md:ml-auto mt-10 lg:mt-0"
                                    })]
                                })]
                            }), (0,
                            js.jsx)(ku, {})]
                        })
                    })
                }
            }]),
            n
        }(t.Component)
          , Eu = Su
          , Cu = n.p + "static/media/portfolio-img1.44ef17759afe6deee5fa.jpg"
          , Pu = n.p + "static/media/portfolio-img2.8353b2aa4d0e7ec2c51b.jpg"
          , ju = function(e) {
            v(n, e);
            var t = b(n);
            function n() {
                return u(this, n),
                t.apply(this, arguments)
            }
            return p(n, [{
                key: "componentDidMount",
                value: function() {
                    nu.NY.scrollToTop()
                }
            }, {
                key: "render",
                value: function() {
                    return (0,
                    js.jsx)("div", {
                        className: "bg-site bg-no-repeat bg-cover overflow-hidden",
                        children: (0,
                        js.jsxs)("section", {
                            className: "bg-gray-100 text-black/90 px-[12%] py-32 mt-12 ",
                            children: [(0,
                            js.jsxs)("div", {
                                className: "container lg:mx-auto grid grid-cols-1 items-center justify-center md:justify-between",
                                children: [(0,
                                js.jsxs)("div", {
                                    className: "lg:pr-28",
                                    children: [(0,
                                    js.jsx)("h2", {
                                        className: "text-4xl font-bold mb-5 border-b-[5px] lg:w-[268px] border-blue-600 pb-2",
                                        children: "Capacitaciones"
                                    }), (0,
                                    js.jsx)("p", {
                                        children: (0,
                                        js.jsxs)("ul", {
                                            class: "list-disc ml-2 leading-8",
                                            children: [(0,
                                            js.jsx)("li", {
                                                children: "Dictamos capacitaciones para empresas, a trabajadores y /o directivos, en tem\xe1ticas ambientales y de seguridad e higiene en el \xe1mbito laboral, con material de soporte, dictados de forma presencial y/o remota."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Adem\xe1s de capacitaciones t\xe9cnicas, brindamos servicios complementarios de fortalecimiento del \xe1mbito laboral, orientado a empresas, llevado a cabo mediante reuniones, entrevistas y/o exposiciones, para mejorar la comunicaci\xf3n, exponer conflictos, ofrecer un espacio de debate y reflexi\xf3n, con el objetivo de mejorar el clima laboral, fomentando las oportunidades de que l@s trabajadores se sientan motivados en su labor diaria y orientado a generar beneficios personales y colectivos necesarios para la productividad. Tambi\xe9n se ofrece el servicio orientado a la exposici\xf3n y debate de los conflictos que surgen por la falta de inclusi\xf3n social y perspectiva de g\xe9nero en muchos \xe1mbitos laborales."
                                            })]
                                        })
                                    })]
                                }), (0,
                                js.jsxs)("div", {
                                    className: "about-img grid md:grid-cols-2 lg:space-x-5 lg:mt-14",
                                    children: [(0,
                                    js.jsx)("img", {
                                        src: Cu,
                                        alt: "coding illustration",
                                        className: "lg:w-[80%] md:ml-auto mt-10 lg:mt-0"
                                    }), (0,
                                    js.jsx)("img", {
                                        src: Pu,
                                        alt: "coding illustration",
                                        className: "lg:w-[80%] md:ml-auto mt-10 lg:mt-0"
                                    })]
                                })]
                            }), (0,
                            js.jsx)(ku, {})]
                        })
                    })
                }
            }]),
            n
        }(t.Component)
          , Tu = ju
          , Ou = n.p + "static/media/portfolio-img3.ef8af3a42faae33080e5.jpg"
          , Nu = n.p + "static/media/portfolio-img4.dec0da4ca458caae96bc.jpg"
          , _u = function(e) {
            v(n, e);
            var t = b(n);
            function n() {
                return u(this, n),
                t.apply(this, arguments)
            }
            return p(n, [{
                key: "componentDidMount",
                value: function() {
                    nu.NY.scrollToTop()
                }
            }, {
                key: "render",
                value: function() {
                    return (0,
                    js.jsx)("div", {
                        className: "bg-site bg-no-repeat bg-cover overflow-hidden",
                        children: (0,
                        js.jsxs)("section", {
                            className: "bg-gray-100 text-black/90 px-[12%] py-32 mt-12 ",
                            children: [(0,
                            js.jsxs)("div", {
                                className: "container lg:mx-auto grid grid-cols-1 items-center justify-center md:justify-between",
                                children: [(0,
                                js.jsxs)("div", {
                                    className: "lg:pr-28",
                                    children: [(0,
                                    js.jsx)("h2", {
                                        className: "text-4xl font-bold mb-5 border-b-[5px] lg:w-[735px] border-green-600 pb-2",
                                        children: "Asesoramiento, Consultor\xeda y Gesti\xf3n Ambiental"
                                    }), (0,
                                    js.jsx)("p", {
                                        className: "pb-5",
                                        children: "Ofrecemos un servicio general e integral del proceso productivo, y tambi\xe9n uno enfocado en la resoluci\xf3n de situaciones y o gestiones particulares."
                                    }), (0,
                                    js.jsx)("p", {
                                        className: "pb-5",
                                        children: "Realizamos elaboraci\xf3n de informes para tramitaci\xf3n de expedientes tanto en organismos municipales como en ADA, Ministerio de Ambiente de Provincia De Buenos Aires (OPDS), APrA, INA y ACUMAR."
                                    }), (0,
                                    js.jsx)("p", {
                                        children: "Dentro de las situaciones/gestiones espec\xedficas, pueden destacarse las m\xe1s habituales como:"
                                    }), (0,
                                    js.jsx)("p", {
                                        children: (0,
                                        js.jsxs)("ul", {
                                            class: "list-disc ml-2  ",
                                            children: [(0,
                                            js.jsx)("li", {
                                                children: "Evaluaci\xf3n de Nivel de Complejidad Ambiental tramitaciones de obtenci\xf3n/Renovaci\xf3n de Certificados de Aptitud Ambiental (CAA), o de tramitaci\xf3n en Municipio correspondiente."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Estudios de factibilidad, estudios de evaluaci\xf3n de riesgos e impacto ambiental."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Estudios de diagn\xf3stico ambiental, de l\xednea de base, de dise\xf1o de sistemas y planes de gesti\xf3n ambiental."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: " Auditor\xedas Ambientales y descargo ante Actas."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Asesoramiento en situaciones ambientales en las que se involucre la participaci\xf3n ciudadana."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Evaluaci\xf3n en caracterizaci\xf3n ambiental de sitios contaminados, asesoramiento en recomposici\xf3n, saneamiento y remediaci\xf3n."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Dise\xf1o de muestreo y planes de sondeos y monitoreos."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Tratamiento de residuos s\xf3lidos urbanos/especiales o peligrosos/patog\xe9nicos, tratamiento de efluentes y de emisiones gaseosas."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Dise\xf1o e implementaci\xf3n de t\xe9cnicas de compostaje, de landfarming, y de t\xe9cnicas en agroecolog\xeda."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Asesoramiento en gesti\xf3n y organizaci\xf3n empresarial acorde a Norma 14001 en evaluaci\xf3n y desarrollo de Sistemas de Gesti\xf3n Ambiental."
                                            }), (0,
                                            js.jsx)("li", {
                                                children: "Evaluaci\xf3n, diagn\xf3stico y planes de responsabilidad ambiental social y empresarial."
                                            }), (0,
                                            js.jsxs)("li", {
                                                children: ["Estudios de huella de carbono y huella h\xeddrica, de eficiencia energ\xe9tica y de energ\xedas renovables, de an\xe1lisis de ciclo de vida, de implementaci\xf3n o mejor\xeda en enfoque de 5R, qu\xedmica verde y econom\xeda circular.", " "]
                                            })]
                                        })
                                    })]
                                }), (0,
                                js.jsxs)("div", {
                                    className: "about-img grid md:grid-cols-2 lg:space-x-5 lg:mt-14",
                                    children: [(0,
                                    js.jsx)("img", {
                                        src: Ou,
                                        alt: "coding illustration",
                                        className: "lgw-[80%] md:ml-auto mt-10 lg:mt-0"
                                    }), (0,
                                    js.jsx)("img", {
                                        src: Nu,
                                        alt: "coding illustration",
                                        className: "lgw-[80%] md:ml-auto mt-10 lg:mt-0"
                                    })]
                                })]
                            }), (0,
                            js.jsx)(ku, {})]
                        })
                    })
                }
            }]),
            n
        }(t.Component)
          , Mu = _u;
        var Ru = function() {
            return (0,
            js.jsxs)("div", {
                className: "overflow-hidden",
                children: [(0,
                js.jsx)(hu, {}), (0,
                js.jsxs)(Ve, {
                    children: [(0,
                    js.jsx)(Ae, {
                        path: "/",
                        element: (0,
                        js.jsx)(Js, {})
                    }), (0,
                    js.jsx)(Ae, {
                        path: "/about",
                        element: (0,
                        js.jsx)(eu, {})
                    }), (0,
                    js.jsx)(Ae, {
                        path: "/gestionambiental",
                        element: (0,
                        js.jsx)(Mu, {})
                    }), (0,
                    js.jsx)(Ae, {
                        path: "/seguridad",
                        element: (0,
                        js.jsx)(Eu, {})
                    }), (0,
                    js.jsx)(Ae, {
                        path: "/capacitaciones",
                        element: (0,
                        js.jsx)(Tu, {})
                    }), (0,
                    js.jsx)(Ae, {
                        path: "/#agenda",
                        element: (0,
                        js.jsx)(Gs, {})
                    })]
                }), (0,
                js.jsx)(bu, {}), (0,
                js.jsx)(vu, {})]
            })
        };
        a.createRoot(document.getElementById("root")).render((0,
        js.jsx)(Us, {
            children: (0,
            js.jsx)(Ru, {})
        }))
    }()
}();
//# sourceMappingURL=main.2d2a9d00.js.map
