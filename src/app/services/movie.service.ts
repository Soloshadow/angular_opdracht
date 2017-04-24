/**
 * Created by Sonny on 4/11/2017.
 */
import  {Injectable} from '@angular/core';
import  {Http, Headers, RequestOptions} from '@angular/http';
import  'rxjs/add/operator/map';


var movieUrl = 'http://145.24.222.227:8000/api/movies/';

@Injectable()
export class MovieService{
        constructor(private http: Http){}

    getMovies() {
        return this.http.get(movieUrl)
            .map(res => res.json());
    }

    saveMovie(movie: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(movieUrl, JSON.stringify(movie), {headers: headers})
            .map(res => res.json());
    }

    deleteMovie(id: any) {
        return this.http.delete(movieUrl + id)
    }

    singleMovie(id: any) {
        return this.http.get(movieUrl + id)
            .map(res => res.json());
    }

    editMovie(movie: any, id: number) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.put(movieUrl + id, JSON.stringify(movie), options)
            .map(res => res.json());
    }
}