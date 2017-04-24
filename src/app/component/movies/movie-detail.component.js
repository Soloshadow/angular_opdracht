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
/**
 * Created by Sonny on 4/11/2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var movie_service_1 = require("../../services/movie.service");
var MovieDetailComponent = (function () {
    function MovieDetailComponent(movieService, route, router) {
        this.movieService = movieService;
        this.route = route;
        this.router = router;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.movieId = params['id'];
        });
        this.getMovie();
    };
    MovieDetailComponent.prototype.getMovie = function () {
        var _this = this;
        this.movieService.singleMovie(this.movieId).subscribe(function (movie) {
            _this.title = movie.title;
            _this.date = movie.date;
            _this.genre = movie.genre;
            _this.director = movie.director;
            _this.summary = movie.summary;
        });
    };
    MovieDetailComponent.prototype.editMovie = function () {
        var editedMovie = {
            title: this.title,
            date: this.date,
            genre: this.genre,
            director: this.director,
            summary: this.summary,
        };
        var res = this.movieService.editMovie(editedMovie, this.movieId);
        res.subscribe();
        this.router.navigate(['/']); // Redirect
    };
    return MovieDetailComponent;
}());
MovieDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'movie-detail',
        templateUrl: 'movie-detail.component.html',
        providers: [movie_service_1.MovieService]
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService, router_1.ActivatedRoute, router_1.Router])
], MovieDetailComponent);
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map