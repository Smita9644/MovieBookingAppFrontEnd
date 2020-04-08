import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-get-all-movies',
  templateUrl: './get-all-movies.component.html',
  styleUrls: ['./get-all-movies.component.css']
})
export class GetAllMoviesComponent implements OnInit {
  Movielist:any[];
  categoryList:any[];
  languageList:any[];
  formatList:any[];
  customer:"";
  category:"undefined";
  language:"undefined";
 format:"undefined";
  constructor(private service:MovieService,private router:Router) {
    this.getMovielist();
    this.getAllCAtegory();
    this.getAllLanguage();
    this.getAllFormat();
    
  // console.log(this.Movielist[0]);
 //   console.log(this.Movielist); 
 this.service = service;
        this.getMovielist();
   
   }
  
  ngOnInit() {
    this.getMovielist();
  }

  getMovielist()
     {
      const observable = this.service.getmovies();
      observable.subscribe(response =>{
        const result:any = response;
       this.Movielist=result;
        // console.log(this.Movielist);
     })
  }
  getmoviesBySelectedFormat(format)
  {
    const observable = this.service.getAllMoviesOfSelectedformat(format);
    observable.subscribe(response =>{
      const result:any = response;
     this.Movielist=result;
      // console.log(this.Movielist);
   })
  }
  getmoviesBySelectedLanguage(language)
  {
    const observable = this.service.getAllMoviesOfSelectedLanguage(language);
    observable.subscribe(response =>{
      const result:any = response;
     this.Movielist=result;
      // console.log(this.Movielist);
   })
  }
getAllActionMovie(category)
{
  const observable = this.service.getAllActionMovie(category);
      observable.subscribe(response =>{
        const result:any = response;
       this.Movielist=result;
         console.log(this.Movielist);
     })
}
  getAllCAtegory()
  {
    const observable =this.service.getAllCategory();
    observable.subscribe(response =>{
      const result:any = response;
     this.categoryList=result;
      // console.log(this.categoryList);
   })
  }
 
  getAllLanguage()
  {
    const observable=this.service.getAlllanguage();
    observable.subscribe(Response=>{
      const result:any=Response;
      this.languageList=result;
      // console.log(this.categoryList);
    })
  }
   
  getAllFormat()
  {
    const observable=this.service.getAllFormat();
    observable.subscribe(Response=>{
      const result:any=Response;
      this.formatList=result;
      // console.log(this.formatList);
    })
  }

  getAllMoviesOfSelecteCategoryAndLanguage(category,language)
   {
    const observable=this.service.getAllMoviesOfSelectedCategoryAndLanguage(category,language);
    observable.subscribe(Response=>{
      const result:any=Response;
      this.Movielist=result;
      // console.log(this.formatList);
    })
   }
   
   getAllMoviesOfSelecteCategoryAndFormat(category,format)
   {
    const observable=this.service.getAllMoviesOfSelectedCategoryAndFormat(category,format);
    observable.subscribe(Response=>{
      const result:any=Response;
      this.Movielist=result;
      // console.log(this.formatList);
    })
   }


   getAllMoviesOfSelecteLanguageAndFormat(language,format)
   {
    const observable=this.service.getAllMoviesOfSelectedFormatAndLanguage(format,language)
    observable.subscribe(Response=>{
      const result:any=Response;
      this.Movielist=result;
      // console.log(this.formatList);
    })
   }


    movieDetails(id)
    {
      //alert(this.category);
          this.router.navigate(["/confirm"],{queryParams:{id:id}})
    }
    
    modol()
    {
      alert(this.category);
      alert(this.format);
      alert(this.language);
      if( typeof this.language==="undefined" && typeof this.format==="undefined")
      {
        this.getAllActionMovie(this.category);
      }
       else if( typeof this.category==="undefined" && typeof this.format==="undefined")
      {
        this.getmoviesBySelectedLanguage(this.language);
      }
      else if( typeof this.category==="undefined" && typeof this.language==="undefined")
      {
        this.getmoviesBySelectedFormat(this.format);
      }
      else if(typeof this.language==="undefined")
      {
        this.getAllMoviesOfSelecteCategoryAndFormat(this.category,this.format);
      }
      else if(typeof this.category==="undefined")
      {
        this.getAllMoviesOfSelecteLanguageAndFormat(this.language,this.format);
      }
      else if(typeof this.format==="undefined")
      {
        this.getAllMoviesOfSelecteCategoryAndLanguage(this.category,this.language);
      }
      else{
      const observable = this.service.getAllMoviesOfSelectedType(this.category,this.language,this.format);
      observable.subscribe(response =>{
        const result:any = response;
       this.Movielist=result;
        console.log(this.Movielist);
     })
    }
    }
}
