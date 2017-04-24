/**
 * Created by Sonny on 4/11/2017.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';

@Component({
    moduleId: module.id,
    selector: 'movie-detail',
    templateUrl: 'movie-detail.component.html',
    providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
    private sub: any;
    private movieId: any;

    title: string;
    date: string;
    genre: string;
    director: string;
    summary: string;


    constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.movieId = params['id'];
        });
        this.getMovie();
    }

    getMovie() {
        this.movieService.singleMovie(this.movieId).subscribe(movie => {
            this.title = movie.title;
            this.date = movie.date;
            this.genre = movie.genre;
            this.director = movie.director;
            this.summary = movie.summary;

        });
    }

    editMovie() {
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
    }

}