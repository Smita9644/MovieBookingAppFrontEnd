import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent implements OnInit {
Theater:any[];
screenId;
movieId;
userId;
SeatStatus:number[];
Seats:any=[];
  constructor(private activerouter:ActivatedRoute,private router:Router,private service:MovieService) {
    activerouter.queryParams.subscribe((params)=>
    {
     this.screenId=params.screenid;
     this.movieId=params.movieid;
     this.userId=params.userId;
     console.log(this.userId);
     alert(this.screenId);
     alert(this.movieId);
    })
   //  this.getScreenDetailsById(this.screenId);
     this.getSeatStatusOfSelectedScreen(this.screenId);

   }

  ngOnInit() {
  }

  getScreenDetailsById(id)
  {
    const Observable=this.service.getScrrenDetailsById(id);
    Observable.subscribe(Response=>{
      const result:any=Response;
      this.Theater=result.seats;
      console.log(this.Theater);
    })
  }

  getSeatStatusOfSelectedScreen(screenId)
  {
    const Observable=this.service.getStatusOfSeatOfSelectedScreen(screenId);
    Observable.subscribe(Response=>{
      const result:any=Response;
      this.SeatStatus=result;
      console.log(this.SeatStatus);
    })
  }

  SelectedSeat(event)
  {
    //console.log(event.target.value);
    let index=this.Seats.indexOf(event.target.value);
    console.log(index);
    if(index === -1)
     {
      this.Seats.push(event.target.value);

    }
     else{
       this.Seats.splice(index,1);
     }
    console.log(this.Seats);
   }


   onBooking()
   {
     alert(this.userId);
    const Observable=this.service.bookTheMovie(this.userId,this.screenId,this.Seats);
    Observable.subscribe(Response=>{
      const Resut:any=Response;
      console.log("userid"+this.userId);
      console.log("screenId"+this.screenId);
      console.log("seat"+this.Seats);
      alert("movie Booked");
      this.router.navigate(['/get']);
    })
   }
}
