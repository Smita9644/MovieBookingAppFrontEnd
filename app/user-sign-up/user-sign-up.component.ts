import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  name;
  email;
  password;
  role:"user";
  screenid;
  movieid;
    constructor(private service:UserService,private router:Router,private activerouter:ActivatedRoute) { 
      this.role="user";
      activerouter.queryParams.subscribe((params)=>
      {
       this.screenid=params.screenid;
       this.movieid=params.movieid;
       alert(this.screenid);
       alert(this.movieid);
      })
    }
  
    ngOnInit() {
    }
    onSignUp(){
      alert(this.name);
      alert(this.role);
      const observable=this.service.addUser(this.name,this.email,this.password,this.role);
      observable.subscribe(Response=>{
        const result:any=Response;
        this.router.navigate(['/userlogin']);
        
      })
    }

}
