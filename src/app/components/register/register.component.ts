import { Component } from "@angular/core";
import { AuthService } from "../../core/auth.service";
import { User } from "../../models/user.model";
import { Router } from "@angular/router";
import { delay } from "q";

@Component({
    selector: 'app-register',
    templateUrl: '/register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {

    user: User;

    email: string;
    password: string;
    confirmPassword: string;

    uid: string;
    profilePic: File;
    status: string;
    username: string;
    chatIds: string[];

    step = 1;

    invalidConfirmPassword = false;
    invalidPasswordLength = false;

    constructor(
        public auth: AuthService,
        private router: Router) {

        this.user = new User;

        this.email = null;
        this.password = null;
        this.confirmPassword = null;

        this.user.uid = null;
        this.user.profilePic = null;
        this.user.status = "Hi I'm using Y2-Chat";
        this.user.username = null;
        this.user.chatIds = new Array<string>();
    }

    protected register() {
        if (this.step === 1) {
            this.step = 2;
        } else {
            if (this.checkPasswordOnBlur() && this.checkPasswordLengthOnBlur()) {
                this.user.username = this.username;
                this.auth.registerUser(this.email, this.password, this.user)
            } else {

            }
        }
    }

    login() {
        this.router.navigate(["login"]);
    }

    // checkPasswordLengthOnInput() {

    //     if (this.password.length > 5) {
    //         this.invalidPasswordLength = false;
    //         return true;
    //     } else {
    //         setTimeout(() => {
    //             this.invalidPasswordLength = true;
    //             return false;
    //         }, 500)
    //     }

    // }

    checkPasswordLengthOnBlur() {
        if (this.password.length > 5) {
            this.invalidPasswordLength = false;
            return true;
        } else {
            this.invalidPasswordLength = true;
            return false;
        }
    }

    // checkPasswordOnInput() {

    //     if (this.password === this.confirmPassword) {
    //         this.invalidConfirmPassword = false;
    //         return true;
    //     } else {
    //         setTimeout(() => {
    //             this.invalidConfirmPassword = true;
    //             return false;
    //         }, 500)
    //     }

    // }

    checkPasswordOnBlur() {
        if (this.password === this.confirmPassword) {
            this.invalidConfirmPassword = false;
            return true;
        } else {
            this.invalidConfirmPassword = true;
            return false;
        }
    }

}
