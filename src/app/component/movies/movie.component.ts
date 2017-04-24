/**
 * Created by Sonny on 4/11/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Movies} from '../../services/movies';
import {MovieService} from "../../services/movie.service";

@Component({
    moduleId: module.id,
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['movie.component.css'],
    providers: [MovieService]
})
export class MovieComponent implements OnInit {

    movies: any[] = [];


    constructor(private movieService: MovieService) {

    }

    ngOnInit() {
        this.movies = [];
        this.getResults();

    }

    clearResults() {
        this.movies = [];
    }

    getResults() {
        this.movieService.getMovies().subscribe(movies => {
            this.movies = movies.items;
        })
    }

    addMovie(event: any, movieTitle: any, movieDate: any, movieGenre: any, movieDirector: any, movieSummary: any) {
        var result;
        var newMovie = {
            title: movieTitle.value,
            date: movieDate.value,
            genre: movieGenre.value,
            director: movieDirector.value,
            summary: movieSummary.value
        };

        result = this.movieService.saveMovie(newMovie);
        result.subscribe(x => {
            this.movies.push(newMovie);
            movieTitle.value = '';
            movieDate.value = '';
            movieGenre.value = '';
            movieDirector.value = '';
            movieSummary.value = '';
        })
    };


    deleteMovie(movie: any) {
        var movies = this.movies;
        this.movieService.deleteMovie(movie._id)
            .subscribe(data => {
                for (var i = 0; i < movies.length; i++) {
                    if (movies[i]._id == movie._id) {
                        movies.splice(i, 1);
                    }
                }
            })
    }
}
