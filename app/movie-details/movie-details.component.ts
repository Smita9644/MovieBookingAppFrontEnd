import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id:any;
  name;
  category;
  format;
Language;
  constructor(private activerouter:ActivatedRoute,private router:Router,private service:MovieService) {
    activerouter.queryParams.subscribe((params)=>
    {
     this.id=params.id;
     alert(this.id);
     this.service.getMovie(this.id).subscribe((response)=>
      {
        const res:any = response;
        console.log(res);
        this.name=res.name;
        this.Language=res.language;
        this.category=res.category;
        this.format=res.format;

      })
    })
   }

  ngOnInit() {
  }

  onclick(id)
  {
    this.router.navigate(['/aboutShow'],{queryParams:{idOfMovie:id}});
  
  }

}
