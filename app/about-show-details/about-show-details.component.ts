import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-about-show-details',
  templateUrl: './about-show-details.component.html',
  styleUrls: ['./about-show-details.component.css']
})
export class AboutShowDetailsComponent implements OnInit {
  AllShows:any[];
  noOfSeatAvailable;
  id:any;
    constructor(private service:MovieService,private activerouter:ActivatedRoute,private router:Router) { 
      activerouter.queryParams.subscribe((params)=>
      {
        this.id=params.idOfMovie;
         alert(this.id);
         alert("hi");
        })
        this.getAllShowsOfSelectedMovie(this.id);
    }
    
    ngOnInit() {
     
    }
     getAllShowsOfSelectedMovie(id)
     {
       
      const observable=this.service.getAllShowsOfGivenMovie(id);
      observable.subscribe(Response=>{
        const result:any=Response;
        this.AllShows=result;
        console.log(this.AllShows);
        })
        console.log();
     }
  
  
     onclick(screen_id)
     {
       alert("screen_id is"+screen_id);
      this.router.navigate(["/userlogin"],{queryParams:{id:screen_id,movieid:this.id}})
     }
  
     checkSeatAvabiity(screen_id)
     {
      const observable=this.service.getAvailableSeatsOfSelectedScreen(screen_id);
      observable.subscribe(Response=>{
        const result:any=Response;
        this.noOfSeatAvailable=result;
        console.log(this.noOfSeatAvailable);
        })
     }
}
