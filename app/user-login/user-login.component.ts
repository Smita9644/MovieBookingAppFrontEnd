import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  email;
  password;
  id;
  movieid;
    constructor(private router:Router,private service:UserService,private activerouter:ActivatedRoute) {
      activerouter.queryParams.subscribe((params)=>
      {
       this.id=params.id;
       this.movieid=params.movieid;
       alert(this.id);
       alert(this.movieid);
      })
     }
  
    ngOnInit() {
    }
  
    onsingup()
    {
    
      this.router.navigate(["/signup"],{queryParams:{screenid:this.id,movieid:this.movieid}});
    }
  
    onlogin()
    {
      const Observable=this.service.login(this.email,this.password);
      Observable.subscribe((Response)=>{
       // alert(this.email);
       const Result:any=Response;
       if(Result==null)
       {
        alert("incorrect password or email");
        this.email="";
        this.password="";
        this.router.navigate(["/userlogin"]);
       }
      else if(Result.role ==="user")
       { 
         alert(Result.user_id);
         const user_id=Result.user_id;
         console.log(user_id);
         this.router.navigate(["/seat"],{queryParams:{screenid:this.id,movieid:this.movieid,userId:user_id}});
       }
       else{
         alert("Incorrect email id or password");
         this.email="";
         this.password="";
         this.router.navigate(["/userlogin"],{queryParams:{id:this.id,movieid:this.movieid}})
       }
      })
    }

}
