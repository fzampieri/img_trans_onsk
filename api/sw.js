var serviceWorkerOption = {
    "assets": ["/main.js", "/static/js/vendors~main.ff1b1b7e9df663747caa.js", "/icon.png"]
};

!function (t) {
    var n = {};
    function e(r) {
        if (n[r]) 
            return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    e.m = t,
    e.c = n,
    e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: r
        })
    },
    e.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(
            t,
            Symbol.toStringTag,
            {value: "Module"}
        ),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    e.t = function (t, n) {
        if (1 & n && (t = e(t)), 8 & n) 
            return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) 
            return t;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t) 
            for (var o in t) 
                e.d(r, o, function (n) {
                    return t[n]
                }.bind(null, o));
    return r
    },
    e.n = function (t) {
        var n = t && t.__esModule
            ? function () {
                return t.default
            }
            : function () {
                return t
            };
        return e.d(n, "a", n),
        n
    },
    e.o = function (t, n) {
        return Object
            .prototype
            .hasOwnProperty
            .call(t, n)
    },
    e.p = "/",
    e(e.s = 2)
}([
    function (t, n) {
        t.exports = function (t, n) {
            (null == n || n > t.length) && (n = t.length);
            for (var e = 0, r = new Array(n); e < n; e++) 
                r[e] = t[e];
            return r
        }
    },
    function (t, n, e) {
        var r = e(4),
            o = e(5),
            i = e(6),
            c = e(7);
        t.exports = function (t) {
            return r(t) || o(t) || i(t) || c()
        }
    },
    function (t, n, e) {
        "use strict";
        e.r(n),
        function (t) {
            var n = e(1),
                r = e.n(n),
                o = !1,
                i = t.serviceWorkerOption.assets,
                c = (new Date).toISOString(),
                u = [].concat(r()(i), ["./"]);
            u = u.map((function (n) {
                return new URL(n, t.location).toString()
            })),
            self.addEventListener("install", (function (n) {
                n.waitUntil(t.caches.open(c).then((function (t) {
                    return t.addAll(u)
                })).then((function () {
                    o
                })).catch((function (t) {
                    throw console.error(t),
                    t
                })))
            })),
            self.addEventListener("activate", (function (n) {
                n.waitUntil(t.caches.keys().then((function (n) {
                    return Promise.all(n.map((function (n) {
                        return 0 === n.indexOf(c)
                            ? null
                            : t
                                .caches
                                .delete(n)
                    })))
                })))
            })),
            self.addEventListener("message", (function (t) {
                switch (t.data.action) {
                    case "skipWaiting":
                        self.skipWaiting && (self.skipWaiting(), self.clients.claim())
                }
            })),
            self.addEventListener("fetch", (function (n) {
                var e = n.request;
                if ("GET" === e.method) {
                    var r = new URL(e.url);
                    if (r.origin === location.origin) {
                        var i = t
                            .caches
                            .match(e)
                            .then((function (r) {
                                return r || fetch(e)
                                    .then((function (n) {
                                        if (!n || !n.ok) 
                                            return n;
                                        var r = n.clone();
                                        return t
                                            .caches
                                            .open(c)
                                            .then((function (t) {
                                                return t.put(e, r)
                                            }))
                                            .then((function () {
                                                o
                                            })),
                                        n
                                    }))
                                    .catch((function () {
                                        return "navigate" === n.request.mode
                                            ? t
                                                .caches
                                                .match("./")
                                            : null
                                    }))
                                }));
                        n.respondWith(i)
                    }
                }
            }))
        }.call(this, e(3))
    },
    function (t, n) {
        var e;
        e = function () {
            return this
        }();
        try {
            e = e || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (e = window)
        }
        t.exports = e
    },
    function (t, n, e) {
        var r = e(0);
        t.exports = function (t) {
            if (Array.isArray(t)) 
                return r(t)
        }
    },
    function (t, n) {
        t.exports = function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) 
                return Array.from(t)
        }
    },
    function (t, n, e) {
        var r = e(0);
        t.exports = function (t, n) {
            if (t) {
                if ("string" == typeof t) 
                    return r(t, n);
                var e = Object
                    .prototype
                    .toString
                    .call(t)
                    .slice(8, -1);
                return "Object" === e && t.constructor && (e = t.constructor.name),
                "Map" === e || "Set" === e
                    ? Array.from(t)
                    : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                        ? r(t, n)
                        : void 0
            }
        }
    },
    function (t, n) {
        t.exports = function () {
            throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non" +
                "-array objects must have a [Symbol.iterator]() method."
            )
        }
    }
]);