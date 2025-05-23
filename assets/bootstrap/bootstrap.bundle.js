/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ !(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t());
})(this, function () {
  "use strict";
  let e = "transitionend",
    t = (e) =>
      null == e
        ? `${e}`
        : {}.toString
            .call(e)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase(),
    i = (e) => {
      do e += Math.floor(1e6 * Math.random());
      while (document.getElementById(e));
      return e;
    },
    n = (e) => {
      let t = e.getAttribute("data-bs-target");
      if (!t || "#" === t) {
        let i = e.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (t = i && "#" !== i ? i.trim() : null);
      }
      return t;
    },
    s = (e) => {
      let t = n(e);
      return t && document.querySelector(t) ? t : null;
    },
    r = (e) => {
      let t = n(e);
      return t ? document.querySelector(t) : null;
    },
    o = (e) => {
      if (!e) return 0;
      let { transitionDuration: t, transitionDelay: i } = window.getComputedStyle(e),
        n = Number.parseFloat(t),
        s = Number.parseFloat(i);
      return n || s
        ? ((t = t.split(",")[0]),
          (i = i.split(",")[0]),
          (Number.parseFloat(t) + Number.parseFloat(i)) * 1e3)
        : 0;
    },
    a = (t) => {
      t.dispatchEvent(new Event(e));
    },
    l = (e) =>
      !!e && "object" == typeof e && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
    c = (e) =>
      l(e)
        ? e.jquery
          ? e[0]
          : e
        : "string" == typeof e && e.length > 0
        ? document.querySelector(e)
        : null,
    h = (e, i, n) => {
      Object.keys(n).forEach((s) => {
        let r = n[s],
          o = i[s],
          a = o && l(o) ? "element" : t(o);
        if (!RegExp(r).test(a))
          throw TypeError(
            `${e.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${r}".`
          );
      });
    },
    d = (e) =>
      !!l(e) &&
      0 !== e.getClientRects().length &&
      "visible" === getComputedStyle(e).getPropertyValue("visibility"),
    u = (e) =>
      !!(!e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled")) ||
      (void 0 !== e.disabled
        ? e.disabled
        : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
    f = (e) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof e.getRootNode) {
        let t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }
      return e instanceof ShadowRoot ? e : e.parentNode ? f(e.parentNode) : null;
    },
    p = () => {},
    g = (e) => {
      e.offsetHeight;
    },
    m = () => {
      let { jQuery: e } = window;
      return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
    },
    v = [],
    b = (e) => {
      "loading" === document.readyState
        ? (v.length ||
            document.addEventListener("DOMContentLoaded", () => {
              v.forEach((e) => e());
            }),
          v.push(e))
        : e();
    },
    y = () => "rtl" === document.documentElement.dir,
    E = (e) => {
      b(() => {
        let t = m();
        if (t) {
          let i = e.NAME,
            n = t.fn[i];
          (t.fn[i] = e.jQueryInterface),
            (t.fn[i].Constructor = e),
            (t.fn[i].noConflict = () => ((t.fn[i] = n), e.jQueryInterface));
        }
      });
    },
    $ = (e) => {
      "function" == typeof e && e();
    },
    w = (t, i, n = !0) => {
      if (!n) {
        $(t);
        return;
      }
      let s = o(i) + 5,
        r = !1,
        l = ({ target: n }) => {
          n === i && ((r = !0), i.removeEventListener(e, l), $(t));
        };
      i.addEventListener(e, l),
        setTimeout(() => {
          r || a(i);
        }, s);
    },
    A = (e, t, i, n) => {
      let s = e.indexOf(t);
      if (-1 === s) return e[!i && n ? e.length - 1 : 0];
      let r = e.length;
      return (s += i ? 1 : -1), n && (s = (s + r) % r), e[Math.max(0, Math.min(s, r - 1))];
    },
    C = /[^.]*(?=\..*)\.|.*/,
    T = /\..*/,
    k = /::\d+$/,
    L = {},
    O = 1,
    x = { mouseenter: "mouseover", mouseleave: "mouseout" },
    D = /^(mouseenter|mouseleave)/i,
    S = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function N(e, t) {
    return (t && `${t}::${O++}`) || e.uidEvent || O++;
  }
  function I(e) {
    let t = N(e);
    return (e.uidEvent = t), (L[t] = L[t] || {}), L[t];
  }
  function _(e, t, i = null) {
    let n = Object.keys(e);
    for (let s = 0, r = n.length; s < r; s++) {
      let o = e[n[s]];
      if (o.originalHandler === t && o.delegationSelector === i) return o;
    }
    return null;
  }
  function P(e, t, i) {
    let n = "string" == typeof t,
      s = B(e),
      r = S.has(s);
    return r || (s = e), [n, n ? i : t, s];
  }
  function M(e, t, i, n, s) {
    var r, o, a, l, c;
    if ("string" != typeof t || !e) return;
    if ((i || ((i = n), (n = null)), D.test(t))) {
      let h = (e) =>
        function (t) {
          if (
            !t.relatedTarget ||
            (t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))
          )
            return e.call(this, t);
        };
      n ? (n = h(n)) : (i = h(i));
    }
    let [d, u, f] = P(t, i, n),
      p = I(e),
      g = p[f] || (p[f] = {}),
      m = _(g, u, d ? i : null);
    if (m) {
      m.oneOff = m.oneOff && s;
      return;
    }
    let v = N(u, t.replace(C, "")),
      b = d
        ? ((r = e),
          (o = i),
          (a = n),
          function e(t) {
            let i = r.querySelectorAll(o);
            for (let { target: n } = t; n && n !== this; n = n.parentNode)
              for (let s = i.length; s--; )
                if (i[s] === n)
                  return (
                    (t.delegateTarget = n), e.oneOff && j.off(r, t.type, o, a), a.apply(n, [t])
                  );
            return null;
          })
        : ((l = e),
          (c = i),
          function e(t) {
            return (t.delegateTarget = l), e.oneOff && j.off(l, t.type, c), c.apply(l, [t]);
          });
    (b.delegationSelector = d ? i : null),
      (b.originalHandler = u),
      (b.oneOff = s),
      (b.uidEvent = v),
      (g[v] = b),
      e.addEventListener(f, b, d);
  }
  function H(e, t, i, n, s) {
    let r = _(t[i], n, s);
    r && (e.removeEventListener(i, r, Boolean(s)), delete t[i][r.uidEvent]);
  }
  function B(e) {
    return x[(e = e.replace(T, ""))] || e;
  }
  let j = {
      on(e, t, i, n) {
        M(e, t, i, n, !1);
      },
      one(e, t, i, n) {
        M(e, t, i, n, !0);
      },
      off(e, t, i, n) {
        if ("string" != typeof t || !e) return;
        let [s, r, o] = P(t, i, n),
          a = o !== t,
          l = I(e),
          c = t.startsWith(".");
        if (void 0 !== r) {
          if (!l || !l[o]) return;
          H(e, l, o, r, s ? i : null);
          return;
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function e(t, i, n, s) {
              let r = i[n] || {};
              Object.keys(r).forEach((e) => {
                if (e.includes(s)) {
                  let o = r[e];
                  H(t, i, n, o.originalHandler, o.delegationSelector);
                }
              });
            })(e, l, i, t.slice(1));
          });
        let h = l[o] || {};
        Object.keys(h).forEach((i) => {
          let n = i.replace(k, "");
          if (!a || t.includes(n)) {
            let s = h[i];
            H(e, l, o, s.originalHandler, s.delegationSelector);
          }
        });
      },
      trigger(e, t, i) {
        if ("string" != typeof t || !e) return null;
        let n = m(),
          s = B(t),
          r = S.has(s),
          o,
          a = !0,
          l = !0,
          c = !1,
          h = null;
        return (
          t !== s &&
            n &&
            ((o = n.Event(t, i)),
            n(e).trigger(o),
            (a = !o.isPropagationStopped()),
            (l = !o.isImmediatePropagationStopped()),
            (c = o.isDefaultPrevented())),
          r
            ? (h = document.createEvent("HTMLEvents")).initEvent(s, a, !0)
            : (h = new CustomEvent(t, { bubbles: a, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((e) => {
              Object.defineProperty(h, e, { get: () => i[e] });
            }),
          c && h.preventDefault(),
          l && e.dispatchEvent(h),
          h.defaultPrevented && void 0 !== o && o.preventDefault(),
          h
        );
      },
    },
    W = new Map(),
    R = {
      set(e, t, i) {
        W.has(e) || W.set(e, new Map());
        let n = W.get(e);
        if (!n.has(t) && 0 !== n.size) {
          console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(n.keys())[0]
            }.`
          );
          return;
        }
        n.set(t, i);
      },
      get: (e, t) => (W.has(e) && W.get(e).get(t)) || null,
      remove(e, t) {
        if (!W.has(e)) return;
        let i = W.get(e);
        i.delete(t), 0 === i.size && W.delete(e);
      },
    };
  class z {
    constructor(e) {
      if (!(e = c(e))) return;
      (this._element = e), R.set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
      R.remove(this._element, this.constructor.DATA_KEY),
        j.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((e) => {
          this[e] = null;
        });
    }
    _queueCallback(e, t, i = !0) {
      w(e, t, i);
    }
    static getInstance(e) {
      return R.get(c(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, t = {}) {
      return this.getInstance(e) || new this(e, "object" == typeof t ? t : null);
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw Error('You have to implement the static method "NAME", for each component!');
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  let q = (e, t = "hide") => {
      let i = `click.dismiss${e.EVENT_KEY}`,
        n = e.NAME;
      j.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
        if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), u(this))) return;
        let s = r(this) || this.closest(`.${n}`),
          o = e.getOrCreateInstance(s);
        o[t]();
      });
    },
    F = ".bs.alert",
    U = `close${F}`,
    V = `closed${F}`;
  class K extends z {
    static get NAME() {
      return "alert";
    }
    close() {
      let e = j.trigger(this._element, U);
      if (e.defaultPrevented) return;
      this._element.classList.remove("show");
      let t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(), j.trigger(this._element, V), this.dispose();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = K.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  q(K, "close"), E(K);
  let X = '[data-bs-toggle="button"]',
    Y = "click.bs.button.data-api";
  class Q extends z {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = Q.getOrCreateInstance(this);
        "toggle" === e && t[e]();
      });
    }
  }
  function G(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e))
    );
  }
  function Z(e) {
    return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
  }
  j.on(document, Y, X, (e) => {
    e.preventDefault();
    let t = e.target.closest(X),
      i = Q.getOrCreateInstance(t);
    i.toggle();
  }),
    E(Q);
  let J = {
      setDataAttribute(e, t, i) {
        e.setAttribute(`data-bs-${Z(t)}`, i);
      },
      removeDataAttribute(e, t) {
        e.removeAttribute(`data-bs-${Z(t)}`);
      },
      getDataAttributes(e) {
        if (!e) return {};
        let t = {};
        return (
          Object.keys(e.dataset)
            .filter((e) => e.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              t[(n = n.charAt(0).toLowerCase() + n.slice(1, n.length))] = G(e.dataset[i]);
            }),
          t
        );
      },
      getDataAttribute: (e, t) => G(e.getAttribute(`data-bs-${Z(t)}`)),
      offset(e) {
        let t = e.getBoundingClientRect();
        return { top: t.top + window.pageYOffset, left: t.left + window.pageXOffset };
      },
      position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
    },
    ee = {
      find: (e, t = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(t, e)),
      findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
      children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
      parents(e, t) {
        let i = [],
          n = e.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(t) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(e, t) {
        let i = e.previousElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(e, t) {
        let i = e.nextElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(e) {
        let t = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((e) => `${e}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(t, e).filter((e) => !u(e) && d(e));
      },
    },
    et = "carousel",
    ei = ".bs.carousel",
    en = ".data-api",
    es = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
    er = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    eo = "next",
    ea = "prev",
    el = "left",
    ec = "right",
    eh = { ArrowLeft: ec, ArrowRight: el },
    ed = `slide${ei}`,
    eu = `slid${ei}`,
    ef = `keydown${ei}`,
    ep = `mouseenter${ei}`,
    eg = `mouseleave${ei}`,
    em = `touchstart${ei}`,
    e8 = `touchmove${ei}`,
    ev = `touchend${ei}`,
    eb = `pointerdown${ei}`,
    ey = `pointerup${ei}`,
    eE = `dragstart${ei}`,
    e$ = `load${ei}${en}`,
    ew = `click${ei}${en}`,
    eA = "active",
    eC = ".active.carousel-item";
  class eT extends z {
    constructor(e, t) {
      super(e),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(t)),
        (this._indicatorsElement = ee.findOne(".carousel-indicators", this._element)),
        (this._touchSupported =
          "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return es;
    }
    static get NAME() {
      return et;
    }
    next() {
      this._slide(eo);
    }
    nextWhenVisible() {
      !document.hidden && d(this._element) && this.next();
    }
    prev() {
      this._slide(ea);
    }
    pause(e) {
      e || (this._isPaused = !0),
        ee.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (a(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(e) {
      e || (this._isPaused = !1),
        this._interval && (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
            this._config.interval
          )));
    }
    to(e) {
      this._activeElement = ee.findOne(eC, this._element);
      let t = this._getItemIndex(this._activeElement);
      if (!(e > this._items.length - 1) && !(e < 0)) {
        if (this._isSliding) {
          j.one(this._element, eu, () => this.to(e));
          return;
        }
        if (t === e) {
          this.pause(), this.cycle();
          return;
        }
        this._slide(e > t ? eo : ea, this._items[e]);
      }
    }
    _getConfig(e) {
      return (
        h(
          et,
          (e = {
            ...es,
            ...J.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          er
        ),
        e
      );
    }
    _handleSwipe() {
      let e = Math.abs(this.touchDeltaX);
      if (e <= 40) return;
      let t = e / this.touchDeltaX;
      (this.touchDeltaX = 0), t && this._slide(t > 0 ? ec : el);
    }
    _addEventListeners() {
      this._config.keyboard && j.on(this._element, ef, (e) => this._keydown(e)),
        "hover" === this._config.pause &&
          (j.on(this._element, ep, (e) => this.pause(e)),
          j.on(this._element, eg, (e) => this.cycle(e))),
        this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      let e = (e) => this._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType),
        t = (t) => {
          e(t)
            ? (this.touchStartX = t.clientX)
            : this._pointerEvent || (this.touchStartX = t.touches[0].clientX);
        },
        i = (e) => {
          this.touchDeltaX =
            e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX;
        },
        n = (t) => {
          e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout((e) => this.cycle(e), 500 + this._config.interval)));
        };
      ee.find(".carousel-item img", this._element).forEach((e) => {
        j.on(e, eE, (e) => e.preventDefault());
      }),
        this._pointerEvent
          ? (j.on(this._element, eb, (e) => t(e)),
            j.on(this._element, ey, (e) => n(e)),
            this._element.classList.add("pointer-event"))
          : (j.on(this._element, em, (e) => t(e)),
            j.on(this._element, e8, (e) => i(e)),
            j.on(this._element, ev, (e) => n(e)));
    }
    _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) return;
      let t = eh[e.key];
      t && (e.preventDefault(), this._slide(t));
    }
    _getItemIndex(e) {
      return (
        (this._items = e && e.parentNode ? ee.find(".carousel-item", e.parentNode) : []),
        this._items.indexOf(e)
      );
    }
    _getItemByOrder(e, t) {
      return A(this._items, t, e === eo, this._config.wrap);
    }
    _triggerSlideEvent(e, t) {
      let i = this._getItemIndex(e),
        n = this._getItemIndex(ee.findOne(eC, this._element));
      return j.trigger(this._element, ed, { relatedTarget: e, direction: t, from: n, to: i });
    }
    _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        let t = ee.findOne(".active", this._indicatorsElement);
        t.classList.remove(eA), t.removeAttribute("aria-current");
        let i = ee.find("[data-bs-target]", this._indicatorsElement);
        for (let n = 0; n < i.length; n++)
          if (
            Number.parseInt(i[n].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)
          ) {
            i[n].classList.add(eA), i[n].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      let e = this._activeElement || ee.findOne(eC, this._element);
      if (!e) return;
      let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      t
        ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval),
          (this._config.interval = t))
        : (this._config.interval = this._config.defaultInterval || this._config.interval);
    }
    _slide(e, t) {
      let i = this._directionToOrder(e),
        n = ee.findOne(eC, this._element),
        s = this._getItemIndex(n),
        r = t || this._getItemByOrder(i, n),
        o = this._getItemIndex(r),
        a = Boolean(this._interval),
        l = i === eo,
        c = l ? "carousel-item-start" : "carousel-item-end",
        h = l ? "carousel-item-next" : "carousel-item-prev",
        d = this._orderToDirection(i);
      if (r && r.classList.contains(eA)) {
        this._isSliding = !1;
        return;
      }
      if (this._isSliding) return;
      let u = this._triggerSlideEvent(r, d);
      if (u.defaultPrevented || !n || !r) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(r),
        (this._activeElement = r);
      let f = () => {
        j.trigger(this._element, eu, { relatedTarget: r, direction: d, from: s, to: o });
      };
      if (this._element.classList.contains("slide")) {
        r.classList.add(h), g(r), n.classList.add(c), r.classList.add(c);
        let p = () => {
          r.classList.remove(c, h),
            r.classList.add(eA),
            n.classList.remove(eA, h, c),
            (this._isSliding = !1),
            setTimeout(f, 0);
        };
        this._queueCallback(p, n, !0);
      } else n.classList.remove(eA), r.classList.add(eA), (this._isSliding = !1), f();
      a && this.cycle();
    }
    _directionToOrder(e) {
      return [ec, el].includes(e) ? (y() ? (e === el ? ea : eo) : e === el ? eo : ea) : e;
    }
    _orderToDirection(e) {
      return [eo, ea].includes(e) ? (y() ? (e === ea ? el : ec) : e === ea ? ec : el) : e;
    }
    static carouselInterface(e, t) {
      let i = eT.getOrCreateInstance(e, t),
        { _config: n } = i;
      "object" == typeof t && (n = { ...n, ...t });
      let s = "string" == typeof t ? t : n.slide;
      if ("number" == typeof t) i.to(t);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(e) {
      return this.each(function () {
        eT.carouselInterface(this, e);
      });
    }
    static dataApiClickHandler(e) {
      let t = r(this);
      if (!t || !t.classList.contains("carousel")) return;
      let i = { ...J.getDataAttributes(t), ...J.getDataAttributes(this) },
        n = this.getAttribute("data-bs-slide-to");
      n && (i.interval = !1),
        eT.carouselInterface(t, i),
        n && eT.getInstance(t).to(n),
        e.preventDefault();
    }
  }
  j.on(document, ew, "[data-bs-slide], [data-bs-slide-to]", eT.dataApiClickHandler),
    j.on(window, e$, () => {
      let e = ee.find('[data-bs-ride="carousel"]');
      for (let t = 0, i = e.length; t < i; t++) eT.carouselInterface(e[t], eT.getInstance(e[t]));
    }),
    E(eT);
  let ek = "collapse",
    eL = "bs.collapse",
    eO = `.${eL}`,
    ex = { toggle: !0, parent: null },
    e9 = { toggle: "boolean", parent: "(null|element)" },
    eD = `show${eO}`,
    eS = `shown${eO}`,
    eN = `hide${eO}`,
    eI = `hidden${eO}`,
    e_ = `click${eO}.data-api`,
    eP = "show",
    eM = "collapse",
    eH = "collapsing",
    eB = "collapsed",
    ej = `:scope .${eM} .${eM}`,
    eW = '[data-bs-toggle="collapse"]';
  class eR extends z {
    constructor(e, t) {
      super(e),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(t)),
        (this._triggerArray = []);
      let i = ee.find(eW);
      for (let n = 0, r = i.length; n < r; n++) {
        let o = i[n],
          a = s(o),
          l = ee.find(a).filter((e) => e === this._element);
        null !== a && l.length && ((this._selector = a), this._triggerArray.push(o));
      }
      this._initializeChildren(),
        this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return ex;
    }
    static get NAME() {
      return ek;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let e = [],
        t;
      if (this._config.parent) {
        let i = ee.find(ej, this._config.parent);
        e = ee
          .find(".collapse.show, .collapse.collapsing", this._config.parent)
          .filter((e) => !i.includes(e));
      }
      let n = ee.findOne(this._selector);
      if (e.length) {
        let s = e.find((e) => n !== e);
        if ((t = s ? eR.getInstance(s) : null) && t._isTransitioning) return;
      }
      let r = j.trigger(this._element, eD);
      if (r.defaultPrevented) return;
      e.forEach((e) => {
        n !== e && eR.getOrCreateInstance(e, { toggle: !1 }).hide(), t || R.set(e, eL, null);
      });
      let o = this._getDimension();
      this._element.classList.remove(eM),
        this._element.classList.add(eH),
        (this._element.style[o] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      let a = () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(eH),
            this._element.classList.add(eM, eP),
            (this._element.style[o] = ""),
            j.trigger(this._element, eS);
        },
        l = o[0].toUpperCase() + o.slice(1),
        c = `scroll${l}`;
      this._queueCallback(a, this._element, !0), (this._element.style[o] = `${this._element[c]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      let e = j.trigger(this._element, eN);
      if (e.defaultPrevented) return;
      let t = this._getDimension();
      (this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`),
        g(this._element),
        this._element.classList.add(eH),
        this._element.classList.remove(eM, eP);
      let i = this._triggerArray.length;
      for (let n = 0; n < i; n++) {
        let s = this._triggerArray[n],
          o = r(s);
        o && !this._isShown(o) && this._addAriaAndCollapsedClass([s], !1);
      }
      this._isTransitioning = !0;
      let a = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(eH),
          this._element.classList.add(eM),
          j.trigger(this._element, eI);
      };
      (this._element.style[t] = ""), this._queueCallback(a, this._element, !0);
    }
    _isShown(e = this._element) {
      return e.classList.contains(eP);
    }
    _getConfig(e) {
      return (
        ((e = { ...ex, ...J.getDataAttributes(this._element), ...e }).toggle = Boolean(e.toggle)),
        (e.parent = c(e.parent)),
        h(ek, e, e9),
        e
      );
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      let e = ee.find(ej, this._config.parent);
      ee.find(eW, this._config.parent)
        .filter((t) => !e.includes(t))
        .forEach((e) => {
          let t = r(e);
          t && this._addAriaAndCollapsedClass([e], this._isShown(t));
        });
    }
    _addAriaAndCollapsedClass(e, t) {
      e.length &&
        e.forEach((e) => {
          t ? e.classList.remove(eB) : e.classList.add(eB), e.setAttribute("aria-expanded", t);
        });
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = {};
        "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
        let i = eR.getOrCreateInstance(this, t);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
          i[e]();
        }
      });
    }
  }
  j.on(document, e_, eW, function (e) {
    ("A" === e.target.tagName || (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
      e.preventDefault();
    let t = s(this),
      i = ee.find(t);
    i.forEach((e) => {
      eR.getOrCreateInstance(e, { toggle: !1 }).toggle();
    });
  }),
    E(eR);
  var ez = "bottom",
    eq = "right",
    eF = "left",
    eU = "auto",
    eV = ["top", ez, eq, eF],
    eK = "start",
    eX = "clippingParents",
    eY = "viewport",
    e0 = "popper",
    eQ = "reference",
    e1 = eV.reduce(function (e, t) {
      return e.concat([t + "-" + eK, t + "-end"]);
    }, []),
    e3 = [].concat(eV, [eU]).reduce(function (e, t) {
      return e.concat([t, t + "-" + eK, t + "-end"]);
    }, []),
    e2 = "beforeRead",
    e4 = "read",
    eG = "afterRead",
    eZ = "beforeMain",
    e6 = "main",
    eJ = "afterMain",
    e5 = "beforeWrite",
    e7 = "write",
    te = "afterWrite",
    tt = [e2, e4, eG, eZ, e6, eJ, e5, e7, te];
  function ti(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function tn(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function ts(e) {
    var t = tn(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function tr(e) {
    var t = tn(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function to(e) {
    if ("undefined" == typeof ShadowRoot) return !1;
    var t = tn(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  let ta = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function e(t) {
      var i = t.state;
      Object.keys(i.elements).forEach(function (e) {
        var t = i.styles[e] || {},
          n = i.attributes[e] || {},
          s = i.elements[e];
        tr(s) &&
          ti(s) &&
          (Object.assign(s.style, t),
          Object.keys(n).forEach(function (e) {
            var t = n[e];
            !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function e(t) {
      var i = t.state,
        n = {
          popper: { position: i.options.strategy, left: "0", top: "0", margin: "0" },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(i.elements.popper.style, n.popper),
        (i.styles = n),
        i.elements.arrow && Object.assign(i.elements.arrow.style, n.arrow),
        function () {
          Object.keys(i.elements).forEach(function (e) {
            var t = i.elements[e],
              s = i.attributes[e] || {},
              r = Object.keys(i.styles.hasOwnProperty(e) ? i.styles[e] : n[e]).reduce(function (
                e,
                t
              ) {
                return (e[t] = ""), e;
              },
              {});
            tr(t) &&
              ti(t) &&
              (Object.assign(t.style, r),
              Object.keys(s).forEach(function (e) {
                t.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function tl(e) {
    return e.split("-")[0];
  }
  function tc(e, t) {
    var i = e.getBoundingClientRect();
    return {
      width: i.width / 1,
      height: i.height / 1,
      top: i.top / 1,
      right: i.right / 1,
      bottom: i.bottom / 1,
      left: i.left / 1,
      x: i.left / 1,
      y: i.top / 1,
    };
  }
  function th(e) {
    var t = tc(e),
      i = e.offsetWidth,
      n = e.offsetHeight;
    return (
      1 >= Math.abs(t.width - i) && (i = t.width),
      1 >= Math.abs(t.height - n) && (n = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: i, height: n }
    );
  }
  function td(e, t) {
    var i = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (i && to(i)) {
      var n = t;
      do {
        if (n && e.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function tu(e) {
    return tn(e).getComputedStyle(e);
  }
  function tf(e) {
    return ["table", "td", "th"].indexOf(ti(e)) >= 0;
  }
  function tp(e) {
    return ((ts(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function tg(e) {
    return "html" === ti(e)
      ? e
      : e.assignedSlot || e.parentNode || (to(e) ? e.host : null) || tp(e);
  }
  function tm(e) {
    return tr(e) && "fixed" !== tu(e).position ? e.offsetParent : null;
  }
  function t8(e) {
    for (var t = tn(e), i = tm(e); i && tf(i) && "static" === tu(i).position; ) i = tm(i);
    return i && ("html" === ti(i) || ("body" === ti(i) && "static" === tu(i).position))
      ? t
      : i ||
          (function e(t) {
            var i = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              tr(t) &&
              "fixed" === tu(t).position
            )
              return null;
            for (var n = tg(t); tr(n) && 0 > ["html", "body"].indexOf(ti(n)); ) {
              var s = tu(n);
              if (
                "none" !== s.transform ||
                "none" !== s.perspective ||
                "paint" === s.contain ||
                -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                (i && "filter" === s.willChange) ||
                (i && s.filter && "none" !== s.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(e) ||
          t;
  }
  function tv(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  var tb = Math.max,
    ty = Math.min,
    tE = Math.round;
  function t$(e, t, i) {
    return tb(e, ty(t, i));
  }
  function tw() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function tA(e) {
    return Object.assign({}, tw(), e);
  }
  function tC(e, t) {
    return t.reduce(function (t, i) {
      return (t[i] = e), t;
    }, {});
  }
  let tT = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function e(t) {
      var i,
        n = t.state,
        s = t.name,
        r = t.options,
        o = n.elements.arrow,
        a = n.modifiersData.popperOffsets,
        l = tl(n.placement),
        c = tv(l),
        h = [eF, eq].indexOf(l) >= 0 ? "height" : "width";
      if (o && a) {
        var d,
          u,
          f =
            ((d = r.padding),
            (u = n),
            tA(
              "number" !=
                typeof (d =
                  "function" == typeof d
                    ? d(Object.assign({}, u.rects, { placement: u.placement }))
                    : d)
                ? d
                : tC(d, eV)
            )),
          p = th(o),
          g = n.rects.reference[h] + n.rects.reference[c] - a[c] - n.rects.popper[h],
          m = a[c] - n.rects.reference[c],
          v = t8(o),
          b = v ? ("y" === c ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
          y = f["y" === c ? "top" : eF],
          E = b - p[h] - f["y" === c ? ez : eq],
          $ = b / 2 - p[h] / 2 + (g / 2 - m / 2),
          w = t$(y, $, E),
          A = c;
        n.modifiersData[s] = (((i = {})[A] = w), (i.centerOffset = w - $), i);
      }
    },
    effect: function e(t) {
      var i = t.state,
        n = t.options.element,
        s = void 0 === n ? "[data-popper-arrow]" : n;
      null != s &&
        ("string" != typeof s || (s = i.elements.popper.querySelector(s))) &&
        td(i.elements.popper, s) &&
        (i.elements.arrow = s);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function tk(e) {
    return e.split("-")[1];
  }
  var tL = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function tO(e) {
    var t,
      i,
      n,
      s,
      r,
      o,
      a = e.popper,
      l = e.popperRect,
      c = e.placement,
      h = e.variation,
      d = e.offsets,
      u = e.position,
      f = e.gpuAcceleration,
      p = e.adaptive,
      g = e.roundOffsets,
      m =
        !0 === g
          ? ((s = (n = d).x),
            (r = n.y),
            {
              x: tE(tE(s * (o = window.devicePixelRatio || 1)) / o) || 0,
              y: tE(tE(r * o) / o) || 0,
            })
          : "function" == typeof g
          ? g(d)
          : d,
      v = m.x,
      b = void 0 === v ? 0 : v,
      y = m.y,
      E = void 0 === y ? 0 : y,
      $ = d.hasOwnProperty("x"),
      w = d.hasOwnProperty("y"),
      A = eF,
      C = "top",
      T = window;
    if (p) {
      var k = t8(a),
        L = "clientHeight",
        O = "clientWidth";
      k === tn(a) &&
        ((k = tp(a)),
        "static" !== tu(k).position &&
          "absolute" === u &&
          ((L = "scrollHeight"), (O = "scrollWidth"))),
        ("top" === c || ((c === eF || c === eq) && "end" === h)) &&
          ((C = ez), (E -= k[L] - l.height), (E *= f ? 1 : -1)),
        (c === eF || (("top" === c || c === ez) && "end" === h)) &&
          ((A = eq), (b -= k[O] - l.width), (b *= f ? 1 : -1));
    }
    var x = Object.assign({ position: u }, p && tL);
    return f
      ? Object.assign(
          {},
          x,
          (((i = {})[C] = w ? "0" : ""),
          (i[A] = $ ? "0" : ""),
          (i.transform =
            1 >= (T.devicePixelRatio || 1)
              ? "translate(" + b + "px, " + E + "px)"
              : "translate3d(" + b + "px, " + E + "px, 0)"),
          i)
        )
      : Object.assign(
          {},
          x,
          (((t = {})[C] = w ? E + "px" : ""), (t[A] = $ ? b + "px" : ""), (t.transform = ""), t)
        );
  }
  let tx = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function e(t) {
      var i = t.state,
        n = t.options,
        s = n.gpuAcceleration,
        r = n.adaptive,
        o = n.roundOffsets,
        a = void 0 === o || o,
        l = {
          placement: tl(i.placement),
          variation: tk(i.placement),
          popper: i.elements.popper,
          popperRect: i.rects.popper,
          gpuAcceleration: void 0 === s || s,
        };
      null != i.modifiersData.popperOffsets &&
        (i.styles.popper = Object.assign(
          {},
          i.styles.popper,
          tO(
            Object.assign({}, l, {
              offsets: i.modifiersData.popperOffsets,
              position: i.options.strategy,
              adaptive: void 0 === r || r,
              roundOffsets: a,
            })
          )
        )),
        null != i.modifiersData.arrow &&
          (i.styles.arrow = Object.assign(
            {},
            i.styles.arrow,
            tO(
              Object.assign({}, l, {
                offsets: i.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: a,
              })
            )
          )),
        (i.attributes.popper = Object.assign({}, i.attributes.popper, {
          "data-popper-placement": i.placement,
        }));
    },
    data: {},
  };
  var t9 = { passive: !0 };
  let tD = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function e() {},
    effect: function e(t) {
      var i = t.state,
        n = t.instance,
        s = t.options,
        r = s.scroll,
        o = void 0 === r || r,
        a = s.resize,
        l = void 0 === a || a,
        c = tn(i.elements.popper),
        h = [].concat(i.scrollParents.reference, i.scrollParents.popper);
      return (
        o &&
          h.forEach(function (e) {
            e.addEventListener("scroll", n.update, t9);
          }),
        l && c.addEventListener("resize", n.update, t9),
        function () {
          o &&
            h.forEach(function (e) {
              e.removeEventListener("scroll", n.update, t9);
            }),
            l && c.removeEventListener("resize", n.update, t9);
        }
      );
    },
    data: {},
  };
  var tS = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function tN(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return tS[e];
    });
  }
  var tI = { start: "end", end: "start" };
  function t_(e) {
    return e.replace(/start|end/g, function (e) {
      return tI[e];
    });
  }
  function tP(e) {
    var t,
      i = tn(e);
    return { scrollLeft: i.pageXOffset, scrollTop: i.pageYOffset };
  }
  function tM(e) {
    return tc(tp(e)).left + tP(e).scrollLeft;
  }
  function tH(e) {
    var t = tu(e),
      i = t.overflow,
      n = t.overflowX,
      s = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function tB(e, t) {
    void 0 === t && (t = []);
    var i,
      n = (function e(t) {
        return ["html", "body", "#document"].indexOf(ti(t)) >= 0
          ? t.ownerDocument.body
          : tr(t) && tH(t)
          ? t
          : e(tg(t));
      })(e),
      s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
      r = tn(n),
      o = s ? [r].concat(r.visualViewport || [], tH(n) ? n : []) : n,
      a = t.concat(o);
    return s ? a : a.concat(tB(tg(o)));
  }
  function tj(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function tW(e, t) {
    var i, n, s, r, o, a, l, c, h, d, u, f, p, g, m, v, b, y, E;
    return t === eY
      ? tj(
          ((n = tn((i = e))),
          (s = tp(i)),
          (r = n.visualViewport),
          (o = s.clientWidth),
          (a = s.clientHeight),
          (l = 0),
          (c = 0),
          r &&
            ((o = r.width),
            (a = r.height),
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
              ((l = r.offsetLeft), (c = r.offsetTop))),
          { width: o, height: a, x: l + tM(i), y: c })
        )
      : tr(t)
      ? (((d = tc((h = t))).top = d.top + h.clientTop),
        (d.left = d.left + h.clientLeft),
        (d.bottom = d.top + h.clientHeight),
        (d.right = d.left + h.clientWidth),
        (d.width = h.clientWidth),
        (d.height = h.clientHeight),
        (d.x = d.left),
        (d.y = d.top),
        d)
      : tj(
          ((u = tp(e)),
          (p = tp(u)),
          (g = tP(u)),
          (m = null == (f = u.ownerDocument) ? void 0 : f.body),
          (v = tb(p.scrollWidth, p.clientWidth, m ? m.scrollWidth : 0, m ? m.clientWidth : 0)),
          (b = tb(p.scrollHeight, p.clientHeight, m ? m.scrollHeight : 0, m ? m.clientHeight : 0)),
          (y = -g.scrollLeft + tM(u)),
          (E = -g.scrollTop),
          "rtl" === tu(m || p).direction && (y += tb(p.clientWidth, m ? m.clientWidth : 0) - v),
          { width: v, height: b, x: y, y: E })
        );
  }
  function tR(e) {
    var t,
      i = e.reference,
      n = e.element,
      s = e.placement,
      r = s ? tl(s) : null,
      o = s ? tk(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (r) {
      case "top":
        t = { x: a, y: i.y - n.height };
        break;
      case ez:
        t = { x: a, y: i.y + i.height };
        break;
      case eq:
        t = { x: i.x + i.width, y: l };
        break;
      case eF:
        t = { x: i.x - n.width, y: l };
        break;
      default:
        t = { x: i.x, y: i.y };
    }
    var c = r ? tv(r) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (o) {
        case eK:
          t[c] = t[c] - (i[h] / 2 - n[h] / 2);
          break;
        case "end":
          t[c] = t[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return t;
  }
  function tz(e, t) {
    void 0 === t && (t = {});
    var i,
      n,
      s,
      r,
      o,
      a,
      l,
      c,
      h,
      d = t,
      u = d.placement,
      f = void 0 === u ? e.placement : u,
      p = d.boundary,
      g = d.rootBoundary,
      m = d.elementContext,
      v = void 0 === m ? e0 : m,
      b = d.altBoundary,
      y = d.padding,
      E = void 0 === y ? 0 : y,
      $ = tA("number" != typeof E ? E : tC(E, eV)),
      w = e.rects.popper,
      A = e.elements[void 0 !== b && b ? (v === e0 ? eQ : e0) : v],
      C =
        ((i = ts(A) ? A : A.contextElement || tp(e.elements.popper)),
        (n = void 0 === p ? eX : p),
        (s = void 0 === g ? eY : g),
        (c = (l = [].concat(
          "clippingParents" === n
            ? ((r = i),
              (o = tB(tg(r))),
              (a = ["absolute", "fixed"].indexOf(tu(r).position) >= 0 && tr(r) ? t8(r) : r),
              ts(a)
                ? o.filter(function (e) {
                    return ts(e) && td(e, a) && "body" !== ti(e);
                  })
                : [])
            : [].concat(n),
          [s]
        ))[0]),
        ((h = l.reduce(function (e, t) {
          var n = tW(i, t);
          return (
            (e.top = tb(n.top, e.top)),
            (e.right = ty(n.right, e.right)),
            (e.bottom = ty(n.bottom, e.bottom)),
            (e.left = tb(n.left, e.left)),
            e
          );
        }, tW(i, c))).width = h.right - h.left),
        (h.height = h.bottom - h.top),
        (h.x = h.left),
        (h.y = h.top),
        h),
      T = tc(e.elements.reference),
      k = tR({ reference: T, element: w, strategy: "absolute", placement: f }),
      L = tj(Object.assign({}, w, k)),
      O = v === e0 ? L : T,
      x = {
        top: C.top - O.top + $.top,
        bottom: O.bottom - C.bottom + $.bottom,
        left: C.left - O.left + $.left,
        right: O.right - C.right + $.right,
      },
      D = e.modifiersData.offset;
    if (v === e0 && D) {
      var S = D[f];
      Object.keys(x).forEach(function (e) {
        var t = [eq, ez].indexOf(e) >= 0 ? 1 : -1,
          i = ["top", ez].indexOf(e) >= 0 ? "y" : "x";
        x[e] += S[i] * t;
      });
    }
    return x;
  }
  let tq = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function e(t) {
      var i = t.state,
        n = t.options,
        s = t.name;
      if (!i.modifiersData[s]._skip) {
        for (
          var r = n.mainAxis,
            o = void 0 === r || r,
            a = n.altAxis,
            l = void 0 === a || a,
            c = n.fallbackPlacements,
            h = n.padding,
            d = n.boundary,
            u = n.rootBoundary,
            f = n.altBoundary,
            p = n.flipVariations,
            g = void 0 === p || p,
            m = n.allowedAutoPlacements,
            v = i.options.placement,
            b = tl(v),
            y = [v]
              .concat(
                c ||
                  (b !== v && g
                    ? (function e(t) {
                        if (tl(t) === eU) return [];
                        var i = tN(t);
                        return [t_(t), i, t_(i)];
                      })(v)
                    : [tN(v)])
              )
              .reduce(function (e, t) {
                var n, s, r, o, a, l, c, f, p, v, b, y, E, $;
                return e.concat(
                  tl(t) === eU
                    ? ((n = i),
                      (s = {
                        placement: t,
                        boundary: d,
                        rootBoundary: u,
                        padding: h,
                        flipVariations: g,
                        allowedAutoPlacements: m,
                      }),
                      (o = (r = s).placement),
                      (a = r.boundary),
                      (l = r.rootBoundary),
                      (c = r.padding),
                      (f = r.flipVariations),
                      (v = void 0 === (p = r.allowedAutoPlacements) ? e3 : p),
                      0 ===
                        (E = (y = (b = tk(o))
                          ? f
                            ? e1
                            : e1.filter(function (e) {
                                return tk(e) === b;
                              })
                          : eV).filter(function (e) {
                          return v.indexOf(e) >= 0;
                        })).length && (E = y),
                      Object.keys(
                        ($ = E.reduce(function (e, t) {
                          return (
                            (e[t] = tz(n, {
                              placement: t,
                              boundary: a,
                              rootBoundary: l,
                              padding: c,
                            })[tl(t)]),
                            e
                          );
                        }, {}))
                      ).sort(function (e, t) {
                        return $[e] - $[t];
                      }))
                    : t
                );
              }, []),
            E = i.rects.reference,
            $ = i.rects.popper,
            w = new Map(),
            A = !0,
            C = y[0],
            T = 0;
          T < y.length;
          T++
        ) {
          var k = y[T],
            L = tl(k),
            O = tk(k) === eK,
            x = ["top", ez].indexOf(L) >= 0,
            D = x ? "width" : "height",
            S = tz(i, { placement: k, boundary: d, rootBoundary: u, altBoundary: f, padding: h }),
            N = x ? (O ? eq : eF) : O ? ez : "top";
          E[D] > $[D] && (N = tN(N));
          var I = tN(N),
            _ = [];
          if (
            (o && _.push(S[L] <= 0),
            l && _.push(S[N] <= 0, S[I] <= 0),
            _.every(function (e) {
              return e;
            }))
          ) {
            (C = k), (A = !1);
            break;
          }
          w.set(k, _);
        }
        if (A)
          for (
            var P = g ? 3 : 1,
              M = function e(t) {
                var i = y.find(function (e) {
                  var i = w.get(e);
                  if (i)
                    return i.slice(0, t).every(function (e) {
                      return e;
                    });
                });
                if (i) return (C = i), "break";
              },
              H = P;
            H > 0 && "break" !== M(H);
            H--
          );
        i.placement !== C && ((i.modifiersData[s]._skip = !0), (i.placement = C), (i.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function tF(e, t, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: e.top - t.height - i.y,
        right: e.right - t.width + i.x,
        bottom: e.bottom - t.height + i.y,
        left: e.left - t.width - i.x,
      }
    );
  }
  function tU(e) {
    return ["top", eq, ez, eF].some(function (t) {
      return e[t] >= 0;
    });
  }
  let tV = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function e(t) {
        var i = t.state,
          n = t.name,
          s = i.rects.reference,
          r = i.rects.popper,
          o = i.modifiersData.preventOverflow,
          a = tz(i, { elementContext: "reference" }),
          l = tz(i, { altBoundary: !0 }),
          c = tF(a, s),
          h = tF(l, r, o),
          d = tU(c),
          u = tU(h);
        (i.modifiersData[n] = {
          referenceClippingOffsets: c,
          popperEscapeOffsets: h,
          isReferenceHidden: d,
          hasPopperEscaped: u,
        }),
          (i.attributes.popper = Object.assign({}, i.attributes.popper, {
            "data-popper-reference-hidden": d,
            "data-popper-escaped": u,
          }));
      },
    },
    tK = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function e(t) {
        var i = t.state,
          n = t.options,
          s = t.name,
          r = n.offset,
          o = void 0 === r ? [0, 0] : r,
          a = e3.reduce(function (e, t) {
            var n, s, r, a, l, c, h, d;
            return (
              (e[t] =
                ((n = t),
                (s = i.rects),
                (r = o),
                (l = [eF, "top"].indexOf((a = tl(n))) >= 0 ? -1 : 1),
                (h = (c =
                  "function" == typeof r ? r(Object.assign({}, s, { placement: n })) : r)[0]),
                (d = c[1]),
                (h = h || 0),
                (d = (d || 0) * l),
                [eF, eq].indexOf(a) >= 0 ? { x: d, y: h } : { x: h, y: d })),
              e
            );
          }, {}),
          l = a[i.placement],
          c = l.x,
          h = l.y;
        null != i.modifiersData.popperOffsets &&
          ((i.modifiersData.popperOffsets.x += c), (i.modifiersData.popperOffsets.y += h)),
          (i.modifiersData[s] = a);
      },
    },
    tX = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function e(t) {
        var i = t.state,
          n = t.name;
        i.modifiersData[n] = tR({
          reference: i.rects.reference,
          element: i.rects.popper,
          strategy: "absolute",
          placement: i.placement,
        });
      },
      data: {},
    },
    tY = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function e(t) {
        var i,
          n = t.state,
          s = t.options,
          r = t.name,
          o = s.mainAxis,
          a = void 0 === o || o,
          l = s.altAxis,
          c = void 0 !== l && l,
          h = s.boundary,
          d = s.rootBoundary,
          u = s.altBoundary,
          f = s.padding,
          p = s.tether,
          g = void 0 === p || p,
          m = s.tetherOffset,
          v = void 0 === m ? 0 : m,
          b = tz(n, { boundary: h, rootBoundary: d, padding: f, altBoundary: u }),
          y = tl(n.placement),
          E = tk(n.placement),
          $ = !E,
          w = tv(y),
          A = "x" === (i = w) ? "y" : "x",
          C = n.modifiersData.popperOffsets,
          T = n.rects.reference,
          k = n.rects.popper,
          L =
            "function" == typeof v ? v(Object.assign({}, n.rects, { placement: n.placement })) : v,
          O = { x: 0, y: 0 };
        if (C) {
          if (a || c) {
            var x = "y" === w ? "top" : eF,
              D = "y" === w ? ez : eq,
              S = "y" === w ? "height" : "width",
              N = C[w],
              I = C[w] + b[x],
              _ = C[w] - b[D],
              P = g ? -k[S] / 2 : 0,
              M = E === eK ? T[S] : k[S],
              H = E === eK ? -k[S] : -T[S],
              B = n.elements.arrow,
              j = g && B ? th(B) : { width: 0, height: 0 },
              W = n.modifiersData["arrow#persistent"]
                ? n.modifiersData["arrow#persistent"].padding
                : tw(),
              R = W[x],
              z = W[D],
              q = t$(0, T[S], j[S]),
              F = $ ? T[S] / 2 - P - q - R - L : M - q - R - L,
              U = $ ? -T[S] / 2 + P + q + z + L : H + q + z + L,
              V = n.elements.arrow && t8(n.elements.arrow),
              K = V ? ("y" === w ? V.clientTop || 0 : V.clientLeft || 0) : 0,
              X = n.modifiersData.offset ? n.modifiersData.offset[n.placement][w] : 0,
              Y = C[w] + F - X - K,
              Q = C[w] + U - X;
            if (a) {
              var G = t$(g ? ty(I, Y) : I, N, g ? tb(_, Q) : _);
              (C[w] = G), (O[w] = G - N);
            }
            if (c) {
              var Z = C[A],
                J = Z + b["x" === w ? "top" : eF],
                ee = Z - b["x" === w ? ez : eq],
                et = t$(g ? ty(J, Y) : J, Z, g ? tb(ee, Q) : ee);
              (C[A] = et), (O[A] = et - Z);
            }
          }
          n.modifiersData[r] = O;
        }
      },
      requiresIfExists: ["offset"],
    };
  var t0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function tQ() {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function t1(e) {
    void 0 === e && (e = {});
    var t = e,
      i = t.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = t.defaultOptions,
      r = void 0 === s ? t0 : s;
    return function e(t, i, s) {
      void 0 === s && (s = r);
      var o,
        a,
        l = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, t0, r),
          modifiersData: {},
          elements: { reference: t, popper: i },
          attributes: {},
          styles: {},
        },
        c = [],
        h = !1,
        d = {
          state: l,
          setOptions: function e(s) {
            var o,
              a,
              h,
              f,
              p,
              g,
              m,
              v,
              b = "function" == typeof s ? s(l.options) : s;
            u(),
              (l.options = Object.assign({}, r, l.options, b)),
              (l.scrollParents = {
                reference: ts(t) ? tB(t) : t.contextElement ? tB(t.contextElement) : [],
                popper: tB(i),
              });
            var y =
              ((v =
                ((f = h =
                  Object.keys(
                    (a = (o = [].concat(n, l.options.modifiers)).reduce(function (e, t) {
                      var i = e[t.name];
                      return (
                        (e[t.name] = i
                          ? Object.assign({}, i, t, {
                              options: Object.assign({}, i.options, t.options),
                              data: Object.assign({}, i.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {}))
                  ).map(function (e) {
                    return a[e];
                  })),
                (p = new Map()),
                (g = new Set()),
                (m = []),
                f.forEach(function (e) {
                  p.set(e.name, e);
                }),
                f.forEach(function (e) {
                  g.has(e.name) ||
                    (function e(t) {
                      g.add(t.name),
                        [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                          if (!g.has(t)) {
                            var i = p.get(t);
                            i && e(i);
                          }
                        }),
                        m.push(t);
                    })(e);
                }),
                m)),
              tt.reduce(function (e, t) {
                return e.concat(
                  v.filter(function (e) {
                    return e.phase === t;
                  })
                );
              }, []));
            return (
              (l.orderedModifiers = y.filter(function (e) {
                return e.enabled;
              })),
              l.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  i = e.options,
                  n = e.effect;
                if ("function" == typeof n) {
                  var s = n({ state: l, name: t, instance: d, options: void 0 === i ? {} : i }),
                    r = function e() {};
                  c.push(s || r);
                }
              }),
              d.update()
            );
          },
          forceUpdate: function e() {
            if (!h) {
              var t,
                i,
                n,
                s,
                r,
                o,
                a,
                c,
                u,
                f,
                p,
                g,
                m,
                v,
                b = l.elements,
                y = b.reference,
                E = b.popper;
              if (tQ(y, E)) {
                (l.rects = {
                  reference:
                    ((n = y),
                    (s = t8(E)),
                    (r = "fixed" === l.options.strategy),
                    (o = tr(s)),
                    tr(s) &&
                      ((u = (c = (a = s).getBoundingClientRect()).width / a.offsetWidth || 1),
                      c.height,
                      a.offsetHeight),
                    (p = tp(s)),
                    (g = tc(n)),
                    (m = { scrollLeft: 0, scrollTop: 0 }),
                    (v = { x: 0, y: 0 }),
                    (o || (!o && !r)) &&
                      (("body" !== ti(s) || tH(p)) &&
                        (m =
                          ((t = s),
                          t !== tn(t) && tr(t)
                            ? { scrollLeft: (i = t).scrollLeft, scrollTop: i.scrollTop }
                            : tP(t))),
                      tr(s)
                        ? ((v = tc(s)), (v.x += s.clientLeft), (v.y += s.clientTop))
                        : p && (v.x = tM(p))),
                    {
                      x: g.left + m.scrollLeft - v.x,
                      y: g.top + m.scrollTop - v.y,
                      width: g.width,
                      height: g.height,
                    }),
                  popper: th(E),
                }),
                  (l.reset = !1),
                  (l.placement = l.options.placement),
                  l.orderedModifiers.forEach(function (e) {
                    return (l.modifiersData[e.name] = Object.assign({}, e.data));
                  });
                for (var $ = 0; $ < l.orderedModifiers.length; $++) {
                  if (!0 === l.reset) {
                    (l.reset = !1), ($ = -1);
                    continue;
                  }
                  var w = l.orderedModifiers[$],
                    A = w.fn,
                    C = w.options,
                    T = void 0 === C ? {} : C,
                    k = w.name;
                  "function" == typeof A &&
                    (l = A({ state: l, options: T, name: k, instance: d }) || l);
                }
              }
            }
          },
          update:
            ((o = function () {
              return new Promise(function (e) {
                d.forceUpdate(), e(l);
              });
            }),
            function () {
              return (
                a ||
                  (a = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (a = void 0), e(o());
                    });
                  })),
                a
              );
            }),
          destroy: function e() {
            u(), (h = !0);
          },
        };
      if (!tQ(t, i)) return d;
      function u() {
        c.forEach(function (e) {
          return e();
        }),
          (c = []);
      }
      return (
        d.setOptions(s).then(function (e) {
          !h && s.onFirstUpdate && s.onFirstUpdate(e);
        }),
        d
      );
    };
  }
  var t3 = t1(),
    t2 = t1({ defaultModifiers: [tD, tX, tx, ta] }),
    t4 = t1({ defaultModifiers: [tD, tX, tx, ta, tK, tq, tY, tT, tV] });
  let tG = Object.freeze({
      __proto__: null,
      popperGenerator: t1,
      detectOverflow: tz,
      createPopperBase: t3,
      createPopper: t4,
      createPopperLite: t2,
      top: "top",
      bottom: ez,
      right: eq,
      left: eF,
      auto: eU,
      basePlacements: eV,
      start: eK,
      end: "end",
      clippingParents: eX,
      viewport: eY,
      popper: e0,
      reference: eQ,
      variationPlacements: e1,
      placements: e3,
      beforeRead: e2,
      read: e4,
      afterRead: eG,
      beforeMain: eZ,
      main: e6,
      afterMain: eJ,
      beforeWrite: e5,
      write: e7,
      afterWrite: te,
      modifierPhases: tt,
      applyStyles: ta,
      arrow: tT,
      computeStyles: tx,
      eventListeners: tD,
      flip: tq,
      hide: tV,
      offset: tK,
      popperOffsets: tX,
      preventOverflow: tY,
    }),
    tZ = "dropdown",
    t6 = ".bs.dropdown",
    tJ = ".data-api",
    t5 = "Escape",
    t7 = "Space",
    ie = "ArrowUp",
    it = "ArrowDown",
    ii = RegExp(`${ie}|${it}|${t5}`),
    is = `hide${t6}`,
    ir = `hidden${t6}`,
    io = `show${t6}`,
    ia = `shown${t6}`,
    il = `click${t6}${tJ}`,
    ic = `keydown${t6}${tJ}`,
    ih = `keyup${t6}${tJ}`,
    id = "show",
    iu = '[data-bs-toggle="dropdown"]',
    ip = ".dropdown-menu",
    ig = y() ? "top-end" : "top-start",
    im = y() ? "top-start" : "top-end",
    i8 = y() ? "bottom-end" : "bottom-start",
    iv = y() ? "bottom-start" : "bottom-end",
    ib = y() ? "left-start" : "right-start",
    iy = y() ? "right-start" : "left-start",
    iE = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    i$ = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class iw extends z {
    constructor(e, t) {
      super(e),
        (this._popper = null),
        (this._config = this._getConfig(t)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return iE;
    }
    static get DefaultType() {
      return i$;
    }
    static get NAME() {
      return tZ;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (u(this._element) || this._isShown(this._menu)) return;
      let e = { relatedTarget: this._element },
        t = j.trigger(this._element, io, e);
      if (t.defaultPrevented) return;
      let i = iw.getParentFromElement(this._element);
      this._inNavbar ? J.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i),
        "ontouchstart" in document.documentElement &&
          !i.closest(".navbar-nav") &&
          [].concat(...document.body.children).forEach((e) => j.on(e, "mouseover", p)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(id),
        this._element.classList.add(id),
        j.trigger(this._element, ia, e);
    }
    hide() {
      if (u(this._element) || !this._isShown(this._menu)) return;
      let e = { relatedTarget: this._element };
      this._completeHide(e);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
    }
    _completeHide(e) {
      let t = j.trigger(this._element, is, e);
      !t.defaultPrevented &&
        ("ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((e) => j.off(e, "mouseover", p)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(id),
        this._element.classList.remove(id),
        this._element.setAttribute("aria-expanded", "false"),
        J.removeDataAttribute(this._menu, "popper"),
        j.trigger(this._element, ir, e));
    }
    _getConfig(e) {
      if (
        (h(
          tZ,
          (e = { ...this.constructor.Default, ...J.getDataAttributes(this._element), ...e }),
          this.constructor.DefaultType
        ),
        "object" == typeof e.reference &&
          !l(e.reference) &&
          "function" != typeof e.reference.getBoundingClientRect)
      )
        throw TypeError(
          `${tZ.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return e;
    }
    _createPopper(e) {
      if (void 0 === tG)
        throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let t = this._element;
      "parent" === this._config.reference
        ? (t = e)
        : l(this._config.reference)
        ? (t = c(this._config.reference))
        : "object" == typeof this._config.reference && (t = this._config.reference);
      let i = this._getPopperConfig(),
        n = i.modifiers.find((e) => "applyStyles" === e.name && !1 === e.enabled);
      (this._popper = t4(t, this._menu, i)),
        n && J.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(e = this._element) {
      return e.classList.contains(id);
    }
    _getMenuElement() {
      return ee.next(this._element, ip)[0];
    }
    _getPlacement() {
      let e = this._element.parentNode;
      if (e.classList.contains("dropend")) return ib;
      if (e.classList.contains("dropstart")) return iy;
      let t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? (t ? im : ig) : t ? iv : i8;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      let { offset: e } = this._config;
      return "string" == typeof e
        ? e.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof e
        ? (t) => e(t, this._element)
        : e;
    }
    _getPopperConfig() {
      let e = {
        placement: this._getPlacement(),
        modifiers: [
          { name: "preventOverflow", options: { boundary: this._config.boundary } },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display && (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...e,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(e)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: e, target: t }) {
      let i = ee
        .find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu)
        .filter(d);
      i.length && A(i, t, e === it, !i.includes(t)).focus();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = iw.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
    static clearMenus(e) {
      if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))) return;
      let t = ee.find(iu);
      for (let i = 0, n = t.length; i < n; i++) {
        let s = iw.getInstance(t[i]);
        if (!s || !1 === s._config.autoClose || !s._isShown()) continue;
        let r = { relatedTarget: s._element };
        if (e) {
          let o = e.composedPath(),
            a = o.includes(s._menu);
          if (
            o.includes(s._element) ||
            ("inside" === s._config.autoClose && !a) ||
            ("outside" === s._config.autoClose && a) ||
            (s._menu.contains(e.target) &&
              (("keyup" === e.type && "Tab" === e.key) ||
                /input|select|option|textarea|form/i.test(e.target.tagName)))
          )
            continue;
          "click" === e.type && (r.clickEvent = e);
        }
        s._completeHide(r);
      }
    }
    static getParentFromElement(e) {
      return r(e) || e.parentNode;
    }
    static dataApiKeydownHandler(e) {
      if (
        /input|textarea/i.test(e.target.tagName)
          ? e.key === t7 ||
            (e.key !== t5 && ((e.key !== it && e.key !== ie) || e.target.closest(ip)))
          : !ii.test(e.key)
      )
        return;
      let t = this.classList.contains(id);
      if ((!t && e.key === t5) || (e.preventDefault(), e.stopPropagation(), u(this))) return;
      let i = this.matches(iu) ? this : ee.prev(this, iu)[0],
        n = iw.getOrCreateInstance(i);
      if (e.key === t5) {
        n.hide();
        return;
      }
      if (e.key === ie || e.key === it) {
        t || n.show(), n._selectMenuItem(e);
        return;
      }
      (t && e.key !== t7) || iw.clearMenus();
    }
  }
  j.on(document, ic, iu, iw.dataApiKeydownHandler),
    j.on(document, ic, ip, iw.dataApiKeydownHandler),
    j.on(document, il, iw.clearMenus),
    j.on(document, ih, iw.clearMenus),
    j.on(document, il, iu, function (e) {
      e.preventDefault(), iw.getOrCreateInstance(this).toggle();
    }),
    E(iw);
  let iA = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    iC = ".sticky-top";
  class iT {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      let e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
    hide() {
      let e = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (t) => t + e),
        this._setElementAttributes(iA, "paddingRight", (t) => t + e),
        this._setElementAttributes(iC, "marginRight", (t) => t - e);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(e, t, i) {
      let n = this.getWidth(),
        s = (e) => {
          if (e !== this._element && window.innerWidth > e.clientWidth + n) return;
          this._saveInitialAttribute(e, t);
          let s = window.getComputedStyle(e)[t];
          e.style[t] = `${i(Number.parseFloat(s))}px`;
        };
      this._applyManipulationCallback(e, s);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(iA, "paddingRight"),
        this._resetElementAttributes(iC, "marginRight");
    }
    _saveInitialAttribute(e, t) {
      let i = e.style[t];
      i && J.setDataAttribute(e, t, i);
    }
    _resetElementAttributes(e, t) {
      let i = (e) => {
        let i = J.getDataAttribute(e, t);
        void 0 === i ? e.style.removeProperty(t) : (J.removeDataAttribute(e, t), (e.style[t] = i));
      };
      this._applyManipulationCallback(e, i);
    }
    _applyManipulationCallback(e, t) {
      l(e) ? t(e) : ee.find(e, this._element).forEach(t);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  let ik = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    iL = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    iO = "backdrop",
    ix = "show",
    i9 = `mousedown.bs.${iO}`;
  class iD {
    constructor(e) {
      (this._config = this._getConfig(e)), (this._isAppended = !1), (this._element = null);
    }
    show(e) {
      if (!this._config.isVisible) {
        $(e);
        return;
      }
      this._append(),
        this._config.isAnimated && g(this._getElement()),
        this._getElement().classList.add(ix),
        this._emulateAnimation(() => {
          $(e);
        });
    }
    hide(e) {
      if (!this._config.isVisible) {
        $(e);
        return;
      }
      this._getElement().classList.remove(ix),
        this._emulateAnimation(() => {
          this.dispose(), $(e);
        });
    }
    _getElement() {
      if (!this._element) {
        let e = document.createElement("div");
        (e.className = this._config.className),
          this._config.isAnimated && e.classList.add("fade"),
          (this._element = e);
      }
      return this._element;
    }
    _getConfig(e) {
      return (
        ((e = { ...ik, ...("object" == typeof e ? e : {}) }).rootElement = c(e.rootElement)),
        h(iO, e, iL),
        e
      );
    }
    _append() {
      !this._isAppended &&
        (this._config.rootElement.append(this._getElement()),
        j.on(this._getElement(), i9, () => {
          $(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (j.off(this._element, i9), this._element.remove(), (this._isAppended = !1));
    }
    _emulateAnimation(e) {
      w(e, this._getElement(), this._config.isAnimated);
    }
  }
  let iS = { trapElement: null, autofocus: !0 },
    iN = { trapElement: "element", autofocus: "boolean" },
    iI = ".bs.focustrap",
    i_ = `focusin${iI}`,
    iP = `keydown.tab${iI}`,
    iM = "backward";
  class iH {
    constructor(e) {
      (this._config = this._getConfig(e)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      let { trapElement: e, autofocus: t } = this._config;
      !this._isActive &&
        (t && e.focus(),
        j.off(document, iI),
        j.on(document, i_, (e) => this._handleFocusin(e)),
        j.on(document, iP, (e) => this._handleKeydown(e)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), j.off(document, iI));
    }
    _handleFocusin(e) {
      let { target: t } = e,
        { trapElement: i } = this._config;
      if (t === document || t === i || i.contains(t)) return;
      let n = ee.focusableChildren(i);
      0 === n.length
        ? i.focus()
        : this._lastTabNavDirection === iM
        ? n[n.length - 1].focus()
        : n[0].focus();
    }
    _handleKeydown(e) {
      "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? iM : "forward");
    }
    _getConfig(e) {
      return h("focustrap", (e = { ...iS, ...("object" == typeof e ? e : {}) }), iN), e;
    }
  }
  let iB = "modal",
    ij = ".bs.modal",
    iW = "Escape",
    iR = { backdrop: !0, keyboard: !0, focus: !0 },
    iz = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" },
    iq = `hide${ij}`,
    iF = `hidePrevented${ij}`,
    iU = `hidden${ij}`,
    iV = `show${ij}`,
    iK = `shown${ij}`,
    iX = `resize${ij}`,
    iY = `click.dismiss${ij}`,
    i0 = `keydown.dismiss${ij}`,
    iQ = `mouseup.dismiss${ij}`,
    i1 = `mousedown.dismiss${ij}`,
    i3 = `click${ij}.data-api`,
    i2 = "modal-open",
    i4 = "show",
    iG = "modal-static";
  class iZ extends z {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._dialog = ee.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new iT());
    }
    static get Default() {
      return iR;
    }
    static get NAME() {
      return iB;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      if (this._isShown || this._isTransitioning) return;
      let t = j.trigger(this._element, iV, { relatedTarget: e });
      !t.defaultPrevented &&
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(i2),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        j.on(this._dialog, i1, () => {
          j.one(this._element, iQ, (e) => {
            e.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(e)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      let e = j.trigger(this._element, iq);
      if (e.defaultPrevented) return;
      this._isShown = !1;
      let t = this._isAnimated();
      t && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove(i4),
        j.off(this._element, iY),
        j.off(this._dialog, i1),
        this._queueCallback(() => this._hideModal(), this._element, t);
    }
    dispose() {
      [window, this._dialog].forEach((e) => j.off(e, ij)),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new iD({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _initializeFocusTrap() {
      return new iH({ trapElement: this._element });
    }
    _getConfig(e) {
      return (
        h(
          iB,
          (e = {
            ...iR,
            ...J.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          iz
        ),
        e
      );
    }
    _showElement(e) {
      let t = this._isAnimated(),
        i = ee.findOne(".modal-body", this._dialog);
      (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        i && (i.scrollTop = 0),
        t && g(this._element),
        this._element.classList.add(i4);
      let n = () => {
        this._config.focus && this._focustrap.activate(),
          (this._isTransitioning = !1),
          j.trigger(this._element, iK, { relatedTarget: e });
      };
      this._queueCallback(n, this._dialog, t);
    }
    _setEscapeEvent() {
      this._isShown
        ? j.on(this._element, i0, (e) => {
            this._config.keyboard && e.key === iW
              ? (e.preventDefault(), this.hide())
              : this._config.keyboard || e.key !== iW || this._triggerBackdropTransition();
          })
        : j.off(this._element, i0);
    }
    _setResizeEvent() {
      this._isShown ? j.on(window, iX, () => this._adjustDialog()) : j.off(window, iX);
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(i2),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            j.trigger(this._element, iU);
        });
    }
    _showBackdrop(e) {
      j.on(this._element, iY, (e) => {
        if (this._ignoreBackdropClick) {
          this._ignoreBackdropClick = !1;
          return;
        }
        e.target === e.currentTarget &&
          (!0 === this._config.backdrop
            ? this.hide()
            : "static" === this._config.backdrop && this._triggerBackdropTransition());
      }),
        this._backdrop.show(e);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      let e = j.trigger(this._element, iF);
      if (e.defaultPrevented) return;
      let { classList: t, scrollHeight: i, style: n } = this._element,
        s = i > document.documentElement.clientHeight;
      !((!s && "hidden" === n.overflowY) || t.contains(iG)) &&
        (s || (n.overflowY = "hidden"),
        t.add(iG),
        this._queueCallback(() => {
          t.remove(iG),
            s ||
              this._queueCallback(() => {
                n.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      let e = this._element.scrollHeight > document.documentElement.clientHeight,
        t = this._scrollBar.getWidth(),
        i = t > 0;
      ((!i && e && !y()) || (i && !e && y())) && (this._element.style.paddingLeft = `${t}px`),
        ((i && !e && !y()) || (!i && e && y())) && (this._element.style.paddingRight = `${t}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
    }
    static jQueryInterface(e, t) {
      return this.each(function () {
        let i = iZ.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
          i[e](t);
        }
      });
    }
  }
  j.on(document, i3, '[data-bs-toggle="modal"]', function (e) {
    let t = r(this);
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
      j.one(t, iV, (e) => {
        !e.defaultPrevented &&
          j.one(t, iU, () => {
            d(this) && this.focus();
          });
      });
    let i = ee.findOne(".modal.show");
    i && iZ.getInstance(i).hide();
    let n = iZ.getOrCreateInstance(t);
    n.toggle(this);
  }),
    q(iZ),
    E(iZ);
  let i6 = "offcanvas",
    iJ = ".bs.offcanvas",
    i5 = ".data-api",
    i7 = `load${iJ}${i5}`,
    ne = { backdrop: !0, keyboard: !0, scroll: !1 },
    nt = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    ni = "show",
    nn = ".offcanvas.show",
    ns = `show${iJ}`,
    nr = `shown${iJ}`,
    no = `hide${iJ}`,
    na = `hidden${iJ}`,
    nl = `click${iJ}${i5}`,
    nc = `keydown.dismiss${iJ}`;
  class nh extends z {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return i6;
    }
    static get Default() {
      return ne;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      if (this._isShown) return;
      let t = j.trigger(this._element, ns, { relatedTarget: e });
      if (t.defaultPrevented) return;
      (this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new iT().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(ni);
      let i = () => {
        this._config.scroll || this._focustrap.activate(),
          j.trigger(this._element, nr, { relatedTarget: e });
      };
      this._queueCallback(i, this._element, !0);
    }
    hide() {
      if (!this._isShown) return;
      let e = j.trigger(this._element, no);
      if (e.defaultPrevented) return;
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.remove(ni),
        this._backdrop.hide();
      let t = () => {
        this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._element.style.visibility = "hidden"),
          this._config.scroll || new iT().reset(),
          j.trigger(this._element, na);
      };
      this._queueCallback(t, this._element, !0);
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(e) {
      return (
        h(
          i6,
          (e = {
            ...ne,
            ...J.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          nt
        ),
        e
      );
    }
    _initializeBackDrop() {
      return new iD({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new iH({ trapElement: this._element });
    }
    _addEventListeners() {
      j.on(this._element, nc, (e) => {
        this._config.keyboard && "Escape" === e.key && this.hide();
      });
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nh.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  j.on(document, nl, '[data-bs-toggle="offcanvas"]', function (e) {
    let t = r(this);
    if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this))) return;
    j.one(t, na, () => {
      d(this) && this.focus();
    });
    let i = ee.findOne(nn);
    i && i !== t && nh.getInstance(i).hide();
    let n = nh.getOrCreateInstance(t);
    n.toggle(this);
  }),
    j.on(window, i7, () => ee.find(nn).forEach((e) => nh.getOrCreateInstance(e).show())),
    q(nh),
    E(nh);
  let nd = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    nu = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    nf =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    np = (e, t) => {
      let i = e.nodeName.toLowerCase();
      if (t.includes(i)) return !nd.has(i) || Boolean(nu.test(e.nodeValue) || nf.test(e.nodeValue));
      let n = t.filter((e) => e instanceof RegExp);
      for (let s = 0, r = n.length; s < r; s++) if (n[s].test(i)) return !0;
      return !1;
    };
  function ng(e, t, i) {
    if (!e.length) return e;
    if (i && "function" == typeof i) return i(e);
    let n = new window.DOMParser(),
      s = n.parseFromString(e, "text/html"),
      r = [].concat(...s.body.querySelectorAll("*"));
    for (let o = 0, a = r.length; o < a; o++) {
      let l = r[o],
        c = l.nodeName.toLowerCase();
      if (!Object.keys(t).includes(c)) {
        l.remove();
        continue;
      }
      let h = [].concat(...l.attributes),
        d = [].concat(t["*"] || [], t[c] || []);
      h.forEach((e) => {
        np(e, d) || l.removeAttribute(e.nodeName);
      });
    }
    return s.body.innerHTML;
  }
  let nm = "tooltip",
    n8 = ".bs.tooltip",
    nv = new Set(["sanitize", "allowList", "sanitizeFn"]),
    nb = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    ny = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: y() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: y() ? "right" : "left",
    },
    nE = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    n$ = {
      HIDE: `hide${n8}`,
      HIDDEN: `hidden${n8}`,
      SHOW: `show${n8}`,
      SHOWN: `shown${n8}`,
      INSERTED: `inserted${n8}`,
      CLICK: `click${n8}`,
      FOCUSIN: `focusin${n8}`,
      FOCUSOUT: `focusout${n8}`,
      MOUSEENTER: `mouseenter${n8}`,
      MOUSELEAVE: `mouseleave${n8}`,
    },
    nw = "fade",
    nA = "show",
    nC = "show",
    nT = ".tooltip-inner",
    nk = ".modal",
    nL = "hide.bs.modal",
    nO = "hover",
    nx = "focus";
  class n9 extends z {
    constructor(e, t) {
      if (void 0 === tG)
        throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(t)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return nE;
    }
    static get NAME() {
      return nm;
    }
    static get Event() {
      return n$;
    }
    static get DefaultType() {
      return nb;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(e) {
      if (this._isEnabled) {
        if (e) {
          let t = this._initializeOnDelegatedTarget(e);
          (t._activeTrigger.click = !t._activeTrigger.click),
            t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
        } else {
          if (this.getTipElement().classList.contains(nA)) {
            this._leave(null, this);
            return;
          }
          this._enter(null, this);
        }
      }
    }
    dispose() {
      clearTimeout(this._timeout),
        j.off(this._element.closest(nk), nL, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw Error("Please use show on visible elements");
      if (!(this.isWithContent() && this._isEnabled)) return;
      let e = j.trigger(this._element, this.constructor.Event.SHOW),
        t = f(this._element),
        n =
          null === t
            ? this._element.ownerDocument.documentElement.contains(this._element)
            : t.contains(this._element);
      if (e.defaultPrevented || !n) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(nT).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      let s = this.getTipElement(),
        r = i(this.constructor.NAME);
      s.setAttribute("id", r),
        this._element.setAttribute("aria-describedby", r),
        this._config.animation && s.classList.add(nw);
      let o =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, s, this._element)
            : this._config.placement,
        a = this._getAttachment(o);
      this._addAttachmentClass(a);
      let { container: l } = this._config;
      R.set(s, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (l.append(s), j.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = t4(this._element, s, this._getPopperConfig(a))),
        s.classList.add(nA);
      let c = this._resolvePossibleFunction(this._config.customClass);
      c && s.classList.add(...c.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((e) => {
            j.on(e, "mouseover", p);
          });
      let h = () => {
          let e = this._hoverState;
          (this._hoverState = null),
            j.trigger(this._element, this.constructor.Event.SHOWN),
            "out" === e && this._leave(null, this);
        },
        d = this.tip.classList.contains(nw);
      this._queueCallback(h, this.tip, d);
    }
    hide() {
      if (!this._popper) return;
      let e = this.getTipElement(),
        t = () => {
          !this._isWithActiveTrigger() &&
            (this._hoverState !== nC && e.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            j.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper());
        },
        i = j.trigger(this._element, this.constructor.Event.HIDE);
      if (i.defaultPrevented) return;
      e.classList.remove(nA),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((e) => j.off(e, "mouseover", p)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger[nx] = !1),
        (this._activeTrigger[nO] = !1);
      let n = this.tip.classList.contains(nw);
      this._queueCallback(t, this.tip, n), (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      let e = document.createElement("div");
      e.innerHTML = this._config.template;
      let t = e.children[0];
      return this.setContent(t), t.classList.remove(nw, nA), (this.tip = t), this.tip;
    }
    setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), nT);
    }
    _sanitizeAndSetContent(e, t, i) {
      let n = ee.findOne(i, e);
      if (!t && n) {
        n.remove();
        return;
      }
      this.setElementContent(n, t);
    }
    setElementContent(e, t) {
      if (null !== e) {
        if (l(t)) {
          (t = c(t)),
            this._config.html
              ? t.parentNode !== e && ((e.innerHTML = ""), e.append(t))
              : (e.textContent = t.textContent);
          return;
        }
        this._config.html
          ? (this._config.sanitize && (t = ng(t, this._config.allowList, this._config.sanitizeFn)),
            (e.innerHTML = t))
          : (e.textContent = t);
      }
    }
    getTitle() {
      let e = this._element.getAttribute("data-bs-original-title") || this._config.title;
      return this._resolvePossibleFunction(e);
    }
    updateAttachment(e) {
      return "right" === e ? "end" : "left" === e ? "start" : e;
    }
    _initializeOnDelegatedTarget(e, t) {
      return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
    }
    _getOffset() {
      let { offset: e } = this._config;
      return "string" == typeof e
        ? e.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof e
        ? (t) => e(t, this._element)
        : e;
    }
    _resolvePossibleFunction(e) {
      return "function" == typeof e ? e.call(this._element) : e;
    }
    _getPopperConfig(e) {
      let t = {
        placement: e,
        modifiers: [
          { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
          { name: "offset", options: { offset: this._getOffset() } },
          { name: "preventOverflow", options: { boundary: this._config.boundary } },
          { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (e) => this._handlePopperPlacementChange(e),
          },
        ],
        onFirstUpdate: (e) => {
          e.options.placement !== e.placement && this._handlePopperPlacementChange(e);
        },
      };
      return {
        ...t,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(t)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(e) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`
      );
    }
    _getAttachment(e) {
      return ny[e.toUpperCase()];
    }
    _setListeners() {
      let e = this._config.trigger.split(" ");
      e.forEach((e) => {
        if ("click" === e)
          j.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e) =>
            this.toggle(e)
          );
        else if ("manual" !== e) {
          let t = e === nO ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
            i = e === nO ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          j.on(this._element, t, this._config.selector, (e) => this._enter(e)),
            j.on(this._element, i, this._config.selector, (e) => this._leave(e));
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        j.on(this._element.closest(nk), nL, this._hideModalHandler),
        this._config.selector
          ? (this._config = { ...this._config, trigger: "manual", selector: "" })
          : this._fixTitle();
    }
    _fixTitle() {
      let e = this._element.getAttribute("title"),
        t = typeof this._element.getAttribute("data-bs-original-title");
      (e || "string" !== t) &&
        (this._element.setAttribute("data-bs-original-title", e || ""),
        !e ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", e),
        this._element.setAttribute("title", ""));
    }
    _enter(e, t) {
      if (
        ((t = this._initializeOnDelegatedTarget(e, t)),
        e && (t._activeTrigger["focusin" === e.type ? nx : nO] = !0),
        t.getTipElement().classList.contains(nA) || t._hoverState === nC)
      ) {
        t._hoverState = nC;
        return;
      }
      if (
        (clearTimeout(t._timeout), (t._hoverState = nC), !t._config.delay || !t._config.delay.show)
      ) {
        t.show();
        return;
      }
      t._timeout = setTimeout(() => {
        t._hoverState === nC && t.show();
      }, t._config.delay.show);
    }
    _leave(e, t) {
      if (
        ((t = this._initializeOnDelegatedTarget(e, t)),
        e &&
          (t._activeTrigger["focusout" === e.type ? nx : nO] = t._element.contains(
            e.relatedTarget
          )),
        !t._isWithActiveTrigger())
      ) {
        if (
          (clearTimeout(t._timeout),
          (t._hoverState = "out"),
          !t._config.delay || !t._config.delay.hide)
        ) {
          t.hide();
          return;
        }
        t._timeout = setTimeout(() => {
          "out" === t._hoverState && t.hide();
        }, t._config.delay.hide);
      }
    }
    _isWithActiveTrigger() {
      for (let e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
      return !1;
    }
    _getConfig(e) {
      let t = J.getDataAttributes(this._element);
      return (
        Object.keys(t).forEach((e) => {
          nv.has(e) && delete t[e];
        }),
        ((e = {
          ...this.constructor.Default,
          ...t,
          ...("object" == typeof e && e ? e : {}),
        }).container = !1 === e.container ? document.body : c(e.container)),
        "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }),
        "number" == typeof e.title && (e.title = e.title.toString()),
        "number" == typeof e.content && (e.content = e.content.toString()),
        h(nm, e, this.constructor.DefaultType),
        e.sanitize && (e.template = ng(e.template, e.allowList, e.sanitizeFn)),
        e
      );
    }
    _getDelegateConfig() {
      let e = {};
      for (let t in this._config)
        this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
      return e;
    }
    _cleanTipClass() {
      let e = this.getTipElement(),
        t = RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        i = e.getAttribute("class").match(t);
      null !== i && i.length > 0 && i.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(e) {
      let { state: t } = e;
      t &&
        ((this.tip = t.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(t.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = n9.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  E(n9);
  let nD = ".bs.popover",
    nS = {
      ...n9.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    nN = { ...n9.DefaultType, content: "(string|element|function)" },
    nI = {
      HIDE: `hide${nD}`,
      HIDDEN: `hidden${nD}`,
      SHOW: `show${nD}`,
      SHOWN: `shown${nD}`,
      INSERTED: `inserted${nD}`,
      CLICK: `click${nD}`,
      FOCUSIN: `focusin${nD}`,
      FOCUSOUT: `focusout${nD}`,
      MOUSEENTER: `mouseenter${nD}`,
      MOUSELEAVE: `mouseleave${nD}`,
    };
  class n_ extends n9 {
    static get Default() {
      return nS;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return nI;
    }
    static get DefaultType() {
      return nN;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"),
        this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = n_.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  E(n_);
  let nP = "scrollspy",
    nM = ".bs.scrollspy",
    nH = { offset: 10, method: "auto", target: "" },
    nB = { offset: "number", method: "string", target: "(string|element)" },
    nj = `activate${nM}`,
    nW = `scroll${nM}`,
    nR = `load${nM}.data-api`,
    nz = "dropdown-item",
    nq = "active",
    nF = ".nav-link",
    nU = ".list-group-item",
    nV = `${nF}, ${nU}, .${nz}`,
    nK = "position";
  class nX extends z {
    constructor(e, t) {
      super(e),
        (this._scrollElement = "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(t)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        j.on(this._scrollElement, nW, () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return nH;
    }
    static get NAME() {
      return nP;
    }
    refresh() {
      let e = this._scrollElement === this._scrollElement.window ? "offset" : nK,
        t = "auto" === this._config.method ? e : this._config.method,
        i = t === nK ? this._getScrollTop() : 0;
      (this._offsets = []), (this._targets = []), (this._scrollHeight = this._getScrollHeight());
      let n = ee.find(nV, this._config.target);
      n.map((e) => {
        let n = s(e),
          r = n ? ee.findOne(n) : null;
        if (r) {
          let o = r.getBoundingClientRect();
          if (o.width || o.height) return [J[t](r).top + i, n];
        }
        return null;
      })
        .filter((e) => e)
        .sort((e, t) => e[0] - t[0])
        .forEach((e) => {
          this._offsets.push(e[0]), this._targets.push(e[1]);
        });
    }
    dispose() {
      j.off(this._scrollElement, nM), super.dispose();
    }
    _getConfig(e) {
      return (
        ((e = {
          ...nH,
          ...J.getDataAttributes(this._element),
          ...("object" == typeof e && e ? e : {}),
        }).target = c(e.target) || document.documentElement),
        h(nP, e, nB),
        e
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      let e = this._getScrollTop() + this._config.offset,
        t = this._getScrollHeight(),
        i = this._config.offset + t - this._getOffsetHeight();
      if ((this._scrollHeight !== t && this.refresh(), e >= i)) {
        let n = this._targets[this._targets.length - 1];
        this._activeTarget !== n && this._activate(n);
        return;
      }
      if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) {
        (this._activeTarget = null), this._clear();
        return;
      }
      for (let s = this._offsets.length; s--; ) {
        let r =
          this._activeTarget !== this._targets[s] &&
          e >= this._offsets[s] &&
          (void 0 === this._offsets[s + 1] || e < this._offsets[s + 1]);
        r && this._activate(this._targets[s]);
      }
    }
    _activate(e) {
      (this._activeTarget = e), this._clear();
      let t = nV.split(",").map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
        i = ee.findOne(t.join(","), this._config.target);
      i.classList.add(nq),
        i.classList.contains(nz)
          ? ee.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(nq)
          : ee.parents(i, ".nav, .list-group").forEach((e) => {
              ee.prev(e, `${nF}, ${nU}`).forEach((e) => e.classList.add(nq)),
                ee.prev(e, ".nav-item").forEach((e) => {
                  ee.children(e, nF).forEach((e) => e.classList.add(nq));
                });
            }),
        j.trigger(this._scrollElement, nj, { relatedTarget: e });
    }
    _clear() {
      ee.find(nV, this._config.target)
        .filter((e) => e.classList.contains(nq))
        .forEach((e) => e.classList.remove(nq));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nX.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  j.on(window, nR, () => {
    ee.find('[data-bs-spy="scroll"]').forEach((e) => new nX(e));
  }),
    E(nX);
  let nY = ".bs.tab",
    n0 = `hide${nY}`,
    nQ = `hidden${nY}`,
    n1 = `show${nY}`,
    n3 = `shown${nY}`,
    n2 = `click${nY}.data-api`,
    n4 = "active",
    nG = "fade",
    nZ = "show",
    n6 = ".active",
    nJ = ":scope > li > .active";
  class n5 extends z {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(n4)
      )
        return;
      let e,
        t = r(this._element),
        i = this._element.closest(".nav, .list-group");
      if (i) {
        let n = "UL" === i.nodeName || "OL" === i.nodeName ? nJ : n6;
        e = (e = ee.find(n, i))[e.length - 1];
      }
      let s = e ? j.trigger(e, n0, { relatedTarget: this._element }) : null,
        o = j.trigger(this._element, n1, { relatedTarget: e });
      if (o.defaultPrevented || (null !== s && s.defaultPrevented)) return;
      this._activate(this._element, i);
      let a = () => {
        j.trigger(e, nQ, { relatedTarget: this._element }),
          j.trigger(this._element, n3, { relatedTarget: e });
      };
      t ? this._activate(t, t.parentNode, a) : a();
    }
    _activate(e, t, i) {
      let n =
          t && ("UL" === t.nodeName || "OL" === t.nodeName) ? ee.find(nJ, t) : ee.children(t, n6),
        s = n[0],
        r = i && s && s.classList.contains(nG),
        o = () => this._transitionComplete(e, s, i);
      s && r ? (s.classList.remove(nZ), this._queueCallback(o, e, !0)) : o();
    }
    _transitionComplete(e, t, i) {
      if (t) {
        t.classList.remove(n4);
        let n = ee.findOne(":scope > .dropdown-menu .active", t.parentNode);
        n && n.classList.remove(n4),
          "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }
      e.classList.add(n4),
        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
        g(e),
        e.classList.contains(nG) && e.classList.add(nZ);
      let s = e.parentNode;
      if (
        (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu"))
      ) {
        let r = e.closest(".dropdown");
        r && ee.find(".dropdown-toggle", r).forEach((e) => e.classList.add(n4)),
          e.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = n5.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  j.on(
    document,
    n2,
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (e) {
      if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this))) return;
      let t = n5.getOrCreateInstance(this);
      t.show();
    }
  ),
    E(n5);
  let n7 = "toast",
    se = ".bs.toast",
    st = `mouseover${se}`,
    si = `mouseout${se}`,
    sn = `focusin${se}`,
    ss = `focusout${se}`,
    sr = `hide${se}`,
    so = `hidden${se}`,
    sa = `show${se}`,
    sl = `shown${se}`,
    sc = "hide",
    sh = "show",
    sd = "showing",
    su = { animation: "boolean", autohide: "boolean", delay: "number" },
    sf = { animation: !0, autohide: !0, delay: 5e3 };
  class sp extends z {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return su;
    }
    static get Default() {
      return sf;
    }
    static get NAME() {
      return n7;
    }
    show() {
      let e = j.trigger(this._element, sa);
      if (e.defaultPrevented) return;
      this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
      let t = () => {
        this._element.classList.remove(sd), j.trigger(this._element, sl), this._maybeScheduleHide();
      };
      this._element.classList.remove(sc),
        g(this._element),
        this._element.classList.add(sh),
        this._element.classList.add(sd),
        this._queueCallback(t, this._element, this._config.animation);
    }
    hide() {
      if (!this._element.classList.contains(sh)) return;
      let e = j.trigger(this._element, sr);
      if (e.defaultPrevented) return;
      let t = () => {
        this._element.classList.add(sc),
          this._element.classList.remove(sd),
          this._element.classList.remove(sh),
          j.trigger(this._element, so);
      };
      this._element.classList.add(sd),
        this._queueCallback(t, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(sh) && this._element.classList.remove(sh),
        super.dispose();
    }
    _getConfig(e) {
      return (
        h(
          n7,
          (e = {
            ...sf,
            ...J.getDataAttributes(this._element),
            ...("object" == typeof e && e ? e : {}),
          }),
          this.constructor.DefaultType
        ),
        e
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        !this._hasMouseInteraction &&
        !this._hasKeyboardInteraction &&
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay));
    }
    _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }
      if (t) {
        this._clearTimeout();
        return;
      }
      let i = e.relatedTarget;
      !(this._element === i || this._element.contains(i)) && this._maybeScheduleHide();
    }
    _setListeners() {
      j.on(this._element, st, (e) => this._onInteraction(e, !0)),
        j.on(this._element, si, (e) => this._onInteraction(e, !1)),
        j.on(this._element, sn, (e) => this._onInteraction(e, !0)),
        j.on(this._element, ss, (e) => this._onInteraction(e, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = sp.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  return (
    q(sp),
    E(sp),
    {
      Alert: K,
      Button: Q,
      Carousel: eT,
      Collapse: eR,
      Dropdown: iw,
      Modal: iZ,
      Offcanvas: nh,
      Popover: n_,
      ScrollSpy: nX,
      Tab: n5,
      Toast: sp,
      Tooltip: n9,
    }
  );
});
