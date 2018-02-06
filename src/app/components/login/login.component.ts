import { Component } from "@angular/core";
import { AuthService } from "../../core/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: '/login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    email: string;
    password: string;

    constructor(public auth: AuthService, private router: Router) { }

    login() {
        this.auth.fieldLogin(this.email, this.password).then(success => {
            this.router.navigate([""]);
        }).catch(error => {

        })


    }

    register(){
        this.router.navigate(["register"]);
    }
}