import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from "@angular/core";
import { AuthService } from "../../core/auth.service";
import { User } from "../../models/user.model";
import { Router } from "@angular/router";
import { delay } from "q";
import { CacheService } from "../../services/cache.service";
import { PasswordValidators } from '../../validators/password.validator';

@Component({
    selector: 'app-register',
    templateUrl: '/register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {

    form: FormGroup

    user: User;

    email: string;
    password: string;
    confirmPassword: string;

    uid: string;
    profilePic: string;
    status: string;
    username: string;
    chatIds: string[];

    step = 1;

    invalidConfirmPassword = false;
    invalidPasswordLength = false;

    constructor(
        public auth: AuthService,
        private router: Router,

        private cache: CacheService,

        fb: FormBuilder
    ) {

        this.form = fb.group({
            emailAddress: ["", [Validators.required, Validators.email]],
            passwordForm: fb.group({
                passwrd: ["", [Validators.required, Validators.minLength(6)]],
                confirmPwrd: ["", Validators.required]
            },{
                validator: PasswordValidators.passwordMatches
            })
        })

        this.user = new User;

        this.email = null;
        this.password = null;
        this.confirmPassword = null;

        this.user.uid = null;
        this.user.profilePic = "https://firebasestorage.googleapis.com/v0/b/y2-chat.appspot.com/o/Portrait_Placeholder%5B1%5D.png?alt=media&token=98f2f79f-8db4-4dc0-b28b-d006b976f78e";
        this.user.status = "Hi I'm using Y2-Chat";
        this.user.username = null;
        this.user.chatIds = new Array<string>();
    }

    get emailValidator() {
        return this.form.get('emailAddress')
    }

    get passwordValidator() {
        return this.form.get('passwordForm.passwrd')
    }

    get confirmPasswordValidator() {
        return this.form.get('passwordForm.confirmPwrd')
    }

    get passwordForm(){
        return this.form.get('passwordForm')
    }

    protected register() {
        if (this.step === 1) {
            this.step = 2;
        } else {
            if (this.checkPasswordOnBlur() && this.checkPasswordLengthOnBlur()) {
                this.user.username = this.username;
                this.auth.registerUser(this.email, this.password, this.user);
                this.cache.user = this.user;
            } else {

            }
        }
    }

    login() {
        this.router.navigate(["login"]);
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
