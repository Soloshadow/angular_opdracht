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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var movieUrl = 'http://145.24.222.227:8000/api/movies/';
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get(movieUrl)
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.saveMovie = function (movie) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(movieUrl, JSON.stringify(movie), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.deleteMovie = function (id) {
        return this.http.delete(movieUrl + id);
    };
    MovieService.prototype.singleMovie = function (id) {
        return this.http.get(movieUrl + id)
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.editMovie = function (movie, id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(movieUrl + id, JSON.stringify(movie), options)
            .map(function (res) { return res.json(); });
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map