/*!For license information please see main.js.LICENSE.txt*/ (() => {
  var t = {
      1590: (t) => {
        'use strict';
        var e,
          i = 'object' == typeof Reflect ? Reflect : null,
          r =
            i && 'function' == typeof i.apply
              ? i.apply
              : function (t, e, i) {
                  return Function.prototype.apply.call(t, e, i);
                };
        e =
          i && 'function' == typeof i.ownKeys
            ? i.ownKeys
            : Object.getOwnPropertySymbols
            ? function (t) {
                return Object.getOwnPropertyNames(t).concat(
                  Object.getOwnPropertySymbols(t)
                );
              }
            : function (t) {
                return Object.getOwnPropertyNames(t);
              };
        var s =
          Number.isNaN ||
          function (t) {
            return t != t;
          };
        function n() {
          n.init.call(this);
        }
        (t.exports = n),
          (t.exports.once = function (t, e) {
            return new Promise(function (i, r) {
              function s(i) {
                t.removeListener(e, n), r(i);
              }
              function n() {
                'function' == typeof t.removeListener &&
                  t.removeListener('error', s),
                  i([].slice.call(arguments));
              }
              m(t, e, n, {once: !0}),
                'error' !== e &&
                  (function (t, e, i) {
                    'function' == typeof t.on && m(t, 'error', e, i);
                  })(t, s, {once: !0});
            });
          }),
          (n.EventEmitter = n),
          (n.prototype._events = void 0),
          (n.prototype._eventsCount = 0),
          (n.prototype._maxListeners = void 0);
        var o = 10;
        function a(t) {
          if ('function' != typeof t)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof t
            );
        }
        function h(t) {
          return void 0 === t._maxListeners
            ? n.defaultMaxListeners
            : t._maxListeners;
        }
        function u(t, e, i, r) {
          var s, n, o, u;
          if (
            (a(i),
            void 0 === (n = t._events)
              ? ((n = t._events = Object.create(null)), (t._eventsCount = 0))
              : (void 0 !== n.newListener &&
                  (t.emit('newListener', e, i.listener ? i.listener : i),
                  (n = t._events)),
                (o = n[e])),
            void 0 === o)
          )
            (o = n[e] = i), ++t._eventsCount;
          else if (
            ('function' == typeof o
              ? (o = n[e] = r ? [i, o] : [o, i])
              : r
              ? o.unshift(i)
              : o.push(i),
            (s = h(t)) > 0 && o.length > s && !o.warned)
          ) {
            o.warned = !0;
            var l = new Error(
              'Possible EventEmitter memory leak detected. ' +
                o.length +
                ' ' +
                String(e) +
                ' listeners added. Use emitter.setMaxListeners() to increase limit'
            );
            (l.name = 'MaxListenersExceededWarning'),
              (l.emitter = t),
              (l.type = e),
              (l.count = o.length),
              (u = l),
              console && console.warn && console.warn(u);
          }
          return t;
        }
        function l() {
          if (!this.fired)
            return (
              this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              0 === arguments.length
                ? this.listener.call(this.target)
                : this.listener.apply(this.target, arguments)
            );
        }
        function c(t, e, i) {
          var r = {fired: !1, wrapFn: void 0, target: t, type: e, listener: i},
            s = l.bind(r);
          return (s.listener = i), (r.wrapFn = s), s;
        }
        function d(t, e, i) {
          var r = t._events;
          if (void 0 === r) return [];
          var s = r[e];
          return void 0 === s
            ? []
            : 'function' == typeof s
            ? i
              ? [s.listener || s]
              : [s]
            : i
            ? (function (t) {
                for (var e = new Array(t.length), i = 0; i < e.length; ++i)
                  e[i] = t[i].listener || t[i];
                return e;
              })(s)
            : f(s, s.length);
        }
        function p(t) {
          var e = this._events;
          if (void 0 !== e) {
            var i = e[t];
            if ('function' == typeof i) return 1;
            if (void 0 !== i) return i.length;
          }
          return 0;
        }
        function f(t, e) {
          for (var i = new Array(e), r = 0; r < e; ++r) i[r] = t[r];
          return i;
        }
        function m(t, e, i, r) {
          if ('function' == typeof t.on) r.once ? t.once(e, i) : t.on(e, i);
          else {
            if ('function' != typeof t.addEventListener)
              throw new TypeError(
                'The "emitter" argument must be of type EventEmitter. Received type ' +
                  typeof t
              );
            t.addEventListener(e, function s(n) {
              r.once && t.removeEventListener(e, s), i(n);
            });
          }
        }
        Object.defineProperty(n, 'defaultMaxListeners', {
          enumerable: !0,
          get: function () {
            return o;
          },
          set: function (t) {
            if ('number' != typeof t || t < 0 || s(t))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  t +
                  '.'
              );
            o = t;
          },
        }),
          (n.init = function () {
            (void 0 !== this._events &&
              this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (n.prototype.setMaxListeners = function (t) {
            if ('number' != typeof t || t < 0 || s(t))
              throw new RangeError(
                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                  t +
                  '.'
              );
            return (this._maxListeners = t), this;
          }),
          (n.prototype.getMaxListeners = function () {
            return h(this);
          }),
          (n.prototype.emit = function (t) {
            for (var e = [], i = 1; i < arguments.length; i++)
              e.push(arguments[i]);
            var s = 'error' === t,
              n = this._events;
            if (void 0 !== n) s = s && void 0 === n.error;
            else if (!s) return !1;
            if (s) {
              var o;
              if ((e.length > 0 && (o = e[0]), o instanceof Error)) throw o;
              var a = new Error(
                'Unhandled error.' + (o ? ' (' + o.message + ')' : '')
              );
              throw ((a.context = o), a);
            }
            var h = n[t];
            if (void 0 === h) return !1;
            if ('function' == typeof h) r(h, this, e);
            else {
              var u = h.length,
                l = f(h, u);
              for (i = 0; i < u; ++i) r(l[i], this, e);
            }
            return !0;
          }),
          (n.prototype.addListener = function (t, e) {
            return u(this, t, e, !1);
          }),
          (n.prototype.on = n.prototype.addListener),
          (n.prototype.prependListener = function (t, e) {
            return u(this, t, e, !0);
          }),
          (n.prototype.once = function (t, e) {
            return a(e), this.on(t, c(this, t, e)), this;
          }),
          (n.prototype.prependOnceListener = function (t, e) {
            return a(e), this.prependListener(t, c(this, t, e)), this;
          }),
          (n.prototype.removeListener = function (t, e) {
            var i, r, s, n, o;
            if ((a(e), void 0 === (r = this._events))) return this;
            if (void 0 === (i = r[t])) return this;
            if (i === e || i.listener === e)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete r[t],
                  r.removeListener &&
                    this.emit('removeListener', t, i.listener || e));
            else if ('function' != typeof i) {
              for (s = -1, n = i.length - 1; n >= 0; n--)
                if (i[n] === e || i[n].listener === e) {
                  (o = i[n].listener), (s = n);
                  break;
                }
              if (s < 0) return this;
              0 === s
                ? i.shift()
                : (function (t, e) {
                    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                    t.pop();
                  })(i, s),
                1 === i.length && (r[t] = i[0]),
                void 0 !== r.removeListener &&
                  this.emit('removeListener', t, o || e);
            }
            return this;
          }),
          (n.prototype.off = n.prototype.removeListener),
          (n.prototype.removeAllListeners = function (t) {
            var e, i, r;
            if (void 0 === (i = this._events)) return this;
            if (void 0 === i.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== i[t] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete i[t]),
                this
              );
            if (0 === arguments.length) {
              var s,
                n = Object.keys(i);
              for (r = 0; r < n.length; ++r)
                'removeListener' !== (s = n[r]) && this.removeAllListeners(s);
              return (
                this.removeAllListeners('removeListener'),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              );
            }
            if ('function' == typeof (e = i[t])) this.removeListener(t, e);
            else if (void 0 !== e)
              for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
            return this;
          }),
          (n.prototype.listeners = function (t) {
            return d(this, t, !0);
          }),
          (n.prototype.rawListeners = function (t) {
            return d(this, t, !1);
          }),
          (n.listenerCount = function (t, e) {
            return 'function' == typeof t.listenerCount
              ? t.listenerCount(e)
              : p.call(t, e);
          }),
          (n.prototype.listenerCount = p),
          (n.prototype.eventNames = function () {
            return this._eventsCount > 0 ? e(this._events) : [];
          });
      },
      9940: (t, e, i) => {
        var r = i(3203)(i(4362), 'DataView');
        t.exports = r;
      },
      1979: (t, e, i) => {
        var r = i(9129),
          s = i(7644),
          n = i(3486),
          o = i(4786),
          a = i(6444);
        function h(t) {
          var e = -1,
            i = null == t ? 0 : t.length;
          for (this.clear(); ++e < i; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (h.prototype.clear = r),
          (h.prototype.delete = s),
          (h.prototype.get = n),
          (h.prototype.has = o),
          (h.prototype.set = a),
          (t.exports = h);
      },
      2768: (t, e, i) => {
        var r = i(3708),
          s = i(6993),
          n = i(286),
          o = i(1678),
          a = i(9743);
        function h(t) {
          var e = -1,
            i = null == t ? 0 : t.length;
          for (this.clear(); ++e < i; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (h.prototype.clear = r),
          (h.prototype.delete = s),
          (h.prototype.get = n),
          (h.prototype.has = o),
          (h.prototype.set = a),
          (t.exports = h);
      },
      4804: (t, e, i) => {
        var r = i(3203)(i(4362), 'Map');
        t.exports = r;
      },
      8423: (t, e, i) => {
        var r = i(6977),
          s = i(7474),
          n = i(727),
          o = i(3653),
          a = i(6140);
        function h(t) {
          var e = -1,
            i = null == t ? 0 : t.length;
          for (this.clear(); ++e < i; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (h.prototype.clear = r),
          (h.prototype.delete = s),
          (h.prototype.get = n),
          (h.prototype.has = o),
          (h.prototype.set = a),
          (t.exports = h);
      },
      7114: (t, e, i) => {
        var r = i(3203)(i(4362), 'Promise');
        t.exports = r;
      },
      689: (t, e, i) => {
        var r = i(3203)(i(4362), 'Set');
        t.exports = r;
      },
      9832: (t, e, i) => {
        var r = i(8423),
          s = i(9911),
          n = i(7447);
        function o(t) {
          var e = -1,
            i = null == t ? 0 : t.length;
          for (this.__data__ = new r(); ++e < i; ) this.add(t[e]);
        }
        (o.prototype.add = o.prototype.push = s),
          (o.prototype.has = n),
          (t.exports = o);
      },
      959: (t, e, i) => {
        var r = i(2768),
          s = i(7553),
          n = i(6038),
          o = i(2397),
          a = i(2421),
          h = i(2936);
        function u(t) {
          var e = (this.__data__ = new r(t));
          this.size = e.size;
        }
        (u.prototype.clear = s),
          (u.prototype.delete = n),
          (u.prototype.get = o),
          (u.prototype.has = a),
          (u.prototype.set = h),
          (t.exports = u);
      },
      2773: (t, e, i) => {
        var r = i(4362).Symbol;
        t.exports = r;
      },
      2496: (t, e, i) => {
        var r = i(4362).Uint8Array;
        t.exports = r;
      },
      5284: (t, e, i) => {
        var r = i(3203)(i(4362), 'WeakMap');
        t.exports = r;
      },
      4111: (t) => {
        t.exports = function (t, e) {
          for (
            var i = -1, r = null == t ? 0 : t.length;
            ++i < r && !1 !== e(t[i], i, t);

          );
          return t;
        };
      },
      6523: (t) => {
        t.exports = function (t, e) {
          for (
            var i = -1, r = null == t ? 0 : t.length, s = 0, n = [];
            ++i < r;

          ) {
            var o = t[i];
            e(o, i, t) && (n[s++] = o);
          }
          return n;
        };
      },
      8083: (t, e, i) => {
        var r = i(5094),
          s = i(9246),
          n = i(3670),
          o = i(2343),
          a = i(4782),
          h = i(1589),
          u = Object.prototype.hasOwnProperty;
        t.exports = function (t, e) {
          var i = n(t),
            l = !i && s(t),
            c = !i && !l && o(t),
            d = !i && !l && !c && h(t),
            p = i || l || c || d,
            f = p ? r(t.length, String) : [],
            m = f.length;
          for (var g in t)
            (!e && !u.call(t, g)) ||
              (p &&
                ('length' == g ||
                  (c && ('offset' == g || 'parent' == g)) ||
                  (d &&
                    ('buffer' == g ||
                      'byteLength' == g ||
                      'byteOffset' == g)) ||
                  a(g, m))) ||
              f.push(g);
          return f;
        };
      },
      9258: (t) => {
        t.exports = function (t, e) {
          for (
            var i = -1, r = null == t ? 0 : t.length, s = Array(r);
            ++i < r;

          )
            s[i] = e(t[i], i, t);
          return s;
        };
      },
      8421: (t) => {
        t.exports = function (t, e) {
          for (var i = -1, r = e.length, s = t.length; ++i < r; )
            t[s + i] = e[i];
          return t;
        };
      },
      4481: (t) => {
        t.exports = function (t, e) {
          for (var i = -1, r = null == t ? 0 : t.length; ++i < r; )
            if (e(t[i], i, t)) return !0;
          return !1;
        };
      },
      6213: (t, e, i) => {
        var r = i(7950);
        t.exports = function (t, e) {
          for (var i = t.length; i--; ) if (r(t[i][0], e)) return i;
          return -1;
        };
      },
      5806: (t, e, i) => {
        var r = i(5645),
          s = i(3978)(r);
        t.exports = s;
      },
      7079: (t, e, i) => {
        var r = i(7924)();
        t.exports = r;
      },
      5645: (t, e, i) => {
        var r = i(7079),
          s = i(3225);
        t.exports = function (t, e) {
          return t && r(t, e, s);
        };
      },
      5974: (t, e, i) => {
        var r = i(6883),
          s = i(7102);
        t.exports = function (t, e) {
          for (var i = 0, n = (e = r(e, t)).length; null != t && i < n; )
            t = t[s(e[i++])];
          return i && i == n ? t : void 0;
        };
      },
      891: (t, e, i) => {
        var r = i(8421),
          s = i(3670);
        t.exports = function (t, e, i) {
          var n = e(t);
          return s(t) ? n : r(n, i(t));
        };
      },
      1185: (t, e, i) => {
        var r = i(2773),
          s = i(3888),
          n = i(2299),
          o = '[object Null]',
          a = '[object Undefined]',
          h = r ? r.toStringTag : void 0;
        t.exports = function (t) {
          return null == t
            ? void 0 === t
              ? a
              : o
            : h && h in Object(t)
            ? s(t)
            : n(t);
        };
      },
      5529: (t) => {
        t.exports = function (t, e) {
          return null != t && e in Object(t);
        };
      },
      1075: (t, e, i) => {
        var r = i(1185),
          s = i(4939),
          n = '[object Arguments]';
        t.exports = function (t) {
          return s(t) && r(t) == n;
        };
      },
      9856: (t, e, i) => {
        var r = i(1829),
          s = i(4939);
        t.exports = function t(e, i, n, o, a) {
          return (
            e === i ||
            (null == e || null == i || (!s(e) && !s(i))
              ? e != e && i != i
              : r(e, i, n, o, t, a))
          );
        };
      },
      1829: (t, e, i) => {
        var r = i(959),
          s = i(3426),
          n = i(1402),
          o = i(4572),
          a = i(2417),
          h = i(3670),
          u = i(2343),
          l = i(1589),
          c = 1,
          d = '[object Arguments]',
          p = '[object Array]',
          f = '[object Object]',
          m = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, i, g, v, _) {
          var y = h(t),
            w = h(e),
            x = y ? p : a(t),
            b = w ? p : a(e),
            A = (x = x == d ? f : x) == f,
            T = (b = b == d ? f : b) == f,
            M = x == b;
          if (M && u(t)) {
            if (!u(e)) return !1;
            (y = !0), (A = !1);
          }
          if (M && !A)
            return (
              _ || (_ = new r()),
              y || l(t) ? s(t, e, i, g, v, _) : n(t, e, x, i, g, v, _)
            );
          if (!(i & c)) {
            var E = A && m.call(t, '__wrapped__'),
              S = T && m.call(e, '__wrapped__');
            if (E || S) {
              var O = E ? t.value() : t,
                L = S ? e.value() : e;
              return _ || (_ = new r()), v(O, L, i, g, _);
            }
          }
          return !!M && (_ || (_ = new r()), o(t, e, i, g, v, _));
        };
      },
      4656: (t, e, i) => {
        var r = i(959),
          s = i(9856),
          n = 1,
          o = 2;
        t.exports = function (t, e, i, a) {
          var h = i.length,
            u = h,
            l = !a;
          if (null == t) return !u;
          for (t = Object(t); h--; ) {
            var c = i[h];
            if (l && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
          }
          for (; ++h < u; ) {
            var d = (c = i[h])[0],
              p = t[d],
              f = c[1];
            if (l && c[2]) {
              if (void 0 === p && !(d in t)) return !1;
            } else {
              var m = new r();
              if (a) var g = a(p, f, d, t, e, m);
              if (!(void 0 === g ? s(f, p, n | o, a, m) : g)) return !1;
            }
          }
          return !0;
        };
      },
      4106: (t, e, i) => {
        var r = i(3626),
          s = i(9249),
          n = i(71),
          o = i(1214),
          a = /^\[object .+?Constructor\]$/,
          h = Function.prototype,
          u = Object.prototype,
          l = h.toString,
          c = u.hasOwnProperty,
          d = RegExp(
            '^' +
              l
                .call(c)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          );
        t.exports = function (t) {
          return !(!n(t) || s(t)) && (r(t) ? d : a).test(o(t));
        };
      },
      3638: (t, e, i) => {
        var r = i(1185),
          s = i(7100),
          n = i(4939),
          o = {};
        (o['[object Float32Array]'] =
          o['[object Float64Array]'] =
          o['[object Int8Array]'] =
          o['[object Int16Array]'] =
          o['[object Int32Array]'] =
          o['[object Uint8Array]'] =
          o['[object Uint8ClampedArray]'] =
          o['[object Uint16Array]'] =
          o['[object Uint32Array]'] =
            !0),
          (o['[object Arguments]'] =
            o['[object Array]'] =
            o['[object ArrayBuffer]'] =
            o['[object Boolean]'] =
            o['[object DataView]'] =
            o['[object Date]'] =
            o['[object Error]'] =
            o['[object Function]'] =
            o['[object Map]'] =
            o['[object Number]'] =
            o['[object Object]'] =
            o['[object RegExp]'] =
            o['[object Set]'] =
            o['[object String]'] =
            o['[object WeakMap]'] =
              !1),
          (t.exports = function (t) {
            return n(t) && s(t.length) && !!o[r(t)];
          });
      },
      9047: (t, e, i) => {
        var r = i(8334),
          s = i(5941),
          n = i(1559),
          o = i(3670),
          a = i(8886);
        t.exports = function (t) {
          return 'function' == typeof t
            ? t
            : null == t
            ? n
            : 'object' == typeof t
            ? o(t)
              ? s(t[0], t[1])
              : r(t)
            : a(t);
        };
      },
      7521: (t, e, i) => {
        var r = i(2803),
          s = i(3865),
          n = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          if (!r(t)) return s(t);
          var e = [];
          for (var i in Object(t))
            n.call(t, i) && 'constructor' != i && e.push(i);
          return e;
        };
      },
      5901: (t, e, i) => {
        var r = i(5806),
          s = i(6175);
        t.exports = function (t, e) {
          var i = -1,
            n = s(t) ? Array(t.length) : [];
          return (
            r(t, function (t, r, s) {
              n[++i] = e(t, r, s);
            }),
            n
          );
        };
      },
      8334: (t, e, i) => {
        var r = i(4656),
          s = i(2811),
          n = i(4248);
        t.exports = function (t) {
          var e = s(t);
          return 1 == e.length && e[0][2]
            ? n(e[0][0], e[0][1])
            : function (i) {
                return i === t || r(i, t, e);
              };
        };
      },
      5941: (t, e, i) => {
        var r = i(9856),
          s = i(643),
          n = i(9059),
          o = i(837),
          a = i(3631),
          h = i(4248),
          u = i(7102),
          l = 1,
          c = 2;
        t.exports = function (t, e) {
          return o(t) && a(e)
            ? h(u(t), e)
            : function (i) {
                var o = s(i, t);
                return void 0 === o && o === e ? n(i, t) : r(e, o, l | c);
              };
        };
      },
      3184: (t) => {
        t.exports = function (t) {
          return function (e) {
            return null == e ? void 0 : e[t];
          };
        };
      },
      886: (t, e, i) => {
        var r = i(5974);
        t.exports = function (t) {
          return function (e) {
            return r(e, t);
          };
        };
      },
      5094: (t) => {
        t.exports = function (t, e) {
          for (var i = -1, r = Array(t); ++i < t; ) r[i] = e(i);
          return r;
        };
      },
      8257: (t, e, i) => {
        var r = i(2773),
          s = i(9258),
          n = i(3670),
          o = i(4655),
          a = 1 / 0,
          h = r ? r.prototype : void 0,
          u = h ? h.toString : void 0;
        t.exports = function t(e) {
          if ('string' == typeof e) return e;
          if (n(e)) return s(e, t) + '';
          if (o(e)) return u ? u.call(e) : '';
          var i = e + '';
          return '0' == i && 1 / e == -a ? '-0' : i;
        };
      },
      1432: (t, e, i) => {
        var r = i(9751),
          s = /^\s+/;
        t.exports = function (t) {
          return t ? t.slice(0, r(t) + 1).replace(s, '') : t;
        };
      },
      9081: (t) => {
        t.exports = function (t) {
          return function (e) {
            return t(e);
          };
        };
      },
      3159: (t) => {
        t.exports = function (t, e) {
          return t.has(e);
        };
      },
      3183: (t, e, i) => {
        var r = i(1559);
        t.exports = function (t) {
          return 'function' == typeof t ? t : r;
        };
      },
      6883: (t, e, i) => {
        var r = i(3670),
          s = i(837),
          n = i(376),
          o = i(2049);
        t.exports = function (t, e) {
          return r(t) ? t : s(t, e) ? [t] : n(o(t));
        };
      },
      1741: (t, e, i) => {
        var r = i(4362)['__core-js_shared__'];
        t.exports = r;
      },
      3978: (t, e, i) => {
        var r = i(6175);
        t.exports = function (t, e) {
          return function (i, s) {
            if (null == i) return i;
            if (!r(i)) return t(i, s);
            for (
              var n = i.length, o = e ? n : -1, a = Object(i);
              (e ? o-- : ++o < n) && !1 !== s(a[o], o, a);

            );
            return i;
          };
        };
      },
      7924: (t) => {
        t.exports = function (t) {
          return function (e, i, r) {
            for (var s = -1, n = Object(e), o = r(e), a = o.length; a--; ) {
              var h = o[t ? a : ++s];
              if (!1 === i(n[h], h, n)) break;
            }
            return e;
          };
        };
      },
      3426: (t, e, i) => {
        var r = i(9832),
          s = i(4481),
          n = i(3159),
          o = 1,
          a = 2;
        t.exports = function (t, e, i, h, u, l) {
          var c = i & o,
            d = t.length,
            p = e.length;
          if (d != p && !(c && p > d)) return !1;
          var f = l.get(t),
            m = l.get(e);
          if (f && m) return f == e && m == t;
          var g = -1,
            v = !0,
            _ = i & a ? new r() : void 0;
          for (l.set(t, e), l.set(e, t); ++g < d; ) {
            var y = t[g],
              w = e[g];
            if (h) var x = c ? h(w, y, g, e, t, l) : h(y, w, g, t, e, l);
            if (void 0 !== x) {
              if (x) continue;
              v = !1;
              break;
            }
            if (_) {
              if (
                !s(e, function (t, e) {
                  if (!n(_, e) && (y === t || u(y, t, i, h, l)))
                    return _.push(e);
                })
              ) {
                v = !1;
                break;
              }
            } else if (y !== w && !u(y, w, i, h, l)) {
              v = !1;
              break;
            }
          }
          return l.delete(t), l.delete(e), v;
        };
      },
      1402: (t, e, i) => {
        var r = i(2773),
          s = i(2496),
          n = i(7950),
          o = i(3426),
          a = i(8961),
          h = i(6983),
          u = 1,
          l = 2,
          c = '[object Boolean]',
          d = '[object Date]',
          p = '[object Error]',
          f = '[object Map]',
          m = '[object Number]',
          g = '[object RegExp]',
          v = '[object Set]',
          _ = '[object String]',
          y = '[object Symbol]',
          w = '[object ArrayBuffer]',
          x = '[object DataView]',
          b = r ? r.prototype : void 0,
          A = b ? b.valueOf : void 0;
        t.exports = function (t, e, i, r, b, T, M) {
          switch (i) {
            case x:
              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                return !1;
              (t = t.buffer), (e = e.buffer);
            case w:
              return !(t.byteLength != e.byteLength || !T(new s(t), new s(e)));
            case c:
            case d:
            case m:
              return n(+t, +e);
            case p:
              return t.name == e.name && t.message == e.message;
            case g:
            case _:
              return t == e + '';
            case f:
              var E = a;
            case v:
              var S = r & u;
              if ((E || (E = h), t.size != e.size && !S)) return !1;
              var O = M.get(t);
              if (O) return O == e;
              (r |= l), M.set(t, e);
              var L = o(E(t), E(e), r, b, T, M);
              return M.delete(t), L;
            case y:
              if (A) return A.call(t) == A.call(e);
          }
          return !1;
        };
      },
      4572: (t, e, i) => {
        var r = i(5788),
          s = 1,
          n = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, i, o, a, h) {
          var u = i & s,
            l = r(t),
            c = l.length;
          if (c != r(e).length && !u) return !1;
          for (var d = c; d--; ) {
            var p = l[d];
            if (!(u ? p in e : n.call(e, p))) return !1;
          }
          var f = h.get(t),
            m = h.get(e);
          if (f && m) return f == e && m == t;
          var g = !0;
          h.set(t, e), h.set(e, t);
          for (var v = u; ++d < c; ) {
            var _ = t[(p = l[d])],
              y = e[p];
            if (o) var w = u ? o(y, _, p, e, t, h) : o(_, y, p, t, e, h);
            if (!(void 0 === w ? _ === y || a(_, y, i, o, h) : w)) {
              g = !1;
              break;
            }
            v || (v = 'constructor' == p);
          }
          if (g && !v) {
            var x = t.constructor,
              b = e.constructor;
            x == b ||
              !('constructor' in t) ||
              !('constructor' in e) ||
              ('function' == typeof x &&
                x instanceof x &&
                'function' == typeof b &&
                b instanceof b) ||
              (g = !1);
          }
          return h.delete(t), h.delete(e), g;
        };
      },
      8556: (t, e, i) => {
        var r = 'object' == typeof i.g && i.g && i.g.Object === Object && i.g;
        t.exports = r;
      },
      5788: (t, e, i) => {
        var r = i(891),
          s = i(6918),
          n = i(3225);
        t.exports = function (t) {
          return r(t, n, s);
        };
      },
      404: (t, e, i) => {
        var r = i(9008);
        t.exports = function (t, e) {
          var i = t.__data__;
          return r(e) ? i['string' == typeof e ? 'string' : 'hash'] : i.map;
        };
      },
      2811: (t, e, i) => {
        var r = i(3631),
          s = i(3225);
        t.exports = function (t) {
          for (var e = s(t), i = e.length; i--; ) {
            var n = e[i],
              o = t[n];
            e[i] = [n, o, r(o)];
          }
          return e;
        };
      },
      3203: (t, e, i) => {
        var r = i(4106),
          s = i(7338);
        t.exports = function (t, e) {
          var i = s(t, e);
          return r(i) ? i : void 0;
        };
      },
      3888: (t, e, i) => {
        var r = i(2773),
          s = Object.prototype,
          n = s.hasOwnProperty,
          o = s.toString,
          a = r ? r.toStringTag : void 0;
        t.exports = function (t) {
          var e = n.call(t, a),
            i = t[a];
          try {
            t[a] = void 0;
            var r = !0;
          } catch (t) {}
          var s = o.call(t);
          return r && (e ? (t[a] = i) : delete t[a]), s;
        };
      },
      6918: (t, e, i) => {
        var r = i(6523),
          s = i(4043),
          n = Object.prototype.propertyIsEnumerable,
          o = Object.getOwnPropertySymbols,
          a = o
            ? function (t) {
                return null == t
                  ? []
                  : ((t = Object(t)),
                    r(o(t), function (e) {
                      return n.call(t, e);
                    }));
              }
            : s;
        t.exports = a;
      },
      2417: (t, e, i) => {
        var r = i(9940),
          s = i(4804),
          n = i(7114),
          o = i(689),
          a = i(5284),
          h = i(1185),
          u = i(1214),
          l = '[object Map]',
          c = '[object Promise]',
          d = '[object Set]',
          p = '[object WeakMap]',
          f = '[object DataView]',
          m = u(r),
          g = u(s),
          v = u(n),
          _ = u(o),
          y = u(a),
          w = h;
        ((r && w(new r(new ArrayBuffer(1))) != f) ||
          (s && w(new s()) != l) ||
          (n && w(n.resolve()) != c) ||
          (o && w(new o()) != d) ||
          (a && w(new a()) != p)) &&
          (w = function (t) {
            var e = h(t),
              i = '[object Object]' == e ? t.constructor : void 0,
              r = i ? u(i) : '';
            if (r)
              switch (r) {
                case m:
                  return f;
                case g:
                  return l;
                case v:
                  return c;
                case _:
                  return d;
                case y:
                  return p;
              }
            return e;
          }),
          (t.exports = w);
      },
      7338: (t) => {
        t.exports = function (t, e) {
          return null == t ? void 0 : t[e];
        };
      },
      4727: (t, e, i) => {
        var r = i(6883),
          s = i(9246),
          n = i(3670),
          o = i(4782),
          a = i(7100),
          h = i(7102);
        t.exports = function (t, e, i) {
          for (var u = -1, l = (e = r(e, t)).length, c = !1; ++u < l; ) {
            var d = h(e[u]);
            if (!(c = null != t && i(t, d))) break;
            t = t[d];
          }
          return c || ++u != l
            ? c
            : !!(l = null == t ? 0 : t.length) &&
                a(l) &&
                o(d, l) &&
                (n(t) || s(t));
        };
      },
      9129: (t, e, i) => {
        var r = i(6326);
        t.exports = function () {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
      },
      7644: (t) => {
        t.exports = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        };
      },
      3486: (t, e, i) => {
        var r = i(6326),
          s = '__lodash_hash_undefined__',
          n = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var e = this.__data__;
          if (r) {
            var i = e[t];
            return i === s ? void 0 : i;
          }
          return n.call(e, t) ? e[t] : void 0;
        };
      },
      4786: (t, e, i) => {
        var r = i(6326),
          s = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var e = this.__data__;
          return r ? void 0 !== e[t] : s.call(e, t);
        };
      },
      6444: (t, e, i) => {
        var r = i(6326),
          s = '__lodash_hash_undefined__';
        t.exports = function (t, e) {
          var i = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (i[t] = r && void 0 === e ? s : e),
            this
          );
        };
      },
      4782: (t) => {
        var e = 9007199254740991,
          i = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, r) {
          var s = typeof t;
          return (
            !!(r = null == r ? e : r) &&
            ('number' == s || ('symbol' != s && i.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < r
          );
        };
      },
      837: (t, e, i) => {
        var r = i(3670),
          s = i(4655),
          n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          o = /^\w*$/;
        t.exports = function (t, e) {
          if (r(t)) return !1;
          var i = typeof t;
          return (
            !(
              'number' != i &&
              'symbol' != i &&
              'boolean' != i &&
              null != t &&
              !s(t)
            ) ||
            o.test(t) ||
            !n.test(t) ||
            (null != e && t in Object(e))
          );
        };
      },
      9008: (t) => {
        t.exports = function (t) {
          var e = typeof t;
          return 'string' == e ||
            'number' == e ||
            'symbol' == e ||
            'boolean' == e
            ? '__proto__' !== t
            : null === t;
        };
      },
      9249: (t, e, i) => {
        var r,
          s = i(1741),
          n = (r = /[^.]+$/.exec((s && s.keys && s.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + r
            : '';
        t.exports = function (t) {
          return !!n && n in t;
        };
      },
      2803: (t) => {
        var e = Object.prototype;
        t.exports = function (t) {
          var i = t && t.constructor;
          return t === (('function' == typeof i && i.prototype) || e);
        };
      },
      3631: (t, e, i) => {
        var r = i(71);
        t.exports = function (t) {
          return t == t && !r(t);
        };
      },
      3708: (t) => {
        t.exports = function () {
          (this.__data__ = []), (this.size = 0);
        };
      },
      6993: (t, e, i) => {
        var r = i(6213),
          s = Array.prototype.splice;
        t.exports = function (t) {
          var e = this.__data__,
            i = r(e, t);
          return (
            !(i < 0) &&
            (i == e.length - 1 ? e.pop() : s.call(e, i, 1), --this.size, !0)
          );
        };
      },
      286: (t, e, i) => {
        var r = i(6213);
        t.exports = function (t) {
          var e = this.__data__,
            i = r(e, t);
          return i < 0 ? void 0 : e[i][1];
        };
      },
      1678: (t, e, i) => {
        var r = i(6213);
        t.exports = function (t) {
          return r(this.__data__, t) > -1;
        };
      },
      9743: (t, e, i) => {
        var r = i(6213);
        t.exports = function (t, e) {
          var i = this.__data__,
            s = r(i, t);
          return s < 0 ? (++this.size, i.push([t, e])) : (i[s][1] = e), this;
        };
      },
      6977: (t, e, i) => {
        var r = i(1979),
          s = i(2768),
          n = i(4804);
        t.exports = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (n || s)(),
              string: new r(),
            });
        };
      },
      7474: (t, e, i) => {
        var r = i(404);
        t.exports = function (t) {
          var e = r(this, t).delete(t);
          return (this.size -= e ? 1 : 0), e;
        };
      },
      727: (t, e, i) => {
        var r = i(404);
        t.exports = function (t) {
          return r(this, t).get(t);
        };
      },
      3653: (t, e, i) => {
        var r = i(404);
        t.exports = function (t) {
          return r(this, t).has(t);
        };
      },
      6140: (t, e, i) => {
        var r = i(404);
        t.exports = function (t, e) {
          var i = r(this, t),
            s = i.size;
          return i.set(t, e), (this.size += i.size == s ? 0 : 1), this;
        };
      },
      8961: (t) => {
        t.exports = function (t) {
          var e = -1,
            i = Array(t.size);
          return (
            t.forEach(function (t, r) {
              i[++e] = [r, t];
            }),
            i
          );
        };
      },
      4248: (t) => {
        t.exports = function (t, e) {
          return function (i) {
            return null != i && i[t] === e && (void 0 !== e || t in Object(i));
          };
        };
      },
      5933: (t, e, i) => {
        var r = i(104),
          s = 500;
        t.exports = function (t) {
          var e = r(t, function (t) {
              return i.size === s && i.clear(), t;
            }),
            i = e.cache;
          return e;
        };
      },
      6326: (t, e, i) => {
        var r = i(3203)(Object, 'create');
        t.exports = r;
      },
      3865: (t, e, i) => {
        var r = i(5290)(Object.keys, Object);
        t.exports = r;
      },
      1985: (t, e, i) => {
        t = i.nmd(t);
        var r = i(8556),
          s = e && !e.nodeType && e,
          n = s && t && !t.nodeType && t,
          o = n && n.exports === s && r.process,
          a = (function () {
            try {
              var t = n && n.require && n.require('util').types;
              return t || (o && o.binding && o.binding('util'));
            } catch (t) {}
          })();
        t.exports = a;
      },
      2299: (t) => {
        var e = Object.prototype.toString;
        t.exports = function (t) {
          return e.call(t);
        };
      },
      5290: (t) => {
        t.exports = function (t, e) {
          return function (i) {
            return t(e(i));
          };
        };
      },
      4362: (t, e, i) => {
        var r = i(8556),
          s = 'object' == typeof self && self && self.Object === Object && self,
          n = r || s || Function('return this')();
        t.exports = n;
      },
      9911: (t) => {
        var e = '__lodash_hash_undefined__';
        t.exports = function (t) {
          return this.__data__.set(t, e), this;
        };
      },
      7447: (t) => {
        t.exports = function (t) {
          return this.__data__.has(t);
        };
      },
      6983: (t) => {
        t.exports = function (t) {
          var e = -1,
            i = Array(t.size);
          return (
            t.forEach(function (t) {
              i[++e] = t;
            }),
            i
          );
        };
      },
      7553: (t, e, i) => {
        var r = i(2768);
        t.exports = function () {
          (this.__data__ = new r()), (this.size = 0);
        };
      },
      6038: (t) => {
        t.exports = function (t) {
          var e = this.__data__,
            i = e.delete(t);
          return (this.size = e.size), i;
        };
      },
      2397: (t) => {
        t.exports = function (t) {
          return this.__data__.get(t);
        };
      },
      2421: (t) => {
        t.exports = function (t) {
          return this.__data__.has(t);
        };
      },
      2936: (t, e, i) => {
        var r = i(2768),
          s = i(4804),
          n = i(8423),
          o = 200;
        t.exports = function (t, e) {
          var i = this.__data__;
          if (i instanceof r) {
            var a = i.__data__;
            if (!s || a.length < o - 1)
              return a.push([t, e]), (this.size = ++i.size), this;
            i = this.__data__ = new n(a);
          }
          return i.set(t, e), (this.size = i.size), this;
        };
      },
      376: (t, e, i) => {
        var r = i(5933),
          s =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          n = /\\(\\)?/g,
          o = r(function (t) {
            var e = [];
            return (
              46 === t.charCodeAt(0) && e.push(''),
              t.replace(s, function (t, i, r, s) {
                e.push(r ? s.replace(n, '$1') : i || t);
              }),
              e
            );
          });
        t.exports = o;
      },
      7102: (t, e, i) => {
        var r = i(4655),
          s = 1 / 0;
        t.exports = function (t) {
          if ('string' == typeof t || r(t)) return t;
          var e = t + '';
          return '0' == e && 1 / t == -s ? '-0' : e;
        };
      },
      1214: (t) => {
        var e = Function.prototype.toString;
        t.exports = function (t) {
          if (null != t) {
            try {
              return e.call(t);
            } catch (t) {}
            try {
              return t + '';
            } catch (t) {}
          }
          return '';
        };
      },
      9751: (t) => {
        var e = /\s/;
        t.exports = function (t) {
          for (var i = t.length; i-- && e.test(t.charAt(i)); );
          return i;
        };
      },
      569: (t, e, i) => {
        var r = i(71),
          s = i(5989),
          n = i(6705),
          o = 'Expected a function',
          a = Math.max,
          h = Math.min;
        t.exports = function (t, e, i) {
          var u,
            l,
            c,
            d,
            p,
            f,
            m = 0,
            g = !1,
            v = !1,
            _ = !0;
          if ('function' != typeof t) throw new TypeError(o);
          function y(e) {
            var i = u,
              r = l;
            return (u = l = void 0), (m = e), (d = t.apply(r, i));
          }
          function w(t) {
            var i = t - f;
            return void 0 === f || i >= e || i < 0 || (v && t - m >= c);
          }
          function x() {
            var t = s();
            if (w(t)) return b(t);
            p = setTimeout(
              x,
              (function (t) {
                var i = e - (t - f);
                return v ? h(i, c - (t - m)) : i;
              })(t)
            );
          }
          function b(t) {
            return (p = void 0), _ && u ? y(t) : ((u = l = void 0), d);
          }
          function A() {
            var t = s(),
              i = w(t);
            if (((u = arguments), (l = this), (f = t), i)) {
              if (void 0 === p)
                return (function (t) {
                  return (m = t), (p = setTimeout(x, e)), g ? y(t) : d;
                })(f);
              if (v) return clearTimeout(p), (p = setTimeout(x, e)), y(f);
            }
            return void 0 === p && (p = setTimeout(x, e)), d;
          }
          return (
            (e = n(e) || 0),
            r(i) &&
              ((g = !!i.leading),
              (c = (v = 'maxWait' in i) ? a(n(i.maxWait) || 0, e) : c),
              (_ = 'trailing' in i ? !!i.trailing : _)),
            (A.cancel = function () {
              void 0 !== p && clearTimeout(p),
                (m = 0),
                (u = f = l = p = void 0);
            }),
            (A.flush = function () {
              return void 0 === p ? d : b(s());
            }),
            A
          );
        };
      },
      6270: (t, e, i) => {
        t.exports = i(9982);
      },
      7950: (t) => {
        t.exports = function (t, e) {
          return t === e || (t != t && e != e);
        };
      },
      9982: (t, e, i) => {
        var r = i(4111),
          s = i(5806),
          n = i(3183),
          o = i(3670);
        t.exports = function (t, e) {
          return (o(t) ? r : s)(t, n(e));
        };
      },
      643: (t, e, i) => {
        var r = i(5974);
        t.exports = function (t, e, i) {
          var s = null == t ? void 0 : r(t, e);
          return void 0 === s ? i : s;
        };
      },
      9059: (t, e, i) => {
        var r = i(5529),
          s = i(4727);
        t.exports = function (t, e) {
          return null != t && s(t, e, r);
        };
      },
      1559: (t) => {
        t.exports = function (t) {
          return t;
        };
      },
      9246: (t, e, i) => {
        var r = i(1075),
          s = i(4939),
          n = Object.prototype,
          o = n.hasOwnProperty,
          a = n.propertyIsEnumerable,
          h = r(
            (function () {
              return arguments;
            })()
          )
            ? r
            : function (t) {
                return s(t) && o.call(t, 'callee') && !a.call(t, 'callee');
              };
        t.exports = h;
      },
      3670: (t) => {
        var e = Array.isArray;
        t.exports = e;
      },
      6175: (t, e, i) => {
        var r = i(3626),
          s = i(7100);
        t.exports = function (t) {
          return null != t && s(t.length) && !r(t);
        };
      },
      2343: (t, e, i) => {
        t = i.nmd(t);
        var r = i(4362),
          s = i(3444),
          n = e && !e.nodeType && e,
          o = n && t && !t.nodeType && t,
          a = o && o.exports === n ? r.Buffer : void 0,
          h = (a ? a.isBuffer : void 0) || s;
        t.exports = h;
      },
      3626: (t, e, i) => {
        var r = i(1185),
          s = i(71),
          n = '[object AsyncFunction]',
          o = '[object Function]',
          a = '[object GeneratorFunction]',
          h = '[object Proxy]';
        t.exports = function (t) {
          if (!s(t)) return !1;
          var e = r(t);
          return e == o || e == a || e == n || e == h;
        };
      },
      7100: (t) => {
        var e = 9007199254740991;
        t.exports = function (t) {
          return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= e;
        };
      },
      71: (t) => {
        t.exports = function (t) {
          var e = typeof t;
          return null != t && ('object' == e || 'function' == e);
        };
      },
      4939: (t) => {
        t.exports = function (t) {
          return null != t && 'object' == typeof t;
        };
      },
      4655: (t, e, i) => {
        var r = i(1185),
          s = i(4939),
          n = '[object Symbol]';
        t.exports = function (t) {
          return 'symbol' == typeof t || (s(t) && r(t) == n);
        };
      },
      1589: (t, e, i) => {
        var r = i(3638),
          s = i(9081),
          n = i(1985),
          o = n && n.isTypedArray,
          a = o ? s(o) : r;
        t.exports = a;
      },
      3225: (t, e, i) => {
        var r = i(8083),
          s = i(7521),
          n = i(6175);
        t.exports = function (t) {
          return n(t) ? r(t) : s(t);
        };
      },
      7976: (t, e, i) => {
        var r = i(9258),
          s = i(9047),
          n = i(5901),
          o = i(3670);
        t.exports = function (t, e) {
          return (o(t) ? r : n)(t, s(e, 3));
        };
      },
      104: (t, e, i) => {
        var r = i(8423),
          s = 'Expected a function';
        function n(t, e) {
          if ('function' != typeof t || (null != e && 'function' != typeof e))
            throw new TypeError(s);
          var i = function () {
            var r = arguments,
              s = e ? e.apply(this, r) : r[0],
              n = i.cache;
            if (n.has(s)) return n.get(s);
            var o = t.apply(this, r);
            return (i.cache = n.set(s, o) || n), o;
          };
          return (i.cache = new (n.Cache || r)()), i;
        }
        (n.Cache = r), (t.exports = n);
      },
      5989: (t, e, i) => {
        var r = i(4362);
        t.exports = function () {
          return r.Date.now();
        };
      },
      8886: (t, e, i) => {
        var r = i(3184),
          s = i(886),
          n = i(837),
          o = i(7102);
        t.exports = function (t) {
          return n(t) ? r(o(t)) : s(t);
        };
      },
      4043: (t) => {
        t.exports = function () {
          return [];
        };
      },
      3444: (t) => {
        t.exports = function () {
          return !1;
        };
      },
      6705: (t, e, i) => {
        var r = i(1432),
          s = i(71),
          n = i(4655),
          o = NaN,
          a = /^[-+]0x[0-9a-f]+$/i,
          h = /^0b[01]+$/i,
          u = /^0o[0-7]+$/i,
          l = parseInt;
        t.exports = function (t) {
          if ('number' == typeof t) return t;
          if (n(t)) return o;
          if (s(t)) {
            var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
            t = s(e) ? e + '' : e;
          }
          if ('string' != typeof t) return 0 === t ? t : +t;
          t = r(t);
          var i = h.test(t);
          return i || u.test(t) ? l(t.slice(2), i ? 2 : 8) : a.test(t) ? o : +t;
        };
      },
      2049: (t, e, i) => {
        var r = i(8257);
        t.exports = function (t) {
          return null == t ? '' : r(t);
        };
      },
      7320: (t, e, i) => {
        t.exports = i(1045);
      },
      7230: (t) => {
        'use strict';
        var e = !(
            'undefined' == typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          i = {
            canUseDOM: e,
            canUseWorkers: 'undefined' != typeof Worker,
            canUseEventListeners:
              e && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: e && !!window.screen,
            isInWorker: !e,
          };
        t.exports = i;
      },
      2907: (t) => {
        var e,
          i,
          r,
          s,
          n,
          o,
          a,
          h,
          u,
          l,
          c,
          d,
          p,
          f,
          m,
          g = !1;
        function v() {
          if (!g) {
            g = !0;
            var t = navigator.userAgent,
              v =
                /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                  t
                ),
              _ = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
            if (
              ((d = /\b(iPhone|iP[ao]d)/.exec(t)),
              (p = /\b(iP[ao]d)/.exec(t)),
              (l = /Android/i.exec(t)),
              (f = /FBAN\/\w+;/i.exec(t)),
              (m = /Mobile/i.exec(t)),
              (c = !!/Win64/.exec(t)),
              v)
            ) {
              (e = v[1] ? parseFloat(v[1]) : v[5] ? parseFloat(v[5]) : NaN) &&
                document &&
                document.documentMode &&
                (e = document.documentMode);
              var y = /(?:Trident\/(\d+.\d+))/.exec(t);
              (o = y ? parseFloat(y[1]) + 4 : e),
                (i = v[2] ? parseFloat(v[2]) : NaN),
                (r = v[3] ? parseFloat(v[3]) : NaN),
                (s = v[4] ? parseFloat(v[4]) : NaN)
                  ? ((v = /(?:Chrome\/(\d+\.\d+))/.exec(t)),
                    (n = v && v[1] ? parseFloat(v[1]) : NaN))
                  : (n = NaN);
            } else e = i = r = n = s = NaN;
            if (_) {
              if (_[1]) {
                var w = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
                a = !w || parseFloat(w[1].replace('_', '.'));
              } else a = !1;
              (h = !!_[2]), (u = !!_[3]);
            } else a = h = u = !1;
          }
        }
        var _ = {
          ie: function () {
            return v() || e;
          },
          ieCompatibilityMode: function () {
            return v() || o > e;
          },
          ie64: function () {
            return _.ie() && c;
          },
          firefox: function () {
            return v() || i;
          },
          opera: function () {
            return v() || r;
          },
          webkit: function () {
            return v() || s;
          },
          safari: function () {
            return _.webkit();
          },
          chrome: function () {
            return v() || n;
          },
          windows: function () {
            return v() || h;
          },
          osx: function () {
            return v() || a;
          },
          linux: function () {
            return v() || u;
          },
          iphone: function () {
            return v() || d;
          },
          mobile: function () {
            return v() || d || p || l || m;
          },
          nativeApp: function () {
            return v() || f;
          },
          android: function () {
            return v() || l;
          },
          ipad: function () {
            return v() || p;
          },
        };
        t.exports = _;
      },
      4480: (t, e, i) => {
        'use strict';
        var r,
          s = i(7230);
        s.canUseDOM &&
          (r =
            document.implementation &&
            document.implementation.hasFeature &&
            !0 !== document.implementation.hasFeature('', '')),
          (t.exports = function (t, e) {
            if (!s.canUseDOM || (e && !('addEventListener' in document)))
              return !1;
            var i = 'on' + t,
              n = i in document;
            if (!n) {
              var o = document.createElement('div');
              o.setAttribute(i, 'return;'), (n = 'function' == typeof o[i]);
            }
            return (
              !n &&
                r &&
                'wheel' === t &&
                (n = document.implementation.hasFeature('Events.wheel', '3.0')),
              n
            );
          });
      },
      1045: (t, e, i) => {
        'use strict';
        var r = i(2907),
          s = i(4480),
          n = 10,
          o = 40,
          a = 800;
        function h(t) {
          var e = 0,
            i = 0,
            r = 0,
            s = 0;
          return (
            'detail' in t && (i = t.detail),
            'wheelDelta' in t && (i = -t.wheelDelta / 120),
            'wheelDeltaY' in t && (i = -t.wheelDeltaY / 120),
            'wheelDeltaX' in t && (e = -t.wheelDeltaX / 120),
            'axis' in t && t.axis === t.HORIZONTAL_AXIS && ((e = i), (i = 0)),
            (r = e * n),
            (s = i * n),
            'deltaY' in t && (s = t.deltaY),
            'deltaX' in t && (r = t.deltaX),
            (r || s) &&
              t.deltaMode &&
              (1 == t.deltaMode ? ((r *= o), (s *= o)) : ((r *= a), (s *= a))),
            r && !e && (e = r < 1 ? -1 : 1),
            s && !i && (i = s < 1 ? -1 : 1),
            {spinX: e, spinY: i, pixelX: r, pixelY: s}
          );
        }
        (h.getEventType = function () {
          return r.firefox()
            ? 'DOMMouseScroll'
            : s('wheel')
            ? 'wheel'
            : 'mousewheel';
        }),
          (t.exports = h);
      },
      2273: (t) => {
        var e =
            'undefined' != typeof document
              ? document.createElement('p').style
              : {},
          i = ['O', 'ms', 'Moz', 'Webkit'],
          r = /([A-Z])/g,
          s = {};
        function n(t) {
          if (
            ((t = t.replace(/-([a-z])/g, function (t, e) {
              return e.toUpperCase();
            })),
            void 0 !== e[t])
          )
            return t;
          for (
            var r = t.charAt(0).toUpperCase() + t.slice(1), s = i.length;
            s--;

          ) {
            var n = i[s] + r;
            if (void 0 !== e[n]) return n;
          }
          return t;
        }
        (t.exports = function (t) {
          return t in s ? s[t] : (s[t] = n(t));
        }),
          (t.exports.dash = function (t) {
            return (
              (t = n(t)),
              r.test(t) && ((t = '-' + t.replace(r, '-$1')), (r.lastIndex = 0)),
              t.toLowerCase()
            );
          });
      },
    },
    e = {};
  function i(r) {
    var s = e[r];
    if (void 0 !== s) return s.exports;
    var n = (e[r] = {id: r, loaded: !1, exports: {}});
    return t[r](n, n.exports, i), (n.loaded = !0), n.exports;
  }
  (i.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return i.d(e, {a: e}), e;
  }),
    (i.d = (t, e) => {
      for (var r in e)
        i.o(e, r) &&
          !i.o(t, r) &&
          Object.defineProperty(t, r, {enumerable: !0, get: e[r]});
    }),
    (i.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (i.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (() => {
      'use strict';
      var t = i(7320),
        e = i.n(t),
        r = i(6270),
        s = i.n(r),
        n = i(569),
        o = i.n(n);
      function a(t) {
        let e = t[0],
          i = t[1],
          r = t[2];
        return Math.sqrt(e * e + i * i + r * r);
      }
      function h(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
      }
      function u(t, e, i) {
        return (
          (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), t
        );
      }
      function l(t, e, i) {
        return (
          (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), t
        );
      }
      function c(t, e, i) {
        return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), t;
      }
      function d(t) {
        let e = t[0],
          i = t[1],
          r = t[2];
        return e * e + i * i + r * r;
      }
      function p(t, e) {
        let i = e[0],
          r = e[1],
          s = e[2],
          n = i * i + r * r + s * s;
        return (
          n > 0 && (n = 1 / Math.sqrt(n)),
          (t[0] = e[0] * n),
          (t[1] = e[1] * n),
          (t[2] = e[2] * n),
          t
        );
      }
      function f(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }
      function m(t, e, i) {
        let r = e[0],
          s = e[1],
          n = e[2],
          o = i[0],
          a = i[1],
          h = i[2];
        return (
          (t[0] = s * h - n * a),
          (t[1] = n * o - r * h),
          (t[2] = r * a - s * o),
          t
        );
      }
      const g = (function () {
        const t = [0, 0, 0],
          e = [0, 0, 0];
        return function (i, r) {
          h(t, i), h(e, r), p(t, t), p(e, e);
          let s = f(t, e);
          return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s);
        };
      })();
      class v extends Array {
        constructor(t = 0, e = t, i = t) {
          return super(t, e, i), this;
        }
        get x() {
          return this[0];
        }
        get y() {
          return this[1];
        }
        get z() {
          return this[2];
        }
        set x(t) {
          this[0] = t;
        }
        set y(t) {
          this[1] = t;
        }
        set z(t) {
          this[2] = t;
        }
        set(t, e = t, i = t) {
          return t.length
            ? this.copy(t)
            : ((function (t, e, i, r) {
                (t[0] = e), (t[1] = i), (t[2] = r);
              })(this, t, e, i),
              this);
        }
        copy(t) {
          return h(this, t), this;
        }
        add(t, e) {
          return e ? u(this, t, e) : u(this, this, t), this;
        }
        sub(t, e) {
          return e ? l(this, t, e) : l(this, this, t), this;
        }
        multiply(t) {
          var e, i, r;
          return (
            t.length
              ? ((i = this),
                (r = t),
                ((e = this)[0] = i[0] * r[0]),
                (e[1] = i[1] * r[1]),
                (e[2] = i[2] * r[2]))
              : c(this, this, t),
            this
          );
        }
        divide(t) {
          var e, i, r;
          return (
            t.length
              ? ((i = this),
                (r = t),
                ((e = this)[0] = i[0] / r[0]),
                (e[1] = i[1] / r[1]),
                (e[2] = i[2] / r[2]))
              : c(this, this, 1 / t),
            this
          );
        }
        inverse(t = this) {
          var e, i;
          return (
            (i = t),
            ((e = this)[0] = 1 / i[0]),
            (e[1] = 1 / i[1]),
            (e[2] = 1 / i[2]),
            this
          );
        }
        len() {
          return a(this);
        }
        distance(t) {
          return t
            ? (function (t, e) {
                let i = e[0] - t[0],
                  r = e[1] - t[1],
                  s = e[2] - t[2];
                return Math.sqrt(i * i + r * r + s * s);
              })(this, t)
            : a(this);
        }
        squaredLen() {
          return d(this);
        }
        squaredDistance(t) {
          return t
            ? (function (t, e) {
                let i = e[0] - t[0],
                  r = e[1] - t[1],
                  s = e[2] - t[2];
                return i * i + r * r + s * s;
              })(this, t)
            : d(this);
        }
        negate(t = this) {
          var e, i;
          return (
            (i = t),
            ((e = this)[0] = -i[0]),
            (e[1] = -i[1]),
            (e[2] = -i[2]),
            this
          );
        }
        cross(t, e) {
          return e ? m(this, t, e) : m(this, this, t), this;
        }
        scale(t) {
          return c(this, this, t), this;
        }
        normalize() {
          return p(this, this), this;
        }
        dot(t) {
          return f(this, t);
        }
        equals(t) {
          return (
            (i = t), (e = this)[0] === i[0] && e[1] === i[1] && e[2] === i[2]
          );
          var e, i;
        }
        applyMatrix3(t) {
          return (
            (function (t, e, i) {
              let r = e[0],
                s = e[1],
                n = e[2];
              (t[0] = r * i[0] + s * i[3] + n * i[6]),
                (t[1] = r * i[1] + s * i[4] + n * i[7]),
                (t[2] = r * i[2] + s * i[5] + n * i[8]);
            })(this, this, t),
            this
          );
        }
        applyMatrix4(t) {
          return (
            (function (t, e, i) {
              let r = e[0],
                s = e[1],
                n = e[2],
                o = i[3] * r + i[7] * s + i[11] * n + i[15];
              (o = o || 1),
                (t[0] = (i[0] * r + i[4] * s + i[8] * n + i[12]) / o),
                (t[1] = (i[1] * r + i[5] * s + i[9] * n + i[13]) / o),
                (t[2] = (i[2] * r + i[6] * s + i[10] * n + i[14]) / o);
            })(this, this, t),
            this
          );
        }
        scaleRotateMatrix4(t) {
          return (
            (function (t, e, i) {
              let r = e[0],
                s = e[1],
                n = e[2],
                o = i[3] * r + i[7] * s + i[11] * n + i[15];
              (o = o || 1),
                (t[0] = (i[0] * r + i[4] * s + i[8] * n) / o),
                (t[1] = (i[1] * r + i[5] * s + i[9] * n) / o),
                (t[2] = (i[2] * r + i[6] * s + i[10] * n) / o);
            })(this, this, t),
            this
          );
        }
        applyQuaternion(t) {
          return (
            (function (t, e, i) {
              let r = e[0],
                s = e[1],
                n = e[2],
                o = i[0],
                a = i[1],
                h = i[2],
                u = a * n - h * s,
                l = h * r - o * n,
                c = o * s - a * r,
                d = a * c - h * l,
                p = h * u - o * c,
                f = o * l - a * u,
                m = 2 * i[3];
              (u *= m),
                (l *= m),
                (c *= m),
                (d *= 2),
                (p *= 2),
                (f *= 2),
                (t[0] = r + u + d),
                (t[1] = s + l + p),
                (t[2] = n + c + f);
            })(this, this, t),
            this
          );
        }
        angle(t) {
          return g(this, t);
        }
        lerp(t, e) {
          return (
            (function (t, e, i, r) {
              let s = e[0],
                n = e[1],
                o = e[2];
              (t[0] = s + r * (i[0] - s)),
                (t[1] = n + r * (i[1] - n)),
                (t[2] = o + r * (i[2] - o));
            })(this, this, t, e),
            this
          );
        }
        clone() {
          return new v(this[0], this[1], this[2]);
        }
        fromArray(t, e = 0) {
          return (
            (this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), t
          );
        }
        transformDirection(t) {
          const e = this[0],
            i = this[1],
            r = this[2];
          return (
            (this[0] = t[0] * e + t[4] * i + t[8] * r),
            (this[1] = t[1] * e + t[5] * i + t[9] * r),
            (this[2] = t[2] * e + t[6] * i + t[10] * r),
            this.normalize()
          );
        }
      }
      function _(t, e, i) {
        let r = e[0],
          s = e[1],
          n = e[2],
          o = e[3],
          a = i[0],
          h = i[1],
          u = i[2],
          l = i[3];
        return (
          (t[0] = r * l + o * a + s * u - n * h),
          (t[1] = s * l + o * h + n * a - r * u),
          (t[2] = n * l + o * u + r * h - s * a),
          (t[3] = o * l - r * a - s * h - n * u),
          t
        );
      }
      const y = function (t, e) {
          return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
        },
        w = function (t, e, i, r, s) {
          return (t[0] = e), (t[1] = i), (t[2] = r), (t[3] = s), t;
        },
        x = function (t, e) {
          return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
        },
        b = function (t, e) {
          let i = e[0],
            r = e[1],
            s = e[2],
            n = e[3],
            o = i * i + r * r + s * s + n * n;
          return (
            o > 0 && (o = 1 / Math.sqrt(o)),
            (t[0] = i * o),
            (t[1] = r * o),
            (t[2] = s * o),
            (t[3] = n * o),
            t
          );
        };
      class A extends Array {
        constructor(t = 0, e = 0, i = 0, r = 1) {
          return super(t, e, i, r), (this.onChange = () => {}), this;
        }
        get x() {
          return this[0];
        }
        get y() {
          return this[1];
        }
        get z() {
          return this[2];
        }
        get w() {
          return this[3];
        }
        set x(t) {
          (this[0] = t), this.onChange();
        }
        set y(t) {
          (this[1] = t), this.onChange();
        }
        set z(t) {
          (this[2] = t), this.onChange();
        }
        set w(t) {
          (this[3] = t), this.onChange();
        }
        identity() {
          var t;
          return (
            ((t = this)[0] = 0),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 1),
            this.onChange(),
            this
          );
        }
        set(t, e, i, r) {
          return t.length
            ? this.copy(t)
            : (w(this, t, e, i, r), this.onChange(), this);
        }
        rotateX(t) {
          return (
            (function (t, e, i) {
              i *= 0.5;
              let r = e[0],
                s = e[1],
                n = e[2],
                o = e[3],
                a = Math.sin(i),
                h = Math.cos(i);
              (t[0] = r * h + o * a),
                (t[1] = s * h + n * a),
                (t[2] = n * h - s * a),
                (t[3] = o * h - r * a);
            })(this, this, t),
            this.onChange(),
            this
          );
        }
        rotateY(t) {
          return (
            (function (t, e, i) {
              i *= 0.5;
              let r = e[0],
                s = e[1],
                n = e[2],
                o = e[3],
                a = Math.sin(i),
                h = Math.cos(i);
              (t[0] = r * h - n * a),
                (t[1] = s * h + o * a),
                (t[2] = n * h + r * a),
                (t[3] = o * h - s * a);
            })(this, this, t),
            this.onChange(),
            this
          );
        }
        rotateZ(t) {
          return (
            (function (t, e, i) {
              i *= 0.5;
              let r = e[0],
                s = e[1],
                n = e[2],
                o = e[3],
                a = Math.sin(i),
                h = Math.cos(i);
              (t[0] = r * h + s * a),
                (t[1] = s * h - r * a),
                (t[2] = n * h + o * a),
                (t[3] = o * h - n * a);
            })(this, this, t),
            this.onChange(),
            this
          );
        }
        inverse(t = this) {
          return (
            (function (t, e) {
              let i = e[0],
                r = e[1],
                s = e[2],
                n = e[3],
                o = i * i + r * r + s * s + n * n,
                a = o ? 1 / o : 0;
              (t[0] = -i * a), (t[1] = -r * a), (t[2] = -s * a), (t[3] = n * a);
            })(this, t),
            this.onChange(),
            this
          );
        }
        conjugate(t = this) {
          var e, i;
          return (
            (i = t),
            ((e = this)[0] = -i[0]),
            (e[1] = -i[1]),
            (e[2] = -i[2]),
            (e[3] = i[3]),
            this.onChange(),
            this
          );
        }
        copy(t) {
          return y(this, t), this.onChange(), this;
        }
        normalize(t = this) {
          return b(this, t), this.onChange(), this;
        }
        multiply(t, e) {
          return e ? _(this, t, e) : _(this, this, t), this.onChange(), this;
        }
        dot(t) {
          return x(this, t);
        }
        fromMatrix3(t) {
          return (
            (function (t, e) {
              let i,
                r = e[0] + e[4] + e[8];
              if (r > 0)
                (i = Math.sqrt(r + 1)),
                  (t[3] = 0.5 * i),
                  (i = 0.5 / i),
                  (t[0] = (e[5] - e[7]) * i),
                  (t[1] = (e[6] - e[2]) * i),
                  (t[2] = (e[1] - e[3]) * i);
              else {
                let r = 0;
                e[4] > e[0] && (r = 1), e[8] > e[3 * r + r] && (r = 2);
                let s = (r + 1) % 3,
                  n = (r + 2) % 3;
                (i = Math.sqrt(e[3 * r + r] - e[3 * s + s] - e[3 * n + n] + 1)),
                  (t[r] = 0.5 * i),
                  (i = 0.5 / i),
                  (t[3] = (e[3 * s + n] - e[3 * n + s]) * i),
                  (t[s] = (e[3 * s + r] + e[3 * r + s]) * i),
                  (t[n] = (e[3 * n + r] + e[3 * r + n]) * i);
              }
            })(this, t),
            this.onChange(),
            this
          );
        }
        fromEuler(t) {
          return (
            (function (t, e, i = 'YXZ') {
              let r = Math.sin(0.5 * e[0]),
                s = Math.cos(0.5 * e[0]),
                n = Math.sin(0.5 * e[1]),
                o = Math.cos(0.5 * e[1]),
                a = Math.sin(0.5 * e[2]),
                h = Math.cos(0.5 * e[2]);
              'XYZ' === i
                ? ((t[0] = r * o * h + s * n * a),
                  (t[1] = s * n * h - r * o * a),
                  (t[2] = s * o * a + r * n * h),
                  (t[3] = s * o * h - r * n * a))
                : 'YXZ' === i
                ? ((t[0] = r * o * h + s * n * a),
                  (t[1] = s * n * h - r * o * a),
                  (t[2] = s * o * a - r * n * h),
                  (t[3] = s * o * h + r * n * a))
                : 'ZXY' === i
                ? ((t[0] = r * o * h - s * n * a),
                  (t[1] = s * n * h + r * o * a),
                  (t[2] = s * o * a + r * n * h),
                  (t[3] = s * o * h - r * n * a))
                : 'ZYX' === i
                ? ((t[0] = r * o * h - s * n * a),
                  (t[1] = s * n * h + r * o * a),
                  (t[2] = s * o * a - r * n * h),
                  (t[3] = s * o * h + r * n * a))
                : 'YZX' === i
                ? ((t[0] = r * o * h + s * n * a),
                  (t[1] = s * n * h + r * o * a),
                  (t[2] = s * o * a - r * n * h),
                  (t[3] = s * o * h - r * n * a))
                : 'XZY' === i &&
                  ((t[0] = r * o * h - s * n * a),
                  (t[1] = s * n * h - r * o * a),
                  (t[2] = s * o * a + r * n * h),
                  (t[3] = s * o * h + r * n * a));
            })(this, t, t.order),
            this
          );
        }
        fromAxisAngle(t, e) {
          return (
            (function (t, e, i) {
              i *= 0.5;
              let r = Math.sin(i);
              (t[0] = r * e[0]),
                (t[1] = r * e[1]),
                (t[2] = r * e[2]),
                (t[3] = Math.cos(i));
            })(this, t, e),
            this.onChange(),
            this
          );
        }
        slerp(t, e) {
          return (
            (function (t, e, i, r) {
              let s,
                n,
                o,
                a,
                h,
                u = e[0],
                l = e[1],
                c = e[2],
                d = e[3],
                p = i[0],
                f = i[1],
                m = i[2],
                g = i[3];
              (n = u * p + l * f + c * m + d * g),
                n < 0 && ((n = -n), (p = -p), (f = -f), (m = -m), (g = -g)),
                1 - n > 1e-6
                  ? ((s = Math.acos(n)),
                    (o = Math.sin(s)),
                    (a = Math.sin((1 - r) * s) / o),
                    (h = Math.sin(r * s) / o))
                  : ((a = 1 - r), (h = r)),
                (t[0] = a * u + h * p),
                (t[1] = a * l + h * f),
                (t[2] = a * c + h * m),
                (t[3] = a * d + h * g);
            })(this, this, t, e),
            this.onChange(),
            this
          );
        }
        fromArray(t, e = 0) {
          return (
            (this[0] = t[e]),
            (this[1] = t[e + 1]),
            (this[2] = t[e + 2]),
            (this[3] = t[e + 3]),
            this.onChange(),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this[0]),
            (t[e + 1] = this[1]),
            (t[e + 2] = this[2]),
            (t[e + 3] = this[3]),
            t
          );
        }
      }
      const T = 1e-6;
      function M(t, e, i) {
        let r = e[0],
          s = e[1],
          n = e[2],
          o = e[3],
          a = e[4],
          h = e[5],
          u = e[6],
          l = e[7],
          c = e[8],
          d = e[9],
          p = e[10],
          f = e[11],
          m = e[12],
          g = e[13],
          v = e[14],
          _ = e[15],
          y = i[0],
          w = i[1],
          x = i[2],
          b = i[3];
        return (
          (t[0] = y * r + w * a + x * c + b * m),
          (t[1] = y * s + w * h + x * d + b * g),
          (t[2] = y * n + w * u + x * p + b * v),
          (t[3] = y * o + w * l + x * f + b * _),
          (y = i[4]),
          (w = i[5]),
          (x = i[6]),
          (b = i[7]),
          (t[4] = y * r + w * a + x * c + b * m),
          (t[5] = y * s + w * h + x * d + b * g),
          (t[6] = y * n + w * u + x * p + b * v),
          (t[7] = y * o + w * l + x * f + b * _),
          (y = i[8]),
          (w = i[9]),
          (x = i[10]),
          (b = i[11]),
          (t[8] = y * r + w * a + x * c + b * m),
          (t[9] = y * s + w * h + x * d + b * g),
          (t[10] = y * n + w * u + x * p + b * v),
          (t[11] = y * o + w * l + x * f + b * _),
          (y = i[12]),
          (w = i[13]),
          (x = i[14]),
          (b = i[15]),
          (t[12] = y * r + w * a + x * c + b * m),
          (t[13] = y * s + w * h + x * d + b * g),
          (t[14] = y * n + w * u + x * p + b * v),
          (t[15] = y * o + w * l + x * f + b * _),
          t
        );
      }
      function E(t, e) {
        let i = e[0],
          r = e[1],
          s = e[2],
          n = e[4],
          o = e[5],
          a = e[6],
          h = e[8],
          u = e[9],
          l = e[10];
        return (
          (t[0] = Math.hypot(i, r, s)),
          (t[1] = Math.hypot(n, o, a)),
          (t[2] = Math.hypot(h, u, l)),
          t
        );
      }
      const S = (function () {
        const t = [0, 0, 0];
        return function (e, i) {
          let r = t;
          E(r, i);
          let s = 1 / r[0],
            n = 1 / r[1],
            o = 1 / r[2],
            a = i[0] * s,
            h = i[1] * n,
            u = i[2] * o,
            l = i[4] * s,
            c = i[5] * n,
            d = i[6] * o,
            p = i[8] * s,
            f = i[9] * n,
            m = i[10] * o,
            g = a + c + m,
            v = 0;
          return (
            g > 0
              ? ((v = 2 * Math.sqrt(g + 1)),
                (e[3] = 0.25 * v),
                (e[0] = (d - f) / v),
                (e[1] = (p - u) / v),
                (e[2] = (h - l) / v))
              : a > c && a > m
              ? ((v = 2 * Math.sqrt(1 + a - c - m)),
                (e[3] = (d - f) / v),
                (e[0] = 0.25 * v),
                (e[1] = (h + l) / v),
                (e[2] = (p + u) / v))
              : c > m
              ? ((v = 2 * Math.sqrt(1 + c - a - m)),
                (e[3] = (p - u) / v),
                (e[0] = (h + l) / v),
                (e[1] = 0.25 * v),
                (e[2] = (d + f) / v))
              : ((v = 2 * Math.sqrt(1 + m - a - c)),
                (e[3] = (h - l) / v),
                (e[0] = (p + u) / v),
                (e[1] = (d + f) / v),
                (e[2] = 0.25 * v)),
            e
          );
        };
      })();
      class O extends Array {
        constructor(
          t = 1,
          e = 0,
          i = 0,
          r = 0,
          s = 0,
          n = 1,
          o = 0,
          a = 0,
          h = 0,
          u = 0,
          l = 1,
          c = 0,
          d = 0,
          p = 0,
          f = 0,
          m = 1
        ) {
          return super(t, e, i, r, s, n, o, a, h, u, l, c, d, p, f, m), this;
        }
        get x() {
          return this[12];
        }
        get y() {
          return this[13];
        }
        get z() {
          return this[14];
        }
        get w() {
          return this[15];
        }
        set x(t) {
          this[12] = t;
        }
        set y(t) {
          this[13] = t;
        }
        set z(t) {
          this[14] = t;
        }
        set w(t) {
          this[15] = t;
        }
        set(t, e, i, r, s, n, o, a, h, u, l, c, d, p, f, m) {
          return t.length
            ? this.copy(t)
            : ((function (t, e, i, r, s, n, o, a, h, u, l, c, d, p, f, m, g) {
                (t[0] = e),
                  (t[1] = i),
                  (t[2] = r),
                  (t[3] = s),
                  (t[4] = n),
                  (t[5] = o),
                  (t[6] = a),
                  (t[7] = h),
                  (t[8] = u),
                  (t[9] = l),
                  (t[10] = c),
                  (t[11] = d),
                  (t[12] = p),
                  (t[13] = f),
                  (t[14] = m),
                  (t[15] = g);
              })(this, t, e, i, r, s, n, o, a, h, u, l, c, d, p, f, m),
              this);
        }
        translate(t, e = this) {
          return (
            (function (t, e, i) {
              let r,
                s,
                n,
                o,
                a,
                h,
                u,
                l,
                c,
                d,
                p,
                f,
                m = i[0],
                g = i[1],
                v = i[2];
              e === t
                ? ((t[12] = e[0] * m + e[4] * g + e[8] * v + e[12]),
                  (t[13] = e[1] * m + e[5] * g + e[9] * v + e[13]),
                  (t[14] = e[2] * m + e[6] * g + e[10] * v + e[14]),
                  (t[15] = e[3] * m + e[7] * g + e[11] * v + e[15]))
                : ((r = e[0]),
                  (s = e[1]),
                  (n = e[2]),
                  (o = e[3]),
                  (a = e[4]),
                  (h = e[5]),
                  (u = e[6]),
                  (l = e[7]),
                  (c = e[8]),
                  (d = e[9]),
                  (p = e[10]),
                  (f = e[11]),
                  (t[0] = r),
                  (t[1] = s),
                  (t[2] = n),
                  (t[3] = o),
                  (t[4] = a),
                  (t[5] = h),
                  (t[6] = u),
                  (t[7] = l),
                  (t[8] = c),
                  (t[9] = d),
                  (t[10] = p),
                  (t[11] = f),
                  (t[12] = r * m + a * g + c * v + e[12]),
                  (t[13] = s * m + h * g + d * v + e[13]),
                  (t[14] = n * m + u * g + p * v + e[14]),
                  (t[15] = o * m + l * g + f * v + e[15]));
            })(this, e, t),
            this
          );
        }
        rotate(t, e, i = this) {
          return (
            (function (t, e, i, r) {
              let s,
                n,
                o,
                a,
                h,
                u,
                l,
                c,
                d,
                p,
                f,
                m,
                g,
                v,
                _,
                y,
                w,
                x,
                b,
                A,
                M,
                E,
                S,
                O,
                L = r[0],
                P = r[1],
                C = r[2],
                z = Math.hypot(L, P, C);
              Math.abs(z) < T ||
                ((z = 1 / z),
                (L *= z),
                (P *= z),
                (C *= z),
                (s = Math.sin(i)),
                (n = Math.cos(i)),
                (o = 1 - n),
                (a = e[0]),
                (h = e[1]),
                (u = e[2]),
                (l = e[3]),
                (c = e[4]),
                (d = e[5]),
                (p = e[6]),
                (f = e[7]),
                (m = e[8]),
                (g = e[9]),
                (v = e[10]),
                (_ = e[11]),
                (y = L * L * o + n),
                (w = P * L * o + C * s),
                (x = C * L * o - P * s),
                (b = L * P * o - C * s),
                (A = P * P * o + n),
                (M = C * P * o + L * s),
                (E = L * C * o + P * s),
                (S = P * C * o - L * s),
                (O = C * C * o + n),
                (t[0] = a * y + c * w + m * x),
                (t[1] = h * y + d * w + g * x),
                (t[2] = u * y + p * w + v * x),
                (t[3] = l * y + f * w + _ * x),
                (t[4] = a * b + c * A + m * M),
                (t[5] = h * b + d * A + g * M),
                (t[6] = u * b + p * A + v * M),
                (t[7] = l * b + f * A + _ * M),
                (t[8] = a * E + c * S + m * O),
                (t[9] = h * E + d * S + g * O),
                (t[10] = u * E + p * S + v * O),
                (t[11] = l * E + f * S + _ * O),
                e !== t &&
                  ((t[12] = e[12]),
                  (t[13] = e[13]),
                  (t[14] = e[14]),
                  (t[15] = e[15])));
            })(this, i, t, e),
            this
          );
        }
        scale(t, e = this) {
          return (
            (function (t, e, i) {
              let r = i[0],
                s = i[1],
                n = i[2];
              (t[0] = e[0] * r),
                (t[1] = e[1] * r),
                (t[2] = e[2] * r),
                (t[3] = e[3] * r),
                (t[4] = e[4] * s),
                (t[5] = e[5] * s),
                (t[6] = e[6] * s),
                (t[7] = e[7] * s),
                (t[8] = e[8] * n),
                (t[9] = e[9] * n),
                (t[10] = e[10] * n),
                (t[11] = e[11] * n),
                (t[12] = e[12]),
                (t[13] = e[13]),
                (t[14] = e[14]),
                (t[15] = e[15]);
            })(this, e, 'number' == typeof t ? [t, t, t] : t),
            this
          );
        }
        multiply(t, e) {
          return e ? M(this, t, e) : M(this, this, t), this;
        }
        identity() {
          var t;
          return (
            ((t = this)[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = 1),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = 1),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            this
          );
        }
        copy(t) {
          var e, i;
          return (
            (i = t),
            ((e = this)[0] = i[0]),
            (e[1] = i[1]),
            (e[2] = i[2]),
            (e[3] = i[3]),
            (e[4] = i[4]),
            (e[5] = i[5]),
            (e[6] = i[6]),
            (e[7] = i[7]),
            (e[8] = i[8]),
            (e[9] = i[9]),
            (e[10] = i[10]),
            (e[11] = i[11]),
            (e[12] = i[12]),
            (e[13] = i[13]),
            (e[14] = i[14]),
            (e[15] = i[15]),
            this
          );
        }
        fromPerspective({fov: t, aspect: e, near: i, far: r} = {}) {
          return (
            (function (t, e, i, r, s) {
              let n = 1 / Math.tan(e / 2),
                o = 1 / (r - s);
              (t[0] = n / i),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = n),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 0),
                (t[9] = 0),
                (t[10] = (s + r) * o),
                (t[11] = -1),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = 2 * s * r * o),
                (t[15] = 0);
            })(this, t, e, i, r),
            this
          );
        }
        fromOrthogonal({
          left: t,
          right: e,
          bottom: i,
          top: r,
          near: s,
          far: n,
        }) {
          return (
            (function (t, e, i, r, s, n, o) {
              let a = 1 / (e - i),
                h = 1 / (r - s),
                u = 1 / (n - o);
              (t[0] = -2 * a),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = -2 * h),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 0),
                (t[9] = 0),
                (t[10] = 2 * u),
                (t[11] = 0),
                (t[12] = (e + i) * a),
                (t[13] = (s + r) * h),
                (t[14] = (o + n) * u),
                (t[15] = 1);
            })(this, t, e, i, r, s, n),
            this
          );
        }
        fromQuaternion(t) {
          return (
            (function (t, e) {
              let i = e[0],
                r = e[1],
                s = e[2],
                n = e[3],
                o = i + i,
                a = r + r,
                h = s + s,
                u = i * o,
                l = r * o,
                c = r * a,
                d = s * o,
                p = s * a,
                f = s * h,
                m = n * o,
                g = n * a,
                v = n * h;
              (t[0] = 1 - c - f),
                (t[1] = l + v),
                (t[2] = d - g),
                (t[3] = 0),
                (t[4] = l - v),
                (t[5] = 1 - u - f),
                (t[6] = p + m),
                (t[7] = 0),
                (t[8] = d + g),
                (t[9] = p - m),
                (t[10] = 1 - u - c),
                (t[11] = 0),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = 0),
                (t[15] = 1);
            })(this, t),
            this
          );
        }
        setPosition(t) {
          return (this.x = t[0]), (this.y = t[1]), (this.z = t[2]), this;
        }
        inverse(t = this) {
          return (
            (function (t, e) {
              let i = e[0],
                r = e[1],
                s = e[2],
                n = e[3],
                o = e[4],
                a = e[5],
                h = e[6],
                u = e[7],
                l = e[8],
                c = e[9],
                d = e[10],
                p = e[11],
                f = e[12],
                m = e[13],
                g = e[14],
                v = e[15],
                _ = i * a - r * o,
                y = i * h - s * o,
                w = i * u - n * o,
                x = r * h - s * a,
                b = r * u - n * a,
                A = s * u - n * h,
                T = l * m - c * f,
                M = l * g - d * f,
                E = l * v - p * f,
                S = c * g - d * m,
                O = c * v - p * m,
                L = d * v - p * g,
                P = _ * L - y * O + w * S + x * E - b * M + A * T;
              P &&
                ((P = 1 / P),
                (t[0] = (a * L - h * O + u * S) * P),
                (t[1] = (s * O - r * L - n * S) * P),
                (t[2] = (m * A - g * b + v * x) * P),
                (t[3] = (d * b - c * A - p * x) * P),
                (t[4] = (h * E - o * L - u * M) * P),
                (t[5] = (i * L - s * E + n * M) * P),
                (t[6] = (g * w - f * A - v * y) * P),
                (t[7] = (l * A - d * w + p * y) * P),
                (t[8] = (o * O - a * E + u * T) * P),
                (t[9] = (r * E - i * O - n * T) * P),
                (t[10] = (f * b - m * w + v * _) * P),
                (t[11] = (c * w - l * b - p * _) * P),
                (t[12] = (a * M - o * S - h * T) * P),
                (t[13] = (i * S - r * M + s * T) * P),
                (t[14] = (m * y - f * x - g * _) * P),
                (t[15] = (l * x - c * y + d * _) * P));
            })(this, t),
            this
          );
        }
        compose(t, e, i) {
          return (
            (function (t, e, i, r) {
              let s = e[0],
                n = e[1],
                o = e[2],
                a = e[3],
                h = s + s,
                u = n + n,
                l = o + o,
                c = s * h,
                d = s * u,
                p = s * l,
                f = n * u,
                m = n * l,
                g = o * l,
                v = a * h,
                _ = a * u,
                y = a * l,
                w = r[0],
                x = r[1],
                b = r[2];
              (t[0] = (1 - (f + g)) * w),
                (t[1] = (d + y) * w),
                (t[2] = (p - _) * w),
                (t[3] = 0),
                (t[4] = (d - y) * x),
                (t[5] = (1 - (c + g)) * x),
                (t[6] = (m + v) * x),
                (t[7] = 0),
                (t[8] = (p + _) * b),
                (t[9] = (m - v) * b),
                (t[10] = (1 - (c + f)) * b),
                (t[11] = 0),
                (t[12] = i[0]),
                (t[13] = i[1]),
                (t[14] = i[2]),
                (t[15] = 1);
            })(this, t, e, i),
            this
          );
        }
        getRotation(t) {
          return S(t, this), this;
        }
        getTranslation(t) {
          var e, i;
          return (
            (i = this),
            ((e = t)[0] = i[12]),
            (e[1] = i[13]),
            (e[2] = i[14]),
            this
          );
        }
        getScaling(t) {
          return E(t, this), this;
        }
        getMaxScaleOnAxis() {
          return (function (t) {
            let e = t[0],
              i = t[1],
              r = t[2],
              s = t[4],
              n = t[5],
              o = t[6],
              a = t[8],
              h = t[9],
              u = t[10];
            const l = e * e + i * i + r * r,
              c = s * s + n * n + o * o,
              d = a * a + h * h + u * u;
            return Math.sqrt(Math.max(l, c, d));
          })(this);
        }
        lookAt(t, e, i) {
          return (
            (function (t, e, i, r) {
              let s = e[0],
                n = e[1],
                o = e[2],
                a = r[0],
                h = r[1],
                u = r[2],
                l = s - i[0],
                c = n - i[1],
                d = o - i[2],
                p = l * l + c * c + d * d;
              0 === p
                ? (d = 1)
                : ((p = 1 / Math.sqrt(p)), (l *= p), (c *= p), (d *= p));
              let f = h * d - u * c,
                m = u * l - a * d,
                g = a * c - h * l;
              (p = f * f + m * m + g * g),
                0 === p &&
                  (u ? (a += 1e-6) : h ? (u += 1e-6) : (h += 1e-6),
                  (f = h * d - u * c),
                  (m = u * l - a * d),
                  (g = a * c - h * l),
                  (p = f * f + m * m + g * g)),
                (p = 1 / Math.sqrt(p)),
                (f *= p),
                (m *= p),
                (g *= p),
                (t[0] = f),
                (t[1] = m),
                (t[2] = g),
                (t[3] = 0),
                (t[4] = c * g - d * m),
                (t[5] = d * f - l * g),
                (t[6] = l * m - c * f),
                (t[7] = 0),
                (t[8] = l),
                (t[9] = c),
                (t[10] = d),
                (t[11] = 0),
                (t[12] = s),
                (t[13] = n),
                (t[14] = o),
                (t[15] = 1);
            })(this, t, e, i),
            this
          );
        }
        determinant() {
          return (function (t) {
            let e = t[0],
              i = t[1],
              r = t[2],
              s = t[3],
              n = t[4],
              o = t[5],
              a = t[6],
              h = t[7],
              u = t[8],
              l = t[9],
              c = t[10],
              d = t[11],
              p = t[12],
              f = t[13],
              m = t[14],
              g = t[15];
            return (
              (e * o - i * n) * (c * g - d * m) -
              (e * a - r * n) * (l * g - d * f) +
              (e * h - s * n) * (l * m - c * f) +
              (i * a - r * o) * (u * g - d * p) -
              (i * h - s * o) * (u * m - c * p) +
              (r * h - s * a) * (u * f - l * p)
            );
          })(this);
        }
        fromArray(t, e = 0) {
          return (
            (this[0] = t[e]),
            (this[1] = t[e + 1]),
            (this[2] = t[e + 2]),
            (this[3] = t[e + 3]),
            (this[4] = t[e + 4]),
            (this[5] = t[e + 5]),
            (this[6] = t[e + 6]),
            (this[7] = t[e + 7]),
            (this[8] = t[e + 8]),
            (this[9] = t[e + 9]),
            (this[10] = t[e + 10]),
            (this[11] = t[e + 11]),
            (this[12] = t[e + 12]),
            (this[13] = t[e + 13]),
            (this[14] = t[e + 14]),
            (this[15] = t[e + 15]),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this[0]),
            (t[e + 1] = this[1]),
            (t[e + 2] = this[2]),
            (t[e + 3] = this[3]),
            (t[e + 4] = this[4]),
            (t[e + 5] = this[5]),
            (t[e + 6] = this[6]),
            (t[e + 7] = this[7]),
            (t[e + 8] = this[8]),
            (t[e + 9] = this[9]),
            (t[e + 10] = this[10]),
            (t[e + 11] = this[11]),
            (t[e + 12] = this[12]),
            (t[e + 13] = this[13]),
            (t[e + 14] = this[14]),
            (t[e + 15] = this[15]),
            t
          );
        }
      }
      const L = new O();
      class P extends Array {
        constructor(t = 0, e = t, i = t, r = 'YXZ') {
          return (
            super(t, e, i), (this.order = r), (this.onChange = () => {}), this
          );
        }
        get x() {
          return this[0];
        }
        get y() {
          return this[1];
        }
        get z() {
          return this[2];
        }
        set x(t) {
          (this[0] = t), this.onChange();
        }
        set y(t) {
          (this[1] = t), this.onChange();
        }
        set z(t) {
          (this[2] = t), this.onChange();
        }
        set(t, e = t, i = t) {
          return t.length
            ? this.copy(t)
            : ((this[0] = t),
              (this[1] = e),
              (this[2] = i),
              this.onChange(),
              this);
        }
        copy(t) {
          return (
            (this[0] = t[0]),
            (this[1] = t[1]),
            (this[2] = t[2]),
            this.onChange(),
            this
          );
        }
        reorder(t) {
          return (this.order = t), this.onChange(), this;
        }
        fromRotationMatrix(t, e = this.order) {
          return (
            (function (t, e, i = 'YXZ') {
              'XYZ' === i
                ? ((t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1))),
                  Math.abs(e[8]) < 0.99999
                    ? ((t[0] = Math.atan2(-e[9], e[10])),
                      (t[2] = Math.atan2(-e[4], e[0])))
                    : ((t[0] = Math.atan2(e[6], e[5])), (t[2] = 0)))
                : 'YXZ' === i
                ? ((t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1))),
                  Math.abs(e[9]) < 0.99999
                    ? ((t[1] = Math.atan2(e[8], e[10])),
                      (t[2] = Math.atan2(e[1], e[5])))
                    : ((t[1] = Math.atan2(-e[2], e[0])), (t[2] = 0)))
                : 'ZXY' === i
                ? ((t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1))),
                  Math.abs(e[6]) < 0.99999
                    ? ((t[1] = Math.atan2(-e[2], e[10])),
                      (t[2] = Math.atan2(-e[4], e[5])))
                    : ((t[1] = 0), (t[2] = Math.atan2(e[1], e[0]))))
                : 'ZYX' === i
                ? ((t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1))),
                  Math.abs(e[2]) < 0.99999
                    ? ((t[0] = Math.atan2(e[6], e[10])),
                      (t[2] = Math.atan2(e[1], e[0])))
                    : ((t[0] = 0), (t[2] = Math.atan2(-e[4], e[5]))))
                : 'YZX' === i
                ? ((t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1))),
                  Math.abs(e[1]) < 0.99999
                    ? ((t[0] = Math.atan2(-e[9], e[5])),
                      (t[1] = Math.atan2(-e[2], e[0])))
                    : ((t[0] = 0), (t[1] = Math.atan2(e[8], e[10]))))
                : 'XZY' === i &&
                  ((t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1))),
                  Math.abs(e[4]) < 0.99999
                    ? ((t[0] = Math.atan2(e[6], e[5])),
                      (t[1] = Math.atan2(e[8], e[0])))
                    : ((t[0] = Math.atan2(-e[9], e[10])), (t[1] = 0)));
            })(this, t, e),
            this.onChange(),
            this
          );
        }
        fromQuaternion(t, e = this.order) {
          return L.fromQuaternion(t), this.fromRotationMatrix(L, e);
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), t
          );
        }
      }
      class C {
        constructor() {
          (this.parent = null),
            (this.children = []),
            (this.visible = !0),
            (this.matrix = new O()),
            (this.worldMatrix = new O()),
            (this.matrixAutoUpdate = !0),
            (this.position = new v()),
            (this.quaternion = new A()),
            (this.scale = new v(1)),
            (this.rotation = new P()),
            (this.up = new v(0, 1, 0)),
            (this.rotation.onChange = () =>
              this.quaternion.fromEuler(this.rotation)),
            (this.quaternion.onChange = () =>
              this.rotation.fromQuaternion(this.quaternion));
        }
        setParent(t, e = !0) {
          this.parent && t !== this.parent && this.parent.removeChild(this, !1),
            (this.parent = t),
            e && t && t.addChild(this, !1);
        }
        addChild(t, e = !0) {
          ~this.children.indexOf(t) || this.children.push(t),
            e && t.setParent(this, !1);
        }
        removeChild(t, e = !0) {
          ~this.children.indexOf(t) &&
            this.children.splice(this.children.indexOf(t), 1),
            e && t.setParent(null, !1);
        }
        updateMatrixWorld(t) {
          this.matrixAutoUpdate && this.updateMatrix(),
            (this.worldMatrixNeedsUpdate || t) &&
              (null === this.parent
                ? this.worldMatrix.copy(this.matrix)
                : this.worldMatrix.multiply(
                    this.parent.worldMatrix,
                    this.matrix
                  ),
              (this.worldMatrixNeedsUpdate = !1),
              (t = !0));
          for (let e = 0, i = this.children.length; e < i; e++)
            this.children[e].updateMatrixWorld(t);
        }
        updateMatrix() {
          this.matrix.compose(this.quaternion, this.position, this.scale),
            (this.worldMatrixNeedsUpdate = !0);
        }
        traverse(t) {
          if (!t(this))
            for (let e = 0, i = this.children.length; e < i; e++)
              this.children[e].traverse(t);
        }
        decompose() {
          this.matrix.getTranslation(this.position),
            this.matrix.getRotation(this.quaternion),
            this.matrix.getScaling(this.scale),
            this.rotation.fromQuaternion(this.quaternion);
        }
        lookAt(t, e = !1) {
          e
            ? this.matrix.lookAt(this.position, t, this.up)
            : this.matrix.lookAt(t, this.position, this.up),
            this.matrix.getRotation(this.quaternion),
            this.rotation.fromQuaternion(this.quaternion);
        }
      }
      const z = new O(),
        R = new v(),
        F = new v();
      class I extends C {
        constructor(
          t,
          {
            near: e = 0.1,
            far: i = 100,
            fov: r = 45,
            aspect: s = 1,
            left: n,
            right: o,
            bottom: a,
            top: h,
            zoom: u = 1,
          } = {}
        ) {
          super(),
            Object.assign(this, {
              near: e,
              far: i,
              fov: r,
              aspect: s,
              left: n,
              right: o,
              bottom: a,
              top: h,
              zoom: u,
            }),
            (this.projectionMatrix = new O()),
            (this.viewMatrix = new O()),
            (this.projectionViewMatrix = new O()),
            (this.worldPosition = new v()),
            (this.type = n || o ? 'orthographic' : 'perspective'),
            'orthographic' === this.type
              ? this.orthographic()
              : this.perspective();
        }
        perspective({
          near: t = this.near,
          far: e = this.far,
          fov: i = this.fov,
          aspect: r = this.aspect,
        } = {}) {
          return (
            Object.assign(this, {near: t, far: e, fov: i, aspect: r}),
            this.projectionMatrix.fromPerspective({
              fov: i * (Math.PI / 180),
              aspect: r,
              near: t,
              far: e,
            }),
            (this.type = 'perspective'),
            this
          );
        }
        orthographic({
          near: t = this.near,
          far: e = this.far,
          left: i = this.left,
          right: r = this.right,
          bottom: s = this.bottom,
          top: n = this.top,
          zoom: o = this.zoom,
        } = {}) {
          return (
            Object.assign(this, {
              near: t,
              far: e,
              left: i,
              right: r,
              bottom: s,
              top: n,
              zoom: o,
            }),
            (i /= o),
            (r /= o),
            (s /= o),
            (n /= o),
            this.projectionMatrix.fromOrthogonal({
              left: i,
              right: r,
              bottom: s,
              top: n,
              near: t,
              far: e,
            }),
            (this.type = 'orthographic'),
            this
          );
        }
        updateMatrixWorld() {
          return (
            super.updateMatrixWorld(),
            this.viewMatrix.inverse(this.worldMatrix),
            this.worldMatrix.getTranslation(this.worldPosition),
            this.projectionViewMatrix.multiply(
              this.projectionMatrix,
              this.viewMatrix
            ),
            this
          );
        }
        lookAt(t) {
          return super.lookAt(t, !0), this;
        }
        project(t) {
          return (
            t.applyMatrix4(this.viewMatrix),
            t.applyMatrix4(this.projectionMatrix),
            this
          );
        }
        unproject(t) {
          return (
            t.applyMatrix4(z.inverse(this.projectionMatrix)),
            t.applyMatrix4(this.worldMatrix),
            this
          );
        }
        updateFrustum() {
          this.frustum ||
            (this.frustum = [
              new v(),
              new v(),
              new v(),
              new v(),
              new v(),
              new v(),
            ]);
          const t = this.projectionViewMatrix;
          (this.frustum[0].set(
            t[3] - t[0],
            t[7] - t[4],
            t[11] - t[8]
          ).constant = t[15] - t[12]),
            (this.frustum[1].set(
              t[3] + t[0],
              t[7] + t[4],
              t[11] + t[8]
            ).constant = t[15] + t[12]),
            (this.frustum[2].set(
              t[3] + t[1],
              t[7] + t[5],
              t[11] + t[9]
            ).constant = t[15] + t[13]),
            (this.frustum[3].set(
              t[3] - t[1],
              t[7] - t[5],
              t[11] - t[9]
            ).constant = t[15] - t[13]),
            (this.frustum[4].set(
              t[3] - t[2],
              t[7] - t[6],
              t[11] - t[10]
            ).constant = t[15] - t[14]),
            (this.frustum[5].set(
              t[3] + t[2],
              t[7] + t[6],
              t[11] + t[10]
            ).constant = t[15] + t[14]);
          for (let t = 0; t < 6; t++) {
            const e = 1 / this.frustum[t].distance();
            this.frustum[t].multiply(e), (this.frustum[t].constant *= e);
          }
        }
        frustumIntersectsMesh(t, e = t.worldMatrix) {
          if (!t.geometry.attributes.position) return !0;
          if (
            ((t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0) ||
              t.geometry.computeBoundingSphere(),
            !t.geometry.bounds)
          )
            return !0;
          const i = R;
          i.copy(t.geometry.bounds.center), i.applyMatrix4(e);
          const r = t.geometry.bounds.radius * e.getMaxScaleOnAxis();
          return this.frustumIntersectsSphere(i, r);
        }
        frustumIntersectsSphere(t, e) {
          const i = F;
          for (let r = 0; r < 6; r++) {
            const s = this.frustum[r];
            if (i.copy(s).dot(t) + s.constant < -e) return !1;
          }
          return !0;
        }
      }
      const k = new v();
      let D = 1;
      class B {
        constructor({
          canvas: t = document.createElement('canvas'),
          width: e = 300,
          height: i = 150,
          dpr: r = 1,
          alpha: s = !1,
          depth: n = !0,
          stencil: o = !1,
          antialias: a = !1,
          premultipliedAlpha: h = !1,
          preserveDrawingBuffer: u = !1,
          powerPreference: l = 'default',
          autoClear: c = !0,
          webgl: d = 2,
        } = {}) {
          const p = {
            alpha: s,
            depth: n,
            stencil: o,
            antialias: a,
            premultipliedAlpha: h,
            preserveDrawingBuffer: u,
            powerPreference: l,
          };
          (this.dpr = r),
            (this.alpha = s),
            (this.color = !0),
            (this.depth = n),
            (this.stencil = o),
            (this.premultipliedAlpha = h),
            (this.autoClear = c),
            (this.id = D++),
            2 === d && (this.gl = t.getContext('webgl2', p)),
            (this.isWebgl2 = !!this.gl),
            this.gl || (this.gl = t.getContext('webgl', p)),
            this.gl || console.error('unable to create webgl context'),
            (this.gl.renderer = this),
            this.setSize(e, i),
            (this.state = {}),
            (this.state.blendFunc = {src: this.gl.ONE, dst: this.gl.ZERO}),
            (this.state.blendEquation = {modeRGB: this.gl.FUNC_ADD}),
            (this.state.cullFace = null),
            (this.state.frontFace = this.gl.CCW),
            (this.state.depthMask = !0),
            (this.state.depthFunc = this.gl.LESS),
            (this.state.premultiplyAlpha = !1),
            (this.state.flipY = !1),
            (this.state.unpackAlignment = 4),
            (this.state.framebuffer = null),
            (this.state.viewport = {x: 0, y: 0, width: null, height: null}),
            (this.state.textureUnits = []),
            (this.state.activeTextureUnit = 0),
            (this.state.boundBuffer = null),
            (this.state.uniformLocations = new Map()),
            (this.state.currentProgram = null),
            (this.extensions = {}),
            this.isWebgl2
              ? (this.getExtension('EXT_color_buffer_float'),
                this.getExtension('OES_texture_float_linear'))
              : (this.getExtension('OES_texture_float'),
                this.getExtension('OES_texture_float_linear'),
                this.getExtension('OES_texture_half_float'),
                this.getExtension('OES_texture_half_float_linear'),
                this.getExtension('OES_element_index_uint'),
                this.getExtension('OES_standard_derivatives'),
                this.getExtension('EXT_sRGB'),
                this.getExtension('WEBGL_depth_texture'),
                this.getExtension('WEBGL_draw_buffers')),
            this.getExtension('WEBGL_compressed_texture_astc'),
            this.getExtension('EXT_texture_compression_bptc'),
            this.getExtension('WEBGL_compressed_texture_s3tc'),
            this.getExtension('WEBGL_compressed_texture_etc1'),
            this.getExtension('WEBGL_compressed_texture_pvrtc'),
            this.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
            (this.vertexAttribDivisor = this.getExtension(
              'ANGLE_instanced_arrays',
              'vertexAttribDivisor',
              'vertexAttribDivisorANGLE'
            )),
            (this.drawArraysInstanced = this.getExtension(
              'ANGLE_instanced_arrays',
              'drawArraysInstanced',
              'drawArraysInstancedANGLE'
            )),
            (this.drawElementsInstanced = this.getExtension(
              'ANGLE_instanced_arrays',
              'drawElementsInstanced',
              'drawElementsInstancedANGLE'
            )),
            (this.createVertexArray = this.getExtension(
              'OES_vertex_array_object',
              'createVertexArray',
              'createVertexArrayOES'
            )),
            (this.bindVertexArray = this.getExtension(
              'OES_vertex_array_object',
              'bindVertexArray',
              'bindVertexArrayOES'
            )),
            (this.deleteVertexArray = this.getExtension(
              'OES_vertex_array_object',
              'deleteVertexArray',
              'deleteVertexArrayOES'
            )),
            (this.drawBuffers = this.getExtension(
              'WEBGL_draw_buffers',
              'drawBuffers',
              'drawBuffersWEBGL'
            )),
            (this.parameters = {}),
            (this.parameters.maxTextureUnits = this.gl.getParameter(
              this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS
            )),
            (this.parameters.maxAnisotropy = this.getExtension(
              'EXT_texture_filter_anisotropic'
            )
              ? this.gl.getParameter(
                  this.getExtension('EXT_texture_filter_anisotropic')
                    .MAX_TEXTURE_MAX_ANISOTROPY_EXT
                )
              : 0);
        }
        setSize(t, e) {
          (this.width = t),
            (this.height = e),
            (this.gl.canvas.width = t * this.dpr),
            (this.gl.canvas.height = e * this.dpr),
            Object.assign(this.gl.canvas.style, {
              width: t + 'px',
              height: e + 'px',
            });
        }
        setViewport(t, e, i = 0, r = 0) {
          (this.state.viewport.width === t &&
            this.state.viewport.height === e) ||
            ((this.state.viewport.width = t),
            (this.state.viewport.height = e),
            (this.state.viewport.x = i),
            (this.state.viewport.y = r),
            this.gl.viewport(i, r, t, e));
        }
        setScissor(t, e, i = 0, r = 0) {
          this.gl.scissor(i, r, t, e);
        }
        enable(t) {
          !0 !== this.state[t] && (this.gl.enable(t), (this.state[t] = !0));
        }
        disable(t) {
          !1 !== this.state[t] && (this.gl.disable(t), (this.state[t] = !1));
        }
        setBlendFunc(t, e, i, r) {
          (this.state.blendFunc.src === t &&
            this.state.blendFunc.dst === e &&
            this.state.blendFunc.srcAlpha === i &&
            this.state.blendFunc.dstAlpha === r) ||
            ((this.state.blendFunc.src = t),
            (this.state.blendFunc.dst = e),
            (this.state.blendFunc.srcAlpha = i),
            (this.state.blendFunc.dstAlpha = r),
            void 0 !== i
              ? this.gl.blendFuncSeparate(t, e, i, r)
              : this.gl.blendFunc(t, e));
        }
        setBlendEquation(t, e) {
          (t = t || this.gl.FUNC_ADD),
            (this.state.blendEquation.modeRGB === t &&
              this.state.blendEquation.modeAlpha === e) ||
              ((this.state.blendEquation.modeRGB = t),
              (this.state.blendEquation.modeAlpha = e),
              void 0 !== e
                ? this.gl.blendEquationSeparate(t, e)
                : this.gl.blendEquation(t));
        }
        setCullFace(t) {
          this.state.cullFace !== t &&
            ((this.state.cullFace = t), this.gl.cullFace(t));
        }
        setFrontFace(t) {
          this.state.frontFace !== t &&
            ((this.state.frontFace = t), this.gl.frontFace(t));
        }
        setDepthMask(t) {
          this.state.depthMask !== t &&
            ((this.state.depthMask = t), this.gl.depthMask(t));
        }
        setDepthFunc(t) {
          this.state.depthFunc !== t &&
            ((this.state.depthFunc = t), this.gl.depthFunc(t));
        }
        activeTexture(t) {
          this.state.activeTextureUnit !== t &&
            ((this.state.activeTextureUnit = t),
            this.gl.activeTexture(this.gl.TEXTURE0 + t));
        }
        bindFramebuffer({
          target: t = this.gl.FRAMEBUFFER,
          buffer: e = null,
        } = {}) {
          this.state.framebuffer !== e &&
            ((this.state.framebuffer = e), this.gl.bindFramebuffer(t, e));
        }
        getExtension(t, e, i) {
          return e && this.gl[e]
            ? this.gl[e].bind(this.gl)
            : (this.extensions[t] ||
                (this.extensions[t] = this.gl.getExtension(t)),
              e
                ? this.extensions[t]
                  ? this.extensions[t][i].bind(this.extensions[t])
                  : null
                : this.extensions[t]);
        }
        sortOpaque(t, e) {
          return t.renderOrder !== e.renderOrder
            ? t.renderOrder - e.renderOrder
            : t.program.id !== e.program.id
            ? t.program.id - e.program.id
            : t.zDepth !== e.zDepth
            ? t.zDepth - e.zDepth
            : e.id - t.id;
        }
        sortTransparent(t, e) {
          return t.renderOrder !== e.renderOrder
            ? t.renderOrder - e.renderOrder
            : t.zDepth !== e.zDepth
            ? e.zDepth - t.zDepth
            : e.id - t.id;
        }
        sortUI(t, e) {
          return t.renderOrder !== e.renderOrder
            ? t.renderOrder - e.renderOrder
            : t.program.id !== e.program.id
            ? t.program.id - e.program.id
            : e.id - t.id;
        }
        getRenderList({scene: t, camera: e, frustumCull: i, sort: r}) {
          let s = [];
          if (
            (e && i && e.updateFrustum(),
            t.traverse((t) => {
              if (!t.visible) return !0;
              t.draw &&
                ((i && t.frustumCulled && e && !e.frustumIntersectsMesh(t)) ||
                  s.push(t));
            }),
            r)
          ) {
            const t = [],
              i = [],
              r = [];
            s.forEach((s) => {
              s.program.transparent
                ? s.program.depthTest
                  ? i.push(s)
                  : r.push(s)
                : t.push(s),
                (s.zDepth = 0),
                0 === s.renderOrder &&
                  s.program.depthTest &&
                  e &&
                  (s.worldMatrix.getTranslation(k),
                  k.applyMatrix4(e.projectionViewMatrix),
                  (s.zDepth = k.z));
            }),
              t.sort(this.sortOpaque),
              i.sort(this.sortTransparent),
              r.sort(this.sortUI),
              (s = t.concat(i, r));
          }
          return s;
        }
        render({
          scene: t,
          camera: e,
          target: i = null,
          update: r = !0,
          sort: s = !0,
          frustumCull: n = !0,
          clear: o,
        }) {
          null === i
            ? (this.bindFramebuffer(),
              this.setViewport(this.width * this.dpr, this.height * this.dpr))
            : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)),
            (o || (this.autoClear && !1 !== o)) &&
              (!this.depth ||
                (i && !i.depth) ||
                (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
              this.gl.clear(
                (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
                  (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
                  (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
              )),
            r && t.updateMatrixWorld(),
            e && e.updateMatrixWorld();
          this.getRenderList({
            scene: t,
            camera: e,
            frustumCull: n,
            sort: s,
          }).forEach((t) => {
            t.draw({camera: e});
          });
        }
      }
      const j = new (class {
          isPhone() {
            return (
              this.isPhoneChecked ||
                ((this.isPhoneChecked = !0),
                (this.isPhoneCheck =
                  document.documentElement.classList.contains('mobile'))),
              this.isPhoneCheck
            );
          }
          isTablet() {
            return (
              this.isTabletChecked ||
                ((this.isTabletChecked = !0),
                (this.isTabletCheck =
                  document.documentElement.classList.contains('mobile'))),
              this.isTabletCheck
            );
          }
          isDesktop() {
            return !this.isPhone();
          }
          isWebPSupported() {
            if (!this.isWebPChecked) {
              this.isWebPChecked = !0;
              const t = document.createElement('canvas');
              t.getContext &&
                t.getContext('2d') &&
                (this.isWebPCheck =
                  0 === t.toDataURL('image/webp').indexOf('data:image/webp'));
            }
            return this.isWebPCheck;
          }
        })(),
        q = new v();
      let U = 1,
        N = 1,
        W = !1;
      class Y {
        constructor(t, e = {}) {
          t.canvas ||
            console.error('gl not passed as first argument to Geometry'),
            (this.gl = t),
            (this.attributes = e),
            (this.id = U++),
            (this.VAOs = {}),
            (this.drawRange = {start: 0, count: 0}),
            (this.instancedCount = 0),
            this.gl.renderer.bindVertexArray(null),
            (this.gl.renderer.currentGeometry = null),
            (this.glState = this.gl.renderer.state);
          for (let t in e) this.addAttribute(t, e[t]);
        }
        addAttribute(t, e) {
          if (
            ((this.attributes[t] = e),
            (e.id = N++),
            (e.size = e.size || 1),
            (e.type =
              e.type ||
              (e.data.constructor === Float32Array
                ? this.gl.FLOAT
                : e.data.constructor === Uint16Array
                ? this.gl.UNSIGNED_SHORT
                : this.gl.UNSIGNED_INT)),
            (e.target =
              'index' === t
                ? this.gl.ELEMENT_ARRAY_BUFFER
                : this.gl.ARRAY_BUFFER),
            (e.normalized = e.normalized || !1),
            (e.stride = e.stride || 0),
            (e.offset = e.offset || 0),
            (e.count =
              e.count ||
              (e.stride
                ? e.data.byteLength / e.stride
                : e.data.length / e.size)),
            (e.divisor = e.instanced || 0),
            (e.needsUpdate = !1),
            (e.usage = e.usage || this.gl.STATIC_DRAW),
            e.buffer || this.updateAttribute(e),
            e.divisor)
          ) {
            if (
              ((this.isInstanced = !0),
              this.instancedCount &&
                this.instancedCount !== e.count * e.divisor)
            )
              return (
                console.warn(
                  'geometry has multiple instanced buffers of different length'
                ),
                (this.instancedCount = Math.min(
                  this.instancedCount,
                  e.count * e.divisor
                ))
              );
            this.instancedCount = e.count * e.divisor;
          } else
            'index' === t
              ? (this.drawRange.count = e.count)
              : this.attributes.index ||
                (this.drawRange.count = Math.max(
                  this.drawRange.count,
                  e.count
                ));
        }
        updateAttribute(t) {
          const e = !t.buffer;
          e && (t.buffer = this.gl.createBuffer()),
            this.glState.boundBuffer !== t.buffer &&
              (this.gl.bindBuffer(t.target, t.buffer),
              (this.glState.boundBuffer = t.buffer)),
            e
              ? this.gl.bufferData(t.target, t.data, t.usage)
              : this.gl.bufferSubData(t.target, 0, t.data),
            (t.needsUpdate = !1);
        }
        setIndex(t) {
          this.addAttribute('index', t);
        }
        setDrawRange(t, e) {
          (this.drawRange.start = t), (this.drawRange.count = e);
        }
        setInstancedCount(t) {
          this.instancedCount = t;
        }
        createVAO(t) {
          (this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray()),
            this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
            this.bindAttributes(t);
        }
        bindAttributes(t) {
          t.attributeLocations.forEach((t, {name: e, type: i}) => {
            if (!this.attributes[e])
              return void console.warn(
                `active attribute ${e} not being supplied`
              );
            const r = this.attributes[e];
            this.gl.bindBuffer(r.target, r.buffer),
              (this.glState.boundBuffer = r.buffer);
            let s = 1;
            35674 === i && (s = 2),
              35675 === i && (s = 3),
              35676 === i && (s = 4);
            const n = r.size / s,
              o = 1 === s ? 0 : s * s * s,
              a = 1 === s ? 0 : s * s;
            for (let e = 0; e < s; e++)
              this.gl.vertexAttribPointer(
                t + e,
                n,
                r.type,
                r.normalized,
                r.stride + o,
                r.offset + e * a
              ),
                this.gl.enableVertexAttribArray(t + e),
                this.gl.renderer.vertexAttribDivisor(t + e, r.divisor);
          }),
            this.attributes.index &&
              this.gl.bindBuffer(
                this.gl.ELEMENT_ARRAY_BUFFER,
                this.attributes.index.buffer
              );
        }
        draw({program: t, mode: e = this.gl.TRIANGLES}) {
          this.gl.renderer.currentGeometry !==
            `${this.id}_${t.attributeOrder}` &&
            (this.VAOs[t.attributeOrder] || this.createVAO(t),
            this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
            (this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`)),
            t.attributeLocations.forEach((t, {name: e}) => {
              const i = this.attributes[e];
              i.needsUpdate && this.updateAttribute(i);
            }),
            this.isInstanced
              ? this.attributes.index
                ? this.gl.renderer.drawElementsInstanced(
                    e,
                    this.drawRange.count,
                    this.attributes.index.type,
                    this.attributes.index.offset + 2 * this.drawRange.start,
                    this.instancedCount
                  )
                : this.gl.renderer.drawArraysInstanced(
                    e,
                    this.drawRange.start,
                    this.drawRange.count,
                    this.instancedCount
                  )
              : this.attributes.index
              ? this.gl.drawElements(
                  e,
                  this.drawRange.count,
                  this.attributes.index.type,
                  this.attributes.index.offset + 2 * this.drawRange.start
                )
              : this.gl.drawArrays(
                  e,
                  this.drawRange.start,
                  this.drawRange.count
                );
        }
        getPosition() {
          const t = this.attributes.position;
          return t.data
            ? t
            : W
            ? void 0
            : (console.warn('No position buffer data found to compute bounds'),
              (W = !0));
        }
        computeBoundingBox(t) {
          t || (t = this.getPosition());
          const e = t.data,
            i = t.stride ? t.stride / e.BYTES_PER_ELEMENT : t.size;
          this.bounds ||
            (this.bounds = {
              min: new v(),
              max: new v(),
              center: new v(),
              scale: new v(),
              radius: 1 / 0,
            });
          const r = this.bounds.min,
            s = this.bounds.max,
            n = this.bounds.center,
            o = this.bounds.scale;
          r.set(1 / 0), s.set(-1 / 0);
          for (let t = 0, n = e.length; t < n; t += i) {
            const i = e[t],
              n = e[t + 1],
              o = e[t + 2];
            (r.x = Math.min(i, r.x)),
              (r.y = Math.min(n, r.y)),
              (r.z = Math.min(o, r.z)),
              (s.x = Math.max(i, s.x)),
              (s.y = Math.max(n, s.y)),
              (s.z = Math.max(o, s.z));
          }
          o.sub(s, r), n.add(r, s).divide(2);
        }
        computeBoundingSphere(t) {
          t || (t = this.getPosition());
          const e = t.data,
            i = t.stride ? t.stride / e.BYTES_PER_ELEMENT : t.size;
          this.bounds || this.computeBoundingBox(t);
          let r = 0;
          for (let t = 0, s = e.length; t < s; t += i)
            q.fromArray(e, t),
              (r = Math.max(r, this.bounds.center.squaredDistance(q)));
          this.bounds.radius = Math.sqrt(r);
        }
        remove() {
          for (let t in this.VAOs)
            this.gl.renderer.deleteVertexArray(this.VAOs[t]),
              delete this.VAOs[t];
          for (let t in this.attributes)
            this.gl.deleteBuffer(this.attributes[t].buffer),
              delete this.attributes[t];
        }
      }
      class G extends Y {
        constructor(
          t,
          {
            width: e = 1,
            height: i = 1,
            widthSegments: r = 1,
            heightSegments: s = 1,
            attributes: n = {},
          } = {}
        ) {
          const o = r,
            a = s,
            h = (o + 1) * (a + 1),
            u = o * a * 6,
            l = new Float32Array(3 * h),
            c = new Float32Array(3 * h),
            d = new Float32Array(2 * h),
            p = u > 65536 ? new Uint32Array(u) : new Uint16Array(u);
          G.buildPlane(l, c, d, p, e, i, 0, o, a),
            Object.assign(n, {
              position: {size: 3, data: l},
              normal: {size: 3, data: c},
              uv: {size: 2, data: d},
              index: {data: p},
            }),
            super(t, n);
        }
        static buildPlane(
          t,
          e,
          i,
          r,
          s,
          n,
          o,
          a,
          h,
          u = 0,
          l = 1,
          c = 2,
          d = 1,
          p = -1,
          f = 0,
          m = 0
        ) {
          const g = f,
            v = s / a,
            _ = n / h;
          for (let y = 0; y <= h; y++) {
            let w = y * _ - n / 2;
            for (let n = 0; n <= a; n++, f++) {
              let _ = n * v - s / 2;
              if (
                ((t[3 * f + u] = _ * d),
                (t[3 * f + l] = w * p),
                (t[3 * f + c] = o / 2),
                (e[3 * f + u] = 0),
                (e[3 * f + l] = 0),
                (e[3 * f + c] = o >= 0 ? 1 : -1),
                (i[2 * f] = n / a),
                (i[2 * f + 1] = 1 - y / h),
                y === h || n === a)
              )
                continue;
              let x = g + n + y * (a + 1),
                b = g + n + (y + 1) * (a + 1),
                A = g + n + (y + 1) * (a + 1) + 1,
                T = g + n + y * (a + 1) + 1;
              (r[6 * m] = x),
                (r[6 * m + 1] = b),
                (r[6 * m + 2] = T),
                (r[6 * m + 3] = b),
                (r[6 * m + 4] = A),
                (r[6 * m + 5] = T),
                m++;
            }
          }
        }
      }
      function X(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function V(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      var H,
        $,
        Z,
        Q,
        K,
        J,
        tt,
        et,
        it,
        rt,
        st,
        nt,
        ot,
        at,
        ht,
        ut = {
          autoSleep: 120,
          force3D: 'auto',
          nullTargetWarn: 1,
          units: {lineHeight: ''},
        },
        lt = {duration: 0.5, overwrite: !1, delay: 0},
        ct = 1e8,
        dt = 1 / ct,
        pt = 2 * Math.PI,
        ft = pt / 4,
        mt = 0,
        gt = Math.sqrt,
        vt = Math.cos,
        _t = Math.sin,
        yt = function (t) {
          return 'string' == typeof t;
        },
        wt = function (t) {
          return 'function' == typeof t;
        },
        xt = function (t) {
          return 'number' == typeof t;
        },
        bt = function (t) {
          return void 0 === t;
        },
        At = function (t) {
          return 'object' == typeof t;
        },
        Tt = function (t) {
          return !1 !== t;
        },
        Mt = function () {
          return 'undefined' != typeof window;
        },
        Et = function (t) {
          return wt(t) || yt(t);
        },
        St =
          ('function' == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        Ot = Array.isArray,
        Lt = /(?:-?\.?\d|\.)+/gi,
        Pt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Ct = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        zt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        Rt = /[+-]=-?[.\d]+/,
        Ft = /[^,'"\[\]\s]+/gi,
        It = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        kt = {},
        Dt = {},
        Bt = function (t) {
          return (Dt = pe(t, kt)) && pr;
        },
        jt = function (t, e) {
          return console.warn(
            'Invalid property',
            t,
            'set to',
            e,
            'Missing plugin? gsap.registerPlugin()'
          );
        },
        qt = function (t, e) {
          return !e && console.warn(t);
        },
        Ut = function (t, e) {
          return (t && (kt[t] = e) && Dt && (Dt[t] = e)) || kt;
        },
        Nt = function () {
          return 0;
        },
        Wt = {suppressEvents: !0, isStart: !0, kill: !1},
        Yt = {suppressEvents: !0, kill: !1},
        Gt = {suppressEvents: !0},
        Xt = {},
        Vt = [],
        Ht = {},
        $t = {},
        Zt = {},
        Qt = 30,
        Kt = [],
        Jt = '',
        te = function (t) {
          var e,
            i,
            r = t[0];
          if ((At(r) || wt(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
            for (i = Kt.length; i-- && !Kt[i].targetTest(r); );
            e = Kt[i];
          }
          for (i = t.length; i--; )
            (t[i] && (t[i]._gsap || (t[i]._gsap = new Oi(t[i], e)))) ||
              t.splice(i, 1);
          return t;
        },
        ee = function (t) {
          return t._gsap || te(Xe(t))[0]._gsap;
        },
        ie = function (t, e, i) {
          return (i = t[e]) && wt(i)
            ? t[e]()
            : (bt(i) && t.getAttribute && t.getAttribute(e)) || i;
        },
        re = function (t, e) {
          return (t = t.split(',')).forEach(e) || t;
        },
        se = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        ne = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        oe = function (t, e) {
          var i = e.charAt(0),
            r = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            '+' === i ? t + r : '-' === i ? t - r : '*' === i ? t * r : t / r
          );
        },
        ae = function (t, e) {
          for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
          return r < i;
        },
        he = function () {
          var t,
            e,
            i = Vt.length,
            r = Vt.slice(0);
          for (Ht = {}, Vt.length = 0, t = 0; t < i; t++)
            (e = r[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        ue = function (t, e, i, r) {
          Vt.length && !$ && he(),
            t.render(e, i, r || ($ && e < 0 && (t._initted || t._startAt))),
            Vt.length && !$ && he();
        },
        le = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + '').match(Ft).length < 2
            ? e
            : yt(t)
            ? t.trim()
            : t;
        },
        ce = function (t) {
          return t;
        },
        de = function (t, e) {
          for (var i in e) i in t || (t[i] = e[i]);
          return t;
        },
        pe = function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        fe = function t(e, i) {
          for (var r in i)
            '__proto__' !== r &&
              'constructor' !== r &&
              'prototype' !== r &&
              (e[r] = At(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
          return e;
        },
        me = function (t, e) {
          var i,
            r = {};
          for (i in t) i in e || (r[i] = t[i]);
          return r;
        },
        ge = function (t) {
          var e,
            i = t.parent || Q,
            r = t.keyframes
              ? ((e = Ot(t.keyframes)),
                function (t, i) {
                  for (var r in i)
                    r in t ||
                      ('duration' === r && e) ||
                      'ease' === r ||
                      (t[r] = i[r]);
                })
              : de;
          if (Tt(t.inherit))
            for (; i; ) r(t, i.vars.defaults), (i = i.parent || i._dp);
          return t;
        },
        ve = function (t, e, i, r, s) {
          void 0 === i && (i = '_first'), void 0 === r && (r = '_last');
          var n,
            o = t[r];
          if (s) for (n = e[s]; o && o[s] > n; ) o = o._prev;
          return (
            o
              ? ((e._next = o._next), (o._next = e))
              : ((e._next = t[i]), (t[i] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = o),
            (e.parent = e._dp = t),
            e
          );
        },
        _e = function (t, e, i, r) {
          void 0 === i && (i = '_first'), void 0 === r && (r = '_last');
          var s = e._prev,
            n = e._next;
          s ? (s._next = n) : t[i] === e && (t[i] = n),
            n ? (n._prev = s) : t[r] === e && (t[r] = s),
            (e._next = e._prev = e.parent = null);
        },
        ye = function (t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
            (t._act = 0);
        },
        we = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
          return t;
        },
        xe = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        be = function (t, e, i, r) {
          return (
            t._startAt &&
            ($
              ? t._startAt.revert(Yt)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, r))
          );
        },
        Ae = function t(e) {
          return !e || (e._ts && t(e.parent));
        },
        Te = function (t) {
          return t._repeat
            ? Me(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        Me = function (t, e) {
          var i = Math.floor((t /= e));
          return t && i === t ? i - 1 : i;
        },
        Ee = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        Se = function (t) {
          return (t._end = ne(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || dt) || 0)
          ));
        },
        Oe = function (t, e) {
          var i = t._dp;
          return (
            i &&
              i.smoothChildTiming &&
              t._ts &&
              ((t._start = ne(
                i._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              Se(t),
              i._dirty || we(i, t)),
            t
          );
        },
        Le = function (t, e) {
          var i;
          if (
            ((e._time || (e._initted && !e._dur)) &&
              ((i = Ee(t.rawTime(), e)),
              (!e._dur || Ue(0, e.totalDuration(), i) - e._tTime > dt) &&
                e.render(i, !0)),
            we(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (i = t; i._dp; )
                i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
            t._zTime = -dt;
          }
        },
        Pe = function (t, e, i, r) {
          return (
            e.parent && ye(e),
            (e._start = ne(
              (xt(i) ? i : i || t !== Q ? Be(t, i, e) : t._time) + e._delay
            )),
            (e._end = ne(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            ve(t, e, '_first', '_last', t._sort ? '_start' : 0),
            Fe(e) || (t._recent = e),
            r || Le(t, e),
            t._ts < 0 && Oe(t, t._tTime),
            t
          );
        },
        Ce = function (t, e) {
          return (
            (kt.ScrollTrigger || jt('scrollTrigger', e)) &&
            kt.ScrollTrigger.create(e, t)
          );
        },
        ze = function (t, e, i, r, s) {
          return (
            ki(t, e, s),
            t._initted
              ? !i &&
                t._pt &&
                !$ &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                it !== mi.frame
                ? (Vt.push(t), (t._lazy = [s, r]), 1)
                : void 0
              : 1
          );
        },
        Re = function t(e) {
          var i = e.parent;
          return (
            i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
          );
        },
        Fe = function (t) {
          var e = t.data;
          return 'isFromStart' === e || 'isStart' === e;
        },
        Ie = function (t, e, i, r) {
          var s = t._repeat,
            n = ne(e) || 0,
            o = t._tTime / t._tDur;
          return (
            o && !r && (t._time *= n / t._dur),
            (t._dur = n),
            (t._tDur = s
              ? s < 0
                ? 1e10
                : ne(n * (s + 1) + t._rDelay * s)
              : n),
            o > 0 && !r && Oe(t, (t._tTime = t._tDur * o)),
            t.parent && Se(t),
            i || we(t.parent, t),
            t
          );
        },
        ke = function (t) {
          return t instanceof Pi ? we(t) : Ie(t, t._dur);
        },
        De = {_start: 0, endTime: Nt, totalDuration: Nt},
        Be = function t(e, i, r) {
          var s,
            n,
            o,
            a = e.labels,
            h = e._recent || De,
            u = e.duration() >= ct ? h.endTime(!1) : e._dur;
          return yt(i) && (isNaN(i) || i in a)
            ? ((n = i.charAt(0)),
              (o = '%' === i.substr(-1)),
              (s = i.indexOf('=')),
              '<' === n || '>' === n
                ? (s >= 0 && (i = i.replace(/=/, '')),
                  ('<' === n ? h._start : h.endTime(h._repeat >= 0)) +
                    (parseFloat(i.substr(1)) || 0) *
                      (o ? (s < 0 ? h : r).totalDuration() / 100 : 1))
                : s < 0
                ? (i in a || (a[i] = u), a[i])
                : ((n = parseFloat(i.charAt(s - 1) + i.substr(s + 1))),
                  o &&
                    r &&
                    (n = (n / 100) * (Ot(r) ? r[0] : r).totalDuration()),
                  s > 1 ? t(e, i.substr(0, s - 1), r) + n : u + n))
            : null == i
            ? u
            : +i;
        },
        je = function (t, e, i) {
          var r,
            s,
            n = xt(e[1]),
            o = (n ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[o];
          if ((n && (a.duration = e[1]), (a.parent = i), t)) {
            for (r = a, s = i; s && !('immediateRender' in r); )
              (r = s.vars.defaults || {}), (s = Tt(s.vars.inherit) && s.parent);
            (a.immediateRender = Tt(r.immediateRender)),
              t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
          }
          return new Ui(e[0], a, e[o + 1]);
        },
        qe = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        Ue = function (t, e, i) {
          return i < t ? t : i > e ? e : i;
        },
        Ne = function (t, e) {
          return yt(t) && (e = It.exec(t)) ? e[1] : '';
        },
        We = [].slice,
        Ye = function (t, e) {
          return (
            t &&
            At(t) &&
            'length' in t &&
            ((!e && !t.length) || (t.length - 1 in t && At(t[0]))) &&
            !t.nodeType &&
            t !== K
          );
        },
        Ge = function (t, e, i) {
          return (
            void 0 === i && (i = []),
            t.forEach(function (t) {
              var r;
              return (yt(t) && !e) || Ye(t, 1)
                ? (r = i).push.apply(r, Xe(t))
                : i.push(t);
            }) || i
          );
        },
        Xe = function (t, e, i) {
          return Z && !e && Z.selector
            ? Z.selector(t)
            : !yt(t) || i || (!J && gi())
            ? Ot(t)
              ? Ge(t, i)
              : Ye(t)
              ? We.call(t, 0)
              : t
              ? [t]
              : []
            : We.call((e || tt).querySelectorAll(t), 0);
        },
        Ve = function (t) {
          return (
            (t = Xe(t)[0] || qt('Invalid scope') || {}),
            function (e) {
              var i = t.current || t.nativeElement || t;
              return Xe(
                e,
                i.querySelectorAll
                  ? i
                  : i === t
                  ? qt('Invalid scope') || tt.createElement('div')
                  : t
              );
            }
          );
        },
        He = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        $e = function (t) {
          if (wt(t)) return t;
          var e = At(t) ? t : {each: t},
            i = Ai(e.ease),
            r = e.from || 0,
            s = parseFloat(e.base) || 0,
            n = {},
            o = r > 0 && r < 1,
            a = isNaN(r) || o,
            h = e.axis,
            u = r,
            l = r;
          return (
            yt(r)
              ? (u = l = {center: 0.5, edges: 0.5, end: 1}[r] || 0)
              : !o && a && ((u = r[0]), (l = r[1])),
            function (t, o, c) {
              var d,
                p,
                f,
                m,
                g,
                v,
                _,
                y,
                w,
                x = (c || e).length,
                b = n[x];
              if (!b) {
                if (!(w = 'auto' === e.grid ? 0 : (e.grid || [1, ct])[1])) {
                  for (
                    _ = -ct;
                    _ < (_ = c[w++].getBoundingClientRect().left) && w < x;

                  );
                  w--;
                }
                for (
                  b = n[x] = [],
                    d = a ? Math.min(w, x) * u - 0.5 : r % w,
                    p = w === ct ? 0 : a ? (x * l) / w - 0.5 : (r / w) | 0,
                    _ = 0,
                    y = ct,
                    v = 0;
                  v < x;
                  v++
                )
                  (f = (v % w) - d),
                    (m = p - ((v / w) | 0)),
                    (b[v] = g =
                      h ? Math.abs('y' === h ? m : f) : gt(f * f + m * m)),
                    g > _ && (_ = g),
                    g < y && (y = g);
                'random' === r && He(b),
                  (b.max = _ - y),
                  (b.min = y),
                  (b.v = x =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (w > x
                          ? x - 1
                          : h
                          ? 'y' === h
                            ? x / w
                            : w
                          : Math.max(w, x / w)) ||
                      0) * ('edges' === r ? -1 : 1)),
                  (b.b = x < 0 ? s - x : s),
                  (b.u = Ne(e.amount || e.each) || 0),
                  (i = i && x < 0 ? xi(i) : i);
              }
              return (
                (x = (b[t] - b.min) / b.max || 0),
                ne(b.b + (i ? i(x) : x) * b.v) + b.u
              );
            }
          );
        },
        Ze = function (t) {
          var e = Math.pow(10, ((t + '').split('.')[1] || '').length);
          return function (i) {
            var r = ne(Math.round(parseFloat(i) / t) * t * e);
            return (r - (r % 1)) / e + (xt(i) ? 0 : Ne(i));
          };
        },
        Qe = function (t, e) {
          var i,
            r,
            s = Ot(t);
          return (
            !s &&
              At(t) &&
              ((i = s = t.radius || ct),
              t.values
                ? ((t = Xe(t.values)), (r = !xt(t[0])) && (i *= i))
                : (t = Ze(t.increment))),
            qe(
              e,
              s
                ? wt(t)
                  ? function (e) {
                      return (r = t(e)), Math.abs(r - e) <= i ? r : e;
                    }
                  : function (e) {
                      for (
                        var s,
                          n,
                          o = parseFloat(r ? e.x : e),
                          a = parseFloat(r ? e.y : 0),
                          h = ct,
                          u = 0,
                          l = t.length;
                        l--;

                      )
                        (s = r
                          ? (s = t[l].x - o) * s + (n = t[l].y - a) * n
                          : Math.abs(t[l] - o)) < h && ((h = s), (u = l));
                      return (
                        (u = !i || h <= i ? t[u] : e),
                        r || u === e || xt(e) ? u : u + Ne(e)
                      );
                    }
                : Ze(t)
            )
          );
        },
        Ke = function (t, e, i, r) {
          return qe(Ot(t) ? !e : !0 === i ? !!(i = 0) : !r, function () {
            return Ot(t)
              ? t[~~(Math.random() * t.length)]
              : (i = i || 1e-5) &&
                  (r = i < 1 ? Math.pow(10, (i + '').length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i
                    ) *
                      i *
                      r
                  ) / r;
          });
        },
        Je = function (t, e, i) {
          return qe(i, function (i) {
            return t[~~e(i)];
          });
        },
        ti = function (t) {
          for (var e, i, r, s, n = 0, o = ''; ~(e = t.indexOf('random(', n)); )
            (r = t.indexOf(')', e)),
              (s = '[' === t.charAt(e + 7)),
              (i = t.substr(e + 7, r - e - 7).match(s ? Ft : Lt)),
              (o +=
                t.substr(n, e - n) +
                Ke(s ? i : +i[0], s ? 0 : +i[1], +i[2] || 1e-5)),
              (n = r + 1);
          return o + t.substr(n, t.length - n);
        },
        ei = function (t, e, i, r, s) {
          var n = e - t,
            o = r - i;
          return qe(s, function (e) {
            return i + (((e - t) / n) * o || 0);
          });
        },
        ii = function (t, e, i) {
          var r,
            s,
            n,
            o = t.labels,
            a = ct;
          for (r in o)
            (s = o[r] - e) < 0 == !!i &&
              s &&
              a > (s = Math.abs(s)) &&
              ((n = r), (a = s));
          return n;
        },
        ri = function (t, e, i) {
          var r,
            s,
            n,
            o = t.vars,
            a = o[e],
            h = Z,
            u = t._ctx;
          if (a)
            return (
              (r = o[e + 'Params']),
              (s = o.callbackScope || t),
              i && Vt.length && he(),
              u && (Z = u),
              (n = r ? a.apply(s, r) : a.call(s)),
              (Z = h),
              n
            );
        },
        si = function (t) {
          return (
            ye(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!$),
            t.progress() < 1 && ri(t, 'onInterrupt'),
            t
          );
        },
        ni = function (t) {
          var e = (t = (!t.name && t.default) || t).name,
            i = wt(t),
            r =
              e && !i && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            s = {
              init: Nt,
              render: Zi,
              add: Fi,
              kill: Ki,
              modifier: Qi,
              rawVars: 0,
            },
            n = {
              targetTest: 0,
              get: 0,
              getSetter: Xi,
              aliases: {},
              register: 0,
            };
          if ((gi(), t !== r)) {
            if ($t[e]) return;
            de(r, de(me(t, s), n)),
              pe(r.prototype, pe(s, me(t, n))),
              ($t[(r.prop = e)] = r),
              t.targetTest && (Kt.push(r), (Xt[e] = 1)),
              (e =
                ('css' === e
                  ? 'CSS'
                  : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin');
          }
          Ut(e, r), t.register && t.register(pr, r, er);
        },
        oi = 255,
        ai = {
          aqua: [0, oi, oi],
          lime: [0, oi, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, oi],
          navy: [0, 0, 128],
          white: [oi, oi, oi],
          olive: [128, 128, 0],
          yellow: [oi, oi, 0],
          orange: [oi, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [oi, 0, 0],
          pink: [oi, 192, 203],
          cyan: [0, oi, oi],
          transparent: [oi, oi, oi, 0],
        },
        hi = function (t, e, i) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (i - e) * t * 6
              : t < 0.5
              ? i
              : 3 * t < 2
              ? e + (i - e) * (2 / 3 - t) * 6
              : e) *
              oi +
              0.5) |
            0
          );
        },
        ui = function (t, e, i) {
          var r,
            s,
            n,
            o,
            a,
            h,
            u,
            l,
            c,
            d,
            p = t ? (xt(t) ? [t >> 16, (t >> 8) & oi, t & oi] : 0) : ai.black;
          if (!p) {
            if (
              (',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), ai[t])
            )
              p = ai[t];
            else if ('#' === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((r = t.charAt(1)),
                  (s = t.charAt(2)),
                  (n = t.charAt(3)),
                  (t =
                    '#' +
                    r +
                    r +
                    s +
                    s +
                    n +
                    n +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ''))),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & oi,
                  p & oi,
                  parseInt(t.substr(7), 16) / 255,
                ];
              p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & oi,
                t & oi,
              ];
            } else if ('hsl' === t.substr(0, 3))
              if (((p = d = t.match(Lt)), e)) {
                if (~t.indexOf('='))
                  return (p = t.match(Pt)), i && p.length < 4 && (p[3] = 1), p;
              } else
                (o = (+p[0] % 360) / 360),
                  (a = +p[1] / 100),
                  (r =
                    2 * (h = +p[2] / 100) -
                    (s = h <= 0.5 ? h * (a + 1) : h + a - h * a)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = hi(o + 1 / 3, r, s)),
                  (p[1] = hi(o, r, s)),
                  (p[2] = hi(o - 1 / 3, r, s));
            else p = t.match(Lt) || ai.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !d &&
              ((r = p[0] / oi),
              (s = p[1] / oi),
              (n = p[2] / oi),
              (h = ((u = Math.max(r, s, n)) + (l = Math.min(r, s, n))) / 2),
              u === l
                ? (o = a = 0)
                : ((c = u - l),
                  (a = h > 0.5 ? c / (2 - u - l) : c / (u + l)),
                  (o =
                    u === r
                      ? (s - n) / c + (s < n ? 6 : 0)
                      : u === s
                      ? (n - r) / c + 2
                      : (r - s) / c + 4),
                  (o *= 60)),
              (p[0] = ~~(o + 0.5)),
              (p[1] = ~~(100 * a + 0.5)),
              (p[2] = ~~(100 * h + 0.5))),
            i && p.length < 4 && (p[3] = 1),
            p
          );
        },
        li = function (t) {
          var e = [],
            i = [],
            r = -1;
          return (
            t.split(di).forEach(function (t) {
              var s = t.match(Ct) || [];
              e.push.apply(e, s), i.push((r += s.length + 1));
            }),
            (e.c = i),
            e
          );
        },
        ci = function (t, e, i) {
          var r,
            s,
            n,
            o,
            a = '',
            h = (t + a).match(di),
            u = e ? 'hsla(' : 'rgba(',
            l = 0;
          if (!h) return t;
          if (
            ((h = h.map(function (t) {
              return (
                (t = ui(t, e, 1)) &&
                u +
                  (e
                    ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3]
                    : t.join(',')) +
                  ')'
              );
            })),
            i && ((n = li(t)), (r = i.c).join(a) !== n.c.join(a)))
          )
            for (o = (s = t.replace(di, '1').split(Ct)).length - 1; l < o; l++)
              a +=
                s[l] +
                (~r.indexOf(l)
                  ? h.shift() || u + '0,0,0,0)'
                  : (n.length ? n : h.length ? h : i).shift());
          if (!s)
            for (o = (s = t.split(di)).length - 1; l < o; l++) a += s[l] + h[l];
          return a + s[o];
        },
        di = (function () {
          var t,
            e =
              '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
          for (t in ai) e += '|' + t + '\\b';
          return new RegExp(e + ')', 'gi');
        })(),
        pi = /hsl[a]?\(/,
        fi = function (t) {
          var e,
            i = t.join(' ');
          if (((di.lastIndex = 0), di.test(i)))
            return (
              (e = pi.test(i)),
              (t[1] = ci(t[1], e)),
              (t[0] = ci(t[0], e, li(t[1]))),
              !0
            );
        },
        mi = (function () {
          var t,
            e,
            i,
            r,
            s,
            n,
            o = Date.now,
            a = 500,
            h = 33,
            u = o(),
            l = u,
            c = 1e3 / 240,
            d = c,
            p = [],
            f = function i(f) {
              var m,
                g,
                v,
                _,
                y = o() - l,
                w = !0 === f;
              if (
                (y > a && (u += y - h),
                ((m = (v = (l += y) - u) - d) > 0 || w) &&
                  ((_ = ++r.frame),
                  (s = v - 1e3 * r.time),
                  (r.time = v /= 1e3),
                  (d += m + (m >= c ? 4 : c - m)),
                  (g = 1)),
                w || (t = e(i)),
                g)
              )
                for (n = 0; n < p.length; n++) p[n](v, s, _, f);
            };
          return (r = {
            time: 0,
            frame: 0,
            tick: function () {
              f(!0);
            },
            deltaRatio: function (t) {
              return s / (1e3 / (t || 60));
            },
            wake: function () {
              et &&
                (!J &&
                  Mt() &&
                  ((K = J = window),
                  (tt = K.document || {}),
                  (kt.gsap = pr),
                  (K.gsapVersions || (K.gsapVersions = [])).push(pr.version),
                  Bt(Dt || K.GreenSockGlobals || (!K.gsap && K) || {}),
                  (i = K.requestAnimationFrame)),
                t && r.sleep(),
                (e =
                  i ||
                  function (t) {
                    return setTimeout(t, (d - 1e3 * r.time + 1) | 0);
                  }),
                (st = 1),
                f(2));
            },
            sleep: function () {
              (i ? K.cancelAnimationFrame : clearTimeout)(t),
                (st = 0),
                (e = Nt);
            },
            lagSmoothing: function (t, e) {
              (a = t || 1 / 0), (h = Math.min(e || 33, a));
            },
            fps: function (t) {
              (c = 1e3 / (t || 240)), (d = 1e3 * r.time + c);
            },
            add: function (t, e, i) {
              var s = e
                ? function (e, i, n, o) {
                    t(e, i, n, o), r.remove(s);
                  }
                : t;
              return r.remove(t), p[i ? 'unshift' : 'push'](s), gi(), s;
            },
            remove: function (t, e) {
              ~(e = p.indexOf(t)) && p.splice(e, 1) && n >= e && n--;
            },
            _listeners: p,
          });
        })(),
        gi = function () {
          return !st && mi.wake();
        },
        vi = {},
        _i = /^[\d.\-M][\d.\-,\s]/,
        yi = /["']/g,
        wi = function (t) {
          for (
            var e,
              i,
              r,
              s = {},
              n = t.substr(1, t.length - 3).split(':'),
              o = n[0],
              a = 1,
              h = n.length;
            a < h;
            a++
          )
            (i = n[a]),
              (e = a !== h - 1 ? i.lastIndexOf(',') : i.length),
              (r = i.substr(0, e)),
              (s[o] = isNaN(r) ? r.replace(yi, '').trim() : +r),
              (o = i.substr(e + 1).trim());
          return s;
        },
        xi = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        bi = function t(e, i) {
          for (var r, s = e._first; s; )
            s instanceof Pi
              ? t(s, i)
              : !s.vars.yoyoEase ||
                (s._yoyo && s._repeat) ||
                s._yoyo === i ||
                (s.timeline
                  ? t(s.timeline, i)
                  : ((r = s._ease),
                    (s._ease = s._yEase),
                    (s._yEase = r),
                    (s._yoyo = i))),
              (s = s._next);
        },
        Ai = function (t, e) {
          return (
            (t &&
              (wt(t)
                ? t
                : vi[t] ||
                  (function (t) {
                    var e,
                      i,
                      r,
                      s,
                      n = (t + '').split('('),
                      o = vi[n[0]];
                    return o && n.length > 1 && o.config
                      ? o.config.apply(
                          null,
                          ~t.indexOf('{')
                            ? [wi(n[1])]
                            : ((e = t),
                              (i = e.indexOf('(') + 1),
                              (r = e.indexOf(')')),
                              (s = e.indexOf('(', i)),
                              e.substring(
                                i,
                                ~s && s < r ? e.indexOf(')', r + 1) : r
                              ))
                                .split(',')
                                .map(le)
                        )
                      : vi._CE && _i.test(t)
                      ? vi._CE('', t)
                      : o;
                  })(t))) ||
            e
          );
        },
        Ti = function (t, e, i, r) {
          void 0 === i &&
            (i = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === r &&
              (r = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
              });
          var s,
            n = {easeIn: e, easeOut: i, easeInOut: r};
          return (
            re(t, function (t) {
              for (var e in ((vi[t] = kt[t] = n),
              (vi[(s = t.toLowerCase())] = i),
              n))
                vi[
                  s +
                    ('easeIn' === e
                      ? '.in'
                      : 'easeOut' === e
                      ? '.out'
                      : '.inOut')
                ] = vi[t + '.' + e] = n[e];
            }),
            n
          );
        },
        Mi = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t(2 * (e - 0.5)) / 2;
          };
        },
        Ei = function t(e, i, r) {
          var s = i >= 1 ? i : 1,
            n = (r || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
            o = (n / pt) * (Math.asin(1 / s) || 0),
            a = function (t) {
              return 1 === t
                ? 1
                : s * Math.pow(2, -10 * t) * _t((t - o) * n) + 1;
            },
            h =
              'out' === e
                ? a
                : 'in' === e
                ? function (t) {
                    return 1 - a(1 - t);
                  }
                : Mi(a);
          return (
            (n = pt / n),
            (h.config = function (i, r) {
              return t(e, i, r);
            }),
            h
          );
        },
        Si = function t(e, i) {
          void 0 === i && (i = 1.70158);
          var r = function (t) {
              return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
            },
            s =
              'out' === e
                ? r
                : 'in' === e
                ? function (t) {
                    return 1 - r(1 - t);
                  }
                : Mi(r);
          return (
            (s.config = function (i) {
              return t(e, i);
            }),
            s
          );
        };
      re('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
        var i = e < 5 ? e + 1 : e;
        Ti(
          t + ',Power' + (i - 1),
          e
            ? function (t) {
                return Math.pow(t, i);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, i);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, i) / 2
              : 1 - Math.pow(2 * (1 - t), i) / 2;
          }
        );
      }),
        (vi.Linear.easeNone = vi.none = vi.Linear.easeIn),
        Ti('Elastic', Ei('in'), Ei('out'), Ei()),
        (nt = 7.5625),
        (at = 1 / (ot = 2.75)),
        Ti(
          'Bounce',
          function (t) {
            return 1 - ht(1 - t);
          },
          (ht = function (t) {
            return t < at
              ? nt * t * t
              : t < 0.7272727272727273
              ? nt * Math.pow(t - 1.5 / ot, 2) + 0.75
              : t < 0.9090909090909092
              ? nt * (t -= 2.25 / ot) * t + 0.9375
              : nt * Math.pow(t - 2.625 / ot, 2) + 0.984375;
          })
        ),
        Ti('Expo', function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        Ti('Circ', function (t) {
          return -(gt(1 - t * t) - 1);
        }),
        Ti('Sine', function (t) {
          return 1 === t ? 1 : 1 - vt(t * ft);
        }),
        Ti('Back', Si('in'), Si('out'), Si()),
        (vi.SteppedEase =
          vi.steps =
          kt.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var i = 1 / t,
                  r = t + (e ? 0 : 1),
                  s = e ? 1 : 0,
                  n = 1 - dt;
                return function (t) {
                  return (((r * Ue(0, n, t)) | 0) + s) * i;
                };
              },
            }),
        (lt.ease = vi['quad.out']),
        re(
          'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
          function (t) {
            return (Jt += t + ',' + t + 'Params,');
          }
        );
      var Oi = function (t, e) {
          (this.id = mt++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : ie),
            (this.set = e ? e.getSetter : Xi);
        },
        Li = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Ie(this, +t.duration, 1, 1),
              (this.data = t.data),
              Z && ((this._ctx = Z), Z.data.push(this)),
              st || mi.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Ie(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((gi(), !arguments.length)) return this._tTime;
              var i = this._dp;
              if (i && i.smoothChildTiming && this._ts) {
                for (
                  Oe(this, t), !i._dp || i.parent || Le(i, this);
                  i && i.parent;

                )
                  i.parent._time !==
                    i._start +
                      (i._ts >= 0
                        ? i._tTime / i._ts
                        : (i.totalDuration() - i._tTime) / -i._ts) &&
                    i.totalTime(i._tTime, !0),
                    (i = i.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Pe(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === dt) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), ue(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Te(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Te(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var i = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * i, e)
                : this._repeat
                ? Me(this._tTime, i) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return this._rts === -dt ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? Ee(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || t === -dt ? 0 : this._rts),
                this.totalTime(Ue(-this._delay, this._tDur, e), !0),
                Se(this),
                xe(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (gi(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== dt &&
                            (this._tTime -= dt)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Pe(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (Tt(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Ee(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = Gt);
              var e = $;
              return (
                ($ = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                'nested' !== this.data && !1 !== t.kill && this.kill(),
                ($ = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
                (i = e._start + i / (e._ts || 1)), (e = e._dp);
              return !this.parent && this._sat
                ? this._sat.vars.immediateRender
                  ? -1
                  : this._sat.globalTime(t)
                : i;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), ke(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), ke(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Be(this, t), Tt(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, Tt(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -dt : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (this._initted = this._act = 0), (this._zTime = -dt), this;
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                i = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= i &&
                  t < this.endTime(!0) - dt
                )
              );
            }),
            (e.eventCallback = function (t, e, i) {
              var r = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((r[t] = e),
                      i && (r[t + 'Params'] = i),
                      'onUpdate' === t && (this._onUpdate = e))
                    : delete r[t],
                  this)
                : r[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (i) {
                var r = wt(t) ? t : ce,
                  s = function () {
                    var t = e.then;
                    (e.then = null),
                      wt(r) &&
                        (r = r(e)) &&
                        (r.then || r === e) &&
                        (e.then = t),
                      i(r),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? s()
                  : (e._prom = s);
              });
            }),
            (e.kill = function () {
              si(this);
            }),
            t
          );
        })();
      de(Li.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -dt,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Pi = (function (t) {
        function e(e, i) {
          var r;
          return (
            void 0 === e && (e = {}),
            ((r = t.call(this, e) || this).labels = {}),
            (r.smoothChildTiming = !!e.smoothChildTiming),
            (r.autoRemoveChildren = !!e.autoRemoveChildren),
            (r._sort = Tt(e.sortChildren)),
            Q && Pe(e.parent || Q, X(r), i),
            e.reversed && r.reverse(),
            e.paused && r.paused(!0),
            e.scrollTrigger && Ce(X(r), e.scrollTrigger),
            r
          );
        }
        V(e, t);
        var i = e.prototype;
        return (
          (i.to = function (t, e, i) {
            return je(0, arguments, this), this;
          }),
          (i.from = function (t, e, i) {
            return je(1, arguments, this), this;
          }),
          (i.fromTo = function (t, e, i, r) {
            return je(2, arguments, this), this;
          }),
          (i.set = function (t, e, i) {
            return (
              (e.duration = 0),
              (e.parent = this),
              ge(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new Ui(t, e, Be(this, i), 1),
              this
            );
          }),
          (i.call = function (t, e, i) {
            return Pe(this, Ui.delayedCall(0, t, e), i);
          }),
          (i.staggerTo = function (t, e, i, r, s, n, o) {
            return (
              (i.duration = e),
              (i.stagger = i.stagger || r),
              (i.onComplete = n),
              (i.onCompleteParams = o),
              (i.parent = this),
              new Ui(t, i, Be(this, s)),
              this
            );
          }),
          (i.staggerFrom = function (t, e, i, r, s, n, o) {
            return (
              (i.runBackwards = 1),
              (ge(i).immediateRender = Tt(i.immediateRender)),
              this.staggerTo(t, e, i, r, s, n, o)
            );
          }),
          (i.staggerFromTo = function (t, e, i, r, s, n, o, a) {
            return (
              (r.startAt = i),
              (ge(r).immediateRender = Tt(r.immediateRender)),
              this.staggerTo(t, e, r, s, n, o, a)
            );
          }),
          (i.render = function (t, e, i) {
            var r,
              s,
              n,
              o,
              a,
              h,
              u,
              l,
              c,
              d,
              p,
              f,
              m = this._time,
              g = this._dirty ? this.totalDuration() : this._tDur,
              v = this._dur,
              _ = t <= 0 ? 0 : ne(t),
              y = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (
              (this !== Q && _ > g && t >= 0 && (_ = g),
              _ !== this._tTime || i || y)
            ) {
              if (
                (m !== this._time &&
                  v &&
                  ((_ += this._time - m), (t += this._time - m)),
                (r = _),
                (c = this._start),
                (h = !(l = this._ts)),
                y && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((p = this._yoyo),
                  (a = v + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * a + t, e, i);
                if (
                  ((r = ne(_ % a)),
                  _ === g
                    ? ((o = this._repeat), (r = v))
                    : ((o = ~~(_ / a)) && o === _ / a && ((r = v), o--),
                      r > v && (r = v)),
                  (d = Me(this._tTime, a)),
                  !m && this._tTime && d !== o && (d = o),
                  p && 1 & o && ((r = v - r), (f = 1)),
                  o !== d && !this._lock)
                ) {
                  var w = p && 1 & d,
                    x = w === (p && 1 & o);
                  if (
                    (o < d && (w = !w),
                    (m = w ? 0 : v),
                    (this._lock = 1),
                    (this.render(m || (f ? 0 : ne(o * a)), e, !v)._lock = 0),
                    (this._tTime = _),
                    !e && this.parent && ri(this, 'onRepeat'),
                    this.vars.repeatRefresh &&
                      !f &&
                      (this.invalidate()._lock = 1),
                    (m && m !== this._time) ||
                      h !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((v = this._dur),
                    (g = this._tDur),
                    x &&
                      ((this._lock = 2),
                      (m = w ? v : -1e-4),
                      this.render(m, !0),
                      this.vars.repeatRefresh && !f && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !h)
                  )
                    return this;
                  bi(this, f);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((u = (function (t, e, i) {
                    var r;
                    if (i > e)
                      for (r = t._first; r && r._start <= i; ) {
                        if ('isPause' === r.data && r._start > e) return r;
                        r = r._next;
                      }
                    else
                      for (r = t._last; r && r._start >= i; ) {
                        if ('isPause' === r.data && r._start < e) return r;
                        r = r._prev;
                      }
                  })(this, ne(m), ne(r))),
                  u && (_ -= r - (r = u._start))),
                (this._tTime = _),
                (this._time = r),
                (this._act = !l),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (m = 0)),
                !m && r && !e && (ri(this, 'onStart'), this._tTime !== _))
              )
                return this;
              if (r >= m && t >= 0)
                for (s = this._first; s; ) {
                  if (
                    ((n = s._next),
                    (s._act || r >= s._start) && s._ts && u !== s)
                  ) {
                    if (s.parent !== this) return this.render(t, e, i);
                    if (
                      (s.render(
                        s._ts > 0
                          ? (r - s._start) * s._ts
                          : (s._dirty ? s.totalDuration() : s._tDur) +
                              (r - s._start) * s._ts,
                        e,
                        i
                      ),
                      r !== this._time || (!this._ts && !h))
                    ) {
                      (u = 0), n && (_ += this._zTime = -dt);
                      break;
                    }
                  }
                  s = n;
                }
              else {
                s = this._last;
                for (var b = t < 0 ? t : r; s; ) {
                  if (
                    ((n = s._prev), (s._act || b <= s._end) && s._ts && u !== s)
                  ) {
                    if (s.parent !== this) return this.render(t, e, i);
                    if (
                      (s.render(
                        s._ts > 0
                          ? (b - s._start) * s._ts
                          : (s._dirty ? s.totalDuration() : s._tDur) +
                              (b - s._start) * s._ts,
                        e,
                        i || ($ && (s._initted || s._startAt))
                      ),
                      r !== this._time || (!this._ts && !h))
                    ) {
                      (u = 0), n && (_ += this._zTime = b ? -dt : dt);
                      break;
                    }
                  }
                  s = n;
                }
              }
              if (
                u &&
                !e &&
                (this.pause(),
                (u.render(r >= m ? 0 : -dt)._zTime = r >= m ? 1 : -1),
                this._ts)
              )
                return (this._start = c), Se(this), this.render(t, e, i);
              this._onUpdate && !e && ri(this, 'onUpdate', !0),
                ((_ === g && this._tTime >= this.totalDuration()) ||
                  (!_ && m)) &&
                  ((c !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !v) &&
                      ((_ === g && this._ts > 0) || (!_ && this._ts < 0)) &&
                      ye(this, 1),
                    e ||
                      (t < 0 && !m) ||
                      (!_ && !m && g) ||
                      (ri(
                        this,
                        _ === g && t >= 0 ? 'onComplete' : 'onReverseComplete',
                        !0
                      ),
                      this._prom &&
                        !(_ < g && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (i.add = function (t, e) {
            var i = this;
            if ((xt(e) || (e = Be(this, e, t)), !(t instanceof Li))) {
              if (Ot(t))
                return (
                  t.forEach(function (t) {
                    return i.add(t, e);
                  }),
                  this
                );
              if (yt(t)) return this.addLabel(t, e);
              if (!wt(t)) return this;
              t = Ui.delayedCall(0, t);
            }
            return this !== t ? Pe(this, t, e) : this;
          }),
          (i.getChildren = function (t, e, i, r) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === i && (i = !0),
              void 0 === r && (r = -ct);
            for (var s = [], n = this._first; n; )
              n._start >= r &&
                (n instanceof Ui
                  ? e && s.push(n)
                  : (i && s.push(n),
                    t && s.push.apply(s, n.getChildren(!0, e, i)))),
                (n = n._next);
            return s;
          }),
          (i.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
              if (e[i].vars.id === t) return e[i];
          }),
          (i.remove = function (t) {
            return yt(t)
              ? this.removeLabel(t)
              : wt(t)
              ? this.killTweensOf(t)
              : (_e(this, t),
                t === this._recent && (this._recent = this._last),
                we(this));
          }),
          (i.totalTime = function (e, i) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = ne(
                    mi.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts)
                  )),
                t.prototype.totalTime.call(this, e, i),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (i.addLabel = function (t, e) {
            return (this.labels[t] = Be(this, e)), this;
          }),
          (i.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (i.addPause = function (t, e, i) {
            var r = Ui.delayedCall(0, e || Nt, i);
            return (
              (r.data = 'isPause'),
              (this._hasPause = 1),
              Pe(this, r, Be(this, t))
            );
          }),
          (i.removePause = function (t) {
            var e = this._first;
            for (t = Be(this, t); e; )
              e._start === t && 'isPause' === e.data && ye(e), (e = e._next);
          }),
          (i.killTweensOf = function (t, e, i) {
            for (var r = this.getTweensOf(t, i), s = r.length; s--; )
              Ci !== r[s] && r[s].kill(t, e);
            return this;
          }),
          (i.getTweensOf = function (t, e) {
            for (var i, r = [], s = Xe(t), n = this._first, o = xt(e); n; )
              n instanceof Ui
                ? ae(n._targets, s) &&
                  (o
                    ? (!Ci || (n._initted && n._ts)) &&
                      n.globalTime(0) <= e &&
                      n.globalTime(n.totalDuration()) > e
                    : !e || n.isActive()) &&
                  r.push(n)
                : (i = n.getTweensOf(s, e)).length && r.push.apply(r, i),
                (n = n._next);
            return r;
          }),
          (i.tweenTo = function (t, e) {
            e = e || {};
            var i,
              r = this,
              s = Be(r, t),
              n = e,
              o = n.startAt,
              a = n.onStart,
              h = n.onStartParams,
              u = n.immediateRender,
              l = Ui.to(
                r,
                de(
                  {
                    ease: e.ease || 'none',
                    lazy: !1,
                    immediateRender: !1,
                    time: s,
                    overwrite: 'auto',
                    duration:
                      e.duration ||
                      Math.abs(
                        (s - (o && 'time' in o ? o.time : r._time)) /
                          r.timeScale()
                      ) ||
                      dt,
                    onStart: function () {
                      if ((r.pause(), !i)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (s - (o && 'time' in o ? o.time : r._time)) /
                              r.timeScale()
                          );
                        l._dur !== t && Ie(l, t, 0, 1).render(l._time, !0, !0),
                          (i = 1);
                      }
                      a && a.apply(l, h || []);
                    },
                  },
                  e
                )
              );
            return u ? l.render(0) : l;
          }),
          (i.tweenFromTo = function (t, e, i) {
            return this.tweenTo(e, de({startAt: {time: Be(this, t)}}, i));
          }),
          (i.recent = function () {
            return this._recent;
          }),
          (i.nextLabel = function (t) {
            return void 0 === t && (t = this._time), ii(this, Be(this, t));
          }),
          (i.previousLabel = function (t) {
            return void 0 === t && (t = this._time), ii(this, Be(this, t), 1);
          }),
          (i.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + dt);
          }),
          (i.shiftChildren = function (t, e, i) {
            void 0 === i && (i = 0);
            for (var r, s = this._first, n = this.labels; s; )
              s._start >= i && ((s._start += t), (s._end += t)), (s = s._next);
            if (e) for (r in n) n[r] >= i && (n[r] += t);
            return we(this);
          }),
          (i.invalidate = function (e) {
            var i = this._first;
            for (this._lock = 0; i; ) i.invalidate(e), (i = i._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (i.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, i = this._first; i; )
              (e = i._next), this.remove(i), (i = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              we(this)
            );
          }),
          (i.totalDuration = function (t) {
            var e,
              i,
              r,
              s = 0,
              n = this,
              o = n._last,
              a = ct;
            if (arguments.length)
              return n.timeScale(
                (n._repeat < 0 ? n.duration() : n.totalDuration()) /
                  (n.reversed() ? -t : t)
              );
            if (n._dirty) {
              for (r = n.parent; o; )
                (e = o._prev),
                  o._dirty && o.totalDuration(),
                  (i = o._start) > a && n._sort && o._ts && !n._lock
                    ? ((n._lock = 1), (Pe(n, o, i - o._delay, 1)._lock = 0))
                    : (a = i),
                  i < 0 &&
                    o._ts &&
                    ((s -= i),
                    ((!r && !n._dp) || (r && r.smoothChildTiming)) &&
                      ((n._start += i / n._ts),
                      (n._time -= i),
                      (n._tTime -= i)),
                    n.shiftChildren(-i, !1, -Infinity),
                    (a = 0)),
                  o._end > s && o._ts && (s = o._end),
                  (o = e);
              Ie(n, n === Q && n._time > s ? n._time : s, 1, 1), (n._dirty = 0);
            }
            return n._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((Q._ts && (ue(Q, Ee(t, Q)), (it = mi.frame)), mi.frame >= Qt)) {
              Qt += ut.autoSleep || 120;
              var e = Q._first;
              if ((!e || !e._ts) && ut.autoSleep && mi._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || mi.sleep();
              }
            }
          }),
          e
        );
      })(Li);
      de(Pi.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
      var Ci,
        zi,
        Ri = function (t, e, i, r, s, n, o) {
          var a,
            h,
            u,
            l,
            c,
            d,
            p,
            f,
            m = new er(this._pt, t, e, 0, 1, $i, null, s),
            g = 0,
            v = 0;
          for (
            m.b = i,
              m.e = r,
              i += '',
              (p = ~(r += '').indexOf('random(')) && (r = ti(r)),
              n && (n((f = [i, r]), t, e), (i = f[0]), (r = f[1])),
              h = i.match(zt) || [];
            (a = zt.exec(r));

          )
            (l = a[0]),
              (c = r.substring(g, a.index)),
              u ? (u = (u + 1) % 5) : 'rgba(' === c.substr(-5) && (u = 1),
              l !== h[v++] &&
                ((d = parseFloat(h[v - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: c || 1 === v ? c : ',',
                  s: d,
                  c: '=' === l.charAt(1) ? oe(d, l) - d : parseFloat(l) - d,
                  m: u && u < 4 ? Math.round : 0,
                }),
                (g = zt.lastIndex));
          return (
            (m.c = g < r.length ? r.substring(g, r.length) : ''),
            (m.fp = o),
            (Rt.test(r) || p) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        Fi = function (t, e, i, r, s, n, o, a, h, u) {
          wt(r) && (r = r(s || 0, t, n));
          var l,
            c = t[e],
            d =
              'get' !== i
                ? i
                : wt(c)
                ? h
                  ? t[
                      e.indexOf('set') || !wt(t['get' + e.substr(3)])
                        ? e
                        : 'get' + e.substr(3)
                    ](h)
                  : t[e]()
                : c,
            p = wt(c) ? (h ? Yi : Wi) : Ni;
          if (
            (yt(r) &&
              (~r.indexOf('random(') && (r = ti(r)),
              '=' === r.charAt(1) &&
                ((l = oe(d, r) + (Ne(d) || 0)) || 0 === l) &&
                (r = l)),
            !u || d !== r || zi)
          )
            return isNaN(d * r) || '' === r
              ? (!c && !(e in t) && jt(e, r),
                Ri.call(this, t, e, d, r, p, a || ut.stringFilter, h))
              : ((l = new er(
                  this._pt,
                  t,
                  e,
                  +d || 0,
                  r - (d || 0),
                  'boolean' == typeof c ? Hi : Vi,
                  0,
                  p
                )),
                h && (l.fp = h),
                o && l.modifier(o, this, t),
                (this._pt = l));
        },
        Ii = function (t, e, i, r, s, n) {
          var o, a, h, u;
          if (
            $t[t] &&
            !1 !==
              (o = new $t[t]()).init(
                s,
                o.rawVars
                  ? e[t]
                  : (function (t, e, i, r, s) {
                      if (
                        (wt(t) && (t = Bi(t, s, e, i, r)),
                        !At(t) || (t.style && t.nodeType) || Ot(t) || St(t))
                      )
                        return yt(t) ? Bi(t, s, e, i, r) : t;
                      var n,
                        o = {};
                      for (n in t) o[n] = Bi(t[n], s, e, i, r);
                      return o;
                    })(e[t], r, s, n, i),
                i,
                r,
                n
              ) &&
            ((i._pt = a =
              new er(i._pt, s, t, 0, 1, o.render, o, 0, o.priority)),
            i !== rt)
          )
            for (
              h = i._ptLookup[i._targets.indexOf(s)], u = o._props.length;
              u--;

            )
              h[o._props[u]] = a;
          return o;
        },
        ki = function t(e, i, r) {
          var s,
            n,
            o,
            a,
            h,
            u,
            l,
            c,
            d,
            p,
            f,
            m,
            g,
            v = e.vars,
            _ = v.ease,
            y = v.startAt,
            w = v.immediateRender,
            x = v.lazy,
            b = v.onUpdate,
            A = v.onUpdateParams,
            T = v.callbackScope,
            M = v.runBackwards,
            E = v.yoyoEase,
            S = v.keyframes,
            O = v.autoRevert,
            L = e._dur,
            P = e._startAt,
            C = e._targets,
            z = e.parent,
            R = z && 'nested' === z.data ? z.vars.targets : C,
            F = 'auto' === e._overwrite && !H,
            I = e.timeline;
          if (
            (I && (!S || !_) && (_ = 'none'),
            (e._ease = Ai(_, lt.ease)),
            (e._yEase = E ? xi(Ai(!0 === E ? _ : E, lt.ease)) : 0),
            E &&
              e._yoyo &&
              !e._repeat &&
              ((E = e._yEase), (e._yEase = e._ease), (e._ease = E)),
            (e._from = !I && !!v.runBackwards),
            !I || (S && !v.stagger))
          ) {
            if (
              ((m = (c = C[0] ? ee(C[0]).harness : 0) && v[c.prop]),
              (s = me(v, Xt)),
              P &&
                (P._zTime < 0 && P.progress(1),
                i < 0 && M && w && !O
                  ? P.render(-1, !0)
                  : P.revert(M && L ? Yt : Wt),
                (P._lazy = 0)),
              y)
            ) {
              if (
                (ye(
                  (e._startAt = Ui.set(
                    C,
                    de(
                      {
                        data: 'isStart',
                        overwrite: !1,
                        parent: z,
                        immediateRender: !0,
                        lazy: !P && Tt(x),
                        startAt: null,
                        delay: 0,
                        onUpdate: b,
                        onUpdateParams: A,
                        callbackScope: T,
                        stagger: 0,
                      },
                      y
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                i < 0 && ($ || (!w && !O)) && e._startAt.revert(Yt),
                w && L && i <= 0 && r <= 0)
              )
                return void (i && (e._zTime = i));
            } else if (M && L && !P)
              if (
                (i && (w = !1),
                (o = de(
                  {
                    overwrite: !1,
                    data: 'isFromStart',
                    lazy: w && !P && Tt(x),
                    immediateRender: w,
                    stagger: 0,
                    parent: z,
                  },
                  s
                )),
                m && (o[c.prop] = m),
                ye((e._startAt = Ui.set(C, o))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                i < 0 &&
                  ($ ? e._startAt.revert(Yt) : e._startAt.render(-1, !0)),
                (e._zTime = i),
                w)
              ) {
                if (!i) return;
              } else t(e._startAt, dt, dt);
            for (
              e._pt = e._ptCache = 0, x = (L && Tt(x)) || (x && !L), n = 0;
              n < C.length;
              n++
            ) {
              if (
                ((l = (h = C[n])._gsap || te(C)[n]._gsap),
                (e._ptLookup[n] = p = {}),
                Ht[l.id] && Vt.length && he(),
                (f = R === C ? n : R.indexOf(h)),
                c &&
                  !1 !== (d = new c()).init(h, m || s, e, f, R) &&
                  ((e._pt = a =
                    new er(e._pt, h, d.name, 0, 1, d.render, d, 0, d.priority)),
                  d._props.forEach(function (t) {
                    p[t] = a;
                  }),
                  d.priority && (u = 1)),
                !c || m)
              )
                for (o in s)
                  $t[o] && (d = Ii(o, s, e, f, h, R))
                    ? d.priority && (u = 1)
                    : (p[o] = a =
                        Fi.call(e, h, o, 'get', s[o], f, R, 0, v.stringFilter));
              e._op && e._op[n] && e.kill(h, e._op[n]),
                F &&
                  e._pt &&
                  ((Ci = e),
                  Q.killTweensOf(h, p, e.globalTime(i)),
                  (g = !e.parent),
                  (Ci = 0)),
                e._pt && x && (Ht[l.id] = 1);
            }
            u && tr(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = b),
            (e._initted = (!e._op || e._pt) && !g),
            S && i <= 0 && I.render(ct, !0, !0);
        },
        Di = function (t, e, i, r) {
          var s,
            n,
            o = e.ease || r || 'power1.inOut';
          if (Ot(e))
            (n = i[t] || (i[t] = [])),
              e.forEach(function (t, i) {
                return n.push({t: (i / (e.length - 1)) * 100, v: t, e: o});
              });
          else
            for (s in e)
              (n = i[s] || (i[s] = [])),
                'ease' === s || n.push({t: parseFloat(t), v: e[s], e: o});
        },
        Bi = function (t, e, i, r, s) {
          return wt(t)
            ? t.call(e, i, r, s)
            : yt(t) && ~t.indexOf('random(')
            ? ti(t)
            : t;
        },
        ji = Jt + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
        qi = {};
      re(ji + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
        return (qi[t] = 1);
      });
      var Ui = (function (t) {
        function e(e, i, r, s) {
          var n;
          'number' == typeof i && ((r.duration = i), (i = r), (r = null));
          var o,
            a,
            h,
            u,
            l,
            c,
            d,
            p,
            f = (n = t.call(this, s ? i : ge(i)) || this).vars,
            m = f.duration,
            g = f.delay,
            v = f.immediateRender,
            _ = f.stagger,
            y = f.overwrite,
            w = f.keyframes,
            x = f.defaults,
            b = f.scrollTrigger,
            A = f.yoyoEase,
            T = i.parent || Q,
            M = (Ot(e) || St(e) ? xt(e[0]) : 'length' in i) ? [e] : Xe(e);
          if (
            ((n._targets = M.length
              ? te(M)
              : qt(
                  'GSAP target ' + e + ' not found. https://greensock.com',
                  !ut.nullTargetWarn
                ) || []),
            (n._ptLookup = []),
            (n._overwrite = y),
            w || _ || Et(m) || Et(g))
          ) {
            if (
              ((i = n.vars),
              (o = n.timeline =
                new Pi({
                  data: 'nested',
                  defaults: x || {},
                  targets: T && 'nested' === T.data ? T.vars.targets : M,
                })).kill(),
              (o.parent = o._dp = X(n)),
              (o._start = 0),
              _ || Et(m) || Et(g))
            ) {
              if (((u = M.length), (d = _ && $e(_)), At(_)))
                for (l in _) ~ji.indexOf(l) && (p || (p = {}), (p[l] = _[l]));
              for (a = 0; a < u; a++)
                ((h = me(i, qi)).stagger = 0),
                  A && (h.yoyoEase = A),
                  p && pe(h, p),
                  (c = M[a]),
                  (h.duration = +Bi(m, X(n), a, c, M)),
                  (h.delay = (+Bi(g, X(n), a, c, M) || 0) - n._delay),
                  !_ &&
                    1 === u &&
                    h.delay &&
                    ((n._delay = g = h.delay), (n._start += g), (h.delay = 0)),
                  o.to(c, h, d ? d(a, c, M) : 0),
                  (o._ease = vi.none);
              o.duration() ? (m = g = 0) : (n.timeline = 0);
            } else if (w) {
              ge(de(o.vars.defaults, {ease: 'none'})),
                (o._ease = Ai(w.ease || i.ease || 'none'));
              var E,
                S,
                O,
                L = 0;
              if (Ot(w))
                w.forEach(function (t) {
                  return o.to(M, t, '>');
                }),
                  o.duration();
              else {
                for (l in ((h = {}), w))
                  'ease' === l ||
                    'easeEach' === l ||
                    Di(l, w[l], h, w.easeEach);
                for (l in h)
                  for (
                    E = h[l].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                      L = 0,
                      a = 0;
                    a < E.length;
                    a++
                  )
                    ((O = {
                      ease: (S = E[a]).e,
                      duration: ((S.t - (a ? E[a - 1].t : 0)) / 100) * m,
                    })[l] = S.v),
                      o.to(M, O, L),
                      (L += O.duration);
                o.duration() < m && o.to({}, {duration: m - o.duration()});
              }
            }
            m || n.duration((m = o.duration()));
          } else n.timeline = 0;
          return (
            !0 !== y || H || ((Ci = X(n)), Q.killTweensOf(M), (Ci = 0)),
            Pe(T, X(n), r),
            i.reversed && n.reverse(),
            i.paused && n.paused(!0),
            (v ||
              (!m &&
                !w &&
                n._start === ne(T._time) &&
                Tt(v) &&
                Ae(X(n)) &&
                'nested' !== T.data)) &&
              ((n._tTime = -dt), n.render(Math.max(0, -g) || 0)),
            b && Ce(X(n), b),
            n
          );
        }
        V(e, t);
        var i = e.prototype;
        return (
          (i.render = function (t, e, i) {
            var r,
              s,
              n,
              o,
              a,
              h,
              u,
              l,
              c,
              d = this._time,
              p = this._tDur,
              f = this._dur,
              m = t < 0,
              g = t > p - dt && !m ? p : t < dt ? 0 : t;
            if (f) {
              if (
                g !== this._tTime ||
                !t ||
                i ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== m)
              ) {
                if (((r = g), (l = this.timeline), this._repeat)) {
                  if (((o = f + this._rDelay), this._repeat < -1 && m))
                    return this.totalTime(100 * o + t, e, i);
                  if (
                    ((r = ne(g % o)),
                    g === p
                      ? ((n = this._repeat), (r = f))
                      : ((n = ~~(g / o)) && n === g / o && ((r = f), n--),
                        r > f && (r = f)),
                    (h = this._yoyo && 1 & n) &&
                      ((c = this._yEase), (r = f - r)),
                    (a = Me(this._tTime, o)),
                    r === d && !i && this._initted)
                  )
                    return (this._tTime = g), this;
                  n !== a &&
                    (l && this._yEase && bi(l, h),
                    !this.vars.repeatRefresh ||
                      h ||
                      this._lock ||
                      ((this._lock = i = 1),
                      (this.render(ne(o * n), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (ze(this, m ? t : r, i, e, g))
                    return (this._tTime = 0), this;
                  if (d !== this._time) return this;
                  if (f !== this._dur) return this.render(t, e, i);
                }
                if (
                  ((this._tTime = g),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = u = (c || this._ease)(r / f)),
                  this._from && (this.ratio = u = 1 - u),
                  r && !d && !e && (ri(this, 'onStart'), this._tTime !== g))
                )
                  return this;
                for (s = this._pt; s; ) s.r(u, s.d), (s = s._next);
                (l &&
                  l.render(
                    t < 0 ? t : !r && h ? -dt : l._dur * l._ease(r / this._dur),
                    e,
                    i
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (m && be(this, t, 0, i), ri(this, 'onUpdate')),
                  this._repeat &&
                    n !== a &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    ri(this, 'onRepeat'),
                  (g !== this._tDur && g) ||
                    this._tTime !== g ||
                    (m && !this._onUpdate && be(this, t, 0, !0),
                    (t || !f) &&
                      ((g === this._tDur && this._ts > 0) ||
                        (!g && this._ts < 0)) &&
                      ye(this, 1),
                    e ||
                      (m && !d) ||
                      !(g || d || h) ||
                      (ri(
                        this,
                        g === p ? 'onComplete' : 'onReverseComplete',
                        !0
                      ),
                      this._prom &&
                        !(g < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (t, e, i, r) {
                var s,
                  n,
                  o,
                  a = t.ratio,
                  h =
                    e < 0 ||
                    (!e &&
                      ((!t._start && Re(t) && (t._initted || !Fe(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !Fe(t))))
                      ? 0
                      : 1,
                  u = t._rDelay,
                  l = 0;
                if (
                  (u &&
                    t._repeat &&
                    ((l = Ue(0, t._tDur, e)),
                    (n = Me(l, u)),
                    t._yoyo && 1 & n && (h = 1 - h),
                    n !== Me(t._tTime, u) &&
                      ((a = 1 - h),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  h !== a || $ || r || t._zTime === dt || (!e && t._zTime))
                ) {
                  if (!t._initted && ze(t, e, r, i, l)) return;
                  for (
                    o = t._zTime,
                      t._zTime = e || (i ? dt : 0),
                      i || (i = e && !o),
                      t.ratio = h,
                      t._from && (h = 1 - h),
                      t._time = 0,
                      t._tTime = l,
                      s = t._pt;
                    s;

                  )
                    s.r(h, s.d), (s = s._next);
                  e < 0 && be(t, e, 0, !0),
                    t._onUpdate && !i && ri(t, 'onUpdate'),
                    l && t._repeat && !i && t.parent && ri(t, 'onRepeat'),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === h &&
                      (h && ye(t, 1),
                      i ||
                        $ ||
                        (ri(t, h ? 'onComplete' : 'onReverseComplete', !0),
                        t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
              })(this, t, e, i);
            return this;
          }),
          (i.targets = function () {
            return this._targets;
          }),
          (i.invalidate = function (e) {
            return (
              (!e || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (i.resetTo = function (t, e, i, r) {
            st || mi.wake(), this._ts || this.play();
            var s = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (
              this._initted || ki(this, s),
              (function (t, e, i, r, s, n, o) {
                var a,
                  h,
                  u,
                  l,
                  c = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                if (!c)
                  for (
                    c = t._ptCache[e] = [],
                      u = t._ptLookup,
                      l = t._targets.length;
                    l--;

                  ) {
                    if ((a = u[l][e]) && a.d && a.d._pt)
                      for (a = a.d._pt; a && a.p !== e && a.fp !== e; )
                        a = a._next;
                    if (!a)
                      return (
                        (zi = 1), (t.vars[e] = '+=0'), ki(t, o), (zi = 0), 1
                      );
                    c.push(a);
                  }
                for (l = c.length; l--; )
                  ((a = (h = c[l])._pt || h).s =
                    (!r && 0 !== r) || s ? a.s + (r || 0) + n * a.c : r),
                    (a.c = i - a.s),
                    h.e && (h.e = se(i) + Ne(h.e)),
                    h.b && (h.b = a.s + Ne(h.b));
              })(this, t, e, i, r, this._ease(s / this._dur), s)
                ? this.resetTo(t, e, i, r)
                : (Oe(this, 0),
                  this.parent ||
                    ve(
                      this._dp,
                      this,
                      '_first',
                      '_last',
                      this._dp._sort ? '_start' : 0
                    ),
                  this.render(0))
            );
          }),
          (i.kill = function (t, e) {
            if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e))))
              return (this._lazy = this._pt = 0), this.parent ? si(this) : this;
            if (this.timeline) {
              var i = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, Ci && !0 !== Ci.vars.overwrite)
                  ._first || si(this),
                this.parent &&
                  i !== this.timeline.totalDuration() &&
                  Ie(this, (this._dur * this.timeline._tDur) / i, 0, 1),
                this
              );
            }
            var r,
              s,
              n,
              o,
              a,
              h,
              u,
              l = this._targets,
              c = t ? Xe(t) : l,
              d = this._ptLookup,
              p = this._pt;
            if (
              (!e || 'all' === e) &&
              (function (t, e) {
                for (
                  var i = t.length, r = i === e.length;
                  r && i-- && t[i] === e[i];

                );
                return i < 0;
              })(l, c)
            )
              return 'all' === e && (this._pt = 0), si(this);
            for (
              r = this._op = this._op || [],
                'all' !== e &&
                  (yt(e) &&
                    ((a = {}),
                    re(e, function (t) {
                      return (a[t] = 1);
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var i,
                      r,
                      s,
                      n,
                      o = t[0] ? ee(t[0]).harness : 0,
                      a = o && o.aliases;
                    if (!a) return e;
                    for (r in ((i = pe({}, e)), a))
                      if ((r in i))
                        for (s = (n = a[r].split(',')).length; s--; )
                          i[n[s]] = i[r];
                    return i;
                  })(l, e))),
                u = l.length;
              u--;

            )
              if (~c.indexOf(l[u]))
                for (a in ((s = d[u]),
                'all' === e
                  ? ((r[u] = e), (o = s), (n = {}))
                  : ((n = r[u] = r[u] || {}), (o = e)),
                o))
                  (h = s && s[a]) &&
                    (('kill' in h.d && !0 !== h.d.kill(a)) ||
                      _e(this, h, '_pt'),
                    delete s[a]),
                    'all' !== n && (n[a] = 1);
            return this._initted && !this._pt && p && si(this), this;
          }),
          (e.to = function (t, i) {
            return new e(t, i, arguments[2]);
          }),
          (e.from = function (t, e) {
            return je(1, arguments);
          }),
          (e.delayedCall = function (t, i, r, s) {
            return new e(i, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: i,
              onReverseComplete: i,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: s,
            });
          }),
          (e.fromTo = function (t, e, i) {
            return je(2, arguments);
          }),
          (e.set = function (t, i) {
            return (
              (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i)
            );
          }),
          (e.killTweensOf = function (t, e, i) {
            return Q.killTweensOf(t, e, i);
          }),
          e
        );
      })(Li);
      de(Ui.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        re('staggerTo,staggerFrom,staggerFromTo', function (t) {
          Ui[t] = function () {
            var e = new Pi(),
              i = We.call(arguments, 0);
            return (
              i.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, i)
            );
          };
        });
      var Ni = function (t, e, i) {
          return (t[e] = i);
        },
        Wi = function (t, e, i) {
          return t[e](i);
        },
        Yi = function (t, e, i, r) {
          return t[e](r.fp, i);
        },
        Gi = function (t, e, i) {
          return t.setAttribute(e, i);
        },
        Xi = function (t, e) {
          return wt(t[e]) ? Wi : bt(t[e]) && t.setAttribute ? Gi : Ni;
        },
        Vi = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
        },
        Hi = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        $i = function (t, e) {
          var i = e._pt,
            r = '';
          if (!t && e.b) r = e.b;
          else if (1 === t && e.e) r = e.e;
          else {
            for (; i; )
              (r =
                i.p +
                (i.m
                  ? i.m(i.s + i.c * t)
                  : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
                r),
                (i = i._next);
            r += e.c;
          }
          e.set(e.t, e.p, r, e);
        },
        Zi = function (t, e) {
          for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
        },
        Qi = function (t, e, i, r) {
          for (var s, n = this._pt; n; )
            (s = n._next), n.p === r && n.modifier(t, e, i), (n = s);
        },
        Ki = function (t) {
          for (var e, i, r = this._pt; r; )
            (i = r._next),
              (r.p === t && !r.op) || r.op === t
                ? _e(this, r, '_pt')
                : r.dep || (e = 1),
              (r = i);
          return !e;
        },
        Ji = function (t, e, i, r) {
          r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
        },
        tr = function (t) {
          for (var e, i, r, s, n = t._pt; n; ) {
            for (e = n._next, i = r; i && i.pr > n.pr; ) i = i._next;
            (n._prev = i ? i._prev : s) ? (n._prev._next = n) : (r = n),
              (n._next = i) ? (i._prev = n) : (s = n),
              (n = e);
          }
          t._pt = r;
        },
        er = (function () {
          function t(t, e, i, r, s, n, o, a, h) {
            (this.t = e),
              (this.s = r),
              (this.c = s),
              (this.p = i),
              (this.r = n || Vi),
              (this.d = o || this),
              (this.set = a || Ni),
              (this.pr = h || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, i) {
              (this.mSet = this.mSet || this.set),
                (this.set = Ji),
                (this.m = t),
                (this.mt = i),
                (this.tween = e);
            }),
            t
          );
        })();
      re(
        Jt +
          'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
        function (t) {
          return (Xt[t] = 1);
        }
      ),
        (kt.TweenMax = kt.TweenLite = Ui),
        (kt.TimelineLite = kt.TimelineMax = Pi),
        (Q = new Pi({
          sortChildren: !1,
          defaults: lt,
          autoRemoveChildren: !0,
          id: 'root',
          smoothChildTiming: !0,
        })),
        (ut.stringFilter = fi);
      var ir = [],
        rr = {},
        sr = [],
        nr = 0,
        or = function (t) {
          return (rr[t] || sr).map(function (t) {
            return t();
          });
        },
        ar = function () {
          var t = Date.now(),
            e = [];
          t - nr > 2 &&
            (or('matchMediaInit'),
            ir.forEach(function (t) {
              var i,
                r,
                s,
                n,
                o = t.queries,
                a = t.conditions;
              for (r in o)
                (i = K.matchMedia(o[r]).matches) && (s = 1),
                  i !== a[r] && ((a[r] = i), (n = 1));
              n && (t.revert(), s && e.push(t));
            }),
            or('matchMediaRevert'),
            e.forEach(function (t) {
              return t.onMatch(t);
            }),
            (nr = t),
            or('matchMedia'));
        },
        hr = (function () {
          function t(t, e) {
            (this.selector = e && Ve(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, i) {
              wt(t) && ((i = e), (e = t), (t = wt));
              var r = this,
                s = function () {
                  var t,
                    s = Z,
                    n = r.selector;
                  return (
                    s && s !== r && s.data.push(r),
                    i && (r.selector = Ve(i)),
                    (Z = r),
                    (t = e.apply(r, arguments)),
                    wt(t) && r._r.push(t),
                    (Z = s),
                    (r.selector = n),
                    (r.isReverted = !1),
                    t
                  );
                };
              return (r.last = s), t === wt ? s(r) : t ? (r[t] = s) : s;
            }),
            (e.ignore = function (t) {
              var e = Z;
              (Z = null), t(this), (Z = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (i) {
                  return i instanceof t
                    ? e.push.apply(e, i.getTweens())
                    : i instanceof Ui &&
                        !(i.parent && 'nested' === i.parent.data) &&
                        e.push(i);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var i = this;
              if (t) {
                var r = this.getTweens();
                this.data.forEach(function (t) {
                  'isFlip' === t.data &&
                    (t.revert(),
                    t.getChildren(!0, !0, !1).forEach(function (t) {
                      return r.splice(r.indexOf(t), 1);
                    }));
                }),
                  r
                    .map(function (t) {
                      return {g: t.globalTime(0), t};
                    })
                    .sort(function (t, e) {
                      return e.g - t.g || -1;
                    })
                    .forEach(function (e) {
                      return e.t.revert(t);
                    }),
                  this.data.forEach(function (e) {
                    return !(e instanceof Li) && e.revert && e.revert(t);
                  }),
                  this._r.forEach(function (e) {
                    return e(t, i);
                  }),
                  (this.isReverted = !0);
              } else
                this.data.forEach(function (t) {
                  return t.kill && t.kill();
                });
              if ((this.clear(), e)) {
                var s = ir.indexOf(this);
                ~s && ir.splice(s, 1);
              }
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        ur = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, i) {
              At(t) || (t = {matches: t});
              var r,
                s,
                n,
                o = new hr(0, i || this.scope),
                a = (o.conditions = {});
              for (s in (this.contexts.push(o),
              (e = o.add('onMatch', e)),
              (o.queries = t),
              t))
                'all' === s
                  ? (n = 1)
                  : (r = K.matchMedia(t[s])) &&
                    (ir.indexOf(o) < 0 && ir.push(o),
                    (a[s] = r.matches) && (n = 1),
                    r.addListener
                      ? r.addListener(ar)
                      : r.addEventListener('change', ar));
              return n && e(o), this;
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        lr = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
              e[i] = arguments[i];
            e.forEach(function (t) {
              return ni(t);
            });
          },
          timeline: function (t) {
            return new Pi(t);
          },
          getTweensOf: function (t, e) {
            return Q.getTweensOf(t, e);
          },
          getProperty: function (t, e, i, r) {
            yt(t) && (t = Xe(t)[0]);
            var s = ee(t || {}).get,
              n = i ? ce : le;
            return (
              'native' === i && (i = ''),
              t
                ? e
                  ? n((($t[e] && $t[e].get) || s)(t, e, i, r))
                  : function (e, i, r) {
                      return n((($t[e] && $t[e].get) || s)(t, e, i, r));
                    }
                : t
            );
          },
          quickSetter: function (t, e, i) {
            if ((t = Xe(t)).length > 1) {
              var r = t.map(function (t) {
                  return pr.quickSetter(t, e, i);
                }),
                s = r.length;
              return function (t) {
                for (var e = s; e--; ) r[e](t);
              };
            }
            t = t[0] || {};
            var n = $t[e],
              o = ee(t),
              a = (o.harness && (o.harness.aliases || {})[e]) || e,
              h = n
                ? function (e) {
                    var r = new n();
                    (rt._pt = 0),
                      r.init(t, i ? e + i : e, rt, 0, [t]),
                      r.render(1, r),
                      rt._pt && Zi(1, rt);
                  }
                : o.set(t, a);
            return n
              ? h
              : function (e) {
                  return h(t, a, i ? e + i : e, o, 1);
                };
          },
          quickTo: function (t, e, i) {
            var r,
              s = pr.to(
                t,
                pe((((r = {})[e] = '+=0.1'), (r.paused = !0), r), i || {})
              ),
              n = function (t, i, r) {
                return s.resetTo(e, t, i, r);
              };
            return (n.tween = s), n;
          },
          isTweening: function (t) {
            return Q.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return (
              t && t.ease && (t.ease = Ai(t.ease, lt.ease)), fe(lt, t || {})
            );
          },
          config: function (t) {
            return fe(ut, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              i = t.effect,
              r = t.plugins,
              s = t.defaults,
              n = t.extendTimeline;
            (r || '').split(',').forEach(function (t) {
              return (
                t &&
                !$t[t] &&
                !kt[t] &&
                qt(e + ' effect requires ' + t + ' plugin.')
              );
            }),
              (Zt[e] = function (t, e, r) {
                return i(Xe(t), de(e || {}, s), r);
              }),
              n &&
                (Pi.prototype[e] = function (t, i, r) {
                  return this.add(Zt[e](t, At(i) ? i : (r = i) && {}, this), r);
                });
          },
          registerEase: function (t, e) {
            vi[t] = Ai(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? Ai(t, e) : vi;
          },
          getById: function (t) {
            return Q.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var i,
              r,
              s = new Pi(t);
            for (
              s.smoothChildTiming = Tt(t.smoothChildTiming),
                Q.remove(s),
                s._dp = 0,
                s._time = s._tTime = Q._time,
                i = Q._first;
              i;

            )
              (r = i._next),
                (!e &&
                  !i._dur &&
                  i instanceof Ui &&
                  i.vars.onComplete === i._targets[0]) ||
                  Pe(s, i, i._start - i._delay),
                (i = r);
            return Pe(Q, s, 0), s;
          },
          context: function (t, e) {
            return t ? new hr(t, e) : Z;
          },
          matchMedia: function (t) {
            return new ur(t);
          },
          matchMediaRefresh: function () {
            return (
              ir.forEach(function (t) {
                var e,
                  i,
                  r = t.conditions;
                for (i in r) r[i] && ((r[i] = !1), (e = 1));
                e && t.revert();
              }) || ar()
            );
          },
          addEventListener: function (t, e) {
            var i = rr[t] || (rr[t] = []);
            ~i.indexOf(e) || i.push(e);
          },
          removeEventListener: function (t, e) {
            var i = rr[t],
              r = i && i.indexOf(e);
            r >= 0 && i.splice(r, 1);
          },
          utils: {
            wrap: function t(e, i, r) {
              var s = i - e;
              return Ot(e)
                ? Je(e, t(0, e.length), i)
                : qe(r, function (t) {
                    return ((s + ((t - e) % s)) % s) + e;
                  });
            },
            wrapYoyo: function t(e, i, r) {
              var s = i - e,
                n = 2 * s;
              return Ot(e)
                ? Je(e, t(0, e.length - 1), i)
                : qe(r, function (t) {
                    return (
                      e + ((t = (n + ((t - e) % n)) % n || 0) > s ? n - t : t)
                    );
                  });
            },
            distribute: $e,
            random: Ke,
            snap: Qe,
            normalize: function (t, e, i) {
              return ei(t, e, 0, 1, i);
            },
            getUnit: Ne,
            clamp: function (t, e, i) {
              return qe(i, function (i) {
                return Ue(t, e, i);
              });
            },
            splitColor: ui,
            toArray: Xe,
            selector: Ve,
            mapRange: ei,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (i) {
                return t(parseFloat(i)) + (e || Ne(i));
              };
            },
            interpolate: function t(e, i, r, s) {
              var n = isNaN(e + i)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * i;
                  };
              if (!n) {
                var o,
                  a,
                  h,
                  u,
                  l,
                  c = yt(e),
                  d = {};
                if ((!0 === r && (s = 1) && (r = null), c))
                  (e = {p: e}), (i = {p: i});
                else if (Ot(e) && !Ot(i)) {
                  for (h = [], u = e.length, l = u - 2, a = 1; a < u; a++)
                    h.push(t(e[a - 1], e[a]));
                  u--,
                    (n = function (t) {
                      t *= u;
                      var e = Math.min(l, ~~t);
                      return h[e](t - e);
                    }),
                    (r = i);
                } else s || (e = pe(Ot(e) ? [] : {}, e));
                if (!h) {
                  for (o in i) Fi.call(d, e, o, 'get', i[o]);
                  n = function (t) {
                    return Zi(t, d) || (c ? e.p : e);
                  };
                }
              }
              return qe(r, n);
            },
            shuffle: He,
          },
          install: Bt,
          effects: Zt,
          ticker: mi,
          updateRoot: Pi.updateRoot,
          plugins: $t,
          globalTimeline: Q,
          core: {
            PropTween: er,
            globals: Ut,
            Tween: Ui,
            Timeline: Pi,
            Animation: Li,
            getCache: ee,
            _removeLinkedListItem: _e,
            reverting: function () {
              return $;
            },
            context: function (t) {
              return t && Z && (Z.data.push(t), (t._ctx = Z)), Z;
            },
            suppressOverwrites: function (t) {
              return (H = t);
            },
          },
        };
      re('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
        return (lr[t] = Ui[t]);
      }),
        mi.add(Pi.updateRoot),
        (rt = lr.to({}, {duration: 0}));
      var cr = function (t, e) {
          for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
            i = i._next;
          return i;
        },
        dr = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, i, r) {
              r._onInit = function (t) {
                var r, s;
                if (
                  (yt(i) &&
                    ((r = {}),
                    re(i, function (t) {
                      return (r[t] = 1);
                    }),
                    (i = r)),
                  e)
                ) {
                  for (s in ((r = {}), i)) r[s] = e(i[s]);
                  i = r;
                }
                !(function (t, e) {
                  var i,
                    r,
                    s,
                    n = t._targets;
                  for (i in e)
                    for (r = n.length; r--; )
                      (s = t._ptLookup[r][i]) &&
                        (s = s.d) &&
                        (s._pt && (s = cr(s, i)),
                        s && s.modifier && s.modifier(e[i], t, n[r], i));
                })(t, i);
              };
            },
          };
        },
        pr =
          lr.registerPlugin(
            {
              name: 'attr',
              init: function (t, e, i, r, s) {
                var n, o, a;
                for (n in ((this.tween = i), e))
                  (a = t.getAttribute(n) || ''),
                    ((o = this.add(
                      t,
                      'setAttribute',
                      (a || 0) + '',
                      e[n],
                      r,
                      s,
                      0,
                      0,
                      n
                    )).op = n),
                    (o.b = a),
                    this._props.push(n);
              },
              render: function (t, e) {
                for (var i = e._pt; i; )
                  $ ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
              },
            },
            {
              name: 'endArray',
              init: function (t, e) {
                for (var i = e.length; i--; )
                  this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
              },
            },
            dr('roundProps', Ze),
            dr('modifiers'),
            dr('snap', Qe)
          ) || lr;
      (Ui.version = Pi.version = pr.version = '3.11.4'), (et = 1), Mt() && gi();
      vi.Power0,
        vi.Power1,
        vi.Power2,
        vi.Power3,
        vi.Power4,
        vi.Linear,
        vi.Quad,
        vi.Cubic,
        vi.Quart,
        vi.Quint,
        vi.Strong,
        vi.Elastic,
        vi.Back,
        vi.SteppedEase,
        vi.Bounce,
        vi.Sine,
        vi.Expo,
        vi.Circ;
      var fr,
        mr,
        gr,
        vr,
        _r,
        yr,
        wr,
        xr,
        br = {},
        Ar = 180 / Math.PI,
        Tr = Math.PI / 180,
        Mr = Math.atan2,
        Er = /([A-Z])/g,
        Sr = /(left|right|width|margin|padding|x)/i,
        Or = /[\s,\(]\S/,
        Lr = {
          autoAlpha: 'opacity,visibility',
          scale: 'scaleX,scaleY',
          alpha: 'opacity',
        },
        Pr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        Cr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          );
        },
        zr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          );
        },
        Rr = function (t, e) {
          var i = e.s + e.c * t;
          e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        Fr = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        Ir = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        kr = function (t, e, i) {
          return (t.style[e] = i);
        },
        Dr = function (t, e, i) {
          return t.style.setProperty(e, i);
        },
        Br = function (t, e, i) {
          return (t._gsap[e] = i);
        },
        jr = function (t, e, i) {
          return (t._gsap.scaleX = t._gsap.scaleY = i);
        },
        qr = function (t, e, i, r, s) {
          var n = t._gsap;
          (n.scaleX = n.scaleY = i), n.renderTransform(s, n);
        },
        Ur = function (t, e, i, r, s) {
          var n = t._gsap;
          (n[e] = i), n.renderTransform(s, n);
        },
        Nr = 'transform',
        Wr = Nr + 'Origin',
        Yr = function (t, e) {
          var i = this,
            r = this.target,
            s = r.style;
          if (t in br) {
            if (
              ((this.tfm = this.tfm || {}),
              'transform' !== t &&
                (~(t = Lr[t] || t).indexOf(',')
                  ? t.split(',').forEach(function (t) {
                      return (i.tfm[t] = hs(r, t));
                    })
                  : (this.tfm[t] = r._gsap.x ? r._gsap[t] : hs(r, t))),
              this.props.indexOf(Nr) >= 0)
            )
              return;
            r._gsap.svg &&
              ((this.svgo = r.getAttribute('data-svg-origin')),
              this.props.push(Wr, e, '')),
              (t = Nr);
          }
          (s || e) && this.props.push(t, e, s[t]);
        },
        Gr = function (t) {
          t.translate &&
            (t.removeProperty('translate'),
            t.removeProperty('scale'),
            t.removeProperty('rotate'));
        },
        Xr = function () {
          var t,
            e,
            i = this.props,
            r = this.target,
            s = r.style,
            n = r._gsap;
          for (t = 0; t < i.length; t += 3)
            i[t + 1]
              ? (r[i[t]] = i[t + 2])
              : i[t + 2]
              ? (s[i[t]] = i[t + 2])
              : s.removeProperty(i[t].replace(Er, '-$1').toLowerCase());
          if (this.tfm) {
            for (e in this.tfm) n[e] = this.tfm[e];
            n.svg &&
              (n.renderTransform(),
              r.setAttribute('data-svg-origin', this.svgo || '')),
              !(t = wr()) || t.isStart || s[Nr] || (Gr(s), (n.uncache = 1));
          }
        },
        Vr = function (t, e) {
          var i = {target: t, props: [], revert: Xr, save: Yr};
          return (
            e &&
              e.split(',').forEach(function (t) {
                return i.save(t);
              }),
            i
          );
        },
        Hr = function (t, e) {
          var i = mr.createElementNS
            ? mr.createElementNS(
                (e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
                t
              )
            : mr.createElement(t);
          return i.style ? i : mr.createElement(t);
        },
        $r = function t(e, i, r) {
          var s = getComputedStyle(e);
          return (
            s[i] ||
            s.getPropertyValue(i.replace(Er, '-$1').toLowerCase()) ||
            s.getPropertyValue(i) ||
            (!r && t(e, Qr(i) || i, 1)) ||
            ''
          );
        },
        Zr = 'O,Moz,ms,Ms,Webkit'.split(','),
        Qr = function (t, e, i) {
          var r = (e || _r).style,
            s = 5;
          if (t in r && !i) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            s-- && !(Zr[s] + t in r);

          );
          return s < 0 ? null : (3 === s ? 'ms' : s >= 0 ? Zr[s] : '') + t;
        },
        Kr = function () {
          'undefined' != typeof window &&
            window.document &&
            ((fr = window),
            (mr = fr.document),
            (gr = mr.documentElement),
            (_r = Hr('div') || {style: {}}),
            Hr('div'),
            (Nr = Qr(Nr)),
            (Wr = Nr + 'Origin'),
            (_r.style.cssText =
              'border-width:0;line-height:0;position:absolute;padding:0'),
            (xr = !!Qr('perspective')),
            (wr = pr.core.reverting),
            (vr = 1));
        },
        Jr = function t(e) {
          var i,
            r = Hr(
              'svg',
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute('xmlns')) ||
                'http://www.w3.org/2000/svg'
            ),
            s = this.parentNode,
            n = this.nextSibling,
            o = this.style.cssText;
          if (
            (gr.appendChild(r),
            r.appendChild(this),
            (this.style.display = 'block'),
            e)
          )
            try {
              (i = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (i = this._gsapBBox());
          return (
            s && (n ? s.insertBefore(this, n) : s.appendChild(this)),
            gr.removeChild(r),
            (this.style.cssText = o),
            i
          );
        },
        ts = function (t, e) {
          for (var i = e.length; i--; )
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
        },
        es = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (i) {
            e = Jr.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === Jr ||
              (e = Jr.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +ts(t, ['x', 'cx', 'x1']) || 0,
                  y: +ts(t, ['y', 'cy', 'y1']) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        is = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !es(t));
        },
        rs = function (t, e) {
          if (e) {
            var i = t.style;
            e in br && e !== Wr && (e = Nr),
              i.removeProperty
                ? (('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6)) ||
                    (e = '-' + e),
                  i.removeProperty(e.replace(Er, '-$1').toLowerCase()))
                : i.removeAttribute(e);
          }
        },
        ss = function (t, e, i, r, s, n) {
          var o = new er(t._pt, e, i, 0, 1, n ? Ir : Fr);
          return (t._pt = o), (o.b = r), (o.e = s), t._props.push(i), o;
        },
        ns = {deg: 1, rad: 1, turn: 1},
        os = {grid: 1, flex: 1},
        as = function t(e, i, r, s) {
          var n,
            o,
            a,
            h,
            u = parseFloat(r) || 0,
            l = (r + '').trim().substr((u + '').length) || 'px',
            c = _r.style,
            d = Sr.test(i),
            p = 'svg' === e.tagName.toLowerCase(),
            f = (p ? 'client' : 'offset') + (d ? 'Width' : 'Height'),
            m = 100,
            g = 'px' === s,
            v = '%' === s;
          return s === l || !u || ns[s] || ns[l]
            ? u
            : ('px' !== l && !g && (u = t(e, i, r, 'px')),
              (h = e.getCTM && is(e)),
              (!v && '%' !== l) || (!br[i] && !~i.indexOf('adius'))
                ? ((c[d ? 'width' : 'height'] = m + (g ? l : s)),
                  (o =
                    ~i.indexOf('adius') || ('em' === s && e.appendChild && !p)
                      ? e
                      : e.parentNode),
                  h && (o = (e.ownerSVGElement || {}).parentNode),
                  (o && o !== mr && o.appendChild) || (o = mr.body),
                  (a = o._gsap) &&
                  v &&
                  a.width &&
                  d &&
                  a.time === mi.time &&
                  !a.uncache
                    ? se((u / a.width) * m)
                    : ((v || '%' === l) &&
                        !os[$r(o, 'display')] &&
                        (c.position = $r(e, 'position')),
                      o === e && (c.position = 'static'),
                      o.appendChild(_r),
                      (n = _r[f]),
                      o.removeChild(_r),
                      (c.position = 'absolute'),
                      d &&
                        v &&
                        (((a = ee(o)).time = mi.time), (a.width = o[f])),
                      se(g ? (n * u) / m : n && u ? (m / n) * u : 0)))
                : ((n = h ? e.getBBox()[d ? 'width' : 'height'] : e[f]),
                  se(v ? (u / n) * m : (u / 100) * n)));
        },
        hs = function (t, e, i, r) {
          var s;
          return (
            vr || Kr(),
            e in Lr &&
              'transform' !== e &&
              ~(e = Lr[e]).indexOf(',') &&
              (e = e.split(',')[0]),
            br[e] && 'transform' !== e
              ? ((s = ws(t, r)),
                (s =
                  'transformOrigin' !== e
                    ? s[e]
                    : s.svg
                    ? s.origin
                    : xs($r(t, Wr)) + ' ' + s.zOrigin + 'px'))
              : (!(s = t.style[e]) ||
                  'auto' === s ||
                  r ||
                  ~(s + '').indexOf('calc(')) &&
                (s =
                  (ps[e] && ps[e](t, e, i)) ||
                  $r(t, e) ||
                  ie(t, e) ||
                  ('opacity' === e ? 1 : 0)),
            i && !~(s + '').trim().indexOf(' ') ? as(t, e, s, i) + i : s
          );
        },
        us = function (t, e, i, r) {
          if (!i || 'none' === i) {
            var s = Qr(e, t, 1),
              n = s && $r(t, s, 1);
            n && n !== i
              ? ((e = s), (i = n))
              : 'borderColor' === e && (i = $r(t, 'borderTopColor'));
          }
          var o,
            a,
            h,
            u,
            l,
            c,
            d,
            p,
            f,
            m,
            g,
            v = new er(this._pt, t.style, e, 0, 1, $i),
            _ = 0,
            y = 0;
          if (
            ((v.b = i),
            (v.e = r),
            (i += ''),
            'auto' === (r += '') &&
              ((t.style[e] = r), (r = $r(t, e) || r), (t.style[e] = i)),
            fi((o = [i, r])),
            (r = o[1]),
            (h = (i = o[0]).match(Ct) || []),
            (r.match(Ct) || []).length)
          ) {
            for (; (a = Ct.exec(r)); )
              (d = a[0]),
                (f = r.substring(_, a.index)),
                l
                  ? (l = (l + 1) % 5)
                  : ('rgba(' !== f.substr(-5) && 'hsla(' !== f.substr(-5)) ||
                    (l = 1),
                d !== (c = h[y++] || '') &&
                  ((u = parseFloat(c) || 0),
                  (g = c.substr((u + '').length)),
                  '=' === d.charAt(1) && (d = oe(u, d) + g),
                  (p = parseFloat(d)),
                  (m = d.substr((p + '').length)),
                  (_ = Ct.lastIndex - m.length),
                  m ||
                    ((m = m || ut.units[e] || g),
                    _ === r.length && ((r += m), (v.e += m))),
                  g !== m && (u = as(t, e, c, m) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: f || 1 === y ? f : ',',
                    s: u,
                    c: p - u,
                    m: (l && l < 4) || 'zIndex' === e ? Math.round : 0,
                  }));
            v.c = _ < r.length ? r.substring(_, r.length) : '';
          } else v.r = 'display' === e && 'none' === r ? Ir : Fr;
          return Rt.test(r) && (v.e = 0), (this._pt = v), v;
        },
        ls = {
          top: '0%',
          bottom: '100%',
          left: '0%',
          right: '100%',
          center: '50%',
        },
        cs = function (t) {
          var e = t.split(' '),
            i = e[0],
            r = e[1] || '50%';
          return (
            ('top' !== i && 'bottom' !== i && 'left' !== r && 'right' !== r) ||
              ((t = i), (i = r), (r = t)),
            (e[0] = ls[i] || i),
            (e[1] = ls[r] || r),
            e.join(' ')
          );
        },
        ds = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var i,
              r,
              s,
              n = e.t,
              o = n.style,
              a = e.u,
              h = n._gsap;
            if ('all' === a || !0 === a) (o.cssText = ''), (r = 1);
            else
              for (s = (a = a.split(',')).length; --s > -1; )
                (i = a[s]),
                  br[i] && ((r = 1), (i = 'transformOrigin' === i ? Wr : Nr)),
                  rs(n, i);
            r &&
              (rs(n, Nr),
              h &&
                (h.svg && n.removeAttribute('transform'),
                ws(n, 1),
                (h.uncache = 1),
                Gr(o)));
          }
        },
        ps = {
          clearProps: function (t, e, i, r, s) {
            if ('isFromStart' !== s.data) {
              var n = (t._pt = new er(t._pt, e, i, 0, 0, ds));
              return (
                (n.u = r), (n.pr = -10), (n.tween = s), t._props.push(i), 1
              );
            }
          },
        },
        fs = [1, 0, 0, 1, 0, 0],
        ms = {},
        gs = function (t) {
          return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t;
        },
        vs = function (t) {
          var e = $r(t, Nr);
          return gs(e) ? fs : e.substr(7).match(Pt).map(se);
        },
        _s = function (t, e) {
          var i,
            r,
            s,
            n,
            o = t._gsap || ee(t),
            a = t.style,
            h = vs(t);
          return o.svg && t.getAttribute('transform')
            ? '1,0,0,1,0,0' ===
              (h = [
                (s = t.transform.baseVal.consolidate().matrix).a,
                s.b,
                s.c,
                s.d,
                s.e,
                s.f,
              ]).join(',')
              ? fs
              : h
            : (h !== fs ||
                t.offsetParent ||
                t === gr ||
                o.svg ||
                ((s = a.display),
                (a.display = 'block'),
                ((i = t.parentNode) && t.offsetParent) ||
                  ((n = 1), (r = t.nextElementSibling), gr.appendChild(t)),
                (h = vs(t)),
                s ? (a.display = s) : rs(t, 'display'),
                n &&
                  (r
                    ? i.insertBefore(t, r)
                    : i
                    ? i.appendChild(t)
                    : gr.removeChild(t))),
              e && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h);
        },
        ys = function (t, e, i, r, s, n) {
          var o,
            a,
            h,
            u = t._gsap,
            l = s || _s(t, !0),
            c = u.xOrigin || 0,
            d = u.yOrigin || 0,
            p = u.xOffset || 0,
            f = u.yOffset || 0,
            m = l[0],
            g = l[1],
            v = l[2],
            _ = l[3],
            y = l[4],
            w = l[5],
            x = e.split(' '),
            b = parseFloat(x[0]) || 0,
            A = parseFloat(x[1]) || 0;
          i
            ? l !== fs &&
              (a = m * _ - g * v) &&
              ((h = b * (-g / a) + A * (m / a) - (m * w - g * y) / a),
              (b = b * (_ / a) + A * (-v / a) + (v * w - _ * y) / a),
              (A = h))
            : ((b =
                (o = es(t)).x + (~x[0].indexOf('%') ? (b / 100) * o.width : b)),
              (A =
                o.y +
                (~(x[1] || x[0]).indexOf('%') ? (A / 100) * o.height : A))),
            r || (!1 !== r && u.smooth)
              ? ((y = b - c),
                (w = A - d),
                (u.xOffset = p + (y * m + w * v) - y),
                (u.yOffset = f + (y * g + w * _) - w))
              : (u.xOffset = u.yOffset = 0),
            (u.xOrigin = b),
            (u.yOrigin = A),
            (u.smooth = !!r),
            (u.origin = e),
            (u.originIsAbsolute = !!i),
            (t.style[Wr] = '0px 0px'),
            n &&
              (ss(n, u, 'xOrigin', c, b),
              ss(n, u, 'yOrigin', d, A),
              ss(n, u, 'xOffset', p, u.xOffset),
              ss(n, u, 'yOffset', f, u.yOffset)),
            t.setAttribute('data-svg-origin', b + ' ' + A);
        },
        ws = function (t, e) {
          var i = t._gsap || new Oi(t);
          if ('x' in i && !e && !i.uncache) return i;
          var r,
            s,
            n,
            o,
            a,
            h,
            u,
            l,
            c,
            d,
            p,
            f,
            m,
            g,
            v,
            _,
            y,
            w,
            x,
            b,
            A,
            T,
            M,
            E,
            S,
            O,
            L,
            P,
            C,
            z,
            R,
            F,
            I = t.style,
            k = i.scaleX < 0,
            D = 'px',
            B = 'deg',
            j = getComputedStyle(t),
            q = $r(t, Wr) || '0';
          return (
            (r = s = n = h = u = l = c = d = p = 0),
            (o = a = 1),
            (i.svg = !(!t.getCTM || !is(t))),
            j.translate &&
              (('none' === j.translate &&
                'none' === j.scale &&
                'none' === j.rotate) ||
                (I[Nr] =
                  ('none' !== j.translate
                    ? 'translate3d(' +
                      (j.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                      ') '
                    : '') +
                  ('none' !== j.rotate ? 'rotate(' + j.rotate + ') ' : '') +
                  ('none' !== j.scale
                    ? 'scale(' + j.scale.split(' ').join(',') + ') '
                    : '') +
                  ('none' !== j[Nr] ? j[Nr] : '')),
              (I.scale = I.rotate = I.translate = 'none')),
            (g = _s(t, i.svg)),
            i.svg &&
              (i.uncache
                ? ((S = t.getBBox()),
                  (q = i.xOrigin - S.x + 'px ' + (i.yOrigin - S.y) + 'px'),
                  (E = ''))
                : (E = !e && t.getAttribute('data-svg-origin')),
              ys(t, E || q, !!E || i.originIsAbsolute, !1 !== i.smooth, g)),
            (f = i.xOrigin || 0),
            (m = i.yOrigin || 0),
            g !== fs &&
              ((w = g[0]),
              (x = g[1]),
              (b = g[2]),
              (A = g[3]),
              (r = T = g[4]),
              (s = M = g[5]),
              6 === g.length
                ? ((o = Math.sqrt(w * w + x * x)),
                  (a = Math.sqrt(A * A + b * b)),
                  (h = w || x ? Mr(x, w) * Ar : 0),
                  (c = b || A ? Mr(b, A) * Ar + h : 0) &&
                    (a *= Math.abs(Math.cos(c * Tr))),
                  i.svg &&
                    ((r -= f - (f * w + m * b)), (s -= m - (f * x + m * A))))
                : ((F = g[6]),
                  (z = g[7]),
                  (L = g[8]),
                  (P = g[9]),
                  (C = g[10]),
                  (R = g[11]),
                  (r = g[12]),
                  (s = g[13]),
                  (n = g[14]),
                  (u = (v = Mr(F, C)) * Ar),
                  v &&
                    ((E = T * (_ = Math.cos(-v)) + L * (y = Math.sin(-v))),
                    (S = M * _ + P * y),
                    (O = F * _ + C * y),
                    (L = T * -y + L * _),
                    (P = M * -y + P * _),
                    (C = F * -y + C * _),
                    (R = z * -y + R * _),
                    (T = E),
                    (M = S),
                    (F = O)),
                  (l = (v = Mr(-b, C)) * Ar),
                  v &&
                    ((_ = Math.cos(-v)),
                    (R = A * (y = Math.sin(-v)) + R * _),
                    (w = E = w * _ - L * y),
                    (x = S = x * _ - P * y),
                    (b = O = b * _ - C * y)),
                  (h = (v = Mr(x, w)) * Ar),
                  v &&
                    ((E = w * (_ = Math.cos(v)) + x * (y = Math.sin(v))),
                    (S = T * _ + M * y),
                    (x = x * _ - w * y),
                    (M = M * _ - T * y),
                    (w = E),
                    (T = S)),
                  u &&
                    Math.abs(u) + Math.abs(h) > 359.9 &&
                    ((u = h = 0), (l = 180 - l)),
                  (o = se(Math.sqrt(w * w + x * x + b * b))),
                  (a = se(Math.sqrt(M * M + F * F))),
                  (v = Mr(T, M)),
                  (c = Math.abs(v) > 2e-4 ? v * Ar : 0),
                  (p = R ? 1 / (R < 0 ? -R : R) : 0)),
              i.svg &&
                ((E = t.getAttribute('transform')),
                (i.forceCSS =
                  t.setAttribute('transform', '') || !gs($r(t, Nr))),
                E && t.setAttribute('transform', E))),
            Math.abs(c) > 90 &&
              Math.abs(c) < 270 &&
              (k
                ? ((o *= -1),
                  (c += h <= 0 ? 180 : -180),
                  (h += h <= 0 ? 180 : -180))
                : ((a *= -1), (c += c <= 0 ? 180 : -180))),
            (e = e || i.uncache),
            (i.x =
              r -
              ((i.xPercent =
                r &&
                ((!e && i.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (t.offsetWidth * i.xPercent) / 100
                : 0) +
              D),
            (i.y =
              s -
              ((i.yPercent =
                s &&
                ((!e && i.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-s)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * i.yPercent) / 100
                : 0) +
              D),
            (i.z = n + D),
            (i.scaleX = se(o)),
            (i.scaleY = se(a)),
            (i.rotation = se(h) + B),
            (i.rotationX = se(u) + B),
            (i.rotationY = se(l) + B),
            (i.skewX = c + B),
            (i.skewY = d + B),
            (i.transformPerspective = p + D),
            (i.zOrigin = parseFloat(q.split(' ')[2]) || 0) && (I[Wr] = xs(q)),
            (i.xOffset = i.yOffset = 0),
            (i.force3D = ut.force3D),
            (i.renderTransform = i.svg ? Os : xr ? Ss : As),
            (i.uncache = 0),
            i
          );
        },
        xs = function (t) {
          return (t = t.split(' '))[0] + ' ' + t[1];
        },
        bs = function (t, e, i) {
          var r = Ne(e);
          return se(parseFloat(e) + parseFloat(as(t, 'x', i + 'px', r))) + r;
        },
        As = function (t, e) {
          (e.z = '0px'),
            (e.rotationY = e.rotationX = '0deg'),
            (e.force3D = 0),
            Ss(t, e);
        },
        Ts = '0deg',
        Ms = '0px',
        Es = ') ',
        Ss = function (t, e) {
          var i = e || this,
            r = i.xPercent,
            s = i.yPercent,
            n = i.x,
            o = i.y,
            a = i.z,
            h = i.rotation,
            u = i.rotationY,
            l = i.rotationX,
            c = i.skewX,
            d = i.skewY,
            p = i.scaleX,
            f = i.scaleY,
            m = i.transformPerspective,
            g = i.force3D,
            v = i.target,
            _ = i.zOrigin,
            y = '',
            w = ('auto' === g && t && 1 !== t) || !0 === g;
          if (_ && (l !== Ts || u !== Ts)) {
            var x,
              b = parseFloat(u) * Tr,
              A = Math.sin(b),
              T = Math.cos(b);
            (b = parseFloat(l) * Tr),
              (x = Math.cos(b)),
              (n = bs(v, n, A * x * -_)),
              (o = bs(v, o, -Math.sin(b) * -_)),
              (a = bs(v, a, T * x * -_ + _));
          }
          m !== Ms && (y += 'perspective(' + m + Es),
            (r || s) && (y += 'translate(' + r + '%, ' + s + '%) '),
            (w || n !== Ms || o !== Ms || a !== Ms) &&
              (y +=
                a !== Ms || w
                  ? 'translate3d(' + n + ', ' + o + ', ' + a + ') '
                  : 'translate(' + n + ', ' + o + Es),
            h !== Ts && (y += 'rotate(' + h + Es),
            u !== Ts && (y += 'rotateY(' + u + Es),
            l !== Ts && (y += 'rotateX(' + l + Es),
            (c === Ts && d === Ts) || (y += 'skew(' + c + ', ' + d + Es),
            (1 === p && 1 === f) || (y += 'scale(' + p + ', ' + f + Es),
            (v.style[Nr] = y || 'translate(0, 0)');
        },
        Os = function (t, e) {
          var i,
            r,
            s,
            n,
            o,
            a = e || this,
            h = a.xPercent,
            u = a.yPercent,
            l = a.x,
            c = a.y,
            d = a.rotation,
            p = a.skewX,
            f = a.skewY,
            m = a.scaleX,
            g = a.scaleY,
            v = a.target,
            _ = a.xOrigin,
            y = a.yOrigin,
            w = a.xOffset,
            x = a.yOffset,
            b = a.forceCSS,
            A = parseFloat(l),
            T = parseFloat(c);
          (d = parseFloat(d)),
            (p = parseFloat(p)),
            (f = parseFloat(f)) && ((p += f = parseFloat(f)), (d += f)),
            d || p
              ? ((d *= Tr),
                (p *= Tr),
                (i = Math.cos(d) * m),
                (r = Math.sin(d) * m),
                (s = Math.sin(d - p) * -g),
                (n = Math.cos(d - p) * g),
                p &&
                  ((f *= Tr),
                  (o = Math.tan(p - f)),
                  (s *= o = Math.sqrt(1 + o * o)),
                  (n *= o),
                  f &&
                    ((o = Math.tan(f)),
                    (i *= o = Math.sqrt(1 + o * o)),
                    (r *= o))),
                (i = se(i)),
                (r = se(r)),
                (s = se(s)),
                (n = se(n)))
              : ((i = m), (n = g), (r = s = 0)),
            ((A && !~(l + '').indexOf('px')) ||
              (T && !~(c + '').indexOf('px'))) &&
              ((A = as(v, 'x', l, 'px')), (T = as(v, 'y', c, 'px'))),
            (_ || y || w || x) &&
              ((A = se(A + _ - (_ * i + y * s) + w)),
              (T = se(T + y - (_ * r + y * n) + x))),
            (h || u) &&
              ((o = v.getBBox()),
              (A = se(A + (h / 100) * o.width)),
              (T = se(T + (u / 100) * o.height))),
            (o =
              'matrix(' +
              i +
              ',' +
              r +
              ',' +
              s +
              ',' +
              n +
              ',' +
              A +
              ',' +
              T +
              ')'),
            v.setAttribute('transform', o),
            b && (v.style[Nr] = o);
        },
        Ls = function (t, e, i, r, s) {
          var n,
            o,
            a = 360,
            h = yt(s),
            u = parseFloat(s) * (h && ~s.indexOf('rad') ? Ar : 1) - r,
            l = r + u + 'deg';
          return (
            h &&
              ('short' === (n = s.split('_')[1]) &&
                (u %= a) !== u % 180 &&
                (u += u < 0 ? a : -360),
              'cw' === n && u < 0
                ? (u = ((u + 36e9) % a) - ~~(u / a) * a)
                : 'ccw' === n &&
                  u > 0 &&
                  (u = ((u - 36e9) % a) - ~~(u / a) * a)),
            (t._pt = o = new er(t._pt, e, i, r, u, Cr)),
            (o.e = l),
            (o.u = 'deg'),
            t._props.push(i),
            o
          );
        },
        Ps = function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        Cs = function (t, e, i) {
          var r,
            s,
            n,
            o,
            a,
            h,
            u,
            l = Ps({}, i._gsap),
            c = i.style;
          for (s in (l.svg
            ? ((n = i.getAttribute('transform')),
              i.setAttribute('transform', ''),
              (c[Nr] = e),
              (r = ws(i, 1)),
              rs(i, Nr),
              i.setAttribute('transform', n))
            : ((n = getComputedStyle(i)[Nr]),
              (c[Nr] = e),
              (r = ws(i, 1)),
              (c[Nr] = n)),
          br))
            (n = l[s]) !== (o = r[s]) &&
              'perspective,force3D,transformOrigin,svgOrigin'.indexOf(s) < 0 &&
              ((a = Ne(n) !== (u = Ne(o)) ? as(i, s, n, u) : parseFloat(n)),
              (h = parseFloat(o)),
              (t._pt = new er(t._pt, r, s, a, h - a, Pr)),
              (t._pt.u = u || 0),
              t._props.push(s));
          Ps(r, l);
        };
      re('padding,margin,Width,Radius', function (t, e) {
        var i = 'Top',
          r = 'Right',
          s = 'Bottom',
          n = 'Left',
          o = (e < 3 ? [i, r, s, n] : [i + n, i + r, s + r, s + n]).map(
            function (i) {
              return e < 2 ? t + i : 'border' + i + t;
            }
          );
        ps[e > 1 ? 'border' + t : t] = function (t, e, i, r, s) {
          var n, a;
          if (arguments.length < 4)
            return (
              (n = o.map(function (e) {
                return hs(t, e, i);
              })),
              5 === (a = n.join(' ')).split(n[0]).length ? n[0] : a
            );
          (n = (r + '').split(' ')),
            (a = {}),
            o.forEach(function (t, e) {
              return (a[t] = n[e] = n[e] || n[((e - 1) / 2) | 0]);
            }),
            t.init(e, a, s);
        };
      });
      var zs,
        Rs,
        Fs,
        Is = {
          name: 'css',
          register: Kr,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, i, r, s) {
            var n,
              o,
              a,
              h,
              u,
              l,
              c,
              d,
              p,
              f,
              m,
              g,
              v,
              _,
              y,
              w,
              x = this._props,
              b = t.style,
              A = i.vars.startAt;
            for (c in (vr || Kr(),
            (this.styles = this.styles || Vr(t)),
            (w = this.styles.props),
            (this.tween = i),
            e))
              if (
                'autoRound' !== c &&
                ((o = e[c]), !$t[c] || !Ii(c, e, i, r, t, s))
              )
                if (
                  ((u = typeof o),
                  (l = ps[c]),
                  'function' === u && (u = typeof (o = o.call(i, r, t, s))),
                  'string' === u && ~o.indexOf('random(') && (o = ti(o)),
                  l)
                )
                  l(this, t, c, o, i) && (y = 1);
                else if ('--' === c.substr(0, 2))
                  (n = (getComputedStyle(t).getPropertyValue(c) + '').trim()),
                    (o += ''),
                    (di.lastIndex = 0),
                    di.test(n) || ((d = Ne(n)), (p = Ne(o))),
                    p ? d !== p && (n = as(t, c, n, p) + p) : d && (o += d),
                    this.add(b, 'setProperty', n, o, r, s, 0, 0, c),
                    x.push(c),
                    w.push(c, 0, b[c]);
                else if ('undefined' !== u) {
                  if (
                    (A && c in A
                      ? ((n =
                          'function' == typeof A[c]
                            ? A[c].call(i, r, t, s)
                            : A[c]),
                        yt(n) && ~n.indexOf('random(') && (n = ti(n)),
                        Ne(n + '') || (n += ut.units[c] || Ne(hs(t, c)) || ''),
                        '=' === (n + '').charAt(1) && (n = hs(t, c)))
                      : (n = hs(t, c)),
                    (h = parseFloat(n)),
                    (f =
                      'string' === u &&
                      '=' === o.charAt(1) &&
                      o.substr(0, 2)) && (o = o.substr(2)),
                    (a = parseFloat(o)),
                    c in Lr &&
                      ('autoAlpha' === c &&
                        (1 === h &&
                          'hidden' === hs(t, 'visibility') &&
                          a &&
                          (h = 0),
                        w.push('visibility', 0, b.visibility),
                        ss(
                          this,
                          b,
                          'visibility',
                          h ? 'inherit' : 'hidden',
                          a ? 'inherit' : 'hidden',
                          !a
                        )),
                      'scale' !== c &&
                        'transform' !== c &&
                        ~(c = Lr[c]).indexOf(',') &&
                        (c = c.split(',')[0])),
                    (m = c in br))
                  )
                    if (
                      (this.styles.save(c),
                      g ||
                        (((v = t._gsap).renderTransform && !e.parseTransform) ||
                          ws(t, e.parseTransform),
                        (_ = !1 !== e.smoothOrigin && v.smooth),
                        ((g = this._pt =
                          new er(
                            this._pt,
                            b,
                            Nr,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1
                          )).dep = 1)),
                      'scale' === c)
                    )
                      (this._pt = new er(
                        this._pt,
                        v,
                        'scaleY',
                        v.scaleY,
                        (f ? oe(v.scaleY, f + a) : a) - v.scaleY || 0,
                        Pr
                      )),
                        (this._pt.u = 0),
                        x.push('scaleY', c),
                        (c += 'X');
                    else {
                      if ('transformOrigin' === c) {
                        w.push(Wr, 0, b[Wr]),
                          (o = cs(o)),
                          v.svg
                            ? ys(t, o, 0, _, 0, this)
                            : ((p = parseFloat(o.split(' ')[2]) || 0) !==
                                v.zOrigin &&
                                ss(this, v, 'zOrigin', v.zOrigin, p),
                              ss(this, b, c, xs(n), xs(o)));
                        continue;
                      }
                      if ('svgOrigin' === c) {
                        ys(t, o, 1, _, 0, this);
                        continue;
                      }
                      if (c in ms) {
                        Ls(this, v, c, h, f ? oe(h, f + o) : o);
                        continue;
                      }
                      if ('smoothOrigin' === c) {
                        ss(this, v, 'smooth', v.smooth, o);
                        continue;
                      }
                      if ('force3D' === c) {
                        v[c] = o;
                        continue;
                      }
                      if ('transform' === c) {
                        Cs(this, o, t);
                        continue;
                      }
                    }
                  else c in b || (c = Qr(c) || c);
                  if (
                    m ||
                    ((a || 0 === a) && (h || 0 === h) && !Or.test(o) && c in b)
                  )
                    a || (a = 0),
                      (d = (n + '').substr((h + '').length)) !==
                        (p = Ne(o) || (c in ut.units ? ut.units[c] : d)) &&
                        (h = as(t, c, n, p)),
                      (this._pt = new er(
                        this._pt,
                        m ? v : b,
                        c,
                        h,
                        (f ? oe(h, f + a) : a) - h,
                        m ||
                        ('px' !== p && 'zIndex' !== c) ||
                        !1 === e.autoRound
                          ? Pr
                          : Rr
                      )),
                      (this._pt.u = p || 0),
                      d !== p &&
                        '%' !== p &&
                        ((this._pt.b = n), (this._pt.r = zr));
                  else if (c in b) us.call(this, t, c, n, f ? f + o : o);
                  else if (c in t)
                    this.add(t, c, n || t[c], f ? f + o : o, r, s);
                  else if ('parseTransform' !== c) {
                    jt(c, o);
                    continue;
                  }
                  m || (c in b ? w.push(c, 0, b[c]) : w.push(c, 1, n || t[c])),
                    x.push(c);
                }
            y && tr(this);
          },
          render: function (t, e) {
            if (e.tween._time || !wr())
              for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
            else e.styles.revert();
          },
          get: hs,
          aliases: Lr,
          getSetter: function (t, e, i) {
            var r = Lr[e];
            return (
              r && r.indexOf(',') < 0 && (e = r),
              e in br && e !== Wr && (t._gsap.x || hs(t, 'x'))
                ? i && yr === i
                  ? 'scale' === e
                    ? jr
                    : Br
                  : (yr = i || {}) && ('scale' === e ? qr : Ur)
                : t.style && !bt(t.style[e])
                ? kr
                : ~e.indexOf('-')
                ? Dr
                : Xi(t, e)
            );
          },
          core: {_removeProperty: rs, _getMatrix: _s},
        };
      (pr.utils.checkPrefix = Qr),
        (pr.core.getStyleSaver = Vr),
        (Fs = re(
          (zs = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent') +
            ',' +
            (Rs = 'rotation,rotationX,rotationY,skewX,skewY') +
            ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
          function (t) {
            br[t] = 1;
          }
        )),
        re(Rs, function (t) {
          (ut.units[t] = 'deg'), (ms[t] = 1);
        }),
        (Lr[Fs[13]] = zs + ',' + Rs),
        re(
          '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
          function (t) {
            var e = t.split(':');
            Lr[e[1]] = Fs[e[0]];
          }
        ),
        re(
          'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
          function (t) {
            ut.units[t] = 'px';
          }
        ),
        pr.registerPlugin(Is);
      var ks = pr.registerPlugin(Is) || pr,
        Ds = (ks.core.Tween, i(7976)),
        Bs = i.n(Ds);
      function js(t, e, i) {
        return ks.utils.interpolate(t, e, i);
      }
      function qs(t, e, i) {
        return ks.utils.clamp(t, e, i);
      }
      function Us(t, e) {
        return t instanceof window.HTMLElement ? [e(t)] : Bs()(t, e);
      }
      let Ns = 1;
      const Ws = {};
      class Ys {
        constructor(
          t,
          {
            vertex: e,
            fragment: i,
            uniforms: r = {},
            transparent: s = !1,
            cullFace: n = t.BACK,
            frontFace: o = t.CCW,
            depthTest: a = !0,
            depthWrite: h = !0,
            depthFunc: u = t.LESS,
          } = {}
        ) {
          t.canvas ||
            console.error('gl not passed as first argument to Program'),
            (this.gl = t),
            (this.uniforms = r),
            (this.id = Ns++),
            e || console.warn('vertex shader not supplied'),
            i || console.warn('fragment shader not supplied'),
            (this.transparent = s),
            (this.cullFace = n),
            (this.frontFace = o),
            (this.depthTest = a),
            (this.depthWrite = h),
            (this.depthFunc = u),
            (this.blendFunc = {}),
            (this.blendEquation = {}),
            this.transparent &&
              !this.blendFunc.src &&
              (this.gl.renderer.premultipliedAlpha
                ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
                : this.setBlendFunc(
                    this.gl.SRC_ALPHA,
                    this.gl.ONE_MINUS_SRC_ALPHA
                  ));
          const l = t.createShader(t.VERTEX_SHADER);
          t.shaderSource(l, e),
            t.compileShader(l),
            '' !== t.getShaderInfoLog(l) &&
              console.warn(`${t.getShaderInfoLog(l)}\nVertex Shader\n${Xs(e)}`);
          const c = t.createShader(t.FRAGMENT_SHADER);
          if (
            (t.shaderSource(c, i),
            t.compileShader(c),
            '' !== t.getShaderInfoLog(c) &&
              console.warn(
                `${t.getShaderInfoLog(c)}\nFragment Shader\n${Xs(i)}`
              ),
            (this.program = t.createProgram()),
            t.attachShader(this.program, l),
            t.attachShader(this.program, c),
            t.linkProgram(this.program),
            !t.getProgramParameter(this.program, t.LINK_STATUS))
          )
            return console.warn(t.getProgramInfoLog(this.program));
          t.deleteShader(l),
            t.deleteShader(c),
            (this.uniformLocations = new Map());
          let d = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
          for (let e = 0; e < d; e++) {
            let i = t.getActiveUniform(this.program, e);
            this.uniformLocations.set(
              i,
              t.getUniformLocation(this.program, i.name)
            );
            const r = i.name.match(/(\w+)/g);
            (i.uniformName = r[0]),
              3 === r.length
                ? ((i.isStructArray = !0),
                  (i.structIndex = Number(r[1])),
                  (i.structProperty = r[2]))
                : 2 === r.length &&
                  isNaN(Number(r[1])) &&
                  ((i.isStruct = !0), (i.structProperty = r[1]));
          }
          this.attributeLocations = new Map();
          const p = [],
            f = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
          for (let e = 0; e < f; e++) {
            const i = t.getActiveAttrib(this.program, e),
              r = t.getAttribLocation(this.program, i.name);
            -1 !== r && ((p[r] = i.name), this.attributeLocations.set(i, r));
          }
          this.attributeOrder = p.join('');
        }
        setBlendFunc(t, e, i, r) {
          (this.blendFunc.src = t),
            (this.blendFunc.dst = e),
            (this.blendFunc.srcAlpha = i),
            (this.blendFunc.dstAlpha = r),
            t && (this.transparent = !0);
        }
        setBlendEquation(t, e) {
          (this.blendEquation.modeRGB = t), (this.blendEquation.modeAlpha = e);
        }
        applyState() {
          this.depthTest
            ? this.gl.renderer.enable(this.gl.DEPTH_TEST)
            : this.gl.renderer.disable(this.gl.DEPTH_TEST),
            this.cullFace
              ? this.gl.renderer.enable(this.gl.CULL_FACE)
              : this.gl.renderer.disable(this.gl.CULL_FACE),
            this.blendFunc.src
              ? this.gl.renderer.enable(this.gl.BLEND)
              : this.gl.renderer.disable(this.gl.BLEND),
            this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
            this.gl.renderer.setFrontFace(this.frontFace),
            this.gl.renderer.setDepthMask(this.depthWrite),
            this.gl.renderer.setDepthFunc(this.depthFunc),
            this.blendFunc.src &&
              this.gl.renderer.setBlendFunc(
                this.blendFunc.src,
                this.blendFunc.dst,
                this.blendFunc.srcAlpha,
                this.blendFunc.dstAlpha
              ),
            this.gl.renderer.setBlendEquation(
              this.blendEquation.modeRGB,
              this.blendEquation.modeAlpha
            );
        }
        use({flipFaces: t = !1} = {}) {
          let e = -1;
          this.gl.renderer.state.currentProgram === this.id ||
            (this.gl.useProgram(this.program),
            (this.gl.renderer.state.currentProgram = this.id)),
            this.uniformLocations.forEach((t, i) => {
              let r = i.uniformName,
                s = this.uniforms[r];
              if (
                (i.isStruct &&
                  ((s = s[i.structProperty]), (r += `.${i.structProperty}`)),
                i.isStructArray &&
                  ((s = s[i.structIndex][i.structProperty]),
                  (r += `[${i.structIndex}].${i.structProperty}`)),
                !s)
              )
                return Hs(`Active uniform ${r} has not been supplied`);
              if (s && void 0 === s.value)
                return Hs(`${r} uniform is missing a value parameter`);
              if (s.value.texture)
                return (e += 1), s.value.update(e), Gs(this.gl, i.type, t, e);
              if (s.value.length && s.value[0].texture) {
                const r = [];
                return (
                  s.value.forEach((t) => {
                    (e += 1), t.update(e), r.push(e);
                  }),
                  Gs(this.gl, i.type, t, r)
                );
              }
              Gs(this.gl, i.type, t, s.value);
            }),
            this.applyState(),
            t &&
              this.gl.renderer.setFrontFace(
                this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW
              );
        }
        remove() {
          this.gl.deleteProgram(this.program);
        }
      }
      function Gs(t, e, i, r) {
        r = r.length
          ? (function (t) {
              const e = t.length,
                i = t[0].length;
              if (void 0 === i) return t;
              const r = e * i;
              let s = Ws[r];
              s || (Ws[r] = s = new Float32Array(r));
              for (let r = 0; r < e; r++) s.set(t[r], r * i);
              return s;
            })(r)
          : r;
        const s = t.renderer.state.uniformLocations.get(i);
        if (r.length)
          if (void 0 === s || s.length !== r.length)
            t.renderer.state.uniformLocations.set(i, r.slice(0));
          else {
            if (
              (function (t, e) {
                if (t.length !== e.length) return !1;
                for (let i = 0, r = t.length; i < r; i++)
                  if (t[i] !== e[i]) return !1;
                return !0;
              })(s, r)
            )
              return;
            s.set
              ? s.set(r)
              : (function (t, e) {
                  for (let i = 0, r = t.length; i < r; i++) t[i] = e[i];
                })(s, r),
              t.renderer.state.uniformLocations.set(i, s);
          }
        else {
          if (s === r) return;
          t.renderer.state.uniformLocations.set(i, r);
        }
        switch (e) {
          case 5126:
            return r.length ? t.uniform1fv(i, r) : t.uniform1f(i, r);
          case 35664:
            return t.uniform2fv(i, r);
          case 35665:
            return t.uniform3fv(i, r);
          case 35666:
            return t.uniform4fv(i, r);
          case 35670:
          case 5124:
          case 35678:
          case 35680:
            return r.length ? t.uniform1iv(i, r) : t.uniform1i(i, r);
          case 35671:
          case 35667:
            return t.uniform2iv(i, r);
          case 35672:
          case 35668:
            return t.uniform3iv(i, r);
          case 35673:
          case 35669:
            return t.uniform4iv(i, r);
          case 35674:
            return t.uniformMatrix2fv(i, !1, r);
          case 35675:
            return t.uniformMatrix3fv(i, !1, r);
          case 35676:
            return t.uniformMatrix4fv(i, !1, r);
        }
      }
      function Xs(t) {
        let e = t.split('\n');
        for (let t = 0; t < e.length; t++) e[t] = t + 1 + ': ' + e[t];
        return e.join('\n');
      }
      let Vs = 0;
      function Hs(t) {
        Vs > 100 ||
          (console.warn(t),
          Vs++,
          Vs > 100 &&
            console.warn('More than 100 program warnings - stopping logs.'));
      }
      function $s(t, e, i) {
        let r = e[0],
          s = e[1],
          n = e[2],
          o = e[3],
          a = e[4],
          h = e[5],
          u = e[6],
          l = e[7],
          c = e[8],
          d = i[0],
          p = i[1],
          f = i[2],
          m = i[3],
          g = i[4],
          v = i[5],
          _ = i[6],
          y = i[7],
          w = i[8];
        return (
          (t[0] = d * r + p * o + f * u),
          (t[1] = d * s + p * a + f * l),
          (t[2] = d * n + p * h + f * c),
          (t[3] = m * r + g * o + v * u),
          (t[4] = m * s + g * a + v * l),
          (t[5] = m * n + g * h + v * c),
          (t[6] = _ * r + y * o + w * u),
          (t[7] = _ * s + y * a + w * l),
          (t[8] = _ * n + y * h + w * c),
          t
        );
      }
      class Zs extends Array {
        constructor(
          t = 1,
          e = 0,
          i = 0,
          r = 0,
          s = 1,
          n = 0,
          o = 0,
          a = 0,
          h = 1
        ) {
          return super(t, e, i, r, s, n, o, a, h), this;
        }
        set(t, e, i, r, s, n, o, a, h) {
          return t.length
            ? this.copy(t)
            : ((function (t, e, i, r, s, n, o, a, h, u) {
                (t[0] = e),
                  (t[1] = i),
                  (t[2] = r),
                  (t[3] = s),
                  (t[4] = n),
                  (t[5] = o),
                  (t[6] = a),
                  (t[7] = h),
                  (t[8] = u);
              })(this, t, e, i, r, s, n, o, a, h),
              this);
        }
        translate(t, e = this) {
          return (
            (function (t, e, i) {
              let r = e[0],
                s = e[1],
                n = e[2],
                o = e[3],
                a = e[4],
                h = e[5],
                u = e[6],
                l = e[7],
                c = e[8],
                d = i[0],
                p = i[1];
              (t[0] = r),
                (t[1] = s),
                (t[2] = n),
                (t[3] = o),
                (t[4] = a),
                (t[5] = h),
                (t[6] = d * r + p * o + u),
                (t[7] = d * s + p * a + l),
                (t[8] = d * n + p * h + c);
            })(this, e, t),
            this
          );
        }
        rotate(t, e = this) {
          return (
            (function (t, e, i) {
              let r = e[0],
                s = e[1],
                n = e[2],
                o = e[3],
                a = e[4],
                h = e[5],
                u = e[6],
                l = e[7],
                c = e[8],
                d = Math.sin(i),
                p = Math.cos(i);
              (t[0] = p * r + d * o),
                (t[1] = p * s + d * a),
                (t[2] = p * n + d * h),
                (t[3] = p * o - d * r),
                (t[4] = p * a - d * s),
                (t[5] = p * h - d * n),
                (t[6] = u),
                (t[7] = l),
                (t[8] = c);
            })(this, e, t),
            this
          );
        }
        scale(t, e = this) {
          return (
            (function (t, e, i) {
              let r = i[0],
                s = i[1];
              (t[0] = r * e[0]),
                (t[1] = r * e[1]),
                (t[2] = r * e[2]),
                (t[3] = s * e[3]),
                (t[4] = s * e[4]),
                (t[5] = s * e[5]),
                (t[6] = e[6]),
                (t[7] = e[7]),
                (t[8] = e[8]);
            })(this, e, t),
            this
          );
        }
        multiply(t, e) {
          return e ? $s(this, t, e) : $s(this, this, t), this;
        }
        identity() {
          var t;
          return (
            ((t = this)[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 1),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1),
            this
          );
        }
        copy(t) {
          var e, i;
          return (
            (i = t),
            ((e = this)[0] = i[0]),
            (e[1] = i[1]),
            (e[2] = i[2]),
            (e[3] = i[3]),
            (e[4] = i[4]),
            (e[5] = i[5]),
            (e[6] = i[6]),
            (e[7] = i[7]),
            (e[8] = i[8]),
            this
          );
        }
        fromMatrix4(t) {
          var e, i;
          return (
            (i = t),
            ((e = this)[0] = i[0]),
            (e[1] = i[1]),
            (e[2] = i[2]),
            (e[3] = i[4]),
            (e[4] = i[5]),
            (e[5] = i[6]),
            (e[6] = i[8]),
            (e[7] = i[9]),
            (e[8] = i[10]),
            this
          );
        }
        fromQuaternion(t) {
          return (
            (function (t, e) {
              let i = e[0],
                r = e[1],
                s = e[2],
                n = e[3],
                o = i + i,
                a = r + r,
                h = s + s,
                u = i * o,
                l = r * o,
                c = r * a,
                d = s * o,
                p = s * a,
                f = s * h,
                m = n * o,
                g = n * a,
                v = n * h;
              (t[0] = 1 - c - f),
                (t[3] = l - v),
                (t[6] = d + g),
                (t[1] = l + v),
                (t[4] = 1 - u - f),
                (t[7] = p - m),
                (t[2] = d - g),
                (t[5] = p + m),
                (t[8] = 1 - u - c);
            })(this, t),
            this
          );
        }
        fromBasis(t, e, i) {
          return (
            this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]), this
          );
        }
        inverse(t = this) {
          return (
            (function (t, e) {
              let i = e[0],
                r = e[1],
                s = e[2],
                n = e[3],
                o = e[4],
                a = e[5],
                h = e[6],
                u = e[7],
                l = e[8],
                c = l * o - a * u,
                d = -l * n + a * h,
                p = u * n - o * h,
                f = i * c + r * d + s * p;
              f &&
                ((f = 1 / f),
                (t[0] = c * f),
                (t[1] = (-l * r + s * u) * f),
                (t[2] = (a * r - s * o) * f),
                (t[3] = d * f),
                (t[4] = (l * i - s * h) * f),
                (t[5] = (-a * i + s * n) * f),
                (t[6] = p * f),
                (t[7] = (-u * i + r * h) * f),
                (t[8] = (o * i - r * n) * f));
            })(this, t),
            this
          );
        }
        getNormalMatrix(t) {
          return (
            (function (t, e) {
              let i = e[0],
                r = e[1],
                s = e[2],
                n = e[3],
                o = e[4],
                a = e[5],
                h = e[6],
                u = e[7],
                l = e[8],
                c = e[9],
                d = e[10],
                p = e[11],
                f = e[12],
                m = e[13],
                g = e[14],
                v = e[15],
                _ = i * a - r * o,
                y = i * h - s * o,
                w = i * u - n * o,
                x = r * h - s * a,
                b = r * u - n * a,
                A = s * u - n * h,
                T = l * m - c * f,
                M = l * g - d * f,
                E = l * v - p * f,
                S = c * g - d * m,
                O = c * v - p * m,
                L = d * v - p * g,
                P = _ * L - y * O + w * S + x * E - b * M + A * T;
              P &&
                ((P = 1 / P),
                (t[0] = (a * L - h * O + u * S) * P),
                (t[1] = (h * E - o * L - u * M) * P),
                (t[2] = (o * O - a * E + u * T) * P),
                (t[3] = (s * O - r * L - n * S) * P),
                (t[4] = (i * L - s * E + n * M) * P),
                (t[5] = (r * E - i * O - n * T) * P),
                (t[6] = (m * A - g * b + v * x) * P),
                (t[7] = (g * w - f * A - v * y) * P),
                (t[8] = (f * b - m * w + v * _) * P));
            })(this, t),
            this
          );
        }
      }
      let Qs = 0;
      class Ks extends C {
        constructor(
          t,
          {
            geometry: e,
            program: i,
            mode: r = t.TRIANGLES,
            frustumCulled: s = !0,
            renderOrder: n = 0,
          } = {}
        ) {
          super(),
            t.canvas ||
              console.error('gl not passed as first argument to Mesh'),
            (this.gl = t),
            (this.id = Qs++),
            (this.geometry = e),
            (this.program = i),
            (this.mode = r),
            (this.frustumCulled = s),
            (this.renderOrder = n),
            (this.modelViewMatrix = new O()),
            (this.normalMatrix = new Zs()),
            (this.beforeRenderCallbacks = []),
            (this.afterRenderCallbacks = []);
        }
        onBeforeRender(t) {
          return this.beforeRenderCallbacks.push(t), this;
        }
        onAfterRender(t) {
          return this.afterRenderCallbacks.push(t), this;
        }
        draw({camera: t} = {}) {
          this.beforeRenderCallbacks.forEach(
            (e) => e && e({mesh: this, camera: t})
          ),
            t &&
              (this.program.uniforms.modelMatrix ||
                Object.assign(this.program.uniforms, {
                  modelMatrix: {value: null},
                  viewMatrix: {value: null},
                  modelViewMatrix: {value: null},
                  normalMatrix: {value: null},
                  projectionMatrix: {value: null},
                  cameraPosition: {value: null},
                }),
              (this.program.uniforms.projectionMatrix.value =
                t.projectionMatrix),
              (this.program.uniforms.cameraPosition.value = t.worldPosition),
              (this.program.uniforms.viewMatrix.value = t.viewMatrix),
              this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
              this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
              (this.program.uniforms.modelMatrix.value = this.worldMatrix),
              (this.program.uniforms.modelViewMatrix.value =
                this.modelViewMatrix),
              (this.program.uniforms.normalMatrix.value = this.normalMatrix));
          let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
          this.program.use({flipFaces: e}),
            this.geometry.draw({mode: this.mode, program: this.program}),
            this.afterRenderCallbacks.forEach(
              (e) => e && e({mesh: this, camera: t})
            );
        }
      }
      var Js = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        tn = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        en = Math.PI / 180,
        rn = (Math.PI, Math.sin),
        sn = Math.cos,
        nn = Math.abs,
        on = Math.sqrt,
        an =
          (Math.atan2,
          function (t) {
            return 'number' == typeof t;
          }),
        hn = 1e5,
        un = function (t) {
          return Math.round(t * hn) / hn || 0;
        };
      function ln(t, e, i, r, s, n, o, a, h) {
        if (t !== a || e !== h) {
          (i = nn(i)), (r = nn(r));
          var u = (s % 360) * en,
            l = sn(u),
            c = rn(u),
            d = Math.PI,
            p = 2 * d,
            f = (t - a) / 2,
            m = (e - h) / 2,
            g = l * f + c * m,
            v = -c * f + l * m,
            _ = g * g,
            y = v * v,
            w = _ / (i * i) + y / (r * r);
          w > 1 && ((i = on(w) * i), (r = on(w) * r));
          var x = i * i,
            b = r * r,
            A = (x * b - x * y - b * _) / (x * y + b * _);
          A < 0 && (A = 0);
          var T = (n === o ? -1 : 1) * on(A),
            M = T * ((i * v) / r),
            E = T * ((-r * g) / i),
            S = (t + a) / 2 + (l * M - c * E),
            O = (e + h) / 2 + (c * M + l * E),
            L = (g - M) / i,
            P = (v - E) / r,
            C = (-g - M) / i,
            z = (-v - E) / r,
            R = L * L + P * P,
            F = (P < 0 ? -1 : 1) * Math.acos(L / on(R)),
            I =
              (L * z - P * C < 0 ? -1 : 1) *
              Math.acos((L * C + P * z) / on(R * (C * C + z * z)));
          isNaN(I) && (I = d),
            !o && I > 0 ? (I -= p) : o && I < 0 && (I += p),
            (F %= p),
            (I %= p);
          var k,
            D = Math.ceil(nn(I) / (p / 4)),
            B = [],
            j = I / D,
            q = ((4 / 3) * rn(j / 2)) / (1 + sn(j / 2)),
            U = l * i,
            N = c * i,
            W = c * -r,
            Y = l * r;
          for (k = 0; k < D; k++)
            (g = sn((s = F + k * j))),
              (v = rn(s)),
              (L = sn((s += j))),
              (P = rn(s)),
              B.push(g - q * v, v + q * g, L + q * P, P - q * L, L, P);
          for (k = 0; k < B.length; k += 2)
            (g = B[k]),
              (v = B[k + 1]),
              (B[k] = g * U + v * W + S),
              (B[k + 1] = g * N + v * Y + O);
          return (B[k - 2] = a), (B[k - 1] = h), B;
        }
      }
      function cn(t) {
        var e,
          i,
          r,
          s,
          n,
          o,
          a,
          h,
          u,
          l,
          c,
          d,
          p,
          f,
          m,
          g =
            (t + '')
              .replace(tn, function (t) {
                var e = +t;
                return e < 1e-4 && e > -1e-4 ? 0 : e;
              })
              .match(Js) || [],
          v = [],
          _ = 0,
          y = 0,
          w = 2 / 3,
          x = g.length,
          b = 0,
          A = 'ERROR: malformed path: ' + t,
          T = function (t, e, i, r) {
            (l = (i - t) / 3),
              (c = (r - e) / 3),
              a.push(t + l, e + c, i - l, r - c, i, r);
          };
        if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(A), v;
        for (e = 0; e < x; e++)
          if (
            ((p = n),
            isNaN(g[e]) ? (o = (n = g[e].toUpperCase()) !== g[e]) : e--,
            (r = +g[e + 1]),
            (s = +g[e + 2]),
            o && ((r += _), (s += y)),
            e || ((h = r), (u = s)),
            'M' === n)
          )
            a && (a.length < 8 ? (v.length -= 1) : (b += a.length)),
              (_ = h = r),
              (y = u = s),
              (a = [r, s]),
              v.push(a),
              (e += 2),
              (n = 'L');
          else if ('C' === n)
            a || (a = [0, 0]),
              o || (_ = y = 0),
              a.push(
                r,
                s,
                _ + 1 * g[e + 3],
                y + 1 * g[e + 4],
                (_ += 1 * g[e + 5]),
                (y += 1 * g[e + 6])
              ),
              (e += 6);
          else if ('S' === n)
            (l = _),
              (c = y),
              ('C' !== p && 'S' !== p) ||
                ((l += _ - a[a.length - 4]), (c += y - a[a.length - 3])),
              o || (_ = y = 0),
              a.push(l, c, r, s, (_ += 1 * g[e + 3]), (y += 1 * g[e + 4])),
              (e += 4);
          else if ('Q' === n)
            (l = _ + (r - _) * w),
              (c = y + (s - y) * w),
              o || (_ = y = 0),
              (_ += 1 * g[e + 3]),
              (y += 1 * g[e + 4]),
              a.push(l, c, _ + (r - _) * w, y + (s - y) * w, _, y),
              (e += 4);
          else if ('T' === n)
            (l = _ - a[a.length - 4]),
              (c = y - a[a.length - 3]),
              a.push(
                _ + l,
                y + c,
                r + (_ + 1.5 * l - r) * w,
                s + (y + 1.5 * c - s) * w,
                (_ = r),
                (y = s)
              ),
              (e += 2);
          else if ('H' === n) T(_, y, (_ = r), y), (e += 1);
          else if ('V' === n) T(_, y, _, (y = r + (o ? y - _ : 0))), (e += 1);
          else if ('L' === n || 'Z' === n)
            'Z' === n && ((r = h), (s = u), (a.closed = !0)),
              ('L' === n || nn(_ - r) > 0.5 || nn(y - s) > 0.5) &&
                (T(_, y, r, s), 'L' === n && (e += 2)),
              (_ = r),
              (y = s);
          else if ('A' === n) {
            if (
              ((f = g[e + 4]),
              (m = g[e + 5]),
              (l = g[e + 6]),
              (c = g[e + 7]),
              (i = 7),
              f.length > 1 &&
                (f.length < 3
                  ? ((c = l), (l = m), i--)
                  : ((c = m), (l = f.substr(2)), (i -= 2)),
                (m = f.charAt(1)),
                (f = f.charAt(0))),
              (d = ln(
                _,
                y,
                +g[e + 1],
                +g[e + 2],
                +g[e + 3],
                +f,
                +m,
                (o ? _ : 0) + 1 * l,
                (o ? y : 0) + 1 * c
              )),
              (e += i),
              d)
            )
              for (i = 0; i < d.length; i++) a.push(d[i]);
            (_ = a[a.length - 2]), (y = a[a.length - 1]);
          } else console.log(A);
        return (
          (e = a.length) < 6
            ? (v.pop(), (e = 0))
            : a[0] === a[e - 2] && a[1] === a[e - 1] && (a.closed = !0),
          (v.totalPoints = b + e),
          v
        );
      }
      function dn(t) {
        an(t[0]) && (t = [t]);
        var e,
          i,
          r,
          s,
          n = '',
          o = t.length;
        for (i = 0; i < o; i++) {
          for (
            s = t[i],
              n += 'M' + un(s[0]) + ',' + un(s[1]) + ' C',
              e = s.length,
              r = 2;
            r < e;
            r++
          )
            n +=
              un(s[r++]) +
              ',' +
              un(s[r++]) +
              ' ' +
              un(s[r++]) +
              ',' +
              un(s[r++]) +
              ' ' +
              un(s[r++]) +
              ',' +
              un(s[r]) +
              ' ';
          s.closed && (n += 'z');
        }
        return n;
      }
      var pn,
        fn,
        mn = function () {
          return (
            pn ||
            ('undefined' != typeof window &&
              (pn = window.gsap) &&
              pn.registerPlugin &&
              pn)
          );
        },
        gn = function () {
          (pn = mn())
            ? (pn.registerEase('_CE', bn.create), (fn = 1))
            : console.warn('Please gsap.registerPlugin(CustomEase)');
        },
        vn = function (t) {
          return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
        },
        _n = 1,
        yn = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        wn = /[cLlsSaAhHvVtTqQ]/g,
        xn = function t(e, i, r, s, n, o, a, h, u, l, c) {
          var d,
            p = (e + r) / 2,
            f = (i + s) / 2,
            m = (r + n) / 2,
            g = (s + o) / 2,
            v = (n + a) / 2,
            _ = (o + h) / 2,
            y = (p + m) / 2,
            w = (f + g) / 2,
            x = (m + v) / 2,
            b = (g + _) / 2,
            A = (y + x) / 2,
            T = (w + b) / 2,
            M = a - e,
            E = h - i,
            S = Math.abs((r - a) * E - (s - h) * M),
            O = Math.abs((n - a) * E - (o - h) * M);
          return (
            l ||
              ((l = [
                {x: e, y: i},
                {x: a, y: h},
              ]),
              (c = 1)),
            l.splice(c || l.length - 1, 0, {x: A, y: T}),
            (S + O) * (S + O) > u * (M * M + E * E) &&
              ((d = l.length),
              t(e, i, p, f, y, w, A, T, u, l, c),
              t(A, T, x, b, v, _, a, h, u, l, c + 1 + (l.length - d))),
            l
          );
        },
        bn = (function () {
          function t(t, e, i) {
            fn || gn(), (this.id = t), _n && this.setData(e, i);
          }
          var e = t.prototype;
          return (
            (e.setData = function (t, e) {
              e = e || {};
              var i,
                r,
                s,
                n,
                o,
                a,
                h,
                u,
                l,
                c = (t = t || '0,0,1,1').match(yn),
                d = 1,
                p = [],
                f = [],
                m = e.precision || 1,
                g = m <= 1;
              if (
                ((this.data = t),
                (wn.test(t) || (~t.indexOf('M') && t.indexOf('C') < 0)) &&
                  (c = cn(t)[0]),
                4 === (i = c.length))
              )
                c.unshift(0, 0), c.push(1, 1), (i = 8);
              else if ((i - 2) % 6) throw 'Invalid CustomEase';
              for (
                (0 == +c[0] && 1 == +c[i - 2]) ||
                  (function (t, e, i) {
                    i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
                    var r,
                      s = -1 * +t[0],
                      n = -i,
                      o = t.length,
                      a = 1 / (+t[o - 2] + s),
                      h =
                        -e ||
                        (Math.abs(+t[o - 1] - +t[1]) <
                        0.01 * (+t[o - 2] - +t[0])
                          ? (function (t) {
                              var e,
                                i = t.length,
                                r = 1e20;
                              for (e = 1; e < i; e += 6)
                                +t[e] < r && (r = +t[e]);
                              return r;
                            })(t) + n
                          : +t[o - 1] + n);
                    for (h = h ? 1 / h : -a, r = 0; r < o; r += 2)
                      (t[r] = (+t[r] + s) * a),
                        (t[r + 1] = (+t[r + 1] + n) * h);
                  })(c, e.height, e.originY),
                  this.segment = c,
                  n = 2;
                n < i;
                n += 6
              )
                (r = {x: +c[n - 2], y: +c[n - 1]}),
                  (s = {x: +c[n + 4], y: +c[n + 5]}),
                  p.push(r, s),
                  xn(
                    r.x,
                    r.y,
                    +c[n],
                    +c[n + 1],
                    +c[n + 2],
                    +c[n + 3],
                    s.x,
                    s.y,
                    1 / (2e5 * m),
                    p,
                    p.length - 1
                  );
              for (i = p.length, n = 0; n < i; n++)
                (h = p[n]),
                  (u = p[n - 1] || h),
                  (h.x > u.x || (u.y !== h.y && u.x === h.x) || h === u) &&
                  h.x <= 1
                    ? ((u.cx = h.x - u.x),
                      (u.cy = h.y - u.y),
                      (u.n = h),
                      (u.nx = h.x),
                      g &&
                        n > 1 &&
                        Math.abs(u.cy / u.cx - p[n - 2].cy / p[n - 2].cx) > 2 &&
                        (g = 0),
                      u.cx < d &&
                        (u.cx
                          ? (d = u.cx)
                          : ((u.cx = 0.001),
                            n === i - 1 &&
                              ((u.x -= 0.001),
                              (d = Math.min(d, 0.001)),
                              (g = 0)))))
                    : (p.splice(n--, 1), i--);
              if (((o = 1 / (i = (1 / d + 1) | 0)), (a = 0), (h = p[0]), g)) {
                for (n = 0; n < i; n++)
                  (l = n * o),
                    h.nx < l && (h = p[++a]),
                    (r = h.y + ((l - h.x) / h.cx) * h.cy),
                    (f[n] = {x: l, cx: o, y: r, cy: 0, nx: 9}),
                    n && (f[n - 1].cy = r - f[n - 1].y);
                f[i - 1].cy = p[p.length - 1].y - r;
              } else {
                for (n = 0; n < i; n++)
                  h.nx < n * o && (h = p[++a]), (f[n] = h);
                a < p.length - 1 && (f[n - 1] = p[p.length - 2]);
              }
              return (
                (this.ease = function (t) {
                  var e = f[(t * i) | 0] || f[i - 1];
                  return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
                }),
                (this.ease.custom = this),
                this.id && pn && pn.registerEase(this.id, this.ease),
                this
              );
            }),
            (e.getSVGData = function (e) {
              return t.getSVGData(this, e);
            }),
            (t.create = function (e, i, r) {
              return new t(e, i, r).ease;
            }),
            (t.register = function (t) {
              (pn = t), gn();
            }),
            (t.get = function (t) {
              return pn.parseEase(t);
            }),
            (t.getSVGData = function (e, i) {
              var r,
                s,
                n,
                o,
                a,
                h,
                u,
                l,
                c,
                d,
                p = (i = i || {}).width || 100,
                f = i.height || 100,
                m = i.x || 0,
                g = (i.y || 0) + f,
                v = pn.utils.toArray(i.path)[0];
              if (
                (i.invert && ((f = -f), (g = 0)),
                'string' == typeof e && (e = pn.parseEase(e)),
                e.custom && (e = e.custom),
                e instanceof t)
              )
                r = dn(
                  (function (t, e, i, r, s, n, o) {
                    for (var a, h, u, l, c, d = t.length; --d > -1; )
                      for (h = (a = t[d]).length, u = 0; u < h; u += 2)
                        (l = a[u]),
                          (c = a[u + 1]),
                          (a[u] = l * e + c * r + n),
                          (a[u + 1] = l * i + c * s + o);
                    return (t._dirty = 1), t;
                  })([e.segment], p, 0, 0, -f, m, g)
                );
              else {
                for (
                  r = [m, g],
                    o = 1 / (u = Math.max(5, 200 * (i.precision || 1))),
                    l = 5 / (u += 2),
                    c = vn(m + o * p),
                    s = ((d = vn(g + e(o) * -f)) - g) / (c - m),
                    n = 2;
                  n < u;
                  n++
                )
                  (a = vn(m + n * o * p)),
                    (h = vn(g + e(n * o) * -f)),
                    (Math.abs((h - d) / (a - c) - s) > l || n === u - 1) &&
                      (r.push(c, d), (s = (h - d) / (a - c))),
                    (c = a),
                    (d = h);
                r = 'M' + r.join(',');
              }
              return v && v.setAttribute('d', r), r;
            }),
            t
          );
        })();
      mn() && pn.registerPlugin(bn),
        (bn.version = '3.11.4'),
        ks.registerPlugin(bn);
      bn.create('default', '.77,0,.175,1');
      const An = bn.create('b', '0,.44,.63,1.02'),
        Tn = bn.create('l1t', '0,.6,.3,1'),
        Mn = bn.create('l1hi', '.25,.1,.25,1'),
        En = bn.create('l1ht', '0,.6,.3,1'),
        Sn = bn.create('l2hi', '0.25,0.1,0.25,1'),
        On = bn.create('l2ht', '0.25,0.1,0.25,1'),
        Ln = bn.create('atb', '0,.13,.23,1'),
        Pn = bn.create('bta', '0,.38,.38,.98'),
        Cn = bn.create('las', '0.05,0.32,0.2,0.99'),
        zn = bn.create('ls', '.42,.23,.1,1'),
        Rn = bn.create('lh', '.52,.34,.22,1'),
        Fn = bn.create('ih', '.52,.34,.22,1'),
        In = bn.create('is', '.42,.23,.1,1'),
        kn = bn.create('iss', '0,0,.58,1');
      class Dn {
        constructor({
          element: t,
          layoutA: e,
          layoutB: i,
          geometry: r,
          gl: s,
          index: n,
          scene: o,
          sizes: a,
          groups: h,
        }) {
          (this.element = t),
            (this.gl = s),
            (this.index = n),
            (this.sizes = a),
            (this.scene = o),
            (this.geometry = r),
            (this.groups = h),
            j.isPhone() ||
              ((this.layoutA = e),
              (this.layoutB = i),
              (this.aBounds = this.layoutA.getBoundingClientRect()),
              (this.bBounds = this.layoutB.getBoundingClientRect())),
            (this.animation = 0),
            this.createTexture(),
            this.createProgram(),
            this.createMesh(),
            this.createBounds({sizes: this.sizes});
        }
        createTexture() {
          const t = this.element.getAttribute('data-src');
          this.t = window.TEXTURES[t];
        }
        createProgram() {
          this.program = new Ys(this.gl, {
            extensions: {
              derivatives: '#extension GL_OES_standard_derivatives: enable',
            },
            transparent: !0,
            vertex:
              '#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float s;\nuniform float y;\nuniform vec2 w;\nvarying vec2 u;\nvarying vec3 pos;\n\nvoid main() {\n  pos = position;\n  vec4 p = modelViewMatrix * vec4(pos.x,pos.y,0.,1.);\n  p.y+=y;\n  gl_Position=projectionMatrix*p;\n  u=(uv-vec2(.5))*(-s+1.)+vec2(.5);\n}\n\n// precision highp float;\n// attribute vec2 p;\n// attribute vec2 u;\n\n// varying vec2 b;\n// varying vec2 c;\n\n// uniform vec2 s;\n// uniform vec2 w;\n\n// uniform float f;\n\n// uniform mat4 d;\n// uniform mat4 e;\n\n// void main(){\n//   vec4 p=e*vec4(p.x,p.y,0.,1);\n//   gl_Position=d * p ;\n//   b = (u - .5 / s) + .5 ;\n//   b.y += f;\n//   c = (p.xy/w) + .5;\n// }',
            fragment:
              'precision highp float;\n#define GLSLIFY 1\nuniform sampler2D t;\nuniform float a;\nuniform float o;\nuniform float f;\nuniform bool is;\nuniform vec2 h;\nvarying vec2 u;\nvarying vec3 pos;\nvoid main() {\n  vec4 i=texture2D(t,vec2(u.x,u.y));\n  float b=step(0.,1.-(u.y/2.+f))*step(0.,u.y/2.+f);\n  float g=(i.r+i.g+i.b)/3.;\n  gl_FragColor=is ?  mix(vec4(vec3(g),.4),i,o) : mix(vec4(vec3(255.),0.),mix(vec4(vec3(g),.4),i,o),b);\n  gl_FragColor.a=a;\n}',
            uniforms: {
              t: {value: this.t},
              a: {value: 0},
              s: {value: 0.1},
              o: {value: 0},
              y: {value: 0},
              f: {value: 0},
              is: {value: !!j.isPhone()},
            },
          });
        }
        createMesh() {
          (this.mesh = new Ks(this.gl, {
            geometry: this.geometry,
            program: this.program,
          })),
            this.mesh.setParent(this.scene),
            (this.mesh.position.z = 0);
        }
        createBounds({sizes: t}) {
          (this.sizes = t),
            j.isPhone() ||
              ((this.aBounds = this.layoutA.getBoundingClientRect()),
              (this.bBounds = this.layoutB.getBoundingClientRect())),
            (this.bounds = this.element.getBoundingClientRect()),
            this.updateScale(),
            this.updateLayout(!0);
        }
        show(t = !1, e, i = 0) {
          const r = ks.timeline({delay: i});
          t
            ? r.fromTo(
                this.program.uniforms.a,
                {value: 0},
                {value: 1, duration: 0.5},
                0
              )
            : (r.fromTo(
                this.program.uniforms.a,
                {value: 0},
                {value: 1, duration: 0.5},
                0
              ),
              j.isPhone()
                ? (r.set(this.program.uniforms.a, {
                    value:
                      '#' ===
                      document
                        .querySelectorAll('.h-img')
                        [this.index].getAttribute('href')
                        ? 0.7
                        : 1,
                  }),
                  r.fromTo(
                    this.program.uniforms.y,
                    {value: -6},
                    {
                      delay: 0.02 * this.index,
                      ease: zn,
                      duration: 1.2,
                      value: 0,
                    }
                  ))
                : 'cs' === window.LAYOUT
                ? Bs()(this.groups, (t, e) => {
                    t.forEach((t, i) => {
                      this.index === t &&
                        r.fromTo(
                          this.program.uniforms.y,
                          {value: -6},
                          {
                            delay: 0.1 * i + 0.1 * e,
                            ease: Cn,
                            duration: 1,
                            value: 0,
                          },
                          0
                        );
                    });
                  })
                : r.fromTo(
                    this.program.uniforms.y,
                    {value: -4.5},
                    {
                      delay: 0.02 * this.index,
                      ease: zn,
                      duration: 1.4,
                      value: 0,
                    },
                    0
                  ));
        }
        hide(t = !1, e, i = 0) {
          const r = ks.timeline({delay: i});
          t
            ? j.isPhone()
              ? r.to(this.program.uniforms.a, {duration: 0.3, value: 0}, 0)
              : (e !== this.index &&
                  r.to(this.program.uniforms.a, {duration: 0.3, value: 0}, 0),
                e === this.index &&
                  r.to(
                    this.program.uniforms.f,
                    {value: -0.8, duration: 1, ease: Fn},
                    0
                  ))
            : j.isPhone() ||
              r.fromTo(
                this.program.uniforms.y,
                {value: 0},
                {delay: 0.02 * this.index, duration: 1.4, ease: Rn, value: 3.1},
                0
              );
        }
        animateIn(t, e) {
          ks.fromTo(
            this,
            {animation: 0},
            {
              delay: e,
              duration: 0.4 + 0.05 * this.index,
              ease: 'a' === t ? Ln : Pn,
              animation: 1,
            }
          );
        }
        animateOut(t, e) {
          ks.fromTo(
            this,
            {animation: 0},
            {
              delay: e,
              duration: 0.4 + 0.05 * this.index,
              ease: 'a' === t ? Ln : Pn,
              animation: 1,
            }
          );
        }
        updateLayout(t = !1, e = 0) {
          t && !j.isPhone()
            ? 'gr' === window.LAYOUT
              ? this.updateToGrid()
              : this.updateToCredits()
            : this.setLayout(e);
        }
        setLayout(t = 0) {
          j.isPhone()
            ? ((this.x = this.bounds.left / window.innerWidth),
              (this.y = (this.bounds.top - t) / window.innerHeight))
            : 'gr' === window.LAYOUT
            ? ((this.x = this.bBounds.left / window.innerWidth),
              (this.y = this.bBounds.top / window.innerHeight))
            : 'cs' === window.LAYOUT
            ? ((this.x = this.aBounds.left / window.innerWidth),
              (this.y = this.aBounds.top / window.innerHeight))
            : ((this.x = this.bounds.left / window.innerWidth),
              (this.y = this.bounds.top / window.innerHeight)),
            (this.mesh.position.x =
              -this.sizes.width / 2 +
              this.mesh.scale.x / 2 +
              this.x * this.sizes.width),
            (this.mesh.position.y =
              this.sizes.height / 2 -
              this.mesh.scale.y / 2 -
              this.y * this.sizes.height);
        }
        updateScale() {
          (this.height = this.bounds.height / window.innerHeight),
            (this.width = this.bounds.width / window.innerWidth),
            (this.mesh.scale.x = this.sizes.width * this.width),
            (this.mesh.scale.y = this.sizes.height * this.height);
        }
        updateToGrid() {
          const t = ks.utils.interpolate(
              this.aBounds.left,
              this.bBounds.left,
              this.animation
            ),
            e = ks.utils.interpolate(
              this.aBounds.top,
              this.bBounds.top,
              this.animation
            );
          (this.x = t / window.innerWidth),
            (this.y = e / window.innerHeight),
            (this.mesh.position.x =
              -this.sizes.width / 2 +
              this.mesh.scale.x / 2 +
              this.x * this.sizes.width),
            (this.mesh.position.y =
              this.sizes.height / 2 -
              this.mesh.scale.y / 2 -
              this.y * this.sizes.height);
        }
        updateToCredits() {
          const t = ks.utils.interpolate(
              this.bBounds.left,
              this.aBounds.left,
              this.animation
            ),
            e = ks.utils.interpolate(
              this.bBounds.top,
              this.aBounds.top,
              this.animation
            );
          (this.x = t / window.innerWidth),
            (this.y = e / window.innerHeight),
            (this.mesh.position.x =
              -this.sizes.width / 2 +
              this.mesh.scale.x / 2 +
              this.x * this.sizes.width),
            (this.mesh.position.y =
              this.sizes.height / 2 -
              this.mesh.scale.y / 2 -
              this.y * this.sizes.height);
        }
        onResize(t) {
          this.createBounds(t);
        }
        update({medias: t, animating: e, scrollY: i}) {
          const r = e;
          Bs()(t, (t) => {
            j.isPhone() ? this.updateLayout(!1, i) : this.updateLayout(r);
          });
        }
      }
      class Bn {
        constructor() {
          (this.pageWrapper = document.querySelector('.pg')),
            (this.sectionWrapper = document.querySelector('.h-2')),
            (this.contents = document.querySelectorAll('.h-2-info')),
            (this.bars = document.querySelectorAll('.pgn#vt .ln')),
            (this.barsWrapper = document.querySelectorAll('.pgn#vt > div')),
            (this.mediaWrapper = document.querySelectorAll('.h-2-img')),
            (this.mediasElement = document.querySelectorAll('.h-2-src')),
            (this.mediasBorder = document.querySelectorAll('.h-2-border')),
            (this.timelineBars = ks.timeline({paused: !0})),
            (this.timelineIn = ks.timeline({paused: !0})),
            (this.timelineOut = ks.timeline({paused: !0})),
            (this.index = 0),
            (this.exitTime = 0),
            this.bars.forEach((t, e) => {
              this.timelineBars.fromTo(
                t,
                {x: '-100%'},
                {delay: 0.02 * e, duration: 0.5, x: '0%', ease: An},
                0
              );
            });
        }
        show(t = !1, e = 0) {
          const i = ks.timeline({delay: e});
          i.to(this.sectionWrapper, {
            zIndex: 0,
            userSelect: 'none',
            autoAlpha: 1,
            pointerEvents: 'auto',
            duration: 1,
          }),
            i.call((t) => {
              this.timelineBars.play();
            }),
            Bs()(this.mediaWrapper, (e) => {
              i.fromTo(
                e,
                {pointerEvents: 'none'},
                {pointerEvents: 'auto'},
                t ? 1 : 1.5
              );
            }),
            i.set(document.querySelector('.l-a'), {pointerEvents: 'auto'});
        }
        hide(t = !1, e = 0) {
          const i = ks.timeline();
          this.timelineBars.reverse(),
            i.to(this.sectionWrapper, {
              zIndex: -1,
              userSelect: 'none',
              pointerEvents: 'none',
              autoAlpha: 0,
            }),
            t ||
              Bs()(this.mediaWrapper, (t) => {
                i.to(t, {duration: 0.3, pointerEvents: 'none'}, 0);
              });
        }
        onMouseEnter({index: t, medias: e}) {
          (this.timelineIn = ks.timeline()),
            (this.timelineInTitle = ks.timeline()),
            this.mediaWrapper.forEach((i, r) => {
              t === r
                ? (this.timelineIn.to(
                    this.mediasBorder[r],
                    {autoAlpha: 0, ease: Sn, duration: 0.3},
                    0
                  ),
                  this.timelineIn.fromTo(
                    e[r].program.uniforms.s,
                    {value: 0.1},
                    {value: 0, ease: Sn, duration: 0.3},
                    0
                  ),
                  this.timelineInTitle.to(
                    e[r].program.uniforms.o,
                    {value: 1},
                    0
                  ),
                  this.contents[r]
                    .querySelectorAll('.txt > div')
                    .forEach((t) => {
                      this.timelineInTitle.fromTo(
                        t,
                        {y: '101%'},
                        {y: '0%', ease: On, duration: 0.5},
                        0
                      );
                    }),
                  this.timelineInTitle.to(
                    this.bars[r],
                    {duration: 0.01, width: 31},
                    0
                  ))
                : (this.timelineInTitle.fromTo(
                    this.mediasBorder[r],
                    {autoAlpha: 0},
                    {autoAlpha: 1, ease: Sn},
                    0
                  ),
                  this.timelineInTitle.to(
                    e[r].program.uniforms.a,
                    {value: 0, ease: Sn, duration: 0.3},
                    0
                  ));
            }),
            this.barsWrapper.forEach((e, i) => {
              t === i &&
                (this.barsWrapper[i + 1] &&
                  this.timelineIn.to(
                    this.barsWrapper[i + 1],
                    {duration: 0.3, width: 18},
                    0
                  ),
                this.timelineIn.to(
                  this.barsWrapper[i],
                  {duration: 0.3, width: 22},
                  0
                ),
                this.barsWrapper[i - 1] &&
                  this.timelineIn.to(
                    this.barsWrapper[i - 1],
                    {duration: 0.3, width: 18},
                    0
                  ));
            });
        }
        onMouseLeave({index: t, medias: e}) {
          const i = ks.timeline();
          this.mediaWrapper.forEach((r, s) => {
            this.timelineIn.time() / 2 < this.timelineIn.duration() / 2
              ? this.timelineInTitle.reverse()
              : this.contents[s].querySelectorAll('.txt > div').forEach((e) => {
                  s === t && i.to(e, {y: '-101%', ease: On, duration: 0.5}, 0);
                }),
              i.to(
                this.mediasBorder[s],
                {autoAlpha: 0, ease: Sn, duration: 0.3},
                0
              ),
              i.to(
                e[s].program.uniforms.a,
                {value: 1, ease: Sn, duration: 0.3},
                0
              ),
              i.to(
                e[s].program.uniforms.s,
                {value: 0.1, ease: Sn, duration: 0.3},
                0
              ),
              i.to(
                e[s].program.uniforms.o,
                {value: 0, ease: Sn, duration: 0.3},
                0
              ),
              i.to(this.barsWrapper[s], {duration: 0.3, width: 15}, 0);
          }),
            Bs()(this.contents, (t) => {
              t.querySelector('.yr div').classList.contains('soon') &&
                ks.to(t.querySelector('.yr div'), {opacity: 0.6});
            });
        }
        onMouseClick() {
          Bs()(this.contents, (t) => {
            t.querySelector('.yr div').classList.contains('soon') &&
              ks.to(t.querySelector('.yr div'), {opacity: 1});
          });
        }
      }
      class jn {
        constructor() {
          (this.sectionWrapper = document.querySelector('.h-1')),
            (this.contents = {
              titleGroup: document.querySelectorAll('.h-1-l'),
              title: document.querySelectorAll('.h-1-l .t'),
              titleW: document.querySelectorAll('.h-1-lw'),
              link: document.querySelectorAll('.h-1-l .h-1-tl'),
              slash: document.querySelectorAll('.h-1-ln .t'),
              meta: document.querySelectorAll('.h-1-mt .v .vw div'),
              metaRole: document.querySelectorAll('.rl.mt .v .vw div'),
              metaYear: document.querySelectorAll('.yr.mt .v .vw div'),
              metaDisciplines: document.querySelectorAll('.dc.mt .v .vw div'),
              categories: document.querySelectorAll('.h-1-c span'),
            }),
            (this.mediasWrapper = document.querySelectorAll('.h-1-img')),
            (this.mediasElement = document.querySelectorAll('.h-1-src')),
            (this.mediasBorder = document.querySelectorAll(
              '.h-1-img .h-1-border'
            )),
            (this.index = 0),
            (this.bars = document.querySelectorAll('.pgn#hz .ln')),
            (this.barsWrapper = document.querySelectorAll('.pgn#hz > div')),
            (this.timelineBars = ks.timeline({paused: !0})),
            this.bars.forEach((t, e) => {
              this.timelineBars.fromTo(
                t,
                {y: '-100%'},
                {delay: 0.02 * e, duration: 0.5, y: '0%', ease: An},
                0
              );
            });
        }
        show(t = !1, e = 0) {
          const i = ks.timeline({delay: e});
          i.to(this.sectionWrapper, {
            zIndex: 0,
            userSelect: 'none',
            autoAlpha: 1,
            pointerEvents: 'auto',
            duration: 0.4,
          }),
            i.call((t) => {
              this.timelineBars.play();
            }),
            t && i.delay(0.6),
            Bs()(this.contents.categories, (t) => {
              i.fromTo(t, {y: '101%'}, {y: '0%'}, 0);
            }),
            Bs()(this.contents.titleW, (t, e) => {
              i.fromTo(
                t,
                {y: '101%'},
                {delay: 0.1 * e, ease: Tn, duration: 1, y: '0%'},
                0
              );
            }),
            i.set(document.querySelector('.l-b'), {pointerEvents: 'auto'});
        }
        hide(t = 0) {
          const e = ks.timeline({delay: t});
          this.timelineBars.reverse(),
            Bs()(this.contents.categories, (t) => {
              e.fromTo(t, {y: '0%'}, {y: '-101%'}, 0);
            }),
            Bs()(this.contents.titleW, (t) => {
              e.fromTo(t, {y: '0%'}, {y: '-101%'}, 0);
            }),
            e.to(
              this.sectionWrapper,
              {zIndex: -1, userSelect: 'none', autoAlpha: 0},
              0
            );
        }
        onMouseEnter({index: t, medias: e, groups: i}) {
          const r = ks.timeline();
          Bs()(this.contents.link, (e, i) => {
            t !== i && r.to(e, {autoAlpha: 0.1, ease: En, duration: 1}, 0);
          }),
            Bs()(this.contents.slash, (t) => {
              r.to(t, {autoAlpha: 0.1, ease: En, duration: 1}, 0);
            }),
            Bs()(this.contents.metaRole, (e, i) => {
              t === i &&
                r.fromTo(
                  e,
                  {y: '-101%'},
                  {y: '0%', ease: En, duration: 0.5},
                  0
                );
            }),
            Bs()(this.contents.metaYear, (e, i) => {
              t === i &&
                r.fromTo(
                  e,
                  {y: '-101%'},
                  {y: '0%', ease: En, duration: 0.5},
                  0
                );
            }),
            Bs()(this.contents.metaDisciplines, (e, i) => {
              t === i &&
                r.fromTo(
                  e,
                  {y: '-101%'},
                  {y: '0%', ease: En, duration: 0.5},
                  0
                );
            }),
            this.mediasWrapper.forEach((s, n) => {
              this.index !== n &&
                r.to(e[n].mesh.position, {z: 0, duration: 0}, -0.01),
                t === n &&
                  (r.to(e[n].mesh.position, {z: 0.001, duration: 0}, -0.01),
                  r.to(
                    e[n].program.uniforms.s,
                    {value: 0.1, ease: Mn, duration: 0.3},
                    0
                  ),
                  r.to(
                    e[n].mesh.program.uniforms.o,
                    {value: 1, duration: 0.3, ease: Mn},
                    0
                  ));
              for (let e = 0; e < i.length; e++)
                for (let s = 0; s < i[e].length; s++)
                  if (i[e][s] === t) {
                    i[e].forEach((t) => {
                      r.to(
                        this.mediasBorder[t],
                        {autoAlpha: 0, duration: 0.3, ease: Mn},
                        0
                      );
                    });
                  } else
                    r.to(
                      this.mediasBorder[n],
                      {autoAlpha: 1, duration: 0.3, ease: Mn},
                      0
                    );
              t !== n &&
                r.to(
                  e[n].mesh.program.uniforms.a,
                  {value: 0, duration: 0.3, ease: Mn},
                  0
                );
            }),
            this.barsWrapper.forEach((e, i) => {
              t === i &&
                (this.barsWrapper[i + 1] &&
                  ks.to(this.barsWrapper[i + 1], {height: 18}),
                ks.to(this.barsWrapper[i], {height: 22}),
                this.barsWrapper[i - 1] &&
                  ks.to(this.barsWrapper[i - 1], {height: 18}));
            });
        }
        onMouseLeave({index: t, medias: e}) {
          const i = ks.timeline();
          Bs()(this.contents.link, (t) => {
            i.to(t, {autoAlpha: 1, ease: En, duration: 1}, 0);
          }),
            Bs()(this.contents.slash, (t) => {
              i.to(t, {autoAlpha: 1, ease: En, duration: 1}, 0);
            }),
            Bs()(this.contents.metaRole, (e, r) => {
              t === r && i.to(e, {y: '101%', ease: En, duration: 0.5}, 0);
            }),
            Bs()(this.contents.metaYear, (e, r) => {
              t === r && i.to(e, {y: '101%', ease: En, duration: 0.5}, 0);
            }),
            Bs()(this.contents.metaDisciplines, (e, r) => {
              t === r && i.to(e, {y: '101%', ease: En, duration: 0.5}, 0);
            }),
            this.mediasWrapper.forEach((t, r) => {
              i.to(
                e[r].mesh.program.uniforms.o,
                {value: 0, duration: 0.3, ease: Mn},
                0
              ),
                i.to(
                  e[r].program.uniforms.s,
                  {value: 0, ease: Mn, duration: 0.3},
                  0
                ),
                i.to(
                  e[r].mesh.program.uniforms.a,
                  {value: 1, duration: 0.3, ease: Mn},
                  0
                ),
                i.to(
                  this.mediasBorder[r],
                  {autoAlpha: 0, duration: 0.3, ease: Mn},
                  0
                );
            }),
            this.barsWrapper.forEach((t, e) => {
              ks.to(this.barsWrapper[e], {height: 15});
            }),
            Bs()(this.contents.metaYear, (t, e) => {
              t.classList.contains('soon') && ks.to(t, {opacity: 0.4});
            });
        }
        filterHoverEnter(t, e) {
          Bs()(this.contents.link, (t, i) => {
            t.classList.contains(e) || ks.to(t, {autoAlpha: 0.1});
          }),
            Bs()(this.contents.slash, (t, e) => {
              ks.to(t, {autoAlpha: 0.1});
            });
        }
        filterHoverLeave() {
          this.contents.link.forEach((t) => {
            ks.to(t, {autoAlpha: 1});
          }),
            Bs()(this.contents.slash, (t, e) => {
              ks.to(t, {autoAlpha: 1});
            });
        }
        onMouseClick(t) {
          Bs()(this.contents.metaYear, (t, e) => {
            t.classList.contains('soon') && ks.to(t, {opacity: 1});
          });
        }
      }
      class qn {
        constructor({template: t, dom: e}) {
          (this.template = t),
            (this.dom = e),
            (this.x = {start: 0, distance: 0, end: 0}),
            (this.y = {start: 0, distance: 0, end: 0}),
            (this.width = window.innerWidth),
            (this.height = window.innerHeight),
            (this.time = 0),
            (this.isPlaying = !0),
            (this.isFromProjectToHome = !1),
            (this.isFromAboutToHome = !1),
            this.createRenderer(),
            this.createCamera(),
            this.createScene(),
            this.onResize();
        }
        createCamera() {
          (this.camera = new I(this.gl)), (this.camera.position.z = 5);
        }
        createRenderer() {
          (this.renderer = new B({
            dpr: Math.min(window.devicePixelRatio, 2),
            alpha: !0,
          })),
            (this.gl = this.renderer.gl),
            this.gl.clearColor(0, 0, 0, 0),
            this.dom.appendChild(this.gl.canvas);
        }
        createScene() {
          this.scene = new C();
        }
        createHome() {
          this.home = new (class {
            constructor({
              gl: t,
              scene: e,
              sizes: i,
              template: r,
              transition: s,
            }) {
              (this.id = 'home'),
                (this.gl = t),
                (this.scene = e),
                (this.sizes = i),
                (this.transition = s),
                (this.template = r),
                (this.animating = !1),
                (this.enable = !1),
                (this.paused = !1),
                (this.index = 0),
                (this.scroll = {
                  ease: 0.07,
                  position: 0,
                  current: 0,
                  target: 0,
                  limit: 0,
                }),
                (this.group = new C()),
                (this.grid = new Bn()),
                (this.credits = new jn()),
                (this.g = [
                  [2, 7, 12],
                  [0, 1, 6],
                  [3, 4, 8],
                  [9, 13, 14],
                  [5, 10, 11],
                ]),
                (this.pageWrapper = document.querySelector('.pg')),
                (this.nav = {
                  a: document.querySelector('.l-a'),
                  b: document.querySelector('.l-b'),
                  i: document.querySelector('.l-i'),
                }),
                (this.lGrid = {
                  wrapper: document.querySelector('.h-2'),
                  mediasWrapper: document.querySelectorAll('.h-2-img'),
                  content: document.querySelectorAll('.h-2-info'),
                  src: document.querySelectorAll('.h-2-src'),
                }),
                (this.lCredits = {
                  wrapper: document.querySelector('.h-1'),
                  content: document.querySelectorAll('.h-1-l .h-1-tl'),
                  contentMeta: document.querySelectorAll('.h-1-mt .v div'),
                  mediasWrapper: document.querySelectorAll('.h-1-img'),
                  src: document.querySelectorAll('.h-1-src'),
                  cats: document.querySelectorAll('.h-1-c'),
                }),
                (window.LAYOUT = window.LAYOUT ?? 'cs'),
                j.isPhone() ||
                  this.nav.i.classList.add('gr' === window.LAYOUT ? 'b' : 'a'),
                j.isPhone()
                  ? ((this.mediasWrapper = document.querySelector('#h > ul')),
                    (this.mediasElements = document.querySelectorAll('.h-src')))
                  : ((this.mediasWrapper =
                      'gr' === window.LAYOUT
                        ? this.lGrid.wrapper
                        : this.lCredits.mediasWrapper),
                    (this.mediasElements =
                      'gr' === window.LAYOUT
                        ? this.lGrid.src
                        : this.lCredits.src)),
                this.getLayout(),
                this.createGeometry(),
                this.createGallery(),
                this.onResize({sizes: this.sizes}),
                this.group.setParent(this.scene),
                this.show(),
                j.isPhone()
                  ? this.mobileEventListeners()
                  : (this.gridEventListeners(), this.creditsEventListeners());
            }
            createGeometry() {
              this.geometry = new G(this.gl);
            }
            createGallery() {
              this.medias = Bs()(
                this.mediasElements,
                (t, e) =>
                  new Dn({
                    element: t,
                    layoutA: this.lCredits.src[e],
                    layoutB: this.lGrid.src[e],
                    groups: this.g,
                    geometry: this.geometry,
                    index: e,
                    gl: this.gl,
                    scene: this.group,
                    sizes: this.sizes,
                  })
              );
            }
            show() {
              Bs()(this.medias, (t) => {
                t.show(!1, this.index);
              }),
                j.isPhone()
                  ? ks.to(document.querySelector('#h > ul'), {autoAlpha: 1})
                  : 'cs' === window.LAYOUT
                  ? this.credits.show(!1, 1.4)
                  : (ks.set(this.lCredits.wrapper, {
                      zIndex: -1,
                      userSelect: 'none',
                      autoAlpha: 0,
                    }),
                    this.grid.show()),
                (this.enable = !0);
            }
            async hide(t) {
              (this.enable = !1),
                j.isPhone()
                  ? (ks.to(document.querySelector('#h > ul'), {autoAlpha: 0}),
                    Bs()(this.medias, (t) => {
                      t.hide(!0, this.index, 0);
                    }))
                  : ('cs' === window.LAYOUT
                      ? this.credits.hide()
                      : this.grid.hide(),
                    !0 === t
                      ? Bs()(this.medias, (t) => {
                          t.hide(!0, this.index, 0.8);
                        })
                      : Bs()(this.medias, (t) => {
                          t.hide(!1, this.index, 0.3);
                        }));
            }
            getLayout() {
              j.isPhone() ||
                (this.nav.a.addEventListener('click', () => {
                  ks.set(this.nav.b, {pointerEvents: 'none'}),
                    this.layoutA(),
                    (window.LAYOUT = 'cs');
                }),
                this.nav.b.addEventListener('click', () => {
                  ks.set(this.nav.a, {pointerEvents: 'none'}),
                    this.layoutB(),
                    (window.LAYOUT = 'gr');
                }));
            }
            layoutA() {
              this.nav.i.classList.contains('b') &&
                this.nav.i.classList.remove('b'),
                (this.animating = !0),
                this.nav.i.classList.add('a'),
                this.grid.hide(),
                Bs()(this.medias, (t) => {
                  t.animateOut('a', 0);
                }),
                this.credits.show(!0),
                (this.enable = !0);
            }
            layoutB() {
              this.nav.i.classList.contains('a') &&
                this.nav.i.classList.remove('a'),
                (this.animating = !0),
                this.nav.i.classList.add('b'),
                this.credits.hide(),
                Bs()(this.medias, (t) => {
                  t.animateIn('b', 0.3);
                }),
                this.grid.show(!0),
                (this.enable = !0);
            }
            onResize(t) {
              (this.galleryBounds = this.pageWrapper.getBoundingClientRect()),
                (this.sizes = t.sizes),
                (this.gallerySizes = {
                  height:
                    (this.galleryBounds.height / window.innerHeight) *
                    this.sizes.height,
                  width:
                    (this.galleryBounds.width / window.innerWidth) *
                    this.sizes.width,
                }),
                j.isPhone() && (this.scroll.last = this.scroll.target = 0),
                Bs()(this.medias, (e) => e.onResize(t)),
                j.isPhone() &&
                  (this.scroll.limit =
                    document.querySelector('.pg > ul').clientHeight -
                    window.innerHeight);
            }
            onChange(t) {
              this.index = t;
            }
            gridEventListeners() {
              Bs()(this.lGrid.mediasWrapper, (t, e) => {
                t.addEventListener('mouseenter', () => {
                  this.enable &&
                    (this.onChange(e),
                    this.grid.onMouseEnter({
                      media: t,
                      index: e,
                      medias: this.medias,
                    }));
                }),
                  t.addEventListener('mouseleave', () => {
                    this.enable &&
                      this.grid.onMouseLeave({
                        media: t,
                        index: e,
                        medias: this.medias,
                      });
                  }),
                  t.addEventListener('click', () => {
                    this.enable && this.grid.onMouseClick();
                  });
              });
            }
            creditsEventListeners() {
              Bs()(this.lCredits.content, (t, e) => {
                t.addEventListener('mouseenter', () => {
                  this.enable &&
                    (this.onChange(e),
                    this.credits.onMouseEnter({
                      index: e,
                      medias: this.medias,
                      groups: this.g,
                    }));
                }),
                  t.addEventListener('mouseleave', () => {
                    this.enable &&
                      this.credits.onMouseLeave({
                        index: e,
                        medias: this.medias,
                        groups: this.g,
                      });
                  }),
                  t.addEventListener('click', () => {
                    this.enable && this.credits.onMouseClick();
                  });
              }),
                Bs()(this.lCredits.cats, (t, e) => {
                  t.addEventListener('mouseenter', () => {
                    0 === e
                      ? this.credits.filterHoverEnter(e, 'pm')
                      : this.credits.filterHoverEnter(e, 'wd');
                  }),
                    t.addEventListener('mouseleave', () =>
                      this.credits.filterHoverLeave(e, '')
                    );
                });
            }
            mobileEventListeners() {
              this.medias.forEach((t, e) => {
                this.onChange(e);
              });
            }
            onTouchDown(t) {
              j.isPhone() &&
                ((this.isDown = !0),
                (this.scroll.position = this.scroll.current),
                (this.start = t.touches ? t.touches[0].clientY : t.clientY));
            }
            onTouchMove(t) {
              if (!j.isPhone() || !this.isDown) return;
              const e = t.touches ? t.touches[0].clientY : t.clientY,
                i = 3 * (this.start - e);
              this.scroll.target = this.scroll.position + i;
            }
            onTouchUp(t) {
              j.isPhone() && (this.isDown = !1);
            }
            onMouseWheel({pixelY: t}) {
              const e = 0.5 * t;
              this.scroll.target += e;
            }
            update() {
              j.isPhone() &&
                ((this.scroll.target = qs(
                  0,
                  this.scroll.limit,
                  this.scroll.target
                )),
                (this.scroll.current = js(
                  this.scroll.current,
                  this.scroll.target,
                  this.scroll.ease
                ))),
                (this.scroll.current = Math.floor(this.scroll.current)),
                this.scroll.current < 0.1 && (this.scroll.current = 0),
                Us(this.medias, (t) => {
                  j.isPhone()
                    ? t.update({
                        medias: this.mediasElements,
                        scrollY: this.scroll.current,
                      })
                    : 'gr' === window.LAYOUT
                    ? t.update({
                        medias: this.lGrid.src,
                        animating: this.animating,
                      })
                    : t.update({
                        medias: this.lCredits.src,
                        animating: this.animating,
                      });
                }),
                j.isPhone() && (this.scroll.last = this.scroll.current);
            }
            destroy() {
              this.scene.removeChild(this.group);
            }
          })({
            gl: this.gl,
            scene: this.scene,
            sizes: this.sizes,
            template: this.template,
          });
        }
        destroyHome() {
          this.home && (this.home.destroy(), (this.home = null));
        }
        createAbout() {
          this.about = new (class {
            constructor({gl: t, scene: e, sizes: i}) {
              (this.id = 'about'),
                (this.group = new C()),
                (this.gl = t),
                (this.sizes = i),
                (this.scene = e),
                this.group.setParent(this.scene),
                this.show();
            }
            show() {}
            hide() {}
            update() {}
            destroy() {
              this.scene.removeChild(this.group);
            }
          })({
            gl: this.gl,
            scene: this.scene,
            renderer: this.renderer,
            camera: this.camera,
            sizes: this.sizes,
          });
        }
        destroyAbout() {
          this.about && (this.about.destroy(), (this.about = null));
        }
        createProject() {
          this.project = new (class {
            constructor({gl: t, scene: e, sizes: i}) {
              (this.id = 'project'),
                (this.element = document.querySelector('.w-m')),
                (this.wrapperElement = document.querySelector('.w-wp')),
                (this.mediasElement = document.querySelectorAll('.w-g-i')),
                (this.gl = t),
                (this.scene = e),
                (this.sizes = i),
                (this.geometry = new G(this.gl)),
                (this.group = new C()),
                (this.enable = !1),
                (this.scroll = {
                  ease: 0.07,
                  position: 0,
                  last: 0,
                  current: 0,
                  target: 0,
                  limit: 0,
                }),
                j.isPhone() && (this.scroll.ease = 0.07),
                this.createGeometry(),
                this.createGallery(),
                this.createTexture(),
                this.createProgram(),
                this.createMesh(),
                this.onResize({sizes: this.sizes}),
                this.group.setParent(this.scene),
                this.show();
            }
            createTexture() {
              const t = this.element.getAttribute('data-src');
              (this.t = window.TEXTURES[t]),
                this.element.removeAttribute('data-src'),
                this.element.getAttribute('src') &&
                  this.element.setAttribute('src', 'data:,');
            }
            createGeometry() {
              this.geometry = new G(this.gl);
            }
            createGallery() {
              this.medias = Bs()(
                this.mediasElement,
                (t, e) =>
                  new (class {
                    constructor({
                      element: t,
                      geometry: e,
                      gl: i,
                      index: r,
                      scene: s,
                      sizes: n,
                    }) {
                      (this.element = t),
                        (this.geometry = e),
                        (this.gl = i),
                        (this.index = r),
                        (this.scene = s),
                        (this.sizes = n),
                        this.createTexture(),
                        this.createProgram(),
                        this.createMesh(),
                        this.createBounds({sizes: this.sizes});
                    }
                    createTexture() {
                      const t = this.element.getAttribute('data-src');
                      (this.texture = window.TEXTURES[t]),
                        this.element.removeAttribute('data-src'),
                        this.element.getAttribute('src') &&
                          this.element.setAttribute('src', 'data:,');
                    }
                    createProgram() {
                      this.program = new Ys(this.gl, {
                        extensions: {
                          derivatives:
                            '#extension GL_OES_standard_derivatives: enable',
                        },
                        transparent: !0,
                        fragment:
                          'precision highp float;\n#define GLSLIFY 1\nuniform sampler2D t;\nuniform float a;\nuniform float f;\nuniform bool is;\nvarying vec2 u;\nvoid main() {\n  vec4 i = texture2D(t,u);\n  float b = step(0.,1.-((u.y)/2.+f))*step(0.,u.y/2.+f);\n  vec4 c = mix(vec4(vec3(255.),0.), i, b);\n  gl_FragColor = is?i:c;\n  gl_FragColor.a = a;\n}\n',
                        vertex:
                          '#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nvarying vec2 u;\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  u=(uv-vec2(.5))*1.+vec2(.5);\n}\n',
                        uniforms: {
                          t: {value: this.texture},
                          a: {value: 0},
                          f: {value: 0},
                          is: {value: !!j.isPhone()},
                        },
                      });
                    }
                    createMesh() {
                      (this.mesh = new Ks(this.gl, {
                        geometry: this.geometry,
                        program: this.program,
                      })),
                        this.mesh.setParent(this.scene);
                    }
                    createBounds({sizes: t}) {
                      (this.sizes = t),
                        (this.bounds = this.element.getBoundingClientRect()),
                        this.updateScale(),
                        this.updateX(),
                        this.updateY();
                    }
                    show() {
                      ks.fromTo(
                        this.program.uniforms.a,
                        {value: 0},
                        {value: 1, duration: 0.5}
                      );
                    }
                    hide(t) {
                      const e = ks.timeline();
                      this.index !== t &&
                        e.to(this.program.uniforms.a, {
                          value: 0,
                          duration: 0.5,
                        }),
                        this.index === t &&
                          e.to(
                            this.program.uniforms.f,
                            {value: -0.8, duration: 1, ease: Fn},
                            0.5
                          );
                    }
                    onResize(t, e) {
                      this.createBounds(t), this.updateX(0), this.updateY(e);
                    }
                    updateScale() {
                      (this.height = this.bounds.height / window.innerHeight),
                        (this.width = this.bounds.width / window.innerWidth),
                        (this.mesh.scale.x = this.sizes.width * this.width),
                        (this.mesh.scale.y = this.sizes.height * this.height);
                    }
                    updateX(t = 0) {
                      (this.x = (this.bounds.left + t) / window.innerWidth),
                        (this.mesh.position.x =
                          -this.sizes.width / 2 +
                          this.mesh.scale.x / 2 +
                          this.x * this.sizes.width);
                    }
                    updateY(t = 0) {
                      (this.y = (this.bounds.top - t) / window.innerHeight),
                        (this.mesh.position.y =
                          this.sizes.height / 2 -
                          this.mesh.scale.y / 2 -
                          this.y * this.sizes.height);
                    }
                    update(t) {
                      window.Intro ||
                        (this.updateScale(), this.updateX(), this.updateY(t));
                    }
                  })({
                    element: t,
                    geometry: this.geometry,
                    index: e,
                    gl: this.gl,
                    scene: this.group,
                    sizes: this.sizes,
                  })
              );
            }
            createProgram() {
              this.program = new Ys(this.gl, {
                extensions: {
                  derivatives: '#extension GL_OES_standard_derivatives: enable',
                },
                transparent: !0,
                fragment:
                  'precision highp float;\n#define GLSLIFY 1\nuniform sampler2D t;\nuniform float a;\nuniform float f;\nuniform bool is;\nvarying vec2 u;\n\nvoid main() {\n    vec4 i = texture2D(t,1.-u);\n    float b = step(0.,1.-((u.y)/2.+f))*step(0.,u.y/2.+f);\n    vec4 c = mix(vec4(vec3(255.),0.), i, b);\n    gl_FragColor = is ? (i*b) : c;\n    gl_FragColor.a = a;\n}',
                vertex:
                  '#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float s;\nvarying vec2 u;\n\nvoid main() {\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    u=(uv-vec2(.5))*(-s+1.)+vec2(.5);;\n}\n',
                uniforms: {
                  t: {value: this.t},
                  a: {value: 0},
                  s: {value: 0.1},
                  f: {value: -0.8},
                  is: {value: !!j.isPhone()},
                },
              });
            }
            createMesh() {
              (this.mesh = new Ks(this.gl, {
                geometry: this.geometry,
                program: this.program,
              })),
                this.mesh.setParent(this.scene),
                (this.mesh.rotation.z = Math.PI);
            }
            createBounds({sizes: t}) {
              (this.sizes = t),
                (this.bounds = this.element.getBoundingClientRect()),
                this.updateScale(),
                this.updateX(),
                this.updateY();
            }
            show(t = !1) {
              j.isPhone()
                ? ks.set(this.program.uniforms.f, {value: 0})
                : (ks.to(this.program.uniforms.a, {value: 1, duration: 0}),
                  ks.to(this.program.uniforms.f, {
                    value: 0,
                    duration: 1,
                    ease: In,
                  })),
                ks.to(this.program.uniforms.s, {
                  value: 0,
                  duration: 0.9,
                  ease: kn,
                }),
                t
                  ? (Bs()(this.medias, (t, e) => {
                      ks.to(t.program.uniforms.a, {value: 1});
                    }),
                    (this.enable = !0))
                  : (ks.to(this.program.uniforms.a, {value: 1}),
                    Bs()(this.medias, (t, e) => {
                      t.show();
                    }),
                    (this.enable = !0));
            }
            hide(t) {
              ks.to(this.program.uniforms.a, {value: 0}),
                Bs()(this.medias, (t, e) => {
                  e !== this.medias.length - 1 || j.isPhone()
                    ? t.hide()
                    : t.hide(e);
                }),
                (this.enable = !1);
            }
            onResize(t) {
              (this.sizes = t.sizes),
                (this.wrapperBounds =
                  this.wrapperElement.getBoundingClientRect()),
                (this.scroll.current = this.scroll.target = 0),
                this.createBounds({sizes: this.sizes}),
                this.updateX(),
                this.updateY(),
                Bs()(this.medias, (e) => e.onResize(t, this.scroll.current)),
                (this.scroll.limit =
                  this.wrapperElement.clientHeight - window.innerHeight);
            }
            onTouchDown(t) {
              j.isPhone() &&
                ((this.isDown = !0),
                (this.scroll.position = this.scroll.current),
                (this.start = t.touches ? t.touches[0].clientY : t.clientY));
            }
            onTouchMove(t) {
              if (!j.isPhone() || !this.isDown) return;
              const e = t.touches ? t.touches[0].clientY : t.clientY,
                i = 3 * (this.start - e);
              this.scroll.target = this.scroll.position + i;
            }
            onTouchUp() {
              j.isPhone() && (this.isDown = !1);
            }
            onMouseWheel({pixelY: t}) {
              const e = 0.5 * t;
              this.scroll.target += e;
            }
            updateScale() {
              (this.height = this.bounds.height / window.innerHeight),
                (this.width = this.bounds.width / window.innerWidth),
                (this.mesh.scale.x = this.sizes.width * this.width),
                (this.mesh.scale.y = this.sizes.height * this.height);
            }
            updateX() {
              window.Intro ||
                ((this.x = this.bounds.left / window.innerWidth),
                (this.mesh.position.x =
                  -this.sizes.width / 2 +
                  this.mesh.scale.x / 2 +
                  this.x * this.sizes.width));
            }
            updateY(t = 0) {
              window.Intro ||
                ((this.y = (this.bounds.top - t) / window.innerHeight),
                (this.mesh.position.y =
                  this.sizes.height / 2 -
                  this.mesh.scale.y / 2 -
                  this.y * this.sizes.height));
            }
            update() {
              window.Intro ||
                ((this.scroll.target = qs(
                  0,
                  this.scroll.limit,
                  this.scroll.target
                )),
                (this.scroll.current = js(
                  this.scroll.current,
                  this.scroll.target,
                  this.scroll.ease
                )),
                (this.scroll.current = Math.floor(this.scroll.current)),
                this.scroll.current < 0.1 && (this.scroll.current = 0),
                this.enable &&
                  (this.updateY(this.scroll.current),
                  Bs()(this.medias, (t) => {
                    t.update(this.scroll.current);
                  })),
                (this.scroll.last = this.scroll.current));
            }
            destroy() {
              this.scene.removeChild(this.group);
            }
          })({gl: this.gl, scene: this.scene, sizes: this.sizes});
        }
        destroyProject() {
          this.project && (this.project.destroy(), (this.project = null));
        }
        onPreloaded() {
          this.onChangeEnd(this.template);
        }
        onChangeStart(t, e) {
          (this.url = e),
            (this.isFromHomeToProject =
              'home' === this.template && e.indexOf('project') > -1),
            (this.isFromProjectToHome =
              'project' === this.template && e.indexOf('') > -1),
            (this.isFromAboutToHome =
              'about' === this.template && e.indexOf('') > -1),
            this.home && this.home.hide(this.isFromHomeToProject),
            this.about && this.about.hide(),
            this.project && this.project.hide();
        }
        onChangeEnd(t) {
          'about' === t
            ? this.createAbout()
            : this.about && this.destroyAbout(),
            'project' === t
              ? (this.url === window.location.href && this.destroyProject(),
                this.createProject())
              : this.project && this.destroyProject(),
            'home' === t ? this.createHome() : this.home && this.destroyHome(),
            (this.template = t);
        }
        onResize() {
          this.renderer.setSize(window.innerWidth, window.innerHeight),
            this.camera.perspective({
              aspect: window.innerWidth / window.innerHeight,
            });
          const t = this.camera.fov * (Math.PI / 180),
            e = 2 * Math.tan(t / 2) * this.camera.position.z,
            i = e * this.camera.aspect;
          this.sizes = {width: i, height: e};
          const r = {sizes: this.sizes};
          this.home && this.home.onResize(r),
            this.project && this.project.onResize(r);
        }
        onTouchDown(t) {
          j.isPhone() &&
            ((this.isDown = !0),
            this.home && this.home.onTouchDown(t),
            this.project && this.project.onTouchDown(t));
        }
        onTouchMove(t) {
          j.isPhone() &&
            this.isDown &&
            (this.home && this.home.onTouchMove(t),
            this.project && this.project.onTouchMove(t));
        }
        onTouchUp(t) {
          j.isPhone() &&
            ((this.isDown = !1),
            this.home && this.home.onTouchUp(t),
            this.project && this.project.onTouchUp(t));
        }
        onMouseWheel(t) {
          this.project && this.project.onMouseWheel(t),
            this.home && this.home.onMouseWheel(t);
        }
        update(t) {
          this.about && this.about.update(),
            this.project && this.project.update(),
            this.home && this.home.update(),
            this.renderer.render({scene: this.scene, camera: this.camera});
        }
      }
      const Un = new Uint8Array(4);
      function Nn(t) {
        return 0 == (t & (t - 1));
      }
      let Wn = 1;
      class Yn {
        constructor(
          t,
          {
            image: e,
            target: i = t.TEXTURE_2D,
            type: r = t.UNSIGNED_BYTE,
            format: s = t.RGBA,
            internalFormat: n = s,
            wrapS: o = t.CLAMP_TO_EDGE,
            wrapT: a = t.CLAMP_TO_EDGE,
            generateMipmaps: h = !0,
            minFilter: u = h ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
            magFilter: l = t.LINEAR,
            premultiplyAlpha: c = !1,
            unpackAlignment: d = 4,
            flipY: p = i == t.TEXTURE_2D,
            anisotropy: f = 0,
            level: m = 0,
            width: g,
            height: v = g,
          } = {}
        ) {
          (this.gl = t),
            (this.id = Wn++),
            (this.image = e),
            (this.target = i),
            (this.type = r),
            (this.format = s),
            (this.internalFormat = n),
            (this.minFilter = u),
            (this.magFilter = l),
            (this.wrapS = o),
            (this.wrapT = a),
            (this.generateMipmaps = h),
            (this.premultiplyAlpha = c),
            (this.unpackAlignment = d),
            (this.flipY = p),
            (this.anisotropy = Math.min(
              f,
              this.gl.renderer.parameters.maxAnisotropy
            )),
            (this.level = m),
            (this.width = g),
            (this.height = v),
            (this.texture = this.gl.createTexture()),
            (this.store = {image: null}),
            (this.glState = this.gl.renderer.state),
            (this.state = {}),
            (this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR),
            (this.state.magFilter = this.gl.LINEAR),
            (this.state.wrapS = this.gl.REPEAT),
            (this.state.wrapT = this.gl.REPEAT),
            (this.state.anisotropy = 0);
        }
        bind() {
          this.glState.textureUnits[this.glState.activeTextureUnit] !==
            this.id &&
            (this.gl.bindTexture(this.target, this.texture),
            (this.glState.textureUnits[this.glState.activeTextureUnit] =
              this.id));
        }
        update(t = 0) {
          const e = !(this.image === this.store.image && !this.needsUpdate);
          if (
            ((e || this.glState.textureUnits[t] !== this.id) &&
              (this.gl.renderer.activeTexture(t), this.bind()),
            e)
          ) {
            if (
              ((this.needsUpdate = !1),
              this.flipY !== this.glState.flipY &&
                (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
                (this.glState.flipY = this.flipY)),
              this.premultiplyAlpha !== this.glState.premultiplyAlpha &&
                (this.gl.pixelStorei(
                  this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                  this.premultiplyAlpha
                ),
                (this.glState.premultiplyAlpha = this.premultiplyAlpha)),
              this.unpackAlignment !== this.glState.unpackAlignment &&
                (this.gl.pixelStorei(
                  this.gl.UNPACK_ALIGNMENT,
                  this.unpackAlignment
                ),
                (this.glState.unpackAlignment = this.unpackAlignment)),
              this.minFilter !== this.state.minFilter &&
                (this.gl.texParameteri(
                  this.target,
                  this.gl.TEXTURE_MIN_FILTER,
                  this.minFilter
                ),
                (this.state.minFilter = this.minFilter)),
              this.magFilter !== this.state.magFilter &&
                (this.gl.texParameteri(
                  this.target,
                  this.gl.TEXTURE_MAG_FILTER,
                  this.magFilter
                ),
                (this.state.magFilter = this.magFilter)),
              this.wrapS !== this.state.wrapS &&
                (this.gl.texParameteri(
                  this.target,
                  this.gl.TEXTURE_WRAP_S,
                  this.wrapS
                ),
                (this.state.wrapS = this.wrapS)),
              this.wrapT !== this.state.wrapT &&
                (this.gl.texParameteri(
                  this.target,
                  this.gl.TEXTURE_WRAP_T,
                  this.wrapT
                ),
                (this.state.wrapT = this.wrapT)),
              this.anisotropy &&
                this.anisotropy !== this.state.anisotropy &&
                (this.gl.texParameterf(
                  this.target,
                  this.gl.renderer.getExtension(
                    'EXT_texture_filter_anisotropic'
                  ).TEXTURE_MAX_ANISOTROPY_EXT,
                  this.anisotropy
                ),
                (this.state.anisotropy = this.anisotropy)),
              this.image)
            ) {
              if (
                (this.image.width &&
                  ((this.width = this.image.width),
                  (this.height = this.image.height)),
                this.target === this.gl.TEXTURE_CUBE_MAP)
              )
                for (let t = 0; t < 6; t++)
                  this.gl.texImage2D(
                    this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                    this.level,
                    this.internalFormat,
                    this.format,
                    this.type,
                    this.image[t]
                  );
              else if (ArrayBuffer.isView(this.image))
                this.gl.texImage2D(
                  this.target,
                  this.level,
                  this.internalFormat,
                  this.width,
                  this.height,
                  0,
                  this.format,
                  this.type,
                  this.image
                );
              else if (this.image.isCompressedTexture)
                for (let t = 0; t < this.image.length; t++)
                  this.gl.compressedTexImage2D(
                    this.target,
                    t,
                    this.internalFormat,
                    this.image[t].width,
                    this.image[t].height,
                    0,
                    this.image[t].data
                  );
              else
                this.gl.texImage2D(
                  this.target,
                  this.level,
                  this.internalFormat,
                  this.format,
                  this.type,
                  this.image
                );
              this.generateMipmaps &&
                (this.gl.renderer.isWebgl2 ||
                (Nn(this.image.width) && Nn(this.image.height))
                  ? this.gl.generateMipmap(this.target)
                  : ((this.generateMipmaps = !1),
                    (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE),
                    (this.minFilter = this.gl.LINEAR))),
                this.onUpdate && this.onUpdate();
            } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
              for (let t = 0; t < 6; t++)
                this.gl.texImage2D(
                  this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  0,
                  this.gl.RGBA,
                  1,
                  1,
                  0,
                  this.gl.RGBA,
                  this.gl.UNSIGNED_BYTE,
                  Un
                );
            else
              this.width
                ? this.gl.texImage2D(
                    this.target,
                    this.level,
                    this.internalFormat,
                    this.width,
                    this.height,
                    0,
                    this.format,
                    this.type,
                    null
                  )
                : this.gl.texImage2D(
                    this.target,
                    0,
                    this.gl.RGBA,
                    1,
                    1,
                    0,
                    this.gl.RGBA,
                    this.gl.UNSIGNED_BYTE,
                    Un
                  );
            this.store.image = this.image;
          }
        }
      }
      const Gn = (t) => {
        const e = new Set();
        do {
          for (const i of Reflect.ownKeys(t)) e.add([t, i]);
        } while ((t = Reflect.getPrototypeOf(t)) && t !== Object.prototype);
        return e;
      };
      function Xn(t, {include: e, exclude: i} = {}) {
        const r = (t) => {
          const r = (e) => ('string' == typeof e ? t === e : e.test(t));
          return e ? e.some(r) : !i || !i.some(r);
        };
        for (const [e, i] of Gn(t.constructor.prototype)) {
          if ('constructor' === i || !r(i)) continue;
          const s = Reflect.getOwnPropertyDescriptor(e, i);
          s && 'function' == typeof s.value && (t[i] = t[i].bind(t));
        }
        return t;
      }
      var Vn = i(1590),
        Hn = i.n(Vn);
      const $n = class extends Hn() {
        constructor({classes: t, element: e, elements: i}) {
          super(),
            Xn(this),
            (this.classes = t),
            (this.element =
              e instanceof window.HTMLElement ? e : document.querySelector(e)),
            (this.elements = {}),
            s()(i, (t, e) => {
              t instanceof window.HTMLElement ||
              t instanceof window.NodeList ||
              Array.isArray(t)
                ? (this.elements[e] = t)
                : ((this.elements[e] = this.element.querySelectorAll(t)),
                  0 === this.elements[e].length
                    ? (this.elements[e] = null)
                    : 1 === this.elements[e].length &&
                      (this.elements[e] = this.element.querySelector(t)));
            }),
            this.addEventListeners();
        }
        addEventListeners() {}
        removeEventListeners() {}
        destroy() {
          this.removeEventListeners();
        }
      };
      class Zn extends $n {
        constructor({canvas: t}) {
          super({element: '.load', elements: {bars: '.load__bars .bars'}}),
            (this.canvas = t),
            (this.length = 0),
            (window.TEXTURES = {}),
            this.createLoader();
        }
        createLoader() {
          this.animation(),
            s()(window.ASSETS, (t) => {
              const e = new Yn(this.canvas.gl, {generateMipmaps: !1}),
                i = new window.Image();
              (i.crossOrigin = 'anonymous'),
                (i.src = t),
                (i.onload = (t) => {
                  (e.image = i), this.onAssetLoaded();
                }),
                (window.TEXTURES[t] = e);
            });
        }
        onAssetLoaded(t) {
          this.length++;
          1 === this.length / window.ASSETS.length && this.onLoaded();
        }
        animation() {
          this.timelineBar = ks.timeline({repeat: -1});
          for (let t = 0; t < this.elements.bars.length; t++)
            this.elements.bars[0].querySelectorAll('div').forEach((t, e) => {
              this.timelineBar.fromTo(
                t,
                {y: '0%'},
                {y: '-101%', delay: 0.02 * e, duration: 0.5, ease: An},
                0
              );
            }),
              this.elements.bars[1].querySelectorAll('div').forEach((t, e) => {
                this.timelineBar.fromTo(
                  t,
                  {y: '101%'},
                  {y: '0%', delay: 0.02 * e, duration: 0.5, ease: An},
                  0.6
                );
              });
        }
        onLoaded() {
          return new Promise((t) => {
            (this.animateOut = ks.timeline({delay: 2})),
              this.elements.bars.forEach((t) => {
                this.animateOut.to(t, {autoAlpha: 0}, 0);
              }),
              this.animateOut.call((t) => {
                this.emit('completed');
              });
          });
        }
        destroy() {
          (window.Intro = !1),
            this.element.parentNode.removeChild(this.element);
        }
      }
      class Qn extends $n {
        constructor() {
          super({
            element: '#nav',
            elements: {
              texts: '.t-0, .t-1',
              text1: '.t-0',
              text2: '.t-1',
              items: '.n1',
              links: '.n1-l',
              time: '#n2',
            },
          });
        }
        onChangeStart() {
          ks.set(this.elements.items[0], {pointerEvents: 'none'}),
            ks.set(this.elements.items[1], {pointerEvents: 'none'}),
            Bs()(this.elements.texts, (t) => {
              s()(t.querySelectorAll('.v'), (e) => {
                this.hide(t, e, 'b');
              });
            }),
            j.isPhone()
              ? (ks.to(this.elements.items[0], {autoAlpha: 0}),
                ks.to(this.elements.items[1], {autoAlpha: 0}),
                ks.to(document.querySelector('#n0'), {autoAlpha: 0}))
              : (ks.to(this.elements.text2, {autoAlpha: 0}),
                ks.to(this.elements.time, {autoAlpha: 1}));
        }
        onChangeEnd(t) {
          'about' === t
            ? (ks.to(this.elements.items[0], {autoAlpha: 1}),
              ks.to(this.elements.items[1], {autoAlpha: 0}),
              Bs()(this.elements.texts, (t) => {
                s()(t.querySelectorAll('.v'), (e) => {
                  this.show(t, e, 't', 1);
                });
              }),
              j.isPhone()
                ? ks.to(document.querySelector('#n0'), {autoAlpha: 1})
                : ks.to(this.elements.text2, {autoAlpha: 0}))
            : 'home' === t
            ? (ks.to(this.elements.items[0], {autoAlpha: 0}),
              ks.to(this.elements.items[1], {autoAlpha: 1}),
              Bs()(this.elements.texts, (t) => {
                s()(t.querySelectorAll('.v'), (e) => {
                  this.show(t, e, 'b', 'cs' === window.LAYOUT ? 2 : 1);
                });
              }),
              j.isPhone()
                ? ks.to(document.querySelector('#n0'), {autoAlpha: 1})
                : (ks.set(this.elements.text2, {autoAlpha: 1}),
                  ks.set(this.elements.time, {autoAlpha: 1})))
            : (ks.to(this.elements.items[0], {autoAlpha: 1}),
              ks.to(this.elements.items[1], {autoAlpha: 0}),
              Bs()(this.elements.texts, (t) => {
                s()(t.querySelectorAll('.v'), (e) => {
                  this.show(t, e, 'b', 1);
                });
              }),
              j.isPhone()
                ? ks.to(document.querySelector('#n0'), {autoAlpha: 0})
                : (ks.to(this.elements.text2, {autoAlpha: 0}),
                  ks.to(this.elements.time, {autoAlpha: 0}))),
            ks.set(this.elements.items[0], {pointerEvents: 'auto'}),
            ks.set(this.elements.items[1], {pointerEvents: 'auto'});
        }
        show(t, e, i, r = 0) {
          const s = ks.timeline({delay: r});
          't' === i
            ? s.to(t, {bottom: '94%', duration: 0})
            : 'b' === i && s.to(t, {bottom: '5%', duration: 0}),
            s.fromTo(e, {autoAlpha: 0}, {autoAlpha: 1, duration: 0.3});
        }
        hide(t, e, i) {
          ks.to(e, {autoAlpha: 0, duration: 0.3});
        }
      }
      var Kn = i(2273),
        Jn = i.n(Kn);
      class to extends $n {
        constructor({element: t}) {
          super({element: t}), this.createObserver();
        }
        createObserver() {
          (this.observer = new window.IntersectionObserver((t) => {
            t.forEach((t) => {
              t.isIntersecting &&
                (this.element.src ||
                  ((this.element.src = this.element.getAttribute('data-src')),
                  (this.element.onload = (t) => {})));
            });
          })),
            this.observer.observe(this.element);
        }
      }
      const eo = class extends Hn() {
        constructor({element: t, elements: e, id: i, isScrollable: r = !0}) {
          super(),
            Xn(this),
            (this.selector = t),
            (this.selectorChildren = {preloaders: '[data-src]', ...e}),
            (this.id = i),
            (this.scroll = {
              ease: 0.07,
              position: 0,
              current: 0,
              target: 0,
              limit: 0,
            }),
            (this.isScrollable = r),
            (this.transformPrefix = Jn()('transform'));
        }
        create() {
          if (
            ((this.element = document.querySelector(this.selector)),
            (this.elements = {}),
            s()(this.selectorChildren, (t, e) => {
              t instanceof window.HTMLElement ||
              t instanceof window.NodeList ||
              Array.isArray(t)
                ? (this.elements[e] = t)
                : ((this.elements[e] = document.querySelectorAll(t)),
                  0 === this.elements[e].length
                    ? (this.elements[e] = null)
                    : 1 === this.elements[e].length &&
                      (this.elements[e] = document.querySelector(t)));
            }),
            this.isScrollable)
          ) {
            if (!this.elements.wrapper) return;
            this.scroll = {
              ease: 0.07,
              position: 0,
              current: 0,
              target: 0,
              limit: this.elements.wrapper.clientHeight - window.innerHeight,
            };
          }
          this.createObserver(), this.createPreloader();
        }
        show(t) {
          return new Promise((e) => {
            t
              ? (this.animationIn = t)
              : ((this.animationIn = ks.timeline({delay: 1.5})),
                this.animationIn.fromTo(
                  this.element,
                  {autoAlpha: 0},
                  {autoAlpha: 1}
                )),
              this.animationIn.call((t) => {
                e();
              });
          });
        }
        hide(t) {
          return new Promise((e) => {
            t
              ? (this.animationOut = t)
              : ((this.animationOut = ks.timeline()),
                this.animationOut.fromTo(
                  this.element,
                  {autoAlpha: 1},
                  {autoAlpha: 0}
                )),
              this.animationOut.call((t) => {
                e(!0);
              });
          });
        }
        createPreloader() {
          this.preloader = Us(
            this.elements.preloaders,
            (t) => new to({element: t})
          );
        }
        createObserver() {
          (this.observer = new window.ResizeObserver((t) => {
            for (const e of t)
              window.requestAnimationFrame((t) => {
                this.scroll.limit =
                  this.elements.wrapper.clientHeight - window.innerHeight;
              });
          })),
            this.observer.observe(this.elements.wrapper);
        }
        transform(t, e) {
          t.style[this.transformPrefix] = `translate3d(0, ${-Math.round(
            e
          )}px, 0)`;
        }
        onResize() {
          (!this.isScrollable && window.Intro) ||
            !this.elements.wrapper ||
            window.requestAnimationFrame((t) => {
              (this.scroll.limit =
                this.elements.wrapper.clientHeight - window.innerHeight),
                s()(this.animations, (t) => {
                  t.onResize && t.onResize();
                });
            });
        }
        onTouchDown(t) {
          !j.isPhone() ||
            (!this.isScrollable && window.Intro) ||
            ((this.isDown = !0),
            (this.scroll.position = this.scroll.current),
            (this.start = t.touches ? t.touches[0].clientY : t.clientY));
        }
        onTouchMove(t) {
          if (!j.isPhone() || !this.isDown || window.Intro) return;
          const e = t.touches ? t.touches[0].clientY : t.clientY,
            i = 3 * (this.start - e);
          this.scroll.target = this.scroll.position + i;
        }
        onTouchUp(t) {
          j.isPhone() && !window.Intro && (this.isDown = !1);
        }
        onMouseWheel(t) {
          if (window.Intro) return;
          const e = 0.5 * t.pixelY;
          window.Intro || (this.scroll.target += e);
        }
        update() {
          if (window.Intro) return;
          (this.scroll.target = qs(0, this.scroll.limit, this.scroll.target)),
            (this.scroll.current = js(
              this.scroll.current,
              this.scroll.target,
              this.scroll.ease
            )),
            (this.scroll.current = Math.floor(this.scroll.current)),
            this.scroll.current < 0.1 && (this.scroll.current = 0);
          const t = Math.floor((this.scroll.current / this.scroll.limit) * 100);
          this.elements.wrapper &&
            this.transform(this.elements.wrapper, this.scroll.current),
            document.querySelector('#w-p') &&
              (this.transform(
                document.querySelector('#w-p'),
                this.scroll.current *
                  ((window.innerHeight / this.elements.wrapper.clientHeight) *
                    0.47)
              ),
              (document.querySelector('#w-p').textContent =
                t <= 9 ? `00${t}%` : t < 99 ? `0${t}%` : '100%'));
        }
      };
      class io extends eo {
        constructor() {
          super({
            id: 'home',
            element: '#h',
            elements: {
              wrapper: '#h > ul',
              l: '#l',
              l1: '.h-1',
              l2: '.h-2',
              lNav1: '.l-a',
              lNav2: '.l-b',
              lIndicator: '.l-i',
            },
            isScrollable: !0,
          });
        }
        create() {
          super.create();
        }
        async show() {
          const t = ks.timeline();
          t.fromTo(this.element, {autoAlpha: 0}, {autoAlpha: 1}),
            j.isPhone() || t.to(this.elements.l, {duration: 0.3, autoAlpha: 1}),
            await super.show(t);
        }
        async hide() {
          const t = ks.timeline({delay: 0.5});
          j.isPhone() || t.to(this.elements.l, {duration: 0.3, autoAlpha: 0}),
            t.fromTo(
              this.element,
              {autoAlpha: 1},
              {duration: 0.5, autoAlpha: 0}
            ),
            await super.hide(t);
        }
        onResize() {
          super.onResize();
        }
        update() {
          super.update();
        }
        destroy() {
          super.destroy();
        }
      }
      function ro({element: t, expression: e = ' ', append: i = !0}) {
        const r = (function (t, e) {
          const i = t.split('<br>');
          let r = [];
          return (
            s()(i, (t, i) => {
              i > 0 && r.push('<br>'), (r = r.concat(t.split(e)));
              let n = !1,
                o = '';
              const a = [];
              s()(r, (t) => {
                n ||
                  (!t.includes('<a') && !t.includes('<strong')) ||
                  ((o = ''), (n = !0)),
                  n && (o += ` ${t}`),
                  n &&
                    (t.includes('/a>') || t.includes('/strong>')) &&
                    (a.push(o), (o = '')),
                  n || '' !== o || a.push(t),
                  n &&
                    (t.includes('/a>') || t.includes('/strong>')) &&
                    (n = !1);
              }),
                (r = a);
            }),
            r
          );
        })(t.innerHTML.toString().trim(), e);
        let n = '';
        s()(r, (t) => {
          if (t.indexOf('<br>') > -1) {
            const e = t.split('<br>');
            s()(e, (t, e) => {
              n += e > 0 ? '<br>' + so(t) : so(t);
            });
          } else n += so(t);
        }),
          (t.innerHTML = n);
        const o = t.querySelectorAll('span');
        return (
          i &&
            s()(o, (t) => {
              const e = 1 === t.textContent.length,
                i = '' !== t.innerHTML.trim(),
                r = '&' !== t.textContent,
                s = '-' !== t.textContent;
              e && i && r && s && (t.innerHTML = `${t.textContent}&nbsp;`);
            }),
          o
        );
      }
      function so(t) {
        return '' === t
          ? t
          : ' ' === t
          ? '&nbsp;'
          : '<br>' === (t = t.trim())
          ? '<br>'
          : `<span>${t}</span>` + (t.length > 1 ? ' ' : '');
      }
      function no({element: t}) {
        ro({element: t, append: !0}), ro({element: t, append: !0});
        let e = t.querySelectorAll('span span');
        window.addEventListener('resize', () => {
          e = (function (t) {
            const e = [];
            let i = [],
              r = t[0].offsetTop;
            return (
              s()(t, (s, n) => {
                s.offsetTop === r && i.push(s),
                  s.offsetTop !== r &&
                    (e.push(i), (i = []), i.push(s), (r = s.offsetTop)),
                  n + 1 === t.length && e.push(i);
              }),
              e
            );
          })(e);
        });
      }
      class oo extends eo {
        constructor() {
          super({
            id: 'about',
            element: '#a',
            elements: {
              wrapper: '.a-wp',
              title: '.a-tl',
              subtitle: '.a-stl',
              description: '.a-g .p',
              skills: '.exps .exp',
              skWrapper: '.exps .r',
              skIndicator: '.sk-i > span',
              skYears: '.exps .y .v',
            },
            isScrollable: !0,
          });
        }
        create() {
          super.create(),
            no({element: this.elements.title}),
            no({element: this.elements.subtitle}),
            no({element: this.elements.description}),
            (this.elementLinesSpans =
              document.querySelectorAll('.tr-y > span span')),
            (this.index = 0),
            s()(this.elements.skYears, (t, e) => {
              const i = t.textContent.split('');
              (t.innerHTML = ''),
                i.forEach((i) => {
                  t.innerHTML += `<span style='translate: none; rotate: none; scale: none; transform: translate(0px, ${
                    0 === e ? '0' : '101'
                  }%);'>\n        ${i}\n        </span>`;
                });
            }),
            this.elements.skills.forEach((t, e) => {
              t.addEventListener('mouseenter', () => {
                this.onMouseEnter(t, e, this.elements.skYears[e]);
              }),
                t.addEventListener('mouseleave', () => {
                  this.onMouseLeave(e);
                }),
                t.addEventListener('touchstart', () => {
                  this.onMouseEnter(t, e, this.elements.skYears[e]);
                }),
                t.addEventListener('touchend', () => {
                  this.onMouseLeave(e);
                });
            });
        }
        onMouseEnter(t, e, i) {
          this.index !== e &&
            (t.classList.add('s'),
            this.elements.skills[this.index].classList.contains('s') &&
              this.elements.skills[this.index].classList.remove('s'),
            this.elements.skYears[this.index]
              .querySelectorAll('span')
              .forEach((t, e) => {
                1 !== e
                  ? ks.to(t, {ease: 'expo.out', delay: 0.1 * e, y: '-101%'})
                  : ks.set(t, {y: '0%'});
              }),
            i.querySelectorAll('span').forEach((t, e) => {
              1 !== e
                ? ks.fromTo(
                    t,
                    {y: '101%'},
                    {ease: 'expo.out', delay: 0.1 * e, y: '0%'}
                  )
                : ks.set(t, {y: '0%'});
            }),
            this.elements.skIndicator.forEach((t) => {
              ks.to(t, {y: 100 * e + '%'});
            }));
        }
        onMouseLeave(t) {
          this.index = t;
        }
        async show() {
          (this.timelineIn = ks.timeline()),
            this.timelineIn.fromTo(
              this.element,
              {autoAlpha: 0},
              {autoAlpha: 1}
            ),
            s()(this.elementLinesSpans, (t, e) => {
              this.timelineIn.set(t, {autoAlpha: 1}),
                this.timelineIn.fromTo(
                  t,
                  {y: '101%'},
                  {delay: 0.01 * e, duration: 0.5, y: '0%'},
                  0
                );
            }),
            this.timelineIn.fromTo(
              document.querySelector('.tl .ln'),
              {width: '0%'},
              {width: '100%', duration: 0.8},
              0
            ),
            this.timelineIn.fromTo(
              document.querySelector('.y .yw'),
              {y: '101%'},
              {y: '0%', duration: 0.8},
              0
            ),
            this.timelineIn.fromTo(
              document.querySelector('.y .l'),
              {y: '101%'},
              {y: '0%', duration: 0.8},
              0
            ),
            this.timelineIn.fromTo(
              document.querySelector('.a-n'),
              {autoAlpha: 0},
              {autoAlpha: 1}
            ),
            s()(document.querySelectorAll('.sk-i span'), (t) => {
              this.timelineIn.fromTo(
                t,
                {autoAlpha: 0},
                {autoAlpha: 1, duration: 0.8},
                1.5
              );
            }),
            await super.show(this.timelineIn);
        }
        async hide() {
          (this.timelineOut = ks.timeline()),
            this.timelineOut.to(document.querySelector('.a-n'), {autoAlpha: 0}),
            this.timelineOut.to(this.element, {autoAlpha: 0}),
            await super.show(this.timelineOut);
        }
        destroy() {
          super.destroy();
        }
      }
      class ao extends eo {
        constructor() {
          super({
            id: 'project',
            element: '#w',
            elements: {
              wrapper: '.w-wp',
              navigator: '.w-b',
              progress: '#w-p',
              t: '.w-t',
              y: '.w-y',
              r: '.w-r',
              n: '.w-i-id',
              p: '.w-p',
              l: '.w-i-l',
            },
            isScrollable: !0,
          });
        }
        create() {
          super.create(),
            j.isPhone()
              ? no({element: document.querySelector('.w-id')})
              : no({element: this.elements.n}),
            this.elements.l && no({element: this.elements.l}),
            no({element: this.elements.y}),
            no({element: this.elements.t}),
            no({element: this.elements.r}),
            no({element: this.elements.p}),
            (this.elementLinesSpans =
              document.querySelectorAll('.tr-y > span span')),
            this.elements.navigator.addEventListener('click', (t) => {
              t.preventDefault(), window.NAVIGATION.pop();
              const e = window.NAVIGATION.length
                ? window.NAVIGATION[window.NAVIGATION.length - 1]
                : '/';
              window.history.replaceState({}, '', e);
              const i = new CustomEvent('back', {detail: e});
              window.dispatchEvent(i);
            });
        }
        async show() {
          (this.timelineIn = ks.timeline({delay: j.isPhone() ? 0 : 1})),
            this.timelineIn.fromTo(
              this.element,
              {autoAlpha: 0},
              {autoAlpha: 1}
            ),
            s()(this.elementLinesSpans, (t, e) => {
              this.timelineIn.set(t, {autoAlpha: 1}),
                this.timelineIn.fromTo(
                  t,
                  {y: '101%'},
                  {delay: 0.01 * e, duration: 0.5, y: '0%'},
                  0
                );
            }),
            this.timelineIn.fromTo(
              this.elements.navigator,
              {autoAlpha: 0},
              {autoAlpha: 1},
              0
            ),
            j.isPhone() ||
              this.timelineIn.fromTo(
                this.elements.progress,
                {autoAlpha: 0},
                {autoAlpha: 1},
                0
              ),
            await super.show(this.timelineIn);
        }
        async hide() {
          (this.timelineOut = ks.timeline()),
            s()(this.elementLinesSpans, (t, e) => {
              this.timelineOut.to(t, {autoAlpha: 0}, 0);
            }),
            this.timelineOut.to(
              document.querySelector('.w-g-d'),
              {autoAlpha: 0},
              0
            ),
            this.timelineOut.to(
              document.querySelector('.w-nr'),
              {autoAlpha: 0},
              0
            ),
            j.isPhone() ||
              this.timelineOut.to(this.elements.progress, {autoAlpha: 0}, 0),
            this.timelineOut.to(this.elements.navigator, {autoAlpha: 0}, 0),
            this.timelineOut.to(this.element, {autoAlpha: 0}),
            await super.show(this.timelineOut);
        }
        destroy() {
          super.destroy();
        }
      }
      new (class {
        constructor() {
          (window.NAVIGATION = []),
            (window.LAYOUT = 'cs'),
            this.createContent(),
            this.navigatorListeners(),
            this.createCanvas(),
            this.createPages(),
            this.createPreloader(),
            this.createNavigation(),
            this.addEventListeners(),
            this.addLinkListeners(),
            this.onResize(),
            this.update();
        }
        createNavigation() {
          this.navigation = new Qn({template: this.template});
        }
        createContent() {
          (this.content = document.querySelector('#app')),
            (this.template = this.content.getAttribute('data-tl'));
        }
        createPages() {
          (this.pages = {home: new io(), about: new oo(), project: new ao()}),
            (this.page = this.pages[this.template]),
            window.NAVIGATION.push(window.location.href),
            this.page.create();
        }
        createPreloader() {
          (this.preloader = new Zn({canvas: this.canvas})),
            this.preloader.once('completed', this.onPreloaded.bind(this));
        }
        createCanvas() {
          this.canvas = new qn({
            template: this.template,
            dom: document.querySelector('#gl'),
          });
        }
        onPreloaded() {
          this.onResize(),
            this.page.show(),
            this.canvas.onPreloaded(),
            this.preloader.destroy(),
            this.navigation.onChangeEnd(this.template);
        }
        onResize() {
          this.page && this.page.onResize && this.page.onResize(),
            window.requestAnimationFrame((t) => {
              this.canvas && this.canvas.onResize && this.canvas.onResize();
            });
        }
        onTouchDown(t) {
          this.canvas && this.canvas.onTouchDown && this.canvas.onTouchDown(t),
            this.page && this.page.onTouchDown && this.page.onTouchDown(t);
        }
        onTouchMove(t) {
          this.canvas && this.canvas.onTouchMove && this.canvas.onTouchMove(t),
            this.page && this.page.onTouchDown && this.page.onTouchMove(t);
        }
        onTouchUp(t) {
          this.canvas && this.canvas.onTouchDown && this.canvas.onTouchUp(t),
            this.page && this.page.onTouchDown && this.page.onTouchUp(t);
        }
        onMouseWheel(t) {
          const i = e()(t);
          this.canvas &&
            this.canvas.onMouseWheel &&
            this.canvas.onMouseWheel(i),
            this.page && this.page.onMouseWheel && this.page.onMouseWheel(i);
        }
        onPopState() {
          this.onChange({url: window.location.pathname, push: !1});
        }
        async onChange({url: t, push: e = !0}) {
          this.canvas.onChangeStart(this.template, t),
            this.navigation.onChangeStart(this.template),
            await this.page.hide();
          const i = await window.fetch(t);
          if (200 === i.status) {
            const r = await i.text(),
              s = document.createElement('div');
            e &&
              (window.history.pushState({}, '', t), window.NAVIGATION.push(t)),
              (s.innerHTML = r);
            const n = s.querySelector('#app');
            (this.template = n.getAttribute('data-tl')),
              this.navigation.onChangeEnd(this.template),
              this.content.setAttribute('data-tl', this.template),
              (this.content.innerHTML = n.innerHTML),
              this.canvas.onChangeEnd(this.template),
              (this.page = this.pages[this.template]),
              this.page.create(),
              this.onResize(),
              this.page.show(),
              this.addLinkListeners();
          } else console.error(`response status: ${request.status}`);
        }
        update() {
          this.canvas &&
            this.canvas.update &&
            this.canvas.update(this.page.scroll),
            this.page && this.page.update && this.page.update(),
            (this.frame = window.requestAnimationFrame(this.update.bind(this)));
        }
        addEventListeners() {
          window.addEventListener('popstate', this.onPopState.bind(this)),
            window.addEventListener('mousewheel', this.onMouseWheel.bind(this)),
            window.addEventListener('mousedown', this.onTouchDown.bind(this)),
            window.addEventListener('mousemove', this.onTouchMove.bind(this)),
            window.addEventListener('mouseup', this.onTouchUp.bind(this)),
            window.addEventListener('touchstart', this.onTouchDown.bind(this)),
            window.addEventListener('touchmove', this.onTouchMove.bind(this)),
            window.addEventListener('touchend', this.onTouchUp.bind(this)),
            (this.onResizeDebounce = o()(this.onResize.bind(this), 500)),
            window.addEventListener('resize', () => {
              ((j.isPhone() && window.innerWidth >= 768) ||
                (j.isDesktop() && window.innerWidth < 768)) &&
                window.location.reload(),
                this.onResizeDebounce;
            });
        }
        navigatorListeners() {
          window.addEventListener('back', (t) => {
            this.onChange({url: t.detail, push: !1});
          });
        }
        addLinkListeners() {
          const t = document.querySelectorAll('a');
          s()(t, (t) => {
            const e = t.href.indexOf(window.location.origin) > -1,
              i = t.href.indexOf('#') > -1;
            e
              ? (t.onclick = (e) => {
                  e.preventDefault(), i || this.onChange({url: t.href});
                })
              : -1 === t.href.indexOf('mailto') &&
                -1 === t.href.indexOf('tel') &&
                ((t.rel = 'noopener'), (t.target = '_blank'));
          });
        }
      })();
    })();
})();
