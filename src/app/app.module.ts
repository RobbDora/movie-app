import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

//components
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AppnavbarComponent } from './appnavbar/appnavbar.component';
import { MoviethumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MovieFavoritesComponent } from './movie-favorites/movie-favorites.component';

//services
import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppnavbarComponent,
    MovieDetailComponent,
    MoviethumbnailComponent,
    MovieFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
