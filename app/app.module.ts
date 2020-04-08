import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { GetAllMoviesComponent } from './get-all-movies/get-all-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AboutShowDetailsComponent } from './about-show-details/about-show-details.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectSeatComponent } from './select-seat/select-seat.component';
@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    GetAllMoviesComponent,
    MovieDetailsComponent,
    AboutShowDetailsComponent,
    UserSignUpComponent,
    UserLoginComponent,
    SelectSeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'upload' ,component:AddMovieComponent},
      {path:'get',component:GetAllMoviesComponent},
      {path:'confirm',component:MovieDetailsComponent},
      {path:'seat',component:SelectSeatComponent},
      {path:'userlogin',component:UserLoginComponent},
      {path:'signup',component:UserSignUpComponent},
      {path:'aboutShow',component:AboutShowDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
