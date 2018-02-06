import { Component } from "@angular/core";
import { AuthService } from "../../core/auth.service";
import { User } from "../../models/user.model";

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

    constructor(
        public auth: AuthService) {
        this.user = new User;

        this.email = null;
        this.password = null;
        this.confirmPassword = null;

        this.user.profilePic = null;
        this.user.status = "Hi I'm using Y2-Chat";
        this.user.username = null;
        this.user.chatIds = new Array<string>();
    }

    protected register() {
        if (this.step === 1) {
            this.step = 2;
        } else {
            this.user.username = this.username;
            this.auth.registerUser(this.email, this.password, this.user)
        }
    }
}
