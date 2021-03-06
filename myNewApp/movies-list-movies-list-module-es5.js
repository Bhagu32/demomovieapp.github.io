(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movies-list-movies-list-module"], {
    /***/
    "./src/app/movies-list/movies-list.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/movies-list/movies-list.component.ts ***!
      \******************************************************/

    /*! exports provided: MoviesListComponent */

    /***/
    function srcAppMoviesListMoviesListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function () {
        return MoviesListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _AppService_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../AppService/movie.service */
      "./src/app/AppService/movie.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0(a1) {
        return ["./movies", a1];
      };

      function MoviesListComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var movieindex_r7 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, movieindex_r7.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("src", "", ctx_r0.url, "/", movieindex_r7.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](movieindex_r7.title);
        }
      }

      function MoviesListComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var movieindex_r8 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, movieindex_r8.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("src", "", ctx_r1.url, "/", movieindex_r8.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](movieindex_r8.title);
        }
      }

      function MoviesListComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var movieindex_r9 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, movieindex_r9.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("src", "", ctx_r2.url, "/", movieindex_r9.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](movieindex_r9.title);
        }
      }

      function MoviesListComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var movieindex_r10 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, movieindex_r10.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("src", "", ctx_r3.url, "/", movieindex_r10.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](movieindex_r10.title);
        }
      }

      function MoviesListComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var movieindex_r11 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, movieindex_r11.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("src", "", ctx_r4.url, "/", movieindex_r11.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](movieindex_r11.title);
        }
      }

      function MoviesListComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var movieindex_r12 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, movieindex_r12.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("src", "", ctx_r5.url, "/", movieindex_r12.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](movieindex_r12.title);
        }
      }

      function MoviesListComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var movieindex_r13 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, movieindex_r13.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate2"]("src", "", ctx_r6.url, "/", movieindex_r13.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](movieindex_r13.title);
        }
      }

      var MoviesListComponent = /*#__PURE__*/function () {
        function MoviesListComponent(movieservice) {
          _classCallCheck(this, MoviesListComponent);

          this.movieservice = movieservice; //public pageSizes = true;

          this.url = "https://image.tmdb.org/t/p/original";
          this.pageSize = 15;
          this.previousNext = true;
          this.buttonCount = 5;
          this.allowUnsort = true;
          this.actionmovietitle = "";
          this.AdventureTitle = "";
          this.AnimationTitle = "";
        }

        _createClass(MoviesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMoviesList(); // this.getMoviesDetails()
          }
        }, {
          key: "getMoviesList",
          value: function getMoviesList() {
            var _this = this;

            this.movieservice.getMoviesList().subscribe(function (data) {
              _this.MoviesList = data;
              _this.gridApproachData = data['genres'];

              for (var i = 0; i < _this.gridApproachData.length; i++) {
                _this.gernid = _this.gridApproachData[i]['id'];

                _this.getMoviesDetails(_this.gernid, _this.gridApproachData[i]['name']);
              }
            });
          }
        }, {
          key: "getMoviesDetails",
          value: function getMoviesDetails(id, name) {
            var _this2 = this;

            var idDto = {
              id: id,
              name: name
            };
            this.movieservice.getMoviesDetails(idDto).subscribe(function (data) {
              _this2.MoviesDetails = data;

              if (idDto['name'] == "Action") {
                _this2.actionmovietitle = idDto['name'];
                _this2.gridMoviesDetailsData = data['results'];
              } else if (idDto['name'] == "Adventure") {
                _this2.AdventureTitle = idDto['name'];
                _this2.AdventureMoviesDetailsData = data['results'];
              } else if (idDto['name'] == "Animation") {
                _this2.AnimationTitle = idDto['name'];
                _this2.AnimationMoviesDetailsData = data['results'];
              } else if (idDto['name'] == "Comedy") {
                _this2.ComedyTitle = idDto['name'];
                _this2.ComedyMoviesDetailsData = data['results'];
              } else if (idDto['name'] == "Crime") {
                _this2.CrimeTitle = idDto['name'];
                _this2.CrimeMoviesDetailsData = data['results'];
              } else if (idDto['name'] == "Documentary") {
                _this2.DocumentaryTitle = idDto['name'];
                _this2.DocumentaryMoviesDetailsData = data['results'];
              } else if (idDto['name'] == "Drama") {
                _this2.DramaTitle = idDto['name'];
                _this2.DramaMoviesDetailsData = data['results'];
              }
            });
          }
        }]);

        return MoviesListComponent;
      }();

      MoviesListComponent.??fac = function MoviesListComponent_Factory(t) {
        return new (t || MoviesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_AppService_movie_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]));
      };

      MoviesListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MoviesListComponent,
        selectors: [["app-movies-list"]],
        decls: 39,
        vars: 14,
        consts: [[1, "dark-mode"], [1, "container-fluid", "p-2"], [1, "movie-wrapper"], [1, "movie-panel", "inner-style-3", "d-flex"], [4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem", 3, "routerLink"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"]],
        template: function MoviesListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "body", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, MoviesListComponent_div_8_Template, 6, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, MoviesListComponent_div_13_Template, 6, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, MoviesListComponent_div_18_Template, 6, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, MoviesListComponent_div_23_Template, 6, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, MoviesListComponent_div_28_Template, 6, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, MoviesListComponent_div_33_Template, 6, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, MoviesListComponent_div_38_Template, 6, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.actionmovietitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.gridMoviesDetailsData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.AdventureTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.AdventureMoviesDetailsData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.AnimationTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.AnimationMoviesDetailsData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.ComedyTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.ComedyMoviesDetailsData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.CrimeTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.CrimeMoviesDetailsData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.DocumentaryTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.DocumentaryMoviesDetailsData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.DramaTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.DramaMoviesDetailsData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-wrapper[_ngcontent-%COMP%] {\n  background: #212121;\n  padding: 0.5rem;\n  margin: 0.5rem;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-wrapper[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fff !important;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.87rem;\n  color: #fff !important;\n  line-height: 1;\n  margin-bottom: 0px;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #000;\n  margin: 0.25rem;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-panel[_ngcontent-%COMP%] {\n  max-width: 1300px;\n  overflow-x: auto;\n  scrollbar-width: thin !important;\n  overflow-y: hidden;\n  cursor: pointer;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-panel.inner-style-3[_ngcontent-%COMP%]::-webkit-scrollbar, .dark-mode[_ngcontent-%COMP%]   .wizard--inner.inner-style-3[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px !important;\n  background-color: rgba(20, 146, 230, 0.25);\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-panel.inner-style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .dark-mode[_ngcontent-%COMP%]   .wizard--inner.inner-style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #1492E6;\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent) !important;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%], .dark-mode[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  height: 350px;\n  border-top-left-radius: calc(.25rem - 1px);\n  border-top-right-radius: calc(.25rem - 1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzLWxpc3QvbW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUtJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZOOztBQUlJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBRk47O0FBSUk7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNGLGtCQUFBO0FBRko7O0FBSUk7RUFDRSxzQkFBQTtFQUNGLGVBQUE7QUFGSjs7QUFLSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUhOOztBQU1NO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtBQUpOOztBQU9NO0VBQ0EseUJBQUE7RUFDQSxxTkFBQTtBQUxOOztBQU9NO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7QUFMUiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy1saXN0L21vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZGFyay1tb2RlXHJcbiAge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIC8vIGhlaWdodDogMTAwdmg7XHJcbiAgICAubW92aWUtd3JhcHBlcntcclxuICAgICAgYmFja2dyb3VuZDogIzIxMjEyMTtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIH1cclxuICAgIC5tb3ZpZS13cmFwcGVyIGg2e1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubW92aWUtd3JhcHBlciBoNXtcclxuICAgICAgZm9udC1zaXplOiAwLjg3cmVtO1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luOiAwLjI1cmVtO1xyXG4gICAgfVxyXG4gXHJcbiAgICAubW92aWUtcGFuZWwge1xyXG4gICAgICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubW92aWUtcGFuZWwuaW5uZXItc3R5bGUtMzo6LXdlYmtpdC1zY3JvbGxiYXIsIC53aXphcmQtLWlubmVyLmlubmVyLXN0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgaGVpZ2h0OiA2cHggIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMTQ2LCAyMzAsIDAuMjUpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubW92aWUtcGFuZWwuaW5uZXItc3R5bGUtMzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsIC53aXphcmQtLWlubmVyLmlubmVyLXN0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0OTJFNjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcscmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtaW1nLCAuY2FyZC1pbWctdG9wIHtcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGNhbGMoLjI1cmVtIC0gMXB4KTtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsYyguMjVyZW0gLSAxcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MoviesListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-movies-list',
            templateUrl: './movies-list.component.html',
            styleUrls: ['./movies-list.component.scss']
          }]
        }], function () {
          return [{
            type: _AppService_movie_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/movies-list/movies-list.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/movies-list/movies-list.module.ts ***!
      \***************************************************/

    /*! exports provided: MoviesListModule */

    /***/
    function srcAppMoviesListMoviesListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MoviesListModule", function () {
        return MoviesListModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _movie_item_movie_item_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../movie-item/movie-item.module */
      "./src/app/movie-item/movie-item.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./movies-list.routing.module */
      "./src/app/movies-list/movies-list.routing.module.ts");
      /* harmony import */


      var _movies_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./movies-list.component */
      "./src/app/movies-list/movies-list.component.ts"); // import { NgModule } from '@angular/core';
      // import { CommonModule } from '@angular/common';
      // // import { BrowserModule } from '@angular/platform-browser';
      // import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
      // import { HttpClientModule } from '@angular/common/http';
      // //import { GridModule } from '@progress/kendo-angular-grid';
      // import { MoviesListComponent } from './movies-list.component';
      // import { MoviesService } from '../AppService/northwind.service';
      // import { MoviesListRoutingModule } from './movies-list.routing.module';
      // @NgModule({
      //   declarations: [MoviesListComponent],
      //   imports: [
      //     CommonModule, BrowserAnimationsModule,  HttpClientModule, MoviesListRoutingModule
      //   ],
      //   providers: [MoviesService ],
      //   bootstrap: []
      // })
      // export class MoviesListModule { }


      var MoviesListModule = function MoviesListModule() {
        _classCallCheck(this, MoviesListModule);
      };

      MoviesListModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: MoviesListModule
      });
      MoviesListModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function MoviesListModule_Factory(t) {
          return new (t || MoviesListModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["MoviesListRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _movie_item_movie_item_module__WEBPACK_IMPORTED_MODULE_2__["MovieitemModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MoviesListModule, {
          declarations: [_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["MoviesListRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _movie_item_movie_item_module__WEBPACK_IMPORTED_MODULE_2__["MovieitemModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MoviesListModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["MoviesListRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _movie_item_movie_item_module__WEBPACK_IMPORTED_MODULE_2__["MovieitemModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/movies-list/movies-list.routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/movies-list/movies-list.routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: MoviesListRoutingModule */

    /***/
    function srcAppMoviesListMoviesListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MoviesListRoutingModule", function () {
        return MoviesListRoutingModule;
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


      var _movies_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./movies-list.component */
      "./src/app/movies-list/movies-list.component.ts");

      var routes = [{
        path: '',
        component: _movies_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesListComponent"],
        data: {
          title: 'Movies List'
        }
      }];

      var MoviesListRoutingModule = function MoviesListRoutingModule() {
        _classCallCheck(this, MoviesListRoutingModule);
      };

      MoviesListRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: MoviesListRoutingModule
      });
      MoviesListRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function MoviesListRoutingModule_Factory(t) {
          return new (t || MoviesListRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MoviesListRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MoviesListRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=movies-list-movies-list-module-es5.js.map