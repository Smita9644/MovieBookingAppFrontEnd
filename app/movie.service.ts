import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = 'http://localhost:8046';
  selected:number[];
  constructor(private http:HttpClient) { }

      getmovies()
      {
        
        return (this.http.get(this.baseUrl+'/movies'));
      }
      getMovie(id)
      {
        return this.http.get(this.baseUrl+"/movie/"+id);
      }

      getAllCategory()
      {
        return (this.http.get(this.baseUrl+'/category'));
      
      }

      getAlllanguage()
      {
        return (this.http.get(this.baseUrl+'/language'));
      
      }
      getAllFormat()
      {
        return (this.http.get(this.baseUrl+'/format'));
      
      }
      getAllActionMovie(category)
      {
        return this.http.get(this.baseUrl+"/bycategory?category="+category);
      }
      getAllMoviesOfSelectedLanguage(language)
      {
        return this.http.get(this.baseUrl+"/bylanguage?language="+language);
      }
      getAllMoviesOfSelectedformat(format)
      {
        return this.http.get(this.baseUrl+"/byformat?format="+format);
      }

      getAllMoviesOfSelectedType(category,language,format)
      {
        return this.http.get(this.baseUrl+"/byall?format="+format+"&category="+category+"&language="+language);
      }

      getAllMoviesOfSelectedCategoryAndLanguage(category,language)
      {
        return this.http.get(this.baseUrl+"/bycategoryLanguage?category="+category+"&language="+language);
      }
      getAllMoviesOfSelectedCategoryAndFormat(category,format)
      {
        return this.http.get(this.baseUrl+"/bycategoryFormat?category="+category+"&format="+format);
      }

      getAllMoviesOfSelectedFormatAndLanguage(format,language)
      {
        return this.http.get(this.baseUrl+"/byFormatLanguage?language="+language+"&format="+format);
      }

      getAllShowsOfGivenMovie(id)
      {
        return this.http.get(this.baseUrl+"/AllShowsOfMovie/"+id);
      }

      getAvailableSeatsOfSelectedScreen(screen_id)
      {
        return this.http.get(this.baseUrl+"/AllShowsOfMovie?Screen_id="+screen_id);
      }

      getScrrenDetailsById(id)
      {
        return this.http.get(this.baseUrl+"/getScreenDetails/"+id);
      }

      getStatusOfSeatOfSelectedScreen(screenId)
      {
        return this.http.get(this.baseUrl+"/getSeatStatus/"+screenId);
      }

      bookTheMovie(UserId,screenId,Seats)
      {
        // this.selected= Seats.map(function (x) { 
        //   return parseInt(x, 10); 
        // });
        // console.log(this.selected);
        
        return this.http.get(this.baseUrl+"/book?userId="+UserId+"&screenId="+screenId+"&SeatList="+Seats);

      }
}
