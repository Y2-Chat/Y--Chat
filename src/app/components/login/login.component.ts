import { Component } from "@angular/core";
import { AuthService } from "../../core/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: '/login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    email: string;
    password: string;
    constructor(public auth: AuthService) { }

    login() {
        this.auth.fieldLogin(this.email, this.password)
    }
}