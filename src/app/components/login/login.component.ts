import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from "@angular/core";
import { AuthService } from "../../core/auth.service";
import { Router } from "@angular/router";
import { CacheService } from "../../services/cache.service";



@Component({
    selector: 'app-login',
    templateUrl: '/login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    form:FormGroup
    email: string;
    password: string;

    invalidPasswordLength = false;

    constructor(
        public auth: AuthService,
        private router: Router,
        private cache: CacheService,
      fb:FormBuilder) { 
        this.form = fb.group({
            emailAddress :["",[Validators.required, Validators.email]],
            passwrd:["",[Validators.required,Validators.minLength(6)]]
        })
     }

     get emailValidator(){
         return this.form.get('emailAddress');
     }

     get passwordValidator(){
         return this.form.get('passwrd')
     }

    login() {
        this.auth.fieldLogin(this.email, this.password).then(success => {
            this.router.navigate([""]);
        }).catch(error => {
            console.log(error.message);
        })
    }

    register() {
        this.router.navigate(["register"]);
    }

    checkPasswordLengthOnBlur() {
        if (this.password.length > 5) {
            this.invalidPasswordLength = false;
            return true;
        } else {
            this.invalidPasswordLength = true;
            return false;
        }
    }

}