/* v 3.17
author http://codecanyon.net/user/creativeinteractivemedia/portfolio?ref=creativeinteractivemedia
*/
var FLIPBOOK = FLIPBOOK || {};
! function(y, M, L, a) {
    y.fn.flipBook = function(e) {
        return new FLIPBOOK.Main(e, this)
    }, y.fn.swipeBook = function(e) {
        return e.viewMode = "swipe", new FLIPBOOK.Main(e, this)
    }, y.fn.flipBook.options = {
        name: "",
        pages: [],
        tableOfContent: [],
        tableOfContentCloseOnClick: !0,
        thumbsCloseOnClick: !0,
        deeplinkingEnabled: !1,
        deeplinkingPrefix: "",
        assets: {
            preloader: "images/preloader.jpg",
            overlay: "images/overlay.png",
            flipMp3: "mp3/turnPage.mp3",
            spinner: "images/spinner.gif"
        },
        pdfUrl: null,
        pdfBrowserViewerIfMobile: !1,
        pdfBrowserViewerIfIE: !1,
        pdfBrowserViewerFullscreen: !0,
        pdfBrowserViewerFullscreenTarget: "_blank",
        pdfPageScale: 1,
        pdfOutline: !0,
        rangeChunkSize: 64,
        htmlLayer: !0,
        rightToLeft: !1,
        startPage: 0,
        sound: !0,
        backgroundColor: "rgb(81, 85, 88)",
        backgroundImage: "",
        backgroundPattern: "",
        backgroundTransparent: !1,
        thumbSize: 130,
        loadAllPages: !1,
        loadPagesF: 2,
        loadPagesB: 1,
        autoplayOnStart: !1,
        autoplayInterval: 3e3,
        autoplayLoop: !0,
        skin: "light",
        layout: "1",
        menuOverBook: !1,
        menuFloating: !1,
        menuBackground: "",
        menuShadow: "",
        menuMargin: 0,
        menuPadding: 0,
        menuTransparent: !1,
        menu2OverBook: !0,
        menu2Floating: !1,
        menu2Background: "",
        menu2Shadow: "",
        menu2Margin: 0,
        menu2Padding: 0,
        menu2Transparent: !0,
        skinColor: "",
        skinBackground: "",
        btnColor: "",
        btnBackground: "none",
        btnSize: 14,
        btnRadius: 2,
        btnMargin: 2,
        btnShadow: "",
        btnTextShadow: "",
        btnBorder: "",
        btnColorHover: "",
        btnBackgroundHover: "",
        sideBtnColor: "#FFF",
        sideBtnBackground: "#00000033",
        sideBtnSize: 30,
        sideBtnRadius: 0,
        sideBtnMargin: 0,
        sideBtnPaddingV: 5,
        sideBtnPaddingH: 0,
        sideBtnShadow: "",
        sideBtnTextShadow: "",
        sideBtnBorder: "",
        sideBtnColorHover: "#FFF",
        sideBtnBackgroundHover: "#00000066",
        floatingBtnColor: "#EEE",
        floatingBtnBackground: "#00000044",
        floatingBtnSize: null,
        floatingBtnRadius: null,
        floatingBtnMargin: null,
        floatingBtnShadow: "",
        floatingBtnTextShadow: "",
        floatingBtnBorder: "",
        floatingBtnColorHover: "",
        floatingBtnBackgroundHover: "",
        btnOrder: ["currentPage", "btnFirst", "btnPrev", "btnNext", "btnLast", "btnZoomIn", "btnZoomOut", "btnRotateLeft", "btnRotateRight", "btnAutoplay", "btnSearch", "btnSelect", "btnBookmark", "btnToc", "btnThumbs", "btnShare", "btnPrint", "btnDownloadPages", "btnDownloadPdf", "btnSound", "btnExpand", "btnClose"],
        currentPage: {
            enabled: !0,
            title: "Current page",
            vAlign: "top",
            hAlign: "left",
            marginH: 0,
            marginV: 0,
            color: "",
            background: ""
        },
        btnFirst: {
            enabled: !1,
            title: "First page",
            icon: "fa-angle-double-left",
            icon2: "first_page"
        },
        btnPrev: {
            enabled: !0,
            title: "Previous page",
            icon: "fa-angle-left",
            icon2: "chevron_left"
        },
        btnNext: {
            enabled: !0,
            title: "Next page",
            icon: "fa-angle-right",
            icon2: "chevron_right"
        },
        btnLast: {
            enabled: !1,
            title: "Last page",
            icon: "fa-angle-double-right",
            icon2: "last_page"
        },
        btnZoomIn: {
            enabled: !0,
            title: "Zoom in",
            icon: "fa-plus",
            icon2: "zoom_in"
        },
        btnZoomOut: {
            enabled: !0,
            title: "Zoom out",
            icon: "fa-minus",
            icon2: "zoom_out"
        },
        btnRotateLeft: {
            enabled: !1,
            title: "Rotate left",
            icon: "fas fa-undo"
        },
        btnRotateRight: {
            enabled: !1,
            title: "Rotate right",
            icon: "fas fa-redo"
        },
        btnAutoplay: {
            enabled: !0,
            title: "Autoplay",
            icon: "fa-play",
            icon2: "play_arrow",
            iconAlt: "fa-pause",
            iconAlt2: "pause"
        },
        btnSearch: {
            enabled: !1,
            title: "Search",
            icon: "fas fa-search",
            icon2: "search"
        },
        btnSelect: {
            enabled: !0,
            title: "Select tool",
            icon: "fas fa-i-cursor",
            icon2: "text_format"
        },
        btnBookmark: {
            enabled: !0,
            title: "Bookmark",
            icon: "fas fa-bookmark",
            icon2: "bookmark"
        },
        btnToc: {
            enabled: !0,
            title: "Table of Contents",
            icon: "fa-list-ol",
            icon2: "toc"
        },
        btnThumbs: {
            enabled: !0,
            title: "Pages",
            icon: "fa-th-large",
            icon2: "view_module"
        },
        btnShare: {
            enabled: !0,
            title: "Share",
            icon: "fa-link",
            icon2: "share",
            hideOnMobile: !0
        },
        btnPrint: {
            enabled: !0,
            title: "Print",
            icon: "fa-print",
            icon2: "print",
            hideOnMobile: !0
        },
        btnDownloadPages: {
            enabled: !0,
            title: "Download pages",
            icon: "fa-download",
            icon2: "file_download",
            url: "images/pages.zip",
            name: "allPages.zip"
        },
        btnDownloadPdf: {
            forceDownload: !1,
            enabled: !0,
            title: "Download PDF",
            icon: "fa-file",
            icon2: "picture_as_pdf",
            url: null,
            openInNewWindow: !0,
            name: "allPages.pdf"
        },
        btnSound: {
            enabled: !0,
            title: "Volume",
            icon: "fa-volume-up",
            iconAlt: "fa-volume-off",
            icon2: "volume_up",
            iconAlt2: "volume_mute",
            hideOnMobile: !0
        },
        btnExpand: {
            enabled: !0,
            title: "Toggle fullscreen",
            icon: "fa-expand",
            icon2: "fullscreen",
            iconAlt: "fa-compress",
            iconAlt2: "fullscreen_exit"
        },
        btnClose: {
            title: "Close",
            icon: "fa-times",
            icon2: "close",
            hAlign: "right",
            vAlign: "top",
            size: 20
        },
        btnShareIfMobile: !1,
        btnSoundIfMobile: !1,
        btnPrintIfMobile: !1,
        sideNavigationButtons: !0,
        hideMenu: !1,
        twitter: {
            enabled: !0,
            url: null,
            description: null
        },
        facebook: {
            enabled: !0,
            load_sdk: !0,
            url: null,
            app_id: null,
            title: null,
            caption: null,
            description: null,
            image: null
        },
        pinterest: {
            enabled: !0,
            url: null,
            image: null,
            description: null
        },
        email: {
            enabled: !0,
            title: null,
            description: null,
            url: null
        },
        pdf: {
            annotationLayer: !1
        },
        pageTextureSize: 2048,
        pageTextureSizeSmall: 1500,
        pageTextureSizeMobile: null,
        pageTextureSizeMobileSmall: 1024,
        viewMode: "webgl",
        singlePageMode: !1,
        singlePageModeIfMobile: !1,
        zoomMin: .95,
        zoomMax2: null,
        zoomSize: null,
        zoomStep: 2,
        zoomTime: 300,
        zoomReset: !1,
        zoomResetTime: 300,
        wheelDisabledNotFullscreen: !1,
        arrowsDisabledNotFullscreen: !1,
        arrowsAlwaysEnabledForNavigation: !1,
        touchSwipeEnabled: !0,
        responsiveView: !0,
        responsiveViewTreshold: 768,
        minPixelRatio: 1,
        pageFlipDuration: 1,
        contentOnStart: !1,
        thumbnailsOnStart: !1,
        searchOnStart: !1,
        sideMenuOverBook: !0,
        sideMenuOverMenu: !1,
        sideMenuOverMenu2: !0,
        sideMenuPosition: "left",
        lightBox: !1,
        lightBoxOpened: !1,
        lightBoxFullscreen: !1,
        lightboxCloseOnClick: !1,
        lightboxResetOnOpen: !0,
        lightboxBackground: null,
        lightboxBackgroundColor: null,
        lightboxBackgroundPattern: null,
        lightboxBackgroundImage: null,
        lightboxStartPage: null,
        lightboxMarginV: "0",
        lightboxMarginH: "0",
        lightboxCSS: "",
        lightboxPreload: !1,
        lightboxShowMenu: !1,
        lightboxCloseOnBack: !0,
        disableImageResize: !0,
        pan: 0,
        panMax: 10,
        panMax2: 2,
        panMin: -10,
        panMin2: -2,
        tilt: 0,
        tiltMax: 0,
        tiltMax2: 0,
        tiltMin: -20,
        tiltMin2: -5,
        rotateCameraOnMouseMove: !1,
        rotateCameraOnMouseDrag: !0,
        lights: !0,
        lightColor: 16777215,
        lightPositionX: 0,
        lightPositionZ: 1400,
        lightPositionY: 350,
        lightIntensity: .6,
        shadows: !0,
        shadowMapSize: 1024,
        shadowOpacity: .2,
        shadowDistance: 15,
        pageRoughness: 1,
        pageMetalness: 0,
        pageHardness: 2,
        coverHardness: 2,
        pageSegmentsW: 5,
        pageSegmentsH: 1,
        pageMiddleShadowSize: 2,
        pageMiddleShadowColorL: "#999999",
        pageMiddleShadowColorR: "#777777",
        antialias: !1,
        preloaderText: "",
        fillPreloader: {
            enabled: !1,
            imgEmpty: "images/logo_light.png",
            imgFull: "images/logo_dark.png"
        },
        logoImg: "",
        logoUrl: "",
        logoCSS: "position:absolute;",
        logoHideOnMobile: !1,
        printMenu: !0,
        downloadMenu: !0,
        cover: !0,
        backCover: !0,
        textLayer: !0,
        googleAnalyticsTrackingCode: null,
        minimumAndroidVersion: 6,
        linkColor: "rgba(255, 255, 0, .05)",
        linkColorHover: "rgba(255, 255, 0, .2)",
        rightClickEnabled: !0,
        strings: {
            print: "Print",
            printLeftPage: "Print left page",
            printRightPage: "Print right page",
            printCurrentPage: "Print current page",
            printAllPages: "Print all pages",
            download: "Download",
            downloadLeftPage: "Download left page",
            downloadRightPage: "Download right page",
            downloadCurrentPage: "Download current page",
            downloadAllPages: "Download all pages",
            bookmarks: "Bookmarks",
            bookmarkLeftPage: "Bookmark left page",
            bookmarkRightPage: "Bookmark right page",
            bookmarkCurrentPage: "Bookmark current page",
            search: "Search",
            findInDocument: "Find in document",
            pagesFoundContaining: "pages found containing",
            thumbnails: "Thumbnails",
            tableOfContent: "Table of Contents",
            share: "Share",
            pressEscToClose: "Press ESC to close",
            password: "Password"
        },
        mobile: {
            shadows: !1
        }
    }, FLIPBOOK.Main = function(e, t) {
        var n = this;
        this.elem = t, this.$elem = y(t), this.$body = y("body"), this.body = this.$body[0], this.$window = y(M), this.bodyHasVerticalScrollbar = function() {
            return n.body.scrollHeight > M.innerHeight
        }, this.isZoomed = function() {
            return 1 < n.zoom
        }, this.options = {};
        var o, i, s, a = L.createElement("div").style,
            r = function() {
                for (var e = "t,webkitT,MozT,msT,OT".split(","), t = 0, o = e.length; t < o; t++)
                    if (e[t] + "ransform" in a) return e[t].substr(0, e[t].length - 1);
                return !1
            }(),
            l = /android/gi.test(navigator.appVersion),
            d = (/iphone|ipad/gi.test(navigator.appVersion), o = "perspective", ("" === r ? o : (o = o.charAt(0).toUpperCase() + o.substr(1), r + o)) in a);
        this.msie = M.navigator.userAgent.indexOf("MSIE "), this.isAndroid = l, this.has3d = d, void 0 === FLIPBOOK.hasWebGl && function(e) {
            if (M.WebGLRenderingContext) {
                for (var t = L.createElement("canvas"), o = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], i = !1, n = 0; n < 4; n++) try {
                    if ((i = t.getContext(o[n])) && "function" == typeof i.getParameter) return e || (FLIPBOOK.hasWebGl = !0)
                } catch (e) {}
                FLIPBOOK.hasWebGl = !1
            } else FLIPBOOK.hasWebGl = !1
        }(), this.hasWebGl = FLIPBOOK.hasWebGl, 0 < (s = -1, "Microsoft Internet Explorer" == navigator.appName ? (i = navigator.userAgent, null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(i) && (s = parseFloat(RegExp.$1))) : "Netscape" == navigator.appName && (i = navigator.userAgent, null != new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(i) && (s = parseFloat(RegExp.$1))), s) && (this.hasWebGl = !1, this.options.isIE = !0), this.thumbsShowing = !1, this.bookmarkShowing = !1, this.searchingString = !1, this.tocShowing = !1, this.menuShowing = !0;
        var h = {
                2: {
                    currentPage: {
                        vAlign: "bottom",
                        hAlign: "center"
                    },
                    btnAutoplay: {
                        hAlign: "left"
                    },
                    btnSound: {
                        hAlign: "left"
                    },
                    btnExpand: {
                        hAlign: "right"
                    },
                    btnZoomIn: {
                        hAlign: "right"
                    },
                    btnZoomOut: {
                        hAlign: "right"
                    },
                    btnSearch: {
                        hAlign: "left"
                    },
                    btnBookmark: {
                        hAlign: "left"
                    },
                    btnToc: {
                        hAlign: "left"
                    },
                    btnThumbs: {
                        hAlign: "left"
                    },
                    btnShare: {
                        hAlign: "right"
                    },
                    btnPrint: {
                        hAlign: "right"
                    },
                    btnDownloadPages: {
                        hAlign: "right"
                    },
                    btnDownloadPdf: {
                        hAlign: "right"
                    },
                    btnSelect: {
                        hAlign: "right"
                    }
                },
                3: {
                    menuTransparent: !(this.fullscreenActive = !1),
                    menu2Transparent: !1,
                    menu2OverBook: !1,
                    menu2Padding: 5,
                    btnMargin: 5,
                    currentPage: {
                        vAlign: "top",
                        hAlign: "center"
                    },
                    btnPrint: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnDownloadPdf: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnDownloadPages: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnThumbs: {
                        vAlign: "top",
                        hAlign: "left"
                    },
                    btnToc: {
                        vAlign: "top",
                        hAlign: "left"
                    },
                    btnBookmark: {
                        vAlign: "top",
                        hAlign: "left"
                    },
                    btnSearch: {
                        vAlign: "top",
                        hAlign: "left"
                    },
                    btnSelect: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnShare: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnAutoplay: {
                        hAlign: "right"
                    },
                    btnExpand: {
                        hAlign: "right"
                    },
                    btnZoomIn: {
                        hAlign: "right"
                    },
                    btnZoomOut: {
                        hAlign: "right"
                    },
                    btnSound: {
                        hAlign: "right"
                    },
                    menuPadding: 5
                },
                4: {
                    menu2Transparent: !1,
                    menu2OverBook: !1,
                    sideMenuOverMenu2: !1,
                    currentPage: {
                        vAlign: "top",
                        hAlign: "center"
                    },
                    btnAutoplay: {
                        vAlign: "top",
                        hAlign: "left"
                    },
                    btnSound: {
                        vAlign: "top",
                        hAlign: "left"
                    },
                    btnExpand: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnZoomIn: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnZoomOut: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnSearch: {
                        vAlign: "top",
                        hAlign: "left"
                    },
                    btnBookmark: {
                        vAlign: "top",
                        hAlign: "left"
                    },
                    btnToc: {
                        vAlign: "top",
                        hAlign: "left"
                    },
                    btnThumbs: {
                        vAlign: "top",
                        hAlign: "left"
                    },
                    btnShare: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnPrint: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnDownloadPages: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnDownloadPdf: {
                        vAlign: "top",
                        hAlign: "right"
                    },
                    btnSelect: {
                        vAlign: "top",
                        hAlign: "right"
                    }
                }
            },
            p = {
                dark: {
                    skinColor: "#EEE",
                    btnColorHover: "#FFF",
                    skinBackground: "#313538"
                },
                light: {
                    skinColor: "#222",
                    btnColorHover: "#000",
                    skinBackground: "#FFF",
                    floatingBtnColor: "#FFF",
                    floatingBtnBackground: "#00000055"
                },
                gradient: {
                    skinColor: "#EEE",
                    btnColor: "#EEE",
                    btnColorHover: "#FFF",
                    skinBackground: "#313538DD",
                    zoomMin: .85,
                    menuOverBook: !0,
                    menu2OverBook: !0,
                    sideMenuOverMenu: !0,
                    sideMenuOverMenu2: !0,
                    menuBackground: "linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, transparent 100%)",
                    menu2Background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, transparent 100%)"
                }
            };
        for (var c in p) e.skin == c && (e = y.extend(!0, {}, p[c], e));
        for (var c in h) String(e.layout) === c && (e = y.extend(!0, {}, h[c], e));
        this.options = y.extend(!0, {}, y.fn.flipBook.options, e);
        var u, g, f, b, m, k, v, w, P, S = this.options;
        if (S.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), S.isMobile)
            for (var c in S.mobile) S[c] = S.mobile[c];

        function B() {
            S.pdfBrowserViewerFullscreen ? M.open(S.pdfUrl, S.pdfBrowserViewerFullscreenTarget) : y('<object type="application/pdf"/>').width("100%").height("100%").attr("data", S.pdfUrl).appendTo(n.$elem)
        }

        function x() {
            var e, t, o;
            n.disposed || (e = M.location.hash, (o = t = n.getPageFromHash()) < 1 ? t = 1 : n.numPages && t > n.numPages && (t = n.numPages), t && (t = S.rightToLeft && S.pages && S.pages.length ? S.pages.length - t + 1 : t, n.started ? n.Book && (n.lightbox && !FLIPBOOK.lightboxOpened && (n.lightbox.openLightbox(), n.lightboxStart()), n.goToPage(t, -1 == e.indexOf("flip"))) : (S.startPage = o, S.lightBox && (O(), S.lightBoxFullscreen && setTimeout(function() {
                n.toggleExpand()
            }, 100)))))
        }

        function O() {
            var t;
            S.fillPreloader.enabled ? (n.$fillPreloader = y("<div>").addClass("flipbook-fillPreloader"), (t = new Image).src = S.fillPreloader.imgEmpty, t.onload = function() {
                var e = new Image;
                e.src = S.fillPreloader.imgFull, e.onload = function() {
                    y(t).appendTo(n.$fillPreloader), n.$fillPreloaderImg = y(e).appendTo(n.$fillPreloader), n.$fillPreloader.appendTo(n.wrapper), T()
                }
            }) : T()
        }

        function T() {
            n.initialized || (n.id = Date.now(), n.addPageItems(), S.pdfMode ? n.initPdf() : n.initJpg(), n.setLoadingProgress(.1), n.lightbox && n.options.lightboxShowMenu && n.createMenu(), n.initialized = !0)
        }
        this.strings = S.strings, S.pageShininess = S.pageShininess / 2, this.s = 0, S.googleAnalyticsTrackingCode && (this.gaCode = S.googleAnalyticsTrackingCode, M.ga || (g = L, f = "script", b = "ga", (u = M).GoogleAnalyticsObject = b, u.ga = u.ga || function() {
            (u.ga.q = u.ga.q || []).push(arguments)
        }, u.ga.l = +new Date, m = g.createElement(f), k = g.getElementsByTagName(f)[0], m.async = 1, m.src = "https://www.google-analytics.com/analytics.js", k.parentNode.insertBefore(m, k)), ga("create", this.gaCode, "auto")), S.isMobile && (S.singlePageMode = !!S.singlePageModeIfMobile || S.singlePageMode, S.viewModeMobile && (S.viewMode = S.viewModeMobile), S.pageTextureSizeMobile && (S.pageTextureSize = S.pageTextureSizeMobile), S.pageTextureSizeMobileSmall && (S.pageTextureSizeSmall = S.pageTextureSizeMobileSmall), S.touchSwipeEnabled = !0), "3dSinglePage" == S.viewMode && (S.singlePageMode = !0), "2dSinglePage" == S.viewMode && (S.singlePageMode = !0, S.viewMode = "2d"), S.singlePageMode && ("2d" != S.viewMode && "swipe" != S.viewMode && (S.viewMode = "3d"), S.rightToLeft && (S.viewMode = "swipe")), S.singlePageMode && "3d" == S.viewMode && (S.rightToLeft = !1), "simple" == S.viewMode && (S.viewMode = "3d", S.instantFlip = !0), S.sideMenuPosition = S.rightToLeft ? "right" : "left", "webgl" == S.viewMode && (!this.hasWebGl || parseFloat(!!(w = (v = (v || navigator.userAgent).toLowerCase()).match(/android\s([0-9\.]*)/)) && w[1]) < S.minimumAndroidVersion && this.isAndroid) && (S.viewMode = "3d"), "3d" != S.viewMode || n.has3d || (S.viewMode = "2d"), this.webgl = "webgl" == S.viewMode, S.menuFloating && (S.menuOverBook = !0, S.sideMenuOverMenu = !0), S.menu2Floating && (S.menu2OverBook = !0, S.sideMenuOverMenu2 = !0), S.menuTransparent && (S.menuOverBook = !0, S.sideMenuOverMenu = !0, S.menuBackground = "none"), S.menu2Transparent ? (S.menu2OverBook = !0, S.sideMenuOverMenu2 = !0, S.menu2Background = "none") : S.sideMenuOverMenu2 = !1, S.menuOverBook && (S.sideMenuOverMenu = !0), S.menu2OverBook && (S.sideMenuOverMenu2 = !0), S.isMobile && S.pdfBrowserViewerIfMobile && S.pdfUrl || S.isIE && S.pdfBrowserViewerIfIE && S.pdfUrl ? S.lightBox && !S.lightBoxOpened ? this.$elem.on("touched click", function() {
            B()
        }).css("cursor", "pointer") : B() : (S.pdfMode = Boolean(S.pdfUrl && "" != S.pdfUrl), S.backgroundTransparent && (S.backgroundColor = "none"), this.wrapper = y(L.createElement("div")).addClass("flipbook-main-wrapper"), "" != S.backgroundColor && this.wrapper.css("background", S.backgroundColor), "" != S.backgroundPattern && this.wrapper.css("background", "url(" + S.backgroundPattern + ") repeat"), "" != S.backgroundImage && (this.wrapper.css("background", "url(" + S.backgroundImage + ") no-repeat"), this.wrapper.css("background-size", "cover"), this.wrapper.css("background-position", "center center")), this.bookLayer = y(L.createElement("div")).addClass("flipbook-bookLayer").appendTo(n.wrapper), S.rightClickEnabled || this.bookLayer.bind("contextmenu", function(e) {
            return !1
        }), S.hideMenu && (this.bookLayer.css("bottom", "0"), S.menuOverBook = !0), S.pagesOriginal = JSON.parse(JSON.stringify(S.pages)), this.book = y(L.createElement("div")).addClass("book").appendTo(n.bookLayer), S.preloader ? this.preloader = S.preloader : !y(".flipbook-preloader").length && S.lightBox ? this.preloader = y('<div class="flipbook-preloader cssload-container"><div class="cssload-speeding-wheel"/><div class="flipbook-loading-text"></div><div class="flipbook-loading-bg"></div></div>') : S.lightBox ? this.preloader = y(".flipbook-preloader") : this.preloader = y('<div class="flipbook-preloader-2 cssload-container"><div class="cssload-speeding-wheel"/><div class="flipbook-loading-text"></div><div class="flipbook-loading-bg"></div></div>'), y(".flipbook-loading-text").text(S.preloaderText), this.setLoadingProgress(0), !S.deeplinkingPrefix && S.deeplinking && S.deeplinking.prefix && (S.deeplinkingPrefix = S.deeplinking.prefix), S.deeplinkingEnabled = S.deeplinkingPrefix || S.deeplinkingEnabled || S.deeplinking && S.deeplinking.enabled, S.deeplinkingEnabled && (x(), y(M).bind("hashchange", function(e) {
            x()
        })), this.dispose = function() {
            this.disposed = !0
        }, S.main = this, (P = {
            _events: {},
            on: function(e, t) {
                this._events[e] || (this._events[e] = []), this._events[e].push(t)
            },
            off: function(e, t) {
                var o;
                !this._events[e] || -1 < (o = this._events[e].indexOf(t)) && this._events[e].splice(o, 1)
            },
            trigger: function(e) {
                if (this._events[e]) {
                    var t = 0,
                        o = this._events[e].length;
                    if (o)
                        for (; t < o; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1))
                }
            }
        }).on("pageLoaded", function(e) {
            S.pages[e.index] = S.pages[e.index] || {}, S.pages[e.index].canvas = S.pages[e.index].canvas || {}, S.pages[e.index].canvas[e.size] = e.canvas, n.searchingString && n.mark(n.searchingString, !0)
        }), P.on("pageUnloaded", function(e) {
            e.unloadedPages.forEach(function(e) {
                n.Book.onPageUnloaded && n.Book.onPageUnloaded(e.index, e.size)
            })
        }), P.on("pdfinit", function() {
            S.tableOfContent = n.pdfService.outline || S.tableOfContent, S.doublePage = n.pdfService.double, S.doublePage || (S.backCover = n.pdfService.numPages % 2 == 0), n.viewportOriginal = n.pdfService.viewports[0], S.firstPage = {
                width: n.pdfService.viewports[0].width,
                height: n.pdfService.viewports[0].height,
                ratio: n.pdfService.viewports[0].width / n.pdfService.viewports[0].height
            }, 1 < n.pdfService.numPages && (S.secondPage = {
                width: n.pdfService.viewports[1].width,
                height: n.pdfService.viewports[1].height,
                ratio: n.pdfService.viewports[1].width / n.pdfService.viewports[1].height
            }), S.numPages = n.pdfService.numPages, 1 == S.numPages && (S.viewMode = "swipe", S.singlePageMode = !0, S.btnNext.enabled = !1, S.btnPrev.enabled = !1, S.btnFirst.enabled = !1, S.btnLast.enabled = !1, S.sideNavigationButtons = !1, S.btnAutoplay.enabled = !1, S.printMenu = !1, S.downloadMenu = !1, n.webgl = !1);
            for (var e = [], t = 0; t < S.numPages; t++) {
                var o = {
                    canvas: {}
                };
                S.pages && S.pages[t] ? y.extend(o, S.pages[t]) : o.title = t + 1, e[t] = o
            }
            S.pages = e;
            n.book.height();
            var i = S.pageTextureSize;
            S.pageWidth = parseInt(i * n.viewportOriginal.width / n.viewportOriginal.height), S.pageHeight = i, S.pw = S.pageWidth, S.ph = S.pageHeight, S.zoomSize = S.zoomSize || S.pageTextureSize, n.start()
        }), P.on("toolSelect", function() {
            n.bookLayer.removeClass("flipbook-move"), n.btnSelect && n.btnSelect.addClass("flipbook-btn-active"), n.bookLayer.removeClass("flipbook-disable-text-selection")
        }), P.on("toolMove", function() {
            n.bookLayer.addClass("flipbook-move"), n.btnSelect && n.btnSelect.removeClass("flipbook-btn-active"), n.bookLayer.addClass("flipbook-disable-text-selection")
        }), this.model = P, S.lightBox ? (S.btnClose.enabled = !0, this.lightbox = new FLIPBOOK.Lightbox(this, this.wrapper, S), this.lightboxStartedTimes = 0, this.wrapper.css("background", "none"), this.bookLayer.css("background", "none"), this.book.css("background", "none"), this.preloader.appendTo(this.$body).css("position", "fixed"), this.$elem.css("cursor", "pointer").bind("tap click", function(e) {
            n.lightboxStartPage = y(this).attr("data-page"), n.started ? (n.lightboxStart(), S.lightBoxFullscreen && setTimeout(function() {
                n.toggleExpand()
            }, 0)) : (O(), S.lightBoxFullscreen && setTimeout(function() {
                n.toggleExpand()
            }, 100))
        }), S.lightBoxOpened ? (O(), y(M).trigger("r3d-lightboxloadingstarted")) : S.lightboxPreload && ("undefined" != typeof IScroll || FLIPBOOK.scriptsAdded[FLIPBOOK.iscrollSrc] || n.loadScript(FLIPBOOK.iscrollSrc, function() {}), void 0 !== FLIPBOOK.PdfService || FLIPBOOK.scriptsAdded[FLIPBOOK.pdfServiceSrc] || n.loadScript(FLIPBOOK.pdfServiceSrc, function() {}), S.pdfMode && ("undefined" != typeof pdfjsLib || FLIPBOOK.scriptsAdded[FLIPBOOK.pdfjsSrc] || n.loadScript(FLIPBOOK.pdfjsSrc, function() {}), void 0 !== FLIPBOOK.PdfService || FLIPBOOK.scriptsAdded[FLIPBOOK.pdfServiceSrc] || n.loadScript(FLIPBOOK.pdfServiceSrc, function() {}), S.btnSearch.enabled && (FLIPBOOK.scriptsAdded[FLIPBOOK.markSrc] || n.loadScript(FLIPBOOK.markSrc, function() {}))), "webgl" == S.viewMode && ("undefined" != typeof THREE || FLIPBOOK.scriptsAdded[FLIPBOOK.threejsSrc] || n.loadScript(FLIPBOOK.threejsSrc, function() {}))), this.fullscreenElement = L.documentElement) : (S.btnClose.enabled = !1, this.preloader.appendTo(this.wrapper), this.wrapper.appendTo(this.$elem), this.fullscreenElement = this.$elem[0], O()))
    }, FLIPBOOK.Main.prototype = {
        start: function() {
            this.options.dp && (this.options.doublePage = !0), this.started || (this.model.pageW = this.options.pageWidth, this.model.bookW = 2 * this.options.pageWidth, this.options.singlePageMode && (this.model.bookW /= 2), this.model.pageH = this.options.pageHeight, this.model.bookH = this.options.pageHeight, this.options.numPages % 2 == 0 ? this.options.numSheets = (this.options.numPages + 2) / 2 : this.options.numSheets = (this.options.numPages + 1) / 2, this.started = !0, this.options.lightBox && (this.lightbox.openLightbox(), this.lightboxStart()), this.createBook(), this.updateSkinColors())
        },
        updateSkinColors: function() {
            var e = this.options;
            e.skinColor && this.wrapper.find(".skin-color").css("color", e.skinColor), e.skinBackground && this.wrapper.find(".skin-color-bg").css("background", e.skinBackground)
        },
        lightboxStart: function() {
            var e = this;
            this.started || this.start(), void 0 !== this.Book ? (this.Book.enable(), this.lightboxStartPage ? this.goToPage(this.lightboxStartPage, !0) : this.options.lightboxStartPage && this.goToPage(this.options.lightboxStartPage, !0), this.lightboxStartedTimes++, this.gaCode && ga("send", {
                hitType: "event",
                eventCategory: "Flipbook : " + this.options.name,
                eventAction: "lightbox open",
                eventLabel: "lightbox open",
                eventValue: this.lightboxStartedTimes,
                nonInteraction: !0
            }), this.updateCurrentPage(), this.initColors(), this.resize()) : setTimeout(function() {
                e.lightboxStart()
            }, 100)
        },
        setHash: function(e) {
            e < 1 && (e = 1), "#" + this.options.deeplinkingPrefix + e != M.location.hash && this.options.deeplinkingEnabled && this.Book.enabled && this.hash != e && (M.location.hash = "#" + this.options.deeplinkingPrefix + String(e), this.hash = e)
        },
        clearHash: function() {
            var e, t, o = M.location;
            "pushState" in history ? history.pushState("", L.title, o.pathname + o.search) : (e = L.body.scrollTop, t = L.body.scrollLeft, o.hash = "", L.body.scrollTop = e, L.body.scrollLeft = t)
        },
        getPageFromHash: function() {
            var e, t = M.location.hash,
                o = "#" + this.options.deeplinkingPrefix;
            return -1 !== t.indexOf(o) && (e = parseInt(M.location.hash.replace(/#/g, "").replace(this.options.deeplinkingPrefix, ""))), e
        },
        initColors: function() {
            this.wrapper.find(".skin-color-bg").removeClass("flipbook-bg-light").removeClass("flipbook-bg-dark").addClass("flipbook-bg-" + this.options.skin), this.wrapper.find(".skin-color").removeClass("flipbook-color-light").removeClass("flipbook-color-dark").addClass("flipbook-color-" + this.options.skin), this.updateSkinColors()
        },
        lightboxEnd: function() {
            "undefined" != typeof screenfull && screenfull.isFullscreen && screenfull.exit(), M.location.hash && this.clearHash(), this.setLoadingProgress(1), this.Book && this.Book.disable()
        },
        turnPageComplete: function() {
            this.animating = !1, this.updateCurrentPage();
            var e = this.Book.rightIndex || 0;
            this.options.rightToLeft && (e = this.options.pages.length - e), this.pdfService && this.pdfService.setRightIndex(e), this.options.zoomReset && this.Book.zoomTo(this.options.zoomMin)
        },
        updateCurrentPage: function() {
            var e, t = this.options.rightToLeft,
                o = this.options.numPages,
                i = this.Book.rightIndex || 0;
            i % 2 == 1 && i++, t && (i = this.options.pages.length - i), this.options.singlePageMode || this.Book.singlePage || 1 == this.Book.view ? (e = this.Book.getCurrentPageNumber ? this.Book.getCurrentPageNumber() : (t && i--, i + 1), this.setHash(e), this.cPage = [e - 1]) : (o < i || i == o && o % 2 == 0 ? (e = o, this.cPage = [o - 1]) : i < 1 ? (e = 1, this.cPage = [0]) : (e = String(i) + "-" + String(i + 1), this.cPage = [i - 1, i]), this.setHash(i)), t ? (this.enableNext(0 < i), this.enablePrev(this.Book.canFlipPrev() || i < o - 1)) : (this.enablePrev(0 < i), this.enableNext(this.Book.canFlipNext() || i < o - 1)), 2 == this.cPage.length ? (this.wrapper.find(".c-l-p").show(), this.wrapper.find(".c-r-p").show(), this.wrapper.find(".c-p").hide()) : (this.wrapper.find(".c-l-p").hide(), this.wrapper.find(".c-r-p").hide(), this.wrapper.find(".c-p").show()), void 0 !== this.currentPage && (this.s && 0 < this.options.pdfPageScale && this.goToPage(0), e != this.currentPageValue && (this.currentPageValue = String(e), this.currentPage.text(e + " / " + String(o)), this.currentPageInput.width(this.currentPageHolder.width()), this.resize(), y(this).trigger({
                type: "pagechange",
                page: this.currentPageValue,
                name: this.options.name
            }), y(M).trigger({
                type: "r3d-pagechange",
                page: this.currentPageValue,
                name: this.options.name
            }), this.gaCode && ga("send", {
                hitType: "event",
                eventCategory: "Flipbook : " + this.options.name,
                eventAction: "page " + this.currentPageValue,
                eventLabel: "page" + this.currentPageValue,
                nonInteraction: !0
            })))
        },
        initJpg: function() {
            var s = this;
            1 == this.options.numPages && (this.options.viewMode = "swipe", this.options.singlePageMode = !0, this.webgl = !1), this.loadPage(0, this.options.pageTextureSize, function() {
                s.setLoadingProgress(.5);
                var e, n = s.options;
                1 == n.pages.length ? (e = n.pages[0].img, n.pw = e.width, n.ph = e.height, n.pageWidth = e.width, n.pageHeight = e.height, n.pageMode = "singlePage", n.doublePage = !1, n.zoomSize = n.zoomSize || e.height, s.setLoadingProgress(.7), n.btnNext.enabled = !1, n.btnPrev.enabled = !1, n.btnFirst.enabled = !1, n.btnLast.enabled = !1, n.sideNavigationButtons = !1, n.btnAutoplay.enabled = !1, s.start()) : s.loadPage(1, n.pageTextureSize, function() {
                    var e = n.pages[0].img,
                        t = n.pages[1].img,
                        o = e.width / e.height,
                        i = t.width / t.height;
                    n.pw = e.width, n.ph = e.height, n.pageWidth = e.width, n.pageHeight = e.height, n.doublePage = 1.5 < i / o, n.doublePage || (n.backCover = n.pages.length % 2 == 0), n.zoomSize = n.zoomSize || e.height, s.setLoadingProgress(.7), s.start()
                })
            })
        },
        initPdf: function() {
            if (!this.started) {
                ("swipe" == this.options.viewMode || this.options.btnSearch && this.options.btnSearch.enabled) && (this.options.textLayer = !0), this.options.textLayer = !0;
                var t = this;
                if ("undefined" == typeof pdfjsLib) {
                    if (!FLIPBOOK.scriptsAdded[FLIPBOOK.pdfjsSrc]) return void t.loadScript(FLIPBOOK.pdfjsSrc, function() {
                        t.initPdf()
                    });
                    if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.pdfjsSrc]) return void setTimeout(function() {
                        t.initPdf()
                    }, 100)
                }
                if (this.setLoadingProgress(.2), void 0 === FLIPBOOK.PdfService) {
                    if (!FLIPBOOK.scriptsAdded[FLIPBOOK.pdfServiceSrc]) return void t.loadScript(FLIPBOOK.pdfServiceSrc, function() {
                        t.initPdf()
                    });
                    if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.pdfServiceSrc]) return void setTimeout(function() {
                        t.initPdf()
                    }, 100)
                }
                this.setLoadingProgress(.3), M.CanvasPixelArray && (CanvasPixelArray.prototype.set = function(e) {
                    for (var t = this.length, o = 0; o < t; o++) this[o] = e[o]
                }), PDFJS = pdfjsLib, pdfjsLib.externalLinkTarget = pdfjsLib.LinkTarget.BLANK, pdfjsLib.GlobalWorkerOptions.workerSrc = this.options.pdfjsworkerSrc || FLIPBOOK.pdfjsworkerSrc, "https:" == location.protocol ? t.options.pdfUrl = t.options.pdfUrl.replace("http://", "https://") : "http:" == location.protocol && (t.options.pdfUrl = t.options.pdfUrl.replace("https://", "http://"));
                var e = {
                    cMapPacked: !0,
                    cMapUrl: "cmaps/",
                    disableAutoFetch: !0,
                    disableStream: !0,
                    url: t.options.pdfUrl,
                    rangeChunkSize: 1024 * Number(t.options.rangeChunkSize)
                };
                if (this.options.password) {
                    var o = prompt("Please enter PDF password", "");
                    if (null == o) return this.lightbox && this.lightbox.closeLightbox(!0), this.setLoadingProgress(1), void(this.pdfinitStarted = !1);
                    e.password = o
                }
                this.pdfinitStarted || (this.pdfinitStarted = !0, pdfjsLib.getDocument(e).promise.then(function(e) {
                    t.pdfDocument = e, t.pdfService = new FLIPBOOK.PdfService(e, t.model, t.options), t.options.thumbLoaded = function(e) {
                        t.options.thumbs = t.options.thumbs || [], t.options.thumbs[e.index] = e
                    }, t.setLoadingProgress(.5), t.pdfService.init()
                }, function(e) {
                    "PasswordException" == e.name ? (t.pdfinitStarted = !1, t.options.password = !0, t.initPdf()) : alert(e)
                }))
            }
        },
        loadPageHTML: function(i, n) {
            var s = this,
                i = i,
                a = this.options;
            this.options.pdfMode ? this.pdfService.loadTextLayer(i, function(e) {
                n.call(s, s.options.pages[i].htmlContent, i)
            }) : a.pages[i].json ? this.loadPageJSON(i, function(e) {
                var t, o = a.pages[i] || {};
                o.htmlContentInitialized || ((t = L.createElement("div")).classList.add("flipbook-page-htmlContent"), t.classList.add("page" + String(i)), t.innerHTML = decodeURIComponent(e.data), o.htmlContent && y(t).append(y(o.htmlContent)), o.htmlContent = t, y(o.htmlContent).find(".internalLink").each(function() {
                    var t = s;
                    this.onclick = function() {
                        var e = Number(this.dataset.page),
                            e = t.options.rightToLeft ? t.options.pages.length - e + 1 : e;
                        return t.goToPage(e), !1
                    }
                }), o.htmlContentInitialized = !0), n.call(s, o.htmlContent, i)
            }) : n.call(this, a.pages[i].htmlContent, i)
        },
        loadPageJSON: function(e, t) {
            var o = this.options.pages[e] || {},
                i = this;
            if (!o.jsonLoading && !o.jsonLoaded) return o.jsonLoading = !0, void y.getJSON(o.json, function(e) {
                o.jsonLoaded = !0, o.jsonLoading = !1, t.call(i, e)
            });
            o.jsonLoaded ? t.call(i) : setTimeout(function() {
                i.loadPageJSON(e, t)
            }, 100)
        },
        loadPage: function(e, t, o) {
            var i, n = this,
                s = this.options.pages && this.options.pages[e] && this.options.pages[e].src;
            this.options.pdfMode && !s ? this.loadPageFromPdf(e, t, o) : (i = (n = this).options.pages[e]).img ? i.imgLoaded ? n.pageLoaded({
                index: e,
                size: t,
                image: i.img
            }, o) : setTimeout(function() {
                n.loadPage(e, t, o)
            }, 300) : (i.img = L.createElement("img"), i.img.setAttribute("data-id", e), i.img.onload = function() {
                i.imgLoaded = !0, n.pageLoaded({
                    index: e,
                    size: t,
                    image: i.img
                }, o)
            }, "webgl" == this.options.viewMode && (i.img.crossOrigin = "Anonymous"), "https:" == location.protocol ? i.src = i.src.replace("http://", "https://") : "http:" == location.protocol && (i.src = i.src.replace("https://", "http://")), i.img.src = i.src)
        },
        pageLoaded: function(e, t) {
            t.call(this, e, t), this.options.loadAllPages && e.index < this.options.numPages - 1 && this.loadPage(e.index + 1, e.size, function() {}), this.searchingString && this.mark(this.searchingString, !0)
        },
        loadPageFromPdf: function(e, t, o) {
            t = t || this.options.pageTextureSize, this.options.pages[e] ? this.pdfService.renderBookPage(e, t, o) : o.call(this)
        },
        getString: function(e) {
            return this.options.strings[e]
        },
        mark: function(o, e) {
            o == this.markedStr && !e || (this.markedStr = o, this.options.pages.forEach(function(e) {
                var t = y(e.htmlContent).find(".flipbook-textLayer");
                e.marked != o && t.length && (e.marked = o, t.unmark({
                    done: function() {
                        t.mark(o, {
                            acrossElements: !0,
                            separateWordSearch: !1
                        })
                    }
                }))
            }))
        },
        unmark: function() {
            this.searchingString = null, this.markedStr = null, this.options.pages.forEach(function(e) {
                e.marked && (e.marked = null, y(e.htmlContent).unmark())
            })
        },
        setTool: function(e) {
            this.tool = e, this.model.trigger(e)
        },
        toggleTool: function() {
            var e = "toolSelect" == this.tool ? "toolMove" : "toolSelect";
            this.setTool(e)
        },
        toggleSound: function() {
            var e = this.options;
            e.sound = !e.sound, this.toggleIcon(this.btnSound, e.sound)
        },
        toggleIcon: function(e, t) {
            var o = e.icon,
                i = e.iconAlt;
            t ? (e.find("." + o).show(), e.find("." + i).hide()) : (e.find("." + o).hide(), e.find("." + i).show())
        },
        scrollPageIntoView: function(e) {
            var t = this.options.rightToLeft ? this.options.pages.length - e.pageNumber + 1 : e.pageNumber;
            this.goToPage(t)
        },
        loadScript: function(o, i) {
            var n = this,
                s = L.createElement("script"),
                e = L.getElementsByTagName("script")[0];
            s.async = 1, e.parentNode.insertBefore(s, e), FLIPBOOK.scriptsAdded[o] = !0, s.onload = s.onreadystatechange = function(e, t) {
                !t && s.readyState && !/loaded|complete/.test(s.readyState) || (s.onload = s.onreadystatechange = null, s = a, t || i && i.call(n), FLIPBOOK.scriptsLoaded[o] = !0)
            }, s.src = o
        },
        createBook: function() {
            var e, n = this,
                t = this.model,
                o = this.options;
            if ("material" != o.icons || FLIPBOOK.MaterialIconsLoaded || (FLIPBOOK.MaterialIconsLoaded = !0, y("head").append('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">')), "undefined" == typeof IScroll) {
                if (!FLIPBOOK.scriptsAdded[FLIPBOOK.iscrollSrc]) return void n.loadScript(FLIPBOOK.iscrollSrc, n.createBook);
                if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.iscrollSrc]) return void setTimeout(function() {
                    n.createBook()
                }, 100)
            }
            if (this.options.searchOnStart && (this.options.btnSearch.enabled = !0), this.options.btnSearch.enabled) {
                if (!FLIPBOOK.scriptsAdded[FLIPBOOK.markSrc]) return void n.loadScript(FLIPBOOK.markSrc, n.createBook);
                if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.markSrc]) return void setTimeout(function() {
                    n.createBook()
                }, 100)
            }
            if (n.setLoadingProgress(.9), "webgl" == n.options.viewMode) {
                if ("undefined" == typeof THREE) {
                    if (!FLIPBOOK.scriptsAdded[FLIPBOOK.threejsSrc]) return void n.loadScript(FLIPBOOK.threejsSrc, n.createBook);
                    if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.threejsSrc]) return void setTimeout(function() {
                        n.createBook()
                    }, 100)
                }
                if (void 0 === FLIPBOOK.BookWebGL) {
                    if (!FLIPBOOK.scriptsAdded[FLIPBOOK.flipbookWebGlSrc]) return void n.loadScript(FLIPBOOK.flipbookWebGlSrc, n.createBook);
                    if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipbookWebGlSrc]) return void setTimeout(function() {
                        n.createBook()
                    }, 100)
                }
            } else if ("swipe" == n.options.viewMode) {
                if (void 0 === FLIPBOOK.BookSwipe) {
                    if (!FLIPBOOK.scriptsAdded[FLIPBOOK.flipBookSwipeSrc]) return void n.loadScript(FLIPBOOK.flipBookSwipeSrc, n.createBook);
                    if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipBookSwipeSrc]) return void setTimeout(function() {
                        n.createBook()
                    }, 100)
                }
            } else if (void 0 === FLIPBOOK.Book3) {
                if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipbookBook3Src]) return void n.loadScript(FLIPBOOK.flipbookBook3Src, n.createBook);
                if (!FLIPBOOK.scriptsAdded[FLIPBOOK.flipbookBook3Src]) return void setTimeout(function() {
                    n.createBook()
                }, 100)
            }
            if (this.setLoadingProgress(1), this.initEasing(), n.options.doublePage && 2 < n.options.pages.length) {
                for (var i = [n.options.pages[0]], s = 1; s <= n.options.pages.length - 2; s++) {
                    var a, r = {
                            src: (a = n.options.pages[s]).src,
                            thumb: a.thumb,
                            title: a.title,
                            htmlContent: a.htmlContent,
                            json: a.json,
                            side: "left"
                        },
                        l = {
                            src: a.src,
                            thumb: a.thumb,
                            title: a.title,
                            htmlContent: a.htmlContent,
                            json: a.json,
                            side: "right"
                        };
                    i.push(r), i.push(l)
                }
                n.options.backCover ? i.push(n.options.pages[n.options.pages.length - 1]) : (r = {
                    src: (a = n.options.pages[n.options.pages.length - 1]).src,
                    thumb: a.thumb,
                    title: a.title,
                    htmlContent: a.htmlContent,
                    json: a.json,
                    side: "left"
                }, l = {
                    src: a.src,
                    thumb: a.thumb,
                    title: a.title,
                    htmlContent: a.htmlContent,
                    json: a.json,
                    side: "right"
                }, i.push(r), i.push(l)), n.options.pages = i
            }
            if (this.options.numPages = this.options.pages.length, this.options.numPages % 2 == 0 || this.options.singlePageMode || (this.oddPages = !0, this.options.oddPages = !0, this.options.pages.push({
                    src: this.options.assets.preloader,
                    empty: !0
                })), 0 < n.options.pages.length)
                for (s = 0; s < n.options.pages.length; s++) void 0 !== n.options.pages[s].htmlContent && (n.options.hasHtmlContent = !0, n.options.pages[s].htmlContent = y(n.options.pages[s].htmlContent));

            function d() {
                n.flipsound = y('<audio><source src="' + n.options.assets.flipMp3 + '" type="audio/mpeg"></audio>')[0]
            }
            "webgl" == n.options.viewMode ? ((e = n.options).scroll = n.scroll, (e.parent = n).Book = new FLIPBOOK.BookWebGL(n.book[0], t, e), n.webglMode = !0, n.initSwipe(), d()) : "swipe" == n.options.viewMode ? (n.Book = new FLIPBOOK.BookSwipe(n.book[0], n.bookLayer[0], t, o), n.initSwipe()) : ("2d" != n.options.viewMode && (n.options.viewMode = "3d"), n.Book = new FLIPBOOK.Book3(n.book[0], t, o), n.initSwipe(), n.webglMode = !1, d()), this.resize(), n.Book.enable(), n.book.hide().fadeIn("slow"), this.tocCreated = !1, this.createMenu(), this.onZoom(this.options.zoom), 1 == this.options.pages.length && (this.rightToLeft = !1), FLIPBOOK.books = FLIPBOOK.books || {}, FLIPBOOK.books[n.id] = n.Book;
            var h = y(n.Book);
            h.bind("loadPagesFromPdf", function(e, t, o, i) {
                n.loadPagesFromPdf(t, o, i)
            }), h.bind("turnPageComplete", function(e) {
                n.turnPageComplete()
            }), h.bind("initEasing", function(e) {
                n.initEasing()
            }), h.bind("playFlipSound", function(e) {
                n.playFlipSound()
            }), h.bind("closeLightbox", function(e) {
                n.closeLightbox()
            }), h.bind("updateCurrentPage", function(e) {
                n.updateCurrentPage()
            }), this.createLogo(), this.onBookCreated()
        },
        addPageItems: function() {
            var e = this.options.pages;
            this.id;
            for (var t in e) {
                var o = e[t];
                if (o.htmlContent = o.htmlContent || "", o.items)
                    for (var i in o.items) {
                        var n, s = o.items[i];
                        switch (s.type) {
                            case "iframe":
                                a = '<iframe src="' + s.src + '" width="' + s.width + '" height="' + s.height + '" style="position:absolute;top:' + s.y + "px;left:" + s.x + 'px;bottom:auto;right:auto;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', o.htmlContent += a;
                                break;
                            case "image":
                                a = '<img src="' + s.src + '" style="position:absolute;top:' + s.y + "px;left:" + s.x + "px;width:" + s.width + "px;height:" + s.height + 'px;bottom:auto;right:auto;">', o.htmlContent += a;
                                break;
                            case "link":
                                a = y("<a>").addClass("flipbook-page-item").width(s.width).height(s.height).css({
                                    top: s.y + "px",
                                    left: s.x + "px",
                                    background: this.options.linkColor
                                }).attr("onmouseover", 'this.style.background="' + this.options.linkColorHover + '"').attr("onmouseout", 'this.style.background="' + this.options.linkColor + '"'), s.url ? a.attr("href", s.url).attr("target", "_blank") : s.page && (n = "#" + this.options.deeplinkingPrefix + s.page, s.flip && (n += "flip"), a.attr("href", n)), o.htmlContent += a[0].outerHTML;
                                break;
                            case "video":
                                var a = y("<video>").addClass("flipbook-page-item");
                                s.width && a.attr("width", s.width), s.height && a.attr("height", s.height), s.x && a.css("left", s.x + "px"), s.y && a.css("top", s.y + "px"), s.controls && a.prop("controls", "true"), s.autoplay && a.prop("autoplay", "true");
                                y('<source type="video/mp4">').attr("src", s.src).appendTo(a);
                                o.htmlContent += a[0].outerHTML
                        }
                    }
            }
        },
        onBookCreated: function() {
            var e = this.options,
                t = this;
            e.rightToLeft ? t.goToPage(Number(e.pages.length - Number(e.startPage) + 1), !0) : t.goToPage(Number(e.startPage), !0), y(M).resize(function() {
                t.resize()
            }), t.resize(), t.Book.updateVisiblePages(), t.Book.zoomTo(e.zoomMin), this.updateCurrentPage(), L.addEventListener("keydown", function(e) {
                if (t.Book.enabled) {
                    if (!t.options.arrowsAlwaysEnabledForNavigation || 37 != e.keyCode && 39 != e.keyCode) {
                        if (!t.options.lightBox && !t.fullscreenActive && (t.options.arrowsDisabledNotFullscreen || t.bodyHasVerticalScrollbar())) return
                    } else;
                    switch ((e = e || M.event).keyCode) {
                        case 37:
                            1 < t.zoom ? t.moveBook("left") : t.prevPage();
                            break;
                        case 38:
                            1 < t.zoom ? t.moveBook("up") : t.nextPage();
                            break;
                        case 39:
                            1 < t.zoom ? t.moveBook("right") : t.nextPage();
                            break;
                        case 33:
                            t.prevPage();
                            break;
                        case 34:
                            t.nextPage();
                            break;
                        case 36:
                            t.firstPage();
                            break;
                        case 35:
                            t.lastPage();
                            break;
                        case 40:
                            1 < t.zoom ? t.moveBook("down") : t.prevPage();
                            break;
                        case 107:
                        case 187:
                            t.zoomIn();
                            break;
                        case 109:
                        case 189:
                            t.zoomOut()
                    }
                    return !1
                }
            }), L.addEventListener("MSFullscreenChange", function(e) {
                t.handleFsChange()
            }), L.addEventListener("mozfullscreenchange", function(e) {
                t.handleFsChange()
            }), L.addEventListener("webkitfullscreenchange", function(e) {
                t.handleFsChange()
            }), L.addEventListener("fullscreenchange", function(e) {
                t.handleFsChange()
            }), e.lightboxCloseOnBack && (M.onpopstate = function() {
                t.Book.enabled && FLIPBOOK.lightboxOpened && (M.location.hash || t.lightbox.closeLightbox(!0))
            }), this.zoom = e.zoomMin, this.bookLayer.bind("DOMMouseScroll", function(e) {
                if (t.Book.enabled && (t.options.lightBox || t.fullscreenActive || !t.options.wheelDisabledNotFullscreen && !t.bodyHasVerticalScrollbar())) return e.stopPropagation(), e.preventDefault(), 0 < e.originalEvent.detail ? t.zoomOut(e.originalEvent) : t.zoomIn(e.originalEvent), !1
            }), this.bookLayer.bind("mousewheel", function(e) {
                if (t.Book.enabled && (t.options.lightBox || t.fullscreenActive || !t.options.wheelDisabledNotFullscreen && !t.bodyHasVerticalScrollbar())) return e.stopPropagation(), e.preventDefault(), e.originalEvent.wheelDelta < 0 ? t.zoomOut(e.originalEvent) : t.zoomIn(e.originalEvent), !1
            }), this.setTool("toolMove"), t.options.contentOnStart ? t.toggleToc(!0) : t.options.thumbnailsOnStart ? t.toggleThumbs(!0) : t.options.searchOnStart && (t.toggleSearch(!0), "string" == typeof t.options.searchOnStart && t.thumbs.$findInput.val(t.options.searchOnStart).trigger("keyup")), e.autoplayOnStart && t.toggleAutoplay(!0), t.options.lightBox && t.Book.disable(), t.initColors(), setTimeout(function() {
                t.resize(), t.Book.updateVisiblePages(), t.Book.zoomTo(e.zoomMin)
            }, 500), e.onbookcreated && e.onbookcreated.call(this)
        },
        initSwipe: function() {
            var l;
            1 != this.options.numPages && this.options.touchSwipeEnabled && (l = this, M.jQuery(this.bookLayer).swipe({
                swipeStatus: function(e, t, o, i, n, s, a) {
                    if ("start" == t) try {
                        l.currentPageInput.trigger("blur")
                    } catch (e) {}
                    if (!l.options.sideNavigationButtons || e.target !== l.arrowL[0] && e.target !== l.arrowR[0])
                        if (("end" == t || "cancel" == t) && n < 200 && i < 10) {
                            var r;
                            "toolMove" != l.tool || l.options.doubleClickZoomDisabled || (null == l.clickTimer ? l.clickTimer = setTimeout(function() {
                                l.clickTimer = null, "touchend" == e.type ? e.changedTouches[0].pageX : "mouseup" == e.type && e.offsetX
                            }, 300) : (clearTimeout(l.clickTimer), l.clickTimer = null, r = l.options.zoomTime, l.zoom >= l.options.zoomMax ? l.zoomTo(l.options.zoomMin, r, e) : l.zoomTo(l.options.zoomMax, r, e)))
                        } else {
                            if (("up" == o || "down" == o) && "move" == t || 1 < l.zoom || "toolSelect" == l.tool) return;
                            l.Book.onSwipe(e, t, o, i, n, s, a)
                        }
                },
                pinchStatus: function(e, t, o, i, n, s, a) {
                    "start" == t && (l.zoomStart = l.zoom), 1 < s && "move" == t && (e.preventDefault(), e.scale && (a = e.scale), l.zoomTo(l.zoomStart * a, 0, e))
                },
                fingers: 2,
                pinchThreshold: 0,
                allowPageScroll: "vertical",
                preventDefaultEvents: !1
            }), this.swipeEnabled = !0)
        },
        toggleMenu: function() {
            this.menuShowing ? (this.menuShowing = !1, this.bookLayer.css("bottom", "0px"), this.menuBottom.fadeOut(), this.currentPageHolder.fadeOut(), y(".flipbook-nav").fadeOut()) : (this.menuShowing = !0, this.bookLayer.css("bottom", this.menuBottom.height() + "px"), this.menuBottom.fadeIn(), this.currentPageHolder.fadeIn(), y(".flipbook-nav").fadeIn()), this.Book.onResize()
        },
        createIcon: function(e, t, o) {
            var i = "material" == this.options.icons ? y("<i>").addClass(t ? e.iconAlt2 : e.icon2).addClass("material-icons flipbook-icon-material flipbook-menu-btn skin-color").attr("title", e.title).text(t ? e.iconAlt2 : e.icon2) : y(L.createElement("span")).attr("aria-hidden", "true").addClass(t ? e.iconAlt : e.icon).addClass("flipbook-icon-fa flipbook-menu-btn skin-color fa");
            return o || i.addClass("skin-color-bg"), i
        },
        createButton: function(t) {
            var o = this.options,
                e = "top" == t.vAlign && o.menu2Transparent || "top" != t.vAlign && o.menuTransparent,
                i = t.background || (e ? o.floatingBtnBackground : o.btnBackground),
                n = t.backgroundHover || (e ? o.floatingBtnBackgroundHover : o.btnBackgroundHover),
                s = t.color || (e ? o.floatingBtnColor : o.btnColor),
                a = t.colorHover || (e ? o.floatingBtnColorHover : o.btnColorHover),
                r = e ? o.floatingBtnTextShadow : o.btnTextShadow,
                l = t.radius || (e ? o.floatingBtnRadius : o.btnRadius),
                d = t.border || (e ? o.floatingBtnBorder : o.btnBorder),
                h = e ? o.floatingBtnMargin : o.btnMargin,
                p = y(L.createElement("span")),
                c = "material" == o.icons,
                u = c ? (t.size || o.btnSize) + 8 : t.size || o.btnSize,
                g = (t.size || o.btnSize) + 24;

            function f(e) {
                e.css({
                    width: g + "px",
                    "font-size": u + "px",
                    margin: h + "px",
                    "border-radius": l + "px",
                    "text-shadow": o.btnTextShadow,
                    "box-shadow": o.btnShadow,
                    border: d,
                    color: s,
                    background: i,
                    "text-shadow": r
                }), s && e.removeClass("skin-color"), i && e.removeClass("skin-color-bg")
            }
            p.$icon = this.createIcon(t).appendTo(p), f(p.$icon), t.iconAlt2 && (p.$iconAlt = this.createIcon(t, !0).appendTo(p).hide(), f(p.$iconAlt)), p.icon = t.icon, p.iconAlt = t.iconAlt, c && (p.icon = t.icon2, p.iconAlt = t.iconAlt2, t.icon = t.icon2, t.iconAlt = t.iconAlt2), t.onclick && p.bind("tap click", function(e) {
                t.onclick()
            }), (a || n) && p.mouseenter(function() {
                p.find("." + p.icon.replace("fas ", "")).css({
                    color: a,
                    background: n
                }), p.$iconAlt && p.find("." + p.iconAlt.replace("fas ", "")).css({
                    color: a,
                    background: n
                })
            }).mouseleave(function() {
                p.find("." + p.icon.replace("fas ", "")).css({
                    color: s,
                    background: i
                }), p.$iconAlt && p.find("." + p.iconAlt.replace("fas ", "")).css({
                    color: s,
                    background: i
                })
            });
            var b = "top" == t.vAlign ? o.menu2Floating ? this.menuTC : "left" == t.hAlign ? this.menuTL : "right" == t.hAlign ? this.menuTR : this.menuTC : o.menuFloating ? this.menuBC : "left" == t.hAlign ? this.menuBL : "right" == t.hAlign ? this.menuBR : this.menuBC;
            return p.attr("data-name", t.name).appendTo(b).attr("title", t.title).addClass("").css("order", t.order), p
        },
        createMenu: function() {
            if (!this.menuBottom) {
                var e = this.options,
                    t = e.menuFloating ? "flipbook-menu-floating" : "flipbook-menu-fixed",
                    o = e.menu2Floating ? "flipbook-menu-floating" : "flipbook-menu-fixed",
                    i = this;
                this.menuBottom = y(L.createElement("div")).addClass("flipbook-menuBottom").addClass(t).appendTo(this.wrapper).css({
                    background: e.menuBackground,
                    "box-shadow": e.menuShadow,
                    margin: e.menuMargin + "px",
                    padding: e.menuPadding + "px"
                }), e.menuTransparent || e.menuBackground || this.menuBottom.addClass("skin-color-bg"), e.hideMenu && this.menuBottom.hide(), this.menuTop = y(L.createElement("div")).addClass("flipbook-menuTop").addClass(o).appendTo(this.wrapper).css({
                    background: e.menu2Background,
                    "box-shadow": e.menu2Shadow,
                    margin: e.menu2Margin + "px",
                    padding: e.menu2Padding + "px"
                }), e.menu2Transparent || e.menu2Background || this.menuTop.addClass("skin-color-bg"), "swipe" == e.viewMode && (e.btnSound.enabled = !1), this.menuBL = y(L.createElement("div")).addClass("flipbook-menu flipbook-menu-left").appendTo(this.menuBottom), this.menuBC = y(L.createElement("div")).addClass("flipbook-menu flipbook-menu-center").appendTo(this.menuBottom), this.menuBR = y(L.createElement("div")).addClass("flipbook-menu flipbook-menu-right").appendTo(this.menuBottom), this.menuTL = y(L.createElement("div")).addClass("flipbook-menu flipbook-menu-left").appendTo(this.menuTop), this.menuTC = y(L.createElement("div")).addClass("flipbook-menu flipbook-menu-center").appendTo(this.menuTop), this.menuTR = y(L.createElement("div")).addClass("flipbook-menu flipbook-menu-right").appendTo(this.menuTop), e.isMobile && (void 0 !== e.btnTocIfMobile && (e.btnToc.hideOnMobile = !e.btnTocIfMobile), void 0 !== e.btnThumbsIfMobile && (e.btnThumbs.hideOnMobile = !e.btnThumbsIfMobile), void 0 !== e.btnShareIfMobile && (e.btnShare.hideOnMobile = !e.btnShareIfMobile), void 0 !== e.btnDownloadPagesIfMobile && (e.btnDownloadPages.hideOnMobile = !e.btnDownloadPagesIfMobile), void 0 !== e.btnDownloadPdfIfMobile && (e.btnDownloadPdf.hideOnMobile = !e.btnDownloadPdfIfMobile), void 0 !== e.btnSoundIfMobile && (e.btnSound.hideOnMobile = !e.btnSoundIfMobile), void 0 !== e.btnExpandIfMobile && (e.btnExpand.hideOnMobile = !e.btnExpandIfMobile), void 0 !== e.btnPrintIfMobile && (e.btnPrint.hideOnMobile = !e.btnPrintIfMobile)), e.sideNavigationButtons && (this.btnNext = y('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"></div></div>').appendTo(this.bookLayer).bind("tap click", function(e) {
                    i.btnNext.disabled || (i.btnNext.disabled = !0, setTimeout(function() {
                        i.btnNext.disabled = !1
                    }, 300), e.stopPropagation(), e.preventDefault(), i.nextPage())
                }), this.arrowR = this.createIcon(e.btnNext).appendTo(this.btnNext.first()).addClass("flipbook-right-arrow").css({
                    width: e.sideBtnSize + "px",
                    height: e.sideBtnSize + "px",
                    "font-size": e.sideBtnSize + "px",
                    "border-radius": e.sideBtnRadius + "px",
                    "margin-top": String(-e.sideBtnSize / 2) + "px",
                    "margin-right": e.sideBtnMargin + "px",
                    padding: e.sideBtnPaddingV + "px " + e.sideBtnPaddingH + "px",
                    "text-shadow": e.sideBtnTextShadow,
                    "box-shadow": e.sideBtnShadow,
                    border: e.sideBtnBorder,
                    color: e.sideBtnColor,
                    background: e.sideBtnBackground,
                    "box-sizing": "initial"
                }), e.sideBtnColor && this.arrowR.removeClass("skin-color"), e.sideBtnBackground && this.arrowR.removeClass("skin-color-bg"), this.btnPrev = y('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"></div></div>').appendTo(i.bookLayer).bind("tap click", function(e) {
                    i.btnPrev.disabled || (i.btnPrev.disabled = !0, setTimeout(function() {
                        i.btnPrev.disabled = !1
                    }, 300), e.stopPropagation(), e.preventDefault(), i.prevPage())
                }), this.arrowL = this.createIcon(e.btnPrev).appendTo(this.btnPrev.first()).addClass("flipbook-left-arrow").css({
                    width: e.sideBtnSize + "px",
                    height: e.sideBtnSize + "px",
                    "font-size": e.sideBtnSize + "px",
                    "border-radius": e.sideBtnRadius + "px",
                    "margin-top": String(-e.sideBtnSize / 2) + "px",
                    "margin-left": e.sideBtnMargin + "px",
                    padding: e.sideBtnPaddingV + "px " + e.sideBtnPaddingH + "px",
                    "text-shadow": e.sideBtnTextShadow,
                    "box-shadow": e.sideBtnShadow,
                    border: e.sideBtnBorder,
                    color: e.sideBtnColor,
                    background: e.sideBtnBackground,
                    "box-sizing": "initial"
                }), e.sideBtnColor && this.arrowL.removeClass("skin-color"), e.sideBtnBackground && this.arrowL.removeClass("skin-color-bg"), e.btnFirst.enabled && (this.btnFirst = y('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"></div></div>').appendTo(this.bookLayer).bind("tap click", function(e) {
                    i.btnFirst.disabled || (i.btnFirst.disabled = !0, setTimeout(function() {
                        i.btnFirst.disabled = !1
                    }, 300), e.stopPropagation(), e.preventDefault(), i.firstPage())
                }), this.arrowFirst = this.createIcon(e.btnFirst).appendTo(this.btnFirst.first()).addClass("flipbook-first-arrow").css({
                    width: e.sideBtnSize + "px",
                    height: .66 * e.sideBtnSize + "px",
                    "font-size": .66 * e.sideBtnSize + "px",
                    "border-radius": e.sideBtnRadius + "px",
                    "margin-top": String(e.sideBtnSize / 2 + e.sideBtnMargin + 2 * e.sideBtnPaddingV) + "px",
                    "margin-left": e.sideBtnMargin + "px",
                    padding: e.sideBtnPaddingV + "px " + e.sideBtnPaddingH + "px",
                    "text-shadow": e.sideBtnTextShadow,
                    "box-shadow": e.sideBtnShadow,
                    border: e.sideBtnBorder,
                    color: e.sideBtnColor,
                    background: e.sideBtnBackground,
                    "box-sizing": "initial"
                }), e.sideBtnColor && this.arrowFirst.removeClass("skin-color"), e.sideBtnBackground && this.arrowFirst.removeClass("skin-color-bg")), e.btnLast.enabled && (this.btnLast = y('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"></div></div>').appendTo(i.bookLayer).bind("tap click", function(e) {
                    i.btnLast.disabled || (i.btnLast.disabled = !0, setTimeout(function() {
                        i.btnLast.disabled = !1
                    }, 300), e.stopPropagation(), e.preventDefault(), i.lastPage())
                }), this.arrowLast = this.createIcon(e.btnLast).appendTo(this.btnLast.first()).addClass("flipbook-last-arrow").css({
                    width: e.sideBtnSize + "px",
                    height: .66 * e.sideBtnSize + "px",
                    "font-size": .66 * e.sideBtnSize + "px",
                    "border-radius": e.sideBtnRadius + "px",
                    "margin-top": String(e.sideBtnSize / 2 + e.sideBtnMargin + 2 * e.sideBtnPaddingV) + "px",
                    "margin-right": e.sideBtnMargin + "px",
                    padding: e.sideBtnPaddingV + "px " + e.sideBtnPaddingH + "px",
                    "text-shadow": e.sideBtnTextShadow,
                    "box-shadow": e.sideBtnShadow,
                    border: e.sideBtnBorder,
                    color: e.sideBtnColor,
                    background: e.sideBtnBackground,
                    "box-sizing": "initial"
                }), e.sideBtnColor && this.arrowLast.removeClass("skin-color"), e.sideBtnBackground && this.arrowLast.removeClass("skin-color-bg")), 0 <= e.btnOrder.indexOf("btnFirst") && e.btnOrder.splice(e.btnOrder.indexOf("btnFirst"), 1), 0 <= e.btnOrder.indexOf("btnPrev") && e.btnOrder.splice(e.btnOrder.indexOf("btnPrev"), 1), 0 <= e.btnOrder.indexOf("btnNext") && e.btnOrder.splice(e.btnOrder.indexOf("btnNext"), 1), 0 <= e.btnOrder.indexOf("btnLast") && e.btnOrder.splice(e.btnOrder.indexOf("btnLast"), 1)), e.pdfMode && !e.btnDownloadPdf.url && (e.btnDownloadPdf.url = e.pdfUrl), !e.textLayer && e.btnSelect && (e.btnSelect.enabled = !1);
                for (var n = 0; n < e.btnOrder.length; n++) {
                    var s = e.btnOrder[n],
                        a = e[s];
                    e.isMobile && a.hideOnMobile && (a.enabled = !1), a.enabled && (a.name = s, "currentPage" == a.name ? this.createCurrentPage() : this[s] = this.createButton(a).bind("touchend click", function(e) {
                        e.stopPropagation(), e.preventDefault(), i.onButtonClick(this, e)
                    }))
                }
                if (e.buttons)
                    for (n = 0; n < e.buttons.length; n++) {
                        a = e.buttons[n];
                        i.createButton(a).index(1)
                    }
            }
        },
        onButtonClick: function(e, t) {
            var o, i, n, s, a, r = y(e).attr("data-name"),
                l = this.options;
            switch (r) {
                case "btnFirst":
                    this.firstPage();
                    break;
                case "btnPrev":
                    this.prevPage();
                    break;
                case "btnNext":
                    this.nextPage();
                    break;
                case "btnLast":
                    this.lastPage();
                    break;
                case "btnZoomIn":
                    this.zoomIn();
                    break;
                case "btnZoomOut":
                    this.zoomOut();
                    break;
                case "btnAutoplay":
                    this.autoplay || this.nextPage(), this.toggleAutoplay();
                    break;
                case "btnSearch":
                    this.toggleSearch();
                    break;
                case "btnBookmark":
                    this.toggleBookmark();
                    break;
                case "btnRotateLeft":
                    this.Book.rotateLeft && this.Book.rotateLeft();
                    break;
                case "btnRotateRight":
                    this.Book.rotateRight && this.Book.rotateRight();
                    break;
                case "btnToc":
                    this.toggleToc();
                    break;
                case "btnThumbs":
                    this.toggleThumbs();
                    break;
                case "btnShare":
                    this.toggleShareMenu();
                    break;
                case "btnDownloadPages":
                    l.downloadMenu ? this.toggleDownloadMenu() : ((o = L.createElement("a")).href = l.btnDownloadPages.url, o.download = l.btnDownloadPages.name, o.dispatchEvent(new MouseEvent("click")));
                    break;
                case "btnPrint":
                    l.printMenu ? this.togglePrintMenu() : this.togglePrintWindow();
                    break;
                case "btnDownloadPdf":
                    l.btnDownloadPdf.forceDownload ? (i = l.btnDownloadPdf.url, (n = L.createElement("a")).href = i, s = n.href.split("/").pop().split("#")[0].split("?")[0], n.download = s, L.body.appendChild(n), n.click(), L.body.removeChild(n)) : (a = l.btnDownloadPdf.openInNewWindow || (l.btnDownloadPdf.openInNewWindow, 1) ? "_blank" : "_self", M.open(l.btnDownloadPdf.url, a)), this.gaCode && ga("send", {
                        hitType: "event",
                        eventCategory: "Flipbook : " + l.name,
                        eventAction: "download PDF",
                        eventLabel: l.btnDownloadPdf.url,
                        nonInteraction: !0
                    });
                    break;
                case "btnSound":
                    this.toggleSound();
                    break;
                case "btnSelect":
                    this.toggleTool();
                    break;
                case "btnExpand":
                    this.toggleExpand();
                    break;
                case "btnClose":
                    this.lightbox.closeLightbox()
            }
        },
        handleFsChange: function(e) {
            var t;
            this.Book && this.Book.enabled && (t = y(this.fullscreenElement), (L.fullscreenElement || L.webkitFullscreenElement || L.mozFullScreenElement || L.msFullscreenElement) === this.fullscreenElement || this.isFullscreen ? (t.addClass("flipbook-browser-fullscreen"), this.fullscreenActive = !0, this.options.onfullscreenenter && this.options.onfullscreenenter.call(this)) : (t.removeClass("flipbook-browser-fullscreen"), this.fullscreenActive = !1, this.options.onfullscreenexit && this.options.onfullscreenexit.call(this)), this.triggerResizeOnce(), this.toggleIcon(this.btnExpand, !this.fullscreenActive))
        },
        createLogo: function() {
            var e, t = this.options;
            t.logoImg && (t.isMobile && t.logoHideOnMobile || (e = y("<img>").attr("src", t.logoImg).attr("style", t.logoCSS).appendTo(this.wrapper), "right" == t.logoAlignH && e.css("right", "0"), "bottom" == t.logoAlignV && e.css("bottom", "0"), t.logoUrl && e.bind("touchend click", function() {
                M.open(t.logoUrl, "_blank")
            })))
        },
        setLoadingProgress: function(e) {
            this.disposed || (this.$fillPreloader ? this.setFillPreloaderProgress(e) : 0 < e && e < 1 ? y(this.preloader).stop(!0, !0).show() : y(this.preloader).stop(!0, !0).hide())
        },
        setFillPreloaderProgress: function(e) {
            if (this.$fillPreloader)
                if (0 < e && e < 1) {
                    if (this.fillPreloaderProgress = this.fillPreloaderProgress || 0, e < this.fillPreloaderProgress) return;
                    this.fillPreloaderProgress = e;
                    var t = this.$fillPreloaderImg[0];
                    t.style.clip = "rect(0px," + t.width * e + "px," + t.height + "px,0px)", this.$fillPreloader.show()
                } else this.$fillPreloader.hide()
        },
        createNavigation: function() {
            var t = this;
            this.navLeft = y("<div />"), this.navLeft.css("background", "#f00").css("left", "0").css("top", "200px").attr("aria-hidden", "true").addClass("skin-color fa fa-chevron-left fa-5x").css("margin-top", this.navLeft.height() + "px").bind("touchend click", function(e) {
                e.stopPropagation(), e.preventDefault(), t.prevPage()
            }), this.navRight = y("<div />").appendTo(this.bookLayer).css("position", "absolute").css("width", "200px").css("height", "200px").css("margin-top", "-100px").css("background", "#f00").css("right", "0").css("top", "200px").bind("touchend click", function(e) {
                e.stopPropagation(), e.preventDefault(), t.nextPage()
            })
        },
        playFlipSound: function() {
            var e = this;
            this.options.sound && this.Book.enabled && void 0 !== this.flipsound.play && (this.flipsound.currentTime = 0, setTimeout(function() {
                try {
                    e.flipsound.play()
                } catch (e) {}
            }, 100))
        },
        onMouseWheel: function(e) {
            if ("wheelDeltaX" in e) wheelDeltaX = e.wheelDeltaX / 12, wheelDeltaY = e.wheelDeltaY / 12;
            else if ("wheelDelta" in e) wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
            else {
                if (!("detail" in e)) return;
                wheelDeltaX = wheelDeltaY = 3 * -e.detail
            }
            0 < wheelDeltaX ? this.zoomIn(e) : this.zoomOut(e)
        },
        zoomTo: function(e, t, o) {
            var i, n;
            this.zoom = e, void 0 === o ? (i = this.model.wrapperW / 2, n = this.model.wrapperH / 2) : (n = o.touches && o.touches[0] ? (i = o.touches[0].pageX, o.touches[0].pageY) : o.changedTouches && o.changedTouches[0] ? (i = o.changedTouches[0].pageX, o.changedTouches[0].pageY) : (i = o.pageX, o.pageY), i -= this.wrapper.offset().left, n -= this.wrapper.offset().top), this.zoom < this.options.zoomMin && (this.zoom = this.options.zoomMin), this.zoom > this.options.zoomMax && (this.zoom = this.options.zoomMax), this.options.zoomMax2 && this.zoom > this.options.zoomMax2 && (this.zoom = this.options.zoomMax2), this.model.zoom = this.zoom, this.Book.zoomTo(this.zoom, t, i, n), this.onZoom(this.zoom)
        },
        zoomOut: function(e) {
            var t, o = this.zoom / this.options.zoomStep;
            o < 1 && 1 < this.zoom && (o = 1), o = o < this.options.zoomMin ? this.options.zoomMin : o, this.zoom != o && (this.zoom = o, t = this.options.zoomTime, this.zoomTo(this.zoom, t, e))
        },
        zoomIn: function(e) {
            var t, o = this.zoom * this.options.zoomStep;
            1 < o && this.zoom < 1 && (o = 1), this.bookLayer.height() * o > this.options.zoomSize && (o = this.options.zoomSize / this.bookLayer.height()), this.zoom != o && (this.zoom = o, t = this.options.zoomTime, this.zoomTo(this.zoom, t, e))
        },
        nextPage: function() {
            this.Book && this.Book.nextPage()
        },
        prevPage: function() {
            this.Book && this.Book.prevPage()
        },
        firstPage: function() {
            this.goToPage(1)
        },
        lastPage: function() {
            this.goToPage(this.options.pages.length)
        },
        goToPage: function(e, t) {
            e < 1 ? e = 1 : e > this.options.numPages && !this.options.rightToLeft && (e = this.options.numPages), this.Book && this.Book.goToPage(e, t)
        },
        moveBook: function(e) {
            this.Book && this.Book.move && this.Book.move(e)
        },
        onZoom: function(e) {
            this.zoom = e, this.enableButton(this.btnZoomIn, e < this.options.zoomMax), this.enableButton(this.btnZoomOut, e > this.options.zoomMin), this.enableSwipe(e <= 1), this.model.zoom = e
        },
        enableSwipe: function(e) {
            this.swipeEnabled = e
        },
        createCurrentPage: function() {
            var o = this,
                i = this.options,
                e = "flipbook-currentPageHolder ",
                t = "top" == i.currentPage.vAlign ? "left" == i.currentPage.hAlign ? this.menuTL : "right" == i.currentPage.hAlign ? this.menuTR : this.menuTC : "left" == i.currentPage.hAlign ? this.menuBL : "right" == i.currentPage.hAlign ? this.menuBR : this.menuBC,
                n = "top" == i.currentPage.vAlign && i.menu2Transparent || "top" != i.currentPage.vAlign && i.menuTransparent,
                s = n ? i.floatingBtnBackground : "",
                a = n ? i.floatingBtnColor : i.btnColor,
                r = n ? i.floatingBtnTextShadow : "",
                l = n ? i.floatingBtnRadius : i.btnRadius,
                d = (n ? i.floatingBtnMargin : i.btnMargin, y("<div>").appendTo(t));
            d.css("margin", i.currentPage.marginV + "px " + i.currentPage.marginH + "px"), n || (e += "skin-color "), d.addClass(e).css({
                color: a,
                background: s,
                "text-shadow": r,
                "border-radius": l + "px"
            }), i.currentPage.order && d.css("order", i.currentPage.order), this.currentPageHolder = d, this.currentPage = y(L.createElement("div")).addClass("flipbook-currentPageNumber").appendTo(d);
            var h = y("<form>").appendTo(d).submit(function(e) {
                var t = (t = parseInt(o.currentPageInput.val())) > i.pages.length ? i.pages.length : t;
                return o.options.rightToLeft && (t = i.pages.length - t + 1), o.goToPage(t), o.currentPageInput.trigger("blur"), !1
            });
            this.currentPageInput = y('<input type="text" maxlength="4">').addClass("flipbook-currentPageInput").css({
                margin: i.currentPage.marginV + "px " + i.currentPage.marginH + "px",
                color: a
            }).appendTo(h).val("").focus(function() {
                o.currentPageInput.val(""), o.currentPage.addClass("flipbook-color-transparent")
            }).blur(function() {
                o.currentPageInput.val(""), o.currentPage.removeClass("flipbook-color-transparent")
            }), n || this.currentPageInput.addClass("skin-color")
        },
        createMenuHeader: function(e, t, o) {
            var i = this,
                n = y("<div>").addClass("flipbook-menu-header skin-clor flipbook-font").appendTo(e),
                t = y("<span>").text(t).addClass("flipbook-menu-title skin-color").appendTo(n),
                s = y("<span>").appendTo(n).addClass("flipbook-btn-close").bind("touchend click", function(e) {
                    e.stopPropagation(), e.preventDefault(), i.closeMenus()
                });
            this.createIcon(this.options.btnClose, null, !0).appendTo(s)
        },
        createToc: function() {
            var i = this,
                e = this.options.tableOfContent;
            if (e && e.length || !this.pdfService || this.pdfService.outlineLoaded) {
                if (this.tocHolder = y("<div>").addClass("flipbook-tocHolder flipbook-side-menu skin-color-bg").appendTo(this.wrapper).css(this.options.sideMenuPosition, "0").hide(), this.createMenuHeader(this.tocHolder, this.strings.tableOfContent, this.toggleToc), this.toc = y("<div>").addClass("flipbook-toc").appendTo(this.tocHolder), this.tocScroller = y("<div>").addClass("flipbook-toc-scroller").appendTo(this.toc), this.tocScroll = new FLIPBOOK.IScroll(i.toc[0], {
                        bounce: !1,
                        mouseWheel: !0,
                        scrollbars: !0,
                        interactiveScrollbars: !0
                    }), e && 0 < e.length) {
                    this.options.pages;
                    for (var t = 0; t < e.length; t++) this.createTocItem(e[t])
                } else
                    for (var o = this.options.pages, t = 0; t < o.length; t++) {
                        var n, s = o[t].title;
                        "" != s && void 0 !== s && (n = {
                            title: s,
                            page: String(t + 1)
                        }, this.createTocItem(n))
                    }
                this.initColors(), this.tocScroll.refresh(), this.tocCreated = !0, this.toggleToc()
            } else i.pdfService.loadOutline(function(e) {
                i.options.tableOfContent = e;
                var t = new EventBus,
                    o = {
                        scrollPageIntoView: function(e) {
                            var t = e.pageNumber,
                                o = $annotations[processingAnnotationIndex];
                            o && (o.dataset.page = t, processingAnnotationIndex++, processAnotations())
                        }
                    };
                new PDFLinkService({
                    eventBus: t
                }).setViewer(o), i.createToc()
            })
        },
        createTocItem: function(i, e, t) {
            var n = this,
                e = e || this.tocScroller,
                o = this.options.rightToLeft,
                s = y(L.createElement("a")).attr("class", "flipbook-tocItem").addClass("skin-color").css("direction", o ? "rtl" : "ltr").appendTo(e).bind("touchend click", function(e) {
                    var t;

                    function o(e) {
                        n.pdfService.pdfDocument.getPageIndex(e[0]).then(function(e) {
                            var t = e + 1,
                                t = n.options.rightToLeft ? n.options.pages.length - t + 1 : t;
                            setTimeout(function() {
                                n.goToPage(t)
                            }, 200)
                        })
                    }
                    e.stopPropagation(), e.preventDefault(), n.tocScroll.moved || (n.options.tableOfContentCloseOnClick && n.toggleToc(!1), !i.page && i.dest ? "string" == typeof i.dest ? n.pdfService.pdfDocument.getDestination(i.dest).then(function(e) {
                        o(e)
                    }) : o(i.dest) : (t = Number(i.page), t = n.options.rightToLeft ? n.options.pages.length - t + 1 : t, setTimeout(function() {
                        n.goToPage(t)
                    }, 200)))
                });
            t = t || 0, s.level = t, s.css("padding", "8px 0"), s.css("margin-" + (o ? "right" : "left"), "10px"), t ? (s.css("margin-top", "8px"), s.css("padding-bottom", "0")) : (s.css("margin-right", "15px"), s.css("padding-left", "10px"));
            var a = y(L.createElement("span")).appendTo(s).css("width", "20px").css("display", "inline-block").css("cursor", "auto").bind("touchend click", function(e) {
                    e.stopPropagation(), e.preventDefault();
                    for (var t = 0; t < s.items.length; t++) s.items[t].toggle();
                    r.toggle(), l.toggle(), n.tocScroll.refresh()
                }),
                r = y("<span>").attr("aria-hidden", "true").appendTo(a).addClass("fa fa-chevron-" + (o ? "left" : "right") + " skin-color").hide(),
                l = y("<span>").attr("aria-hidden", "true").appendTo(a).addClass("fa fa-chevron-down skin-color").hide();
            if (y(L.createElement("span")).appendTo(s).addClass("title").text(i.title).css("width", String(170 - 10 * s.level) + "px"), y(L.createElement("span")).appendTo(s).width("25px").css("display", "inline-block").css("text-align", "right").text(i.page), i.items && i.items.length) {
                s.items = [];
                for (var d = 0; d < i.items.length; d++) {
                    var h = this.createTocItem(i.items[d], s, s.level + 1);
                    s.items.push(h), h.hide()
                }
                r.show()
            }
            return s
        },
        enablePrev: function(e) {
            this.enableButton(this.btnPrev, e), this.enableButton(this.btnFirst, e), this.Book.enablePrev(e)
        },
        enableNext: function(e) {
            this.enableButton(this.btnNext, e), this.enableButton(this.btnLast, e), this.Book.enableNext(e)
        },
        enableButton: function(e, t) {
            void 0 !== e && (t ? (e.css("opacity", "1"), e.css("pointer-events", "auto")) : (e.css("opacity", "0.2"), e.css("pointer-events", "none")), e.enabled = t)
        },
        resize: function() {
            var e, t = this.model;
            t.wrapperW = this.bookLayer.width(), t.wrapperH = this.bookLayer.height(), this.Book && this.Book.enabled && (!(e = this.options).menuOverBook && this.menuShowing && this.menuBottom ? this.bookLayer.css("bottom", this.menuBottom.outerHeight() + "px") : this.bookLayer.css("bottom", "0px"), !e.menu2OverBook && this.menuShowing && this.menuTop ? this.bookLayer.css("top", this.menuTop.outerHeight() + "px") : this.bookLayer.css("top", "0px"), this.tocShowing || this.thumbsShowing || this.searchShowing || this.bookmarkShowing ? (e.sideMenuOverBook || this.bookLayer.css(this.options.sideMenuPosition, "250px"), this.options.sideMenuOverMenu || this.wrapper.find(".flipbook-side-menu").css("bottom", this.menuBottom.outerHeight() + "px"), this.options.sideMenuOverMenu2 || this.wrapper.find(".flipbook-side-menu").css("top", this.menuTop.outerHeight() + "px")) : this.bookLayer.css(this.options.sideMenuPosition, "0px"), e.zoomMax = e.zoomSize / t.wrapperH, t.zoom = e.zoomMin, this.Book.onResize(), this.options.zoomReset && this.Book.zoomTo(this.options.zoomMin))
        },
        pdfResize: function() {
            this.Book.onZoom()
        },
        createThumbs: function() {
            this.thumbs = new FLIPBOOK.Thumbnails(this)
        },
        toggleThumbs: function(e) {
            this.thumbs || this.createThumbs(), void 0 !== e && (this.thumbsShowing = !e), this.thumbsShowing ? (this.thumbs.hide(), this.thumbsShowing = !1) : (this.closeMenus(), this.thumbs.show(), this.thumbsShowing = !0), this.resize()
        },
        toggleToc: function(e) {
            this.tocCreated ? (!this.tocShowing || e ? (this.closeMenus(), this.tocShowing = !0, this.tocHolder.show(), this.tocScroll.refresh()) : (this.tocHolder.hide(), this.tocShowing = !1), this.resize()) : this.createToc()
        },
        toggleSearch: function(e) {
            this.thumbs || this.createThumbs(), void 0 !== e && (this.searchShowing = !e), this.searchShowing ? (this.thumbs.hide(), this.searchShowing = !1, this.unmark()) : (this.closeMenus(), this.thumbs.show(), this.thumbs.showSearch(), this.searchShowing = !0), this.resize()
        },
        toggleBookmark: function(e) {
            this.thumbs || this.createThumbs(), void 0 !== e && (this.bookmarkShowing = !e), this.bookmarkShowing ? (this.thumbs.hide(), this.bookmarkShowing = !1) : (this.closeMenus(), this.thumbs.show(), this.thumbs.showBookmarks(), this.bookmarkShowing = !0), this.resize()
        },
        closeMenus: function() {
            this.thumbsShowing && this.toggleThumbs(), this.tocShowing && this.toggleToc(), this.searchShowing && this.toggleSearch(), this.bookmarkShowing && this.toggleBookmark(), this.printMenuShowing && this.togglePrintMenu(), this.dlMenuShowing && this.toggleDownloadMenu(), this.shareMenuShowing && this.toggleShareMenu(), this.passwordMenuShowing && this.togglePasswordMenu()
        },
        togglePrintMenu: function() {
            var e, t, o = this;
            this.printMenu ? this.printMenuShowing ? (this.printMenu.hide(), this.printMenuShowing = !1) : (this.closeMenus(), this.printMenu.show(), this.printMenuShowing = !0, this.updateCurrentPage()) : (this.printMenu = y('<div class="flipbook-sub-menu flipbook-font">').appendTo(this.wrapper), e = y('<idv class="flipbook-sub-menu-center">').appendTo(this.printMenu), t = y('<idv class="flipbook-sub-menu-content skin-color-bg">').appendTo(e), this.createMenuHeader(t, this.strings.print, this.togglePrintMenu), y('<a><div class="c-p skin-color flipbook-btn">' + this.strings.printCurrentPage + "</div></a>").appendTo(t).bind("touchend click", function(e) {
                o.printPage(o.cPage[0], this)
            }), y('<a><div class="c-l-p skin-color flipbook-btn">' + this.strings.printLeftPage + "</div></a>").appendTo(this.printMenu).appendTo(t).bind("touchend click", function(e) {
                o.printPage(o.cPage[0], this)
            }), y('<a><div class="c-r-p skin-color flipbook-btn">' + this.strings.printRightPage + "</div></a>").appendTo(this.printMenu).appendTo(t).bind("touchend click", function(e) {
                o.printPage(o.cPage[1], this)
            }), y('<a><div class="skin-color flipbook-btn">' + this.strings.printAllPages + "</div></a>").appendTo(t).bind("touchend click", function(e) {
                o.togglePrintWindow()
            }), this.closeMenus(), this.printMenuShowing = !0, this.initColors(), this.updateCurrentPage())
        },
        toggleDownloadMenu: function() {
            var e, t, i = this;
            this.dlMenu ? this.dlMenuShowing ? (this.dlMenu.hide(), this.dlMenuShowing = !1) : (this.dlMenu.show(), this.closeMenus(), this.dlMenuShowing = !0, this.updateCurrentPage()) : (this.dlMenu = y('<div class="flipbook-sub-menu flipbook-font">').appendTo(this.wrapper), e = y('<idv class="flipbook-sub-menu-center">').appendTo(this.dlMenu), t = y('<idv class="flipbook-sub-menu-content skin-color-bg">').appendTo(e), this.createMenuHeader(t, this.strings.download, this.toggleDownloadMenu), y('<a><div class="c-p skin-color flipbook-btn">' + this.strings.downloadCurrentPage + "</div></a>").appendTo(t).bind("touchend click", function(e) {
                i.downloadPage(i.cPage[0], this)
            }), y('<a><div class="c-l-p skin-color flipbook-btn">' + this.strings.downloadLeftPage + "</div></a>").appendTo(t).bind("touchend click", function(e) {
                i.downloadPage(i.cPage[0], this)
            }), y('<a><div class="c-r-p skin-color flipbook-btn">' + this.strings.downloadRightPage + "</div></a>").appendTo(t).bind("touchend click", function(e) {
                i.downloadPage(i.cPage[1], this)
            }), y('<a><div class="skin-color flipbook-btn">' + this.strings.downloadAllPages + "</div></a>").appendTo(t).bind("touchend click", function(e) {
                var t = L.createElement("a");
                t.href = i.options.btnDownloadPages.url;
                var o = t.href.split("/").pop().split("#")[0].split("?")[0];
                t.download = o, t.dispatchEvent(new MouseEvent("click"))
            }), this.closeMenus(), this.dlMenuShowing = !0, this.initColors(), this.updateCurrentPage())
        },
        toggleShareMenu: function() {
            var e, t, o, i;
            this.shareMenu ? this.shareMenuShowing ? (this.shareMenu.hide(), this.shareMenuShowing = !1) : (this.shareMenu.show(), this.closeMenus(), this.shareMenuShowing = !0) : (this.shareMenu = y('<div class="flipbook-sub-menu flipbook-font">').appendTo(this.wrapper), e = y('<idv class="flipbook-sub-menu-center">').appendTo(this.shareMenu), t = y('<idv class="flipbook-sub-menu-content skin-color-bg">').appendTo(e), this.createMenuHeader(t, this.options.strings.share, this.toggleShareMenu), o = y('<idv class="flipbook-share">').appendTo(t), i = this.options, this.share = new Share(o[0], {
                networks: {
                    twitter: i.twitter,
                    facebook: i.facebook,
                    pinterest: i.pinterest,
                    email: i.email
                }
            }), this.closeMenus(), this.shareMenuShowing = !0, this.initColors())
        },
        bookmarkPage: function(e) {
            var t = this.getBookmarkedPages();
            t.indexOf(String(e)) < 0 && t.push(e), this.setBookmarkedPages(t), this.thumbs.showBookmarkedThumbs(), this.bookmarkShowing || this.toggleBookmark()
        },
        removeBookmark: function(e) {
            var t = this.getBookmarkedPages(); - 1 < t.indexOf(String(e)) && t.splice(t.indexOf(String(e)), 1), this.setBookmarkedPages(t), this.thumbs.showBookmarkedThumbs(), this.bookmarkShowing || this.toggleBookmark()
        },
        isBookmarked: function(e) {
            return 0 < this.getBookmarkedPages().indexOf(String(e))
        },
        getBookmarkedPages: function() {
            var e = localStorage.getItem(this.options.name + "_flipbook_bookmarks");
            return e ? e.split(";") : []
        },
        setBookmarkedPages: function(e) {
            localStorage.setItem(this.options.name + "_flipbook_bookmarks", e.join(";"))
        },
        printPage: function(e, t) {
            var o, i, n, s;
            this.options.pages[e] && this.options.pages[e].print ? o = this.options.pages[e].print : this.options.pages[e] && this.options.pages[e].canvas && this.options.pages[e].canvas[this.options.pageTextureSize] ? o = this.options.pages[e].canvas[this.options.pageTextureSize].toDataURL() : this.options.pages[e] && this.options.pages[e].src && (o = this.options.pages[e].src), o ? (i = "<!DOCTYPE html>", i += "<html>", i += "<head><title>Print canvas</title></head>", i += "<body>", i += '<img src="' + o + '">', i += "</body>", i += "</html>", (n = M.open("", "Print", "height=1600,width=800")).document.open(), n.document.write(i), n.document.close(), n.document.addEventListener("load", function() {
                n.focus(), n.print(), n.document.close(), n.close()
            }, !0)) : (s = this).loadPage(e, this.options.pageTextureSize, function() {
                s.printPage(e)
            })
        },
        downloadPage: function(e) {
            var t, o, i, n, s;
            this.options.pages[e] && this.options.pages[e].download ? t = this.options.pages[e].download : this.options.pages[e] && this.options.pages[e].src ? t = this.options.pages[e].src : this.options.pages[e] && this.options.pages[e].canvas && this.options.pages[e].canvas[this.options.pageTextureSize] && (o = L.createElement("canvas"), i = this.options.pageWidth / this.options.pageHeight, o.width = this.options.pageTextureSize * i, o.height = this.options.pageTextureSize, o.getContext("2d").drawImage(this.options.pages[e].canvas[this.options.pageTextureSize], 0, 0), t = o.toDataURL("image/jpeg", .5)), t ? ((n = L.createElement("a")).href = t, n.download = "page" + String(e + 1), L.body.appendChild(n), n.click(), L.body.removeChild(n)) : (s = this).loadPage(e, this.options.pageTextureSize, function() {
                s.downloadPage(e)
            })
        },
        printPdf: function(e) {
            var t;
            this.options.isMobile ? M.open(e, "_blank", "directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0").onload = function() {
                this.document.body.children[0].style.display = "none", this.print()
            } : (t = this._printIframe, this._printIframe || (t = this._printIframe = L.createElement("iframe"), L.body.appendChild(t), t.style.display = "none", t.onload = function() {
                setTimeout(function() {
                    t.focus(), t.contentWindow.print()
                }, 1)
            }), t.src = e)
        },
        togglePrintWindow: function(e) {
            var n = this;

            function t() {
                link = "about:blank";
                var e = M.open(link, "_new");
                e.document.open();
                for (var t = "", o = 0; o < n.options.pages.length; o++) n.options.pages[o].src && (t += '<img src="' + n.options.pages[o].src.toString() + '"/>\n');
                var i = "<html>\n<head>\n<title>Temporary Printing Window</title>\n<script>\nfunction step1() {\n  setTimeout('step2()', 10);\n}\nfunction step2() {\n  window.print();\n  window.close();\n}\n<\/script>\n</head>\n<body onLoad='step1()'>\n" + t + "</body>\n</html>\n";
                e.document.write(i), e.document.close()
            }
            n.options.printPdfUrl ? n.printPdf(n.options.printPdfUrl) : n.options.pdfUrl ? n.printPdf(n.options.pdfUrl) : t()
        },
        thumbsVertical: function() {
            this.thumbsCreated && (this.thumbScroll.hScroll = !1, this.thumbScroll.vScroll = !0, this.thumbScroll.refresh())
        },
        toggleExpand: function(e) {
            this.browserFullscreen = !0, screenfull.enabled ? screenfull.toggle(this.fullscreenElement) : (this.isFullscreen = !this.isFullscreen, this.handleFsChange())
        },
        expand: function() {},
        toggleAutoplay: function(e) {
            var t = this;
            this.autoplay = e || !this.autoplay, this.autoplay ? this.autoplayTimer = setInterval(function() {
                var e;
                t.autoplay && (e = t.options.autoplayStartPage || 1, t.options.rightToLeft ? t.Book.prevEnabled ? t.prevPage() : t.options.autoplayLoop && t.goToPage(t.options.pages.length - e + 1) : t.Book.nextEnabled ? t.nextPage() : t.options.autoplayLoop && t.goToPage(e))
            }, t.options.autoplayInterval) : clearInterval(t.autoplayTimer), this.toggleIcon(this.btnAutoplay, !this.autoplay)
        },
        triggerResizeOnce: function() {
            setTimeout(function() {
                y(M).trigger("resize")
            }, 100), setTimeout(function() {
                y(M).trigger("resize")
            }, 500)
        },
        triggerResize: function() {
            setTimeout(function() {
                y(M).trigger("resize")
            }, 100), setTimeout(function() {
                y(M).trigger("resize")
            }, 500), setTimeout(function() {
                y(M).trigger("resize")
            }, 2e3)
        },
        initEasing: function() {
            M.jQuery.extend(M.jQuery.easing, {
                def: "easeOutQuad",
                swing: function(e, t, o, i, n) {
                    return y.easing[y.easing.def](e, t, o, i, n)
                },
                easeInQuad: function(e, t, o, i, n) {
                    return i * (t /= n) * t + o
                },
                easeOutQuad: function(e, t, o, i, n) {
                    return -i * (t /= n) * (t - 2) + o
                },
                easeInOutQuad: function(e, t, o, i, n) {
                    return (t /= n / 2) < 1 ? i / 2 * t * t + o : -i / 2 * (--t * (t - 2) - 1) + o
                },
                easeInCubic: function(e, t, o, i, n) {
                    return i * (t /= n) * t * t + o
                },
                easeOutCubic: function(e, t, o, i, n) {
                    return i * ((t = t / n - 1) * t * t + 1) + o
                },
                easeInOutCubic: function(e, t, o, i, n) {
                    return (t /= n / 2) < 1 ? i / 2 * t * t * t + o : i / 2 * ((t -= 2) * t * t + 2) + o
                },
                easeInQuart: function(e, t, o, i, n) {
                    return i * (t /= n) * t * t * t + o
                },
                easeOutQuart: function(e, t, o, i, n) {
                    return -i * ((t = t / n - 1) * t * t * t - 1) + o
                },
                easeInOutQuart: function(e, t, o, i, n) {
                    return (t /= n / 2) < 1 ? i / 2 * t * t * t * t + o : -i / 2 * ((t -= 2) * t * t * t - 2) + o
                },
                easeInQuint: function(e, t, o, i, n) {
                    return i * (t /= n) * t * t * t * t + o
                },
                easeOutQuint: function(e, t, o, i, n) {
                    return i * ((t = t / n - 1) * t * t * t * t + 1) + o
                },
                easeInOutQuint: function(e, t, o, i, n) {
                    return (t /= n / 2) < 1 ? i / 2 * t * t * t * t * t + o : i / 2 * ((t -= 2) * t * t * t * t + 2) + o
                },
                easeInSine: function(e, t, o, i, n) {
                    return -i * Math.cos(t / n * (Math.PI / 2)) + i + o
                },
                easeOutSine: function(e, t, o, i, n) {
                    return i * Math.sin(t / n * (Math.PI / 2)) + o
                },
                easeInOutSine: function(e, t, o, i, n) {
                    return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + o
                },
                easeInExpo: function(e, t, o, i, n) {
                    return 0 == t ? o : i * Math.pow(2, 10 * (t / n - 1)) + o
                },
                easeOutExpo: function(e, t, o, i, n) {
                    return t == n ? o + i : i * (1 - Math.pow(2, -10 * t / n)) + o
                },
                easeInOutExpo: function(e, t, o, i, n) {
                    return 0 == t ? o : t == n ? o + i : (t /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + o : i / 2 * (2 - Math.pow(2, -10 * --t)) + o
                },
                easeInCirc: function(e, t, o, i, n) {
                    return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + o
                },
                easeOutCirc: function(e, t, o, i, n) {
                    return i * Math.sqrt(1 - (t = t / n - 1) * t) + o
                },
                easeInOutCirc: function(e, t, o, i, n) {
                    return (t /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + o : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + o
                },
                easeInElastic: function(e, t, o, i, n) {
                    var s = 1.70158,
                        a = 0,
                        r = i;
                    return 0 == t ? o : 1 == (t /= n) ? o + i : (a = a || .3 * n, s = r < Math.abs(i) ? (r = i, a / 4) : a / (2 * Math.PI) * Math.asin(i / r), -(r * Math.pow(2, 10 * --t) * Math.sin((t * n - s) * (2 * Math.PI) / a)) + o)
                },
                easeOutElastic: function(e, t, o, i, n) {
                    var s = 1.70158,
                        a = 0,
                        r = i;
                    return 0 == t ? o : 1 == (t /= n) ? o + i : (a = a || .3 * n, s = r < Math.abs(i) ? (r = i, a / 4) : a / (2 * Math.PI) * Math.asin(i / r), r * Math.pow(2, -10 * t) * Math.sin((t * n - s) * (2 * Math.PI) / a) + i + o)
                },
                easeInOutElastic: function(e, t, o, i, n) {
                    var s = 1.70158,
                        a = 0,
                        r = i;
                    return 0 == t ? o : 2 == (t /= n / 2) ? o + i : (a = a || n * (.3 * 1.5), s = r < Math.abs(i) ? (r = i, a / 4) : a / (2 * Math.PI) * Math.asin(i / r), t < 1 ? r * Math.pow(2, 10 * --t) * Math.sin((t * n - s) * (2 * Math.PI) / a) * -.5 + o : r * Math.pow(2, -10 * --t) * Math.sin((t * n - s) * (2 * Math.PI) / a) * .5 + i + o)
                },
                easeInBack: function(e, t, o, i, n, s) {
                    return s == a && (s = 1.70158), i * (t /= n) * t * ((s + 1) * t - s) + o
                },
                easeOutBack: function(e, t, o, i, n, s) {
                    return s == a && (s = 1.70158), i * ((t = t / n - 1) * t * ((s + 1) * t + s) + 1) + o
                },
                easeInOutBack: function(e, t, o, i, n, s) {
                    return s == a && (s = 1.70158), (t /= n / 2) < 1 ? i / 2 * (t * t * ((1 + (s *= 1.525)) * t - s)) + o : i / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + o
                },
                easeInBounce: function(e, t, o, i, n) {
                    return i - y.easing.easeOutBounce(e, n - t, 0, i, n) + o
                },
                easeOutBounce: function(e, t, o, i, n) {
                    return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + o : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + o : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + o : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + o
                },
                easeInOutBounce: function(e, t, o, i, n) {
                    return t < n / 2 ? .5 * y.easing.easeInBounce(e, 2 * t, 0, i, n) + o : .5 * y.easing.easeOutBounce(e, 2 * t - n, 0, i, n) + .5 * i + o
                }
            })
        }
    }, FLIPBOOK.Book = function() {}, FLIPBOOK.Book.prototype = {
        rightIndex: 0,
        goToPage: function() {},
        getRightIndex: function() {},
        canFlipNext: function() {
            return 0 < this.flippedright && (1 == this.view ? this.isFocusedLeft && this.isFocusedLeft() : !(1 == this.flippedright && !this.options.rightToLeft && this.options.oddPages))
        },
        canFlipPrev: function() {
            return 0 < this.flippedleft && (1 == this.view ? this.isFocusedRight && this.isFocusedRight() : 1 != this.flippedleft || !this.options.rightToLeft || !this.options.oddPages)
        },
        getCurrentPageNumber: function() {
            if (1 == this.view) {
                var e = this.rightIndex % 2 == 1 ? this.rightIndex + 1 : this.rightIndex;
                return this.options.rightToLeft ? (e = this.options.pages.length - e, this.isFocusedRight() ? e : e + 1) : this.isFocusedLeft() ? e : e + 1
            }
        }
    }, FLIPBOOK.Thumbnails = function(o) {
        var a = this,
            i = o.options,
            e = o.wrapper;
        this.main = o, this.options = i, this.wrapper = e, this.active = null, y(o).bind("pagechange", function() {
            a.thumbsWrapper.css("top", a.bookmark.height() + 50 + "px")
        }), this.thumbHolder = y(L.createElement("div")).addClass("flipbook-thumbHolder flipbook-side-menu skin-color-bg").appendTo(e).css(this.options.sideMenuPosition, "0").hide(), this.thumbsWrapper = y(L.createElement("div")).appendTo(this.thumbHolder).addClass("flipbook-thumbsWrapper"), this.thumbsScroller = y(L.createElement("div")).appendTo(this.thumbsWrapper).addClass("flipbook-thumbsScroller"), o.createMenuHeader(this.thumbHolder, o.strings.thumbnails, o.toggleThumbs), this.bookmark = y("<div>").addClass("flipbook-font").appendTo(this.thumbHolder).hide();
        y('<a><div class="c-p skin-color flipbook-btn">' + i.strings.bookmarkCurrentPage + "</div></a>").appendTo(this.bookmark).bind("touchend click", function(e) {
            o.bookmarkPage(o.cPage[0], this), e.preventDefault(), e.stopPropagation()
        }), y('<a><div class="c-l-p skin-color flipbook-btn">' + i.strings.bookmarkLeftPage + "</div></a>").appendTo(this.bookmark).bind("touchend click", function(e) {
            o.bookmarkPage(o.cPage[0], this), e.preventDefault(), e.stopPropagation()
        }), y('<a><div class="c-r-p skin-color flipbook-btn">' + i.strings.bookmarkRightPage + "</div></a>").appendTo(this.bookmark).bind("touchend click", function(e) {
            o.bookmarkPage(o.cPage[1], this), e.preventDefault(), e.stopPropagation()
        });
        this.search = y("<div>").addClass("flipbook-search").appendTo(this.thumbHolder).hide(), this.$searchBar = y('<div class="flipbook-findbar" id="findbar" deluminate_imagetype="png"><div id="findbarInputContainer"><input id="findInput" class="toolbarField" title="Find" placeholder="' + i.strings.findInDocument + '..."></div><div class="flipbook-find-info skin-color"/></div>').appendTo(this.search), this.$findInput = this.$searchBar.find("#findInput").keyup(function() {
            var i = this.value;
            if ("" != i) {
                var o = a.main,
                    e = o.pdfService,
                    n = o.options;
                if (a.hideAllThumbs(), a.pagesFound = 0, a.$findInfo.hide(), o.unmark(), o.searchingString = i, e)
                    for (var t = 0; t < e.pdfInfo.numPages; t++) e.findInPage(i, t, function(e, t, o) {
                        0 < e && (a.showThumb(o), a.pagesFound++, a.$findInfo.show().text(a.pagesFound + " " + n.strings.pagesFoundContaining + ' "' + i + '"'), a.main.mark(i))
                    });
                else
                    for (t = 0; t < n.pagesOriginal.length; t++) {
                        var s = t;
                        n.doublePage && (s *= 2), o.loadPageHTML(s, function(e, t) {
                            0 < e.innerText.toUpperCase().search(o.searchingString.toUpperCase()) && (n.doublePage && (t /= 2), a.showThumb(t), a.pagesFound++, a.$findInfo.show().text(a.pagesFound + " " + n.strings.pagesFoundContaining + ' "' + i + '"'), a.main.mark(i))
                        })
                    }
            }
        }), this.$findInfo = this.$searchBar.find(".flipbook-find-info"), this.thumbs = [];
        var t = i.pages,
            n = [];
        if (i.doublePage)
            for (var s = 0; s < t.length; s++) 0 != s && s % 2 == 0 || n.push(t[s]);
        else n = t;
        i.pdfMode && this.loadThumbsFromPdf(n);
        for (var r = i.thumbSize, l = i.thumbSize * i.pageWidth / i.pageHeight, s = 0; s < n.length; s++) {
            var d = n[s].thumb;
            if (!n[s].empty) {
                var h = y("<div>").addClass("flipbook-thumb").appendTo(a.thumbsScroller).attr("data-thumb-index", s).width(l).height(r),
                    p = y("<span>").appendTo(h).addClass("thumb-btn-close").bind("touchend click", function(e) {
                        e.stopPropagation(), e.preventDefault(), o.removeBookmark(y(this).parent().attr("data-thumb-index"))
                    });
                y("<span>").attr("aria-hidden", "true").appendTo(p).addClass("fa fa-times skin-color");
                if (this.thumbs.push(h), n[s].thumbCanvas) var c = y(n[s].thumbCanvas);
                else {
                    if (!d) continue;
                    (c = y("<img/>").attr("src", d))[0].onload = function() {
                        a.thumbScroll.refresh()
                    }
                }
                c.appendTo(h), y("<br/>").appendTo(h);
                var u = i.doublePage && i.pages.length % 2 == 0 && s == n.length - 1,
                    g = i.doublePage && 0 == s,
                    f = i.doublePage && !g && !u;
                u ? (c.height(r).width(l).attr("page-title", 2 * s), y(L.createElement("soan")).text(String(2 * s)).appendTo(h).addClass("skin-color").addClass("flipbook-thumb-num")) : f ? (h.width(2 * l), c.height(r).width(2 * l).attr("page-title", 2 * s + 1), y(L.createElement("soan")).text(String(2 * s) + "-" + String(2 * s + 1)).appendTo(h).addClass("skin-color").addClass("flipbook-thumb-num")) : (c.height(r).width(l).attr("page-title", s + 1), y(L.createElement("span")).text(s + 1).appendTo(h).addClass("skin-color").addClass("flipbook-thumb-num")), c.bind("touchend click", function(e) {
                    var t;
                    e.stopPropagation(), e.preventDefault(), a.thumbScroll.moved || (t = Number(y(this).attr("page-title")), i.rightToLeft && (t = i.pages.length - t + 1), setTimeout(function() {
                        o.goToPage(t)
                    }, 200), "search" != a.active && i.thumbsCloseOnClick && o.toggleThumbs(!1))
                })
            }
        }
        this.thumbScroll = new FLIPBOOK.IScroll(this.thumbsWrapper[0], {
            bounce: !1,
            mouseWheel: !0,
            scrollbars: !0,
            interactiveScrollbars: !0
        }), o.initColors()
    }, FLIPBOOK.Thumbnails.prototype = {
        loadThumbsFromPdf: function(e) {
            for (var t = this.main.pdfDocument._pdfInfo.numPages, o = 0; o < t; o++) {
                var i = L.createElement("canvas");
                e[o].thumbCanvas = i
            }
            this.loadThumbFromPdf(0, e)
        },
        loadVisibleThumbs: function() {},
        loadThumbFromPdf: function(e, r) {
            var l = this;
            this.main.pdfDocument.getPage(e + 1).then(function(e) {
                var t = e.getViewport({
                        scale: 1
                    }),
                    o = l.options.thumbSize / t.height,
                    i = e.getViewport({
                        scale: o
                    }),
                    n = r[e.pageIndex].thumbCanvas,
                    s = n.getContext("2d");
                n.height = i.height, n.width = i.width;
                var a = {
                    canvasContext: s,
                    viewport: i
                };
                e.cleanupAfterRender = !0, e.render(a).promise.then(function() {
                    e.cleanup(), e.pageIndex + 1 < l.main.pdfDocument._pdfInfo.numPages && l.loadThumbFromPdf(e.pageIndex + 1, r)
                }), l.thumbScroll.refresh()
            })
        },
        showAllThumbs: function() {
            y(".flipbook-thumb").show(), this.thumbScroll.refresh()
        },
        hideAllThumbs: function() {
            y(".flipbook-thumb").hide(), this.thumbScroll.refresh()
        },
        showThumb: function(e) {
            this.thumbs[e] && this.thumbs[e].show(), this.thumbScroll.refresh()
        },
        hideThumb: function(e) {
            this.thumbs[e].hide(), this.thumbScroll.refresh()
        },
        showBookmarks: function() {
            y(".thumb-btn-close").show(), this.showBookmarkedThumbs(), this.bookmark.show(), this.setTitle(this.options.strings.bookmarks), this.main.updateCurrentPage(), this.active = "bookmarks"
        },
        showSearch: function() {
            this.thumbsWrapper.css("top", "120px"), this.hideAllThumbs(), this.search.show(), this.$findInfo.hide(), y(".thumb-btn-close").hide(), this.setTitle(this.options.strings.search), this.$findInput.val("").focus(), this.active = "search"
        },
        showBookmarkedThumbs: function() {
            var e = this.main.getBookmarkedPages();
            this.hideAllThumbs();
            for (var t = 0; t < e.length; t++) {
                var o = e[t];
                o && this.showThumb(o)
            }
            this.thumbsWrapper.css("top", 50 + this.bookmark.height() + "px")
        },
        show: function() {
            this.setTitle(this.options.strings.thumbnails), this.bookmark.hide(), this.search.hide(), this.thumbHolder.show(), this.main.thumbsVertical(), this.thumbsWrapper.css("top", "50px"), this.showAllThumbs(), y(".thumb-btn-close").hide(), this.loadVisibleThumbs(), this.main.resize(), this.active = "thumbs"
        },
        hide: function() {
            this.thumbHolder.hide(), this.main.resize(), this.active = null
        },
        setTitle: function(e) {
            this.thumbHolder.find(".flipbook-menu-title").text(e)
        }
    }, FLIPBOOK.Lightbox = function(e, t, o) {
        var i = this;
        this.context = e, this.options = o, e.$elem.bind("tap click", function(e) {
            t.disposed || (i.openLightbox(), e.stopPropagation())
        });
        y(e.elem).find("img");
        i.overlay = y(L.createElement("div")).attr("style", o.lightboxCSS).addClass("flipbook-overlay").css("display", "none").css("top", i.options.lightboxMarginV).css("bottom", i.options.lightboxMarginV).css("left", i.options.lightboxMarginH).css("right", i.options.lightboxMarginH).appendTo("body"), i.options.lightboxCloseOnClick && y("body").bind("tap click", function(e) {
            var t = y(e.target);
            t.parents().hasClass("flipbook-overlay") && !t.hasClass("flipbook-bookLayer") || i.closeLightbox()
        }), o.lightboxBackground && i.overlay.css("background", o.lightboxBackground), o.lightboxBackgroundColor && i.overlay.css("background", o.lightboxBackgroundColor), o.lightboxBackgroundPattern && i.overlay.css("background", "url(" + o.lightboxBackgroundPattern + ") repeat"), o.lightboxBackgroundImage && (i.overlay.css("background", "url(" + o.lightboxBackgroundImage + ") no-repeat"), i.overlay.css("background-size", "cover"), i.overlay.css("background-position", "center center")), y(L).keyup(function(e) {
            27 == e.keyCode && i.closeLightbox()
        }), i.wrapper = y(L.createElement("div")).css("height", "auto").appendTo(i.overlay), i.wrapper.attr("class", "flipbook-wrapper-transparent").css("margin", "0px auto").css("padding", "0px").css("height", "100%").css("width", "100%"), t.appendTo(i.wrapper);
        y("<div/>").appendTo(i.wrapper).addClass("flipbook-lightbox-toolbar")
    }, FLIPBOOK.Lightbox.prototype = {
        openLightbox: function() {
            FLIPBOOK.lightboxOpened || (FLIPBOOK.lightboxOpened = !0, this.overlay.css("display", "none"), this.overlay.fadeIn("slow"), y("body").addClass("flipbook-overflow-hidden"), y("html").addClass("flipbook-overflow-hidden"), y(M).trigger("r3d-lightboxopen"), this.options.deeplinkingEnabled || M.history.pushState(null, "", M.location.href), this.context.options.password && !this.context.pdfinitStarted && this.context.initialized && this.context.initPdf())
        },
        closeLightbox: function(e) {
            FLIPBOOK.lightboxOpened = !1, this.overlay.fadeOut("fast"), y("body").removeClass("flipbook-overflow-hidden"), y("html").removeClass("flipbook-overflow-hidden"), y(M).trigger("r3d-lightboxclose"), y(this.context.fullscreenElement).removeClass("flipbook-browser-fullscreen"), this.context.lightboxEnd(), e || this.options.deeplinkingEnabled || history.back()
        },
        resize: function() {
            var e = y(M);
            e.width(), e.height()
        }
    }, FLIPBOOK.getFlipbookSrc = function() {
        for (var e = L.getElementsByTagName("script"), t = 0; t < e.length; t++) {
            var o = String(e[t].src);
            if (o.match("flipbook\\.js") || o.match("flipbook\\.min\\.js")) return o;
            if (o.match("flipbook\\.lite\\.js") || o.match("flipbook\\.lite\\.min\\.js")) return o.replace(".lite", "")
        }
        return ""
    }, FLIPBOOK.flipbookSrc = FLIPBOOK.getFlipbookSrc(), FLIPBOOK.iscrollSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", "/iscroll."), FLIPBOOK.threejsSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", "/three."), FLIPBOOK.flipbookWebGlSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", "/flipbook.webgl."), FLIPBOOK.flipbookBook3Src = FLIPBOOK.flipbookSrc.replace("/flipbook.", "/flipbook.book3."), FLIPBOOK.flipBookSwipeSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", "/flipbook.swipe."), FLIPBOOK.pdfjsSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", "/pdf."), FLIPBOOK.pdfServiceSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", "/flipbook.pdfservice."), FLIPBOOK.pdfjsworkerSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", "/pdf.worker."), FLIPBOOK.markSrc = "https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/jquery.mark.js", FLIPBOOK.scriptsLoaded = {}, FLIPBOOK.scriptsAdded = {}
}(jQuery, window, document), FLIPBOOK.onPageLinkClick = function(e) {
        var t = e.dataset.bookid,
            o = e.dataset.page;
        o && FLIPBOOK.books[t].goToPage(Number(o));
        var i = e.dataset.url;
        i && window.open(i, "_blank")
    },
    function() {
        "use strict";
        var s = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
            e = "undefined" != typeof module && module.exports,
            n = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
            a = function() {
                for (var e, t = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], o = 0, i = t.length, n = {}; o < i; o++)
                    if ((e = t[o]) && e[1] in s) {
                        for (o = 0; o < e.length; o++) n[t[0][o]] = e[o];
                        return n
                    } return !1
            }(),
            i = {
                change: a.fullscreenchange,
                error: a.fullscreenerror
            },
            t = {
                request: function(i) {
                    return new Promise(function(e) {
                        var t = a.requestFullscreen,
                            o = function() {
                                this.off("change", o), e()
                            }.bind(this);
                        i = i || s.documentElement, / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? i[t]() : i[t](n ? Element.ALLOW_KEYBOARD_INPUT : {}), this.on("change", o)
                    }.bind(this))
                },
                exit: function() {
                    return new Promise(function(e) {
                        var t = function() {
                            this.off("change", t), e()
                        }.bind(this);
                        s[a.exitFullscreen](), this.on("change", t)
                    }.bind(this))
                },
                toggle: function(e) {
                    return this.isFullscreen ? this.exit() : this.request(e)
                },
                onchange: function(e) {
                    this.on("change", e)
                },
                onerror: function(e) {
                    this.on("error", e)
                },
                on: function(e, t) {
                    var o = i[e];
                    o && s.addEventListener(o, t, !1)
                },
                off: function(e, t) {
                    var o = i[e];
                    o && s.removeEventListener(o, t, !1)
                },
                raw: a
            };
        a ? (Object.defineProperties(t, {
            isFullscreen: {
                get: function() {
                    return Boolean(s[a.fullscreenElement])
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    return s[a.fullscreenElement]
                }
            },
            enabled: {
                enumerable: !0,
                get: function() {
                    return Boolean(s[a.fullscreenEnabled])
                }
            }
        }), e ? module.exports = t : window.screenfull = t) : e ? module.exports = !1 : window.screenfull = !1
    }(),
    function(e) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
    }(function(re) {
        "use strict";

        function i(e, f) {
            function t(e) {
                if (!(!0 === G.data(Fe + "_intouch") || 0 < re(e.target).closest(f.excludedElements, G).length)) {
                    var t = e.originalEvent ? e.originalEvent : e;
                    if (!t.pointerType || "mouse" != t.pointerType || 0 != f.fallbackToMouseEvents) {
                        var o, i = t.touches,
                            n = i ? i[0] : t;
                        return Y = Oe, i ? X = i.length : !1 !== f.preventDefaultEvents && e.preventDefault(), Z = j = N = null, $ = 1, q = U = V = W = R = 0, (s = {})[le] = L(le), s[de] = L(de), s[he] = L(he), s[pe] = L(pe), Q = s, B(), T(0, n), !i || X === f.fingers || f.fingers === Be || k() ? (ee = z(), 2 == X && (T(1, i[1]), V = U = I(J[0].start, J[1].start)), (f.swipeStatus || f.pinchStatus) && (o = m(t, Y))) : o = !1, !1 === o ? (m(t, Y = Me), o) : (f.hold && (ae = setTimeout(re.proxy(function() {
                            G.trigger("hold", [t.target]), f.hold && (o = f.hold.call(G, t, t.target))
                        }, this), f.longTapThreshold)), O(!0), null)
                    }
                }
                var s
            }

            function o(e) {
                var t, o, i, n, s, a, r, l, d, h, p, c, u, g = e.originalEvent ? e.originalEvent : e;
                Y === ye || Y === Me || x() || (i = y((o = g.touches) ? o[0] : g), te = z(), o && (X = o.length), f.hold && clearTimeout(ae), Y = Te, 2 == X && (0 == V ? (T(1, o[1]), V = U = I(J[0].start, J[1].start)) : (y(o[1]), U = I(J[0].end, J[1].end), J[0].end, J[1].end, Z = $ < 1 ? ue : ce), $ = (U / V * 1).toFixed(2), q = Math.abs(V - U)), X === f.fingers || f.fingers === Be || !o || k() ? (N = F(i.start, i.end), function(e, t) {
                    if (!1 !== f.preventDefaultEvents)
                        if (f.allowPageScroll === ge) e.preventDefault();
                        else {
                            var o = f.allowPageScroll === fe;
                            switch (t) {
                                case le:
                                    (f.swipeLeft && o || !o && f.allowPageScroll != Pe) && e.preventDefault();
                                    break;
                                case de:
                                    (f.swipeRight && o || !o && f.allowPageScroll != Pe) && e.preventDefault();
                                    break;
                                case he:
                                    (f.swipeUp && o || !o && f.allowPageScroll != Se) && e.preventDefault();
                                    break;
                                case pe:
                                    (f.swipeDown && o || !o && f.allowPageScroll != Se) && e.preventDefault()
                            }
                        }
                }(e, j = F(i.last, i.end)), c = i.start, u = i.end, R = Math.round(Math.sqrt(Math.pow(u.x - c.x, 2) + Math.pow(u.y - c.y, 2))), W = C(), p = R, (h = N) != ge && (p = Math.max(p, M(h)), Q[h].distance = p), t = m(g, Y), f.triggerOnTouchEnd && !f.triggerOnTouchLeave || (n = !0, f.triggerOnTouchLeave && (s = {
                    left: (d = (l = re(l = this)).offset()).left,
                    right: d.left + l.outerWidth(),
                    top: d.top,
                    bottom: d.top + l.outerHeight()
                }, a = i.end, r = s, n = a.x > r.left && a.x < r.right && a.y > r.top && a.y < r.bottom), !f.triggerOnTouchEnd && n ? Y = b(Te) : f.triggerOnTouchLeave && !n && (Y = b(ye)), Y != Me && Y != ye || m(g, Y))) : m(g, Y = Me), !1 === t && m(g, Y = Me))
            }

            function i(e) {
                var t, o = e.originalEvent ? e.originalEvent : e,
                    i = o.touches;
                if (i) {
                    if (i.length && !x()) return t = o, oe = z(), ie = t.touches.length + 1, !0;
                    if (i.length && x()) return !0
                }
                return x() && (X = ie), te = z(), W = C(), d() || !l() ? m(o, Y = Me) : f.triggerOnTouchEnd || !1 === f.triggerOnTouchEnd && Y === Te ? (!1 !== f.preventDefaultEvents && !1 !== e.cancelable && e.preventDefault(), m(o, Y = ye)) : !f.triggerOnTouchEnd && w() ? r(o, Y = ye, ke) : Y === Te && m(o, Y = Me), O(!1), null
            }

            function n() {
                U = V = ee = te = X = 0, B(), O(!($ = 1))
            }

            function s(e) {
                var t = e.originalEvent ? e.originalEvent : e;
                f.triggerOnTouchLeave && m(t, Y = b(ye))
            }

            function a() {
                G.unbind(A, t), G.unbind(H, n), G.unbind(_, o), G.unbind(D, i), K && G.unbind(K, s), O(!1)
            }

            function b(e) {
                var t = e,
                    o = h(),
                    i = l(),
                    n = d();
                return !o || n ? t = Me : !i || e != Te || f.triggerOnTouchEnd && !f.triggerOnTouchLeave ? !i && e == ye && f.triggerOnTouchLeave && (t = Me) : t = ye, t
            }

            function m(e, t) {
                var o, i = e.touches;
                return (c() && u() || u()) && (o = r(e, t, be)), (p() && k() || k()) && !1 !== o && (o = r(e, t, me)), S() && P() && !1 !== o ? o = r(e, t, ve) : W > f.longTapThreshold && R < xe && f.longTap && !1 !== o ? o = r(e, t, we) : 1 !== X && Le || !(isNaN(R) || R < f.threshold) || !w() || !1 === o || (o = r(e, t, ke)), t === Me && n(), t === ye && (i && i.length || n()), o
            }

            function r(e, t, o) {
                var i;
                if (o == be) {
                    if (G.trigger("swipeStatus", [t, N || null, R || 0, W || 0, X, J, j]), f.swipeStatus && !1 === (i = f.swipeStatus.call(G, e, t, N || null, R || 0, W || 0, X, J, j))) return !1;
                    if (t == ye && c()) {
                        if (clearTimeout(se), clearTimeout(ae), G.trigger("swipe", [N, R, W, X, J, j]), f.swipe && !1 === (i = f.swipe.call(G, e, N, R, W, X, J, j))) return !1;
                        switch (N) {
                            case le:
                                G.trigger("swipeLeft", [N, R, W, X, J, j]), f.swipeLeft && (i = f.swipeLeft.call(G, e, N, R, W, X, J, j));
                                break;
                            case de:
                                G.trigger("swipeRight", [N, R, W, X, J, j]), f.swipeRight && (i = f.swipeRight.call(G, e, N, R, W, X, J, j));
                                break;
                            case he:
                                G.trigger("swipeUp", [N, R, W, X, J, j]), f.swipeUp && (i = f.swipeUp.call(G, e, N, R, W, X, J, j));
                                break;
                            case pe:
                                G.trigger("swipeDown", [N, R, W, X, J, j]), f.swipeDown && (i = f.swipeDown.call(G, e, N, R, W, X, J, j))
                        }
                    }
                }
                if (o == me) {
                    if (G.trigger("pinchStatus", [t, Z || null, q || 0, W || 0, X, $, J]), f.pinchStatus && !1 === (i = f.pinchStatus.call(G, e, t, Z || null, q || 0, W || 0, X, $, J))) return !1;
                    if (t == ye && p()) switch (Z) {
                        case ce:
                            G.trigger("pinchIn", [Z || null, q || 0, W || 0, X, $, J]), f.pinchIn && (i = f.pinchIn.call(G, e, Z || null, q || 0, W || 0, X, $, J));
                            break;
                        case ue:
                            G.trigger("pinchOut", [Z || null, q || 0, W || 0, X, $, J]), f.pinchOut && (i = f.pinchOut.call(G, e, Z || null, q || 0, W || 0, X, $, J))
                    }
                }
                return o == ke ? t !== Me && t !== ye || (clearTimeout(se), clearTimeout(ae), P() && !S() ? (ne = z(), se = setTimeout(re.proxy(function() {
                    ne = null, G.trigger("tap", [e.target]), f.tap && (i = f.tap.call(G, e, e.target))
                }, this), f.doubleTapThreshold)) : (ne = null, G.trigger("tap", [e.target]), f.tap && (i = f.tap.call(G, e, e.target)))) : o == ve ? t !== Me && t !== ye || (clearTimeout(se), clearTimeout(ae), ne = null, G.trigger("doubletap", [e.target]), f.doubleTap && (i = f.doubleTap.call(G, e, e.target))) : o == we && (t !== Me && t !== ye || (clearTimeout(se), ne = null, G.trigger("longtap", [e.target]), f.longTap && (i = f.longTap.call(G, e, e.target)))), i
            }

            function l() {
                var e = !0;
                return null !== f.threshold && (e = R >= f.threshold), e
            }

            function d() {
                var e = !1;
                return null !== f.cancelThreshold && null !== N && (e = M(N) - R >= f.cancelThreshold), e
            }

            function h() {
                return !(f.maxTimeThreshold && W >= f.maxTimeThreshold)
            }

            function p() {
                var e = g(),
                    t = v(),
                    o = null === f.pinchThreshold || q >= f.pinchThreshold;
                return e && t && o
            }

            function k() {
                return f.pinchStatus || f.pinchIn || f.pinchOut
            }

            function c() {
                var e = h(),
                    t = l(),
                    o = g(),
                    i = v();
                return !d() && i && o && t && e
            }

            function u() {
                return f.swipe || f.swipeStatus || f.swipeLeft || f.swipeRight || f.swipeUp || f.swipeDown
            }

            function g() {
                return X === f.fingers || f.fingers === Be || !Le
            }

            function v() {
                return 0 !== J[0].end.x
            }

            function w() {
                return f.tap
            }

            function P() {
                return !!f.doubleTap
            }

            function S() {
                if (null == ne) return !1;
                var e = z();
                return P() && e - ne <= f.doubleTapThreshold
            }

            function B() {
                ie = oe = 0
            }

            function x() {
                var e = !1;
                return oe && z() - oe <= f.fingerReleaseThreshold && (e = !0), e
            }

            function O(e) {
                G && (!0 === e ? (G.bind(_, o), G.bind(D, i), K && G.bind(K, s)) : (G.unbind(_, o, !1), G.unbind(D, i, !1), K && G.unbind(K, s, !1)), G.data(Fe + "_intouch", !0 === e))
            }

            function T(e, t) {
                var o = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                };
                return o.start.x = o.last.x = o.end.x = t.pageX || t.clientX, o.start.y = o.last.y = o.end.y = t.pageY || t.clientY, J[e] = o
            }

            function y(e) {
                var t = void 0 !== e.identifier ? e.identifier : 0,
                    o = J[t] || null;
                return null === o && (o = T(t, e)), o.last.x = o.end.x, o.last.y = o.end.y, o.end.x = e.pageX || e.clientX, o.end.y = e.pageY || e.clientY, o
            }

            function M(e) {
                if (Q[e]) return Q[e].distance
            }

            function L(e) {
                return {
                    direction: e,
                    distance: 0
                }
            }

            function C() {
                return te - ee
            }

            function I(e, t) {
                var o = Math.abs(e.x - t.x),
                    i = Math.abs(e.y - t.y);
                return Math.round(Math.sqrt(o * o + i * i))
            }

            function F(e, t) {
                if (i = t, (o = e).x == i.x && o.y == i.y) return ge;
                var o, i, n, s, a, r, l, d, h = (s = t, a = (n = e).x - s.x, r = s.y - n.y, l = Math.atan2(r, a), (d = Math.round(180 * l / Math.PI)) < 0 && (d = 360 - Math.abs(d)), d);
                return h <= 45 && 0 <= h || h <= 360 && 315 <= h ? le : 135 <= h && h <= 225 ? de : 45 < h && h < 135 ? pe : he
            }

            function z() {
                return (new Date).getTime()
            }
            var f = re.extend({}, f),
                E = Le || Ie || !f.fallbackToMouseEvents,
                A = E ? Ie ? Ce ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                _ = E ? Ie ? Ce ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                D = E ? Ie ? Ce ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                K = !E || Ie ? "mouseleave" : null,
                H = Ie ? Ce ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                R = 0,
                N = null,
                j = null,
                W = 0,
                V = 0,
                U = 0,
                $ = 1,
                q = 0,
                Z = 0,
                Q = null,
                G = re(e),
                Y = "start",
                X = 0,
                J = {},
                ee = 0,
                te = 0,
                oe = 0,
                ie = 0,
                ne = 0,
                se = null,
                ae = null;
            try {
                G.bind(A, t), G.bind(H, n)
            } catch (e) {
                re.error("events not supported " + A + "," + H + " on jQuery.swipe")
            }
            this.enable = function() {
                return this.disable(), G.bind(A, t), G.bind(H, n), G
            }, this.disable = function() {
                return a(), G
            }, this.destroy = function() {
                a(), G.data(Fe, null), G = null
            }, this.option = function(e, t) {
                if ("object" == typeof e) f = re.extend(f, e);
                else if (void 0 !== f[e]) {
                    if (void 0 === t) return f[e];
                    f[e] = t
                } else {
                    if (!e) return f;
                    re.error("Option " + e + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        var le = "left",
            de = "right",
            he = "up",
            pe = "down",
            ce = "in",
            ue = "out",
            ge = "none",
            fe = "auto",
            be = "swipe",
            me = "pinch",
            ke = "tap",
            ve = "doubletap",
            we = "longtap",
            Pe = "horizontal",
            Se = "vertical",
            Be = "all",
            xe = 10,
            Oe = "start",
            Te = "move",
            ye = "end",
            Me = "cancel",
            Le = "ontouchstart" in window,
            Ce = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !Le,
            Ie = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !Le,
            Fe = "TouchSwipe";
        re.fn.swipe = function(e) {
            var t = re(this),
                o = t.data(Fe);
            if (o && "string" == typeof e) {
                if (o[e]) return o[e].apply(o, Array.prototype.slice.call(arguments, 1));
                re.error("Method " + e + " does not exist on jQuery.swipe")
            } else if (o && "object" == typeof e) o.option.apply(o, arguments);
            else if (!(o || "object" != typeof e && e)) return function(o) {
                return !o || void 0 !== o.allowPageScroll || void 0 === o.swipe && void 0 === o.swipeStatus || (o.allowPageScroll = ge), void 0 !== o.click && void 0 === o.tap && (o.tap = o.click), o = o || {}, o = re.extend({}, re.fn.swipe.defaults, o), this.each(function() {
                    var e = re(this),
                        t = e.data(Fe);
                    t || (t = new i(this, o), e.data(Fe, t))
                })
            }.apply(this, arguments);
            return t
        }, re.fn.swipe.version = "1.6.18", re.fn.swipe.defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: ".noSwipe",
            preventDefaultEvents: !0
        }, re.fn.swipe.phases = {
            PHASE_START: Oe,
            PHASE_MOVE: Te,
            PHASE_END: ye,
            PHASE_CANCEL: Me
        }, re.fn.swipe.directions = {
            LEFT: le,
            RIGHT: de,
            UP: he,
            DOWN: pe,
            IN: ce,
            OUT: ue
        }, re.fn.swipe.pageScroll = {
            NONE: ge,
            HORIZONTAL: Pe,
            VERTICAL: Se,
            AUTO: fe
        }, re.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            FOUR: 4,
            FIVE: 5,
            ALL: Be
        }
    }),
    function(e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Share = e()
    }(function() {
        function e() {}
        "classList" in document.documentElement || !Object.defineProperty || "undefined" == typeof HTMLElement || Object.defineProperty(HTMLElement.prototype, "classList", {
            get: function() {
                function e(i) {
                    return function(e) {
                        var t = n.className.split(/\s+/),
                            o = t.indexOf(e);
                        i(t, o, e), n.className = t.join(" ")
                    }
                }
                var n = this,
                    t = {
                        add: e(function(e, t, o) {
                            ~t || e.push(o)
                        }),
                        remove: e(function(e, t) {
                            ~t && e.splice(t, 1)
                        }),
                        toggle: e(function(e, t, o) {
                            ~t ? e.splice(t, 1) : e.push(o)
                        }),
                        contains: function(e) {
                            return !!~n.className.split(/\s+/).indexOf(e)
                        },
                        item: function(e) {
                            return n.className.split(/\s+/)[e] || null
                        }
                    };
                return Object.defineProperty(t, "length", {
                    get: function() {
                        return n.className.split(/\s+/).length
                    }
                }), t
            }
        }), String.prototype.to_rfc3986 = function() {
            return encodeURIComponent(this).replace(/[!'()*]/g, function(e) {
                return "%" + e.charCodeAt(0).toString(16)
            })
        }, e.prototype.extend = function(e, t, o) {
            var i, n;
            for (n in t)(i = void 0 !== e[n]) && "object" == typeof t[n] ? this.extend(e[n], t[n], o) : !o && i || (e[n] = t[n])
        }, e.prototype.hide = function(e) {
            return e.style.display = "none"
        }, e.prototype.show = function(e) {
            return e.style.display = "block"
        }, e.prototype.has_class = function(e, t) {
            return e.classList.contains(t)
        }, e.prototype.add_class = function(e, t) {
            return e.classList.add(t)
        }, e.prototype.remove_class = function(e, t) {
            return e.classList.remove(t)
        }, e.prototype.is_encoded = function(e) {
            return e = e.to_rfc3986(), decodeURIComponent(e) !== e
        }, e.prototype.encode = function(e) {
            return void 0 === e || this.is_encoded(e) ? e : e.to_rfc3986()
        }, e.prototype.popup = function(e, t) {
            var o, i, n, s;
            return null == t && (t = {}), (i = {
                width: 500,
                height: 350
            }).top = screen.height / 2 - i.height / 2, i.left = screen.width / 2 - i.width / 2, n = (n = function() {
                var e = [];
                for (o in t) s = t[o], e.push(o + "=" + this.encode(s));
                return e
            }.call(this).join("&")) && "?" + n, window.open(e + n, "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=" + i.left + ",top=" + i.top + ",width=" + i.width + ",height=" + i.height)
        };
        var n = {}.hasOwnProperty;
        return function(e, t) {
            function o() {
                this.constructor = e
            }
            for (var i in t) n.call(t, i) && (e[i] = t[i]);
            o.prototype = t.prototype, e.prototype = new o, e.__super__ = t.prototype
        }(t, e), t.prototype.setup = function(e, t) {
            var o, i, n, s = [e];
            for (this.extend(this.config, t, !0), this.set_global_configuration(), this.normalize_network_configuration(), this.config.networks.facebook.enabled && this.config.networks.facebook.load_sdk && this.inject_facebook_sdk(), i = o = 0, n = s.length; o < n; i = ++o) this.setup_instance(e, i)
        }, t.prototype.setup_instance = function(e, t) {
            var o, i, n, s, a, r, l, d, h = e;
            for (this.add_class(h, "sharer-" + t), this.inject_html(h), document.getElementById("flipbook-share-facebook").style.display = this.config.networks.facebook.display, document.getElementById("flipbook-share-twitter").style.display = this.config.networks.twitter.display, document.getElementById("flipbook-share-pinterest").style.display = this.config.networks.pinterest.display, document.getElementById("flipbook-share-email").style.display = this.config.networks.email.display, h.getElementsByTagName("label")[0], i = h.getElementsByClassName("social")[0], r = h.getElementsByTagName("li"), this.add_class(i, "networks-" + this.config.enabled_networks), h.addEventListener("click", (d = this, function() {
                    return d.event_toggle(i)
                })), o = this, l = [], t = n = 0, s = r.length; n < s; t = ++n) a = r[t], l.push(a.addEventListener("click", function() {
                return o.event_network(h, this), o.event_close(i)
            }));
            return l
        }, t.prototype.event_toggle = function(e) {
            return this.has_class(e, "active") ? this.event_close(e) : this.event_open(e)
        }, t.prototype.event_open = function(e) {
            return this.has_class(e, "load") && this.remove_class(e, "load"), this.add_class(e, "active")
        }, t.prototype.event_close = function(e) {
            return this.remove_class(e, "active")
        }, t.prototype.event_network = function(e, t) {
            var o = t.getAttribute("data-network");
            return this.hook("before", o, e), this["network_" + o](), this.hook("after", o, e)
        }, t.prototype.open = function() {
            return this.public("open")
        }, t.prototype.close = function() {
            return this.public("close")
        }, t.prototype.toggle = function() {
            return this.public("toggle")
        }, t.prototype.public = function(e) {
            for (var t, o, i = document.querySelectorAll(this.element), n = [], s = o = 0, a = i.length; o < a; s = ++o) t = i[s].getElementsByClassName("social")[0], n.push(this["event_" + e](t));
            return n
        }, t.prototype.network_facebook = function() {
            return this.config.networks.facebook.load_sdk ? window.FB ? FB.ui({
                method: "feed",
                name: this.config.networks.facebook.title,
                link: this.config.networks.facebook.url,
                picture: this.config.networks.facebook.image,
                caption: this.config.networks.facebook.caption,
                description: this.config.networks.facebook.description
            }) : console.error("The Facebook JS SDK hasn't loaded yet.") : this.popup("https://www.facebook.com/sharer/sharer.php", {
                u: this.config.networks.facebook.url
            })
        }, t.prototype.network_twitter = function() {
            return this.popup("https://twitter.com/intent/tweet", {
                text: this.config.networks.twitter.description,
                url: this.config.networks.twitter.url
            })
        }, t.prototype.network_google_plus = function() {
            return this.popup("https://plus.google.com/share", {
                url: this.config.networks.google_plus.url
            })
        }, t.prototype.network_pinterest = function() {
            return this.popup("https://www.pinterest.com/pin/create/button", {
                url: this.config.networks.pinterest.url,
                media: this.config.networks.pinterest.image,
                description: this.config.networks.pinterest.description
            })
        }, t.prototype.network_email = function() {
            return this.popup("mailto:", {
                subject: this.config.networks.email.title,
                body: this.config.networks.email.description + "%0D%0A" + this.config.networks.email.url || this.config.url
            })
        }, t.prototype.inject_stylesheet = function(e) {
            var t;
            return this.el.head.querySelector('link[href="' + e + '"]') ? void 0 : ((t = document.createElement("link")).setAttribute("rel", "stylesheet"), t.setAttribute("href", e), this.el.head.appendChild(t))
        }, t.prototype.inject_html = function(e) {
            return e.innerHTML = "<div class='social load " + this.config.ui.flyout + "'><ul><li id='flipbook-share-pinterest' data-network='pinterest'><i class='fab fa-pinterest-p skin-color'></i></li><li id='flipbook-share-twitter' data-network='twitter'><i class='fab fa-twitter skin-color'></i></li><li id='flipbook-share-facebook' data-network='facebook'><i class='fab fa-facebook-f skin-color'></i></li><li id='flipbook-share-email' data-network='email'><i class='fas fa-at skin-color'></i></li></ul></div>"
        }, t.prototype.inject_facebook_sdk = function() {
            var e, t;
            return window.FB || !this.config.networks.facebook.app_id || this.el.body.querySelector("#fb-root") ? void 0 : ((t = document.createElement("script")).text = "window.fbAsyncInit=function(){FB.init({appId:'" + this.config.networks.facebook.app_id + "',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='" + this.config.protocol + "connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')", (e = document.createElement("div")).id = "fb-root", this.el.body.appendChild(e), this.el.body.appendChild(t))
        }, t.prototype.hook = function(e, t, o) {
            var i, n = this.config.networks[t][e];
            "function" != typeof n || void 0 !== (i = n.call(this.config.networks[t], o)) && (i = this.normalize_filter_config_updates(i), this.extend(this.config.networks[t], i, !0), this.normalize_network_configuration())
        }, t.prototype.default_title = function() {
            var e;
            return (e = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) ? e.getAttribute("content") : (e = document.querySelector("title")) ? e.innerText : void 0
        }, t.prototype.default_image = function() {
            var e;
            return (e = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) ? e.getAttribute("content") : void 0
        }, t.prototype.default_description = function() {
            var e;
            return (e = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) ? e.getAttribute("content") : ""
        }, t.prototype.set_global_configuration = function() {
            var e, t, o, i = this.config.networks,
                n = [];
            for (t in i) {
                for (o in i[t]) null == this.config.networks[t][o] && (this.config.networks[t][o] = this.config[o]);
                this.config.networks[t].enabled ? (e = "block", this.config.enabled_networks += 1) : e = "none", n.push(this.config.networks[t].display = e)
            }
            return n
        }, t.prototype.normalize_network_configuration = function() {
            return this.config.networks.facebook.app_id || (this.config.networks.facebook.load_sdk = !1), this.is_encoded(this.config.networks.twitter.description) || (this.config.networks.twitter.description = encodeURIComponent(this.config.networks.twitter.description)), "number" == typeof this.config.networks.facebook.app_id ? this.config.networks.facebook.app_id = this.config.networks.facebook.app_id.toString() : void 0
        }, t.prototype.normalize_filter_config_updates = function(e) {
            return this.config.networks.facebook.app_id !== e.app_id && (console.warn("You are unable to change the Facebook app_id after the button has been initialized. Please update your Facebook filters accordingly."), delete e.app_id), this.config.networks.facebook.load_sdk !== e.load_sdk && (console.warn("You are unable to change the Facebook load_sdk option after the button has been initialized. Please update your Facebook filters accordingly."), delete e.app_id), e
        }, t;

        function t(e, t) {
            return this.element = e, this.el = {
                head: document.getElementsByTagName("head")[0],
                body: document.getElementsByTagName("body")[0]
            }, this.config = {
                enabled_networks: 0,
                protocol: -1 === ["http", "https"].indexOf(window.location.href.split(":")[0]) ? "https://" : "//",
                url: window.location.href,
                caption: null,
                title: this.default_title(),
                image: this.default_image(),
                description: this.default_description(),
                ui: {
                    flyout: "top center",
                    button_text: "Share",
                    button_font: !0,
                    icon_font: !0
                },
                networks: {
                    twitter: {
                        enabled: !0,
                        url: null,
                        description: null
                    },
                    facebook: {
                        enabled: !0,
                        load_sdk: !0,
                        url: null,
                        app_id: null,
                        title: null,
                        caption: null,
                        description: null,
                        image: null
                    },
                    pinterest: {
                        enabled: !0,
                        url: null,
                        image: null,
                        description: null
                    },
                    email: {
                        enabled: !0,
                        title: null,
                        description: null,
                        url: null
                    }
                }
            }, this.setup(this.element, t), this
        }
    });