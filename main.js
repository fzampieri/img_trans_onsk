!function (e) {
    function t(t) {
        for (var r, i, s = t[0], c = t[1], u = t[2], p = 0, h = []; p < s.length; p++) 
            i = s[p],
            Object
                .prototype
                .hasOwnProperty
                .call(a, i) && a[i] && h.push(a[i][0]),
            a[i] = 0;
        for (r in c) 
            Object
                .prototype
                .hasOwnProperty
                .call(c, r) && (e[r] = c[r]);
        for (l && l(t); h.length;) 
            h.shift()();
        return o
            .push
            .apply(o, u || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], r = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== a[c] && (r = !1)
            }
            r && (o.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var r = {},
        a = {
            0: 0
        },
        o = [];
    function i(t) {
        if (r[t]) 
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    i.m = e,
    i.c = r,
    i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(
            e,
            Symbol.toStringTag,
            {value: "Module"}
        ),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) 
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) 
            return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) 
            for (var r in e) 
                i.d(n, r, function (t) {
                    return e[t]
                }.bind(null, r));
    return n
    },
    i.n = function (e) {
        var t = e && e.__esModule
            ? function () {
                return e.default
            }
            : function () {
                return e
            };
        return i.d(t, "a", t),
        t
    },
    i.o = function (e, t) {
        return Object
            .prototype
            .hasOwnProperty
            .call(e, t)
    },
    i.p = "/";
    var s = window.webpackJsonp = window.webpackJsonp || [],
        c = s
            .push
            .bind(s);
    s.push = t,
    s = s.slice();
    for (var u = 0; u < s.length; u++) 
        t(s[u]);
    var l = c;
    o.push([221, 1]),
    n()
}({
    221: function (e, t, n) {
        n(222),
        n(552),
        e.exports = n(550)
    },
    460: function (e, t, n) {},
    528: function (e, t, n) {},
    529: function (e, t, n) {},
    531: function (e, t, n) {},
    532: function (e, t, n) {},
    533: function (e, t, n) {},
    534: function (e, t, n) {},
    535: function (e, t, n) {},
    536: function (e, t, n) {},
    537: function (e, t, n) {},
    541: function (e, t, n) {},
    542: function (e, t, n) {},
    543: function (e, t, n) {},
    544: function (e, t, n) {},
    545: function (e, t, n) {},
    546: function (e, t, n) {},
    547: function (e, t, n) {},
    548: function (e, t, n) {},
    549: function (e, t, n) {},
    550: function (e, t, n) {
        "use strict";
        n.r(t);
        n(551)
    },
    551: function (e, t, n) {},
    552: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = {};
        n.r(r),
        n.d(r, "preloadAssets", (function () {
            return _
        })),
        n.d(r, "preloadLoaded", (function () {
            return A
        })),
        n.d(r, "preloadProgress", (function () {
            return C
        }));
        var a = {};
        n.r(a),
        n.d(a, "stageActive", (function () {
            return R
        })),
        n.d(a, "stageScene", (function () {
            return L
        })),
        n.d(a, "stageScroll", (function () {
            return j
        })),
        n.d(a, "stageScrollActive", (function () {
            return G
        })),
        n.d(a, "stageSection", (function () {
            return U
        })),
        n.d(a, "stageTheme", (function () {
            return z
        }));
        var o = {};
        n.r(o),
        n.d(o, "completeCall", (function () {
            return Bt
        })),
        n.d(o, "onBeforeEnter", (function () {
            return Xt
        })),
        n.d(o, "onAfterExit", (function () {
            return Kt
        })),
        n.d(o, "onEnterWork", (function () {
            return Qt
        })),
        n.d(o, "onExitWork", (function () {
            return Zt
        })),
        n.d(o, "onBeforeEnterHome", (function () {
            return qt
        })),
        n.d(o, "onEnterHome", (function () {
            return Jt
        })),
        n.d(o, "onBeforeExitHome", (function () {
            return $t
        })),
        n.d(o, "onExitHome", (function () {
            return en
        })),
        n.d(o, "onEnterAbout", (function () {
            return tn
        })),
        n.d(o, "onBeforeExitAbout", (function () {
            return nn
        })),
        n.d(o, "onExitAbout", (function () {
            return rn
        })),
        n.d(o, "onEnterNotFound", (function () {
            return an
        })),
        n.d(o, "onBeforeExitNotFound", (function () {
            return on
        })),
        n.d(o, "onExitNotFound", (function () {
            return sn
        })),
        n.d(o, "onEnterText", (function () {
            return cn
        })),
        n.d(o, "onExitText", (function () {
            return un
        }));
        var i = n(0),
            s = n.n(i),
            c = (n(7), n(85)),
            u = n.n(c),
            l = n(209),
            p = n.n(l),
            h = n(33),
            d = n(28),
            f = n(21),
            v = n(79),
            m = n(94),
            y = n(212),
            E = "/about/",
            g = "/",
            b = "light",
            S = "dark",
            T = [
                "industry",
                "year",
                "role",
                "mode",
                "location",
                "tech",
                "type",
                "link"
            ],
            k = {
                timeZone: "America/Los_Angeles",
                weekday: "long",
                hour: "numeric",
                minute: "numeric"
            },
            x = [
                "REHYDRATE",
                "STAGE_SCENE",
                "STAGE_SCENE_ERROR",
                "STAGE_SCENE_ANIMATION_ENTERED",
                "STAGE_SCENE_ANIMATION_ENTERING",
                "STAGE_SCENE_ANIMATION_EXITED",
                "STAGE_SCENE_ANIMATION_EXITING",
                "STAGE_SCENE_CHANGE",
                "STAGE_SCENE_FINISH",
                "STAGE_SCENE_COVER_CHANGE",
                "STAGE_SCENE_DURATION_CHANGE",
                "STAGE_SCENE_ZOOM_CHANGE",
                "STAGE_SCROLL_ACTIVE",
                "STAGE_SCROLL_CHANGE",
                "STAGE_SECTION_ACTIVE",
                "STAGE_SECTION_ACTIVE_DELAY",
                "STAGE_SECTION_CHANGE",
                "STAGE_THEME",
                "STAGE_LOADED",
                "STAGE_PRELOAD",
                "STAGE_PRELOAD_ERROR",
                "STAGE_PRELOAD_FINISH",
                "STAGE_PRELOAD_PROGRESS",
                "STAGE_PRELOAD_START",
                "STAGE_PRELOAD_SUCCESS",
                "STAGE_FETCH",
                "STAGE_FETCH_ERROR",
                "STAGE_FETCH_FINISH",
                "STAGE_FETCH_START",
                "STAGE_FETCH_SUCCESS",
                "STAGE_NETWORK_SUCCESS",
                "STAGE_NETWORK_ERROR"
            ],
            O = n.n(y)()(x, x),
            w = {},
            _ = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : w,
                    t = arguments.length > 1
                        ? arguments[1]
                        : void 0;
                switch (t.type) {
                    case O.STAGE_FETCH_SUCCESS:
                    case O.STAGE_PRELOAD_SUCCESS:
                        return t.response;
                    default:
                        return e
                }
            },
            A = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1
                        ? arguments[1]
                        : void 0;
                switch (t.type) {
                    case O.STAGE_LOADED:
                        return !0;
                    default:
                        return e
                }
            },
            C = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t = arguments.length > 1
                        ? arguments[1]
                        : void 0;
                switch (t.type) {
                    case O.STAGE_PRELOAD_PROGRESS:
                        return t.progress;
                    default:
                        return e
                }
            },
            R = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t = arguments.length > 1
                        ? arguments[1]
                        : void 0;
                switch (t.type) {
                    case O.STAGE_SECTION_ACTIVE:
                        return t.active;
                    default:
                        return e
                }
            },
            N = n(9),
            P = n.n(N);
        function M(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object
                        .getOwnPropertyDescriptor(e, t)
                        .enumerable
                }))),
                n
                    .push
                    .apply(n, r)
            }
            return n
        }
        function I(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t]
                    ? arguments[t]
                    : {};
                t % 2
                    ? M(Object(n), !0).forEach((function (t) {
                        P()(e, t, n[t])
                    }))
                    : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : M(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
            }
            return e
        }
        var D = {
                cover: !1,
                duration: 2,
                animation: {
                    entered: null,
                    entering: null,
                    exited: null,
                    exiting: null
                },
                zoom: .85
            },
            L = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : D,
                    t = arguments.length > 1
                        ? arguments[1]
                        : void 0;
                switch (t.type) {
                    case O.STAGE_SCENE_COVER_CHANGE:
                        return I(I({}, e), {}, {cover: t.cover});
                    case O.STAGE_SCENE_DURATION_CHANGE:
                        return I(I({}, e), {}, {duration: t.duration});
                    case O.STAGE_SCENE_ZOOM_CHANGE:
                        return I(I({}, e), {}, {zoom: t.zoom});
                    case O.STAGE_SCENE_ANIMATION_ENTERING:
                        return I(I({}, e), {}, {
                            animation: I(I({}, e.animation), {}, {
                                entered: null,
                                entering: t.entering
                            })
                        });
                    case O.STAGE_SCENE_ANIMATION_ENTERED:
                        return I(I({}, e), {}, {
                            animation: I(I({}, e.animation), {}, {
                                entered: t.entered,
                                entering: null
                            })
                        });
                    case O.STAGE_SCENE_ANIMATION_EXITING:
                        return I(I({}, e), {}, {
                            animation: I(I({}, e.animation), {}, {
                                exited: null,
                                exiting: t.exiting
                            })
                        });
                    case O.STAGE_SCENE_ANIMATION_EXITED:
                        return I(I({}, e), {}, {
                            animation: I(I({}, e.animation), {}, {
                                exited: t.exited,
                                exiting: null
                            })
                        });
                    default:
                        return e
                }
            },
            j = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t = arguments.length > 1
                        ? arguments[1]
                        : void 0;
                switch (t.type) {
                    case O.STAGE_SCROLL_CHANGE:
                        return t.scroll;
                    default:
                        return e
                }
            },
            G = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1
                        ? arguments[1]
                        : void 0;
                switch (t.type) {
                    case O.STAGE_SCROLL_ACTIVE:
                        return t.active;
                    default:
                        return e
                }
            },
            F = {
                current: window.location.pathname,
                prev: null
            },
            U = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : F,
                    t = arguments.length > 1
                        ? arguments[1]
                        : void 0;
                switch (t.type) {
                    case O.STAGE_SECTION_CHANGE:
                        return {current: t.section, prev: e.current};
                    default:
                        return e
                }
            },
            H = "dark",
            z = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : H,
                    t = arguments.length > 1
                        ? arguments[1]
                        : void 0;
                switch (t.type) {
                    case O.REHYDRATE:
                        return t.payload;
                    case O.STAGE_THEME:
                        return t.theme;
                    default:
                        return e
                }
            },
            W = Object.assign({}, r, a),
            V = Object(v.c)(W),
            Y = n(31),
            B = n.n(Y),
            X = n(18),
            K = n(38),
            Q = n.n(K);
        var Z = function (e) {
                return {params: e, type: O.STAGE_PRELOAD_START}
            },
            q = function (e) {
                return {progress: e, type: O.STAGE_PRELOAD_PROGRESS}
            },
            J = function (e) {
                return {response: e, type: O.STAGE_PRELOAD_SUCCESS}
            },
            $ = function (e) {
                return {response: e, type: O.STAGE_FETCH_SUCCESS}
            },
            ee = function (e) {
                return {active: e, type: O.STAGE_SECTION_ACTIVE}
            },
            te = function (e) {
                return {active: e, type: O.STAGE_SECTION_ACTIVE_DELAY}
            },
            ne = function (e) {
                return {location: e, type: O.STAGE_SCENE}
            },
            re = function (e) {
                return {cover: e, type: O.STAGE_SCENE_COVER_CHANGE}
            },
            ae = function (e) {
                return {duration: e, type: O.STAGE_SCENE_DURATION_CHANGE}
            },
            oe = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1;
                return {zoom: e, type: O.STAGE_SCENE_ZOOM_CHANGE}
            },
            ie = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                return {scroll: e, type: O.STAGE_SCROLL_CHANGE}
            },
            se = function (e) {
                return {active: e, type: O.STAGE_SCROLL_ACTIVE}
            },
            ce = function (e) {
                return {response: e, type: O.STAGE_NETWORK_SUCCESS}
            };
        function ue(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object
                        .getOwnPropertyDescriptor(e, t)
                        .enumerable
                }))),
                n
                    .push
                    .apply(n, r)
            }
            return n
        }
        function le(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t]
                    ? arguments[t]
                    : {};
                t % 2
                    ? ue(Object(n), !0).forEach((function (t) {
                        P()(e, t, n[t])
                    }))
                    : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : ue(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
            }
            return e
        }
        var pe = window,
            he = pe.URL,
            de = pe.gtag,
            fe = function () {},
            ve = function (e, t) {
                return Object
                    .entries(e)
                    .reduce((function (e, n) {
                        var r = Q()(n, 2),
                            a = r[0],
                            o = r[1],
                            i = t[a];
                        return e[a] = le(le({}, o), i),
                        e
                    }), {})
            },
            me = function (e, t) {
                return Object
                    .entries(e)
                    .reduce((function (e, n) {
                        var r = Q()(n, 2),
                            a = r[0],
                            o = r[1],
                            i = o && o.hero && o
                                .hero
                                .type
                                .split("/") || [null],
                            s = Q()(i, 1)[0],
                            c = o && he.createObjectURL(o);
                        return e[a] = le(le({}, t[a]), {}, {
                            hero: {
                                type: s,
                                url: c
                            }
                        }),
                        e
                    }), {})
            },
            ye = n(124),
            Ee = n.n(ye),
            ge = {
                fetch: function () {
                    return new Promise((function (e, t) {
                        return Ee()({url: "/static/data/metadata.json", type: "json"})
                            .then(
                                (function (t) {
                                    return e(t)
                                })
                            )
                            .catch((function (e) {
                                return t(e)
                            }))
                        }))
                },
                network: function () {
                    return new Promise((function (e, t) {
                        return Ee()({url: "/api/network", type: "json"})
                            .then((function (t) {
                                return e(t)
                            }))
                            .catch((function (e) {
                                return t(e)
                            }))
                        }))
                },
                preload: function (e, t) {
                    return new Promise((function (n, r) {
                        return Ee
                            .a
                            .any(e.images, (function (e) {
                                return t(e.progress)
                            }))
                            .then((function (e) {
                                return n(e)
                            }))
                            .catch((function (e) {
                                return r(e)
                            }))
                        }))
                }
            },
            be = B
                .a
                .mark(Ae),
            Se = B
                .a
                .mark(Ce),
            Te = B
                .a
                .mark(Re),
            ke = B
                .a
                .mark(Ne),
            xe = B
                .a
                .mark(Pe),
            Oe = B
                .a
                .mark(Me),
            we = function (e) {
                return e.preloadAssets
            },
            _e = function (e, t) {
                var n;
                return [
                    Object(m.c)((function (e) {
                        return n = e,
                        function () {}
                    })),
                    e(t, (function (e) {
                        n(e),
                        1 === e && n(m.a)
                    }))
                ]
            };
        function Ae(e) {
            var t;
            return B
                .a
                .wrap((function (n) {
                    for (;;) 
                        switch (n.prev = n.next) {
                            case 0:
                                return n.next = 3,
                                Object(X.g)(e);
                            case 3:
                                return t = n.sent,
                                n.next = 6,
                                Object(X.d)(q(t));
                            case 6:
                                n.next = 0;
                                break;
                            case 8:
                            case "end":
                                return n.stop()
                        }
                    }), be)
        }
        function Ce() {
            var e;
            return B
                .a
                .wrap((function (t) {
                    for (;;) 
                        switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                Object(X.a)(ge.network);
                            case 3:
                                return e = t.sent,
                                t.next = 6,
                                Object(X.d)(ce(e));
                            case 6:
                                t.next = 12;
                                break;
                            case 8:
                                return t.prev = 8,
                                t.t0 = t.catch(0),
                                t.next = 12,
                                Object(X.d)({error: t.t0, type: O.STAGE_NETWORK_ERROR});
                            case 12:
                            case "end":
                                return t.stop()
                        }
                    }), Se, null, [
                    [0, 8]
                ])
        }
        function Re(e) {
            var t,
                n,
                r;
            return B
                .a
                .wrap((function (e) {
                    for (;;) 
                        switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                Object(X.d)({type: O.STAGE_FETCH_START});
                            case 3:
                                return e.next = 5,
                                Object(X.a)(ge.fetch);
                            case 5:
                                return t = e.sent,
                                e.next = 8,
                                Object(X.e)(we);
                            case 8:
                                return n = e.sent,
                                r = ve(n, t),
                                e.next = 12,
                                Object(X.d)($(r));
                            case 12:
                                e.next = 18;
                                break;
                            case 14:
                                return e.prev = 14,
                                e.t0 = e.catch(0),
                                e.next = 18,
                                Object(X.d)((e.t0.message, {type: O.STAGE_FETCH_ERROR}));
                            case 18:
                                return e.prev = 18,
                                e.next = 21,
                                Object(X.d)({type: O.STAGE_FETCH_FINISH});
                            case 21:
                                return e.finish(18);
                            case 22:
                            case "end":
                                return e.stop()
                        }
                    }), Te, null, [
                    [0, 14, 18, 22]
                ])
        }
        function Ne(e) {
            var t,
                n,
                r,
                a,
                o,
                i;
            return B
                .a
                .wrap((function (s) {
                    for (;;) 
                        switch (s.prev = s.next) {
                            case 0:
                                return t = _e(ge.preload, e),
                                n = Q()(t, 2),
                                r = n[0],
                                a = n[1],
                                s.next = 3,
                                Object(X.c)(Ae, r);
                            case 3:
                                return s.prev = 3,
                                s.next = 6,
                                Object(X.d)(Z(e));
                            case 6:
                                return s.next = 8,
                                Object(X.a)((function () {
                                    return a
                                }));
                            case 8:
                                return o = s.sent,
                                i = me(o, e.manifest),
                                s.next = 12,
                                Object(X.d)(J(i));
                            case 12:
                                s.next = 18;
                                break;
                            case 14:
                                return s.prev = 14,
                                s.t0 = s.catch(3),
                                s.next = 18,
                                Object(X.d)({error: s.t0.message, type: O.STAGE_PRELOAD_ERROR});
                            case 18:
                                return s.prev = 18,
                                s.next = 21,
                                Object(X.d)({type: O.STAGE_PRELOAD_FINISH});
                            case 21:
                                return s.next = 23,
                                Object(X.f)(Ce);
                            case 23:
                                return s.next = 25,
                                Object(X.f)(Re);
                            case 25:
                                return s.finish(18);
                            case 26:
                            case "end":
                                return s.stop()
                        }
                    }), ke, null, [
                    [3, 14, 18, 26]
                ])
        }
        function Pe(e) {
            var t,
                n,
                r,
                a,
                o;
            return B
                .a
                .wrap((function (i) {
                    for (;;) 
                        switch (i.prev = i.next) {
                            case 0:
                                return i.next = 2,
                                Object(X.e)(we);
                            case 2:
                                return t = i.sent,
                                n = t[e.location],
                                r = t["/"].work,
                                a = r.find((function (t) {
                                    return t.path === e.location
                                })),
                                o = a && a.index || 0,
                                i.prev = 7,
                                i.next = 10,
                                Object(X.d)(ie());
                            case 10:
                                return i.next = 12,
                                Object(X.d)(oe(n.zoom));
                            case 12:
                                return i.next = 14,
                                Object(X.d)({section: e.location, type: O.STAGE_SECTION_CHANGE});
                            case 14:
                                return i.next = 16,
                                Object(X.d)(ee(o));
                            case 16:
                                i.next = 22;
                                break;
                            case 18:
                                return i.prev = 18,
                                i.t0 = i.catch(7),
                                i.next = 22,
                                Object(X.d)({error: e, type: O.STAGE_SCENE_ERROR});
                            case 22:
                                return i.prev = 22,
                                i.next = 25,
                                Object(X.d)({type: O.STAGE_SCENE_FINISH});
                            case 25:
                                return i.finish(22);
                            case 26:
                            case "end":
                                return i.stop()
                        }
                    }), xe, null, [
                    [7, 18, 22, 26]
                ])
        }
        function Me(e) {
            return B
                .a
                .wrap((function (t) {
                    for (;;) 
                        switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                Object(X.b)(300);
                            case 2:
                                return t.next = 4,
                                Object(X.d)(ee(e.active));
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), Oe)
        }
        var Ie = function (e) {
                try {
                    return window
                        .localStorage
                        .getItem(e)
                } catch (e) {
                    return null
                }
            },
            De = [O.STAGE_THEME],
            Le = Object(m.b)(),
            je = [
                Le,
                function (e) {
                    return function (t) {
                        return function (n) {
                            if (
                                De.includes(n.type) && function (e, t) {
                                    try {
                                        window
                                            .localStorage
                                            .setItem(e, t)
                                    } catch (e) {
                                        return null
                                    }
                                }("theme", n.theme),
                                n.type === O.STAGE_PRELOAD
                            ) {
                                var r = window.matchMedia("(prefers-color-scheme: dark)")
                                    ? S
                                    : b;
                                e.dispatch({
                                    type: O.REHYDRATE,
                                    payload: Ie("theme") || r
                                })
                            }
                            t(n)
                        }
                    }
                }
            ],
            Ge = Object(v.d)(V, v.a.apply(void 0, je));
        Le.run(B.a.mark((function e() {
            return B
                .a
                .wrap((function (e) {
                    for (;;) 
                        switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Object(X.h)(O.STAGE_FETCH, Re);
                            case 2:
                                return e.next = 4,
                                Object(X.h)(O.STAGE_PRELOAD, Ne);
                            case 4:
                                return e.next = 6,
                                Object(X.h)(O.STAGE_SCENE, Pe);
                            case 6:
                                return e.next = 8,
                                Object(X.h)(O.STAGE_SECTION_ACTIVE_DELAY, Me);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
        })));
        var Fe = Ge,
            Ue = n(10),
            He = n.n(Ue),
            ze = n(11),
            We = n.n(ze),
            Ve = n(12),
            Ye = n.n(Ve),
            Be = n(13),
            Xe = n.n(Be),
            Ke = n(4),
            Qe = n.n(Ke),
            Ze = n(6),
            qe = n.n(Ze),
            Je = n(51),
            $e = (n(460), {
                theme: "_3DIm-",
                circle: "_20ImU",
                indicator: "_2ovzt",
                dark: "_3tlZo",
                light: "_10kKe"
            });
        function et(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object
                        .getOwnPropertyDescriptor(e, t)
                        .enumerable
                }))),
                n
                    .push
                    .apply(n, r)
            }
            return n
        }
        function tt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t]
                    ? arguments[t]
                    : {};
                t % 2
                    ? et(Object(n), !0).forEach((function (t) {
                        P()(e, t, n[t])
                    }))
                    : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : et(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
            }
            return e
        }
        var nt = {
                white: "255, 255, 255",
                black: "0, 0, 0",
                lightgrey: "160, 160, 160",
                grey: "115, 115, 115"
            },
            rt = {
                dark: tt(tt({}, nt), {}, {blendMode: "unset"}),
                light: tt(tt({}, nt), {}, {
                    black: nt.white,
                    blendMode: "difference",
                    white: nt.black,
                    grey: "159, 159, 159",
                    lightgrey: "95, 95, 95"
                })
            },
            at = function (e) {
                var t = document.querySelector(":root");
                t
                    .style
                    .setProperty("--background-color", rt[e].black),
                t
                    .style
                    .setProperty("--main-color", rt[e].white),
                t
                    .style
                    .setProperty("--grey-color", rt[e].grey),
                t
                    .style
                    .setProperty("--lightgrey-color", rt[e].lightgrey)
            };
        function ot(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var it = function (e) {
            Ye()(n, e);
            var t = ot(n);
            function n(e) {
                var r;
                return He()(this, n),
                (r = t.call(this, e)).onClick = r
                    .onClick
                    .bind(qe()(r)),
                r
            }
            return We()(n, [
                {
                    key: "componentDidMount",
                    value: function () {
                        var e = this.props.theme;
                        at(e)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function (e) {
                        var t = this.props.theme;
                        e.theme !== t && at(t)
                    }
                }, {
                    key: "onClick",
                    value: function () {
                        var e = this.props,
                            t = e.dispatch,
                            n = e.theme;
                        t({
                            theme: n === S
                                ? b
                                : S,
                            type: O.STAGE_THEME
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.theme,
                            t = Object(Je.a)($e.indicator, $e[e]);
                        return s
                            .a
                            .createElement("div", {
                                className: $e.theme,
                                "data-type": "link",
                                onClick: this.onClick
                            }, s.a.createElement("div", {
                                className: $e.circle
                            }, s.a.createElement("div", {className: t})))
                    }
                }
            ]),
            n
        }(i.Component);
        P()(it, "mapsStateToProps", (function (e) {
            return {theme: e.stageTheme}
        })),
        it.propTypes = {};
        var st = Object(f.b)(it.mapsStateToProps)(it),
            ct = n(213),
            ut = n.n(ct),
            lt = n(214),
            pt = n.n(lt),
            ht = n(119),
            dt = n.n(ht),
            ft = n(120),
            vt = n.n(ft);
        function mt(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var yt = function (e) {
            Ye()(n, e);
            var t = mt(n);
            function n(e) {
                var r;
                return He()(this, n),
                (r = t.call(this, e)).getScrollActive = r
                    .getScrollActive
                    .bind(qe()(r)),
                r.handlerResize = dt()(r.handlerResize.bind(qe()(r)), 350),
                r.handlerScroll = r
                    .handlerScroll
                    .bind(qe()(r)),
                r.handlerTouchMove = r
                    .handlerTouchMove
                    .bind(qe()(r)),
                r
            }
            return We()(n, [
                {
                    key: "componentDidMount",
                    value: function () {
                        (0, this.props.dispatch)(se(this.getScrollActive())),
                        window.addEventListener("resize", this.handlerResize)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function (e) {
                        var t = this.props,
                            n = t.dispatch,
                            r = t.scene;
                        vt()(e.scene.animation, r.animation) && n(se(this.getScrollActive()))
                    }
                }, {
                    key: "getScrollActive",
                    value: function () {
                        return !(!this.layers || !this.scroll) && this.layers.clientHeight > this.scroll.clientHeight
                    }
                }, {
                    key: "handlerResize",
                    value: function () {
                        (0, this.props.dispatch)(se(this.getScrollActive()))
                    }
                }, {
                    key: "handlerTouchMove",
                    value: function (e) {
                        var t = this.props,
                            n = t.mobile,
                            r = t.onTouchChange;
                        if (n && e.changedTouches && e.changedTouches.length) {
                            var a = Q()(e.changedTouches, 1)[0],
                                o = document.elementFromPoint(a.pageX, a.pageY),
                                i = parseInt(o.dataset.index, 10);
                            Number.isNaN(i) || r(i)
                        }
                    }
                }, {
                    key: "handlerScroll",
                    value: function (e) {
                        var t = this.props,
                            n = t.dispatch;
                        if (t.mobile) 
                            return e.preventDefault(),
                            void e.stopPropagation();
                        var r = this.layers.clientHeight - this.scroll.clientHeight,
                            a = e.target.scrollTop / r * 100;
                        n(ie(a))
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props,
                            n = t.children,
                            r = (t.dispatch, t.mobile, t.onTouchChange, t.scene, pt()(
                                t,
                                ["children", "dispatch", "mobile", "onTouchChange", "scene"]
                            ));
                        return s
                            .a
                            .createElement("div", ut()({
                                onScroll: this.handlerScroll,
                                onTouchMove: this.handlerTouchMove,
                                ref: function (t) {
                                    e.scroll = t
                                }
                            }, r), Object(i.cloneElement)(n, {
                                ref: function (t) {
                                    e.layers = t
                                }
                            }))
                    }
                }
            ]),
            n
        }(i.Component);
        P()(yt, "mapsStateToProps", (function (e) {
            return {scene: e.stageScene}
        })),
        P()(yt, "defaultProps", {onTouchChange: function () {}}),
        yt.propTypes = {};
        var Et = Object(f.b)(yt.mapsStateToProps)(yt),
            gt = (n(528), "zwg6n"),
            bt = "_3SjDK",
            St = function (e) {
                var t = e.asset;
                return s
                    .a
                    .createElement("div", {
                        className: gt
                    }, t.social.map((function (e) {
                        return s
                            .a
                            .createElement("div", {
                                className: bt,
                                key: e.caption
                            }, s.a.createElement("a", {
                                "data-type": "link",
                                href: e.url,
                                rel: "noreferrer noopener",
                                target: "_blank"
                            }, e.caption))
                    })))
            };
        St.propTypes = {};
        var Tt = St,
            kt = (n(529), "_3DaH6"),
            xt = "_3KZun",
            Ot = "SRxfR",
            wt = "_2YXUp",
            _t = "_349yF",
            At = "e0j5l",
            Ct = "_1ksmQ",
            Rt = "_3iXEQ",
            Nt = "yF5vk";
        function Pt(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var Mt = function (e) {
            Ye()(n, e);
            var t = Pt(n);
            function n(e) {
                var r;
                return He()(this, n),
                (r = t.call(this, e)).formatter = new Intl.DateTimeFormat([], k),
                r.state = {
                    time: r
                        .formatter
                        .format(new Date)
                },
                r
            }
            return We()(n, [
                {
                    key: "componentDidMount",
                    value: function () {
                        var e = this;
                        this.timerId = setInterval((function () {
                            return e.tick()
                        }), 15e3)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        clearInterval(this.timerId)
                    }
                }, {
                    key: "tick",
                    value: function () {
                        var e = this.props.animation;
                        return e.entering || e.exiting || this.setState({
                            time: this
                                .formatter
                                .format(new Date)
                        }),
                        null
                    }
                }, {
                    key: "renderBio",
                    value: function (e) {
                        return e.map((function (e) {
                            return s
                                .a
                                .createElement("h2", {
                                    className: Ct,
                                    key: e
                                }, e)
                        }))
                    }
                }, {
                    key: "renderContent",
                    value: function (e) {
                        var t = this;
                        return s
                            .a
                            .createElement("div", {
                                className: _t
                            }, e.map((function (e) {
                                return s
                                    .a
                                    .createElement("div", {
                                        key: e.key
                                    }, s.a.createElement("h5", {
                                        className: Nt
                                    }, e.key), s.a.createElement("ul", null, e.values.map((function (n) {
                                        return e.render
                                            ? t[e.render](n)
                                            : s
                                                .a
                                                .createElement("li", {
                                                    key: n
                                                }, n)
                                    }))))
                            })))
                    }
                }, {
                    key: "renderLink",
                    value: function (e) {
                        var t = Q()(e, 3),
                            n = t[0],
                            r = t[1],
                            a = t[2];
                        return s
                            .a
                            .createElement(
                                "li",
                                {
                                    key: n
                                },
                                a
                                    ? s.a.createElement("a", {
                                        href: r,
                                        "data-type": "link"
                                    }, n)
                                    : s.a.createElement(h.b, {
                                        to: r,
                                        "data-type": "link"
                                    }, n)
                            )
                    }
                }, {
                    key: "renderTime",
                    value: function (e) {
                        var t = this.state.time;
                        return s
                            .a
                            .createElement("li", {
                                key: t
                            }, t, " ", e)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this
                                .props
                                .assets["/about/"];
                        return s
                            .a
                            .createElement(
                                "div",
                                {
                                    className: kt
                                },
                                s.a.createElement(Et, {
                                    className: xt,
                                    key: E
                                }, s.a.createElement("div", {
                                    className: Ot
                                }, t.layers.map((function (n) {
                                    return s
                                        .a
                                        .createElement("div", {
                                            className: wt,
                                            key: n.key
                                        }, s.a.createElement("h4", {
                                            className: Rt
                                        }, n.label), s.a.createElement("div", {
                                            className: At
                                        }, e[n.render](t[n.key])))
                                })))),
                                s.a.createElement(Tt, {asset: t}),
                                s.a.createElement(st, null)
                            )
                    }
                }
            ]),
            n
        }(i.PureComponent);
        P()(Mt, "mapsStateToProps", (function (e) {
            return {animation: e.stageScene.animation, assets: e.preloadAssets}
        })),
        Mt.propTypes = {};
        var It = Object(f.b)(Mt.mapsStateToProps)(Mt),
            Dt = (n(531), "bWK1c"),
            Lt = "_2gW6X",
            jt = "_1DQSu",
            Gt = "SmhlQ",
            Ft = "_2F1_w";
        function Ut(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var Ht = function (e) {
            Ye()(n, e);
            var t = Ut(n);
            function n(e) {
                var r;
                return He()(this, n),
                (r = t.call(this, e)).isTouchCapable = "ontouchstart" in window,
                r.handlerClick = r
                    .handlerClick
                    .bind(qe()(r)),
                r.handlerMouseEnter = r
                    .handlerMouseEnter
                    .bind(qe()(r)),
                r.handlerMouseLeave = r
                    .handlerMouseLeave
                    .bind(qe()(r)),
                r.handlerTouchChange = r
                    .handlerTouchChange
                    .bind(qe()(r)),
                r.state = {
                    active: -1
                },
                r
            }
            return We()(n, [
                {
                    key: "componentDidMount",
                    value: function () {
                        var e = this.props.dispatch;
                        e(ee(0)),
                        e(ae(1))
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function (e, t) {
                        var n = this.props.section,
                            r = this.state.active,
                            a = t.active !== r;
                        return e.section.current !== n.current || a
                    }
                }, {
                    key: "handlerMouseEnter",
                    value: function (e) {
                        e.preventDefault(),
                        e.stopPropagation();
                        var t = this.props.dispatch,
                            n = e
                                .target
                                .closest("h1");
                        if (n) {
                            var r = parseInt(n.dataset.index, 10);
                            this.setState({active: r}),
                            t(te(r))
                        } else 
                            t(ee(0))
                    }
                }, {
                    key: "handlerMouseLeave",
                    value: function () {
                        var e = this.props.dispatch;
                        location.pathname === g && (this.setState({active: 0}), e(te(0)))
                    }
                }, {
                    key: "handlerTouchChange",
                    value: function (e) {
                        var t = this.props.dispatch;
                        this.setState({
                            active: e
                        }, (function () {
                            t(te(e))
                        }))
                    }
                }, {
                    key: "handlerClick",
                    value: function (e) {
                        var t = e
                                .target
                                .closest("h1")
                                .dataset,
                            n = t.path,
                            r = t.title;
                        de("event", "click", {
                            event_category: "home_index_list",
                            event_label: r,
                            value: n
                        })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props.assets,
                            n = this.state.active,
                            r = t["/"],
                            a = this.isTouchCapable && Gt;
                        return s
                            .a
                            .createElement(
                                "div",
                                {
                                    className: Dt
                                },
                                s.a.createElement(Et, {
                                    className: Object(Je.a)(Lt, a),
                                    key: g,
                                    mobile: this.isTouchCapable,
                                    onTouchChange: this.handlerTouchChange
                                }, s.a.createElement("div", {
                                    className: Object(Je.a)(jt, a),
                                    onMouseLeave: this.handlerMouseLeave,
                                    onMouseOver: this.handlerMouseEnter
                                }, r.work.map((function (r) {
                                    return s
                                        .a
                                        .createElement("h1", {
                                            className: Object(Je.a)(Ft, {
                                                active: n === r.index
                                            }),
                                            key: r.path,
                                            "data-path": r.path,
                                            "data-title": t[r.path].title,
                                            "data-index": r.index
                                        }, s.a.createElement(h.c, {
                                            "data-type": "link",
                                            to: r.path,
                                            onClick: e.handlerClick
                                        }, t[r.path].title))
                                })))),
                                s.a.createElement(Tt, {asset: r}),
                                s.a.createElement(st, null)
                            )
                    }
                }
            ]),
            n
        }(i.Component);
        P()(Ht, "mapsStateToProps", (function (e) {
            return {active: e.stageActive, assets: e.preloadAssets, section: e.stageSection, animation: e.stageScene.animation}
        })),
        Ht.propTypes = {};
        var zt = Object(f.b)(Ht.mapsStateToProps)(Ht),
            Wt = n(57),
            Vt = n(215),
            Yt = n(3);
        Yt
            .a
            .registerPlugin(Wt.a, Vt.a);
        var Bt = function (e) {
                return Yt
                    .a
                    .set(e, {clearProps: "position"})
            },
            Xt = function (e) {
                Yt
                    .a
                    .set(e, {
                        clearProps: "display",
                        position: "absolute",
                        zIndex: 1
                    }),
                e && e.paused && e.play()
            },
            Kt = function (e) {
                e && !e.paused && e.duration && e.pause(),
                Yt
                    .a
                    .set(e, {
                        clearProps: "position",
                        zIndex: 0,
                        display: "none"
                    })
            },
            Qt = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : fe;
                Yt
                    .a
                    .killTweensOf(e),
                Yt
                    .a
                    .from(e, {
                        autoAlpha: 0,
                        duration: 1,
                        y: 100
                    }),
                Yt
                    .a
                    .to(e, {
                        autoAlpha: 1,
                        duration: 1,
                        ease: "Expo.easeInOut",
                        onComplete: t,
                        onCompleteParams: [e],
                        y: 0
                    })
            },
            Zt = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : fe;
                Yt
                    .a
                    .killTweensOf(e),
                Yt
                    .a
                    .from(e, {
                        autoAlpha: 1,
                        duration: 1,
                        ease: "Expo.easeInOut",
                        y: 0
                    }),
                Yt
                    .a
                    .to(e, {
                        duration: 1,
                        autoAlpha: 0,
                        ease: "Expo.easeInOut",
                        y: 100,
                        onComplete: t
                    })
            },
            qt = function (e) {
                Yt
                    .a
                    .set(e, {pointerEvents: "auto"})
            },
            Jt = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : fe;
                Yt
                    .a
                    .killTweensOf(e);
                var n = Yt
                        .a
                        .timeline(),
                    r = new Wt.a(e, {type: "words,chars"}),
                    a = r.chars;
                n.from(a, {
                    duration: 1,
                    ease: "Expo.easeOut",
                    onComplete: t,
                    onCompleteParams: [e],
                    onStart: qt,
                    onStartParams: [e],
                    opacity: 0,
                    scale: .85,
                    stagger: .01,
                    y: 50
                }, "+=0")
            },
            $t = function (e) {
                Yt
                    .a
                    .set(e, {pointerEvents: "none"})
            },
            en = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : fe;
                Yt
                    .a
                    .killTweensOf(e);
                var n = Yt
                        .a
                        .timeline(),
                    r = new Wt.a(e, {type: "words,chars"}),
                    a = r.chars;
                n.to(a, {
                    duration: 1,
                    ease: "Expo.easeOut",
                    onComplete: t,
                    onStart: $t,
                    onStartParams: [e],
                    opacity: 0,
                    scale: .85,
                    stagger: .01,
                    y: 50
                }, "+=0")
            },
            tn = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : fe;
                Yt
                    .a
                    .killTweensOf(e);
                var n = Yt
                        .a
                        .timeline(),
                    r = new Wt.a(e, {type: "words"}),
                    a = r.words;
                n.from(a, {
                    duration: 1,
                    ease: "Expo.easeOut",
                    onComplete: t,
                    onCompleteParams: [e],
                    onStart: qt,
                    onStartParams: [e],
                    opacity: 0,
                    scale: .85,
                    stagger: .02,
                    y: 50
                }, "+=0")
            },
            nn = function (e) {
                Yt
                    .a
                    .set(e, {pointerEvents: "none"})
            },
            rn = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : fe;
                Yt
                    .a
                    .killTweensOf(e);
                var n = Yt
                        .a
                        .timeline(),
                    r = new Wt.a(e, {type: "words"}),
                    a = r.words;
                n.to(a, {
                    duration: 1,
                    ease: "Expo.easeOut",
                    onComplete: t,
                    onStart: nn,
                    onStartParams: [e],
                    opacity: 0,
                    scale: .85,
                    stagger: .02,
                    y: 50
                }, "+=0")
            },
            an = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : fe;
                Yt
                    .a
                    .killTweensOf(e);
                var n = Yt
                        .a
                        .timeline(),
                    r = new Wt.a(e, {type: "words"}),
                    a = r.words;
                n.from(a, {
                    duration: 1,
                    ease: "Expo.easeOut",
                    onComplete: t,
                    onCompleteParams: [e],
                    onStart: qt,
                    onStartParams: [e],
                    opacity: 0,
                    scale: .85,
                    stagger: .01,
                    y: 50
                }, "+=0")
            },
            on = function (e) {
                Yt
                    .a
                    .set(e, {pointerEvents: "none"})
            },
            sn = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : fe;
                Yt
                    .a
                    .killTweensOf(e);
                var n = Yt
                        .a
                        .timeline(),
                    r = new Wt.a(e, {type: "words"}),
                    a = r.words;
                n.to(a, {
                    duration: 1,
                    ease: "Expo.easeOut",
                    onComplete: t,
                    onStart: nn,
                    onStartParams: [e],
                    opacity: 0,
                    scale: .85,
                    stagger: .01,
                    y: 50
                }, "+=0")
            },
            cn = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : fe;
                Yt
                    .a
                    .killTweensOf(e);
                var n = Yt
                        .a
                        .timeline(),
                    r = new Wt.a(e, {type: "chars"}),
                    a = r.chars;
                n.to(a, {
                    duration: .6,
                    ease: "Expo.easeOut",
                    scale: .85,
                    stagger: .05,
                    y: 50
                }, "+=0"),
                n.to(a, {
                    duration: .5,
                    ease: "Expo.easeOut",
                    scale: 1,
                    stagger: .02,
                    onComplete: t,
                    y: 0
                }, "-=0.5")
            },
            un = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : fe;
                Yt
                    .a
                    .killTweensOf(e);
                var n = Yt
                        .a
                        .timeline(),
                    r = new Wt.a(e, {type: "chars"}),
                    a = r.chars;
                n.to(a, {
                    duration: .5,
                    ease: "Expo.easeOut",
                    scale: .85,
                    stagger: .05,
                    y: 50
                }, "+=0"),
                n.to(a, {
                    duration: .5,
                    ease: "Expo.easeOut",
                    onComplete: t,
                    scale: 1,
                    stagger: .02,
                    y: 0
                }, "-=0.5")
            },
            ln = (n(532), "_3jrw9"),
            pn = "_2spq0";
        function hn(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var dn = function (e) {
            Ye()(n, e);
            var t = hn(n);
            function n() {
                return He()(this, n),
                t.apply(this, arguments)
            }
            return We()(n, [
                {
                    key: "render",
                    value: function () {
                        var e = this.props.scroll,
                            t = {
                                height: "".concat(e, "%")
                            };
                        return s
                            .a
                            .createElement("div", {
                                className: ln
                            }, s.a.createElement("div", {
                                className: pn,
                                style: t
                            }))
                    }
                }
            ]),
            n
        }(i.Component);
        P()(dn, "mapsStateToProps", (function (e) {
            return {scroll: e.stageScroll}
        })),
        dn.propTypes = {};
        var fn = Object(f.b)(dn.mapsStateToProps)(dn),
            vn = n(216),
            mn = n(34),
            yn = n(219),
            En = (n(533), "_1BHyY"),
            gn = "_2fcay",
            bn = "_3baW4";
        function Sn(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var Tn = function (e) {
            Ye()(n, e);
            var t = Sn(n);
            function n() {
                return He()(this, n),
                t.apply(this, arguments)
            }
            return We()(n, [
                {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.scroll,
                            n = e.scrollable,
                            r = t > 0 || !n,
                            a = r && gn,
                            o = Object(Je.a)(En, a);
                        return s
                            .a
                            .createElement("div", {
                                className: o
                            }, s.a.createElement("div", {
                                className: Object(Je.a)(bn, {paused: r})
                            }))
                    }
                }
            ]),
            n
        }(i.PureComponent);
        P()(Tn, "mapsStateToProps", (function (e) {
            return {scroll: e.stageScroll, scrollable: e.stageScrollActive}
        })),
        Tn.propTypes = {};
        var kn = Object(f.b)(Tn.mapsStateToProps)(Tn),
            xn = (n(534), "_3R4Jx");
        function On(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var wn = function (e) {
            Ye()(n, e);
            var t = On(n);
            function n(e) {
                var r;
                return He()(this, n),
                (r = t.call(this, e)).handlerEnterLayout = r
                    .handlerEnterLayout
                    .bind(qe()(r)),
                r.handlerEnteredLayout = r
                    .handlerEnteredLayout
                    .bind(qe()(r)),
                r.handlerEnteringLayout = r
                    .handlerEnteringLayout
                    .bind(qe()(r)),
                r.handlerExitLayout = r
                    .handlerExitLayout
                    .bind(qe()(r)),
                r.handlerExitedLayout = r
                    .handlerExitedLayout
                    .bind(qe()(r)),
                r.handlerExitingLayout = r
                    .handlerExitingLayout
                    .bind(qe()(r)),
                r.handlerSetAnimationIn = r
                    .handlerSetAnimationIn
                    .bind(qe()(r)),
                r.state = {
                    animationIn: !1
                },
                r
            }
            return We()(n, [
                {
                    key: "handlerSetAnimationIn",
                    value: function () {
                        this.setState({
                            animationIn: !0
                        })
                    }
                }, {
                    key: "componentWillMount",
                    value: function () {
                        var e = this.props,
                            t = e.dispatch,
                            n = e.location;
                        t(ne(n.pathname))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function (e) {
                        var t = this.props.location;
                        t.pathname !== e.location.pathname && this.handlerLocationChange(t.pathname)
                    }
                }, {
                    key: "handlerLocationChange",
                    value: function (e) {
                        var t = this.props.dispatch;
                        t(ne(e)),
                        t(ae(2))
                    }
                }, {
                    key: "handlerExitLayout",
                    value: function (e) {
                        var t = this.props,
                            n = t.assets,
                            r = n[t.section.current] || n["*"],
                            a = "onExit".concat(r.component);
                        o[a](e)
                    }
                }, {
                    key: "handlerExitedLayout",
                    value: function () {
                        var e = this.props,
                            t = e.dispatch,
                            n = e.location,
                            r = e.section;
                        t({
                            exited: r.prev || n.pathname,
                            type: O.STAGE_SCENE_ANIMATION_EXITED
                        })
                    }
                }, {
                    key: "handlerExitingLayout",
                    value: function () {
                        var e = this.props,
                            t = e.dispatch,
                            n = e.section;
                        t({
                            exiting: n.prev || n.current,
                            type: O.STAGE_SCENE_ANIMATION_EXITING
                        })
                    }
                }, {
                    key: "handlerEnterLayout",
                    value: function (e) {
                        var t = this.props,
                            n = t.assets,
                            r = n[t.section.current] || n["*"],
                            a = "onEnter".concat(r.component);
                        o[a](e, this.handlerSetAnimationIn)
                    }
                }, {
                    key: "handlerEnteringLayout",
                    value: function () {
                        var e = this.props,
                            t = e.dispatch,
                            n = e.location;
                        t({entering: n.pathname, type: O.STAGE_SCENE_ANIMATION_ENTERING})
                    }
                }, {
                    key: "handlerEnteredLayout",
                    value: function () {
                        var e = this.props,
                            t = e.dispatch,
                            n = e.location;
                        t({entered: n.pathname, type: O.STAGE_SCENE_ANIMATION_ENTERED})
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.children,
                            n = e.location;
                        return s
                            .a
                            .createElement(yn.a, {
                                className: xn
                            }, s.a.createElement(vn.a, null, s.a.createElement(mn.d, {
                                appear: !0,
                                key: n.pathname,
                                mountOnEnter: !0,
                                onEnter: this.handlerEnterLayout,
                                onEntered: this.handlerEnteredLayout,
                                onEntering: this.handlerEnteringLayout,
                                onExited: this.handlerExitedLayout,
                                onExiting: this.handlerExitingLayout,
                                onExit: this.handlerExitLayout,
                                timeout: {
                                    appear: 0,
                                    enter: 2e3,
                                    exit: 2e3
                                },
                                unmountOnExit: !0
                            }, t)), s.a.createElement(fn, null), s.a.createElement(kn, null))
                    }
                }
            ]),
            n
        }(i.Component);
        P()(wn, "mapsStateToProps", (function (e) {
            return {active: e.stageActive, assets: e.preloadAssets, section: e.stageSection, scene: e.stageScene}
        })),
        wn.propTypes = {};
        var _n = Object(f.b)(wn.mapsStateToProps)(wn),
            An = (n(535), "_QNgy"),
            Cn = "_32F_D",
            Rn = function () {
                return s
                    .a
                    .createElement("div", {
                        className: An
                    }, s.a.createElement("h2", {
                        className: Cn
                    }, "Not Found"), s.a.createElement(st, null))
            },
            Nn = (n(536), {
                footer: "_15eCm",
                columns: "_3ELpt",
                next: "_3l1FZ",
                h4: "_2cIwO"
            }),
            Pn = function (e) {
                var t = e.assets,
                    n = e.next,
                    r = e.prev;
                return s
                    .a
                    .createElement("footer", {
                        className: Nn.footer
                    }, s.a.createElement("div", {
                        className: Nn.columns
                    }, s.a.createElement("div", {
                        className: Nn.prev
                    }, r && s.a.createElement(h.c, {
                        "data-type": "link",
                        to: r.path
                    }, s.a.createElement("div", {
                        className: Nn.h4
                    }, "Prev"), " ", t[r.path].title)), s.a.createElement("div", {
                        className: Nn.next
                    }, n && s.a.createElement(h.c, {
                        "data-type": "link",
                        to: n.path
                    }, s.a.createElement("div", {
                        className: Nn.h4
                    }, "Next"), " ", t[n.path].title))))
            };
        Pn.propTypes = {};
        var Mn = Pn,
            In = n(220),
            Dn = (n(537), "jdjWc"),
            Ln = "_2XU7T",
            jn = "zF8Fa",
            Gn = "_1W1yP",
            Fn = "_2IuT7",
            Un = "_2cAwc",
            Hn = "_2HcUR",
            zn = "_1Jbre";
        function Wn(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var Vn = function (e) {
            Ye()(n, e);
            var t = Wn(n);
            function n(e) {
                var r;
                return He()(this, n),
                (r = t.call(this, e)).formatter = new Intl.ListFormat("en", {
                    style: "long",
                    type: "conjunction"
                }),
                r.handlerInViewTitle = r
                    .handlerInViewTitle
                    .bind(qe()(r)),
                r
            }
            return We()(n, [
                {
                    key: "componentDidMount",
                    value: function () {
                        (0, this.props.dispatch)(re(!0))
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function (e) {
                        var t = this.props.animation;
                        return !vt()(e.animation, t)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        (0, this.props.dispatch)(re(!1))
                    }
                }, {
                    key: "handlerInViewTitle",
                    value: function (e) {
                        var t = e
                            ? 1
                            : .2;
                        Yt
                            .a
                            .to(this.title.node, {
                                autoAlpha: t,
                                duration: .35,
                                ease: "Quad.easeInOut"
                            })
                    }
                }, {
                    key: "renderLabel",
                    value: function (e, t) {
                        return t
                            ? "link" === e
                                ? s
                                    .a
                                    .createElement("a", {
                                        "data-type": "link",
                                        href: t,
                                        rel: "noreferrer",
                                        target: "_blank"
                                    }, t)
                                : "tech" === e
                                    ? s
                                        .a
                                        .createElement("span", null, this.formatter.format(t))
                                    : s
                                        .a
                                        .createElement("span", null, t)
                            : null
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props,
                            n = t.animation,
                            r = t.assets,
                            a = n.entering || n.entered || location.pathname,
                            o = r[a] || {},
                            i = r["/"].work,
                            c = i.findIndex((function (e) {
                                return e.path === a
                            })),
                            u = i[c + 1],
                            l = i[c - 1];
                        return s
                            .a
                            .createElement(Et, {
                                className: Dn
                            }, s.a.createElement("div", {
                                className: Ln
                            }, s.a.createElement("div", {
                                className: jn
                            }, s.a.createElement(In.a, {
                                as: "h1",
                                className: Fn,
                                onChange: this.handlerInViewTitle,
                                ref: function (t) {
                                    e.title = t
                                },
                                rootMargin: "-200px 0px 0px 0px"
                            }, o.title)), s.a.createElement("div", {
                                className: Un
                            }, T.map((function (t) {
                                return s
                                    .a
                                    .createElement("div", {
                                        key: t
                                    }, s.a.createElement("div", {
                                        className: zn
                                    }, t), e.renderLabel(t, o[t]))
                            }))), s.a.createElement("div", {
                                className: Gn
                            }, s.a.createElement("h2", {
                                className: Hn
                            }, o.description)), s.a.createElement(Mn, {
                                assets: r,
                                next: u,
                                prev: l
                            })))
                    }
                }
            ]),
            n
        }(i.Component);
        P()(Vn, "mapsStateToProps", (function (e) {
            return {animation: e.stageScene.animation, assets: e.preloadAssets, section: e.stageSection}
        })),
        Vn.propTypes = {};
        var Yn = Object(f.b)(Vn.mapsStateToProps)(Vn),
            Bn = n(65),
            Xn = n.n(Bn),
            Kn = (n(541), "_3yUzd"),
            Qn = "uFwOL";
        function Zn(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var qn = function (e) {
            Ye()(n, e);
            var t = Zn(n);
            function n() {
                var e;
                return He()(this, n),
                (e = t.call(this)).onWheel = e
                    .onWheel
                    .bind(qe()(e)),
                e.state = {
                    active: 0,
                    y: 0
                },
                e
            }
            return We()(n, [
                {
                    key: "componentDidMount",
                    value: function () {}
                }, {
                    key: "ease",
                    value: function (e) {
                        return Math.sin(e * (Math.PI / 2))
                    }
                }, {
                    key: "onWheel",
                    value: function (e) {
                        e.stopPropagation();
                        var t = Math.sign(e.deltaY),
                            n = 2 * (this.state.y + t),
                            r = Math.clamp(n, -1e3, 1e3);
                        this.setState({y: r}),
                        Yt
                            .a
                            .killTweensOf(this.scroll),
                        Yt
                            .a
                            .to(this.scroll, {y: r})
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props.assets,
                            n = this.state.active,
                            r = t["/"],
                            a = [].concat(Xn()(r.work), Xn()(r.work), Xn()(r.work));
                        return s
                            .a
                            .createElement("div", {
                                className: Kn,
                                onWheel: this.onWheel
                            }, s.a.createElement("div", {
                                ref: function (t) {
                                    e.scroll = t
                                }
                            }, a.map((function (r, a) {
                                return s
                                    .a
                                    .createElement("h1", {
                                        className: Object(Je.a)(Qn, {
                                            active: n === r.index
                                        }),
                                        key: ""
                                            .concat(r.path, "-")
                                            .concat(a),
                                        "data-path": r.path,
                                        "data-title": t[r.path].title,
                                        "data-index": r.index
                                    }, s.a.createElement(h.c, {
                                        "data-type": "link",
                                        to: r.path,
                                        onClick: e.handlerClick
                                    }, t[r.path].title))
                            }))))
                    }
                }
            ]),
            n
        }(i.Component);
        P()(qn, "mapsStateToProps", (function (e) {
            return {assets: e.preloadAssets}
        })),
        qn.propTypes = {};
        var Jn = Object(f.b)(qn.mapsStateToProps)(qn),
            $n = (n(542), "_1yPhp");
        function er(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        i.Component;
        var tr = function (e) {
            var t = e.location;
            return s
                .a
                .createElement(_n, {
                    location: t
                }, s.a.createElement(d.c, {
                    location: t
                }, s.a.createElement(d.a, {
                    exact: !0,
                    path: "/",
                    component: zt
                }), s.a.createElement(d.a, {
                    exact: !0,
                    path: "/about/",
                    component: It
                }), s.a.createElement(d.a, {
                    exact: !0,
                    path: "/work/:client/",
                    component: Yn
                }), !1, s.a.createElement(d.a, {component: Rn})))
        };
        tr.propTypes = {};
        var nr = Object(d.f)(tr),
            rr = n(555),
            ar = n(122),
            or = n(161),
            ir = n(558),
            sr = n(556),
            cr = n(557),
            ur = n(218),
            lr = n(160),
            pr = n(217),
            hr = (n(543), "_2jwtl");
        function dr(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var fr = function (e) {
            Ye()(n, e);
            var t = dr(n);
            function n(e) {
                var r;
                return He()(this, n),
                (r = t.call(this, e)).ease = "Expo.easeInOut",
                r.isTouchCapable = "ontouchstart" in window,
                r.onMouseMove = r
                    .onMouseMove
                    .bind(qe()(r)),
                r.resize = dt()(r.resize.bind(qe()(r)), 350),
                r.setup = r
                    .setup
                    .bind(qe()(r)),
                r.start = r
                    .start
                    .bind(qe()(r)),
                r.stop = r
                    .stop
                    .bind(qe()(r)),
                r.setupScene = r
                    .setupScene
                    .bind(qe()(r)),
                r.state = {
                    ready: !1
                },
                r
            }
            return We()(n, [
                {
                    key: "componentDidMount",
                    value: function () {
                        this.setup(),
                        this.isTouchCapable
                            ? (
                                window.addEventListener("touchstart", this.onMouseMove),
                                window.addEventListener("touchmove", this.onMouseMove)
                            )
                            : window.addEventListener("mousemove", this.onMouseMove, {
                                passive: !0
                            }),
                        window.addEventListener("resize", this.resize)
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        var t = this.props,
                            n = t.active,
                            r = t.cover,
                            a = t.zoom,
                            o = e.active !== n,
                            i = (e.cover, e.zoom !== a);
                        o && this.handleTransition(e),
                        i && this.handleTransitionZoom(e)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this.stop(),
                        this
                            .node
                            .removeChild(this.renderer.gl.canvas),
                        this.isTouchCapable
                            ? (
                                window.removeEventListener("touchstart", this.onMouseMove),
                                window.removeEventListener("touchmove", this.onMouseMove)
                            )
                            : window.removeEventListener("mousemove", this.onMouseMove),
                        window.removeEventListener("resize", this.resize)
                    }
                }, {
                    key: "setup",
                    value: function () {
                        var e = this.node.clientWidth,
                            t = this.node.clientHeight,
                            n = e / t,
                            r = new rr.a({
                                alpha: !0,
                                antialias: !0,
                                dpr: 1,
                                width: e,
                                height: t
                            }),
                            a = new ar.a,
                            o = new or.a,
                            i = new or.a,
                            s = new or.a,
                            c = new ir.a(r.gl, {
                                alpha: .7,
                                dissipation: .9,
                                falloff: .2
                            }),
                            u = new sr.a(r.gl),
                            l = new cr.a(r.gl),
                            p = this.getTextures(r),
                            h = this.getBackgroundProgram(r.gl, p, c),
                            d = new ur.a(r.gl, {
                                geometry: l,
                                program: h
                            });
                        u
                            .position
                            .set(0, 0, 1.2),
                        a.addChild(d),
                        this.aspect = n,
                        this.camera = u,
                        this.flowmap = c,
                        this.lastMouse = s,
                        this.mouse = i,
                        this.background = d,
                        this.program = h,
                        this.renderer = r,
                        this.scene = a,
                        this.textures = p,
                        this.velocity = o,
                        this
                            .node
                            .appendChild(this.renderer.gl.canvas),
                        this.handleTransitionZoom(this.props),
                        this.start()
                    }
                }, {
                    key: "getTextures",
                    value: function (e) {
                        return this
                            .props
                            .images
                            .reduce((function (t, n) {
                                var r = new lr.a(e.gl, {
                                        anisotropy: e.parameters.maxAnisotropy,
                                        magFilter: e.gl.LINEAR,
                                        minFilter: e.gl.LINEAR
                                    }),
                                    a = new Image;
                                return a.onload = function () {
                                    r.image = a,
                                    r.needsUpdate = !0
                                },
                                a.src = n,
                                [].concat(Xn()(t), [r])
                            }), [])
                    }
                }, {
                    key: "getBackgroundProgram",
                    value: function (e, t, n) {
                        var r = this.props,
                            a = r.active,
                            o = r.size,
                            i = this.node.clientWidth,
                            s = this.node.clientHeight;
                        return new pr.a(e, {
                            transparent: !0,
                            uniforms: {
                                alpha: {
                                    value: 0
                                },
                                dispFactor: {
                                    value: 0
                                },
                                imageResolution: {
                                    value: new or.a(o.width, o.height)
                                },
                                resolution: {
                                    value: new or.a(i, s)
                                },
                                tFlow: n.uniform,
                                tFrom: {
                                    value: t[a]
                                },
                                tTo: {
                                    value: t[a]
                                },
                                uTime: {
                                    value: 0
                                },
                                zoom: {
                                    value: 1.25
                                }
                            },
                            vertex: "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute v" +
                                    "ec2 uv;\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform ma" +
                                    "t4 projectionMatrix;\nuniform float zoom;\n\nvarying vec2 vUv;\n\nvoid main() " +
                                    "{\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(po" +
                                    "sition, zoom);\n}\n",
                            fragment: "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nvarying vec" +
                                    "2 vUv;\n\nuniform float alpha;\nuniform float dispFactor;\nuniform float uTime" +
                                    ";\nuniform sampler2D tFlow;\nuniform sampler2D tFrom;\nuniform sampler2D tTo;" +
                                    "\nuniform vec2 imageResolution;\nuniform vec2 resolution;\n\nvoid main() {\n  " +
                                    "float intensity = 0.3;\n\n  vec3 flow = texture2D(tFlow, vUv).rgb;\n  vec2 rat" +
                                    "io = vec2(\n    min((resolution.x / resolution.y) / (imageResolution.x / image" +
                                    "Resolution.y), 1.0),\n    min((resolution.y / resolution.x) / (imageResolution" +
                                    ".y / imageResolution.x), 1.0)\n  );\n  vec2 uv = vec2(\n    vUv.x * ratio.x + " +
                                    "(1.0 - ratio.x) * 0.5,\n    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );\n  v" +
                                    "ec4 tFromCache = texture2D(tFrom, uv);\n  vec4 tToCache = texture2D(tTo, uv);" +
                                    "\n\n  vec2 tFromUV1 = vec2(uv.x, uv.y + dispFactor * (tToCache * intensity));" +
                                    "\n  vec2 tToUV1 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (tFromCache * intensi" +
                                    "ty));\n  vec2 tFromUV2 = vec2(uv.x, uv.y + dispFactor * (tToCache * intensity)" +
                                    ");\n  vec2 tToUV2 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (tFromCache * inten" +
                                    "sity));\n  vec2 tFromUV3 = vec2(uv.x, uv.y + dispFactor * (tToCache * intensit" +
                                    "y));\n  vec2 tToUV3 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (tFromCache * int" +
                                    "ensity));\n\n  tFromUV1 -= flow.xy * (0.15 * 0.7);\n  tFromUV2 -= flow.xy * (0" +
                                    ".125 * 0.7);\n  tFromUV3 -= flow.xy * (0.10 * 0.7);\n\n  vec3 tex1 = texture2D" +
                                    "(tFrom, tFromUV1).rgb;\n  vec3 tex2 = texture2D(tFrom, tFromUV2).rgb;\n  vec3 " +
                                    "tex3 = texture2D(tFrom, tFromUV3).rgb;\n\n  vec3 tex4 = texture2D(tTo, tToUV1)" +
                                    ".rgb;\n  vec3 tex5 = texture2D(tTo, tToUV1).rgb;\n  vec3 tex6 = texture2D(tTo," +
                                    " tToUV1).rgb;\n\n  vec4 finalFrom = vec4(tex1.r, tex2.g, tex3.b, alpha);\n  ve" +
                                    "c4 finalTo = vec4(tex4.r, tex5.g, tex6.b, alpha);\n  vec4 finalTexture = mix(f" +
                                    "inalFrom, finalTo, dispFactor);\n\n  gl_FragColor = finalTexture;\n}\n"
                        })
                    }
                }, {
                    key: "onMouseMove",
                    value: function (e) {
                        e.changedTouches && e.changedTouches.length && (
                            e.x = e.changedTouches[0].pageX,
                            e.y = e.changedTouches[0].pageY
                        ),
                        void 0 === e.x && (e.x = e.pageX, e.y = e.pageY),
                        this
                            .mouse
                            .set(
                                e.x / this.renderer.gl.renderer.width,
                                1 - e.y / this.renderer.gl.renderer.height
                            ),
                        this.lastTime || (
                            this.lastTime = performance.now(),
                            this.lastMouse.set(e.x, e.y)
                        );
                        var t = e.x - this.lastMouse.x,
                            n = e.y - this.lastMouse.y;
                        this
                            .lastMouse
                            .set(e.x, e.y);
                        var r = performance.now(),
                            a = Math.max(10.4, r - this.lastTime);
                        this.lastTime = r,
                        this.velocity.x = t / a,
                        this.velocity.y = n / a,
                        this.velocity.needsUpdate = !0
                    }
                }, {
                    key: "handleTransitionZoom",
                    value: function (e) {
                        var t = this,
                            n = 1 === e.zoom;
                        Yt
                            .a
                            .killTweensOf(this.program.uniforms.zoom),
                        Yt
                            .a
                            .to(this.program.uniforms.zoom, {
                                duration: e.duration,
                                ease: this.ease,
                                value: 1 / e.zoom,
                                onStart: function () {
                                    n
                                        ? t.handleTransitionCoverIn(e)
                                        : (t.setState({
                                            ready: !1
                                        }), t.handleTransitionCoverOut(e))
                                }
                            }),
                        e.active && (
                            Yt.a.killTweensOf(this.program.uniforms.alpha),
                            Yt.a.to(this.program.uniforms.alpha, {
                                duration: e.duration,
                                ease: this.ease,
                                value: e.zoom - .15
                            })
                        )
                    }
                }, {
                    key: "handleTransitionCoverIn",
                    value: function (e) {
                        var t = this,
                            n = {
                                x: 0,
                                y: 0
                            },
                            r = this.getBackgroundRotation();
                        Yt
                            .a
                            .to(n, {
                                duration: e.duration,
                                ease: this.ease,
                                x: r.x,
                                y: r.y,
                                onStart: function () {
                                    t.background.worldMatrixNeedsUpdate = !0
                                },
                                onUpdate: function () {
                                    t.background.worldMatrixNeedsUpdate = !0,
                                    t
                                        .background
                                        .rotation
                                        .set(n.x, n.y, 0)
                                },
                                onComplete: function () {
                                    t.setState({
                                        ready: !0
                                    }),
                                    t.background.worldMatrixNeedsUpdate = !0,
                                    t.background.rotation.x = r.x,
                                    t.background.rotation.y = r.y
                                }
                            })
                    }
                }, {
                    key: "handleTransitionCoverOut",
                    value: function (e) {
                        var t = this,
                            n = this.getBackgroundRotation(),
                            r = 0,
                            a = 0;
                        Yt
                            .a
                            .to(n, {
                                duration: e.duration,
                                ease: this.ease,
                                x: r,
                                y: a,
                                onStart: function () {
                                    t.background.worldMatrixNeedsUpdate = !0
                                },
                                onUpdate: function () {
                                    t.background.worldMatrixNeedsUpdate = !0,
                                    t
                                        .background
                                        .rotation
                                        .set(n.x, n.y, 0)
                                },
                                onComplete: function () {
                                    t.background.worldMatrixNeedsUpdate = !0,
                                    t.background.rotation.x = r,
                                    t.background.rotation.y = a
                                }
                            })
                    }
                }, {
                    key: "handleTransition",
                    value: function (e) {
                        var t = this,
                            n = e.active
                                ? e.zoom - .15
                                : 0;
                        Yt
                            .a
                            .killTweensOf(this.program.uniforms.alpha),
                        Yt
                            .a
                            .to(this.program.uniforms.alpha, {
                                duration: e.duration,
                                ease: this.ease,
                                value: n,
                                onStart: function () {
                                    t.program.uniforms.alpha.needsUpdate = !0
                                },
                                onComplete: function () {
                                    t.program.uniforms.alpha.value = n
                                }
                            }),
                        e.active && (
                            Yt.a.killTweensOf(this.program.uniforms.dispFactor),
                            Yt.a.to(this.program.uniforms.dispFactor, {
                                duration: e.duration,
                                ease: this.ease,
                                value: 1,
                                onStart: function () {
                                    t.program.uniforms.tTo.value = t.textures[e.active],
                                    t.program.uniforms.tTo.needsUpdate = !0
                                },
                                onComplete: function () {
                                    t.program.uniforms.tFrom.value = t.textures[e.active],
                                    t.program.uniforms.tFrom.needsUpdate = !0,
                                    t.program.uniforms.dispFactor.value = 0
                                }
                            })
                        )
                    }
                }, {
                    key: "getBackgroundRotation",
                    value: function () {
                        return 0 === this.lastMouse.x && 0 === this.lastMouse.y
                            ? {
                                x: 0,
                                y: 0
                            }
                            : {
                                x: 2e-4 *(this.lastMouse.y - this.node.clientHeight / 2),
                                y: 2e-4 *(this.lastMouse.x - this.node.clientWidth / 2)
                            }
                    }
                }, {
                    key: "resize",
                    value: function () {
                        var e = this.node.clientWidth,
                            t = this.node.clientHeight;
                        this
                            .program
                            .uniforms
                            .resolution
                            .value
                            .set(e, t),
                        this
                            .renderer
                            .setSize(e, t)
                    }
                }, {
                    key: "start",
                    value: function () {
                        Yt
                            .a
                            .ticker
                            .lagSmoothing(1e3, 16),
                        Yt
                            .a
                            .ticker
                            .add(this.setupScene)
                    }
                }, {
                    key: "stop",
                    value: function () {
                        Yt
                            .a
                            .ticker
                            .remove(this.setupScene)
                    }
                }, {
                    key: "renderFlowmap",
                    value: function () {
                        this.props.cover && (
                            this.flowmap.aspect = this.aspect,
                            this.flowmap.mouse.copy(this.mouse),
                            this.flowmap.velocity.lerp(
                                this.velocity,
                                this.velocity.len
                                    ? .15
                                    : .1
                            ),
                            this.flowmap.update()
                        )
                    }
                }, {
                    key: "renderOrbit",
                    value: function () {
                        var e = this.props.cover,
                            t = this.state.ready;
                        if (e && t) {
                            var n = this.getBackgroundRotation();
                            this.background.rotation.x = n.x,
                            this.background.rotation.y = n.y
                        }
                    }
                }, {
                    key: "setupScene",
                    value: function () {
                        this.velocity.needsUpdate || (this.mouse.set(-1), this.velocity.set(0)),
                        this.velocity.needsUpdate = !1,
                        this.program.uniforms.uTime.value = .01 * Yt.a.ticker.frame,
                        this.renderFlowmap(),
                        this.renderOrbit(),
                        this
                            .renderer
                            .render({camera: this.camera, scene: this.scene})
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this;
                        return s
                            .a
                            .createElement("div", {
                                className: hr,
                                ref: function (t) {
                                    e.node = t
                                }
                            })
                    }
                }
            ]),
            n
        }(i.Component);
        P()(fr, "defaultProps", {
            active: 0,
            duration: 2,
            size: {
                height: 1080,
                width: 1440
            },
            zoom: .8
        }),
        fr.propTypes = {};
        var vr = fr;
        function mr(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var yr = function (e) {
            Ye()(n, e);
            var t = mr(n);
            function n() {
                return He()(this, n),
                t.apply(this, arguments)
            }
            return We()(n, [
                {
                    key: "render",
                    value: function () {
                        var e = this.props.children;
                        return s
                            .a
                            .Children
                            .only(e)
                    }
                }
            ], [
                {
                    key: "getDerivedStateFromProps",
                    value: function (e) {
                        var t = document.getElementsByName("description") || [],
                            n = Q()(t, 1)[0],
                            r = n && n.getAttribute("content");
                        if (
                            e.title !== document.title && (document.title = e.title),
                            e.description !== r
                        ) 
                            if (n) 
                                n.setAttribute("content", e.description);
                            else {
                                var a = document.createElement("meta");
                                a.name = "description",
                                a.setAttribute("content", e.description),
                                document
                                    .head
                                    .appendChild(a)
                            }
                        return {}
                    }
                }
            ]),
            n
        }(i.Component);
        yr.propTypes = {};
        var Er = yr,
            gr = n(84);
        function br(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var Sr = function (e) {
            Ye()(n, e);
            var t = br(n);
            function n() {
                return He()(this, n),
                t.apply(this, arguments)
            }
            return We()(n, [
                {
                    key: "renderMedia",
                    value: function () {
                        var e = this.props,
                            t = e.active,
                            n = e.assets,
                            r = e.scene,
                            a = Object
                                .values(n)
                                .filter((function (e) {
                                    return e.hero.url
                                }))
                                .reduce((function (e, t) {
                                    return [].concat(Xn()(e), [t.hero.url])
                                }), [])
                                .filter(Boolean);
                        return s
                            .a
                            .createElement(vr, {
                                active: t,
                                cover: r.cover,
                                duration: r.duration,
                                images: a,
                                zoom: r.zoom
                            })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props.assets,
                            t = e[location.pathname] || e["*"],
                            n = t
                                .description
                                .toString(),
                            r = ""
                                .concat(t.title, " — ")
                                .concat(gr.a);
                        return s
                            .a
                            .createElement(Er, {
                                description: n,
                                title: r
                            }, this.renderMedia())
                    }
                }
            ]),
            n
        }(i.Component);
        P()(Sr, "mapsStateToProps", (function (e) {
            return {active: e.stageActive, assets: e.preloadAssets, duration: e.stageDuration, scene: e.stageScene}
        })),
        Sr.propTypes = {};
        var Tr = Object(f.b)(Sr.mapsStateToProps)(Sr),
            kr = (n(544), "Fly-V"),
            xr = "_3YR2r",
            Or = "_2OVtx";
        function wr(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var _r = function (e) {
            Ye()(n, e);
            var t = wr(n);
            function n(e) {
                var r;
                return He()(this, n),
                (r = t.call(this, e)).active = !1,
                r.ease = "power4.out",
                r.border = 2,
                r.isTouchCapable = "ontouchstart" in window,
                r.pos = {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2
                },
                r.mouse = {
                    x: r.pos.x,
                    y: r.pos.y
                },
                r.speed = .1,
                r.setupScene = r
                    .setupScene
                    .bind(qe()(r)),
                r.handlerMouseMove = r
                    .handlerMouseMove
                    .bind(qe()(r)),
                r
            }
            return We()(n, [
                {
                    key: "componentDidMount",
                    value: function () {
                        this.isTouchCapable || (
                            document.addEventListener("mousemove", this.handlerMouseMove, {
                                passive: !0
                            }),
                            this.start()
                        )
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this.stop()
                    }
                }, {
                    key: "handlerMouseMove",
                    value: function (e) {
                        this.mouse.x = e.pageX,
                        this.mouse.y = e.pageY,
                        this.active = !1,
                        e
                            .target
                            .closest('[data-type="link"]') && (this.active = !0)
                    }
                }, {
                    key: "start",
                    value: function () {
                        Yt
                            .a
                            .ticker
                            .lagSmoothing(1e3, 16),
                        Yt
                            .a
                            .ticker
                            .add(this.setupScene),
                        Yt
                            .a
                            .set(this.cursor, {
                                xPercent: -50,
                                yPercent: -50
                            }),
                        Yt
                            .a
                            .set(this.dot, {
                                xPercent: -50,
                                yPercent: -50
                            }),
                        this.setCursorX = Yt
                            .a
                            .quickSetter(this.cursor, "x", "px"),
                        this.setCursorY = Yt
                            .a
                            .quickSetter(this.cursor, "y", "px"),
                        this.setDotX = Yt
                            .a
                            .quickSetter(this.dot, "x", "px"),
                        this.setDotY = Yt
                            .a
                            .quickSetter(this.dot, "y", "px")
                    }
                }, {
                    key: "stop",
                    value: function () {
                        Yt
                            .a
                            .ticker
                            .remove(this.setupScene)
                    }
                }, {
                    key: "setupScene",
                    value: function () {
                        var e = this.props.theme,
                            t = rt[e].black,
                            n = 1 - Math.pow(1 - this.speed, Yt.a.ticker.deltaRatio());
                        if (
                            this.pos.x += (this.mouse.x - this.pos.x) * n,
                            this.pos.y += (this.mouse.y - this.pos.y) * n,
                            this.setCursorX(this.pos.x),
                            this.setCursorY(this.pos.y),
                            this.setDotX(this.mouse.x),
                            this.setDotY(this.mouse.y),
                            this.active !== this.lastActive
                        ) {
                            var r = 2 * (
                                this.active
                                    ? 30
                                    : 17.5
                            ) - this.border;
                            Yt
                                .a
                                .to(this.cursor, {
                                    backgroundColor: this.active
                                        ? "rgba(".concat(t, "} 0.1)")
                                        : "rgba(".concat(t, ", 0)"),
                                    duration: 1,
                                    ease: this.ease,
                                    height: r,
                                    width: r
                                }),
                            Yt
                                .a
                                .to(this.dot, {
                                    autoAlpha: this.active
                                        ? 0
                                        : 1,
                                    duration: 1,
                                    ease: this.ease
                                })
                        }
                        this.lastActive = this.active
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this;
                        return this.isTouchCapable
                            ? null
                            : s
                                .a
                                .createElement("div", {
                                    className: kr
                                }, s.a.createElement("div", {
                                    className: xr,
                                    ref: function (t) {
                                        e.cursor = t
                                    }
                                }), s.a.createElement("div", {
                                    className: Or,
                                    ref: function (t) {
                                        e.dot = t
                                    }
                                }))
                    }
                }
            ]),
            n
        }(i.Component);
        P()(_r, "mapsStateToProps", (function (e) {
            return {theme: e.stageTheme}
        })),
        _r.propTypes = {};
        var Ar = Object(f.b)(_r.mapsStateToProps)(_r),
            Cr = (n(545), "_1BTay"),
            Rr = "_1KK-T",
            Nr = "_1x9HQ",
            Pr = "cbDt3",
            Mr = "_3vpvj",
            Ir = "_1tHML",
            Dr = "_3_Tcv",
            Lr = {
                header: {
                    ease: "Expo.easeInOut",
                    states: {
                        set: {
                            about: {
                                width: 0
                            },
                            logo: {
                                width: 0
                            }
                        },
                        to: {
                            about: {
                                duration: 1.25,
                                delay: .5,
                                ease: "Expo.easeInOut",
                                width: "100%"
                            },
                            logo: {
                                duration: 1.25,
                                ease: "Expo.easeInOut",
                                width: "100%"
                            }
                        }
                    }
                },
                progress: {
                    ease: "Expo.easeInOut",
                    duration: 1,
                    states: {
                        set: {
                            digit: {
                                left: 0
                            },
                            center: {
                                width: 0
                            },
                            right: {
                                width: 0
                            },
                            top: {
                                width: 0
                            }
                        },
                        to: {
                            digit: {
                                delay: .15,
                                left: "100%"
                            },
                            common: {
                                delay: .15,
                                opacity: 0,
                                x: "100%"
                            }
                        }
                    }
                }
            };
        function jr(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var Gr = function (e) {
            Ye()(n, e);
            var t = jr(n);
            function n() {
                var e;
                return He()(this, n),
                (e = t.call(this)).handleAboutMouseEnter = e
                    .handleAboutMouseEnter
                    .bind(qe()(e)),
                e.handleAboutMouseLeave = e
                    .handleAboutMouseLeave
                    .bind(qe()(e)),
                e.handleLogoClick = e
                    .handleLogoClick
                    .bind(qe()(e)),
                e.handleLogoMouseEnter = e
                    .handleLogoMouseEnter
                    .bind(qe()(e)),
                e.handleLogoMouseLeave = e
                    .handleLogoMouseLeave
                    .bind(qe()(e)),
                e.state = {
                    title: ""
                },
                e
            }
            return We()(n, [
                {
                    key: "componentDidMount",
                    value: function () {
                        Yt
                            .a
                            .set(this.about, Lr.header.states.set.about),
                        Yt
                            .a
                            .to(this.about, Lr.header.states.to.about),
                        Yt
                            .a
                            .set(this.logo, Lr.header.states.set.logo),
                        Yt
                            .a
                            .to(this.logo, Lr.header.states.to.logo)
                    }
                }, {
                    key: "handleLogoMouseEnter",
                    value: function () {
                        Yt
                            .a
                            .to(this.logo, {
                                duration: .35,
                                text: {
                                    value: "Fabrizzio Zampieri",
                                    type: "diff"
                                },
                                ease: "Expo.easeInOut"
                            })
                    }
                }, {
                    key: "handleLogoMouseLeave",
                    value: function () {
                        var e = this.state.title;
                        Yt
                            .a
                            .to(this.logo, {
                                duration: .5,
                                text: {
                                    value: e,
                                    type: "diff"
                                },
                                ease: "Expo.easeInOut"
                            })
                    }
                }, {
                    key: "handleAboutMouseEnter",
                    value: function () {
                        cn(this.about)
                    }
                }, {
                    key: "handleAboutMouseLeave",
                    value: function () {
                        var e = this;
                        un(this.about, (function () {
                            return e.forceUpdate()
                        }))
                    }
                }, {
                    key: "handleLogoClick",
                    value: function (e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        this
                            .props
                            .history
                            .push("/"),
                        this.handleLogoMouseLeave()
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.state.title;
                        return s
                            .a
                            .createElement("header", {
                                className: Cr
                            }, s.a.createElement("div", {
                                className: Rr
                            }, s.a.createElement("div", {
                                className: Nr,
                                "data-type": "link",
                                onMouseEnter: this.handleLogoMouseEnter,
                                onMouseLeave: this.handleLogoMouseLeave,
                                onMouseUp: this.handleLogoClick,
                                onTouchEnd: this.handleLogoMouseLeave,
                                onTouchStart: this.handleLogoMouseEnter,
                                ref: function (t) {
                                    e.logo = t
                                },
                                role: "button",
                                tabIndex: -1
                            }, t)), s.a.createElement("div", {
                                className: Pr,
                                onMouseEnter: this.handleAboutMouseEnter,
                                onMouseLeave: this.handleAboutMouseLeave,
                                "data-type": "link"
                            }, s.a.createElement("div", {
                                className: Mr,
                                ref: function (t) {
                                    e.about = t
                                },
                                key: Date.now()
                            }, s.a.createElement(h.c, {
                                className: Ir,
                                to: "/about/"
                            }, s.a.createElement("span", {
                                className: Dr
                            }, "About")))))
                    }
                }
            ]),
            n
        }(i.PureComponent);
        Gr.propTypes = {};
        var Fr = Object(d.f)(Gr),
            Ur = (n(546), "_3deQo");
        function Hr(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var zr = function (e) {
            Ye()(n, e);
            var t = Hr(n);
            function n() {
                var e;
                return He()(this, n),
                (e = t.call(this)).handlerShadeChange = e
                    .handlerShadeChange
                    .bind(qe()(e)),
                e
            }
            return We()(n, [
                {
                    key: "componentDidMount",
                    value: function () {
                        var e = this.props.theme === S
                            ? "-100%"
                            : 0;
                        Yt
                            .a
                            .set(this.shade, {x: e})
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function (e) {
                        this.props.theme !== e.theme && this.handlerShadeChange()
                    }
                }, {
                    key: "onComplete",
                    value: function (e, t) {
                        t === S && Yt
                            .a
                            .set(e, {x: "-100%"})
                    }
                }, {
                    key: "handlerShadeChange",
                    value: function () {
                        var e = this.props.theme,
                            t = e === S
                                ? "100%"
                                : 0;
                        Yt
                            .a
                            .killTweensOf(this.shade),
                        Yt
                            .a
                            .to(this.shade, {
                                x: t,
                                speed: .5,
                                onComplete: this.onComplete,
                                ease: "Quad.easeInOut",
                                onCompleteParams: [this.shade, e]
                            })
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this;
                        return s
                            .a
                            .createElement("div", {
                                className: Ur,
                                ref: function (t) {
                                    e.shade = t
                                }
                            })
                    }
                }
            ]),
            n
        }(i.Component);
        P()(zr, "mapsStateToProps", (function (e) {
            return {theme: e.stageTheme}
        })),
        zr.propTypes = {};
        var Wr = Object(f.b)(zr.mapsStateToProps)(zr),
            Vr = (n(547), "_3-htv"),
            Yr = function (e) {
                var t = e.children;
                return s
                    .a
                    .createElement(
                        "div",
                        {
                            className: Vr
                        },
                        s.a.createElement(Ar, null),
                        s.a.createElement(Fr, null),
                        t,
                        s.a.createElement(Tr, null),
                        s.a.createElement(Wr, null)
                    )
            };
        Yr.propTypes = {};
        var Br = Yr,
            Xr = (n(548), "_2wwVL"),
            Kr = "_2V8Pc",
            Qr = "_2Mrux",
            Zr = "_-1GrO",
            qr = "_1Bwad",
            Jr = "YNaKn",
            $r = "_3ha09",
            ea = "_93x-s",
            ta = "_-6wya";
        function na(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var ra = function (e) {
            Ye()(n, e);
            var t = na(n);
            function n() {
                var e;
                return He()(this, n),
                (e = t.call(this)).handlerComplete = e
                    .handlerComplete
                    .bind(qe()(e)),
                e.handlerLoaded = e
                    .handlerLoaded
                    .bind(qe()(e)),
                e.handlerProgress = e
                    .handlerProgress
                    .bind(qe()(e)),
                e
            }
            return We()(n, [
                {
                    key: "componentDidMount",
                    value: function () {
                        var e = this.props.theme;
                        Yt
                            .a
                            .set(this.center, Lr.progress.states.set.center),
                        Yt
                            .a
                            .set(this.digit, Lr.progress.states.set.digit),
                        Jt(this.title),
                        at(e)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function (e) {
                        var t = this.props.progress;
                        e.progress !== t && this.handlerProgress(t)
                    }
                }, {
                    key: "handlerProgress",
                    value: function (e) {
                        var t = "".concat(100 * e, "%"),
                            n = 1 === e
                                ? this.handlerComplete
                                : function () {},
                            r = Lr.progress,
                            a = r.duration,
                            o = r.ease;
                        Yt
                            .a
                            .to(this.center, {
                                duration: a,
                                ease: o,
                                onComplete: n,
                                width: t
                            }),
                        Yt
                            .a
                            .to(this.digit, {
                                duration: a,
                                ease: o,
                                left: t
                            })
                    }
                }, {
                    key: "handlerComplete",
                    value: function () {
                        var e = this.handlerLoaded,
                            t = Lr.progress.ease,
                            n = Lr.progress.states.to.common,
                            r = n.delay,
                            a = n.opacity,
                            o = n.x;
                        en(this.title),
                        Yt
                            .a
                            .to(this.center, .75, {
                                delay: r,
                                ease: t,
                                onComplete: e,
                                x: o
                            }),
                        Yt
                            .a
                            .to(this.digit, .75, {
                                delay: r,
                                ease: t,
                                onComplete: e,
                                opacity: a
                            })
                    }
                }, {
                    key: "handlerLoaded",
                    value: function () {
                        (0, this.props.dispatch)({type: O.STAGE_LOADED})
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = 100 * this.props.progress;
                        return s
                            .a
                            .createElement("div", {
                                className: Xr
                            }, s.a.createElement("div", {
                                className: qr
                            }, s.a.createElement("div", {
                                className: Jr,
                                ref: function (t) {
                                    e.title = t
                                }
                            }, s.a.createElement("h1", {
                                className: $r
                            }, "Hello, I am Fabrizzio Zampieri,"), s.a.createElement("h1", {
                                className: $r
                            }, gr.a))), s.a.createElement("div", {
                                className: ea
                            }, s.a.createElement("div", {
                                className: ta,
                                ref: function (t) {
                                    e.center = t
                                }
                            })), s.a.createElement("div", {
                                className: Kr
                            }, s.a.createElement("div", {
                                className: Qr,
                                ref: function (t) {
                                    e.digit = t
                                }
                            }, s.a.createElement("span", {
                                className: Zr
                            }, t.toFixed(), "%"))))
                    }
                }
            ]),
            n
        }(i.PureComponent);
        P()(ra, "mapsStateToProps", (function (e) {
            return {progress: e.preloadProgress, theme: e.stageTheme}
        })),
        ra.propTypes = {};
        var aa = Object(f.b)(ra.mapsStateToProps)(ra),
            oa = n(95),
            ia = (n(549), "_2Sdrr");
        function sa(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) 
                    return !1;
                if (Reflect.construct.sham) 
                    return !1;
                if ("function" == typeof Proxy) 
                    return !0;
                try {
                    return Date
                        .prototype
                        .toString
                        .call(Reflect.construct(Date, [], (function () {}))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n,
                    r = Qe()(e);
                if (t) {
                    var a = Qe()(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else 
                    n = r.apply(this, arguments);
                return Xe()(this, n)
            }
        }
        var ca = function (e) {
            Ye()(n, e);
            var t = sa(n);
            function n(e) {
                var r;
                He()(this, n),
                r = t.call(this, e);
                var a,
                    o = (a = oa, Object.entries(a).reduce((function (e, t) {
                        var n = Q()(t, 2),
                            r = n[0],
                            a = n[1];
                        return e[r] = a.hero,
                        e
                    }), {}));
                return e.dispatch(function (e, t) {
                    return {images: e, manifest: t, type: O.STAGE_PRELOAD}
                }(o, oa)),
                r
            }
            return We()(n, [
                {
                    key: "renderPreload",
                    value: function () {
                        var e = this.props,
                            t = e.children;
                        return e.loaded
                            ? t
                            : s
                                .a
                                .createElement("div", {
                                    className: ia
                                }, s.a.createElement(aa, null))
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = oa[location.pathname] || oa["*"],
                            t = e
                                .description
                                .toString(),
                            n = ""
                                .concat(e.title, " — ")
                                .concat(gr.a);
                        return s
                            .a
                            .createElement(Er, {
                                description: t,
                                title: n
                            }, this.renderPreload())
                    }
                }
            ]),
            n
        }(i.Component);
        P()(ca, "mapsStateToProps", (function (e) {
            return {loaded: e.preloadLoaded}
        })),
        ca.propTypes = {};
        var ua = Object(f.b)(ca.mapsStateToProps)(ca),
            la = document
                .body
                .appendChild(
                    Object.assign(document.createElement("div"), {textContent: "Loading..."})
                ),
            pa = function (e) {
                var t = e.routes;
                return s
                    .a
                    .createElement(f.a, {
                        store: Fe
                    }, s.a.createElement(
                        ua,
                        null,
                        s.a.createElement(h.a, null, s.a.createElement(Br, null, s.a.createElement(d.a, {render: t})))
                    ))
            };
        pa.propTypes = {},
        u
            .a
            .render(s.a.createElement(pa, {routes: nr}), la),
        "serviceWorker" in navigator && p
            .a
            .register()

    },
    84: function (e) {
        e.exports = JSON.parse('{"a":"Product Designer"}')
    },
    95: function (e) {
        e.exports = JSON.parse(
            '{"/":{"component":"Home","hero":{"type":"blob","url":"/static/media/image/home' +
            '/hero.png"},"type":"index","title":"Index","description":"Hello, I am Fabrizzi' +
            'o Zampieri, Product Designer based in Silicon Valley. My expertise areas spass' +
            'n from Human-Computer Interaction, UI, UX, Prototyping and Software Engineerin' +
            'g.","work":[{"index":1,"path":"/work/oneskin/"},{"index":2,"path":"/work/n' +
            'ullform/"},{"index":3,"path":"/work/invisibly/"},{"index":4,"path":"/work/netf' +
            'lix/"},{"index":5,"path":"/work/adidas/"},{"index":6,"path":"/work/mountain-na' +
            'zca/"},{"index":7,"path":"/work/revlon/"},{"index":8,"path":"/work/nike/"}],"s' +
            'ocial":[{"caption":"Github","url":"https://github.com/fzampieri"},{"caption":"' +
            'LinkedIn","url":"https://linkedin.com/in/fzampieri"},{"caption":"Twitter","url' +
            '":"https://twitter.com/fzampieri"}],"zoom":0.8},"/work/oneskin/":{"compone' +
            'nt":"Work","description":"oneskin is the modern business travel platform t' +
            'hat combines the latest AI-driven personalization with unrivaled inventory and' +
            ' 24x7 365 live human support.","hero":{"type":"blob","url":"/static/media/imag' +
            'e/oneskin/hero.jpg"},"title":"OneSkin"},"/work/nullform/":{"component"' +
            ':"Work","description":"Beauty Date is a Design & Technology Studio based in Silic' +
            'on Valley.","hero":{"type":"blob","url":"/static/media/image/nullform/hero.jpg' +
            '"},"title":"Beauty Date"},"/work/invisibly/":{"component":"Work","description":"I' +
            'nvisibly empowers people to take back control online.","hero":{"type":"blob","' +
            'url":"/static/media/image/invisibly/hero.jpg"},"title":"Invisibly"},"/work/net' +
            'flix/":{"component":"Work","description":"I designed and built several web app' +
            'lications that help Netflix to automate and scale processes at Corporate and S' +
            'tudio levels.  Maximizing ROI in areas related to Globalization, Marketing, Fi' +
            'lm, TV, and more.","recognitions":["Studio UI Demo Fair 2019"],"hero":{"type":' +
            '"blob","url":"/static/media/image/netflix/hero.jpg"},"title":"Netflix"},"/work' +
            '/adidas/":{"component":"Work","description":"3D Viewer for Adidas futurecraft ' +
            'shoe series.","hero":{"type":"blob","url":"/static/media/image/adidas/hero.jpg' +
            '"},"title":"Adidas"},"/work/mountain-nazca/":{"component":"Work","description"' +
            ':"We created and launched 4 technology companies in the first 12 months.","her' +
            'o":{"type":"blob","url":"/static/media/image/nazca/hero.jpg"},"title":"Mountai' +
            'n Nazca"},"/work/revlon/":{"component":"Work","description":"Interactive Insta' +
            'llation for the worldwide Revlon\'s hashtag #loveison on Valentine\'s day","he' +
            'ro":{"url":"/static/media/image/revlon/hero.jpg","type":"blob"},"title":"Revlo' +
            'n"},"/work/nike/":{"component":"Work","description":"I led the frontend develo' +
            'pment for this unique multi-disciplinary experience.","hero":{"url":"/static/m' +
            'edia/image/nike/hero.jpg","type":"blob"},"title":"Nike We Run Mexico"},"/about' +
            '/":{"component":"About","description":["Hello, I am Fabrizzio Zampieri, User I' +
            'nterface Engineer based in Silicon Valley. My expertise areas span from Human-' +
            'Computer Interaction, UI, UX, Prototyping and Software Engineering.","My work ' +
            'is driven by my passion, my curiosity, and my forward-thinking to strive to pu' +
            'sh boundaries within a project."],"layers":[{"key":"description","label":"Bio"' +
            ',"render":"renderBio"},{"key":"contact","label":"Contact","render":"renderCont' +
            'ent"},{"key":"skills","label":"Skills","render":"renderContent"}],"social":[{"' +
            'caption":"Github","url":"https://github.com/madebyae"},{"caption":"LinkedIn","' +
            'url":"https://linkedin.com/in/madebyae"},{"caption":"Twitter","url":"https://t' +
            'witter.com/madebyae"}],"skills":[{"key":"Tech","values":["AWS (Certified Devel' +
            'oper)","Angular","GLSL","GSAP","GraphQL","Node.js","React / React Native","Red' +
            'ux + Redux Saga","Rust","TypeScript","WebAssembly"]},{"key":"Design","values":' +
            '["Audio","Bluetooth","EME","Media Capture","Service Workers (PWA)","Video","We' +
            'b Workers","WebGL","WebRTC"]},{"key":"Hardware","values":["Ant+","Arduino","Ki' +
            'nect","Leap Motion","Raspberry PI"]}],"contact":[{"key":"Email","render":"rend' +
            'erLink","values":[["hi@zamp.design","mailto:hi@zamp.design?subject=Hi there","' +
            'a"]]},{"key":"Time","render":"renderTime","values":["(Pacific Time)"]},{"key":' +
            '"","render":"","values":[""]}],"title":"About","zoom":0.8},"*":{"component":"N' +
            'otFound","title":"Page Not Found","description":"Page Not Found","zoom":0.8}}'
        )
    }
});