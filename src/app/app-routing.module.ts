import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { MessagingSystemComponent } from './components/messaging-system/messaging-system.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
    }, 
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path:'messaging',
        component:MessagingSystemComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }