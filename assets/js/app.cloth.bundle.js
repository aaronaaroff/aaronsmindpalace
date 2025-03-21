!function(t) {
    function e(i) {
        if (r[i])
            return r[i].exports;
        var n = r[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(n.exports, n, n.exports, e),
        n.loaded = !0,
        n.exports
    }
    var r = {};
    return e.m = t,
    e.c = r,
    e.p = "",
    e(0)
}([function(t, e, r) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var n, a, o, s, c, h, l, u, d, s, c, p, f = r(1), m = (i(f),
    r(5)), g = i(m), v = r(3), y = i(v), x = r(7), b = i(x), _ = $(window).width(), M = $(window).height(), w = !1;
    $(function() {
        var t = {
            init: function() {
                $(window).resize(function(e) {
                    t.sizeSet()
                }),
                $(document).ready(function(e) {
                    n = e("body"),
                    a = e("#container"),
                    o = e("#site-title"),
                    s = e("#project-text"),
                    c = e("#project-content"),
                    h = e("#flag"),
                    t.sizeSet(),
                    t.layoutBlog(),
                    t.indexSelect(),
                    n.on("click", "[data-target]", function(t) {
                        $el = e(this),
                        url = $el.attr("href"),
                        t.preventDefault(),
                        n.addClass("loading"),
                        setTimeout(function() {
                            window.location = url
                        }, 100)
                    }),
                    e(window).load(function() {
                        n.addClass("loaded"),
                        t.sizeSet()
                    }),
                    window.onpageshow = function(t) {
                        setTimeout(function() {
                            n.removeClass("loading").addClass("loaded")
                        }, 150)
                    }
                })
            },
            sizeSet: function() {
                function t() {
                    d && d.destroy(!0),
                    s.removeClass("fixed"),
                    c.removeClass("fixed").attr("style", "")
                }
                _ = $(window).width(),
                M = $(window).height(),
                _ <= 1024 && (w = !0),
                w && _ >= 1024 && (w = !1),
                w ? $(".scroller").slimScroll({
                    destroy: !0
                }).attr("style", "") : $(".scroller").slimScroll({
                    height: "auto",
                    size: "0px",
                    position: "right",
                    color: "#000",
                    alwaysVisible: !1,
                    distance: "0px",
                    railVisible: !1,
                    railOpacity: 0,
                    wheelStep: 10,
                    allowPageScroll: !1,
                    disableFadeOut: !0
                }),
                w ? t() : s.height() <= M ? (d && d.destroy(!0),
                s.addClass("fixed"),
                c.addClass("fixed"),
                c.css("margin-top", $("#project-text").height() + 35)) : (t(),
                u = new ScrollMagic.Controller({
                    globalSceneOptions: {
                        triggerHook: "onEnter"
                    }
                }),
                d = new ScrollMagic.Scene({
                    triggerElement: "#project-content",
                    duration: s.outerHeight()
                }).setPin("#project-text", {
                    pushFollowers: !1
                }).addTo(u))
            },
            indexSelect: function() {
                if (!w && $("#container .inner").hasClass("home")) {
                    var t = function t() {
                        window.requestAnimationFrame(t);
                        var i = Date.now();
                        r.simulate(i, p.geometry),
                        p.update(),
                        e.render()
                    }
                      , e = new g.default
                      , r = new y.default(10,13);
                    p = new b.default(r,""),
                    e.scene.add(p.mesh),
                    t(),
                    $(document).on({
                        mouseenter: function() {
                            if (!w) {
                                var t = $(this)
                                  , e = t.data("id")
                                  , r = t.data("flag");
                                o.addClass("hide"),
                                $("[data-id=" + e + "]").addClass("active"),
                                h.removeClass("hide"),
                                p.updateTexture(r)
                            }
                        },
                        mouseleave: function() {
                            w || (o.removeClass("hide"),
                            $("[data-id]").removeClass("active"),
                            h.addClass("hide"))
                        }
                    }, ".project-link a")
                }
            },
            destroyOnScroll: function() {
                for (var t = new ScrollMagic.Controller({
                    globalSceneOptions: {
                        triggerHook: "onLeave"
                    }
                }), e = document.getElementsByClassName("content"), r = e.length - 1; r >= 0; r--)
                    new ScrollMagic.Scene({
                        triggerElement: e[r]
                    }).setClassToggle(e[r], "destroy").addTo(t)
            },
            layoutBlog: function() {
                var t = $(".blog").masonry({
                    columnWidth: ".grid-sizer",
                    gutter: ".gutter-sizer",
                    itemSelector: ".article",
                    transitionDuration: 0
                });
                t.imagesLoaded().progress(function() {
                    t.masonry("layout")
                })
            },
            loadContent: function(t, e) {
                n.addClass("loading"),
                setTimeout(function() {
                    n.scrollTop(0),
                    $(e).load(t + " #container .inner", function(t) {
                        "page" == l.type ? n.addClass("page") : n.removeClass("page"),
                        setTimeout(function() {
                            $("#container .inner").hasClass("project"),
                            n.removeClass("loading").addClass("loaded")
                        }, 100)
                    })
                }, 200)
            },
            deferImages: function() {
                for (var t = document.getElementsByTagName("img"), e = 0; e < t.length; e++)
                    t[e].getAttribute("data-src") && t[e].setAttribute("src", t[e].getAttribute("data-src"))
            }
        };
        t.init()
    })
}
, function(t, e, r) {
    var i, n, a = {
        REVISION: "79"
    };
    i = a,
    n = "function" == typeof i ? i.call(e, r, e, t) : i,
    !(void 0 !== n && (t.exports = n)),
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
    void 0 === Math.sign && (Math.sign = function(t) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    }
    ),
    void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
        }
    }),
    void 0 === Object.assign && !function() {
        Object.assign = function(t) {
            "use strict";
            if (void 0 === t || null === t)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), r = 1; r < arguments.length; r++) {
                var i = arguments[r];
                if (void 0 !== i && null !== i)
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }
    }(),
    Object.assign(a, {
        MOUSE: {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        },
        CullFaceNone: 0,
        CullFaceBack: 1,
        CullFaceFront: 2,
        CullFaceFrontBack: 3,
        FrontFaceDirectionCW: 0,
        FrontFaceDirectionCCW: 1,
        BasicShadowMap: 0,
        PCFShadowMap: 1,
        PCFSoftShadowMap: 2,
        FrontSide: 0,
        BackSide: 1,
        DoubleSide: 2,
        FlatShading: 1,
        SmoothShading: 2,
        NoColors: 0,
        FaceColors: 1,
        VertexColors: 2,
        NoBlending: 0,
        NormalBlending: 1,
        AdditiveBlending: 2,
        SubtractiveBlending: 3,
        MultiplyBlending: 4,
        CustomBlending: 5,
        AddEquation: 100,
        SubtractEquation: 101,
        ReverseSubtractEquation: 102,
        MinEquation: 103,
        MaxEquation: 104,
        ZeroFactor: 200,
        OneFactor: 201,
        SrcColorFactor: 202,
        OneMinusSrcColorFactor: 203,
        SrcAlphaFactor: 204,
        OneMinusSrcAlphaFactor: 205,
        DstAlphaFactor: 206,
        OneMinusDstAlphaFactor: 207,
        DstColorFactor: 208,
        OneMinusDstColorFactor: 209,
        SrcAlphaSaturateFactor: 210,
        NeverDepth: 0,
        AlwaysDepth: 1,
        LessDepth: 2,
        LessEqualDepth: 3,
        EqualDepth: 4,
        GreaterEqualDepth: 5,
        GreaterDepth: 6,
        NotEqualDepth: 7,
        MultiplyOperation: 0,
        MixOperation: 1,
        AddOperation: 2,
        NoToneMapping: 0,
        LinearToneMapping: 1,
        ReinhardToneMapping: 2,
        Uncharted2ToneMapping: 3,
        CineonToneMapping: 4,
        UVMapping: 300,
        CubeReflectionMapping: 301,
        CubeRefractionMapping: 302,
        EquirectangularReflectionMapping: 303,
        EquirectangularRefractionMapping: 304,
        SphericalReflectionMapping: 305,
        CubeUVReflectionMapping: 306,
        CubeUVRefractionMapping: 307,
        RepeatWrapping: 1e3,
        ClampToEdgeWrapping: 1001,
        MirroredRepeatWrapping: 1002,
        NearestFilter: 1003,
        NearestMipMapNearestFilter: 1004,
        NearestMipMapLinearFilter: 1005,
        LinearFilter: 1006,
        LinearMipMapNearestFilter: 1007,
        LinearMipMapLinearFilter: 1008,
        UnsignedByteType: 1009,
        ByteType: 1010,
        ShortType: 1011,
        UnsignedShortType: 1012,
        IntType: 1013,
        UnsignedIntType: 1014,
        FloatType: 1015,
        HalfFloatType: 1025,
        UnsignedShort4444Type: 1016,
        UnsignedShort5551Type: 1017,
        UnsignedShort565Type: 1018,
        AlphaFormat: 1019,
        RGBFormat: 1020,
        RGBAFormat: 1021,
        LuminanceFormat: 1022,
        LuminanceAlphaFormat: 1023,
        RGBEFormat: a.RGBAFormat,
        DepthFormat: 1026,
        RGB_S3TC_DXT1_Format: 2001,
        RGBA_S3TC_DXT1_Format: 2002,
        RGBA_S3TC_DXT3_Format: 2003,
        RGBA_S3TC_DXT5_Format: 2004,
        RGB_PVRTC_4BPPV1_Format: 2100,
        RGB_PVRTC_2BPPV1_Format: 2101,
        RGBA_PVRTC_4BPPV1_Format: 2102,
        RGBA_PVRTC_2BPPV1_Format: 2103,
        RGB_ETC1_Format: 2151,
        LoopOnce: 2200,
        LoopRepeat: 2201,
        LoopPingPong: 2202,
        InterpolateDiscrete: 2300,
        InterpolateLinear: 2301,
        InterpolateSmooth: 2302,
        ZeroCurvatureEnding: 2400,
        ZeroSlopeEnding: 2401,
        WrapAroundEnding: 2402,
        TrianglesDrawMode: 0,
        TriangleStripDrawMode: 1,
        TriangleFanDrawMode: 2,
        LinearEncoding: 3e3,
        sRGBEncoding: 3001,
        GammaEncoding: 3007,
        RGBEEncoding: 3002,
        LogLuvEncoding: 3003,
        RGBM7Encoding: 3004,
        RGBM16Encoding: 3005,
        RGBDEncoding: 3006,
        BasicDepthPacking: 3200,
        RGBADepthPacking: 3201
    }),
    a.Color = function(t, e, r) {
        return void 0 === e && void 0 === r ? this.set(t) : this.setRGB(t, e, r)
    }
    ,
    a.Color.prototype = {
        constructor: a.Color,
        r: 1,
        g: 1,
        b: 1,
        set: function(t) {
            return t instanceof a.Color ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
            this
        },
        setScalar: function(t) {
            this.r = t,
            this.g = t,
            this.b = t
        },
        setHex: function(t) {
            return t = Math.floor(t),
            this.r = (t >> 16 & 255) / 255,
            this.g = (t >> 8 & 255) / 255,
            this.b = (255 & t) / 255,
            this
        },
        setRGB: function(t, e, r) {
            return this.r = t,
            this.g = e,
            this.b = r,
            this
        },
        setHSL: function() {
            function t(t, e, r) {
                return r < 0 && (r += 1),
                r > 1 && (r -= 1),
                r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - r) : t
            }
            return function(e, r, i) {
                if (e = a.Math.euclideanModulo(e, 1),
                r = a.Math.clamp(r, 0, 1),
                i = a.Math.clamp(i, 0, 1),
                0 === r)
                    this.r = this.g = this.b = i;
                else {
                    var n = i <= .5 ? i * (1 + r) : i + r - i * r
                      , o = 2 * i - n;
                    this.r = t(o, n, e + 1 / 3),
                    this.g = t(o, n, e),
                    this.b = t(o, n, e - 1 / 3)
                }
                return this
            }
        }(),
        setStyle: function(t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }
            var r;
            if (r = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var i, n = r[1], o = r[2];
                switch (n) {
                case "rgb":
                case "rgba":
                    if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))
                        return this.r = Math.min(255, parseInt(i[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(i[2], 10)) / 255,
                        this.b = Math.min(255, parseInt(i[3], 10)) / 255,
                        e(i[5]),
                        this;
                    if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))
                        return this.r = Math.min(100, parseInt(i[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(i[2], 10)) / 100,
                        this.b = Math.min(100, parseInt(i[3], 10)) / 100,
                        e(i[5]),
                        this;
                    break;
                case "hsl":
                case "hsla":
                    if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) {
                        var s = parseFloat(i[1]) / 360
                          , c = parseInt(i[2], 10) / 100
                          , h = parseInt(i[3], 10) / 100;
                        return e(i[5]),
                        this.setHSL(s, c, h)
                    }
                }
            } else if (r = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                var l = r[1]
                  , u = l.length;
                if (3 === u)
                    return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255,
                    this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255,
                    this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255,
                    this;
                if (6 === u)
                    return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255,
                    this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255,
                    this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255,
                    this
            }
            if (t && t.length > 0) {
                var l = a.ColorKeywords[t];
                void 0 !== l ? this.setHex(l) : console.warn("THREE.Color: Unknown color " + t)
            }
            return this
        },
        clone: function() {
            return new this.constructor(this.r,this.g,this.b)
        },
        copy: function(t) {
            return this.r = t.r,
            this.g = t.g,
            this.b = t.b,
            this
        },
        copyGammaToLinear: function(t, e) {
            return void 0 === e && (e = 2),
            this.r = Math.pow(t.r, e),
            this.g = Math.pow(t.g, e),
            this.b = Math.pow(t.b, e),
            this
        },
        copyLinearToGamma: function(t, e) {
            void 0 === e && (e = 2);
            var r = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, r),
            this.g = Math.pow(t.g, r),
            this.b = Math.pow(t.b, r),
            this
        },
        convertGammaToLinear: function() {
            var t = this.r
              , e = this.g
              , r = this.b;
            return this.r = t * t,
            this.g = e * e,
            this.b = r * r,
            this
        },
        convertLinearToGamma: function() {
            return this.r = Math.sqrt(this.r),
            this.g = Math.sqrt(this.g),
            this.b = Math.sqrt(this.b),
            this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(t) {
            var e, r, i = t || {
                h: 0,
                s: 0,
                l: 0
            }, n = this.r, a = this.g, o = this.b, s = Math.max(n, a, o), c = Math.min(n, a, o), h = (c + s) / 2;
            if (c === s)
                e = 0,
                r = 0;
            else {
                var l = s - c;
                switch (r = h <= .5 ? l / (s + c) : l / (2 - s - c),
                s) {
                case n:
                    e = (a - o) / l + (a < o ? 6 : 0);
                    break;
                case a:
                    e = (o - n) / l + 2;
                    break;
                case o:
                    e = (n - a) / l + 4
                }
                e /= 6
            }
            return i.h = e,
            i.s = r,
            i.l = h,
            i
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(t, e, r) {
            var i = this.getHSL();
            return i.h += t,
            i.s += e,
            i.l += r,
            this.setHSL(i.h, i.s, i.l),
            this
        },
        add: function(t) {
            return this.r += t.r,
            this.g += t.g,
            this.b += t.b,
            this
        },
        addColors: function(t, e) {
            return this.r = t.r + e.r,
            this.g = t.g + e.g,
            this.b = t.b + e.b,
            this
        },
        addScalar: function(t) {
            return this.r += t,
            this.g += t,
            this.b += t,
            this
        },
        sub: function(t) {
            return this.r = Math.max(0, this.r - t.r),
            this.g = Math.max(0, this.g - t.g),
            this.b = Math.max(0, this.b - t.b),
            this
        },
        multiply: function(t) {
            return this.r *= t.r,
            this.g *= t.g,
            this.b *= t.b,
            this
        },
        multiplyScalar: function(t) {
            return this.r *= t,
            this.g *= t,
            this.b *= t,
            this
        },
        lerp: function(t, e) {
            return this.r += (t.r - this.r) * e,
            this.g += (t.g - this.g) * e,
            this.b += (t.b - this.b) * e,
            this
        },
        equals: function(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.r = t[e],
            this.g = t[e + 1],
            this.b = t[e + 2],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.r,
            t[e + 1] = this.g,
            t[e + 2] = this.b,
            t
        }
    },
    a.ColorKeywords = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    },
    a.Quaternion = function(t, e, r, i) {
        this._x = t || 0,
        this._y = e || 0,
        this._z = r || 0,
        this._w = void 0 !== i ? i : 1
    }
    ,
    a.Quaternion.prototype = {
        constructor: a.Quaternion,
        get x() {
            return this._x
        },
        set x(t) {
            this._x = t,
            this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(t) {
            this._y = t,
            this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(t) {
            this._z = t,
            this.onChangeCallback()
        },
        get w() {
            return this._w
        },
        set w(t) {
            this._w = t,
            this.onChangeCallback()
        },
        set: function(t, e, r, i) {
            return this._x = t,
            this._y = e,
            this._z = r,
            this._w = i,
            this.onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._w)
        },
        copy: function(t) {
            return this._x = t.x,
            this._y = t.y,
            this._z = t.z,
            this._w = t.w,
            this.onChangeCallback(),
            this
        },
        setFromEuler: function(t, e) {
            if (t instanceof a.Euler == !1)
                throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var r = Math.cos(t._x / 2)
              , i = Math.cos(t._y / 2)
              , n = Math.cos(t._z / 2)
              , o = Math.sin(t._x / 2)
              , s = Math.sin(t._y / 2)
              , c = Math.sin(t._z / 2)
              , h = t.order;
            return "XYZ" === h ? (this._x = o * i * n + r * s * c,
            this._y = r * s * n - o * i * c,
            this._z = r * i * c + o * s * n,
            this._w = r * i * n - o * s * c) : "YXZ" === h ? (this._x = o * i * n + r * s * c,
            this._y = r * s * n - o * i * c,
            this._z = r * i * c - o * s * n,
            this._w = r * i * n + o * s * c) : "ZXY" === h ? (this._x = o * i * n - r * s * c,
            this._y = r * s * n + o * i * c,
            this._z = r * i * c + o * s * n,
            this._w = r * i * n - o * s * c) : "ZYX" === h ? (this._x = o * i * n - r * s * c,
            this._y = r * s * n + o * i * c,
            this._z = r * i * c - o * s * n,
            this._w = r * i * n + o * s * c) : "YZX" === h ? (this._x = o * i * n + r * s * c,
            this._y = r * s * n + o * i * c,
            this._z = r * i * c - o * s * n,
            this._w = r * i * n - o * s * c) : "XZY" === h && (this._x = o * i * n - r * s * c,
            this._y = r * s * n - o * i * c,
            this._z = r * i * c + o * s * n,
            this._w = r * i * n + o * s * c),
            e !== !1 && this.onChangeCallback(),
            this
        },
        setFromAxisAngle: function(t, e) {
            var r = e / 2
              , i = Math.sin(r);
            return this._x = t.x * i,
            this._y = t.y * i,
            this._z = t.z * i,
            this._w = Math.cos(r),
            this.onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(t) {
            var e, r = t.elements, i = r[0], n = r[4], a = r[8], o = r[1], s = r[5], c = r[9], h = r[2], l = r[6], u = r[10], d = i + s + u;
            return d > 0 ? (e = .5 / Math.sqrt(d + 1),
            this._w = .25 / e,
            this._x = (l - c) * e,
            this._y = (a - h) * e,
            this._z = (o - n) * e) : i > s && i > u ? (e = 2 * Math.sqrt(1 + i - s - u),
            this._w = (l - c) / e,
            this._x = .25 * e,
            this._y = (n + o) / e,
            this._z = (a + h) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - i - u),
            this._w = (a - h) / e,
            this._x = (n + o) / e,
            this._y = .25 * e,
            this._z = (c + l) / e) : (e = 2 * Math.sqrt(1 + u - i - s),
            this._w = (o - n) / e,
            this._x = (a + h) / e,
            this._y = (c + l) / e,
            this._z = .25 * e),
            this.onChangeCallback(),
            this
        },
        setFromUnitVectors: function() {
            var t, e, r = 1e-6;
            return function(i, n) {
                return void 0 === t && (t = new a.Vector3),
                e = i.dot(n) + 1,
                e < r ? (e = 0,
                Math.abs(i.x) > Math.abs(i.z) ? t.set(-i.y, i.x, 0) : t.set(0, -i.z, i.y)) : t.crossVectors(i, n),
                this._x = t.x,
                this._y = t.y,
                this._z = t.z,
                this._w = e,
                this.normalize()
            }
        }(),
        inverse: function() {
            return this.conjugate().normalize()
        },
        conjugate: function() {
            return this._x *= -1,
            this._y *= -1,
            this._z *= -1,
            this.onChangeCallback(),
            this
        },
        dot: function(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var t = this.length();
            return 0 === t ? (this._x = 0,
            this._y = 0,
            this._z = 0,
            this._w = 1) : (t = 1 / t,
            this._x = this._x * t,
            this._y = this._y * t,
            this._z = this._z * t,
            this._w = this._w * t),
            this.onChangeCallback(),
            this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
            this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        },
        premultiply: function(t) {
            return this.multiplyQuaternions(t, this)
        },
        multiplyQuaternions: function(t, e) {
            var r = t._x
              , i = t._y
              , n = t._z
              , a = t._w
              , o = e._x
              , s = e._y
              , c = e._z
              , h = e._w;
            return this._x = r * h + a * o + i * c - n * s,
            this._y = i * h + a * s + n * o - r * c,
            this._z = n * h + a * c + r * s - i * o,
            this._w = a * h - r * o - i * s - n * c,
            this.onChangeCallback(),
            this
        },
        slerp: function(t, e) {
            if (0 === e)
                return this;
            if (1 === e)
                return this.copy(t);
            var r = this._x
              , i = this._y
              , n = this._z
              , a = this._w
              , o = a * t._w + r * t._x + i * t._y + n * t._z;
            if (o < 0 ? (this._w = -t._w,
            this._x = -t._x,
            this._y = -t._y,
            this._z = -t._z,
            o = -o) : this.copy(t),
            o >= 1)
                return this._w = a,
                this._x = r,
                this._y = i,
                this._z = n,
                this;
            var s = Math.sqrt(1 - o * o);
            if (Math.abs(s) < .001)
                return this._w = .5 * (a + this._w),
                this._x = .5 * (r + this._x),
                this._y = .5 * (i + this._y),
                this._z = .5 * (n + this._z),
                this;
            var c = Math.atan2(s, o)
              , h = Math.sin((1 - e) * c) / s
              , l = Math.sin(e * c) / s;
            return this._w = a * h + this._w * l,
            this._x = r * h + this._x * l,
            this._y = i * h + this._y * l,
            this._z = n * h + this._z * l,
            this.onChangeCallback(),
            this
        },
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this._x = t[e],
            this._y = t[e + 1],
            this._z = t[e + 2],
            this._w = t[e + 3],
            this.onChangeCallback(),
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._w,
            t
        },
        onChange: function(t) {
            return this.onChangeCallback = t,
            this
        },
        onChangeCallback: function() {}
    },
    Object.assign(a.Quaternion, {
        slerp: function(t, e, r, i) {
            return r.copy(t).slerp(e, i)
        },
        slerpFlat: function(t, e, r, i, n, a, o) {
            var s = r[i + 0]
              , c = r[i + 1]
              , h = r[i + 2]
              , l = r[i + 3]
              , u = n[a + 0]
              , d = n[a + 1]
              , p = n[a + 2]
              , f = n[a + 3];
            if (l !== f || s !== u || c !== d || h !== p) {
                var m = 1 - o
                  , g = s * u + c * d + h * p + l * f
                  , v = g >= 0 ? 1 : -1
                  , y = 1 - g * g;
                if (y > Number.EPSILON) {
                    var x = Math.sqrt(y)
                      , b = Math.atan2(x, g * v);
                    m = Math.sin(m * b) / x,
                    o = Math.sin(o * b) / x
                }
                var _ = o * v;
                if (s = s * m + u * _,
                c = c * m + d * _,
                h = h * m + p * _,
                l = l * m + f * _,
                m === 1 - o) {
                    var M = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
                    s *= M,
                    c *= M,
                    h *= M,
                    l *= M
                }
            }
            t[e] = s,
            t[e + 1] = c,
            t[e + 2] = h,
            t[e + 3] = l
        }
    }),
    a.Vector2 = function(t, e) {
        this.x = t || 0,
        this.y = e || 0
    }
    ,
    a.Vector2.prototype = {
        constructor: a.Vector2,
        get width() {
            return this.x
        },
        set width(t) {
            this.x = t
        },
        get height() {
            return this.y
        },
        set height(t) {
            this.y = t
        },
        set: function(t, e) {
            return this.x = t,
            this.y = e,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this
        },
        multiply: function(t) {
            return this.x *= t.x,
            this.y *= t.y,
            this
        },
        multiplyScalar: function(t) {
            return isFinite(t) ? (this.x *= t,
            this.y *= t) : (this.x = 0,
            this.y = 0),
            this
        },
        divide: function(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this
        },
        clampScalar: function() {
            var t, e;
            return function(r, i) {
                return void 0 === t && (t = new a.Vector2,
                e = new a.Vector2),
                t.set(r, r),
                e.set(i, i),
                this.clamp(t, e)
            }
        }(),
        clampLength: function(t, e) {
            var r = this.length();
            return this.multiplyScalar(Math.max(t, Math.min(e, r)) / r)
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        angle: function() {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI),
            t
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x
              , r = this.y - t.y;
            return e * e + r * r
        },
        distanceToManhattan: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        },
        setLength: function(t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this
        },
        lerpVectors: function(t, e, r) {
            return this.subVectors(e, t).multiplyScalar(r).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t
        },
        fromAttribute: function(t, e, r) {
            return void 0 === r && (r = 0),
            e = e * t.itemSize + r,
            this.x = t.array[e],
            this.y = t.array[e + 1],
            this
        },
        rotateAround: function(t, e) {
            var r = Math.cos(e)
              , i = Math.sin(e)
              , n = this.x - t.x
              , a = this.y - t.y;
            return this.x = n * r - a * i + t.x,
            this.y = n * i + a * r + t.y,
            this
        }
    },
    a.Vector3 = function(t, e, r) {
        this.x = t || 0,
        this.y = e || 0,
        this.z = r || 0
    }
    ,
    a.Vector3.prototype = {
        constructor: a.Vector3,
        set: function(t, e, r) {
            return this.x = t,
            this.y = e,
            this.z = r,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setZ: function(t) {
            return this.z = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
            this.multiplyVectors(t, e)) : (this.x *= t.x,
            this.y *= t.y,
            this.z *= t.z,
            this)
        },
        multiplyScalar: function(t) {
            return isFinite(t) ? (this.x *= t,
            this.y *= t,
            this.z *= t) : (this.x = 0,
            this.y = 0,
            this.z = 0),
            this
        },
        multiplyVectors: function(t, e) {
            return this.x = t.x * e.x,
            this.y = t.y * e.y,
            this.z = t.z * e.z,
            this
        },
        applyEuler: function() {
            var t;
            return function(e) {
                return e instanceof a.Euler == !1 && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
                void 0 === t && (t = new a.Quaternion),
                this.applyQuaternion(t.setFromEuler(e))
            }
        }(),
        applyAxisAngle: function() {
            var t;
            return function(e, r) {
                return void 0 === t && (t = new a.Quaternion),
                this.applyQuaternion(t.setFromAxisAngle(e, r))
            }
        }(),
        applyMatrix3: function(t) {
            var e = this.x
              , r = this.y
              , i = this.z
              , n = t.elements;
            return this.x = n[0] * e + n[3] * r + n[6] * i,
            this.y = n[1] * e + n[4] * r + n[7] * i,
            this.z = n[2] * e + n[5] * r + n[8] * i,
            this
        },
        applyMatrix4: function(t) {
            var e = this.x
              , r = this.y
              , i = this.z
              , n = t.elements;
            return this.x = n[0] * e + n[4] * r + n[8] * i + n[12],
            this.y = n[1] * e + n[5] * r + n[9] * i + n[13],
            this.z = n[2] * e + n[6] * r + n[10] * i + n[14],
            this
        },
        applyProjection: function(t) {
            var e = this.x
              , r = this.y
              , i = this.z
              , n = t.elements
              , a = 1 / (n[3] * e + n[7] * r + n[11] * i + n[15]);
            return this.x = (n[0] * e + n[4] * r + n[8] * i + n[12]) * a,
            this.y = (n[1] * e + n[5] * r + n[9] * i + n[13]) * a,
            this.z = (n[2] * e + n[6] * r + n[10] * i + n[14]) * a,
            this
        },
        applyQuaternion: function(t) {
            var e = this.x
              , r = this.y
              , i = this.z
              , n = t.x
              , a = t.y
              , o = t.z
              , s = t.w
              , c = s * e + a * i - o * r
              , h = s * r + o * e - n * i
              , l = s * i + n * r - a * e
              , u = -n * e - a * r - o * i;
            return this.x = c * s + u * -n + h * -o - l * -a,
            this.y = h * s + u * -a + l * -n - c * -o,
            this.z = l * s + u * -o + c * -a - h * -n,
            this
        },
        project: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new a.Matrix4),
                t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)),
                this.applyProjection(t)
            }
        }(),
        unproject: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new a.Matrix4),
                t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)),
                this.applyProjection(t)
            }
        }(),
        transformDirection: function(t) {
            var e = this.x
              , r = this.y
              , i = this.z
              , n = t.elements;
            return this.x = n[0] * e + n[4] * r + n[8] * i,
            this.y = n[1] * e + n[5] * r + n[9] * i,
            this.z = n[2] * e + n[6] * r + n[10] * i,
            this.normalize()
        },
        divide: function(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this.z /= t.z,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this
        },
        clampScalar: function() {
            var t, e;
            return function(r, i) {
                return void 0 === t && (t = new a.Vector3,
                e = new a.Vector3),
                t.set(r, r, r),
                e.set(i, i, i),
                this.clamp(t, e)
            }
        }(),
        clampLength: function(t, e) {
            var r = this.length();
            return this.multiplyScalar(Math.max(t, Math.min(e, r)) / r)
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this
        },
        lerpVectors: function(t, e, r) {
            return this.subVectors(e, t).multiplyScalar(r).add(t)
        },
        cross: function(t, e) {
            if (void 0 !== e)
                return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
                this.crossVectors(t, e);
            var r = this.x
              , i = this.y
              , n = this.z;
            return this.x = i * t.z - n * t.y,
            this.y = n * t.x - r * t.z,
            this.z = r * t.y - i * t.x,
            this
        },
        crossVectors: function(t, e) {
            var r = t.x
              , i = t.y
              , n = t.z
              , a = e.x
              , o = e.y
              , s = e.z;
            return this.x = i * s - n * o,
            this.y = n * a - r * s,
            this.z = r * o - i * a,
            this
        },
        projectOnVector: function(t) {
            var e = t.dot(this) / t.lengthSq();
            return this.copy(t).multiplyScalar(e)
        },
        projectOnPlane: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new a.Vector3),
                t.copy(this).projectOnVector(e),
                this.sub(t)
            }
        }(),
        reflect: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new a.Vector3),
                this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
            }
        }(),
        angleTo: function(t) {
            var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
            return Math.acos(a.Math.clamp(e, -1, 1))
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x
              , r = this.y - t.y
              , i = this.z - t.z;
            return e * e + r * r + i * i
        },
        distanceToManhattan: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        },
        setFromSpherical: function(t) {
            var e = Math.sin(t.phi) * t.radius;
            return this.x = e * Math.sin(t.theta),
            this.y = Math.cos(t.phi) * t.radius,
            this.z = e * Math.cos(t.theta),
            this
        },
        setFromMatrixPosition: function(t) {
            return this.setFromMatrixColumn(t, 3)
        },
        setFromMatrixScale: function(t) {
            var e = this.setFromMatrixColumn(t, 0).length()
              , r = this.setFromMatrixColumn(t, 1).length()
              , i = this.setFromMatrixColumn(t, 2).length();
            return this.x = e,
            this.y = r,
            this.z = i,
            this
        },
        setFromMatrixColumn: function(t, e) {
            if ("number" == typeof t) {
                console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
                var r = t;
                t = e,
                e = r
            }
            return this.fromArray(t.elements, 4 * e)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t
        },
        fromAttribute: function(t, e, r) {
            return void 0 === r && (r = 0),
            e = e * t.itemSize + r,
            this.x = t.array[e],
            this.y = t.array[e + 1],
            this.z = t.array[e + 2],
            this
        }
    },
    a.Vector4 = function(t, e, r, i) {
        this.x = t || 0,
        this.y = e || 0,
        this.z = r || 0,
        this.w = void 0 !== i ? i : 1
    }
    ,
    a.Vector4.prototype = {
        constructor: a.Vector4,
        set: function(t, e, r, i) {
            return this.x = t,
            this.y = e,
            this.z = r,
            this.w = i,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this.w = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setZ: function(t) {
            return this.z = t,
            this
        },
        setW: function(t) {
            return this.w = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z,this.w)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this.w = void 0 !== t.w ? t.w : 1,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this.w += t.w,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this.w += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this.w = t.w + e.w,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this.w += t.w * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this.w -= t.w,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this.w -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this.w = t.w - e.w,
            this
        },
        multiplyScalar: function(t) {
            return isFinite(t) ? (this.x *= t,
            this.y *= t,
            this.z *= t,
            this.w *= t) : (this.x = 0,
            this.y = 0,
            this.z = 0,
            this.w = 0),
            this
        },
        applyMatrix4: function(t) {
            var e = this.x
              , r = this.y
              , i = this.z
              , n = this.w
              , a = t.elements;
            return this.x = a[0] * e + a[4] * r + a[8] * i + a[12] * n,
            this.y = a[1] * e + a[5] * r + a[9] * i + a[13] * n,
            this.z = a[2] * e + a[6] * r + a[10] * i + a[14] * n,
            this.w = a[3] * e + a[7] * r + a[11] * i + a[15] * n,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        setAxisAngleFromQuaternion: function(t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1,
            this.y = 0,
            this.z = 0) : (this.x = t.x / e,
            this.y = t.y / e,
            this.z = t.z / e),
            this
        },
        setAxisAngleFromRotationMatrix: function(t) {
            var e, r, i, n, a = .01, o = .1, s = t.elements, c = s[0], h = s[4], l = s[8], u = s[1], d = s[5], p = s[9], f = s[2], m = s[6], g = s[10];
            if (Math.abs(h - u) < a && Math.abs(l - f) < a && Math.abs(p - m) < a) {
                if (Math.abs(h + u) < o && Math.abs(l + f) < o && Math.abs(p + m) < o && Math.abs(c + d + g - 3) < o)
                    return this.set(1, 0, 0, 0),
                    this;
                e = Math.PI;
                var v = (c + 1) / 2
                  , y = (d + 1) / 2
                  , x = (g + 1) / 2
                  , b = (h + u) / 4
                  , _ = (l + f) / 4
                  , M = (p + m) / 4;
                return v > y && v > x ? v < a ? (r = 0,
                i = .707106781,
                n = .707106781) : (r = Math.sqrt(v),
                i = b / r,
                n = _ / r) : y > x ? y < a ? (r = .707106781,
                i = 0,
                n = .707106781) : (i = Math.sqrt(y),
                r = b / i,
                n = M / i) : x < a ? (r = .707106781,
                i = .707106781,
                n = 0) : (n = Math.sqrt(x),
                r = _ / n,
                i = M / n),
                this.set(r, i, n, e),
                this
            }
            var w = Math.sqrt((m - p) * (m - p) + (l - f) * (l - f) + (u - h) * (u - h));
            return Math.abs(w) < .001 && (w = 1),
            this.x = (m - p) / w,
            this.y = (l - f) / w,
            this.z = (u - h) / w,
            this.w = Math.acos((c + d + g - 1) / 2),
            this
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this.w = Math.min(this.w, t.w),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this.w = Math.max(this.w, t.w),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this.w = Math.max(t.w, Math.min(e.w, this.w)),
            this
        },
        clampScalar: function() {
            var t, e;
            return function(r, i) {
                return void 0 === t && (t = new a.Vector4,
                e = new a.Vector4),
                t.set(r, r, r, r),
                e.set(i, i, i, i),
                this.clamp(t, e)
            }
        }(),
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this.w = Math.floor(this.w),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this.w = Math.ceil(this.w),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this.w = Math.round(this.w),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this.w = -this.w,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this.w += (t.w - this.w) * e,
            this
        },
        lerpVectors: function(t, e, r) {
            return this.subVectors(e, t).multiplyScalar(r).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this.w = t[e + 3],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t[e + 3] = this.w,
            t
        },
        fromAttribute: function(t, e, r) {
            return void 0 === r && (r = 0),
            e = e * t.itemSize + r,
            this.x = t.array[e],
            this.y = t.array[e + 1],
            this.z = t.array[e + 2],
            this.w = t.array[e + 3],
            this
        }
    },
    a.Euler = function(t, e, r, i) {
        this._x = t || 0,
        this._y = e || 0,
        this._z = r || 0,
        this._order = i || a.Euler.DefaultOrder
    }
    ,
    a.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],
    a.Euler.DefaultOrder = "XYZ",
    a.Euler.prototype = {
        constructor: a.Euler,
        get x() {
            return this._x
        },
        set x(t) {
            this._x = t,
            this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(t) {
            this._y = t,
            this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(t) {
            this._z = t,
            this.onChangeCallback()
        },
        get order() {
            return this._order
        },
        set order(t) {
            this._order = t,
            this.onChangeCallback()
        },
        set: function(t, e, r, i) {
            return this._x = t,
            this._y = e,
            this._z = r,
            this._order = i || this._order,
            this.onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._order)
        },
        copy: function(t) {
            return this._x = t._x,
            this._y = t._y,
            this._z = t._z,
            this._order = t._order,
            this.onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(t, e, r) {
            var i = a.Math.clamp
              , n = t.elements
              , o = n[0]
              , s = n[4]
              , c = n[8]
              , h = n[1]
              , l = n[5]
              , u = n[9]
              , d = n[2]
              , p = n[6]
              , f = n[10];
            return e = e || this._order,
            "XYZ" === e ? (this._y = Math.asin(i(c, -1, 1)),
            Math.abs(c) < .99999 ? (this._x = Math.atan2(-u, f),
            this._z = Math.atan2(-s, o)) : (this._x = Math.atan2(p, l),
            this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-i(u, -1, 1)),
            Math.abs(u) < .99999 ? (this._y = Math.atan2(c, f),
            this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-d, o),
            this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(i(p, -1, 1)),
            Math.abs(p) < .99999 ? (this._y = Math.atan2(-d, f),
            this._z = Math.atan2(-s, l)) : (this._y = 0,
            this._z = Math.atan2(h, o))) : "ZYX" === e ? (this._y = Math.asin(-i(d, -1, 1)),
            Math.abs(d) < .99999 ? (this._x = Math.atan2(p, f),
            this._z = Math.atan2(h, o)) : (this._x = 0,
            this._z = Math.atan2(-s, l))) : "YZX" === e ? (this._z = Math.asin(i(h, -1, 1)),
            Math.abs(h) < .99999 ? (this._x = Math.atan2(-u, l),
            this._y = Math.atan2(-d, o)) : (this._x = 0,
            this._y = Math.atan2(c, f))) : "XZY" === e ? (this._z = Math.asin(-i(s, -1, 1)),
            Math.abs(s) < .99999 ? (this._x = Math.atan2(p, l),
            this._y = Math.atan2(c, o)) : (this._x = Math.atan2(-u, f),
            this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e),
            this._order = e,
            r !== !1 && this.onChangeCallback(),
            this
        },
        setFromQuaternion: function() {
            var t;
            return function(e, r, i) {
                return void 0 === t && (t = new a.Matrix4),
                t.makeRotationFromQuaternion(e),
                this.setFromRotationMatrix(t, r, i)
            }
        }(),
        setFromVector3: function(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: function() {
            var t = new a.Quaternion;
            return function(e) {
                return t.setFromEuler(this),
                this.setFromQuaternion(t, e)
            }
        }(),
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function(t) {
            return this._x = t[0],
            this._y = t[1],
            this._z = t[2],
            void 0 !== t[3] && (this._order = t[3]),
            this.onChangeCallback(),
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._order,
            t
        },
        toVector3: function(t) {
            return t ? t.set(this._x, this._y, this._z) : new a.Vector3(this._x,this._y,this._z)
        },
        onChange: function(t) {
            return this.onChangeCallback = t,
            this
        },
        onChangeCallback: function() {}
    },
    a.Line3 = function(t, e) {
        this.start = void 0 !== t ? t : new a.Vector3,
        this.end = void 0 !== e ? e : new a.Vector3
    }
    ,
    a.Line3.prototype = {
        constructor: a.Line3,
        set: function(t, e) {
            return this.start.copy(t),
            this.end.copy(e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.start.copy(t.start),
            this.end.copy(t.end),
            this
        },
        center: function(t) {
            var e = t || new a.Vector3;
            return e.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(t) {
            var e = t || new a.Vector3;
            return e.subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(t, e) {
            var r = e || new a.Vector3;
            return this.delta(r).multiplyScalar(t).add(this.start)
        },
        closestPointToPointParameter: function() {
            var t = new a.Vector3
              , e = new a.Vector3;
            return function(r, i) {
                t.subVectors(r, this.start),
                e.subVectors(this.end, this.start);
                var n = e.dot(e)
                  , o = e.dot(t)
                  , s = o / n;
                return i && (s = a.Math.clamp(s, 0, 1)),
                s
            }
        }(),
        closestPointToPoint: function(t, e, r) {
            var i = this.closestPointToPointParameter(t, e)
              , n = r || new a.Vector3;
            return this.delta(n).multiplyScalar(i).add(this.start)
        },
        applyMatrix4: function(t) {
            return this.start.applyMatrix4(t),
            this.end.applyMatrix4(t),
            this
        },
        equals: function(t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    },
    a.Box2 = function(t, e) {
        this.min = void 0 !== t ? t : new a.Vector2(+(1 / 0),+(1 / 0)),
        this.max = void 0 !== e ? e : new a.Vector2(-(1 / 0),-(1 / 0))
    }
    ,
    a.Box2.prototype = {
        constructor: a.Box2,
        set: function(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, r = t.length; e < r; e++)
                this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new a.Vector2;
            return function(e, r) {
                var i = t.copy(r).multiplyScalar(.5);
                return this.min.copy(e).sub(i),
                this.max.copy(e).add(i),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = +(1 / 0),
            this.max.x = this.max.y = -(1 / 0),
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        center: function(t) {
            var e = t || new a.Vector2;
            return e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        size: function(t) {
            var e = t || new a.Vector2;
            return e.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        },
        expandByVector: function(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        },
        getParameter: function(t, e) {
            var r = e || new a.Vector2;
            return r.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        },
        clampPoint: function(t, e) {
            var r = e || new a.Vector2;
            return r.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new a.Vector2;
            return function(e) {
                var r = t.copy(e).clamp(this.min, this.max);
                return r.sub(e).length()
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this
        },
        union: function(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        },
        translate: function(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    },
    a.Box3 = function(t, e) {
        this.min = void 0 !== t ? t : new a.Vector3(+(1 / 0),+(1 / 0),+(1 / 0)),
        this.max = void 0 !== e ? e : new a.Vector3(-(1 / 0),-(1 / 0),-(1 / 0))
    }
    ,
    a.Box3.prototype = {
        constructor: a.Box3,
        set: function(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        },
        setFromArray: function(t) {
            for (var e = +(1 / 0), r = +(1 / 0), i = +(1 / 0), n = -(1 / 0), a = -(1 / 0), o = -(1 / 0), s = 0, c = t.length; s < c; s += 3) {
                var h = t[s]
                  , l = t[s + 1]
                  , u = t[s + 2];
                h < e && (e = h),
                l < r && (r = l),
                u < i && (i = u),
                h > n && (n = h),
                l > a && (a = l),
                u > o && (o = u)
            }
            this.min.set(e, r, i),
            this.max.set(n, a, o)
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, r = t.length; e < r; e++)
                this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new a.Vector3;
            return function(e, r) {
                var i = t.copy(r).multiplyScalar(.5);
                return this.min.copy(e).sub(i),
                this.max.copy(e).add(i),
                this
            }
        }(),
        setFromObject: function() {
            var t = new a.Vector3;
            return function(e) {
                var r = this;
                return e.updateMatrixWorld(!0),
                this.makeEmpty(),
                e.traverse(function(e) {
                    var i = e.geometry;
                    if (void 0 !== i)
                        if (i instanceof a.Geometry)
                            for (var n = i.vertices, o = 0, s = n.length; o < s; o++)
                                t.copy(n[o]),
                                t.applyMatrix4(e.matrixWorld),
                                r.expandByPoint(t);
                        else if (i instanceof a.BufferGeometry) {
                            var c = i.attributes.position;
                            if (void 0 !== c) {
                                var h, l, u;
                                c instanceof a.InterleavedBufferAttribute ? (h = c.data.array,
                                l = c.offset,
                                u = c.data.stride) : (h = c.array,
                                l = 0,
                                u = 3);
                                for (var o = l, s = h.length; o < s; o += u)
                                    t.fromArray(h, o),
                                    t.applyMatrix4(e.matrixWorld),
                                    r.expandByPoint(t)
                            }
                        }
                }),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = +(1 / 0),
            this.max.x = this.max.y = this.max.z = -(1 / 0),
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        center: function(t) {
            var e = t || new a.Vector3;
            return e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        size: function(t) {
            var e = t || new a.Vector3;
            return e.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        },
        expandByVector: function(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function(t, e) {
            var r = e || new a.Vector3;
            return r.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        intersectsSphere: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new a.Vector3),
                this.clampPoint(e.center, t),
                t.distanceToSquared(e.center) <= e.radius * e.radius
            }
        }(),
        intersectsPlane: function(t) {
            var e, r;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
            r = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
            r = t.normal.x * this.min.x),
            t.normal.y > 0 ? (e += t.normal.y * this.min.y,
            r += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
            r += t.normal.y * this.min.y),
            t.normal.z > 0 ? (e += t.normal.z * this.min.z,
            r += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
            r += t.normal.z * this.min.z),
            e <= t.constant && r >= t.constant
        },
        clampPoint: function(t, e) {
            var r = e || new a.Vector3;
            return r.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new a.Vector3;
            return function(e) {
                var r = t.copy(e).clamp(this.min, this.max);
                return r.sub(e).length()
            }
        }(),
        getBoundingSphere: function() {
            var t = new a.Vector3;
            return function(e) {
                var r = e || new a.Sphere;
                return r.center = this.center(),
                r.radius = .5 * this.size(t).length(),
                r
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
        },
        union: function(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        },
        applyMatrix4: function() {
            var t = [new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3];
            return function(e) {
                return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
                t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
                t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
                t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
                t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
                t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
                t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
                t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
                this.setFromPoints(t),
                this)
            }
        }(),
        translate: function(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    },
    a.Matrix3 = function() {
        this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
        arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    ,
    a.Matrix3.prototype = {
        constructor: a.Matrix3,
        set: function(t, e, r, i, n, a, o, s, c) {
            var h = this.elements;
            return h[0] = t,
            h[1] = i,
            h[2] = o,
            h[3] = e,
            h[4] = n,
            h[5] = s,
            h[6] = r,
            h[7] = a,
            h[8] = c,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(t) {
            var e = t.elements;
            return this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]),
            this
        },
        setFromMatrix4: function(t) {
            var e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
        },
        applyToVector3Array: function() {
            var t;
            return function(e, r, i) {
                void 0 === t && (t = new a.Vector3),
                void 0 === r && (r = 0),
                void 0 === i && (i = e.length);
                for (var n = 0, o = r; n < i; n += 3,
                o += 3)
                    t.fromArray(e, o),
                    t.applyMatrix3(this),
                    t.toArray(e, o);
                return e
            }
        }(),
        applyToBuffer: function() {
            var t;
            return function(e, r, i) {
                void 0 === t && (t = new a.Vector3),
                void 0 === r && (r = 0),
                void 0 === i && (i = e.length / e.itemSize);
                for (var n = 0, o = r; n < i; n++,
                o++)
                    t.x = e.getX(o),
                    t.y = e.getY(o),
                    t.z = e.getZ(o),
                    t.applyMatrix3(this),
                    e.setXYZ(t.x, t.y, t.z);
                return e
            }
        }(),
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t,
            e[3] *= t,
            e[6] *= t,
            e[1] *= t,
            e[4] *= t,
            e[7] *= t,
            e[2] *= t,
            e[5] *= t,
            e[8] *= t,
            this
        },
        determinant: function() {
            var t = this.elements
              , e = t[0]
              , r = t[1]
              , i = t[2]
              , n = t[3]
              , a = t[4]
              , o = t[5]
              , s = t[6]
              , c = t[7]
              , h = t[8];
            return e * a * h - e * o * c - r * n * h + r * o * s + i * n * c - i * a * s
        },
        getInverse: function(t, e) {
            t instanceof a.Matrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
            var r = t.elements
              , i = this.elements
              , n = r[0]
              , o = r[1]
              , s = r[2]
              , c = r[3]
              , h = r[4]
              , l = r[5]
              , u = r[6]
              , d = r[7]
              , p = r[8]
              , f = p * h - l * d
              , m = l * u - p * c
              , g = d * c - h * u
              , v = n * f + o * m + s * g;
            if (0 === v) {
                var y = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";
                if (e)
                    throw new Error(y);
                return console.warn(y),
                this.identity()
            }
            var x = 1 / v;
            return i[0] = f * x,
            i[1] = (s * d - p * o) * x,
            i[2] = (l * o - s * h) * x,
            i[3] = m * x,
            i[4] = (p * n - s * u) * x,
            i[5] = (s * c - l * n) * x,
            i[6] = g * x,
            i[7] = (o * u - d * n) * x,
            i[8] = (h * n - o * c) * x,
            this
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1],
            e[1] = e[3],
            e[3] = t,
            t = e[2],
            e[2] = e[6],
            e[6] = t,
            t = e[5],
            e[5] = e[7],
            e[7] = t,
            this
        },
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."),
            this.toArray(t, e)
        },
        getNormalMatrix: function(t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        },
        transposeIntoArray: function(t) {
            var e = this.elements;
            return t[0] = e[0],
            t[1] = e[3],
            t[2] = e[6],
            t[3] = e[1],
            t[4] = e[4],
            t[5] = e[7],
            t[6] = e[2],
            t[7] = e[5],
            t[8] = e[8],
            this
        },
        fromArray: function(t) {
            return this.elements.set(t),
            this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = 0);
            var r = this.elements;
            return t[e] = r[0],
            t[e + 1] = r[1],
            t[e + 2] = r[2],
            t[e + 3] = r[3],
            t[e + 4] = r[4],
            t[e + 5] = r[5],
            t[e + 6] = r[6],
            t[e + 7] = r[7],
            t[e + 8] = r[8],
            t
        }
    },
    a.Matrix4 = function() {
        this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    ,
    a.Matrix4.prototype = {
        constructor: a.Matrix4,
        set: function(t, e, r, i, n, a, o, s, c, h, l, u, d, p, f, m) {
            var g = this.elements;
            return g[0] = t,
            g[4] = e,
            g[8] = r,
            g[12] = i,
            g[1] = n,
            g[5] = a,
            g[9] = o,
            g[13] = s,
            g[2] = c,
            g[6] = h,
            g[10] = l,
            g[14] = u,
            g[3] = d,
            g[7] = p,
            g[11] = f,
            g[15] = m,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new a.Matrix4).fromArray(this.elements)
        },
        copy: function(t) {
            return this.elements.set(t.elements),
            this
        },
        copyPosition: function(t) {
            var e = this.elements
              , r = t.elements;
            return e[12] = r[12],
            e[13] = r[13],
            e[14] = r[14],
            this
        },
        extractBasis: function(t, e, r) {
            return t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            r.setFromMatrixColumn(this, 2),
            this
        },
        makeBasis: function(t, e, r) {
            return this.set(t.x, e.x, r.x, 0, t.y, e.y, r.y, 0, t.z, e.z, r.z, 0, 0, 0, 0, 1),
            this
        },
        extractRotation: function() {
            var t;
            return function(e) {
                void 0 === t && (t = new a.Vector3);
                var r = this.elements
                  , i = e.elements
                  , n = 1 / t.setFromMatrixColumn(e, 0).length()
                  , o = 1 / t.setFromMatrixColumn(e, 1).length()
                  , s = 1 / t.setFromMatrixColumn(e, 2).length();
                return r[0] = i[0] * n,
                r[1] = i[1] * n,
                r[2] = i[2] * n,
                r[4] = i[4] * o,
                r[5] = i[5] * o,
                r[6] = i[6] * o,
                r[8] = i[8] * s,
                r[9] = i[9] * s,
                r[10] = i[10] * s,
                this
            }
        }(),
        makeRotationFromEuler: function(t) {
            t instanceof a.Euler == !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements
              , r = t.x
              , i = t.y
              , n = t.z
              , o = Math.cos(r)
              , s = Math.sin(r)
              , c = Math.cos(i)
              , h = Math.sin(i)
              , l = Math.cos(n)
              , u = Math.sin(n);
            if ("XYZ" === t.order) {
                var d = o * l
                  , p = o * u
                  , f = s * l
                  , m = s * u;
                e[0] = c * l,
                e[4] = -c * u,
                e[8] = h,
                e[1] = p + f * h,
                e[5] = d - m * h,
                e[9] = -s * c,
                e[2] = m - d * h,
                e[6] = f + p * h,
                e[10] = o * c
            } else if ("YXZ" === t.order) {
                var g = c * l
                  , v = c * u
                  , y = h * l
                  , x = h * u;
                e[0] = g + x * s,
                e[4] = y * s - v,
                e[8] = o * h,
                e[1] = o * u,
                e[5] = o * l,
                e[9] = -s,
                e[2] = v * s - y,
                e[6] = x + g * s,
                e[10] = o * c
            } else if ("ZXY" === t.order) {
                var g = c * l
                  , v = c * u
                  , y = h * l
                  , x = h * u;
                e[0] = g - x * s,
                e[4] = -o * u,
                e[8] = y + v * s,
                e[1] = v + y * s,
                e[5] = o * l,
                e[9] = x - g * s,
                e[2] = -o * h,
                e[6] = s,
                e[10] = o * c
            } else if ("ZYX" === t.order) {
                var d = o * l
                  , p = o * u
                  , f = s * l
                  , m = s * u;
                e[0] = c * l,
                e[4] = f * h - p,
                e[8] = d * h + m,
                e[1] = c * u,
                e[5] = m * h + d,
                e[9] = p * h - f,
                e[2] = -h,
                e[6] = s * c,
                e[10] = o * c
            } else if ("YZX" === t.order) {
                var b = o * c
                  , _ = o * h
                  , M = s * c
                  , w = s * h;
                e[0] = c * l,
                e[4] = w - b * u,
                e[8] = M * u + _,
                e[1] = u,
                e[5] = o * l,
                e[9] = -s * l,
                e[2] = -h * l,
                e[6] = _ * u + M,
                e[10] = b - w * u
            } else if ("XZY" === t.order) {
                var b = o * c
                  , _ = o * h
                  , M = s * c
                  , w = s * h;
                e[0] = c * l,
                e[4] = -u,
                e[8] = h * l,
                e[1] = b * u + w,
                e[5] = o * l,
                e[9] = _ * u - M,
                e[2] = M * u - _,
                e[6] = s * l,
                e[10] = w * u + b
            }
            return e[3] = 0,
            e[7] = 0,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        },
        makeRotationFromQuaternion: function(t) {
            var e = this.elements
              , r = t.x
              , i = t.y
              , n = t.z
              , a = t.w
              , o = r + r
              , s = i + i
              , c = n + n
              , h = r * o
              , l = r * s
              , u = r * c
              , d = i * s
              , p = i * c
              , f = n * c
              , m = a * o
              , g = a * s
              , v = a * c;
            return e[0] = 1 - (d + f),
            e[4] = l - v,
            e[8] = u + g,
            e[1] = l + v,
            e[5] = 1 - (h + f),
            e[9] = p - m,
            e[2] = u - g,
            e[6] = p + m,
            e[10] = 1 - (h + d),
            e[3] = 0,
            e[7] = 0,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        },
        lookAt: function() {
            var t, e, r;
            return function(i, n, o) {
                void 0 === t && (t = new a.Vector3,
                e = new a.Vector3,
                r = new a.Vector3);
                var s = this.elements;
                return r.subVectors(i, n).normalize(),
                0 === r.lengthSq() && (r.z = 1),
                t.crossVectors(o, r).normalize(),
                0 === t.lengthSq() && (r.z += 1e-4,
                t.crossVectors(o, r).normalize()),
                e.crossVectors(r, t),
                s[0] = t.x,
                s[4] = e.x,
                s[8] = r.x,
                s[1] = t.y,
                s[5] = e.y,
                s[9] = r.y,
                s[2] = t.z,
                s[6] = e.z,
                s[10] = r.z,
                this
            }
        }(),
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
            this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var r = t.elements
              , i = e.elements
              , n = this.elements
              , a = r[0]
              , o = r[4]
              , s = r[8]
              , c = r[12]
              , h = r[1]
              , l = r[5]
              , u = r[9]
              , d = r[13]
              , p = r[2]
              , f = r[6]
              , m = r[10]
              , g = r[14]
              , v = r[3]
              , y = r[7]
              , x = r[11]
              , b = r[15]
              , _ = i[0]
              , M = i[4]
              , w = i[8]
              , S = i[12]
              , E = i[1]
              , T = i[5]
              , A = i[9]
              , L = i[13]
              , C = i[2]
              , R = i[6]
              , P = i[10]
              , D = i[14]
              , B = i[3]
              , U = i[7]
              , I = i[11]
              , F = i[15];
            return n[0] = a * _ + o * E + s * C + c * B,
            n[4] = a * M + o * T + s * R + c * U,
            n[8] = a * w + o * A + s * P + c * I,
            n[12] = a * S + o * L + s * D + c * F,
            n[1] = h * _ + l * E + u * C + d * B,
            n[5] = h * M + l * T + u * R + d * U,
            n[9] = h * w + l * A + u * P + d * I,
            n[13] = h * S + l * L + u * D + d * F,
            n[2] = p * _ + f * E + m * C + g * B,
            n[6] = p * M + f * T + m * R + g * U,
            n[10] = p * w + f * A + m * P + g * I,
            n[14] = p * S + f * L + m * D + g * F,
            n[3] = v * _ + y * E + x * C + b * B,
            n[7] = v * M + y * T + x * R + b * U,
            n[11] = v * w + y * A + x * P + b * I,
            n[15] = v * S + y * L + x * D + b * F,
            this
        },
        multiplyToArray: function(t, e, r) {
            var i = this.elements;
            return this.multiplyMatrices(t, e),
            r[0] = i[0],
            r[1] = i[1],
            r[2] = i[2],
            r[3] = i[3],
            r[4] = i[4],
            r[5] = i[5],
            r[6] = i[6],
            r[7] = i[7],
            r[8] = i[8],
            r[9] = i[9],
            r[10] = i[10],
            r[11] = i[11],
            r[12] = i[12],
            r[13] = i[13],
            r[14] = i[14],
            r[15] = i[15],
            this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t,
            e[4] *= t,
            e[8] *= t,
            e[12] *= t,
            e[1] *= t,
            e[5] *= t,
            e[9] *= t,
            e[13] *= t,
            e[2] *= t,
            e[6] *= t,
            e[10] *= t,
            e[14] *= t,
            e[3] *= t,
            e[7] *= t,
            e[11] *= t,
            e[15] *= t,
            this
        },
        applyToVector3Array: function() {
            var t;
            return function(e, r, i) {
                void 0 === t && (t = new a.Vector3),
                void 0 === r && (r = 0),
                void 0 === i && (i = e.length);
                for (var n = 0, o = r; n < i; n += 3,
                o += 3)
                    t.fromArray(e, o),
                    t.applyMatrix4(this),
                    t.toArray(e, o);
                return e
            }
        }(),
        applyToBuffer: function() {
            var t;
            return function(e, r, i) {
                void 0 === t && (t = new a.Vector3),
                void 0 === r && (r = 0),
                void 0 === i && (i = e.length / e.itemSize);
                for (var n = 0, o = r; n < i; n++,
                o++)
                    t.x = e.getX(o),
                    t.y = e.getY(o),
                    t.z = e.getZ(o),
                    t.applyMatrix4(this),
                    e.setXYZ(t.x, t.y, t.z);
                return e
            }
        }(),
        determinant: function() {
            var t = this.elements
              , e = t[0]
              , r = t[4]
              , i = t[8]
              , n = t[12]
              , a = t[1]
              , o = t[5]
              , s = t[9]
              , c = t[13]
              , h = t[2]
              , l = t[6]
              , u = t[10]
              , d = t[14]
              , p = t[3]
              , f = t[7]
              , m = t[11]
              , g = t[15];
            return p * (+n * s * l - i * c * l - n * o * u + r * c * u + i * o * d - r * s * d) + f * (+e * s * d - e * c * u + n * a * u - i * a * d + i * c * h - n * s * h) + m * (+e * c * l - e * o * d - n * a * l + r * a * d + n * o * h - r * c * h) + g * (-i * o * h - e * s * l + e * o * u + i * a * l - r * a * u + r * s * h)
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1],
            e[1] = e[4],
            e[4] = t,
            t = e[2],
            e[2] = e[8],
            e[8] = t,
            t = e[6],
            e[6] = e[9],
            e[9] = t,
            t = e[3],
            e[3] = e[12],
            e[12] = t,
            t = e[7],
            e[7] = e[13],
            e[13] = t,
            t = e[11],
            e[11] = e[14],
            e[14] = t,
            this
        },
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."),
            this.toArray(t, e)
        },
        getPosition: function() {
            var t;
            return function() {
                return void 0 === t && (t = new a.Vector3),
                console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
                t.setFromMatrixColumn(this, 3)
            }
        }(),
        setPosition: function(t) {
            var e = this.elements;
            return e[12] = t.x,
            e[13] = t.y,
            e[14] = t.z,
            this
        },
        getInverse: function(t, e) {
            var r = this.elements
              , i = t.elements
              , n = i[0]
              , a = i[1]
              , o = i[2]
              , s = i[3]
              , c = i[4]
              , h = i[5]
              , l = i[6]
              , u = i[7]
              , d = i[8]
              , p = i[9]
              , f = i[10]
              , m = i[11]
              , g = i[12]
              , v = i[13]
              , y = i[14]
              , x = i[15]
              , b = p * y * u - v * f * u + v * l * m - h * y * m - p * l * x + h * f * x
              , _ = g * f * u - d * y * u - g * l * m + c * y * m + d * l * x - c * f * x
              , M = d * v * u - g * p * u + g * h * m - c * v * m - d * h * x + c * p * x
              , w = g * p * l - d * v * l - g * h * f + c * v * f + d * h * y - c * p * y
              , S = n * b + a * _ + o * M + s * w;
            if (0 === S) {
                var E = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
                if (e)
                    throw new Error(E);
                return console.warn(E),
                this.identity()
            }
            var T = 1 / S;
            return r[0] = b * T,
            r[1] = (v * f * s - p * y * s - v * o * m + a * y * m + p * o * x - a * f * x) * T,
            r[2] = (h * y * s - v * l * s + v * o * u - a * y * u - h * o * x + a * l * x) * T,
            r[3] = (p * l * s - h * f * s - p * o * u + a * f * u + h * o * m - a * l * m) * T,
            r[4] = _ * T,
            r[5] = (d * y * s - g * f * s + g * o * m - n * y * m - d * o * x + n * f * x) * T,
            r[6] = (g * l * s - c * y * s - g * o * u + n * y * u + c * o * x - n * l * x) * T,
            r[7] = (c * f * s - d * l * s + d * o * u - n * f * u - c * o * m + n * l * m) * T,
            r[8] = M * T,
            r[9] = (g * p * s - d * v * s - g * a * m + n * v * m + d * a * x - n * p * x) * T,
            r[10] = (c * v * s - g * h * s + g * a * u - n * v * u - c * a * x + n * h * x) * T,
            r[11] = (d * h * s - c * p * s - d * a * u + n * p * u + c * a * m - n * h * m) * T,
            r[12] = w * T,
            r[13] = (d * v * o - g * p * o + g * a * f - n * v * f - d * a * y + n * p * y) * T,
            r[14] = (g * h * o - c * v * o - g * a * l + n * v * l + c * a * y - n * h * y) * T,
            r[15] = (c * p * o - d * h * o + d * a * l - n * p * l - c * a * f + n * h * f) * T,
            this
        },
        scale: function(t) {
            var e = this.elements
              , r = t.x
              , i = t.y
              , n = t.z;
            return e[0] *= r,
            e[4] *= i,
            e[8] *= n,
            e[1] *= r,
            e[5] *= i,
            e[9] *= n,
            e[2] *= r,
            e[6] *= i,
            e[10] *= n,
            e[3] *= r,
            e[7] *= i,
            e[11] *= n,
            this
        },
        getMaxScaleOnAxis: function() {
            var t = this.elements
              , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
              , r = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
              , i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, r, i))
        },
        makeTranslation: function(t, e, r) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, r, 0, 0, 0, 1),
            this
        },
        makeRotationX: function(t) {
            var e = Math.cos(t)
              , r = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -r, 0, 0, r, e, 0, 0, 0, 0, 1),
            this
        },
        makeRotationY: function(t) {
            var e = Math.cos(t)
              , r = Math.sin(t);
            return this.set(e, 0, r, 0, 0, 1, 0, 0, -r, 0, e, 0, 0, 0, 0, 1),
            this
        },
        makeRotationZ: function(t) {
            var e = Math.cos(t)
              , r = Math.sin(t);
            return this.set(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        makeRotationAxis: function(t, e) {
            var r = Math.cos(e)
              , i = Math.sin(e)
              , n = 1 - r
              , a = t.x
              , o = t.y
              , s = t.z
              , c = n * a
              , h = n * o;
            return this.set(c * a + r, c * o - i * s, c * s + i * o, 0, c * o + i * s, h * o + r, h * s - i * a, 0, c * s - i * o, h * s + i * a, n * s * s + r, 0, 0, 0, 0, 1),
            this
        },
        makeScale: function(t, e, r) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1),
            this
        },
        compose: function(t, e, r) {
            return this.makeRotationFromQuaternion(e),
            this.scale(r),
            this.setPosition(t),
            this
        },
        decompose: function() {
            var t, e;
            return function(r, i, n) {
                void 0 === t && (t = new a.Vector3,
                e = new a.Matrix4);
                var o = this.elements
                  , s = t.set(o[0], o[1], o[2]).length()
                  , c = t.set(o[4], o[5], o[6]).length()
                  , h = t.set(o[8], o[9], o[10]).length()
                  , l = this.determinant();
                l < 0 && (s = -s),
                r.x = o[12],
                r.y = o[13],
                r.z = o[14],
                e.elements.set(this.elements);
                var u = 1 / s
                  , d = 1 / c
                  , p = 1 / h;
                return e.elements[0] *= u,
                e.elements[1] *= u,
                e.elements[2] *= u,
                e.elements[4] *= d,
                e.elements[5] *= d,
                e.elements[6] *= d,
                e.elements[8] *= p,
                e.elements[9] *= p,
                e.elements[10] *= p,
                i.setFromRotationMatrix(e),
                n.x = s,
                n.y = c,
                n.z = h,
                this
            }
        }(),
        makeFrustum: function(t, e, r, i, n, a) {
            var o = this.elements
              , s = 2 * n / (e - t)
              , c = 2 * n / (i - r)
              , h = (e + t) / (e - t)
              , l = (i + r) / (i - r)
              , u = -(a + n) / (a - n)
              , d = -2 * a * n / (a - n);
            return o[0] = s,
            o[4] = 0,
            o[8] = h,
            o[12] = 0,
            o[1] = 0,
            o[5] = c,
            o[9] = l,
            o[13] = 0,
            o[2] = 0,
            o[6] = 0,
            o[10] = u,
            o[14] = d,
            o[3] = 0,
            o[7] = 0,
            o[11] = -1,
            o[15] = 0,
            this
        },
        makePerspective: function(t, e, r, i) {
            var n = r * Math.tan(a.Math.DEG2RAD * t * .5)
              , o = -n
              , s = o * e
              , c = n * e;
            return this.makeFrustum(s, c, o, n, r, i)
        },
        makeOrthographic: function(t, e, r, i, n, a) {
            var o = this.elements
              , s = 1 / (e - t)
              , c = 1 / (r - i)
              , h = 1 / (a - n)
              , l = (e + t) * s
              , u = (r + i) * c
              , d = (a + n) * h;
            return o[0] = 2 * s,
            o[4] = 0,
            o[8] = 0,
            o[12] = -l,
            o[1] = 0,
            o[5] = 2 * c,
            o[9] = 0,
            o[13] = -u,
            o[2] = 0,
            o[6] = 0,
            o[10] = -2 * h,
            o[14] = -d,
            o[3] = 0,
            o[7] = 0,
            o[11] = 0,
            o[15] = 1,
            this
        },
        equals: function(t) {
            for (var e = this.elements, r = t.elements, i = 0; i < 16; i++)
                if (e[i] !== r[i])
                    return !1;
            return !0
        },
        fromArray: function(t) {
            return this.elements.set(t),
            this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = 0);
            var r = this.elements;
            return t[e] = r[0],
            t[e + 1] = r[1],
            t[e + 2] = r[2],
            t[e + 3] = r[3],
            t[e + 4] = r[4],
            t[e + 5] = r[5],
            t[e + 6] = r[6],
            t[e + 7] = r[7],
            t[e + 8] = r[8],
            t[e + 9] = r[9],
            t[e + 10] = r[10],
            t[e + 11] = r[11],
            t[e + 12] = r[12],
            t[e + 13] = r[13],
            t[e + 14] = r[14],
            t[e + 15] = r[15],
            t
        }
    },
    a.Ray = function(t, e) {
        this.origin = void 0 !== t ? t : new a.Vector3,
        this.direction = void 0 !== e ? e : new a.Vector3
    }
    ,
    a.Ray.prototype = {
        constructor: a.Ray,
        set: function(t, e) {
            return this.origin.copy(t),
            this.direction.copy(e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.origin.copy(t.origin),
            this.direction.copy(t.direction),
            this
        },
        at: function(t, e) {
            var r = e || new a.Vector3;
            return r.copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        lookAt: function(t) {
            return this.direction.copy(t).sub(this.origin).normalize(),
            this
        },
        recast: function() {
            var t = new a.Vector3;
            return function(e) {
                return this.origin.copy(this.at(e, t)),
                this
            }
        }(),
        closestPointToPoint: function(t, e) {
            var r = e || new a.Vector3;
            r.subVectors(t, this.origin);
            var i = r.dot(this.direction);
            return i < 0 ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(i).add(this.origin)
        },
        distanceToPoint: function(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        },
        distanceSqToPoint: function() {
            var t = new a.Vector3;
            return function(e) {
                var r = t.subVectors(e, this.origin).dot(this.direction);
                return r < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(r).add(this.origin),
                t.distanceToSquared(e))
            }
        }(),
        distanceSqToSegment: function() {
            var t = new a.Vector3
              , e = new a.Vector3
              , r = new a.Vector3;
            return function(i, n, a, o) {
                t.copy(i).add(n).multiplyScalar(.5),
                e.copy(n).sub(i).normalize(),
                r.copy(this.origin).sub(t);
                var s, c, h, l, u = .5 * i.distanceTo(n), d = -this.direction.dot(e), p = r.dot(this.direction), f = -r.dot(e), m = r.lengthSq(), g = Math.abs(1 - d * d);
                if (g > 0)
                    if (s = d * f - p,
                    c = d * p - f,
                    l = u * g,
                    s >= 0)
                        if (c >= -l)
                            if (c <= l) {
                                var v = 1 / g;
                                s *= v,
                                c *= v,
                                h = s * (s + d * c + 2 * p) + c * (d * s + c + 2 * f) + m
                            } else
                                c = u,
                                s = Math.max(0, -(d * c + p)),
                                h = -s * s + c * (c + 2 * f) + m;
                        else
                            c = -u,
                            s = Math.max(0, -(d * c + p)),
                            h = -s * s + c * (c + 2 * f) + m;
                    else
                        c <= -l ? (s = Math.max(0, -(-d * u + p)),
                        c = s > 0 ? -u : Math.min(Math.max(-u, -f), u),
                        h = -s * s + c * (c + 2 * f) + m) : c <= l ? (s = 0,
                        c = Math.min(Math.max(-u, -f), u),
                        h = c * (c + 2 * f) + m) : (s = Math.max(0, -(d * u + p)),
                        c = s > 0 ? u : Math.min(Math.max(-u, -f), u),
                        h = -s * s + c * (c + 2 * f) + m);
                else
                    c = d > 0 ? -u : u,
                    s = Math.max(0, -(d * c + p)),
                    h = -s * s + c * (c + 2 * f) + m;
                return a && a.copy(this.direction).multiplyScalar(s).add(this.origin),
                o && o.copy(e).multiplyScalar(c).add(t),
                h
            }
        }(),
        intersectSphere: function() {
            var t = new a.Vector3;
            return function(e, r) {
                t.subVectors(e.center, this.origin);
                var i = t.dot(this.direction)
                  , n = t.dot(t) - i * i
                  , a = e.radius * e.radius;
                if (n > a)
                    return null;
                var o = Math.sqrt(a - n)
                  , s = i - o
                  , c = i + o;
                return s < 0 && c < 0 ? null : s < 0 ? this.at(c, r) : this.at(s, r)
            }
        }(),
        intersectsSphere: function(t) {
            return this.distanceToPoint(t.center) <= t.radius
        },
        distanceToPlane: function(t) {
            var e = t.normal.dot(this.direction);
            if (0 === e)
                return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            var r = -(this.origin.dot(t.normal) + t.constant) / e;
            return r >= 0 ? r : null
        },
        intersectPlane: function(t, e) {
            var r = this.distanceToPlane(t);
            return null === r ? null : this.at(r, e)
        },
        intersectsPlane: function(t) {
            var e = t.distanceToPoint(this.origin);
            if (0 === e)
                return !0;
            var r = t.normal.dot(this.direction);
            return r * e < 0
        },
        intersectBox: function(t, e) {
            var r, i, n, a, o, s, c = 1 / this.direction.x, h = 1 / this.direction.y, l = 1 / this.direction.z, u = this.origin;
            return c >= 0 ? (r = (t.min.x - u.x) * c,
            i = (t.max.x - u.x) * c) : (r = (t.max.x - u.x) * c,
            i = (t.min.x - u.x) * c),
            h >= 0 ? (n = (t.min.y - u.y) * h,
            a = (t.max.y - u.y) * h) : (n = (t.max.y - u.y) * h,
            a = (t.min.y - u.y) * h),
            r > a || n > i ? null : ((n > r || r !== r) && (r = n),
            (a < i || i !== i) && (i = a),
            l >= 0 ? (o = (t.min.z - u.z) * l,
            s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l,
            s = (t.min.z - u.z) * l),
            r > s || o > i ? null : ((o > r || r !== r) && (r = o),
            (s < i || i !== i) && (i = s),
            i < 0 ? null : this.at(r >= 0 ? r : i, e)))
        },
        intersectsBox: function() {
            var t = new a.Vector3;
            return function(e) {
                return null !== this.intersectBox(e, t)
            }
        }(),
        intersectTriangle: function() {
            var t = new a.Vector3
              , e = new a.Vector3
              , r = new a.Vector3
              , i = new a.Vector3;
            return function(n, a, o, s, c) {
                e.subVectors(a, n),
                r.subVectors(o, n),
                i.crossVectors(e, r);
                var h, l = this.direction.dot(i);
                if (l > 0) {
                    if (s)
                        return null;
                    h = 1
                } else {
                    if (!(l < 0))
                        return null;
                    h = -1,
                    l = -l
                }
                t.subVectors(this.origin, n);
                var u = h * this.direction.dot(r.crossVectors(t, r));
                if (u < 0)
                    return null;
                var d = h * this.direction.dot(e.cross(t));
                if (d < 0)
                    return null;
                if (u + d > l)
                    return null;
                var p = -h * t.dot(i);
                return p < 0 ? null : this.at(p / l, c)
            }
        }(),
        applyMatrix4: function(t) {
            return this.direction.add(this.origin).applyMatrix4(t),
            this.origin.applyMatrix4(t),
            this.direction.sub(this.origin),
            this.direction.normalize(),
            this
        },
        equals: function(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    },
    a.Sphere = function(t, e) {
        this.center = void 0 !== t ? t : new a.Vector3,
        this.radius = void 0 !== e ? e : 0
    }
    ,
    a.Sphere.prototype = {
        constructor: a.Sphere,
        set: function(t, e) {
            return this.center.copy(t),
            this.radius = e,
            this
        },
        setFromPoints: function() {
            var t = new a.Box3;
            return function(e, r) {
                var i = this.center;
                void 0 !== r ? i.copy(r) : t.setFromPoints(e).center(i);
                for (var n = 0, a = 0, o = e.length; a < o; a++)
                    n = Math.max(n, i.distanceToSquared(e[a]));
                return this.radius = Math.sqrt(n),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.center.copy(t.center),
            this.radius = t.radius,
            this
        },
        empty: function() {
            return this.radius <= 0
        },
        containsPoint: function(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        intersectsBox: function(t) {
            return t.intersectsSphere(this)
        },
        intersectsPlane: function(t) {
            return Math.abs(this.center.dot(t.normal) - t.constant) <= this.radius
        },
        clampPoint: function(t, e) {
            var r = this.center.distanceToSquared(t)
              , i = e || new a.Vector3;
            return i.copy(t),
            r > this.radius * this.radius && (i.sub(this.center).normalize(),
            i.multiplyScalar(this.radius).add(this.center)),
            i
        },
        getBoundingBox: function(t) {
            var e = t || new a.Box3;
            return e.set(this.center, this.center),
            e.expandByScalar(this.radius),
            e
        },
        applyMatrix4: function(t) {
            return this.center.applyMatrix4(t),
            this.radius = this.radius * t.getMaxScaleOnAxis(),
            this
        },
        translate: function(t) {
            return this.center.add(t),
            this
        },
        equals: function(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    },
    a.Frustum = function(t, e, r, i, n, o) {
        this.planes = [void 0 !== t ? t : new a.Plane, void 0 !== e ? e : new a.Plane, void 0 !== r ? r : new a.Plane, void 0 !== i ? i : new a.Plane, void 0 !== n ? n : new a.Plane, void 0 !== o ? o : new a.Plane]
    }
    ,
    a.Frustum.prototype = {
        constructor: a.Frustum,
        set: function(t, e, r, i, n, a) {
            var o = this.planes;
            return o[0].copy(t),
            o[1].copy(e),
            o[2].copy(r),
            o[3].copy(i),
            o[4].copy(n),
            o[5].copy(a),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            for (var e = this.planes, r = 0; r < 6; r++)
                e[r].copy(t.planes[r]);
            return this
        },
        setFromMatrix: function(t) {
            var e = this.planes
              , r = t.elements
              , i = r[0]
              , n = r[1]
              , a = r[2]
              , o = r[3]
              , s = r[4]
              , c = r[5]
              , h = r[6]
              , l = r[7]
              , u = r[8]
              , d = r[9]
              , p = r[10]
              , f = r[11]
              , m = r[12]
              , g = r[13]
              , v = r[14]
              , y = r[15];
            return e[0].setComponents(o - i, l - s, f - u, y - m).normalize(),
            e[1].setComponents(o + i, l + s, f + u, y + m).normalize(),
            e[2].setComponents(o + n, l + c, f + d, y + g).normalize(),
            e[3].setComponents(o - n, l - c, f - d, y - g).normalize(),
            e[4].setComponents(o - a, l - h, f - p, y - v).normalize(),
            e[5].setComponents(o + a, l + h, f + p, y + v).normalize(),
            this
        },
        intersectsObject: function() {
            var t = new a.Sphere;
            return function(e) {
                var r = e.geometry;
                return null === r.boundingSphere && r.computeBoundingSphere(),
                t.copy(r.boundingSphere).applyMatrix4(e.matrixWorld),
                this.intersectsSphere(t)
            }
        }(),
        intersectsSprite: function() {
            var t = new a.Sphere;
            return function(e) {
                return t.center.set(0, 0, 0),
                t.radius = .7071067811865476,
                t.applyMatrix4(e.matrixWorld),
                this.intersectsSphere(t)
            }
        }(),
        intersectsSphere: function(t) {
            for (var e = this.planes, r = t.center, i = -t.radius, n = 0; n < 6; n++) {
                var a = e[n].distanceToPoint(r);
                if (a < i)
                    return !1
            }
            return !0
        },
        intersectsBox: function() {
            var t = new a.Vector3
              , e = new a.Vector3;
            return function(r) {
                for (var i = this.planes, n = 0; n < 6; n++) {
                    var a = i[n];
                    t.x = a.normal.x > 0 ? r.min.x : r.max.x,
                    e.x = a.normal.x > 0 ? r.max.x : r.min.x,
                    t.y = a.normal.y > 0 ? r.min.y : r.max.y,
                    e.y = a.normal.y > 0 ? r.max.y : r.min.y,
                    t.z = a.normal.z > 0 ? r.min.z : r.max.z,
                    e.z = a.normal.z > 0 ? r.max.z : r.min.z;
                    var o = a.distanceToPoint(t)
                      , s = a.distanceToPoint(e);
                    if (o < 0 && s < 0)
                        return !1
                }
                return !0
            }
        }(),
        containsPoint: function(t) {
            for (var e = this.planes, r = 0; r < 6; r++)
                if (e[r].distanceToPoint(t) < 0)
                    return !1;
            return !0
        }
    },
    a.Plane = function(t, e) {
        this.normal = void 0 !== t ? t : new a.Vector3(1,0,0),
        this.constant = void 0 !== e ? e : 0
    }
    ,
    a.Plane.prototype = {
        constructor: a.Plane,
        set: function(t, e) {
            return this.normal.copy(t),
            this.constant = e,
            this
        },
        setComponents: function(t, e, r, i) {
            return this.normal.set(t, e, r),
            this.constant = i,
            this
        },
        setFromNormalAndCoplanarPoint: function(t, e) {
            return this.normal.copy(t),
            this.constant = -e.dot(this.normal),
            this
        },
        setFromCoplanarPoints: function() {
            var t = new a.Vector3
              , e = new a.Vector3;
            return function(r, i, n) {
                var a = t.subVectors(n, i).cross(e.subVectors(r, i)).normalize();
                return this.setFromNormalAndCoplanarPoint(a, r),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.normal.copy(t.normal),
            this.constant = t.constant,
            this
        },
        normalize: function() {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t),
            this.constant *= t,
            this
        },
        negate: function() {
            return this.constant *= -1,
            this.normal.negate(),
            this
        },
        distanceToPoint: function(t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function(t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function(t, e) {
            return this.orthoPoint(t, e).sub(t).negate()
        },
        orthoPoint: function(t, e) {
            var r = this.distanceToPoint(t)
              , i = e || new a.Vector3;
            return i.copy(this.normal).multiplyScalar(r)
        },
        intersectLine: function() {
            var t = new a.Vector3;
            return function(e, r) {
                var i = r || new a.Vector3
                  , n = e.delta(t)
                  , o = this.normal.dot(n);
                if (0 !== o) {
                    var s = -(e.start.dot(this.normal) + this.constant) / o;
                    if (!(s < 0 || s > 1))
                        return i.copy(n).multiplyScalar(s).add(e.start)
                } else if (0 === this.distanceToPoint(e.start))
                    return i.copy(e.start)
            }
        }(),
        intersectsLine: function(t) {
            var e = this.distanceToPoint(t.start)
              , r = this.distanceToPoint(t.end);
            return e < 0 && r > 0 || r < 0 && e > 0
        },
        intersectsBox: function(t) {
            return t.intersectsPlane(this)
        },
        intersectsSphere: function(t) {
            return t.intersectsPlane(this)
        },
        coplanarPoint: function(t) {
            var e = t || new a.Vector3;
            return e.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var t = new a.Vector3
              , e = new a.Matrix3;
            return function(r, i) {
                var n = this.coplanarPoint(t).applyMatrix4(r)
                  , a = i || e.getNormalMatrix(r)
                  , o = this.normal.applyMatrix3(a).normalize();
                return this.constant = -n.dot(o),
                this
            }
        }(),
        translate: function(t) {
            return this.constant = this.constant - t.dot(this.normal),
            this
        },
        equals: function(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    },
    a.Spherical = function(t, e, r) {
        return this.radius = void 0 !== t ? t : 1,
        this.phi = void 0 !== e ? e : 0,
        this.theta = void 0 !== r ? r : 0,
        this
    }
    ,
    a.Spherical.prototype = {
        constructor: a.Spherical,
        set: function(t, e, r) {
            return this.radius = t,
            this.phi = e,
            this.theta = r,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius.copy(t.radius),
            this.phi.copy(t.phi),
            this.theta.copy(t.theta),
            this
        },
        makeSafe: function() {
            var t = 1e-6;
            return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)),
            this
        },
        setFromVector3: function(t) {
            return this.radius = t.length(),
            0 === this.radius ? (this.theta = 0,
            this.phi = 0) : (this.theta = Math.atan2(t.x, t.z),
            this.phi = Math.acos(a.Math.clamp(t.y / this.radius, -1, 1))),
            this
        }
    },
    a.Math = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = new Array(36), i = 0;
            return function() {
                for (var n = 0; n < 36; n++)
                    8 === n || 13 === n || 18 === n || 23 === n ? r[n] = "-" : 14 === n ? r[n] = "4" : (i <= 2 && (i = 33554432 + 16777216 * Math.random() | 0),
                    t = 15 & i,
                    i >>= 4,
                    r[n] = e[19 === n ? 3 & t | 8 : t]);
                return r.join("")
            }
        }(),
        clamp: function(t, e, r) {
            return Math.max(e, Math.min(r, t))
        },
        euclideanModulo: function(t, e) {
            return (t % e + e) % e
        },
        mapLinear: function(t, e, r, i, n) {
            return i + (t - e) * (n - i) / (r - e)
        },
        smoothstep: function(t, e, r) {
            return t <= e ? 0 : t >= r ? 1 : (t = (t - e) / (r - e),
            t * t * (3 - 2 * t))
        },
        smootherstep: function(t, e, r) {
            return t <= e ? 0 : t >= r ? 1 : (t = (t - e) / (r - e),
            t * t * t * (t * (6 * t - 15) + 10))
        },
        random16: function() {
            return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),
            Math.random()
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random())
        },
        degToRad: function(t) {
            return t * a.Math.DEG2RAD
        },
        radToDeg: function(t) {
            return t * a.Math.RAD2DEG
        },
        isPowerOfTwo: function(t) {
            return 0 === (t & t - 1) && 0 !== t
        },
        nearestPowerOfTwo: function(t) {
            return Math.pow(2, Math.round(Math.log(t) / Math.LN2))
        },
        nextPowerOfTwo: function(t) {
            return t--,
            t |= t >> 1,
            t |= t >> 2,
            t |= t >> 4,
            t |= t >> 8,
            t |= t >> 16,
            t++,
            t
        }
    },
    a.Spline = function(t) {
        function e(t, e, r, i, n, a, o) {
            var s = .5 * (r - t)
              , c = .5 * (i - e);
            return (2 * (e - r) + s + c) * o + (-3 * (e - r) - 2 * s - c) * a + s * n + e
        }
        this.points = t;
        var r, i, n, o, s, c, h, l, u, d = [], p = {
            x: 0,
            y: 0,
            z: 0
        };
        this.initFromArray = function(t) {
            this.points = [];
            for (var e = 0; e < t.length; e++)
                this.points[e] = {
                    x: t[e][0],
                    y: t[e][1],
                    z: t[e][2]
                }
        }
        ,
        this.getPoint = function(t) {
            return r = (this.points.length - 1) * t,
            i = Math.floor(r),
            n = r - i,
            d[0] = 0 === i ? i : i - 1,
            d[1] = i,
            d[2] = i > this.points.length - 2 ? this.points.length - 1 : i + 1,
            d[3] = i > this.points.length - 3 ? this.points.length - 1 : i + 2,
            c = this.points[d[0]],
            h = this.points[d[1]],
            l = this.points[d[2]],
            u = this.points[d[3]],
            o = n * n,
            s = n * o,
            p.x = e(c.x, h.x, l.x, u.x, n, o, s),
            p.y = e(c.y, h.y, l.y, u.y, n, o, s),
            p.z = e(c.z, h.z, l.z, u.z, n, o, s),
            p
        }
        ,
        this.getControlPointsArray = function() {
            var t, e, r = this.points.length, i = [];
            for (t = 0; t < r; t++)
                e = this.points[t],
                i[t] = [e.x, e.y, e.z];
            return i
        }
        ,
        this.getLength = function(t) {
            var e, r, i, n, o = 0, s = 0, c = 0, h = new a.Vector3, l = new a.Vector3, u = [], d = 0;
            for (u[0] = 0,
            t || (t = 100),
            i = this.points.length * t,
            h.copy(this.points[0]),
            e = 1; e < i; e++)
                r = e / i,
                n = this.getPoint(r),
                l.copy(n),
                d += l.distanceTo(h),
                h.copy(n),
                o = (this.points.length - 1) * r,
                s = Math.floor(o),
                s !== c && (u[s] = d,
                c = s);
            return u[u.length] = d,
            {
                chunks: u,
                total: d
            }
        }
        ,
        this.reparametrizeByArcLength = function(t) {
            var e, r, i, n, o, s, c, h, l = [], u = new a.Vector3, d = this.getLength();
            for (l.push(u.copy(this.points[0]).clone()),
            e = 1; e < this.points.length; e++) {
                for (s = d.chunks[e] - d.chunks[e - 1],
                c = Math.ceil(t * s / d.total),
                n = (e - 1) / (this.points.length - 1),
                o = e / (this.points.length - 1),
                r = 1; r < c - 1; r++)
                    i = n + r * (1 / c) * (o - n),
                    h = this.getPoint(i),
                    l.push(u.copy(h).clone());
                l.push(u.copy(this.points[e]).clone())
            }
            this.points = l
        }
    }
    ,
    a.Triangle = function(t, e, r) {
        this.a = void 0 !== t ? t : new a.Vector3,
        this.b = void 0 !== e ? e : new a.Vector3,
        this.c = void 0 !== r ? r : new a.Vector3
    }
    ,
    a.Triangle.normal = function() {
        var t = new a.Vector3;
        return function(e, r, i, n) {
            var o = n || new a.Vector3;
            o.subVectors(i, r),
            t.subVectors(e, r),
            o.cross(t);
            var s = o.lengthSq();
            return s > 0 ? o.multiplyScalar(1 / Math.sqrt(s)) : o.set(0, 0, 0)
        }
    }(),
    a.Triangle.barycoordFromPoint = function() {
        var t = new a.Vector3
          , e = new a.Vector3
          , r = new a.Vector3;
        return function(i, n, o, s, c) {
            t.subVectors(s, n),
            e.subVectors(o, n),
            r.subVectors(i, n);
            var h = t.dot(t)
              , l = t.dot(e)
              , u = t.dot(r)
              , d = e.dot(e)
              , p = e.dot(r)
              , f = h * d - l * l
              , m = c || new a.Vector3;
            if (0 === f)
                return m.set(-2, -1, -1);
            var g = 1 / f
              , v = (d * u - l * p) * g
              , y = (h * p - l * u) * g;
            return m.set(1 - v - y, y, v)
        }
    }(),
    a.Triangle.containsPoint = function() {
        var t = new a.Vector3;
        return function(e, r, i, n) {
            var o = a.Triangle.barycoordFromPoint(e, r, i, n, t);
            return o.x >= 0 && o.y >= 0 && o.x + o.y <= 1
        }
    }(),
    a.Triangle.prototype = {
        constructor: a.Triangle,
        set: function(t, e, r) {
            return this.a.copy(t),
            this.b.copy(e),
            this.c.copy(r),
            this
        },
        setFromPointsAndIndices: function(t, e, r, i) {
            return this.a.copy(t[e]),
            this.b.copy(t[r]),
            this.c.copy(t[i]),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.a.copy(t.a),
            this.b.copy(t.b),
            this.c.copy(t.c),
            this
        },
        area: function() {
            var t = new a.Vector3
              , e = new a.Vector3;
            return function() {
                return t.subVectors(this.c, this.b),
                e.subVectors(this.a, this.b),
                .5 * t.cross(e).length()
            }
        }(),
        midpoint: function(t) {
            var e = t || new a.Vector3;
            return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function(t) {
            return a.Triangle.normal(this.a, this.b, this.c, t)
        },
        plane: function(t) {
            var e = t || new a.Plane;
            return e.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function(t, e) {
            return a.Triangle.barycoordFromPoint(t, this.a, this.b, this.c, e)
        },
        containsPoint: function(t) {
            return a.Triangle.containsPoint(t, this.a, this.b, this.c)
        },
        closestPointToPoint: function() {
            var t, e, r, i;
            return function(n, o) {
                void 0 === t && (t = new a.Plane,
                e = [new a.Line3, new a.Line3, new a.Line3],
                r = new a.Vector3,
                i = new a.Vector3);
                var s = o || new a.Vector3
                  , c = 1 / 0;
                if (t.setFromCoplanarPoints(this.a, this.b, this.c),
                t.projectPoint(n, r),
                this.containsPoint(r) === !0)
                    s.copy(r);
                else {
                    e[0].set(this.a, this.b),
                    e[1].set(this.b, this.c),
                    e[2].set(this.c, this.a);
                    for (var h = 0; h < e.length; h++) {
                        e[h].closestPointToPoint(r, !0, i);
                        var l = r.distanceToSquared(i);
                        l < c && (c = l,
                        s.copy(i))
                    }
                }
                return s
            }
        }(),
        equals: function(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    },
    a.Interpolant = function(t, e, r, i) {
        this.parameterPositions = t,
        this._cachedIndex = 0,
        this.resultBuffer = void 0 !== i ? i : new e.constructor(r),
        this.sampleValues = e,
        this.valueSize = r
    }
    ,
    a.Interpolant.prototype = {
        constructor: a.Interpolant,
        evaluate: function(t) {
            var e = this.parameterPositions
              , r = this._cachedIndex
              , i = e[r]
              , n = e[r - 1];
            t: {
                e: {
                    var a;
                    r: {
                        i: if (!(t < i)) {
                            for (var o = r + 2; ; ) {
                                if (void 0 === i) {
                                    if (t < n)
                                        break i;
                                    return r = e.length,
                                    this._cachedIndex = r,
                                    this.afterEnd_(r - 1, t, n)
                                }
                                if (r === o)
                                    break;
                                if (n = i,
                                i = e[++r],
                                t < i)
                                    break e
                            }
                            a = e.length;
                            break r
                        }
                        {
                            if (t >= n)
                                break t;
                            var s = e[1];
                            t < s && (r = 2,
                            n = s);
                            for (var o = r - 2; ; ) {
                                if (void 0 === n)
                                    return this._cachedIndex = 0,
                                    this.beforeStart_(0, t, i);
                                if (r === o)
                                    break;
                                if (i = n,
                                n = e[--r - 1],
                                t >= n)
                                    break e
                            }
                            a = r,
                            r = 0
                        }
                    }
                    for (; r < a; ) {
                        var c = r + a >>> 1;
                        t < e[c] ? a = c : r = c + 1
                    }
                    if (i = e[r],
                    n = e[r - 1],
                    void 0 === n)
                        return this._cachedIndex = 0,
                        this.beforeStart_(0, t, i);
                    if (void 0 === i)
                        return r = e.length,
                        this._cachedIndex = r,
                        this.afterEnd_(r - 1, n, t)
                }
                this._cachedIndex = r,
                this.intervalChanged_(r, n, i)
            }
            return this.interpolate_(r, n, t, i)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(t) {
            for (var e = this.resultBuffer, r = this.sampleValues, i = this.valueSize, n = t * i, a = 0; a !== i; ++a)
                e[a] = r[n + a];
            return e
        },
        interpolate_: function(t, e, r, i) {
            throw new Error("call to abstract method")
        },
        intervalChanged_: function(t, e, r) {}
    },
    Object.assign(a.Interpolant.prototype, {
        beforeStart_: a.Interpolant.prototype.copySampleValue_,
        afterEnd_: a.Interpolant.prototype.copySampleValue_
    }),
    a.CubicInterpolant = function(t, e, r, i) {
        a.Interpolant.call(this, t, e, r, i),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0
    }
    ,
    a.CubicInterpolant.prototype = Object.assign(Object.create(a.Interpolant.prototype), {
        constructor: a.CubicInterpolant,
        DefaultSettings_: {
            endingStart: a.ZeroCurvatureEnding,
            endingEnd: a.ZeroCurvatureEnding
        },
        intervalChanged_: function(t, e, r) {
            var i = this.parameterPositions
              , n = t - 2
              , o = t + 1
              , s = i[n]
              , c = i[o];
            if (void 0 === s)
                switch (this.getSettings_().endingStart) {
                case a.ZeroSlopeEnding:
                    n = t,
                    s = 2 * e - r;
                    break;
                case a.WrapAroundEnding:
                    n = i.length - 2,
                    s = e + i[n] - i[n + 1];
                    break;
                default:
                    n = t,
                    s = r
                }
            if (void 0 === c)
                switch (this.getSettings_().endingEnd) {
                case a.ZeroSlopeEnding:
                    o = t,
                    c = 2 * r - e;
                    break;
                case a.WrapAroundEnding:
                    o = 1,
                    c = r + i[1] - i[0];
                    break;
                default:
                    o = t - 1,
                    c = e
                }
            var h = .5 * (r - e)
              , l = this.valueSize;
            this._weightPrev = h / (e - s),
            this._weightNext = h / (c - r),
            this._offsetPrev = n * l,
            this._offsetNext = o * l
        },
        interpolate_: function(t, e, r, i) {
            for (var n = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (r - e) / (i - e), f = p * p, m = f * p, g = -u * m + 2 * u * f - u * p, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1, y = (-1 - d) * m + (1.5 + d) * f + .5 * p, x = d * m - d * f, b = 0; b !== o; ++b)
                n[b] = g * a[h + b] + v * a[c + b] + y * a[s + b] + x * a[l + b];
            return n
        }
    }),
    a.DiscreteInterpolant = function(t, e, r, i) {
        a.Interpolant.call(this, t, e, r, i)
    }
    ,
    a.DiscreteInterpolant.prototype = Object.assign(Object.create(a.Interpolant.prototype), {
        constructor: a.DiscreteInterpolant,
        interpolate_: function(t, e, r, i) {
            return this.copySampleValue_(t - 1)
        }
    }),
    a.LinearInterpolant = function(t, e, r, i) {
        a.Interpolant.call(this, t, e, r, i)
    }
    ,
    a.LinearInterpolant.prototype = Object.assign(Object.create(a.Interpolant.prototype), {
        constructor: a.LinearInterpolant,
        interpolate_: function(t, e, r, i) {
            for (var n = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = (r - e) / (i - e), l = 1 - h, u = 0; u !== o; ++u)
                n[u] = a[c + u] * l + a[s + u] * h;
            return n
        }
    }),
    a.QuaternionLinearInterpolant = function(t, e, r, i) {
        a.Interpolant.call(this, t, e, r, i)
    }
    ,
    a.QuaternionLinearInterpolant.prototype = Object.assign(Object.create(a.Interpolant.prototype), {
        constructor: a.QuaternionLinearInterpolant,
        interpolate_: function(t, e, r, i) {
            for (var n = this.resultBuffer, o = this.sampleValues, s = this.valueSize, c = t * s, h = (r - e) / (i - e), l = c + s; c !== l; c += 4)
                a.Quaternion.slerpFlat(n, 0, o, c - s, o, c, h);
            return n
        }
    }),
    a.Clock = function(t) {
        this.autoStart = void 0 === t || t,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
    }
    ,
    a.Clock.prototype = {
        constructor: a.Clock,
        start: function() {
            this.startTime = (performance || Date).now(),
            this.oldTime = this.startTime,
            this.running = !0
        },
        stop: function() {
            this.getElapsedTime(),
            this.running = !1
        },
        getElapsedTime: function() {
            return this.getDelta(),
            this.elapsedTime
        },
        getDelta: function() {
            var t = 0;
            if (this.autoStart && !this.running && this.start(),
            this.running) {
                var e = (performance || Date).now();
                t = (e - this.oldTime) / 1e3,
                this.oldTime = e,
                this.elapsedTime += t
            }
            return t
        }
    },
    a.EventDispatcher = function() {}
    ,
    Object.assign(a.EventDispatcher.prototype, {
        addEventListener: function(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var r = this._listeners;
            void 0 === r[t] && (r[t] = []),
            r[t].indexOf(e) === -1 && r[t].push(e)
        },
        hasEventListener: function(t, e) {
            if (void 0 === this._listeners)
                return !1;
            var r = this._listeners;
            return void 0 !== r[t] && r[t].indexOf(e) !== -1
        },
        removeEventListener: function(t, e) {
            if (void 0 !== this._listeners) {
                var r = this._listeners
                  , i = r[t];
                if (void 0 !== i) {
                    var n = i.indexOf(e);
                    n !== -1 && i.splice(n, 1)
                }
            }
        },
        dispatchEvent: function(t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners
                  , r = e[t.type];
                if (void 0 !== r) {
                    t.target = this;
                    var i = []
                      , n = 0
                      , a = r.length;
                    for (n = 0; n < a; n++)
                        i[n] = r[n];
                    for (n = 0; n < a; n++)
                        i[n].call(this, t)
                }
            }
        }
    }),
    a.Layers = function() {
        this.mask = 1
    }
    ,
    a.Layers.prototype = {
        constructor: a.Layers,
        set: function(t) {
            this.mask = 1 << t
        },
        enable: function(t) {
            this.mask |= 1 << t
        },
        toggle: function(t) {
            this.mask ^= 1 << t
        },
        disable: function(t) {
            this.mask &= ~(1 << t)
        },
        test: function(t) {
            return 0 !== (this.mask & t.mask)
        }
    },
    function(t) {
        function e(t, e) {
            return t.distance - e.distance
        }
        function r(t, e, i, n) {
            if (t.visible !== !1 && (t.raycast(e, i),
            n === !0))
                for (var a = t.children, o = 0, s = a.length; o < s; o++)
                    r(a[o], e, i, !0)
        }
        t.Raycaster = function(e, r, i, n) {
            this.ray = new t.Ray(e,r),
            this.near = i || 0,
            this.far = n || 1 / 0,
            this.params = {
                Mesh: {},
                Line: {},
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            },
            Object.defineProperties(this.params, {
                PointCloud: {
                    get: function() {
                        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                        this.Points
                    }
                }
            })
        }
        ,
        t.Raycaster.prototype = {
            constructor: t.Raycaster,
            linePrecision: 1,
            set: function(t, e) {
                this.ray.set(t, e)
            },
            setFromCamera: function(e, r) {
                r instanceof t.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(r.matrixWorld),
                this.ray.direction.set(e.x, e.y, .5).unproject(r).sub(this.ray.origin).normalize()) : r instanceof t.OrthographicCamera ? (this.ray.origin.set(e.x, e.y, (r.near + r.far) / (r.near - r.far)).unproject(r),
                this.ray.direction.set(0, 0, -1).transformDirection(r.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
            },
            intersectObject: function(t, i) {
                var n = [];
                return r(t, this, n, i),
                n.sort(e),
                n
            },
            intersectObjects: function(t, i) {
                var n = [];
                if (Array.isArray(t) === !1)
                    return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                    n;
                for (var a = 0, o = t.length; a < o; a++)
                    r(t[a], this, n, i);
                return n.sort(e),
                n
            }
        }
    }(a),
    a.Object3D = function() {
        function t() {
            n.setFromEuler(i, !1)
        }
        function e() {
            i.setFromQuaternion(n, void 0, !1)
        }
        Object.defineProperty(this, "id", {
            value: a.Object3DIdCount++
        }),
        this.uuid = a.Math.generateUUID(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = a.Object3D.DefaultUp.clone();
        var r = new a.Vector3
          , i = new a.Euler
          , n = new a.Quaternion
          , o = new a.Vector3(1,1,1);
        i.onChange(t),
        n.onChange(e),
        Object.defineProperties(this, {
            position: {
                enumerable: !0,
                value: r
            },
            rotation: {
                enumerable: !0,
                value: i
            },
            quaternion: {
                enumerable: !0,
                value: n
            },
            scale: {
                enumerable: !0,
                value: o
            },
            modelViewMatrix: {
                value: new a.Matrix4
            },
            normalMatrix: {
                value: new a.Matrix3
            }
        }),
        this.matrix = new a.Matrix4,
        this.matrixWorld = new a.Matrix4,
        this.matrixAutoUpdate = a.Object3D.DefaultMatrixAutoUpdate,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new a.Layers,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.userData = {}
    }
    ,
    a.Object3D.DefaultUp = new a.Vector3(0,1,0),
    a.Object3D.DefaultMatrixAutoUpdate = !0,
    Object.assign(a.Object3D.prototype, a.EventDispatcher.prototype, {
        applyMatrix: function(t) {
            this.matrix.multiplyMatrices(t, this.matrix),
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        setRotationFromAxisAngle: function(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function(t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function(t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function(t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: function() {
            var t = new a.Quaternion;
            return function(e, r) {
                return t.setFromAxisAngle(e, r),
                this.quaternion.multiply(t),
                this
            }
        }(),
        rotateX: function() {
            var t = new a.Vector3(1,0,0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateY: function() {
            var t = new a.Vector3(0,1,0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateZ: function() {
            var t = new a.Vector3(0,0,1);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        translateOnAxis: function() {
            var t = new a.Vector3;
            return function(e, r) {
                return t.copy(e).applyQuaternion(this.quaternion),
                this.position.add(t.multiplyScalar(r)),
                this
            }
        }(),
        translateX: function() {
            var t = new a.Vector3(1,0,0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateY: function() {
            var t = new a.Vector3(0,1,0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateZ: function() {
            var t = new a.Vector3(0,0,1);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        localToWorld: function(t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function() {
            var t = new a.Matrix4;
            return function(e) {
                return e.applyMatrix4(t.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function() {
            var t = new a.Matrix4;
            return function(e) {
                t.lookAt(e, this.position, this.up),
                this.quaternion.setFromRotationMatrix(t)
            }
        }(),
        add: function(t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++)
                    this.add(arguments[e]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
            this) : (t instanceof a.Object3D ? (null !== t.parent && t.parent.remove(t),
            t.parent = this,
            t.dispatchEvent({
                type: "added"
            }),
            this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
            this)
        },
        remove: function(t) {
            if (arguments.length > 1)
                for (var e = 0; e < arguments.length; e++)
                    this.remove(arguments[e]);
            var r = this.children.indexOf(t);
            r !== -1 && (t.parent = null,
            t.dispatchEvent({
                type: "removed"
            }),
            this.children.splice(r, 1))
        },
        getObjectById: function(t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function(t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function(t, e) {
            if (this[t] === e)
                return this;
            for (var r = 0, i = this.children.length; r < i; r++) {
                var n = this.children[r]
                  , a = n.getObjectByProperty(t, e);
                if (void 0 !== a)
                    return a
            }
        },
        getWorldPosition: function(t) {
            var e = t || new a.Vector3;
            return this.updateMatrixWorld(!0),
            e.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function() {
            var t = new a.Vector3
              , e = new a.Vector3;
            return function(r) {
                var i = r || new a.Quaternion;
                return this.updateMatrixWorld(!0),
                this.matrixWorld.decompose(t, i, e),
                i
            }
        }(),
        getWorldRotation: function() {
            var t = new a.Quaternion;
            return function(e) {
                var r = e || new a.Euler;
                return this.getWorldQuaternion(t),
                r.setFromQuaternion(t, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function() {
            var t = new a.Vector3
              , e = new a.Quaternion;
            return function(r) {
                var i = r || new a.Vector3;
                return this.updateMatrixWorld(!0),
                this.matrixWorld.decompose(t, e, i),
                i
            }
        }(),
        getWorldDirection: function() {
            var t = new a.Quaternion;
            return function(e) {
                var r = e || new a.Vector3;
                return this.getWorldQuaternion(t),
                r.set(0, 0, 1).applyQuaternion(t)
            }
        }(),
        raycast: function() {},
        traverse: function(t) {
            t(this);
            for (var e = this.children, r = 0, i = e.length; r < i; r++)
                e[r].traverse(t)
        },
        traverseVisible: function(t) {
            if (this.visible !== !1) {
                t(this);
                for (var e = this.children, r = 0, i = e.length; r < i; r++)
                    e[r].traverseVisible(t)
            }
        },
        traverseAncestors: function(t) {
            var e = this.parent;
            null !== e && (t(e),
            e.traverseAncestors(t))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale),
            this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(t) {
            this.matrixAutoUpdate === !0 && this.updateMatrix(),
            this.matrixWorldNeedsUpdate !== !0 && t !== !0 || (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            this.matrixWorldNeedsUpdate = !1,
            t = !0);
            for (var e = 0, r = this.children.length; e < r; e++)
                this.children[e].updateMatrixWorld(t)
        },
        toJSON: function(t) {
            function e(t) {
                var e = [];
                for (var r in t) {
                    var i = t[r];
                    delete i.metadata,
                    e.push(i)
                }
                return e
            }
            var r = void 0 === t || "" === t
              , i = {};
            r && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {}
            },
            i.metadata = {
                version: 4.4,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var n = {};
            if (n.uuid = this.uuid,
            n.type = this.type,
            "" !== this.name && (n.name = this.name),
            "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
            this.castShadow === !0 && (n.castShadow = !0),
            this.receiveShadow === !0 && (n.receiveShadow = !0),
            this.visible === !1 && (n.visible = !1),
            n.matrix = this.matrix.toArray(),
            void 0 !== this.geometry && (void 0 === t.geometries[this.geometry.uuid] && (t.geometries[this.geometry.uuid] = this.geometry.toJSON(t)),
            n.geometry = this.geometry.uuid),
            void 0 !== this.material && (void 0 === t.materials[this.material.uuid] && (t.materials[this.material.uuid] = this.material.toJSON(t)),
            n.material = this.material.uuid),
            this.children.length > 0) {
                n.children = [];
                for (var a = 0; a < this.children.length; a++)
                    n.children.push(this.children[a].toJSON(t).object)
            }
            if (r) {
                var o = e(t.geometries)
                  , s = e(t.materials)
                  , c = e(t.textures)
                  , h = e(t.images);
                o.length > 0 && (i.geometries = o),
                s.length > 0 && (i.materials = s),
                c.length > 0 && (i.textures = c),
                h.length > 0 && (i.images = h)
            }
            return i.object = n,
            i
        },
        clone: function(t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function(t, e) {
            if (void 0 === e && (e = !0),
            this.name = t.name,
            this.up.copy(t.up),
            this.position.copy(t.position),
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
            this.visible = t.visible,
            this.castShadow = t.castShadow,
            this.receiveShadow = t.receiveShadow,
            this.frustumCulled = t.frustumCulled,
            this.renderOrder = t.renderOrder,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            e === !0)
                for (var r = 0; r < t.children.length; r++) {
                    var i = t.children[r];
                    this.add(i.clone())
                }
            return this
        }
    }),
    a.Object3DIdCount = 0,
    a.Face3 = function(t, e, r, i, n, o) {
        this.a = t,
        this.b = e,
        this.c = r,
        this.normal = i instanceof a.Vector3 ? i : new a.Vector3,
        this.vertexNormals = Array.isArray(i) ? i : [],
        this.color = n instanceof a.Color ? n : new a.Color,
        this.vertexColors = Array.isArray(n) ? n : [],
        this.materialIndex = void 0 !== o ? o : 0
    }
    ,
    a.Face3.prototype = {
        constructor: a.Face3,
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.a = t.a,
            this.b = t.b,
            this.c = t.c,
            this.normal.copy(t.normal),
            this.color.copy(t.color),
            this.materialIndex = t.materialIndex;
            for (var e = 0, r = t.vertexNormals.length; e < r; e++)
                this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (var e = 0, r = t.vertexColors.length; e < r; e++)
                this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    },
    a.BufferAttribute = function(t, e, r) {
        this.uuid = a.Math.generateUUID(),
        this.array = t,
        this.itemSize = e,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0,
        this.normalized = r === !0
    }
    ,
    a.BufferAttribute.prototype = {
        constructor: a.BufferAttribute,
        get count() {
            return this.array.length / this.itemSize
        },
        set needsUpdate(t) {
            t === !0 && this.version++
        },
        setDynamic: function(t) {
            return this.dynamic = t,
            this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array),
            this.itemSize = t.itemSize,
            this.dynamic = t.dynamic,
            this
        },
        copyAt: function(t, e, r) {
            t *= this.itemSize,
            r *= e.itemSize;
            for (var i = 0, n = this.itemSize; i < n; i++)
                this.array[t + i] = e.array[r + i];
            return this
        },
        copyArray: function(t) {
            return this.array.set(t),
            this
        },
        copyColorsArray: function(t) {
            for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
                var o = t[i];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
                o = new a.Color),
                e[r++] = o.r,
                e[r++] = o.g,
                e[r++] = o.b
            }
            return this
        },
        copyIndicesArray: function(t) {
            for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
                var a = t[i];
                e[r++] = a.a,
                e[r++] = a.b,
                e[r++] = a.c
            }
            return this
        },
        copyVector2sArray: function(t) {
            for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
                var o = t[i];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
                o = new a.Vector2),
                e[r++] = o.x,
                e[r++] = o.y
            }
            return this
        },
        copyVector3sArray: function(t) {
            for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
                var o = t[i];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
                o = new a.Vector3),
                e[r++] = o.x,
                e[r++] = o.y,
                e[r++] = o.z
            }
            return this
        },
        copyVector4sArray: function(t) {
            for (var e = this.array, r = 0, i = 0, n = t.length; i < n; i++) {
                var o = t[i];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i),
                o = new a.Vector4),
                e[r++] = o.x,
                e[r++] = o.y,
                e[r++] = o.z,
                e[r++] = o.w
            }
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0),
            this.array.set(t, e),
            this
        },
        getX: function(t) {
            return this.array[t * this.itemSize]
        },
        setX: function(t, e) {
            return this.array[t * this.itemSize] = e,
            this
        },
        getY: function(t) {
            return this.array[t * this.itemSize + 1]
        },
        setY: function(t, e) {
            return this.array[t * this.itemSize + 1] = e,
            this
        },
        getZ: function(t) {
            return this.array[t * this.itemSize + 2]
        },
        setZ: function(t, e) {
            return this.array[t * this.itemSize + 2] = e,
            this
        },
        getW: function(t) {
            return this.array[t * this.itemSize + 3]
        },
        setW: function(t, e) {
            return this.array[t * this.itemSize + 3] = e,
            this
        },
        setXY: function(t, e, r) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = r,
            this
        },
        setXYZ: function(t, e, r, i) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = r,
            this.array[t + 2] = i,
            this
        },
        setXYZW: function(t, e, r, i, n) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = r,
            this.array[t + 2] = i,
            this.array[t + 3] = n,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    },
    a.Int8Attribute = function(t, e) {
        return new a.BufferAttribute(new Int8Array(t),e)
    }
    ,
    a.Uint8Attribute = function(t, e) {
        return new a.BufferAttribute(new Uint8Array(t),e)
    }
    ,
    a.Uint8ClampedAttribute = function(t, e) {
        return new a.BufferAttribute(new Uint8ClampedArray(t),e)
    }
    ,
    a.Int16Attribute = function(t, e) {
        return new a.BufferAttribute(new Int16Array(t),e)
    }
    ,
    a.Uint16Attribute = function(t, e) {
        return new a.BufferAttribute(new Uint16Array(t),e)
    }
    ,
    a.Int32Attribute = function(t, e) {
        return new a.BufferAttribute(new Int32Array(t),e)
    }
    ,
    a.Uint32Attribute = function(t, e) {
        return new a.BufferAttribute(new Uint32Array(t),e)
    }
    ,
    a.Float32Attribute = function(t, e) {
        return new a.BufferAttribute(new Float32Array(t),e)
    }
    ,
    a.Float64Attribute = function(t, e) {
        return new a.BufferAttribute(new Float64Array(t),e)
    }
    ,
    a.DynamicBufferAttribute = function(t, e) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),
        new a.BufferAttribute(t,e).setDynamic(!0)
    }
    ,
    a.InstancedBufferAttribute = function(t, e, r) {
        a.BufferAttribute.call(this, t, e),
        this.meshPerAttribute = r || 1
    }
    ,
    a.InstancedBufferAttribute.prototype = Object.create(a.BufferAttribute.prototype),
    a.InstancedBufferAttribute.prototype.constructor = a.InstancedBufferAttribute,
    a.InstancedBufferAttribute.prototype.copy = function(t) {
        return a.BufferAttribute.prototype.copy.call(this, t),
        this.meshPerAttribute = t.meshPerAttribute,
        this
    }
    ,
    a.InterleavedBuffer = function(t, e) {
        this.uuid = a.Math.generateUUID(),
        this.array = t,
        this.stride = e,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0;
    }
    ,
    a.InterleavedBuffer.prototype = {
        constructor: a.InterleavedBuffer,
        get length() {
            return this.array.length
        },
        get count() {
            return this.array.length / this.stride
        },
        set needsUpdate(t) {
            t === !0 && this.version++
        },
        setDynamic: function(t) {
            return this.dynamic = t,
            this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array),
            this.stride = t.stride,
            this.dynamic = t.dynamic,
            this
        },
        copyAt: function(t, e, r) {
            t *= this.stride,
            r *= e.stride;
            for (var i = 0, n = this.stride; i < n; i++)
                this.array[t + i] = e.array[r + i];
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0),
            this.array.set(t, e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    },
    a.InstancedInterleavedBuffer = function(t, e, r) {
        a.InterleavedBuffer.call(this, t, e),
        this.meshPerAttribute = r || 1
    }
    ,
    a.InstancedInterleavedBuffer.prototype = Object.create(a.InterleavedBuffer.prototype),
    a.InstancedInterleavedBuffer.prototype.constructor = a.InstancedInterleavedBuffer,
    a.InstancedInterleavedBuffer.prototype.copy = function(t) {
        return a.InterleavedBuffer.prototype.copy.call(this, t),
        this.meshPerAttribute = t.meshPerAttribute,
        this
    }
    ,
    a.InterleavedBufferAttribute = function(t, e, r, i) {
        this.uuid = a.Math.generateUUID(),
        this.data = t,
        this.itemSize = e,
        this.offset = r,
        this.normalized = i === !0
    }
    ,
    a.InterleavedBufferAttribute.prototype = {
        constructor: a.InterleavedBufferAttribute,
        get length() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),
            this.array.length
        },
        get count() {
            return this.data.count
        },
        get array() {
            return this.data.array
        },
        setX: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e,
            this
        },
        setY: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e,
            this
        },
        setZ: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e,
            this
        },
        setW: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e,
            this
        },
        getX: function(t) {
            return this.data.array[t * this.data.stride + this.offset]
        },
        getY: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        },
        getZ: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        },
        getW: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        },
        setXY: function(t, e, r) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = r,
            this
        },
        setXYZ: function(t, e, r, i) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = r,
            this.data.array[t + 2] = i,
            this
        },
        setXYZW: function(t, e, r, i, n) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = r,
            this.data.array[t + 2] = i,
            this.data.array[t + 3] = n,
            this
        }
    },
    a.Geometry = function() {
        Object.defineProperty(this, "id", {
            value: a.GeometryIdCount++
        }),
        this.uuid = a.Math.generateUUID(),
        this.name = "",
        this.type = "Geometry",
        this.vertices = [],
        this.colors = [],
        this.faces = [],
        this.faceVertexUvs = [[]],
        this.morphTargets = [],
        this.morphNormals = [],
        this.skinWeights = [],
        this.skinIndices = [],
        this.lineDistances = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.elementsNeedUpdate = !1,
        this.verticesNeedUpdate = !1,
        this.uvsNeedUpdate = !1,
        this.normalsNeedUpdate = !1,
        this.colorsNeedUpdate = !1,
        this.lineDistancesNeedUpdate = !1,
        this.groupsNeedUpdate = !1
    }
    ,
    Object.assign(a.Geometry.prototype, a.EventDispatcher.prototype, {
        applyMatrix: function(t) {
            for (var e = (new a.Matrix3).getNormalMatrix(t), r = 0, i = this.vertices.length; r < i; r++) {
                var n = this.vertices[r];
                n.applyMatrix4(t)
            }
            for (var r = 0, i = this.faces.length; r < i; r++) {
                var o = this.faces[r];
                o.normal.applyMatrix3(e).normalize();
                for (var s = 0, c = o.vertexNormals.length; s < c; s++)
                    o.vertexNormals[s].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this.verticesNeedUpdate = !0,
            this.normalsNeedUpdate = !0,
            this
        },
        rotateX: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new a.Matrix4),
                t.makeRotationX(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateY: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new a.Matrix4),
                t.makeRotationY(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateZ: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new a.Matrix4),
                t.makeRotationZ(e),
                this.applyMatrix(t),
                this
            }
        }(),
        translate: function() {
            var t;
            return function(e, r, i) {
                return void 0 === t && (t = new a.Matrix4),
                t.makeTranslation(e, r, i),
                this.applyMatrix(t),
                this
            }
        }(),
        scale: function() {
            var t;
            return function(e, r, i) {
                return void 0 === t && (t = new a.Matrix4),
                t.makeScale(e, r, i),
                this.applyMatrix(t),
                this
            }
        }(),
        lookAt: function() {
            var t;
            return function(e) {
                void 0 === t && (t = new a.Object3D),
                t.lookAt(e),
                t.updateMatrix(),
                this.applyMatrix(t.matrix)
            }
        }(),
        fromBufferGeometry: function(t) {
            function e(t, e, i, n) {
                var o = void 0 !== s ? [u[t].clone(), u[e].clone(), u[i].clone()] : []
                  , f = void 0 !== c ? [r.colors[t].clone(), r.colors[e].clone(), r.colors[i].clone()] : []
                  , m = new a.Face3(t,e,i,o,f,n);
                r.faces.push(m),
                void 0 !== h && r.faceVertexUvs[0].push([d[t].clone(), d[e].clone(), d[i].clone()]),
                void 0 !== l && r.faceVertexUvs[1].push([p[t].clone(), p[e].clone(), p[i].clone()])
            }
            var r = this
              , i = null !== t.index ? t.index.array : void 0
              , n = t.attributes
              , o = n.position.array
              , s = void 0 !== n.normal ? n.normal.array : void 0
              , c = void 0 !== n.color ? n.color.array : void 0
              , h = void 0 !== n.uv ? n.uv.array : void 0
              , l = void 0 !== n.uv2 ? n.uv2.array : void 0;
            void 0 !== l && (this.faceVertexUvs[1] = []);
            for (var u = [], d = [], p = [], f = 0, m = 0; f < o.length; f += 3,
            m += 2)
                r.vertices.push(new a.Vector3(o[f],o[f + 1],o[f + 2])),
                void 0 !== s && u.push(new a.Vector3(s[f],s[f + 1],s[f + 2])),
                void 0 !== c && r.colors.push(new a.Color(c[f],c[f + 1],c[f + 2])),
                void 0 !== h && d.push(new a.Vector2(h[m],h[m + 1])),
                void 0 !== l && p.push(new a.Vector2(l[m],l[m + 1]));
            if (void 0 !== i) {
                var g = t.groups;
                if (g.length > 0)
                    for (var f = 0; f < g.length; f++)
                        for (var v = g[f], y = v.start, x = v.count, m = y, b = y + x; m < b; m += 3)
                            e(i[m], i[m + 1], i[m + 2], v.materialIndex);
                else
                    for (var f = 0; f < i.length; f += 3)
                        e(i[f], i[f + 1], i[f + 2])
            } else
                for (var f = 0; f < o.length / 3; f += 3)
                    e(f, f + 1, f + 2);
            return this.computeFaceNormals(),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
            null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            this
        },
        center: function() {
            this.computeBoundingBox();
            var t = this.boundingBox.center().negate();
            return this.translate(t.x, t.y, t.z),
            t
        },
        normalize: function() {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center
              , e = this.boundingSphere.radius
              , r = 0 === e ? 1 : 1 / e
              , i = new a.Matrix4;
            return i.set(r, 0, 0, -r * t.x, 0, r, 0, -r * t.y, 0, 0, r, -r * t.z, 0, 0, 0, 1),
            this.applyMatrix(i),
            this
        },
        computeFaceNormals: function() {
            for (var t = new a.Vector3, e = new a.Vector3, r = 0, i = this.faces.length; r < i; r++) {
                var n = this.faces[r]
                  , o = this.vertices[n.a]
                  , s = this.vertices[n.b]
                  , c = this.vertices[n.c];
                t.subVectors(c, s),
                e.subVectors(o, s),
                t.cross(e),
                t.normalize(),
                n.normal.copy(t)
            }
        },
        computeVertexNormals: function(t) {
            void 0 === t && (t = !0);
            var e, r, i, n, o, s;
            for (s = new Array(this.vertices.length),
            e = 0,
            r = this.vertices.length; e < r; e++)
                s[e] = new a.Vector3;
            if (t) {
                var c, h, l, u = new a.Vector3, d = new a.Vector3;
                for (i = 0,
                n = this.faces.length; i < n; i++)
                    o = this.faces[i],
                    c = this.vertices[o.a],
                    h = this.vertices[o.b],
                    l = this.vertices[o.c],
                    u.subVectors(l, h),
                    d.subVectors(c, h),
                    u.cross(d),
                    s[o.a].add(u),
                    s[o.b].add(u),
                    s[o.c].add(u)
            } else
                for (i = 0,
                n = this.faces.length; i < n; i++)
                    o = this.faces[i],
                    s[o.a].add(o.normal),
                    s[o.b].add(o.normal),
                    s[o.c].add(o.normal);
            for (e = 0,
            r = this.vertices.length; e < r; e++)
                s[e].normalize();
            for (i = 0,
            n = this.faces.length; i < n; i++) {
                o = this.faces[i];
                var p = o.vertexNormals;
                3 === p.length ? (p[0].copy(s[o.a]),
                p[1].copy(s[o.b]),
                p[2].copy(s[o.c])) : (p[0] = s[o.a].clone(),
                p[1] = s[o.b].clone(),
                p[2] = s[o.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var t, e, r, i, n;
            for (r = 0,
            i = this.faces.length; r < i; r++)
                for (n = this.faces[r],
                n.__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(),
                n.__originalVertexNormals || (n.__originalVertexNormals = []),
                t = 0,
                e = n.vertexNormals.length; t < e; t++)
                    n.__originalVertexNormals[t] ? n.__originalVertexNormals[t].copy(n.vertexNormals[t]) : n.__originalVertexNormals[t] = n.vertexNormals[t].clone();
            var o = new a.Geometry;
            for (o.faces = this.faces,
            t = 0,
            e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {},
                    this.morphNormals[t].faceNormals = [],
                    this.morphNormals[t].vertexNormals = [];
                    var s, c, h = this.morphNormals[t].faceNormals, l = this.morphNormals[t].vertexNormals;
                    for (r = 0,
                    i = this.faces.length; r < i; r++)
                        s = new a.Vector3,
                        c = {
                            a: new a.Vector3,
                            b: new a.Vector3,
                            c: new a.Vector3
                        },
                        h.push(s),
                        l.push(c)
                }
                var u = this.morphNormals[t];
                o.vertices = this.morphTargets[t].vertices,
                o.computeFaceNormals(),
                o.computeVertexNormals();
                var s, c;
                for (r = 0,
                i = this.faces.length; r < i; r++)
                    n = this.faces[r],
                    s = u.faceNormals[r],
                    c = u.vertexNormals[r],
                    s.copy(n.normal),
                    c.a.copy(n.vertexNormals[0]),
                    c.b.copy(n.vertexNormals[1]),
                    c.c.copy(n.vertexNormals[2])
            }
            for (r = 0,
            i = this.faces.length; r < i; r++)
                n = this.faces[r],
                n.normal = n.__originalFaceNormal,
                n.vertexNormals = n.__originalVertexNormals
        },
        computeTangents: function() {
            console.warn("THREE.Geometry: .computeTangents() has been removed.")
        },
        computeLineDistances: function() {
            for (var t = 0, e = this.vertices, r = 0, i = e.length; r < i; r++)
                r > 0 && (t += e[r].distanceTo(e[r - 1])),
                this.lineDistances[r] = t
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new a.Box3),
            this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new a.Sphere),
            this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(t, e, r) {
            if (t instanceof a.Geometry == !1)
                return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
            var i, n = this.vertices.length, o = this.vertices, s = t.vertices, c = this.faces, h = t.faces, l = this.faceVertexUvs[0], u = t.faceVertexUvs[0];
            void 0 === r && (r = 0),
            void 0 !== e && (i = (new a.Matrix3).getNormalMatrix(e));
            for (var d = 0, p = s.length; d < p; d++) {
                var f = s[d]
                  , m = f.clone();
                void 0 !== e && m.applyMatrix4(e),
                o.push(m)
            }
            for (d = 0,
            p = h.length; d < p; d++) {
                var g, v, y, x = h[d], b = x.vertexNormals, _ = x.vertexColors;
                g = new a.Face3(x.a + n,x.b + n,x.c + n),
                g.normal.copy(x.normal),
                void 0 !== i && g.normal.applyMatrix3(i).normalize();
                for (var M = 0, w = b.length; M < w; M++)
                    v = b[M].clone(),
                    void 0 !== i && v.applyMatrix3(i).normalize(),
                    g.vertexNormals.push(v);
                g.color.copy(x.color);
                for (var M = 0, w = _.length; M < w; M++)
                    y = _[M],
                    g.vertexColors.push(y.clone());
                g.materialIndex = x.materialIndex + r,
                c.push(g)
            }
            for (d = 0,
            p = u.length; d < p; d++) {
                var S = u[d]
                  , E = [];
                if (void 0 !== S) {
                    for (var M = 0, w = S.length; M < w; M++)
                        E.push(S[M].clone());
                    l.push(E)
                }
            }
        },
        mergeMesh: function(t) {
            return t instanceof a.Mesh == !1 ? void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t) : (t.matrixAutoUpdate && t.updateMatrix(),
            void this.merge(t.geometry, t.matrix))
        },
        mergeVertices: function() {
            var t, e, r, i, n, a, o, s, c = {}, h = [], l = [], u = 4, d = Math.pow(10, u);
            for (r = 0,
            i = this.vertices.length; r < i; r++)
                t = this.vertices[r],
                e = Math.round(t.x * d) + "_" + Math.round(t.y * d) + "_" + Math.round(t.z * d),
                void 0 === c[e] ? (c[e] = r,
                h.push(this.vertices[r]),
                l[r] = h.length - 1) : l[r] = l[c[e]];
            var p = [];
            for (r = 0,
            i = this.faces.length; r < i; r++) {
                n = this.faces[r],
                n.a = l[n.a],
                n.b = l[n.b],
                n.c = l[n.c],
                a = [n.a, n.b, n.c];
                for (var f = -1, m = 0; m < 3; m++)
                    if (a[m] === a[(m + 1) % 3]) {
                        f = m,
                        p.push(r);
                        break
                    }
            }
            for (r = p.length - 1; r >= 0; r--) {
                var g = p[r];
                for (this.faces.splice(g, 1),
                o = 0,
                s = this.faceVertexUvs.length; o < s; o++)
                    this.faceVertexUvs[o].splice(g, 1)
            }
            var v = this.vertices.length - h.length;
            return this.vertices = h,
            v
        },
        sortFacesByMaterialIndex: function() {
            function t(t, e) {
                return t.materialIndex - e.materialIndex
            }
            for (var e = this.faces, r = e.length, i = 0; i < r; i++)
                e[i]._id = i;
            e.sort(t);
            var n, a, o = this.faceVertexUvs[0], s = this.faceVertexUvs[1];
            o && o.length === r && (n = []),
            s && s.length === r && (a = []);
            for (var i = 0; i < r; i++) {
                var c = e[i]._id;
                n && n.push(o[c]),
                a && a.push(s[c])
            }
            n && (this.faceVertexUvs[0] = n),
            a && (this.faceVertexUvs[1] = a)
        },
        toJSON: function() {
            function t(t, e, r) {
                return r ? t | 1 << e : t & ~(1 << e)
            }
            function e(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== d[e] ? d[e] : (d[e] = u.length / 3,
                u.push(t.x, t.y, t.z),
                d[e])
            }
            function r(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== f[e] ? f[e] : (f[e] = p.length,
                p.push(t.getHex()),
                f[e])
            }
            function i(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== g[e] ? g[e] : (g[e] = m.length / 2,
                m.push(t.x, t.y),
                g[e])
            }
            var n = {
                metadata: {
                    version: 4.4,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (n.uuid = this.uuid,
            n.type = this.type,
            "" !== this.name && (n.name = this.name),
            void 0 !== this.parameters) {
                var a = this.parameters;
                for (var o in a)
                    void 0 !== a[o] && (n[o] = a[o]);
                return n
            }
            for (var s = [], c = 0; c < this.vertices.length; c++) {
                var h = this.vertices[c];
                s.push(h.x, h.y, h.z)
            }
            for (var l = [], u = [], d = {}, p = [], f = {}, m = [], g = {}, c = 0; c < this.faces.length; c++) {
                var v = this.faces[c]
                  , y = !0
                  , x = !1
                  , b = void 0 !== this.faceVertexUvs[0][c]
                  , _ = v.normal.length() > 0
                  , M = v.vertexNormals.length > 0
                  , w = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b
                  , S = v.vertexColors.length > 0
                  , E = 0;
                if (E = t(E, 0, 0),
                E = t(E, 1, y),
                E = t(E, 2, x),
                E = t(E, 3, b),
                E = t(E, 4, _),
                E = t(E, 5, M),
                E = t(E, 6, w),
                E = t(E, 7, S),
                l.push(E),
                l.push(v.a, v.b, v.c),
                l.push(v.materialIndex),
                b) {
                    var T = this.faceVertexUvs[0][c];
                    l.push(i(T[0]), i(T[1]), i(T[2]))
                }
                if (_ && l.push(e(v.normal)),
                M) {
                    var A = v.vertexNormals;
                    l.push(e(A[0]), e(A[1]), e(A[2]))
                }
                if (w && l.push(r(v.color)),
                S) {
                    var L = v.vertexColors;
                    l.push(r(L[0]), r(L[1]), r(L[2]))
                }
            }
            return n.data = {},
            n.data.vertices = s,
            n.data.normals = u,
            p.length > 0 && (n.data.colors = p),
            m.length > 0 && (n.data.uvs = [m]),
            n.data.faces = l,
            n
        },
        clone: function() {
            return (new a.Geometry).copy(this)
        },
        copy: function(t) {
            this.vertices = [],
            this.faces = [],
            this.faceVertexUvs = [[]];
            for (var e = t.vertices, r = 0, i = e.length; r < i; r++)
                this.vertices.push(e[r].clone());
            for (var n = t.faces, r = 0, i = n.length; r < i; r++)
                this.faces.push(n[r].clone());
            for (var r = 0, i = t.faceVertexUvs.length; r < i; r++) {
                var a = t.faceVertexUvs[r];
                void 0 === this.faceVertexUvs[r] && (this.faceVertexUvs[r] = []);
                for (var o = 0, s = a.length; o < s; o++) {
                    for (var c = a[o], h = [], l = 0, u = c.length; l < u; l++) {
                        var d = c[l];
                        h.push(d.clone())
                    }
                    this.faceVertexUvs[r].push(h)
                }
            }
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    a.GeometryIdCount = 0,
    a.DirectGeometry = function() {
        Object.defineProperty(this, "id", {
            value: a.GeometryIdCount++
        }),
        this.uuid = a.Math.generateUUID(),
        this.name = "",
        this.type = "DirectGeometry",
        this.indices = [],
        this.vertices = [],
        this.normals = [],
        this.colors = [],
        this.uvs = [],
        this.uvs2 = [],
        this.groups = [],
        this.morphTargets = {},
        this.skinWeights = [],
        this.skinIndices = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.verticesNeedUpdate = !1,
        this.normalsNeedUpdate = !1,
        this.colorsNeedUpdate = !1,
        this.uvsNeedUpdate = !1,
        this.groupsNeedUpdate = !1
    }
    ,
    Object.assign(a.DirectGeometry.prototype, a.EventDispatcher.prototype, {
        computeBoundingBox: a.Geometry.prototype.computeBoundingBox,
        computeBoundingSphere: a.Geometry.prototype.computeBoundingSphere,
        computeFaceNormals: function() {
            console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
        },
        computeVertexNormals: function() {
            console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
        },
        computeGroups: function(t) {
            for (var e, r, i = [], n = t.faces, a = 0; a < n.length; a++) {
                var o = n[a];
                o.materialIndex !== r && (r = o.materialIndex,
                void 0 !== e && (e.count = 3 * a - e.start,
                i.push(e)),
                e = {
                    start: 3 * a,
                    materialIndex: r
                })
            }
            void 0 !== e && (e.count = 3 * a - e.start,
            i.push(e)),
            this.groups = i
        },
        fromGeometry: function(t) {
            var e, r = t.faces, i = t.vertices, n = t.faceVertexUvs, o = n[0] && n[0].length > 0, s = n[1] && n[1].length > 0, c = t.morphTargets, h = c.length;
            if (h > 0) {
                e = [];
                for (var l = 0; l < h; l++)
                    e[l] = [];
                this.morphTargets.position = e
            }
            var u, d = t.morphNormals, p = d.length;
            if (p > 0) {
                u = [];
                for (var l = 0; l < p; l++)
                    u[l] = [];
                this.morphTargets.normal = u
            }
            for (var f = t.skinIndices, m = t.skinWeights, g = f.length === i.length, v = m.length === i.length, l = 0; l < r.length; l++) {
                var y = r[l];
                this.vertices.push(i[y.a], i[y.b], i[y.c]);
                var x = y.vertexNormals;
                if (3 === x.length)
                    this.normals.push(x[0], x[1], x[2]);
                else {
                    var b = y.normal;
                    this.normals.push(b, b, b)
                }
                var _ = y.vertexColors;
                if (3 === _.length)
                    this.colors.push(_[0], _[1], _[2]);
                else {
                    var M = y.color;
                    this.colors.push(M, M, M)
                }
                if (o === !0) {
                    var w = n[0][l];
                    void 0 !== w ? this.uvs.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l),
                    this.uvs.push(new a.Vector2, new a.Vector2, new a.Vector2))
                }
                if (s === !0) {
                    var w = n[1][l];
                    void 0 !== w ? this.uvs2.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l),
                    this.uvs2.push(new a.Vector2, new a.Vector2, new a.Vector2))
                }
                for (var S = 0; S < h; S++) {
                    var E = c[S].vertices;
                    e[S].push(E[y.a], E[y.b], E[y.c])
                }
                for (var S = 0; S < p; S++) {
                    var T = d[S].vertexNormals[l];
                    u[S].push(T.a, T.b, T.c)
                }
                g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]),
                v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
            }
            return this.computeGroups(t),
            this.verticesNeedUpdate = t.verticesNeedUpdate,
            this.normalsNeedUpdate = t.normalsNeedUpdate,
            this.colorsNeedUpdate = t.colorsNeedUpdate,
            this.uvsNeedUpdate = t.uvsNeedUpdate,
            this.groupsNeedUpdate = t.groupsNeedUpdate,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    a.BufferGeometry = function() {
        Object.defineProperty(this, "id", {
            value: a.GeometryIdCount++
        }),
        this.uuid = a.Math.generateUUID(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        }
    }
    ,
    Object.assign(a.BufferGeometry.prototype, a.EventDispatcher.prototype, {
        getIndex: function() {
            return this.index
        },
        setIndex: function(t) {
            this.index = t
        },
        addAttribute: function(t, e) {
            return e instanceof a.BufferAttribute == !1 && e instanceof a.InterleavedBufferAttribute == !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
            void this.addAttribute(t, new a.BufferAttribute(arguments[1],arguments[2]))) : "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
            void this.setIndex(e)) : (this.attributes[t] = e,
            this)
        },
        getAttribute: function(t) {
            return this.attributes[t]
        },
        removeAttribute: function(t) {
            return delete this.attributes[t],
            this
        },
        addGroup: function(t, e, r) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: void 0 !== r ? r : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(t, e) {
            this.drawRange.start = t,
            this.drawRange.count = e
        },
        applyMatrix: function(t) {
            var e = this.attributes.position;
            void 0 !== e && (t.applyToVector3Array(e.array),
            e.needsUpdate = !0);
            var r = this.attributes.normal;
            if (void 0 !== r) {
                var i = (new a.Matrix3).getNormalMatrix(t);
                i.applyToVector3Array(r.array),
                r.needsUpdate = !0
            }
            return null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
        },
        rotateX: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new a.Matrix4),
                t.makeRotationX(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateY: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new a.Matrix4),
                t.makeRotationY(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateZ: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new a.Matrix4),
                t.makeRotationZ(e),
                this.applyMatrix(t),
                this
            }
        }(),
        translate: function() {
            var t;
            return function(e, r, i) {
                return void 0 === t && (t = new a.Matrix4),
                t.makeTranslation(e, r, i),
                this.applyMatrix(t),
                this
            }
        }(),
        scale: function() {
            var t;
            return function(e, r, i) {
                return void 0 === t && (t = new a.Matrix4),
                t.makeScale(e, r, i),
                this.applyMatrix(t),
                this
            }
        }(),
        lookAt: function() {
            var t;
            return function(e) {
                void 0 === t && (t = new a.Object3D),
                t.lookAt(e),
                t.updateMatrix(),
                this.applyMatrix(t.matrix)
            }
        }(),
        center: function() {
            this.computeBoundingBox();
            var t = this.boundingBox.center().negate();
            return this.translate(t.x, t.y, t.z),
            t
        },
        setFromObject: function(t) {
            var e = t.geometry;
            if (t instanceof a.Points || t instanceof a.Line) {
                var r = new a.Float32Attribute(3 * e.vertices.length,3)
                  , i = new a.Float32Attribute(3 * e.colors.length,3);
                if (this.addAttribute("position", r.copyVector3sArray(e.vertices)),
                this.addAttribute("color", i.copyColorsArray(e.colors)),
                e.lineDistances && e.lineDistances.length === e.vertices.length) {
                    var n = new a.Float32Attribute(e.lineDistances.length,1);
                    this.addAttribute("lineDistance", n.copyArray(e.lineDistances))
                }
                null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
                null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else
                t instanceof a.Mesh && e instanceof a.Geometry && this.fromGeometry(e);
            return this
        },
        updateFromObject: function(t) {
            var e = t.geometry;
            if (t instanceof a.Mesh) {
                var r = e.__directGeometry;
                if (void 0 === r || e.elementsNeedUpdate === !0)
                    return this.fromGeometry(e);
                r.verticesNeedUpdate = e.verticesNeedUpdate || e.elementsNeedUpdate,
                r.normalsNeedUpdate = e.normalsNeedUpdate || e.elementsNeedUpdate,
                r.colorsNeedUpdate = e.colorsNeedUpdate || e.elementsNeedUpdate,
                r.uvsNeedUpdate = e.uvsNeedUpdate || e.elementsNeedUpdate,
                r.groupsNeedUpdate = e.groupsNeedUpdate || e.elementsNeedUpdate,
                e.elementsNeedUpdate = !1,
                e.verticesNeedUpdate = !1,
                e.normalsNeedUpdate = !1,
                e.colorsNeedUpdate = !1,
                e.uvsNeedUpdate = !1,
                e.groupsNeedUpdate = !1,
                e = r
            }
            var i;
            return e.verticesNeedUpdate === !0 && (i = this.attributes.position,
            void 0 !== i && (i.copyVector3sArray(e.vertices),
            i.needsUpdate = !0),
            e.verticesNeedUpdate = !1),
            e.normalsNeedUpdate === !0 && (i = this.attributes.normal,
            void 0 !== i && (i.copyVector3sArray(e.normals),
            i.needsUpdate = !0),
            e.normalsNeedUpdate = !1),
            e.colorsNeedUpdate === !0 && (i = this.attributes.color,
            void 0 !== i && (i.copyColorsArray(e.colors),
            i.needsUpdate = !0),
            e.colorsNeedUpdate = !1),
            e.uvsNeedUpdate && (i = this.attributes.uv,
            void 0 !== i && (i.copyVector2sArray(e.uvs),
            i.needsUpdate = !0),
            e.uvsNeedUpdate = !1),
            e.lineDistancesNeedUpdate && (i = this.attributes.lineDistance,
            void 0 !== i && (i.copyArray(e.lineDistances),
            i.needsUpdate = !0),
            e.lineDistancesNeedUpdate = !1),
            e.groupsNeedUpdate && (e.computeGroups(t.geometry),
            this.groups = e.groups,
            e.groupsNeedUpdate = !1),
            this
        },
        fromGeometry: function(t) {
            return t.__directGeometry = (new a.DirectGeometry).fromGeometry(t),
            this.fromDirectGeometry(t.__directGeometry)
        },
        fromDirectGeometry: function(t) {
            var e = new Float32Array(3 * t.vertices.length);
            if (this.addAttribute("position", new a.BufferAttribute(e,3).copyVector3sArray(t.vertices)),
            t.normals.length > 0) {
                var r = new Float32Array(3 * t.normals.length);
                this.addAttribute("normal", new a.BufferAttribute(r,3).copyVector3sArray(t.normals))
            }
            if (t.colors.length > 0) {
                var i = new Float32Array(3 * t.colors.length);
                this.addAttribute("color", new a.BufferAttribute(i,3).copyColorsArray(t.colors))
            }
            if (t.uvs.length > 0) {
                var n = new Float32Array(2 * t.uvs.length);
                this.addAttribute("uv", new a.BufferAttribute(n,2).copyVector2sArray(t.uvs))
            }
            if (t.uvs2.length > 0) {
                var o = new Float32Array(2 * t.uvs2.length);
                this.addAttribute("uv2", new a.BufferAttribute(o,2).copyVector2sArray(t.uvs2))
            }
            if (t.indices.length > 0) {
                var s = t.vertices.length > 65535 ? Uint32Array : Uint16Array
                  , c = new s(3 * t.indices.length);
                this.setIndex(new a.BufferAttribute(c,1).copyIndicesArray(t.indices))
            }
            this.groups = t.groups;
            for (var h in t.morphTargets) {
                for (var l = [], u = t.morphTargets[h], d = 0, p = u.length; d < p; d++) {
                    var f = u[d]
                      , m = new a.Float32Attribute(3 * f.length,3);
                    l.push(m.copyVector3sArray(f))
                }
                this.morphAttributes[h] = l
            }
            if (t.skinIndices.length > 0) {
                var g = new a.Float32Attribute(4 * t.skinIndices.length,4);
                this.addAttribute("skinIndex", g.copyVector4sArray(t.skinIndices))
            }
            if (t.skinWeights.length > 0) {
                var v = new a.Float32Attribute(4 * t.skinWeights.length,4);
                this.addAttribute("skinWeight", v.copyVector4sArray(t.skinWeights))
            }
            return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
            this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new a.Box3);
            var t = this.attributes.position.array;
            void 0 !== t ? this.boundingBox.setFromArray(t) : this.boundingBox.makeEmpty(),
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            var t = new a.Box3
              , e = new a.Vector3;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new a.Sphere);
                var r = this.attributes.position;
                if (r) {
                    var i = r.array
                      , n = this.boundingSphere.center;
                    t.setFromArray(i),
                    t.center(n);
                    for (var o = 0, s = 0, c = i.length; s < c; s += 3)
                        e.fromArray(i, s),
                        o = Math.max(o, n.distanceToSquared(e));
                    this.boundingSphere.radius = Math.sqrt(o),
                    isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var t = this.index
              , e = this.attributes
              , r = this.groups;
            if (e.position) {
                var i = e.position.array;
                if (void 0 === e.normal)
                    this.addAttribute("normal", new a.BufferAttribute(new Float32Array(i.length),3));
                else
                    for (var n = e.normal.array, o = 0, s = n.length; o < s; o++)
                        n[o] = 0;
                var c, h, l, u = e.normal.array, d = new a.Vector3, p = new a.Vector3, f = new a.Vector3, m = new a.Vector3, g = new a.Vector3;
                if (t) {
                    var v = t.array;
                    0 === r.length && this.addGroup(0, v.length);
                    for (var y = 0, x = r.length; y < x; ++y)
                        for (var b = r[y], _ = b.start, M = b.count, o = _, s = _ + M; o < s; o += 3)
                            c = 3 * v[o + 0],
                            h = 3 * v[o + 1],
                            l = 3 * v[o + 2],
                            d.fromArray(i, c),
                            p.fromArray(i, h),
                            f.fromArray(i, l),
                            m.subVectors(f, p),
                            g.subVectors(d, p),
                            m.cross(g),
                            u[c] += m.x,
                            u[c + 1] += m.y,
                            u[c + 2] += m.z,
                            u[h] += m.x,
                            u[h + 1] += m.y,
                            u[h + 2] += m.z,
                            u[l] += m.x,
                            u[l + 1] += m.y,
                            u[l + 2] += m.z
                } else
                    for (var o = 0, s = i.length; o < s; o += 9)
                        d.fromArray(i, o),
                        p.fromArray(i, o + 3),
                        f.fromArray(i, o + 6),
                        m.subVectors(f, p),
                        g.subVectors(d, p),
                        m.cross(g),
                        u[o] = m.x,
                        u[o + 1] = m.y,
                        u[o + 2] = m.z,
                        u[o + 3] = m.x,
                        u[o + 4] = m.y,
                        u[o + 5] = m.z,
                        u[o + 6] = m.x,
                        u[o + 7] = m.y,
                        u[o + 8] = m.z;
                this.normalizeNormals(),
                e.normal.needsUpdate = !0
            }
        },
        merge: function(t, e) {
            if (t instanceof a.BufferGeometry == !1)
                return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
            void 0 === e && (e = 0);
            var r = this.attributes;
            for (var i in r)
                if (void 0 !== t.attributes[i])
                    for (var n = r[i], o = n.array, s = t.attributes[i], c = s.array, h = s.itemSize, l = 0, u = h * e; l < c.length; l++,
                    u++)
                        o[u] = c[l];
            return this
        },
        normalizeNormals: function() {
            for (var t, e, r, i, n = this.attributes.normal.array, a = 0, o = n.length; a < o; a += 3)
                t = n[a],
                e = n[a + 1],
                r = n[a + 2],
                i = 1 / Math.sqrt(t * t + e * e + r * r),
                n[a] *= i,
                n[a + 1] *= i,
                n[a + 2] *= i
        },
        toNonIndexed: function() {
            if (null === this.index)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
                this;
            var t = new a.BufferGeometry
              , e = this.index.array
              , r = this.attributes;
            for (var i in r) {
                for (var n = r[i], o = n.array, s = n.itemSize, c = new o.constructor(e.length * s), h = 0, l = 0, u = 0, d = e.length; u < d; u++) {
                    h = e[u] * s;
                    for (var p = 0; p < s; p++)
                        c[l++] = o[h++]
                }
                t.addAttribute(i, new a.BufferAttribute(c,s))
            }
            return t
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.4,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid,
            t.type = this.type,
            "" !== this.name && (t.name = this.name),
            void 0 !== this.parameters) {
                var e = this.parameters;
                for (var r in e)
                    void 0 !== e[r] && (t[r] = e[r]);
                return t
            }
            t.data = {
                attributes: {}
            };
            var i = this.index;
            if (null !== i) {
                var n = Array.prototype.slice.call(i.array);
                t.data.index = {
                    type: i.array.constructor.name,
                    array: n
                }
            }
            var a = this.attributes;
            for (var r in a) {
                var o = a[r]
                  , n = Array.prototype.slice.call(o.array);
                t.data.attributes[r] = {
                    itemSize: o.itemSize,
                    type: o.array.constructor.name,
                    array: n,
                    normalized: o.normalized
                }
            }
            var s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            var c = this.boundingSphere;
            return null !== c && (t.data.boundingSphere = {
                center: c.center.toArray(),
                radius: c.radius
            }),
            t
        },
        clone: function() {
            return (new a.BufferGeometry).copy(this)
        },
        copy: function(t) {
            var e = t.index;
            null !== e && this.setIndex(e.clone());
            var r = t.attributes;
            for (var i in r) {
                var n = r[i];
                this.addAttribute(i, n.clone())
            }
            for (var a = t.groups, o = 0, s = a.length; o < s; o++) {
                var c = a[o];
                this.addGroup(c.start, c.count, c.materialIndex)
            }
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    a.BufferGeometry.MaxIndex = 65535,
    a.InstancedBufferGeometry = function() {
        a.BufferGeometry.call(this),
        this.type = "InstancedBufferGeometry",
        this.maxInstancedCount = void 0
    }
    ,
    a.InstancedBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.InstancedBufferGeometry.prototype.constructor = a.InstancedBufferGeometry,
    a.InstancedBufferGeometry.prototype.addGroup = function(t, e, r) {
        this.groups.push({
            start: t,
            count: e,
            instances: r
        })
    }
    ,
    a.InstancedBufferGeometry.prototype.copy = function(t) {
        var e = t.index;
        null !== e && this.setIndex(e.clone());
        var r = t.attributes;
        for (var i in r) {
            var n = r[i];
            this.addAttribute(i, n.clone())
        }
        for (var a = t.groups, o = 0, s = a.length; o < s; o++) {
            var c = a[o];
            this.addGroup(c.start, c.count, c.instances)
        }
        return this
    }
    ,
    a.Uniform = function(t) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
        t = arguments[1]),
        this.value = t,
        this.dynamic = !1
    }
    ,
    a.Uniform.prototype = {
        constructor: a.Uniform,
        onUpdate: function(t) {
            return this.dynamic = !0,
            this.onUpdateCallback = t,
            this
        }
    },
    a.AnimationAction = function() {
        throw new Error("THREE.AnimationAction: Use mixer.clipAction for construction.")
    }
    ,
    a.AnimationAction._new = function(t, e, r) {
        this._mixer = t,
        this._clip = e,
        this._localRoot = r || null;
        for (var i = e.tracks, n = i.length, o = new Array(n), s = {
            endingStart: a.ZeroCurvatureEnding,
            endingEnd: a.ZeroCurvatureEnding
        }, c = 0; c !== n; ++c) {
            var h = i[c].createInterpolant(null);
            o[c] = h,
            h.settings = s
        }
        this._interpolantSettings = s,
        this._interpolants = o,
        this._propertyBindings = new Array(n),
        this._cacheIndex = null,
        this._byClipCacheIndex = null,
        this._timeScaleInterpolant = null,
        this._weightInterpolant = null,
        this.loop = a.LoopRepeat,
        this._loopCount = -1,
        this._startTime = null,
        this.time = 0,
        this.timeScale = 1,
        this._effectiveTimeScale = 1,
        this.weight = 1,
        this._effectiveWeight = 1,
        this.repetitions = 1 / 0,
        this.paused = !1,
        this.enabled = !0,
        this.clampWhenFinished = !1,
        this.zeroSlopeAtStart = !0,
        this.zeroSlopeAtEnd = !0
    }
    ,
    a.AnimationAction._new.prototype = {
        constructor: a.AnimationAction._new,
        play: function() {
            return this._mixer._activateAction(this),
            this
        },
        stop: function() {
            return this._mixer._deactivateAction(this),
            this.reset()
        },
        reset: function() {
            return this.paused = !1,
            this.enabled = !0,
            this.time = 0,
            this._loopCount = -1,
            this._startTime = null,
            this.stopFading().stopWarping()
        },
        isRunning: function() {
            this._startTime;
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(t) {
            return this._startTime = t,
            this
        },
        setLoop: function(t, e) {
            return this.loop = t,
            this.repetitions = e,
            this
        },
        setEffectiveWeight: function(t) {
            return this.weight = t,
            this._effectiveWeight = this.enabled ? t : 0,
            this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(t) {
            return this._scheduleFading(t, 0, 1)
        },
        fadeOut: function(t) {
            return this._scheduleFading(t, 1, 0)
        },
        crossFadeFrom: function(t, e, r) {
            this._mixer;
            if (t.fadeOut(e),
            this.fadeIn(e),
            r) {
                var i = this._clip.duration
                  , n = t._clip.duration
                  , a = n / i
                  , o = i / n;
                t.warp(1, a, e),
                this.warp(o, 1, e)
            }
            return this
        },
        crossFadeTo: function(t, e, r) {
            return t.crossFadeFrom(this, e, r)
        },
        stopFading: function() {
            var t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        },
        setEffectiveTimeScale: function(t) {
            return this.timeScale = t,
            this._effectiveTimeScale = this.paused ? 0 : t,
            this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(t) {
            return this.timeScale = this._clip.duration / t,
            this.stopWarping()
        },
        syncWith: function(t) {
            return this.time = t.time,
            this.timeScale = t.timeScale,
            this.stopWarping()
        },
        halt: function(t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        },
        warp: function(t, e, r) {
            var i = this._mixer
              , n = i.time
              , a = this._timeScaleInterpolant
              , o = this.timeScale;
            null === a && (a = i._lendControlInterpolant(),
            this._timeScaleInterpolant = a);
            var s = a.parameterPositions
              , c = a.sampleValues;
            return s[0] = n,
            s[1] = n + r,
            c[0] = t / o,
            c[1] = e / o,
            this
        },
        stopWarping: function() {
            var t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(t, e, r, i) {
            var n = this._startTime;
            if (null !== n) {
                var a = (t - n) * r;
                if (a < 0 || 0 === r)
                    return;
                this._startTime = null,
                e = r * a
            }
            e *= this._updateTimeScale(t);
            var o = this._updateTime(e)
              , s = this._updateWeight(t);
            if (s > 0)
                for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l)
                    c[l].evaluate(o),
                    h[l].accumulate(i, s)
        },
        _updateWeight: function(t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var r = this._weightInterpolant;
                if (null !== r) {
                    var i = r.evaluate(t)[0];
                    e *= i,
                    t > r.parameterPositions[1] && (this.stopFading(),
                    0 === i && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e,
            e
        },
        _updateTimeScale: function(t) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var r = this._timeScaleInterpolant;
                if (null !== r) {
                    var i = r.evaluate(t)[0];
                    e *= i,
                    t > r.parameterPositions[1] && (this.stopWarping(),
                    0 === e ? this.paused = !0 : this.timeScale = e)
                }
            }
            return this._effectiveTimeScale = e,
            e
        },
        _updateTime: function(t) {
            var e = this.time + t;
            if (0 === t)
                return e;
            var r = this._clip.duration
              , i = this.loop
              , n = this._loopCount;
            if (i === a.LoopOnce) {
                n === -1 && (this.loopCount = 0,
                this._setEndings(!0, !0, !1));
                t: {
                    if (e >= r)
                        e = r;
                    else {
                        if (!(e < 0))
                            break t;
                        e = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    })
                }
            } else {
                var o = i === a.LoopPingPong;
                if (n === -1 && (t >= 0 ? (n = 0,
                this._setEndings(!0, 0 === this.repetitions, o)) : this._setEndings(0 === this.repetitions, !0, o)),
                e >= r || e < 0) {
                    var s = Math.floor(e / r);
                    e -= r * s,
                    n += Math.abs(s);
                    var c = this.repetitions - n;
                    if (c < 0)
                        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                        e = t > 0 ? r : 0,
                        this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: t > 0 ? 1 : -1
                        });
                    else {
                        if (0 === c) {
                            var h = t < 0;
                            this._setEndings(h, !h, o)
                        } else
                            this._setEndings(!1, !1, o);
                        this._loopCount = n,
                        this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: s
                        })
                    }
                }
                if (o && 1 === (1 & n))
                    return this.time = e,
                    r - e
            }
            return this.time = e,
            e
        },
        _setEndings: function(t, e, r) {
            var i = this._interpolantSettings;
            r ? (i.endingStart = a.ZeroSlopeEnding,
            i.endingEnd = a.ZeroSlopeEnding) : (t ? i.endingStart = this.zeroSlopeAtStart ? a.ZeroSlopeEnding : a.ZeroCurvatureEnding : i.endingStart = a.WrapAroundEnding,
            e ? i.endingEnd = this.zeroSlopeAtEnd ? a.ZeroSlopeEnding : a.ZeroCurvatureEnding : i.endingEnd = a.WrapAroundEnding)
        },
        _scheduleFading: function(t, e, r) {
            var i = this._mixer
              , n = i.time
              , a = this._weightInterpolant;
            null === a && (a = i._lendControlInterpolant(),
            this._weightInterpolant = a);
            var o = a.parameterPositions
              , s = a.sampleValues;
            return o[0] = n,
            s[0] = e,
            o[1] = n + t,
            s[1] = r,
            this
        }
    },
    a.AnimationClip = function(t, e, r) {
        this.name = t,
        this.tracks = r,
        this.duration = void 0 !== e ? e : -1,
        this.uuid = a.Math.generateUUID(),
        this.duration < 0 && this.resetDuration(),
        this.trim(),
        this.optimize()
    }
    ,
    a.AnimationClip.prototype = {
        constructor: a.AnimationClip,
        resetDuration: function() {
            for (var t = this.tracks, e = 0, r = 0, i = t.length; r !== i; ++r) {
                var n = this.tracks[r];
                e = Math.max(e, n.times[n.times.length - 1])
            }
            this.duration = e
        },
        trim: function() {
            for (var t = 0; t < this.tracks.length; t++)
                this.tracks[t].trim(0, this.duration);
            return this
        },
        optimize: function() {
            for (var t = 0; t < this.tracks.length; t++)
                this.tracks[t].optimize();
            return this
        }
    },
    Object.assign(a.AnimationClip, {
        parse: function(t) {
            for (var e = [], r = t.tracks, i = 1 / (t.fps || 1), n = 0, o = r.length; n !== o; ++n)
                e.push(a.KeyframeTrack.parse(r[n]).scale(i));
            return new a.AnimationClip(t.name,t.duration,e)
        },
        toJSON: function(t) {
            for (var e = [], r = t.tracks, i = {
                name: t.name,
                duration: t.duration,
                tracks: e
            }, n = 0, o = r.length; n !== o; ++n)
                e.push(a.KeyframeTrack.toJSON(r[n]));
            return i
        },
        CreateFromMorphTargetSequence: function(t, e, r, i) {
            for (var n = e.length, o = [], s = 0; s < n; s++) {
                var c = []
                  , h = [];
                c.push((s + n - 1) % n, s, (s + 1) % n),
                h.push(0, 1, 0);
                var l = a.AnimationUtils.getKeyframeOrder(c);
                c = a.AnimationUtils.sortedArray(c, 1, l),
                h = a.AnimationUtils.sortedArray(h, 1, l),
                i || 0 !== c[0] || (c.push(n),
                h.push(h[0])),
                o.push(new a.NumberKeyframeTrack(".morphTargetInfluences[" + e[s].name + "]",c,h).scale(1 / r))
            }
            return new a.AnimationClip(t,-1,o)
        },
        findByName: function(t, e) {
            var r = t;
            if (!Array.isArray(t)) {
                var i = t;
                r = i.geometry && i.geometry.animations || i.animations
            }
            for (var n = 0; n < r.length; n++)
                if (r[n].name === e)
                    return r[n];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(t, e, r) {
            for (var i = {}, n = /^([\w-]*?)([\d]+)$/, o = 0, s = t.length; o < s; o++) {
                var c = t[o]
                  , h = c.name.match(n);
                if (h && h.length > 1) {
                    var l = h[1]
                      , u = i[l];
                    u || (i[l] = u = []),
                    u.push(c)
                }
            }
            var d = [];
            for (var l in i)
                d.push(a.AnimationClip.CreateFromMorphTargetSequence(l, i[l], e, r));
            return d
        },
        parseAnimation: function(t, e, r) {
            if (!t)
                return console.error("  no animation in JSONLoader data"),
                null;
            for (var i = function(t, e, r, i, n) {
                if (0 !== r.length) {
                    var o = []
                      , s = [];
                    a.AnimationUtils.flattenJSON(r, o, s, i),
                    0 !== o.length && n.push(new t(e,o,s))
                }
            }, n = [], o = t.name || "default", s = t.length || -1, c = t.fps || 30, h = t.hierarchy || [], l = 0; l < h.length; l++) {
                var u = h[l].keys;
                if (u && 0 !== u.length)
                    if (u[0].morphTargets) {
                        for (var d = {}, p = 0; p < u.length; p++)
                            if (u[p].morphTargets)
                                for (var f = 0; f < u[p].morphTargets.length; f++)
                                    d[u[p].morphTargets[f]] = -1;
                        for (var m in d) {
                            for (var g = [], v = [], f = 0; f !== u[p].morphTargets.length; ++f) {
                                var y = u[p];
                                g.push(y.time),
                                v.push(y.morphTarget === m ? 1 : 0)
                            }
                            n.push(new a.NumberKeyframeTrack(".morphTargetInfluence[" + m + "]",g,v))
                        }
                        s = d.length * (c || 1)
                    } else {
                        var x = ".bones[" + e[l].name + "]";
                        i(a.VectorKeyframeTrack, x + ".position", u, "pos", n),
                        i(a.QuaternionKeyframeTrack, x + ".quaternion", u, "rot", n),
                        i(a.VectorKeyframeTrack, x + ".scale", u, "scl", n)
                    }
            }
            if (0 === n.length)
                return null;
            var b = new a.AnimationClip(o,s,n);
            return b
        }
    }),
    a.AnimationMixer = function(t) {
        this._root = t,
        this._initMemoryManager(),
        this._accuIndex = 0,
        this.time = 0,
        this.timeScale = 1
    }
    ,
    Object.assign(a.AnimationMixer.prototype, a.EventDispatcher.prototype, {
        clipAction: function(t, e) {
            var r = e || this._root
              , i = r.uuid
              , n = "string" == typeof t ? a.AnimationClip.findByName(r, t) : t
              , o = null !== n ? n.uuid : t
              , s = this._actionsByClip[o]
              , c = null;
            if (void 0 !== s) {
                var h = s.actionByRoot[i];
                if (void 0 !== h)
                    return h;
                c = s.knownActions[0],
                null === n && (n = c._clip)
            }
            if (null === n)
                return null;
            var l = new a.AnimationMixer._Action(this,n,e);
            return this._bindAction(l, c),
            this._addInactiveAction(l, o, i),
            l
        },
        existingAction: function(t, e) {
            var r = e || this._root
              , i = r.uuid
              , n = "string" == typeof t ? a.AnimationClip.findByName(r, t) : t
              , o = n ? n.uuid : t
              , s = this._actionsByClip[o];
            return void 0 !== s ? s.actionByRoot[i] || null : null
        },
        stopAllAction: function() {
            var t = this._actions
              , e = this._nActiveActions
              , r = this._bindings
              , i = this._nActiveBindings;
            this._nActiveActions = 0,
            this._nActiveBindings = 0;
            for (var n = 0; n !== e; ++n)
                t[n].reset();
            for (var n = 0; n !== i; ++n)
                r[n].useCount = 0;
            return this
        },
        update: function(t) {
            t *= this.timeScale;
            for (var e = this._actions, r = this._nActiveActions, i = this.time += t, n = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== r; ++o) {
                var s = e[o];
                s.enabled && s._update(i, t, n, a)
            }
            for (var c = this._bindings, h = this._nActiveBindings, o = 0; o !== h; ++o)
                c[o].apply(a);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(t) {
            var e = this._actions
              , r = t.uuid
              , i = this._actionsByClip
              , n = i[r];
            if (void 0 !== n) {
                for (var a = n.knownActions, o = 0, s = a.length; o !== s; ++o) {
                    var c = a[o];
                    this._deactivateAction(c);
                    var h = c._cacheIndex
                      , l = e[e.length - 1];
                    c._cacheIndex = null,
                    c._byClipCacheIndex = null,
                    l._cacheIndex = h,
                    e[h] = l,
                    e.pop(),
                    this._removeInactiveBindingsForAction(c)
                }
                delete i[r]
            }
        },
        uncacheRoot: function(t) {
            var e = t.uuid
              , r = this._actionsByClip;
            for (var i in r) {
                var n = r[i].actionByRoot
                  , a = n[e];
                void 0 !== a && (this._deactivateAction(a),
                this._removeInactiveAction(a))
            }
            var o = this._bindingsByRootAndName
              , s = o[e];
            if (void 0 !== s)
                for (var c in s) {
                    var h = s[c];
                    h.restoreOriginalState(),
                    this._removeInactiveBinding(h)
                }
        },
        uncacheAction: function(t, e) {
            var r = this.existingAction(t, e);
            null !== r && (this._deactivateAction(r),
            this._removeInactiveAction(r))
        }
    }),
    a.AnimationMixer._Action = a.AnimationAction._new,
    Object.assign(a.AnimationMixer.prototype, {
        _bindAction: function(t, e) {
            var r = t._localRoot || this._root
              , i = t._clip.tracks
              , n = i.length
              , o = t._propertyBindings
              , s = t._interpolants
              , c = r.uuid
              , h = this._bindingsByRootAndName
              , l = h[c];
            void 0 === l && (l = {},
            h[c] = l);
            for (var u = 0; u !== n; ++u) {
                var d = i[u]
                  , p = d.name
                  , f = l[p];
                if (void 0 !== f)
                    o[u] = f;
                else {
                    if (f = o[u],
                    void 0 !== f) {
                        null === f._cacheIndex && (++f.referenceCount,
                        this._addInactiveBinding(f, c, p));
                        continue
                    }
                    var m = e && e._propertyBindings[u].binding.parsedPath;
                    f = new a.PropertyMixer(a.PropertyBinding.create(r, p, m),d.ValueTypeName,d.getValueSize()),
                    ++f.referenceCount,
                    this._addInactiveBinding(f, c, p),
                    o[u] = f
                }
                s[u].resultBuffer = f.buffer
            }
        },
        _activateAction: function(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid
                      , r = t._clip.uuid
                      , i = this._actionsByClip[r];
                    this._bindAction(t, i && i.knownActions[0]),
                    this._addInactiveAction(t, r, e)
                }
                for (var n = t._propertyBindings, a = 0, o = n.length; a !== o; ++a) {
                    var s = n[a];
                    0 === s.useCount++ && (this._lendBinding(s),
                    s.saveOriginalState())
                }
                this._lendAction(t)
            }
        },
        _deactivateAction: function(t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, r = 0, i = e.length; r !== i; ++r) {
                    var n = e[r];
                    0 === --n.useCount && (n.restoreOriginalState(),
                    this._takeBackBinding(n))
                }
                this._takeBackAction(t)
            }
        },
        _initMemoryManager: function() {
            this._actions = [],
            this._nActiveActions = 0,
            this._actionsByClip = {},
            this._bindings = [],
            this._nActiveBindings = 0,
            this._bindingsByRootAndName = {},
            this._controlInterpolants = [],
            this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    },
                    get inUse() {
                        return t._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return t._bindings.length
                    },
                    get inUse() {
                        return t._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    },
                    get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(t) {
            var e = t._cacheIndex;
            return null !== e && e < this._nActiveActions
        },
        _addInactiveAction: function(t, e, r) {
            var i = this._actions
              , n = this._actionsByClip
              , a = n[e];
            if (void 0 === a)
                a = {
                    knownActions: [t],
                    actionByRoot: {}
                },
                t._byClipCacheIndex = 0,
                n[e] = a;
            else {
                var o = a.knownActions;
                t._byClipCacheIndex = o.length,
                o.push(t)
            }
            t._cacheIndex = i.length,
            i.push(t),
            a.actionByRoot[r] = t
        },
        _removeInactiveAction: function(t) {
            var e = this._actions
              , r = e[e.length - 1]
              , i = t._cacheIndex;
            r._cacheIndex = i,
            e[i] = r,
            e.pop(),
            t._cacheIndex = null;
            var n = t._clip.uuid
              , a = this._actionsByClip
              , o = a[n]
              , s = o.knownActions
              , c = s[s.length - 1]
              , h = t._byClipCacheIndex;
            c._byClipCacheIndex = h,
            s[h] = c,
            s.pop(),
            t._byClipCacheIndex = null;
            var l = o.actionByRoot
              , u = (e._localRoot || this._root).uuid;
            delete l[u],
            0 === s.length && delete a[n],
            this._removeInactiveBindingsForAction(t)
        },
        _removeInactiveBindingsForAction: function(t) {
            for (var e = t._propertyBindings, r = 0, i = e.length; r !== i; ++r) {
                var n = e[r];
                0 === --n.referenceCount && this._removeInactiveBinding(n)
            }
        },
        _lendAction: function(t) {
            var e = this._actions
              , r = t._cacheIndex
              , i = this._nActiveActions++
              , n = e[i];
            t._cacheIndex = i,
            e[i] = t,
            n._cacheIndex = r,
            e[r] = n
        },
        _takeBackAction: function(t) {
            var e = this._actions
              , r = t._cacheIndex
              , i = --this._nActiveActions
              , n = e[i];
            t._cacheIndex = i,
            e[i] = t,
            n._cacheIndex = r,
            e[r] = n
        },
        _addInactiveBinding: function(t, e, r) {
            var i = this._bindingsByRootAndName
              , n = i[e]
              , a = this._bindings;
            void 0 === n && (n = {},
            i[e] = n),
            n[r] = t,
            t._cacheIndex = a.length,
            a.push(t)
        },
        _removeInactiveBinding: function(t) {
            var e = this._bindings
              , r = t.binding
              , i = r.rootNode.uuid
              , n = r.path
              , a = this._bindingsByRootAndName
              , o = a[i]
              , s = e[e.length - 1]
              , c = t._cacheIndex;
            s._cacheIndex = c,
            e[c] = s,
            e.pop(),
            delete o[n];
            t: {
                for (var h in o)
                    break t;
                delete a[i]
            }
        },
        _lendBinding: function(t) {
            var e = this._bindings
              , r = t._cacheIndex
              , i = this._nActiveBindings++
              , n = e[i];
            t._cacheIndex = i,
            e[i] = t,
            n._cacheIndex = r,
            e[r] = n
        },
        _takeBackBinding: function(t) {
            var e = this._bindings
              , r = t._cacheIndex
              , i = --this._nActiveBindings
              , n = e[i];
            t._cacheIndex = i,
            e[i] = t,
            n._cacheIndex = r,
            e[r] = n
        },
        _lendControlInterpolant: function() {
            var t = this._controlInterpolants
              , e = this._nActiveControlInterpolants++
              , r = t[e];
            return void 0 === r && (r = new a.LinearInterpolant(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
            r.__cacheIndex = e,
            t[e] = r),
            r
        },
        _takeBackControlInterpolant: function(t) {
            var e = this._controlInterpolants
              , r = t.__cacheIndex
              , i = --this._nActiveControlInterpolants
              , n = e[i];
            t.__cacheIndex = i,
            e[i] = t,
            n.__cacheIndex = r,
            e[r] = n
        },
        _controlInterpolantsResultBuffer: new Float32Array(1)
    }),
    a.AnimationObjectGroup = function(t) {
        this.uuid = a.Math.generateUUID(),
        this._objects = Array.prototype.slice.call(arguments),
        this.nCachedObjects_ = 0;
        var e = {};
        this._indicesByUUID = e;
        for (var r = 0, i = arguments.length; r !== i; ++r)
            e[arguments[r].uuid] = r;
        this._paths = [],
        this._parsedPaths = [],
        this._bindings = [],
        this._bindingsIndicesByPath = {};
        var n = this;
        this.stats = {
            objects: {
                get total() {
                    return n._objects.length
                },
                get inUse() {
                    return this.total - n.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return n._bindings.length
            }
        }
    }
    ,
    a.AnimationObjectGroup.prototype = {
        constructor: a.AnimationObjectGroup,
        add: function(t) {
            for (var e = this._objects, r = e.length, i = this.nCachedObjects_, n = this._indicesByUUID, o = this._paths, s = this._parsedPaths, c = this._bindings, h = c.length, l = 0, u = arguments.length; l !== u; ++l) {
                var d = arguments[l]
                  , p = d.uuid
                  , f = n[p];
                if (void 0 === f) {
                    f = r++,
                    n[p] = f,
                    e.push(d);
                    for (var m = 0, g = h; m !== g; ++m)
                        c[m].push(new a.PropertyBinding(d,o[m],s[m]))
                } else if (f < i) {
                    var v = e[f]
                      , y = --i
                      , x = e[y];
                    n[x.uuid] = f,
                    e[f] = x,
                    n[p] = y,
                    e[y] = d;
                    for (var m = 0, g = h; m !== g; ++m) {
                        var b = c[m]
                          , _ = b[y]
                          , M = b[f];
                        b[f] = _,
                        void 0 === M && (M = new a.PropertyBinding(d,o[m],s[m])),
                        b[y] = M
                    }
                } else
                    e[f] !== v && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
            }
            this.nCachedObjects_ = i
        },
        remove: function(t) {
            for (var e = this._objects, r = (e.length,
            this.nCachedObjects_), i = this._indicesByUUID, n = this._bindings, a = n.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o]
                  , h = c.uuid
                  , l = i[h];
                if (void 0 !== l && l >= r) {
                    var u = r++
                      , d = e[u];
                    i[d.uuid] = l,
                    e[l] = d,
                    i[h] = u,
                    e[u] = c;
                    for (var p = 0, f = a; p !== f; ++p) {
                        var m = n[p]
                          , g = m[u]
                          , v = m[l];
                        m[l] = g,
                        m[u] = v
                    }
                }
            }
            this.nCachedObjects_ = r
        },
        uncache: function(t) {
            for (var e = this._objects, r = e.length, i = this.nCachedObjects_, n = this._indicesByUUID, a = this._bindings, o = a.length, s = 0, c = arguments.length; s !== c; ++s) {
                var h = arguments[s]
                  , l = h.uuid
                  , u = n[l];
                if (void 0 !== u)
                    if (delete n[l],
                    u < i) {
                        var d = --i
                          , p = e[d]
                          , f = --r
                          , m = e[f];
                        n[p.uuid] = u,
                        e[u] = p,
                        n[m.uuid] = d,
                        e[d] = m,
                        e.pop();
                        for (var g = 0, v = o; g !== v; ++g) {
                            var y = a[g]
                              , x = y[d]
                              , b = y[f];
                            y[u] = x,
                            y[d] = b,
                            y.pop()
                        }
                    } else {
                        var f = --r
                          , m = e[f];
                        n[m.uuid] = u,
                        e[u] = m,
                        e.pop();
                        for (var g = 0, v = o; g !== v; ++g) {
                            var y = a[g];
                            y[u] = y[f],
                            y.pop()
                        }
                    }
            }
            this.nCachedObjects_ = i
        },
        subscribe_: function(t, e) {
            var r = this._bindingsIndicesByPath
              , i = r[t]
              , n = this._bindings;
            if (void 0 !== i)
                return n[i];
            var o = this._paths
              , s = this._parsedPaths
              , c = this._objects
              , h = c.length
              , l = this.nCachedObjects_
              , u = new Array(h);
            i = n.length,
            r[t] = i,
            o.push(t),
            s.push(e),
            n.push(u);
            for (var d = l, p = c.length; d !== p; ++d) {
                var f = c[d];
                u[d] = new a.PropertyBinding(f,t,e)
            }
            return u
        },
        unsubscribe_: function(t) {
            var e = this._bindingsIndicesByPath
              , r = e[t];
            if (void 0 !== r) {
                var i = this._paths
                  , n = this._parsedPaths
                  , a = this._bindings
                  , o = a.length - 1
                  , s = a[o]
                  , c = t[o];
                e[c] = r,
                a[r] = s,
                a.pop(),
                n[r] = n[o],
                n.pop(),
                i[r] = i[o],
                i.pop()
            }
        }
    },
    a.AnimationUtils = {
        arraySlice: function(t, e, r) {
            return a.AnimationUtils.isTypedArray(t) ? new t.constructor(t.subarray(e, r)) : t.slice(e, r)
        },
        convertArray: function(t, e, r) {
            return !t || !r && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(t) {
            function e(e, r) {
                return t[e] - t[r]
            }
            for (var r = t.length, i = new Array(r), n = 0; n !== r; ++n)
                i[n] = n;
            return i.sort(e),
            i
        },
        sortedArray: function(t, e, r) {
            for (var i = t.length, n = new t.constructor(i), a = 0, o = 0; o !== i; ++a)
                for (var s = r[a] * e, c = 0; c !== e; ++c)
                    n[o++] = t[s + c];
            return n
        },
        flattenJSON: function(t, e, r, i) {
            for (var n = 1, a = t[0]; void 0 !== a && void 0 === a[i]; )
                a = t[n++];
            if (void 0 !== a) {
                var o = a[i];
                if (void 0 !== o)
                    if (Array.isArray(o)) {
                        do
                            o = a[i],
                            void 0 !== o && (e.push(a.time),
                            r.push.apply(r, o)),
                            a = t[n++];
                        while (void 0 !== a)
                    } else if (void 0 !== o.toArray) {
                        do
                            o = a[i],
                            void 0 !== o && (e.push(a.time),
                            o.toArray(r, r.length)),
                            a = t[n++];
                        while (void 0 !== a)
                    } else
                        do
                            o = a[i],
                            void 0 !== o && (e.push(a.time),
                            r.push(o)),
                            a = t[n++];
                        while (void 0 !== a)
            }
        }
    },
    a.KeyframeTrack = function(t, e, r, i) {
        if (void 0 === t)
            throw new Error("track name is undefined");
        if (void 0 === e || 0 === e.length)
            throw new Error("no keyframes in track named " + t);
        this.name = t,
        this.times = a.AnimationUtils.convertArray(e, this.TimeBufferType),
        this.values = a.AnimationUtils.convertArray(r, this.ValueBufferType),
        this.setInterpolation(i || this.DefaultInterpolation),
        this.validate(),
        this.optimize()
    }
    ,
    a.KeyframeTrack.prototype = {
        constructor: a.KeyframeTrack,
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: a.InterpolateLinear,
        InterpolantFactoryMethodDiscrete: function(t) {
            return new a.DiscreteInterpolant(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodLinear: function(t) {
            return new a.LinearInterpolant(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodSmooth: function(t) {
            return new a.CubicInterpolant(this.times,this.values,this.getValueSize(),t)
        },
        setInterpolation: function(t) {
            var e;
            switch (t) {
            case a.InterpolateDiscrete:
                e = this.InterpolantFactoryMethodDiscrete;
                break;
            case a.InterpolateLinear:
                e = this.InterpolantFactoryMethodLinear;
                break;
            case a.InterpolateSmooth:
                e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === e) {
                var r = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation)
                        throw new Error(r);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return void console.warn(r)
            }
            this.createInterpolant = e
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return a.InterpolateDiscrete;
            case this.InterpolantFactoryMethodLinear:
                return a.InterpolateLinear;
            case this.InterpolantFactoryMethodSmooth:
                return a.InterpolateSmooth
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(t) {
            if (0 !== t)
                for (var e = this.times, r = 0, i = e.length; r !== i; ++r)
                    e[r] += t;
            return this
        },
        scale: function(t) {
            if (1 !== t)
                for (var e = this.times, r = 0, i = e.length; r !== i; ++r)
                    e[r] *= t;
            return this
        },
        trim: function(t, e) {
            for (var r = this.times, i = r.length, n = 0, o = i - 1; n !== i && r[n] < t; )
                ++n;
            for (; o !== -1 && r[o] > e; )
                --o;
            if (++o,
            0 !== n || o !== i) {
                n >= o && (o = Math.max(o, 1),
                n = o - 1);
                var s = this.getValueSize();
                this.times = a.AnimationUtils.arraySlice(r, n, o),
                this.values = a.AnimationUtils.arraySlice(this.values, n * s, o * s)
            }
            return this
        },
        validate: function() {
            var t = !0
              , e = this.getValueSize();
            e - Math.floor(e) !== 0 && (console.error("invalid value size in track", this),
            t = !1);
            var r = this.times
              , i = this.values
              , n = r.length;
            0 === n && (console.error("track is empty", this),
            t = !1);
            for (var o = null, s = 0; s !== n; s++) {
                var c = r[s];
                if ("number" == typeof c && isNaN(c)) {
                    console.error("time is not a valid number", this, s, c),
                    t = !1;
                    break
                }
                if (null !== o && o > c) {
                    console.error("out of order keys", this, s, c, o),
                    t = !1;
                    break
                }
                o = c
            }
            if (void 0 !== i && a.AnimationUtils.isTypedArray(i))
                for (var s = 0, h = i.length; s !== h; ++s) {
                    var l = i[s];
                    if (isNaN(l)) {
                        console.error("value is not a valid number", this, s, l),
                        t = !1;
                        break
                    }
                }
            return t
        },
        optimize: function() {
            for (var t = this.times, e = this.values, r = this.getValueSize(), i = 1, n = 1, o = t.length - 1; n <= o; ++n) {
                var s = !1
                  , c = t[n]
                  , h = t[n + 1];
                if (c !== h && (1 !== n || c !== c[0]))
                    for (var l = n * r, u = l - r, d = l + r, p = 0; p !== r; ++p) {
                        var f = e[l + p];
                        if (f !== e[u + p] || f !== e[d + p]) {
                            s = !0;
                            break
                        }
                    }
                if (s) {
                    if (n !== i) {
                        t[i] = t[n];
                        for (var m = n * r, g = i * r, p = 0; p !== r; ++p)
                            e[g + p] = e[m + p]
                    }
                    ++i
                }
            }
            return i !== t.length && (this.times = a.AnimationUtils.arraySlice(t, 0, i),
            this.values = a.AnimationUtils.arraySlice(e, 0, i * r)),
            this
        }
    },
    Object.assign(a.KeyframeTrack, {
        parse: function(t) {
            if (void 0 === t.type)
                throw new Error("track type undefined, can not parse");
            var e = a.KeyframeTrack._getTrackTypeForValueTypeName(t.type);
            if (void 0 === t.times) {
                var r = []
                  , i = [];
                a.AnimationUtils.flattenJSON(t.keys, r, i, "value"),
                t.times = r,
                t.values = i
            }
            return void 0 !== e.parse ? e.parse(t) : new e(t.name,t.times,t.values,t.interpolation)
        },
        toJSON: function(t) {
            var e, r = t.constructor;
            if (void 0 !== r.toJSON)
                e = r.toJSON(t);
            else {
                e = {
                    name: t.name,
                    times: a.AnimationUtils.convertArray(t.times, Array),
                    values: a.AnimationUtils.convertArray(t.values, Array)
                };
                var i = t.getInterpolation();
                i !== t.DefaultInterpolation && (e.interpolation = i)
            }
            return e.type = t.ValueTypeName,
            e
        },
        _getTrackTypeForValueTypeName: function(t) {
            switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return a.NumberKeyframeTrack;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return a.VectorKeyframeTrack;
            case "color":
                return a.ColorKeyframeTrack;
            case "quaternion":
                return a.QuaternionKeyframeTrack;
            case "bool":
            case "boolean":
                return a.BooleanKeyframeTrack;
            case "string":
                return a.StringKeyframeTrack
            }
            throw new Error("Unsupported typeName: " + t)
        }
    }),
    a.PropertyBinding = function(t, e, r) {
        this.path = e,
        this.parsedPath = r || a.PropertyBinding.parseTrackName(e),
        this.node = a.PropertyBinding.findNode(t, this.parsedPath.nodeName) || t,
        this.rootNode = t
    }
    ,
    a.PropertyBinding.prototype = {
        constructor: a.PropertyBinding,
        getValue: function(t, e) {
            this.bind(),
            this.getValue(t, e)
        },
        setValue: function(t, e) {
            this.bind(),
            this.setValue(t, e)
        },
        bind: function() {
            var t = this.node
              , e = this.parsedPath
              , r = e.objectName
              , i = e.propertyName
              , n = e.propertyIndex;
            if (t || (t = a.PropertyBinding.findNode(this.rootNode, e.nodeName) || this.rootNode,
            this.node = t),
            this.getValue = this._getValue_unavailable,
            this.setValue = this._setValue_unavailable,
            !t)
                return void console.error("  trying to update node for track: " + this.path + " but it wasn't found.");
            if (r) {
                var o = e.objectIndex;
                switch (r) {
                case "materials":
                    if (!t.material)
                        return void console.error("  can not bind to material as node does not have a material", this);
                    if (!t.material.materials)
                        return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                    t = t.material.materials;
                    break;
                case "bones":
                    if (!t.skeleton)
                        return void console.error("  can not bind to bones as node does not have a skeleton", this);
                    t = t.skeleton.bones;
                    for (var s = 0; s < t.length; s++)
                        if (t[s].name === o) {
                            o = s;
                            break
                        }
                    break;
                default:
                    if (void 0 === t[r])
                        return void console.error("  can not bind to objectName of node, undefined", this);
                    t = t[r]
                }
                if (void 0 !== o) {
                    if (void 0 === t[o])
                        return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, t);
                    t = t[o]
                }
            }
            var c = t[i];
            if (void 0 === c) {
                var h = e.nodeName;
                return void console.error("  trying to update property for track: " + h + "." + i + " but it wasn't found.", t)
            }
            var l = this.Versioning.None;
            void 0 !== t.needsUpdate ? (l = this.Versioning.NeedsUpdate,
            this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (l = this.Versioning.MatrixWorldNeedsUpdate,
            this.targetObject = t);
            var u = this.BindingType.Direct;
            if (void 0 !== n) {
                if ("morphTargetInfluences" === i) {
                    if (!t.geometry)
                        return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                    if (!t.geometry.morphTargets)
                        return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                    for (var s = 0; s < this.node.geometry.morphTargets.length; s++)
                        if (t.geometry.morphTargets[s].name === n) {
                            n = s;
                            break
                        }
                }
                u = this.BindingType.ArrayElement,
                this.resolvedProperty = c,
                this.propertyIndex = n
            } else
                void 0 !== c.fromArray && void 0 !== c.toArray ? (u = this.BindingType.HasFromToArray,
                this.resolvedProperty = c) : void 0 !== c.length ? (u = this.BindingType.EntireArray,
                this.resolvedProperty = c) : this.propertyName = i;
            this.getValue = this.GetterByBindingType[u],
            this.setValue = this.SetterByBindingTypeAndVersioning[u][l]
        },
        unbind: function() {
            this.node = null,
            this.getValue = this._getValue_unbound,
            this.setValue = this._setValue_unbound
        }
    },
    Object.assign(a.PropertyBinding.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        _getValue_unbound: a.PropertyBinding.prototype.getValue,
        _setValue_unbound: a.PropertyBinding.prototype.setValue,
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(t, e) {
            t[e] = this.node[this.propertyName]
        }
        , function(t, e) {
            for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i)
                t[e++] = r[i]
        }
        , function(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }
        , function(t, e) {
            this.resolvedProperty.toArray(t, e)
        }
        ],
        SetterByBindingTypeAndVersioning: [[function(t, e) {
            this.node[this.propertyName] = t[e]
        }
        , function(t, e) {
            this.node[this.propertyName] = t[e],
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.node[this.propertyName] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i)
                r[i] = t[e++]
        }
        , function(t, e) {
            for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i)
                r[i] = t[e++];
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            for (var r = this.resolvedProperty, i = 0, n = r.length; i !== n; ++i)
                r[i] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e]
        }
        , function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            this.resolvedProperty.fromArray(t, e)
        }
        , function(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ]]
    }),
    a.PropertyBinding.Composite = function(t, e, r) {
        var i = r || a.PropertyBinding.parseTrackName(e);
        this._targetGroup = t,
        this._bindings = t.subscribe_(e, i)
    }
    ,
    a.PropertyBinding.Composite.prototype = {
        constructor: a.PropertyBinding.Composite,
        getValue: function(t, e) {
            this.bind();
            var r = this._targetGroup.nCachedObjects_
              , i = this._bindings[r];
            void 0 !== i && i.getValue(t, e)
        },
        setValue: function(t, e) {
            for (var r = this._bindings, i = this._targetGroup.nCachedObjects_, n = r.length; i !== n; ++i)
                r[i].setValue(t, e)
        },
        bind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, r = t.length; e !== r; ++e)
                t[e].bind()
        },
        unbind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, r = t.length; e !== r; ++e)
                t[e].unbind()
        }
    },
    a.PropertyBinding.create = function(t, e, r) {
        return t instanceof a.AnimationObjectGroup ? new a.PropertyBinding.Composite(t,e,r) : new a.PropertyBinding(t,e,r)
    }
    ,
    a.PropertyBinding.parseTrackName = function(t) {
        var e = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/
          , r = e.exec(t);
        if (!r)
            throw new Error("cannot parse trackName at all: " + t);
        r.index === e.lastIndex && e.lastIndex++;
        var i = {
            nodeName: r[3],
            objectName: r[5],
            objectIndex: r[7],
            propertyName: r[9],
            propertyIndex: r[11]
        };
        if (null === i.propertyName || 0 === i.propertyName.length)
            throw new Error("can not parse propertyName from trackName: " + t);
        return i
    }
    ,
    a.PropertyBinding.findNode = function(t, e) {
        if (!e || "" === e || "root" === e || "." === e || e === -1 || e === t.name || e === t.uuid)
            return t;
        if (t.skeleton) {
            var r = function(t) {
                for (var r = 0; r < t.bones.length; r++) {
                    var i = t.bones[r];
                    if (i.name === e)
                        return i
                }
                return null
            }
              , i = r(t.skeleton);
            if (i)
                return i
        }
        if (t.children) {
            var n = function(t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (i.name === e || i.uuid === e)
                        return i;
                    var a = n(i.children);
                    if (a)
                        return a
                }
                return null
            }
              , a = n(t.children);
            if (a)
                return a
        }
        return null
    }
    ,
    a.PropertyMixer = function(t, e, r) {
        this.binding = t,
        this.valueSize = r;
        var i, n = Float64Array;
        switch (e) {
        case "quaternion":
            i = this._slerp;
            break;
        case "string":
        case "bool":
            n = Array,
            i = this._select;
            break;
        default:
            i = this._lerp
        }
        this.buffer = new n(4 * r),
        this._mixBufferRegion = i,
        this.cumulativeWeight = 0,
        this.useCount = 0,
        this.referenceCount = 0
    }
    ,
    a.PropertyMixer.prototype = {
        constructor: a.PropertyMixer,
        accumulate: function(t, e) {
            var r = this.buffer
              , i = this.valueSize
              , n = t * i + i
              , a = this.cumulativeWeight;
            if (0 === a) {
                for (var o = 0; o !== i; ++o)
                    r[n + o] = r[o];
                a = e
            } else {
                a += e;
                var s = e / a;
                this._mixBufferRegion(r, n, 0, s, i)
            }
            this.cumulativeWeight = a
        },
        apply: function(t) {
            var e = this.valueSize
              , r = this.buffer
              , i = t * e + e
              , n = this.cumulativeWeight
              , a = this.binding;
            if (this.cumulativeWeight = 0,
            n < 1) {
                var o = 3 * e;
                this._mixBufferRegion(r, i, o, 1 - n, e)
            }
            for (var s = e, c = e + e; s !== c; ++s)
                if (r[s] !== r[s + e]) {
                    a.setValue(r, i);
                    break
                }
        },
        saveOriginalState: function() {
            var t = this.binding
              , e = this.buffer
              , r = this.valueSize
              , i = 3 * r;
            t.getValue(e, i);
            for (var n = r, a = i; n !== a; ++n)
                e[n] = e[i + n % r];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t)
        },
        _select: function(t, e, r, i, n) {
            if (i >= .5)
                for (var a = 0; a !== n; ++a)
                    t[e + a] = t[r + a]
        },
        _slerp: function(t, e, r, i, n) {
            a.Quaternion.slerpFlat(t, e, t, e, t, r, i)
        },
        _lerp: function(t, e, r, i, n) {
            for (var a = 1 - i, o = 0; o !== n; ++o) {
                var s = e + o;
                t[s] = t[s] * a + t[r + o] * i
            }
        }
    },
    a.BooleanKeyframeTrack = function(t, e, r) {
        a.KeyframeTrack.call(this, t, e, r)
    }
    ,
    a.BooleanKeyframeTrack.prototype = Object.assign(Object.create(a.KeyframeTrack.prototype), {
        constructor: a.BooleanKeyframeTrack,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: a.InterpolateDiscrete,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    a.ColorKeyframeTrack = function(t, e, r, i) {
        a.KeyframeTrack.call(this, t, e, r, i)
    }
    ,
    a.ColorKeyframeTrack.prototype = Object.assign(Object.create(a.KeyframeTrack.prototype), {
        constructor: a.ColorKeyframeTrack,
        ValueTypeName: "color"
    }),
    a.NumberKeyframeTrack = function(t, e, r, i) {
        a.KeyframeTrack.call(this, t, e, r, i)
    }
    ,
    a.NumberKeyframeTrack.prototype = Object.assign(Object.create(a.KeyframeTrack.prototype), {
        constructor: a.NumberKeyframeTrack,
        ValueTypeName: "number"
    }),
    a.QuaternionKeyframeTrack = function(t, e, r, i) {
        a.KeyframeTrack.call(this, t, e, r, i)
    }
    ,
    a.QuaternionKeyframeTrack.prototype = Object.assign(Object.create(a.KeyframeTrack.prototype), {
        constructor: a.QuaternionKeyframeTrack,
        ValueTypeName: "quaternion",
        DefaultInterpolation: a.InterpolateLinear,
        InterpolantFactoryMethodLinear: function(t) {
            return new a.QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodSmooth: void 0
    }),
    a.StringKeyframeTrack = function(t, e, r, i) {
        a.KeyframeTrack.call(this, t, e, r, i)
    }
    ,
    a.StringKeyframeTrack.prototype = Object.assign(Object.create(a.KeyframeTrack.prototype), {
        constructor: a.StringKeyframeTrack,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: a.InterpolateDiscrete,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    a.VectorKeyframeTrack = function(t, e, r, i) {
        a.KeyframeTrack.call(this, t, e, r, i)
    }
    ,
    a.VectorKeyframeTrack.prototype = Object.assign(Object.create(a.KeyframeTrack.prototype), {
        constructor: a.VectorKeyframeTrack,
        ValueTypeName: "vector"
    }),
    a.Audio = function(t) {
        a.Object3D.call(this),
        this.type = "Audio",
        this.context = t.context,
        this.source = this.context.createBufferSource(),
        this.source.onended = this.onEnded.bind(this),
        this.gain = this.context.createGain(),
        this.gain.connect(t.getInput()),
        this.autoplay = !1,
        this.startTime = 0,
        this.playbackRate = 1,
        this.isPlaying = !1,
        this.hasPlaybackControl = !0,
        this.sourceType = "empty",
        this.filters = []
    }
    ,
    a.Audio.prototype = Object.assign(Object.create(a.Object3D.prototype), {
        constructor: a.Audio,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(t) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "audioNode",
            this.source = t,
            this.connect(),
            this
        },
        setBuffer: function(t) {
            return this.source.buffer = t,
            this.sourceType = "buffer",
            this.autoplay && this.play(),
            this
        },
        play: function() {
            if (this.isPlaying === !0)
                return void console.warn("THREE.Audio: Audio is already playing.");
            if (this.hasPlaybackControl === !1)
                return void console.warn("THREE.Audio: this Audio has no playback control.");
            var t = this.context.createBufferSource();
            return t.buffer = this.source.buffer,
            t.loop = this.source.loop,
            t.onended = this.source.onended,
            t.start(0, this.startTime),
            t.playbackRate.value = this.playbackRate,
            this.isPlaying = !0,
            this.source = t,
            this.connect()
        },
        pause: function() {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
            this.startTime = this.context.currentTime,
            this.isPlaying = !1,
            this)
        },
        stop: function() {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
            this.startTime = 0,
            this.isPlaying = !1,
            this)
        },
        connect: function() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else
                this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else
                this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(t) {
            return t || (t = []),
            this.isPlaying === !0 ? (this.disconnect(),
            this.filters = t,
            this.connect()) : this.filters = t,
            this
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(t) {
            return this.setFilters(t ? [t] : [])
        },
        setPlaybackRate: function(t) {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = t,
            this.isPlaying === !0 && (this.source.playbackRate.value = this.playbackRate),
            this)
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."),
            !1) : this.source.loop
        },
        setLoop: function(t) {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : void (this.source.loop = t)
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(t) {
            return this.gain.gain.value = t,
            this
        }
    }),
    a.AudioAnalyser = function(t, e) {
        this.analyser = t.context.createAnalyser(),
        this.analyser.fftSize = void 0 !== e ? e : 2048,
        this.data = new Uint8Array(this.analyser.frequencyBinCount),
        t.getOutput().connect(this.analyser);
    }
    ,
    Object.assign(a.AudioAnalyser.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data),
            this.data
        },
        getAverageFrequency: function() {
            for (var t = 0, e = this.getFrequencyData(), r = 0; r < e.length; r++)
                t += e[r];
            return t / e.length
        }
    }),
    Object.defineProperty(a, "AudioContext", {
        get: function() {
            var t;
            return function() {
                return void 0 === t && (t = new (window.AudioContext || window.webkitAudioContext)),
                t
            }
        }()
    }),
    a.PositionalAudio = function(t) {
        a.Audio.call(this, t),
        this.panner = this.context.createPanner(),
        this.panner.connect(this.gain)
    }
    ,
    a.PositionalAudio.prototype = Object.assign(Object.create(a.Audio.prototype), {
        constructor: a.PositionalAudio,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(t) {
            this.panner.refDistance = t
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(t) {
            this.panner.rolloffFactor = t
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(t) {
            this.panner.distanceModel = t
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(t) {
            this.panner.maxDistance = t
        },
        updateMatrixWorld: function() {
            var t = new a.Vector3;
            return function(e) {
                a.Object3D.prototype.updateMatrixWorld.call(this, e),
                t.setFromMatrixPosition(this.matrixWorld),
                this.panner.setPosition(t.x, t.y, t.z)
            }
        }()
    }),
    a.AudioListener = function() {
        a.Object3D.call(this),
        this.type = "AudioListener",
        this.context = a.AudioContext,
        this.gain = this.context.createGain(),
        this.gain.connect(this.context.destination),
        this.filter = null
    }
    ,
    a.AudioListener.prototype = Object.assign(Object.create(a.Object3D.prototype), {
        constructor: a.AudioListener,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            null !== this.filter && (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination),
            this.gain.connect(this.context.destination),
            this.filter = null)
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(t) {
            null !== this.filter ? (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
            this.filter = t,
            this.gain.connect(this.filter),
            this.filter.connect(this.context.destination)
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(t) {
            this.gain.gain.value = t
        },
        updateMatrixWorld: function() {
            var t = new a.Vector3
              , e = new a.Quaternion
              , r = new a.Vector3
              , i = new a.Vector3;
            return function(n) {
                a.Object3D.prototype.updateMatrixWorld.call(this, n);
                var o = this.context.listener
                  , s = this.up;
                this.matrixWorld.decompose(t, e, r),
                i.set(0, 0, -1).applyQuaternion(e),
                o.setPosition(t.x, t.y, t.z),
                o.setOrientation(i.x, i.y, i.z, s.x, s.y, s.z)
            }
        }()
    }),
    a.Camera = function() {
        a.Object3D.call(this),
        this.type = "Camera",
        this.matrixWorldInverse = new a.Matrix4,
        this.projectionMatrix = new a.Matrix4
    }
    ,
    a.Camera.prototype = Object.create(a.Object3D.prototype),
    a.Camera.prototype.constructor = a.Camera,
    a.Camera.prototype.getWorldDirection = function() {
        var t = new a.Quaternion;
        return function(e) {
            var r = e || new a.Vector3;
            return this.getWorldQuaternion(t),
            r.set(0, 0, -1).applyQuaternion(t)
        }
    }(),
    a.Camera.prototype.lookAt = function() {
        var t = new a.Matrix4;
        return function(e) {
            t.lookAt(this.position, e, this.up),
            this.quaternion.setFromRotationMatrix(t)
        }
    }(),
    a.Camera.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }
    ,
    a.Camera.prototype.copy = function(t) {
        return a.Object3D.prototype.copy.call(this, t),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this
    }
    ,
    a.CubeCamera = function(t, e, r) {
        a.Object3D.call(this),
        this.type = "CubeCamera";
        var i = 90
          , n = 1
          , o = new a.PerspectiveCamera(i,n,t,e);
        o.up.set(0, -1, 0),
        o.lookAt(new a.Vector3(1,0,0)),
        this.add(o);
        var s = new a.PerspectiveCamera(i,n,t,e);
        s.up.set(0, -1, 0),
        s.lookAt(new a.Vector3(-1,0,0)),
        this.add(s);
        var c = new a.PerspectiveCamera(i,n,t,e);
        c.up.set(0, 0, 1),
        c.lookAt(new a.Vector3(0,1,0)),
        this.add(c);
        var h = new a.PerspectiveCamera(i,n,t,e);
        h.up.set(0, 0, -1),
        h.lookAt(new a.Vector3(0,-1,0)),
        this.add(h);
        var l = new a.PerspectiveCamera(i,n,t,e);
        l.up.set(0, -1, 0),
        l.lookAt(new a.Vector3(0,0,1)),
        this.add(l);
        var u = new a.PerspectiveCamera(i,n,t,e);
        u.up.set(0, -1, 0),
        u.lookAt(new a.Vector3(0,0,-1)),
        this.add(u);
        var d = {
            format: a.RGBFormat,
            magFilter: a.LinearFilter,
            minFilter: a.LinearFilter
        };
        this.renderTarget = new a.WebGLRenderTargetCube(r,r,d),
        this.updateCubeMap = function(t, e) {
            null === this.parent && this.updateMatrixWorld();
            var r = this.renderTarget
              , i = r.texture.generateMipmaps;
            r.texture.generateMipmaps = !1,
            r.activeCubeFace = 0,
            t.render(e, o, r),
            r.activeCubeFace = 1,
            t.render(e, s, r),
            r.activeCubeFace = 2,
            t.render(e, c, r),
            r.activeCubeFace = 3,
            t.render(e, h, r),
            r.activeCubeFace = 4,
            t.render(e, l, r),
            r.texture.generateMipmaps = i,
            r.activeCubeFace = 5,
            t.render(e, u, r),
            t.setRenderTarget(null)
        }
    }
    ,
    a.CubeCamera.prototype = Object.create(a.Object3D.prototype),
    a.CubeCamera.prototype.constructor = a.CubeCamera,
    a.OrthographicCamera = function(t, e, r, i, n, o) {
        a.Camera.call(this),
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = t,
        this.right = e,
        this.top = r,
        this.bottom = i,
        this.near = void 0 !== n ? n : .1,
        this.far = void 0 !== o ? o : 2e3,
        this.updateProjectionMatrix()
    }
    ,
    a.OrthographicCamera.prototype = Object.assign(Object.create(a.Camera.prototype), {
        constructor: a.OrthographicCamera,
        copy: function(t) {
            return a.Camera.prototype.copy.call(this, t),
            this.left = t.left,
            this.right = t.right,
            this.top = t.top,
            this.bottom = t.bottom,
            this.near = t.near,
            this.far = t.far,
            this.zoom = t.zoom,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this
        },
        setViewOffset: function(t, e, r, i, n, a) {
            this.view = {
                fullWidth: t,
                fullHeight: e,
                offsetX: r,
                offsetY: i,
                width: n,
                height: a
            },
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null,
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = (this.right - this.left) / (2 * this.zoom)
              , e = (this.top - this.bottom) / (2 * this.zoom)
              , r = (this.right + this.left) / 2
              , i = (this.top + this.bottom) / 2
              , n = r - t
              , a = r + t
              , o = i + e
              , s = i - e;
            if (null !== this.view) {
                var c = this.zoom / (this.view.width / this.view.fullWidth)
                  , h = this.zoom / (this.view.height / this.view.fullHeight)
                  , l = (this.right - this.left) / this.view.width
                  , u = (this.top - this.bottom) / this.view.height;
                n += l * (this.view.offsetX / c),
                a = n + l * (this.view.width / c),
                o -= u * (this.view.offsetY / h),
                s = o - u * (this.view.height / h)
            }
            this.projectionMatrix.makeOrthographic(n, a, o, s, this.near, this.far)
        },
        toJSON: function(t) {
            var e = a.Object3D.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom,
            e.object.left = this.left,
            e.object.right = this.right,
            e.object.top = this.top,
            e.object.bottom = this.bottom,
            e.object.near = this.near,
            e.object.far = this.far,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e
        }
    }),
    a.PerspectiveCamera = function(t, e, r, i) {
        a.Camera.call(this),
        this.type = "PerspectiveCamera",
        this.fov = void 0 !== t ? t : 50,
        this.zoom = 1,
        this.near = void 0 !== r ? r : .1,
        this.far = void 0 !== i ? i : 2e3,
        this.focus = 10,
        this.aspect = void 0 !== e ? e : 1,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    ,
    a.PerspectiveCamera.prototype = Object.assign(Object.create(a.Camera.prototype), {
        constructor: a.PerspectiveCamera,
        copy: function(t) {
            return a.Camera.prototype.copy.call(this, t),
            this.fov = t.fov,
            this.zoom = t.zoom,
            this.near = t.near,
            this.far = t.far,
            this.focus = t.focus,
            this.aspect = t.aspect,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this.filmGauge = t.filmGauge,
            this.filmOffset = t.filmOffset,
            this
        },
        setFocalLength: function(t) {
            var e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * a.Math.RAD2DEG * Math.atan(e),
            this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var t = Math.tan(.5 * a.Math.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function() {
            return 2 * a.Math.RAD2DEG * Math.atan(Math.tan(.5 * a.Math.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(t, e, r, i, n, a) {
            this.aspect = t / e,
            this.view = {
                fullWidth: t,
                fullHeight: e,
                offsetX: r,
                offsetY: i,
                width: n,
                height: a
            },
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null,
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = this.near
              , e = t * Math.tan(.5 * a.Math.DEG2RAD * this.fov) / this.zoom
              , r = 2 * e
              , i = this.aspect * r
              , n = -.5 * i
              , o = this.view;
            if (null !== o) {
                var s = o.fullWidth
                  , c = o.fullHeight;
                n += o.offsetX * i / s,
                e -= o.offsetY * r / c,
                i *= o.width / s,
                r *= o.height / c
            }
            var h = this.filmOffset;
            0 !== h && (n += t * h / this.getFilmWidth()),
            this.projectionMatrix.makeFrustum(n, n + i, e - r, e, t, this.far)
        },
        toJSON: function(t) {
            var e = a.Object3D.prototype.toJSON.call(this, t);
            return e.object.fov = this.fov,
            e.object.zoom = this.zoom,
            e.object.near = this.near,
            e.object.far = this.far,
            e.object.focus = this.focus,
            e.object.aspect = this.aspect,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e.object.filmGauge = this.filmGauge,
            e.object.filmOffset = this.filmOffset,
            e
        }
    }),
    a.StereoCamera = function() {
        this.type = "StereoCamera",
        this.aspect = 1,
        this.cameraL = new a.PerspectiveCamera,
        this.cameraL.layers.enable(1),
        this.cameraL.matrixAutoUpdate = !1,
        this.cameraR = new a.PerspectiveCamera,
        this.cameraR.layers.enable(2),
        this.cameraR.matrixAutoUpdate = !1
    }
    ,
    Object.assign(a.StereoCamera.prototype, {
        update: function() {
            var t, e, r, i, n, o = new a.Matrix4, s = new a.Matrix4;
            return function(c) {
                var h = t !== c.focus || e !== c.fov || r !== c.aspect * this.aspect || i !== c.near || n !== c.far;
                if (h) {
                    t = c.focus,
                    e = c.fov,
                    r = c.aspect * this.aspect,
                    i = c.near,
                    n = c.far;
                    var l, u, d = c.projectionMatrix.clone(), p = .032, f = p * i / t, m = i * Math.tan(a.Math.DEG2RAD * e * .5);
                    s.elements[12] = -p,
                    o.elements[12] = p,
                    l = -m * r + f,
                    u = m * r + f,
                    d.elements[0] = 2 * i / (u - l),
                    d.elements[8] = (u + l) / (u - l),
                    this.cameraL.projectionMatrix.copy(d),
                    l = -m * r - f,
                    u = m * r - f,
                    d.elements[0] = 2 * i / (u - l),
                    d.elements[8] = (u + l) / (u - l),
                    this.cameraR.projectionMatrix.copy(d)
                }
                this.cameraL.matrixWorld.copy(c.matrixWorld).multiply(s),
                this.cameraR.matrixWorld.copy(c.matrixWorld).multiply(o)
            }
        }()
    }),
    a.Light = function(t, e) {
        a.Object3D.call(this),
        this.type = "Light",
        this.color = new a.Color(t),
        this.intensity = void 0 !== e ? e : 1,
        this.receiveShadow = void 0
    }
    ,
    a.Light.prototype = Object.assign(Object.create(a.Object3D.prototype), {
        constructor: a.Light,
        copy: function(t) {
            return a.Object3D.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.intensity = t.intensity,
            this
        },
        toJSON: function(t) {
            var e = a.Object3D.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(),
            e.object.intensity = this.intensity,
            void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
            void 0 !== this.distance && (e.object.distance = this.distance),
            void 0 !== this.angle && (e.object.angle = this.angle),
            void 0 !== this.decay && (e.object.decay = this.decay),
            void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
            e
        }
    }),
    a.LightShadow = function(t) {
        this.camera = t,
        this.bias = 0,
        this.radius = 1,
        this.mapSize = new a.Vector2(512,512),
        this.map = null,
        this.matrix = new a.Matrix4
    }
    ,
    Object.assign(a.LightShadow.prototype, {
        copy: function(t) {
            return this.camera = t.camera.clone(),
            this.bias = t.bias,
            this.radius = t.radius,
            this.mapSize.copy(t.mapSize),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }),
    a.AmbientLight = function(t, e) {
        a.Light.call(this, t, e),
        this.type = "AmbientLight",
        this.castShadow = void 0
    }
    ,
    a.AmbientLight.prototype = Object.assign(Object.create(a.Light.prototype), {
        constructor: a.AmbientLight
    }),
    a.DirectionalLight = function(t, e) {
        a.Light.call(this, t, e),
        this.type = "DirectionalLight",
        this.position.copy(a.Object3D.DefaultUp),
        this.updateMatrix(),
        this.target = new a.Object3D,
        this.shadow = new a.DirectionalLightShadow
    }
    ,
    a.DirectionalLight.prototype = Object.assign(Object.create(a.Light.prototype), {
        constructor: a.DirectionalLight,
        copy: function(t) {
            return a.Light.prototype.copy.call(this, t),
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    a.DirectionalLightShadow = function(t) {
        a.LightShadow.call(this, new a.OrthographicCamera(-5,5,5,-5,.5,500))
    }
    ,
    a.DirectionalLightShadow.prototype = Object.assign(Object.create(a.LightShadow.prototype), {
        constructor: a.DirectionalLightShadow
    }),
    a.HemisphereLight = function(t, e, r) {
        a.Light.call(this, t, r),
        this.type = "HemisphereLight",
        this.castShadow = void 0,
        this.position.copy(a.Object3D.DefaultUp),
        this.updateMatrix(),
        this.groundColor = new a.Color(e)
    }
    ,
    a.HemisphereLight.prototype = Object.assign(Object.create(a.Light.prototype), {
        constructor: a.HemisphereLight,
        copy: function(t) {
            return a.Light.prototype.copy.call(this, t),
            this.groundColor.copy(t.groundColor),
            this
        }
    }),
    a.PointLight = function(t, e, r, i) {
        a.Light.call(this, t, e),
        this.type = "PointLight",
        Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / (4 * Math.PI)
            }
        }),
        this.distance = void 0 !== r ? r : 0,
        this.decay = void 0 !== i ? i : 1,
        this.shadow = new a.LightShadow(new a.PerspectiveCamera(90,1,.5,500))
    }
    ,
    a.PointLight.prototype = Object.assign(Object.create(a.Light.prototype), {
        constructor: a.PointLight,
        copy: function(t) {
            return a.Light.prototype.copy.call(this, t),
            this.distance = t.distance,
            this.decay = t.decay,
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    a.SpotLight = function(t, e, r, i, n, o) {
        a.Light.call(this, t, e),
        this.type = "SpotLight",
        this.position.copy(a.Object3D.DefaultUp),
        this.updateMatrix(),
        this.target = new a.Object3D,
        Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / Math.PI
            }
        }),
        this.distance = void 0 !== r ? r : 0,
        this.angle = void 0 !== i ? i : Math.PI / 3,
        this.penumbra = void 0 !== n ? n : 0,
        this.decay = void 0 !== o ? o : 1,
        this.shadow = new a.SpotLightShadow
    }
    ,
    a.SpotLight.prototype = Object.assign(Object.create(a.Light.prototype), {
        constructor: a.SpotLight,
        copy: function(t) {
            return a.Light.prototype.copy.call(this, t),
            this.distance = t.distance,
            this.angle = t.angle,
            this.penumbra = t.penumbra,
            this.decay = t.decay,
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    a.SpotLightShadow = function() {
        a.LightShadow.call(this, new a.PerspectiveCamera(50,1,.5,500))
    }
    ,
    a.SpotLightShadow.prototype = Object.assign(Object.create(a.LightShadow.prototype), {
        constructor: a.SpotLightShadow,
        update: function(t) {
            var e = 2 * a.Math.RAD2DEG * t.angle
              , r = this.mapSize.width / this.mapSize.height
              , i = t.distance || 500
              , n = this.camera;
            e === n.fov && r === n.aspect && i === n.far || (n.fov = e,
            n.aspect = r,
            n.far = i,
            n.updateProjectionMatrix())
        }
    }),
    a.AudioLoader = function(t) {
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager
    }
    ,
    Object.assign(a.AudioLoader.prototype, {
        load: function(t, e, r, i) {
            var n = new a.XHRLoader(this.manager);
            n.setResponseType("arraybuffer"),
            n.load(t, function(t) {
                var r = a.AudioContext;
                r.decodeAudioData(t, function(t) {
                    e(t)
                })
            }, r, i)
        }
    }),
    a.Cache = {
        enabled: !1,
        files: {},
        add: function(t, e) {
            this.enabled !== !1 && (this.files[t] = e)
        },
        get: function(t) {
            if (this.enabled !== !1)
                return this.files[t]
        },
        remove: function(t) {
            delete this.files[t]
        },
        clear: function() {
            this.files = {}
        }
    },
    a.Loader = function() {
        this.onLoadStart = function() {}
        ,
        this.onLoadProgress = function() {}
        ,
        this.onLoadComplete = function() {}
    }
    ,
    a.Loader.prototype = {
        constructor: a.Loader,
        crossOrigin: void 0,
        extractUrlBase: function(t) {
            var e = t.split("/");
            return 1 === e.length ? "./" : (e.pop(),
            e.join("/") + "/")
        },
        initMaterials: function(t, e, r) {
            for (var i = [], n = 0; n < t.length; ++n)
                i[n] = this.createMaterial(t[n], e, r);
            return i
        },
        createMaterial: function() {
            var t, e, r;
            return function(i, n, o) {
                function s(t, r, i, s, h) {
                    var l, u = n + t, d = a.Loader.Handlers.get(u);
                    null !== d ? l = d.load(u) : (e.setCrossOrigin(o),
                    l = e.load(u)),
                    void 0 !== r && (l.repeat.fromArray(r),
                    1 !== r[0] && (l.wrapS = a.RepeatWrapping),
                    1 !== r[1] && (l.wrapT = a.RepeatWrapping)),
                    void 0 !== i && l.offset.fromArray(i),
                    void 0 !== s && ("repeat" === s[0] && (l.wrapS = a.RepeatWrapping),
                    "mirror" === s[0] && (l.wrapS = a.MirroredRepeatWrapping),
                    "repeat" === s[1] && (l.wrapT = a.RepeatWrapping),
                    "mirror" === s[1] && (l.wrapT = a.MirroredRepeatWrapping)),
                    void 0 !== h && (l.anisotropy = h);
                    var p = a.Math.generateUUID();
                    return c[p] = l,
                    p
                }
                void 0 === t && (t = new a.Color),
                void 0 === e && (e = new a.TextureLoader),
                void 0 === r && (r = new a.MaterialLoader);
                var c = {}
                  , h = {
                    uuid: a.Math.generateUUID(),
                    type: "MeshLambertMaterial"
                };
                for (var l in i) {
                    var u = i[l];
                    switch (l) {
                    case "DbgColor":
                    case "DbgIndex":
                    case "opticalDensity":
                    case "illumination":
                        break;
                    case "DbgName":
                        h.name = u;
                        break;
                    case "blending":
                        h.blending = a[u];
                        break;
                    case "colorAmbient":
                    case "mapAmbient":
                        console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
                        break;
                    case "colorDiffuse":
                        h.color = t.fromArray(u).getHex();
                        break;
                    case "colorSpecular":
                        h.specular = t.fromArray(u).getHex();
                        break;
                    case "colorEmissive":
                        h.emissive = t.fromArray(u).getHex();
                        break;
                    case "specularCoef":
                        h.shininess = u;
                        break;
                    case "shading":
                        "basic" === u.toLowerCase() && (h.type = "MeshBasicMaterial"),
                        "phong" === u.toLowerCase() && (h.type = "MeshPhongMaterial"),
                        "standard" === u.toLowerCase() && (h.type = "MeshStandardMaterial");
                        break;
                    case "mapDiffuse":
                        h.map = s(u, i.mapDiffuseRepeat, i.mapDiffuseOffset, i.mapDiffuseWrap, i.mapDiffuseAnisotropy);
                        break;
                    case "mapDiffuseRepeat":
                    case "mapDiffuseOffset":
                    case "mapDiffuseWrap":
                    case "mapDiffuseAnisotropy":
                        break;
                    case "mapEmissive":
                        h.emissiveMap = s(u, i.mapEmissiveRepeat, i.mapEmissiveOffset, i.mapEmissiveWrap, i.mapEmissiveAnisotropy);
                        break;
                    case "mapEmissiveRepeat":
                    case "mapEmissiveOffset":
                    case "mapEmissiveWrap":
                    case "mapEmissiveAnisotropy":
                        break;
                    case "mapLight":
                        h.lightMap = s(u, i.mapLightRepeat, i.mapLightOffset, i.mapLightWrap, i.mapLightAnisotropy);
                        break;
                    case "mapLightRepeat":
                    case "mapLightOffset":
                    case "mapLightWrap":
                    case "mapLightAnisotropy":
                        break;
                    case "mapAO":
                        h.aoMap = s(u, i.mapAORepeat, i.mapAOOffset, i.mapAOWrap, i.mapAOAnisotropy);
                        break;
                    case "mapAORepeat":
                    case "mapAOOffset":
                    case "mapAOWrap":
                    case "mapAOAnisotropy":
                        break;
                    case "mapBump":
                        h.bumpMap = s(u, i.mapBumpRepeat, i.mapBumpOffset, i.mapBumpWrap, i.mapBumpAnisotropy);
                        break;
                    case "mapBumpScale":
                        h.bumpScale = u;
                        break;
                    case "mapBumpRepeat":
                    case "mapBumpOffset":
                    case "mapBumpWrap":
                    case "mapBumpAnisotropy":
                        break;
                    case "mapNormal":
                        h.normalMap = s(u, i.mapNormalRepeat, i.mapNormalOffset, i.mapNormalWrap, i.mapNormalAnisotropy);
                        break;
                    case "mapNormalFactor":
                        h.normalScale = [u, u];
                        break;
                    case "mapNormalRepeat":
                    case "mapNormalOffset":
                    case "mapNormalWrap":
                    case "mapNormalAnisotropy":
                        break;
                    case "mapSpecular":
                        h.specularMap = s(u, i.mapSpecularRepeat, i.mapSpecularOffset, i.mapSpecularWrap, i.mapSpecularAnisotropy);
                        break;
                    case "mapSpecularRepeat":
                    case "mapSpecularOffset":
                    case "mapSpecularWrap":
                    case "mapSpecularAnisotropy":
                        break;
                    case "mapMetalness":
                        h.metalnessMap = s(u, i.mapMetalnessRepeat, i.mapMetalnessOffset, i.mapMetalnessWrap, i.mapMetalnessAnisotropy);
                        break;
                    case "mapMetalnessRepeat":
                    case "mapMetalnessOffset":
                    case "mapMetalnessWrap":
                    case "mapMetalnessAnisotropy":
                        break;
                    case "mapRoughness":
                        h.roughnessMap = s(u, i.mapRoughnessRepeat, i.mapRoughnessOffset, i.mapRoughnessWrap, i.mapRoughnessAnisotropy);
                        break;
                    case "mapRoughnessRepeat":
                    case "mapRoughnessOffset":
                    case "mapRoughnessWrap":
                    case "mapRoughnessAnisotropy":
                        break;
                    case "mapAlpha":
                        h.alphaMap = s(u, i.mapAlphaRepeat, i.mapAlphaOffset, i.mapAlphaWrap, i.mapAlphaAnisotropy);
                        break;
                    case "mapAlphaRepeat":
                    case "mapAlphaOffset":
                    case "mapAlphaWrap":
                    case "mapAlphaAnisotropy":
                        break;
                    case "flipSided":
                        h.side = a.BackSide;
                        break;
                    case "doubleSided":
                        h.side = a.DoubleSide;
                        break;
                    case "transparency":
                        console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),
                        h.opacity = u;
                        break;
                    case "depthTest":
                    case "depthWrite":
                    case "colorWrite":
                    case "opacity":
                    case "reflectivity":
                    case "transparent":
                    case "visible":
                    case "wireframe":
                        h[l] = u;
                        break;
                    case "vertexColors":
                        u === !0 && (h.vertexColors = a.VertexColors),
                        "face" === u && (h.vertexColors = a.FaceColors);
                        break;
                    default:
                        console.error("THREE.Loader.createMaterial: Unsupported", l, u)
                    }
                }
                return "MeshBasicMaterial" === h.type && delete h.emissive,
                "MeshPhongMaterial" !== h.type && delete h.specular,
                h.opacity < 1 && (h.transparent = !0),
                r.setTextures(c),
                r.parse(h)
            }
        }()
    },
    a.Loader.Handlers = {
        handlers: [],
        add: function(t, e) {
            this.handlers.push(t, e)
        },
        get: function(t) {
            for (var e = this.handlers, r = 0, i = e.length; r < i; r += 2) {
                var n = e[r]
                  , a = e[r + 1];
                if (n.test(t))
                    return a
            }
            return null
        }
    },
    a.XHRLoader = function(t) {
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager
    }
    ,
    Object.assign(a.XHRLoader.prototype, {
        load: function(t, e, r, i) {
            void 0 !== this.path && (t = this.path + t);
            var n = this
              , o = a.Cache.get(t);
            if (void 0 !== o)
                return n.manager.itemStart(t),
                setTimeout(function() {
                    e && e(o),
                    n.manager.itemEnd(t)
                }, 0),
                o;
            var s = new XMLHttpRequest;
            return s.overrideMimeType("text/plain"),
            s.open("GET", t, !0),
            s.addEventListener("load", function(r) {
                var o = r.target.response;
                a.Cache.add(t, o),
                200 === this.status ? (e && e(o),
                n.manager.itemEnd(t)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."),
                e && e(o),
                n.manager.itemEnd(t)) : (i && i(r),
                n.manager.itemError(t))
            }, !1),
            void 0 !== r && s.addEventListener("progress", function(t) {
                r(t)
            }, !1),
            s.addEventListener("error", function(e) {
                i && i(e),
                n.manager.itemError(t)
            }, !1),
            void 0 !== this.responseType && (s.responseType = this.responseType),
            void 0 !== this.withCredentials && (s.withCredentials = this.withCredentials),
            s.send(null),
            n.manager.itemStart(t),
            s
        },
        setPath: function(t) {
            return this.path = t,
            this
        },
        setResponseType: function(t) {
            return this.responseType = t,
            this
        },
        setWithCredentials: function(t) {
            return this.withCredentials = t,
            this
        }
    }),
    a.FontLoader = function(t) {
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager
    }
    ,
    Object.assign(a.FontLoader.prototype, {
        load: function(t, e, r, i) {
            var n = this
              , o = new a.XHRLoader(this.manager);
            o.load(t, function(t) {
                var r;
                try {
                    r = JSON.parse(t)
                } catch (e) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),
                    r = JSON.parse(t.substring(65, t.length - 2))
                }
                var i = n.parse(r);
                e && e(i)
            }, r, i)
        },
        parse: function(t) {
            return new a.Font(t)
        }
    }),
    a.ImageLoader = function(t) {
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager
    }
    ,
    Object.assign(a.ImageLoader.prototype, {
        load: function(t, e, r, i) {
            var n = this
              , o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            if (o.onload = function() {
                URL.revokeObjectURL(o.src),
                e && e(o),
                n.manager.itemEnd(t)
            }
            ,
            0 === t.indexOf("data:"))
                o.src = t;
            else {
                var s = new a.XHRLoader;
                s.setPath(this.path),
                s.setResponseType("blob"),
                s.load(t, function(t) {
                    o.src = URL.createObjectURL(t)
                }, r, i)
            }
            return n.manager.itemStart(t),
            o
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    a.JSONLoader = function(t) {
        "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),
        t = void 0),
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager,
        this.withCredentials = !1
    }
    ,
    Object.assign(a.JSONLoader.prototype, {
        load: function(t, e, r, i) {
            var n = this
              , o = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : a.Loader.prototype.extractUrlBase(t)
              , s = new a.XHRLoader(this.manager);
            s.setWithCredentials(this.withCredentials),
            s.load(t, function(r) {
                var i = JSON.parse(r)
                  , a = i.metadata;
                if (void 0 !== a) {
                    var s = a.type;
                    if (void 0 !== s) {
                        if ("object" === s.toLowerCase())
                            return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.");
                        if ("scene" === s.toLowerCase())
                            return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.SceneLoader instead.")
                    }
                }
                var c = n.parse(i, o);
                e(c.geometry, c.materials)
            }, r, i)
        },
        setTexturePath: function(t) {
            this.texturePath = t
        },
        parse: function(t, e) {
            function r(e) {
                function r(t, e) {
                    return t & 1 << e
                }
                var i, n, o, c, h, l, u, d, p, f, m, g, v, y, x, b, _, M, w, S, E, T, A, L, C, R, P, D = t.faces, B = t.vertices, U = t.normals, I = t.colors, F = 0;
                if (void 0 !== t.uvs) {
                    for (i = 0; i < t.uvs.length; i++)
                        t.uvs[i].length && F++;
                    for (i = 0; i < F; i++)
                        s.faceVertexUvs[i] = []
                }
                for (c = 0,
                h = B.length; c < h; )
                    M = new a.Vector3,
                    M.x = B[c++] * e,
                    M.y = B[c++] * e,
                    M.z = B[c++] * e,
                    s.vertices.push(M);
                for (c = 0,
                h = D.length; c < h; )
                    if (f = D[c++],
                    m = r(f, 0),
                    g = r(f, 1),
                    v = r(f, 3),
                    y = r(f, 4),
                    x = r(f, 5),
                    b = r(f, 6),
                    _ = r(f, 7),
                    m) {
                        if (S = new a.Face3,
                        S.a = D[c],
                        S.b = D[c + 1],
                        S.c = D[c + 3],
                        E = new a.Face3,
                        E.a = D[c + 1],
                        E.b = D[c + 2],
                        E.c = D[c + 3],
                        c += 4,
                        g && (p = D[c++],
                        S.materialIndex = p,
                        E.materialIndex = p),
                        o = s.faces.length,
                        v)
                            for (i = 0; i < F; i++)
                                for (L = t.uvs[i],
                                s.faceVertexUvs[i][o] = [],
                                s.faceVertexUvs[i][o + 1] = [],
                                n = 0; n < 4; n++)
                                    d = D[c++],
                                    R = L[2 * d],
                                    P = L[2 * d + 1],
                                    C = new a.Vector2(R,P),
                                    2 !== n && s.faceVertexUvs[i][o].push(C),
                                    0 !== n && s.faceVertexUvs[i][o + 1].push(C);
                        if (y && (u = 3 * D[c++],
                        S.normal.set(U[u++], U[u++], U[u]),
                        E.normal.copy(S.normal)),
                        x)
                            for (i = 0; i < 4; i++)
                                u = 3 * D[c++],
                                A = new a.Vector3(U[u++],U[u++],U[u]),
                                2 !== i && S.vertexNormals.push(A),
                                0 !== i && E.vertexNormals.push(A);
                        if (b && (l = D[c++],
                        T = I[l],
                        S.color.setHex(T),
                        E.color.setHex(T)),
                        _)
                            for (i = 0; i < 4; i++)
                                l = D[c++],
                                T = I[l],
                                2 !== i && S.vertexColors.push(new a.Color(T)),
                                0 !== i && E.vertexColors.push(new a.Color(T));
                        s.faces.push(S),
                        s.faces.push(E)
                    } else {
                        if (w = new a.Face3,
                        w.a = D[c++],
                        w.b = D[c++],
                        w.c = D[c++],
                        g && (p = D[c++],
                        w.materialIndex = p),
                        o = s.faces.length,
                        v)
                            for (i = 0; i < F; i++)
                                for (L = t.uvs[i],
                                s.faceVertexUvs[i][o] = [],
                                n = 0; n < 3; n++)
                                    d = D[c++],
                                    R = L[2 * d],
                                    P = L[2 * d + 1],
                                    C = new a.Vector2(R,P),
                                    s.faceVertexUvs[i][o].push(C);
                        if (y && (u = 3 * D[c++],
                        w.normal.set(U[u++], U[u++], U[u])),
                        x)
                            for (i = 0; i < 3; i++)
                                u = 3 * D[c++],
                                A = new a.Vector3(U[u++],U[u++],U[u]),
                                w.vertexNormals.push(A);
                        if (b && (l = D[c++],
                        w.color.setHex(I[l])),
                        _)
                            for (i = 0; i < 3; i++)
                                l = D[c++],
                                w.vertexColors.push(new a.Color(I[l]));
                        s.faces.push(w)
                    }
            }
            function i() {
                var e = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                if (t.skinWeights)
                    for (var r = 0, i = t.skinWeights.length; r < i; r += e) {
                        var n = t.skinWeights[r]
                          , o = e > 1 ? t.skinWeights[r + 1] : 0
                          , c = e > 2 ? t.skinWeights[r + 2] : 0
                          , h = e > 3 ? t.skinWeights[r + 3] : 0;
                        s.skinWeights.push(new a.Vector4(n,o,c,h))
                    }
                if (t.skinIndices)
                    for (var r = 0, i = t.skinIndices.length; r < i; r += e) {
                        var l = t.skinIndices[r]
                          , u = e > 1 ? t.skinIndices[r + 1] : 0
                          , d = e > 2 ? t.skinIndices[r + 2] : 0
                          , p = e > 3 ? t.skinIndices[r + 3] : 0;
                        s.skinIndices.push(new a.Vector4(l,u,d,p))
                    }
                s.bones = t.bones,
                s.bones && s.bones.length > 0 && (s.skinWeights.length !== s.skinIndices.length || s.skinIndices.length !== s.vertices.length) && console.warn("When skinning, number of vertices (" + s.vertices.length + "), skinIndices (" + s.skinIndices.length + "), and skinWeights (" + s.skinWeights.length + ") should match.")
            }
            function n(e) {
                if (void 0 !== t.morphTargets)
                    for (var r = 0, i = t.morphTargets.length; r < i; r++) {
                        s.morphTargets[r] = {},
                        s.morphTargets[r].name = t.morphTargets[r].name,
                        s.morphTargets[r].vertices = [];
                        for (var n = s.morphTargets[r].vertices, o = t.morphTargets[r].vertices, c = 0, h = o.length; c < h; c += 3) {
                            var l = new a.Vector3;
                            l.x = o[c] * e,
                            l.y = o[c + 1] * e,
                            l.z = o[c + 2] * e,
                            n.push(l)
                        }
                    }
                if (void 0 !== t.morphColors && t.morphColors.length > 0) {
                    console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                    for (var u = s.faces, d = t.morphColors[0].colors, r = 0, i = u.length; r < i; r++)
                        u[r].color.fromArray(d, 3 * r)
                }
            }
            function o() {
                var e = []
                  , r = [];
                void 0 !== t.animation && r.push(t.animation),
                void 0 !== t.animations && (t.animations.length ? r = r.concat(t.animations) : r.push(t.animations));
                for (var i = 0; i < r.length; i++) {
                    var n = a.AnimationClip.parseAnimation(r[i], s.bones);
                    n && e.push(n)
                }
                if (s.morphTargets) {
                    var o = a.AnimationClip.CreateClipsFromMorphTargetSequences(s.morphTargets, 10);
                    e = e.concat(o)
                }
                e.length > 0 && (s.animations = e)
            }
            var s = new a.Geometry
              , c = void 0 !== t.scale ? 1 / t.scale : 1;
            if (r(c),
            i(),
            n(c),
            o(),
            s.computeFaceNormals(),
            s.computeBoundingSphere(),
            void 0 === t.materials || 0 === t.materials.length)
                return {
                    geometry: s
                };
            var h = a.Loader.prototype.initMaterials(t.materials, e, this.crossOrigin);
            return {
                geometry: s,
                materials: h
            }
        }
    }),
    a.LoadingManager = function(t, e, r) {
        var i = this
          , n = !1
          , a = 0
          , o = 0;
        this.onStart = void 0,
        this.onLoad = t,
        this.onProgress = e,
        this.onError = r,
        this.itemStart = function(t) {
            o++,
            n === !1 && void 0 !== i.onStart && i.onStart(t, a, o),
            n = !0
        }
        ,
        this.itemEnd = function(t) {
            a++,
            void 0 !== i.onProgress && i.onProgress(t, a, o),
            a === o && (n = !1,
            void 0 !== i.onLoad && i.onLoad())
        }
        ,
        this.itemError = function(t) {
            void 0 !== i.onError && i.onError(t)
        }
    }
    ,
    a.DefaultLoadingManager = new a.LoadingManager,
    a.BufferGeometryLoader = function(t) {
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager
    }
    ,
    Object.assign(a.BufferGeometryLoader.prototype, {
        load: function(t, e, r, i) {
            var n = this
              , o = new a.XHRLoader(n.manager);
            o.load(t, function(t) {
                e(n.parse(JSON.parse(t)))
            }, r, i)
        },
        parse: function(t) {
            var e = new a.BufferGeometry
              , r = t.data.index
              , i = {
                Int8Array: Int8Array,
                Uint8Array: Uint8Array,
                Uint8ClampedArray: Uint8ClampedArray,
                Int16Array: Int16Array,
                Uint16Array: Uint16Array,
                Int32Array: Int32Array,
                Uint32Array: Uint32Array,
                Float32Array: Float32Array,
                Float64Array: Float64Array
            };
            if (void 0 !== r) {
                var n = new i[r.type](r.array);
                e.setIndex(new a.BufferAttribute(n,1))
            }
            var o = t.data.attributes;
            for (var s in o) {
                var c = o[s]
                  , n = new i[c.type](c.array);
                e.addAttribute(s, new a.BufferAttribute(n,c.itemSize,c.normalized))
            }
            var h = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== h)
                for (var l = 0, u = h.length; l !== u; ++l) {
                    var d = h[l];
                    e.addGroup(d.start, d.count, d.materialIndex)
                }
            var p = t.data.boundingSphere;
            if (void 0 !== p) {
                var f = new a.Vector3;
                void 0 !== p.center && f.fromArray(p.center),
                e.boundingSphere = new a.Sphere(f,p.radius)
            }
            return e
        }
    }),
    a.MaterialLoader = function(t) {
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager,
        this.textures = {}
    }
    ,
    Object.assign(a.MaterialLoader.prototype, {
        load: function(t, e, r, i) {
            var n = this
              , o = new a.XHRLoader(n.manager);
            o.load(t, function(t) {
                e(n.parse(JSON.parse(t)))
            }, r, i)
        },
        setTextures: function(t) {
            this.textures = t
        },
        getTexture: function(t) {
            var e = this.textures;
            return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t),
            e[t]
        },
        parse: function(t) {
            var e = new a[t.type];
            if (void 0 !== t.uuid && (e.uuid = t.uuid),
            void 0 !== t.name && (e.name = t.name),
            void 0 !== t.color && e.color.setHex(t.color),
            void 0 !== t.roughness && (e.roughness = t.roughness),
            void 0 !== t.metalness && (e.metalness = t.metalness),
            void 0 !== t.emissive && e.emissive.setHex(t.emissive),
            void 0 !== t.specular && e.specular.setHex(t.specular),
            void 0 !== t.shininess && (e.shininess = t.shininess),
            void 0 !== t.uniforms && (e.uniforms = t.uniforms),
            void 0 !== t.vertexShader && (e.vertexShader = t.vertexShader),
            void 0 !== t.fragmentShader && (e.fragmentShader = t.fragmentShader),
            void 0 !== t.vertexColors && (e.vertexColors = t.vertexColors),
            void 0 !== t.shading && (e.shading = t.shading),
            void 0 !== t.blending && (e.blending = t.blending),
            void 0 !== t.side && (e.side = t.side),
            void 0 !== t.opacity && (e.opacity = t.opacity),
            void 0 !== t.transparent && (e.transparent = t.transparent),
            void 0 !== t.alphaTest && (e.alphaTest = t.alphaTest),
            void 0 !== t.depthTest && (e.depthTest = t.depthTest),
            void 0 !== t.depthWrite && (e.depthWrite = t.depthWrite),
            void 0 !== t.colorWrite && (e.colorWrite = t.colorWrite),
            void 0 !== t.wireframe && (e.wireframe = t.wireframe),
            void 0 !== t.wireframeLinewidth && (e.wireframeLinewidth = t.wireframeLinewidth),
            void 0 !== t.size && (e.size = t.size),
            void 0 !== t.sizeAttenuation && (e.sizeAttenuation = t.sizeAttenuation),
            void 0 !== t.map && (e.map = this.getTexture(t.map)),
            void 0 !== t.alphaMap && (e.alphaMap = this.getTexture(t.alphaMap),
            e.transparent = !0),
            void 0 !== t.bumpMap && (e.bumpMap = this.getTexture(t.bumpMap)),
            void 0 !== t.bumpScale && (e.bumpScale = t.bumpScale),
            void 0 !== t.normalMap && (e.normalMap = this.getTexture(t.normalMap)),
            void 0 !== t.normalScale) {
                var r = t.normalScale;
                Array.isArray(r) === !1 && (r = [r, r]),
                e.normalScale = (new a.Vector2).fromArray(r)
            }
            if (void 0 !== t.displacementMap && (e.displacementMap = this.getTexture(t.displacementMap)),
            void 0 !== t.displacementScale && (e.displacementScale = t.displacementScale),
            void 0 !== t.displacementBias && (e.displacementBias = t.displacementBias),
            void 0 !== t.roughnessMap && (e.roughnessMap = this.getTexture(t.roughnessMap)),
            void 0 !== t.metalnessMap && (e.metalnessMap = this.getTexture(t.metalnessMap)),
            void 0 !== t.emissiveMap && (e.emissiveMap = this.getTexture(t.emissiveMap)),
            void 0 !== t.emissiveIntensity && (e.emissiveIntensity = t.emissiveIntensity),
            void 0 !== t.specularMap && (e.specularMap = this.getTexture(t.specularMap)),
            void 0 !== t.envMap && (e.envMap = this.getTexture(t.envMap),
            e.combine = a.MultiplyOperation),
            void 0 !== t.reflectivity && (e.reflectivity = t.reflectivity),
            void 0 !== t.lightMap && (e.lightMap = this.getTexture(t.lightMap)),
            void 0 !== t.lightMapIntensity && (e.lightMapIntensity = t.lightMapIntensity),
            void 0 !== t.aoMap && (e.aoMap = this.getTexture(t.aoMap)),
            void 0 !== t.aoMapIntensity && (e.aoMapIntensity = t.aoMapIntensity),
            void 0 !== t.materials)
                for (var i = 0, n = t.materials.length; i < n; i++)
                    e.materials.push(this.parse(t.materials[i]));
            return e
        }
    }),
    a.ObjectLoader = function(t) {
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager,
        this.texturePath = ""
    }
    ,
    Object.assign(a.ObjectLoader.prototype, {
        load: function(t, e, r, i) {
            "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
            var n = this
              , o = new a.XHRLoader(n.manager);
            o.load(t, function(t) {
                n.parse(JSON.parse(t), e)
            }, r, i)
        },
        setTexturePath: function(t) {
            this.texturePath = t
        },
        setCrossOrigin: function(t) {
            this.crossOrigin = t
        },
        parse: function(t, e) {
            var r = this.parseGeometries(t.geometries)
              , i = this.parseImages(t.images, function() {
                void 0 !== e && e(o)
            })
              , n = this.parseTextures(t.textures, i)
              , a = this.parseMaterials(t.materials, n)
              , o = this.parseObject(t.object, r, a);
            return t.animations && (o.animations = this.parseAnimations(t.animations)),
            void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(o),
            o
        },
        parseGeometries: function(t) {
            var e = {};
            if (void 0 !== t)
                for (var r = new a.JSONLoader, i = new a.BufferGeometryLoader, n = 0, o = t.length; n < o; n++) {
                    var s, c = t[n];
                    switch (c.type) {
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        s = new a[c.type](c.width,c.height,c.widthSegments,c.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                    case "CubeGeometry":
                        s = new a[c.type](c.width,c.height,c.depth,c.widthSegments,c.heightSegments,c.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        s = new a[c.type](c.radius,c.segments,c.thetaStart,c.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        s = new a[c.type](c.radiusTop,c.radiusBottom,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        s = new a[c.type](c.radius,c.height,c.radialSegments,c.heightSegments,c.openEnded,c.thetaStart,c.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        s = new a[c.type](c.radius,c.widthSegments,c.heightSegments,c.phiStart,c.phiLength,c.thetaStart,c.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "IcosahedronGeometry":
                    case "OctahedronGeometry":
                    case "TetrahedronGeometry":
                        s = new a[c.type](c.radius,c.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        s = new a[c.type](c.innerRadius,c.outerRadius,c.thetaSegments,c.phiSegments,c.thetaStart,c.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        s = new a[c.type](c.radius,c.tube,c.radialSegments,c.tubularSegments,c.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        s = new a[c.type](c.radius,c.tube,c.tubularSegments,c.radialSegments,c.p,c.q);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        s = new a[c.type](c.points,c.segments,c.phiStart,c.phiLength);
                        break;
                    case "BufferGeometry":
                        s = i.parse(c);
                        break;
                    case "Geometry":
                        s = r.parse(c.data, this.texturePath).geometry;
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + c.type + '"');
                        continue
                    }
                    s.uuid = c.uuid,
                    void 0 !== c.name && (s.name = c.name),
                    e[c.uuid] = s
                }
            return e
        },
        parseMaterials: function(t, e) {
            var r = {};
            if (void 0 !== t) {
                var i = new a.MaterialLoader;
                i.setTextures(e);
                for (var n = 0, o = t.length; n < o; n++) {
                    var s = i.parse(t[n]);
                    r[s.uuid] = s
                }
            }
            return r
        },
        parseAnimations: function(t) {
            for (var e = [], r = 0; r < t.length; r++) {
                var i = a.AnimationClip.parse(t[r]);
                e.push(i)
            }
            return e
        },
        parseImages: function(t, e) {
            function r(t) {
                return i.manager.itemStart(t),
                s.load(t, function() {
                    i.manager.itemEnd(t)
                })
            }
            var i = this
              , n = {};
            if (void 0 !== t && t.length > 0) {
                var o = new a.LoadingManager(e)
                  , s = new a.ImageLoader(o);
                s.setCrossOrigin(this.crossOrigin);
                for (var c = 0, h = t.length; c < h; c++) {
                    var l = t[c]
                      , u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url) ? l.url : i.texturePath + l.url;
                    n[l.uuid] = r(u)
                }
            }
            return n
        },
        parseTextures: function(t, e) {
            function r(t) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t),
                a[t])
            }
            var i = {};
            if (void 0 !== t)
                for (var n = 0, o = t.length; n < o; n++) {
                    var s = t[n];
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid),
                    void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                    var c = new a.Texture(e[s.image]);
                    c.needsUpdate = !0,
                    c.uuid = s.uuid,
                    void 0 !== s.name && (c.name = s.name),
                    void 0 !== s.mapping && (c.mapping = r(s.mapping)),
                    void 0 !== s.offset && c.offset.fromArray(s.offset),
                    void 0 !== s.repeat && c.repeat.fromArray(s.repeat),
                    void 0 !== s.wrap && (c.wrapS = r(s.wrap[0]),
                    c.wrapT = r(s.wrap[1])),
                    void 0 !== s.minFilter && (c.minFilter = r(s.minFilter)),
                    void 0 !== s.magFilter && (c.magFilter = r(s.magFilter)),
                    void 0 !== s.anisotropy && (c.anisotropy = s.anisotropy),
                    void 0 !== s.flipY && (c.flipY = s.flipY),
                    i[s.uuid] = c
                }
            return i
        },
        parseObject: function() {
            var t = new a.Matrix4;
            return function(e, r, i) {
                function n(t) {
                    return void 0 === r[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t),
                    r[t]
                }
                function o(t) {
                    if (void 0 !== t)
                        return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined material", t),
                        i[t]
                }
                var s;
                switch (e.type) {
                case "Scene":
                    s = new a.Scene;
                    break;
                case "PerspectiveCamera":
                    s = new a.PerspectiveCamera(e.fov,e.aspect,e.near,e.far),
                    void 0 !== e.focus && (s.focus = e.focus),
                    void 0 !== e.zoom && (s.zoom = e.zoom),
                    void 0 !== e.filmGauge && (s.filmGauge = e.filmGauge),
                    void 0 !== e.filmOffset && (s.filmOffset = e.filmOffset),
                    void 0 !== e.view && (s.view = Object.assign({}, e.view));
                    break;
                case "OrthographicCamera":
                    s = new a.OrthographicCamera(e.left,e.right,e.top,e.bottom,e.near,e.far);
                    break;
                case "AmbientLight":
                    s = new a.AmbientLight(e.color,e.intensity);
                    break;
                case "DirectionalLight":
                    s = new a.DirectionalLight(e.color,e.intensity);
                    break;
                case "PointLight":
                    s = new a.PointLight(e.color,e.intensity,e.distance,e.decay);
                    break;
                case "SpotLight":
                    s = new a.SpotLight(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);
                    break;
                case "HemisphereLight":
                    s = new a.HemisphereLight(e.color,e.groundColor,e.intensity);
                    break;
                case "Mesh":
                    var c = n(e.geometry)
                      , h = o(e.material);
                    s = c.bones && c.bones.length > 0 ? new a.SkinnedMesh(c,h) : new a.Mesh(c,h);
                    break;
                case "LOD":
                    s = new a.LOD;
                    break;
                case "Line":
                    s = new a.Line(n(e.geometry),o(e.material),e.mode);
                    break;
                case "PointCloud":
                case "Points":
                    s = new a.Points(n(e.geometry),o(e.material));
                    break;
                case "Sprite":
                    s = new a.Sprite(o(e.material));
                    break;
                case "Group":
                    s = new a.Group;
                    break;
                default:
                    s = new a.Object3D
                }
                if (s.uuid = e.uuid,
                void 0 !== e.name && (s.name = e.name),
                void 0 !== e.matrix ? (t.fromArray(e.matrix),
                t.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== e.position && s.position.fromArray(e.position),
                void 0 !== e.rotation && s.rotation.fromArray(e.rotation),
                void 0 !== e.scale && s.scale.fromArray(e.scale)),
                void 0 !== e.castShadow && (s.castShadow = e.castShadow),
                void 0 !== e.receiveShadow && (s.receiveShadow = e.receiveShadow),
                void 0 !== e.visible && (s.visible = e.visible),
                void 0 !== e.userData && (s.userData = e.userData),
                void 0 !== e.children)
                    for (var l in e.children)
                        s.add(this.parseObject(e.children[l], r, i));
                if ("LOD" === e.type)
                    for (var u = e.levels, d = 0; d < u.length; d++) {
                        var p = u[d]
                          , l = s.getObjectByProperty("uuid", p.object);
                        void 0 !== l && s.addLevel(l, p.distance)
                    }
                return s
            }
        }()
    }),
    a.TextureLoader = function(t) {
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager
    }
    ,
    Object.assign(a.TextureLoader.prototype, {
        load: function(t, e, r, i) {
            var n = new a.Texture
              , o = new a.ImageLoader(this.manager);
            return o.setCrossOrigin(this.crossOrigin),
            o.setPath(this.path),
            o.load(t, function(r) {
                var i = t.search(/\.(jpg|jpeg)$/) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                n.format = i ? a.RGBFormat : a.RGBAFormat,
                n.image = r,
                n.needsUpdate = !0,
                void 0 !== e && e(n)
            }, r, i),
            n
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    a.CubeTextureLoader = function(t) {
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager
    }
    ,
    Object.assign(a.CubeTextureLoader.prototype, {
        load: function(t, e, r, i) {
            function n(r) {
                s.load(t[r], function(t) {
                    o.images[r] = t,
                    c++,
                    6 === c && (o.needsUpdate = !0,
                    e && e(o))
                }, void 0, i)
            }
            var o = new a.CubeTexture
              , s = new a.ImageLoader(this.manager);
            s.setCrossOrigin(this.crossOrigin),
            s.setPath(this.path);
            for (var c = 0, h = 0; h < t.length; ++h)
                n(h);
            return o
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    a.DataTextureLoader = a.BinaryTextureLoader = function(t) {
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager,
        this._parser = null
    }
    ,
    Object.assign(a.BinaryTextureLoader.prototype, {
        load: function(t, e, r, i) {
            var n = this
              , o = new a.DataTexture
              , s = new a.XHRLoader(this.manager);
            return s.setResponseType("arraybuffer"),
            s.load(t, function(t) {
                var r = n._parser(t);
                r && (void 0 !== r.image ? o.image = r.image : void 0 !== r.data && (o.image.width = r.width,
                o.image.height = r.height,
                o.image.data = r.data),
                o.wrapS = void 0 !== r.wrapS ? r.wrapS : a.ClampToEdgeWrapping,
                o.wrapT = void 0 !== r.wrapT ? r.wrapT : a.ClampToEdgeWrapping,
                o.magFilter = void 0 !== r.magFilter ? r.magFilter : a.LinearFilter,
                o.minFilter = void 0 !== r.minFilter ? r.minFilter : a.LinearMipMapLinearFilter,
                o.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1,
                void 0 !== r.format && (o.format = r.format),
                void 0 !== r.type && (o.type = r.type),
                void 0 !== r.mipmaps && (o.mipmaps = r.mipmaps),
                1 === r.mipmapCount && (o.minFilter = a.LinearFilter),
                o.needsUpdate = !0,
                e && e(o, r))
            }, r, i),
            o
        }
    }),
    a.CompressedTextureLoader = function(t) {
        this.manager = void 0 !== t ? t : a.DefaultLoadingManager,
        this._parser = null
    }
    ,
    Object.assign(a.CompressedTextureLoader.prototype, {
        load: function(t, e, r, i) {
            function n(n) {
                h.load(t[n], function(t) {
                    var r = o._parser(t, !0);
                    s[n] = {
                        width: r.width,
                        height: r.height,
                        format: r.format,
                        mipmaps: r.mipmaps
                    },
                    l += 1,
                    6 === l && (1 === r.mipmapCount && (c.minFilter = a.LinearFilter),
                    c.format = r.format,
                    c.needsUpdate = !0,
                    e && e(c))
                }, r, i)
            }
            var o = this
              , s = []
              , c = new a.CompressedTexture;
            c.image = s;
            var h = new a.XHRLoader(this.manager);
            if (h.setPath(this.path),
            h.setResponseType("arraybuffer"),
            Array.isArray(t))
                for (var l = 0, u = 0, d = t.length; u < d; ++u)
                    n(u);
            else
                h.load(t, function(t) {
                    var r = o._parser(t, !0);
                    if (r.isCubemap)
                        for (var i = r.mipmaps.length / r.mipmapCount, n = 0; n < i; n++) {
                            s[n] = {
                                mipmaps: []
                            };
                            for (var h = 0; h < r.mipmapCount; h++)
                                s[n].mipmaps.push(r.mipmaps[n * r.mipmapCount + h]),
                                s[n].format = r.format,
                                s[n].width = r.width,
                                s[n].height = r.height
                        }
                    else
                        c.image.width = r.width,
                        c.image.height = r.height,
                        c.mipmaps = r.mipmaps;
                    1 === r.mipmapCount && (c.minFilter = a.LinearFilter),
                    c.format = r.format,
                    c.needsUpdate = !0,
                    e && e(c)
                }, r, i);
            return c
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    a.Material = function() {
        Object.defineProperty(this, "id", {
            value: a.MaterialIdCount++
        }),
        this.uuid = a.Math.generateUUID(),
        this.name = "",
        this.type = "Material",
        this.fog = !0,
        this.lights = !0,
        this.blending = a.NormalBlending,
        this.side = a.FrontSide,
        this.shading = a.SmoothShading,
        this.vertexColors = a.NoColors,
        this.opacity = 1,
        this.transparent = !1,
        this.blendSrc = a.SrcAlphaFactor,
        this.blendDst = a.OneMinusSrcAlphaFactor,
        this.blendEquation = a.AddEquation,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.depthFunc = a.LessEqualDepth,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.clippingPlanes = null,
        this.clipShadows = !1,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.alphaTest = 0,
        this.premultipliedAlpha = !1,
        this.overdraw = 0,
        this.visible = !0,
        this._needsUpdate = !0
    }
    ,
    a.Material.prototype = {
        constructor: a.Material,
        get needsUpdate() {
            return this._needsUpdate
        },
        set needsUpdate(t) {
            t === !0 && this.update(),
            this._needsUpdate = t
        },
        setValues: function(t) {
            if (void 0 !== t)
                for (var e in t) {
                    var r = t[e];
                    if (void 0 !== r) {
                        var i = this[e];
                        void 0 !== i ? i instanceof a.Color ? i.set(r) : i instanceof a.Vector3 && r instanceof a.Vector3 ? i.copy(r) : "overdraw" === e ? this[e] = Number(r) : this[e] = r : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                    } else
                        console.warn("THREE.Material: '" + e + "' parameter is undefined.")
                }
        },
        toJSON: function(t) {
            function e(t) {
                var e = [];
                for (var r in t) {
                    var i = t[r];
                    delete i.metadata,
                    e.push(i)
                }
                return e
            }
            var r = void 0 === t;
            r && (t = {
                textures: {},
                images: {}
            });
            var i = {
                metadata: {
                    version: 4.4,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            if (i.uuid = this.uuid,
            i.type = this.type,
            "" !== this.name && (i.name = this.name),
            this.color instanceof a.Color && (i.color = this.color.getHex()),
            void 0 !== this.roughness && (i.roughness = this.roughness),
            void 0 !== this.metalness && (i.metalness = this.metalness),
            this.emissive instanceof a.Color && (i.emissive = this.emissive.getHex()),
            this.specular instanceof a.Color && (i.specular = this.specular.getHex()),
            void 0 !== this.shininess && (i.shininess = this.shininess),
            this.map instanceof a.Texture && (i.map = this.map.toJSON(t).uuid),
            this.alphaMap instanceof a.Texture && (i.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap instanceof a.Texture && (i.lightMap = this.lightMap.toJSON(t).uuid),
            this.bumpMap instanceof a.Texture && (i.bumpMap = this.bumpMap.toJSON(t).uuid,
            i.bumpScale = this.bumpScale),
            this.normalMap instanceof a.Texture && (i.normalMap = this.normalMap.toJSON(t).uuid,
            i.normalScale = this.normalScale.toArray()),
            this.displacementMap instanceof a.Texture && (i.displacementMap = this.displacementMap.toJSON(t).uuid,
            i.displacementScale = this.displacementScale,
            i.displacementBias = this.displacementBias),
            this.roughnessMap instanceof a.Texture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap instanceof a.Texture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap instanceof a.Texture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap instanceof a.Texture && (i.specularMap = this.specularMap.toJSON(t).uuid),
            this.envMap instanceof a.Texture && (i.envMap = this.envMap.toJSON(t).uuid,
            i.reflectivity = this.reflectivity),
            void 0 !== this.size && (i.size = this.size),
            void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation),
            this.blending !== a.NormalBlending && (i.blending = this.blending),
            this.shading !== a.SmoothShading && (i.shading = this.shading),
            this.side !== a.FrontSide && (i.side = this.side),
            this.vertexColors !== a.NoColors && (i.vertexColors = this.vertexColors),
            this.opacity < 1 && (i.opacity = this.opacity),
            this.transparent === !0 && (i.transparent = this.transparent),
            this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
            this.premultipliedAlpha === !0 && (i.premultipliedAlpha = this.premultipliedAlpha),
            this.wireframe === !0 && (i.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth),
            r) {
                var n = e(t.textures)
                  , o = e(t.images);
                n.length > 0 && (i.textures = n),
                o.length > 0 && (i.images = o)
            }
            return i
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.name = t.name,
            this.fog = t.fog,
            this.lights = t.lights,
            this.blending = t.blending,
            this.side = t.side,
            this.shading = t.shading,
            this.vertexColors = t.vertexColors,
            this.opacity = t.opacity,
            this.transparent = t.transparent,
            this.blendSrc = t.blendSrc,
            this.blendDst = t.blendDst,
            this.blendEquation = t.blendEquation,
            this.blendSrcAlpha = t.blendSrcAlpha,
            this.blendDstAlpha = t.blendDstAlpha,
            this.blendEquationAlpha = t.blendEquationAlpha,
            this.depthFunc = t.depthFunc,
            this.depthTest = t.depthTest,
            this.depthWrite = t.depthWrite,
            this.colorWrite = t.colorWrite,
            this.precision = t.precision,
            this.polygonOffset = t.polygonOffset,
            this.polygonOffsetFactor = t.polygonOffsetFactor,
            this.polygonOffsetUnits = t.polygonOffsetUnits,
            this.alphaTest = t.alphaTest,
            this.premultipliedAlpha = t.premultipliedAlpha,
            this.overdraw = t.overdraw,
            this.visible = t.visible,
            this.clipShadows = t.clipShadows;
            var e = t.clippingPlanes
              , r = null;
            if (null !== e) {
                var i = e.length;
                r = new Array(i);
                for (var n = 0; n !== i; ++n)
                    r[n] = e[n].clone()
            }
            return this.clippingPlanes = r,
            this
        },
        update: function() {
            this.dispatchEvent({
                type: "update"
            })
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    },
    Object.assign(a.Material.prototype, a.EventDispatcher.prototype),
    a.MaterialIdCount = 0,
    a.LineBasicMaterial = function(t) {
        a.Material.call(this),
        this.type = "LineBasicMaterial",
        this.color = new a.Color(16777215),
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.lights = !1,
        this.setValues(t)
    }
    ,
    a.LineBasicMaterial.prototype = Object.create(a.Material.prototype),
    a.LineBasicMaterial.prototype.constructor = a.LineBasicMaterial,
    a.LineBasicMaterial.prototype.copy = function(t) {
        return a.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.linewidth = t.linewidth,
        this.linecap = t.linecap,
        this.linejoin = t.linejoin,
        this
    }
    ,
    a.LineDashedMaterial = function(t) {
        a.Material.call(this),
        this.type = "LineDashedMaterial",
        this.color = new a.Color(16777215),
        this.linewidth = 1,
        this.scale = 1,
        this.dashSize = 3,
        this.gapSize = 1,
        this.lights = !1,
        this.setValues(t)
    }
    ,
    a.LineDashedMaterial.prototype = Object.create(a.Material.prototype),
    a.LineDashedMaterial.prototype.constructor = a.LineDashedMaterial,
    a.LineDashedMaterial.prototype.copy = function(t) {
        return a.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.linewidth = t.linewidth,
        this.scale = t.scale,
        this.dashSize = t.dashSize,
        this.gapSize = t.gapSize,
        this
    }
    ,
    a.MeshBasicMaterial = function(t) {
        a.Material.call(this),
        this.type = "MeshBasicMaterial",
        this.color = new a.Color(16777215),
        this.map = null,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = a.MultiplyOperation,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.lights = !1,
        this.setValues(t)
    }
    ,
    a.MeshBasicMaterial.prototype = Object.create(a.Material.prototype),
    a.MeshBasicMaterial.prototype.constructor = a.MeshBasicMaterial,
    a.MeshBasicMaterial.prototype.copy = function(t) {
        return a.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this
    }
    ,
    a.MeshDepthMaterial = function(t) {
        a.Material.call(this),
        this.type = "MeshDepthMaterial",
        this.depthPacking = a.BasicDepthPacking,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.setValues(t)
    }
    ,
    a.MeshDepthMaterial.prototype = Object.create(a.Material.prototype),
    a.MeshDepthMaterial.prototype.constructor = a.MeshDepthMaterial,
    a.MeshDepthMaterial.prototype.copy = function(t) {
        return a.Material.prototype.copy.call(this, t),
        this.depthPacking = t.depthPacking,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this
    }
    ,
    a.MeshLambertMaterial = function(t) {
        a.Material.call(this),
        this.type = "MeshLambertMaterial",
        this.color = new a.Color(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new a.Color(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = a.MultiplyOperation,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    ,
    a.MeshLambertMaterial.prototype = Object.create(a.Material.prototype),
    a.MeshLambertMaterial.prototype.constructor = a.MeshLambertMaterial,
    a.MeshLambertMaterial.prototype.copy = function(t) {
        return a.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    a.MeshNormalMaterial = function(t) {
        a.Material.call(this, t),
        this.type = "MeshNormalMaterial",
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.morphTargets = !1,
        this.setValues(t)
    }
    ,
    a.MeshNormalMaterial.prototype = Object.create(a.Material.prototype),
    a.MeshNormalMaterial.prototype.constructor = a.MeshNormalMaterial,
    a.MeshNormalMaterial.prototype.copy = function(t) {
        return a.Material.prototype.copy.call(this, t),
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this
    }
    ,
    a.MeshPhongMaterial = function(t) {
        a.Material.call(this),
        this.type = "MeshPhongMaterial",
        this.color = new a.Color(16777215),
        this.specular = new a.Color(1118481),
        this.shininess = 30,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new a.Color(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalScale = new a.Vector2(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = a.MultiplyOperation,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    ,
    a.MeshPhongMaterial.prototype = Object.create(a.Material.prototype),
    a.MeshPhongMaterial.prototype.constructor = a.MeshPhongMaterial,
    a.MeshPhongMaterial.prototype.copy = function(t) {
        return a.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.specular.copy(t.specular),
        this.shininess = t.shininess,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    a.MeshStandardMaterial = function(t) {
        a.Material.call(this),
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new a.Color(16777215),
        this.roughness = .5,
        this.metalness = .5,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new a.Color(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalScale = new a.Vector2(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapIntensity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    ,
    a.MeshStandardMaterial.prototype = Object.create(a.Material.prototype),
    a.MeshStandardMaterial.prototype.constructor = a.MeshStandardMaterial,
    a.MeshStandardMaterial.prototype.copy = function(t) {
        return a.Material.prototype.copy.call(this, t),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(t.color),
        this.roughness = t.roughness,
        this.metalness = t.metalness,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.roughnessMap = t.roughnessMap,
        this.metalnessMap = t.metalnessMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.envMapIntensity = t.envMapIntensity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    a.MeshPhysicalMaterial = function(t) {
        a.MeshStandardMaterial.call(this),
        this.defines = {
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.reflectivity = .5,
        this.clearCoat = 0,
        this.clearCoatRoughness = 0,
        this.setValues(t)
    }
    ,
    a.MeshPhysicalMaterial.prototype = Object.create(a.MeshStandardMaterial.prototype),
    a.MeshPhysicalMaterial.prototype.constructor = a.MeshPhysicalMaterial,
    a.MeshPhysicalMaterial.prototype.copy = function(t) {
        return a.MeshStandardMaterial.prototype.copy.call(this, t),
        this.defines = {
            PHYSICAL: ""
        },
        this.reflectivity = t.reflectivity,
        this.clearCoat = t.clearCoat,
        this.clearCoatRoughness = t.clearCoatRoughness,
        this
    }
    ,
    a.MultiMaterial = function(t) {
        this.uuid = a.Math.generateUUID(),
        this.type = "MultiMaterial",
        this.materials = t instanceof Array ? t : [],
        this.visible = !0
    }
    ,
    a.MultiMaterial.prototype = {
        constructor: a.MultiMaterial,
        toJSON: function(t) {
            for (var e = {
                metadata: {
                    version: 4.2,
                    type: "material",
                    generator: "MaterialExporter"
                },
                uuid: this.uuid,
                type: this.type,
                materials: []
            }, r = this.materials, i = 0, n = r.length; i < n; i++) {
                var a = r[i].toJSON(t);
                delete a.metadata,
                e.materials.push(a)
            }
            return e.visible = this.visible,
            e
        },
        clone: function() {
            for (var t = new this.constructor, e = 0; e < this.materials.length; e++)
                t.materials.push(this.materials[e].clone());
            return t.visible = this.visible,
            t
        }
    },
    a.PointsMaterial = function(t) {
        a.Material.call(this),
        this.type = "PointsMaterial",
        this.color = new a.Color(16777215),
        this.map = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.lights = !1,
        this.setValues(t)
    }
    ,
    a.PointsMaterial.prototype = Object.create(a.Material.prototype),
    a.PointsMaterial.prototype.constructor = a.PointsMaterial,
    a.PointsMaterial.prototype.copy = function(t) {
        return a.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.size = t.size,
        this.sizeAttenuation = t.sizeAttenuation,
        this
    }
    ,
    a.ShaderMaterial = function(t) {
        a.Material.call(this),
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        },
        this.index0AttributeName = void 0,
        void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
        this.setValues(t))
    }
    ,
    a.ShaderMaterial.prototype = Object.create(a.Material.prototype),
    a.ShaderMaterial.prototype.constructor = a.ShaderMaterial,
    a.ShaderMaterial.prototype.copy = function(t) {
        return a.Material.prototype.copy.call(this, t),
        this.fragmentShader = t.fragmentShader,
        this.vertexShader = t.vertexShader,
        this.uniforms = a.UniformsUtils.clone(t.uniforms),
        this.defines = t.defines,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.lights = t.lights,
        this.clipping = t.clipping,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this.extensions = t.extensions,
        this
    }
    ,
    a.ShaderMaterial.prototype.toJSON = function(t) {
        var e = a.Material.prototype.toJSON.call(this, t);
        return e.uniforms = this.uniforms,
        e.vertexShader = this.vertexShader,
        e.fragmentShader = this.fragmentShader,
        e
    }
    ,
    a.RawShaderMaterial = function(t) {
        a.ShaderMaterial.call(this, t),
        this.type = "RawShaderMaterial"
    }
    ,
    a.RawShaderMaterial.prototype = Object.create(a.ShaderMaterial.prototype),
    a.RawShaderMaterial.prototype.constructor = a.RawShaderMaterial,
    a.SpriteMaterial = function(t) {
        a.Material.call(this),
        this.type = "SpriteMaterial",
        this.color = new a.Color(16777215),
        this.map = null,
        this.rotation = 0,
        this.fog = !1,
        this.lights = !1,
        this.setValues(t)
    }
    ,
    a.SpriteMaterial.prototype = Object.create(a.Material.prototype),
    a.SpriteMaterial.prototype.constructor = a.SpriteMaterial,
    a.SpriteMaterial.prototype.copy = function(t) {
        return a.Material.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.rotation = t.rotation,
        this
    }
    ,
    a.ShadowMaterial = function() {
        a.ShaderMaterial.call(this, {
            uniforms: a.UniformsUtils.merge([a.UniformsLib.lights, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: a.ShaderChunk.shadow_vert,
            fragmentShader: a.ShaderChunk.shadow_frag
        }),
        this.lights = !0,
        this.transparent = !0,
        Object.defineProperties(this, {
            opacity: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.opacity.value
                },
                set: function(t) {
                    this.uniforms.opacity.value = t
                }
            }
        })
    }
    ,
    a.ShadowMaterial.prototype = Object.create(a.ShaderMaterial.prototype),
    a.ShadowMaterial.prototype.constructor = a.ShadowMaterial,
    a.Texture = function(t, e, r, i, n, o, s, c, h, l) {
        Object.defineProperty(this, "id", {
            value: a.TextureIdCount++
        }),
        this.uuid = a.Math.generateUUID(),
        this.name = "",
        this.sourceFile = "",
        this.image = void 0 !== t ? t : a.Texture.DEFAULT_IMAGE,
        this.mipmaps = [],
        this.mapping = void 0 !== e ? e : a.Texture.DEFAULT_MAPPING,
        this.wrapS = void 0 !== r ? r : a.ClampToEdgeWrapping,
        this.wrapT = void 0 !== i ? i : a.ClampToEdgeWrapping,
        this.magFilter = void 0 !== n ? n : a.LinearFilter,
        this.minFilter = void 0 !== o ? o : a.LinearMipMapLinearFilter,
        this.anisotropy = void 0 !== h ? h : 1,
        this.format = void 0 !== s ? s : a.RGBAFormat,
        this.type = void 0 !== c ? c : a.UnsignedByteType,
        this.offset = new a.Vector2(0,0),
        this.repeat = new a.Vector2(1,1),
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.encoding = void 0 !== l ? l : a.LinearEncoding,
        this.version = 0,
        this.onUpdate = null
    }
    ,
    a.Texture.DEFAULT_IMAGE = void 0,
    a.Texture.DEFAULT_MAPPING = a.UVMapping,
    a.Texture.prototype = {
        constructor: a.Texture,
        set needsUpdate(t) {
            t === !0 && this.version++
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.image = t.image,
            this.mipmaps = t.mipmaps.slice(0),
            this.mapping = t.mapping,
            this.wrapS = t.wrapS,
            this.wrapT = t.wrapT,
            this.magFilter = t.magFilter,
            this.minFilter = t.minFilter,
            this.anisotropy = t.anisotropy,
            this.format = t.format,
            this.type = t.type,
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.generateMipmaps = t.generateMipmaps,
            this.premultiplyAlpha = t.premultiplyAlpha,
            this.flipY = t.flipY,
            this.unpackAlignment = t.unpackAlignment,
            this.encoding = t.encoding,
            this
        },
        toJSON: function(t) {
            function e(t) {
                var e;
                return void 0 !== t.toDataURL ? e = t : (e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
                e.width = t.width,
                e.height = t.height,
                e.getContext("2d").drawImage(t, 0, 0, t.width, t.height)),
                e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
            }
            if (void 0 !== t.textures[this.uuid])
                return t.textures[this.uuid];
            var r = {
                metadata: {
                    version: 4.4,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var i = this.image;
                void 0 === i.uuid && (i.uuid = a.Math.generateUUID()),
                void 0 === t.images[i.uuid] && (t.images[i.uuid] = {
                    uuid: i.uuid,
                    url: e(i)
                }),
                r.image = i.uuid
            }
            return t.textures[this.uuid] = r,
            r
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(t) {
            if (this.mapping === a.UVMapping) {
                if (t.multiply(this.repeat),
                t.add(this.offset),
                t.x < 0 || t.x > 1)
                    switch (this.wrapS) {
                    case a.RepeatWrapping:
                        t.x = t.x - Math.floor(t.x);
                        break;
                    case a.ClampToEdgeWrapping:
                        t.x = t.x < 0 ? 0 : 1;
                        break;
                    case a.MirroredRepeatWrapping:
                        1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                    }
                if (t.y < 0 || t.y > 1)
                    switch (this.wrapT) {
                    case a.RepeatWrapping:
                        t.y = t.y - Math.floor(t.y);
                        break;
                    case a.ClampToEdgeWrapping:
                        t.y = t.y < 0 ? 0 : 1;
                        break;
                    case a.MirroredRepeatWrapping:
                        1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                    }
                this.flipY && (t.y = 1 - t.y)
            }
        }
    },
    Object.assign(a.Texture.prototype, a.EventDispatcher.prototype),
    a.TextureIdCount = 0,
    a.DepthTexture = function(t, e, r, i, n, o, s, c, h) {
        a.Texture.call(this, null, i, n, o, s, c, a.DepthFormat, r, h),
        this.image = {
            width: t,
            height: e
        },
        this.type = void 0 !== r ? r : a.UnsignedShortType,
        this.magFilter = void 0 !== s ? s : a.NearestFilter,
        this.minFilter = void 0 !== c ? c : a.NearestFilter,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    ,
    a.DepthTexture.prototype = Object.create(a.Texture.prototype),
    a.DepthTexture.prototype.constructor = a.DepthTexture,
    a.CanvasTexture = function(t, e, r, i, n, o, s, c, h) {
        a.Texture.call(this, t, e, r, i, n, o, s, c, h),
        this.needsUpdate = !0
    }
    ,
    a.CanvasTexture.prototype = Object.create(a.Texture.prototype),
    a.CanvasTexture.prototype.constructor = a.CanvasTexture,
    a.CubeTexture = function(t, e, r, i, n, o, s, c, h, l) {
        t = void 0 !== t ? t : [],
        e = void 0 !== e ? e : a.CubeReflectionMapping,
        a.Texture.call(this, t, e, r, i, n, o, s, c, h, l),
        this.flipY = !1
    }
    ,
    a.CubeTexture.prototype = Object.create(a.Texture.prototype),
    a.CubeTexture.prototype.constructor = a.CubeTexture,
    Object.defineProperty(a.CubeTexture.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(t) {
            this.image = t
        }
    }),
    a.CompressedTexture = function(t, e, r, i, n, o, s, c, h, l, u, d) {
        a.Texture.call(this, null, o, s, c, h, l, i, n, u, d),
        this.image = {
            width: e,
            height: r
        },
        this.mipmaps = t,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    ,
    a.CompressedTexture.prototype = Object.create(a.Texture.prototype),
    a.CompressedTexture.prototype.constructor = a.CompressedTexture,
    a.DataTexture = function(t, e, r, i, n, o, s, c, h, l, u, d) {
        a.Texture.call(this, null, o, s, c, h, l, i, n, u, d),
        this.image = {
            data: t,
            width: e,
            height: r
        },
        this.magFilter = void 0 !== h ? h : a.NearestFilter,
        this.minFilter = void 0 !== l ? l : a.NearestFilter,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    ,
    a.DataTexture.prototype = Object.create(a.Texture.prototype),
    a.DataTexture.prototype.constructor = a.DataTexture,
    a.VideoTexture = function(t, e, r, i, n, o, s, c, h) {
        function l() {
            requestAnimationFrame(l),
            t.readyState >= t.HAVE_CURRENT_DATA && (u.needsUpdate = !0)
        }
        a.Texture.call(this, t, e, r, i, n, o, s, c, h),
        this.generateMipmaps = !1;
        var u = this;
        l()
    }
    ,
    a.VideoTexture.prototype = Object.create(a.Texture.prototype),
    a.VideoTexture.prototype.constructor = a.VideoTexture,
    a.Group = function() {
        a.Object3D.call(this),
        this.type = "Group"
    }
    ,
    a.Group.prototype = Object.assign(Object.create(a.Object3D.prototype), {
        constructor: a.Group
    }),
    a.Points = function(t, e) {
        a.Object3D.call(this),
        this.type = "Points",
        this.geometry = void 0 !== t ? t : new a.BufferGeometry,
        this.material = void 0 !== e ? e : new a.PointsMaterial({
            color: 16777215 * Math.random()
        })
    }
    ,
    a.Points.prototype = Object.assign(Object.create(a.Object3D.prototype), {
        constructor: a.Points,
        raycast: function() {
            var t = new a.Matrix4
              , e = new a.Ray
              , r = new a.Sphere;
            return function(i, n) {
                function o(t, r) {
                    var a = e.distanceSqToPoint(t);
                    if (a < d) {
                        var o = e.closestPointToPoint(t);
                        o.applyMatrix4(h);
                        var c = i.ray.origin.distanceTo(o);
                        if (c < i.near || c > i.far)
                            return;
                        n.push({
                            distance: c,
                            distanceToRay: Math.sqrt(a),
                            point: o.clone(),
                            index: r,
                            face: null,
                            object: s
                        })
                    }
                }
                var s = this
                  , c = this.geometry
                  , h = this.matrixWorld
                  , l = i.params.Points.threshold;
                if (null === c.boundingSphere && c.computeBoundingSphere(),
                r.copy(c.boundingSphere),
                r.applyMatrix4(h),
                i.ray.intersectsSphere(r) !== !1) {
                    t.getInverse(h),
                    e.copy(i.ray).applyMatrix4(t);
                    var u = l / ((this.scale.x + this.scale.y + this.scale.z) / 3)
                      , d = u * u
                      , p = new a.Vector3;
                    if (c instanceof a.BufferGeometry) {
                        var f = c.index
                          , m = c.attributes
                          , g = m.position.array;
                        if (null !== f)
                            for (var v = f.array, y = 0, x = v.length; y < x; y++) {
                                var b = v[y];
                                p.fromArray(g, 3 * b),
                                o(p, b)
                            }
                        else
                            for (var y = 0, _ = g.length / 3; y < _; y++)
                                p.fromArray(g, 3 * y),
                                o(p, y)
                    } else
                        for (var M = c.vertices, y = 0, _ = M.length; y < _; y++)
                            o(M[y], y)
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    a.Line = function(t, e, r) {
        return 1 === r ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
        new a.LineSegments(t,e)) : (a.Object3D.call(this),
        this.type = "Line",
        this.geometry = void 0 !== t ? t : new a.BufferGeometry,
        void (this.material = void 0 !== e ? e : new a.LineBasicMaterial({
            color: 16777215 * Math.random()
        })))
    }
    ,
    a.Line.prototype = Object.assign(Object.create(a.Object3D.prototype), {
        constructor: a.Line,
        raycast: function() {
            var t = new a.Matrix4
              , e = new a.Ray
              , r = new a.Sphere;
            return function(i, n) {
                var o = i.linePrecision
                  , s = o * o
                  , c = this.geometry
                  , h = this.matrixWorld;
                if (null === c.boundingSphere && c.computeBoundingSphere(),
                r.copy(c.boundingSphere),
                r.applyMatrix4(h),
                i.ray.intersectsSphere(r) !== !1) {
                    t.getInverse(h),
                    e.copy(i.ray).applyMatrix4(t);
                    var l = new a.Vector3
                      , u = new a.Vector3
                      , d = new a.Vector3
                      , p = new a.Vector3
                      , f = this instanceof a.LineSegments ? 2 : 1;
                    if (c instanceof a.BufferGeometry) {
                        var m = c.index
                          , g = c.attributes
                          , v = g.position.array;
                        if (null !== m)
                            for (var y = m.array, x = 0, b = y.length - 1; x < b; x += f) {
                                var _ = y[x]
                                  , M = y[x + 1];
                                l.fromArray(v, 3 * _),
                                u.fromArray(v, 3 * M);
                                var w = e.distanceSqToSegment(l, u, p, d);
                                if (!(w > s)) {
                                    p.applyMatrix4(this.matrixWorld);
                                    var S = i.ray.origin.distanceTo(p);
                                    S < i.near || S > i.far || n.push({
                                        distance: S,
                                        point: d.clone().applyMatrix4(this.matrixWorld),
                                        index: x,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            }
                        else
                            for (var x = 0, b = v.length / 3 - 1; x < b; x += f) {
                                l.fromArray(v, 3 * x),
                                u.fromArray(v, 3 * x + 3);
                                var w = e.distanceSqToSegment(l, u, p, d);
                                if (!(w > s)) {
                                    p.applyMatrix4(this.matrixWorld);
                                    var S = i.ray.origin.distanceTo(p);
                                    S < i.near || S > i.far || n.push({
                                        distance: S,
                                        point: d.clone().applyMatrix4(this.matrixWorld),
                                        index: x,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            }
                    } else if (c instanceof a.Geometry)
                        for (var E = c.vertices, T = E.length, x = 0; x < T - 1; x += f) {
                            var w = e.distanceSqToSegment(E[x], E[x + 1], p, d);
                            if (!(w > s)) {
                                p.applyMatrix4(this.matrixWorld);
                                var S = i.ray.origin.distanceTo(p);
                                S < i.near || S > i.far || n.push({
                                    distance: S,
                                    point: d.clone().applyMatrix4(this.matrixWorld),
                                    index: x,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    a.LineSegments = function(t, e) {
        a.Line.call(this, t, e),
        this.type = "LineSegments"
    }
    ,
    a.LineSegments.prototype = Object.assign(Object.create(a.Line.prototype), {
        constructor: a.LineSegments
    }),
    a.Mesh = function(t, e) {
        a.Object3D.call(this),
        this.type = "Mesh",
        this.geometry = void 0 !== t ? t : new a.BufferGeometry,
        this.material = void 0 !== e ? e : new a.MeshBasicMaterial({
            color: 16777215 * Math.random()
        }),
        this.drawMode = a.TrianglesDrawMode,
        this.updateMorphTargets()
    }
    ,
    a.Mesh.prototype = Object.assign(Object.create(a.Object3D.prototype), {
        constructor: a.Mesh,
        setDrawMode: function(t) {
            this.drawMode = t
        },
        copy: function(t) {
            return a.Object3D.prototype.copy.call(this, t),
            this.drawMode = t.drawMode,
            this
        },
        updateMorphTargets: function() {
            if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
                this.morphTargetBase = -1,
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (var t = 0, e = this.geometry.morphTargets.length; t < e; t++)
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[this.geometry.morphTargets[t].name] = t
            }
        },
        getMorphTargetIndexByName: function(t) {
            return void 0 !== this.morphTargetDictionary[t] ? this.morphTargetDictionary[t] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + t + " does not exist. Returning 0."),
            0)
        },
        raycast: function() {
            function t(t, e, r, i, n, o, s) {
                return a.Triangle.barycoordFromPoint(t, e, r, i, g),
                n.multiplyScalar(g.x),
                o.multiplyScalar(g.y),
                s.multiplyScalar(g.z),
                n.add(o).add(s),
                n.clone()
            }
            function e(t, e, r, i, n, o, s) {
                var c, h = t.material;
                if (c = h.side === a.BackSide ? r.intersectTriangle(o, n, i, !0, s) : r.intersectTriangle(i, n, o, h.side !== a.DoubleSide, s),
                null === c)
                    return null;
                y.copy(s),
                y.applyMatrix4(t.matrixWorld);
                var l = e.ray.origin.distanceTo(y);
                return l < e.near || l > e.far ? null : {
                    distance: l,
                    point: y.clone(),
                    object: t
                }
            }
            function r(r, i, n, o, l, u, d, g) {
                s.fromArray(o, 3 * u),
                c.fromArray(o, 3 * d),
                h.fromArray(o, 3 * g);
                var y = e(r, i, n, s, c, h, v);
                return y && (l && (p.fromArray(l, 2 * u),
                f.fromArray(l, 2 * d),
                m.fromArray(l, 2 * g),
                y.uv = t(v, s, c, h, p, f, m)),
                y.face = new a.Face3(u,d,g,a.Triangle.normal(s, c, h)),
                y.faceIndex = u),
                y
            }
            var i = new a.Matrix4
              , n = new a.Ray
              , o = new a.Sphere
              , s = new a.Vector3
              , c = new a.Vector3
              , h = new a.Vector3
              , l = new a.Vector3
              , u = new a.Vector3
              , d = new a.Vector3
              , p = new a.Vector2
              , f = new a.Vector2
              , m = new a.Vector2
              , g = new a.Vector3
              , v = new a.Vector3
              , y = new a.Vector3;
            return function(g, y) {
                var x = this.geometry
                  , b = this.material
                  , _ = this.matrixWorld;
                if (void 0 !== b && (null === x.boundingSphere && x.computeBoundingSphere(),
                o.copy(x.boundingSphere),
                o.applyMatrix4(_),
                g.ray.intersectsSphere(o) !== !1 && (i.getInverse(_),
                n.copy(g.ray).applyMatrix4(i),
                null === x.boundingBox || n.intersectsBox(x.boundingBox) !== !1))) {
                    var M, w;
                    if (x instanceof a.BufferGeometry) {
                        var S, E, T, A = x.index, L = x.attributes, C = L.position.array;
                        if (void 0 !== L.uv && (M = L.uv.array),
                        null !== A)
                            for (var R = A.array, P = 0, D = R.length; P < D; P += 3)
                                S = R[P],
                                E = R[P + 1],
                                T = R[P + 2],
                                w = r(this, g, n, C, M, S, E, T),
                                w && (w.faceIndex = Math.floor(P / 3),
                                y.push(w));
                        else
                            for (var P = 0, D = C.length; P < D; P += 9)
                                S = P / 3,
                                E = S + 1,
                                T = S + 2,
                                w = r(this, g, n, C, M, S, E, T),
                                w && (w.index = S,
                                y.push(w))
                    } else if (x instanceof a.Geometry) {
                        var B, U, I, F = b instanceof a.MultiMaterial, O = F === !0 ? b.materials : null, N = x.vertices, G = x.faces, V = x.faceVertexUvs[0];
                        V.length > 0 && (M = V);
                        for (var z = 0, k = G.length; z < k; z++) {
                            var H = G[z]
                              , j = F === !0 ? O[H.materialIndex] : b;
                            if (void 0 !== j) {
                                if (B = N[H.a],
                                U = N[H.b],
                                I = N[H.c],
                                j.morphTargets === !0) {
                                    var W = x.morphTargets
                                      , X = this.morphTargetInfluences;
                                    s.set(0, 0, 0),
                                    c.set(0, 0, 0),
                                    h.set(0, 0, 0);
                                    for (var q = 0, Y = W.length; q < Y; q++) {
                                        var Z = X[q];
                                        if (0 !== Z) {
                                            var K = W[q].vertices;
                                            s.addScaledVector(l.subVectors(K[H.a], B), Z),
                                            c.addScaledVector(u.subVectors(K[H.b], U), Z),
                                            h.addScaledVector(d.subVectors(K[H.c], I), Z)
                                        }
                                    }
                                    s.add(B),
                                    c.add(U),
                                    h.add(I),
                                    B = s,
                                    U = c,
                                    I = h
                                }
                                if (w = e(this, g, n, B, U, I, v)) {
                                    if (M) {
                                        var Q = M[z];
                                        p.copy(Q[0]),
                                        f.copy(Q[1]),
                                        m.copy(Q[2]),
                                        w.uv = t(v, B, U, I, p, f, m)
                                    }
                                    w.face = H,
                                    w.faceIndex = z,
                                    y.push(w)
                                }
                            }
                        }
                    }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    a.Bone = function(t) {
        a.Object3D.call(this),
        this.type = "Bone",
        this.skin = t
    }
    ,
    a.Bone.prototype = Object.assign(Object.create(a.Object3D.prototype), {
        constructor: a.Bone,
        copy: function(t) {
            return a.Object3D.prototype.copy.call(this, t),
            this.skin = t.skin,
            this
        }
    }),
    a.Skeleton = function(t, e, r) {
        if (this.useVertexTexture = void 0 === r || r,
        this.identityMatrix = new a.Matrix4,
        t = t || [],
        this.bones = t.slice(0),
        this.useVertexTexture) {
            var i = Math.sqrt(4 * this.bones.length);
            i = a.Math.nextPowerOfTwo(Math.ceil(i)),
            i = Math.max(i, 4),
            this.boneTextureWidth = i,
            this.boneTextureHeight = i,
            this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4),
            this.boneTexture = new a.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,a.RGBAFormat,a.FloatType)
        } else
            this.boneMatrices = new Float32Array(16 * this.bones.length);
        if (void 0 === e)
            this.calculateInverses();
        else if (this.bones.length === e.length)
            this.boneInverses = e.slice(0);
        else {
            console.warn("THREE.Skeleton bonInverses is the wrong length."),
            this.boneInverses = [];
            for (var n = 0, o = this.bones.length; n < o; n++)
                this.boneInverses.push(new a.Matrix4)
        }
    }
    ,
    Object.assign(a.Skeleton.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var r = new a.Matrix4;
                this.bones[t] && r.getInverse(this.bones[t].matrixWorld),
                this.boneInverses.push(r)
            }
        },
        pose: function() {
            for (var t, e = 0, r = this.bones.length; e < r; e++)
                t = this.bones[e],
                t && t.matrixWorld.getInverse(this.boneInverses[e]);
            for (var e = 0, r = this.bones.length; e < r; e++)
                t = this.bones[e],
                t && (t.parent instanceof a.Bone ? (t.matrix.getInverse(t.parent.matrixWorld),
                t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld),
                t.matrix.decompose(t.position, t.quaternion, t.scale))
        },
        update: function() {
            var t = new a.Matrix4;
            return function() {
                for (var e = 0, r = this.bones.length; e < r; e++) {
                    var i = this.bones[e] ? this.bones[e].matrixWorld : this.identityMatrix;
                    t.multiplyMatrices(i, this.boneInverses[e]),
                    t.toArray(this.boneMatrices, 16 * e)
                }
                this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
            }
        }(),
        clone: function() {
            return new a.Skeleton(this.bones,this.boneInverses,this.useVertexTexture)
        }
    }),
    a.SkinnedMesh = function(t, e, r) {
        a.Mesh.call(this, t, e),
        this.type = "SkinnedMesh",
        this.bindMode = "attached",
        this.bindMatrix = new a.Matrix4,
        this.bindMatrixInverse = new a.Matrix4;
        var i = [];
        if (this.geometry && void 0 !== this.geometry.bones) {
            for (var n, o, s = 0, c = this.geometry.bones.length; s < c; ++s)
                o = this.geometry.bones[s],
                n = new a.Bone(this),
                i.push(n),
                n.name = o.name,
                n.position.fromArray(o.pos),
                n.quaternion.fromArray(o.rotq),
                void 0 !== o.scl && n.scale.fromArray(o.scl);
            for (var s = 0, c = this.geometry.bones.length; s < c; ++s)
                o = this.geometry.bones[s],
                o.parent !== -1 && null !== o.parent && void 0 !== i[o.parent] ? i[o.parent].add(i[s]) : this.add(i[s])
        }
        this.normalizeSkinWeights(),
        this.updateMatrixWorld(!0),
        this.bind(new a.Skeleton(i,void 0,r), this.matrixWorld)
    }
    ,
    a.SkinnedMesh.prototype = Object.assign(Object.create(a.Mesh.prototype), {
        constructor: a.SkinnedMesh,
        bind: function(t, e) {
            this.skeleton = t,
            void 0 === e && (this.updateMatrixWorld(!0),
            this.skeleton.calculateInverses(),
            e = this.matrixWorld),
            this.bindMatrix.copy(e),
            this.bindMatrixInverse.getInverse(e)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            if (this.geometry instanceof a.Geometry)
                for (var t = 0; t < this.geometry.skinWeights.length; t++) {
                    var e = this.geometry.skinWeights[t]
                      , r = 1 / e.lengthManhattan();
                    r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0)
                }
            else if (this.geometry instanceof a.BufferGeometry)
                for (var i = new a.Vector4, n = this.geometry.attributes.skinWeight, t = 0; t < n.count; t++) {
                    i.x = n.getX(t),
                    i.y = n.getY(t),
                    i.z = n.getZ(t),
                    i.w = n.getW(t);
                    var r = 1 / i.lengthManhattan();
                    r !== 1 / 0 ? i.multiplyScalar(r) : i.set(1, 0, 0, 0),
                    n.setXYZW(t, i.x, i.y, i.z, i.w)
                }
        },
        updateMatrixWorld: function(t) {
            a.Mesh.prototype.updateMatrixWorld.call(this, !0),
            "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture).copy(this)
        }
    }),
    a.LOD = function() {
        a.Object3D.call(this),
        this.type = "LOD",
        Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }
    ,
    a.LOD.prototype = Object.assign(Object.create(a.Object3D.prototype), {
        constructor: a.LOD,
        copy: function(t) {
            a.Object3D.prototype.copy.call(this, t, !1);
            for (var e = t.levels, r = 0, i = e.length; r < i; r++) {
                var n = e[r];
                this.addLevel(n.object.clone(), n.distance)
            }
            return this
        },
        addLevel: function(t, e) {
            void 0 === e && (e = 0),
            e = Math.abs(e);
            for (var r = this.levels, i = 0; i < r.length && !(e < r[i].distance); i++)
                ;
            r.splice(i, 0, {
                distance: e,
                object: t
            }),
            this.add(t)
        },
        getObjectForDistance: function(t) {
            for (var e = this.levels, r = 1, i = e.length; r < i && !(t < e[r].distance); r++)
                ;
            return e[r - 1].object
        },
        raycast: function() {
            var t = new a.Vector3;
            return function(e, r) {
                t.setFromMatrixPosition(this.matrixWorld);
                var i = e.ray.origin.distanceTo(t);
                this.getObjectForDistance(i).raycast(e, r)
            }
        }(),
        update: function() {
            var t = new a.Vector3
              , e = new a.Vector3;
            return function(r) {
                var i = this.levels;
                if (i.length > 1) {
                    t.setFromMatrixPosition(r.matrixWorld),
                    e.setFromMatrixPosition(this.matrixWorld);
                    var n = t.distanceTo(e);
                    i[0].object.visible = !0;
                    for (var a = 1, o = i.length; a < o && n >= i[a].distance; a++)
                        i[a - 1].object.visible = !1,
                        i[a].object.visible = !0;
                    for (; a < o; a++)
                        i[a].object.visible = !1
                }
            }
        }(),
        toJSON: function(t) {
            var e = a.Object3D.prototype.toJSON.call(this, t);
            e.object.levels = [];
            for (var r = this.levels, i = 0, n = r.length; i < n; i++) {
                var o = r[i];
                e.object.levels.push({
                    object: o.object.uuid,
                    distance: o.distance
                })
            }
            return e
        }
    }),
    a.Sprite = function(t) {
        a.Object3D.call(this),
        this.type = "Sprite",
        this.material = void 0 !== t ? t : new a.SpriteMaterial
    }
    ,
    a.Sprite.prototype = Object.assign(Object.create(a.Object3D.prototype), {
        constructor: a.Sprite,
        raycast: function() {
            var t = new a.Vector3;
            return function(e, r) {
                t.setFromMatrixPosition(this.matrixWorld);
                var i = e.ray.distanceSqToPoint(t)
                  , n = this.scale.x * this.scale.y / 4;
                i > n || r.push({
                    distance: Math.sqrt(i),
                    point: this.position,
                    face: null,
                    object: this
                })
            }
        }(),
        clone: function() {
            return new this.constructor(this.material).copy(this)
        }
    }),
    a.LensFlare = function(t, e, r, i, n) {
        a.Object3D.call(this),
        this.lensFlares = [],
        this.positionScreen = new a.Vector3,
        this.customUpdateCallback = void 0,
        void 0 !== t && this.add(t, e, r, i, n)
    }
    ,
    a.LensFlare.prototype = Object.assign(Object.create(a.Object3D.prototype), {
        constructor: a.LensFlare,
        copy: function(t) {
            a.Object3D.prototype.copy.call(this, t),
            this.positionScreen.copy(t.positionScreen),
            this.customUpdateCallback = t.customUpdateCallback;
            for (var e = 0, r = t.lensFlares.length; e < r; e++)
                this.lensFlares.push(t.lensFlares[e]);
            return this
        },
        add: function(t, e, r, i, n, o) {
            void 0 === e && (e = -1),
            void 0 === r && (r = 0),
            void 0 === o && (o = 1),
            void 0 === n && (n = new a.Color(16777215)),
            void 0 === i && (i = a.NormalBlending),
            r = Math.min(r, Math.max(0, r)),
            this.lensFlares.push({
                texture: t,
                size: e,
                distance: r,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: o,
                color: n,
                blending: i
            })
        },
        updateLensFlares: function() {
            var t, e, r = this.lensFlares.length, i = 2 * -this.positionScreen.x, n = 2 * -this.positionScreen.y;
            for (t = 0; t < r; t++)
                e = this.lensFlares[t],
                e.x = this.positionScreen.x + i * e.distance,
                e.y = this.positionScreen.y + n * e.distance,
                e.wantedRotation = e.x * Math.PI * .25,
                e.rotation += .25 * (e.wantedRotation - e.rotation)
        }
    }),
    a.Scene = function() {
        a.Object3D.call(this),
        this.type = "Scene",
        this.background = null,
        this.fog = null,
        this.overrideMaterial = null,
        this.autoUpdate = !0
    }
    ,
    a.Scene.prototype = Object.create(a.Object3D.prototype),
    a.Scene.prototype.constructor = a.Scene,
    a.Scene.prototype.copy = function(t, e) {
        return a.Object3D.prototype.copy.call(this, t, e),
        null !== t.background && (this.background = t.background.clone()),
        null !== t.fog && (this.fog = t.fog.clone()),
        null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
        this.autoUpdate = t.autoUpdate,
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this
    }
    ,
    a.Fog = function(t, e, r) {
        this.name = "",
        this.color = new a.Color(t),
        this.near = void 0 !== e ? e : 1,
        this.far = void 0 !== r ? r : 1e3
    }
    ,
    a.Fog.prototype.clone = function() {
        return new a.Fog(this.color.getHex(),this.near,this.far)
    }
    ,
    a.FogExp2 = function(t, e) {
        this.name = "",
        this.color = new a.Color(t),
        this.density = void 0 !== e ? e : 25e-5
    }
    ,
    a.FogExp2.prototype.clone = function() {
        return new a.FogExp2(this.color.getHex(),this.density)
    }
    ,
    a.ShaderChunk = {},
    a.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
    a.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
    a.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
    a.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
    a.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    a.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n",
    a.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n",
    a.ShaderChunk.bsdfs = "bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n\treturn any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
    a.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
    a.ShaderChunk.clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n#endif\n",
    a.ShaderChunk.clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
    a.ShaderChunk.clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
    a.ShaderChunk.clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
    a.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
    a.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
    a.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
    a.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
    a.ShaderChunk.common = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n",
    a.ShaderChunk.cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
    a.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",
    a.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
    a.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
    a.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
    a.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
    a.ShaderChunk.encodings_pars_fragment = "\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
    a.ShaderChunk.encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
    a.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
    a.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
    a.ShaderChunk.envmap_pars_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
    a.ShaderChunk.envmap_vertex = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
    a.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
    a.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    a.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
    a.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    a.ShaderChunk.lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
    a.ShaderChunk.lights_pars = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tif ( testLightInRange( lightDistance, pointLight.distance ) ) {\n\t\t\tdirectLight.color = pointLight.color;\n\t\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\t#include <normal_flip>\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\t#include <normal_flip>\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
    a.ShaderChunk.lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
    a.ShaderChunk.lights_phong_pars_fragment = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
    a.ShaderChunk.lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
    a.ShaderChunk.lights_physical_pars_fragment = "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
    a.ShaderChunk.lights_template = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t \tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\t\t\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
    a.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",
    a.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
    a.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
    a.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
    a.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
    a.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
    a.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
    a.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
    a.ShaderChunk.metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n",
    a.ShaderChunk.metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    a.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
    a.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
    a.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
    a.ShaderChunk.normal_flip = "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",
    a.ShaderChunk.normal_fragment = "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
    a.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
    a.ShaderChunk.packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n";
    a.ShaderChunk.premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n";
    a.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",
    a.ShaderChunk.roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n",
    a.ShaderChunk.roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    a.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
    a.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
    a.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
    a.ShaderChunk.shadowmask_pars_fragment = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
    a.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    a.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
    a.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",
    a.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
    a.ShaderChunk.specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    a.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    a.ShaderChunk.tonemapping_fragment = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
    a.ShaderChunk.tonemapping_pars_fragment = "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
    a.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    a.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
    a.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
    a.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
    a.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
    a.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
    a.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",
    a.UniformsUtils = {
        merge: function(t) {
            for (var e = {}, r = 0; r < t.length; r++) {
                var i = this.clone(t[r]);
                for (var n in i)
                    e[n] = i[n]
            }
            return e
        },
        clone: function(t) {
            var e = {};
            for (var r in t) {
                e[r] = {};
                for (var i in t[r]) {
                    var n = t[r][i];
                    n instanceof a.Color || n instanceof a.Vector2 || n instanceof a.Vector3 || n instanceof a.Vector4 || n instanceof a.Matrix3 || n instanceof a.Matrix4 || n instanceof a.Texture ? e[r][i] = n.clone() : Array.isArray(n) ? e[r][i] = n.slice() : e[r][i] = n
                }
            }
            return e
        }
    },
    a.UniformsLib = {
        common: {
            diffuse: {
                value: new a.Color(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            offsetRepeat: {
                value: new a.Vector4(0,0,1,1)
            },
            specularMap: {
                value: null
            },
            alphaMap: {
                value: null
            },
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new a.Vector2(1,1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new a.Color(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            }
        },
        points: {
            diffuse: {
                value: new a.Color(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            offsetRepeat: {
                value: new a.Vector4(0,0,1,1)
            }
        }
    },
    a.ShaderChunk.cube_frag = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
    a.ShaderChunk.cube_vert = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
    a.ShaderChunk.depth_frag = "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
    a.ShaderChunk.depth_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
    a.ShaderChunk.distanceRGBA_frag = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",
    a.ShaderChunk.distanceRGBA_vert = "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
    a.ShaderChunk.equirect_frag = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
    a.ShaderChunk.equirect_vert = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
    a.ShaderChunk.linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
    a.ShaderChunk.linedashed_vert = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
    a.ShaderChunk.meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
    a.ShaderChunk.meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n}\n",
    a.ShaderChunk.meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
    a.ShaderChunk.meshlambert_vert = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n}\n",
    a.ShaderChunk.meshphong_frag = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
    a.ShaderChunk.meshphong_vert = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n}\n",
    a.ShaderChunk.meshphysical_frag = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
    a.ShaderChunk.meshphysical_vert = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
    a.ShaderChunk.normal_frag = "uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n\t#include <logdepthbuf_fragment>\n}\n",
    a.ShaderChunk.normal_vert = "varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
    a.ShaderChunk.points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
    a.ShaderChunk.points_vert = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
    a.ShaderChunk.shadow_frag = "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n}\n",
    a.ShaderChunk.shadow_vert = "#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
    a.ShaderLib = {
        basic: {
            uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.aomap, a.UniformsLib.fog]),
            vertexShader: a.ShaderChunk.meshbasic_vert,
            fragmentShader: a.ShaderChunk.meshbasic_frag
        },
        lambert: {
            uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.aomap, a.UniformsLib.lightmap, a.UniformsLib.emissivemap, a.UniformsLib.fog, a.UniformsLib.lights, {
                emissive: {
                    value: new a.Color(0)
                }
            }]),
            vertexShader: a.ShaderChunk.meshlambert_vert,
            fragmentShader: a.ShaderChunk.meshlambert_frag
        },
        phong: {
            uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.aomap, a.UniformsLib.lightmap, a.UniformsLib.emissivemap, a.UniformsLib.bumpmap, a.UniformsLib.normalmap, a.UniformsLib.displacementmap, a.UniformsLib.fog, a.UniformsLib.lights, {
                emissive: {
                    value: new a.Color(0)
                },
                specular: {
                    value: new a.Color(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: a.ShaderChunk.meshphong_vert,
            fragmentShader: a.ShaderChunk.meshphong_frag
        },
        standard: {
            uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.aomap, a.UniformsLib.lightmap, a.UniformsLib.emissivemap, a.UniformsLib.bumpmap, a.UniformsLib.normalmap, a.UniformsLib.displacementmap, a.UniformsLib.roughnessmap, a.UniformsLib.metalnessmap, a.UniformsLib.fog, a.UniformsLib.lights, {
                emissive: {
                    value: new a.Color(0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: a.ShaderChunk.meshphysical_vert,
            fragmentShader: a.ShaderChunk.meshphysical_frag
        },
        points: {
            uniforms: a.UniformsUtils.merge([a.UniformsLib.points, a.UniformsLib.fog]),
            vertexShader: a.ShaderChunk.points_vert,
            fragmentShader: a.ShaderChunk.points_frag
        },
        dashed: {
            uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: a.ShaderChunk.linedashed_vert,
            fragmentShader: a.ShaderChunk.linedashed_frag
        },
        depth: {
            uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.displacementmap]),
            vertexShader: a.ShaderChunk.depth_vert,
            fragmentShader: a.ShaderChunk.depth_frag
        },
        normal: {
            uniforms: {
                opacity: {
                    value: 1
                }
            },
            vertexShader: a.ShaderChunk.normal_vert,
            fragmentShader: a.ShaderChunk.normal_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: a.ShaderChunk.cube_vert,
            fragmentShader: a.ShaderChunk.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                },
                tFlip: {
                    value: -1
                }
            },
            vertexShader: a.ShaderChunk.equirect_vert,
            fragmentShader: a.ShaderChunk.equirect_frag
        },
        distanceRGBA: {
            uniforms: {
                lightPos: {
                    value: new a.Vector3
                }
            },
            vertexShader: a.ShaderChunk.distanceRGBA_vert,
            fragmentShader: a.ShaderChunk.distanceRGBA_frag
        }
    },
    a.ShaderLib.physical = {
        uniforms: a.UniformsUtils.merge([a.ShaderLib.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: a.ShaderChunk.meshphysical_vert,
        fragmentShader: a.ShaderChunk.meshphysical_frag
    },
    a.WebGLRenderer = function(t) {
        function e() {
            return null === et ? ft : 1
        }
        function r(t, e, r, i) {
            H === !0 && (t *= i,
            e *= i,
            r *= i),
            Pt.clearColor(t, e, r, i)
        }
        function i() {
            Pt.init(),
            Pt.scissor(ot.copy(mt).multiplyScalar(ft)),
            Pt.viewport(ct.copy(vt).multiplyScalar(ft)),
            r(lt.r, lt.g, lt.b, ut)
        }
        function n() {
            tt = null,
            at = null,
            nt = "",
            it = -1,
            Pt.reset()
        }
        function o(t) {
            t.preventDefault(),
            n(),
            i(),
            Dt.clear()
        }
        function s(t) {
            var e = t.target;
            e.removeEventListener("dispose", s),
            c(e)
        }
        function c(t) {
            h(t),
            Dt.delete(t)
        }
        function h(t) {
            var e = Dt.get(t).program;
            t.program = void 0,
            void 0 !== e && It.releaseProgram(e)
        }
        function l(t, e, r, i) {
            var n;
            if (r instanceof a.InstancedBufferGeometry && (n = Ct.get("ANGLE_instanced_arrays"),
            null === n))
                return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            void 0 === i && (i = 0),
            Pt.initAttributes();
            var o = r.attributes
              , s = e.getAttributes()
              , c = t.defaultAttributeValues;
            for (var h in s) {
                var l = s[h];
                if (l >= 0) {
                    var u = o[h];
                    if (void 0 !== u) {
                        var d = At.FLOAT
                          , p = u.array
                          , f = u.normalized;
                        p instanceof Float32Array ? d = At.FLOAT : p instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : p instanceof Uint16Array ? d = At.UNSIGNED_SHORT : p instanceof Int16Array ? d = At.SHORT : p instanceof Uint32Array ? d = At.UNSIGNED_INT : p instanceof Int32Array ? d = At.INT : p instanceof Int8Array ? d = At.BYTE : p instanceof Uint8Array && (d = At.UNSIGNED_BYTE);
                        var m = u.itemSize
                          , g = Ut.getAttributeBuffer(u);
                        if (u instanceof a.InterleavedBufferAttribute) {
                            var v = u.data
                              , y = v.stride
                              , x = u.offset;
                            v instanceof a.InstancedInterleavedBuffer ? (Pt.enableAttributeAndDivisor(l, v.meshPerAttribute, n),
                            void 0 === r.maxInstancedCount && (r.maxInstancedCount = v.meshPerAttribute * v.count)) : Pt.enableAttribute(l),
                            At.bindBuffer(At.ARRAY_BUFFER, g),
                            At.vertexAttribPointer(l, m, d, f, y * v.array.BYTES_PER_ELEMENT, (i * y + x) * v.array.BYTES_PER_ELEMENT)
                        } else
                            u instanceof a.InstancedBufferAttribute ? (Pt.enableAttributeAndDivisor(l, u.meshPerAttribute, n),
                            void 0 === r.maxInstancedCount && (r.maxInstancedCount = u.meshPerAttribute * u.count)) : Pt.enableAttribute(l),
                            At.bindBuffer(At.ARRAY_BUFFER, g),
                            At.vertexAttribPointer(l, m, d, f, 0, i * m * u.array.BYTES_PER_ELEMENT)
                    } else if (void 0 !== c) {
                        var b = c[h];
                        if (void 0 !== b)
                            switch (b.length) {
                            case 2:
                                At.vertexAttrib2fv(l, b);
                                break;
                            case 3:
                                At.vertexAttrib3fv(l, b);
                                break;
                            case 4:
                                At.vertexAttrib4fv(l, b);
                                break;
                            default:
                                At.vertexAttrib1fv(l, b)
                            }
                    }
                }
            }
            Pt.disableUnusedAttributes()
        }
        function u(t, e) {
            return Math.abs(e[0]) - Math.abs(t[0])
        }
        function d(t, e) {
            return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.material.program && e.material.program && t.material.program !== e.material.program ? t.material.program.id - e.material.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
        }
        function p(t, e) {
            return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
        }
        function f(t, e, r, i, n) {
            var a, o;
            r.transparent ? (a = Y,
            o = ++Z) : (a = X,
            o = ++q);
            var s = a[o];
            void 0 !== s ? (s.id = t.id,
            s.object = t,
            s.geometry = e,
            s.material = r,
            s.z = St.z,
            s.group = n) : (s = {
                id: t.id,
                object: t,
                geometry: e,
                material: r,
                z: St.z,
                group: n
            },
            a.push(s))
        }
        function m(t) {
            var e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(),
            Mt.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
            v(Mt)
        }
        function g(t) {
            return Mt.center.set(0, 0, 0),
            Mt.radius = .7071067811865476,
            Mt.applyMatrix4(t.matrixWorld),
            v(Mt)
        }
        function v(t) {
            if (!yt.intersectsSphere(t))
                return !1;
            var e = xt.numPlanes;
            if (0 === e)
                return !0;
            var r = $.clippingPlanes
              , i = t.center
              , n = -t.radius
              , a = 0;
            do
                if (r[a].distanceToPoint(i) < n)
                    return !1;
            while (++a !== e);
            return !0
        }
        function y(t, e) {
            if (t.visible !== !1) {
                if (t.layers.test(e.layers))
                    if (t instanceof a.Light)
                        W.push(t);
                    else if (t instanceof a.Sprite)
                        t.frustumCulled !== !1 && g(t) !== !0 || Q.push(t);
                    else if (t instanceof a.LensFlare)
                        J.push(t);
                    else if (t instanceof a.ImmediateRenderObject)
                        $.sortObjects === !0 && (St.setFromMatrixPosition(t.matrixWorld),
                        St.applyProjection(wt)),
                        f(t, null, t.material, St.z, null);
                    else if ((t instanceof a.Mesh || t instanceof a.Line || t instanceof a.Points) && (t instanceof a.SkinnedMesh && t.skeleton.update(),
                    t.frustumCulled === !1 || m(t) === !0)) {
                        var r = t.material;
                        if (r.visible === !0) {
                            $.sortObjects === !0 && (St.setFromMatrixPosition(t.matrixWorld),
                            St.applyProjection(wt));
                            var i = Ut.update(t);
                            if (r instanceof a.MultiMaterial)
                                for (var n = i.groups, o = r.materials, s = 0, c = n.length; s < c; s++) {
                                    var h = n[s]
                                      , l = o[h.materialIndex];
                                    l.visible === !0 && f(t, i, l, St.z, h)
                                }
                            else
                                f(t, i, r, St.z, null)
                        }
                    }
                for (var u = t.children, s = 0, c = u.length; s < c; s++)
                    y(u[s], e)
            }
        }
        function x(t, e, r, i) {
            for (var n = 0, o = t.length; n < o; n++) {
                var s = t[n]
                  , c = s.object
                  , h = s.geometry
                  , l = void 0 === i ? s.material : i
                  , u = s.group;
                if (c.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, c.matrixWorld),
                c.normalMatrix.getNormalMatrix(c.modelViewMatrix),
                c instanceof a.ImmediateRenderObject) {
                    _(l);
                    var d = M(e, r, l, c);
                    nt = "",
                    c.render(function(t) {
                        $.renderBufferImmediate(t, d, l)
                    })
                } else
                    $.renderBufferDirect(e, r, h, l, c, u)
            }
        }
        function b(t, e, r) {
            var i = Dt.get(t)
              , n = It.getParameters(t, Et, e, xt.numPlanes, r)
              , o = It.getProgramCode(t, n)
              , c = i.program
              , l = !0;
            if (void 0 === c)
                t.addEventListener("dispose", s);
            else if (c.code !== o)
                h(t);
            else {
                if (void 0 !== n.shaderID)
                    return;
                l = !1
            }
            if (l) {
                if (n.shaderID) {
                    var u = a.ShaderLib[n.shaderID];
                    i.__webglShader = {
                        name: t.type,
                        uniforms: a.UniformsUtils.clone(u.uniforms),
                        vertexShader: u.vertexShader,
                        fragmentShader: u.fragmentShader
                    }
                } else
                    i.__webglShader = {
                        name: t.type,
                        uniforms: t.uniforms,
                        vertexShader: t.vertexShader,
                        fragmentShader: t.fragmentShader
                    };
                t.__webglShader = i.__webglShader,
                c = It.acquireProgram(t, n, o),
                i.program = c,
                t.program = c
            }
            var d = c.getAttributes();
            if (t.morphTargets) {
                t.numSupportedMorphTargets = 0;
                for (var p = 0; p < $.maxMorphTargets; p++)
                    d["morphTarget" + p] >= 0 && t.numSupportedMorphTargets++
            }
            if (t.morphNormals) {
                t.numSupportedMorphNormals = 0;
                for (var p = 0; p < $.maxMorphNormals; p++)
                    d["morphNormal" + p] >= 0 && t.numSupportedMorphNormals++
            }
            var f = i.__webglShader.uniforms;
            (t instanceof a.ShaderMaterial || t instanceof a.RawShaderMaterial) && t.clipping !== !0 || (i.numClippingPlanes = xt.numPlanes,
            f.clippingPlanes = xt.uniform),
            t.lights && (i.lightsHash = Et.hash,
            f.ambientLightColor.value = Et.ambient,
            f.directionalLights.value = Et.directional,
            f.spotLights.value = Et.spot,
            f.pointLights.value = Et.point,
            f.hemisphereLights.value = Et.hemi,
            f.directionalShadowMap.value = Et.directionalShadowMap,
            f.directionalShadowMatrix.value = Et.directionalShadowMatrix,
            f.spotShadowMap.value = Et.spotShadowMap,
            f.spotShadowMatrix.value = Et.spotShadowMatrix,
            f.pointShadowMap.value = Et.pointShadowMap,
            f.pointShadowMatrix.value = Et.pointShadowMatrix);
            var m = i.program.getUniforms()
              , g = a.WebGLUniforms.seqWithValue(m.seq, f);
            i.uniformsList = g,
            i.dynamicUniforms = a.WebGLUniforms.splitDynamic(g, f)
        }
        function _(t) {
            t.side !== a.DoubleSide ? Pt.enable(At.CULL_FACE) : Pt.disable(At.CULL_FACE),
            Pt.setFlipSided(t.side === a.BackSide),
            t.transparent === !0 ? Pt.setBlending(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha) : Pt.setBlending(a.NoBlending),
            Pt.setDepthFunc(t.depthFunc),
            Pt.setDepthTest(t.depthTest),
            Pt.setDepthWrite(t.depthWrite),
            Pt.setColorWrite(t.colorWrite),
            Pt.setPolygonOffset(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
        }
        function M(t, e, r, i) {
            ht = 0;
            var n = Dt.get(r);
            if (bt) {
                if (_t || t !== at) {
                    var o = t === at && r.id === it;
                    xt.setState(r.clippingPlanes, r.clipShadows, t, n, o)
                }
                void 0 !== n.numClippingPlanes && n.numClippingPlanes !== xt.numPlanes && (r.needsUpdate = !0)
            }
            void 0 === n.program && (r.needsUpdate = !0),
            void 0 !== n.lightsHash && n.lightsHash !== Et.hash && (r.needsUpdate = !0),
            r.needsUpdate && (b(r, e, i),
            r.needsUpdate = !1);
            var s = !1
              , c = !1
              , h = !1
              , l = n.program
              , u = l.getUniforms()
              , d = n.__webglShader.uniforms;
            if (l.id !== tt && (At.useProgram(l.program),
            tt = l.id,
            s = !0,
            c = !0,
            h = !0),
            r.id !== it && (it = r.id,
            c = !0),
            s || t !== at) {
                if (u.set(At, t, "projectionMatrix"),
                Rt.logarithmicDepthBuffer && u.setValue(At, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
                t !== at && (at = t,
                c = !0,
                h = !0),
                r instanceof a.ShaderMaterial || r instanceof a.MeshPhongMaterial || r instanceof a.MeshStandardMaterial || r.envMap) {
                    var p = u.map.cameraPosition;
                    void 0 !== p && p.setValue(At, St.setFromMatrixPosition(t.matrixWorld))
                }
                (r instanceof a.MeshPhongMaterial || r instanceof a.MeshLambertMaterial || r instanceof a.MeshBasicMaterial || r instanceof a.MeshStandardMaterial || r instanceof a.ShaderMaterial || r.skinning) && u.setValue(At, "viewMatrix", t.matrixWorldInverse),
                u.set(At, $, "toneMappingExposure"),
                u.set(At, $, "toneMappingWhitePoint")
            }
            if (r.skinning) {
                u.setOptional(At, i, "bindMatrix"),
                u.setOptional(At, i, "bindMatrixInverse");
                var f = i.skeleton;
                f && (Rt.floatVertexTextures && f.useVertexTexture ? (u.set(At, f, "boneTexture"),
                u.set(At, f, "boneTextureWidth"),
                u.set(At, f, "boneTextureHeight")) : u.setOptional(At, f, "boneMatrices"))
            }
            c && (r.lights && D(d, h),
            e && r.fog && A(d, e),
            (r instanceof a.MeshBasicMaterial || r instanceof a.MeshLambertMaterial || r instanceof a.MeshPhongMaterial || r instanceof a.MeshStandardMaterial || r instanceof a.MeshDepthMaterial) && w(d, r),
            r instanceof a.LineBasicMaterial ? S(d, r) : r instanceof a.LineDashedMaterial ? (S(d, r),
            E(d, r)) : r instanceof a.PointsMaterial ? T(d, r) : r instanceof a.MeshLambertMaterial ? L(d, r) : r instanceof a.MeshPhongMaterial ? C(d, r) : r instanceof a.MeshPhysicalMaterial ? P(d, r) : r instanceof a.MeshStandardMaterial ? R(d, r) : r instanceof a.MeshDepthMaterial ? r.displacementMap && (d.displacementMap.value = r.displacementMap,
            d.displacementScale.value = r.displacementScale,
            d.displacementBias.value = r.displacementBias) : r instanceof a.MeshNormalMaterial && (d.opacity.value = r.opacity),
            a.WebGLUniforms.upload(At, n.uniformsList, d, $)),
            u.set(At, i, "modelViewMatrix"),
            u.set(At, i, "normalMatrix"),
            u.setValue(At, "modelMatrix", i.matrixWorld);
            var m = n.dynamicUniforms;
            return null !== m && (a.WebGLUniforms.evalDynamic(m, d, i, t),
            a.WebGLUniforms.upload(At, m, d, $)),
            l
        }
        function w(t, e) {
            t.opacity.value = e.opacity,
            t.diffuse.value = e.color,
            e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity),
            t.map.value = e.map,
            t.specularMap.value = e.specularMap,
            t.alphaMap.value = e.alphaMap,
            e.aoMap && (t.aoMap.value = e.aoMap,
            t.aoMapIntensity.value = e.aoMapIntensity);
            var r;
            if (e.map ? r = e.map : e.specularMap ? r = e.specularMap : e.displacementMap ? r = e.displacementMap : e.normalMap ? r = e.normalMap : e.bumpMap ? r = e.bumpMap : e.roughnessMap ? r = e.roughnessMap : e.metalnessMap ? r = e.metalnessMap : e.alphaMap ? r = e.alphaMap : e.emissiveMap && (r = e.emissiveMap),
            void 0 !== r) {
                r instanceof a.WebGLRenderTarget && (r = r.texture);
                var i = r.offset
                  , n = r.repeat;
                t.offsetRepeat.value.set(i.x, i.y, n.x, n.y)
            }
            t.envMap.value = e.envMap,
            t.flipEnvMap.value = e.envMap instanceof a.CubeTexture ? -1 : 1,
            t.reflectivity.value = e.reflectivity,
            t.refractionRatio.value = e.refractionRatio
        }
        function S(t, e) {
            t.diffuse.value = e.color,
            t.opacity.value = e.opacity
        }
        function E(t, e) {
            t.dashSize.value = e.dashSize,
            t.totalSize.value = e.dashSize + e.gapSize,
            t.scale.value = e.scale
        }
        function T(t, e) {
            if (t.diffuse.value = e.color,
            t.opacity.value = e.opacity,
            t.size.value = e.size * ft,
            t.scale.value = .5 * O.clientHeight,
            t.map.value = e.map,
            null !== e.map) {
                var r = e.map.offset
                  , i = e.map.repeat;
                t.offsetRepeat.value.set(r.x, r.y, i.x, i.y)
            }
        }
        function A(t, e) {
            t.fogColor.value = e.color,
            e instanceof a.Fog ? (t.fogNear.value = e.near,
            t.fogFar.value = e.far) : e instanceof a.FogExp2 && (t.fogDensity.value = e.density)
        }
        function L(t, e) {
            e.lightMap && (t.lightMap.value = e.lightMap,
            t.lightMapIntensity.value = e.lightMapIntensity),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
        }
        function C(t, e) {
            t.specular.value = e.specular,
            t.shininess.value = Math.max(e.shininess, 1e-4),
            e.lightMap && (t.lightMap.value = e.lightMap,
            t.lightMapIntensity.value = e.lightMapIntensity),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap && (t.bumpMap.value = e.bumpMap,
            t.bumpScale.value = e.bumpScale),
            e.normalMap && (t.normalMap.value = e.normalMap,
            t.normalScale.value.copy(e.normalScale)),
            e.displacementMap && (t.displacementMap.value = e.displacementMap,
            t.displacementScale.value = e.displacementScale,
            t.displacementBias.value = e.displacementBias)
        }
        function R(t, e) {
            t.roughness.value = e.roughness,
            t.metalness.value = e.metalness,
            e.roughnessMap && (t.roughnessMap.value = e.roughnessMap),
            e.metalnessMap && (t.metalnessMap.value = e.metalnessMap),
            e.lightMap && (t.lightMap.value = e.lightMap,
            t.lightMapIntensity.value = e.lightMapIntensity),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap && (t.bumpMap.value = e.bumpMap,
            t.bumpScale.value = e.bumpScale),
            e.normalMap && (t.normalMap.value = e.normalMap,
            t.normalScale.value.copy(e.normalScale)),
            e.displacementMap && (t.displacementMap.value = e.displacementMap,
            t.displacementScale.value = e.displacementScale,
            t.displacementBias.value = e.displacementBias),
            e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
        }
        function P(t, e) {
            t.clearCoat.value = e.clearCoat,
            t.clearCoatRoughness.value = e.clearCoatRoughness,
            R(t, e)
        }
        function D(t, e) {
            t.ambientLightColor.needsUpdate = e,
            t.directionalLights.needsUpdate = e,
            t.pointLights.needsUpdate = e,
            t.spotLights.needsUpdate = e,
            t.hemisphereLights.needsUpdate = e
        }
        function B(t) {
            for (var e = 0, r = 0, i = t.length; r < i; r++) {
                var n = t[r];
                n.castShadow && (Et.shadows[e++] = n)
            }
            Et.shadows.length = e
        }
        function U(t, e) {
            var r, i, n, o, s, c, h, l = 0, u = 0, d = 0, p = e.matrixWorldInverse, f = 0, m = 0, g = 0, v = 0;
            for (r = 0,
            i = t.length; r < i; r++)
                if (n = t[r],
                o = n.color,
                s = n.intensity,
                c = n.distance,
                h = n.shadow && n.shadow.map ? n.shadow.map.texture : null,
                n instanceof a.AmbientLight)
                    l += o.r * s,
                    u += o.g * s,
                    d += o.b * s;
                else if (n instanceof a.DirectionalLight) {
                    var y = Ft.get(n);
                    y.color.copy(n.color).multiplyScalar(n.intensity),
                    y.direction.setFromMatrixPosition(n.matrixWorld),
                    St.setFromMatrixPosition(n.target.matrixWorld),
                    y.direction.sub(St),
                    y.direction.transformDirection(p),
                    y.shadow = n.castShadow,
                    n.castShadow && (y.shadowBias = n.shadow.bias,
                    y.shadowRadius = n.shadow.radius,
                    y.shadowMapSize = n.shadow.mapSize),
                    Et.directionalShadowMap[f] = h,
                    Et.directionalShadowMatrix[f] = n.shadow.matrix,
                    Et.directional[f++] = y
                } else if (n instanceof a.SpotLight) {
                    var y = Ft.get(n);
                    y.position.setFromMatrixPosition(n.matrixWorld),
                    y.position.applyMatrix4(p),
                    y.color.copy(o).multiplyScalar(s),
                    y.distance = c,
                    y.direction.setFromMatrixPosition(n.matrixWorld),
                    St.setFromMatrixPosition(n.target.matrixWorld),
                    y.direction.sub(St),
                    y.direction.transformDirection(p),
                    y.coneCos = Math.cos(n.angle),
                    y.penumbraCos = Math.cos(n.angle * (1 - n.penumbra)),
                    y.decay = 0 === n.distance ? 0 : n.decay,
                    y.shadow = n.castShadow,
                    n.castShadow && (y.shadowBias = n.shadow.bias,
                    y.shadowRadius = n.shadow.radius,
                    y.shadowMapSize = n.shadow.mapSize),
                    Et.spotShadowMap[g] = h,
                    Et.spotShadowMatrix[g] = n.shadow.matrix,
                    Et.spot[g++] = y
                } else if (n instanceof a.PointLight) {
                    var y = Ft.get(n);
                    y.position.setFromMatrixPosition(n.matrixWorld),
                    y.position.applyMatrix4(p),
                    y.color.copy(n.color).multiplyScalar(n.intensity),
                    y.distance = n.distance,
                    y.decay = 0 === n.distance ? 0 : n.decay,
                    y.shadow = n.castShadow,
                    n.castShadow && (y.shadowBias = n.shadow.bias,
                    y.shadowRadius = n.shadow.radius,
                    y.shadowMapSize = n.shadow.mapSize),
                    Et.pointShadowMap[m] = h,
                    void 0 === Et.pointShadowMatrix[m] && (Et.pointShadowMatrix[m] = new a.Matrix4),
                    St.setFromMatrixPosition(n.matrixWorld).negate(),
                    Et.pointShadowMatrix[m].identity().setPosition(St),
                    Et.point[m++] = y
                } else if (n instanceof a.HemisphereLight) {
                    var y = Ft.get(n);
                    y.direction.setFromMatrixPosition(n.matrixWorld),
                    y.direction.transformDirection(p),
                    y.direction.normalize(),
                    y.skyColor.copy(n.color).multiplyScalar(s),
                    y.groundColor.copy(n.groundColor).multiplyScalar(s),
                    Et.hemi[v++] = y
                }
            Et.ambient[0] = l,
            Et.ambient[1] = u,
            Et.ambient[2] = d,
            Et.directional.length = f,
            Et.spot.length = g,
            Et.point.length = m,
            Et.hemi.length = v,
            Et.hash = f + "," + m + "," + g + "," + v + "," + Et.shadows.length
        }
        function I() {
            var t = ht;
            return t >= Rt.maxTextures && console.warn("WebGLRenderer: trying to use " + t + " texture units while this GPU supports only " + Rt.maxTextures),
            ht += 1,
            t
        }
        function F(t) {
            var e;
            if (t === a.RepeatWrapping)
                return At.REPEAT;
            if (t === a.ClampToEdgeWrapping)
                return At.CLAMP_TO_EDGE;
            if (t === a.MirroredRepeatWrapping)
                return At.MIRRORED_REPEAT;
            if (t === a.NearestFilter)
                return At.NEAREST;
            if (t === a.NearestMipMapNearestFilter)
                return At.NEAREST_MIPMAP_NEAREST;
            if (t === a.NearestMipMapLinearFilter)
                return At.NEAREST_MIPMAP_LINEAR;
            if (t === a.LinearFilter)
                return At.LINEAR;
            if (t === a.LinearMipMapNearestFilter)
                return At.LINEAR_MIPMAP_NEAREST;
            if (t === a.LinearMipMapLinearFilter)
                return At.LINEAR_MIPMAP_LINEAR;
            if (t === a.UnsignedByteType)
                return At.UNSIGNED_BYTE;
            if (t === a.UnsignedShort4444Type)
                return At.UNSIGNED_SHORT_4_4_4_4;
            if (t === a.UnsignedShort5551Type)
                return At.UNSIGNED_SHORT_5_5_5_1;
            if (t === a.UnsignedShort565Type)
                return At.UNSIGNED_SHORT_5_6_5;
            if (t === a.ByteType)
                return At.BYTE;
            if (t === a.ShortType)
                return At.SHORT;
            if (t === a.UnsignedShortType)
                return At.UNSIGNED_SHORT;
            if (t === a.IntType)
                return At.INT;
            if (t === a.UnsignedIntType)
                return At.UNSIGNED_INT;
            if (t === a.FloatType)
                return At.FLOAT;
            if (e = Ct.get("OES_texture_half_float"),
            null !== e && t === a.HalfFloatType)
                return e.HALF_FLOAT_OES;
            if (t === a.AlphaFormat)
                return At.ALPHA;
            if (t === a.RGBFormat)
                return At.RGB;
            if (t === a.RGBAFormat)
                return At.RGBA;
            if (t === a.LuminanceFormat)
                return At.LUMINANCE;
            if (t === a.LuminanceAlphaFormat)
                return At.LUMINANCE_ALPHA;
            if (t === a.DepthFormat)
                return At.DEPTH_COMPONENT;
            if (t === a.AddEquation)
                return At.FUNC_ADD;
            if (t === a.SubtractEquation)
                return At.FUNC_SUBTRACT;
            if (t === a.ReverseSubtractEquation)
                return At.FUNC_REVERSE_SUBTRACT;
            if (t === a.ZeroFactor)
                return At.ZERO;
            if (t === a.OneFactor)
                return At.ONE;
            if (t === a.SrcColorFactor)
                return At.SRC_COLOR;
            if (t === a.OneMinusSrcColorFactor)
                return At.ONE_MINUS_SRC_COLOR;
            if (t === a.SrcAlphaFactor)
                return At.SRC_ALPHA;
            if (t === a.OneMinusSrcAlphaFactor)
                return At.ONE_MINUS_SRC_ALPHA;
            if (t === a.DstAlphaFactor)
                return At.DST_ALPHA;
            if (t === a.OneMinusDstAlphaFactor)
                return At.ONE_MINUS_DST_ALPHA;
            if (t === a.DstColorFactor)
                return At.DST_COLOR;
            if (t === a.OneMinusDstColorFactor)
                return At.ONE_MINUS_DST_COLOR;
            if (t === a.SrcAlphaSaturateFactor)
                return At.SRC_ALPHA_SATURATE;
            if (e = Ct.get("WEBGL_compressed_texture_s3tc"),
            null !== e) {
                if (t === a.RGB_S3TC_DXT1_Format)
                    return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (t === a.RGBA_S3TC_DXT1_Format)
                    return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (t === a.RGBA_S3TC_DXT3_Format)
                    return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (t === a.RGBA_S3TC_DXT5_Format)
                    return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if (e = Ct.get("WEBGL_compressed_texture_pvrtc"),
            null !== e) {
                if (t === a.RGB_PVRTC_4BPPV1_Format)
                    return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (t === a.RGB_PVRTC_2BPPV1_Format)
                    return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (t === a.RGBA_PVRTC_4BPPV1_Format)
                    return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (t === a.RGBA_PVRTC_2BPPV1_Format)
                    return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (e = Ct.get("WEBGL_compressed_texture_etc1"),
            null !== e && t === a.RGB_ETC1_Format)
                return e.COMPRESSED_RGB_ETC1_WEBGL;
            if (e = Ct.get("EXT_blend_minmax"),
            null !== e) {
                if (t === a.MinEquation)
                    return e.MIN_EXT;
                if (t === a.MaxEquation)
                    return e.MAX_EXT
            }
            return 0
        }
        console.log("THREE.WebGLRenderer", a.REVISION),
        t = t || {};
        var O = void 0 !== t.canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
          , N = void 0 !== t.context ? t.context : null
          , G = void 0 !== t.alpha && t.alpha
          , V = void 0 === t.depth || t.depth
          , z = void 0 === t.stencil || t.stencil
          , k = void 0 !== t.antialias && t.antialias
          , H = void 0 === t.premultipliedAlpha || t.premultipliedAlpha
          , j = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer
          , W = []
          , X = []
          , q = -1
          , Y = []
          , Z = -1
          , K = new Float32Array(8)
          , Q = []
          , J = [];
        this.domElement = O,
        this.context = null,
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.gammaFactor = 2,
        this.gammaInput = !1,
        this.gammaOutput = !1,
        this.physicallyCorrectLights = !1,
        this.toneMapping = a.LinearToneMapping,
        this.toneMappingExposure = 1,
        this.toneMappingWhitePoint = 1,
        this.maxMorphTargets = 8,
        this.maxMorphNormals = 4;
        var $ = this
          , tt = null
          , et = null
          , rt = null
          , it = -1
          , nt = ""
          , at = null
          , ot = new a.Vector4
          , st = null
          , ct = new a.Vector4
          , ht = 0
          , lt = new a.Color(0)
          , ut = 0
          , dt = O.width
          , pt = O.height
          , ft = 1
          , mt = new a.Vector4(0,0,dt,pt)
          , gt = !1
          , vt = new a.Vector4(0,0,dt,pt)
          , yt = new a.Frustum
          , xt = new a.WebGLClipping
          , bt = !1
          , _t = !1
          , Mt = new a.Sphere
          , wt = new a.Matrix4
          , St = new a.Vector3
          , Et = {
            hash: "",
            ambient: [0, 0, 0],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            shadows: []
        }
          , Tt = {
            calls: 0,
            vertices: 0,
            faces: 0,
            points: 0
        };
        this.info = {
            render: Tt,
            memory: {
                geometries: 0,
                textures: 0
            },
            programs: null
        };
        var At;
        try {
            var Lt = {
                alpha: G,
                depth: V,
                stencil: z,
                antialias: k,
                premultipliedAlpha: H,
                preserveDrawingBuffer: j
            };
            if (At = N || O.getContext("webgl", Lt) || O.getContext("experimental-webgl", Lt),
            null === At)
                throw null !== O.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
            void 0 === At.getShaderPrecisionFormat && (At.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            ),
            O.addEventListener("webglcontextlost", o, !1)
        } catch (t) {
            console.error("THREE.WebGLRenderer: " + t)
        }
        var Ct = new a.WebGLExtensions(At);
        Ct.get("WEBGL_depth_texture"),
        Ct.get("OES_texture_float"),
        Ct.get("OES_texture_float_linear"),
        Ct.get("OES_texture_half_float"),
        Ct.get("OES_texture_half_float_linear"),
        Ct.get("OES_standard_derivatives"),
        Ct.get("ANGLE_instanced_arrays"),
        Ct.get("OES_element_index_uint") && (a.BufferGeometry.MaxIndex = 4294967296);
        var Rt = new a.WebGLCapabilities(At,Ct,t)
          , Pt = new a.WebGLState(At,Ct,F)
          , Dt = new a.WebGLProperties
          , Bt = new a.WebGLTextures(At,Ct,Pt,Dt,Rt,F,this.info)
          , Ut = new a.WebGLObjects(At,Dt,this.info)
          , It = new a.WebGLPrograms(this,Rt)
          , Ft = new a.WebGLLights;
        this.info.programs = It.programs;
        var Ot = new a.WebGLBufferRenderer(At,Ct,Tt)
          , Nt = new a.WebGLIndexedBufferRenderer(At,Ct,Tt)
          , Gt = new a.OrthographicCamera(-1,1,1,-1,0,1)
          , Vt = new a.PerspectiveCamera
          , zt = new a.Mesh(new a.PlaneBufferGeometry(2,2),new a.MeshBasicMaterial({
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        }))
          , kt = a.ShaderLib.cube
          , Ht = new a.Mesh(new a.BoxBufferGeometry(5,5,5),new a.ShaderMaterial({
            uniforms: kt.uniforms,
            vertexShader: kt.vertexShader,
            fragmentShader: kt.fragmentShader,
            side: a.BackSide,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        }));
        i(),
        this.context = At,
        this.capabilities = Rt,
        this.extensions = Ct,
        this.properties = Dt,
        this.state = Pt;
        var jt = new a.WebGLShadowMap(this,Et,Ut,Rt);
        this.shadowMap = jt;
        var Wt = new a.SpritePlugin(this,Q)
          , Xt = new a.LensFlarePlugin(this,J);
        this.getContext = function() {
            return At
        }
        ,
        this.getContextAttributes = function() {
            return At.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            Ct.get("WEBGL_lose_context").loseContext()
        }
        ,
        this.getMaxAnisotropy = function() {
            return Rt.getMaxAnisotropy()
        }
        ,
        this.getPrecision = function() {
            return Rt.precision
        }
        ,
        this.getPixelRatio = function() {
            return ft
        }
        ,
        this.setPixelRatio = function(t) {
            void 0 !== t && (ft = t,
            this.setSize(vt.z, vt.w, !1))
        }
        ,
        this.getSize = function() {
            return {
                width: dt,
                height: pt
            }
        }
        ,
        this.setSize = function(t, e, r) {
            dt = t,
            pt = e,
            O.width = t * ft,
            O.height = e * ft,
            r !== !1 && (O.style.width = t + "px",
            O.style.height = e + "px"),
            this.setViewport(0, 0, t, e)
        }
        ,
        this.setViewport = function(t, e, r, i) {
            Pt.viewport(vt.set(t, e, r, i))
        }
        ,
        this.setScissor = function(t, e, r, i) {
            Pt.scissor(mt.set(t, e, r, i))
        }
        ,
        this.setScissorTest = function(t) {
            Pt.setScissorTest(gt = t)
        }
        ,
        this.getClearColor = function() {
            return lt
        }
        ,
        this.setClearColor = function(t, e) {
            lt.set(t),
            ut = void 0 !== e ? e : 1,
            r(lt.r, lt.g, lt.b, ut)
        }
        ,
        this.getClearAlpha = function() {
            return ut
        }
        ,
        this.setClearAlpha = function(t) {
            ut = t,
            r(lt.r, lt.g, lt.b, ut)
        }
        ,
        this.clear = function(t, e, r) {
            var i = 0;
            (void 0 === t || t) && (i |= At.COLOR_BUFFER_BIT),
            (void 0 === e || e) && (i |= At.DEPTH_BUFFER_BIT),
            (void 0 === r || r) && (i |= At.STENCIL_BUFFER_BIT),
            At.clear(i)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.clearTarget = function(t, e, r, i) {
            this.setRenderTarget(t),
            this.clear(e, r, i)
        }
        ,
        this.resetGLState = n,
        this.dispose = function() {
            Y = [],
            Z = -1,
            X = [],
            q = -1,
            O.removeEventListener("webglcontextlost", o, !1)
        }
        ,
        this.renderBufferImmediate = function(t, e, r) {
            Pt.initAttributes();
            var i = Dt.get(t);
            t.hasPositions && !i.position && (i.position = At.createBuffer()),
            t.hasNormals && !i.normal && (i.normal = At.createBuffer()),
            t.hasUvs && !i.uv && (i.uv = At.createBuffer()),
            t.hasColors && !i.color && (i.color = At.createBuffer());
            var n = e.getAttributes();
            if (t.hasPositions && (At.bindBuffer(At.ARRAY_BUFFER, i.position),
            At.bufferData(At.ARRAY_BUFFER, t.positionArray, At.DYNAMIC_DRAW),
            Pt.enableAttribute(n.position),
            At.vertexAttribPointer(n.position, 3, At.FLOAT, !1, 0, 0)),
            t.hasNormals) {
                if (At.bindBuffer(At.ARRAY_BUFFER, i.normal),
                "MeshPhongMaterial" !== r.type && "MeshStandardMaterial" !== r.type && "MeshPhysicalMaterial" !== r.type && r.shading === a.FlatShading)
                    for (var o = 0, s = 3 * t.count; o < s; o += 9) {
                        var c = t.normalArray
                          , h = (c[o + 0] + c[o + 3] + c[o + 6]) / 3
                          , l = (c[o + 1] + c[o + 4] + c[o + 7]) / 3
                          , u = (c[o + 2] + c[o + 5] + c[o + 8]) / 3;
                        c[o + 0] = h,
                        c[o + 1] = l,
                        c[o + 2] = u,
                        c[o + 3] = h,
                        c[o + 4] = l,
                        c[o + 5] = u,
                        c[o + 6] = h,
                        c[o + 7] = l,
                        c[o + 8] = u
                    }
                At.bufferData(At.ARRAY_BUFFER, t.normalArray, At.DYNAMIC_DRAW),
                Pt.enableAttribute(n.normal),
                At.vertexAttribPointer(n.normal, 3, At.FLOAT, !1, 0, 0)
            }
            t.hasUvs && r.map && (At.bindBuffer(At.ARRAY_BUFFER, i.uv),
            At.bufferData(At.ARRAY_BUFFER, t.uvArray, At.DYNAMIC_DRAW),
            Pt.enableAttribute(n.uv),
            At.vertexAttribPointer(n.uv, 2, At.FLOAT, !1, 0, 0)),
            t.hasColors && r.vertexColors !== a.NoColors && (At.bindBuffer(At.ARRAY_BUFFER, i.color),
            At.bufferData(At.ARRAY_BUFFER, t.colorArray, At.DYNAMIC_DRAW),
            Pt.enableAttribute(n.color),
            At.vertexAttribPointer(n.color, 3, At.FLOAT, !1, 0, 0)),
            Pt.disableUnusedAttributes(),
            At.drawArrays(At.TRIANGLES, 0, t.count),
            t.count = 0
        }
        ,
        this.renderBufferDirect = function(t, r, i, n, o, s) {
            _(n);
            var c = M(t, r, n, o)
              , h = !1
              , d = i.id + "_" + c.id + "_" + n.wireframe;
            d !== nt && (nt = d,
            h = !0);
            var p = o.morphTargetInfluences;
            if (void 0 !== p) {
                for (var f = [], m = 0, g = p.length; m < g; m++) {
                    var v = p[m];
                    f.push([v, m])
                }
                f.sort(u),
                f.length > 8 && (f.length = 8);
                for (var y = i.morphAttributes, m = 0, g = f.length; m < g; m++) {
                    var v = f[m];
                    if (K[m] = v[0],
                    0 !== v[0]) {
                        var x = v[1];
                        n.morphTargets === !0 && y.position && i.addAttribute("morphTarget" + m, y.position[x]),
                        n.morphNormals === !0 && y.normal && i.addAttribute("morphNormal" + m, y.normal[x])
                    } else
                        n.morphTargets === !0 && i.removeAttribute("morphTarget" + m),
                        n.morphNormals === !0 && i.removeAttribute("morphNormal" + m)
                }
                c.getUniforms().setValue(At, "morphTargetInfluences", K),
                h = !0
            }
            var x = i.index
              , b = i.attributes.position;
            n.wireframe === !0 && (x = Ut.getWireframeAttribute(i));
            var w;
            null !== x ? (w = Nt,
            w.setIndex(x)) : w = Ot,
            h && (l(n, c, i),
            null !== x && At.bindBuffer(At.ELEMENT_ARRAY_BUFFER, Ut.getAttributeBuffer(x)));
            var S = 0
              , E = 1 / 0;
            null !== x ? E = x.count : void 0 !== b && (E = b.count);
            var T = i.drawRange.start
              , A = i.drawRange.count
              , L = null !== s ? s.start : 0
              , C = null !== s ? s.count : 1 / 0
              , R = Math.max(S, T, L)
              , P = Math.min(S + E, T + A, L + C) - 1
              , D = Math.max(0, P - R + 1);
            if (o instanceof a.Mesh)
                if (n.wireframe === !0)
                    Pt.setLineWidth(n.wireframeLinewidth * e()),
                    w.setMode(At.LINES);
                else
                    switch (o.drawMode) {
                    case a.TrianglesDrawMode:
                        w.setMode(At.TRIANGLES);
                        break;
                    case a.TriangleStripDrawMode:
                        w.setMode(At.TRIANGLE_STRIP);
                        break;
                    case a.TriangleFanDrawMode:
                        w.setMode(At.TRIANGLE_FAN)
                    }
            else if (o instanceof a.Line) {
                var B = n.linewidth;
                void 0 === B && (B = 1),
                Pt.setLineWidth(B * e()),
                o instanceof a.LineSegments ? w.setMode(At.LINES) : w.setMode(At.LINE_STRIP)
            } else
                o instanceof a.Points && w.setMode(At.POINTS);
            i instanceof a.InstancedBufferGeometry ? i.maxInstancedCount > 0 && w.renderInstances(i, R, D) : w.render(R, D)
        }
        ,
        this.render = function(t, e, i, n) {
            if (e instanceof a.Camera == !1)
                return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            var o = t.fog;
            nt = "",
            it = -1,
            at = null,
            t.autoUpdate === !0 && t.updateMatrixWorld(),
            null === e.parent && e.updateMatrixWorld(),
            e.matrixWorldInverse.getInverse(e.matrixWorld),
            wt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            yt.setFromMatrix(wt),
            W.length = 0,
            q = -1,
            Z = -1,
            Q.length = 0,
            J.length = 0,
            _t = this.localClippingEnabled,
            bt = xt.init(this.clippingPlanes, _t, e),
            y(t, e),
            X.length = q + 1,
            Y.length = Z + 1,
            $.sortObjects === !0 && (X.sort(d),
            Y.sort(p)),
            bt && xt.beginShadows(),
            B(W),
            jt.render(t, e),
            U(W, e),
            bt && xt.endShadows(),
            Tt.calls = 0,
            Tt.vertices = 0,
            Tt.faces = 0,
            Tt.points = 0,
            void 0 === i && (i = null),
            this.setRenderTarget(i);
            var s = t.background;
            if (null === s ? r(lt.r, lt.g, lt.b, ut) : s instanceof a.Color && r(s.r, s.g, s.b, 1),
            (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil),
            s instanceof a.CubeTexture ? (Vt.projectionMatrix.copy(e.projectionMatrix),
            Vt.matrixWorld.extractRotation(e.matrixWorld),
            Vt.matrixWorldInverse.getInverse(Vt.matrixWorld),
            Ht.material.uniforms.tCube.value = s,
            Ht.modelViewMatrix.multiplyMatrices(Vt.matrixWorldInverse, Ht.matrixWorld),
            Ut.update(Ht),
            $.renderBufferDirect(Vt, null, Ht.geometry, Ht.material, Ht, null)) : s instanceof a.Texture && (zt.material.map = s,
            Ut.update(zt),
            $.renderBufferDirect(Gt, null, zt.geometry, zt.material, zt, null)),
            t.overrideMaterial) {
                var c = t.overrideMaterial;
                x(X, e, o, c),
                x(Y, e, o, c)
            } else
                Pt.setBlending(a.NoBlending),
                x(X, e, o),
                x(Y, e, o);
            Wt.render(t, e),
            Xt.render(t, e, ct),
            i && Bt.updateRenderTargetMipmap(i),
            Pt.setDepthTest(!0),
            Pt.setDepthWrite(!0),
            Pt.setColorWrite(!0)
        }
        ,
        this.setFaceCulling = function(t, e) {
            Pt.setCullFace(t),
            Pt.setFlipSided(e === a.FrontFaceDirectionCW)
        }
        ,
        this.allocTextureUnit = I,
        this.setTexture2D = function() {
            var t = !1;
            return function(e, r) {
                e instanceof a.WebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),
                t = !0),
                e = e.texture),
                Bt.setTexture2D(e, r)
            }
        }(),
        this.setTexture = function() {
            var t = !1;
            return function(e, r) {
                t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),
                t = !0),
                Bt.setTexture2D(e, r)
            }
        }(),
        this.setTextureCube = function() {
            var t = !1;
            return function(e, r) {
                e instanceof a.WebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
                t = !0),
                e = e.texture),
                e instanceof a.CubeTexture || Array.isArray(e.image) && 6 === e.image.length ? Bt.setTextureCube(e, r) : Bt.setTextureCubeDynamic(e, r)
            }
        }(),
        this.getCurrentRenderTarget = function() {
            return et
        }
        ,
        this.setRenderTarget = function(t) {
            et = t,
            t && void 0 === Dt.get(t).__webglFramebuffer && Bt.setupRenderTarget(t);
            var e, r = t instanceof a.WebGLRenderTargetCube;
            if (t) {
                var i = Dt.get(t);
                e = r ? i.__webglFramebuffer[t.activeCubeFace] : i.__webglFramebuffer,
                ot.copy(t.scissor),
                st = t.scissorTest,
                ct.copy(t.viewport)
            } else
                e = null,
                ot.copy(mt).multiplyScalar(ft),
                st = gt,
                ct.copy(vt).multiplyScalar(ft);
            if (rt !== e && (At.bindFramebuffer(At.FRAMEBUFFER, e),
            rt = e),
            Pt.scissor(ot),
            Pt.setScissorTest(st),
            Pt.viewport(ct),
            r) {
                var n = Dt.get(t.texture);
                At.framebufferTexture2D(At.FRAMEBUFFER, At.COLOR_ATTACHMENT0, At.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, n.__webglTexture, t.activeMipMapLevel)
            }
        }
        ,
        this.readRenderTargetPixels = function(t, e, r, i, n, o) {
            if (t instanceof a.WebGLRenderTarget == !1)
                return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            var s = Dt.get(t).__webglFramebuffer;
            if (s) {
                var c = !1;
                s !== rt && (At.bindFramebuffer(At.FRAMEBUFFER, s),
                c = !0);
                try {
                    var h = t.texture;
                    if (h.format !== a.RGBAFormat && F(h.format) !== At.getParameter(At.IMPLEMENTATION_COLOR_READ_FORMAT))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    if (!(h.type === a.UnsignedByteType || F(h.type) === At.getParameter(At.IMPLEMENTATION_COLOR_READ_TYPE) || h.type === a.FloatType && Ct.get("WEBGL_color_buffer_float") || h.type === a.HalfFloatType && Ct.get("EXT_color_buffer_half_float")))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    At.checkFramebufferStatus(At.FRAMEBUFFER) === At.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - i && r >= 0 && r <= t.height - n && At.readPixels(e, r, i, n, F(h.format), F(h.type), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                } finally {
                    c && At.bindFramebuffer(At.FRAMEBUFFER, rt)
                }
            }
        }
    }
    ,
    a.WebGLRenderTarget = function(t, e, r) {
        this.uuid = a.Math.generateUUID(),
        this.width = t,
        this.height = e,
        this.scissor = new a.Vector4(0,0,t,e),
        this.scissorTest = !1,
        this.viewport = new a.Vector4(0,0,t,e),
        r = r || {},
        void 0 === r.minFilter && (r.minFilter = a.LinearFilter),
        this.texture = new a.Texture(void 0,void 0,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),
        this.depthBuffer = void 0 === r.depthBuffer || r.depthBuffer,
        this.stencilBuffer = void 0 === r.stencilBuffer || r.stencilBuffer,
        this.depthTexture = null
    }
    ,
    Object.assign(a.WebGLRenderTarget.prototype, a.EventDispatcher.prototype, {
        setSize: function(t, e) {
            this.width === t && this.height === e || (this.width = t,
            this.height = e,
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.width = t.width,
            this.height = t.height,
            this.viewport.copy(t.viewport),
            this.texture = t.texture.clone(),
            this.depthBuffer = t.depthBuffer,
            this.stencilBuffer = t.stencilBuffer,
            this.depthTexture = t.depthTexture,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    a.WebGLRenderTargetCube = function(t, e, r) {
        a.WebGLRenderTarget.call(this, t, e, r),
        this.activeCubeFace = 0,
        this.activeMipMapLevel = 0
    }
    ,
    a.WebGLRenderTargetCube.prototype = Object.create(a.WebGLRenderTarget.prototype),
    a.WebGLRenderTargetCube.prototype.constructor = a.WebGLRenderTargetCube,
    a.WebGLBufferRenderer = function(t, e, r) {
        function i(t) {
            s = t
        }
        function n(e, i) {
            t.drawArrays(s, e, i),
            r.calls++,
            r.vertices += i,
            s === t.TRIANGLES && (r.faces += i / 3)
        }
        function o(i) {
            var n = e.get("ANGLE_instanced_arrays");
            if (null === n)
                return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            var o = i.attributes.position
              , c = 0;
            o instanceof a.InterleavedBufferAttribute ? (c = o.data.count,
            n.drawArraysInstancedANGLE(s, 0, c, i.maxInstancedCount)) : (c = o.count,
            n.drawArraysInstancedANGLE(s, 0, c, i.maxInstancedCount)),
            r.calls++,
            r.vertices += c * i.maxInstancedCount,
            s === t.TRIANGLES && (r.faces += i.maxInstancedCount * c / 3)
        }
        var s;
        this.setMode = i,
        this.render = n,
        this.renderInstances = o
    }
    ,
    a.WebGLClipping = function() {
        function t() {
            l.value !== i && (l.value = i,
            l.needsUpdate = n > 0),
            r.numPlanes = n
        }
        function e(t, e, i, n) {
            var a = null !== t ? t.length : 0
              , o = null;
            if (0 !== a) {
                if (o = l.value,
                n !== !0 || null === o) {
                    var s = i + 4 * a
                      , u = e.matrixWorldInverse;
                    h.getNormalMatrix(u),
                    (null === o || o.length < s) && (o = new Float32Array(s));
                    for (var d = 0, p = i; d !== a; ++d,
                    p += 4)
                        c.copy(t[d]).applyMatrix4(u, h),
                        c.normal.toArray(o, p),
                        o[p + 3] = c.constant
                }
                l.value = o,
                l.needsUpdate = !0
            }
            return r.numPlanes = a,
            o
        }
        var r = this
          , i = null
          , n = 0
          , o = !1
          , s = !1
          , c = new a.Plane
          , h = new a.Matrix3
          , l = {
            value: null,
            needsUpdate: !1
        };
        this.uniform = l,
        this.numPlanes = 0,
        this.init = function(t, r, a) {
            var s = 0 !== t.length || r || 0 !== n || o;
            return o = r,
            i = e(t, a, 0),
            n = t.length,
            s
        }
        ,
        this.beginShadows = function() {
            s = !0,
            e(null)
        }
        ,
        this.endShadows = function() {
            s = !1,
            t()
        }
        ,
        this.setState = function(r, a, c, h, u) {
            if (!o || null === r || 0 === r.length || s && !a)
                s ? e(null) : t();
            else {
                var d = s ? 0 : n
                  , p = 4 * d
                  , f = h.clippingState || null;
                l.value = f,
                f = e(r, c, p, u);
                for (var m = 0; m !== p; ++m)
                    f[m] = i[m];
                h.clippingState = f,
                this.numPlanes += d
            }
        }
    }
    ,
    a.WebGLIndexedBufferRenderer = function(t, e, r) {
        function i(t) {
            s = t
        }
        function n(r) {
            r.array instanceof Uint32Array && e.get("OES_element_index_uint") ? (c = t.UNSIGNED_INT,
            h = 4) : (c = t.UNSIGNED_SHORT,
            h = 2)
        }
        function a(e, i) {
            t.drawElements(s, i, c, e * h),
            r.calls++,
            r.vertices += i,
            s === t.TRIANGLES && (r.faces += i / 3)
        }
        function o(i, n, a) {
            var o = e.get("ANGLE_instanced_arrays");
            return null === o ? void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (o.drawElementsInstancedANGLE(s, a, c, n * h, i.maxInstancedCount),
            r.calls++,
            r.vertices += a * i.maxInstancedCount,
            void (s === t.TRIANGLES && (r.faces += i.maxInstancedCount * a / 3)))
        }
        var s, c, h;
        this.setMode = i,
        this.setIndex = n,
        this.render = a,
        this.renderInstances = o
    }
    ,
    a.WebGLExtensions = function(t) {
        var e = {};
        this.get = function(r) {
            if (void 0 !== e[r])
                return e[r];
            var i;
            switch (r) {
            case "WEBGL_depth_texture":
                i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            case "WEBGL_compressed_texture_etc1":
                i = t.getExtension("WEBGL_compressed_texture_etc1");
                break;
            default:
                i = t.getExtension(r)
            }
            return null === i && console.warn("THREE.WebGLRenderer: " + r + " extension not supported."),
            e[r] = i,
            i
        }
    }
    ,
    a.WebGLCapabilities = function(t, e, r) {
        function i() {
            if (void 0 !== a)
                return a;
            var r = e.get("EXT_texture_filter_anisotropic");
            return a = null !== r ? t.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }
        function n(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0)
                    return "highp";
                e = "mediump"
            }
            return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
        }
        var a;
        this.getMaxAnisotropy = i,
        this.getMaxPrecision = n,
        this.precision = void 0 !== r.precision ? r.precision : "highp",
        this.logarithmicDepthBuffer = void 0 !== r.logarithmicDepthBuffer && r.logarithmicDepthBuffer,
        this.maxTextures = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
        this.maxVertexTextures = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
        this.maxTextureSize = t.getParameter(t.MAX_TEXTURE_SIZE),
        this.maxCubemapSize = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
        this.maxAttributes = t.getParameter(t.MAX_VERTEX_ATTRIBS),
        this.maxVertexUniforms = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
        this.maxVaryings = t.getParameter(t.MAX_VARYING_VECTORS),
        this.maxFragmentUniforms = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
        this.vertexTextures = this.maxVertexTextures > 0,
        this.floatFragmentTextures = !!e.get("OES_texture_float"),
        this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
        var o = n(this.precision);
        o !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", o, "instead."),
        this.precision = o),
        this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!e.get("EXT_frag_depth"))
    }
    ,
    a.WebGLGeometries = function(t, e, r) {
        function i(t) {
            var e = t.geometry;
            if (void 0 !== l[e.id])
                return l[e.id];
            e.addEventListener("dispose", n);
            var i;
            return e instanceof a.BufferGeometry ? i = e : e instanceof a.Geometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new a.BufferGeometry).setFromObject(t)),
            i = e._bufferGeometry),
            l[e.id] = i,
            r.memory.geometries++,
            i
        }
        function n(t) {
            var i = t.target
              , a = l[i.id];
            null !== a.index && s(a.index),
            c(a.attributes),
            i.removeEventListener("dispose", n),
            delete l[i.id];
            var o = e.get(i);
            o.wireframe && s(o.wireframe),
            e.delete(i);
            var h = e.get(a);
            h.wireframe && s(h.wireframe),
            e.delete(a),
            r.memory.geometries--
        }
        function o(t) {
            return t instanceof a.InterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
        }
        function s(e) {
            var r = o(e);
            void 0 !== r && (t.deleteBuffer(r),
            h(e))
        }
        function c(t) {
            for (var e in t)
                s(t[e])
        }
        function h(t) {
            t instanceof a.InterleavedBufferAttribute ? e.delete(t.data) : e.delete(t)
        }
        var l = {};
        this.get = i
    }
    ,
    a.WebGLLights = function() {
        var t = {};
        this.get = function(e) {
            if (void 0 !== t[e.id])
                return t[e.id];
            var r;
            switch (e.type) {
            case "DirectionalLight":
                r = {
                    direction: new a.Vector3,
                    color: new a.Color,
                    shadow: !1,
                    shadowBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new a.Vector2
                };
                break;
            case "SpotLight":
                r = {
                    position: new a.Vector3,
                    direction: new a.Vector3,
                    color: new a.Color,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0,
                    shadow: !1,
                    shadowBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new a.Vector2
                };
                break;
            case "PointLight":
                r = {
                    position: new a.Vector3,
                    color: new a.Color,
                    distance: 0,
                    decay: 0,
                    shadow: !1,
                    shadowBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new a.Vector2
                };
                break;
            case "HemisphereLight":
                r = {
                    direction: new a.Vector3,
                    skyColor: new a.Color,
                    groundColor: new a.Color
                }
            }
            return t[e.id] = r,
            r
        }
    }
    ,
    a.WebGLObjects = function(t, e, r) {
        function i(e) {
            var r = u.get(e);
            e.geometry instanceof a.Geometry && r.updateFromObject(e);
            var i = r.index
              , o = r.attributes;
            null !== i && n(i, t.ELEMENT_ARRAY_BUFFER);
            for (var s in o)
                n(o[s], t.ARRAY_BUFFER);
            var c = r.morphAttributes;
            for (var s in c)
                for (var h = c[s], l = 0, d = h.length; l < d; l++)
                    n(h[l], t.ARRAY_BUFFER);
            return r
        }
        function n(t, r) {
            var i = t instanceof a.InterleavedBufferAttribute ? t.data : t
              , n = e.get(i);
            void 0 === n.__webglBuffer ? o(n, i, r) : n.version !== i.version && s(n, i, r)
        }
        function o(e, r, i) {
            e.__webglBuffer = t.createBuffer(),
            t.bindBuffer(i, e.__webglBuffer);
            var n = r.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW;
            t.bufferData(i, r.array, n),
            e.version = r.version
        }
        function s(e, r, i) {
            t.bindBuffer(i, e.__webglBuffer),
            r.dynamic === !1 || r.updateRange.count === -1 ? t.bufferSubData(i, 0, r.array) : 0 === r.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(i, r.updateRange.offset * r.array.BYTES_PER_ELEMENT, r.array.subarray(r.updateRange.offset, r.updateRange.offset + r.updateRange.count)),
            r.updateRange.count = 0),
            e.version = r.version
        }
        function c(t) {
            return t instanceof a.InterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
        }
        function h(r) {
            var i = e.get(r);
            if (void 0 !== i.wireframe)
                return i.wireframe;
            var o = []
              , s = r.index
              , c = r.attributes
              , h = c.position;
            if (null !== s)
                for (var u = {}, d = s.array, p = 0, f = d.length; p < f; p += 3) {
                    var m = d[p + 0]
                      , g = d[p + 1]
                      , v = d[p + 2];
                    l(u, m, g) && o.push(m, g),
                    l(u, g, v) && o.push(g, v),
                    l(u, v, m) && o.push(v, m)
                }
            else
                for (var d = c.position.array, p = 0, f = d.length / 3 - 1; p < f; p += 3) {
                    var m = p + 0
                      , g = p + 1
                      , v = p + 2;
                    o.push(m, g, g, v, v, m)
                }
            var y = h.count > 65535 ? Uint32Array : Uint16Array
              , x = new a.BufferAttribute(new y(o),1);
            return n(x, t.ELEMENT_ARRAY_BUFFER),
            i.wireframe = x,
            x
        }
        function l(t, e, r) {
            if (e > r) {
                var i = e;
                e = r,
                r = i
            }
            var n = t[e];
            return void 0 === n ? (t[e] = [r],
            !0) : n.indexOf(r) === -1 && (n.push(r),
            !0)
        }
        var u = new a.WebGLGeometries(t,e,r);
        this.getAttributeBuffer = c,
        this.getWireframeAttribute = h,
        this.update = i
    }
    ,
    a.WebGLProgram = function() {
        function t(t) {
            switch (t) {
            case a.LinearEncoding:
                return ["Linear", "( value )"];
            case a.sRGBEncoding:
                return ["sRGB", "( value )"];
            case a.RGBEEncoding:
                return ["RGBE", "( value )"];
            case a.RGBM7Encoding:
                return ["RGBM", "( value, 7.0 )"];
            case a.RGBM16Encoding:
                return ["RGBM", "( value, 16.0 )"];
            case a.RGBDEncoding:
                return ["RGBD", "( value, 256.0 )"];
            case a.GammaEncoding:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw new Error("unsupported encoding: " + t)
            }
        }
        function e(e, r) {
            var i = t(r);
            return "vec4 " + e + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
        }
        function r(e, r) {
            var i = t(r);
            return "vec4 " + e + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
        }
        function i(t, e) {
            var r;
            switch (e) {
            case a.LinearToneMapping:
                r = "Linear";
                break;
            case a.ReinhardToneMapping:
                r = "Reinhard";
                break;
            case a.Uncharted2ToneMapping:
                r = "Uncharted2";
                break;
            case a.CineonToneMapping:
                r = "OptimizedCineon";
                break;
            default:
                throw new Error("unsupported toneMapping: " + e)
            }
            return "vec3 " + t + "( vec3 color ) { return " + r + "ToneMapping( color ); }"
        }
        function n(t, e, r) {
            t = t || {};
            var i = [t.derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && r.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && r.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && r.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
            return i.filter(c).join("\n")
        }
        function o(t) {
            var e = [];
            for (var r in t) {
                var i = t[r];
                i !== !1 && e.push("#define " + r + " " + i)
            }
            return e.join("\n")
        }
        function s(t, e, r) {
            for (var i = {}, n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; a < n; a++) {
                var o = t.getActiveAttrib(e, a)
                  , s = o.name;
                i[s] = t.getAttribLocation(e, s)
            }
            return i
        }
        function c(t) {
            return "" !== t
        }
        function h(t, e) {
            return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
        }
        function l(t) {
            function e(t, e) {
                var r = a.ShaderChunk[e];
                if (void 0 === r)
                    throw new Error("Can not resolve #include <" + e + ">");
                return l(r)
            }
            var r = /#include +<([\w\d.]+)>/g;
            return t.replace(r, e)
        }
        function u(t) {
            function e(t, e, r, i) {
                for (var n = "", a = parseInt(e); a < parseInt(r); a++)
                    n += i.replace(/\[ i \]/g, "[ " + a + " ]");
                return n
            }
            var r = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
            return t.replace(r, e)
        }
        var d = 0;
        return function(t, p, f, m) {
            var g = t.context
              , v = f.extensions
              , y = f.defines
              , x = f.__webglShader.vertexShader
              , b = f.__webglShader.fragmentShader
              , _ = "SHADOWMAP_TYPE_BASIC";
            m.shadowMapType === a.PCFShadowMap ? _ = "SHADOWMAP_TYPE_PCF" : m.shadowMapType === a.PCFSoftShadowMap && (_ = "SHADOWMAP_TYPE_PCF_SOFT");
            var M = "ENVMAP_TYPE_CUBE"
              , w = "ENVMAP_MODE_REFLECTION"
              , S = "ENVMAP_BLENDING_MULTIPLY";
            if (m.envMap) {
                switch (f.envMap.mapping) {
                case a.CubeReflectionMapping:
                case a.CubeRefractionMapping:
                    M = "ENVMAP_TYPE_CUBE";
                    break;
                case a.CubeUVReflectionMapping:
                case a.CubeUVRefractionMapping:
                    M = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case a.EquirectangularReflectionMapping:
                case a.EquirectangularRefractionMapping:
                    M = "ENVMAP_TYPE_EQUIREC";
                    break;
                case a.SphericalReflectionMapping:
                    M = "ENVMAP_TYPE_SPHERE"
                }
                switch (f.envMap.mapping) {
                case a.CubeRefractionMapping:
                case a.EquirectangularRefractionMapping:
                    w = "ENVMAP_MODE_REFRACTION"
                }
                switch (f.combine) {
                case a.MultiplyOperation:
                    S = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case a.MixOperation:
                    S = "ENVMAP_BLENDING_MIX";
                    break;
                case a.AddOperation:
                    S = "ENVMAP_BLENDING_ADD"
                }
            }
            var E, T, A = t.gammaFactor > 0 ? t.gammaFactor : 1, L = n(v, m, t.extensions), C = o(y), R = g.createProgram();
            f instanceof a.RawShaderMaterial ? (E = [C].filter(c).join("\n"),
            T = [C].filter(c).join("\n")) : (E = ["precision " + m.precision + " float;", "precision " + m.precision + " int;", "#define SHADER_NAME " + f.__webglShader.name, C, m.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + A, "#define MAX_BONES " + m.maxBones, m.map ? "#define USE_MAP" : "", m.envMap ? "#define USE_ENVMAP" : "", m.envMap ? "#define " + w : "", m.lightMap ? "#define USE_LIGHTMAP" : "", m.aoMap ? "#define USE_AOMAP" : "", m.emissiveMap ? "#define USE_EMISSIVEMAP" : "", m.bumpMap ? "#define USE_BUMPMAP" : "", m.normalMap ? "#define USE_NORMALMAP" : "", m.displacementMap && m.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", m.specularMap ? "#define USE_SPECULARMAP" : "", m.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", m.metalnessMap ? "#define USE_METALNESSMAP" : "", m.alphaMap ? "#define USE_ALPHAMAP" : "", m.vertexColors ? "#define USE_COLOR" : "", m.flatShading ? "#define FLAT_SHADED" : "", m.skinning ? "#define USE_SKINNING" : "", m.useVertexTexture ? "#define BONE_TEXTURE" : "", m.morphTargets ? "#define USE_MORPHTARGETS" : "", m.morphNormals && m.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", m.doubleSided ? "#define DOUBLE_SIDED" : "", m.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + m.numClippingPlanes, m.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", m.shadowMapEnabled ? "#define " + _ : "", m.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", m.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", m.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(c).join("\n"),
            T = [L, "precision " + m.precision + " float;", "precision " + m.precision + " int;", "#define SHADER_NAME " + f.__webglShader.name, C, m.alphaTest ? "#define ALPHATEST " + m.alphaTest : "", "#define GAMMA_FACTOR " + A, m.useFog && m.fog ? "#define USE_FOG" : "", m.useFog && m.fogExp ? "#define FOG_EXP2" : "", m.map ? "#define USE_MAP" : "", m.envMap ? "#define USE_ENVMAP" : "", m.envMap ? "#define " + M : "", m.envMap ? "#define " + w : "", m.envMap ? "#define " + S : "", m.lightMap ? "#define USE_LIGHTMAP" : "", m.aoMap ? "#define USE_AOMAP" : "", m.emissiveMap ? "#define USE_EMISSIVEMAP" : "", m.bumpMap ? "#define USE_BUMPMAP" : "", m.normalMap ? "#define USE_NORMALMAP" : "", m.specularMap ? "#define USE_SPECULARMAP" : "", m.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", m.metalnessMap ? "#define USE_METALNESSMAP" : "", m.alphaMap ? "#define USE_ALPHAMAP" : "", m.vertexColors ? "#define USE_COLOR" : "", m.flatShading ? "#define FLAT_SHADED" : "", m.doubleSided ? "#define DOUBLE_SIDED" : "", m.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + m.numClippingPlanes, m.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", m.shadowMapEnabled ? "#define " + _ : "", m.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", m.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", m.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", m.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", m.envMap && t.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", m.toneMapping !== a.NoToneMapping ? "#define TONE_MAPPING" : "", m.toneMapping !== a.NoToneMapping ? a.ShaderChunk.tonemapping_pars_fragment : "", m.toneMapping !== a.NoToneMapping ? i("toneMapping", m.toneMapping) : "", m.outputEncoding || m.mapEncoding || m.envMapEncoding || m.emissiveMapEncoding ? a.ShaderChunk.encodings_pars_fragment : "", m.mapEncoding ? e("mapTexelToLinear", m.mapEncoding) : "", m.envMapEncoding ? e("envMapTexelToLinear", m.envMapEncoding) : "", m.emissiveMapEncoding ? e("emissiveMapTexelToLinear", m.emissiveMapEncoding) : "", m.outputEncoding ? r("linearToOutputTexel", m.outputEncoding) : "", m.depthPacking ? "#define DEPTH_PACKING " + f.depthPacking : "", "\n"].filter(c).join("\n")),
            x = l(x, m),
            x = h(x, m),
            b = l(b, m),
            b = h(b, m),
            f instanceof a.ShaderMaterial == !1 && (x = u(x),
            b = u(b));
            var P = E + x
              , D = T + b
              , B = a.WebGLShader(g, g.VERTEX_SHADER, P)
              , U = a.WebGLShader(g, g.FRAGMENT_SHADER, D);
            g.attachShader(R, B),
            g.attachShader(R, U),
            void 0 !== f.index0AttributeName ? g.bindAttribLocation(R, 0, f.index0AttributeName) : m.morphTargets === !0 && g.bindAttribLocation(R, 0, "position"),
            g.linkProgram(R);
            var I = g.getProgramInfoLog(R)
              , F = g.getShaderInfoLog(B)
              , O = g.getShaderInfoLog(U)
              , N = !0
              , G = !0;
            g.getProgramParameter(R, g.LINK_STATUS) === !1 ? (N = !1,
            console.error("THREE.WebGLProgram: shader error: ", g.getError(), "gl.VALIDATE_STATUS", g.getProgramParameter(R, g.VALIDATE_STATUS), "gl.getProgramInfoLog", I, F, O)) : "" !== I ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", I) : "" !== F && "" !== O || (G = !1),
            G && (this.diagnostics = {
                runnable: N,
                material: f,
                programLog: I,
                vertexShader: {
                    log: F,
                    prefix: E
                },
                fragmentShader: {
                    log: O,
                    prefix: T
                }
            }),
            g.deleteShader(B),
            g.deleteShader(U);
            var V;
            this.getUniforms = function() {
                return void 0 === V && (V = new a.WebGLUniforms(g,R,t)),
                V
            }
            ;
            var z;
            return this.getAttributes = function() {
                return void 0 === z && (z = s(g, R)),
                z
            }
            ,
            this.destroy = function() {
                g.deleteProgram(R),
                this.program = void 0
            }
            ,
            Object.defineProperties(this, {
                uniforms: {
                    get: function() {
                        return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),
                        this.getUniforms()
                    }
                },
                attributes: {
                    get: function() {
                        return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
                        this.getAttributes()
                    }
                }
            }),
            this.id = d++,
            this.code = p,
            this.usedTimes = 1,
            this.program = R,
            this.vertexShader = B,
            this.fragmentShader = U,
            this
        }
    }(),
    a.WebGLPrograms = function(t, e) {
        function r(t) {
            if (e.floatVertexTextures && t && t.skeleton && t.skeleton.useVertexTexture)
                return 1024;
            var r = e.maxVertexUniforms
              , i = Math.floor((r - 20) / 4)
              , n = i;
            return void 0 !== t && t instanceof a.SkinnedMesh && (n = Math.min(t.skeleton.bones.length, n),
            n < t.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + t.skeleton.bones.length + ", this GPU supports just " + n + " (try OpenGL instead of ANGLE)")),
            n
        }
        function i(t, e) {
            var r;
            return t ? t instanceof a.Texture ? r = t.encoding : t instanceof a.WebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
            r = t.texture.encoding) : r = a.LinearEncoding,
            r === a.LinearEncoding && e && (r = a.GammaEncoding),
            r
        }
        var n = []
          , o = {
            MeshDepthMaterial: "depth",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points"
        }
          , s = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "depthPacking"];
        this.getParameters = function(n, s, c, h, l) {
            var u = o[n.type]
              , d = r(l)
              , p = t.getPrecision();
            null !== n.precision && (p = e.getMaxPrecision(n.precision),
            p !== n.precision && console.warn("THREE.WebGLProgram.getParameters:", n.precision, "not supported, using", p, "instead."));
            var f = t.getCurrentRenderTarget()
              , m = {
                shaderID: u,
                precision: p,
                supportsVertexTextures: e.vertexTextures,
                outputEncoding: i(f ? f.texture : null, t.gammaOutput),
                map: !!n.map,
                mapEncoding: i(n.map, t.gammaInput),
                envMap: !!n.envMap,
                envMapMode: n.envMap && n.envMap.mapping,
                envMapEncoding: i(n.envMap, t.gammaInput),
                envMapCubeUV: !!n.envMap && (n.envMap.mapping === a.CubeUVReflectionMapping || n.envMap.mapping === a.CubeUVRefractionMapping),
                lightMap: !!n.lightMap,
                aoMap: !!n.aoMap,
                emissiveMap: !!n.emissiveMap,
                emissiveMapEncoding: i(n.emissiveMap, t.gammaInput),
                bumpMap: !!n.bumpMap,
                normalMap: !!n.normalMap,
                displacementMap: !!n.displacementMap,
                roughnessMap: !!n.roughnessMap,
                metalnessMap: !!n.metalnessMap,
                specularMap: !!n.specularMap,
                alphaMap: !!n.alphaMap,
                combine: n.combine,
                vertexColors: n.vertexColors,
                fog: !!c,
                useFog: n.fog,
                fogExp: c instanceof a.FogExp2,
                flatShading: n.shading === a.FlatShading,
                sizeAttenuation: n.sizeAttenuation,
                logarithmicDepthBuffer: e.logarithmicDepthBuffer,
                skinning: n.skinning,
                maxBones: d,
                useVertexTexture: e.floatVertexTextures && l && l.skeleton && l.skeleton.useVertexTexture,
                morphTargets: n.morphTargets,
                morphNormals: n.morphNormals,
                maxMorphTargets: t.maxMorphTargets,
                maxMorphNormals: t.maxMorphNormals,
                numDirLights: s.directional.length,
                numPointLights: s.point.length,
                numSpotLights: s.spot.length,
                numHemiLights: s.hemi.length,
                numClippingPlanes: h,
                shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && s.shadows.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: t.toneMapping,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: n.premultipliedAlpha,
                alphaTest: n.alphaTest,
                doubleSided: n.side === a.DoubleSide,
                flipSided: n.side === a.BackSide,
                depthPacking: void 0 !== n.depthPacking && n.depthPacking
            };
            return m
        }
        ,
        this.getProgramCode = function(t, e) {
            var r = [];
            if (e.shaderID ? r.push(e.shaderID) : (r.push(t.fragmentShader),
            r.push(t.vertexShader)),
            void 0 !== t.defines)
                for (var i in t.defines)
                    r.push(i),
                    r.push(t.defines[i]);
            for (var n = 0; n < s.length; n++)
                r.push(e[s[n]]);
            return r.join()
        }
        ,
        this.acquireProgram = function(e, r, i) {
            for (var o, s = 0, c = n.length; s < c; s++) {
                var h = n[s];
                if (h.code === i) {
                    o = h,
                    ++o.usedTimes;
                    break
                }
            }
            return void 0 === o && (o = new a.WebGLProgram(t,i,e,r),
            n.push(o)),
            o
        }
        ,
        this.releaseProgram = function(t) {
            if (0 === --t.usedTimes) {
                var e = n.indexOf(t);
                n[e] = n[n.length - 1],
                n.pop(),
                t.destroy()
            }
        }
        ,
        this.programs = n
    }
    ,
    a.WebGLProperties = function() {
        var t = {};
        this.get = function(e) {
            var r = e.uuid
              , i = t[r];
            return void 0 === i && (i = {},
            t[r] = i),
            i
        }
        ,
        this.delete = function(e) {
            delete t[e.uuid]
        }
        ,
        this.clear = function() {
            t = {}
        }
    }
    ,
    a.WebGLShader = function() {
        function t(t) {
            for (var e = t.split("\n"), r = 0; r < e.length; r++)
                e[r] = r + 1 + ": " + e[r];
            return e.join("\n")
        }
        return function(e, r, i) {
            var n = e.createShader(r);
            return e.shaderSource(n, i),
            e.compileShader(n),
            e.getShaderParameter(n, e.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."),
            "" !== e.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", r === e.VERTEX_SHADER ? "vertex" : "fragment", e.getShaderInfoLog(n), t(i)),
            n
        }
    }(),
    a.WebGLShadowMap = function(t, e, r, i) {
        function n(e, r, i, n) {
            var o = e.geometry
              , s = null
              , c = b
              , h = e.customDepthMaterial;
            if (i && (c = _,
            h = e.customDistanceMaterial),
            h)
                s = h;
            else {
                var l = !1;
                r.morphTargets && (o instanceof a.BufferGeometry ? l = o.morphAttributes && o.morphAttributes.position && o.morphAttributes.position.length > 0 : o instanceof a.Geometry && (l = o.morphTargets && o.morphTargets.length > 0));
                var u = e instanceof a.SkinnedMesh && r.skinning
                  , d = 0;
                l && (d |= v),
                u && (d |= y),
                s = c[d]
            }
            if (t.localClippingEnabled && r.clipShadows === !0 && 0 !== r.clippingPlanes.length) {
                var p = s.uuid
                  , f = r.uuid
                  , m = M[p];
                void 0 === m && (m = {},
                M[p] = m);
                var g = m[f];
                void 0 === g && (g = s.clone(),
                m[f] = g),
                s = g
            }
            s.visible = r.visible,
            s.wireframe = r.wireframe;
            var x = r.side;
            return U.renderSingleSided && x == a.DoubleSide && (x = a.FrontSide),
            U.renderReverseSided && (x === a.FrontSide ? x = a.BackSide : x === a.BackSide && (x = a.FrontSide)),
            s.side = x,
            s.clipShadows = r.clipShadows,
            s.clippingPlanes = r.clippingPlanes,
            s.wireframeLinewidth = r.wireframeLinewidth,
            s.linewidth = r.linewidth,
            i && void 0 !== s.uniforms.lightPos && s.uniforms.lightPos.value.copy(n),
            s
        }
        function o(t, e, r) {
            if (t.visible !== !1) {
                if (t.layers.test(e.layers) && (t instanceof a.Mesh || t instanceof a.Line || t instanceof a.Points) && t.castShadow && (t.frustumCulled === !1 || h.intersectsObject(t) === !0)) {
                    var i = t.material;
                    i.visible === !0 && (t.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, t.matrixWorld),
                    g.push(t))
                }
                for (var n = t.children, s = 0, c = n.length; s < c; s++)
                    o(n[s], e, r)
            }
        }
        var s = t.context
          , c = t.state
          , h = new a.Frustum
          , l = new a.Matrix4
          , u = e.shadows
          , d = new a.Vector2
          , p = new a.Vector2(i.maxTextureSize,i.maxTextureSize)
          , f = new a.Vector3
          , m = new a.Vector3
          , g = []
          , v = 1
          , y = 2
          , x = (v | y) + 1
          , b = new Array(x)
          , _ = new Array(x)
          , M = {}
          , w = [new a.Vector3(1,0,0), new a.Vector3(-1,0,0), new a.Vector3(0,0,1), new a.Vector3(0,0,-1), new a.Vector3(0,1,0), new a.Vector3(0,-1,0)]
          , S = [new a.Vector3(0,1,0), new a.Vector3(0,1,0), new a.Vector3(0,1,0), new a.Vector3(0,1,0), new a.Vector3(0,0,1), new a.Vector3(0,0,-1)]
          , E = [new a.Vector4, new a.Vector4, new a.Vector4, new a.Vector4, new a.Vector4, new a.Vector4]
          , T = new a.MeshDepthMaterial;
        T.depthPacking = a.RGBADepthPacking,
        T.clipping = !0;
        for (var A = a.ShaderLib.distanceRGBA, L = a.UniformsUtils.clone(A.uniforms), C = 0; C !== x; ++C) {
            var R = 0 !== (C & v)
              , P = 0 !== (C & y)
              , D = T.clone();
            D.morphTargets = R,
            D.skinning = P,
            b[C] = D;
            var B = new a.ShaderMaterial({
                defines: {
                    USE_SHADOWMAP: ""
                },
                uniforms: L,
                vertexShader: A.vertexShader,
                fragmentShader: A.fragmentShader,
                morphTargets: R,
                skinning: P,
                clipping: !0
            });
            _[C] = B
        }
        var U = this;
        this.enabled = !1,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this.type = a.PCFShadowMap,
        this.renderReverseSided = !0,
        this.renderSingleSided = !0,
        this.render = function(e, i) {
            if (U.enabled !== !1 && (U.autoUpdate !== !1 || U.needsUpdate !== !1) && 0 !== u.length) {
                c.clearColor(1, 1, 1, 1),
                c.disable(s.BLEND),
                c.setDepthTest(!0),
                c.setScissorTest(!1);
                for (var v, y, x = 0, b = u.length; x < b; x++) {
                    var _ = u[x]
                      , M = _.shadow;
                    if (void 0 !== M) {
                        var T = M.camera;
                        if (d.copy(M.mapSize),
                        d.min(p),
                        _ instanceof a.PointLight) {
                            v = 6,
                            y = !0;
                            var A = d.x
                              , L = d.y;
                            E[0].set(2 * A, L, A, L),
                            E[1].set(0, L, A, L),
                            E[2].set(3 * A, L, A, L),
                            E[3].set(A, L, A, L),
                            E[4].set(3 * A, 0, A, L),
                            E[5].set(A, 0, A, L),
                            d.x *= 4,
                            d.y *= 2
                        } else
                            v = 1,
                            y = !1;
                        if (null === M.map) {
                            var C = {
                                minFilter: a.NearestFilter,
                                magFilter: a.NearestFilter,
                                format: a.RGBAFormat
                            };
                            M.map = new a.WebGLRenderTarget(d.x,d.y,C),
                            T.updateProjectionMatrix()
                        }
                        M instanceof a.SpotLightShadow && M.update(_);
                        var R = M.map
                          , P = M.matrix;
                        m.setFromMatrixPosition(_.matrixWorld),
                        T.position.copy(m),
                        t.setRenderTarget(R),
                        t.clear();
                        for (var D = 0; D < v; D++) {
                            if (y) {
                                f.copy(T.position),
                                f.add(w[D]),
                                T.up.copy(S[D]),
                                T.lookAt(f);
                                var B = E[D];
                                c.viewport(B)
                            } else
                                f.setFromMatrixPosition(_.target.matrixWorld),
                                T.lookAt(f);
                            T.updateMatrixWorld(),
                            T.matrixWorldInverse.getInverse(T.matrixWorld),
                            P.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                            P.multiply(T.projectionMatrix),
                            P.multiply(T.matrixWorldInverse),
                            l.multiplyMatrices(T.projectionMatrix, T.matrixWorldInverse),
                            h.setFromMatrix(l),
                            g.length = 0,
                            o(e, i, T);
                            for (var I = 0, F = g.length; I < F; I++) {
                                var O = g[I]
                                  , N = r.update(O)
                                  , G = O.material;
                                if (G instanceof a.MultiMaterial)
                                    for (var V = N.groups, z = G.materials, k = 0, H = V.length; k < H; k++) {
                                        var j = V[k]
                                          , W = z[j.materialIndex];
                                        if (W.visible === !0) {
                                            var X = n(O, W, y, m);
                                            t.renderBufferDirect(T, null, N, X, O, j)
                                        }
                                    }
                                else {
                                    var X = n(O, G, y, m);
                                    t.renderBufferDirect(T, null, N, X, O, null)
                                }
                            }
                        }
                    } else
                        console.warn("THREE.WebGLShadowMap:", _, "has no shadow.")
                }
                var q = t.getClearColor()
                  , Y = t.getClearAlpha();
                t.setClearColor(q, Y),
                U.needsUpdate = !1
            }
        }
    }
    ,
    a.WebGLState = function(t, e, r) {
        function i(e, r, i) {
            var n = new Uint8Array(4)
              , a = t.createTexture();
            t.bindTexture(e, a),
            t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
            for (var o = 0; o < i; o++)
                t.texImage2D(r + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, n);
            return a
        }
        var n = this;
        this.buffers = {
            color: new a.WebGLColorBuffer(t,this),
            depth: new a.WebGLDepthBuffer(t,this),
            stencil: new a.WebGLStencilBuffer(t,this)
        };
        var o = t.getParameter(t.MAX_VERTEX_ATTRIBS)
          , s = new Uint8Array(o)
          , c = new Uint8Array(o)
          , h = new Uint8Array(o)
          , l = {}
          , u = null
          , d = null
          , p = null
          , f = null
          , m = null
          , g = null
          , v = null
          , y = null
          , x = !1
          , b = null
          , _ = null
          , M = null
          , w = null
          , S = null
          , E = null
          , T = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)
          , A = null
          , L = {}
          , C = new a.Vector4
          , R = new a.Vector4
          , P = {};
        P[t.TEXTURE_2D] = i(t.TEXTURE_2D, t.TEXTURE_2D, 1),
        P[t.TEXTURE_CUBE_MAP] = i(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
        this.init = function() {
            this.clearColor(0, 0, 0, 1),
            this.clearDepth(1),
            this.clearStencil(0),
            this.enable(t.DEPTH_TEST),
            this.setDepthFunc(a.LessEqualDepth),
            this.setFlipSided(!1),
            this.setCullFace(a.CullFaceBack),
            this.enable(t.CULL_FACE),
            this.enable(t.BLEND),
            this.setBlending(a.NormalBlending)
        }
        ,
        this.initAttributes = function() {
            for (var t = 0, e = s.length; t < e; t++)
                s[t] = 0
        }
        ,
        this.enableAttribute = function(r) {
            if (s[r] = 1,
            0 === c[r] && (t.enableVertexAttribArray(r),
            c[r] = 1),
            0 !== h[r]) {
                var i = e.get("ANGLE_instanced_arrays");
                i.vertexAttribDivisorANGLE(r, 0),
                h[r] = 0
            }
        }
        ,
        this.enableAttributeAndDivisor = function(e, r, i) {
            s[e] = 1,
            0 === c[e] && (t.enableVertexAttribArray(e),
            c[e] = 1),
            h[e] !== r && (i.vertexAttribDivisorANGLE(e, r),
            h[e] = r)
        }
        ,
        this.disableUnusedAttributes = function() {
            for (var e = 0, r = c.length; e !== r; ++e)
                c[e] !== s[e] && (t.disableVertexAttribArray(e),
                c[e] = 0)
        }
        ,
        this.enable = function(e) {
            l[e] !== !0 && (t.enable(e),
            l[e] = !0)
        }
        ,
        this.disable = function(e) {
            l[e] !== !1 && (t.disable(e),
            l[e] = !1)
        }
        ,
        this.getCompressedTextureFormats = function() {
            if (null === u && (u = [],
            e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1")))
                for (var r = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), i = 0; i < r.length; i++)
                    u.push(r[i]);
            return u
        }
        ,
        this.setBlending = function(e, i, n, o, s, c, h, l) {
            return e === a.NoBlending ? (this.disable(t.BLEND),
            void (d = e)) : (this.enable(t.BLEND),
            e === d && l === x || (e === a.AdditiveBlending ? l ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
            t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD),
            t.blendFunc(t.SRC_ALPHA, t.ONE)) : e === a.SubtractiveBlending ? l ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
            t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD),
            t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR)) : e === a.MultiplyBlending ? l ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
            t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD),
            t.blendFunc(t.ZERO, t.SRC_COLOR)) : l ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
            t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
            t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)),
            d = e,
            x = l),
            void (e === a.CustomBlending ? (s = s || i,
            c = c || n,
            h = h || o,
            i === p && s === g || (t.blendEquationSeparate(r(i), r(s)),
            p = i,
            g = s),
            n === f && o === m && c === v && h === y || (t.blendFuncSeparate(r(n), r(o), r(c), r(h)),
            f = n,
            m = o,
            v = c,
            y = h)) : (p = null,
            f = null,
            m = null,
            g = null,
            v = null,
            y = null)))
        }
        ,
        this.setColorWrite = function(t) {
            this.buffers.color.setMask(t)
        }
        ,
        this.setDepthTest = function(t) {
            this.buffers.depth.setTest(t)
        }
        ,
        this.setDepthWrite = function(t) {
            this.buffers.depth.setMask(t)
        }
        ,
        this.setDepthFunc = function(t) {
            this.buffers.depth.setFunc(t)
        }
        ,
        this.setStencilTest = function(t) {
            this.buffers.stencil.setTest(t)
        }
        ,
        this.setStencilWrite = function(t) {
            this.buffers.stencil.setMask(t)
        }
        ,
        this.setStencilFunc = function(t, e, r) {
            this.buffers.stencil.setFunc(t, e, r)
        }
        ,
        this.setStencilOp = function(t, e, r) {
            this.buffers.stencil.setOp(t, e, r)
        }
        ,
        this.setFlipSided = function(e) {
            b !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW),
            b = e)
        }
        ,
        this.setCullFace = function(e) {
            e !== a.CullFaceNone ? (this.enable(t.CULL_FACE),
            e !== _ && (e === a.CullFaceBack ? t.cullFace(t.BACK) : e === a.CullFaceFront ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : this.disable(t.CULL_FACE),
            _ = e
        }
        ,
        this.setLineWidth = function(e) {
            e !== M && (t.lineWidth(e),
            M = e)
        }
        ,
        this.setPolygonOffset = function(e, r, i) {
            e ? (this.enable(t.POLYGON_OFFSET_FILL),
            w === r && S === i || (t.polygonOffset(r, i),
            w = r,
            S = i)) : this.disable(t.POLYGON_OFFSET_FILL)
        }
        ,
        this.getScissorTest = function() {
            return E
        }
        ,
        this.setScissorTest = function(e) {
            E = e,
            e ? this.enable(t.SCISSOR_TEST) : this.disable(t.SCISSOR_TEST)
        }
        ,
        this.activeTexture = function(e) {
            void 0 === e && (e = t.TEXTURE0 + T - 1),
            A !== e && (t.activeTexture(e),
            A = e)
        }
        ,
        this.bindTexture = function(e, r) {
            null === A && n.activeTexture();
            var i = L[A];
            void 0 === i && (i = {
                type: void 0,
                texture: void 0
            },
            L[A] = i),
            i.type === e && i.texture === r || (t.bindTexture(e, r || P[e]),
            i.type = e,
            i.texture = r)
        }
        ,
        this.compressedTexImage2D = function() {
            try {
                t.compressedTexImage2D.apply(t, arguments)
            } catch (t) {
                console.error(t)
            }
        }
        ,
        this.texImage2D = function() {
            try {
                t.texImage2D.apply(t, arguments)
            } catch (t) {
                console.error(t)
            }
        }
        ,
        this.clearColor = function(t, e, r, i) {
            this.buffers.color.setClear(t, e, r, i)
        }
        ,
        this.clearDepth = function(t) {
            this.buffers.depth.setClear(t)
        }
        ,
        this.clearStencil = function(t) {
            this.buffers.stencil.setClear(t)
        }
        ,
        this.scissor = function(e) {
            C.equals(e) === !1 && (t.scissor(e.x, e.y, e.z, e.w),
            C.copy(e))
        }
        ,
        this.viewport = function(e) {
            R.equals(e) === !1 && (t.viewport(e.x, e.y, e.z, e.w),
            R.copy(e))
        }
        ,
        this.reset = function() {
            for (var e = 0; e < c.length; e++)
                1 === c[e] && (t.disableVertexAttribArray(e),
                c[e] = 0);
            l = {},
            u = null,
            A = null,
            L = {},
            d = null,
            b = null,
            _ = null,
            this.buffers.color.reset(),
            this.buffers.depth.reset(),
            this.buffers.stencil.reset()
        }
    }
    ,
    a.WebGLColorBuffer = function(t, e) {
        var r = !1
          , i = new a.Vector4
          , n = null
          , o = new a.Vector4;
        this.setMask = function(e) {
            n === e || r || (t.colorMask(e, e, e, e),
            n = e)
        }
        ,
        this.setLocked = function(t) {
            r = t
        }
        ,
        this.setClear = function(e, r, n, a) {
            i.set(e, r, n, a),
            o.equals(i) === !1 && (t.clearColor(e, r, n, a),
            o.copy(i))
        }
        ,
        this.reset = function() {
            r = !1,
            n = null,
            o = new a.Vector4
        }
    }
    ,
    a.WebGLDepthBuffer = function(t, e) {
        var r = !1
          , i = null
          , n = null
          , o = null;
        this.setTest = function(r) {
            r ? e.enable(t.DEPTH_TEST) : e.disable(t.DEPTH_TEST)
        }
        ,
        this.setMask = function(e) {
            i === e || r || (t.depthMask(e),
            i = e)
        }
        ,
        this.setFunc = function(e) {
            if (n !== e) {
                if (e)
                    switch (e) {
                    case a.NeverDepth:
                        t.depthFunc(t.NEVER);
                        break;
                    case a.AlwaysDepth:
                        t.depthFunc(t.ALWAYS);
                        break;
                    case a.LessDepth:
                        t.depthFunc(t.LESS);
                        break;
                    case a.LessEqualDepth:
                        t.depthFunc(t.LEQUAL);
                        break;
                    case a.EqualDepth:
                        t.depthFunc(t.EQUAL);
                        break;
                    case a.GreaterEqualDepth:
                        t.depthFunc(t.GEQUAL);
                        break;
                    case a.GreaterDepth:
                        t.depthFunc(t.GREATER);
                        break;
                    case a.NotEqualDepth:
                        t.depthFunc(t.NOTEQUAL);
                        break;
                    default:
                        t.depthFunc(t.LEQUAL)
                    }
                else
                    t.depthFunc(t.LEQUAL);
                n = e
            }
        }
        ,
        this.setLocked = function(t) {
            r = t
        }
        ,
        this.setClear = function(e) {
            o !== e && (t.clearDepth(e),
            o = e)
        }
        ,
        this.reset = function() {
            r = !1,
            i = null,
            n = null,
            o = null
        }
    }
    ,
    a.WebGLStencilBuffer = function(t, e) {
        var r = !1
          , i = null
          , n = null
          , a = null
          , o = null
          , s = null
          , c = null
          , h = null
          , l = null;
        this.setTest = function(r) {
            r ? e.enable(t.STENCIL_TEST) : e.disable(t.STENCIL_TEST)
        }
        ,
        this.setMask = function(e) {
            i === e || r || (t.stencilMask(e),
            i = e)
        }
        ,
        this.setFunc = function(e, r, i) {
            n === e && a === r && o === i || (t.stencilFunc(e, r, i),
            n = e,
            a = r,
            o = i)
        }
        ,
        this.setOp = function(e, r, i) {
            s === e && c === r && h === i || (t.stencilOp(e, r, i),
            s = e,
            c = r,
            h = i)
        }
        ,
        this.setLocked = function(t) {
            r = t
        }
        ,
        this.setClear = function(e) {
            l !== e && (t.clearStencil(e),
            l = e)
        }
        ,
        this.reset = function() {
            r = !1,
            i = null,
            n = null,
            a = null,
            o = null,
            s = null,
            c = null,
            h = null,
            l = null
        }
    }
    ,
    a.WebGLTextures = function(t, e, r, i, n, o, s) {
        function c(t, e) {
            if (t.width > e || t.height > e) {
                var r = e / Math.max(t.width, t.height)
                  , i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                i.width = Math.floor(t.width * r),
                i.height = Math.floor(t.height * r);
                var n = i.getContext("2d");
                return n.drawImage(t, 0, 0, t.width, t.height, 0, 0, i.width, i.height),
                console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + i.width + "x" + i.height, t),
                i
            }
            return t
        }
        function h(t) {
            return a.Math.isPowerOfTwo(t.width) && a.Math.isPowerOfTwo(t.height)
        }
        function l(t) {
            if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
                var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                e.width = a.Math.nearestPowerOfTwo(t.width),
                e.height = a.Math.nearestPowerOfTwo(t.height);
                var r = e.getContext("2d");
                return r.drawImage(t, 0, 0, e.width, e.height),
                console.warn("THREE.WebGLRenderer: image is not power of two (" + t.width + "x" + t.height + "). Resized to " + e.width + "x" + e.height, t),
                e
            }
            return t
        }
        function u(t) {
            return t.wrapS !== a.ClampToEdgeWrapping || t.wrapT !== a.ClampToEdgeWrapping || t.minFilter !== a.NearestFilter && t.minFilter !== a.LinearFilter
        }
        function d(e) {
            return e === a.NearestFilter || e === a.NearestMipMapNearestFilter || e === a.NearestMipMapLinearFilter ? t.NEAREST : t.LINEAR
        }
        function p(t) {
            var e = t.target;
            e.removeEventListener("dispose", p),
            m(e),
            L.textures--
        }
        function f(t) {
            var e = t.target;
            e.removeEventListener("dispose", f),
            g(e),
            L.textures--
        }
        function m(e) {
            var r = i.get(e);
            if (e.image && r.__image__webglTextureCube)
                t.deleteTexture(r.__image__webglTextureCube);
            else {
                if (void 0 === r.__webglInit)
                    return;
                t.deleteTexture(r.__webglTexture)
            }
            i.delete(e)
        }
        function g(e) {
            var r = i.get(e)
              , n = i.get(e.texture);
            if (e) {
                if (void 0 !== n.__webglTexture && t.deleteTexture(n.__webglTexture),
                e.depthTexture && e.depthTexture.dispose(),
                e instanceof a.WebGLRenderTargetCube)
                    for (var o = 0; o < 6; o++)
                        t.deleteFramebuffer(r.__webglFramebuffer[o]),
                        r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[o]);
                else
                    t.deleteFramebuffer(r.__webglFramebuffer),
                    r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer);
                i.delete(e.texture),
                i.delete(e)
            }
        }
        function v(e, n) {
            var a = i.get(e);
            if (e.version > 0 && a.__version !== e.version) {
                var o = e.image;
                if (void 0 === o)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e);
                else {
                    if (o.complete !== !1)
                        return void _(a, e, n);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e)
                }
            }
            r.activeTexture(t.TEXTURE0 + n),
            r.bindTexture(t.TEXTURE_2D, a.__webglTexture)
        }
        function y(e, s) {
            var l = i.get(e);
            if (6 === e.image.length)
                if (e.version > 0 && l.__version !== e.version) {
                    l.__image__webglTextureCube || (e.addEventListener("dispose", p),
                    l.__image__webglTextureCube = t.createTexture(),
                    L.textures++),
                    r.activeTexture(t.TEXTURE0 + s),
                    r.bindTexture(t.TEXTURE_CUBE_MAP, l.__image__webglTextureCube),
                    t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
                    for (var u = e instanceof a.CompressedTexture, d = e.image[0]instanceof a.DataTexture, f = [], m = 0; m < 6; m++)
                        u || d ? f[m] = d ? e.image[m].image : e.image[m] : f[m] = c(e.image[m], n.maxCubemapSize);
                    var g = f[0]
                      , v = h(g)
                      , y = o(e.format)
                      , x = o(e.type);
                    b(t.TEXTURE_CUBE_MAP, e, v);
                    for (var m = 0; m < 6; m++)
                        if (u)
                            for (var _, M = f[m].mipmaps, w = 0, S = M.length; w < S; w++)
                                _ = M[w],
                                e.format !== a.RGBAFormat && e.format !== a.RGBFormat ? r.getCompressedTextureFormats().indexOf(y) > -1 ? r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, w, y, _.width, _.height, 0, _.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, w, y, _.width, _.height, 0, y, x, _.data);
                        else
                            d ? r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, 0, y, f[m].width, f[m].height, 0, y, x, f[m].data) : r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, 0, y, y, x, f[m]);
                    e.generateMipmaps && v && t.generateMipmap(t.TEXTURE_CUBE_MAP),
                    l.__version = e.version,
                    e.onUpdate && e.onUpdate(e)
                } else
                    r.activeTexture(t.TEXTURE0 + s),
                    r.bindTexture(t.TEXTURE_CUBE_MAP, l.__image__webglTextureCube)
        }
        function x(e, n) {
            r.activeTexture(t.TEXTURE0 + n),
            r.bindTexture(t.TEXTURE_CUBE_MAP, i.get(e).__webglTexture)
        }
        function b(r, s, c) {
            var h;
            if (c ? (t.texParameteri(r, t.TEXTURE_WRAP_S, o(s.wrapS)),
            t.texParameteri(r, t.TEXTURE_WRAP_T, o(s.wrapT)),
            t.texParameteri(r, t.TEXTURE_MAG_FILTER, o(s.magFilter)),
            t.texParameteri(r, t.TEXTURE_MIN_FILTER, o(s.minFilter))) : (t.texParameteri(r, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(r, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            s.wrapS === a.ClampToEdgeWrapping && s.wrapT === a.ClampToEdgeWrapping || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", s),
            t.texParameteri(r, t.TEXTURE_MAG_FILTER, d(s.magFilter)),
            t.texParameteri(r, t.TEXTURE_MIN_FILTER, d(s.minFilter)),
            s.minFilter !== a.NearestFilter && s.minFilter !== a.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", s)),
            h = e.get("EXT_texture_filter_anisotropic")) {
                if (s.type === a.FloatType && null === e.get("OES_texture_float_linear"))
                    return;
                if (s.type === a.HalfFloatType && null === e.get("OES_texture_half_float_linear"))
                    return;
                (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t.texParameterf(r, h.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, n.getMaxAnisotropy())),
                i.get(s).__currentAnisotropy = s.anisotropy)
            }
        }
        function _(e, i, s) {
            void 0 === e.__webglInit && (e.__webglInit = !0,
            i.addEventListener("dispose", p),
            e.__webglTexture = t.createTexture(),
            L.textures++),
            r.activeTexture(t.TEXTURE0 + s),
            r.bindTexture(t.TEXTURE_2D, e.__webglTexture),
            t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, i.flipY),
            t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha),
            t.pixelStorei(t.UNPACK_ALIGNMENT, i.unpackAlignment);
            var d = c(i.image, n.maxTextureSize);
            u(i) && h(d) === !1 && (d = l(d));
            var f = h(d)
              , m = o(i.format)
              , g = o(i.type);
            b(t.TEXTURE_2D, i, f);
            var v, y = i.mipmaps;
            if (i instanceof a.DepthTexture) {
                var x = t.DEPTH_COMPONENT;
                if (i.type === a.FloatType) {
                    if (!C)
                        throw new Error("Float Depth Texture only supported in WebGL2.0");
                    x = t.DEPTH_COMPONENT32F
                } else
                    C && (x = t.DEPTH_COMPONENT16);
                r.texImage2D(t.TEXTURE_2D, 0, x, d.width, d.height, 0, m, g, null)
            } else if (i instanceof a.DataTexture)
                if (y.length > 0 && f) {
                    for (var _ = 0, M = y.length; _ < M; _++)
                        v = y[_],
                        r.texImage2D(t.TEXTURE_2D, _, m, v.width, v.height, 0, m, g, v.data);
                    i.generateMipmaps = !1
                } else
                    r.texImage2D(t.TEXTURE_2D, 0, m, d.width, d.height, 0, m, g, d.data);
            else if (i instanceof a.CompressedTexture)
                for (var _ = 0, M = y.length; _ < M; _++)
                    v = y[_],
                    i.format !== a.RGBAFormat && i.format !== a.RGBFormat ? r.getCompressedTextureFormats().indexOf(m) > -1 ? r.compressedTexImage2D(t.TEXTURE_2D, _, m, v.width, v.height, 0, v.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : r.texImage2D(t.TEXTURE_2D, _, m, v.width, v.height, 0, m, g, v.data);
            else if (y.length > 0 && f) {
                for (var _ = 0, M = y.length; _ < M; _++)
                    v = y[_],
                    r.texImage2D(t.TEXTURE_2D, _, m, m, g, v);
                i.generateMipmaps = !1
            } else
                r.texImage2D(t.TEXTURE_2D, 0, m, m, g, d);
            i.generateMipmaps && f && t.generateMipmap(t.TEXTURE_2D),
            e.__version = i.version,
            i.onUpdate && i.onUpdate(i)
        }
        function M(e, n, a, s) {
            var c = o(n.texture.format)
              , h = o(n.texture.type);
            r.texImage2D(s, 0, c, n.width, n.height, 0, c, h, null),
            t.bindFramebuffer(t.FRAMEBUFFER, e),
            t.framebufferTexture2D(t.FRAMEBUFFER, a, s, i.get(n.texture).__webglTexture, 0),
            t.bindFramebuffer(t.FRAMEBUFFER, null)
        }
        function w(e, r) {
            t.bindRenderbuffer(t.RENDERBUFFER, e),
            r.depthBuffer && !r.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, r.width, r.height),
            t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : r.depthBuffer && r.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, r.width, r.height),
            t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, r.width, r.height),
            t.bindRenderbuffer(t.RENDERBUFFER, null)
        }
        function S(e, r) {
            var n = r instanceof a.WebGLRenderTargetCube;
            if (n)
                throw new Error("Depth Texture with cube render targets is not supported!");
            if (t.bindFramebuffer(t.FRAMEBUFFER, e),
            !(r.depthTexture instanceof a.DepthTexture))
                throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width,
            r.depthTexture.image.height = r.height,
            r.depthTexture.needsUpdate = !0),
            v(r.depthTexture, 0);
            var o = i.get(r.depthTexture).__webglTexture;
            t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, o, 0)
        }
        function E(e) {
            var r = i.get(e)
              , n = e instanceof a.WebGLRenderTargetCube;
            if (e.depthTexture) {
                if (n)
                    throw new Error("target.depthTexture not supported in Cube render targets");
                S(r.__webglFramebuffer, e)
            } else if (n) {
                r.__webglDepthbuffer = [];
                for (var o = 0; o < 6; o++)
                    t.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[o]),
                    r.__webglDepthbuffer[o] = t.createRenderbuffer(),
                    w(r.__webglDepthbuffer[o], e)
            } else
                t.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer),
                r.__webglDepthbuffer = t.createRenderbuffer(),
                w(r.__webglDepthbuffer, e);
            t.bindFramebuffer(t.FRAMEBUFFER, null)
        }
        function T(e) {
            var n = i.get(e)
              , o = i.get(e.texture);
            e.addEventListener("dispose", f),
            o.__webglTexture = t.createTexture(),
            L.textures++;
            var s = e instanceof a.WebGLRenderTargetCube
              , c = h(e);
            if (s) {
                n.__webglFramebuffer = [];
                for (var l = 0; l < 6; l++)
                    n.__webglFramebuffer[l] = t.createFramebuffer()
            } else
                n.__webglFramebuffer = t.createFramebuffer();
            if (s) {
                r.bindTexture(t.TEXTURE_CUBE_MAP, o.__webglTexture),
                b(t.TEXTURE_CUBE_MAP, e.texture, c);
                for (var l = 0; l < 6; l++)
                    M(n.__webglFramebuffer[l], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + l);
                e.texture.generateMipmaps && c && t.generateMipmap(t.TEXTURE_CUBE_MAP),
                r.bindTexture(t.TEXTURE_CUBE_MAP, null)
            } else
                r.bindTexture(t.TEXTURE_2D, o.__webglTexture),
                b(t.TEXTURE_2D, e.texture, c),
                M(n.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D),
                e.texture.generateMipmaps && c && t.generateMipmap(t.TEXTURE_2D),
                r.bindTexture(t.TEXTURE_2D, null);
            e.depthBuffer && E(e)
        }
        function A(e) {
            var n = e.texture;
            if (n.generateMipmaps && h(e) && n.minFilter !== a.NearestFilter && n.minFilter !== a.LinearFilter) {
                var o = e instanceof a.WebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D
                  , s = i.get(n).__webglTexture;
                r.bindTexture(o, s),
                t.generateMipmap(o),
                r.bindTexture(o, null)
            }
        }
        var L = s.memory
          , C = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext;
        this.setTexture2D = v,
        this.setTextureCube = y,
        this.setTextureCubeDynamic = x,
        this.setupRenderTarget = T,
        this.updateRenderTargetMipmap = A
    }
    ,
    a.WebGLUniforms = function() {
        var t = new a.Texture
          , e = new a.CubeTexture
          , r = function() {
            this.seq = [],
            this.map = {}
        }
          , i = []
          , n = []
          , o = function(t, e, r) {
            var n = t[0];
            if (n <= 0 || n > 0)
                return t;
            var a = e * r
              , o = i[a];
            if (void 0 === o && (o = new Float32Array(a),
            i[a] = o),
            0 !== e) {
                n.toArray(o, 0);
                for (var s = 1, c = 0; s !== e; ++s)
                    c += r,
                    t[s].toArray(o, c)
            }
            return o
        }
          , s = function(t, e) {
            var r = n[e];
            void 0 === r && (r = new Int32Array(e),
            n[e] = r);
            for (var i = 0; i !== e; ++i)
                r[i] = t.allocTextureUnit();
            return r
        }
          , c = function(t, e) {
            t.uniform1f(this.addr, e)
        }
          , h = function(t, e) {
            t.uniform1i(this.addr, e)
        }
          , l = function(t, e) {
            void 0 === e.x ? t.uniform2fv(this.addr, e) : t.uniform2f(this.addr, e.x, e.y)
        }
          , u = function(t, e) {
            void 0 !== e.x ? t.uniform3f(this.addr, e.x, e.y, e.z) : void 0 !== e.r ? t.uniform3f(this.addr, e.r, e.g, e.b) : t.uniform3fv(this.addr, e)
        }
          , d = function(t, e) {
            void 0 === e.x ? t.uniform4fv(this.addr, e) : t.uniform4f(this.addr, e.x, e.y, e.z, e.w)
        }
          , p = function(t, e) {
            t.uniformMatrix2fv(this.addr, !1, e.elements || e)
        }
          , f = function(t, e) {
            t.uniformMatrix3fv(this.addr, !1, e.elements || e)
        }
          , m = function(t, e) {
            t.uniformMatrix4fv(this.addr, !1, e.elements || e)
        }
          , g = function(e, r, i) {
            var n = i.allocTextureUnit();
            e.uniform1i(this.addr, n),
            i.setTexture2D(r || t, n)
        }
          , v = function(t, r, i) {
            var n = i.allocTextureUnit();
            t.uniform1i(this.addr, n),
            i.setTextureCube(r || e, n)
        }
          , y = function(t, e) {
            t.uniform2iv(this.addr, e)
        }
          , x = function(t, e) {
            t.uniform3iv(this.addr, e)
        }
          , b = function(t, e) {
            t.uniform4iv(this.addr, e)
        }
          , _ = function(t) {
            switch (t) {
            case 5126:
                return c;
            case 35664:
                return l;
            case 35665:
                return u;
            case 35666:
                return d;
            case 35674:
                return p;
            case 35675:
                return f;
            case 35676:
                return m;
            case 35678:
                return g;
            case 35680:
                return v;
            case 5124:
            case 35670:
                return h;
            case 35667:
            case 35671:
                return y;
            case 35668:
            case 35672:
                return x;
            case 35669:
            case 35673:
                return b
            }
        }
          , M = function(t, e) {
            t.uniform1fv(this.addr, e)
        }
          , w = function(t, e) {
            t.uniform1iv(this.addr, e)
        }
          , S = function(t, e) {
            t.uniform2fv(this.addr, o(e, this.size, 2))
        }
          , E = function(t, e) {
            t.uniform3fv(this.addr, o(e, this.size, 3))
        }
          , T = function(t, e) {
            t.uniform4fv(this.addr, o(e, this.size, 4))
        }
          , A = function(t, e) {
            t.uniformMatrix2fv(this.addr, !1, o(e, this.size, 4))
        }
          , L = function(t, e) {
            t.uniformMatrix3fv(this.addr, !1, o(e, this.size, 9))
        }
          , C = function(t, e) {
            t.uniformMatrix4fv(this.addr, !1, o(e, this.size, 16))
        }
          , R = function(e, r, i) {
            var n = r.length
              , a = s(i, n);
            e.uniform1iv(this.addr, a);
            for (var o = 0; o !== n; ++o)
                i.setTexture2D(r[o] || t, a[o])
        }
          , P = function(t, r, i) {
            var n = r.length
              , a = s(i, n);
            t.uniform1iv(this.addr, a);
            for (var o = 0; o !== n; ++o)
                i.setTextureCube(r[o] || e, a[o])
        }
          , D = function(t) {
            switch (t) {
            case 5126:
                return M;
            case 35664:
                return S;
            case 35665:
                return E;
            case 35666:
                return T;
            case 35674:
                return A;
            case 35675:
                return L;
            case 35676:
                return C;
            case 35678:
                return R;
            case 35680:
                return P;
            case 5124:
            case 35670:
                return w;
            case 35667:
            case 35671:
                return y;
            case 35668:
            case 35672:
                return x;
            case 35669:
            case 35673:
                return b
            }
        }
          , B = function(t, e, r) {
            this.id = t,
            this.addr = r,
            this.setValue = _(e.type)
        }
          , U = function(t, e, r) {
            this.id = t,
            this.addr = r,
            this.size = e.size,
            this.setValue = D(e.type)
        }
          , I = function(t) {
            this.id = t,
            r.call(this)
        };
        I.prototype.setValue = function(t, e) {
            for (var r = this.seq, i = 0, n = r.length; i !== n; ++i) {
                var a = r[i];
                a.setValue(t, e[a.id])
            }
        }
        ;
        var F = /([\w\d_]+)(\])?(\[|\.)?/g
          , O = function(t, e) {
            t.seq.push(e),
            t.map[e.id] = e
        }
          , N = function(t, e, r) {
            var i = t.name
              , n = i.length;
            for (F.lastIndex = 0; ; ) {
                var a = F.exec(i)
                  , o = F.lastIndex
                  , s = a[1]
                  , c = "]" === a[2]
                  , h = a[3];
                if (c && (s |= 0),
                void 0 === h || "[" === h && o + 2 === n) {
                    O(r, void 0 === h ? new B(s,t,e) : new U(s,t,e));
                    break
                }
                var l = r.map
                  , u = l[s];
                void 0 === u && (u = new I(s),
                O(r, u)),
                r = u
            }
        }
          , G = function(t, e, i) {
            r.call(this),
            this.renderer = i;
            for (var n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), a = 0; a !== n; ++a) {
                var o = t.getActiveUniform(e, a)
                  , s = o.name
                  , c = t.getUniformLocation(e, s);
                N(o, c, this)
            }
        };
        return G.prototype.setValue = function(t, e, r) {
            var i = this.map[e];
            void 0 !== i && i.setValue(t, r, this.renderer)
        }
        ,
        G.prototype.set = function(t, e, r) {
            var i = this.map[r];
            void 0 !== i && i.setValue(t, e[r], this.renderer)
        }
        ,
        G.prototype.setOptional = function(t, e, r) {
            var i = e[r];
            void 0 !== i && this.setValue(t, r, i)
        }
        ,
        G.upload = function(t, e, r, i) {
            for (var n = 0, a = e.length; n !== a; ++n) {
                var o = e[n]
                  , s = r[o.id];
                s.needsUpdate !== !1 && o.setValue(t, s.value, i)
            }
        }
        ,
        G.seqWithValue = function(t, e) {
            for (var r = [], i = 0, n = t.length; i !== n; ++i) {
                var a = t[i];
                a.id in e && r.push(a)
            }
            return r
        }
        ,
        G.splitDynamic = function(t, e) {
            for (var r = null, i = t.length, n = 0, a = 0; a !== i; ++a) {
                var o = t[a]
                  , s = e[o.id];
                s && s.dynamic === !0 ? (null === r && (r = []),
                r.push(o)) : (n < a && (t[n] = o),
                ++n)
            }
            return n < i && (t.length = n),
            r
        }
        ,
        G.evalDynamic = function(t, e, r, i) {
            for (var n = 0, a = t.length; n !== a; ++n) {
                var o = e[t[n].id]
                  , s = o.onUpdateCallback;
                void 0 !== s && s.call(o, r, i)
            }
        }
        ,
        G
    }(),
    a.LensFlarePlugin = function(t, e) {
        function r() {
            var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1])
              , e = new Uint16Array([0, 1, 2, 0, 2, 3]);
            n = p.createBuffer(),
            o = p.createBuffer(),
            p.bindBuffer(p.ARRAY_BUFFER, n),
            p.bufferData(p.ARRAY_BUFFER, t, p.STATIC_DRAW),
            p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, o),
            p.bufferData(p.ELEMENT_ARRAY_BUFFER, e, p.STATIC_DRAW),
            u = p.createTexture(),
            d = p.createTexture(),
            f.bindTexture(p.TEXTURE_2D, u),
            p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 16, 16, 0, p.RGB, p.UNSIGNED_BYTE, null),
            p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE),
            p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE),
            p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST),
            p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST),
            f.bindTexture(p.TEXTURE_2D, d),
            p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, 16, 16, 0, p.RGBA, p.UNSIGNED_BYTE, null),
            p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE),
            p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE),
            p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST),
            p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST),
            s = {
                vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
            },
            c = i(s),
            h = {
                vertex: p.getAttribLocation(c, "position"),
                uv: p.getAttribLocation(c, "uv")
            },
            l = {
                renderType: p.getUniformLocation(c, "renderType"),
                map: p.getUniformLocation(c, "map"),
                occlusionMap: p.getUniformLocation(c, "occlusionMap"),
                opacity: p.getUniformLocation(c, "opacity"),
                color: p.getUniformLocation(c, "color"),
                scale: p.getUniformLocation(c, "scale"),
                rotation: p.getUniformLocation(c, "rotation"),
                screenPosition: p.getUniformLocation(c, "screenPosition")
            }
        }
        function i(e) {
            var r = p.createProgram()
              , i = p.createShader(p.FRAGMENT_SHADER)
              , n = p.createShader(p.VERTEX_SHADER)
              , a = "precision " + t.getPrecision() + " float;\n";
            return p.shaderSource(i, a + e.fragmentShader),
            p.shaderSource(n, a + e.vertexShader),
            p.compileShader(i),
            p.compileShader(n),
            p.attachShader(r, i),
            p.attachShader(r, n),
            p.linkProgram(r),
            r
        }
        var n, o, s, c, h, l, u, d, p = t.context, f = t.state;
        this.render = function(i, s, m) {
            if (0 !== e.length) {
                var g = new a.Vector3
                  , v = m.w / m.z
                  , y = .5 * m.z
                  , x = .5 * m.w
                  , b = 16 / m.w
                  , _ = new a.Vector2(b * v,b)
                  , M = new a.Vector3(1,1,0)
                  , w = new a.Vector2(1,1)
                  , S = new a.Box2;
                S.min.set(0, 0),
                S.max.set(m.z - 16, m.w - 16),
                void 0 === c && r(),
                p.useProgram(c),
                f.initAttributes(),
                f.enableAttribute(h.vertex),
                f.enableAttribute(h.uv),
                f.disableUnusedAttributes(),
                p.uniform1i(l.occlusionMap, 0),
                p.uniform1i(l.map, 1),
                p.bindBuffer(p.ARRAY_BUFFER, n),
                p.vertexAttribPointer(h.vertex, 2, p.FLOAT, !1, 16, 0),
                p.vertexAttribPointer(h.uv, 2, p.FLOAT, !1, 16, 8),
                p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, o),
                f.disable(p.CULL_FACE),
                f.setDepthWrite(!1);
                for (var E = 0, T = e.length; E < T; E++) {
                    b = 16 / m.w,
                    _.set(b * v, b);
                    var A = e[E];
                    if (g.set(A.matrixWorld.elements[12], A.matrixWorld.elements[13], A.matrixWorld.elements[14]),
                    g.applyMatrix4(s.matrixWorldInverse),
                    g.applyProjection(s.projectionMatrix),
                    M.copy(g),
                    w.x = m.x + M.x * y + y - 8,
                    w.y = m.y + M.y * x + x - 8,
                    S.containsPoint(w) === !0) {
                        f.activeTexture(p.TEXTURE0),
                        f.bindTexture(p.TEXTURE_2D, null),
                        f.activeTexture(p.TEXTURE1),
                        f.bindTexture(p.TEXTURE_2D, u),
                        p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGB, w.x, w.y, 16, 16, 0),
                        p.uniform1i(l.renderType, 0),
                        p.uniform2f(l.scale, _.x, _.y),
                        p.uniform3f(l.screenPosition, M.x, M.y, M.z),
                        f.disable(p.BLEND),
                        f.enable(p.DEPTH_TEST),
                        p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0),
                        f.activeTexture(p.TEXTURE0),
                        f.bindTexture(p.TEXTURE_2D, d),
                        p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGBA, w.x, w.y, 16, 16, 0),
                        p.uniform1i(l.renderType, 1),
                        f.disable(p.DEPTH_TEST),
                        f.activeTexture(p.TEXTURE1),
                        f.bindTexture(p.TEXTURE_2D, u),
                        p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0),
                        A.positionScreen.copy(M),
                        A.customUpdateCallback ? A.customUpdateCallback(A) : A.updateLensFlares(),
                        p.uniform1i(l.renderType, 2),
                        f.enable(p.BLEND);
                        for (var L = 0, C = A.lensFlares.length; L < C; L++) {
                            var R = A.lensFlares[L];
                            R.opacity > .001 && R.scale > .001 && (M.x = R.x,
                            M.y = R.y,
                            M.z = R.z,
                            b = R.size * R.scale / m.w,
                            _.x = b * v,
                            _.y = b,
                            p.uniform3f(l.screenPosition, M.x, M.y, M.z),
                            p.uniform2f(l.scale, _.x, _.y),
                            p.uniform1f(l.rotation, R.rotation),
                            p.uniform1f(l.opacity, R.opacity),
                            p.uniform3f(l.color, R.color.r, R.color.g, R.color.b),
                            f.setBlending(R.blending, R.blendEquation, R.blendSrc, R.blendDst),
                            t.setTexture2D(R.texture, 1),
                            p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0))
                        }
                    }
                }
                f.enable(p.CULL_FACE),
                f.enable(p.DEPTH_TEST),
                f.setDepthWrite(!0),
                t.resetGLState()
            }
        }
    }
    ,
    a.SpritePlugin = function(t, e) {
        function r() {
            var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1])
              , e = new Uint16Array([0, 1, 2, 0, 2, 3]);
            o = d.createBuffer(),
            s = d.createBuffer(),
            d.bindBuffer(d.ARRAY_BUFFER, o),
            d.bufferData(d.ARRAY_BUFFER, t, d.STATIC_DRAW),
            d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, s),
            d.bufferData(d.ELEMENT_ARRAY_BUFFER, e, d.STATIC_DRAW),
            c = i(),
            h = {
                position: d.getAttribLocation(c, "position"),
                uv: d.getAttribLocation(c, "uv")
            },
            l = {
                uvOffset: d.getUniformLocation(c, "uvOffset"),
                uvScale: d.getUniformLocation(c, "uvScale"),
                rotation: d.getUniformLocation(c, "rotation"),
                scale: d.getUniformLocation(c, "scale"),
                color: d.getUniformLocation(c, "color"),
                map: d.getUniformLocation(c, "map"),
                opacity: d.getUniformLocation(c, "opacity"),
                modelViewMatrix: d.getUniformLocation(c, "modelViewMatrix"),
                projectionMatrix: d.getUniformLocation(c, "projectionMatrix"),
                fogType: d.getUniformLocation(c, "fogType"),
                fogDensity: d.getUniformLocation(c, "fogDensity"),
                fogNear: d.getUniformLocation(c, "fogNear"),
                fogFar: d.getUniformLocation(c, "fogFar"),
                fogColor: d.getUniformLocation(c, "fogColor"),
                alphaTest: d.getUniformLocation(c, "alphaTest")
            };
            var r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            r.width = 8,
            r.height = 8;
            var n = r.getContext("2d");
            n.fillStyle = "white",
            n.fillRect(0, 0, 8, 8),
            u = new a.Texture(r),
            u.needsUpdate = !0
        }
        function i() {
            var e = d.createProgram()
              , r = d.createShader(d.VERTEX_SHADER)
              , i = d.createShader(d.FRAGMENT_SHADER);
            return d.shaderSource(r, ["precision " + t.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")),
            d.shaderSource(i, ["precision " + t.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")),
            d.compileShader(r),
            d.compileShader(i),
            d.attachShader(e, r),
            d.attachShader(e, i),
            d.linkProgram(e),
            e
        }
        function n(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
        }
        var o, s, c, h, l, u, d = t.context, p = t.state, f = new a.Vector3, m = new a.Quaternion, g = new a.Vector3;
        this.render = function(i, v) {
            if (0 !== e.length) {
                void 0 === c && r(),
                d.useProgram(c),
                p.initAttributes(),
                p.enableAttribute(h.position),
                p.enableAttribute(h.uv),
                p.disableUnusedAttributes(),
                p.disable(d.CULL_FACE),
                p.enable(d.BLEND),
                d.bindBuffer(d.ARRAY_BUFFER, o),
                d.vertexAttribPointer(h.position, 2, d.FLOAT, !1, 16, 0),
                d.vertexAttribPointer(h.uv, 2, d.FLOAT, !1, 16, 8),
                d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, s),
                d.uniformMatrix4fv(l.projectionMatrix, !1, v.projectionMatrix.elements),
                p.activeTexture(d.TEXTURE0),
                d.uniform1i(l.map, 0);
                var y = 0
                  , x = 0
                  , b = i.fog;
                b ? (d.uniform3f(l.fogColor, b.color.r, b.color.g, b.color.b),
                b instanceof a.Fog ? (d.uniform1f(l.fogNear, b.near),
                d.uniform1f(l.fogFar, b.far),
                d.uniform1i(l.fogType, 1),
                y = 1,
                x = 1) : b instanceof a.FogExp2 && (d.uniform1f(l.fogDensity, b.density),
                d.uniform1i(l.fogType, 2),
                y = 2,
                x = 2)) : (d.uniform1i(l.fogType, 0),
                y = 0,
                x = 0);
                for (var _ = 0, M = e.length; _ < M; _++) {
                    var w = e[_];
                    w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, w.matrixWorld),
                    w.z = -w.modelViewMatrix.elements[14]
                }
                e.sort(n);
                for (var S = [], _ = 0, M = e.length; _ < M; _++) {
                    var w = e[_]
                      , E = w.material;
                    if (E.visible !== !1) {
                        d.uniform1f(l.alphaTest, E.alphaTest),
                        d.uniformMatrix4fv(l.modelViewMatrix, !1, w.modelViewMatrix.elements),
                        w.matrixWorld.decompose(f, m, g),
                        S[0] = g.x,
                        S[1] = g.y;
                        var T = 0;
                        i.fog && E.fog && (T = x),
                        y !== T && (d.uniform1i(l.fogType, T),
                        y = T),
                        null !== E.map ? (d.uniform2f(l.uvOffset, E.map.offset.x, E.map.offset.y),
                        d.uniform2f(l.uvScale, E.map.repeat.x, E.map.repeat.y)) : (d.uniform2f(l.uvOffset, 0, 0),
                        d.uniform2f(l.uvScale, 1, 1)),
                        d.uniform1f(l.opacity, E.opacity),
                        d.uniform3f(l.color, E.color.r, E.color.g, E.color.b),
                        d.uniform1f(l.rotation, E.rotation),
                        d.uniform2fv(l.scale, S),
                        p.setBlending(E.blending, E.blendEquation, E.blendSrc, E.blendDst),
                        p.setDepthTest(E.depthTest),
                        p.setDepthWrite(E.depthWrite),
                        E.map ? t.setTexture2D(E.map, 0) : t.setTexture2D(u, 0),
                        d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0)
                    }
                }
                p.enable(d.CULL_FACE),
                t.resetGLState()
            }
        }
    }
    ,
    Object.assign(a, {
        Face4: function(t, e, r, i, n, o, s) {
            return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),
            new a.Face3(t,e,r,n,o,s)
        },
        LineStrip: 0,
        LinePieces: 1,
        MeshFaceMaterial: a.MultiMaterial,
        PointCloud: function(t, e) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
            new a.Points(t,e)
        },
        Particle: a.Sprite,
        ParticleSystem: function(t, e) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
            new a.Points(t,e)
        },
        PointCloudMaterial: function(t) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
            new a.PointsMaterial(t)
        },
        ParticleBasicMaterial: function(t) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
            new a.PointsMaterial(t)
        },
        ParticleSystemMaterial: function(t) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
            new a.PointsMaterial(t)
        },
        Vertex: function(t, e, r) {
            return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),
            new a.Vector3(t,e,r)
        }
    }),
    Object.assign(a.Box2.prototype, {
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        }
    }),
    Object.assign(a.Box3.prototype, {
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(t)
        }
    }),
    Object.assign(a.Matrix3.prototype, {
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
            t.applyMatrix3(this)
        },
        multiplyVector3Array: function(t) {
            return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
            this.applyToVector3Array(t)
        }
    }),
    Object.assign(a.Matrix4.prototype, {
        extractPosition: function(t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
            this.copyPosition(t)
        },
        setRotationFromQuaternion: function(t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
            this.makeRotationFromQuaternion(t)
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),
            t.applyProjection(this)
        },
        multiplyVector4: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        multiplyVector3Array: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
            this.applyToVector3Array(t)
        },
        rotateAxis: function(t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
            t.transformDirection(this)
        },
        crossVector: function(t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        translate: function(t) {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function(t) {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function(t) {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function(t) {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function(t, e) {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        }
    }),
    Object.assign(a.Plane.prototype, {
        isIntersectionLine: function(t) {
            return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
            this.intersectsLine(t)
        }
    }),
    Object.assign(a.Quaternion.prototype, {
        multiplyVector3: function(t) {
            return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
            t.applyQuaternion(this)
        }
    }),
    Object.assign(a.Ray.prototype, {
        isIntersectionBox: function(t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        isIntersectionPlane: function(t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
            this.intersectsPlane(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(t)
        }
    }),
    Object.assign(a.Vector3.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
            this.setFromMatrixPosition(t)
        },
        getScaleFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
            this.setFromMatrixScale(t)
        },
        getColumnFromMatrix: function(t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
            this.setFromMatrixColumn(e, t)
        }
    }),
    Object.assign(a.Object3D.prototype, {
        getChildByName: function(t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
            this.getObjectByName(t)
        },
        renderDepth: function(t) {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
            this.translateOnAxis(e, t)
        }
    }),
    Object.defineProperties(a.Object3D.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order
            },
            set: function(t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order = t
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function(t) {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }),
    Object.defineProperties(a.LOD.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."),
                this.levels
            }
        }
    }),
    a.PerspectiveCamera.prototype.setLens = function(t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
        void 0 !== e && (this.filmGauge = e),
        this.setFocalLength(t)
    }
    ,
    Object.defineProperties(a.Light.prototype, {
        onlyShadow: {
            set: function(t) {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
                this.shadow.camera.fov = t
            }
        },
        shadowCameraLeft: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
                this.shadow.camera.left = t
            }
        },
        shadowCameraRight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
                this.shadow.camera.right = t
            }
        },
        shadowCameraTop: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
                this.shadow.camera.top = t
            }
        },
        shadowCameraBottom: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
                this.shadow.camera.bottom = t
            }
        },
        shadowCameraNear: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
                this.shadow.camera.near = t
            }
        },
        shadowCameraFar: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
                this.shadow.camera.far = t
            }
        },
        shadowCameraVisible: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
                this.shadow.bias = t
            }
        },
        shadowDarkness: {
            set: function(t) {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
                this.shadow.mapSize.width = t
            }
        },
        shadowMapHeight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
                this.shadow.mapSize.height = t
            }
        }
    }),
    Object.defineProperties(a.BufferAttribute.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),
                this.array.length
            }
        }
    }),
    Object.assign(a.BufferGeometry.prototype, {
        addIndex: function(t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
            this.setIndex(t)
        },
        addDrawCall: function(t, e, r) {
            void 0 !== r && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
            this.addGroup(t, e)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
            this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }),
    Object.defineProperties(a.BufferGeometry.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
                this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
                this.groups
            }
        }
    }),
    Object.defineProperties(a.Material.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE." + this.type + ": .wrapRGB has been removed."),
                new a.Color
            }
        }
    }),
    Object.defineProperties(a.MeshPhongMaterial.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),
                !1
            },
            set: function(t) {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }),
    Object.defineProperties(a.ShaderMaterial.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives
            },
            set: function(t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives = t
            }
        }
    }),
    a.EventDispatcher.prototype = Object.assign(Object.create({
        constructor: a.EventDispatcher,
        apply: function(t) {
            console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in."),
            Object.assign(t, this)
        }
    }), a.EventDispatcher.prototype),
    Object.assign(a.WebGLRenderer.prototype, {
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
            this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
            this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
            this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
            this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
            this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
            this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
            this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
            this.setScissorTest(t)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    }),
    Object.defineProperties(a.WebGLRenderer.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
                this.shadowMap.enabled = t
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
                this.shadowMap.type = t
            }
        },
        shadowMapCullFace: {
            get: function() {
                return this.shadowMap.cullFace
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),
                this.shadowMap.cullFace = t
            }
        }
    }),
    Object.defineProperties(a.WebGLShadowMap.prototype, {
        cullFace: {
            get: function() {
                return this.renderReverseSided ? a.CullFaceFront : a.CullFaceBack
            },
            set: function(t) {
                var e = t !== a.CullFaceBack;
                console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + e + "."),
                this.renderReverseSided = e
            }
        }
    }),
    Object.defineProperties(a.WebGLRenderTarget.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS = t
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT = t
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter = t
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter = t
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy = t
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset = t
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat = t
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format = t
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type = t
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps = t
            }
        }
    }),
    Object.assign(a.Audio.prototype, {
        load: function(t) {
            console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");
            var e = this
              , r = new a.AudioLoader;
            return r.load(t, function(t) {
                e.setBuffer(t)
            }),
            this
        }
    }),
    Object.assign(a.AudioAnalyser.prototype, {
        getData: function(t) {
            return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),
            this.getFrequencyData()
        }
    }),
    a.GeometryUtils = {
        merge: function(t, e, r) {
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            var i;
            e instanceof a.Mesh && (e.matrixAutoUpdate && e.updateMatrix(),
            i = e.matrix,
            e = e.geometry),
            t.merge(e, i, r)
        },
        center: function(t) {
            return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),
            t.center()
        }
    },
    a.ImageUtils = {
        crossOrigin: void 0,
        loadTexture: function(t, e, r, i) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            var n = new a.TextureLoader;
            n.setCrossOrigin(this.crossOrigin);
            var o = n.load(t, r, void 0, i);
            return e && (o.mapping = e),
            o
        },
        loadTextureCube: function(t, e, r, i) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            var n = new a.CubeTextureLoader;
            n.setCrossOrigin(this.crossOrigin);
            var o = n.load(t, r, void 0, i);
            return e && (o.mapping = e),
            o
        },
        loadCompressedTexture: function() {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        },
        loadCompressedTextureCube: function() {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        }
    },
    a.Projector = function() {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),
        this.projectVector = function(t, e) {
            console.warn("THREE.Projector: .projectVector() is now vector.project()."),
            t.project(e)
        }
        ,
        this.unprojectVector = function(t, e) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
            t.unproject(e)
        }
        ,
        this.pickingRay = function(t, e) {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    }
    ,
    a.CanvasRenderer = function() {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),
        this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
        this.clear = function() {}
        ,
        this.render = function() {}
        ,
        this.setClearColor = function() {}
        ,
        this.setSize = function() {}
    }
    ,
    a.CurveUtils = {
        tangentQuadraticBezier: function(t, e, r, i) {
            return 2 * (1 - t) * (r - e) + 2 * t * (i - r)
        },
        tangentCubicBezier: function(t, e, r, i, n) {
            return -3 * e * (1 - t) * (1 - t) + 3 * r * (1 - t) * (1 - t) - 6 * t * r * (1 - t) + 6 * t * i * (1 - t) - 3 * t * t * i + 3 * t * t * n
        },
        tangentSpline: function(t, e, r, i, n) {
            var a = 6 * t * t - 6 * t
              , o = 3 * t * t - 4 * t + 1
              , s = -6 * t * t + 6 * t
              , c = 3 * t * t - 2 * t;
            return a + o + s + c
        },
        interpolate: function(t, e, r, i, n) {
            var a = .5 * (r - t)
              , o = .5 * (i - e)
              , s = n * n
              , c = n * s;
            return (2 * e - 2 * r + a + o) * c + (-3 * e + 3 * r - 2 * a - o) * s + a * n + e
        }
    },
    a.SceneUtils = {
        createMultiMaterialObject: function(t, e) {
            for (var r = new a.Group, i = 0, n = e.length; i < n; i++)
                r.add(new a.Mesh(t,e[i]));
            return r
        },
        detach: function(t, e, r) {
            t.applyMatrix(e.matrixWorld),
            e.remove(t),
            r.add(t)
        },
        attach: function(t, e, r) {
            var i = new a.Matrix4;
            i.getInverse(r.matrixWorld),
            t.applyMatrix(i),
            e.remove(t),
            r.add(t)
        }
    },
    a.ShapeUtils = {
        area: function(t) {
            for (var e = t.length, r = 0, i = e - 1, n = 0; n < e; i = n++)
                r += t[i].x * t[n].y - t[n].x * t[i].y;
            return .5 * r
        },
        triangulate: function() {
            function t(t, e, r, i, n, a) {
                var o, s, c, h, l, u, d, p, f;
                if (s = t[a[e]].x,
                c = t[a[e]].y,
                h = t[a[r]].x,
                l = t[a[r]].y,
                u = t[a[i]].x,
                d = t[a[i]].y,
                Number.EPSILON > (h - s) * (d - c) - (l - c) * (u - s))
                    return !1;
                var m, g, v, y, x, b, _, M, w, S, E, T, A, L, C;
                for (m = u - h,
                g = d - l,
                v = s - u,
                y = c - d,
                x = h - s,
                b = l - c,
                o = 0; o < n; o++)
                    if (p = t[a[o]].x,
                    f = t[a[o]].y,
                    !(p === s && f === c || p === h && f === l || p === u && f === d) && (_ = p - s,
                    M = f - c,
                    w = p - h,
                    S = f - l,
                    E = p - u,
                    T = f - d,
                    C = m * S - g * w,
                    A = x * M - b * _,
                    L = v * T - y * E,
                    C >= -Number.EPSILON && L >= -Number.EPSILON && A >= -Number.EPSILON))
                        return !1;
                return !0
            }
            return function(e, r) {
                var i = e.length;
                if (i < 3)
                    return null;
                var n, o, s, c = [], h = [], l = [];
                if (a.ShapeUtils.area(e) > 0)
                    for (o = 0; o < i; o++)
                        h[o] = o;
                else
                    for (o = 0; o < i; o++)
                        h[o] = i - 1 - o;
                var u = i
                  , d = 2 * u;
                for (o = u - 1; u > 2; ) {
                    if (d-- <= 0)
                        return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"),
                        r ? l : c;
                    if (n = o,
                    u <= n && (n = 0),
                    o = n + 1,
                    u <= o && (o = 0),
                    s = o + 1,
                    u <= s && (s = 0),
                    t(e, n, o, s, u, h)) {
                        var p, f, m, g, v;
                        for (p = h[n],
                        f = h[o],
                        m = h[s],
                        c.push([e[p], e[f], e[m]]),
                        l.push([h[n], h[o], h[s]]),
                        g = o,
                        v = o + 1; v < u; g++,
                        v++)
                            h[g] = h[v];
                        u--,
                        d = 2 * u
                    }
                }
                return r ? l : c
            }
        }(),
        triangulateShape: function(t, e) {
            function r(t) {
                var e = t.length;
                e > 2 && t[e - 1].equals(t[0]) && t.pop()
            }
            function i(t, e, r) {
                return t.x !== e.x ? t.x < e.x ? t.x <= r.x && r.x <= e.x : e.x <= r.x && r.x <= t.x : t.y < e.y ? t.y <= r.y && r.y <= e.y : e.y <= r.y && r.y <= t.y
            }
            function n(t, e, r, n, a) {
                var o = e.x - t.x
                  , s = e.y - t.y
                  , c = n.x - r.x
                  , h = n.y - r.y
                  , l = t.x - r.x
                  , u = t.y - r.y
                  , d = s * c - o * h
                  , p = s * l - o * u;
                if (Math.abs(d) > Number.EPSILON) {
                    var f;
                    if (d > 0) {
                        if (p < 0 || p > d)
                            return [];
                        if (f = h * l - c * u,
                        f < 0 || f > d)
                            return []
                    } else {
                        if (p > 0 || p < d)
                            return [];
                        if (f = h * l - c * u,
                        f > 0 || f < d)
                            return []
                    }
                    if (0 === f)
                        return !a || 0 !== p && p !== d ? [t] : [];
                    if (f === d)
                        return !a || 0 !== p && p !== d ? [e] : [];
                    if (0 === p)
                        return [r];
                    if (p === d)
                        return [n];
                    var m = f / d;
                    return [{
                        x: t.x + m * o,
                        y: t.y + m * s
                    }]
                }
                if (0 !== p || h * l !== c * u)
                    return [];
                var g = 0 === o && 0 === s
                  , v = 0 === c && 0 === h;
                if (g && v)
                    return t.x !== r.x || t.y !== r.y ? [] : [t];
                if (g)
                    return i(r, n, t) ? [t] : [];
                if (v)
                    return i(t, e, r) ? [r] : [];
                var y, x, b, _, M, w, S, E;
                return 0 !== o ? (t.x < e.x ? (y = t,
                b = t.x,
                x = e,
                _ = e.x) : (y = e,
                b = e.x,
                x = t,
                _ = t.x),
                r.x < n.x ? (M = r,
                S = r.x,
                w = n,
                E = n.x) : (M = n,
                S = n.x,
                w = r,
                E = r.x)) : (t.y < e.y ? (y = t,
                b = t.y,
                x = e,
                _ = e.y) : (y = e,
                b = e.y,
                x = t,
                _ = t.y),
                r.y < n.y ? (M = r,
                S = r.y,
                w = n,
                E = n.y) : (M = n,
                S = n.y,
                w = r,
                E = r.y)),
                b <= S ? _ < S ? [] : _ === S ? a ? [] : [M] : _ <= E ? [M, x] : [M, w] : b > E ? [] : b === E ? a ? [] : [y] : _ <= E ? [y, x] : [y, w]
            }
            function o(t, e, r, i) {
                var n = e.x - t.x
                  , a = e.y - t.y
                  , o = r.x - t.x
                  , s = r.y - t.y
                  , c = i.x - t.x
                  , h = i.y - t.y
                  , l = n * s - a * o
                  , u = n * h - a * c;
                if (Math.abs(l) > Number.EPSILON) {
                    var d = c * s - h * o;
                    return l > 0 ? u >= 0 && d >= 0 : u >= 0 || d >= 0
                }
                return u > 0
            }
            function s(t, e) {
                function r(t, e) {
                    var r = y.length - 1
                      , i = t - 1;
                    i < 0 && (i = r);
                    var n = t + 1;
                    n > r && (n = 0);
                    var a = o(y[t], y[i], y[n], s[e]);
                    if (!a)
                        return !1;
                    var c = s.length - 1
                      , h = e - 1;
                    h < 0 && (h = c);
                    var l = e + 1;
                    return l > c && (l = 0),
                    a = o(s[e], s[h], s[l], y[t]),
                    !!a
                }
                function i(t, e) {
                    var r, i, a;
                    for (r = 0; r < y.length; r++)
                        if (i = r + 1,
                        i %= y.length,
                        a = n(t, e, y[r], y[i], !0),
                        a.length > 0)
                            return !0;
                    return !1
                }
                function a(t, r) {
                    var i, a, o, s, c;
                    for (i = 0; i < x.length; i++)
                        for (a = e[x[i]],
                        o = 0; o < a.length; o++)
                            if (s = o + 1,
                            s %= a.length,
                            c = n(t, r, a[o], a[s], !0),
                            c.length > 0)
                                return !0;
                    return !1
                }
                for (var s, c, h, l, u, d, p, f, m, g, v, y = t.concat(), x = [], b = [], _ = 0, M = e.length; _ < M; _++)
                    x.push(_);
                for (var w = 0, S = 2 * x.length; x.length > 0; ) {
                    if (S--,
                    S < 0) {
                        console.log("Infinite Loop! Holes left:" + x.length + ", Probably Hole outside Shape!");
                        break
                    }
                    for (h = w; h < y.length; h++) {
                        l = y[h],
                        c = -1;
                        for (var _ = 0; _ < x.length; _++)
                            if (d = x[_],
                            p = l.x + ":" + l.y + ":" + d,
                            void 0 === b[p]) {
                                s = e[d];
                                for (var E = 0; E < s.length; E++)
                                    if (u = s[E],
                                    r(h, E) && !i(l, u) && !a(l, u)) {
                                        c = E,
                                        x.splice(_, 1),
                                        f = y.slice(0, h + 1),
                                        m = y.slice(h),
                                        g = s.slice(c),
                                        v = s.slice(0, c + 1),
                                        y = f.concat(g).concat(v).concat(m),
                                        w = h;
                                        break
                                    }
                                if (c >= 0)
                                    break;
                                b[p] = !0
                            }
                        if (c >= 0)
                            break
                    }
                }
                return y
            }
            r(t),
            e.forEach(r);
            for (var c, h, l, u, d, p, f = {}, m = t.concat(), g = 0, v = e.length; g < v; g++)
                Array.prototype.push.apply(m, e[g]);
            for (c = 0,
            h = m.length; c < h; c++)
                d = m[c].x + ":" + m[c].y,
                void 0 !== f[d] && console.warn("THREE.ShapeUtils: Duplicate point", d, c),
                f[d] = c;
            var y = s(t, e)
              , x = a.ShapeUtils.triangulate(y, !1);
            for (c = 0,
            h = x.length; c < h; c++)
                for (u = x[c],
                l = 0; l < 3; l++)
                    d = u[l].x + ":" + u[l].y,
                    p = f[d],
                    void 0 !== p && (u[l] = p);
            return x.concat()
        },
        isClockWise: function(t) {
            return a.ShapeUtils.area(t) < 0
        },
        b2: function() {
            function t(t, e) {
                var r = 1 - t;
                return r * r * e
            }
            function e(t, e) {
                return 2 * (1 - t) * t * e
            }
            function r(t, e) {
                return t * t * e
            }
            return function(i, n, a, o) {
                return t(i, n) + e(i, a) + r(i, o)
            }
        }(),
        b3: function() {
            function t(t, e) {
                var r = 1 - t;
                return r * r * r * e
            }
            function e(t, e) {
                var r = 1 - t;
                return 3 * r * r * t * e
            }
            function r(t, e) {
                var r = 1 - t;
                return 3 * r * t * t * e
            }
            function i(t, e) {
                return t * t * t * e
            }
            return function(n, a, o, s, c) {
                return t(n, a) + e(n, o) + r(n, s) + i(n, c)
            }
        }()
    },
    a.Curve = function() {}
    ,
    a.Curve.prototype = {
        constructor: a.Curve,
        getPoint: function(t) {
            return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),
            null
        },
        getPointAt: function(t) {
            var e = this.getUtoTmapping(t);
            return this.getPoint(e)
        },
        getPoints: function(t) {
            t || (t = 5);
            for (var e = [], r = 0; r <= t; r++)
                e.push(this.getPoint(r / t));
            return e
        },
        getSpacedPoints: function(t) {
            t || (t = 5);
            for (var e = [], r = 0; r <= t; r++)
                e.push(this.getPointAt(r / t));
            return e
        },
        getLength: function() {
            var t = this.getLengths();
            return t[t.length - 1]
        },
        getLengths: function(t) {
            if (t || (t = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200),
            this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
                return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, r, i = [], n = this.getPoint(0), a = 0;
            for (i.push(0),
            r = 1; r <= t; r++)
                e = this.getPoint(r / t),
                a += e.distanceTo(n),
                i.push(a),
                n = e;
            return this.cacheArcLengths = i,
            i
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.getLengths()
        },
        getUtoTmapping: function(t, e) {
            var r, i = this.getLengths(), n = 0, a = i.length;
            r = e ? e : t * i[a - 1];
            for (var o, s = 0, c = a - 1; s <= c; )
                if (n = Math.floor(s + (c - s) / 2),
                o = i[n] - r,
                o < 0)
                    s = n + 1;
                else {
                    if (!(o > 0)) {
                        c = n;
                        break
                    }
                    c = n - 1
                }
            if (n = c,
            i[n] === r) {
                var h = n / (a - 1);
                return h
            }
            var l = i[n]
              , u = i[n + 1]
              , d = u - l
              , p = (r - l) / d
              , h = (n + p) / (a - 1);
            return h
        },
        getTangent: function(t) {
            var e = 1e-4
              , r = t - e
              , i = t + e;
            r < 0 && (r = 0),
            i > 1 && (i = 1);
            var n = this.getPoint(r)
              , a = this.getPoint(i)
              , o = a.clone().sub(n);
            return o.normalize()
        },
        getTangentAt: function(t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e)
        }
    },
    a.Curve.create = function(t, e) {
        return t.prototype = Object.create(a.Curve.prototype),
        t.prototype.constructor = t,
        t.prototype.getPoint = e,
        t
    }
    ,
    a.CurvePath = function() {
        this.curves = [],
        this.autoClose = !1
    }
    ,
    a.CurvePath.prototype = Object.assign(Object.create(a.Curve.prototype), {
        constructor: a.CurvePath,
        add: function(t) {
            this.curves.push(t)
        },
        closePath: function() {
            var t = this.curves[0].getPoint(0)
              , e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new a.LineCurve(e,t))
        },
        getPoint: function(t) {
            for (var e = t * this.getLength(), r = this.getCurveLengths(), i = 0; i < r.length; ) {
                if (r[i] >= e) {
                    var n = r[i] - e
                      , a = this.curves[i]
                      , o = a.getLength()
                      , s = 0 === o ? 0 : 1 - n / o;
                    return a.getPointAt(s)
                }
                i++
            }
            return null
        },
        getLength: function() {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.cacheLengths = null,
            this.getLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                return this.cacheLengths;
            for (var t = [], e = 0, r = 0, i = this.curves.length; r < i; r++)
                e += this.curves[r].getLength(),
                t.push(e);
            return this.cacheLengths = t,
            t
        },
        getSpacedPoints: function(t) {
            t || (t = 40);
            for (var e = [], r = 0; r <= t; r++)
                e.push(this.getPoint(r / t));
            return this.autoClose && e.push(e[0]),
            e
        },
        getPoints: function(t) {
            t = t || 12;
            for (var e, r = [], i = 0, n = this.curves; i < n.length; i++)
                for (var o = n[i], s = o instanceof a.EllipseCurve ? 2 * t : o instanceof a.LineCurve ? 1 : o instanceof a.SplineCurve ? t * o.points.length : t, c = o.getPoints(s), h = 0; h < c.length; h++) {
                    var l = c[h];
                    e && e.equals(l) || (r.push(l),
                    e = l)
                }
            return this.autoClose && r.length > 1 && !r[r.length - 1].equals(r[0]) && r.push(r[0]),
            r
        },
        createPointsGeometry: function(t) {
            var e = this.getPoints(t);
            return this.createGeometry(e)
        },
        createSpacedPointsGeometry: function(t) {
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e)
        },
        createGeometry: function(t) {
            for (var e = new a.Geometry, r = 0, i = t.length; r < i; r++) {
                var n = t[r];
                e.vertices.push(new a.Vector3(n.x,n.y,n.z || 0))
            }
            return e
        }
    }),
    a.Font = function(t) {
        this.data = t
    }
    ,
    Object.assign(a.Font.prototype, {
        generateShapes: function(t, e, r) {
            function i(t) {
                for (var r = String(t).split(""), i = e / o.resolution, a = 0, s = [], c = 0; c < r.length; c++) {
                    var h = n(r[c], i, a);
                    a += h.offset,
                    s.push(h.path)
                }
                return s
            }
            function n(t, e, i) {
                var n = o.glyphs[t] || o.glyphs["?"];
                if (n) {
                    var s, c, h, l, u, d, p, f, m, g, v, y = new a.ShapePath, x = [], b = a.ShapeUtils.b2, _ = a.ShapeUtils.b3;
                    if (n.o)
                        for (var M = n._cachedOutline || (n._cachedOutline = n.o.split(" ")), w = 0, S = M.length; w < S; ) {
                            var E = M[w++];
                            switch (E) {
                            case "m":
                                s = M[w++] * e + i,
                                c = M[w++] * e,
                                y.moveTo(s, c);
                                break;
                            case "l":
                                s = M[w++] * e + i,
                                c = M[w++] * e,
                                y.lineTo(s, c);
                                break;
                            case "q":
                                if (h = M[w++] * e + i,
                                l = M[w++] * e,
                                p = M[w++] * e + i,
                                f = M[w++] * e,
                                y.quadraticCurveTo(p, f, h, l),
                                v = x[x.length - 1]) {
                                    u = v.x,
                                    d = v.y;
                                    for (var T = 1; T <= r; T++) {
                                        var A = T / r;
                                        b(A, u, p, h),
                                        b(A, d, f, l)
                                    }
                                }
                                break;
                            case "b":
                                if (h = M[w++] * e + i,
                                l = M[w++] * e,
                                p = M[w++] * e + i,
                                f = M[w++] * e,
                                m = M[w++] * e + i,
                                g = M[w++] * e,
                                y.bezierCurveTo(p, f, m, g, h, l),
                                v = x[x.length - 1]) {
                                    u = v.x,
                                    d = v.y;
                                    for (var T = 1; T <= r; T++) {
                                        var A = T / r;
                                        _(A, u, p, m, h),
                                        _(A, d, f, g, l)
                                    }
                                }
                            }
                        }
                    return {
                        offset: n.ha * e,
                        path: y
                    }
                }
            }
            void 0 === e && (e = 100),
            void 0 === r && (r = 4);
            for (var o = this.data, s = i(t), c = [], h = 0, l = s.length; h < l; h++)
                Array.prototype.push.apply(c, s[h].toShapes());
            return c
        }
    }),
    a.Path = function(t) {
        a.CurvePath.call(this),
        this.currentPoint = new a.Vector2,
        t && this.fromPoints(t)
    }
    ,
    a.Path.prototype = Object.assign(Object.create(a.CurvePath.prototype), {
        constructor: a.Path,
        fromPoints: function(t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, r = t.length; e < r; e++)
                this.lineTo(t[e].x, t[e].y)
        },
        moveTo: function(t, e) {
            this.currentPoint.set(t, e)
        },
        lineTo: function(t, e) {
            var r = new a.LineCurve(this.currentPoint.clone(),new a.Vector2(t,e));
            this.curves.push(r),
            this.currentPoint.set(t, e)
        },
        quadraticCurveTo: function(t, e, r, i) {
            var n = new a.QuadraticBezierCurve(this.currentPoint.clone(),new a.Vector2(t,e),new a.Vector2(r,i));
            this.curves.push(n),
            this.currentPoint.set(r, i)
        },
        bezierCurveTo: function(t, e, r, i, n, o) {
            var s = new a.CubicBezierCurve(this.currentPoint.clone(),new a.Vector2(t,e),new a.Vector2(r,i),new a.Vector2(n,o));
            this.curves.push(s),
            this.currentPoint.set(n, o)
        },
        splineThru: function(t) {
            var e = [this.currentPoint.clone()].concat(t)
              , r = new a.SplineCurve(e);
            this.curves.push(r),
            this.currentPoint.copy(t[t.length - 1])
        },
        arc: function(t, e, r, i, n, a) {
            var o = this.currentPoint.x
              , s = this.currentPoint.y;
            this.absarc(t + o, e + s, r, i, n, a)
        },
        absarc: function(t, e, r, i, n, a) {
            this.absellipse(t, e, r, r, i, n, a)
        },
        ellipse: function(t, e, r, i, n, a, o, s) {
            var c = this.currentPoint.x
              , h = this.currentPoint.y;
            this.absellipse(t + c, e + h, r, i, n, a, o, s)
        },
        absellipse: function(t, e, r, i, n, o, s, c) {
            var h = new a.EllipseCurve(t,e,r,i,n,o,s,c);
            if (this.curves.length > 0) {
                var l = h.getPoint(0);
                l.equals(this.currentPoint) || this.lineTo(l.x, l.y)
            }
            this.curves.push(h);
            var u = h.getPoint(1);
            this.currentPoint.copy(u)
        }
    }),
    a.ShapePath = function() {
        this.subPaths = [],
        this.currentPath = null
    }
    ,
    a.ShapePath.prototype = {
        moveTo: function(t, e) {
            this.currentPath = new a.Path,
            this.subPaths.push(this.currentPath),
            this.currentPath.moveTo(t, e)
        },
        lineTo: function(t, e) {
            this.currentPath.lineTo(t, e)
        },
        quadraticCurveTo: function(t, e, r, i) {
            this.currentPath.quadraticCurveTo(t, e, r, i)
        },
        bezierCurveTo: function(t, e, r, i, n, a) {
            this.currentPath.bezierCurveTo(t, e, r, i, n, a)
        },
        splineThru: function(t) {
            this.currentPath.splineThru(t)
        },
        toShapes: function(t, e) {
            function r(t) {
                for (var e = [], r = 0, i = t.length; r < i; r++) {
                    var n = t[r]
                      , o = new a.Shape;
                    o.curves = n.curves,
                    e.push(o)
                }
                return e
            }
            function i(t, e) {
                for (var r = e.length, i = !1, n = r - 1, a = 0; a < r; n = a++) {
                    var o = e[n]
                      , s = e[a]
                      , c = s.x - o.x
                      , h = s.y - o.y;
                    if (Math.abs(h) > Number.EPSILON) {
                        if (h < 0 && (o = e[a],
                        c = -c,
                        s = e[n],
                        h = -h),
                        t.y < o.y || t.y > s.y)
                            continue;
                        if (t.y === o.y) {
                            if (t.x === o.x)
                                return !0
                        } else {
                            var l = h * (t.x - o.x) - c * (t.y - o.y);
                            if (0 === l)
                                return !0;
                            if (l < 0)
                                continue;
                            i = !i
                        }
                    } else {
                        if (t.y !== o.y)
                            continue;
                        if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x)
                            return !0
                    }
                }
                return i
            }
            var n = a.ShapeUtils.isClockWise
              , o = this.subPaths;
            if (0 === o.length)
                return [];
            if (e === !0)
                return r(o);
            var s, c, h, l = [];
            if (1 === o.length)
                return c = o[0],
                h = new a.Shape,
                h.curves = c.curves,
                l.push(h),
                l;
            var u = !n(o[0].getPoints());
            u = t ? !u : u;
            var d, p = [], f = [], m = [], g = 0;
            f[g] = void 0,
            m[g] = [];
            for (var v = 0, y = o.length; v < y; v++)
                c = o[v],
                d = c.getPoints(),
                s = n(d),
                s = t ? !s : s,
                s ? (!u && f[g] && g++,
                f[g] = {
                    s: new a.Shape,
                    p: d
                },
                f[g].s.curves = c.curves,
                u && g++,
                m[g] = []) : m[g].push({
                    h: c,
                    p: d[0]
                });
            if (!f[0])
                return r(o);
            if (f.length > 1) {
                for (var x = !1, b = [], _ = 0, M = f.length; _ < M; _++)
                    p[_] = [];
                for (var _ = 0, M = f.length; _ < M; _++)
                    for (var w = m[_], S = 0; S < w.length; S++) {
                        for (var E = w[S], T = !0, A = 0; A < f.length; A++)
                            i(E.p, f[A].p) && (_ !== A && b.push({
                                froms: _,
                                tos: A,
                                hole: S
                            }),
                            T ? (T = !1,
                            p[A].push(E)) : x = !0);
                        T && p[_].push(E)
                    }
                b.length > 0 && (x || (m = p))
            }
            for (var L, v = 0, C = f.length; v < C; v++) {
                h = f[v].s,
                l.push(h),
                L = m[v];
                for (var R = 0, P = L.length; R < P; R++)
                    h.holes.push(L[R].h)
            }
            return l
        }
    },
    a.Shape = function() {
        a.Path.apply(this, arguments),
        this.holes = []
    }
    ,
    a.Shape.prototype = Object.assign(Object.create(a.Path.prototype), {
        constructor: a.Shape,
        extrude: function(t) {
            return new a.ExtrudeGeometry(this,t)
        },
        makeGeometry: function(t) {
            return new a.ShapeGeometry(this,t)
        },
        getPointsHoles: function(t) {
            for (var e = [], r = 0, i = this.holes.length; r < i; r++)
                e[r] = this.holes[r].getPoints(t);
            return e
        },
        extractAllPoints: function(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        },
        extractPoints: function(t) {
            return this.extractAllPoints(t)
        }
    }),
    a.LineCurve = function(t, e) {
        this.v1 = t,
        this.v2 = e
    }
    ,
    a.LineCurve.prototype = Object.create(a.Curve.prototype),
    a.LineCurve.prototype.constructor = a.LineCurve,
    a.LineCurve.prototype.getPoint = function(t) {
        if (1 === t)
            return this.v2.clone();
        var e = this.v2.clone().sub(this.v1);
        return e.multiplyScalar(t).add(this.v1),
        e
    }
    ,
    a.LineCurve.prototype.getPointAt = function(t) {
        return this.getPoint(t)
    }
    ,
    a.LineCurve.prototype.getTangent = function(t) {
        var e = this.v2.clone().sub(this.v1);
        return e.normalize()
    }
    ,
    a.QuadraticBezierCurve = function(t, e, r) {
        this.v0 = t,
        this.v1 = e,
        this.v2 = r
    }
    ,
    a.QuadraticBezierCurve.prototype = Object.create(a.Curve.prototype),
    a.QuadraticBezierCurve.prototype.constructor = a.QuadraticBezierCurve,
    a.QuadraticBezierCurve.prototype.getPoint = function(t) {
        var e = a.ShapeUtils.b2;
        return new a.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x),e(t, this.v0.y, this.v1.y, this.v2.y))
    }
    ,
    a.QuadraticBezierCurve.prototype.getTangent = function(t) {
        var e = a.CurveUtils.tangentQuadraticBezier;
        return new a.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x),e(t, this.v0.y, this.v1.y, this.v2.y)).normalize()
    }
    ,
    a.CubicBezierCurve = function(t, e, r, i) {
        this.v0 = t,
        this.v1 = e,
        this.v2 = r,
        this.v3 = i
    }
    ,
    a.CubicBezierCurve.prototype = Object.create(a.Curve.prototype),
    a.CubicBezierCurve.prototype.constructor = a.CubicBezierCurve,
    a.CubicBezierCurve.prototype.getPoint = function(t) {
        var e = a.ShapeUtils.b3;
        return new a.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x),e(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
    }
    ,
    a.CubicBezierCurve.prototype.getTangent = function(t) {
        var e = a.CurveUtils.tangentCubicBezier;
        return new a.Vector2(e(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x),e(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
    }
    ,
    a.SplineCurve = function(t) {
        this.points = void 0 == t ? [] : t
    }
    ,
    a.SplineCurve.prototype = Object.create(a.Curve.prototype),
    a.SplineCurve.prototype.constructor = a.SplineCurve,
    a.SplineCurve.prototype.getPoint = function(t) {
        var e = this.points
          , r = (e.length - 1) * t
          , i = Math.floor(r)
          , n = r - i
          , o = e[0 === i ? i : i - 1]
          , s = e[i]
          , c = e[i > e.length - 2 ? e.length - 1 : i + 1]
          , h = e[i > e.length - 3 ? e.length - 1 : i + 2]
          , l = a.CurveUtils.interpolate;
        return new a.Vector2(l(o.x, s.x, c.x, h.x, n),l(o.y, s.y, c.y, h.y, n))
    }
    ,
    a.EllipseCurve = function(t, e, r, i, n, a, o, s) {
        this.aX = t,
        this.aY = e,
        this.xRadius = r,
        this.yRadius = i,
        this.aStartAngle = n,
        this.aEndAngle = a,
        this.aClockwise = o,
        this.aRotation = s || 0
    }
    ,
    a.EllipseCurve.prototype = Object.create(a.Curve.prototype),
    a.EllipseCurve.prototype.constructor = a.EllipseCurve,
    a.EllipseCurve.prototype.getPoint = function(t) {
        for (var e = 2 * Math.PI, r = this.aEndAngle - this.aStartAngle, i = Math.abs(r) < Number.EPSILON; r < 0; )
            r += e;
        for (; r > e; )
            r -= e;
        r < Number.EPSILON && (r = i ? 0 : e),
        this.aClockwise !== !0 || i || (r === e ? r = -e : r -= e);
        var n = this.aStartAngle + t * r
          , o = this.aX + this.xRadius * Math.cos(n)
          , s = this.aY + this.yRadius * Math.sin(n);
        if (0 !== this.aRotation) {
            var c = Math.cos(this.aRotation)
              , h = Math.sin(this.aRotation)
              , l = o - this.aX
              , u = s - this.aY;
            o = l * c - u * h + this.aX,
            s = l * h + u * c + this.aY
        }
        return new a.Vector2(o,s)
    }
    ,
    a.ArcCurve = function(t, e, r, i, n, o) {
        a.EllipseCurve.call(this, t, e, r, r, i, n, o)
    }
    ,
    a.ArcCurve.prototype = Object.create(a.EllipseCurve.prototype),
    a.ArcCurve.prototype.constructor = a.ArcCurve,
    a.LineCurve3 = a.Curve.create(function(t, e) {
        this.v1 = t,
        this.v2 = e
    }, function(t) {
        if (1 === t)
            return this.v2.clone();
        var e = new a.Vector3;
        return e.subVectors(this.v2, this.v1),
        e.multiplyScalar(t),
        e.add(this.v1),
        e
    }),
    a.QuadraticBezierCurve3 = a.Curve.create(function(t, e, r) {
        this.v0 = t,
        this.v1 = e,
        this.v2 = r
    }, function(t) {
        var e = a.ShapeUtils.b2;
        return new a.Vector3(e(t, this.v0.x, this.v1.x, this.v2.x),e(t, this.v0.y, this.v1.y, this.v2.y),e(t, this.v0.z, this.v1.z, this.v2.z))
    }),
    a.CubicBezierCurve3 = a.Curve.create(function(t, e, r, i) {
        this.v0 = t,
        this.v1 = e,
        this.v2 = r,
        this.v3 = i
    }, function(t) {
        var e = a.ShapeUtils.b3;
        return new a.Vector3(e(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x),e(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y),e(t, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
    }),
    a.SplineCurve3 = a.Curve.create(function(t) {
        console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"),
        this.points = void 0 == t ? [] : t
    }, function(t) {
        var e = this.points
          , r = (e.length - 1) * t
          , i = Math.floor(r)
          , n = r - i
          , o = e[0 == i ? i : i - 1]
          , s = e[i]
          , c = e[i > e.length - 2 ? e.length - 1 : i + 1]
          , h = e[i > e.length - 3 ? e.length - 1 : i + 2]
          , l = a.CurveUtils.interpolate;
        return new a.Vector3(l(o.x, s.x, c.x, h.x, n),l(o.y, s.y, c.y, h.y, n),l(o.z, s.z, c.z, h.z, n))
    }),
    a.CatmullRomCurve3 = function() {
        function t() {}
        var e = new a.Vector3
          , r = new t
          , i = new t
          , n = new t;
        return t.prototype.init = function(t, e, r, i) {
            this.c0 = t,
            this.c1 = r,
            this.c2 = -3 * t + 3 * e - 2 * r - i,
            this.c3 = 2 * t - 2 * e + r + i
        }
        ,
        t.prototype.initNonuniformCatmullRom = function(t, e, r, i, n, a, o) {
            var s = (e - t) / n - (r - t) / (n + a) + (r - e) / a
              , c = (r - e) / a - (i - e) / (a + o) + (i - r) / o;
            s *= a,
            c *= a,
            this.init(e, r, s, c)
        }
        ,
        t.prototype.initCatmullRom = function(t, e, r, i, n) {
            this.init(e, r, n * (r - t), n * (i - e))
        }
        ,
        t.prototype.calc = function(t) {
            var e = t * t
              , r = e * t;
            return this.c0 + this.c1 * t + this.c2 * e + this.c3 * r
        }
        ,
        a.Curve.create(function(t) {
            this.points = t || [],
            this.closed = !1
        }, function(t) {
            var o, s, c, h, l = this.points;
            h = l.length,
            h < 2 && console.log("duh, you need at least 2 points"),
            o = (h - (this.closed ? 0 : 1)) * t,
            s = Math.floor(o),
            c = o - s,
            this.closed ? s += s > 0 ? 0 : (Math.floor(Math.abs(s) / l.length) + 1) * l.length : 0 === c && s === h - 1 && (s = h - 2,
            c = 1);
            var u, d, p, f;
            if (this.closed || s > 0 ? u = l[(s - 1) % h] : (e.subVectors(l[0], l[1]).add(l[0]),
            u = e),
            d = l[s % h],
            p = l[(s + 1) % h],
            this.closed || s + 2 < h ? f = l[(s + 2) % h] : (e.subVectors(l[h - 1], l[h - 2]).add(l[h - 1]),
            f = e),
            void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
                var m = "chordal" === this.type ? .5 : .25
                  , g = Math.pow(u.distanceToSquared(d), m)
                  , v = Math.pow(d.distanceToSquared(p), m)
                  , y = Math.pow(p.distanceToSquared(f), m);
                v < 1e-4 && (v = 1),
                g < 1e-4 && (g = v),
                y < 1e-4 && (y = v),
                r.initNonuniformCatmullRom(u.x, d.x, p.x, f.x, g, v, y),
                i.initNonuniformCatmullRom(u.y, d.y, p.y, f.y, g, v, y),
                n.initNonuniformCatmullRom(u.z, d.z, p.z, f.z, g, v, y)
            } else if ("catmullrom" === this.type) {
                var x = void 0 !== this.tension ? this.tension : .5;
                r.initCatmullRom(u.x, d.x, p.x, f.x, x),
                i.initCatmullRom(u.y, d.y, p.y, f.y, x),
                n.initCatmullRom(u.z, d.z, p.z, f.z, x)
            }
            var b = new a.Vector3(r.calc(c),i.calc(c),n.calc(c));
            return b
        })
    }(),
    a.ClosedSplineCurve3 = function(t) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3."),
        a.CatmullRomCurve3.call(this, t),
        this.type = "catmullrom",
        this.closed = !0
    }
    ,
    a.ClosedSplineCurve3.prototype = Object.create(a.CatmullRomCurve3.prototype),
    a.BoxGeometry = function(t, e, r, i, n, o) {
        a.Geometry.call(this),
        this.type = "BoxGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: r,
            widthSegments: i,
            heightSegments: n,
            depthSegments: o
        },
        this.fromBufferGeometry(new a.BoxBufferGeometry(t,e,r,i,n,o)),
        this.mergeVertices()
    }
    ,
    a.BoxGeometry.prototype = Object.create(a.Geometry.prototype),
    a.BoxGeometry.prototype.constructor = a.BoxGeometry,
    a.CubeGeometry = a.BoxGeometry,
    a.BoxBufferGeometry = function(t, e, r, i, n, o) {
        function s(t, e, r) {
            var i = 0;
            return i += (t + 1) * (e + 1) * 2,
            i += (t + 1) * (r + 1) * 2,
            i += (r + 1) * (e + 1) * 2
        }
        function c(t, e, r) {
            var i = 0;
            return i += t * e * 2,
            i += t * r * 2,
            i += r * e * 2,
            6 * i
        }
        function h(t, e, r, i, n, o, s, c, h, u, d) {
            for (var M = o / h, w = s / u, S = o / 2, E = s / 2, T = c / 2, A = h + 1, L = u + 1, C = 0, R = 0, P = new a.Vector3, D = 0; D < L; D++)
                for (var B = D * w - E, U = 0; U < A; U++) {
                    var I = U * M - S;
                    P[t] = I * i,
                    P[e] = B * n,
                    P[r] = T,
                    f[v] = P.x,
                    f[v + 1] = P.y,
                    f[v + 2] = P.z,
                    P[t] = 0,
                    P[e] = 0,
                    P[r] = c > 0 ? 1 : -1,
                    m[v] = P.x,
                    m[v + 1] = P.y,
                    m[v + 2] = P.z,
                    g[y] = U / h,
                    g[y + 1] = 1 - D / u,
                    v += 3,
                    y += 2,
                    C += 1
                }
            for (D = 0; D < u; D++)
                for (U = 0; U < h; U++) {
                    var F = b + U + A * D
                      , O = b + U + A * (D + 1)
                      , N = b + (U + 1) + A * (D + 1)
                      , G = b + (U + 1) + A * D;
                    p[x] = F,
                    p[x + 1] = O,
                    p[x + 2] = G,
                    p[x + 3] = O,
                    p[x + 4] = N,
                    p[x + 5] = G,
                    x += 6,
                    R += 6
                }
            l.addGroup(_, R, d),
            _ += R,
            b += C
        }
        a.BufferGeometry.call(this),
        this.type = "BoxBufferGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: r,
            widthSegments: i,
            heightSegments: n,
            depthSegments: o
        };
        var l = this;
        i = Math.floor(i) || 1,
        n = Math.floor(n) || 1,
        o = Math.floor(o) || 1;
        var u = s(i, n, o)
          , d = c(i, n, o)
          , p = new (d > 65535 ? Uint32Array : Uint16Array)(d)
          , f = new Float32Array(3 * u)
          , m = new Float32Array(3 * u)
          , g = new Float32Array(2 * u)
          , v = 0
          , y = 0
          , x = 0
          , b = 0
          , _ = 0;
        h("z", "y", "x", -1, -1, r, e, t, o, n, 0),
        h("z", "y", "x", 1, -1, r, e, -t, o, n, 1),
        h("x", "z", "y", 1, 1, t, r, e, i, o, 2),
        h("x", "z", "y", 1, -1, t, r, -e, i, o, 3),
        h("x", "y", "z", 1, -1, t, e, r, i, n, 4),
        h("x", "y", "z", -1, -1, t, e, -r, i, n, 5),
        this.setIndex(new a.BufferAttribute(p,1)),
        this.addAttribute("position", new a.BufferAttribute(f,3)),
        this.addAttribute("normal", new a.BufferAttribute(m,3)),
        this.addAttribute("uv", new a.BufferAttribute(g,2))
    }
    ,
    a.BoxBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.BoxBufferGeometry.prototype.constructor = a.BoxBufferGeometry,
    a.CircleGeometry = function(t, e, r, i) {
        a.Geometry.call(this),
        this.type = "CircleGeometry",
        this.parameters = {
            radius: t,
            segments: e,
            thetaStart: r,
            thetaLength: i
        },
        this.fromBufferGeometry(new a.CircleBufferGeometry(t,e,r,i))
    }
    ,
    a.CircleGeometry.prototype = Object.create(a.Geometry.prototype),
    a.CircleGeometry.prototype.constructor = a.CircleGeometry,
    a.CircleBufferGeometry = function(t, e, r, i) {
        a.BufferGeometry.call(this),
        this.type = "CircleBufferGeometry",
        this.parameters = {
            radius: t,
            segments: e,
            thetaStart: r,
            thetaLength: i
        },
        t = t || 50,
        e = void 0 !== e ? Math.max(3, e) : 8,
        r = void 0 !== r ? r : 0,
        i = void 0 !== i ? i : 2 * Math.PI;
        var n = e + 2
          , o = new Float32Array(3 * n)
          , s = new Float32Array(3 * n)
          , c = new Float32Array(2 * n);
        s[2] = 1,
        c[0] = .5,
        c[1] = .5;
        for (var h = 0, l = 3, u = 2; h <= e; h++,
        l += 3,
        u += 2) {
            var d = r + h / e * i;
            o[l] = t * Math.cos(d),
            o[l + 1] = t * Math.sin(d),
            s[l + 2] = 1,
            c[u] = (o[l] / t + 1) / 2,
            c[u + 1] = (o[l + 1] / t + 1) / 2
        }
        for (var p = [], l = 1; l <= e; l++)
            p.push(l, l + 1, 0);
        this.setIndex(new a.BufferAttribute(new Uint16Array(p),1)),
        this.addAttribute("position", new a.BufferAttribute(o,3)),
        this.addAttribute("normal", new a.BufferAttribute(s,3)),
        this.addAttribute("uv", new a.BufferAttribute(c,2)),
        this.boundingSphere = new a.Sphere(new a.Vector3,t)
    }
    ,
    a.CircleBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.CircleBufferGeometry.prototype.constructor = a.CircleBufferGeometry,
    a.CylinderBufferGeometry = function(t, e, r, i, n, o, s, c) {
        function h() {
            var t = (i + 1) * (n + 1);
            return o === !1 && (t += (i + 1) * f + i * f),
            t
        }
        function l() {
            var t = i * n * 2 * 3;
            return o === !1 && (t += i * f * 3),
            t
        }
        function u() {
            var o, h, l = new a.Vector3, u = new a.Vector3, d = 0, f = (e - t) / r;
            for (h = 0; h <= n; h++) {
                var m = []
                  , g = h / n
                  , T = g * (e - t) + t;
                for (o = 0; o <= i; o++) {
                    var A = o / i;
                    u.x = T * Math.sin(A * c + s),
                    u.y = -g * r + S,
                    u.z = T * Math.cos(A * c + s),
                    y.setXYZ(_, u.x, u.y, u.z),
                    l.copy(u),
                    (0 === t && 0 === h || 0 === e && h === n) && (l.x = Math.sin(A * c + s),
                    l.z = Math.cos(A * c + s)),
                    l.setY(Math.sqrt(l.x * l.x + l.z * l.z) * f).normalize(),
                    x.setXYZ(_, l.x, l.y, l.z),
                    b.setXY(_, A, 1 - g),
                    m.push(_),
                    _++
                }
                w.push(m)
            }
            for (o = 0; o < i; o++)
                for (h = 0; h < n; h++) {
                    var L = w[h][o]
                      , C = w[h + 1][o]
                      , R = w[h + 1][o + 1]
                      , P = w[h][o + 1];
                    v.setX(M, L),
                    M++,
                    v.setX(M, C),
                    M++,
                    v.setX(M, P),
                    M++,
                    v.setX(M, C),
                    M++,
                    v.setX(M, R),
                    M++,
                    v.setX(M, P),
                    M++,
                    d += 6
                }
            p.addGroup(E, d, 0),
            E += d
        }
        function d(r) {
            var n, o, h, l = new a.Vector2, u = new a.Vector3, d = 0, f = r === !0 ? t : e, m = r === !0 ? 1 : -1;
            for (o = _,
            n = 1; n <= i; n++)
                y.setXYZ(_, 0, S * m, 0),
                x.setXYZ(_, 0, m, 0),
                l.x = .5,
                l.y = .5,
                b.setXY(_, l.x, l.y),
                _++;
            for (h = _,
            n = 0; n <= i; n++) {
                var g = n / i
                  , w = g * c + s
                  , T = Math.cos(w)
                  , A = Math.sin(w);
                u.x = f * A,
                u.y = S * m,
                u.z = f * T,
                y.setXYZ(_, u.x, u.y, u.z),
                x.setXYZ(_, 0, m, 0),
                l.x = .5 * T + .5,
                l.y = .5 * A * m + .5,
                b.setXY(_, l.x, l.y),
                _++
            }
            for (n = 0; n < i; n++) {
                var L = o + n
                  , C = h + n;
                r === !0 ? (v.setX(M, C),
                M++,
                v.setX(M, C + 1),
                M++,
                v.setX(M, L),
                M++) : (v.setX(M, C + 1),
                M++,
                v.setX(M, C),
                M++,
                v.setX(M, L),
                M++),
                d += 3
            }
            p.addGroup(E, d, r === !0 ? 1 : 2),
            E += d
        }
        a.BufferGeometry.call(this),
        this.type = "CylinderBufferGeometry",
        this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: r,
            radialSegments: i,
            heightSegments: n,
            openEnded: o,
            thetaStart: s,
            thetaLength: c
        };
        var p = this;
        t = void 0 !== t ? t : 20,
        e = void 0 !== e ? e : 20,
        r = void 0 !== r ? r : 100,
        i = Math.floor(i) || 8,
        n = Math.floor(n) || 1,
        o = void 0 !== o && o,
        s = void 0 !== s ? s : 0,
        c = void 0 !== c ? c : 2 * Math.PI;
        var f = 0;
        o === !1 && (t > 0 && f++,
        e > 0 && f++);
        var m = h()
          , g = l()
          , v = new a.BufferAttribute(new (g > 65535 ? Uint32Array : Uint16Array)(g),1)
          , y = new a.BufferAttribute(new Float32Array(3 * m),3)
          , x = new a.BufferAttribute(new Float32Array(3 * m),3)
          , b = new a.BufferAttribute(new Float32Array(2 * m),2)
          , _ = 0
          , M = 0
          , w = []
          , S = r / 2
          , E = 0;
        u(),
        o === !1 && (t > 0 && d(!0),
        e > 0 && d(!1)),
        this.setIndex(v),
        this.addAttribute("position", y),
        this.addAttribute("normal", x),
        this.addAttribute("uv", b)
    }
    ,
    a.CylinderBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.CylinderBufferGeometry.prototype.constructor = a.CylinderBufferGeometry,
    a.CylinderGeometry = function(t, e, r, i, n, o, s, c) {
        a.Geometry.call(this),
        this.type = "CylinderGeometry",
        this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: r,
            radialSegments: i,
            heightSegments: n,
            openEnded: o,
            thetaStart: s,
            thetaLength: c
        },
        this.fromBufferGeometry(new a.CylinderBufferGeometry(t,e,r,i,n,o,s,c)),
        this.mergeVertices()
    }
    ,
    a.CylinderGeometry.prototype = Object.create(a.Geometry.prototype),
    a.CylinderGeometry.prototype.constructor = a.CylinderGeometry,
    a.ConeBufferGeometry = function(t, e, r, i, n, o, s) {
        a.CylinderBufferGeometry.call(this, 0, t, e, r, i, n, o, s),
        this.type = "ConeBufferGeometry",
        this.parameters = {
            radius: t,
            height: e,
            radialSegments: r,
            heightSegments: i,
            thetaStart: o,
            thetaLength: s
        }
    }
    ,
    a.ConeBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.ConeBufferGeometry.prototype.constructor = a.ConeBufferGeometry,
    a.ConeGeometry = function(t, e, r, i, n, o, s) {
        a.CylinderGeometry.call(this, 0, t, e, r, i, n, o, s),
        this.type = "ConeGeometry",
        this.parameters = {
            radius: t,
            height: e,
            radialSegments: r,
            heightSegments: i,
            openEnded: n,
            thetaStart: o,
            thetaLength: s
        }
    }
    ,
    a.ConeGeometry.prototype = Object.create(a.CylinderGeometry.prototype),
    a.ConeGeometry.prototype.constructor = a.ConeGeometry,
    a.EdgesGeometry = function(t, e) {
        function r(t, e) {
            return t - e
        }
        a.BufferGeometry.call(this),
        e = void 0 !== e ? e : 1;
        var i, n = Math.cos(a.Math.DEG2RAD * e), o = [0, 0], s = {}, c = ["a", "b", "c"];
        t instanceof a.BufferGeometry ? (i = new a.Geometry,
        i.fromBufferGeometry(t)) : i = t.clone(),
        i.mergeVertices(),
        i.computeFaceNormals();
        for (var h = i.vertices, l = i.faces, u = 0, d = l.length; u < d; u++)
            for (var p = l[u], f = 0; f < 3; f++) {
                o[0] = p[c[f]],
                o[1] = p[c[(f + 1) % 3]],
                o.sort(r);
                var m = o.toString();
                void 0 === s[m] ? s[m] = {
                    vert1: o[0],
                    vert2: o[1],
                    face1: u,
                    face2: void 0
                } : s[m].face2 = u
            }
        var g = [];
        for (var m in s) {
            var v = s[m];
            if (void 0 === v.face2 || l[v.face1].normal.dot(l[v.face2].normal) <= n) {
                var y = h[v.vert1];
                g.push(y.x),
                g.push(y.y),
                g.push(y.z),
                y = h[v.vert2],
                g.push(y.x),
                g.push(y.y),
                g.push(y.z)
            }
        }
        this.addAttribute("position", new a.BufferAttribute(new Float32Array(g),3))
    }
    ,
    a.EdgesGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.EdgesGeometry.prototype.constructor = a.EdgesGeometry,
    a.ExtrudeGeometry = function(t, e) {
        return "undefined" == typeof t ? void (t = []) : (a.Geometry.call(this),
        this.type = "ExtrudeGeometry",
        t = Array.isArray(t) ? t : [t],
        this.addShapeList(t, e),
        void this.computeFaceNormals())
    }
    ,
    a.ExtrudeGeometry.prototype = Object.create(a.Geometry.prototype),
    a.ExtrudeGeometry.prototype.constructor = a.ExtrudeGeometry,
    a.ExtrudeGeometry.prototype.addShapeList = function(t, e) {
        for (var r = t.length, i = 0; i < r; i++) {
            var n = t[i];
            this.addShape(n, e)
        }
    }
    ,
    a.ExtrudeGeometry.prototype.addShape = function(t, e) {
        function r(t, e, r) {
            return e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
            e.clone().multiplyScalar(r).add(t)
        }
        function i(t, e, r) {
            var i, n, o = 1, s = t.x - e.x, c = t.y - e.y, h = r.x - t.x, l = r.y - t.y, u = s * s + c * c, d = s * l - c * h;
            if (Math.abs(d) > Number.EPSILON) {
                var p = Math.sqrt(u)
                  , f = Math.sqrt(h * h + l * l)
                  , m = e.x - c / p
                  , g = e.y + s / p
                  , v = r.x - l / f
                  , y = r.y + h / f
                  , x = ((v - m) * l - (y - g) * h) / (s * l - c * h);
                i = m + s * x - t.x,
                n = g + c * x - t.y;
                var b = i * i + n * n;
                if (b <= 2)
                    return new a.Vector2(i,n);
                o = Math.sqrt(b / 2)
            } else {
                var _ = !1;
                s > Number.EPSILON ? h > Number.EPSILON && (_ = !0) : s < -Number.EPSILON ? h < -Number.EPSILON && (_ = !0) : Math.sign(c) === Math.sign(l) && (_ = !0),
                _ ? (i = -c,
                n = s,
                o = Math.sqrt(u)) : (i = s,
                n = c,
                o = Math.sqrt(u / 2))
            }
            return new a.Vector2(i / o,n / o)
        }
        function n() {
            if (b) {
                var t = 0
                  , e = H * t;
                for (X = 0; X < j; X++)
                    k = I[X],
                    h(k[2] + e, k[1] + e, k[0] + e);
                for (t = M + 2 * x,
                e = H * t,
                X = 0; X < j; X++)
                    k = I[X],
                    h(k[0] + e, k[1] + e, k[2] + e)
            } else {
                for (X = 0; X < j; X++)
                    k = I[X],
                    h(k[2], k[1], k[0]);
                for (X = 0; X < j; X++)
                    k = I[X],
                    h(k[0] + H * M, k[1] + H * M, k[2] + H * M)
            }
        }
        function o() {
            var t = 0;
            for (s(F, t),
            t += F.length,
            A = 0,
            L = B.length; A < L; A++)
                T = B[A],
                s(T, t),
                t += T.length
        }
        function s(t, e) {
            var r, i;
            for (X = t.length; --X >= 0; ) {
                r = X,
                i = X - 1,
                i < 0 && (i = t.length - 1);
                var n = 0
                  , a = M + 2 * x;
                for (n = 0; n < a; n++) {
                    var o = H * n
                      , s = H * (n + 1)
                      , c = e + r + o
                      , h = e + i + o
                      , u = e + i + s
                      , d = e + r + s;
                    l(c, h, u, d, t, n, a, r, i)
                }
            }
        }
        function c(t, e, r) {
            C.vertices.push(new a.Vector3(t,e,r))
        }
        function h(t, e, r) {
            t += R,
            e += R,
            r += R,
            C.faces.push(new a.Face3(t,e,r,null,null,0));
            var i = E.generateTopUV(C, t, e, r);
            C.faceVertexUvs[0].push(i)
        }
        function l(t, e, r, i, n, o, s, c, h) {
            t += R,
            e += R,
            r += R,
            i += R,
            C.faces.push(new a.Face3(t,e,i,null,null,1)),
            C.faces.push(new a.Face3(e,r,i,null,null,1));
            var l = E.generateSideWallUV(C, t, e, r, i);
            C.faceVertexUvs[0].push([l[0], l[1], l[3]]),
            C.faceVertexUvs[0].push([l[1], l[2], l[3]])
        }
        var u, d, p, f, m, g = void 0 !== e.amount ? e.amount : 100, v = void 0 !== e.bevelThickness ? e.bevelThickness : 6, y = void 0 !== e.bevelSize ? e.bevelSize : v - 2, x = void 0 !== e.bevelSegments ? e.bevelSegments : 3, b = void 0 === e.bevelEnabled || e.bevelEnabled, _ = void 0 !== e.curveSegments ? e.curveSegments : 12, M = void 0 !== e.steps ? e.steps : 1, w = e.extrudePath, S = !1, E = void 0 !== e.UVGenerator ? e.UVGenerator : a.ExtrudeGeometry.WorldUVGenerator;
        w && (u = w.getSpacedPoints(M),
        S = !0,
        b = !1,
        d = void 0 !== e.frames ? e.frames : new a.TubeGeometry.FrenetFrames(w,M,!1),
        p = new a.Vector3,
        f = new a.Vector3,
        m = new a.Vector3),
        b || (x = 0,
        v = 0,
        y = 0);
        var T, A, L, C = this, R = this.vertices.length, P = t.extractPoints(_), D = P.shape, B = P.holes, U = !a.ShapeUtils.isClockWise(D);
        if (U) {
            for (D = D.reverse(),
            A = 0,
            L = B.length; A < L; A++)
                T = B[A],
                a.ShapeUtils.isClockWise(T) && (B[A] = T.reverse());
            U = !1
        }
        var I = a.ShapeUtils.triangulateShape(D, B)
          , F = D;
        for (A = 0,
        L = B.length; A < L; A++)
            T = B[A],
            D = D.concat(T);
        for (var O, N, G, V, z, k, H = D.length, j = I.length, W = [], X = 0, q = F.length, Y = q - 1, Z = X + 1; X < q; X++,
        Y++,
        Z++)
            Y === q && (Y = 0),
            Z === q && (Z = 0),
            W[X] = i(F[X], F[Y], F[Z]);
        var K, Q = [], J = W.concat();
        for (A = 0,
        L = B.length; A < L; A++) {
            for (T = B[A],
            K = [],
            X = 0,
            q = T.length,
            Y = q - 1,
            Z = X + 1; X < q; X++,
            Y++,
            Z++)
                Y === q && (Y = 0),
                Z === q && (Z = 0),
                K[X] = i(T[X], T[Y], T[Z]);
            Q.push(K),
            J = J.concat(K)
        }
        for (O = 0; O < x; O++) {
            for (G = O / x,
            V = v * (1 - G),
            N = y * Math.sin(G * Math.PI / 2),
            X = 0,
            q = F.length; X < q; X++)
                z = r(F[X], W[X], N),
                c(z.x, z.y, -V);
            for (A = 0,
            L = B.length; A < L; A++)
                for (T = B[A],
                K = Q[A],
                X = 0,
                q = T.length; X < q; X++)
                    z = r(T[X], K[X], N),
                    c(z.x, z.y, -V)
        }
        for (N = y,
        X = 0; X < H; X++)
            z = b ? r(D[X], J[X], N) : D[X],
            S ? (f.copy(d.normals[0]).multiplyScalar(z.x),
            p.copy(d.binormals[0]).multiplyScalar(z.y),
            m.copy(u[0]).add(f).add(p),
            c(m.x, m.y, m.z)) : c(z.x, z.y, 0);
        var $;
        for ($ = 1; $ <= M; $++)
            for (X = 0; X < H; X++)
                z = b ? r(D[X], J[X], N) : D[X],
                S ? (f.copy(d.normals[$]).multiplyScalar(z.x),
                p.copy(d.binormals[$]).multiplyScalar(z.y),
                m.copy(u[$]).add(f).add(p),
                c(m.x, m.y, m.z)) : c(z.x, z.y, g / M * $);
        for (O = x - 1; O >= 0; O--) {
            for (G = O / x,
            V = v * (1 - G),
            N = y * Math.sin(G * Math.PI / 2),
            X = 0,
            q = F.length; X < q; X++)
                z = r(F[X], W[X], N),
                c(z.x, z.y, g + V);
            for (A = 0,
            L = B.length; A < L; A++)
                for (T = B[A],
                K = Q[A],
                X = 0,
                q = T.length; X < q; X++)
                    z = r(T[X], K[X], N),
                    S ? c(z.x, z.y + u[M - 1].y, u[M - 1].x + V) : c(z.x, z.y, g + V)
        }
        n(),
        o()
    }
    ,
    a.ExtrudeGeometry.WorldUVGenerator = {
        generateTopUV: function(t, e, r, i) {
            var n = t.vertices
              , o = n[e]
              , s = n[r]
              , c = n[i];
            return [new a.Vector2(o.x,o.y), new a.Vector2(s.x,s.y), new a.Vector2(c.x,c.y)]
        },
        generateSideWallUV: function(t, e, r, i, n) {
            var o = t.vertices
              , s = o[e]
              , c = o[r]
              , h = o[i]
              , l = o[n];
            return Math.abs(s.y - c.y) < .01 ? [new a.Vector2(s.x,1 - s.z), new a.Vector2(c.x,1 - c.z), new a.Vector2(h.x,1 - h.z), new a.Vector2(l.x,1 - l.z)] : [new a.Vector2(s.y,1 - s.z), new a.Vector2(c.y,1 - c.z), new a.Vector2(h.y,1 - h.z), new a.Vector2(l.y,1 - l.z)]
        }
    },
    a.ShapeGeometry = function(t, e) {
        a.Geometry.call(this),
        this.type = "ShapeGeometry",
        Array.isArray(t) === !1 && (t = [t]),
        this.addShapeList(t, e),
        this.computeFaceNormals()
    }
    ,
    a.ShapeGeometry.prototype = Object.create(a.Geometry.prototype),
    a.ShapeGeometry.prototype.constructor = a.ShapeGeometry,
    a.ShapeGeometry.prototype.addShapeList = function(t, e) {
        for (var r = 0, i = t.length; r < i; r++)
            this.addShape(t[r], e);
        return this
    }
    ,
    a.ShapeGeometry.prototype.addShape = function(t, e) {
        void 0 === e && (e = {});
        var r, i, n, o = void 0 !== e.curveSegments ? e.curveSegments : 12, s = e.material, c = void 0 === e.UVGenerator ? a.ExtrudeGeometry.WorldUVGenerator : e.UVGenerator, h = this.vertices.length, l = t.extractPoints(o), u = l.shape, d = l.holes, p = !a.ShapeUtils.isClockWise(u);
        if (p) {
            for (u = u.reverse(),
            r = 0,
            i = d.length; r < i; r++)
                n = d[r],
                a.ShapeUtils.isClockWise(n) && (d[r] = n.reverse());
            p = !1
        }
        var f = a.ShapeUtils.triangulateShape(u, d);
        for (r = 0,
        i = d.length; r < i; r++)
            n = d[r],
            u = u.concat(n);
        var m, g, v = u.length, y = f.length;
        for (r = 0; r < v; r++)
            m = u[r],
            this.vertices.push(new a.Vector3(m.x,m.y,0));
        for (r = 0; r < y; r++) {
            g = f[r];
            var x = g[0] + h
              , b = g[1] + h
              , _ = g[2] + h;
            this.faces.push(new a.Face3(x,b,_,null,null,s)),
            this.faceVertexUvs[0].push(c.generateTopUV(this, x, b, _))
        }
    }
    ,
    a.LatheBufferGeometry = function(t, e, r, i) {
        a.BufferGeometry.call(this),
        this.type = "LatheBufferGeometry",
        this.parameters = {
            points: t,
            segments: e,
            phiStart: r,
            phiLength: i
        },
        e = Math.floor(e) || 12,
        r = r || 0,
        i = i || 2 * Math.PI,
        i = a.Math.clamp(i, 0, 2 * Math.PI);
        var n, o, s, c = (e + 1) * t.length, h = e * t.length * 2 * 3, l = new a.BufferAttribute(new (h > 65535 ? Uint32Array : Uint16Array)(h),1), u = new a.BufferAttribute(new Float32Array(3 * c),3), d = new a.BufferAttribute(new Float32Array(2 * c),2), p = 0, f = 0, m = (1 / (t.length - 1),
        1 / e), g = new a.Vector3, v = new a.Vector2;
        for (o = 0; o <= e; o++) {
            var y = r + o * m * i
              , x = Math.sin(y)
              , b = Math.cos(y);
            for (s = 0; s <= t.length - 1; s++)
                g.x = t[s].x * x,
                g.y = t[s].y,
                g.z = t[s].x * b,
                u.setXYZ(p, g.x, g.y, g.z),
                v.x = o / e,
                v.y = s / (t.length - 1),
                d.setXY(p, v.x, v.y),
                p++
        }
        for (o = 0; o < e; o++)
            for (s = 0; s < t.length - 1; s++) {
                n = s + o * t.length;
                var _ = n
                  , M = n + t.length
                  , w = n + t.length + 1
                  , S = n + 1;
                l.setX(f, _),
                f++,
                l.setX(f, M),
                f++,
                l.setX(f, S),
                f++,
                l.setX(f, M),
                f++,
                l.setX(f, w),
                f++,
                l.setX(f, S),
                f++
            }
        if (this.setIndex(l),
        this.addAttribute("position", u),
        this.addAttribute("uv", d),
        this.computeVertexNormals(),
        i === 2 * Math.PI) {
            var E = this.attributes.normal.array
              , T = new a.Vector3
              , A = new a.Vector3
              , L = new a.Vector3;
            for (n = e * t.length * 3,
            o = 0,
            s = 0; o < t.length; o++,
            s += 3)
                T.x = E[s + 0],
                T.y = E[s + 1],
                T.z = E[s + 2],
                A.x = E[n + s + 0],
                A.y = E[n + s + 1],
                A.z = E[n + s + 2],
                L.addVectors(T, A).normalize(),
                E[s + 0] = E[n + s + 0] = L.x,
                E[s + 1] = E[n + s + 1] = L.y,
                E[s + 2] = E[n + s + 2] = L.z
        }
    }
    ,
    a.LatheBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.LatheBufferGeometry.prototype.constructor = a.LatheBufferGeometry;
    a.LatheGeometry = function(t, e, r, i) {
        a.Geometry.call(this),
        this.type = "LatheGeometry",
        this.parameters = {
            points: t,
            segments: e,
            phiStart: r,
            phiLength: i
        },
        this.fromBufferGeometry(new a.LatheBufferGeometry(t,e,r,i)),
        this.mergeVertices()
    }
    ;
    a.LatheGeometry.prototype = Object.create(a.Geometry.prototype),
    a.LatheGeometry.prototype.constructor = a.LatheGeometry,
    a.PlaneGeometry = function(t, e, r, i) {
        a.Geometry.call(this),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: r,
            heightSegments: i
        },
        this.fromBufferGeometry(new a.PlaneBufferGeometry(t,e,r,i))
    }
    ,
    a.PlaneGeometry.prototype = Object.create(a.Geometry.prototype),
    a.PlaneGeometry.prototype.constructor = a.PlaneGeometry,
    a.PlaneBufferGeometry = function(t, e, r, i) {
        a.BufferGeometry.call(this),
        this.type = "PlaneBufferGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: r,
            heightSegments: i
        };
        for (var n = t / 2, o = e / 2, s = Math.floor(r) || 1, c = Math.floor(i) || 1, h = s + 1, l = c + 1, u = t / s, d = e / c, p = new Float32Array(h * l * 3), f = new Float32Array(h * l * 3), m = new Float32Array(h * l * 2), g = 0, v = 0, y = 0; y < l; y++)
            for (var x = y * d - o, b = 0; b < h; b++) {
                var _ = b * u - n;
                p[g] = _,
                p[g + 1] = -x,
                f[g + 2] = 1,
                m[v] = b / s,
                m[v + 1] = 1 - y / c,
                g += 3,
                v += 2
            }
        g = 0;
        for (var M = new (p.length / 3 > 65535 ? Uint32Array : Uint16Array)(s * c * 6), y = 0; y < c; y++)
            for (var b = 0; b < s; b++) {
                var w = b + h * y
                  , S = b + h * (y + 1)
                  , E = b + 1 + h * (y + 1)
                  , T = b + 1 + h * y;
                M[g] = w,
                M[g + 1] = S,
                M[g + 2] = T,
                M[g + 3] = S,
                M[g + 4] = E,
                M[g + 5] = T,
                g += 6
            }
        this.setIndex(new a.BufferAttribute(M,1)),
        this.addAttribute("position", new a.BufferAttribute(p,3)),
        this.addAttribute("normal", new a.BufferAttribute(f,3)),
        this.addAttribute("uv", new a.BufferAttribute(m,2))
    }
    ,
    a.PlaneBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.PlaneBufferGeometry.prototype.constructor = a.PlaneBufferGeometry,
    a.RingBufferGeometry = function(t, e, r, i, n, o) {
        a.BufferGeometry.call(this),
        this.type = "RingBufferGeometry",
        this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: r,
            phiSegments: i,
            thetaStart: n,
            thetaLength: o
        },
        t = t || 20,
        e = e || 50,
        n = void 0 !== n ? n : 0,
        o = void 0 !== o ? o : 2 * Math.PI,
        r = void 0 !== r ? Math.max(3, r) : 8,
        i = void 0 !== i ? Math.max(1, i) : 1;
        var s, c, h, l = (r + 1) * (i + 1), u = r * i * 2 * 3, d = new a.BufferAttribute(new (u > 65535 ? Uint32Array : Uint16Array)(u),1), p = new a.BufferAttribute(new Float32Array(3 * l),3), f = new a.BufferAttribute(new Float32Array(3 * l),3), m = new a.BufferAttribute(new Float32Array(2 * l),2), g = 0, v = 0, y = t, x = (e - t) / i, b = new a.Vector3, _ = new a.Vector2;
        for (c = 0; c <= i; c++) {
            for (h = 0; h <= r; h++)
                s = n + h / r * o,
                b.x = y * Math.cos(s),
                b.y = y * Math.sin(s),
                p.setXYZ(g, b.x, b.y, b.z),
                f.setXYZ(g, 0, 0, 1),
                _.x = (b.x / e + 1) / 2,
                _.y = (b.y / e + 1) / 2,
                m.setXY(g, _.x, _.y),
                g++;
            y += x
        }
        for (c = 0; c < i; c++) {
            var M = c * (r + 1);
            for (h = 0; h < r; h++) {
                s = h + M;
                var w = s
                  , S = s + r + 1
                  , E = s + r + 2
                  , T = s + 1;
                d.setX(v, w),
                v++,
                d.setX(v, S),
                v++,
                d.setX(v, E),
                v++,
                d.setX(v, w),
                v++,
                d.setX(v, E),
                v++,
                d.setX(v, T),
                v++
            }
        }
        this.setIndex(d),
        this.addAttribute("position", p),
        this.addAttribute("normal", f),
        this.addAttribute("uv", m)
    }
    ,
    a.RingBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.RingBufferGeometry.prototype.constructor = a.RingBufferGeometry,
    a.RingGeometry = function(t, e, r, i, n, o) {
        a.Geometry.call(this),
        this.type = "RingGeometry",
        this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: r,
            phiSegments: i,
            thetaStart: n,
            thetaLength: o
        },
        this.fromBufferGeometry(new a.RingBufferGeometry(t,e,r,i,n,o))
    }
    ,
    a.RingGeometry.prototype = Object.create(a.Geometry.prototype),
    a.RingGeometry.prototype.constructor = a.RingGeometry,
    a.SphereGeometry = function(t, e, r, i, n, o, s) {
        a.Geometry.call(this),
        this.type = "SphereGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: r,
            phiStart: i,
            phiLength: n,
            thetaStart: o,
            thetaLength: s
        },
        this.fromBufferGeometry(new a.SphereBufferGeometry(t,e,r,i,n,o,s))
    }
    ,
    a.SphereGeometry.prototype = Object.create(a.Geometry.prototype),
    a.SphereGeometry.prototype.constructor = a.SphereGeometry,
    a.SphereBufferGeometry = function(t, e, r, i, n, o, s) {
        a.BufferGeometry.call(this),
        this.type = "SphereBufferGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: r,
            phiStart: i,
            phiLength: n,
            thetaStart: o,
            thetaLength: s
        },
        t = t || 50,
        e = Math.max(3, Math.floor(e) || 8),
        r = Math.max(2, Math.floor(r) || 6),
        i = void 0 !== i ? i : 0,
        n = void 0 !== n ? n : 2 * Math.PI,
        o = void 0 !== o ? o : 0,
        s = void 0 !== s ? s : Math.PI;
        for (var c = o + s, h = (e + 1) * (r + 1), l = new a.BufferAttribute(new Float32Array(3 * h),3), u = new a.BufferAttribute(new Float32Array(3 * h),3), d = new a.BufferAttribute(new Float32Array(2 * h),2), p = 0, f = [], m = new a.Vector3, g = 0; g <= r; g++) {
            for (var v = [], y = g / r, x = 0; x <= e; x++) {
                var b = x / e
                  , _ = -t * Math.cos(i + b * n) * Math.sin(o + y * s)
                  , M = t * Math.cos(o + y * s)
                  , w = t * Math.sin(i + b * n) * Math.sin(o + y * s);
                m.set(_, M, w).normalize(),
                l.setXYZ(p, _, M, w),
                u.setXYZ(p, m.x, m.y, m.z),
                d.setXY(p, b, 1 - y),
                v.push(p),
                p++
            }
            f.push(v)
        }
        for (var S = [], g = 0; g < r; g++)
            for (var x = 0; x < e; x++) {
                var E = f[g][x + 1]
                  , T = f[g][x]
                  , A = f[g + 1][x]
                  , L = f[g + 1][x + 1];
                (0 !== g || o > 0) && S.push(E, T, L),
                (g !== r - 1 || c < Math.PI) && S.push(T, A, L)
            }
        this.setIndex(new (l.count > 65535 ? a.Uint32Attribute : a.Uint16Attribute)(S,1)),
        this.addAttribute("position", l),
        this.addAttribute("normal", u),
        this.addAttribute("uv", d),
        this.boundingSphere = new a.Sphere(new a.Vector3,t)
    }
    ,
    a.SphereBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.SphereBufferGeometry.prototype.constructor = a.SphereBufferGeometry,
    a.TextGeometry = function(t, e) {
        e = e || {};
        var r = e.font;
        if (r instanceof a.Font == !1)
            return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
            new a.Geometry;
        var i = r.generateShapes(t, e.size, e.curveSegments);
        e.amount = void 0 !== e.height ? e.height : 50,
        void 0 === e.bevelThickness && (e.bevelThickness = 10),
        void 0 === e.bevelSize && (e.bevelSize = 8),
        void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
        a.ExtrudeGeometry.call(this, i, e),
        this.type = "TextGeometry"
    }
    ,
    a.TextGeometry.prototype = Object.create(a.ExtrudeGeometry.prototype),
    a.TextGeometry.prototype.constructor = a.TextGeometry,
    a.TorusBufferGeometry = function(t, e, r, i, n) {
        a.BufferGeometry.call(this),
        this.type = "TorusBufferGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            radialSegments: r,
            tubularSegments: i,
            arc: n
        },
        t = t || 100,
        e = e || 40,
        r = Math.floor(r) || 8,
        i = Math.floor(i) || 6,
        n = n || 2 * Math.PI;
        var o, s, c = (r + 1) * (i + 1), h = r * i * 2 * 3, l = new (h > 65535 ? Uint32Array : Uint16Array)(h), u = new Float32Array(3 * c), d = new Float32Array(3 * c), p = new Float32Array(2 * c), f = 0, m = 0, g = 0, v = new a.Vector3, y = new a.Vector3, x = new a.Vector3;
        for (o = 0; o <= r; o++)
            for (s = 0; s <= i; s++) {
                var b = s / i * n
                  , _ = o / r * Math.PI * 2;
                y.x = (t + e * Math.cos(_)) * Math.cos(b),
                y.y = (t + e * Math.cos(_)) * Math.sin(b),
                y.z = e * Math.sin(_),
                u[f] = y.x,
                u[f + 1] = y.y,
                u[f + 2] = y.z,
                v.x = t * Math.cos(b),
                v.y = t * Math.sin(b),
                x.subVectors(y, v).normalize(),
                d[f] = x.x,
                d[f + 1] = x.y,
                d[f + 2] = x.z,
                p[m] = s / i,
                p[m + 1] = o / r,
                f += 3,
                m += 2
            }
        for (o = 1; o <= r; o++)
            for (s = 1; s <= i; s++) {
                var M = (i + 1) * o + s - 1
                  , w = (i + 1) * (o - 1) + s - 1
                  , S = (i + 1) * (o - 1) + s
                  , E = (i + 1) * o + s;
                l[g] = M,
                l[g + 1] = w,
                l[g + 2] = E,
                l[g + 3] = w,
                l[g + 4] = S,
                l[g + 5] = E,
                g += 6
            }
        this.setIndex(new a.BufferAttribute(l,1)),
        this.addAttribute("position", new a.BufferAttribute(u,3)),
        this.addAttribute("normal", new a.BufferAttribute(d,3)),
        this.addAttribute("uv", new a.BufferAttribute(p,2))
    }
    ,
    a.TorusBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.TorusBufferGeometry.prototype.constructor = a.TorusBufferGeometry,
    a.TorusGeometry = function(t, e, r, i, n) {
        a.Geometry.call(this),
        this.type = "TorusGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            radialSegments: r,
            tubularSegments: i,
            arc: n
        },
        this.fromBufferGeometry(new a.TorusBufferGeometry(t,e,r,i,n))
    }
    ,
    a.TorusGeometry.prototype = Object.create(a.Geometry.prototype),
    a.TorusGeometry.prototype.constructor = a.TorusGeometry,
    a.TorusKnotBufferGeometry = function(t, e, r, i, n, o) {
        function s(t, e, r, i, n) {
            var a = Math.cos(t)
              , o = Math.sin(t)
              , s = r / e * t
              , c = Math.cos(s);
            n.x = i * (2 + c) * .5 * a,
            n.y = i * (2 + c) * o * .5,
            n.z = i * Math.sin(s) * .5
        }
        a.BufferGeometry.call(this),
        this.type = "TorusKnotBufferGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: r,
            radialSegments: i,
            p: n,
            q: o
        },
        t = t || 100,
        e = e || 40,
        r = Math.floor(r) || 64,
        i = Math.floor(i) || 8,
        n = n || 2,
        o = o || 3;
        var c, h, l = (i + 1) * (r + 1), u = i * r * 2 * 3, d = new a.BufferAttribute(new (u > 65535 ? Uint32Array : Uint16Array)(u),1), p = new a.BufferAttribute(new Float32Array(3 * l),3), f = new a.BufferAttribute(new Float32Array(3 * l),3), m = new a.BufferAttribute(new Float32Array(2 * l),2), g = 0, v = 0, y = new a.Vector3, x = new a.Vector3, b = new a.Vector2, _ = new a.Vector3, M = new a.Vector3, w = new a.Vector3, S = new a.Vector3, E = new a.Vector3;
        for (c = 0; c <= r; ++c) {
            var T = c / r * n * Math.PI * 2;
            for (s(T, n, o, t, _),
            s(T + .01, n, o, t, M),
            S.subVectors(M, _),
            E.addVectors(M, _),
            w.crossVectors(S, E),
            E.crossVectors(w, S),
            w.normalize(),
            E.normalize(),
            h = 0; h <= i; ++h) {
                var A = h / i * Math.PI * 2
                  , L = -e * Math.cos(A)
                  , C = e * Math.sin(A);
                y.x = _.x + (L * E.x + C * w.x),
                y.y = _.y + (L * E.y + C * w.y),
                y.z = _.z + (L * E.z + C * w.z),
                p.setXYZ(g, y.x, y.y, y.z),
                x.subVectors(y, _).normalize(),
                f.setXYZ(g, x.x, x.y, x.z),
                b.x = c / r,
                b.y = h / i,
                m.setXY(g, b.x, b.y),
                g++
            }
        }
        for (h = 1; h <= r; h++)
            for (c = 1; c <= i; c++) {
                var R = (i + 1) * (h - 1) + (c - 1)
                  , P = (i + 1) * h + (c - 1)
                  , D = (i + 1) * h + c
                  , B = (i + 1) * (h - 1) + c;
                d.setX(v, R),
                v++,
                d.setX(v, P),
                v++,
                d.setX(v, B),
                v++,
                d.setX(v, P),
                v++,
                d.setX(v, D),
                v++,
                d.setX(v, B),
                v++
            }
        this.setIndex(d),
        this.addAttribute("position", p),
        this.addAttribute("normal", f),
        this.addAttribute("uv", m)
    }
    ,
    a.TorusKnotBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.TorusKnotBufferGeometry.prototype.constructor = a.TorusKnotBufferGeometry,
    a.TorusKnotGeometry = function(t, e, r, i, n, o, s) {
        a.Geometry.call(this),
        this.type = "TorusKnotGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: r,
            radialSegments: i,
            p: n,
            q: o
        },
        void 0 !== s && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),
        this.fromBufferGeometry(new a.TorusKnotBufferGeometry(t,e,r,i,n,o)),
        this.mergeVertices()
    }
    ,
    a.TorusKnotGeometry.prototype = Object.create(a.Geometry.prototype),
    a.TorusKnotGeometry.prototype.constructor = a.TorusKnotGeometry,
    a.TubeGeometry = function(t, e, r, i, n, o) {
        function s(t, e, r) {
            return R.vertices.push(new a.Vector3(t,e,r)) - 1
        }
        a.Geometry.call(this),
        this.type = "TubeGeometry",
        this.parameters = {
            path: t,
            segments: e,
            radius: r,
            radialSegments: i,
            closed: n,
            taper: o
        },
        e = e || 64,
        r = r || 1,
        i = i || 8,
        n = n || !1,
        o = o || a.TubeGeometry.NoTaper;
        var c, h, l, u, d, p, f, m, g, v, y, x, b, _, M, w, S, E, T, A, L, C = [], R = this, P = e + 1, D = new a.Vector3, B = new a.TubeGeometry.FrenetFrames(t,e,n), U = B.tangents, I = B.normals, F = B.binormals;
        for (this.tangents = U,
        this.normals = I,
        this.binormals = F,
        v = 0; v < P; v++)
            for (C[v] = [],
            u = v / (P - 1),
            g = t.getPointAt(u),
            c = U[v],
            h = I[v],
            l = F[v],
            p = r * o(u),
            y = 0; y < i; y++)
                d = y / i * 2 * Math.PI,
                f = -p * Math.cos(d),
                m = p * Math.sin(d),
                D.copy(g),
                D.x += f * h.x + m * l.x,
                D.y += f * h.y + m * l.y,
                D.z += f * h.z + m * l.z,
                C[v][y] = s(D.x, D.y, D.z);
        for (v = 0; v < e; v++)
            for (y = 0; y < i; y++)
                x = n ? (v + 1) % e : v + 1,
                b = (y + 1) % i,
                _ = C[v][y],
                M = C[x][y],
                w = C[x][b],
                S = C[v][b],
                E = new a.Vector2(v / e,y / i),
                T = new a.Vector2((v + 1) / e,y / i),
                A = new a.Vector2((v + 1) / e,(y + 1) / i),
                L = new a.Vector2(v / e,(y + 1) / i),
                this.faces.push(new a.Face3(_,M,S)),
                this.faceVertexUvs[0].push([E, T, L]),
                this.faces.push(new a.Face3(M,w,S)),
                this.faceVertexUvs[0].push([T.clone(), A, L.clone()]);
        this.computeFaceNormals(),
        this.computeVertexNormals()
    }
    ,
    a.TubeGeometry.prototype = Object.create(a.Geometry.prototype),
    a.TubeGeometry.prototype.constructor = a.TubeGeometry,
    a.TubeGeometry.NoTaper = function(t) {
        return 1
    }
    ,
    a.TubeGeometry.SinusoidalTaper = function(t) {
        return Math.sin(Math.PI * t)
    }
    ,
    a.TubeGeometry.FrenetFrames = function(t, e, r) {
        function i() {
            f[0] = new a.Vector3,
            m[0] = new a.Vector3,
            o = Number.MAX_VALUE,
            s = Math.abs(p[0].x),
            c = Math.abs(p[0].y),
            h = Math.abs(p[0].z),
            s <= o && (o = s,
            d.set(1, 0, 0)),
            c <= o && (o = c,
            d.set(0, 1, 0)),
            h <= o && d.set(0, 0, 1),
            g.crossVectors(p[0], d).normalize(),
            f[0].crossVectors(p[0], g),
            m[0].crossVectors(p[0], f[0])
        }
        var n, o, s, c, h, l, u, d = new a.Vector3, p = [], f = [], m = [], g = new a.Vector3, v = new a.Matrix4, y = e + 1;
        for (this.tangents = p,
        this.normals = f,
        this.binormals = m,
        l = 0; l < y; l++)
            u = l / (y - 1),
            p[l] = t.getTangentAt(u),
            p[l].normalize();
        for (i(),
        l = 1; l < y; l++)
            f[l] = f[l - 1].clone(),
            m[l] = m[l - 1].clone(),
            g.crossVectors(p[l - 1], p[l]),
            g.length() > Number.EPSILON && (g.normalize(),
            n = Math.acos(a.Math.clamp(p[l - 1].dot(p[l]), -1, 1)),
            f[l].applyMatrix4(v.makeRotationAxis(g, n))),
            m[l].crossVectors(p[l], f[l]);
        if (r)
            for (n = Math.acos(a.Math.clamp(f[0].dot(f[y - 1]), -1, 1)),
            n /= y - 1,
            p[0].dot(g.crossVectors(f[0], f[y - 1])) > 0 && (n = -n),
            l = 1; l < y; l++)
                f[l].applyMatrix4(v.makeRotationAxis(p[l], n * l)),
                m[l].crossVectors(p[l], f[l])
    }
    ,
    a.PolyhedronGeometry = function(t, e, r, i) {
        function n(t) {
            var e = t.normalize().clone();
            e.index = u.vertices.push(e) - 1;
            var r = c(t) / 2 / Math.PI + .5
              , i = h(t) / Math.PI + .5;
            return e.uv = new a.Vector2(r,1 - i),
            e
        }
        function o(t, e, r) {
            var i = new a.Face3(t.index,e.index,r.index,[t.clone(), e.clone(), r.clone()]);
            u.faces.push(i),
            b.copy(t).add(e).add(r).divideScalar(3);
            var n = c(b);
            u.faceVertexUvs[0].push([l(t.uv, t, n), l(e.uv, e, n), l(r.uv, r, n)])
        }
        function s(t, e) {
            for (var r = Math.pow(2, e), i = n(u.vertices[t.a]), a = n(u.vertices[t.b]), s = n(u.vertices[t.c]), c = [], h = 0; h <= r; h++) {
                c[h] = [];
                for (var l = n(i.clone().lerp(s, h / r)), d = n(a.clone().lerp(s, h / r)), p = r - h, f = 0; f <= p; f++)
                    0 === f && h === r ? c[h][f] = l : c[h][f] = n(l.clone().lerp(d, f / p))
            }
            for (var h = 0; h < r; h++)
                for (var f = 0; f < 2 * (r - h) - 1; f++) {
                    var m = Math.floor(f / 2);
                    f % 2 === 0 ? o(c[h][m + 1], c[h + 1][m], c[h][m]) : o(c[h][m + 1], c[h + 1][m + 1], c[h + 1][m])
                }
        }
        function c(t) {
            return Math.atan2(t.z, -t.x)
        }
        function h(t) {
            return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
        }
        function l(t, e, r) {
            return r < 0 && 1 === t.x && (t = new a.Vector2(t.x - 1,t.y)),
            0 === e.x && 0 === e.z && (t = new a.Vector2(r / 2 / Math.PI + .5,t.y)),
            t.clone()
        }
        a.Geometry.call(this),
        this.type = "PolyhedronGeometry",
        this.parameters = {
            vertices: t,
            indices: e,
            radius: r,
            detail: i
        },
        r = r || 1,
        i = i || 0;
        for (var u = this, d = 0, p = t.length; d < p; d += 3)
            n(new a.Vector3(t[d],t[d + 1],t[d + 2]));
        for (var f = this.vertices, m = [], d = 0, g = 0, p = e.length; d < p; d += 3,
        g++) {
            var v = f[e[d]]
              , y = f[e[d + 1]]
              , x = f[e[d + 2]];
            m[g] = new a.Face3(v.index,y.index,x.index,[v.clone(), y.clone(), x.clone()]);
        }
        for (var b = new a.Vector3, d = 0, p = m.length; d < p; d++)
            s(m[d], i);
        for (var d = 0, p = this.faceVertexUvs[0].length; d < p; d++) {
            var _ = this.faceVertexUvs[0][d]
              , M = _[0].x
              , w = _[1].x
              , S = _[2].x
              , E = Math.max(M, w, S)
              , T = Math.min(M, w, S);
            E > .9 && T < .1 && (M < .2 && (_[0].x += 1),
            w < .2 && (_[1].x += 1),
            S < .2 && (_[2].x += 1))
        }
        for (var d = 0, p = this.vertices.length; d < p; d++)
            this.vertices[d].multiplyScalar(r);
        this.mergeVertices(),
        this.computeFaceNormals(),
        this.boundingSphere = new a.Sphere(new a.Vector3,r)
    }
    ,
    a.PolyhedronGeometry.prototype = Object.create(a.Geometry.prototype),
    a.PolyhedronGeometry.prototype.constructor = a.PolyhedronGeometry,
    a.DodecahedronGeometry = function(t, e) {
        var r = (1 + Math.sqrt(5)) / 2
          , i = 1 / r
          , n = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -r, 0, -i, r, 0, i, -r, 0, i, r, -i, -r, 0, -i, r, 0, i, -r, 0, i, r, 0, -r, 0, -i, r, 0, -i, -r, 0, i, r, 0, i]
          , o = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
        a.PolyhedronGeometry.call(this, n, o, t, e),
        this.type = "DodecahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    ,
    a.DodecahedronGeometry.prototype = Object.create(a.PolyhedronGeometry.prototype),
    a.DodecahedronGeometry.prototype.constructor = a.DodecahedronGeometry,
    a.IcosahedronGeometry = function(t, e) {
        var r = (1 + Math.sqrt(5)) / 2
          , i = [-1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, 0, 0, -1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, r, 0, -1, r, 0, 1, -r, 0, -1, -r, 0, 1]
          , n = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
        a.PolyhedronGeometry.call(this, i, n, t, e),
        this.type = "IcosahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    ,
    a.IcosahedronGeometry.prototype = Object.create(a.PolyhedronGeometry.prototype),
    a.IcosahedronGeometry.prototype.constructor = a.IcosahedronGeometry,
    a.OctahedronGeometry = function(t, e) {
        var r = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1]
          , i = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
        a.PolyhedronGeometry.call(this, r, i, t, e),
        this.type = "OctahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    ,
    a.OctahedronGeometry.prototype = Object.create(a.PolyhedronGeometry.prototype),
    a.OctahedronGeometry.prototype.constructor = a.OctahedronGeometry,
    a.TetrahedronGeometry = function(t, e) {
        var r = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1]
          , i = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
        a.PolyhedronGeometry.call(this, r, i, t, e),
        this.type = "TetrahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    ,
    a.TetrahedronGeometry.prototype = Object.create(a.PolyhedronGeometry.prototype),
    a.TetrahedronGeometry.prototype.constructor = a.TetrahedronGeometry,
    a.ParametricGeometry = function(t, e, r) {
        a.Geometry.call(this),
        this.type = "ParametricGeometry",
        this.parameters = {
            func: t,
            slices: e,
            stacks: r
        };
        var i, n, o, s, c, h = this.vertices, l = this.faces, u = this.faceVertexUvs[0], d = e + 1;
        for (i = 0; i <= r; i++)
            for (c = i / r,
            n = 0; n <= e; n++)
                s = n / e,
                o = t(s, c),
                h.push(o);
        var p, f, m, g, v, y, x, b;
        for (i = 0; i < r; i++)
            for (n = 0; n < e; n++)
                p = i * d + n,
                f = i * d + n + 1,
                m = (i + 1) * d + n + 1,
                g = (i + 1) * d + n,
                v = new a.Vector2(n / e,i / r),
                y = new a.Vector2((n + 1) / e,i / r),
                x = new a.Vector2((n + 1) / e,(i + 1) / r),
                b = new a.Vector2(n / e,(i + 1) / r),
                l.push(new a.Face3(p,f,g)),
                u.push([v, y, b]),
                l.push(new a.Face3(f,m,g)),
                u.push([y.clone(), x, b.clone()]);
        this.computeFaceNormals(),
        this.computeVertexNormals()
    }
    ,
    a.ParametricGeometry.prototype = Object.create(a.Geometry.prototype),
    a.ParametricGeometry.prototype.constructor = a.ParametricGeometry,
    a.WireframeGeometry = function(t) {
        function e(t, e) {
            return t - e
        }
        a.BufferGeometry.call(this);
        var r = [0, 0]
          , i = {}
          , n = ["a", "b", "c"];
        if (t instanceof a.Geometry) {
            for (var o = t.vertices, s = t.faces, c = 0, h = new Uint32Array(6 * s.length), l = 0, u = s.length; l < u; l++)
                for (var d = s[l], p = 0; p < 3; p++) {
                    r[0] = d[n[p]],
                    r[1] = d[n[(p + 1) % 3]],
                    r.sort(e);
                    var f = r.toString();
                    void 0 === i[f] && (h[2 * c] = r[0],
                    h[2 * c + 1] = r[1],
                    i[f] = !0,
                    c++)
                }
            for (var m = new Float32Array(2 * c * 3), l = 0, u = c; l < u; l++)
                for (var p = 0; p < 2; p++) {
                    var g = o[h[2 * l + p]]
                      , v = 6 * l + 3 * p;
                    m[v + 0] = g.x,
                    m[v + 1] = g.y,
                    m[v + 2] = g.z
                }
            this.addAttribute("position", new a.BufferAttribute(m,3))
        } else if (t instanceof a.BufferGeometry)
            if (null !== t.index) {
                var y = t.index.array
                  , o = t.attributes.position
                  , x = t.groups
                  , c = 0;
                0 === x.length && t.addGroup(0, y.length);
                for (var h = new Uint32Array(2 * y.length), b = 0, _ = x.length; b < _; ++b)
                    for (var M = x[b], w = M.start, S = M.count, l = w, E = w + S; l < E; l += 3)
                        for (var p = 0; p < 3; p++) {
                            r[0] = y[l + p],
                            r[1] = y[l + (p + 1) % 3],
                            r.sort(e);
                            var f = r.toString();
                            void 0 === i[f] && (h[2 * c] = r[0],
                            h[2 * c + 1] = r[1],
                            i[f] = !0,
                            c++)
                        }
                for (var m = new Float32Array(2 * c * 3), l = 0, u = c; l < u; l++)
                    for (var p = 0; p < 2; p++) {
                        var v = 6 * l + 3 * p
                          , T = h[2 * l + p];
                        m[v + 0] = o.getX(T),
                        m[v + 1] = o.getY(T),
                        m[v + 2] = o.getZ(T)
                    }
                this.addAttribute("position", new a.BufferAttribute(m,3))
            } else {
                for (var o = t.attributes.position.array, c = o.length / 3, A = c / 3, m = new Float32Array(2 * c * 3), l = 0, u = A; l < u; l++)
                    for (var p = 0; p < 3; p++) {
                        var v = 18 * l + 6 * p
                          , L = 9 * l + 3 * p;
                        m[v + 0] = o[L],
                        m[v + 1] = o[L + 1],
                        m[v + 2] = o[L + 2];
                        var T = 9 * l + 3 * ((p + 1) % 3);
                        m[v + 3] = o[T],
                        m[v + 4] = o[T + 1],
                        m[v + 5] = o[T + 2]
                    }
                this.addAttribute("position", new a.BufferAttribute(m,3))
            }
    }
    ,
    a.WireframeGeometry.prototype = Object.create(a.BufferGeometry.prototype),
    a.WireframeGeometry.prototype.constructor = a.WireframeGeometry,
    a.AxisHelper = function(t) {
        t = t || 1;
        var e = new Float32Array([0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t])
          , r = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1])
          , i = new a.BufferGeometry;
        i.addAttribute("position", new a.BufferAttribute(e,3)),
        i.addAttribute("color", new a.BufferAttribute(r,3));
        var n = new a.LineBasicMaterial({
            vertexColors: a.VertexColors
        });
        a.LineSegments.call(this, i, n)
    }
    ,
    a.AxisHelper.prototype = Object.create(a.LineSegments.prototype),
    a.AxisHelper.prototype.constructor = a.AxisHelper,
    a.ArrowHelper = function() {
        var t = new a.BufferGeometry;
        t.addAttribute("position", new a.Float32Attribute([0, 0, 0, 0, 1, 0],3));
        var e = new a.CylinderBufferGeometry(0,.5,1,5,1);
        return e.translate(0, -.5, 0),
        function(r, i, n, o, s, c) {
            a.Object3D.call(this),
            void 0 === o && (o = 16776960),
            void 0 === n && (n = 1),
            void 0 === s && (s = .2 * n),
            void 0 === c && (c = .2 * s),
            this.position.copy(i),
            this.line = new a.Line(t,new a.LineBasicMaterial({
                color: o
            })),
            this.line.matrixAutoUpdate = !1,
            this.add(this.line),
            this.cone = new a.Mesh(e,new a.MeshBasicMaterial({
                color: o
            })),
            this.cone.matrixAutoUpdate = !1,
            this.add(this.cone),
            this.setDirection(r),
            this.setLength(n, s, c)
        }
    }(),
    a.ArrowHelper.prototype = Object.create(a.Object3D.prototype),
    a.ArrowHelper.prototype.constructor = a.ArrowHelper,
    a.ArrowHelper.prototype.setDirection = function() {
        var t, e = new a.Vector3;
        return function(r) {
            r.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : r.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(r.z, 0, -r.x).normalize(),
            t = Math.acos(r.y),
            this.quaternion.setFromAxisAngle(e, t))
        }
    }(),
    a.ArrowHelper.prototype.setLength = function(t, e, r) {
        void 0 === e && (e = .2 * t),
        void 0 === r && (r = .2 * e),
        this.line.scale.set(1, Math.max(0, t - e), 1),
        this.line.updateMatrix(),
        this.cone.scale.set(r, e, r),
        this.cone.position.y = t,
        this.cone.updateMatrix()
    }
    ,
    a.ArrowHelper.prototype.setColor = function(t) {
        this.line.material.color.copy(t),
        this.cone.material.color.copy(t)
    }
    ,
    a.BoxHelper = function(t, e) {
        void 0 === e && (e = 16776960);
        var r = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
          , i = new Float32Array(24)
          , n = new a.BufferGeometry;
        n.setIndex(new a.BufferAttribute(r,1)),
        n.addAttribute("position", new a.BufferAttribute(i,3)),
        a.LineSegments.call(this, n, new a.LineBasicMaterial({
            color: e
        })),
        void 0 !== t && this.update(t)
    }
    ,
    a.BoxHelper.prototype = Object.create(a.LineSegments.prototype),
    a.BoxHelper.prototype.constructor = a.BoxHelper,
    a.BoxHelper.prototype.update = function() {
        var t = new a.Box3;
        return function(e) {
            if (e instanceof a.Box3 ? t.copy(e) : t.setFromObject(e),
            !t.isEmpty()) {
                var r = t.min
                  , i = t.max
                  , n = this.geometry.attributes.position
                  , o = n.array;
                o[0] = i.x,
                o[1] = i.y,
                o[2] = i.z,
                o[3] = r.x,
                o[4] = i.y,
                o[5] = i.z,
                o[6] = r.x,
                o[7] = r.y,
                o[8] = i.z,
                o[9] = i.x,
                o[10] = r.y,
                o[11] = i.z,
                o[12] = i.x,
                o[13] = i.y,
                o[14] = r.z,
                o[15] = r.x,
                o[16] = i.y,
                o[17] = r.z,
                o[18] = r.x,
                o[19] = r.y,
                o[20] = r.z,
                o[21] = i.x,
                o[22] = r.y,
                o[23] = r.z,
                n.needsUpdate = !0,
                this.geometry.computeBoundingSphere()
            }
        }
    }(),
    a.BoundingBoxHelper = function(t, e) {
        var r = void 0 !== e ? e : 8947848;
        this.object = t,
        this.box = new a.Box3,
        a.Mesh.call(this, new a.BoxGeometry(1,1,1), new a.MeshBasicMaterial({
            color: r,
            wireframe: !0
        }))
    }
    ,
    a.BoundingBoxHelper.prototype = Object.create(a.Mesh.prototype),
    a.BoundingBoxHelper.prototype.constructor = a.BoundingBoxHelper,
    a.BoundingBoxHelper.prototype.update = function() {
        this.box.setFromObject(this.object),
        this.box.size(this.scale),
        this.box.center(this.position)
    }
    ,
    a.CameraHelper = function(t) {
        function e(t, e, i) {
            r(t, i),
            r(e, i)
        }
        function r(t, e) {
            i.vertices.push(new a.Vector3),
            i.colors.push(new a.Color(e)),
            void 0 === o[t] && (o[t] = []),
            o[t].push(i.vertices.length - 1)
        }
        var i = new a.Geometry
          , n = new a.LineBasicMaterial({
            color: 16777215,
            vertexColors: a.FaceColors
        })
          , o = {}
          , s = 16755200
          , c = 16711680
          , h = 43775
          , l = 16777215
          , u = 3355443;
        e("n1", "n2", s),
        e("n2", "n4", s),
        e("n4", "n3", s),
        e("n3", "n1", s),
        e("f1", "f2", s),
        e("f2", "f4", s),
        e("f4", "f3", s),
        e("f3", "f1", s),
        e("n1", "f1", s),
        e("n2", "f2", s),
        e("n3", "f3", s),
        e("n4", "f4", s),
        e("p", "n1", c),
        e("p", "n2", c),
        e("p", "n3", c),
        e("p", "n4", c),
        e("u1", "u2", h),
        e("u2", "u3", h),
        e("u3", "u1", h),
        e("c", "t", l),
        e("p", "c", u),
        e("cn1", "cn2", u),
        e("cn3", "cn4", u),
        e("cf1", "cf2", u),
        e("cf3", "cf4", u),
        a.LineSegments.call(this, i, n),
        this.camera = t,
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.pointMap = o,
        this.update()
    }
    ,
    a.CameraHelper.prototype = Object.create(a.LineSegments.prototype),
    a.CameraHelper.prototype.constructor = a.CameraHelper,
    a.CameraHelper.prototype.update = function() {
        function t(t, a, o, s) {
            i.set(a, o, s).unproject(n);
            var c = r[t];
            if (void 0 !== c)
                for (var h = 0, l = c.length; h < l; h++)
                    e.vertices[c[h]].copy(i)
        }
        var e, r, i = new a.Vector3, n = new a.Camera;
        return function() {
            e = this.geometry,
            r = this.pointMap;
            var i = 1
              , a = 1;
            n.projectionMatrix.copy(this.camera.projectionMatrix),
            t("c", 0, 0, -1),
            t("t", 0, 0, 1),
            t("n1", -i, -a, -1),
            t("n2", i, -a, -1),
            t("n3", -i, a, -1),
            t("n4", i, a, -1),
            t("f1", -i, -a, 1),
            t("f2", i, -a, 1),
            t("f3", -i, a, 1),
            t("f4", i, a, 1),
            t("u1", .7 * i, 1.1 * a, -1),
            t("u2", .7 * -i, 1.1 * a, -1),
            t("u3", 0, 2 * a, -1),
            t("cf1", -i, 0, 1),
            t("cf2", i, 0, 1),
            t("cf3", 0, -a, 1),
            t("cf4", 0, a, 1),
            t("cn1", -i, 0, -1),
            t("cn2", i, 0, -1),
            t("cn3", 0, -a, -1),
            t("cn4", 0, a, -1),
            e.verticesNeedUpdate = !0
        }
    }(),
    a.DirectionalLightHelper = function(t, e) {
        a.Object3D.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        void 0 === e && (e = 1);
        var r = new a.BufferGeometry;
        r.addAttribute("position", new a.Float32Attribute([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0],3));
        var i = new a.LineBasicMaterial({
            fog: !1
        });
        this.add(new a.Line(r,i)),
        r = new a.BufferGeometry,
        r.addAttribute("position", new a.Float32Attribute([0, 0, 0, 0, 0, 1],3)),
        this.add(new a.Line(r,i)),
        this.update()
    }
    ,
    a.DirectionalLightHelper.prototype = Object.create(a.Object3D.prototype),
    a.DirectionalLightHelper.prototype.constructor = a.DirectionalLightHelper,
    a.DirectionalLightHelper.prototype.dispose = function() {
        var t = this.children[0]
          , e = this.children[1];
        t.geometry.dispose(),
        t.material.dispose(),
        e.geometry.dispose(),
        e.material.dispose()
    }
    ,
    a.DirectionalLightHelper.prototype.update = function() {
        var t = new a.Vector3
          , e = new a.Vector3
          , r = new a.Vector3;
        return function() {
            t.setFromMatrixPosition(this.light.matrixWorld),
            e.setFromMatrixPosition(this.light.target.matrixWorld),
            r.subVectors(e, t);
            var i = this.children[0]
              , n = this.children[1];
            i.lookAt(r),
            i.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),
            n.lookAt(r),
            n.scale.z = r.length()
        }
    }(),
    a.EdgesHelper = function(t, e, r) {
        var i = void 0 !== e ? e : 16777215;
        a.LineSegments.call(this, new a.EdgesGeometry(t.geometry,r), new a.LineBasicMaterial({
            color: i
        })),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1
    }
    ,
    a.EdgesHelper.prototype = Object.create(a.LineSegments.prototype),
    a.EdgesHelper.prototype.constructor = a.EdgesHelper,
    a.FaceNormalsHelper = function(t, e, r, i) {
        this.object = t,
        this.size = void 0 !== e ? e : 1;
        var n = void 0 !== r ? r : 16776960
          , o = void 0 !== i ? i : 1
          , s = 0
          , c = this.object.geometry;
        c instanceof a.Geometry ? s = c.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        var h = new a.BufferGeometry
          , l = new a.Float32Attribute(2 * s * 3,3);
        h.addAttribute("position", l),
        a.LineSegments.call(this, h, new a.LineBasicMaterial({
            color: n,
            linewidth: o
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    ,
    a.FaceNormalsHelper.prototype = Object.create(a.LineSegments.prototype),
    a.FaceNormalsHelper.prototype.constructor = a.FaceNormalsHelper,
    a.FaceNormalsHelper.prototype.update = function() {
        var t = new a.Vector3
          , e = new a.Vector3
          , r = new a.Matrix3;
        return function() {
            this.object.updateMatrixWorld(!0),
            r.getNormalMatrix(this.object.matrixWorld);
            for (var i = this.object.matrixWorld, n = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; h < l; h++) {
                var u = s[h]
                  , d = u.normal;
                t.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(i),
                e.copy(d).applyMatrix3(r).normalize().multiplyScalar(this.size).add(t),
                n.setXYZ(c, t.x, t.y, t.z),
                c += 1,
                n.setXYZ(c, e.x, e.y, e.z),
                c += 1
            }
            return n.needsUpdate = !0,
            this
        }
    }(),
    a.GridHelper = function(t, e, r, i) {
        e = e || 1,
        r = new a.Color(void 0 !== r ? r : 4473924),
        i = new a.Color(void 0 !== i ? i : 8947848);
        for (var n = e / 2, o = 2 * t / e, s = [], c = [], h = 0, l = 0, u = -t; h <= e; h++,
        u += o) {
            s.push(-t, 0, u, t, 0, u),
            s.push(u, 0, -t, u, 0, t);
            var d = h === n ? r : i;
            d.toArray(c, l),
            l += 3,
            d.toArray(c, l),
            l += 3,
            d.toArray(c, l),
            l += 3,
            d.toArray(c, l),
            l += 3
        }
        var p = new a.BufferGeometry;
        p.addAttribute("position", new a.Float32Attribute(s,3)),
        p.addAttribute("color", new a.Float32Attribute(c,3));
        var f = new a.LineBasicMaterial({
            vertexColors: a.VertexColors
        });
        a.LineSegments.call(this, p, f)
    }
    ,
    a.GridHelper.prototype = Object.create(a.LineSegments.prototype),
    a.GridHelper.prototype.constructor = a.GridHelper,
    a.GridHelper.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }
    ,
    a.HemisphereLightHelper = function(t, e) {
        a.Object3D.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.colors = [new a.Color, new a.Color];
        var r = new a.SphereGeometry(e,4,2);
        r.rotateX(-Math.PI / 2);
        for (var i = 0, n = 8; i < n; i++)
            r.faces[i].color = this.colors[i < 4 ? 0 : 1];
        var o = new a.MeshBasicMaterial({
            vertexColors: a.FaceColors,
            wireframe: !0
        });
        this.lightSphere = new a.Mesh(r,o),
        this.add(this.lightSphere),
        this.update()
    }
    ,
    a.HemisphereLightHelper.prototype = Object.create(a.Object3D.prototype),
    a.HemisphereLightHelper.prototype.constructor = a.HemisphereLightHelper,
    a.HemisphereLightHelper.prototype.dispose = function() {
        this.lightSphere.geometry.dispose(),
        this.lightSphere.material.dispose()
    }
    ,
    a.HemisphereLightHelper.prototype.update = function() {
        var t = new a.Vector3;
        return function() {
            this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity),
            this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity),
            this.lightSphere.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()),
            this.lightSphere.geometry.colorsNeedUpdate = !0
        }
    }(),
    a.PointLightHelper = function(t, e) {
        this.light = t,
        this.light.updateMatrixWorld();
        var r = new a.SphereBufferGeometry(e,4,2)
          , i = new a.MeshBasicMaterial({
            wireframe: !0,
            fog: !1
        });
        i.color.copy(this.light.color).multiplyScalar(this.light.intensity),
        a.Mesh.call(this, r, i),
        this.matrix = this.light.matrixWorld,
        this.matrixAutoUpdate = !1
    }
    ,
    a.PointLightHelper.prototype = Object.create(a.Mesh.prototype),
    a.PointLightHelper.prototype.constructor = a.PointLightHelper,
    a.PointLightHelper.prototype.dispose = function() {
        this.geometry.dispose(),
        this.material.dispose()
    }
    ,
    a.PointLightHelper.prototype.update = function() {
        this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
    ,
    a.SkeletonHelper = function(t) {
        this.bones = this.getBoneList(t);
        for (var e = new a.Geometry, r = 0; r < this.bones.length; r++) {
            var i = this.bones[r];
            i.parent instanceof a.Bone && (e.vertices.push(new a.Vector3),
            e.vertices.push(new a.Vector3),
            e.colors.push(new a.Color(0,0,1)),
            e.colors.push(new a.Color(0,1,0)))
        }
        e.dynamic = !0;
        var n = new a.LineBasicMaterial({
            vertexColors: a.VertexColors,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        a.LineSegments.call(this, e, n),
        this.root = t,
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.update()
    }
    ,
    a.SkeletonHelper.prototype = Object.create(a.LineSegments.prototype),
    a.SkeletonHelper.prototype.constructor = a.SkeletonHelper,
    a.SkeletonHelper.prototype.getBoneList = function(t) {
        var e = [];
        t instanceof a.Bone && e.push(t);
        for (var r = 0; r < t.children.length; r++)
            e.push.apply(e, this.getBoneList(t.children[r]));
        return e
    }
    ,
    a.SkeletonHelper.prototype.update = function() {
        for (var t = this.geometry, e = (new a.Matrix4).getInverse(this.root.matrixWorld), r = new a.Matrix4, i = 0, n = 0; n < this.bones.length; n++) {
            var o = this.bones[n];
            o.parent instanceof a.Bone && (r.multiplyMatrices(e, o.matrixWorld),
            t.vertices[i].setFromMatrixPosition(r),
            r.multiplyMatrices(e, o.parent.matrixWorld),
            t.vertices[i + 1].setFromMatrixPosition(r),
            i += 2)
        }
        t.verticesNeedUpdate = !0,
        t.computeBoundingSphere()
    }
    ,
    a.SpotLightHelper = function(t) {
        a.Object3D.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1;
        for (var e = new a.BufferGeometry, r = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, n = 1, o = 32; i < o; i++,
        n++) {
            var s = i / o * Math.PI * 2
              , c = n / o * Math.PI * 2;
            r.push(Math.cos(s), Math.sin(s), 1, Math.cos(c), Math.sin(c), 1)
        }
        e.addAttribute("position", new a.Float32Attribute(r,3));
        var h = new a.LineBasicMaterial({
            fog: !1
        });
        this.cone = new a.LineSegments(e,h),
        this.add(this.cone),
        this.update()
    }
    ,
    a.SpotLightHelper.prototype = Object.create(a.Object3D.prototype),
    a.SpotLightHelper.prototype.constructor = a.SpotLightHelper,
    a.SpotLightHelper.prototype.dispose = function() {
        this.cone.geometry.dispose(),
        this.cone.material.dispose()
    }
    ,
    a.SpotLightHelper.prototype.update = function() {
        var t = new a.Vector3
          , e = new a.Vector3;
        return function() {
            var r = this.light.distance ? this.light.distance : 1e3
              , i = r * Math.tan(this.light.angle);
            this.cone.scale.set(i, i, r),
            t.setFromMatrixPosition(this.light.matrixWorld),
            e.setFromMatrixPosition(this.light.target.matrixWorld),
            this.cone.lookAt(e.sub(t)),
            this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }
    }(),
    a.VertexNormalsHelper = function(t, e, r, i) {
        this.object = t,
        this.size = void 0 !== e ? e : 1;
        var n = void 0 !== r ? r : 16711680
          , o = void 0 !== i ? i : 1
          , s = 0
          , c = this.object.geometry;
        c instanceof a.Geometry ? s = 3 * c.faces.length : c instanceof a.BufferGeometry && (s = c.attributes.normal.count);
        var h = new a.BufferGeometry
          , l = new a.Float32Attribute(2 * s * 3,3);
        h.addAttribute("position", l),
        a.LineSegments.call(this, h, new a.LineBasicMaterial({
            color: n,
            linewidth: o
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    ,
    a.VertexNormalsHelper.prototype = Object.create(a.LineSegments.prototype),
    a.VertexNormalsHelper.prototype.constructor = a.VertexNormalsHelper,
    a.VertexNormalsHelper.prototype.update = function() {
        var t = new a.Vector3
          , e = new a.Vector3
          , r = new a.Matrix3;
        return function() {
            var i = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0),
            r.getNormalMatrix(this.object.matrixWorld);
            var n = this.object.matrixWorld
              , o = this.geometry.attributes.position
              , s = this.object.geometry;
            if (s instanceof a.Geometry)
                for (var c = s.vertices, h = s.faces, l = 0, u = 0, d = h.length; u < d; u++)
                    for (var p = h[u], f = 0, m = p.vertexNormals.length; f < m; f++) {
                        var g = c[p[i[f]]]
                          , v = p.vertexNormals[f];
                        t.copy(g).applyMatrix4(n),
                        e.copy(v).applyMatrix3(r).normalize().multiplyScalar(this.size).add(t),
                        o.setXYZ(l, t.x, t.y, t.z),
                        l += 1,
                        o.setXYZ(l, e.x, e.y, e.z),
                        l += 1
                    }
            else if (s instanceof a.BufferGeometry)
                for (var y = s.attributes.position, x = s.attributes.normal, l = 0, f = 0, m = y.count; f < m; f++)
                    t.set(y.getX(f), y.getY(f), y.getZ(f)).applyMatrix4(n),
                    e.set(x.getX(f), x.getY(f), x.getZ(f)),
                    e.applyMatrix3(r).normalize().multiplyScalar(this.size).add(t),
                    o.setXYZ(l, t.x, t.y, t.z),
                    l += 1,
                    o.setXYZ(l, e.x, e.y, e.z),
                    l += 1;
            return o.needsUpdate = !0,
            this
        }
    }(),
    a.WireframeHelper = function(t, e) {
        var r = void 0 !== e ? e : 16777215;
        a.LineSegments.call(this, new a.WireframeGeometry(t.geometry), new a.LineBasicMaterial({
            color: r
        })),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1
    }
    ,
    a.WireframeHelper.prototype = Object.create(a.LineSegments.prototype),
    a.WireframeHelper.prototype.constructor = a.WireframeHelper,
    a.ImmediateRenderObject = function(t) {
        a.Object3D.call(this),
        this.material = t,
        this.render = function(t) {}
    }
    ,
    a.ImmediateRenderObject.prototype = Object.create(a.Object3D.prototype),
    a.ImmediateRenderObject.prototype.constructor = a.ImmediateRenderObject,
    a.MorphBlendMesh = function(t, e) {
        a.Mesh.call(this, t, e),
        this.animationsMap = {},
        this.animationsList = [];
        var r = this.geometry.morphTargets.length
          , i = "__default"
          , n = 0
          , o = r - 1
          , s = r / 1;
        this.createAnimation(i, n, o, s),
        this.setAnimationWeight(i, 1)
    }
    ,
    a.MorphBlendMesh.prototype = Object.create(a.Mesh.prototype),
    a.MorphBlendMesh.prototype.constructor = a.MorphBlendMesh,
    a.MorphBlendMesh.prototype.createAnimation = function(t, e, r, i) {
        var n = {
            start: e,
            end: r,
            length: r - e + 1,
            fps: i,
            duration: (r - e) / i,
            lastFrame: 0,
            currentFrame: 0,
            active: !1,
            time: 0,
            direction: 1,
            weight: 1,
            directionBackwards: !1,
            mirroredLoop: !1
        };
        this.animationsMap[t] = n,
        this.animationsList.push(n)
    }
    ,
    a.MorphBlendMesh.prototype.autoCreateAnimations = function(t) {
        for (var e, r = /([a-z]+)_?(\d+)/i, i = {}, n = this.geometry, a = 0, o = n.morphTargets.length; a < o; a++) {
            var s = n.morphTargets[a]
              , c = s.name.match(r);
            if (c && c.length > 1) {
                var h = c[1];
                i[h] || (i[h] = {
                    start: 1 / 0,
                    end: -(1 / 0)
                });
                var l = i[h];
                a < l.start && (l.start = a),
                a > l.end && (l.end = a),
                e || (e = h)
            }
        }
        for (var h in i) {
            var l = i[h];
            this.createAnimation(h, l.start, l.end, t)
        }
        this.firstAnimation = e
    }
    ,
    a.MorphBlendMesh.prototype.setAnimationDirectionForward = function(t) {
        var e = this.animationsMap[t];
        e && (e.direction = 1,
        e.directionBackwards = !1)
    }
    ,
    a.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(t) {
        var e = this.animationsMap[t];
        e && (e.direction = -1,
        e.directionBackwards = !0)
    }
    ,
    a.MorphBlendMesh.prototype.setAnimationFPS = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.fps = e,
        r.duration = (r.end - r.start) / r.fps)
    }
    ,
    a.MorphBlendMesh.prototype.setAnimationDuration = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.duration = e,
        r.fps = (r.end - r.start) / r.duration)
    }
    ,
    a.MorphBlendMesh.prototype.setAnimationWeight = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.weight = e)
    }
    ,
    a.MorphBlendMesh.prototype.setAnimationTime = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.time = e)
    }
    ,
    a.MorphBlendMesh.prototype.getAnimationTime = function(t) {
        var e = 0
          , r = this.animationsMap[t];
        return r && (e = r.time),
        e
    }
    ,
    a.MorphBlendMesh.prototype.getAnimationDuration = function(t) {
        var e = -1
          , r = this.animationsMap[t];
        return r && (e = r.duration),
        e
    }
    ,
    a.MorphBlendMesh.prototype.playAnimation = function(t) {
        var e = this.animationsMap[t];
        e ? (e.time = 0,
        e.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + t + "] undefined in .playAnimation()")
    }
    ,
    a.MorphBlendMesh.prototype.stopAnimation = function(t) {
        var e = this.animationsMap[t];
        e && (e.active = !1)
    }
    ,
    a.MorphBlendMesh.prototype.update = function(t) {
        for (var e = 0, r = this.animationsList.length; e < r; e++) {
            var i = this.animationsList[e];
            if (i.active) {
                var n = i.duration / i.length;
                i.time += i.direction * t,
                i.mirroredLoop ? (i.time > i.duration || i.time < 0) && (i.direction *= -1,
                i.time > i.duration && (i.time = i.duration,
                i.directionBackwards = !0),
                i.time < 0 && (i.time = 0,
                i.directionBackwards = !1)) : (i.time = i.time % i.duration,
                i.time < 0 && (i.time += i.duration));
                var o = i.start + a.Math.clamp(Math.floor(i.time / n), 0, i.length - 1)
                  , s = i.weight;
                o !== i.currentFrame && (this.morphTargetInfluences[i.lastFrame] = 0,
                this.morphTargetInfluences[i.currentFrame] = 1 * s,
                this.morphTargetInfluences[o] = 0,
                i.lastFrame = i.currentFrame,
                i.currentFrame = o);
                var c = i.time % n / n;
                i.directionBackwards && (c = 1 - c),
                i.currentFrame !== i.lastFrame ? (this.morphTargetInfluences[i.currentFrame] = c * s,
                this.morphTargetInfluences[i.lastFrame] = (1 - c) * s) : this.morphTargetInfluences[i.currentFrame] = s
            }
        }
    }
}
, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = e.DAMPING = .03
      , i = (e.DRAG = 1 - r,
    e.restDistance = 25,
    e.xSegs = 20,
    e.ySegs = 60,
    e.wind = !0,
    e.windStrength = .2,
    e.TIMESTEP = .018);
    e.TIMESTEP_SQ = i * i
}
, function(t, e, r) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t,
        e
    }
    function a(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, r, i) {
            return r && t(e.prototype, r),
            i && t(e, i),
            e
        }
    }()
      , s = r(1)
      , c = r(2)
      , h = n(c)
      , l = r(6)
      , u = i(l)
      , d = r(4)
      , p = i(d)
      , f = function() {
        function t(e, r) {
            a(this, t),
            this.w = e || 15,
            this.h = r || 10,
            this.lastTime = null,
            this.pins = [];
            for (var i = 0; i <= this.w; i++)
                this.pins.push(i);
            this.tmpForce = new s.Vector3,
            this.diff = new s.Vector3,
            this.clothFunction = u.default.plane(h.restDistance * this.w, h.restDistance * this.h),
            this.windForce = new s.Vector3(0,0,0);
            var n = 981 * 1.4;
            this.mass = .1,
            this.gravity = new s.Vector3(0,-n,0).multiplyScalar(this.mass),
            this.createParticles(),
            this.createConstraints()
        }
        return o(t, [{
            key: "index",
            value: function(t, e) {
                return t + e * (this.w + 1)
            }
        }, {
            key: "createParticles",
            value: function() {
                this.particles = [];
                var t = void 0
                  , e = void 0;
                for (e = 0; e <= this.h; e++)
                    for (t = 0; t <= this.w; t++)
                        this.particles.push(new p.default(t / this.w,e / this.h,0,this.mass,h.DRAG,this.clothFunction))
            }
        }, {
            key: "createConstraints",
            value: function() {
                this.constrains = [];
                var t = void 0
                  , e = void 0;
                for (e = 0; e < this.h; e++)
                    for (t = 0; t < this.w; t++)
                        this.constrains.push([this.particles[this.index(t, e)], this.particles[this.index(t, e + 1)], h.restDistance]),
                        this.constrains.push([this.particles[this.index(t, e)], this.particles[this.index(t + 1, e)], h.restDistance]);
                for (t = this.w,
                e = 0; e < this.h; e++)
                    this.constrains.push([this.particles[this.index(t, e)], this.particles[this.index(t, e + 1)], h.restDistance]);
                for (e = this.h,
                t = 0; t < this.w; t++)
                    this.constrains.push([this.particles[this.index(t, e)], this.particles[this.index(t + 1, e)], h.restDistance])
            }
        }, {
            key: "simulate",
            value: function(t, e) {
                if (!this.lastTime)
                    return void (this.lastTime = t);
                var r = 20 * Math.cos(t / 7e3) + 40;
                this.windForce.set(Math.sin(t / 2e3), Math.cos(t / 3e3), Math.sin(t / 1e3)).normalize().multiplyScalar(r),
                this.simulateAerodynamics(e),
                this.satisfyConstrains(),
                this.pinConstrains()
            }
        }, {
            key: "simulateAerodynamics",
            value: function(t) {
                if (h.wind)
                    for (var e = void 0, r = void 0, i = t.faces, n = 0; n < i.length; n++)
                        e = i[n],
                        r = e.normal,
                        this.tmpForce.copy(r).normalize().multiplyScalar(r.dot(this.windForce)),
                        this.particles[e.a].addForce(this.tmpForce),
                        this.particles[e.b].addForce(this.tmpForce),
                        this.particles[e.c].addForce(this.tmpForce);
                for (var a = 0; a < this.particles.length; a++) {
                    var o = this.particles[a];
                    o.addForce(this.gravity),
                    o.integrate(h.TIMESTEP_SQ)
                }
            }
        }, {
            key: "size",
            value: function(t, e) {
                this.w = t || 10,
                this.h = e || 15,
                this.pins = [];
                for (var r = 0; r <= this.w; r++)
                    this.pins[r] = r
            }
        }, {
            key: "satisfyConstrains",
            value: function() {
                for (var t = 0; t < this.constrains.length; t++) {
                    var e = this.constrains[t]
                      , r = e[0]
                      , i = e[1]
                      , n = e[2];
                    this.diff.subVectors(i.position, r.position);
                    var a = this.diff.length();
                    if (0 === a)
                        return;
                    var o = this.diff.multiplyScalar(1 - n / a)
                      , s = o.multiplyScalar(.5);
                    r.position.add(s),
                    i.position.sub(s)
                }
            }
        }, {
            key: "pinConstrains",
            value: function() {
                for (var t = this.particles.length, e = 0; e < this.pins.length; e++) {
                    var r = t - this.pins[e] - 1
                      , i = this.particles[r];
                    i.position.copy(i.original),
                    i.previous.copy(i.original)
                }
            }
        }]),
        t
    }();
    e.default = f
}
, function(t, e, r) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, r, i) {
            return r && t(e.prototype, r),
            i && t(e, i),
            e
        }
    }()
      , a = r(1)
      , o = function() {
        function t(e, r, n, o, s, c) {
            i(this, t),
            this.position = c(e, r),
            this.previous = c(e, r),
            this.original = c(e, r),
            this.a = new a.Vector3(0,0,0),
            this.mass = o,
            this.invMass = 1 / o,
            this.drag = s,
            this.tmp = new a.Vector3,
            this.tmp2 = new a.Vector3
        }
        return n(t, [{
            key: "addForce",
            value: function(t) {
                this.tmp2.copy(t).multiplyScalar(this.invMass),
                this.a.add(this.tmp2)
            }
        }, {
            key: "integrate",
            value: function(t) {
                var e = this.tmp.subVectors(this.position, this.previous);
                e.multiplyScalar(this.drag).add(this.position),
                e.add(this.a.multiplyScalar(t)),
                this.tmp = this.previous,
                this.previous = this.position,
                this.position = e,
                this.a.set(0, 0, 0)
            }
        }]),
        t
    }();
    e.default = o
}
, function(t, e, r) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, r, i) {
            return r && t(e.prototype, r),
            i && t(e, i),
            e
        }
    }()
      , a = r(1)
      , o = function() {
        function t() {
            i(this, t),
            this.scene = new a.Scene,
            this.camera(),
            this.lights(),
            this.renderer(),
            this.listeners(),
            this.appendChild()
        }
        return n(t, [{
            key: "camera",
            value: function() {
                this.camera = new a.PerspectiveCamera(30,window.innerWidth / window.innerHeight,1,1e4),
                this.camera.position.x = 0,
                this.camera.position.y = 50,
                this.camera.position.z = 1500,
                this.scene.add(this.camera)
            }
        }, {
            key: "lights",
            value: function() {
                this.scene.add(new a.AmbientLight(13750737,.5)),
                this.light = new a.DirectionalLight(16777215,.7),
                this.light.position.set(50, 200, 100),
                this.light.position.multiplyScalar(1.3),
                this.light.castShadow = !0,
                this.light.shadow.mapSize.width = 1024,
                this.light.shadow.mapSize.height = 1024;
                var t = 300;
                this.light.shadow.camera.left = -t,
                this.light.shadow.camera.right = t,
                this.light.shadow.camera.top = t,
                this.light.shadow.camera.bottom = -t,
                this.light.shadow.camera.far = 1e3,
                this.scene.add(this.light)
            }
        }, {
            key: "appendChild",
            value: function() {
                this.container = document.getElementById("flag"),
                this.container.appendChild(this.renderer.domElement)
            }
        }, {
            key: "renderer",
            value: function() {
                this.renderer = new a.WebGLRenderer({
                    antialias: !0
                }),
                this.renderer.setPixelRatio(window.devicePixelRatio),
                this.renderer.setSize(window.innerWidth, window.innerHeight),
                this.renderer.setClearColor(16777215),
                this.renderer.gammaInput = !0,
                this.renderer.gammaOutput = !0,
                this.renderer.shadowMap.enabled = !0
            }
        }, {
            key: "listeners",
            value: function() {
                var t = this;
                window.addEventListener("resize", function() {
                    t.camera.aspect = window.innerWidth / window.innerHeight,
                    t.camera.updateProjectionMatrix(),
                    t.renderer.setSize(window.innerWidth, window.innerHeight)
                }, !1)
            }
        }, {
            key: "render",
            value: function() {
                this.camera.lookAt(this.scene.position),
                this.renderer.render(this.scene, this.camera)
            }
        }]),
        t
    }();
    e.default = o
}
, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = r(1);
    e.default = {
        plane: function(t, e) {
            return function(r, n) {
                var a = (r - .5) * t
                  , o = (n + .5) * e
                  , s = 0;
                return new i.Vector3(a,o,s)
            }
        }
    }
}
, function(t, e, r) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, r, i) {
            return r && t(e.prototype, r),
            i && t(e, i),
            e
        }
    }()
      , a = r(1)
      , o = function() {
        function t(e, r) {
            i(this, t),
            this.cloth = e,
            this.src = r,
            this.createGeometry(),
            this.loadTexture(),
            this.createMaterial(),
            this.createMesh()
        }
        return n(t, [{
            key: "createGeometry",
            value: function() {
                this.geometry = new a.ParametricGeometry(this.cloth.clothFunction,this.cloth.w,this.cloth.h),
                this.geometry.dynamic = !0
            }
        }, {
            key: "loadTexture",
            value: function() {
                var t = new a.TextureLoader;
                this.clothTexture = t.load(this.src),
                this.clothTexture.anisotropy = 16,
                this.uniforms = {
                    texture: {
                        value: this.clothTexture
                    }
                }
            }
        }, {
            key: "updateTexture",
            value: function(t) {
                var e = new a.TextureLoader;
                this.clothTexture = e.load(t),
                this.clothTexture.anisotropy = 16,
                this.uniforms = {
                    texture: {
                        value: this.clothTexture
                    }
                },
                this.material.map = this.clothTexture
            }
        }, {
            key: "createMaterial",
            value: function() {
                this.material = new a.MeshLambertMaterial({
                    map: this.clothTexture,
                    side: a.DoubleSide,
                    alphaTest: .5
                })
            }
        }, {
            key: "createMesh",
            value: function() {
                this.mesh = new a.Mesh(this.geometry,this.material),
                this.mesh.position.set(0, -450, 0),
                this.mesh.scale.set(1.42, 1.42, 1.42),
                this.mesh.castShadow = !0,
                this.mesh.customDepthMaterial = new a.ShaderMaterial({
                    uniforms: this.uniforms,
                    side: a.DoubleSide
                })
            }
        }, {
            key: "update",
            value: function() {
                for (var t = 0; t < this.cloth.particles.length; t++)
                    this.geometry.vertices[t].copy(this.cloth.particles[t].position);
                this.geometry.computeFaceNormals(),
                this.geometry.computeVertexNormals(),
                this.geometry.normalsNeedUpdate = !0,
                this.geometry.verticesNeedUpdate = !0
            }
        }]),
        t
    }();
    e.default = o
}
]);
