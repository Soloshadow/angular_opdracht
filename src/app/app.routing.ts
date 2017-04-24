/**
 * Created by Sonny on 4/11/2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MovieComponent} from './component/movies/movie.component';
import {AppComponent} from './app.component';
import {MovieDetailComponent} from './component/movies/movie-detail.component';
import {HomeComponent} from './component/home/home.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'movies',
        component: MovieComponent
    },
    {
        path: 'movie-details/:id',
        component: MovieDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);