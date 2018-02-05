import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'userProfile',
        pathMatch: 'full'
    }, {
        path: 'userProfile',
        component: RegisterComponent
    }]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }