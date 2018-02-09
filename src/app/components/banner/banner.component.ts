import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  // authService: AuthService
  // dropDownVisibility: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

  // switchVisibilty(){
  //   if(this.dropDownVisibility === true){
  //     this.dropDownVisibility = false;
  //   } else if(this.dropDownVisibility===false){
  //     this.dropDownVisibility = true;
  //   }
  // }

}
