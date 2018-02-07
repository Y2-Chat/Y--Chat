import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../../models/user.model';
import { Router , Params , ActivatedRoute } from '@angular/router';

@Injectable()
export class ViewService {
    // these properties enable multi-sharing of commonly used data
    protected y2chatters:User[]=[];
    protected static chatter:User ={ // place holders
      uid:"23EFG_sdDas9dudsj09",
      profilePic:"https://loremflickr.com/320/240/dog",
      status:"Kaloku, am Flicking",
      username:"Ipsum Lorem",
      chatIds:['global-chat']
    }

  constructor( protected dataService:DataService , protected router:Router ) { 
    this.y2chatters = dataService.users;
  }
   
  //Auxillary Methods
   setChatter( chatter:User ):void{
    ViewService.chatter = chatter;
    }

   _setChatter(uid:string):void{
     if( this.y2chatters !== undefined ){
        for(let i = 0 ; i < this.y2chatters.length ; i++){
          if( this.y2chatters[i].uid === uid ){
            this.setChatter( this.y2chatters[i] );
            break;
          }
        }
     }
   }

    get user():User{
      return ViewService.chatter;
    }

// Link Management
  view(uid:string){
    this.router.navigate(['/'+uid]);
  }
}