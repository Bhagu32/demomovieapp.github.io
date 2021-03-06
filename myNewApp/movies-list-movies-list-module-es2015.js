(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movies-list-movies-list-module"],{

/***/ "./src/app/movies-list/movies-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.ts ***!
  \******************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _AppService_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppService/movie.service */ "./src/app/AppService/movie.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["./movies", a1]; };
function MoviesListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieindex_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, movieindex_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.url, "/", movieindex_r7.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movieindex_r7.title);
} }
function MoviesListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieindex_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, movieindex_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r1.url, "/", movieindex_r8.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movieindex_r8.title);
} }
function MoviesListComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieindex_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, movieindex_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r2.url, "/", movieindex_r9.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movieindex_r9.title);
} }
function MoviesListComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieindex_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, movieindex_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r3.url, "/", movieindex_r10.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movieindex_r10.title);
} }
function MoviesListComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieindex_r11 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, movieindex_r11.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r4.url, "/", movieindex_r11.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movieindex_r11.title);
} }
function MoviesListComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieindex_r12 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, movieindex_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r5.url, "/", movieindex_r12.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movieindex_r12.title);
} }
function MoviesListComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieindex_r13 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, movieindex_r13.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r6.url, "/", movieindex_r13.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movieindex_r13.title);
} }
class MoviesListComponent {
    constructor(movieservice) {
        this.movieservice = movieservice;
        //public pageSizes = true;
        this.url = "https://image.tmdb.org/t/p/original";
        this.pageSize = 15;
        this.previousNext = true;
        this.buttonCount = 5;
        this.allowUnsort = true;
        this.actionmovietitle = "";
        this.AdventureTitle = "";
        this.AnimationTitle = "";
    }
    ngOnInit() {
        this.getMoviesList();
        // this.getMoviesDetails()
    }
    getMoviesList() {
        this.movieservice.getMoviesList().subscribe(data => {
            this.MoviesList = data;
            this.gridApproachData = data['genres'];
            for (let i = 0; i < this.gridApproachData.length; i++) {
                this.gernid = this.gridApproachData[i]['id'];
                this.getMoviesDetails(this.gernid, this.gridApproachData[i]['name']);
            }
        });
    }
    getMoviesDetails(id, name) {
        var idDto = {
            id: id,
            name: name
        };
        this.movieservice.getMoviesDetails(idDto).subscribe(data => {
            this.MoviesDetails = data;
            if (idDto['name'] == "Action") {
                this.actionmovietitle = idDto['name'];
                this.gridMoviesDetailsData = data['results'];
            }
            else if (idDto['name'] == "Adventure") {
                this.AdventureTitle = idDto['name'];
                this.AdventureMoviesDetailsData = data['results'];
            }
            else if (idDto['name'] == "Animation") {
                this.AnimationTitle = idDto['name'];
                this.AnimationMoviesDetailsData = data['results'];
            }
            else if (idDto['name'] == "Comedy") {
                this.ComedyTitle = idDto['name'];
                this.ComedyMoviesDetailsData = data['results'];
            }
            else if (idDto['name'] == "Crime") {
                this.CrimeTitle = idDto['name'];
                this.CrimeMoviesDetailsData = data['results'];
            }
            else if (idDto['name'] == "Documentary") {
                this.DocumentaryTitle = idDto['name'];
                this.DocumentaryMoviesDetailsData = data['results'];
            }
            else if (idDto['name'] == "Drama") {
                this.DramaTitle = idDto['name'];
                this.DramaMoviesDetailsData = data['results'];
            }
        });
    }
}
MoviesListComponent.ɵfac = function MoviesListComponent_Factory(t) { return new (t || MoviesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_AppService_movie_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
MoviesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesListComponent, selectors: [["app-movies-list"]], decls: 39, vars: 14, consts: [[1, "dark-mode"], [1, "container-fluid", "p-2"], [1, "movie-wrapper"], [1, "movie-panel", "inner-style-3", "d-flex"], [4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem", 3, "routerLink"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"]], template: function MoviesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MoviesListComponent_div_8_Template, 6, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MoviesListComponent_div_13_Template, 6, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MoviesListComponent_div_18_Template, 6, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MoviesListComponent_div_23_Template, 6, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MoviesListComponent_div_28_Template, 6, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MoviesListComponent_div_33_Template, 6, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MoviesListComponent_div_38_Template, 6, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actionmovietitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gridMoviesDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.AdventureTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AdventureMoviesDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.AnimationTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AnimationMoviesDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ComedyTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ComedyMoviesDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CrimeTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.CrimeMoviesDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.DocumentaryTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.DocumentaryMoviesDetailsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.DramaTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.DramaMoviesDetailsData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-wrapper[_ngcontent-%COMP%] {\n  background: #212121;\n  padding: 0.5rem;\n  margin: 0.5rem;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-wrapper[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fff !important;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.87rem;\n  color: #fff !important;\n  line-height: 1;\n  margin-bottom: 0px;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #000;\n  margin: 0.25rem;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-panel[_ngcontent-%COMP%] {\n  max-width: 1300px;\n  overflow-x: auto;\n  scrollbar-width: thin !important;\n  overflow-y: hidden;\n  cursor: pointer;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-panel.inner-style-3[_ngcontent-%COMP%]::-webkit-scrollbar, .dark-mode[_ngcontent-%COMP%]   .wizard--inner.inner-style-3[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px !important;\n  background-color: rgba(20, 146, 230, 0.25);\n}\n\n.dark-mode[_ngcontent-%COMP%]   .movie-panel.inner-style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .dark-mode[_ngcontent-%COMP%]   .wizard--inner.inner-style-3[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #1492E6;\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent) !important;\n}\n\n.dark-mode[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%], .dark-mode[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%] {\n  height: 350px;\n  border-top-left-radius: calc(.25rem - 1px);\n  border-top-right-radius: calc(.25rem - 1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzLWxpc3QvbW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtBQUNKOztBQUtJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZOOztBQUlJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBRk47O0FBSUk7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNGLGtCQUFBO0FBRko7O0FBSUk7RUFDRSxzQkFBQTtFQUNGLGVBQUE7QUFGSjs7QUFLSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUhOOztBQU1NO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtBQUpOOztBQU9NO0VBQ0EseUJBQUE7RUFDQSxxTkFBQTtBQUxOOztBQU9NO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7QUFMUiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy1saXN0L21vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZGFyay1tb2RlXHJcbiAge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIC8vIGhlaWdodDogMTAwdmg7XHJcbiAgICAubW92aWUtd3JhcHBlcntcclxuICAgICAgYmFja2dyb3VuZDogIzIxMjEyMTtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIH1cclxuICAgIC5tb3ZpZS13cmFwcGVyIGg2e1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubW92aWUtd3JhcHBlciBoNXtcclxuICAgICAgZm9udC1zaXplOiAwLjg3cmVtO1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luOiAwLjI1cmVtO1xyXG4gICAgfVxyXG4gXHJcbiAgICAubW92aWUtcGFuZWwge1xyXG4gICAgICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubW92aWUtcGFuZWwuaW5uZXItc3R5bGUtMzo6LXdlYmtpdC1zY3JvbGxiYXIsIC53aXphcmQtLWlubmVyLmlubmVyLXN0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgaGVpZ2h0OiA2cHggIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMTQ2LCAyMzAsIDAuMjUpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubW92aWUtcGFuZWwuaW5uZXItc3R5bGUtMzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsIC53aXphcmQtLWlubmVyLmlubmVyLXN0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0OTJFNjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcscmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMikgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtaW1nLCAuY2FyZC1pbWctdG9wIHtcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGNhbGMoLjI1cmVtIC0gMXB4KTtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsYyguMjVyZW0gLSAxcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies-list',
                templateUrl: './movies-list.component.html',
                styleUrls: ['./movies-list.component.scss']
            }]
    }], function () { return [{ type: _AppService_movie_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movies-list/movies-list.module.ts":
/*!***************************************************!*\
  !*** ./src/app/movies-list/movies-list.module.ts ***!
  \***************************************************/
/*! exports provided: MoviesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListModule", function() { return MoviesListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _movie_item_movie_item_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie-item/movie-item.module */ "./src/app/movie-item/movie-item.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies-list.routing.module */ "./src/app/movies-list/movies-list.routing.module.ts");
/* harmony import */ var _movies_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies-list.component */ "./src/app/movies-list/movies-list.component.ts");
// import { NgModule } from '@angular/core';
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







class MoviesListModule {
}
MoviesListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesListModule });
MoviesListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesListModule_Factory(t) { return new (t || MoviesListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["MoviesListRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _movie_item_movie_item_module__WEBPACK_IMPORTED_MODULE_2__["MovieitemModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesListModule, { declarations: [_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["MoviesListRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _movie_item_movie_item_module__WEBPACK_IMPORTED_MODULE_2__["MovieitemModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _movies_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["MoviesListRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _movie_item_movie_item_module__WEBPACK_IMPORTED_MODULE_2__["MovieitemModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/movies-list/movies-list.routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/movies-list/movies-list.routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MoviesListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListRoutingModule", function() { return MoviesListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _movies_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-list.component */ "./src/app/movies-list/movies-list.component.ts");





const routes = [{
        path: '',
        component: _movies_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesListComponent"],
        data: {
            title: 'Movies List'
        }
    },];
class MoviesListRoutingModule {
}
MoviesListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesListRoutingModule });
MoviesListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesListRoutingModule_Factory(t) { return new (t || MoviesListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=movies-list-movies-list-module-es2015.js.map