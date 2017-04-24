"use strict";
var router_1 = require("@angular/router");
var movie_component_1 = require("./component/movies/movie.component");
var movie_detail_component_1 = require("./component/movies/movie-detail.component");
var home_component_1 = require("./component/home/home.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'movies',
        component: movie_component_1.MovieComponent
    },
    {
        path: 'movie-details/:id',
        component: movie_detail_component_1.MovieDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map