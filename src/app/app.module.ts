import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from "@angular/forms";

//Firestore
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

//Components
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MessagingSystemComponent } from './components/messaging-system/messaging-system.component';
import { GlobalChatComponent } from './components/messaging-system/global-chat/global-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MessagingSystemComponent,
    GlobalChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firestore),
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService,
    AngularFireAuth,
    AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
