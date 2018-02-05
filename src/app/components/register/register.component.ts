import { Component } from "@angular/core";
import { AuthService } from "../../core/auth.service";

@Component({
    selector: 'app-register',
    templateUrl: '/register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {

    constructor(public auth: AuthService) { }
}
