import { Component, OnInit } from '@angular/core';
import { Router , Params , ActivatedRoute } from '@angular/router';
import { DataService } from '../../core/data.service';
import { User } from '../../models/user.model';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  list;
  constructor(
    private router : Router ,
    public activatedRoute : ActivatedRoute,
    protected dataservice : DataService
  ) { 
  }

  ngOnInit() {
    this.profile();
  }
  
  profile(){
    this.activatedRoute.params.subscribe( params => {
      try{
        let profile_id:string = params.user_id;
       this.list = this.dataservice.getProfile(profile_id);
      }catch(err){
         console.log(err);
      }
    });
  }
}