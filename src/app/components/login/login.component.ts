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
    email: string;
    password: string;

    invalidPasswordLength = false;

    constructor(
        public auth: AuthService,
        private router: Router,
        private cache: CacheService) { }

    login() {
        if (this.checkPasswordLengthOnBlur) {
            this.auth.fieldLogin(this.email, this.password).then(success => {
                this.router.navigate([""]);
            }).catch(error => {
                console.log(error.message);
            })
        }
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