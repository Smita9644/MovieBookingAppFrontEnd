import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddMovieService {
  baseUrl = 'http://localhost:8046';
  constructor(private http:HttpClient) { }

  upload(file:any,name:string,category:string,rating:any,format:string,language:string,leadActor:string)
  {
    const formData = new FormData();
        formData.append('imageFile', file);
        formData.append('name', name);
        formData.append('category', category);
        formData.append('rating', '' + rating);
        formData.append('format', format);
        formData.append('language', language);
        formData.append('leadActor', leadActor);
        return this.http.post(this.baseUrl + '/upload', formData);
        
      
  }
}
