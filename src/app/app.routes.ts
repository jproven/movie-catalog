import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { FavouritesListComponent } from './sections/favourites-list/favourites-list.component';
import { SearchComponent } from './sections/search/search.component';
import { CongratsComponent } from './sections/congrats/congrats.component';
import { Page404Component } from './sections/page404/page404.component';
import { DetailsComponent } from './sections/favourites-list/favourite-card/details/details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'favouritesList', component: FavouritesListComponent },
    { path: 'favouritesDetails/:id', component: DetailsComponent },
    { path: 'search', component: SearchComponent },
    { path: 'congrats', component: CongratsComponent },
    { path: "**", component: Page404Component }
]

