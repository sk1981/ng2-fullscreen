webpackJsonp([0,3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(23);
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(53);
	var platform_browser_1 = __webpack_require__(21);
	var index_1 = __webpack_require__(55);
	var FullScreenIfDemoComponent_1 = __webpack_require__(60);
	var BasicComponent_1 = __webpack_require__(61);
	var DemoOverviewComponent_1 = __webpack_require__(62);
	var DemoMainComponent_1 = __webpack_require__(63);
	var FullScreenTargetDemoComponent_1 = __webpack_require__(64);
	var DemoAppRoutes = [
	    { path: '', component: DemoOverviewComponent_1.DemoOverviewComponent },
	    { path: 'basic', component: BasicComponent_1.BasicComponent },
	    { path: 'targetdemo', component: FullScreenTargetDemoComponent_1.FullScreenTargetDemoComponent },
	    { path: 'ifdemo', component: FullScreenIfDemoComponent_1.FullScreenIfDemoComponent }
	];
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                index_1.FullScreenModule,
	                router_1.RouterModule.forRoot(DemoAppRoutes),
	                forms_1.FormsModule
	            ],
	            declarations: [DemoMainComponent_1.DemoMainComponent, DemoOverviewComponent_1.DemoOverviewComponent, BasicComponent_1.BasicComponent, FullScreenIfDemoComponent_1.FullScreenIfDemoComponent, FullScreenTargetDemoComponent_1.FullScreenTargetDemoComponent],
	            bootstrap: [DemoMainComponent_1.DemoMainComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	var platform = platform_browser_dynamic_1.platformBrowserDynamic();
	//noinspection TypeScriptValidateTypes
	platform.bootstrapModule(AppModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v3.0.1
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(22), __webpack_require__(3), __webpack_require__(4), __webpack_require__(24), __webpack_require__(37), __webpack_require__(38), __webpack_require__(39), __webpack_require__(40), __webpack_require__(44), __webpack_require__(45), __webpack_require__(5), __webpack_require__(46), __webpack_require__(47), __webpack_require__(48), __webpack_require__(49), __webpack_require__(50), __webpack_require__(51), __webpack_require__(52)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/core', 'rxjs/Subject', 'rxjs/observable/from', 'rxjs/observable/of', 'rxjs/operator/every', 'rxjs/operator/map', 'rxjs/operator/mergeAll', 'rxjs/operator/mergeMap', 'rxjs/operator/reduce', 'rxjs/Observable', 'rxjs/operator/catch', 'rxjs/operator/concatAll', 'rxjs/operator/first', 'rxjs/util/EmptyError', 'rxjs/observable/fromPromise', 'rxjs/operator/last', 'rxjs/BehaviorSubject'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.router = global.ng.router || {}),global.ng.common,global.ng.core,global.Rx,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx));
	}(this, function (exports,_angular_common,_angular_core,rxjs_Subject,rxjs_observable_from,rxjs_observable_of,rxjs_operator_every,rxjs_operator_map,rxjs_operator_mergeAll,rxjs_operator_mergeMap,rxjs_operator_reduce,rxjs_Observable,rxjs_operator_catch,rxjs_operator_concatAll,rxjs_operator_first,rxjs_util_EmptyError,rxjs_observable_fromPromise,l,rxjs_BehaviorSubject) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @whatItDoes Name of the primary outlet.
	     *
	     * @stable
	     */
	    var PRIMARY_OUTLET = 'primary';
	    var NavigationCancelingError = (function (_super) {
	        __extends(NavigationCancelingError, _super);
	        function NavigationCancelingError(message) {
	            _super.call(this, message);
	            this.message = message;
	            this.stack = (new Error(message)).stack;
	        }
	        NavigationCancelingError.prototype.toString = function () { return this.message; };
	        return NavigationCancelingError;
	    }(Error));
	
	    function shallowEqualArrays(a, b) {
	        if (a.length !== b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (!shallowEqual(a[i], b[i]))
	                return false;
	        }
	        return true;
	    }
	    function shallowEqual(a, b) {
	        var k1 = Object.keys(a);
	        var k2 = Object.keys(b);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (a[key] !== b[key]) {
	                return false;
	            }
	        }
	        return true;
	    }
	    function flatten(a) {
	        var target = [];
	        for (var i = 0; i < a.length; ++i) {
	            for (var j = 0; j < a[i].length; ++j) {
	                target.push(a[i][j]);
	            }
	        }
	        return target;
	    }
	    function last(a) {
	        return a.length > 0 ? a[a.length - 1] : null;
	    }
	    function merge(m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    }
	    function forEach(map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    }
	    function waitForMap(obj, fn) {
	        var waitFor = [];
	        var res = {};
	        forEach(obj, function (a, k) {
	            if (k === PRIMARY_OUTLET) {
	                waitFor.push(rxjs_operator_map.map.call(fn(k, a), function (_) {
	                    res[k] = _;
	                    return _;
	                }));
	            }
	        });
	        forEach(obj, function (a, k) {
	            if (k !== PRIMARY_OUTLET) {
	                waitFor.push(rxjs_operator_map.map.call(fn(k, a), function (_) {
	                    res[k] = _;
	                    return _;
	                }));
	            }
	        });
	        if (waitFor.length > 0) {
	            var concatted$ = rxjs_operator_concatAll.concatAll.call(rxjs_observable_of.of.apply(void 0, waitFor));
	            var last$ = l.last.call(concatted$);
	            return rxjs_operator_map.map.call(last$, function () { return res; });
	        }
	        else {
	            return rxjs_observable_of.of(res);
	        }
	    }
	    function andObservables(observables) {
	        var merged$ = rxjs_operator_mergeAll.mergeAll.call(observables);
	        return rxjs_operator_every.every.call(merged$, function (result) { return result === true; });
	    }
	    function wrapIntoObservable(value) {
	        if (value instanceof rxjs_Observable.Observable) {
	            return value;
	        }
	        else if (value instanceof Promise) {
	            return rxjs_observable_fromPromise.fromPromise(value);
	        }
	        else {
	            return rxjs_observable_of.of(value);
	        }
	    }
	
	    /**
	     * @experimental
	     */
	    var ROUTES = new _angular_core.OpaqueToken('ROUTES');
	    var LoadedRouterConfig = (function () {
	        function LoadedRouterConfig(routes, injector, factoryResolver) {
	            this.routes = routes;
	            this.injector = injector;
	            this.factoryResolver = factoryResolver;
	        }
	        return LoadedRouterConfig;
	    }());
	    var RouterConfigLoader = (function () {
	        function RouterConfigLoader(loader, compiler) {
	            this.loader = loader;
	            this.compiler = compiler;
	        }
	        RouterConfigLoader.prototype.load = function (parentInjector, loadChildren) {
	            return rxjs_operator_map.map.call(this.loadModuleFactory(loadChildren), function (r) {
	                var ref = r.create(parentInjector);
	                return new LoadedRouterConfig(flatten(ref.injector.get(ROUTES)), ref.injector, ref.componentFactoryResolver);
	            });
	        };
	        RouterConfigLoader.prototype.loadModuleFactory = function (loadChildren) {
	            var _this = this;
	            if (typeof loadChildren === 'string') {
	                return rxjs_observable_fromPromise.fromPromise(this.loader.load(loadChildren));
	            }
	            else {
	                var offlineMode_1 = this.compiler instanceof _angular_core.Compiler;
	                return rxjs_operator_mergeMap.mergeMap.call(wrapIntoObservable(loadChildren()), function (t) { return offlineMode_1 ? rxjs_observable_of.of(t) : rxjs_observable_fromPromise.fromPromise(_this.compiler.compileModuleAsync(t)); });
	            }
	        };
	        return RouterConfigLoader;
	    }());
	
	    function createEmptyUrlTree() {
	        return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
	    }
	    function containsTree(container, containee, exact) {
	        if (exact) {
	            return equalSegmentGroups(container.root, containee.root);
	        }
	        else {
	            return containsSegmentGroup(container.root, containee.root);
	        }
	    }
	    function equalSegmentGroups(container, containee) {
	        if (!equalPath(container.segments, containee.segments))
	            return false;
	        if (container.numberOfChildren !== containee.numberOfChildren)
	            return false;
	        for (var c in containee.children) {
	            if (!container.children[c])
	                return false;
	            if (!equalSegmentGroups(container.children[c], containee.children[c]))
	                return false;
	        }
	        return true;
	    }
	    function containsSegmentGroup(container, containee) {
	        return containsSegmentGroupHelper(container, containee, containee.segments);
	    }
	    function containsSegmentGroupHelper(container, containee, containeePaths) {
	        if (container.segments.length > containeePaths.length) {
	            var current = container.segments.slice(0, containeePaths.length);
	            if (!equalPath(current, containeePaths))
	                return false;
	            if (containee.hasChildren())
	                return false;
	            return true;
	        }
	        else if (container.segments.length === containeePaths.length) {
	            if (!equalPath(container.segments, containeePaths))
	                return false;
	            for (var c in containee.children) {
	                if (!container.children[c])
	                    return false;
	                if (!containsSegmentGroup(container.children[c], containee.children[c]))
	                    return false;
	            }
	            return true;
	        }
	        else {
	            var current = containeePaths.slice(0, container.segments.length);
	            var next = containeePaths.slice(container.segments.length);
	            if (!equalPath(container.segments, current))
	                return false;
	            if (!container.children[PRIMARY_OUTLET])
	                return false;
	            return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
	        }
	    }
	    /**
	     * @whatItDoes Represents the parsed URL.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'template.html'})
	     * class MyComponent {
	     *   constructor(router: Router) {
	     *     const tree: UrlTree =
	     * router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
	     *     const f = tree.fragment; // return 'fragment'
	     *     const q = tree.queryParams; // returns {debug: 'true'}
	     *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
	     *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
	     *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
	     *     g.children['support'].segments; // return 1 segment 'help'
	     *   }
	     * }
	     * ```
	     *
	     * @description
	     *
	     * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
	     * serialized tree.
	     * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
	     *
	     * @stable
	     */
	    var UrlTree = (function () {
	        /**
	         * @internal
	         */
	        function UrlTree(
	            /**
	            * The root segment group of the URL tree.
	             */
	            root,
	            /**
	             * The query params of the URL.
	             */
	            queryParams,
	            /**
	             * The fragment of the URL.
	             */
	            fragment) {
	            this.root = root;
	            this.queryParams = queryParams;
	            this.fragment = fragment;
	        }
	        /**
	         * @docsNotRequired
	         */
	        UrlTree.prototype.toString = function () { return new DefaultUrlSerializer().serialize(this); };
	        return UrlTree;
	    }());
	    /**
	     * @whatItDoes Represents the parsed URL segment.
	     *
	     * See {@link UrlTree} for more information.
	     *
	     * @stable
	     */
	    var UrlSegmentGroup = (function () {
	        function UrlSegmentGroup(
	            /**
	             * The URL segments of this group. See {@link UrlSegment} for more information.
	             */
	            segments,
	            /**
	             * The list of children of this group.
	             */
	            children) {
	            var _this = this;
	            this.segments = segments;
	            this.children = children;
	            /**
	             * The parent node in the url tree.
	             */
	            this.parent = null;
	            forEach(children, function (v, k) { return v.parent = _this; });
	        }
	        /**
	         * Return true if the segment has child segments
	         */
	        UrlSegmentGroup.prototype.hasChildren = function () { return this.numberOfChildren > 0; };
	        Object.defineProperty(UrlSegmentGroup.prototype, "numberOfChildren", {
	            /**
	             * Returns the number of child sements.
	             */
	            get: function () { return Object.keys(this.children).length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @docsNotRequired
	         */
	        UrlSegmentGroup.prototype.toString = function () { return serializePaths(this); };
	        return UrlSegmentGroup;
	    }());
	    /**
	     * @whatItDoes Represents a single URL segment.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'template.html'})
	     * class MyComponent {
	     *   constructor(router: Router) {
	     *     const tree: UrlTree = router.parseUrl('/team;id=33');
	     *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
	     *     const s: UrlSegment[] = g.segments;
	     *     s[0].path; // returns 'team'
	     *     s[0].parameters; // returns {id: 33}
	     *   }
	     * }
	     * ```
	     *
	     * @description
	     *
	     * A UrlSegment is a part of a URL between the two slashes. It contains a path and
	     * the matrix parameters associated with the segment.
	     *
	     * @stable
	     */
	    var UrlSegment = (function () {
	        function UrlSegment(
	            /**
	             * The part part of a URL segment.
	             */
	            path,
	            /**
	             * The matrix parameters associated with a segment.
	             */
	            parameters) {
	            this.path = path;
	            this.parameters = parameters;
	        }
	        /**
	         * @docsNotRequired
	         */
	        UrlSegment.prototype.toString = function () { return serializePath(this); };
	        return UrlSegment;
	    }());
	    function equalPath(a, b) {
	        if (a.length !== b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i].path !== b[i].path)
	                return false;
	        }
	        return true;
	    }
	    function mapChildrenIntoArray(segment, fn) {
	        var res = [];
	        forEach(segment.children, function (child, childOutlet) {
	            if (childOutlet === PRIMARY_OUTLET) {
	                res = res.concat(fn(child, childOutlet));
	            }
	        });
	        forEach(segment.children, function (child, childOutlet) {
	            if (childOutlet !== PRIMARY_OUTLET) {
	                res = res.concat(fn(child, childOutlet));
	            }
	        });
	        return res;
	    }
	    /**
	     * @whatItDoes Serializes and deserializes a URL string into a URL tree.
	     *
	     * @description The url serialization strategy is customizable. You can
	     * make all URLs case insensitive by providing a custom UrlSerializer.
	     *
	     * See {@link DefaultUrlSerializer} for an example of a URL serializer.
	     *
	     * @stable
	     */
	    var UrlSerializer = (function () {
	        function UrlSerializer() {
	        }
	        return UrlSerializer;
	    }());
	    /**
	     * @whatItDoes A default implementation of the {@link UrlSerializer}.
	     *
	     * @description
	     *
	     * Example URLs:
	     *
	     * ```
	     * /inbox/33(popup:compose)
	     * /inbox/33;open=true/messages/44
	     * ```
	     *
	     * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
	     * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
	     * specify route specific parameters.
	     *
	     * @stable
	     */
	    var DefaultUrlSerializer = (function () {
	        function DefaultUrlSerializer() {
	        }
	        /**
	         * Parse a url into a {@link UrlTree}.
	         */
	        DefaultUrlSerializer.prototype.parse = function (url) {
	            var p = new UrlParser(url);
	            return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
	        };
	        /**
	         * Converts a {@link UrlTree} into a url.
	         */
	        DefaultUrlSerializer.prototype.serialize = function (tree) {
	            var segment = "/" + serializeSegment(tree.root, true);
	            var query = serializeQueryParams(tree.queryParams);
	            var fragment = tree.fragment !== null && tree.fragment !== undefined ? "#" + encodeURI(tree.fragment) : '';
	            return "" + segment + query + fragment;
	        };
	        return DefaultUrlSerializer;
	    }());
	    function serializePaths(segment) {
	        return segment.segments.map(function (p) { return serializePath(p); }).join('/');
	    }
	    function serializeSegment(segment, root) {
	        if (segment.hasChildren() && root) {
	            var primary = segment.children[PRIMARY_OUTLET] ?
	                serializeSegment(segment.children[PRIMARY_OUTLET], false) :
	                '';
	            var children_1 = [];
	            forEach(segment.children, function (v, k) {
	                if (k !== PRIMARY_OUTLET) {
	                    children_1.push(k + ":" + serializeSegment(v, false));
	                }
	            });
	            if (children_1.length > 0) {
	                return primary + "(" + children_1.join('//') + ")";
	            }
	            else {
	                return "" + primary;
	            }
	        }
	        else if (segment.hasChildren() && !root) {
	            var children = mapChildrenIntoArray(segment, function (v, k) {
	                if (k === PRIMARY_OUTLET) {
	                    return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
	                }
	                else {
	                    return [(k + ":" + serializeSegment(v, false))];
	                }
	            });
	            return serializePaths(segment) + "/(" + children.join('//') + ")";
	        }
	        else {
	            return serializePaths(segment);
	        }
	    }
	    function encode(s) {
	        return encodeURIComponent(s);
	    }
	    function decode(s) {
	        return decodeURIComponent(s);
	    }
	    function serializePath(path) {
	        return "" + encode(path.path) + serializeParams(path.parameters);
	    }
	    function serializeParams(params) {
	        return pairs(params).map(function (p) { return (";" + encode(p.first) + "=" + encode(p.second)); }).join('');
	    }
	    function serializeQueryParams(params) {
	        var strs = pairs(params).map(function (p) { return (encode(p.first) + "=" + encode(p.second)); });
	        return strs.length > 0 ? "?" + strs.join("&") : '';
	    }
	    var Pair = (function () {
	        function Pair(first, second) {
	            this.first = first;
	            this.second = second;
	        }
	        return Pair;
	    }());
	    function pairs(obj) {
	        var res = [];
	        for (var prop in obj) {
	            if (obj.hasOwnProperty(prop)) {
	                res.push(new Pair(prop, obj[prop]));
	            }
	        }
	        return res;
	    }
	    var SEGMENT_RE = /^[^\/\(\)\?;=&#]+/;
	    function matchSegments(str) {
	        SEGMENT_RE.lastIndex = 0;
	        var match = str.match(SEGMENT_RE);
	        return match ? match[0] : '';
	    }
	    var QUERY_PARAM_RE = /^[^=\?&#]+/;
	    function matchQueryParams(str) {
	        QUERY_PARAM_RE.lastIndex = 0;
	        var match = str.match(SEGMENT_RE);
	        return match ? match[0] : '';
	    }
	    var QUERY_PARAM_VALUE_RE = /^[^\?&#]+/;
	    function matchUrlQueryParamValue(str) {
	        QUERY_PARAM_VALUE_RE.lastIndex = 0;
	        var match = str.match(QUERY_PARAM_VALUE_RE);
	        return match ? match[0] : '';
	    }
	    var UrlParser = (function () {
	        function UrlParser(url) {
	            this.url = url;
	            this.remaining = url;
	        }
	        UrlParser.prototype.peekStartsWith = function (str) { return this.remaining.startsWith(str); };
	        UrlParser.prototype.capture = function (str) {
	            if (!this.remaining.startsWith(str)) {
	                throw new Error("Expected \"" + str + "\".");
	            }
	            this.remaining = this.remaining.substring(str.length);
	        };
	        UrlParser.prototype.parseRootSegment = function () {
	            if (this.remaining.startsWith('/')) {
	                this.capture('/');
	            }
	            if (this.remaining === '' || this.remaining.startsWith('?') || this.remaining.startsWith('#')) {
	                return new UrlSegmentGroup([], {});
	            }
	            else {
	                return new UrlSegmentGroup([], this.parseChildren());
	            }
	        };
	        UrlParser.prototype.parseChildren = function () {
	            if (this.remaining.length == 0) {
	                return {};
	            }
	            if (this.peekStartsWith('/')) {
	                this.capture('/');
	            }
	            var paths = [];
	            if (!this.peekStartsWith('(')) {
	                paths.push(this.parseSegments());
	            }
	            while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
	                this.capture('/');
	                paths.push(this.parseSegments());
	            }
	            var children = {};
	            if (this.peekStartsWith('/(')) {
	                this.capture('/');
	                children = this.parseParens(true);
	            }
	            var res = {};
	            if (this.peekStartsWith('(')) {
	                res = this.parseParens(false);
	            }
	            if (paths.length > 0 || Object.keys(children).length > 0) {
	                res[PRIMARY_OUTLET] = new UrlSegmentGroup(paths, children);
	            }
	            return res;
	        };
	        UrlParser.prototype.parseSegments = function () {
	            var path = matchSegments(this.remaining);
	            if (path === '' && this.peekStartsWith(';')) {
	                throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
	            }
	            this.capture(path);
	            var matrixParams = {};
	            if (this.peekStartsWith(';')) {
	                matrixParams = this.parseMatrixParams();
	            }
	            return new UrlSegment(decode(path), matrixParams);
	        };
	        UrlParser.prototype.parseQueryParams = function () {
	            var params = {};
	            if (this.peekStartsWith('?')) {
	                this.capture('?');
	                this.parseQueryParam(params);
	                while (this.remaining.length > 0 && this.peekStartsWith('&')) {
	                    this.capture('&');
	                    this.parseQueryParam(params);
	                }
	            }
	            return params;
	        };
	        UrlParser.prototype.parseFragment = function () {
	            if (this.peekStartsWith('#')) {
	                return decodeURI(this.remaining.substring(1));
	            }
	            else {
	                return null;
	            }
	        };
	        UrlParser.prototype.parseMatrixParams = function () {
	            var params = {};
	            while (this.remaining.length > 0 && this.peekStartsWith(';')) {
	                this.capture(';');
	                this.parseParam(params);
	            }
	            return params;
	        };
	        UrlParser.prototype.parseParam = function (params) {
	            var key = matchSegments(this.remaining);
	            if (!key) {
	                return;
	            }
	            this.capture(key);
	            var value = '';
	            if (this.peekStartsWith('=')) {
	                this.capture('=');
	                var valueMatch = matchSegments(this.remaining);
	                if (valueMatch) {
	                    value = valueMatch;
	                    this.capture(value);
	                }
	            }
	            params[decode(key)] = decode(value);
	        };
	        UrlParser.prototype.parseQueryParam = function (params) {
	            var key = matchQueryParams(this.remaining);
	            if (!key) {
	                return;
	            }
	            this.capture(key);
	            var value = '';
	            if (this.peekStartsWith('=')) {
	                this.capture('=');
	                var valueMatch = matchUrlQueryParamValue(this.remaining);
	                if (valueMatch) {
	                    value = valueMatch;
	                    this.capture(value);
	                }
	            }
	            params[decode(key)] = decode(value);
	        };
	        UrlParser.prototype.parseParens = function (allowPrimary) {
	            var segments = {};
	            this.capture('(');
	            while (!this.peekStartsWith(')') && this.remaining.length > 0) {
	                var path = matchSegments(this.remaining);
	                var next = this.remaining[path.length];
	                // if is is not one of these characters, then the segment was unescaped
	                // or the group was not closed
	                if (next !== '/' && next !== ')' && next !== ';') {
	                    throw new Error("Cannot parse url '" + this.url + "'");
	                }
	                var outletName = void 0;
	                if (path.indexOf(':') > -1) {
	                    outletName = path.substr(0, path.indexOf(':'));
	                    this.capture(outletName);
	                    this.capture(':');
	                }
	                else if (allowPrimary) {
	                    outletName = PRIMARY_OUTLET;
	                }
	                var children = this.parseChildren();
	                segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] :
	                    new UrlSegmentGroup([], children);
	                if (this.peekStartsWith('//')) {
	                    this.capture('//');
	                }
	            }
	            this.capture(')');
	            return segments;
	        };
	        return UrlParser;
	    }());
	
	    var NoMatch = (function () {
	        function NoMatch(segmentGroup) {
	            if (segmentGroup === void 0) { segmentGroup = null; }
	            this.segmentGroup = segmentGroup;
	        }
	        return NoMatch;
	    }());
	    var AbsoluteRedirect = (function () {
	        function AbsoluteRedirect(segments) {
	            this.segments = segments;
	        }
	        return AbsoluteRedirect;
	    }());
	    function noMatch(segmentGroup) {
	        return new rxjs_Observable.Observable(function (obs) { return obs.error(new NoMatch(segmentGroup)); });
	    }
	    function absoluteRedirect(segments) {
	        return new rxjs_Observable.Observable(function (obs) { return obs.error(new AbsoluteRedirect(segments)); });
	    }
	    function canLoadFails(route) {
	        return new rxjs_Observable.Observable(function (obs) { return obs.error(new NavigationCancelingError("Cannot load children because the guard of the route \"path: '" + route.path + "'\" returned false")); });
	    }
	    function applyRedirects(injector, configLoader, urlTree, config) {
	        return new ApplyRedirects(injector, configLoader, urlTree, config).apply();
	    }
	    var ApplyRedirects = (function () {
	        function ApplyRedirects(injector, configLoader, urlTree, config) {
	            this.injector = injector;
	            this.configLoader = configLoader;
	            this.urlTree = urlTree;
	            this.config = config;
	            this.allowRedirects = true;
	        }
	        ApplyRedirects.prototype.apply = function () {
	            var _this = this;
	            var expanded$ = this.expandSegmentGroup(this.injector, this.config, this.urlTree.root, PRIMARY_OUTLET);
	            var urlTrees$ = rxjs_operator_map.map.call(expanded$, function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup); });
	            return rxjs_operator_catch._catch.call(urlTrees$, function (e) {
	                if (e instanceof AbsoluteRedirect) {
	                    // after an absolute redirect we do not apply any more redirects!
	                    _this.allowRedirects = false;
	                    var group = new UrlSegmentGroup([], (_a = {}, _a[PRIMARY_OUTLET] = new UrlSegmentGroup(e.segments, {}), _a));
	                    // we need to run matching, so we can fetch all lazy-loaded modules
	                    return _this.match(group);
	                }
	                else if (e instanceof NoMatch) {
	                    throw _this.noMatchError(e);
	                }
	                else {
	                    throw e;
	                }
	                var _a;
	            });
	        };
	        ApplyRedirects.prototype.match = function (segmentGroup) {
	            var _this = this;
	            var expanded$ = this.expandSegmentGroup(this.injector, this.config, segmentGroup, PRIMARY_OUTLET);
	            var mapped$ = rxjs_operator_map.map.call(expanded$, function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup); });
	            return rxjs_operator_catch._catch.call(mapped$, function (e) {
	                if (e instanceof NoMatch) {
	                    throw _this.noMatchError(e);
	                }
	                else {
	                    throw e;
	                }
	            });
	        };
	        ApplyRedirects.prototype.noMatchError = function (e) {
	            return new Error("Cannot match any routes: '" + e.segmentGroup + "'");
	        };
	        ApplyRedirects.prototype.createUrlTree = function (rootCandidate) {
	            var root = rootCandidate.segments.length > 0 ?
	                new UrlSegmentGroup([], (_a = {}, _a[PRIMARY_OUTLET] = rootCandidate, _a)) :
	                rootCandidate;
	            return new UrlTree(root, this.urlTree.queryParams, this.urlTree.fragment);
	            var _a;
	        };
	        ApplyRedirects.prototype.expandSegmentGroup = function (injector, routes, segmentGroup, outlet) {
	            if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
	                return rxjs_operator_map.map.call(this.expandChildren(injector, routes, segmentGroup), function (children) { return new UrlSegmentGroup([], children); });
	            }
	            else {
	                return this.expandSegment(injector, segmentGroup, routes, segmentGroup.segments, outlet, true);
	            }
	        };
	        ApplyRedirects.prototype.expandChildren = function (injector, routes, segmentGroup) {
	            var _this = this;
	            return waitForMap(segmentGroup.children, function (childOutlet, child) { return _this.expandSegmentGroup(injector, routes, child, childOutlet); });
	        };
	        ApplyRedirects.prototype.expandSegment = function (injector, segmentGroup, routes, segments, outlet, allowRedirects) {
	            var _this = this;
	            var routes$ = rxjs_observable_of.of.apply(void 0, routes);
	            var processedRoutes$ = rxjs_operator_map.map.call(routes$, function (r) {
	                var expanded$ = _this.expandSegmentAgainstRoute(injector, segmentGroup, routes, r, segments, outlet, allowRedirects);
	                return rxjs_operator_catch._catch.call(expanded$, function (e) {
	                    if (e instanceof NoMatch)
	                        return rxjs_observable_of.of(null);
	                    else
	                        throw e;
	                });
	            });
	            var concattedProcessedRoutes$ = rxjs_operator_concatAll.concatAll.call(processedRoutes$);
	            var first$ = rxjs_operator_first.first.call(concattedProcessedRoutes$, function (s) { return !!s; });
	            return rxjs_operator_catch._catch.call(first$, function (e, _) {
	                if (e instanceof rxjs_util_EmptyError.EmptyError) {
	                    throw new NoMatch(segmentGroup);
	                }
	                else {
	                    throw e;
	                }
	            });
	        };
	        ApplyRedirects.prototype.expandSegmentAgainstRoute = function (injector, segmentGroup, routes, route, paths, outlet, allowRedirects) {
	            if (getOutlet$1(route) !== outlet)
	                return noMatch(segmentGroup);
	            if (route.redirectTo !== undefined && !(allowRedirects && this.allowRedirects))
	                return noMatch(segmentGroup);
	            if (route.redirectTo === undefined) {
	                return this.matchSegmentAgainstRoute(injector, segmentGroup, route, paths);
	            }
	            else {
	                return this.expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, paths, outlet);
	            }
	        };
	        ApplyRedirects.prototype.expandSegmentAgainstRouteUsingRedirect = function (injector, segmentGroup, routes, route, segments, outlet) {
	            if (route.path === '**') {
	                return this.expandWildCardWithParamsAgainstRouteUsingRedirect(route);
	            }
	            else {
	                return this.expandRegularSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet);
	            }
	        };
	        ApplyRedirects.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (route) {
	            var newSegments = applyRedirectCommands([], route.redirectTo, {});
	            if (route.redirectTo.startsWith('/')) {
	                return absoluteRedirect(newSegments);
	            }
	            else {
	                return rxjs_observable_of.of(new UrlSegmentGroup(newSegments, {}));
	            }
	        };
	        ApplyRedirects.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (injector, segmentGroup, routes, route, segments, outlet) {
	            var _a = match(segmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
	            if (!matched)
	                return noMatch(segmentGroup);
	            var newSegments = applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
	            if (route.redirectTo.startsWith('/')) {
	                return absoluteRedirect(newSegments);
	            }
	            else {
	                return this.expandSegment(injector, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
	            }
	        };
	        ApplyRedirects.prototype.matchSegmentAgainstRoute = function (injector, rawSegmentGroup, route, segments) {
	            var _this = this;
	            if (route.path === '**') {
	                return rxjs_observable_of.of(new UrlSegmentGroup(segments, {}));
	            }
	            else {
	                var _a = match(rawSegmentGroup, route, segments), matched = _a.matched, consumedSegments_1 = _a.consumedSegments, lastChild = _a.lastChild;
	                if (!matched)
	                    return noMatch(rawSegmentGroup);
	                var rawSlicedSegments_1 = segments.slice(lastChild);
	                var childConfig$ = this.getChildConfig(injector, route);
	                return rxjs_operator_mergeMap.mergeMap.call(childConfig$, function (routerConfig) {
	                    var childInjector = routerConfig.injector;
	                    var childConfig = routerConfig.routes;
	                    var _a = split(rawSegmentGroup, consumedSegments_1, rawSlicedSegments_1, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
	                    if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
	                        var expanded$ = _this.expandChildren(childInjector, childConfig, segmentGroup);
	                        return rxjs_operator_map.map.call(expanded$, function (children) { return new UrlSegmentGroup(consumedSegments_1, children); });
	                    }
	                    else if (childConfig.length === 0 && slicedSegments.length === 0) {
	                        return rxjs_observable_of.of(new UrlSegmentGroup(consumedSegments_1, {}));
	                    }
	                    else {
	                        var expanded$ = _this.expandSegment(childInjector, segmentGroup, childConfig, slicedSegments, PRIMARY_OUTLET, true);
	                        return rxjs_operator_map.map.call(expanded$, function (cs) { return new UrlSegmentGroup(consumedSegments_1.concat(cs.segments), cs.children); });
	                    }
	                });
	            }
	        };
	        ApplyRedirects.prototype.getChildConfig = function (injector, route) {
	            var _this = this;
	            if (route.children) {
	                return rxjs_observable_of.of(new LoadedRouterConfig(route.children, injector, null));
	            }
	            else if (route.loadChildren) {
	                return rxjs_operator_mergeMap.mergeMap.call(runGuards(injector, route), function (shouldLoad) {
	                    if (shouldLoad) {
	                        if (route._loadedConfig) {
	                            return rxjs_observable_of.of(route._loadedConfig);
	                        }
	                        else {
	                            return rxjs_operator_map.map.call(_this.configLoader.load(injector, route.loadChildren), function (r) {
	                                route._loadedConfig = r;
	                                return r;
	                            });
	                        }
	                    }
	                    else {
	                        return canLoadFails(route);
	                    }
	                });
	            }
	            else {
	                return rxjs_observable_of.of(new LoadedRouterConfig([], injector, null));
	            }
	        };
	        return ApplyRedirects;
	    }());
	    function runGuards(injector, route) {
	        var canLoad = route.canLoad;
	        if (!canLoad || canLoad.length === 0)
	            return rxjs_observable_of.of(true);
	        var obs = rxjs_operator_map.map.call(rxjs_observable_from.from(canLoad), function (c) {
	            var guard = injector.get(c);
	            if (guard.canLoad) {
	                return wrapIntoObservable(guard.canLoad(route));
	            }
	            else {
	                return wrapIntoObservable(guard(route));
	            }
	        });
	        return andObservables(obs);
	    }
	    function match(segmentGroup, route, segments) {
	        var noMatch = { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
	        if (route.path === '') {
	            if ((route.pathMatch === 'full') && (segmentGroup.hasChildren() || segments.length > 0)) {
	                return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
	            }
	            else {
	                return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
	            }
	        }
	        var path = route.path;
	        var parts = path.split('/');
	        var positionalParamSegments = {};
	        var consumedSegments = [];
	        var currentIndex = 0;
	        for (var i = 0; i < parts.length; ++i) {
	            if (currentIndex >= segments.length)
	                return noMatch;
	            var current = segments[currentIndex];
	            var p = parts[i];
	            var isPosParam = p.startsWith(':');
	            if (!isPosParam && p !== current.path)
	                return noMatch;
	            if (isPosParam) {
	                positionalParamSegments[p.substring(1)] = current;
	            }
	            consumedSegments.push(current);
	            currentIndex++;
	        }
	        if (route.pathMatch === 'full' &&
	            (segmentGroup.hasChildren() || currentIndex < segments.length)) {
	            return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
	        }
	        return { matched: true, consumedSegments: consumedSegments, lastChild: currentIndex, positionalParamSegments: positionalParamSegments };
	    }
	    function applyRedirectCommands(segments, redirectTo, posParams) {
	        var r = redirectTo.startsWith('/') ? redirectTo.substring(1) : redirectTo;
	        if (r === '') {
	            return [];
	        }
	        else {
	            return createSegments(redirectTo, r.split('/'), segments, posParams);
	        }
	    }
	    function createSegments(redirectTo, parts, segments, posParams) {
	        return parts.map(function (p) { return p.startsWith(':') ? findPosParam(p, posParams, redirectTo) :
	            findOrCreateSegment(p, segments); });
	    }
	    function findPosParam(part, posParams, redirectTo) {
	        var paramName = part.substring(1);
	        var pos = posParams[paramName];
	        if (!pos)
	            throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + part + "'.");
	        return pos;
	    }
	    function findOrCreateSegment(part, segments) {
	        var idx = 0;
	        for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
	            var s = segments_1[_i];
	            if (s.path === part) {
	                segments.splice(idx);
	                return s;
	            }
	            idx++;
	        }
	        return new UrlSegment(part, {});
	    }
	    function split(segmentGroup, consumedSegments, slicedSegments, config) {
	        if (slicedSegments.length > 0 &&
	            containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
	            var s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptySegments(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
	            return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
	        }
	        else if (slicedSegments.length === 0 &&
	            containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
	            var s = new UrlSegmentGroup(segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
	            return { segmentGroup: mergeTrivialChildren(s), slicedSegments: slicedSegments };
	        }
	        else {
	            return { segmentGroup: segmentGroup, slicedSegments: slicedSegments };
	        }
	    }
	    function mergeTrivialChildren(s) {
	        if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
	            var c = s.children[PRIMARY_OUTLET];
	            return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
	        }
	        else {
	            return s;
	        }
	    }
	    function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
	        var res = {};
	        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
	            var r = routes_1[_i];
	            if (emptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet$1(r)]) {
	                res[getOutlet$1(r)] = new UrlSegmentGroup([], {});
	            }
	        }
	        return merge(children, res);
	    }
	    function createChildrenForEmptySegments(routes, primarySegmentGroup) {
	        var res = {};
	        res[PRIMARY_OUTLET] = primarySegmentGroup;
	        for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
	            var r = routes_2[_i];
	            if (r.path === '' && getOutlet$1(r) !== PRIMARY_OUTLET) {
	                res[getOutlet$1(r)] = new UrlSegmentGroup([], {});
	            }
	        }
	        return res;
	    }
	    function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, routes) {
	        return routes
	            .filter(function (r) { return emptyPathRedirect(segmentGroup, slicedSegments, r) &&
	            getOutlet$1(r) !== PRIMARY_OUTLET; })
	            .length > 0;
	    }
	    function containsEmptyPathRedirects(segmentGroup, slicedSegments, routes) {
	        return routes.filter(function (r) { return emptyPathRedirect(segmentGroup, slicedSegments, r); }).length > 0;
	    }
	    function emptyPathRedirect(segmentGroup, slicedSegments, r) {
	        if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full')
	            return false;
	        return r.path === '' && r.redirectTo !== undefined;
	    }
	    function getOutlet$1(route) {
	        return route.outlet ? route.outlet : PRIMARY_OUTLET;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function validateConfig(config) {
	        config.forEach(validateNode);
	    }
	    function validateNode(route) {
	        if (Array.isArray(route)) {
	            throw new Error("Invalid route configuration: Array cannot be specified");
	        }
	        if (!!route.redirectTo && !!route.children) {
	            throw new Error("Invalid configuration of route '" + route.path + "': redirectTo and children cannot be used together");
	        }
	        if (!!route.redirectTo && !!route.loadChildren) {
	            throw new Error("Invalid configuration of route '" + route.path + "': redirectTo and loadChildren cannot be used together");
	        }
	        if (!!route.children && !!route.loadChildren) {
	            throw new Error("Invalid configuration of route '" + route.path + "': children and loadChildren cannot be used together");
	        }
	        if (!!route.redirectTo && !!route.component) {
	            throw new Error("Invalid configuration of route '" + route.path + "': redirectTo and component cannot be used together");
	        }
	        if (route.redirectTo === undefined && !route.component && !route.children &&
	            !route.loadChildren) {
	            throw new Error("Invalid configuration of route '" + route.path + "': one of the following must be provided (component or redirectTo or children or loadChildren)");
	        }
	        if (route.path === undefined) {
	            throw new Error("Invalid route configuration: routes must have path specified");
	        }
	        if (route.path.startsWith('/')) {
	            throw new Error("Invalid route configuration of route '" + route.path + "': path cannot start with a slash");
	        }
	        if (route.path === '' && route.redirectTo !== undefined && route.pathMatch === undefined) {
	            var exp = "The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.";
	            throw new Error("Invalid route configuration of route '{path: \"" + route.path + "\", redirectTo: \"" + route.redirectTo + "\"}': please provide 'pathMatch'. " + exp);
	        }
	        if (route.pathMatch !== undefined && route.pathMatch !== 'full' && route.pathMatch !== 'prefix') {
	            throw new Error("Invalid configuration of route '" + route.path + "': pathMatch can only be set to 'prefix' or 'full'");
	        }
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var Tree = (function () {
	        function Tree(root) {
	            this._root = root;
	        }
	        Object.defineProperty(Tree.prototype, "root", {
	            get: function () { return this._root.value; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @internal
	         */
	        Tree.prototype.parent = function (t) {
	            var p = this.pathFromRoot(t);
	            return p.length > 1 ? p[p.length - 2] : null;
	        };
	        /**
	         * @internal
	         */
	        Tree.prototype.children = function (t) {
	            var n = findNode(t, this._root);
	            return n ? n.children.map(function (t) { return t.value; }) : [];
	        };
	        /**
	         * @internal
	         */
	        Tree.prototype.firstChild = function (t) {
	            var n = findNode(t, this._root);
	            return n && n.children.length > 0 ? n.children[0].value : null;
	        };
	        /**
	         * @internal
	         */
	        Tree.prototype.siblings = function (t) {
	            var p = findPath(t, this._root, []);
	            if (p.length < 2)
	                return [];
	            var c = p[p.length - 2].children.map(function (c) { return c.value; });
	            return c.filter(function (cc) { return cc !== t; });
	        };
	        /**
	         * @internal
	         */
	        Tree.prototype.pathFromRoot = function (t) { return findPath(t, this._root, []).map(function (s) { return s.value; }); };
	        return Tree;
	    }());
	    function findNode(expected, c) {
	        if (expected === c.value)
	            return c;
	        for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
	            var cc = _a[_i];
	            var r = findNode(expected, cc);
	            if (r)
	                return r;
	        }
	        return null;
	    }
	    function findPath(expected, c, collected) {
	        collected.push(c);
	        if (expected === c.value)
	            return collected;
	        for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
	            var cc = _a[_i];
	            var cloned = collected.slice(0);
	            var r = findPath(expected, cc, cloned);
	            if (r.length > 0)
	                return r;
	        }
	        return [];
	    }
	    var TreeNode = (function () {
	        function TreeNode(value, children) {
	            this.value = value;
	            this.children = children;
	        }
	        TreeNode.prototype.toString = function () { return "TreeNode(" + this.value + ")"; };
	        return TreeNode;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @whatItDoes Represents the state of the router.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'template.html'})
	     * class MyComponent {
	     *   constructor(router: Router) {
	     *     const state: RouterState = router.routerState;
	     *     const root: ActivatedRoute = state.root;
	     *     const child = root.firstChild;
	     *     const id: Observable<string> = child.params.map(p => p.id);
	     *     //...
	     *   }
	     * }
	     * ```
	     *
	     * @description
	     * RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL
	     * segments,
	     * the extracted parameters, and the resolved data.
	     *
	     * See {@link ActivatedRoute} for more information.
	     *
	     * @stable
	     */
	    var RouterState = (function (_super) {
	        __extends$1(RouterState, _super);
	        /**
	         * @internal
	         */
	        function RouterState(root,
	            /**
	             * The current snapshot of the router state.
	             */
	            snapshot) {
	            _super.call(this, root);
	            this.snapshot = snapshot;
	            setRouterStateSnapshot(this, root);
	        }
	        RouterState.prototype.toString = function () { return this.snapshot.toString(); };
	        return RouterState;
	    }(Tree));
	    function createEmptyState(urlTree, rootComponent) {
	        var snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
	        var emptyUrl = new rxjs_BehaviorSubject.BehaviorSubject([new UrlSegment('', {})]);
	        var emptyParams = new rxjs_BehaviorSubject.BehaviorSubject({});
	        var emptyData = new rxjs_BehaviorSubject.BehaviorSubject({});
	        var emptyQueryParams = new rxjs_BehaviorSubject.BehaviorSubject({});
	        var fragment = new rxjs_BehaviorSubject.BehaviorSubject('');
	        var activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
	        activated.snapshot = snapshot.root;
	        return new RouterState(new TreeNode(activated, []), snapshot);
	    }
	    function createEmptyStateSnapshot(urlTree, rootComponent) {
	        var emptyParams = {};
	        var emptyData = {};
	        var emptyQueryParams = {};
	        var fragment = '';
	        var activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1, InheritedResolve.empty);
	        return new RouterStateSnapshot('', new TreeNode(activated, []));
	    }
	    /**
	     * @whatItDoes Contains the information about a route associated with a component loaded in an
	     * outlet.
	     * ActivatedRoute can also be used to traverse the router state tree.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'./my-component.html'})
	     * class MyComponent {
	     *   constructor(route: ActivatedRoute) {
	     *     const id: Observable<string> = route.params.map(p => p.id);
	     *     const url: Observable<string> = route.url.map(s => s.join(''));
	     *     const user = route.data.map(d => d.user); //includes `data` and `resolve`
	     *   }
	     * }
	     * ```
	     *
	     * @stable
	     */
	    var ActivatedRoute = (function () {
	        /**
	         * @internal
	         */
	        function ActivatedRoute(
	            /**
	             *  The URL segments matched by this route. The observable will emit a new value when
	             *  the array of segments changes.
	             */
	            url,
	            /**
	             * The matrix parameters scoped to this route. The observable will emit a new value when
	             * the set of the parameters changes.
	             */
	            params,
	            /**
	             * The query parameters shared by all the routes. The observable will emit a new value when
	             * the set of the parameters changes.
	             */
	            queryParams,
	            /**
	             * The URL fragment shared by all the routes. The observable will emit a new value when
	             * the URL fragment changes.
	             */
	            fragment,
	            /**
	             * The static and resolved data of this route. The observable will emit a new value when
	             * any of the resolvers returns a new object.
	             */
	            data,
	            /**
	             * The outlet name of the route. It's a constant.
	             */
	            outlet,
	            /**
	             * The component of the route. It's a constant.
	             */
	            component, // TODO: vsavkin: remove |string
	            futureSnapshot) {
	            this.url = url;
	            this.params = params;
	            this.queryParams = queryParams;
	            this.fragment = fragment;
	            this.data = data;
	            this.outlet = outlet;
	            this.component = component;
	            this._futureSnapshot = futureSnapshot;
	        }
	        Object.defineProperty(ActivatedRoute.prototype, "routeConfig", {
	            /**
	             * The configuration used to match this route.
	             */
	            get: function () { return this._futureSnapshot.routeConfig; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRoute.prototype, "root", {
	            /**
	             * The root of the router state.
	             */
	            get: function () { return this._routerState.root; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRoute.prototype, "parent", {
	            /**
	             * The parent of this route in the router state tree.
	             */
	            get: function () { return this._routerState.parent(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRoute.prototype, "firstChild", {
	            /**
	             * The first child of this route in the router state tree.
	             */
	            get: function () { return this._routerState.firstChild(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRoute.prototype, "children", {
	            /**
	             * The children of this route in the router state tree.
	             */
	            get: function () { return this._routerState.children(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRoute.prototype, "pathFromRoot", {
	            /**
	             * The path from the root of the router state tree to this route.
	             */
	            get: function () { return this._routerState.pathFromRoot(this); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @docsNotRequired
	         */
	        ActivatedRoute.prototype.toString = function () {
	            return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
	        };
	        return ActivatedRoute;
	    }());
	    /**
	     * @internal
	     */
	    var InheritedResolve = (function () {
	        function InheritedResolve(parent, current) {
	            this.parent = parent;
	            this.current = current;
	            /**
	             * @internal
	             */
	            this.resolvedData = {};
	        }
	        Object.defineProperty(InheritedResolve.prototype, "flattenedResolvedData", {
	            /**
	             * @internal
	             */
	            get: function () {
	                return this.parent ? merge(this.parent.flattenedResolvedData, this.resolvedData) :
	                    this.resolvedData;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(InheritedResolve, "empty", {
	            get: function () { return new InheritedResolve(null, {}); },
	            enumerable: true,
	            configurable: true
	        });
	        return InheritedResolve;
	    }());
	    /**
	     * @whatItDoes Contains the information about a route associated with a component loaded in an
	     * outlet
	     * at a particular moment in time. ActivatedRouteSnapshot can also be used to traverse the router
	     * state tree.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'./my-component.html'})
	     * class MyComponent {
	     *   constructor(route: ActivatedRoute) {
	     *     const id: string = route.snapshot.params.id;
	     *     const url: string = route.snapshot.url.join('');
	     *     const user = route.snapshot.data.user;
	     *   }
	     * }
	     * ```
	     *
	     * @stable
	     */
	    var ActivatedRouteSnapshot = (function () {
	        /**
	         * @internal
	         */
	        function ActivatedRouteSnapshot(
	            /**
	             *  The URL segments matched by this route.
	             */
	            url,
	            /**
	             * The matrix parameters scoped to this route.
	             */
	            params,
	            /**
	             * The query parameters shared by all the routes.
	             */
	            queryParams,
	            /**
	             * The URL fragment shared by all the routes.
	             */
	            fragment,
	            /**
	             * The static and resolved data of this route.
	             */
	            data,
	            /**
	             * The outlet name of the route.
	             */
	            outlet,
	            /**
	             * The component of the route.
	             */
	            component, routeConfig, urlSegment, lastPathIndex, resolve) {
	            this.url = url;
	            this.params = params;
	            this.queryParams = queryParams;
	            this.fragment = fragment;
	            this.data = data;
	            this.outlet = outlet;
	            this.component = component;
	            this._routeConfig = routeConfig;
	            this._urlSegment = urlSegment;
	            this._lastPathIndex = lastPathIndex;
	            this._resolve = resolve;
	        }
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "routeConfig", {
	            /**
	             * The configuration used to match this route.
	             */
	            get: function () { return this._routeConfig; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "root", {
	            /**
	             * The root of the router state.
	             */
	            get: function () { return this._routerState.root; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "parent", {
	            /**
	             * The parent of this route in the router state tree.
	             */
	            get: function () { return this._routerState.parent(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "firstChild", {
	            /**
	             * The first child of this route in the router state tree.
	             */
	            get: function () { return this._routerState.firstChild(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "children", {
	            /**
	             * The children of this route in the router state tree.
	             */
	            get: function () { return this._routerState.children(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ActivatedRouteSnapshot.prototype, "pathFromRoot", {
	            /**
	             * The path from the root of the router state tree to this route.
	             */
	            get: function () { return this._routerState.pathFromRoot(this); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @docsNotRequired
	         */
	        ActivatedRouteSnapshot.prototype.toString = function () {
	            var url = this.url.map(function (s) { return s.toString(); }).join('/');
	            var matched = this._routeConfig ? this._routeConfig.path : '';
	            return "Route(url:'" + url + "', path:'" + matched + "')";
	        };
	        return ActivatedRouteSnapshot;
	    }());
	    /**
	     * @whatItDoes Represents the state of the router at a moment in time.
	     *
	     * @howToUse
	     *
	     * ```
	     * @Component({templateUrl:'template.html'})
	     * class MyComponent {
	     *   constructor(router: Router) {
	     *     const state: RouterState = router.routerState;
	     *     const snapshot: RouterStateSnapshot = state.snapshot;
	     *     const root: ActivatedRouteSnapshot = snapshot.root;
	     *     const child = root.firstChild;
	     *     const id: Observable<string> = child.params.map(p => p.id);
	     *     //...
	     *   }
	     * }
	     * ```
	     *
	     * @description
	     * RouterStateSnapshot is a tree of activated route snapshots. Every node in this tree knows about
	     * the "consumed" URL segments, the extracted parameters, and the resolved data.
	     *
	     * @stable
	     */
	    var RouterStateSnapshot = (function (_super) {
	        __extends$1(RouterStateSnapshot, _super);
	        /**
	         * @internal
	         */
	        function RouterStateSnapshot(
	            /** The url from which this snapshot was created */
	            url, root) {
	            _super.call(this, root);
	            this.url = url;
	            setRouterStateSnapshot(this, root);
	        }
	        RouterStateSnapshot.prototype.toString = function () { return serializeNode(this._root); };
	        return RouterStateSnapshot;
	    }(Tree));
	    function setRouterStateSnapshot(state, node) {
	        node.value._routerState = state;
	        node.children.forEach(function (c) { return setRouterStateSnapshot(state, c); });
	    }
	    function serializeNode(node) {
	        var c = node.children.length > 0 ? " { " + node.children.map(serializeNode).join(", ") + " } " : '';
	        return "" + node.value + c;
	    }
	    /**
	     * The expectation is that the activate route is created with the right set of parameters.
	     * So we push new values into the observables only when they are not the initial values.
	     * And we detect that by checking if the snapshot field is set.
	     */
	    function advanceActivatedRoute(route) {
	        if (route.snapshot) {
	            if (!shallowEqual(route.snapshot.queryParams, route._futureSnapshot.queryParams)) {
	                route.queryParams.next(route._futureSnapshot.queryParams);
	            }
	            if (route.snapshot.fragment !== route._futureSnapshot.fragment) {
	                route.fragment.next(route._futureSnapshot.fragment);
	            }
	            if (!shallowEqual(route.snapshot.params, route._futureSnapshot.params)) {
	                route.params.next(route._futureSnapshot.params);
	                route.data.next(route._futureSnapshot.data);
	            }
	            if (!shallowEqualArrays(route.snapshot.url, route._futureSnapshot.url)) {
	                route.url.next(route._futureSnapshot.url);
	            }
	            route.snapshot = route._futureSnapshot;
	        }
	        else {
	            route.snapshot = route._futureSnapshot;
	            // this is for resolved data
	            route.data.next(route._futureSnapshot.data);
	        }
	    }
	
	    function createRouterState(curr, prevState) {
	        var root = createNode(curr._root, prevState ? prevState._root : undefined);
	        return new RouterState(root, curr);
	    }
	    function createNode(curr, prevState) {
	        if (prevState && equalRouteSnapshots(prevState.value.snapshot, curr.value)) {
	            var value = prevState.value;
	            value._futureSnapshot = curr.value;
	            var children = createOrReuseChildren(curr, prevState);
	            return new TreeNode(value, children);
	        }
	        else {
	            var value = createActivatedRoute(curr.value);
	            var children = curr.children.map(function (c) { return createNode(c); });
	            return new TreeNode(value, children);
	        }
	    }
	    function createOrReuseChildren(curr, prevState) {
	        return curr.children.map(function (child) {
	            for (var _i = 0, _a = prevState.children; _i < _a.length; _i++) {
	                var p = _a[_i];
	                if (equalRouteSnapshots(p.value.snapshot, child.value)) {
	                    return createNode(child, p);
	                }
	            }
	            return createNode(child);
	        });
	    }
	    function createActivatedRoute(c) {
	        return new ActivatedRoute(new rxjs_BehaviorSubject.BehaviorSubject(c.url), new rxjs_BehaviorSubject.BehaviorSubject(c.params), new rxjs_BehaviorSubject.BehaviorSubject(c.queryParams), new rxjs_BehaviorSubject.BehaviorSubject(c.fragment), new rxjs_BehaviorSubject.BehaviorSubject(c.data), c.outlet, c.component, c);
	    }
	    function equalRouteSnapshots(a, b) {
	        return a._routeConfig === b._routeConfig;
	    }
	
	    function createUrlTree(route, urlTree, commands, queryParams, fragment) {
	        if (commands.length === 0) {
	            return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
	        }
	        var normalizedCommands = normalizeCommands(commands);
	        validateCommands(normalizedCommands);
	        if (navigateToRoot(normalizedCommands)) {
	            return tree(urlTree.root, new UrlSegmentGroup([], {}), urlTree, queryParams, fragment);
	        }
	        var startingPosition = findStartingPosition(normalizedCommands, urlTree, route);
	        var segmentGroup = startingPosition.processChildren ?
	            updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, normalizedCommands.commands) :
	            updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, normalizedCommands.commands);
	        return tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
	    }
	    function validateCommands(n) {
	        if (n.isAbsolute && n.commands.length > 0 && isMatrixParams(n.commands[0])) {
	            throw new Error('Root segment cannot have matrix parameters');
	        }
	        var c = n.commands.filter(function (c) { return typeof c === 'object' && c.outlets !== undefined; });
	        if (c.length > 0 && c[0] !== n.commands[n.commands.length - 1]) {
	            throw new Error('{outlets:{}} has to be the last command');
	        }
	    }
	    function isMatrixParams(command) {
	        return typeof command === 'object' && command.outlets === undefined &&
	            command.segmentPath === undefined;
	    }
	    function tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
	        if (urlTree.root === oldSegmentGroup) {
	            return new UrlTree(newSegmentGroup, stringify(queryParams), fragment);
	        }
	        else {
	            return new UrlTree(replaceSegment(urlTree.root, oldSegmentGroup, newSegmentGroup), stringify(queryParams), fragment);
	        }
	    }
	    function replaceSegment(current, oldSegment, newSegment) {
	        var children = {};
	        forEach(current.children, function (c, outletName) {
	            if (c === oldSegment) {
	                children[outletName] = newSegment;
	            }
	            else {
	                children[outletName] = replaceSegment(c, oldSegment, newSegment);
	            }
	        });
	        return new UrlSegmentGroup(current.segments, children);
	    }
	    function navigateToRoot(normalizedChange) {
	        return normalizedChange.isAbsolute && normalizedChange.commands.length === 1 &&
	            normalizedChange.commands[0] == '/';
	    }
	    var NormalizedNavigationCommands = (function () {
	        function NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, commands) {
	            this.isAbsolute = isAbsolute;
	            this.numberOfDoubleDots = numberOfDoubleDots;
	            this.commands = commands;
	        }
	        return NormalizedNavigationCommands;
	    }());
	    function normalizeCommands(commands) {
	        if ((typeof commands[0] === 'string') && commands.length === 1 && commands[0] == '/') {
	            return new NormalizedNavigationCommands(true, 0, commands);
	        }
	        var numberOfDoubleDots = 0;
	        var isAbsolute = false;
	        var res = [];
	        var _loop_1 = function(i) {
	            var c = commands[i];
	            if (typeof c === 'object' && c.outlets !== undefined) {
	                var r_1 = {};
	                forEach(c.outlets, function (commands, name) {
	                    if (typeof commands === 'string') {
	                        r_1[name] = commands.split('/');
	                    }
	                    else {
	                        r_1[name] = commands;
	                    }
	                });
	                res.push({ outlets: r_1 });
	                return "continue";
	            }
	            if (typeof c === 'object' && c.segmentPath !== undefined) {
	                res.push(c.segmentPath);
	                return "continue";
	            }
	            if (!(typeof c === 'string')) {
	                res.push(c);
	                return "continue";
	            }
	            if (i === 0) {
	                var parts = c.split('/');
	                for (var j = 0; j < parts.length; ++j) {
	                    var cc = parts[j];
	                    if (j == 0 && cc == '.') {
	                    }
	                    else if (j == 0 && cc == '') {
	                        isAbsolute = true;
	                    }
	                    else if (cc == '..') {
	                        numberOfDoubleDots++;
	                    }
	                    else if (cc != '') {
	                        res.push(cc);
	                    }
	                }
	            }
	            else {
	                res.push(c);
	            }
	        };
	        for (var i = 0; i < commands.length; ++i) {
	            _loop_1(i);
	        }
	        return new NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, res);
	    }
	    var Position = (function () {
	        function Position(segmentGroup, processChildren, index) {
	            this.segmentGroup = segmentGroup;
	            this.processChildren = processChildren;
	            this.index = index;
	        }
	        return Position;
	    }());
	    function findStartingPosition(normalizedChange, urlTree, route) {
	        if (normalizedChange.isAbsolute) {
	            return new Position(urlTree.root, true, 0);
	        }
	        else if (route.snapshot._lastPathIndex === -1) {
	            return new Position(route.snapshot._urlSegment, true, 0);
	        }
	        else {
	            var modifier = isMatrixParams(normalizedChange.commands[0]) ? 0 : 1;
	            var index = route.snapshot._lastPathIndex + modifier;
	            return createPositionApplyingDoubleDots(route.snapshot._urlSegment, index, normalizedChange.numberOfDoubleDots);
	        }
	    }
	    function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
	        var g = group;
	        var ci = index;
	        var dd = numberOfDoubleDots;
	        while (dd > ci) {
	            dd -= ci;
	            g = g.parent;
	            if (!g) {
	                throw new Error('Invalid number of \'../\'');
	            }
	            ci = g.segments.length;
	        }
	        return new Position(g, false, ci - dd);
	    }
	    function getPath(command) {
	        return "" + command;
	    }
	    function getOutlets(commands) {
	        if (!(typeof commands[0] === 'object'))
	            return (_a = {}, _a[PRIMARY_OUTLET] = commands, _a);
	        if (commands[0].outlets === undefined)
	            return (_b = {}, _b[PRIMARY_OUTLET] = commands, _b);
	        return commands[0].outlets;
	        var _a, _b;
	    }
	    function updateSegmentGroup(segmentGroup, startIndex, commands) {
	        if (!segmentGroup) {
	            segmentGroup = new UrlSegmentGroup([], {});
	        }
	        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
	            return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
	        }
	        var m = prefixedWith(segmentGroup, startIndex, commands);
	        var slicedCommands = commands.slice(m.lastIndex);
	        if (m.match && slicedCommands.length === 0) {
	            return new UrlSegmentGroup(segmentGroup.segments, {});
	        }
	        else if (m.match && !segmentGroup.hasChildren()) {
	            return createNewSegmentGroup(segmentGroup, startIndex, commands);
	        }
	        else if (m.match) {
	            return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
	        }
	        else {
	            return createNewSegmentGroup(segmentGroup, startIndex, commands);
	        }
	    }
	    function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
	        if (commands.length === 0) {
	            return new UrlSegmentGroup(segmentGroup.segments, {});
	        }
	        else {
	            var outlets_1 = getOutlets(commands);
	            var children_1 = {};
	            forEach(outlets_1, function (commands, outlet) {
	                if (commands !== null) {
	                    children_1[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
	                }
	            });
	            forEach(segmentGroup.children, function (child, childOutlet) {
	                if (outlets_1[childOutlet] === undefined) {
	                    children_1[childOutlet] = child;
	                }
	            });
	            return new UrlSegmentGroup(segmentGroup.segments, children_1);
	        }
	    }
	    function prefixedWith(segmentGroup, startIndex, commands) {
	        var currentCommandIndex = 0;
	        var currentPathIndex = startIndex;
	        var noMatch = { match: false, lastIndex: 0 };
	        while (currentPathIndex < segmentGroup.segments.length) {
	            if (currentCommandIndex >= commands.length)
	                return noMatch;
	            var path = segmentGroup.segments[currentPathIndex];
	            var curr = getPath(commands[currentCommandIndex]);
	            var next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
	            if (curr && next && (typeof next === 'object') && next.outlets === undefined) {
	                if (!compare(curr, next, path))
	                    return noMatch;
	                currentCommandIndex += 2;
	            }
	            else {
	                if (!compare(curr, {}, path))
	                    return noMatch;
	                currentCommandIndex++;
	            }
	            currentPathIndex++;
	        }
	        return { match: true, lastIndex: currentCommandIndex };
	    }
	    function createNewSegmentGroup(segmentGroup, startIndex, commands) {
	        var paths = segmentGroup.segments.slice(0, startIndex);
	        var i = 0;
	        while (i < commands.length) {
	            if (typeof commands[i] === 'object' && commands[i].outlets !== undefined) {
	                var children = createNewSegmentChldren(commands[i].outlets);
	                return new UrlSegmentGroup(paths, children);
	            }
	            // if we start with an object literal, we need to reuse the path part from the segment
	            if (i === 0 && isMatrixParams(commands[0])) {
	                var p = segmentGroup.segments[startIndex];
	                paths.push(new UrlSegment(p.path, commands[0]));
	                i++;
	                continue;
	            }
	            var curr = getPath(commands[i]);
	            var next = (i < commands.length - 1) ? commands[i + 1] : null;
	            if (curr && next && isMatrixParams(next)) {
	                paths.push(new UrlSegment(curr, stringify(next)));
	                i += 2;
	            }
	            else {
	                paths.push(new UrlSegment(curr, {}));
	                i++;
	            }
	        }
	        return new UrlSegmentGroup(paths, {});
	    }
	    function createNewSegmentChldren(outlets) {
	        var children = {};
	        forEach(outlets, function (commands, outlet) {
	            if (commands !== null) {
	                children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
	            }
	        });
	        return children;
	    }
	    function stringify(params) {
	        var res = {};
	        forEach(params, function (v, k) { return res[k] = "" + v; });
	        return res;
	    }
	    function compare(path, params, segment) {
	        return path == segment.path && shallowEqual(params, segment.parameters);
	    }
	
	    var NoMatch$1 = (function () {
	        function NoMatch() {
	        }
	        return NoMatch;
	    }());
	    var InheritedFromParent = (function () {
	        function InheritedFromParent(parent, snapshot, params, data, resolve) {
	            this.parent = parent;
	            this.snapshot = snapshot;
	            this.params = params;
	            this.data = data;
	            this.resolve = resolve;
	        }
	        Object.defineProperty(InheritedFromParent.prototype, "allParams", {
	            get: function () {
	                return this.parent ? merge(this.parent.allParams, this.params) : this.params;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(InheritedFromParent.prototype, "allData", {
	            get: function () { return this.parent ? merge(this.parent.allData, this.data) : this.data; },
	            enumerable: true,
	            configurable: true
	        });
	        InheritedFromParent.empty = function (snapshot) {
	            return new InheritedFromParent(null, snapshot, {}, {}, new InheritedResolve(null, {}));
	        };
	        return InheritedFromParent;
	    }());
	    function recognize(rootComponentType, config, urlTree, url) {
	        return new Recognizer(rootComponentType, config, urlTree, url).recognize();
	    }
	    var Recognizer = (function () {
	        function Recognizer(rootComponentType, config, urlTree, url) {
	            this.rootComponentType = rootComponentType;
	            this.config = config;
	            this.urlTree = urlTree;
	            this.url = url;
	        }
	        Recognizer.prototype.recognize = function () {
	            try {
	                var rootSegmentGroup = split$1(this.urlTree.root, [], [], this.config).segmentGroup;
	                var children = this.processSegmentGroup(this.config, rootSegmentGroup, InheritedFromParent.empty(null), PRIMARY_OUTLET);
	                var root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, this.urlTree.root, -1, InheritedResolve.empty);
	                var rootNode = new TreeNode(root, children);
	                return rxjs_observable_of.of(new RouterStateSnapshot(this.url, rootNode));
	            }
	            catch (e) {
	                return new rxjs_Observable.Observable(function (obs) { return obs.error(e); });
	            }
	        };
	        Recognizer.prototype.processSegmentGroup = function (config, segmentGroup, inherited, outlet) {
	            if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
	                return this.processChildren(config, segmentGroup, inherited);
	            }
	            else {
	                return this.processSegment(config, segmentGroup, 0, segmentGroup.segments, inherited, outlet);
	            }
	        };
	        Recognizer.prototype.processChildren = function (config, segmentGroup, inherited) {
	            var _this = this;
	            var children = mapChildrenIntoArray(segmentGroup, function (child, childOutlet) { return _this.processSegmentGroup(config, child, inherited, childOutlet); });
	            checkOutletNameUniqueness(children);
	            sortActivatedRouteSnapshots(children);
	            return children;
	        };
	        Recognizer.prototype.processSegment = function (config, segmentGroup, pathIndex, segments, inherited, outlet) {
	            for (var _i = 0, config_1 = config; _i < config_1.length; _i++) {
	                var r = config_1[_i];
	                try {
	                    return this.processSegmentAgainstRoute(r, segmentGroup, pathIndex, segments, inherited, outlet);
	                }
	                catch (e) {
	                    if (!(e instanceof NoMatch$1))
	                        throw e;
	                }
	            }
	            throw new NoMatch$1();
	        };
	        Recognizer.prototype.processSegmentAgainstRoute = function (route, rawSegment, pathIndex, segments, inherited, outlet) {
	            if (route.redirectTo)
	                throw new NoMatch$1();
	            if ((route.outlet ? route.outlet : PRIMARY_OUTLET) !== outlet)
	                throw new NoMatch$1();
	            var newInheritedResolve = new InheritedResolve(inherited.resolve, getResolve(route));
	            if (route.path === '**') {
	                var params = segments.length > 0 ? last(segments).parameters : {};
	                var snapshot_1 = new ActivatedRouteSnapshot(segments, Object.freeze(merge(inherited.allParams, params)), Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, merge(inherited.allData, getData(route)), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + segments.length, newInheritedResolve);
	                return [new TreeNode(snapshot_1, [])];
	            }
	            var _a = match$1(rawSegment, route, segments, inherited.snapshot), consumedSegments = _a.consumedSegments, parameters = _a.parameters, lastChild = _a.lastChild;
	            var rawSlicedSegments = segments.slice(lastChild);
	            var childConfig = getChildConfig(route);
	            var _b = split$1(rawSegment, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _b.segmentGroup, slicedSegments = _b.slicedSegments;
	            var snapshot = new ActivatedRouteSnapshot(consumedSegments, Object.freeze(merge(inherited.allParams, parameters)), Object.freeze(this.urlTree.queryParams), this.urlTree.fragment, merge(inherited.allData, getData(route)), outlet, route.component, route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + consumedSegments.length, newInheritedResolve);
	            var newInherited = route.component ?
	                InheritedFromParent.empty(snapshot) :
	                new InheritedFromParent(inherited, snapshot, parameters, getData(route), newInheritedResolve);
	            if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
	                var children = this.processChildren(childConfig, segmentGroup, newInherited);
	                return [new TreeNode(snapshot, children)];
	            }
	            else if (childConfig.length === 0 && slicedSegments.length === 0) {
	                return [new TreeNode(snapshot, [])];
	            }
	            else {
	                var children = this.processSegment(childConfig, segmentGroup, pathIndex + lastChild, slicedSegments, newInherited, PRIMARY_OUTLET);
	                return [new TreeNode(snapshot, children)];
	            }
	        };
	        return Recognizer;
	    }());
	    function sortActivatedRouteSnapshots(nodes) {
	        nodes.sort(function (a, b) {
	            if (a.value.outlet === PRIMARY_OUTLET)
	                return -1;
	            if (b.value.outlet === PRIMARY_OUTLET)
	                return 1;
	            return a.value.outlet.localeCompare(b.value.outlet);
	        });
	    }
	    function getChildConfig(route) {
	        if (route.children) {
	            return route.children;
	        }
	        else if (route.loadChildren) {
	            return route._loadedConfig.routes;
	        }
	        else {
	            return [];
	        }
	    }
	    function match$1(segmentGroup, route, segments, parent) {
	        if (route.path === '') {
	            if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
	                throw new NoMatch$1();
	            }
	            else {
	                var params = parent ? parent.params : {};
	                return { consumedSegments: [], lastChild: 0, parameters: params };
	            }
	        }
	        var path = route.path;
	        var parts = path.split('/');
	        var posParameters = {};
	        var consumedSegments = [];
	        var currentIndex = 0;
	        for (var i = 0; i < parts.length; ++i) {
	            if (currentIndex >= segments.length)
	                throw new NoMatch$1();
	            var current = segments[currentIndex];
	            var p = parts[i];
	            var isPosParam = p.startsWith(':');
	            if (!isPosParam && p !== current.path)
	                throw new NoMatch$1();
	            if (isPosParam) {
	                posParameters[p.substring(1)] = current.path;
	            }
	            consumedSegments.push(current);
	            currentIndex++;
	        }
	        if (route.pathMatch === 'full' &&
	            (segmentGroup.hasChildren() || currentIndex < segments.length)) {
	            throw new NoMatch$1();
	        }
	        var parameters = merge(posParameters, consumedSegments[consumedSegments.length - 1].parameters);
	        return { consumedSegments: consumedSegments, lastChild: currentIndex, parameters: parameters };
	    }
	    function checkOutletNameUniqueness(nodes) {
	        var names = {};
	        nodes.forEach(function (n) {
	            var routeWithSameOutletName = names[n.value.outlet];
	            if (routeWithSameOutletName) {
	                var p = routeWithSameOutletName.url.map(function (s) { return s.toString(); }).join('/');
	                var c = n.value.url.map(function (s) { return s.toString(); }).join('/');
	                throw new Error("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
	            }
	            names[n.value.outlet] = n.value;
	        });
	    }
	    function getSourceSegmentGroup(segmentGroup) {
	        var s = segmentGroup;
	        while (s._sourceSegment) {
	            s = s._sourceSegment;
	        }
	        return s;
	    }
	    function getPathIndexShift(segmentGroup) {
	        var s = segmentGroup;
	        var res = (s._segmentIndexShift ? s._segmentIndexShift : 0);
	        while (s._sourceSegment) {
	            s = s._sourceSegment;
	            res += (s._segmentIndexShift ? s._segmentIndexShift : 0);
	        }
	        return res - 1;
	    }
	    function split$1(segmentGroup, consumedSegments, slicedSegments, config) {
	        if (slicedSegments.length > 0 &&
	            containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
	            var s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(segmentGroup, consumedSegments, config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
	            s._sourceSegment = segmentGroup;
	            s._segmentIndexShift = consumedSegments.length;
	            return { segmentGroup: s, slicedSegments: [] };
	        }
	        else if (slicedSegments.length === 0 &&
	            containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
	            var s = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
	            s._sourceSegment = segmentGroup;
	            s._segmentIndexShift = consumedSegments.length;
	            return { segmentGroup: s, slicedSegments: slicedSegments };
	        }
	        else {
	            var s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
	            s._sourceSegment = segmentGroup;
	            s._segmentIndexShift = consumedSegments.length;
	            return { segmentGroup: s, slicedSegments: slicedSegments };
	        }
	    }
	    function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
	        var res = {};
	        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
	            var r = routes_1[_i];
	            if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet$2(r)]) {
	                var s = new UrlSegmentGroup([], {});
	                s._sourceSegment = segmentGroup;
	                s._segmentIndexShift = segmentGroup.segments.length;
	                res[getOutlet$2(r)] = s;
	            }
	        }
	        return merge(children, res);
	    }
	    function createChildrenForEmptyPaths(segmentGroup, consumedSegments, routes, primarySegment) {
	        var res = {};
	        res[PRIMARY_OUTLET] = primarySegment;
	        primarySegment._sourceSegment = segmentGroup;
	        primarySegment._segmentIndexShift = consumedSegments.length;
	        for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
	            var r = routes_2[_i];
	            if (r.path === '' && getOutlet$2(r) !== PRIMARY_OUTLET) {
	                var s = new UrlSegmentGroup([], {});
	                s._sourceSegment = segmentGroup;
	                s._segmentIndexShift = consumedSegments.length;
	                res[getOutlet$2(r)] = s;
	            }
	        }
	        return res;
	    }
	    function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
	        return routes
	            .filter(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r) &&
	            getOutlet$2(r) !== PRIMARY_OUTLET; })
	            .length > 0;
	    }
	    function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
	        return routes.filter(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r); }).length > 0;
	    }
	    function emptyPathMatch(segmentGroup, slicedSegments, r) {
	        if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full')
	            return false;
	        return r.path === '' && r.redirectTo === undefined;
	    }
	    function getOutlet$2(route) {
	        return route.outlet ? route.outlet : PRIMARY_OUTLET;
	    }
	    function getData(route) {
	        return route.data ? route.data : {};
	    }
	    function getResolve(route) {
	        return route.resolve ? route.resolve : {};
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @whatItDoes Contains all the router outlets created in a component.
	     *
	     * @stable
	     */
	    var RouterOutletMap = (function () {
	        function RouterOutletMap() {
	            /** @internal */
	            this._outlets = {};
	        }
	        /**
	         * Adds an outlet to this map.
	         */
	        RouterOutletMap.prototype.registerOutlet = function (name, outlet) { this._outlets[name] = outlet; };
	        /**
	         * Removes an outlet from this map.
	         */
	        RouterOutletMap.prototype.removeOutlet = function (name) { this._outlets[name] = undefined; };
	        return RouterOutletMap;
	    }());
	
	    /**
	     * @whatItDoes Represents an event triggered when a navigation starts.
	     *
	     * @stable
	     */
	    var NavigationStart = (function () {
	        // TODO: vsavkin: make internal
	        function NavigationStart(
	            /** @docsNotRequired */
	            id,
	            /** @docsNotRequired */
	            url) {
	            this.id = id;
	            this.url = url;
	        }
	        /** @docsNotRequired */
	        NavigationStart.prototype.toString = function () { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"; };
	        return NavigationStart;
	    }());
	    /**
	     * @whatItDoes Represents an event triggered when a navigation ends successfully.
	     *
	     * @stable
	     */
	    var NavigationEnd = (function () {
	        // TODO: vsavkin: make internal
	        function NavigationEnd(
	            /** @docsNotRequired */
	            id,
	            /** @docsNotRequired */
	            url,
	            /** @docsNotRequired */
	            urlAfterRedirects) {
	            this.id = id;
	            this.url = url;
	            this.urlAfterRedirects = urlAfterRedirects;
	        }
	        /** @docsNotRequired */
	        NavigationEnd.prototype.toString = function () {
	            return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
	        };
	        return NavigationEnd;
	    }());
	    /**
	     * @whatItDoes Represents an event triggered when a navigation is canceled.
	     *
	     * @stable
	     */
	    var NavigationCancel = (function () {
	        // TODO: vsavkin: make internal
	        function NavigationCancel(
	            /** @docsNotRequired */
	            id,
	            /** @docsNotRequired */
	            url,
	            /** @docsNotRequired */
	            reason) {
	            this.id = id;
	            this.url = url;
	            this.reason = reason;
	        }
	        /** @docsNotRequired */
	        NavigationCancel.prototype.toString = function () { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"; };
	        return NavigationCancel;
	    }());
	    /**
	     * @whatItDoes Represents an event triggered when a navigation fails due to an unexpected error.
	     *
	     * @stable
	     */
	    var NavigationError = (function () {
	        // TODO: vsavkin: make internal
	        function NavigationError(
	            /** @docsNotRequired */
	            id,
	            /** @docsNotRequired */
	            url,
	            /** @docsNotRequired */
	            error) {
	            this.id = id;
	            this.url = url;
	            this.error = error;
	        }
	        /** @docsNotRequired */
	        NavigationError.prototype.toString = function () {
	            return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
	        };
	        return NavigationError;
	    }());
	    /**
	     * @whatItDoes Represents an event triggered when routes are recognized.
	     *
	     * @stable
	     */
	    var RoutesRecognized = (function () {
	        // TODO: vsavkin: make internal
	        function RoutesRecognized(
	            /** @docsNotRequired */
	            id,
	            /** @docsNotRequired */
	            url,
	            /** @docsNotRequired */
	            urlAfterRedirects,
	            /** @docsNotRequired */
	            state) {
	            this.id = id;
	            this.url = url;
	            this.urlAfterRedirects = urlAfterRedirects;
	            this.state = state;
	        }
	        /** @docsNotRequired */
	        RoutesRecognized.prototype.toString = function () {
	            return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
	        };
	        return RoutesRecognized;
	    }());
	    function defaultErrorHandler(error) {
	        throw error;
	    }
	    /**
	     * @whatItDoes Provides the navigation and url manipulation capabilities.
	     *
	     * See {@link Routes} for more details and examples.
	     *
	     * @ngModule RouterModule
	     *
	     * @stable
	     */
	    var Router = (function () {
	        /**
	         * Creates the router service.
	         */
	        // TODO: vsavkin make internal after the final is out.
	        function Router(rootComponentType, urlSerializer, outletMap, location, injector, loader, compiler, config) {
	            this.rootComponentType = rootComponentType;
	            this.urlSerializer = urlSerializer;
	            this.outletMap = outletMap;
	            this.location = location;
	            this.injector = injector;
	            this.config = config;
	            this.navigationId = 0;
	            /**
	             * Error handler that is invoked when a navigation errors.
	             *
	             * See {@link ErrorHandler} for more information.
	             */
	            this.errorHandler = defaultErrorHandler;
	            /**
	             * Indicates if at least one navigation happened.
	             */
	            this.navigated = false;
	            this.resetConfig(config);
	            this.routerEvents = new rxjs_Subject.Subject();
	            this.currentUrlTree = createEmptyUrlTree();
	            this.configLoader = new RouterConfigLoader(loader, compiler);
	            this.currentRouterState = createEmptyState(this.currentUrlTree, this.rootComponentType);
	        }
	        /**
	         * Sets up the location change listener and performs the initial navigation.
	         */
	        Router.prototype.initialNavigation = function () {
	            this.setUpLocationChangeListener();
	            this.navigateByUrl(this.location.path(true), { replaceUrl: true });
	        };
	        /**
	         * Sets up the location change listener.
	         */
	        Router.prototype.setUpLocationChangeListener = function () {
	            var _this = this;
	            // Zone.current.wrap is needed because of the issue with RxJS scheduler,
	            // which does not work properly with zone.js in IE and Safari
	            this.locationSubscription = this.location.subscribe(Zone.current.wrap(function (change) {
	                var tree = _this.urlSerializer.parse(change['url']);
	                // we fire multiple events for a single URL change
	                // we should navigate only once
	                return _this.currentUrlTree.toString() !== tree.toString() ?
	                    _this.scheduleNavigation(tree, { skipLocationChange: change['pop'], replaceUrl: true }) :
	                    null;
	            }));
	        };
	        Object.defineProperty(Router.prototype, "routerState", {
	            /**
	             * Returns the current route state.
	             */
	            get: function () { return this.currentRouterState; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(Router.prototype, "url", {
	            /**
	             * Returns the current url.
	             */
	            get: function () { return this.serializeUrl(this.currentUrlTree); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(Router.prototype, "events", {
	            /**
	             * Returns an observable of route events
	             */
	            get: function () { return this.routerEvents; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Resets the configuration used for navigation and generating links.
	         *
	         * ### Usage
	         *
	         * ```
	         * router.resetConfig([
	         *  { path: 'team/:id', component: TeamCmp, children: [
	         *    { path: 'simple', component: SimpleCmp },
	         *    { path: 'user/:name', component: UserCmp }
	         *  ] }
	         * ]);
	         * ```
	         */
	        Router.prototype.resetConfig = function (config) {
	            validateConfig(config);
	            this.config = config;
	        };
	        /**
	         * @docsNotRequired
	         */
	        Router.prototype.ngOnDestroy = function () { this.dispose(); };
	        /**
	         * Disposes of the router.
	         */
	        Router.prototype.dispose = function () { this.locationSubscription.unsubscribe(); };
	        /**
	         * Applies an array of commands to the current url tree and creates a new url tree.
	         *
	         * When given an activate route, applies the given commands starting from the route.
	         * When not given a route, applies the given command starting from the root.
	         *
	         * ### Usage
	         *
	         * ```
	         * // create /team/33/user/11
	         * router.createUrlTree(['/team', 33, 'user', 11]);
	         *
	         * // create /team/33;expand=true/user/11
	         * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
	         *
	         * // you can collapse static segments like this (this works only with the first passed-in value):
	         * router.createUrlTree(['/team/33/user', userId]);
	         *
	         * // If the first segment can contain slashes, and you do not want the router to split it, you
	         * // can do the following:
	         *
	         * router.createUrlTree([{segmentPath: '/one/two'}]);
	         *
	         * // create /team/33/(user/11//right:chat)
	         * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
	         *
	         * // remove the right secondary node
	         * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
	         *
	         * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
	         *
	         * // navigate to /team/33/user/11/details
	         * router.createUrlTree(['details'], {relativeTo: route});
	         *
	         * // navigate to /team/33/user/22
	         * router.createUrlTree(['../22'], {relativeTo: route});
	         *
	         * // navigate to /team/44/user/22
	         * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
	         * ```
	         */
	        Router.prototype.createUrlTree = function (commands, _a) {
	            var _b = _a === void 0 ? {} : _a, relativeTo = _b.relativeTo, queryParams = _b.queryParams, fragment = _b.fragment, preserveQueryParams = _b.preserveQueryParams, preserveFragment = _b.preserveFragment;
	            var a = relativeTo ? relativeTo : this.routerState.root;
	            var q = preserveQueryParams ? this.currentUrlTree.queryParams : queryParams;
	            var f = preserveFragment ? this.currentUrlTree.fragment : fragment;
	            return createUrlTree(a, this.currentUrlTree, commands, q, f);
	        };
	        /**
	         * Navigate based on the provided url. This navigation is always absolute.
	         *
	         * Returns a promise that:
	         * - is resolved with 'true' when navigation succeeds
	         * - is resolved with 'false' when navigation fails
	         * - is rejected when an error happens
	         *
	         * ### Usage
	         *
	         * ```
	         * router.navigateByUrl("/team/33/user/11");
	         *
	         * // Navigate without updating the URL
	         * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
	         * ```
	         *
	         * In opposite to `navigate`, `navigateByUrl` takes a whole URL
	         * and does not apply any delta to the current one.
	         */
	        Router.prototype.navigateByUrl = function (url, extras) {
	            if (extras === void 0) { extras = { skipLocationChange: false }; }
	            if (url instanceof UrlTree) {
	                return this.scheduleNavigation(url, extras);
	            }
	            else {
	                var urlTree = this.urlSerializer.parse(url);
	                return this.scheduleNavigation(urlTree, extras);
	            }
	        };
	        /**
	         * Navigate based on the provided array of commands and a starting point.
	         * If no starting route is provided, the navigation is absolute.
	         *
	         * Returns a promise that:
	         * - is resolved with 'true' when navigation succeeds
	         * - is resolved with 'false' when navigation fails
	         * - is rejected when an error happens
	         *
	         * ### Usage
	         *
	         * ```
	         * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
	         *
	         * // Navigate without updating the URL
	         * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true });
	         * ```
	         *
	         * In opposite to `navigateByUrl`, `navigate` always takes a delta
	         * that is applied to the current URL.
	         */
	        Router.prototype.navigate = function (commands, extras) {
	            if (extras === void 0) { extras = { skipLocationChange: false }; }
	            return this.scheduleNavigation(this.createUrlTree(commands, extras), extras);
	        };
	        /**
	         * Serializes a {@link UrlTree} into a string.
	         */
	        Router.prototype.serializeUrl = function (url) { return this.urlSerializer.serialize(url); };
	        /**
	         * Parses a string into a {@link UrlTree}.
	         */
	        Router.prototype.parseUrl = function (url) { return this.urlSerializer.parse(url); };
	        /**
	         * Returns if the url is activated or not.
	         */
	        Router.prototype.isActive = function (url, exact) {
	            if (url instanceof UrlTree) {
	                return containsTree(this.currentUrlTree, url, exact);
	            }
	            else {
	                var urlTree = this.urlSerializer.parse(url);
	                return containsTree(this.currentUrlTree, urlTree, exact);
	            }
	        };
	        Router.prototype.scheduleNavigation = function (url, extras) {
	            var _this = this;
	            var id = ++this.navigationId;
	            this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
	            return Promise.resolve().then(function (_) { return _this.runNavigate(url, extras.skipLocationChange, extras.replaceUrl, id); });
	        };
	        Router.prototype.runNavigate = function (url, shouldPreventPushState, shouldReplaceUrl, id) {
	            var _this = this;
	            if (id !== this.navigationId) {
	                this.location.go(this.urlSerializer.serialize(this.currentUrlTree));
	                this.routerEvents.next(new NavigationCancel(id, this.serializeUrl(url), "Navigation ID " + id + " is not equal to the current navigation id " + this.navigationId));
	                return Promise.resolve(false);
	            }
	            return new Promise(function (resolvePromise, rejectPromise) {
	                var state;
	                var navigationIsSuccessful;
	                var preActivation;
	                var appliedUrl;
	                var storedState = _this.currentRouterState;
	                var storedUrl = _this.currentUrlTree;
	                var redirectsApplied$ = applyRedirects(_this.injector, _this.configLoader, url, _this.config);
	                var snapshot$ = rxjs_operator_mergeMap.mergeMap.call(redirectsApplied$, function (u) {
	                    appliedUrl = u;
	                    return recognize(_this.rootComponentType, _this.config, appliedUrl, _this.serializeUrl(appliedUrl));
	                });
	                var emitRecognzied$ = rxjs_operator_map.map.call(snapshot$, function (newRouterStateSnapshot) {
	                    _this.routerEvents.next(new RoutesRecognized(id, _this.serializeUrl(url), _this.serializeUrl(appliedUrl), newRouterStateSnapshot));
	                    return newRouterStateSnapshot;
	                });
	                var routerState$ = rxjs_operator_map.map.call(emitRecognzied$, function (routerStateSnapshot) {
	                    return createRouterState(routerStateSnapshot, _this.currentRouterState);
	                });
	                var preactivation$ = rxjs_operator_map.map.call(routerState$, function (newState) {
	                    state = newState;
	                    preActivation =
	                        new PreActivation(state.snapshot, _this.currentRouterState.snapshot, _this.injector);
	                    preActivation.traverse(_this.outletMap);
	                });
	                var preactivation2$ = rxjs_operator_mergeMap.mergeMap.call(preactivation$, function () { return preActivation.checkGuards(); });
	                var resolveData$ = rxjs_operator_mergeMap.mergeMap.call(preactivation2$, function (shouldActivate) {
	                    if (shouldActivate) {
	                        return rxjs_operator_map.map.call(preActivation.resolveData(), function () { return shouldActivate; });
	                    }
	                    else {
	                        return rxjs_observable_of.of(shouldActivate);
	                    }
	                });
	                resolveData$
	                    .forEach(function (shouldActivate) {
	                    if (!shouldActivate || id !== _this.navigationId) {
	                        navigationIsSuccessful = false;
	                        return;
	                    }
	                    _this.currentUrlTree = appliedUrl;
	                    _this.currentRouterState = state;
	                    if (!shouldPreventPushState) {
	                        var path = _this.urlSerializer.serialize(appliedUrl);
	                        if (_this.location.isCurrentPathEqualTo(path) || shouldReplaceUrl) {
	                            _this.location.replaceState(path);
	                        }
	                        else {
	                            _this.location.go(path);
	                        }
	                    }
	                    new ActivateRoutes(state, storedState).activate(_this.outletMap);
	                    navigationIsSuccessful = true;
	                })
	                    .then(function () {
	                    _this.navigated = true;
	                    if (navigationIsSuccessful) {
	                        _this.routerEvents.next(new NavigationEnd(id, _this.serializeUrl(url), _this.serializeUrl(appliedUrl)));
	                        resolvePromise(true);
	                    }
	                    else {
	                        _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url), ''));
	                        resolvePromise(false);
	                    }
	                }, function (e) {
	                    if (e instanceof NavigationCancelingError) {
	                        _this.navigated = true;
	                        _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url), e.message));
	                        resolvePromise(false);
	                    }
	                    else {
	                        _this.routerEvents.next(new NavigationError(id, _this.serializeUrl(url), e));
	                        try {
	                            resolvePromise(_this.errorHandler(e));
	                        }
	                        catch (ee) {
	                            rejectPromise(ee);
	                        }
	                    }
	                    if (id === _this.navigationId) {
	                        _this.currentRouterState = storedState;
	                        _this.currentUrlTree = storedUrl;
	                        _this.location.replaceState(_this.serializeUrl(storedUrl));
	                    }
	                });
	            });
	        };
	        return Router;
	    }());
	    var CanActivate = (function () {
	        function CanActivate(path) {
	            this.path = path;
	        }
	        Object.defineProperty(CanActivate.prototype, "route", {
	            get: function () { return this.path[this.path.length - 1]; },
	            enumerable: true,
	            configurable: true
	        });
	        return CanActivate;
	    }());
	    var CanDeactivate = (function () {
	        function CanDeactivate(component, route) {
	            this.component = component;
	            this.route = route;
	        }
	        return CanDeactivate;
	    }());
	    var PreActivation = (function () {
	        function PreActivation(future, curr, injector) {
	            this.future = future;
	            this.curr = curr;
	            this.injector = injector;
	            this.checks = [];
	        }
	        PreActivation.prototype.traverse = function (parentOutletMap) {
	            var futureRoot = this.future._root;
	            var currRoot = this.curr ? this.curr._root : null;
	            this.traverseChildRoutes(futureRoot, currRoot, parentOutletMap, [futureRoot.value]);
	        };
	        PreActivation.prototype.checkGuards = function () {
	            var _this = this;
	            if (this.checks.length === 0)
	                return rxjs_observable_of.of(true);
	            var checks$ = rxjs_observable_from.from(this.checks);
	            var runningChecks$ = rxjs_operator_map.map.call(checks$, function (s) {
	                if (s instanceof CanActivate) {
	                    return andObservables(rxjs_observable_from.from([_this.runCanActivateChild(s.path), _this.runCanActivate(s.route)]));
	                }
	                else if (s instanceof CanDeactivate) {
	                    // workaround https://github.com/Microsoft/TypeScript/issues/7271
	                    var s2 = s;
	                    return _this.runCanDeactivate(s2.component, s2.route);
	                }
	                else {
	                    throw new Error('Cannot be reached');
	                }
	            });
	            var mergedChecks$ = rxjs_operator_mergeAll.mergeAll.call(runningChecks$);
	            return rxjs_operator_every.every.call(mergedChecks$, function (result) { return result === true; });
	        };
	        PreActivation.prototype.resolveData = function () {
	            var _this = this;
	            if (this.checks.length === 0)
	                return rxjs_observable_of.of(null);
	            var checks$ = rxjs_observable_from.from(this.checks);
	            var runningChecks$ = rxjs_operator_mergeMap.mergeMap.call(checks$, function (s) {
	                if (s instanceof CanActivate) {
	                    return _this.runResolve(s.route);
	                }
	                else {
	                    return rxjs_observable_of.of(null);
	                }
	            });
	            return rxjs_operator_reduce.reduce.call(runningChecks$, function (_, __) { return _; });
	        };
	        PreActivation.prototype.traverseChildRoutes = function (futureNode, currNode, outletMap, futurePath) {
	            var _this = this;
	            var prevChildren = nodeChildrenAsMap(currNode);
	            futureNode.children.forEach(function (c) {
	                _this.traverseRoutes(c, prevChildren[c.value.outlet], outletMap, futurePath.concat([c.value]));
	                delete prevChildren[c.value.outlet];
	            });
	            forEach(prevChildren, function (v, k) { return _this.deactivateOutletAndItChildren(v, outletMap._outlets[k]); });
	        };
	        PreActivation.prototype.traverseRoutes = function (futureNode, currNode, parentOutletMap, futurePath) {
	            var future = futureNode.value;
	            var curr = currNode ? currNode.value : null;
	            var outlet = parentOutletMap ? parentOutletMap._outlets[futureNode.value.outlet] : null;
	            // reusing the node
	            if (curr && future._routeConfig === curr._routeConfig) {
	                if (!shallowEqual(future.params, curr.params)) {
	                    this.checks.push(new CanDeactivate(outlet.component, curr), new CanActivate(futurePath));
	                }
	                else {
	                    // we need to set the data
	                    future.data = curr.data;
	                }
	                // If we have a component, we need to go through an outlet.
	                if (future.component) {
	                    this.traverseChildRoutes(futureNode, currNode, outlet ? outlet.outletMap : null, futurePath);
	                }
	                else {
	                    this.traverseChildRoutes(futureNode, currNode, parentOutletMap, futurePath);
	                }
	            }
	            else {
	                if (curr) {
	                    // if we had a normal route, we need to deactivate only that outlet.
	                    if (curr.component) {
	                        this.deactivateOutletAndItChildren(curr, outlet);
	                    }
	                    else {
	                        this.deactivateOutletMap(parentOutletMap);
	                    }
	                }
	                this.checks.push(new CanActivate(futurePath));
	                // If we have a component, we need to go through an outlet.
	                if (future.component) {
	                    this.traverseChildRoutes(futureNode, null, outlet ? outlet.outletMap : null, futurePath);
	                }
	                else {
	                    this.traverseChildRoutes(futureNode, null, parentOutletMap, futurePath);
	                }
	            }
	        };
	        PreActivation.prototype.deactivateOutletAndItChildren = function (route, outlet) {
	            if (outlet && outlet.isActivated) {
	                this.deactivateOutletMap(outlet.outletMap);
	                this.checks.push(new CanDeactivate(outlet.component, route));
	            }
	        };
	        PreActivation.prototype.deactivateOutletMap = function (outletMap) {
	            var _this = this;
	            forEach(outletMap._outlets, function (v) {
	                if (v.isActivated) {
	                    _this.deactivateOutletAndItChildren(v.activatedRoute.snapshot, v);
	                }
	            });
	        };
	        PreActivation.prototype.runCanActivate = function (future) {
	            var _this = this;
	            var canActivate = future._routeConfig ? future._routeConfig.canActivate : null;
	            if (!canActivate || canActivate.length === 0)
	                return rxjs_observable_of.of(true);
	            var obs = rxjs_operator_map.map.call(rxjs_observable_from.from(canActivate), function (c) {
	                var guard = _this.getToken(c, future);
	                if (guard.canActivate) {
	                    return wrapIntoObservable(guard.canActivate(future, _this.future));
	                }
	                else {
	                    return wrapIntoObservable(guard(future, _this.future));
	                }
	            });
	            return andObservables(obs);
	        };
	        PreActivation.prototype.runCanActivateChild = function (path) {
	            var _this = this;
	            var future = path[path.length - 1];
	            var canActivateChildGuards = path.slice(0, path.length - 1)
	                .reverse()
	                .map(function (p) { return _this.extractCanActivateChild(p); })
	                .filter(function (_) { return _ !== null; });
	            return andObservables(rxjs_operator_map.map.call(rxjs_observable_from.from(canActivateChildGuards), function (d) {
	                var obs = rxjs_operator_map.map.call(rxjs_observable_from.from(d.guards), function (c) {
	                    var guard = _this.getToken(c, c.node);
	                    if (guard.canActivateChild) {
	                        return wrapIntoObservable(guard.canActivateChild(future, _this.future));
	                    }
	                    else {
	                        return wrapIntoObservable(guard(future, _this.future));
	                    }
	                });
	                return andObservables(obs);
	            }));
	        };
	        PreActivation.prototype.extractCanActivateChild = function (p) {
	            var canActivateChild = p._routeConfig ? p._routeConfig.canActivateChild : null;
	            if (!canActivateChild || canActivateChild.length === 0)
	                return null;
	            return { node: p, guards: canActivateChild };
	        };
	        PreActivation.prototype.runCanDeactivate = function (component, curr) {
	            var _this = this;
	            var canDeactivate = curr && curr._routeConfig ? curr._routeConfig.canDeactivate : null;
	            if (!canDeactivate || canDeactivate.length === 0)
	                return rxjs_observable_of.of(true);
	            var canDeactivate$ = rxjs_operator_map.map.call(rxjs_observable_from.from(canDeactivate), function (c) {
	                var guard = _this.getToken(c, curr);
	                if (guard.canDeactivate) {
	                    return wrapIntoObservable(guard.canDeactivate(component, curr, _this.curr));
	                }
	                else {
	                    return wrapIntoObservable(guard(component, curr, _this.curr));
	                }
	            });
	            var merged$ = rxjs_operator_mergeAll.mergeAll.call(canDeactivate$);
	            return rxjs_operator_every.every.call(merged$, function (result) { return result === true; });
	        };
	        PreActivation.prototype.runResolve = function (future) {
	            var resolve = future._resolve;
	            return rxjs_operator_map.map.call(this.resolveNode(resolve.current, future), function (resolvedData) {
	                resolve.resolvedData = resolvedData;
	                future.data = merge(future.data, resolve.flattenedResolvedData);
	                return null;
	            });
	        };
	        PreActivation.prototype.resolveNode = function (resolve, future) {
	            var _this = this;
	            return waitForMap(resolve, function (k, v) {
	                var resolver = _this.getToken(v, future);
	                return resolver.resolve ? wrapIntoObservable(resolver.resolve(future, _this.future)) :
	                    wrapIntoObservable(resolver(future, _this.future));
	            });
	        };
	        PreActivation.prototype.getToken = function (token, snapshot) {
	            var config = closestLoadedConfig(snapshot);
	            var injector = config ? config.injector : this.injector;
	            return injector.get(token);
	        };
	        return PreActivation;
	    }());
	    var ActivateRoutes = (function () {
	        function ActivateRoutes(futureState, currState) {
	            this.futureState = futureState;
	            this.currState = currState;
	        }
	        ActivateRoutes.prototype.activate = function (parentOutletMap) {
	            var futureRoot = this.futureState._root;
	            var currRoot = this.currState ? this.currState._root : null;
	            advanceActivatedRoute(this.futureState.root);
	            this.activateChildRoutes(futureRoot, currRoot, parentOutletMap);
	        };
	        ActivateRoutes.prototype.activateChildRoutes = function (futureNode, currNode, outletMap) {
	            var _this = this;
	            var prevChildren = nodeChildrenAsMap(currNode);
	            futureNode.children.forEach(function (c) {
	                _this.activateRoutes(c, prevChildren[c.value.outlet], outletMap);
	                delete prevChildren[c.value.outlet];
	            });
	            forEach(prevChildren, function (v, k) { return _this.deactivateOutletAndItChildren(outletMap._outlets[k]); });
	        };
	        ActivateRoutes.prototype.activateRoutes = function (futureNode, currNode, parentOutletMap) {
	            var future = futureNode.value;
	            var curr = currNode ? currNode.value : null;
	            // reusing the node
	            if (future === curr) {
	                // advance the route to push the parameters
	                advanceActivatedRoute(future);
	                // If we have a normal route, we need to go through an outlet.
	                if (future.component) {
	                    var outlet = getOutlet(parentOutletMap, futureNode.value);
	                    this.activateChildRoutes(futureNode, currNode, outlet.outletMap);
	                }
	                else {
	                    this.activateChildRoutes(futureNode, currNode, parentOutletMap);
	                }
	            }
	            else {
	                if (curr) {
	                    // if we had a normal route, we need to deactivate only that outlet.
	                    if (curr.component) {
	                        var outlet = getOutlet(parentOutletMap, futureNode.value);
	                        this.deactivateOutletAndItChildren(outlet);
	                    }
	                    else {
	                        this.deactivateOutletMap(parentOutletMap);
	                    }
	                }
	                // if we have a normal route, we need to advance the route
	                // and place the component into the outlet. After that recurse.
	                if (future.component) {
	                    advanceActivatedRoute(future);
	                    var outlet = getOutlet(parentOutletMap, futureNode.value);
	                    var outletMap = new RouterOutletMap();
	                    this.placeComponentIntoOutlet(outletMap, future, outlet);
	                    this.activateChildRoutes(futureNode, null, outletMap);
	                }
	                else {
	                    advanceActivatedRoute(future);
	                    this.activateChildRoutes(futureNode, null, parentOutletMap);
	                }
	            }
	        };
	        ActivateRoutes.prototype.placeComponentIntoOutlet = function (outletMap, future, outlet) {
	            var resolved = [{ provide: ActivatedRoute, useValue: future }, {
	                    provide: RouterOutletMap,
	                    useValue: outletMap
	                }];
	            var config = parentLoadedConfig(future.snapshot);
	            var loadedFactoryResolver = null;
	            var loadedInjector = null;
	            if (config) {
	                loadedFactoryResolver = config.factoryResolver;
	                loadedInjector = config.injector;
	                resolved.push({ provide: _angular_core.ComponentFactoryResolver, useValue: loadedFactoryResolver });
	            }
	            outlet.activate(future, loadedFactoryResolver, loadedInjector, _angular_core.ReflectiveInjector.resolve(resolved), outletMap);
	        };
	        ActivateRoutes.prototype.deactivateOutletAndItChildren = function (outlet) {
	            if (outlet && outlet.isActivated) {
	                this.deactivateOutletMap(outlet.outletMap);
	                outlet.deactivate();
	            }
	        };
	        ActivateRoutes.prototype.deactivateOutletMap = function (outletMap) {
	            var _this = this;
	            forEach(outletMap._outlets, function (v) { return _this.deactivateOutletAndItChildren(v); });
	        };
	        return ActivateRoutes;
	    }());
	    function parentLoadedConfig(snapshot) {
	        var s = snapshot.parent;
	        while (s) {
	            var c = s._routeConfig;
	            if (c && c._loadedConfig)
	                return c._loadedConfig;
	            if (c && c.component)
	                return null;
	            s = s.parent;
	        }
	        return null;
	    }
	    function closestLoadedConfig(snapshot) {
	        if (!snapshot)
	            return null;
	        var s = snapshot.parent;
	        while (s) {
	            var c = s._routeConfig;
	            if (c && c._loadedConfig)
	                return c._loadedConfig;
	            s = s.parent;
	        }
	        return null;
	    }
	    function nodeChildrenAsMap(node) {
	        return node ? node.children.reduce(function (m, c) {
	            m[c.value.outlet] = c;
	            return m;
	        }, {}) : {};
	    }
	    function getOutlet(outletMap, route) {
	        var outlet = outletMap._outlets[route.outlet];
	        if (!outlet) {
	            var componentName = route.component.name;
	            if (route.outlet === PRIMARY_OUTLET) {
	                throw new Error("Cannot find primary outlet to load '" + componentName + "'");
	            }
	            else {
	                throw new Error("Cannot find the outlet " + route.outlet + " to load '" + componentName + "'");
	            }
	        }
	        return outlet;
	    }
	
	    /**
	     * @whatItDoes Lets you link to specific parts of your app.
	     *
	     * @howToUse
	     *
	     * Consider the following route configuration:
	
	     * ```
	     * [{ path: 'user/:name', component: UserCmp }]
	     * ```
	     *
	     * When linking to this `user/:name` route, you can write:
	     *
	     * ```
	     * <a routerLink='/user/bob'>link to user component</a>
	     * ```
	     *
	     * @description
	     *
	     * The RouterLink directives let you link to specific parts of your app.
	     *
	     * Whe the link is static, you can use the directive as follows:
	     *
	     * ```
	     * <a routerLink="/user/bob">link to user component</a>
	     * ```
	     *
	     * If you use dynamic values to generate the link, you can pass an array of path
	     * segments, followed by the params for each segment.
	     *
	     * For instance `['/team', teamId, 'user', userName, {details: true}]`
	     * means that we want to generate a link to `/team/11/user/bob;details=true`.
	     *
	     * Multiple static segments can be merged into one (e.g., `['/team/11/user', userName, {details:
	     true}]`).
	     *
	     * The first segment name can be prepended with `/`, `./`, or `../`:
	     * * If the first segment begins with `/`, the router will look up the route from the root of the
	     app.
	     * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
	     * instead look in the children of the current activated route.
	     * * And if the first segment begins with `../`, the router will go up one level.
	     *
	     * You can set query params and fragment as follows:
	     *
	     * ```
	     * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">link to user
	     component</a>
	     * ```
	     * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
	     *
	     * You can also tell the directive to preserve the current query params and fragment:
	     *
	     * ```
	     * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>link to user
	     component</a>
	     * ```
	     *
	     * The router link directive always treats the provided input as a delta to the current url.
	     *
	     * For instance, if the current url is `/user/(box//aux:team)`.
	     *
	     * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
	     * `/user/(jim//aux:team)`.
	     *
	     * @selector ':not(a)[routerLink]'
	     * @ngModule RouterModule
	     *
	     * See {@link Router.createUrlTree} for more information.
	     *
	     * @stable
	     */
	    var RouterLink = (function () {
	        function RouterLink(router, route, locationStrategy) {
	            this.router = router;
	            this.route = route;
	            this.locationStrategy = locationStrategy;
	            this.commands = [];
	        }
	        Object.defineProperty(RouterLink.prototype, "routerLink", {
	            set: function (data) {
	                if (Array.isArray(data)) {
	                    this.commands = data;
	                }
	                else {
	                    this.commands = [data];
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterLink.prototype.onClick = function (button, ctrlKey, metaKey) {
	            if (button !== 0 || ctrlKey || metaKey) {
	                return true;
	            }
	            this.router.navigateByUrl(this.urlTree);
	            return false;
	        };
	        Object.defineProperty(RouterLink.prototype, "urlTree", {
	            get: function () {
	                return this.router.createUrlTree(this.commands, {
	                    relativeTo: this.route,
	                    queryParams: this.queryParams,
	                    fragment: this.fragment,
	                    preserveQueryParams: toBool(this.preserveQueryParams),
	                    preserveFragment: toBool(this.preserveFragment)
	                });
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterLink.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: ':not(a)[routerLink]' },] },
	        ];
	        /** @nocollapse */
	        RouterLink.ctorParameters = [
	            { type: Router, },
	            { type: ActivatedRoute, },
	            { type: _angular_common.LocationStrategy, },
	        ];
	        RouterLink.propDecorators = {
	            'queryParams': [{ type: _angular_core.Input },],
	            'fragment': [{ type: _angular_core.Input },],
	            'preserveQueryParams': [{ type: _angular_core.Input },],
	            'preserveFragment': [{ type: _angular_core.Input },],
	            'routerLink': [{ type: _angular_core.Input },],
	            'onClick': [{ type: _angular_core.HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey'],] },],
	        };
	        return RouterLink;
	    }());
	    /**
	     * @whatItDoes Lets you link to specific parts of your app.
	     *
	     * See {@link RouterLink} for more information.
	     *
	     * @selector 'a[routerLink]'
	     * @ngModule RouterModule
	     *
	     * @stable
	     */
	    var RouterLinkWithHref = (function () {
	        function RouterLinkWithHref(router, route, locationStrategy) {
	            var _this = this;
	            this.router = router;
	            this.route = route;
	            this.locationStrategy = locationStrategy;
	            this.commands = [];
	            this.subscription = router.events.subscribe(function (s) {
	                if (s instanceof NavigationEnd) {
	                    _this.updateTargetUrlAndHref();
	                }
	            });
	        }
	        Object.defineProperty(RouterLinkWithHref.prototype, "routerLink", {
	            set: function (data) {
	                if (Array.isArray(data)) {
	                    this.commands = data;
	                }
	                else {
	                    this.commands = [data];
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterLinkWithHref.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
	        RouterLinkWithHref.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
	        RouterLinkWithHref.prototype.onClick = function (button, ctrlKey, metaKey) {
	            if (button !== 0 || ctrlKey || metaKey) {
	                return true;
	            }
	            if (typeof this.target === 'string' && this.target != '_self') {
	                return true;
	            }
	            this.router.navigateByUrl(this.urlTree);
	            return false;
	        };
	        RouterLinkWithHref.prototype.updateTargetUrlAndHref = function () {
	            this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
	        };
	        Object.defineProperty(RouterLinkWithHref.prototype, "urlTree", {
	            get: function () {
	                return this.router.createUrlTree(this.commands, {
	                    relativeTo: this.route,
	                    queryParams: this.queryParams,
	                    fragment: this.fragment,
	                    preserveQueryParams: toBool(this.preserveQueryParams),
	                    preserveFragment: toBool(this.preserveFragment)
	                });
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterLinkWithHref.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'a[routerLink]' },] },
	        ];
	        /** @nocollapse */
	        RouterLinkWithHref.ctorParameters = [
	            { type: Router, },
	            { type: ActivatedRoute, },
	            { type: _angular_common.LocationStrategy, },
	        ];
	        RouterLinkWithHref.propDecorators = {
	            'target': [{ type: _angular_core.Input },],
	            'queryParams': [{ type: _angular_core.Input },],
	            'fragment': [{ type: _angular_core.Input },],
	            'routerLinkOptions': [{ type: _angular_core.Input },],
	            'preserveQueryParams': [{ type: _angular_core.Input },],
	            'preserveFragment': [{ type: _angular_core.Input },],
	            'href': [{ type: _angular_core.HostBinding },],
	            'routerLink': [{ type: _angular_core.Input },],
	            'onClick': [{ type: _angular_core.HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey'],] },],
	        };
	        return RouterLinkWithHref;
	    }());
	    function toBool(s) {
	        if (s === '')
	            return true;
	        return !!s;
	    }
	
	    /**
	     * @whatItDoes Lets you add a CSS class to an element when the link's route becomes active.
	     *
	     * @howToUse
	     *
	     * ```
	     * <a [routerLink]='/user/bob' routerLinkActive='active-link'>Bob</a>
	     * ```
	     *
	     * @description
	     *
	     * The RouterLinkActive directive lets you add a CSS class to an element when the link's route
	     * becomes active.
	     *
	     * Consider the following example:
	     *
	     * ```
	     * <a [routerLink]="/user/bob" routerLinkActive="active-link">Bob</a>
	     * ```
	     *
	     * When the url is either '/user' or '/user/bob', the active-link class will
	     * be added to the `a` tag. If the url changes, the class will be removed.
	     *
	     * You can set more than one class, as follows:
	     *
	     * ```
	     * <a [routerLink]="/user/bob" routerLinkActive="class1 class2">Bob</a>
	     * <a [routerLink]="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
	     * ```
	     *
	     * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
	     * only when the url matches the link exactly.
	     *
	     * ```
	     * <a [routerLink]="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
	     * true}">Bob</a>
	     * ```
	     *
	     * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
	     *
	     * ```
	     * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
	     *   <a [routerLink]="/user/jim">Jim</a>
	     *   <a [routerLink]="/user/bob">Bob</a>
	     * </div>
	     * ```
	     *
	     * This will set the active-link class on the div tag if the url is either '/user/jim' or
	     * '/user/bob'.
	     *
	     * @selector ':not(a)[routerLink]'
	     * @ngModule RouterModule
	     *
	     * @stable
	     */
	    var RouterLinkActive = (function () {
	        function RouterLinkActive(router, element, renderer) {
	            var _this = this;
	            this.router = router;
	            this.element = element;
	            this.renderer = renderer;
	            this.classes = [];
	            this.routerLinkActiveOptions = { exact: false };
	            this.subscription = router.events.subscribe(function (s) {
	                if (s instanceof NavigationEnd) {
	                    _this.update();
	                }
	            });
	        }
	        RouterLinkActive.prototype.ngAfterContentInit = function () {
	            var _this = this;
	            this.links.changes.subscribe(function (s) { return _this.update(); });
	            this.linksWithHrefs.changes.subscribe(function (s) { return _this.update(); });
	            this.update();
	        };
	        Object.defineProperty(RouterLinkActive.prototype, "routerLinkActive", {
	            set: function (data) {
	                if (Array.isArray(data)) {
	                    this.classes = data;
	                }
	                else {
	                    this.classes = data.split(' ');
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterLinkActive.prototype.ngOnChanges = function (changes) { this.update(); };
	        RouterLinkActive.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
	        RouterLinkActive.prototype.update = function () {
	            var _this = this;
	            if (!this.links || !this.linksWithHrefs || !this.router.navigated)
	                return;
	            var isActiveLinks = this.reduceList(this.links);
	            var isActiveLinksWithHrefs = this.reduceList(this.linksWithHrefs);
	            this.classes.forEach(function (c) { return _this.renderer.setElementClass(_this.element.nativeElement, c, isActiveLinks || isActiveLinksWithHrefs); });
	        };
	        RouterLinkActive.prototype.reduceList = function (q) {
	            var _this = this;
	            return q.reduce(function (res, link) {
	                return res || _this.router.isActive(link.urlTree, _this.routerLinkActiveOptions.exact);
	            }, false);
	        };
	        RouterLinkActive.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[routerLinkActive]' },] },
	        ];
	        /** @nocollapse */
	        RouterLinkActive.ctorParameters = [
	            { type: Router, },
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	        ];
	        RouterLinkActive.propDecorators = {
	            'links': [{ type: _angular_core.ContentChildren, args: [RouterLink, { descendants: true },] },],
	            'linksWithHrefs': [{ type: _angular_core.ContentChildren, args: [RouterLinkWithHref, { descendants: true },] },],
	            'routerLinkActiveOptions': [{ type: _angular_core.Input },],
	            'routerLinkActive': [{ type: _angular_core.Input },],
	        };
	        return RouterLinkActive;
	    }());
	
	    /**
	     * @whatItDoes Acts as a placeholder that Angular dynamically fills based on the current router
	     * state.
	     *
	     * @howToUse
	     *
	     * ```
	     * <router-outlet></router-outlet>
	     * <router-outlet name='left'></router-outlet>
	     * <router-outlet name='right'></router-outlet>
	     * ```
	     *
	     * A router outlet will emit an activate event any time a new component is being instantiated,
	     * and a deactivate event when it is being destroyed.
	     *
	     * ```
	     * <router-outlet
	     *   (activate)='onActivate($event)'
	     *   (deactivate)='onDeactivate($event)'></router-outlet>
	     * ```
	     * @selector 'a[routerLink]'
	     * @ngModule RouterModule
	     *
	     * @stable
	     */
	    var RouterOutlet = (function () {
	        function RouterOutlet(parentOutletMap, location, resolver, name) {
	            this.parentOutletMap = parentOutletMap;
	            this.location = location;
	            this.resolver = resolver;
	            this.name = name;
	            this.activateEvents = new _angular_core.EventEmitter();
	            this.deactivateEvents = new _angular_core.EventEmitter();
	            parentOutletMap.registerOutlet(name ? name : PRIMARY_OUTLET, this);
	        }
	        RouterOutlet.prototype.ngOnDestroy = function () { this.parentOutletMap.removeOutlet(this.name ? this.name : PRIMARY_OUTLET); };
	        Object.defineProperty(RouterOutlet.prototype, "isActivated", {
	            get: function () { return !!this.activated; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RouterOutlet.prototype, "component", {
	            get: function () {
	                if (!this.activated)
	                    throw new Error('Outlet is not activated');
	                return this.activated.instance;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(RouterOutlet.prototype, "activatedRoute", {
	            get: function () {
	                if (!this.activated)
	                    throw new Error('Outlet is not activated');
	                return this._activatedRoute;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RouterOutlet.prototype.deactivate = function () {
	            if (this.activated) {
	                var c = this.component;
	                this.activated.destroy();
	                this.activated = null;
	                this.deactivateEvents.emit(c);
	            }
	        };
	        RouterOutlet.prototype.activate = function (activatedRoute, loadedResolver, loadedInjector, providers, outletMap) {
	            this.outletMap = outletMap;
	            this._activatedRoute = activatedRoute;
	            var snapshot = activatedRoute._futureSnapshot;
	            var component = snapshot._routeConfig.component;
	            var factory;
	            if (loadedResolver) {
	                factory = loadedResolver.resolveComponentFactory(component);
	            }
	            else {
	                factory = this.resolver.resolveComponentFactory(component);
	            }
	            var injector = loadedInjector ? loadedInjector : this.location.parentInjector;
	            var inj = _angular_core.ReflectiveInjector.fromResolvedProviders(providers, injector);
	            this.activated = this.location.createComponent(factory, this.location.length, inj, []);
	            this.activated.changeDetectorRef.detectChanges();
	            this.activateEvents.emit(this.activated.instance);
	        };
	        RouterOutlet.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'router-outlet' },] },
	        ];
	        /** @nocollapse */
	        RouterOutlet.ctorParameters = [
	            { type: RouterOutletMap, },
	            { type: _angular_core.ViewContainerRef, },
	            { type: _angular_core.ComponentFactoryResolver, },
	            { type: undefined, decorators: [{ type: _angular_core.Attribute, args: ['name',] },] },
	        ];
	        RouterOutlet.propDecorators = {
	            'activateEvents': [{ type: _angular_core.Output, args: ['activate',] },],
	            'deactivateEvents': [{ type: _angular_core.Output, args: ['deactivate',] },],
	        };
	        return RouterOutlet;
	    }());
	
	    /**
	     * @whatItDoes Contains a list of directives
	     * @stable
	     */
	    var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive];
	    /**
	     * @whatItDoes Is used in DI to configure the router.
	     * @stable
	     */
	    var ROUTER_CONFIGURATION = new _angular_core.OpaqueToken('ROUTER_CONFIGURATION');
	    /**
	     * @docsNotRequired
	     */
	    var ROUTER_FORROOT_GUARD = new _angular_core.OpaqueToken('ROUTER_FORROOT_GUARD');
	    var ROUTER_PROVIDERS = [
	        _angular_common.Location, { provide: UrlSerializer, useClass: DefaultUrlSerializer }, {
	            provide: Router,
	            useFactory: setupRouter,
	            deps: [
	                _angular_core.ApplicationRef, UrlSerializer, RouterOutletMap, _angular_common.Location, _angular_core.Injector, _angular_core.NgModuleFactoryLoader,
	                _angular_core.Compiler, ROUTES, ROUTER_CONFIGURATION
	            ]
	        },
	        RouterOutletMap, { provide: ActivatedRoute, useFactory: rootRoute, deps: [Router] },
	        { provide: _angular_core.NgModuleFactoryLoader, useClass: _angular_core.SystemJsNgModuleLoader },
	        { provide: ROUTER_CONFIGURATION, useValue: { enableTracing: false } }
	    ];
	    /**
	     * @whatItDoes Adds router directives and providers.
	     *
	     * @howToUse
	     *
	     * RouterModule can be imported multiple times: once per lazily-loaded bundle.
	     * Since the router deals with a global shared resource--location, we cannot have
	     * more than one router service active.
	     *
	     * That is why there are two ways to create the module: `RouterModule.forRoot` and
	     * `RouterModule.forChild`.
	     *
	     * * `forRoot` creates a module that contains all the directives, the given routes, and the router
	     * service itself.
	     * * `forChild` creates a module that contains all the directives and the given routes, but does not
	     * include
	     * the router service.
	     *
	     * When registered at the root, the module should be used as follows
	     *
	     * ```
	     * @NgModule({
	     *   imports: [RouterModule.forRoot(ROUTES)]
	     * })
	     * class MyNgModule {}
	     * ```
	     *
	     * For submodules and lazy loaded submodules the module should be used as follows:
	     *
	     * ```
	     * @NgModule({
	     *   imports: [RouterModule.forChild(ROUTES)]
	     * })
	     * class MyNgModule {}
	     * ```
	     *
	     * @description
	     *
	     * Managing state transitions is one of the hardest parts of building applications. This is
	     * especially true on the web, where you also need to ensure that the state is reflected in the URL.
	     * In addition, we often want to split applications into multiple bundles and load them on demand.
	     * Doing this transparently is not trivial.
	     *
	     * The Angular 2 router solves these problems. Using the router, you can declaratively specify
	     * application states, manage state transitions while taking care of the URL, and load bundles on
	     * demand.
	     *
	     * [Read this developer guide](https://angular.io/docs/ts/latest/guide/router.html) to get an
	     * overview of how the router should be used.
	     *
	     * @stable
	     */
	    var RouterModule = (function () {
	        function RouterModule(guard) {
	        }
	        /**
	         * Creates a module with all the router providers and directives. It also optionally sets up an
	         * application listener to perform an initial navigation.
	         *
	         * Options:
	         * * `enableTracing` makes the router log all its internal events to the console.
	         * * `useHash` enables the location strategy that uses the URL fragment instead of the history
	         * API.
	         * * `initialNavigation` disables the initial navigation.
	         * * `errorHandler` provides a custom error handler.
	         */
	        RouterModule.forRoot = function (routes, config) {
	            return {
	                ngModule: RouterModule,
	                providers: [
	                    ROUTER_PROVIDERS, provideRoutes(routes), {
	                        provide: ROUTER_FORROOT_GUARD,
	                        useFactory: provideForRootGuard,
	                        deps: [[Router, new _angular_core.Optional(), new _angular_core.SkipSelf()]]
	                    },
	                    { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} }, {
	                        provide: _angular_common.LocationStrategy,
	                        useFactory: provideLocationStrategy,
	                        deps: [
	                            _angular_common.PlatformLocation, [new _angular_core.Inject(_angular_common.APP_BASE_HREF), new _angular_core.Optional()], ROUTER_CONFIGURATION
	                        ]
	                    },
	                    provideRouterInitializer()
	                ]
	            };
	        };
	        /**
	         * Creates a module with all the router directives and a provider registering routes.
	         */
	        RouterModule.forChild = function (routes) {
	            return { ngModule: RouterModule, providers: [provideRoutes(routes)] };
	        };
	        RouterModule.decorators = [
	            { type: _angular_core.NgModule, args: [{ declarations: ROUTER_DIRECTIVES, exports: ROUTER_DIRECTIVES },] },
	        ];
	        /** @nocollapse */
	        RouterModule.ctorParameters = [
	            { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [ROUTER_FORROOT_GUARD,] },] },
	        ];
	        return RouterModule;
	    }());
	    function provideLocationStrategy(platformLocationStrategy, baseHref, options) {
	        if (options === void 0) { options = {}; }
	        return options.useHash ? new _angular_common.HashLocationStrategy(platformLocationStrategy, baseHref) :
	            new _angular_common.PathLocationStrategy(platformLocationStrategy, baseHref);
	    }
	    function provideForRootGuard(router) {
	        if (router) {
	            throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
	        }
	        return 'guarded';
	    }
	    /**
	     * @whatItDoes Registers routes.
	     *
	     * @howToUse
	     *
	     * ```
	     * @NgModule({
	     *   imports: [RouterModule.forChild(ROUTES)],
	     *   providers: [provideRoutes(EXTRA_ROUTES)]
	     * })
	     * class MyNgModule {}
	     * ```
	     *
	     * @stable
	     */
	    function provideRoutes(routes) {
	        return [
	            { provide: _angular_core.ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: routes },
	            { provide: ROUTES, multi: true, useValue: routes }
	        ];
	    }
	    function setupRouter(ref, urlSerializer, outletMap, location, injector, loader, compiler, config, opts) {
	        if (opts === void 0) { opts = {}; }
	        if (ref.componentTypes.length == 0) {
	            throw new Error('Bootstrap at least one component before injecting Router.');
	        }
	        var componentType = ref.componentTypes[0];
	        var r = new Router(componentType, urlSerializer, outletMap, location, injector, loader, compiler, flatten(config));
	        if (opts.errorHandler) {
	            r.errorHandler = opts.errorHandler;
	        }
	        if (opts.enableTracing) {
	            r.events.subscribe(function (e) {
	                console.group("Router Event: " + e.constructor.name);
	                console.log(e.toString());
	                console.log(e);
	                console.groupEnd();
	            });
	        }
	        return r;
	    }
	    function rootRoute(router) {
	        return router.routerState.root;
	    }
	    function initialRouterNavigation(router, opts) {
	        return function () {
	            if (opts.initialNavigation === false) {
	                router.setUpLocationChangeListener();
	            }
	            else {
	                router.initialNavigation();
	            }
	        };
	    }
	    function provideRouterInitializer() {
	        return {
	            provide: _angular_core.APP_BOOTSTRAP_LISTENER,
	            multi: true,
	            useFactory: initialRouterNavigation,
	            deps: [Router, ROUTER_CONFIGURATION]
	        };
	    }
	
	    var __router_private__ = {
	        ROUTER_PROVIDERS: ROUTER_PROVIDERS,
	        ROUTES: ROUTES,
	        flatten: flatten
	    };
	
	    exports.RouterLink = RouterLink;
	    exports.RouterLinkWithHref = RouterLinkWithHref;
	    exports.RouterLinkActive = RouterLinkActive;
	    exports.RouterOutlet = RouterOutlet;
	    exports.NavigationCancel = NavigationCancel;
	    exports.NavigationEnd = NavigationEnd;
	    exports.NavigationError = NavigationError;
	    exports.NavigationStart = NavigationStart;
	    exports.Router = Router;
	    exports.RoutesRecognized = RoutesRecognized;
	    exports.RouterModule = RouterModule;
	    exports.provideRoutes = provideRoutes;
	    exports.RouterOutletMap = RouterOutletMap;
	    exports.ActivatedRoute = ActivatedRoute;
	    exports.ActivatedRouteSnapshot = ActivatedRouteSnapshot;
	    exports.RouterState = RouterState;
	    exports.RouterStateSnapshot = RouterStateSnapshot;
	    exports.PRIMARY_OUTLET = PRIMARY_OUTLET;
	    exports.DefaultUrlSerializer = DefaultUrlSerializer;
	    exports.UrlSegment = UrlSegment;
	    exports.UrlSerializer = UrlSerializer;
	    exports.UrlTree = UrlTree;
	    exports.__router_private__ = __router_private__;
	
	}));


/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v2.0.1
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(3), __webpack_require__(54), __webpack_require__(4), __webpack_require__(5), __webpack_require__(50)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';
	
	    function isPresent(obj) {
	        return obj !== undefined && obj !== null;
	    }
	    function isBlank(obj) {
	        return obj === undefined || obj === null;
	    }
	    function isString(obj) {
	        return typeof obj === 'string';
	    }
	    function isStringMap(obj) {
	        return typeof obj === 'object' && obj !== null;
	    }
	    function isArray(obj) {
	        return Array.isArray(obj);
	    }
	    var StringWrapper = (function () {
	        function StringWrapper() {
	        }
	        StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	        StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	        StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	        StringWrapper.equals = function (s, s2) { return s === s2; };
	        StringWrapper.stripLeft = function (s, charVal) {
	            if (s && s.length) {
	                var pos = 0;
	                for (var i = 0; i < s.length; i++) {
	                    if (s[i] != charVal)
	                        break;
	                    pos++;
	                }
	                s = s.substring(pos);
	            }
	            return s;
	        };
	        StringWrapper.stripRight = function (s, charVal) {
	            if (s && s.length) {
	                var pos = s.length;
	                for (var i = s.length - 1; i >= 0; i--) {
	                    if (s[i] != charVal)
	                        break;
	                    pos--;
	                }
	                s = s.substring(0, pos);
	            }
	            return s;
	        };
	        StringWrapper.replace = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.replaceAll = function (s, from, replace) {
	            return s.replace(from, replace);
	        };
	        StringWrapper.slice = function (s, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return s.slice(from, to === null ? undefined : to);
	        };
	        StringWrapper.replaceAllMapped = function (s, from, cb) {
	            return s.replace(from, function () {
	                var matches = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    matches[_i - 0] = arguments[_i];
	                }
	                // Remove offset & string from the result array
	                matches.splice(-2, 2);
	                // The callback receives match, p1, ..., pn
	                return cb(matches);
	            });
	        };
	        StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	        StringWrapper.compare = function (a, b) {
	            if (a < b) {
	                return -1;
	            }
	            else if (a > b) {
	                return 1;
	            }
	            else {
	                return 0;
	            }
	        };
	        return StringWrapper;
	    }());
	    var NumberWrapper = (function () {
	        function NumberWrapper() {
	        }
	        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	        NumberWrapper.equal = function (a, b) { return a === b; };
	        NumberWrapper.parseIntAutoRadix = function (text) {
	            var result = parseInt(text);
	            if (isNaN(result)) {
	                throw new Error('Invalid integer literal when parsing ' + text);
	            }
	            return result;
	        };
	        NumberWrapper.parseInt = function (text, radix) {
	            if (radix == 10) {
	                if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else if (radix == 16) {
	                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                    return parseInt(text, radix);
	                }
	            }
	            else {
	                var result = parseInt(text, radix);
	                if (!isNaN(result)) {
	                    return result;
	                }
	            }
	            throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	        };
	        Object.defineProperty(NumberWrapper, "NaN", {
	            get: function () { return NaN; },
	            enumerable: true,
	            configurable: true
	        });
	        NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	        NumberWrapper.isNaN = function (value) { return isNaN(value); };
	        NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	        return NumberWrapper;
	    }());
	    // JS has NaN !== NaN
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    function normalizeBool(obj) {
	        return isBlank(obj) ? false : obj;
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	    function hasConstructor(value, type) {
	        return value.constructor === type;
	    }
	
	    /**
	     * Base class for control directives.
	     *
	     * Only used internally in the forms module.
	     *
	     * @stable
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            get: function () { return isPresent(this.control) ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            get: function () { return isPresent(this.control) ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            get: function () { return isPresent(this.control) ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            get: function () { return isPresent(this.control) ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            get: function () {
	                return isPresent(this.control) ? this.control.errors : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            get: function () { return isPresent(this.control) ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            get: function () { return isPresent(this.control) ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            get: function () { return isPresent(this.control) ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            get: function () { return isPresent(this.control) ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            get: function () { return isPresent(this.control) ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            get: function () { return isPresent(this.control) ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.statusChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.valueChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (isPresent(this.control))
	                this.control.reset(value);
	        };
	        return AbstractControlDirective;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * A directive that contains multiple {@link NgControl}s.
	     *
	     * Only used by the forms module.
	     *
	     * @stable
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             * Get the form to which this container belongs.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             * Get the path to this container.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));
	
	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Map constructor.  We work around that by manually adding the items.
	    var createMapFromPairs = (function () {
	        try {
	            if (new Map([[1, 2]]).size === 1) {
	                return function createMapFromPairs(pairs) { return new Map(pairs); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromPairs(pairs) {
	            var map = new Map();
	            for (var i = 0; i < pairs.length; i++) {
	                var pair = pairs[i];
	                map.set(pair[0], pair[1]);
	            }
	            return map;
	        };
	    })();
	    var _clearValues = (function () {
	        if ((new Map()).keys().next) {
	            return function _clearValues(m) {
	                var keyIterator = m.keys();
	                var k;
	                while (!((k = keyIterator.next()).done)) {
	                    m.set(k.value, null);
	                }
	            };
	        }
	        else {
	            return function _clearValuesWithForeEach(m) {
	                m.forEach(function (v, k) { m.set(k, null); });
	            };
	        }
	    })();
	    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	    var _arrayFromMap = (function () {
	        try {
	            if ((new Map()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = new Array(m.size), i = 0;
	            m.forEach(function (v, k) {
	                res[i] = getValues ? v : k;
	                i++;
	            });
	            return res;
	        };
	    })();
	    var MapWrapper = (function () {
	        function MapWrapper() {
	        }
	        MapWrapper.createFromStringMap = function (stringMap) {
	            var result = new Map();
	            for (var prop in stringMap) {
	                result.set(prop, stringMap[prop]);
	            }
	            return result;
	        };
	        MapWrapper.toStringMap = function (m) {
	            var r = {};
	            m.forEach(function (v, k) { return r[k] = v; });
	            return r;
	        };
	        MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	        MapWrapper.iterable = function (m) { return m; };
	        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	        return MapWrapper;
	    }());
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.get = function (map, key) {
	            return map.hasOwnProperty(key) ? map[key] : undefined;
	        };
	        StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	        StringMapWrapper.keys = function (map) { return Object.keys(map); };
	        StringMapWrapper.values = function (map) {
	            return Object.keys(map).map(function (k) { return map[k]; });
	        };
	        StringMapWrapper.isEmpty = function (map) {
	            for (var prop in map) {
	                return false;
	            }
	            return true;
	        };
	        StringMapWrapper.forEach = function (map, callback) {
	            for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
	                var k = _a[_i];
	                callback(map[k], k);
	            }
	        };
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        // JS has no way to express a statically fixed size list, but dart does so we
	        // keep both methods.
	        ListWrapper.createFixedSize = function (size) { return new Array(size); };
	        ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	        ListWrapper.clone = function (array) { return array.slice(0); };
	        ListWrapper.forEachWithIndex = function (array, fn) {
	            for (var i = 0; i < array.length; i++) {
	                fn(array[i], i);
	            }
	        };
	        ListWrapper.first = function (array) {
	            if (!array)
	                return null;
	            return array[0];
	        };
	        ListWrapper.last = function (array) {
	            if (!array || array.length == 0)
	                return null;
	            return array[array.length - 1];
	        };
	        ListWrapper.indexOf = function (array, value, startIndex) {
	            if (startIndex === void 0) { startIndex = 0; }
	            return array.indexOf(value, startIndex);
	        };
	        ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	        ListWrapper.reversed = function (array) {
	            var a = ListWrapper.clone(array);
	            return a.reverse();
	        };
	        ListWrapper.concat = function (a, b) { return a.concat(b); };
	        ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	        ListWrapper.removeAt = function (list, index) {
	            var res = list[index];
	            list.splice(index, 1);
	            return res;
	        };
	        ListWrapper.removeAll = function (list, items) {
	            for (var i = 0; i < items.length; ++i) {
	                var index = list.indexOf(items[i]);
	                list.splice(index, 1);
	            }
	        };
	        ListWrapper.remove = function (list, el) {
	            var index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        ListWrapper.clear = function (list) { list.length = 0; };
	        ListWrapper.isEmpty = function (list) { return list.length == 0; };
	        ListWrapper.fill = function (list, value, start, end) {
	            if (start === void 0) { start = 0; }
	            if (end === void 0) { end = null; }
	            list.fill(value, start, end === null ? list.length : end);
	        };
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        ListWrapper.slice = function (l, from, to) {
	            if (from === void 0) { from = 0; }
	            if (to === void 0) { to = null; }
	            return l.slice(from, to === null ? undefined : to);
	        };
	        ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	        ListWrapper.sort = function (l, compareFn) {
	            if (isPresent(compareFn)) {
	                l.sort(compareFn);
	            }
	            else {
	                l.sort();
	            }
	        };
	        ListWrapper.toString = function (l) { return l.toString(); };
	        ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	        ListWrapper.maximum = function (list, predicate) {
	            if (list.length == 0) {
	                return null;
	            }
	            var solution = null;
	            var maxValue = -Infinity;
	            for (var index = 0; index < list.length; index++) {
	                var candidate = list[index];
	                if (isBlank(candidate)) {
	                    continue;
	                }
	                var candidateValue = predicate(candidate);
	                if (candidateValue > maxValue) {
	                    solution = candidate;
	                    maxValue = candidateValue;
	                }
	            }
	            return solution;
	        };
	        ListWrapper.flatten = function (list) {
	            var target = [];
	            _flattenArray(list, target);
	            return target;
	        };
	        ListWrapper.addAll = function (list, source) {
	            for (var i = 0; i < source.length; i++) {
	                list.push(source[i]);
	            }
	        };
	        return ListWrapper;
	    }());
	    function _flattenArray(source, target) {
	        if (isPresent(source)) {
	            for (var i = 0; i < source.length; i++) {
	                var item = source[i];
	                if (isArray(item)) {
	                    _flattenArray(item, target);
	                }
	                else {
	                    target.push(item);
	                }
	            }
	        }
	        return target;
	    }
	
	    var isPromise = _angular_core.__core_private__.isPromise;
	
	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     * Provides a set of validators used by form controls.
	     *
	     * A validator is a function that processes a {@link FormControl} or collection of
	     * controls and returns a map of errors. A null map means that validation has passed.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * var loginControl = new FormControl("", Validators.required)
	     * ```
	     *
	     * @stable
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         * Validator that requires controls to have a non-empty value.
	         */
	        Validators.required = function (control) {
	            return isBlank(control.value) || (isString(control.value) && control.value == '') ?
	                { 'required': true } :
	                null;
	        };
	        /**
	         * Validator that requires controls to have a value of a minimum length.
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var v = control.value;
	                return v.length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires controls to have a value of a maximum length.
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var v = control.value;
	                return v.length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires a control to match a regex to its value.
	         */
	        Validators.pattern = function (pattern) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
	                    return null;
	                var regex = new RegExp("^" + pattern + "$");
	                var v = control.value;
	                return regex.test(v) ? null :
	                    { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
	            };
	        };
	        /**
	         * No-op validator.
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         * Compose multiple validators into a single function that returns the union
	         * of the individual error maps.
	         */
	        Validators.compose = function (validators) {
	            if (isBlank(validators))
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        Validators.composeAsync = function (validators) {
	            if (isBlank(validators))
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _mergeErrors(arrayOfErrors) {
	        var res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return StringMapWrapper.isEmpty(res) ? null : res;
	    }
	
	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');
	
	    var CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a value and listening to changes on a checkbox input element.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="checkbox" name="rememberLogin" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return CheckboxControlValueAccessor;
	    }());
	
	    var DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The default accessor for writing a value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="text" name="searchQuery" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var DefaultValueAccessor = (function () {
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return DefaultValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function normalizeValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	    function normalizeAsyncValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	
	    var NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a number value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="number" [(ngModel)]="age">
	     *  ```
	     */
	    var NumberValueAccessor = (function () {
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return NumberValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     * A base class that all control directive extend.
	     * It binds a {@link FormControl} object to a DOM element.
	     *
	     * Used internally by Angular forms.
	     *
	     * @stable
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return NgControl;
	    }(AbstractControlDirective));
	
	    var RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            var indexToRemove = -1;
	            for (var i = 0; i < this._accessors.length; ++i) {
	                if (this._accessors[i][1] === accessor) {
	                    indexToRemove = i;
	                }
	            }
	            ListWrapper.removeAt(this._accessors, indexToRemove);
	        };
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = [];
	        return RadioControlRegistry;
	    }());
	    /**
	     * @whatItDoes  Writes radio control values and listens to radio control changes.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any radio control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use radio buttons with form directives
	     *
	     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	     * in the same group have the same `name` attribute.  Radio buttons with different `name`
	     * attributes do not affect each other.
	     *
	     * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	     *
	     * When using radio buttons in a reactive form, radio buttons in the same group should have the
	     * same `formControlName`. You can also add a `name` attribute, but it's optional.
	     *
	     * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  @stable
	     */
	    var RadioControlValueAccessor = (function () {
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ];
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());
	
	    var SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return StringWrapper.slice(id + ": " + value, 0, 50);
	    }
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * @whatItDoes Writes values and listens to changes on a select element.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any select control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use select controls with form directives
	     *
	     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	     * attribute to the main `<select>` tag.
	     *
	     * If your option values are simple strings, you can bind to the normal `value` property
	     * on the option.  If your option values happen to be objects (and you'd like to save the
	     * selection in your form as an object), use `ngValue` instead:
	     *
	     * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
	     *
	     * In reactive forms, you'll also want to add your form directive (`formControlName` or
	     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	     * choice of binding to the  `value` or `ngValue` property on the select's options.
	     *
	     * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	     *
	     * Note: We listen to the 'change' event because 'input' events aren't fired
	     * for selects in Firefox and IE:
	     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var SelectControlValueAccessor = (function () {
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var value = this._optionMap.get(_extractId(valueString));
	            return isPresent(value) ? value : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectControlValueAccessor;
	    }());
	    /**
	     * @whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * @howToUse
	     *
	     * See docs for {@link SelectControlValueAccessor} for usage examples.
	     *
	     * @stable
	     */
	    var NgSelectOption = (function () {
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select))
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            set: function (value) {
	                this._setElementValue(value);
	                if (isPresent(this._select))
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());
	
	    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString$1(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (isString(value))
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return StringWrapper.slice(id + ": " + value, 0, 50);
	    }
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * @stable
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            if (value == null)
	                return;
	            var values = value;
	            // convert values to ids
	            var ids = values.map(function (v) { return _this._getOptionId(v); });
	            this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var options = _.selectedOptions;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var options = _.options;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        if (opt.selected) {
	                            var val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                fn(selected);
	            };
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var opt = this._optionMap.get(_extractId$1(valueString));
	            return isPresent(opt) ? opt._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select multiple name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select)) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            set: function (value) {
	                if (isPresent(this._select)) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /** @internal */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());
	
	    function controlPath(name, parent) {
	        var p = ListWrapper.clone(parent.path);
	        p.push(name);
	        return p;
	    }
	    function setUpControl(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        if (isBlank(dir.valueAccessor))
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        dir._rawAsyncValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        if (control)
	            control._clearChangeFns();
	    }
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    function _throwError(dir, message) {
	        var messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    function isPropertyUpdated(changes, viewModel) {
	        if (!changes.hasOwnProperty('model'))
	            return false;
	        var change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    function isBuiltInAccessor(valueAccessor) {
	        return (hasConstructor(valueAccessor, CheckboxControlValueAccessor) ||
	            hasConstructor(valueAccessor, NumberValueAccessor) ||
	            hasConstructor(valueAccessor, SelectControlValueAccessor) ||
	            hasConstructor(valueAccessor, SelectMultipleControlValueAccessor) ||
	            hasConstructor(valueAccessor, RadioControlValueAccessor));
	    }
	    // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	    function selectValueAccessor(dir, valueAccessors) {
	        if (isBlank(valueAccessors))
	            return null;
	        var defaultAccessor;
	        var builtinAccessor;
	        var customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (hasConstructor(v, DefaultValueAccessor)) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (isPresent(builtinAccessor))
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (isPresent(customAccessor))
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (isPresent(customAccessor))
	            return customAccessor;
	        if (isPresent(builtinAccessor))
	            return builtinAccessor;
	        if (isPresent(defaultAccessor))
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	     *
	     * @stable
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             * Get the {@link FormGroup} backing this binding.
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             * Get the path to this control group.
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             * Get the {@link Form} to which this group belongs.
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.untouched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.touched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.pristine : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.dirty : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.valid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.invalid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid'
	    };
	    /**
	     * Directive automatically applied to Angular form controls that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     * Directive automatically applied to Angular form groups that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Use by directives and components to emit custom Events.
	     *
	     * ### Examples
	     *
	     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	     * title gets clicked:
	     *
	     * ```
	     * @Component({
	     *   selector: 'zippy',
	     *   template: `
	     *   <div class="zippy">
	     *     <div (click)="toggle()">Toggle</div>
	     *     <div [hidden]="!visible">
	     *       <ng-content></ng-content>
	     *     </div>
	     *  </div>`})
	     * export class Zippy {
	     *   visible: boolean = true;
	     *   @Output() open: EventEmitter<any> = new EventEmitter();
	     *   @Output() close: EventEmitter<any> = new EventEmitter();
	     *
	     *   toggle() {
	     *     this.visible = !this.visible;
	     *     if (this.visible) {
	     *       this.open.emit(null);
	     *     } else {
	     *       this.close.emit(null);
	     *     }
	     *   }
	     * }
	     * ```
	     *
	     * The events payload can be accessed by the parameter `$event` on the components output event
	     * handler:
	     *
	     * ```
	     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	     * ```
	     *
	     * Uses Rx.Observable but provides an adapter to make it work as specified here:
	     * https://github.com/jhusain/observable-spec
	     *
	     * Once a reference implementation of the spec is available, switch to it.
	     * @stable
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         * Creates an instance of [EventEmitter], which depending on [isAsync],
	         * delivers events synchronously or asynchronously.
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var schedulerFn;
	            var errorFn = function (err) { return null; };
	            var completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                    setTimeout(function () { return generatorOrNext(value); });
	                } : function (value /** TODO #9100 */) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var DISABLED = 'DISABLED';
	    function _find(control, path, delimiter) {
	        if (isBlank(path))
	            return null;
	        if (!(path instanceof Array)) {
	            path = path.split(delimiter);
	        }
	        if (path instanceof Array && ListWrapper.isEmpty(path))
	            return null;
	        return path.reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return isPresent(v.controls[name]) ? v.controls[name] : null;
	            }
	            else if (v instanceof FormArray) {
	                var index = name;
	                return isPresent(v.at(index)) ? v.at(index) : null;
	            }
	            else {
	                return null;
	            }
	        }, control);
	    }
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     * @whatItDoes This is the base class for {@link FormControl}, {@link FormGroup}, and
	     * {@link FormArray}.
	     *
	     * It provides some of the shared behavior that all controls and groups of controls have, like
	     * running validators, calculating status, and resetting state. It also defines the properties
	     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	     * instantiated directly.
	     *
	     * @stable
	     */
	    var AbstractControl = (function () {
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	            /** @internal */
	            this._onDisabledChange = [];
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             * The value of the control.
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             * The validation status of the control. There are four possible
	             * validation statuses:
	             *
	             * * **VALID**:  control has passed all validation checks
	             * * **INVALID**: control has failed at least one validation check
	             * * **PENDING**: control is in the midst of conducting a validation check
	             * * **DISABLED**: control is exempt from validation checks
	             *
	             * These statuses are mutually exclusive, so a control cannot be
	             * both valid AND invalid or invalid AND disabled.
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             * A control is `valid` when its `status === VALID`.
	             *
	             * In order to have this status, the control must have passed all its
	             * validation checks.
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             * A control is `invalid` when its `status === INVALID`.
	             *
	             * In order to have this status, the control must have failed
	             * at least one of its validation checks.
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             * A control is `pending` when its `status === PENDING`.
	             *
	             * In order to have this status, the control must be in the
	             * middle of conducting a validation check.
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             * A control is `disabled` when its `status === DISABLED`.
	             *
	             * Disabled controls are exempt from validation checks and
	             * are not included in the aggregate value of their ancestor
	             * controls.
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             * A control is `enabled` as long as its `status !== DISABLED`.
	             *
	             * In other words, it has a status of `VALID`, `INVALID`, or
	             * `PENDING`.
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             * Returns any errors generated by failing validation. If there
	             * are no errors, it will return null.
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             * A control is `pristine` if the user has not yet changed
	             * the value in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             * A control is `dirty` if the user has changed the value
	             * in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	            * A control is marked `touched` once the user has triggered
	            * a `blur` event on it.
	            */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             * A control is `untouched` if the user has not yet triggered
	             * a `blur` event on it.
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             * Emits an event every time the value of the control changes, in
	             * the UI or programmatically.
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             * Emits an event every time the validation status of the control
	             * is re-calculated.
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Sets the synchronous validators that are active on this control.  Calling
	         * this will overwrite any existing sync validators.
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         * Sets the async validators that are active on this control. Calling this
	         * will overwrite any existing async validators.
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         * Empties out the sync validator list.
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         * Empties out the async validator list.
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         * Marks the control as `touched`.
	         *
	         * This will also mark all direct ancestors as `touched` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._touched = true;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `untouched`.
	         *
	         * If the control has any children, it will also mark all children as `untouched`
	         * to maintain the model, and re-calculate the `touched` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `dirty`.
	         *
	         * This will also mark all direct ancestors as `dirty` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._pristine = false;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pristine`.
	         *
	         * If the control has any children, it will also mark all children as `pristine`
	         * to maintain the model, and re-calculate the `pristine` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pending`.
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._status = PENDING;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Disables the control. This means the control will be exempt from validation checks and
	         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	         *
	         * If the control has children, all children will be disabled to maintain the model.
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	        };
	        /**
	         * Enables the control. This means the control will be included in validation checks and
	         * the aggregate value of its parent. Its status is re-calculated based on its value and
	         * its validators.
	         *
	         * If the control has children, all children will be enabled.
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	        };
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         * Re-calculates the value and validation status of the control.
	         *
	         * By default, it will also update the value and validity of its ancestors.
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            onlySelf = normalizeBool(onlySelf);
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        AbstractControl.prototype._runValidator = function () {
	            return isPresent(this.validator) ? this.validator(this) : null;
	        };
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (isPresent(this.asyncValidator)) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription = obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (isPresent(this._asyncValidationSubscription)) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         * Sets errors on a form control.
	         *
	         * This is used when validations are run manually by the user, rather than automatically.
	         *
	         * Calling `setErrors` will also update the validity of the parent control.
	         *
	         * ### Example
	         *
	         * ```
	         * const login = new FormControl("someLogin");
	         * login.setErrors({
	         *   "notUnique": true
	         * });
	         *
	         * expect(login.valid).toEqual(false);
	         * expect(login.errors).toEqual({"notUnique": true});
	         *
	         * login.setValue("someOtherLogin");
	         *
	         * expect(login.valid).toEqual(true);
	         * ```
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent);
	        };
	        /**
	         * Retrieves a child control given the control's name or path.
	         *
	         * Paths can be passed in as an array or a string delimited by a dot.
	         *
	         * To get a control nested within a `person` sub-group:
	         *
	         * * `this.form.get('person.name');`
	         *
	         * -OR-
	         *
	         * * `this.form.get(['person', 'name']);`
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns null or undefined.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var control = isPresent(path) && !ListWrapper.isEmpty(path) ? this.get(path) : this;
	            if (isPresent(control) && isPresent(control._errors)) {
	                return StringMapWrapper.get(control._errors, errorCode);
	            }
	            else {
	                return null;
	            }
	        };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns false.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return isPresent(this.getError(errorCode, path));
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             * Retrieves the top-level ancestor of this control.
	             */
	            get: function () {
	                var x = this;
	                while (isPresent(x._parent)) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (isPresent(this._parent)) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (isPresent(this._errors))
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status == status; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /** @internal */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return isStringMap(formState) && Object.keys(formState).length === 2 && 'value' in formState &&
	                'disabled' in formState;
	        };
	        /** @internal */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     * @whatItDoes Tracks the value and validation status of an individual form control.
	     *
	     * It is one of the three fundamental building blocks of Angular forms, along with
	     * {@link FormGroup} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormControl}, you can pass in an initial value as the
	     * first argument. Example:
	     *
	     * ```ts
	     * const ctrl = new FormControl('some value');
	     * console.log(ctrl.value);     // 'some value'
	     *```
	     *
	     * You can also initialize the control with a form state object on instantiation,
	     * which includes both the value and whether or not the control is disabled.
	     *
	     * ```ts
	     * const ctrl = new FormControl({value: 'n/a', disabled: true});
	     * console.log(ctrl.value);     // 'n/a'
	     * console.log(ctrl.status);   // 'DISABLED'
	     * ```
	     *
	     * To include a sync validator (or an array of sync validators) with the control,
	     * pass it in as the second argument. Async validators are also supported, but
	     * have to be passed in separately as the third arg.
	     *
	     * ```ts
	     * const ctrl = new FormControl('', Validators.required);
	     * console.log(ctrl.value);     // ''
	     * console.log(ctrl.status);   // 'INVALID'
	     * ```
	     *
	     * See its superclass, {@link AbstractControl}, for more properties and methods.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         * Set the value of the form control to `value`.
	         *
	         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	         * and not its parent component. This defaults to false.
	         *
	         * If `emitEvent` is `true`, this
	         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	         * to true (as it falls through to `updateValueAndValidity`).
	         *
	         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	         * specified.
	         *
	         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            emitModelToViewChange = isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	            emitViewToModelChange = isPresent(emitViewToModelChange) ? emitViewToModelChange : true;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Patches the value of a control.
	         *
	         * This function is functionally the same as {@link FormControl.setValue} at this level.
	         * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	         * where it does behave differently.
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         * Resets the form control. This means by default:
	         *
	         * * it is marked as `pristine`
	         * * it is marked as `untouched`
	         * * value is set to null
	         *
	         * You can also reset to a specific form state by passing through a standalone
	         * value or a form state object that contains both a value and a disabled state
	         * (these are the only two properties that cannot be calculated).
	         *
	         * Ex:
	         *
	         * ```ts
	         * this.control.reset('Nancy');
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * ```
	         *
	         * OR
	         *
	         * ```
	         * this.control.reset({value: 'Nancy', disabled: true});
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * console.log(this.control.status);  // 'DISABLED'
	         * ```
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf });
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @internal
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @internal
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         * Register a listener for change events.
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @internal
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = [];
	            this._onCollectionChange = function () { };
	        };
	        /**
	         * Register a listener for disabled events.
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) {
	            this._onDisabledChange.push(fn);
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of a group of {@link FormControl}
	     * instances.
	     *
	     * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	     * with each control name as the key.  It calculates its status by reducing the statuses
	     * of its children. For example, if one of the controls in a group is invalid, the entire
	     * group becomes invalid.
	     *
	     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	     * argument. The key for each child will be the name under which it is registered.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   first: new FormControl('Nancy', Validators.minLength(2)),
	     *   last: new FormControl('Drew'),
	     * });
	     *
	     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	     * console.log(form.status);  // 'VALID'
	     * ```
	     *
	     * You can also include group-level validators as the second arg, or group-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   password: new FormControl('', Validators.minLength(2)),
	     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
	     * }, passwordMatchValidator);
	     *
	     *
	     * function passwordMatchValidator(g: FormGroup) {
	     *    return g.get('password').value === g.get('passwordConfirm').value
	     *       ? null : {'mismatch': true};
	     * }
	     * ```
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Registers a control with the group's list of controls.
	         *
	         * This method does not update value or validity of the control, so for
	         * most cases you'll want to use {@link FormGroup.addControl} instead.
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         * Add a control to this group.
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove a control from this group.
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Check whether there is an enabled control with the given name in the group.
	         *
	         * It will return false for disabled controls. If you'd like to check for
	         * existence in the group only, use {@link AbstractControl.get} instead.
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	         *  the structure of the group, with control names as keys.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.setValue({first: 'Nancy', last: 'Drew'});
	         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	         *
	         *  ```
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            StringMapWrapper.forEach(value, function (newValue, name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(newValue, { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	         *  names as keys, and will do its best to match the values to the correct controls
	         *  in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the group without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.patchValue({first: 'Nancy'});
	         *  console.log(form.value);   // {first: 'Nancy', last: null}
	         *
	         *  ```
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            StringMapWrapper.forEach(value, function (newValue, name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(newValue, { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormGroup}. This means by default:
	         *
	         * * The group and all descendants are marked `pristine`
	         * * The group and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in a map of states
	         * that matches the structure of your form, with control names as keys. The state
	         * can be a standalone value or a form state object with both a value and a disabled
	         * status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.form.reset({first: 'name', last; 'last name'});
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.form.reset({
	         *   first: {value: 'name', disabled: true},
	         *   last: 'last'
	         * });
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * console.log(this.form.get('first').status);  // 'DISABLED'
	         * ```
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the {@link FormGroup}, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the group.
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /** @internal */
	        FormGroup.prototype._forEachChild = function (cb) {
	            StringMapWrapper.forEach(this.controls, cb);
	        };
	        /** @internal */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /** @internal */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /** @internal */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of an array of {@link FormControl}
	     * instances.
	     *
	     * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	     * It calculates its status by reducing the statuses of its children. For example, if one of
	     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	     *
	     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormGroup}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	     * argument.
	     *
	     * ### Example
	     *
	     * ```
	     * const arr = new FormArray([
	     *   new FormControl('Nancy', Validators.minLength(2)),
	     *   new FormControl('Drew'),
	     * ]);
	     *
	     * console.log(arr.value);   // ['Nancy', 'Drew']
	     * console.log(arr.status);  // 'VALID'
	     * ```
	     *
	     * You can also include array-level validators as the second arg, or array-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Adding or removing controls
	     *
	     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	     * the `FormArray` directly, as that will result in strange and unexpected behavior such
	     * as broken change detection.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Get the {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         * Insert a new {@link AbstractControl} at the end of the array.
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Insert a new {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.insert = function (index, control) {
	            ListWrapper.insert(this.controls, index, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove the control at the given `index` in the array.
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            ListWrapper.removeAt(this.controls, index);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            ListWrapper.removeAt(this.controls, index);
	            if (control) {
	                ListWrapper.insert(this.controls, index, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             * Length of the control array.
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	         *  the structure of the control.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.setValue(['Nancy', 'Drew']);
	         *  console.log(arr.value);   // ['Nancy', 'Drew']
	         *  ```
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	         *  structure of the control, and will do its best to match the values to the correct
	         *  controls in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the array without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.patchValue(['Nancy']);
	         *  console.log(arr.value);   // ['Nancy', null]
	         *  ```
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormArray}. This means by default:
	         *
	         * * The array and all descendants are marked `pristine`
	         * * The array and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in an array of states
	         * that matches the structure of the control. The state can be a standalone value
	         * or a form state object with both a value and a disabled status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.arr.reset(['name', 'last name']);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.arr.reset([
	         *   {value: 'name', disabled: true},
	         *   'last'
	         * ]);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * console.log(this.arr.get(0).status);  // 'DISABLED'
	         * ```
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the array, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the array.
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /** @internal */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /** @internal */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /** @internal */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /** @internal */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /** @internal */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /** @internal */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /** @internal */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var resolvedPromise = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a top-level {@link FormGroup} instance and binds it to a form
	     * to track aggregate form value and validation status.
	     *
	     * @howToUse
	     *
	     * As soon as you import the `FormsModule`, this directive becomes active by default on
	     * all `<form>` tags.  You don't need to add a special selector.
	     *
	     * You can export the directive into a local template variable using `ngForm` as the key
	     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	     * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	     * will give you access to the aggregate value and validity status of the form, as well as
	     * user interaction properties like `dirty` and `touched`.
	     *
	     * To register child controls with the form, you'll want to use {@link NgModel} with a
	     * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	     * sub-groups within the form.
	     *
	     * You can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission.
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                dir._control = container.registerControl(dir.name, dir.control);
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                var group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var ctrl = _this.form.get(dir.path);
	                ctrl.setValue(value);
	            });
	        };
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        NgForm.prototype.onSubmit = function () {
	            this._submitted = true;
	            this.ngSubmit.emit(null);
	            return false;
	        };
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return ListWrapper.isEmpty(path) ? this.form : this.form.get(path);
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        return NgForm;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };
	
	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     * @whatItDoes Creates and binds a {@link FormGroup} instance to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used as a child of {@link NgForm} (or in other words,
	     * within `<form>` tags).
	     *
	     * Use this directive if you'd like to create a sub-group within a form. This can
	     * come in handy if you want to validate a sub-group of your form separately from
	     * the rest of your form, or if some values in your domain model make more sense to
	     * consume together in a nested object.
	     *
	     * Pass in the name you'd like this sub-group to have and it will become the key
	     * for the sub-group in the form's full value. You can also export the directive into
	     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	     *
	     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     * @stable
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    var resolvedPromise$1 = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a {@link FormControl} instance from a domain model and binds it
	     * to a form control element.
	     *
	     * The {@link FormControl} instance will track the value, user interaction, and
	     * validation status of the control and keep the view synced with the model. If used
	     * within a parent form, the directive will also register itself with the form as a child
	     * control.
	     *
	     * @howToUse
	     *
	     * This directive can be used by itself or as part of a larger form. All you need is the
	     * `ngModel` selector to activate it.
	     *
	     * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	     * the domain model in your class as well.
	     *
	     * If you wish to inspect the properties of the associated {@link FormControl} (like
	     * validity state), you can also export the directive into a local template variable using
	     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	     * will fall through to the control anyway, so you can access them directly. You can see a
	     * full list of properties directly available in {@link AbstractControlDirective}.
	     *
	     * The following is an example of a simple standalone control using `ngModel`:
	     *
	     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	     *
	     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	     * so that the control can be registered with the parent form under that name.
	     *
	     * It's worth noting that in the context of a parent form, you often can skip one-way or
	     * two-way binding because the parent form will sync the value for you. You can access
	     * its properties by exporting it into a local template variable using `ngForm` (ex:
	     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	     *
	     * If you do need to populate initial values into your form, using a one-way binding for
	     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	     * than the domain model's value on submit.
	     *
	     * Take a look at an example of using `ngModel` within a form:
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * To see `ngModel` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var disabledValue = changes['isDisabled'].currentValue;
	            var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));
	
	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     * @whatItDoes Syncs a standalone {@link FormControl} instance to a form control element.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	     * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	     * {@link FormControlDirective}.
	     *
	     * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	     * it does not require that your {@link FormControl} instance be part of any parent
	     * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	     * exists above it.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormControl} instance. See a full list of available properties in
	     * {@link AbstractControl}.
	     *
	     * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	     * or you can set it programmatically later using {@link AbstractControl.setValue} or
	     * {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     *  @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                    this.valueAccessor.setDisabledState(true);
	                }
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return changes.hasOwnProperty('form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     * @whatItDoes Binds an existing {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive accepts an existing {@link FormGroup} instance. It will then use this
	     * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	     * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	     * and {@link FormArrayName} directives.
	     *
	     * **Set value**: You can set the form's initial value when instantiating the
	     * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	     * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	     * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (changes.hasOwnProperty('form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var ctrl = this.form.get(dir.path);
	            ctrl.setValue(value);
	        };
	        FormGroupDirective.prototype.onSubmit = function () {
	            this._submitted = true;
	            this.ngSubmit.emit(null);
	            return false;
	        };
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        FormGroupDirective.prototype._updateValidators = function () {
	            var sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (isBlank(this.form)) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormGroup} you want to link, and
	     * will look for a {@link FormGroup} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form groups can come in handy when you want to validate a sub-group of a
	     * form separately from the rest or when you'd like to group the values of certain
	     * controls into their own nested object.
	     *
	     * **Access the group**: You can access the associated {@link FormGroup} using the
	     * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	     *
	     * You can also access individual controls within the group using dot syntax.
	     * Ex: `this.form.get('name.first')`
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormGroup}, or you can set it programmatically later using
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the group, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormArray} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormArray} you want to link, and
	     * will look for a {@link FormArray} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form arrays can come in handy when you have a group of form controls but
	     * you're not sure how many there will be. Form arrays allow you to create new
	     * form controls dynamically.
	     *
	     * **Access the array**: You can access the associated {@link FormArray} using the
	     * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	     * Ex: `this.form.get('cities')`.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormArray}, or you can set the value programmatically later using the
	     * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	     * methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the array, you can
	     * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	     * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	     * status is re-calculated.
	     *
	     * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	     * calling its {@link FormArray.push} method.
	     *  Ex: `this.form.get('cities').push(new FormControl());`
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            get: function () {
	                return this._parent ? this._parent.formDirective : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     * @whatItDoes  Syncs a {@link FormControl} in an existing {@link FormGroup} to a form control
	     * element by name.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the {@link FormControl} instance you want to
	     * link, and will look for a {@link FormControl} registered with that name in the
	     * closest {@link FormGroup} or {@link FormArray} above it.
	     *
	     * **Access the control**: You can access the {@link FormControl} associated with
	     * this directive by using the {@link AbstractControl.get} method.
	     * Ex: `this.form.get('first');`
	     *
	     * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	     * See a full list of available properties in {@link AbstractControl}.
	     *
	     *  **Set value**: You can set an initial value for the control when instantiating the
	     *  {@link FormControl}, or you can set it programmatically later using
	     *  {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * To see `formControlName` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                this.valueAccessor.setDisabledState(true);
	            }
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));
	
	    var REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `required` validator to any controls marked with the
	     * `required` attribute, via the {@link NG_VALIDATORS} binding.
	     *
	     * ### Example
	     *
	     * ```
	     * <input name="fullName" ngModel required>
	     * ```
	     *
	     * @stable
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            get: function () { return this._required; },
	            set: function (value) {
	                this._required = isPresent(value) && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = [];
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	     *
	     * @stable
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['minlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MinLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.minlength) ? this._validator(c) : null;
	        };
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = [];
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	     * `formControl`,
	     * or control with `ngModel` that also has a `maxlength` attribute.
	     *
	     * @stable
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['maxlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MaxLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.maxlength) ? this._validator(c) : null;
	        };
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = [];
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `pattern` validator to any controls marked with the
	     * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	     * as the regex to validate Control value against.  Follows pattern attribute
	     * semantics; i.e. regex must match entire Control value.
	     *
	     * ### Example
	     *
	     * ```
	     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	     * ```
	     * @stable
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['pattern']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        PatternValidator.prototype.validate = function (c) {
	            return isPresent(this.pattern) ? this._validator(c) : null;
	        };
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = [];
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());
	
	    /**
	     * @whatItDoes Creates an {@link AbstractControl} from a user-specified configuration.
	     *
	     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	     * forms.
	     *
	     * @howToUse
	     *
	     * To use, inject `FormBuilder` into your component class. You can then call its methods
	     * directly.
	     *
	     * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  * **NgModule**: {@link ReactiveFormsModule}
	     *
	     * @stable
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         * Construct a new {@link FormGroup} with the given map of configuration.
	         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	         *
	         * See the {@link FormGroup} constructor for more details.
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var controls = this._reduceControls(controlsConfig);
	            var validator = isPresent(extra) ? StringMapWrapper.get(extra, 'validator') : null;
	            var asyncValidator = isPresent(extra) ? StringMapWrapper.get(extra, 'asyncValidator') : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         * Construct a new {@link FormControl} with the given `formState`,`validator`, and
	         * `asyncValidator`.
	         *
	         * `formState` can either be a standalone value for the form control or an object
	         * that contains both a value and a disabled status.
	         *
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         * Construct a {@link FormArray} from the given `controlsConfig` array of
	         * configuration, with the given optional `validator` and `asyncValidator`.
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /** @internal */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var controls = {};
	            StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	                controls[controlName] = _this._createControl(controlConfig);
	            });
	            return controls;
	        };
	        /** @internal */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (isArray(controlConfig)) {
	                var value = controlConfig[0];
	                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = [];
	        return FormBuilder;
	    }());
	
	    var SHARED_FORM_DIRECTIVES = [
	        NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor,
	        CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator,
	        MinLengthValidator, MaxLengthValidator, PatternValidator
	    ];
	    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{ declarations: SHARED_FORM_DIRECTIVES, exports: SHARED_FORM_DIRECTIVES },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = [];
	        return InternalFormsSharedModule;
	    }());
	
	    /**
	     * The ng module for forms.
	     * @stable
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = [];
	        return FormsModule;
	    }());
	    /**
	     * The ng module for reactive forms.
	     * @stable
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = [];
	        return ReactiveFormsModule;
	    }());
	
	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.RadioControlValueAccessor = RadioControlValueAccessor;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;
	
	}));


/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var FullScreen_1 = __webpack_require__(56);
	var FullScreenIf_1 = __webpack_require__(59);
	__export(__webpack_require__(56));
	__export(__webpack_require__(59));
	var FullScreenModule = (function () {
	    function FullScreenModule() {
	    }
	    FullScreenModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule
	            ],
	            declarations: [
	                FullScreen_1.FullScreen,
	                FullScreenIf_1.FullScreenIf
	            ],
	            exports: [
	                FullScreen_1.FullScreen,
	                FullScreenIf_1.FullScreenIf
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FullScreenModule);
	    return FullScreenModule;
	}());
	exports.FullScreenModule = FullScreenModule;


/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var FullScreenDOMService_1 = __webpack_require__(57);
	var FullScreenEventService_1 = __webpack_require__(58);
	var FullScreen = (function () {
	    function FullScreen(elRef, fullScreenEventService, fullScreenService) {
	        this.elRef = elRef;
	        this.fullScreenEventService = fullScreenEventService;
	        this.fullScreenService = fullScreenService;
	        this.isFullScreen = false;
	    }
	    FullScreen.prototype.ngOnInit = function () {
	        var _this = this;
	        this.nativeElement = this.fullScreenTarget !== undefined ? this.fullScreenService.getElementBySelector(this.fullScreenTarget) : this.elRef.nativeElement;
	        this.fullScreenChangeListener = this.fullScreenEventService.addListener(function (event) {
	            if (event.target === _this.nativeElement) {
	                _this.isFullScreen = !_this.isFullScreen;
	                _this.fullScreenService.handleFullScreenChange(_this.nativeElement, _this.isFullScreen);
	            }
	        });
	    };
	    FullScreen.prototype.ngOnDestroy = function () {
	        this.fullScreenEventService.removeListener(this.fullScreenChangeListener);
	    };
	    FullScreen.prototype.onClick = function () {
	        this.fullScreenService.request(this.nativeElement);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], FullScreen.prototype, "fullScreenTarget", void 0);
	    __decorate([
	        core_1.HostListener('click'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], FullScreen.prototype, "onClick", null);
	    FullScreen = __decorate([
	        core_1.Directive({
	            selector: '[fullscreen]',
	            providers: [FullScreenDOMService_1.FullScreenDOMService, FullScreenEventService_1.FullScreenEventService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof FullScreenEventService_1.FullScreenEventService !== 'undefined' && FullScreenEventService_1.FullScreenEventService) === 'function' && _b) || Object, (typeof (_c = typeof FullScreenDOMService_1.FullScreenDOMService !== 'undefined' && FullScreenDOMService_1.FullScreenDOMService) === 'function' && _c) || Object])
	    ], FullScreen);
	    return FullScreen;
	    var _a, _b, _c;
	}());
	exports.FullScreen = FullScreen;


/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	/**
	 *
	 * @param document
	 * @param apiComponentArray
	 * @returns {any}
	 */
	function getFullScreenAPIComponent(document, apiComponentArray) {
	    var finalAPIComponent;
	    apiComponentArray.forEach(function (apiComponent) {
	        if (document[apiComponent]) {
	            finalAPIComponent = apiComponent;
	        }
	    });
	    return finalAPIComponent;
	}
	var fullScreenVendorAPI = {
	    request: ['requestFullScreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'],
	    cancel: ['cancelFullScreen', 'exitFullscreen', 'mozCancelFullScreen', 'webkitExitFullscreen', 'msExitFullscreen'],
	    event: ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'MSFullscreenChange']
	};
	var fullScreenService = {
	    request: getFullScreenAPIComponent(document.documentElement, fullScreenVendorAPI.request),
	    cancel: getFullScreenAPIComponent(document, fullScreenVendorAPI.cancel)
	};
	/**
	 * Add event here :
	 * TODO : figure out what would be the best way to do one time setup
	 */
	/**
	 *
	 */
	var FullScreenDOMService = (function () {
	    function FullScreenDOMService(renderer) {
	        this.renderer = renderer;
	    }
	    FullScreenDOMService.prototype.request = function (nativeElement) {
	        return nativeElement[fullScreenService.request]();
	    };
	    FullScreenDOMService.prototype.getElementBySelector = function (selectorString) {
	        var fullScreenTargetArr = document.querySelectorAll(selectorString);
	        return fullScreenTargetArr[0];
	    };
	    FullScreenDOMService.prototype.cancel = function () {
	        return document[fullScreenService.cancel]();
	    };
	    FullScreenDOMService.prototype.isSupported = function () {
	        return fullScreenService.request !== undefined;
	    };
	    FullScreenDOMService.prototype.handleFullScreenChange = function (nativeElement, isFullScreen) {
	        this.renderer.setElementClass(nativeElement, 'fullscreen', isFullScreen);
	    };
	    FullScreenDOMService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _a) || Object])
	    ], FullScreenDOMService);
	    return FullScreenDOMService;
	    var _a;
	}());
	exports.FullScreenDOMService = FullScreenDOMService;


/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var source = Observable_1.Observable.fromEvent(document, 'webkitfullscreenchange');
	var FullScreenEventService = (function () {
	    function FullScreenEventService() {
	    }
	    FullScreenEventService.prototype.addListener = function (listener) {
	        return source.subscribe(listener);
	    };
	    FullScreenEventService.prototype.removeListener = function (listenerSubscription) {
	        listenerSubscription.unsubscribe();
	    };
	    FullScreenEventService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], FullScreenEventService);
	    return FullScreenEventService;
	}());
	exports.FullScreenEventService = FullScreenEventService;


/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var FullScreenDOMService_1 = __webpack_require__(57);
	var FullScreenEventService_1 = __webpack_require__(58);
	var FullScreenIf = (function () {
	    function FullScreenIf(elRef, fullScreenService, fullScreenEventService) {
	        this.elRef = elRef;
	        this.fullScreenService = fullScreenService;
	        this.fullScreenEventService = fullScreenEventService;
	        /**
	         * Internal variable to manage state and check if the current element is in full screen mode or not
	         * @type {boolean}
	         */
	        this.isFullScreen = false;
	        this.fullscreenIf = this.isFullScreen;
	        this.fullscreenIfChange = new core_1.EventEmitter();
	    }
	    FullScreenIf.prototype.ngOnInit = function () {
	        var _this = this;
	        this.fullScreenChangeListener = this.fullScreenEventService.addListener(function (event) {
	            if (event.target === _this.elRef.nativeElement) {
	                _this.isFullScreen = !_this.isFullScreen;
	                _this.fullscreenIfChange.emit(_this.isFullScreen);
	                _this.fullScreenService.handleFullScreenChange(_this.elRef.nativeElement, _this.isFullScreen);
	            }
	        });
	    };
	    FullScreenIf.prototype.ngOnChanges = function (changes) {
	        var value = changes['fullscreenIf'].currentValue;
	        if (value) {
	            this.fullScreenService.request(this.elRef.nativeElement);
	        }
	        else {
	            this.fullScreenService.cancel();
	        }
	    };
	    FullScreenIf.prototype.ngOnDestroy = function () {
	        this.fullScreenEventService.removeListener(this.fullScreenChangeListener);
	    };
	    __decorate([
	        core_1.Input('fullscreenIf'), 
	        __metadata('design:type', Boolean)
	    ], FullScreenIf.prototype, "fullscreenIf", void 0);
	    __decorate([
	        core_1.Output('fullscreenIfChange'), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], FullScreenIf.prototype, "fullscreenIfChange", void 0);
	    FullScreenIf = __decorate([
	        core_1.Directive({
	            selector: '[fullscreenIf]',
	            providers: [FullScreenDOMService_1.FullScreenDOMService, FullScreenEventService_1.FullScreenEventService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object, (typeof (_c = typeof FullScreenDOMService_1.FullScreenDOMService !== 'undefined' && FullScreenDOMService_1.FullScreenDOMService) === 'function' && _c) || Object, (typeof (_d = typeof FullScreenEventService_1.FullScreenEventService !== 'undefined' && FullScreenEventService_1.FullScreenEventService) === 'function' && _d) || Object])
	    ], FullScreenIf);
	    return FullScreenIf;
	    var _a, _b, _c, _d;
	}());
	exports.FullScreenIf = FullScreenIf;


/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var FullScreenIfDemoComponent = (function () {
	    function FullScreenIfDemoComponent() {
	        this.screen = {
	            isFull: false
	        };
	        this.exampleHTML = "\n      <div [fullscreenIf]=\"screen.isFull\" (fullscreenIfChange)=\"screen.isFull=$event\">\n      \n          <input type=\"radio\" [(ngModel)]=\"screen.isFull\" [value]=\"true\" name=\"toggle\" /> Yes\n          <input type=\"radio\" [(ngModel)]=\"screen.isFull\" [value]=\"false\" name=\"toggle\" /> No\n          <input type=\"button\" (click)=\"screen.isFull=!screen.isFull\" value=\"toggle\"/>\n      </div> \n";
	    }
	    __decorate([
	        core_1.Input('screen'), 
	        __metadata('design:type', Object)
	    ], FullScreenIfDemoComponent.prototype, "screen", void 0);
	    __decorate([
	        core_1.Input('exampleHTML'), 
	        __metadata('design:type', Object)
	    ], FullScreenIfDemoComponent.prototype, "exampleHTML", void 0);
	    FullScreenIfDemoComponent = __decorate([
	        core_1.Component({
	            selector: 'basic-app',
	            template: "\n    <h3>Full Screen Target Component</h3>\n    <p>We can toggle the element based on another variable</p>\n    <p>\n      All we need to do is apply the directive [fullscreenIf]=\"&lt;variable&gt;\" && (fullscreenIfChange)=\"&lt;variable&gt;=$event\" \n      to any variable on whose value we want the full screen element\n    </p>\n    <div class=\"main\" [fullscreenIf]=\"screen.isFull\" (fullscreenIfChange)=\"screen.isFull=$event\">\n        <input type=\"radio\" [(ngModel)]=\"screen.isFull\" [value]=\"true\" name=\"toggle\" /> Yes\n        <input type=\"radio\" [(ngModel)]=\"screen.isFull\" [value]=\"false\" name=\"toggle\" /> No\n        <input type=\"button\" (click)=\"screen.isFull=!screen.isFull\" value=\"toggle\"/>\n    </div>\n    <h2>Example Code</h2>\n    <div>Below is example template which can be used. Here screen.isFull is variable present on the parent component.</div>\n    <pre><code class=\"language-javascript\">\n      &lt;div [fullscreenIf]=&quot;screen.isFull&quot; (fullscreenIfChange)=&quot;screen.isFull=$event&quot;&gt;\n          &lt;input type=&quot;radio&quot; [(ngModel)]=&quot;screen.isFull&quot; [value]=&quot;true&quot; name=&quot;toggle&quot; /&gt; Yes\n          &lt;input type=&quot;radio&quot; [(ngModel)]=&quot;screen.isFull&quot; [value]=&quot;false&quot; name=&quot;toggle&quot; /&gt; No\n          &lt;input type=&quot;button&quot; (click)=&quot;screen.isFull=!screen.isFull&quot; value=&quot;toggle&quot;/&gt;\n      &lt;/div&gt;          \n    </code></pre>  \n  ",
	            styles: [
	                "div.main {width:300px;}",
	                "img {height: 100%; display: block; margin:auto}",
	                "div.main.fullscreen {height: 100%; width: 100%}"
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FullScreenIfDemoComponent);
	    return FullScreenIfDemoComponent;
	}());
	exports.FullScreenIfDemoComponent = FullScreenIfDemoComponent;


/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var BasicComponent = (function () {
	    function BasicComponent() {
	        this.isFull = false;
	        this.isFullChange = new core_1.EventEmitter();
	    }
	    BasicComponent.prototype.ngOnChanges = function (changes) {
	        console.log("triggered", changes);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], BasicComponent.prototype, "isFull", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], BasicComponent.prototype, "isFullChange", void 0);
	    BasicComponent = __decorate([
	        core_1.Component({
	            selector: 'basic-app',
	            template: "\n    <h3>Basic Full Screen Component</h3>\n    <p>We can make an element fullscreen on clicking it</p>\n    <p>All we need to do is apply the directive fullscreen directive to it</p>\n    <div class=\"main\" fullscreen>\n      <img src=\"./resources/image.jpg\"/>\n    </div>\n    <h2>Example Code</h2>\n    <div>Below is example of template using the fullscreen directive. Clicking the template makes the element along with it's children fullscreen</div>\n    <pre><code class=\"language-javascript\"> \n&lt;div fullscreen&gt;\n&lt;img src=&quot;./resources/image.jpg&quot;/&gt;\n&lt;/div&gt;\n    </code></pre>\n      ",
	            styles: [
	                ".main {height: 300px; width:300px;}",
	                "img {height: 100%; display: block; margin:auto}",
	                ".fullscreen {height: 100%; width: 100%}"
	            ],
	            changeDetection: core_1.ChangeDetectionStrategy.Default,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BasicComponent);
	    return BasicComponent;
	    var _a;
	}());
	exports.BasicComponent = BasicComponent;


/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var DemoOverviewComponent = (function () {
	    function DemoOverviewComponent() {
	    }
	    DemoOverviewComponent = __decorate([
	        core_1.Component({
	            selector: 'basic-app',
	            template: "\n    <p>Click below links to go to the demo pages directly</p>\n    <ul>\n      <li><a routerLink=\"/basic\" >Basic Demo</a></li>\n      <li><a routerLink=\"/ifdemo\" >Using If Condition</a></li>\n      <li><a routerLink=\"/targetdemo\" >Full Screen based on another Target</a></li>\n    </ul>\n  ",
	            styles: [],
	            changeDetection: core_1.ChangeDetectionStrategy.Default,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DemoOverviewComponent);
	    return DemoOverviewComponent;
	}());
	exports.DemoOverviewComponent = DemoOverviewComponent;


/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var DemoMainComponent = (function () {
	    function DemoMainComponent() {
	    }
	    DemoMainComponent = __decorate([
	        core_1.Component({
	            selector: 'basic-app',
	            template: "\n    <nav>\n       <h3>Angular 2 Full Screen Demo</h3>\n    </nav>\n    <router-outlet></router-outlet> \n  ",
	            styles: [],
	            changeDetection: core_1.ChangeDetectionStrategy.Default,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DemoMainComponent);
	    return DemoMainComponent;
	}());
	exports.DemoMainComponent = DemoMainComponent;


/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var FullScreenTargetDemoComponent = (function () {
	    function FullScreenTargetDemoComponent() {
	        this.isFull = false;
	        this.isFullChange = new core_1.EventEmitter();
	    }
	    FullScreenTargetDemoComponent.prototype.myChange = function (event) {
	        this.isFull = !this.isFull;
	        this.isFullChange.emit(this.isFull);
	    };
	    FullScreenTargetDemoComponent.prototype.ngOnChanges = function (changes) {
	        console.log("triggered", changes);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], FullScreenTargetDemoComponent.prototype, "isFull", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
	    ], FullScreenTargetDemoComponent.prototype, "isFullChange", void 0);
	    FullScreenTargetDemoComponent = __decorate([
	        core_1.Component({
	            selector: 'basic-app',
	            template: "\n    <h3>Full Screen Target Component</h3>\n    <p>We can toggle the element based on another element</p>\n    <p>All we need to do is apply the directive [fullScreenTarget] to any element and pass to it a selector of the element which need to be in fullscreen</p>\n    <p>Below click the button to toggle the image</p>\n    <button [fullScreenTarget]=\"'.my-image'\" fullscreen>FullScreen Element</button>\n    <img class=\"my-image\" src=\"./resources/image.jpg\"/>\n    <h2>Example Code</h2> \n    <div>Below is example of template using the fullscreenTarget direction. Note that the fullscreenTarget is a css selector which points towards the image</div>\n    <pre><code class=\"language-javascript\"> \n&lt;button [fullScreenTarget]=&quot;'.my-image'&quot; fullscreen&gt;FullScreen Element&lt;/button&gt;\n&lt;img class=&quot;my-image&quot; src=&quot;./resources/image.jpg&quot;/&gt;\n    </code></pre>    \n  ",
	            styles: [
	                "img {height: 100px; display: block; margin:auto}",
	                ".fullscreen {height: 100%; width: 100%}"
	            ],
	            changeDetection: core_1.ChangeDetectionStrategy.Default,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FullScreenTargetDemoComponent);
	    return FullScreenTargetDemoComponent;
	    var _a;
	}());
	exports.FullScreenTargetDemoComponent = FullScreenTargetDemoComponent;


/***/ }

});
//# sourceMappingURL=index.map