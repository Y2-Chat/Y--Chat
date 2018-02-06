import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MessagingSystemComponent } from './components/messaging-system/messaging-system.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
    }, 
    {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'messaging',
        component:MessagingSystemComponent
    } ,
      {
        path: ':user_id',
        component: ProfileComponent
    }
 
]
    

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }