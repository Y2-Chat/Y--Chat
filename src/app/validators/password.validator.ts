import { AbstractControl } from '@angular/forms';
export class PasswordValidators{
    static passwordMatches(control: AbstractControl){
        let newPassword = control.get('passwrd');
        let confirmPassword = control.get('confirmPwrd');
        if (newPassword.value !== confirmPassword.value)
            return { passwordMatches: true };
        
        return null;
    }
}