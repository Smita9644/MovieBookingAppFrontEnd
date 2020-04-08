import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddMovieService } from '../add-movie.service';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  SERVER_URL = "http://localhost:8046/upload";
  uploadForm: FormGroup; 
  
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient,private router: Router,private service:AddMovieService) { }
  image:any;
  name:"";
  category:"";
  rating:0;
  format:"";
  language:"";
  leadActor:"";
  ngOnInit() {

  }
  onSelectImage(event) {
    console.log(event);
    this.image = event.target.files[0];
}
onSave() {
   
    const observable=this.service.upload(this.image,this.name,this.category,this.rating,this.format,this.language,this.leadActor);
    observable.subscribe(Response=>{
      const result:any=Response;
      alert("added");   
      //   console.log(Response);
        this.router.navigate(['/get']);
    })
  }

}
