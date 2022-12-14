/* v 3.17
author http://codecanyon.net/user/creativeinteractivemedia/portfolio?ref=creativeinteractivemedia
*/
var FLIPBOOK = FLIPBOOK || {};
FLIPBOOK.BookSwipe = function(e, i, t, s) {
    this.options = s, this.singlePage = s.singlePageMode, this.singlePage && (this.view = 1), this.pageWidth = this.options.pageWidth, this.pageHeight = this.options.pageHeight, this.slides = [], this.pagesArr = [], this.leftPage = 0, this.rightPage = 0, this.rotation = 0, this.prevPageEnabled = !1, this.setRightIndex(s.rightToLeft ? s.pages.length : 0), this.currentSlide = 0, this.flipping = !1, this.wrapper = i, this.$wrapper = jQuery(i), this.scroller = e, this.$scroller = jQuery(this.scroller).removeClass("book").addClass("flipbook-carousel-scroller"), this.iscroll = new IScroll(this.wrapper, {
        snap: !0,
        snapSpeed: 200 * this.options.pageFlipDuration,
        freeScroll: !0,
        scrollX: !0,
        scrollY: !1,
        preventDefault: !1,
        eventPassthrough: "vertical"
    });
    for (var o = 0; o < 3; o++) {
        var h = jQuery('<div class="flipbook-carousel-slide"><div class="slide-inner"/></div>"').appendTo(this.$scroller);
        this.slides.push(h)
    }
    this.slides[0].iscroll = new IScroll(this.slides[0][0], {
        zoom: !0,
        scrollX: !0,
        scrollY: !0,
        freeScroll: !0,
        keepInCenterV: !0,
        keepInCenterH: !0,
        preventDefault: !1
    }), this.slides[2].iscroll = new IScroll(this.slides[2][0], {
        zoom: !0,
        scrollX: !0,
        scrollY: !0,
        freeScroll: !0,
        keepInCenterV: !0,
        keepInCenterH: !0,
        preventDefault: !1
    }), this.slides[1].iscroll = new IScroll(this.slides[1][0], {
        zoom: !0,
        scrollX: !0,
        scrollY: !0,
        freeScroll: !0,
        keepInCenterV: !0,
        keepInCenterH: !0,
        preventDefault: !1
    });
    for (var n, o = 0; o < 3; o++) this.slides[o].iscroll.on("zoomEnd", function() {
        var e = s.main.zoom;
        this.options.eventPassthrough = 1 < e ? "" : "vertical", this.options.freeScroll = 1 < e, this.refresh()
    });
    this.resizeInnerSlides();
    s.rightToLeft, s.numPages, s.pdfMode;
    for (o = 0; o < s.numPages; o++) n = new FLIPBOOK.PageSwipe(t, s, o, s.pages[o].src, s.pages[o].htmlContent), this.pagesArr.push(n), s.loadAllPages && n.load();
    var r = this;
    this.iscroll.on("scrollStart", function() {}), this.iscroll.on("scrollEnd", function() {
        var e = this.currentPage.pageX;
        r.currentSlide != e && (r.singlePage ? e > r.currentSlide ? r.setRightIndex(r.rightIndex + 1) : e < r.currentSlide && r.setRightIndex(r.rightIndex - 1) : e > r.currentSlide ? r.setRightIndex(r.rightIndex + 2) : e < r.currentSlide && r.setRightIndex(r.rightIndex - 2), r.currentSlide = e, r.updateVisiblePages(), r.flipping = !1)
    }), this.flipEnabled = !0, this.nextEnabled = !0, this.prevEnabled = !0, t.on("toolMove", function() {
        r.updateTool()
    }), t.on("toolSelect", function() {
        r.updateTool()
    }), t.on("pageLoaded", function(e) {})
}, FLIPBOOK.BookSwipe.prototype = Object.create(FLIPBOOK.Book.prototype), FLIPBOOK.BookSwipe.prototype.constructor = FLIPBOOK.BookSwipe, FLIPBOOK.BookSwipe.prototype.goToPage = function(e, i) {
    if (this.enabled && this.flipEnabled) {
        if (e > this.options.pages.length && (e = this.options.pages.length), !this.singlePage && e % 2 == 0 || e--, (isNaN(e) || e < 0) && (e = 0), this.resetZoom(), i) return this.setRightIndex(e), void this.updateVisiblePages();
        this.singlePage ? (this.options.rightToLeft && this.options.oddPages && e < 1 && (e = 1), e > this.rightIndex ? (this.setSlidePages(this.currentSlide + 1, [e]), this.setRightIndex(e - 1), this.nextPage(i)) : e < this.rightIndex && (this.setSlidePages(this.currentSlide - 1, [e]), this.setRightIndex(e + 1), this.prevPage(i))) : (this.options.rightToLeft && this.options.oddPages && e < 2 && (e = 2), e > this.rightIndex ? e >= this.pagesArr.length ? (this.setSlidePages(2, [e - 1, e]), this.setRightIndex(e - 2), this.goToSlide(2, i)) : (this.setSlidePages(this.currentSlide + 1, [e - 1, e]), this.setRightIndex(e - 2), this.nextPage(i)) : e < this.rightIndex && (0 == e ? (this.setRightIndex(e + 2), this.setSlidePages(0, [e]), this.goToSlide(0, i)) : (this.setRightIndex(e + 2), this.setSlidePages(this.currentSlide - 1, [e - 1, e]), this.prevPage(i))))
    }
}, FLIPBOOK.BookSwipe.prototype.setRightIndex = function(e) {
    this.rightIndex = e
}, FLIPBOOK.BookSwipe.prototype.nextPage = function(e) {
    2 != this.currentSlide && (this.flipping = !0, this.goToSlide(this.currentSlide + 1, e))
}, FLIPBOOK.BookSwipe.prototype.prevPage = function(e) {
    0 != this.currentSlide && (this.flipping = !0, this.goToSlide(this.currentSlide - 1, e))
}, FLIPBOOK.BookSwipe.prototype.enablePrev = function(e) {
    this.prevEnabled = e
}, FLIPBOOK.BookSwipe.prototype.enableNext = function(e) {
    this.nextEnabled = e
}, FLIPBOOK.BookSwipe.prototype.resetZoom = function() {}, FLIPBOOK.BookSwipe.prototype.setSlidePages = function(e, i) {
    for (var t = [], s = 0; s < i.length; s++) i[s] && t.push(i[s].index);
    if (!this.slides[e].pages || t.join("") !== this.slides[e].pages.join("")) {
        this.clearSlidePages(e);
        for (var o = this.slides[e].find(".slide-inner"), s = 0; s < i.length; s++) {
            var h = i[s].index;
            this.pagesArr[h] && (o.append(this.pagesArr[h].$wrapper), this.slides[e].pages.push(h))
        }
        this.resizeInnerSlides(), this.slides[e].iscroll && this.slides[e].iscroll.refresh()
    }
}, FLIPBOOK.BookSwipe.prototype.updateTool = function() {
    switch (this.options.main.tool) {
        case "toolSelect":
            this.disableFlip(), this.disablePan(), jQuery(".flipbook-textLayer").css("pointer-events", "auto").removeClass(".flipbook-noselect");
            break;
        case "toolMove":
            this.onZoom(this.options.main.zoom), jQuery(".flipbook-textLayer").css("pointer-events", "none").addClass(".flipbook-noselect")
    }
}, FLIPBOOK.BookSwipe.prototype.clearSlidePages = function(e) {
    this.slides[e].find(".slide-inner").empty(), this.slides[e].pages = []
}, FLIPBOOK.BookSwipe.prototype.setZoomPages = function(e) {
    if (!this.$zoomScroller.pages || this.$zoomScroller.pages.join("") != e.join("")) {
        this.$zoomScroller.empty(), this.$zoomScroller.pages = [];
        for (var i = 0; i < e.length; i++) {
            var t = e[i];
            this.pagesArr[t] && (this.$zoomScroller.append(this.pagesArr[t].$wrapper), this.$zoomScroller.pages.push(t))
        }
    }
}, FLIPBOOK.BookSwipe.prototype.resizeZoomPages = function(e, i) {
    var t = this.$wrapper.height() * i,
        s = 500 * parseInt(t / 500) + 500;
    s < 500 && (s = 500), 2e3 < s && (s = 2e3);
    for (var o = 0; o < e.length; o++) {
        var h = e[o];
        this.pagesArr[h] && this.pagesArr[h].load()
    }
}, FLIPBOOK.BookSwipe.prototype.getCurrentSlidePages = function() {
    return this.singlePage ? [this.rightIndex] : [this.rightIndex - 1, this.rightIndex]
}, FLIPBOOK.BookSwipe.prototype.clearSlide = function(e) {
    this.slides[e].empty()
}, FLIPBOOK.BookSwipe.prototype.hasPage = function(e, i) {}, FLIPBOOK.BookSwipe.prototype.loadVisiblePages = function() {
    var e = this.options.main,
        i = this.rightIndex;
    this.options.rightToLeft && this.options.oddPages && i--;
    var t = this.pagesArr[i],
        s = this.pagesArr[i - 1],
        o = this.pagesArr[i + 1],
        h = this.pagesArr[i + 2],
        n = this.pagesArr[i - 2],
        r = this.pagesArr[i - 3];
    this.singlePage ? t ? t.load(function() {
        e.setLoadingProgress(1), s && s.load(), o && o.load()
    }) : s && s.load() : s ? s.load(function() {
        t ? t.load(function() {
            e.setLoadingProgress(1), n && n.load(), r && r.load(), o && o.load(), h && h.load()
        }) : (e.setLoadingProgress(1), n && n.load(), r && r.load())
    }) : t && t.load(function() {
        e.setLoadingProgress(1), o && o.load(), h && h.load()
    })
}, FLIPBOOK.BookSwipe.prototype.updateVisiblePages = function() {
    this.options.main;
    var e = this.rightIndex;
    this.options.rightToLeft && this.options.oddPages && e--;
    var i = this.pagesArr[e],
        t = this.pagesArr[e - 1],
        s = this.pagesArr[e + 1],
        o = this.pagesArr[e + 2],
        h = this.pagesArr[e - 2],
        n = this.pagesArr[e - 3];
    this.singlePage ? t ? s ? (this.setSlidePages(1, [i]), t && this.setSlidePages(0, [t]), this.setSlidePages(2, [s]), this.goToSlide(1, !0)) : (i && this.setSlidePages(2, [i]), t && this.setSlidePages(1, [t]), this.goToSlide(2, !0), this.clearSlidePages(0)) : (this.setSlidePages(0, [i]), s ? this.setSlidePages(1, [s]) : this.clearSlidePages(1), this.goToSlide(0, !0), this.clearSlidePages(2)) : t ? i ? s ? h ? (this.setSlidePages(1, [t, i]), n ? this.setSlidePages(0, [n, h]) : this.setSlidePages(0, [h]), o ? this.setSlidePages(2, [s, o]) : this.setSlidePages(2, [s]), this.goToSlide(1, !0)) : (this.setSlidePages(0, [t, i]), o ? this.setSlidePages(1, [s, o]) : this.setSlidePages(1, [s]), this.clearSlidePages(2)) : (this.setSlidePages(2, [t, i]), n ? this.setSlidePages(1, [n, h]) : this.setSlidePages(1, [h]), this.goToSlide(2, !0), this.clearSlidePages(0)) : (this.setSlidePages(2, [t]), n ? this.setSlidePages(1, [n, h]) : this.setSlidePages(1, [h]), this.goToSlide(2, !0), this.clearSlidePages(0)) : (this.setSlidePages(0, [i]), o ? this.setSlidePages(1, [s, o]) : this.setSlidePages(1, [s]), this.goToSlide(0, !0), this.clearSlidePages(2)), this.loadVisiblePages(), this.flippedleft = (this.rightIndex + this.rightIndex % 2) / 2, this.flippedright = this.options.pages.length / 2 - this.flippedleft, this.options.main.turnPageComplete()
}, FLIPBOOK.BookSwipe.prototype.loadPage = function(e) {
    this.pagesArr[e] && this.pagesArr[e].load()
}, FLIPBOOK.BookSwipe.prototype.hidePage = function(e) {}, FLIPBOOK.BookSwipe.prototype.showPage = function(e) {}, FLIPBOOK.BookSwipe.prototype.disable = function() {
    this.enabled = !1
}, FLIPBOOK.BookSwipe.prototype.enable = function() {
    this.enabled = !0, this.onResize()
}, FLIPBOOK.BookSwipe.prototype.resize = function() {}, FLIPBOOK.BookSwipe.prototype.onResize = function() {
    var e = this.$wrapper.width(),
        i = this.$wrapper.height();
    if (this.w = e, this.h = i, 0 != e && 0 != i) {
        var t, s = this.pageWidth,
            o = this.pageHeight,
            h = 2 * this.options.zoomMin * s / o > e / i,
            n = !this.options.singlePageMode && (!this.options.responsiveView || e > this.options.responsiveViewTreshold || !h),
            r = n ? 2 * s : s,
            l = o;
        this.bw = r, t = (this.bh = l) / r < i / e ? l / r * e / this.options.pageTextureSize : i / this.options.pageTextureSize;
        for (var a = 0; a < this.slides.length; a++) this.slides[a].width(e + 0).height(i), this.slides[a].css("left", Number(a * e + 0 * a) + "px").height(i), this.slides[a].iscroll && (this.slides[a].iscroll.options.zoomMin = this.options.zoomMin * t, this.slides[a].iscroll.options.zoomMax = this.options.zoomMax * t, this.slides[a].iscroll.refresh());
        this.$scroller.width(this.$scroller.children().length * (e + 0)), this.iscroll.refresh(), n && !this.options.singlePageMode || this.singlePage ? n && !this.options.singlePageMode && this.singlePage && (this.rightIndex % 2 != 0 && this.setRightIndex(this.rightIndex + 1), this.singlePage = !1, this.view = 2, this.resizeInnerSlides()) : (this.rightIndex % 2 == 0 && 0 < this.rightIndex && this.setRightIndex(this.rightIndex - 1), this.singlePage = !0, this.view = 1, this.resizeInnerSlides()), this.updateVisiblePages()
    }
}, FLIPBOOK.BookSwipe.prototype.isFocusedRight = function() {
    return this.rightIndex % 2 == 0
}, FLIPBOOK.BookSwipe.prototype.isFocusedLeft = function() {
    return this.rightIndex % 2 == 1
}, FLIPBOOK.BookSwipe.prototype.resizeInnerSlides = function() {
    var e = this.options.pageTextureSize * this.pageWidth / this.pageHeight;
    90 != this.rotation && 270 != this.rotation || (e = this.options.pageTextureSize * this.pageHeight / this.pageWidth);
    for (var i = this.singlePage ? e : 2 * e, t = 0; t < 3; t++) i = this.slides[t].pages && 1 == this.slides[t].pages.length ? e : 2 * e, this.slides[t].find(".slide-inner").width(i)
}, FLIPBOOK.BookSwipe.prototype.resizeInnerSlide = function(e) {
    var i = this.options.pageTextureSize * this.pageWidth / this.pageHeight;
    this.slides[e].pages.length, this.slides[e].find(".slide-inner").width(i)
}, FLIPBOOK.BookSwipe.prototype.goToSlide = function(e, i) {
    var t = i ? 0 : 300 * this.options.pageFlipDuration,
        s = this.slides[e];
    s.pages && s.pages[0] && this.pagesArr[s.pages[0]].updateHtmlContent(), 0 < this.iscroll.pages.length && this.iscroll.goToPage(e, 0, t), i && (this.currentSlide = e), this.zoomTo(this.options.zoomMin)
}, FLIPBOOK.BookSwipe.prototype.getCurrentSlide = function() {
    return this.currentSlide
}, FLIPBOOK.BookSwipe.prototype.zoomIn = function(e, i, t) {
    t && "mousewheel" === t.type || this.zoomTo(e)
}, FLIPBOOK.BookSwipe.prototype.zoomTo = function(e, i, t, s) {
    if (this.enabled) {
        t = t || 0, s = s || 0, i = i || 0;
        if (1 < e && this.disableFlip(), 0 != o && 0 != h) {
            for (var o = this.w, h = this.h, n = (this.pageWidth, this.pageHeight, this.bw), r = this.bh, l = r / n < h / o ? r / n * e * o / this.options.pageTextureSize : e * h / this.options.pageTextureSize, a = i = 0; a < 3; a++) this.slides[a].iscroll && (l < this.slides[a].iscroll.options.zoomMin && (l = this.slides[a].iscroll.options.zoomMin), this.slides[a].iscroll.zoom(l, t, s, i));
            this.zoom = e, this.onZoom(e), this.loadVisiblePages()
        }
    }
}, FLIPBOOK.BookSwipe.prototype.zoomOut = function(e) {
    this.zoomTo(e)
}, FLIPBOOK.BookSwipe.prototype.move = function(e) {
    if (!(this.zoom <= 1))
        for (var i = 0; i < 3; i++) {
            var t = this.slides[i].iscroll;
            if (t) {
                var s = t.x,
                    o = t.y,
                    h = 20 * this.zoom;
                switch (e) {
                    case "left":
                        s += h;
                        break;
                    case "right":
                        s -= h;
                        break;
                    case "up":
                        o += h;
                        break;
                    case "down":
                        o -= h
                }
                0 < s && (s = 0), s < t.maxScrollX && (s = +t.maxScrollX), 0 < o && (o = 0), o < t.maxScrollY && (o = +t.maxScrollY), t.scrollTo(s, o, 0)
            }
        }
}, FLIPBOOK.BookSwipe.prototype.onZoom = function(e) {
    "toolSelect" == this.options.main.tool ? (this.disableFlip(), this.disablePan()) : 1 < e ? (this.disableFlip(), this.enablePan()) : this.enableFlip(), this.options.main.onZoom(e)
}, FLIPBOOK.BookSwipe.prototype.rotateLeft = function() {
    this.rotation = (this.rotation + 360 - 90) % 360;
    for (var e = 0; e < this.pagesArr.length; e++) {
        this.pagesArr[e].setRotation(this.rotation)
    }
    this.resizeInnerSlides(), this.onResize(), console.log(this.rotation)
}, FLIPBOOK.BookSwipe.prototype.rotateRight = function() {
    this.rotation = (this.rotation + 360 + 90) % 360;
    for (var e = 0; e < this.pagesArr.length; e++) {
        this.pagesArr[e].setRotation(this.rotation)
    }
    this.resizeInnerSlides(), this.onResize(), console.log(this.rotation)
}, FLIPBOOK.BookSwipe.prototype.enableAutoplay = function(e) {}, FLIPBOOK.BookSwipe.prototype.updateCurrentPage = function(e) {}, FLIPBOOK.BookSwipe.prototype.enable = function() {
    this.enabled = !0
}, FLIPBOOK.BookSwipe.prototype.disable = function() {
    this.enabled = !1
}, FLIPBOOK.BookSwipe.prototype.onSwipe = function(e, i, t, s, o, h, n) {}, FLIPBOOK.BookSwipe.prototype.onPageUnloaded = function(e, i) {
    var t = this.options.rightToLeft ? this.options.numPages - e - 1 : e;
    this.pagesArr[t].unload()
}, FLIPBOOK.BookSwipe.prototype.disableFlip = function() {
    this.flipEnabled = !1, this.iscroll.disable()
}, FLIPBOOK.BookSwipe.prototype.enableFlip = function() {
    1 != this.options.numPages ? (this.flipEnabled = !0, this.iscroll.enable()) : this.disableFlip()
}, FLIPBOOK.BookSwipe.prototype.enablePan = function() {
    this.slides[0].iscroll && this.slides[0].iscroll.enable(), this.slides[1].iscroll && this.slides[1].iscroll.enable(), this.slides[2].iscroll && this.slides[2].iscroll.enable()
}, FLIPBOOK.BookSwipe.prototype.disablePan = function() {
    this.slides[0].iscroll && this.slides[0].iscroll.disable(), this.slides[1].iscroll && this.slides[1].iscroll.disable(), this.slides[2].iscroll && this.slides[2].iscroll.disable()
}, FLIPBOOK.PageSwipe = function(e, i, t, s, o) {
    this.rotation = 0, this.index = t, this.options = i, this.texture = s, this.html = o, this.index = t, this.$wrapper = jQuery("<div>").addClass("flipbook-carousel-page"), this.wrapper = this.$wrapper[0], this.model = e, this.$inner = jQuery("<div>").appendTo(this.$wrapper).addClass("flipbook-carousel-page-inner"), this.$bg = jQuery("<div>").appendTo(this.$inner).addClass("flipbook-carousel-page-bg"), this.$html = jQuery("<div>").appendTo(this.$inner).addClass("flipbook-page-htmlContent"), i.pagePreloader ? this.$preloader = jQuery('<img src="' + i.pagePreloader + '" class="flipbook-page-preloader-image">').appendTo(this.$inner) : this.$preloader = jQuery('<img src="' + i.assets.spinner + '" class="flipbook-page-preloader">').appendTo(this.$inner), this.setSize(this.pw, this.ph)
}, FLIPBOOK.PageSwipe.prototype = {
    load: function(s) {
        var e = this.options.rightToLeft ? this.options.numPages - this.index - 1 : this.index,
            o = this;
        this.loaded ? s && s.call(this) : (this.loaded = !0, this.options.main.loadPageHTML(e, function(e) {
            o.htmlContent = e, o.updateHtmlContent()
        }), this.options.main.loadPage(e, this.options.pageTextureSize, function(e) {
            var i, t;
            e.image && (i = e.image, o.$img = jQuery(i).addClass("page-carousel-img"), e.image.naturalHeight, t = e.image.naturalHeight, o.options.pageWidth, o.options.pageHeight, o.$img.appendTo(o.$bg), o.options.doublePage && 0 < o.index && o.index % 2 == 0 && o.$img.css("left", "-100%"), !o.options.doublePage || 0 == o.index || o.index == o.options.pages.length - 1 && !o.options.oddPages ? o.$img.css("width", "100%") : o.$img.css("width", "200%"), o.$preloader.remove()), e.canvas && o.pageSize != e.size && (o.pageSize = e.size, o.$bg.empty(), o.options.doublePage && o.index % 2 == 0 && 0 != o.index ? jQuery(e.rCanvas).appendTo(o.$bg) : o.options.doublePage && o.index % 2 == 1 && o.index != o.options.pages.length - 1 ? jQuery(e.lCanvas).appendTo(o.$bg) : jQuery(e.canvas).appendTo(o.$bg), o.$preloader.remove()), o.setRotation(), s && s.call(o)
        }))
    },
    unload: function() {
        this.loaded = !1, this.pageSize = 0, this.size = 0, this.$preloader.appendTo(this.$inner)
    },
    dispose: function() {
        this.pageSize && (this.pageSize = null, this.$bg.empty())
    },
    setSize: function() {
        var e = this.options.pageTextureSize,
            i = 0 == this.rotation || 180 == this.rotation ? e * this.options.pageWidth / this.options.pageHeight : (this.$wrapper.width(e).height(i), e * this.options.pageHeight / this.options.pageWidth);
        this.pw = i, this.ph = e, this.$wrapper.width(i).height(e), this.updateHtmlContent()
    },
    setRotation: function(e) {
        this.setSize(), this.options.doublePage || (void 0 !== e && (this.rotation = e), this.$img && (this.$img.css("transform", "rotate(" + this.rotation + "deg) translateZ(0)"), 90 == this.rotation || 270 == this.rotation ? this.$img.width(this.$wrapper.height()).height(this.$wrapper.width()) : this.$img.width(this.$wrapper.width()).height(this.$wrapper.height())))
    },
    updateHtmlContent: function() {
        var e = this.ph / 1e3,
            i = this.htmlContent;
        i && (this.$html.empty().append(jQuery(i)), this.$html[0].style.transform = "scale(" + e + ") translateZ(0)", this.options.doublePage && (this.index % 2 == 0 && 0 < this.index ? this.$html[0].style.left = "-100%" : this.$html[0].style.left = "0"))
    }
};