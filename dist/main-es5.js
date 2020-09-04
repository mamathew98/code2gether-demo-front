(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/zone.js/dist/zone-evergreen.js":
    /*!*****************************************************!*\
      !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesZoneJsDistZoneEvergreenJs(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
      * (c) 2010-2020 Google LLC. https://angular.io/
      * License: MIT
      */


      (function (factory) {
        true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
      })(function () {
        'use strict';
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        var Zone$1 = function (global) {
          var performance = global['performance'];

          function mark(name) {
            performance && performance['mark'] && performance['mark'](name);
          }

          function performanceMeasure(name, label) {
            performance && performance['measure'] && performance['measure'](name, label);
          }

          mark('Zone'); // Initialize before it's accessed below.
          // __Zone_symbol_prefix global can be used to override the default zone
          // symbol prefix with a custom one if needed.

          var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

          function __symbol__(name) {
            return symbolPrefix + name;
          }

          var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

          if (global['Zone']) {
            // if global['Zone'] already exists (maybe zone.js was already loaded or
            // some other lib also registered a global object named Zone), we may need
            // to throw an error, but sometimes user may not want this error.
            // For example,
            // we have two web pages, page1 includes zone.js, page2 doesn't.
            // and the 1st time user load page1 and page2, everything work fine,
            // but when user load page2 again, error occurs because global['Zone'] already exists.
            // so we add a flag to let user choose whether to throw this error or not.
            // By default, if existing Zone is from zone.js, we will not throw the error.
            if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
              throw new Error('Zone already loaded.');
            } else {
              return global['Zone'];
            }
          }

          var Zone = /*#__PURE__*/function () {
            function Zone(parent, zoneSpec) {
              _classCallCheck(this, Zone);

              this._parent = parent;
              this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
              this._properties = zoneSpec && zoneSpec.properties || {};
              this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
            }

            _createClass(Zone, [{
              key: "get",
              value: function get(key) {
                var zone = this.getZoneWith(key);
                if (zone) return zone._properties[key];
              }
            }, {
              key: "getZoneWith",
              value: function getZoneWith(key) {
                var current = this;

                while (current) {
                  if (current._properties.hasOwnProperty(key)) {
                    return current;
                  }

                  current = current._parent;
                }

                return null;
              }
            }, {
              key: "fork",
              value: function fork(zoneSpec) {
                if (!zoneSpec) throw new Error('ZoneSpec required!');
                return this._zoneDelegate.fork(this, zoneSpec);
              }
            }, {
              key: "wrap",
              value: function wrap(callback, source) {
                if (typeof callback !== 'function') {
                  throw new Error('Expecting function got: ' + callback);
                }

                var _callback = this._zoneDelegate.intercept(this, callback, source);

                var zone = this;
                return function () {
                  return zone.runGuarded(_callback, this, arguments, source);
                };
              }
            }, {
              key: "run",
              value: function run(callback, applyThis, applyArgs, source) {
                _currentZoneFrame = {
                  parent: _currentZoneFrame,
                  zone: this
                };

                try {
                  return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } finally {
                  _currentZoneFrame = _currentZoneFrame.parent;
                }
              }
            }, {
              key: "runGuarded",
              value: function runGuarded(callback) {
                var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
                var source = arguments.length > 3 ? arguments[3] : undefined;
                _currentZoneFrame = {
                  parent: _currentZoneFrame,
                  zone: this
                };

                try {
                  try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                  } catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                      throw error;
                    }
                  }
                } finally {
                  _currentZoneFrame = _currentZoneFrame.parent;
                }
              }
            }, {
              key: "runTask",
              value: function runTask(task, applyThis, applyArgs) {
                if (task.zone != this) {
                  throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
                // will run in notScheduled(canceled) state, we should not try to
                // run such kind of task but just return


                if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                  return;
                }

                var reEntryGuard = task.state != running;
                reEntryGuard && task._transitionTo(running, scheduled);
                task.runCount++;
                var previousTask = _currentTask;
                _currentTask = task;
                _currentZoneFrame = {
                  parent: _currentZoneFrame,
                  zone: this
                };

                try {
                  if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                  }

                  try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                  } catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                      throw error;
                    }
                  }
                } finally {
                  // if the task's state is notScheduled or unknown, then it has already been cancelled
                  // we should not reset the state to scheduled
                  if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || task.data && task.data.isPeriodic) {
                      reEntryGuard && task._transitionTo(scheduled, running);
                    } else {
                      task.runCount = 0;

                      this._updateTaskCount(task, -1);

                      reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                    }
                  }

                  _currentZoneFrame = _currentZoneFrame.parent;
                  _currentTask = previousTask;
                }
              }
            }, {
              key: "scheduleTask",
              value: function scheduleTask(task) {
                if (task.zone && task.zone !== this) {
                  // check if the task was rescheduled, the newZone
                  // should not be the children of the original zone
                  var newZone = this;

                  while (newZone) {
                    if (newZone === task.zone) {
                      throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                    }

                    newZone = newZone.parent;
                  }
                }

                task._transitionTo(scheduling, notScheduled);

                var zoneDelegates = [];
                task._zoneDelegates = zoneDelegates;
                task._zone = this;

                try {
                  task = this._zoneDelegate.scheduleTask(this, task);
                } catch (err) {
                  // should set task's state to unknown when scheduleTask throw error
                  // because the err may from reschedule, so the fromState maybe notScheduled
                  task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


                  this._zoneDelegate.handleError(this, err);

                  throw err;
                }

                if (task._zoneDelegates === zoneDelegates) {
                  // we have to check because internally the delegate can reschedule the task.
                  this._updateTaskCount(task, 1);
                }

                if (task.state == scheduling) {
                  task._transitionTo(scheduled, scheduling);
                }

                return task;
              }
            }, {
              key: "scheduleMicroTask",
              value: function scheduleMicroTask(source, callback, data, customSchedule) {
                return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
              }
            }, {
              key: "scheduleMacroTask",
              value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
              }
            }, {
              key: "scheduleEventTask",
              value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
              }
            }, {
              key: "cancelTask",
              value: function cancelTask(task) {
                if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

                task._transitionTo(canceling, scheduled, running);

                try {
                  this._zoneDelegate.cancelTask(this, task);
                } catch (err) {
                  // if error occurs when cancelTask, transit the state to unknown
                  task._transitionTo(unknown, canceling);

                  this._zoneDelegate.handleError(this, err);

                  throw err;
                }

                this._updateTaskCount(task, -1);

                task._transitionTo(notScheduled, canceling);

                task.runCount = 0;
                return task;
              }
            }, {
              key: "_updateTaskCount",
              value: function _updateTaskCount(task, count) {
                var zoneDelegates = task._zoneDelegates;

                if (count == -1) {
                  task._zoneDelegates = null;
                }

                for (var i = 0; i < zoneDelegates.length; i++) {
                  zoneDelegates[i]._updateTaskCount(task.type, count);
                }
              }
            }, {
              key: "parent",
              get: function get() {
                return this._parent;
              }
            }, {
              key: "name",
              get: function get() {
                return this._name;
              }
            }], [{
              key: "assertZonePatched",
              value: function assertZonePatched() {
                if (global['Promise'] !== patches['ZoneAwarePromise']) {
                  throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
                }
              }
            }, {
              key: "__load_patch",
              // tslint:disable-next-line:require-internal-with-underscore
              value: function __load_patch(name, fn) {
                if (patches.hasOwnProperty(name)) {
                  if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                  }
                } else if (!global['__Zone_disable_' + name]) {
                  var perfName = 'Zone:' + name;
                  mark(perfName);
                  patches[name] = fn(global, Zone, _api);
                  performanceMeasure(perfName, perfName);
                }
              }
            }, {
              key: "root",
              get: function get() {
                var zone = Zone.current;

                while (zone.parent) {
                  zone = zone.parent;
                }

                return zone;
              }
            }, {
              key: "current",
              get: function get() {
                return _currentZoneFrame.zone;
              }
            }, {
              key: "currentTask",
              get: function get() {
                return _currentTask;
              }
            }]);

            return Zone;
          }(); // tslint:disable-next-line:require-internal-with-underscore


          Zone.__symbol__ = __symbol__;
          var DELEGATE_ZS = {
            name: '',
            onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
              return delegate.hasTask(target, hasTaskState);
            },
            onScheduleTask: function onScheduleTask(delegate, _, target, task) {
              return delegate.scheduleTask(target, task);
            },
            onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
              return delegate.invokeTask(target, task, applyThis, applyArgs);
            },
            onCancelTask: function onCancelTask(delegate, _, target, task) {
              return delegate.cancelTask(target, task);
            }
          };

          var ZoneDelegate = /*#__PURE__*/function () {
            function ZoneDelegate(zone, parentDelegate, zoneSpec) {
              _classCallCheck(this, ZoneDelegate);

              this._taskCounts = {
                'microTask': 0,
                'macroTask': 0,
                'eventTask': 0
              };
              this.zone = zone;
              this._parentDelegate = parentDelegate;
              this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
              this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
              this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
              this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
              this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
              this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
              this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
              this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
              this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
              this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
              this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
              this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
              this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
              this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
              this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
              this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
              this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
              this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
              this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
              this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
              this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
              this._hasTaskZS = null;
              this._hasTaskDlgt = null;
              this._hasTaskDlgtOwner = null;
              this._hasTaskCurrZone = null;
              var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
              var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

              if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;

                if (!zoneSpec.onScheduleTask) {
                  this._scheduleTaskZS = DELEGATE_ZS;
                  this._scheduleTaskDlgt = parentDelegate;
                  this._scheduleTaskCurrZone = this.zone;
                }

                if (!zoneSpec.onInvokeTask) {
                  this._invokeTaskZS = DELEGATE_ZS;
                  this._invokeTaskDlgt = parentDelegate;
                  this._invokeTaskCurrZone = this.zone;
                }

                if (!zoneSpec.onCancelTask) {
                  this._cancelTaskZS = DELEGATE_ZS;
                  this._cancelTaskDlgt = parentDelegate;
                  this._cancelTaskCurrZone = this.zone;
                }
              }
            }

            _createClass(ZoneDelegate, [{
              key: "fork",
              value: function fork(targetZone, zoneSpec) {
                return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
              }
            }, {
              key: "intercept",
              value: function intercept(targetZone, callback, source) {
                return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
              }
            }, {
              key: "invoke",
              value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
                return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
              }
            }, {
              key: "handleError",
              value: function handleError(targetZone, error) {
                return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
              }
            }, {
              key: "scheduleTask",
              value: function scheduleTask(targetZone, task) {
                var returnTask = task;

                if (this._scheduleTaskZS) {
                  if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                  } // clang-format off


                  returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

                  if (!returnTask) returnTask = task;
                } else {
                  if (task.scheduleFn) {
                    task.scheduleFn(task);
                  } else if (task.type == microTask) {
                    scheduleMicroTask(task);
                  } else {
                    throw new Error('Task is missing scheduleFn.');
                  }
                }

                return returnTask;
              }
            }, {
              key: "invokeTask",
              value: function invokeTask(targetZone, task, applyThis, applyArgs) {
                return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
              }
            }, {
              key: "cancelTask",
              value: function cancelTask(targetZone, task) {
                var value;

                if (this._cancelTaskZS) {
                  value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
                } else {
                  if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                  }

                  value = task.cancelFn(task);
                }

                return value;
              }
            }, {
              key: "hasTask",
              value: function hasTask(targetZone, isEmpty) {
                // hasTask should not throw error so other ZoneDelegate
                // can still trigger hasTask callback
                try {
                  this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
                } catch (err) {
                  this.handleError(targetZone, err);
                }
              } // tslint:disable-next-line:require-internal-with-underscore

            }, {
              key: "_updateTaskCount",
              value: function _updateTaskCount(type, count) {
                var counts = this._taskCounts;
                var prev = counts[type];
                var next = counts[type] = prev + count;

                if (next < 0) {
                  throw new Error('More tasks executed then were scheduled.');
                }

                if (prev == 0 || next == 0) {
                  var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                  };
                  this.hasTask(this.zone, isEmpty);
                }
              }
            }]);

            return ZoneDelegate;
          }();

          var ZoneTask = /*#__PURE__*/function () {
            function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
              _classCallCheck(this, ZoneTask);

              // tslint:disable-next-line:require-internal-with-underscore
              this._zone = null;
              this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

              this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

              this._state = 'notScheduled';
              this.type = type;
              this.source = source;
              this.data = options;
              this.scheduleFn = scheduleFn;
              this.cancelFn = cancelFn;

              if (!callback) {
                throw new Error('callback is not defined');
              }

              this.callback = callback;
              var self = this; // TODO: @JiaLiPassion options should have interface

              if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
              } else {
                this.invoke = function () {
                  return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
              }
            }

            _createClass(ZoneTask, [{
              key: "cancelScheduleRequest",
              value: function cancelScheduleRequest() {
                this._transitionTo(notScheduled, scheduling);
              } // tslint:disable-next-line:require-internal-with-underscore

            }, {
              key: "_transitionTo",
              value: function _transitionTo(toState, fromState1, fromState2) {
                if (this._state === fromState1 || this._state === fromState2) {
                  this._state = toState;

                  if (toState == notScheduled) {
                    this._zoneDelegates = null;
                  }
                } else {
                  throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
                }
              }
            }, {
              key: "toString",
              value: function toString() {
                if (this.data && typeof this.data.handleId !== 'undefined') {
                  return this.data.handleId.toString();
                } else {
                  return Object.prototype.toString.call(this);
                }
              } // add toJSON method to prevent cyclic error when
              // call JSON.stringify(zoneTask)

            }, {
              key: "toJSON",
              value: function toJSON() {
                return {
                  type: this.type,
                  state: this.state,
                  source: this.source,
                  zone: this.zone.name,
                  runCount: this.runCount
                };
              }
            }, {
              key: "zone",
              get: function get() {
                return this._zone;
              }
            }, {
              key: "state",
              get: function get() {
                return this._state;
              }
            }], [{
              key: "invokeTask",
              value: function invokeTask(task, target, args) {
                if (!task) {
                  task = this;
                }

                _numberOfNestedTaskFrames++;

                try {
                  task.runCount++;
                  return task.zone.runTask(task, target, args);
                } finally {
                  if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                  }

                  _numberOfNestedTaskFrames--;
                }
              }
            }]);

            return ZoneTask;
          }(); //////////////////////////////////////////////////////
          //////////////////////////////////////////////////////
          ///  MICROTASK QUEUE
          //////////////////////////////////////////////////////
          //////////////////////////////////////////////////////


          var symbolSetTimeout = __symbol__('setTimeout');

          var symbolPromise = __symbol__('Promise');

          var symbolThen = __symbol__('then');

          var _microTaskQueue = [];
          var _isDrainingMicrotaskQueue = false;
          var nativeMicroTaskQueuePromise;

          function scheduleMicroTask(task) {
            // if we are not running in any task, and there has not been anything scheduled
            // we must bootstrap the initial task creation by manually scheduling the drain
            if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
              // We are not running in Task, so we need to kickstart the microtask queue.
              if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                  nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
              }

              if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

                if (!nativeThen) {
                  // native Promise is not patchable, we need to use `then` directly
                  // issue 1078
                  nativeThen = nativeMicroTaskQueuePromise['then'];
                }

                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
              } else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
              }
            }

            task && _microTaskQueue.push(task);
          }

          function drainMicroTaskQueue() {
            if (!_isDrainingMicrotaskQueue) {
              _isDrainingMicrotaskQueue = true;

              while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];

                for (var i = 0; i < queue.length; i++) {
                  var task = queue[i];

                  try {
                    task.zone.runTask(task, null, null);
                  } catch (error) {
                    _api.onUnhandledError(error);
                  }
                }
              }

              _api.microtaskDrainDone();

              _isDrainingMicrotaskQueue = false;
            }
          } //////////////////////////////////////////////////////
          //////////////////////////////////////////////////////
          ///  BOOTSTRAP
          //////////////////////////////////////////////////////
          //////////////////////////////////////////////////////


          var NO_ZONE = {
            name: 'NO ZONE'
          };
          var notScheduled = 'notScheduled',
              scheduling = 'scheduling',
              scheduled = 'scheduled',
              running = 'running',
              canceling = 'canceling',
              unknown = 'unknown';
          var microTask = 'microTask',
              macroTask = 'macroTask',
              eventTask = 'eventTask';
          var patches = {};
          var _api = {
            symbol: __symbol__,
            currentZoneFrame: function currentZoneFrame() {
              return _currentZoneFrame;
            },
            onUnhandledError: noop,
            microtaskDrainDone: noop,
            scheduleMicroTask: scheduleMicroTask,
            showUncaughtError: function showUncaughtError() {
              return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
            },
            patchEventTarget: function patchEventTarget() {
              return [];
            },
            patchOnProperties: noop,
            patchMethod: function patchMethod() {
              return noop;
            },
            bindArguments: function bindArguments() {
              return [];
            },
            patchThen: function patchThen() {
              return noop;
            },
            patchMacroTask: function patchMacroTask() {
              return noop;
            },
            setNativePromise: function setNativePromise(NativePromise) {
              // sometimes NativePromise.resolve static function
              // is not ready yet, (such as core-js/es6.promise)
              // so we need to check here.
              if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
              }
            },
            patchEventPrototype: function patchEventPrototype() {
              return noop;
            },
            isIEOrEdge: function isIEOrEdge() {
              return false;
            },
            getGlobalObjects: function getGlobalObjects() {
              return undefined;
            },
            ObjectDefineProperty: function ObjectDefineProperty() {
              return noop;
            },
            ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
              return undefined;
            },
            ObjectCreate: function ObjectCreate() {
              return undefined;
            },
            ArraySlice: function ArraySlice() {
              return [];
            },
            patchClass: function patchClass() {
              return noop;
            },
            wrapWithCurrentZone: function wrapWithCurrentZone() {
              return noop;
            },
            filterProperties: function filterProperties() {
              return [];
            },
            attachOriginToPatched: function attachOriginToPatched() {
              return noop;
            },
            _redefineProperty: function _redefineProperty() {
              return noop;
            },
            patchCallbacks: function patchCallbacks() {
              return noop;
            }
          };
          var _currentZoneFrame = {
            parent: null,
            zone: new Zone(null, null)
          };
          var _currentTask = null;
          var _numberOfNestedTaskFrames = 0;

          function noop() {}

          performanceMeasure('Zone', 'Zone');
          return global['Zone'] = Zone;
        }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
          var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
          var ObjectDefineProperty = Object.defineProperty;

          function readableObjectToString(obj) {
            if (obj && obj.toString === Object.prototype.toString) {
              var className = obj.constructor && obj.constructor.name;
              return (className ? className : '') + ': ' + JSON.stringify(obj);
            }

            return obj ? obj.toString() : Object.prototype.toString.call(obj);
          }

          var __symbol__ = api.symbol;
          var _uncaughtPromiseErrors = [];
          var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

          var symbolPromise = __symbol__('Promise');

          var symbolThen = __symbol__('then');

          var creationTrace = '__creationTrace__';

          api.onUnhandledError = function (e) {
            if (api.showUncaughtError()) {
              var rejection = e && e.rejection;

              if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
              } else {
                console.error(e);
              }
            }
          };

          api.microtaskDrainDone = function () {
            var _loop = function _loop() {
              var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

              try {
                uncaughtPromiseError.zone.runGuarded(function () {
                  throw uncaughtPromiseError;
                });
              } catch (error) {
                handleUnhandledRejection(error);
              }
            };

            while (_uncaughtPromiseErrors.length) {
              _loop();
            }
          };

          var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

          function handleUnhandledRejection(e) {
            api.onUnhandledError(e);

            try {
              var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

              if (typeof handler === 'function') {
                handler.call(this, e);
              }
            } catch (err) {}
          }

          function isThenable(value) {
            return value && value.then;
          }

          function forwardResolution(value) {
            return value;
          }

          function forwardRejection(rejection) {
            return ZoneAwarePromise.reject(rejection);
          }

          var symbolState = __symbol__('state');

          var symbolValue = __symbol__('value');

          var symbolFinally = __symbol__('finally');

          var symbolParentPromiseValue = __symbol__('parentPromiseValue');

          var symbolParentPromiseState = __symbol__('parentPromiseState');

          var source = 'Promise.then';
          var UNRESOLVED = null;
          var RESOLVED = true;
          var REJECTED = false;
          var REJECTED_NO_CATCH = 0;

          function makeResolver(promise, state) {
            return function (v) {
              try {
                resolvePromise(promise, state, v);
              } catch (err) {
                resolvePromise(promise, false, err);
              } // Do not return value or you will break the Promise spec.

            };
          }

          var once = function once() {
            var wasCalled = false;
            return function wrapper(wrappedFunction) {
              return function () {
                if (wasCalled) {
                  return;
                }

                wasCalled = true;
                wrappedFunction.apply(null, arguments);
              };
            };
          };

          var TYPE_ERROR = 'Promise resolved with itself';

          var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


          function resolvePromise(promise, state, value) {
            var onceWrapper = once();

            if (promise === value) {
              throw new TypeError(TYPE_ERROR);
            }

            if (promise[symbolState] === UNRESOLVED) {
              // should only get value.then once based on promise spec.
              var then = null;

              try {
                if (typeof value === 'object' || typeof value === 'function') {
                  then = value && value.then;
                }
              } catch (err) {
                onceWrapper(function () {
                  resolvePromise(promise, false, err);
                })();
                return promise;
              } // if (value instanceof ZoneAwarePromise) {


              if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
              } else if (state !== REJECTED && typeof then === 'function') {
                try {
                  then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                } catch (err) {
                  onceWrapper(function () {
                    resolvePromise(promise, false, err);
                  })();
                }
              } else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;

                if (promise[symbolFinally] === symbolFinally) {
                  // the promise is generated by Promise.prototype.finally
                  if (state === RESOLVED) {
                    // the state is resolved, should ignore the value
                    // and use parent promise value
                    promise[symbolState] = promise[symbolParentPromiseState];
                    promise[symbolValue] = promise[symbolParentPromiseValue];
                  }
                } // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace


                if (state === REJECTED && value instanceof Error) {
                  // check if longStackTraceZone is here
                  var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

                  if (trace) {
                    // only keep the long stack trace into error when in longStackTraceZone
                    ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                      configurable: true,
                      enumerable: false,
                      writable: true,
                      value: trace
                    });
                  }
                }

                for (var i = 0; i < queue.length;) {
                  scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }

                if (queue.length == 0 && state == REJECTED) {
                  promise[symbolState] = REJECTED_NO_CATCH;
                  var uncaughtPromiseError = value;

                  if (!isDisableWrappingUncaughtPromiseRejection) {
                    // If disable wrapping uncaught promise reject
                    // and the rejected value is an Error object,
                    // use the value instead of wrapping it.
                    try {
                      // Here we throws a new Error to print more readable error log
                      // and if the value is not an error, zone.js builds an `Error`
                      // Object here to attach the stack information.
                      throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
                    } catch (err) {
                      uncaughtPromiseError = err;
                    }
                  }

                  uncaughtPromiseError.rejection = value;
                  uncaughtPromiseError.promise = promise;
                  uncaughtPromiseError.zone = Zone.current;
                  uncaughtPromiseError.task = Zone.currentTask;

                  _uncaughtPromiseErrors.push(uncaughtPromiseError);

                  api.scheduleMicroTask(); // to make sure that it is running
                }
              }
            } // Resolving an already resolved promise is a noop.


            return promise;
          }

          var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

          function clearRejectedNoCatch(promise) {
            if (promise[symbolState] === REJECTED_NO_CATCH) {
              // if the promise is rejected no catch status
              // and queue.length > 0, means there is a error handler
              // here to handle the rejected promise, we should trigger
              // windows.rejectionhandled eventHandler or nodejs rejectionHandled
              // eventHandler
              try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];

                if (handler && typeof handler === 'function') {
                  handler.call(this, {
                    rejection: promise[symbolValue],
                    promise: promise
                  });
                }
              } catch (err) {}

              promise[symbolState] = REJECTED;

              for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                  _uncaughtPromiseErrors.splice(i, 1);
                }
              }
            }
          }

          function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
            clearRejectedNoCatch(promise);
            var promiseState = promise[symbolState];
            var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
            zone.scheduleMicroTask(source, function () {
              try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

                if (isFinallyPromise) {
                  // if the promise is generated from finally call, keep parent promise's state and value
                  chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                  chainPromise[symbolParentPromiseState] = promiseState;
                } // should not pass value to finally callback


                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
              } catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
              }
            }, chainPromise);
          }

          var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

          var noop = function noop() {};

          var ZoneAwarePromise = /*#__PURE__*/function () {
            _createClass(ZoneAwarePromise, null, [{
              key: "toString",
              value: function toString() {
                return ZONE_AWARE_PROMISE_TO_STRING;
              }
            }, {
              key: "resolve",
              value: function resolve(value) {
                return resolvePromise(new this(null), RESOLVED, value);
              }
            }, {
              key: "reject",
              value: function reject(error) {
                return resolvePromise(new this(null), REJECTED, error);
              }
            }, {
              key: "race",
              value: function race(values) {
                var resolve;
                var reject;
                var promise = new this(function (res, rej) {
                  resolve = res;
                  reject = rej;
                });

                function onResolve(value) {
                  resolve(value);
                }

                function onReject(error) {
                  reject(error);
                }

                var _iterator = _createForOfIteratorHelper(values),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var value = _step.value;

                    if (!isThenable(value)) {
                      value = this.resolve(value);
                    }

                    value.then(onResolve, onReject);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                return promise;
              }
            }, {
              key: "all",
              value: function all(values) {
                return ZoneAwarePromise.allWithCallback(values);
              }
            }, {
              key: "allSettled",
              value: function allSettled(values) {
                var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
                return P.allWithCallback(values, {
                  thenCallback: function thenCallback(value) {
                    return {
                      status: 'fulfilled',
                      value: value
                    };
                  },
                  errorCallback: function errorCallback(err) {
                    return {
                      status: 'rejected',
                      reason: err
                    };
                  }
                });
              }
            }, {
              key: "allWithCallback",
              value: function allWithCallback(values, callback) {
                var _this = this;

                var resolve;
                var reject;
                var promise = new this(function (res, rej) {
                  resolve = res;
                  reject = rej;
                }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

                var unresolvedCount = 2;
                var valueIndex = 0;
                var resolvedValues = [];

                var _iterator2 = _createForOfIteratorHelper(values),
                    _step2;

                try {
                  var _loop2 = function _loop2() {
                    var value = _step2.value;

                    if (!isThenable(value)) {
                      value = _this.resolve(value);
                    }

                    var curValueIndex = valueIndex;

                    try {
                      value.then(function (value) {
                        resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                        unresolvedCount--;

                        if (unresolvedCount === 0) {
                          resolve(resolvedValues);
                        }
                      }, function (err) {
                        if (!callback) {
                          reject(err);
                        } else {
                          resolvedValues[curValueIndex] = callback.errorCallback(err);
                          unresolvedCount--;

                          if (unresolvedCount === 0) {
                            resolve(resolvedValues);
                          }
                        }
                      });
                    } catch (thenErr) {
                      reject(thenErr);
                    }

                    unresolvedCount++;
                    valueIndex++;
                  };

                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    _loop2();
                  } // Make the unresolvedCount zero-based again.

                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                unresolvedCount -= 2;

                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }

                return promise;
              }
            }]);

            function ZoneAwarePromise(executor) {
              _classCallCheck(this, ZoneAwarePromise);

              var promise = this;

              if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
              }

              promise[symbolState] = UNRESOLVED;
              promise[symbolValue] = []; // queue;

              try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
              } catch (error) {
                resolvePromise(promise, false, error);
              }
            }

            _createClass(ZoneAwarePromise, [{
              key: "then",
              value: function then(onFulfilled, onRejected) {
                var C = this.constructor[Symbol.species];

                if (!C || typeof C !== 'function') {
                  C = this.constructor || ZoneAwarePromise;
                }

                var chainPromise = new C(noop);
                var zone = Zone.current;

                if (this[symbolState] == UNRESOLVED) {
                  this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
                } else {
                  scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
                }

                return chainPromise;
              }
            }, {
              key: "catch",
              value: function _catch(onRejected) {
                return this.then(null, onRejected);
              }
            }, {
              key: "finally",
              value: function _finally(onFinally) {
                var C = this.constructor[Symbol.species];

                if (!C || typeof C !== 'function') {
                  C = ZoneAwarePromise;
                }

                var chainPromise = new C(noop);
                chainPromise[symbolFinally] = symbolFinally;
                var zone = Zone.current;

                if (this[symbolState] == UNRESOLVED) {
                  this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
                } else {
                  scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
                }

                return chainPromise;
              }
            }, {
              key: Symbol.toStringTag,
              get: function get() {
                return 'Promise';
              }
            }, {
              key: Symbol.species,
              get: function get() {
                return ZoneAwarePromise;
              }
            }]);

            return ZoneAwarePromise;
          }(); // Protect against aggressive optimizers dropping seemingly unused properties.
          // E.g. Closure Compiler in advanced mode.


          ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
          ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
          ZoneAwarePromise['race'] = ZoneAwarePromise.race;
          ZoneAwarePromise['all'] = ZoneAwarePromise.all;
          var NativePromise = global[symbolPromise] = global['Promise'];

          var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

          var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

          if (!desc || desc.configurable) {
            desc && delete desc.writable;
            desc && delete desc.value;

            if (!desc) {
              desc = {
                configurable: true,
                enumerable: true
              };
            }

            desc.get = function () {
              // if we already set ZoneAwarePromise, use patched one
              // otherwise return native one.
              return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
            };

            desc.set = function (NewNativePromise) {
              if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
              } else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;

                if (!NewNativePromise.prototype[symbolThen]) {
                  patchThen(NewNativePromise);
                }

                api.setNativePromise(NewNativePromise);
              }
            };

            ObjectDefineProperty(global, 'Promise', desc);
          }

          global['Promise'] = ZoneAwarePromise;

          var symbolThenPatched = __symbol__('thenPatched');

          function patchThen(Ctor) {
            var proto = Ctor.prototype;
            var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

            if (prop && (prop.writable === false || !prop.configurable)) {
              // check Ctor.prototype.then propertyDescriptor is writable or not
              // in meteor env, writable is false, we should ignore such case
              return;
            }

            var originalThen = proto.then; // Keep a reference to the original method.

            proto[symbolThen] = originalThen;

            Ctor.prototype.then = function (onResolve, onReject) {
              var _this2 = this;

              var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this2, resolve, reject);
              });
              return wrapped.then(onResolve, onReject);
            };

            Ctor[symbolThenPatched] = true;
          }

          api.patchThen = patchThen;

          function zoneify(fn) {
            return function () {
              var resultPromise = fn.apply(this, arguments);

              if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
              }

              var ctor = resultPromise.constructor;

              if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
              }

              return resultPromise;
            };
          }

          if (NativePromise) {
            patchThen(NativePromise);
            var fetch = global['fetch'];

            if (typeof fetch == 'function') {
              global[api.symbol('fetch')] = fetch;
              global['fetch'] = zoneify(fetch);
            }
          } // This is not part of public API, but it is useful for tests, so we expose it.


          Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
          return ZoneAwarePromise;
        });
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /**
         * Suppress closure compiler errors about unknown 'Zone' variable
         * @fileoverview
         * @suppress {undefinedVars,globalThis,missingRequire}
         */
        /// <reference types="node"/>
        // issue #989, to reduce bundle size, use short name

        /** Object.getOwnPropertyDescriptor */


        var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        /** Object.defineProperty */

        var ObjectDefineProperty = Object.defineProperty;
        /** Object.getPrototypeOf */

        var ObjectGetPrototypeOf = Object.getPrototypeOf;
        /** Object.create */

        var ObjectCreate = Object.create;
        /** Array.prototype.slice */

        var ArraySlice = Array.prototype.slice;
        /** addEventListener string const */

        var ADD_EVENT_LISTENER_STR = 'addEventListener';
        /** removeEventListener string const */

        var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
        /** zoneSymbol addEventListener */

        var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
        /** zoneSymbol removeEventListener */


        var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
        /** true string const */


        var TRUE_STR = 'true';
        /** false string const */

        var FALSE_STR = 'false';
        /** Zone symbol prefix string const. */

        var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

        function wrapWithCurrentZone(callback, source) {
          return Zone.current.wrap(callback, source);
        }

        function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
          return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
        }

        var zoneSymbol = Zone.__symbol__;
        var isWindowExists = typeof window !== 'undefined';
        var internalWindow = isWindowExists ? window : undefined;

        var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

        var REMOVE_ATTRIBUTE = 'removeAttribute';
        var NULL_ON_PROP_VALUE = [null];

        function bindArguments(args, source) {
          for (var i = args.length - 1; i >= 0; i--) {
            if (typeof args[i] === 'function') {
              args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
            }
          }

          return args;
        }

        function patchPrototype(prototype, fnNames) {
          var source = prototype.constructor['name'];

          var _loop3 = function _loop3(i) {
            var name = fnNames[i];
            var delegate = prototype[name];

            if (delegate) {
              var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

              if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
              }

              prototype[name] = function (delegate) {
                var patched = function patched() {
                  return delegate.apply(this, bindArguments(arguments, source + '.' + name));
                };

                attachOriginToPatched(patched, delegate);
                return patched;
              }(delegate);
            }
          };

          for (var i = 0; i < fnNames.length; i++) {
            var _ret = _loop3(i);

            if (_ret === "continue") continue;
          }
        }

        function isPropertyWritable(propertyDesc) {
          if (!propertyDesc) {
            return true;
          }

          if (propertyDesc.writable === false) {
            return false;
          }

          return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
        }

        var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
        // this code.

        var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
        var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
        // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
        // this code.

        var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
        var zoneSymbolEventNames = {};

        var wrapFn = function wrapFn(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          }

          var eventNameSymbol = zoneSymbolEventNames[event.type];

          if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
          }

          var target = this || event.target || _global;
          var listener = target[eventNameSymbol];
          var result;

          if (isBrowser && target === internalWindow && event.type === 'error') {
            // window.onerror have different signiture
            // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
            // and onerror callback will prevent default when callback return true
            var errorEvent = event;
            result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

            if (result === true) {
              event.preventDefault();
            }
          } else {
            result = listener && listener.apply(this, arguments);

            if (result != undefined && !result) {
              event.preventDefault();
            }
          }

          return result;
        };

        function patchProperty(obj, prop, prototype) {
          var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

          if (!desc && prototype) {
            // when patch window object, use prototype to check prop exist or not
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

            if (prototypeDesc) {
              desc = {
                enumerable: true,
                configurable: true
              };
            }
          } // if the descriptor not exists or is not configurable
          // just return


          if (!desc || !desc.configurable) {
            return;
          }

          var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

          if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
            return;
          } // A property descriptor cannot have getter/setter and be writable
          // deleting the writable and value properties avoids this error:
          //
          // TypeError: property descriptors must not specify a value or be writable when a
          // getter or setter has been specified


          delete desc.writable;
          delete desc.value;
          var originalDescGet = desc.get;
          var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

          var eventName = prop.substr(2);
          var eventNameSymbol = zoneSymbolEventNames[eventName];

          if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
          }

          desc.set = function (newValue) {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            var target = this;

            if (!target && obj === _global) {
              target = _global;
            }

            if (!target) {
              return;
            }

            var previousValue = target[eventNameSymbol];

            if (previousValue) {
              target.removeEventListener(eventName, wrapFn);
            } // issue #978, when onload handler was added before loading zone.js
            // we should remove it with originalDescSet


            if (originalDescSet) {
              originalDescSet.apply(target, NULL_ON_PROP_VALUE);
            }

            if (typeof newValue === 'function') {
              target[eventNameSymbol] = newValue;
              target.addEventListener(eventName, wrapFn, false);
            } else {
              target[eventNameSymbol] = null;
            }
          }; // The getter would return undefined for unassigned properties but the default value of an
          // unassigned property is null


          desc.get = function () {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            var target = this;

            if (!target && obj === _global) {
              target = _global;
            }

            if (!target) {
              return null;
            }

            var listener = target[eventNameSymbol];

            if (listener) {
              return listener;
            } else if (originalDescGet) {
              // result will be null when use inline event attribute,
              // such as <button onclick="func();">OK</button>
              // because the onclick function is internal raw uncompiled handler
              // the onclick will be evaluated when first time event was triggered or
              // the property is accessed, https://github.com/angular/zone.js/issues/525
              // so we should use original native get to retrieve the handler
              var value = originalDescGet && originalDescGet.call(this);

              if (value) {
                desc.set.call(this, value);

                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                  target.removeAttribute(prop);
                }

                return value;
              }
            }

            return null;
          };

          ObjectDefineProperty(obj, prop, desc);
          obj[onPropPatchedSymbol] = true;
        }

        function patchOnProperties(obj, properties, prototype) {
          if (properties) {
            for (var i = 0; i < properties.length; i++) {
              patchProperty(obj, 'on' + properties[i], prototype);
            }
          } else {
            var onProperties = [];

            for (var prop in obj) {
              if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
              }
            }

            for (var j = 0; j < onProperties.length; j++) {
              patchProperty(obj, onProperties[j], prototype);
            }
          }
        }

        var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

        function patchClass(className) {
          var OriginalClass = _global[className];
          if (!OriginalClass) return; // keep original class in global

          _global[zoneSymbol(className)] = OriginalClass;

          _global[className] = function () {
            var a = bindArguments(arguments, className);

            switch (a.length) {
              case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;

              case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;

              case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;

              case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;

              case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;

              default:
                throw new Error('Arg list too long.');
            }
          }; // attach original delegate to patched function


          attachOriginToPatched(_global[className], OriginalClass);
          var instance = new OriginalClass(function () {});
          var prop;

          for (prop in instance) {
            // https://bugs.webkit.org/show_bug.cgi?id=44721
            if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

            (function (prop) {
              if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                  return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
              } else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                  set: function set(fn) {
                    if (typeof fn === 'function') {
                      this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                      // use it in Function.prototype.toString to return
                      // the native one.

                      attachOriginToPatched(this[originalInstanceKey][prop], fn);
                    } else {
                      this[originalInstanceKey][prop] = fn;
                    }
                  },
                  get: function get() {
                    return this[originalInstanceKey][prop];
                  }
                });
              }
            })(prop);
          }

          for (prop in OriginalClass) {
            if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
              _global[className][prop] = OriginalClass[prop];
            }
          }
        }

        function copySymbolProperties(src, dest) {
          if (typeof Object.getOwnPropertySymbols !== 'function') {
            return;
          }

          var symbols = Object.getOwnPropertySymbols(src);
          symbols.forEach(function (symbol) {
            var desc = Object.getOwnPropertyDescriptor(src, symbol);
            Object.defineProperty(dest, symbol, {
              get: function get() {
                return src[symbol];
              },
              set: function set(value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                  // if src[symbol] is not writable or not have a setter, just return
                  return;
                }

                src[symbol] = value;
              },
              enumerable: desc ? desc.enumerable : true,
              configurable: desc ? desc.configurable : true
            });
          });
        }

        var shouldCopySymbolProperties = false;

        function patchMethod(target, name, patchFn) {
          var proto = target;

          while (proto && !proto.hasOwnProperty(name)) {
            proto = ObjectGetPrototypeOf(proto);
          }

          if (!proto && target[name]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = target;
          }

          var delegateName = zoneSymbol(name);
          var delegate = null;

          if (proto && !(delegate = proto[delegateName])) {
            delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
            // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

            var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

            if (isPropertyWritable(desc)) {
              var patchDelegate = patchFn(delegate, delegateName, name);

              proto[name] = function () {
                return patchDelegate(this, arguments);
              };

              attachOriginToPatched(proto[name], delegate);

              if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
              }
            }
          }

          return delegate;
        } // TODO: @JiaLiPassion, support cancel task later if necessary


        function patchMacroTask(obj, funcName, metaCreator) {
          var setNative = null;

          function scheduleTask(task) {
            var data = task.data;

            data.args[data.cbIdx] = function () {
              task.invoke.apply(this, arguments);
            };

            setNative.apply(data.target, data.args);
            return task;
          }

          setNative = patchMethod(obj, funcName, function (delegate) {
            return function (self, args) {
              var meta = metaCreator(self, args);

              if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
                return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
              } else {
                // cause an error by calling it directly.
                return delegate.apply(self, args);
              }
            };
          });
        }

        function attachOriginToPatched(patched, original) {
          patched[zoneSymbol('OriginalDelegate')] = original;
        }

        var isDetectedIEOrEdge = false;
        var ieOrEdge = false;

        function isIE() {
          try {
            var ua = internalWindow.navigator.userAgent;

            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
              return true;
            }
          } catch (error) {}

          return false;
        }

        function isIEOrEdge() {
          if (isDetectedIEOrEdge) {
            return ieOrEdge;
          }

          isDetectedIEOrEdge = true;

          try {
            var ua = internalWindow.navigator.userAgent;

            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
              ieOrEdge = true;
            }
          } catch (error) {}

          return ieOrEdge;
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
        // override Function.prototype.toString to make zone.js patched function
        // look like native function


        Zone.__load_patch('toString', function (global) {
          // patch Func.prototype.toString to let them look like native
          var originalFunctionToString = Function.prototype.toString;
          var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
          var PROMISE_SYMBOL = zoneSymbol('Promise');
          var ERROR_SYMBOL = zoneSymbol('Error');

          var newFunctionToString = function toString() {
            if (typeof this === 'function') {
              var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

              if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                  return originalFunctionToString.call(originalDelegate);
                } else {
                  return Object.prototype.toString.call(originalDelegate);
                }
              }

              if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];

                if (nativePromise) {
                  return originalFunctionToString.call(nativePromise);
                }
              }

              if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];

                if (nativeError) {
                  return originalFunctionToString.call(nativeError);
                }
              }
            }

            return originalFunctionToString.call(this);
          };

          newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
          Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

          var originalObjectToString = Object.prototype.toString;
          var PROMISE_OBJECT_TO_STRING = '[object Promise]';

          Object.prototype.toString = function () {
            if (this instanceof Promise) {
              return PROMISE_OBJECT_TO_STRING;
            }

            return originalObjectToString.call(this);
          };
        });
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        var passiveSupported = false;

        if (typeof window !== 'undefined') {
          try {
            var options = Object.defineProperty({}, 'passive', {
              get: function get() {
                passiveSupported = true;
              }
            });
            window.addEventListener('test', options, options);
            window.removeEventListener('test', options, options);
          } catch (err) {
            passiveSupported = false;
          }
        } // an identifier to tell ZoneTask do not create a new invoke closure


        var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
          useG: true
        };
        var zoneSymbolEventNames$1 = {};
        var globalSources = {};
        var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
        var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

        function prepareEventNames(eventName, eventNameToString) {
          var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
          var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
          var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
          var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
          zoneSymbolEventNames$1[eventName] = {};
          zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
          zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
        }

        function patchEventTarget(_global, apis, patchOptions) {
          var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
          var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
          var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
          var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
          var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
          var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
          var PREPEND_EVENT_LISTENER = 'prependListener';
          var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

          var invokeTask = function invokeTask(task, target, event) {
            // for better performance, check isRemoved which is set
            // by removeEventListener
            if (task.isRemoved) {
              return;
            }

            var delegate = task.callback;

            if (typeof delegate === 'object' && delegate.handleEvent) {
              // create the bind version of handleEvent when invoke
              task.callback = function (event) {
                return delegate.handleEvent(event);
              };

              task.originalDelegate = delegate;
            } // invoke static task.invoke


            task.invoke(task, target, [event]);
            var options = task.options;

            if (options && typeof options === 'object' && options.once) {
              // if options.once is true, after invoke once remove listener here
              // only browser need to do this, nodejs eventEmitter will cal removeListener
              // inside EventEmitter.once
              var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

              target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
            }
          }; // global shared zoneAwareCallback to handle all event callback with capture = false


          var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;

            if (!event) {
              return;
            } // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190


            var target = this || event.target || _global;
            var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

            if (tasks) {
              // invoke all tasks which attached to current target with given event.type and capture = false
              // for performance concern, if task.length === 1, just invoke
              if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
              } else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();

                for (var i = 0; i < copyTasks.length; i++) {
                  if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                    break;
                  }

                  invokeTask(copyTasks[i], target, event);
                }
              }
            }
          }; // global shared zoneAwareCallback to handle all event callback with capture = true


          var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;

            if (!event) {
              return;
            } // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190


            var target = this || event.target || _global;
            var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

            if (tasks) {
              // invoke all tasks which attached to current target with given event.type and capture = false
              // for performance concern, if task.length === 1, just invoke
              if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
              } else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();

                for (var i = 0; i < copyTasks.length; i++) {
                  if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                    break;
                  }

                  invokeTask(copyTasks[i], target, event);
                }
              }
            }
          };

          function patchEventTargetMethods(obj, patchOptions) {
            if (!obj) {
              return false;
            }

            var useGlobalCallback = true;

            if (patchOptions && patchOptions.useG !== undefined) {
              useGlobalCallback = patchOptions.useG;
            }

            var validateHandler = patchOptions && patchOptions.vh;
            var checkDuplicate = true;

            if (patchOptions && patchOptions.chkDup !== undefined) {
              checkDuplicate = patchOptions.chkDup;
            }

            var returnTarget = false;

            if (patchOptions && patchOptions.rt !== undefined) {
              returnTarget = patchOptions.rt;
            }

            var proto = obj;

            while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
              proto = ObjectGetPrototypeOf(proto);
            }

            if (!proto && obj[ADD_EVENT_LISTENER]) {
              // somehow we did not find it, but we can see it. This happens on IE for Window properties.
              proto = obj;
            }

            if (!proto) {
              return false;
            }

            if (proto[zoneSymbolAddEventListener]) {
              return false;
            }

            var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
            // so we do not need to create a new object just for pass some data

            var taskData = {};
            var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
            var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
            var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
            var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
            var nativePrependEventListener;

            if (patchOptions && patchOptions.prepend) {
              nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
            }
            /**
             * This util function will build an option object with passive option
             * to handle all possible input from the user.
             */


            function buildEventListenerOptions(options, passive) {
              if (!passiveSupported && typeof options === 'object' && options) {
                // doesn't support passive but user want to pass an object as options.
                // this will not work on some old browser, so we just pass a boolean
                // as useCapture parameter
                return !!options.capture;
              }

              if (!passiveSupported || !passive) {
                return options;
              }

              if (typeof options === 'boolean') {
                return {
                  capture: options,
                  passive: true
                };
              }

              if (!options) {
                return {
                  passive: true
                };
              }

              if (typeof options === 'object' && options.passive !== false) {
                return Object.assign(Object.assign({}, options), {
                  passive: true
                });
              }

              return options;
            }

            var customScheduleGlobal = function customScheduleGlobal(task) {
              // if there is already a task for the eventName + capture,
              // just return, because we use the shared globalZoneAwareCallback here.
              if (taskData.isExisting) {
                return;
              }

              return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
            };

            var customCancelGlobal = function customCancelGlobal(task) {
              // if task is not marked as isRemoved, this call is directly
              // from Zone.prototype.cancelTask, we should remove the task
              // from tasksList of target first
              if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName;

                if (symbolEventNames) {
                  symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }

                var existingTasks = symbolEventName && task.target[symbolEventName];

                if (existingTasks) {
                  for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];

                    if (existingTask === task) {
                      existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                      task.isRemoved = true;

                      if (existingTasks.length === 0) {
                        // all tasks for the eventName + capture have gone,
                        // remove globalZoneAwareCallback and remove the task cache from target
                        task.allRemoved = true;
                        task.target[symbolEventName] = null;
                      }

                      break;
                    }
                  }
                }
              } // if all tasks for the eventName + capture have gone,
              // we will really remove the global event callback,
              // if not, return


              if (!task.allRemoved) {
                return;
              }

              return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
            };

            var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
              return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };

            var customSchedulePrepend = function customSchedulePrepend(task) {
              return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };

            var customCancelNonGlobal = function customCancelNonGlobal(task) {
              return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
            };

            var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
            var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

            var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
              var typeOfDelegate = typeof delegate;
              return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
            };

            var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
            var blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];

            var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

            var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
              var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
              var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
              return function () {
                var target = this || _global;
                var eventName = arguments[0];

                if (patchOptions && patchOptions.transferEventName) {
                  eventName = patchOptions.transferEventName(eventName);
                }

                var delegate = arguments[1];

                if (!delegate) {
                  return nativeListener.apply(this, arguments);
                }

                if (isNode && eventName === 'uncaughtException') {
                  // don't patch uncaughtException of nodejs to prevent endless loop
                  return nativeListener.apply(this, arguments);
                } // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke


                var isHandleEvent = false;

                if (typeof delegate !== 'function') {
                  if (!delegate.handleEvent) {
                    return nativeListener.apply(this, arguments);
                  }

                  isHandleEvent = true;
                }

                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                  return;
                }

                var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
                var options = buildEventListenerOptions(arguments[2], passive);

                if (blackListedEvents) {
                  // check black list
                  for (var i = 0; i < blackListedEvents.length; i++) {
                    if (eventName === blackListedEvents[i]) {
                      if (passive) {
                        return nativeListener.call(target, eventName, delegate, options);
                      } else {
                        return nativeListener.apply(this, arguments);
                      }
                    }
                  }
                }

                var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                var once = options && typeof options === 'object' ? options.once : false;
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];

                if (!symbolEventNames) {
                  prepareEventNames(eventName, eventNameToString);
                  symbolEventNames = zoneSymbolEventNames$1[eventName];
                }

                var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                var existingTasks = target[symbolEventName];
                var isExisting = false;

                if (existingTasks) {
                  // already have task registered
                  isExisting = true;

                  if (checkDuplicate) {
                    for (var _i = 0; _i < existingTasks.length; _i++) {
                      if (compare(existingTasks[_i], delegate)) {
                        // same callback, same capture, same event name, just return
                        return;
                      }
                    }
                  }
                } else {
                  existingTasks = target[symbolEventName] = [];
                }

                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];

                if (targetSource) {
                  source = targetSource[eventName];
                }

                if (!source) {
                  source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
                } // do not create a new object as task.data to pass those things
                // just use the global shared one


                taskData.options = options;

                if (once) {
                  // if addEventListener with once options, we don't pass it to
                  // native addEventListener, instead we keep the once setting
                  // and handle ourselves.
                  taskData.options.once = false;
                }

                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

                if (data) {
                  data.taskData = taskData;
                }

                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442

                taskData.target = null; // need to clear up taskData because it is a global object

                if (data) {
                  data.taskData = null;
                } // have to save those information to task in case
                // application may call task.zone.cancelTask() directly


                if (once) {
                  options.once = true;
                }

                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                  // if not support passive, and we pass an option object
                  // to addEventListener, we should save the options to task
                  task.options = options;
                }

                task.target = target;
                task.capture = capture;
                task.eventName = eventName;

                if (isHandleEvent) {
                  // save original delegate for compare to check duplicate
                  task.originalDelegate = delegate;
                }

                if (!prepend) {
                  existingTasks.push(task);
                } else {
                  existingTasks.unshift(task);
                }

                if (returnTarget) {
                  return target;
                }
              };
            };

            proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

            if (nativePrependEventListener) {
              proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
            }

            proto[REMOVE_EVENT_LISTENER] = function () {
              var target = this || _global;
              var eventName = arguments[0];

              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var options = arguments[2];
              var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
              var delegate = arguments[1];

              if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
              }

              if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
              }

              var symbolEventNames = zoneSymbolEventNames$1[eventName];
              var symbolEventName;

              if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
              }

              var existingTasks = symbolEventName && target[symbolEventName];

              if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                  var existingTask = existingTasks[i];

                  if (compare(existingTask, delegate)) {
                    existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                    existingTask.isRemoved = true;

                    if (existingTasks.length === 0) {
                      // all tasks for the eventName + capture have gone,
                      // remove globalZoneAwareCallback and remove the task cache from target
                      existingTask.allRemoved = true;
                      target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                      // such as target.onclick = function() {}, so we need to clear this internal
                      // property too if all delegates all removed

                      if (typeof eventName === 'string') {
                        var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                        target[onPropertySymbol] = null;
                      }
                    }

                    existingTask.zone.cancelTask(existingTask);

                    if (returnTarget) {
                      return target;
                    }

                    return;
                  }
                }
              } // issue 930, didn't find the event name or callback
              // from zone kept existingTasks, the callback maybe
              // added outside of zone, we need to call native removeEventListener
              // to try to remove it.


              return nativeRemoveEventListener.apply(this, arguments);
            };

            proto[LISTENERS_EVENT_LISTENER] = function () {
              var target = this || _global;
              var eventName = arguments[0];

              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var listeners = [];
              var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

              for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
              }

              return listeners;
            };

            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
              var target = this || _global;
              var eventName = arguments[0];

              if (!eventName) {
                var keys = Object.keys(target);

                for (var i = 0; i < keys.length; i++) {
                  var prop = keys[i];
                  var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                  var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
                  // used for monitoring the removeListener call,
                  // so just keep removeListener eventListener until
                  // all other eventListeners are removed

                  if (evtName && evtName !== 'removeListener') {
                    this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                  }
                } // remove removeListener listener finally


                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
              } else {
                if (patchOptions && patchOptions.transferEventName) {
                  eventName = patchOptions.transferEventName(eventName);
                }

                var symbolEventNames = zoneSymbolEventNames$1[eventName];

                if (symbolEventNames) {
                  var symbolEventName = symbolEventNames[FALSE_STR];
                  var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                  var tasks = target[symbolEventName];
                  var captureTasks = target[symbolCaptureEventName];

                  if (tasks) {
                    var removeTasks = tasks.slice();

                    for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                      var task = removeTasks[_i2];
                      var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                      this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                    }
                  }

                  if (captureTasks) {
                    var _removeTasks = captureTasks.slice();

                    for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                      var _task = _removeTasks[_i3];

                      var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                      this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                    }
                  }
                }
              }

              if (returnTarget) {
                return this;
              }
            }; // for native toString patch


            attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
            attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

            if (nativeRemoveAllListeners) {
              attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
            }

            if (nativeListeners) {
              attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
            }

            return true;
          }

          var results = [];

          for (var i = 0; i < apis.length; i++) {
            results[i] = patchEventTargetMethods(apis[i], patchOptions);
          }

          return results;
        }

        function findEventTasks(target, eventName) {
          if (!eventName) {
            var foundTasks = [];

            for (var prop in target) {
              var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
              var evtName = match && match[1];

              if (evtName && (!eventName || evtName === eventName)) {
                var tasks = target[prop];

                if (tasks) {
                  for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                  }
                }
              }
            }

            return foundTasks;
          }

          var symbolEventName = zoneSymbolEventNames$1[eventName];

          if (!symbolEventName) {
            prepareEventNames(eventName);
            symbolEventName = zoneSymbolEventNames$1[eventName];
          }

          var captureFalseTasks = target[symbolEventName[FALSE_STR]];
          var captureTrueTasks = target[symbolEventName[TRUE_STR]];

          if (!captureFalseTasks) {
            return captureTrueTasks ? captureTrueTasks.slice() : [];
          } else {
            return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
          }
        }

        function patchEventPrototype(global, api) {
          var Event = global['Event'];

          if (Event && Event.prototype) {
            api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
              return function (self, args) {
                self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
                // in case in some hybrid application, some part of
                // application will be controlled by zone, some are not

                delegate && delegate.apply(self, args);
              };
            });
          }
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        function patchCallbacks(api, target, targetName, method, callbacks) {
          var symbol = Zone.__symbol__(method);

          if (target[symbol]) {
            return;
          }

          var nativeDelegate = target[symbol] = target[method];

          target[method] = function (name, opts, options) {
            if (opts && opts.prototype) {
              callbacks.forEach(function (callback) {
                var source = "".concat(targetName, ".").concat(method, "::") + callback;
                var prototype = opts.prototype;

                if (prototype.hasOwnProperty(callback)) {
                  var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

                  if (descriptor && descriptor.value) {
                    descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                    api._redefineProperty(opts.prototype, callback, descriptor);
                  } else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                  }
                } else if (prototype[callback]) {
                  prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
              });
            }

            return nativeDelegate.call(target, name, opts, options);
          };

          api.attachOriginToPatched(target[method], nativeDelegate);
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
        var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
        var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
        var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
        var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
        var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
        var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
        var formEventNames = ['autocomplete', 'autocompleteerror'];
        var detailEventNames = ['toggle'];
        var frameEventNames = ['load'];
        var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
        var marqueeEventNames = ['bounce', 'finish', 'start'];
        var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
        var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
        var websocketEventNames = ['close', 'error', 'open', 'message'];
        var workerEventNames = ['error', 'message'];
        var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

        function filterProperties(target, onProperties, ignoreProperties) {
          if (!ignoreProperties || ignoreProperties.length === 0) {
            return onProperties;
          }

          var tip = ignoreProperties.filter(function (ip) {
            return ip.target === target;
          });

          if (!tip || tip.length === 0) {
            return onProperties;
          }

          var targetIgnoreProperties = tip[0].ignoreProperties;
          return onProperties.filter(function (op) {
            return targetIgnoreProperties.indexOf(op) === -1;
          });
        }

        function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
          // check whether target is available, sometimes target will be undefined
          // because different browser or some 3rd party plugin.
          if (!target) {
            return;
          }

          var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
          patchOnProperties(target, filteredProperties, prototype);
        }

        function propertyDescriptorPatch(api, _global) {
          if (isNode && !isMix) {
            return;
          }

          if (Zone[api.symbol('patchEvents')]) {
            // events are already been patched by legacy patch.
            return;
          }

          var supportsWebSocket = typeof WebSocket !== 'undefined';
          var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

          if (isBrowser) {
            var _internalWindow = window;
            var ignoreErrorProperties = isIE ? [{
              target: _internalWindow,
              ignoreProperties: ['error']
            }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not

            patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

            if (typeof _internalWindow['SVGElement'] !== 'undefined') {
              patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }

            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

            if (HTMLMarqueeElement) {
              patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
            }

            var Worker = _internalWindow['Worker'];

            if (Worker) {
              patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
            }
          }

          var XMLHttpRequest = _global['XMLHttpRequest'];

          if (XMLHttpRequest) {
            // XMLHttpRequest is not available in ServiceWorker, so we need to check here
            patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
          }

          var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

          if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
          }

          if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
          }

          if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
          }
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        Zone.__load_patch('util', function (global, Zone, api) {
          api.patchOnProperties = patchOnProperties;
          api.patchMethod = patchMethod;
          api.bindArguments = bindArguments;
          api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
          // define which events will not be patched by `Zone.js`.
          // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
          // the name consistent with angular repo.
          // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
          // backwards compatibility.

          var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

          var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

          if (global[SYMBOL_UNPATCHED_EVENTS]) {
            global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
          }

          if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
            Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
          }

          api.patchEventPrototype = patchEventPrototype;
          api.patchEventTarget = patchEventTarget;
          api.isIEOrEdge = isIEOrEdge;
          api.ObjectDefineProperty = ObjectDefineProperty;
          api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
          api.ObjectCreate = ObjectCreate;
          api.ArraySlice = ArraySlice;
          api.patchClass = patchClass;
          api.wrapWithCurrentZone = wrapWithCurrentZone;
          api.filterProperties = filterProperties;
          api.attachOriginToPatched = attachOriginToPatched;
          api._redefineProperty = Object.defineProperty;
          api.patchCallbacks = patchCallbacks;

          api.getGlobalObjects = function () {
            return {
              globalSources: globalSources,
              zoneSymbolEventNames: zoneSymbolEventNames$1,
              eventNames: eventNames,
              isBrowser: isBrowser,
              isMix: isMix,
              isNode: isNode,
              TRUE_STR: TRUE_STR,
              FALSE_STR: FALSE_STR,
              ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
              ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
              REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
            };
          };
        });
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        var taskSymbol = zoneSymbol('zoneTask');

        function patchTimer(window, setName, cancelName, nameSuffix) {
          var setNative = null;
          var clearNative = null;
          setName += nameSuffix;
          cancelName += nameSuffix;
          var tasksByHandleId = {};

          function scheduleTask(task) {
            var data = task.data;

            function timer() {
              try {
                task.invoke.apply(this, arguments);
              } finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                  if (typeof data.handleId === 'number') {
                    // in non-nodejs env, we remove timerId
                    // from local cache
                    delete tasksByHandleId[data.handleId];
                  } else if (data.handleId) {
                    // Node returns complex objects as handleIds
                    // we remove task reference from timer object
                    data.handleId[taskSymbol] = null;
                  }
                }
              }
            }

            data.args[0] = timer;
            data.handleId = setNative.apply(window, data.args);
            return task;
          }

          function clearTask(task) {
            return clearNative(task.data.handleId);
          }

          setNative = patchMethod(window, setName, function (delegate) {
            return function (self, args) {
              if (typeof args[0] === 'function') {
                var _options = {
                  isPeriodic: nameSuffix === 'Interval',
                  delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
                  args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

                if (!task) {
                  return task;
                } // Node.js must additionally support the ref and unref functions.


                var handle = task.data.handleId;

                if (typeof handle === 'number') {
                  // for non nodejs env, we save handleId: task
                  // mapping in local cache for clearTimeout
                  tasksByHandleId[handle] = task;
                } else if (handle) {
                  // for nodejs env, we save task
                  // reference in timerId Object for clearTimeout
                  handle[taskSymbol] = task;
                } // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
                  task.ref = handle.ref.bind(handle);
                  task.unref = handle.unref.bind(handle);
                }

                if (typeof handle === 'number' || handle) {
                  return handle;
                }

                return task;
              } else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
              }
            };
          });
          clearNative = patchMethod(window, cancelName, function (delegate) {
            return function (self, args) {
              var id = args[0];
              var task;

              if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
              } else {
                // nodejs env.
                task = id && id[taskSymbol]; // other environments.

                if (!task) {
                  task = id;
                }
              }

              if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                  if (typeof id === 'number') {
                    delete tasksByHandleId[id];
                  } else if (id) {
                    id[taskSymbol] = null;
                  } // Do not cancel already canceled functions


                  task.zone.cancelTask(task);
                }
              } else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
              }
            };
          });
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        function patchCustomElements(_global, api) {
          var _api$getGlobalObjects = api.getGlobalObjects(),
              isBrowser = _api$getGlobalObjects.isBrowser,
              isMix = _api$getGlobalObjects.isMix;

          if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
            return;
          }

          var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
          api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        function eventTargetPatch(_global, api) {
          if (Zone[api.symbol('patchEventTarget')]) {
            // EventTarget is already patched.
            return;
          }

          var _api$getGlobalObjects2 = api.getGlobalObjects(),
              eventNames = _api$getGlobalObjects2.eventNames,
              zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
              TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
              FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
              ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


          for (var i = 0; i < eventNames.length; i++) {
            var eventName = eventNames[i];
            var falseEventName = eventName + FALSE_STR;
            var trueEventName = eventName + TRUE_STR;
            var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
            var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
            zoneSymbolEventNames[eventName] = {};
            zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
            zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
          }

          var EVENT_TARGET = _global['EventTarget'];

          if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
            return;
          }

          api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
          return true;
        }

        function patchEvent(global, api) {
          api.patchEventPrototype(global, api);
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */


        Zone.__load_patch('legacy', function (global) {
          var legacyPatch = global[Zone.__symbol__('legacyPatch')];

          if (legacyPatch) {
            legacyPatch();
          }
        });

        Zone.__load_patch('timers', function (global) {
          var set = 'set';
          var clear = 'clear';
          patchTimer(global, set, clear, 'Timeout');
          patchTimer(global, set, clear, 'Interval');
          patchTimer(global, set, clear, 'Immediate');
        });

        Zone.__load_patch('requestAnimationFrame', function (global) {
          patchTimer(global, 'request', 'cancel', 'AnimationFrame');
          patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
          patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
        });

        Zone.__load_patch('blocking', function (global, Zone) {
          var blockingMethods = ['alert', 'prompt', 'confirm'];

          for (var i = 0; i < blockingMethods.length; i++) {
            var name = blockingMethods[i];
            patchMethod(global, name, function (delegate, symbol, name) {
              return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
              };
            });
          }
        });

        Zone.__load_patch('EventTarget', function (global, Zone, api) {
          patchEvent(global, api);
          eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

          var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

          if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
            api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
          }

          patchClass('MutationObserver');
          patchClass('WebKitMutationObserver');
          patchClass('IntersectionObserver');
          patchClass('FileReader');
        });

        Zone.__load_patch('on_property', function (global, Zone, api) {
          propertyDescriptorPatch(api, global);
        });

        Zone.__load_patch('customElements', function (global, Zone, api) {
          patchCustomElements(global, api);
        });

        Zone.__load_patch('XHR', function (global, Zone) {
          // Treat XMLHttpRequest as a macrotask.
          patchXHR(global);
          var XHR_TASK = zoneSymbol('xhrTask');
          var XHR_SYNC = zoneSymbol('xhrSync');
          var XHR_LISTENER = zoneSymbol('xhrListener');
          var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
          var XHR_URL = zoneSymbol('xhrURL');
          var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

          function patchXHR(window) {
            var XMLHttpRequest = window['XMLHttpRequest'];

            if (!XMLHttpRequest) {
              // XMLHttpRequest is not available in service worker
              return;
            }

            var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

            function findPendingTask(target) {
              return target[XHR_TASK];
            }

            var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

            if (!oriAddListener) {
              var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

              if (XMLHttpRequestEventTarget) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
              }
            }

            var READY_STATE_CHANGE = 'readystatechange';
            var SCHEDULED = 'scheduled';

            function scheduleTask(task) {
              var data = task.data;
              var target = data.target;
              target[XHR_SCHEDULED] = false;
              target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

              var listener = target[XHR_LISTENER];

              if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
              }

              if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
              }

              var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                  // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                  // readyState=4 multiple times, so we need to check task state here
                  if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                    // check whether the xhr has registered onload listener
                    // if that is the case, the task should invoke after all
                    // onload listeners finish.
                    var loadTasks = target[Zone.__symbol__('loadfalse')];

                    if (loadTasks && loadTasks.length > 0) {
                      var oriInvoke = task.invoke;

                      task.invoke = function () {
                        // need to load the tasks again, because in other
                        // load listener, they may remove themselves
                        var loadTasks = target[Zone.__symbol__('loadfalse')];

                        for (var i = 0; i < loadTasks.length; i++) {
                          if (loadTasks[i] === task) {
                            loadTasks.splice(i, 1);
                          }
                        }

                        if (!data.aborted && task.state === SCHEDULED) {
                          oriInvoke.call(task);
                        }
                      };

                      loadTasks.push(task);
                    } else {
                      task.invoke();
                    }
                  } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                    // error occurs when xhr.send()
                    target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                  }
                }
              };

              oriAddListener.call(target, READY_STATE_CHANGE, newListener);
              var storedTask = target[XHR_TASK];

              if (!storedTask) {
                target[XHR_TASK] = task;
              }

              sendNative.apply(target, data.args);
              target[XHR_SCHEDULED] = true;
              return task;
            }

            function placeholderCallback() {}

            function clearTask(task) {
              var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
              // to prevent it from firing. So instead, we store info for the event listener.

              data.aborted = true;
              return abortNative.apply(data.target, data.args);
            }

            var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
              return function (self, args) {
                self[XHR_SYNC] = args[2] == false;
                self[XHR_URL] = args[1];
                return openNative.apply(self, args);
              };
            });
            var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
            var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
            var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
            var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
              return function (self, args) {
                if (Zone.current[fetchTaskScheduling] === true) {
                  // a fetch is scheduling, so we are using xhr to polyfill fetch
                  // and because we already schedule macroTask for fetch, we should
                  // not schedule a macroTask for xhr again
                  return sendNative.apply(self, args);
                }

                if (self[XHR_SYNC]) {
                  // if the XHR is sync there is no task to schedule, just execute the code.
                  return sendNative.apply(self, args);
                } else {
                  var _options2 = {
                    target: self,
                    url: self[XHR_URL],
                    isPeriodic: false,
                    args: args,
                    aborted: false
                  };
                  var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

                  if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                  }
                }
              };
            });
            var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
              return function (self, args) {
                var task = findPendingTask(self);

                if (task && typeof task.type == 'string') {
                  // If the XHR has already completed, do nothing.
                  // If the XHR has already been aborted, do nothing.
                  // Fix #569, call abort multiple times before done will cause
                  // macroTask task count be negative number
                  if (task.cancelFn == null || task.data && task.data.aborted) {
                    return;
                  }

                  task.zone.cancelTask(task);
                } else if (Zone.current[fetchTaskAborting] === true) {
                  // the abort is called from fetch polyfill, we need to call native abort of XHR.
                  return abortNative.apply(self, args);
                } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
                // task
                // to cancel. Do nothing.

              };
            });
          }
        });

        Zone.__load_patch('geolocation', function (global) {
          /// GEO_LOCATION
          if (global['navigator'] && global['navigator'].geolocation) {
            patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
          }
        });

        Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
          // handle unhandled promise rejection
          function findPromiseRejectionHandler(evtName) {
            return function (e) {
              var eventTasks = findEventTasks(global, evtName);
              eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];

                if (PromiseRejectionEvent) {
                  var evt = new PromiseRejectionEvent(evtName, {
                    promise: e.promise,
                    reason: e.rejection
                  });
                  eventTask.invoke(evt);
                }
              });
            };
          }

          if (global['PromiseRejectionEvent']) {
            Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
            Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
          }
        });
      });
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/home */
      "./src/app/pages/home/index.ts");
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./helpers */
      "./src/app/helpers/index.ts");

      var accountModule = function accountModule() {
        return __webpack_require__.e(
        /*! import() | pages-account-account-module */
        "pages-account-account-module").then(__webpack_require__.bind(null,
        /*! ./pages/account/account.module */
        "./src/app/pages/account/account.module.ts")).then(function (x) {
          return x.AccountModule;
        });
      };

      var usersModule = function usersModule() {
        return __webpack_require__.e(
        /*! import() | pages-users-users-module */
        "pages-users-users-module").then(__webpack_require__.bind(null,
        /*! ./pages/users/users.module */
        "./src/app/pages/users/users.module.ts")).then(function (x) {
          return x.UsersModule;
        });
      };

      var routes = [{
        path: '',
        component: _pages_home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'users',
        loadChildren: usersModule,
        canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'account',
        loadChildren: accountModule
      }, // otherwise redirect to home
      {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services */
      "./src/app/services/index.ts");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-socket-io */
      "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "./src/app/components/navbar/navbar.component.ts");
      /* harmony import */


      var _components_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/alert.component */
      "./src/app/components/alert.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent(accountService, socket) {
        var _this3 = this;

        _classCallCheck(this, AppComponent);

        this.accountService = accountService;
        this.socket = socket;
        this.accountService.user.subscribe(function (x) {
          return _this3.user = x;
        });
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app"]],
        decls: 4,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _components_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app',
            templateUrl: 'app.component.html'
          }]
        }], function () {
          return [{
            type: _services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
          }, {
            type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./helpers */
      "./src/app/helpers/index.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components */
      "./src/app/components/index.ts");
      /* harmony import */


      var _pages_home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/home */
      "./src/app/pages/home/index.ts");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "./src/app/components/navbar/navbar.component.ts");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-socket-io */
      "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
      /* harmony import */


      var _components_document_document_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/document/document.component */
      "./src/app/components/document/document.component.ts");
      /* harmony import */


      var _components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/document-list/document-list.component */
      "./src/app/components/document-list/document-list.component.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-monaco-editor */
      "./node_modules/ngx-monaco-editor/__ivy_ngcc__/fesm2015/ngx-monaco-editor.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! primeng/button */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! primeng/ripple */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
      /* harmony import */


      var primeng_sidebar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! primeng/sidebar */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! primeng/inputtext */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! primeng/card */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! primeng/table */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
      /* harmony import */


      var primeng_menubar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! primeng/menubar */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-menubar.js");
      /* harmony import */


      var primeng_tabview__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! primeng/tabview */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js"); // used to create fake backend
      // import { fakeBackendProvider } from './helpers';


      var config = {
        url: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].apiUrl,
        options: {}
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"].forRoot(config), ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_14__["MonacoEditorModule"].forRoot(), _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_22__["SidebarModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__["InputTextModule"], primeng_card__WEBPACK_IMPORTED_MODULE_24__["CardModule"], primeng_table__WEBPACK_IMPORTED_MODULE_25__["TableModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_26__["MenubarModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_27__["TabViewModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_21__["RippleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"], _pages_home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _components_document_document_component__WEBPACK_IMPORTED_MODULE_11__["DocumentComponent"], _components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_12__["DocumentListComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"], ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_14__["MonacoEditorModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_22__["SidebarModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__["InputTextModule"], primeng_card__WEBPACK_IMPORTED_MODULE_24__["CardModule"], primeng_table__WEBPACK_IMPORTED_MODULE_25__["TableModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_26__["MenubarModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_27__["TabViewModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_21__["RippleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["SocketIoModule"].forRoot(config), ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_14__["MonacoEditorModule"].forRoot(), _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"], primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_22__["SidebarModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__["InputTextModule"], primeng_card__WEBPACK_IMPORTED_MODULE_24__["CardModule"], primeng_table__WEBPACK_IMPORTED_MODULE_25__["TableModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_26__["MenubarModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_27__["TabViewModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_21__["RippleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"], _pages_home__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _components_document_document_component__WEBPACK_IMPORTED_MODULE_11__["DocumentComponent"], _components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_12__["DocumentListComponent"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/alert.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/components/alert.component.ts ***!
      \***********************************************/

    /*! exports provided: AlertComponent */

    /***/
    function srcAppComponentsAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/models */
      "./src/app/models/index.ts");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/services */
      "./src/app/services/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AlertComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var alert_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.removeAlert(alert_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cssClass(alert_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent(router, alertService) {
          _classCallCheck(this, AlertComponent);

          this.router = router;
          this.alertService = alertService;
          this.id = 'default-alert';
          this.fade = true;
          this.alerts = [];
        }

        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            // subscribe to new alert notifications
            this.alertSubscription = this.alertService.onAlert(this.id).subscribe(function (alert) {
              // clear alerts when an empty alert is received
              if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                _this4.alerts = _this4.alerts.filter(function (x) {
                  return x.keepAfterRouteChange;
                }); // remove 'keepAfterRouteChange' flag on the rest

                _this4.alerts.forEach(function (x) {
                  return delete x.keepAfterRouteChange;
                });

                return;
              } // add alert to array


              _this4.alerts.push(alert); // auto close alert if required


              if (alert.autoClose) {
                setTimeout(function () {
                  return _this4.removeAlert(alert);
                }, 3000);
              }
            }); // clear alerts on location change

            this.routeSubscription = this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this4.alertService.clear(_this4.id);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // unsubscribe to avoid memory leaks
            this.alertSubscription.unsubscribe();
            this.routeSubscription.unsubscribe();
          }
        }, {
          key: "removeAlert",
          value: function removeAlert(alert) {
            var _this5 = this;

            // check if already removed to prevent error on auto close
            if (!this.alerts.includes(alert)) return;

            if (this.fade) {
              // fade out alert
              this.alerts.find(function (x) {
                return x === alert;
              }).fade = true; // remove alert after faded out

              setTimeout(function () {
                _this5.alerts = _this5.alerts.filter(function (x) {
                  return x !== alert;
                });
              }, 250);
            } else {
              // remove alert
              this.alerts = this.alerts.filter(function (x) {
                return x !== alert;
              });
            }
          }
        }, {
          key: "cssClass",
          value: function cssClass(alert) {
            var _alertTypeClass;

            if (!alert) return;
            var classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];
            var alertTypeClass = (_alertTypeClass = {}, _defineProperty(_alertTypeClass, _app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success, 'alert alert-success'), _defineProperty(_alertTypeClass, _app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error, 'alert alert-danger'), _defineProperty(_alertTypeClass, _app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info, 'alert alert-info'), _defineProperty(_alertTypeClass, _app_models__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning, 'alert alert-warning'), _alertTypeClass);
            classes.push(alertTypeClass[alert.type]);

            if (alert.fade) {
              classes.push('fade');
            }

            return classes.join(' ');
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]));
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["alert"]],
        inputs: {
          id: "id",
          fade: "fade"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "close", 3, "click"], [3, "innerHTML"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 4, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'alert',
            templateUrl: 'alert.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fade: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/document-list/document-list.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/document-list/document-list.component.ts ***!
      \*********************************************************************/

    /*! exports provided: DocumentListComponent */

    /***/
    function srcAppComponentsDocumentListDocumentListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function () {
        return DocumentListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_services_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/document.service */
      "./src/app/services/document.service.ts");
      /* harmony import */


      var primeng_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/sidebar */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-sidebar.js");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/table */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/api */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/inputtext */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/button */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/ripple */
      "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function DocumentListComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DocumentListComponent_ng_template_6_Template_input_input_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r0.filterGlobal($event.target.value, "contains");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentListComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Owner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentListComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_ng_template_8_Template_td_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var document_r10 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.loadDoc(document_r10.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_ng_template_8_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var document_r10 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.addDocument(document_r10.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var document_r10 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", document_r10.id === ctx_r3.currentDoc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", document_r10.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r10.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r10.owner);
        }
      }

      function DocumentListComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DocumentListComponent_ng_template_16_Template_input_input_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            return _r4.filterGlobal($event.target.value, "contains");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentListComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Owner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentListComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_ng_template_18_Template_td_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var document_r16 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.loadDoc(document_r16.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_ng_template_18_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var document_r16 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.removeDocument(document_r16.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var document_r16 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", document_r16.id === ctx_r7.currentDoc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", document_r16.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r16.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r16.owner);
        }
      }

      var _c0 = function _c0() {
        return ["name", "id", "owner"];
      };

      var DocumentListComponent = /*#__PURE__*/function () {
        function DocumentListComponent(documentService) {
          _classCallCheck(this, DocumentListComponent);

          this.documentService = documentService;
          this.allProjectsSideBar = false;
          this.userProjectsSidebar = false;
        }

        _createClass(DocumentListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            // this.cols = [
            //   { field: 'name', header: 'Name'},
            //   { field: 'id', header: 'ID' },
            //   { field: 'owner', header: 'Owner' },
            // ];
            this.documents = this.documentService.documents;
            this._docSub = this.documentService.currentDocument.subscribe(function (doc) {
              return _this6.currentDoc = doc.id;
            });
            this._userDocSub = this.documentService.getUserDocuments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (docs) {
              _this6.userDocuments = docs;
              console.log(_this6.userDocuments);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._docSub.unsubscribe();
          }
        }, {
          key: "loadDoc",
          value: function loadDoc(id) {
            this.documentService.getDocument(id);
          }
        }, {
          key: "addDocument",
          value: function addDocument(pid) {
            this.documentService.addDocument(pid);
            this.ngOnInit();
            location.reload();
          }
        }, {
          key: "removeDocument",
          value: function removeDocument(pid) {
            this.documentService.deleteDocument(pid);
            this.ngOnInit();
            location.reload();
          }
        }, {
          key: "newDoc",
          value: function newDoc() {
            this.documentService.newDocument(this.newpName);
            this.ngOnInit();
          }
        }]);

        return DocumentListComponent;
      }();

      DocumentListComponent.ɵfac = function DocumentListComponent_Factory(t) {
        return new (t || DocumentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]));
      };

      DocumentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocumentListComponent,
        selectors: [["app-document-list"]],
        decls: 24,
        vars: 17,
        consts: [["styleClass", "p-sidebar-md", 3, "visible", "baseZIndex", "visibleChange"], [2, "font-weight", "normal"], ["styleClass", "p-datatable-sm", "scrollHeight", "65vh", 3, "value", "filterDelay", "globalFilterFields", "scrollable"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pInputText", "", "type", "text", "placeholder", "Project Name", "id", "pName", 2, "width", "95%", "color", "whitesmoke", 3, "ngModel", "ngModelChange"], ["type", "button", "label", "New Project", "styleClass", "p-button-success", 2, "margin", "15px 0", 3, "click"], ["styleClass", "p-datatable-sm", "scrollHeight", "55vh", 3, "value", "filterDelay", "globalFilterFields", "scrollable"], ["dt2", ""], [1, "sidebar"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-file", 1, "p-button", "p-button-rounded", "p-button-text", "sidebar-btn", 2, "margin", "5px 0", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-user", 1, "p-button", "p-button-rounded", "p-button-text", "sidebar-btn", 2, "margin", "5px 0", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button", "p-button-rounded", "p-button-text", "sidebar-btn", 2, "margin", "5px 0"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-share-alt", 1, "p-button", "p-button-rounded", "p-button-text", "sidebar-btn", 2, "margin", "5px 0"], [2, "text-align", "left"], [1, "pi", "pi-search", 2, "margin", "4px 4px 0 0"], ["type", "text", "pInputText", "", "size", "50", "placeholder", "Global Filter", 2, "width", "90%", 3, "input"], [2, "width", "45%"], [2, "width", "15%"], [2, "width", "30%"], [2, "width", "10%"], [1, "project-bar"], [2, "width", "45%", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-plus", 1, "p-button-sm", "p-button-rounded", "p-button-success", 3, "click"], [2, "width", "28%"], [2, "width", "12%"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-minus", 1, "p-button-sm", "p-button-rounded", "p-button-danger", 3, "click"]],
        template: function DocumentListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-sidebar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function DocumentListComponent_Template_p_sidebar_visibleChange_0_listener($event) {
              return ctx.allProjectsSideBar = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-table", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DocumentListComponent_ng_template_6_Template, 3, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocumentListComponent_ng_template_7_Template, 9, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DocumentListComponent_ng_template_8_Template, 9, 5, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-sidebar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function DocumentListComponent_Template_p_sidebar_visibleChange_9_listener($event) {
              return ctx.userProjectsSidebar = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DocumentListComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.newpName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_Template_p_button_click_13_listener() {
              return ctx.newDoc();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-table", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DocumentListComponent_ng_template_16_Template, 3, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DocumentListComponent_ng_template_17_Template, 9, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DocumentListComponent_ng_template_18_Template, 9, 5, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_Template_button_click_20_listener() {
              return ctx.allProjectsSideBar = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_Template_button_click_21_listener() {
              return ctx.userProjectsSidebar = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.allProjectsSideBar)("baseZIndex", 10000);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 13, ctx.documents))("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0))("scrollable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.userProjectsSidebar)("baseZIndex", 10000);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newpName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.userDocuments)("filterDelay", 0)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0))("scrollable", true);
          }
        },
        directives: [primeng_sidebar__WEBPACK_IMPORTED_MODULE_3__["Sidebar"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["Button"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_9__["Ripple"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: [".project-bar[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background: green !important;\n}\n\n.project-bar[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 40px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #2a323d;\n  overflow-x: hidden;\n  padding-top: 50px;\n}\n\n.sidebar-btn[_ngcontent-%COMP%]:hover {\n  color: whitesmoke;\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 20px;\n  color: #818181;\n  display: block;\n}\n\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f1f1f1;\n}\n\n.main[_ngcontent-%COMP%] {\n  margin-left: 160px;\n  \n  padding: 0px 10px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidebar[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n\n  .sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N1bWVudC1saXN0L2RvY3VtZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFBb0IscUNBQUE7RUFDcEIsaUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQVUsaUJBQUE7RUFFVjs7RUFEQTtJQUFZLGVBQUE7RUFLWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kb2N1bWVudC1saXN0L2RvY3VtZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByb2plY3QtYmFyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2plY3QtYmFyOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMzIzZDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWJ0bjpob3ZlcntcclxuICBjb2xvcjp3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4uc2lkZWJhciBhIHtcclxuICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM4MTgxODE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2MHB4OyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZW5hdiAqL1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAuc2lkZWJhciB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gIC5zaWRlYmFyIGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-document-list',
            templateUrl: './document-list.component.html',
            styleUrls: ['./document-list.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/document/document.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/document/document.component.ts ***!
      \***********************************************************/

    /*! exports provided: DocumentComponent */

    /***/
    function srcAppComponentsDocumentDocumentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentComponent", function () {
        return DocumentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_document_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/document.service */
      "./src/app/services/document.service.ts");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/services */
      "./src/app/services/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-monaco-editor */
      "./node_modules/ngx-monaco-editor/__ivy_ngcc__/fesm2015/ngx-monaco-editor.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function DocumentComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentComponent_div_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-monaco-editor", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInit", function DocumentComponent_div_2_ng_template_3_Template_ngx_monaco_editor_onInit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.htmlEditorEvent($event);
          })("ngModelChange", function DocumentComponent_div_2_ng_template_3_Template_ngx_monaco_editor_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.doc.html = $event;
          })("keyup", function DocumentComponent_div_2_ng_template_3_Template_ngx_monaco_editor_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.editDoc($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.editorHtmlOptions)("ngModel", ctx_r3.doc.html);
        }
      }

      function DocumentComponent_div_2_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-monaco-editor", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInit", function DocumentComponent_div_2_ng_template_5_Template_ngx_monaco_editor_onInit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.cssEditorEvent($event);
          })("ngModelChange", function DocumentComponent_div_2_ng_template_5_Template_ngx_monaco_editor_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.doc.css = $event;
          })("keyup", function DocumentComponent_div_2_ng_template_5_Template_ngx_monaco_editor_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.editDoc($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r4.editorCssOptions)("ngModel", ctx_r4.doc.css);
        }
      }

      function DocumentComponent_div_2_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-monaco-editor", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInit", function DocumentComponent_div_2_ng_template_7_Template_ngx_monaco_editor_onInit_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.jsEditorEvent($event);
          })("ngModelChange", function DocumentComponent_div_2_ng_template_7_Template_ngx_monaco_editor_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.doc.js = $event;
          })("keyup", function DocumentComponent_div_2_ng_template_7_Template_ngx_monaco_editor_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.editDoc($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r5.editorJsOptions)("ngModel", ctx_r5.doc.js);
        }
      }

      function DocumentComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DocumentComponent_div_2_ng_template_3_Template, 1, 2, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DocumentComponent_div_2_ng_template_5_Template, 1, 2, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocumentComponent_div_2_ng_template_7_Template, 1, 2, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DocumentComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please Select a Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var DocumentComponent = /*#__PURE__*/function () {
        function DocumentComponent(documentService, accountService) {
          _classCallCheck(this, DocumentComponent);

          this.documentService = documentService;
          this.accountService = accountService;
          this.activeIndex = 0;
          this.contentWidgets = {}; // save monaco editor name contentWidgets - monaco editor의 이름 뜨는 위젯을 저장

          this.htmlPos = {
            lineNumber: 1,
            column: 1
          };
          this.cssPos = {
            lineNumber: 1,
            column: 1
          };
          this.jsPos = {
            lineNumber: 1,
            column: 1
          };
          this.editorHtmlOptions = {
            theme: 'vs-dark',
            language: 'html',
            cursorStyle: 'line',
            lineHeight: 25
          };
          this.editorCssOptions = {
            theme: 'vs-dark',
            language: 'css',
            cursorStyle: 'line'
          };
          this.editorJsOptions = {
            theme: 'vs-dark',
            language: 'javascript',
            cursorStyle: 'line'
          };
          this.user = this.accountService.userValue;
        }

        _createClass(DocumentComponent, [{
          key: "compile",
          value: function compile() {
            var html = this.doc.html;
            var css = this.doc.css;
            var js = this.doc.js;
            this.compiler.open();
            this.compiler.writeln(html + '<style>' + css + '</style>' + '<script>' + js + '</script>');
            this.compiler.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this._docSub = this.documentService.currentDocument.subscribe(function (doc) {
              _this7.compiler = document.getElementsByTagName('iframe')[0].contentWindow.document;
              _this7.doc = doc;

              _this7.compile();
            });
            this._cursorsSub = this.documentService.currentCursors.subscribe(function (cursors) {
              console.log(cursors);
              _this7.cursors = cursors;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.documentService.leaveDocument(this.doc.id);

            this._docSub.unsubscribe();

            this._cursorsSub.unsubscribe();

            this._userLeft.unsubscribe();
          }
        }, {
          key: "htmlEditorEvent",
          value: function htmlEditorEvent(editor) {
            var _this8 = this;

            this.deleteCursorOnDisconnect(editor);
            editor.onDidChangeCursorPosition(function (e) {
              _this8.htmlPos = e.position; // this.documentService.updateCursors(this.doc.id, this.htmlPos, this.cssPos, this.jsPos);
            });
            editor.onDidChangeModelContent(function (e) {
              // console.log(editor)
              _this8.renderCursors(editor);
            });
          }
        }, {
          key: "cssEditorEvent",
          value: function cssEditorEvent(editor) {
            var _this9 = this;

            this.deleteCursorOnDisconnect(editor);
            editor.onDidChangeCursorPosition(function (e) {
              _this9.cssPos = e.position; // this.documentService.updateCursors(this.doc.id, this.htmlPos, this.cssPos, this.jsPos);
            });
            editor.onDidChangeModelContent(function (e) {
              // console.log(editor)
              _this9.renderCursors(editor);
            });
          }
        }, {
          key: "jsEditorEvent",
          value: function jsEditorEvent(editor) {
            var _this10 = this;

            this.deleteCursorOnDisconnect(editor);
            editor.onDidChangeCursorPosition(function (e) {
              _this10.jsPos = e.position; // this.documentService.updateCursors(this.doc.id, this.htmlPos, this.cssPos, this.jsPos);
            });
            editor.onDidChangeModelContent(function (e) {
              // console.log(editor)
              _this10.renderCursors(editor);
            });
          }
        }, {
          key: "editDoc",
          value: function editDoc(event) {
            // console.log('htmlPos: ', this.htmlPos);
            // console.log('cssPos: ', this.cssPos);
            // console.log('jsPos: ', this.jsPos);
            this.documentService.updateCursors(this.doc.id, this.htmlPos, this.cssPos, this.jsPos);
            this.documentService.editDocument(this.doc);
            this.compiler = document.getElementsByTagName('iframe')[0].contentWindow.document;
            this.compile();
          }
        }, {
          key: "deleteCursorOnDisconnect",
          value: function deleteCursorOnDisconnect(editor) {
            this._userLeft = this.documentService.userLeft.subscribe(function (user) {
              var contentWidget = {
                allowEditorOverflow: true,
                domNode: null,
                position: null,
                getId: function getId() {
                  return user;
                },
                getDomNode: function getDomNode() {
                  return this.domNode;
                },
                getPosition: function getPosition() {
                  return {
                    position: this.position,
                    preference: [monaco.editor.ContentWidgetPositionPreference.ABOVE, monaco.editor.ContentWidgetPositionPreference.EXACT]
                  };
                }
              };
              editor.removeContentWidget(contentWidget);
            });
          }
        }, {
          key: "renderCursors",
          value: function renderCursors(editor) {
            var _this11 = this;

            this.cursors.forEach(function (cursor) {
              if (cursor.id !== _this11.user.username) {
                var contentWidget = {
                  allowEditorOverflow: true,
                  domNode: null,
                  getId: function getId() {
                    return cursor.id;
                  },
                  getDomNode: function getDomNode() {
                    if (!this.domNode) {
                      this.domNode = document.createElement('div');
                      this.domNode.innerHTML = "\n              <div style=\"\n              margin-left: 5px;\n              width: 0;\n              height: 0;\n              border-left: 5px solid transparent;\n              border-right: 5px solid transparent;\n              border-bottom: 5px solid ".concat(cursor.color, ";\n              \"></div>\n              <div\n              class=\"fadeOut\"\n              style=\"background-color: ").concat(cursor.color, ";\n                    color: white;\n                    padding: 0px 5px;\n                    opacity: 0.7\"\n              >").concat(cursor.id, "</div>");
                    }

                    return this.domNode;
                  },
                  getPosition: function getPosition() {
                    return {
                      position: {
                        lineNumber: cursor.html.lineNumber,
                        column: cursor.html.column
                      },
                      preference: [monaco.editor.ContentWidgetPositionPreference.BELOW, monaco.editor.ContentWidgetPositionPreference.EXACT]
                    };
                  }
                };
                editor.removeContentWidget(contentWidget);
                editor.addContentWidget(contentWidget);
              }
            });
          }
        }]);

        return DocumentComponent;
      }();

      DocumentComponent.ɵfac = function DocumentComponent_Factory(t) {
        return new (t || DocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
      };

      DocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DocumentComponent,
        selectors: [["app-document"]],
        decls: 7,
        vars: 3,
        consts: [["style", "\n    height: 50px;\n    width: calc(100%-50px);\n    margin-left: 50px;\n    text-align: center;\n    padding-top: 10px;\n  ", 4, "ngIf"], [1, "row", 2, "width", "calc(100% - 80px)", "height", "calc(100% - 50px)", "margin", "10px 20px 10px 60px", "padding", "10px", "border", "solid 1px purple"], ["class", "col-12 col-md-5", 4, "ngIf"], [1, "col-12", "col-md-7", 2, "color", "white", "padding-top", "50px", "min-height", "400px"], [1, "output", "grid"], ["id", "compiler"], [2, "height", "50px", "width", "calc(100%-50px)", "margin-left", "50px", "text-align", "center", "padding-top", "10px"], ["mat-raised-button", "", "color", "accent", 2, "margin", "0 5px"], ["mat-raised-button", "", 2, "margin", "0 5px"], ["mat-raised-button", "", "color", "primary", 2, "margin", "0 5px"], ["mat-raised-button", "", "color", "warn", 2, "margin", "0 5px"], [1, "col-12", "col-md-5"], ["dynamicHeight", ""], ["label", "Html"], ["matTabContent", ""], ["label", "Css"], ["label", "Js"], ["id", "html", 2, "height", "70vh", "margin", "0", "padding", "0", "overflow", "hidden", 3, "options", "ngModel", "onInit", "ngModelChange", "keyup"], ["id", "css", 2, "height", "70vh", "margin", "0", "padding", "0", "overflow", "hidden", 3, "options", "ngModel", "onInit", "ngModelChange", "keyup"], ["id", "js", 2, "height", "70vh", "margin", "0", "padding", "0", "overflow", "hidden", 3, "options", "ngModel", "onInit", "ngModelChange", "keyup"], [1, "no-doc"]],
        template: function DocumentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DocumentComponent_div_0_Template, 9, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DocumentComponent_div_2_Template, 8, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DocumentComponent_div_3_Template, 3, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doc);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doc);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.doc);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabContent"], ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
        styles: [".mat-tab-label,  .mat-tab-label-active {\n  min-width: 15px !important;\n  padding: 5px !important;\n  margin: 10px !important;\n}\n\n.output[_ngcontent-%COMP%] {\n  background: #fff;\n  border-left: 1px solid #f3f3f3;\n  overflow: scroll;\n  padding: 10px;\n  margin: 20px;\n  width: 100%;\n  height: calc(100% - 60px);\n}\n\n.output[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.output[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.save-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 75px;\n  height: 30px;\n  margin-left: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: black;\n  background-color: #80af8a;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 3px #999;\n}\n\n.save-button[_ngcontent-%COMP%]:hover {\n  background-color: #3e8e41;\n}\n\n.save-button[_ngcontent-%COMP%]:active {\n  background-color: #3e8e41;\n  box-shadow: 0 1px #666;\n  transform: translateY(4px);\n}\n\n.dl-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 75px;\n  height: 30px;\n  margin-left: 20px;\n  font-size: 12px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: black;\n  background-color: #ffe084;\n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 3px #999;\n}\n\n.dl-button[_ngcontent-%COMP%]:hover {\n  background-color: #aa8547;\n}\n\n.dl-button[_ngcontent-%COMP%]:active {\n  background-color: #aa8547;\n  box-shadow: 0 1px #666;\n  transform: translateY(4px);\n}\n\n.no-doc[_ngcontent-%COMP%] {\n  height: 73vh;\n  width: 100%;\n  text-align: center;\n  padding-top: 50%;\n  color: blueviolet;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlDO0VBQ0MsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUFvQix5QkFBQTtBQUVwQjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQUdGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFBa0IseUJBQUE7QUFFbEI7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFHRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG46Om5nLWRlZXAubWF0LXRhYi1sYWJlbCwgOjpuZy1kZWVwLm1hdC10YWItbGFiZWwtYWN0aXZle1xyXG4gIG1pbi13aWR0aDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNXB4IWltcG9ydGFudDtcclxuICBtYXJnaW46IDEwcHghaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5vdXRwdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjNmM2YzO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDIwcHggO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7fVxyXG4ub3V0cHV0IGlmcmFtZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5vdXRwdXQgaWZyYW1lOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBhZjhhO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4ICM5OTk7XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MX1cclxuXHJcbi5zYXZlLWJ1dHRvbjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggIzY2NjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxufVxyXG5cclxuXHJcbi5kbC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNzVweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgLy8gcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmUwODQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggIzk5OTtcclxufVxyXG5cclxuLmRsLWJ1dHRvbjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2FhODU0N31cclxuXHJcbi5kbC1idXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWE4NTQ3O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4ICM2NjY7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XHJcbn1cclxuXHJcbi5uby1kb2Mge1xyXG4gIGhlaWdodDogNzN2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDUwJTtcclxuICBjb2xvcjogYmx1ZXZpb2xldDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-document',
            templateUrl: './document.component.html',
            styleUrls: ['./document.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_document_service__WEBPACK_IMPORTED_MODULE_1__["DocumentService"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/index.ts":
    /*!*************************************!*\
      !*** ./src/app/components/index.ts ***!
      \*************************************/

    /*! exports provided: AlertComponent */

    /***/
    function srcAppComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert.component */
      "./src/app/components/alert.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"];
      });
      /***/

    },

    /***/
    "./src/app/components/navbar/navbar.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/services */
      "./src/app/services/index.ts");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(accountService) {
          var _this12 = this;

          _classCallCheck(this, NavbarComponent);

          this.accountService = accountService;
          this.navbarOpen = false;
          this.accountService.user.subscribe(function (x) {
            return _this12.user = x;
          });
        }

        _createClass(NavbarComponent, [{
          key: "toggleNavbar",
          value: function toggleNavbar() {
            this.navbarOpen = !this.navbarOpen;
          }
        }, {
          key: "myFunction",
          value: function myFunction() {
            var x = document.getElementById('myTopnav');

            if (x.className === 'topnav') {
              x.className += ' responsive';
            } else {
              x.className = 'topnav';
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.accountService.logout();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.items = [{
              label: 'File',
              icon: 'pi pi-fw pi-file',
              items: [{
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [{
                  label: 'Project'
                }, {
                  label: 'Other'
                }]
              }, {
                label: 'Open'
              }, {
                separator: true
              }, {
                label: 'Quit'
              }]
            }, {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [{
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
              }, {
                label: 'Refresh',
                icon: 'pi pi-fw pi-refresh'
              }]
            }, {
              label: 'Help',
              icon: 'pi pi-fw pi-question',
              items: [{
                label: 'Contents'
              }, {
                label: 'Search',
                icon: 'pi pi-fw pi-search',
                items: [{
                  label: 'Text',
                  items: [{
                    label: 'Workspace'
                  }]
                }, {
                  label: 'File'
                }]
              }]
            }, {
              label: 'Actions',
              icon: 'pi pi-fw pi-cog',
              items: [{
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [{
                  label: 'Save',
                  icon: 'pi pi-fw pi-save'
                }, {
                  label: 'Update',
                  icon: 'pi pi-fw pi-save'
                }]
              }, {
                label: 'Other',
                icon: 'pi pi-fw pi-tags',
                items: [{
                  label: 'Delete',
                  icon: 'pi pi-fw pi-minus'
                }]
              }]
            }, {
              separator: true
            }, {
              label: 'Quit',
              icon: 'pi pi-fw pi-times'
            }];
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 13,
        vars: 0,
        consts: [["id", "myTopnav", 1, "topnav"], ["href", "#home", 1, "active"], ["href", "#news"], ["href", "#contact"], ["href", "#about"], ["href", "javascript:void(0);", 2, "float", "right", "color", "#f39ea3", 3, "click"], ["href", "javascript:void(0);", 1, "icon", 2, "font-size", "15px", "font-weight", "bolder", 3, "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_9_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() {
              return ctx.myFunction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " . . . ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".topnav[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #2a323d;\n  margin-left: 40px;\n  border-bottom: solid 2px #b6a2e0;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 10px 12px;\n  text-decoration: none;\n  font-size: 13px;\n  border-radius: 5px;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #6c757e;\n  color: black;\n}\n\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #aea1dd;\n  color: white;\n}\n\n.topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 600px) {\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child) {\n    display: none;\n  }\n\n  .topnav[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%] {\n    float: right;\n    display: block;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .topnav.responsive[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .topnav.responsive[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n    display: block;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQTZCLGFBQUE7RUFFN0I7O0VBREE7SUFDRSxZQUFBO0lBQ0EsY0FBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRTtJQUFvQixrQkFBQTtFQUlwQjs7RUFIQTtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLE1BQUE7RUFNRjs7RUFKQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7RUFPRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcG5hdiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEzMjNkO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjYjZhMmUwO1xyXG59XHJcblxyXG4udG9wbmF2IGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZjJmMmYyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50b3BuYXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50b3BuYXYgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWExZGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udG9wbmF2IC5pY29uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50b3BuYXYgYTpub3QoOmZpcnN0LWNoaWxkKSB7ZGlzcGxheTogbm9uZTt9XHJcbiAgLnRvcG5hdiBhLmljb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSB7cG9zaXRpb246IHJlbGF0aXZlO31cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG4gIC50b3BuYXYucmVzcG9uc2l2ZSBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
          }]
        }], function () {
          return [{
            type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/helpers/auth.guard.ts":
    /*!***************************************!*\
      !*** ./src/app/helpers/auth.guard.ts ***!
      \***************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppHelpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/services */
      "./src/app/services/index.ts");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-socket-io */
      "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, accountService, socket) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.accountService = accountService;
          this.socket = socket;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var user = this.accountService.userValue;

            if (user) {
              // authorised so return true
              return true;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/account/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
          }, {
            type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/helpers/error.interceptor.ts":
    /*!**********************************************!*\
      !*** ./src/app/helpers/error.interceptor.ts ***!
      \**********************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function srcAppHelpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/services */
      "./src/app/services/index.ts");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(accountService) {
          _classCallCheck(this, ErrorInterceptor);

          this.accountService = accountService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this13 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this13.accountService.logout();
              }

              var error = err.error.message || err.statusText;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/helpers/fake-backend.ts":
    /*!*****************************************!*\
      !*** ./src/app/helpers/fake-backend.ts ***!
      \*****************************************/

    /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

    /***/
    function srcAppHelpersFakeBackendTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
        return FakeBackendInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
        return fakeBackendProvider;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js"); // array in local storage for registered users


      var users = JSON.parse(localStorage.getItem('users')) || [];

      var FakeBackendInterceptor = /*#__PURE__*/function () {
        function FakeBackendInterceptor() {
          _classCallCheck(this, FakeBackendInterceptor);
        }

        _createClass(FakeBackendInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var url = request.url,
                method = request.method,
                headers = request.headers,
                body = request.body; // wrap in delayed observable to simulate server api call

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute)) // tslint:disable-next-line: max-line-length
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());

            function handleRoute() {
              switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                  return authenticate();

                case url.endsWith('/users/register') && method === 'POST':
                  return register();

                case url.endsWith('/users') && method === 'GET':
                  return getUsers();

                case url.match(/\/users\/\d+$/) && method === 'GET':
                  return getUserById();

                case url.match(/\/users\/\d+$/) && method === 'PUT':
                  return updateUser();

                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                  return deleteUser();

                default:
                  // pass through any requests not handled above
                  return next.handle(request);
              }
            } // route functions


            function authenticate() {
              var username = body.username,
                  password = body.password;
              var user = users.find(function (x) {
                return x.username === username && x.password === password;
              });
              if (!user) return error('Username or password is incorrect');
              return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
              });
            }

            function register() {
              var user = body;

              if (users.find(function (x) {
                return x.username === user.username;
              })) {
                return error('Username "' + user.username + '" is already taken');
              }

              user.id = users.length ? Math.max.apply(Math, _toConsumableArray(users.map(function (x) {
                return x.id;
              }))) + 1 : 1;
              users.push(user);
              localStorage.setItem('users', JSON.stringify(users));
              return ok();
            }

            function getUsers() {
              if (!isLoggedIn()) return unauthorized();
              return ok(users);
            }

            function getUserById() {
              if (!isLoggedIn()) return unauthorized();
              var user = users.find(function (x) {
                return x.id === idFromUrl();
              });
              return ok(user);
            }

            function updateUser() {
              if (!isLoggedIn()) return unauthorized();
              var params = body;
              var user = users.find(function (x) {
                return x.id === idFromUrl();
              }); // only update password if entered

              if (!params.password) {
                delete params.password;
              } // update and save user


              Object.assign(user, params);
              localStorage.setItem('users', JSON.stringify(users));
              return ok();
            }

            function deleteUser() {
              if (!isLoggedIn()) return unauthorized();
              users = users.filter(function (x) {
                return x.id !== idFromUrl();
              });
              localStorage.setItem('users', JSON.stringify(users));
              return ok();
            } // helper functions


            function ok(body) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
                status: 200,
                body: body
              }));
            }

            function error(message) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                error: {
                  message: message
                }
              });
            }

            function unauthorized() {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
                status: 401,
                error: {
                  message: 'Unauthorised'
                }
              });
            }

            function isLoggedIn() {
              return headers.get('Authorization') === 'Bearer fake-jwt-token';
            }

            function idFromUrl() {
              var urlParts = url.split('/');
              return parseInt(urlParts[urlParts.length - 1]);
            }
          }
        }]);

        return FakeBackendInterceptor;
      }();

      FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) {
        return new (t || FakeBackendInterceptor)();
      };

      FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FakeBackendInterceptor,
        factory: FakeBackendInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var fakeBackendProvider = {
        // use fake backend in place of Http service for backend-less development
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: FakeBackendInterceptor,
        multi: true
      };
      /***/
    },

    /***/
    "./src/app/helpers/index.ts":
    /*!**********************************!*\
      !*** ./src/app/helpers/index.ts ***!
      \**********************************/

    /*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */

    /***/
    function srcAppHelpersIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "./src/app/helpers/auth.guard.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /* harmony import */


      var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error.interceptor */
      "./src/app/helpers/error.interceptor.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"];
      });
      /* harmony import */


      var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./jwt.interceptor */
      "./src/app/helpers/jwt.interceptor.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"];
      });
      /* harmony import */


      var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fake-backend */
      "./src/app/helpers/fake-backend.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
        return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
        return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"];
      });
      /***/

    },

    /***/
    "./src/app/helpers/jwt.interceptor.ts":
    /*!********************************************!*\
      !*** ./src/app/helpers/jwt.interceptor.ts ***!
      \********************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function srcAppHelpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/services */
      "./src/app/services/index.ts");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(accountService) {
          _classCallCheck(this, JwtInterceptor);

          this.accountService = accountService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // add auth header with jwt if user is logged in and request is to the api url
            var user = this.accountService.userValue;
            var isLoggedIn = user && user.token;
            var isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);

            if (isLoggedIn && isApiUrl) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(user.token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/models/alert.ts":
    /*!*********************************!*\
      !*** ./src/app/models/alert.ts ***!
      \*********************************/

    /*! exports provided: Alert, AlertType */

    /***/
    function srcAppModelsAlertTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Alert", function () {
        return Alert;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertType", function () {
        return AlertType;
      });

      var Alert = function Alert(init) {
        _classCallCheck(this, Alert);

        Object.assign(this, init);
      };

      var AlertType;

      (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
      })(AlertType || (AlertType = {}));
      /***/

    },

    /***/
    "./src/app/models/index.ts":
    /*!*********************************!*\
      !*** ./src/app/models/index.ts ***!
      \*********************************/

    /*! exports provided: Alert, AlertType, User */

    /***/
    function srcAppModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert */
      "./src/app/models/alert.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Alert", function () {
        return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertType", function () {
        return _alert__WEBPACK_IMPORTED_MODULE_0__["AlertType"];
      });
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user */
      "./src/app/models/user.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return _user__WEBPACK_IMPORTED_MODULE_1__["User"];
      });
      /***/

    },

    /***/
    "./src/app/models/user.ts":
    /*!********************************!*\
      !*** ./src/app/models/user.ts ***!
      \********************************/

    /*! exports provided: User */

    /***/
    function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User() {
        _classCallCheck(this, User);
      };
      /***/

    },

    /***/
    "./src/app/pages/home/home.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/services */
      "./src/app/services/index.ts");
      /* harmony import */


      var _components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/document-list/document-list.component */
      "./src/app/components/document-list/document-list.component.ts");
      /* harmony import */


      var _components_document_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/document/document.component */
      "./src/app/components/document/document.component.ts");

      var HomeComponent = function HomeComponent(accountService) {
        _classCallCheck(this, HomeComponent);

        this.accountService = accountService;
        this.user = this.accountService.userValue;
      };

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 0,
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-document-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-document");
          }
        },
        directives: [_components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_2__["DocumentListComponent"], _components_document_document_component__WEBPACK_IMPORTED_MODULE_3__["DocumentComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: 'home.component.html'
          }]
        }], function () {
          return [{
            type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/home/index.ts":
    /*!*************************************!*\
      !*** ./src/app/pages/home/index.ts ***!
      \*************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppPagesHomeIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      "./src/app/pages/home/home.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"];
      });
      /***/

    },

    /***/
    "./src/app/services/account.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/account.service.ts ***!
      \*********************************************/

    /*! exports provided: AccountService */

    /***/
    function srcAppServicesAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-socket-io */
      "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");

      var AccountService = /*#__PURE__*/function () {
        function AccountService(router, http, socket) {
          _classCallCheck(this, AccountService);

          this.router = router;
          this.http = http;
          this.socket = socket;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
          this.user = this.userSubject.asObservable();
        }

        _createClass(AccountService, [{
          key: "login",
          value: function login(username, password) {
            var _this14 = this;

            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users/authenticate"), {
              username: username,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));

              _this14.userSubject.next(user);

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage and set current user to null
            localStorage.removeItem('user');
            this.userSubject.next(null);
            this.router.navigate(['/account/login']);
          }
        }, {
          key: "register",
          value: function register(user) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users/register"), user);
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users"));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users/").concat(id));
          }
        }, {
          key: "update",
          value: function update(id, params) {
            var _this15 = this;

            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users/").concat(id), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
              // update stored user if the logged in user updated their own record
              if (id == _this15.userValue.id) {
                // update local storage
                var user = Object.assign(Object.assign({}, _this15.userValue), params);
                localStorage.setItem('user', JSON.stringify(user)); // publish updated user to subscribers

                _this15.userSubject.next(user);
              }

              return x;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this16 = this;

            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
              // auto logout if the logged in user deleted their own record
              if (id == _this16.userValue.id) {
                _this16.logout();
              }

              return x;
            }));
          }
        }, {
          key: "userValue",
          get: function get() {
            return this.userSubject.value;
          }
        }]);

        return AccountService;
      }();

      AccountService.ɵfac = function AccountService_Factory(t) {
        return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"]));
      };

      AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AccountService,
        factory: AccountService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }, {
            type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["Socket"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/alert.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/alert.service.ts ***!
      \*******************************************/

    /*! exports provided: AlertService */

    /***/
    function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/models */
      "./src/app/models/index.ts");

      var AlertService = /*#__PURE__*/function () {
        function AlertService() {
          _classCallCheck(this, AlertService);

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.defaultId = 'default-alert';
        } // enable subscribing to alerts observable


        _createClass(AlertService, [{
          key: "onAlert",
          value: function onAlert() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
            return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) {
              return x && x.id === id;
            }));
          } // convenience methods

        }, {
          key: "success",
          value: function success(message, options) {
            this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), {
              type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success,
              message: message
            })));
          }
        }, {
          key: "error",
          value: function error(message, options) {
            this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), {
              type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error,
              message: message
            })));
          }
        }, {
          key: "info",
          value: function info(message, options) {
            this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), {
              type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info,
              message: message
            })));
          }
        }, {
          key: "warn",
          value: function warn(message, options) {
            this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), {
              type: _app_models__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning,
              message: message
            })));
          } // main alert method

        }, {
          key: "alert",
          value: function alert(_alert) {
            _alert.id = _alert.id || this.defaultId;
            this.subject.next(_alert);
          } // clear alerts

        }, {
          key: "clear",
          value: function clear() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
            this.subject.next(new _app_models__WEBPACK_IMPORTED_MODULE_3__["Alert"]({
              id: id
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService.ɵfac = function AlertService_Factory(t) {
        return new (t || AlertService)();
      };

      AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AlertService,
        factory: AlertService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/document.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/document.service.ts ***!
      \**********************************************/

    /*! exports provided: DocumentService */

    /***/
    function srcAppServicesDocumentServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentService", function () {
        return DocumentService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-socket-io */
      "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
      /* harmony import */


      var _account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account.service */
      "./src/app/services/account.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var DocumentService = /*#__PURE__*/function () {
        function DocumentService(socket, accountService, http) {
          _classCallCheck(this, DocumentService);

          this.socket = socket;
          this.accountService = accountService;
          this.http = http;
          this.currentDocument = this.socket.fromEvent('document');
          this.currentCursors = this.socket.fromEvent('cursors');
          this.userLeft = this.socket.fromEvent('disconnect');
          this.documents = this.socket.fromEvent('documents');
          this.user = this.accountService.userValue;
          this.userDocuments = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }

        _createClass(DocumentService, [{
          key: "getUserDocuments",
          value: function getUserDocuments() {
            var _this17 = this;

            console.log(this.user);
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/projects/user/").concat(this.user.username)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (docs) {
              var userDocs = [];
              docs.forEach(function (doc) {
                userDocs.push({
                  id: doc.id,
                  name: doc.name,
                  html: doc.html,
                  css: doc.css,
                  js: doc.js,
                  owner: doc.owner
                });
              });

              _this17.userDocuments.next(userDocs);

              return userDocs;
            }));
          }
        }, {
          key: "leaveDocument",
          value: function leaveDocument(docID) {
            this.socket.emit('leave', {
              docID: docID,
              username: this.user.username
            });
          }
        }, {
          key: "getDocument",
          value: function getDocument(id) {
            this.socket.emit('getDoc', {
              docId: id,
              username: this.user.username
            }); // this.currentDocument.subscribe(document => console.log(document));
          }
        }, {
          key: "addDocument",
          value: function addDocument(pid) {
            console.log('Button Works');
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/users/addproject"), {
              username: this.user.username,
              pid: pid
            }).subscribe(function (res) {
              console.log('Added');
            });
          }
        }, {
          key: "newDocument",
          value: function newDocument(name) {
            var docId = this.docId();
            console.log('USER', this.user);

            if (name === '') {
              name = docId;
            }

            console.log(name);
            console.log(docId);
            this.socket.emit('addDoc', {
              id: docId,
              name: name,
              html: '',
              css: '',
              js: '',
              owner: this.user.username
            });
          }
        }, {
          key: "editDocument",
          value: function editDocument(document) {
            this.socket.emit('editDoc', document);
          }
        }, {
          key: "updateCursors",
          value: function updateCursors(docID, htmlPos, cssPos, jsPos) {
            this.socket.emit('updateCursor', {
              docID: docID,
              username: this.user.username,
              htmlPos: htmlPos,
              cssPos: cssPos,
              jsPos: jsPos
            });
          }
        }, {
          key: "deleteDocument",
          value: function deleteDocument(id) {
            // console.log('remove button')
            // return this.http.post(`${environment.apiUrl}/projects/deletedoc`, {username: this.user.username, pid: id})
            // .subscribe(res => {
            //   console.log('Removed');
            // });
            this.socket.emit('deleteDoc', this.user.username, id);
          }
        }, {
          key: "docId",
          value: function docId() {
            var text = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (var i = 0; i < 5; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
          }
        }]);

        return DocumentService;
      }();

      DocumentService.ɵfac = function DocumentService_Factory(t) {
        return new (t || DocumentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
      };

      DocumentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DocumentService,
        factory: DocumentService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]
          }, {
            type: _account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/index.ts":
    /*!***********************************!*\
      !*** ./src/app/services/index.ts ***!
      \***********************************/

    /*! exports provided: AccountService, AlertService, DocumentService */

    /***/
    function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./account.service */
      "./src/app/services/account.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"];
      });
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"];
      });
      /* harmony import */


      var _document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./document.service */
      "./src/app/services/document.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DocumentService", function () {
        return _document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"];
      });
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'http://51.195.28.68:4000'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills.ts */
      "./src/polyfills.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    "./src/polyfills.ts":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "./node_modules/zone.js/dist/zone-evergreen.js");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/guide/browser-support
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /**
       * By default, zone.js will patch all possible macroTask and DomEvents
       * user can disable parts of macroTask/DomEvents patch by setting following flags
       * because those flags need to be set before `zone.js` being loaded, and webpack
       * will put import in the top of bundle, so user need to create a separate file
       * in this directory (for example: zone-flags.ts), and put the following flags
       * into that file, and then add the following code before importing zone.js.
       * import './zone-flags';
       *
       * The flags allowed in zone-flags.ts are listed here.
       *
       * The following flags will work for all browsers.
       *
       * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
       * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
       * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
       *
       *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
       *  with the following flag, it will bypass `zone.js` patch for IE/Edge
       *
       *  (window as any).__Zone_enable_cross_context_check = true;
       *
       */

      /***************************************************************************************************
       * Zone JS is required by default for Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! F:\git\code2gether\Frontend\src\main.ts */
      "./src/main.ts");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** ws (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map