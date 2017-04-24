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
var movie_service_1 = require("../../services/movie.service");
var MovieComponent = (function () {
    function MovieComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
    }
    MovieComponent.prototype.ngOnInit = function () {
        this.movies = [];
        this.getResults();
    };
    MovieComponent.prototype.clearResults = function () {
        this.movies = [];
    };
    MovieComponent.prototype.getResults = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (movies) {
            _this.movies = movies.items;
        });
    };
    MovieComponent.prototype.addMovie = function (event, movieTitle, movieDate, movieGenre, movieDirector, movieSummary) {
        var _this = this;
        var result;
        var newMovie = {
            title: movieTitle.value,
            date: movieDate.value,
            genre: movieGenre.value,
            director: movieDirector.value,
            summary: movieSummary.value
        };
        result = this.movieService.saveMovie(newMovie);
        result.subscribe(function (x) {
            _this.movies.push(newMovie);
            movieTitle.value = '';
            movieDate.value = '';
            movieGenre.value = '';
            movieDirector.value = '';
            movieSummary.value = '';
        });
    };
    ;
    MovieComponent.prototype.deleteMovie = function (movie) {
        var movies = this.movies;
        this.movieService.deleteMovie(movie._id)
            .subscribe(function (data) {
            for (var i = 0; i < movies.length; i++) {
                if (movies[i]._id == movie._id) {
                    movies.splice(i, 1);
                }
            }
        });
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'movies',
        templateUrl: 'movies.component.html',
        styleUrls: ['movie.component.css'],
        providers: [movie_service_1.MovieService]
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieComponent);
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map