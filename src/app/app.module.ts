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
import { MessageCardComponent } from './components/messaging-system/message-card/message-card.component';
import { LoginComponent } from './components/login/login.component';
import { CacheService } from './services/cache.service';
import { DataService } from './core/data.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MessagingSystemComponent,
    GlobalChatComponent,
    LoginComponent,
    GlobalChatComponent,
    MessageCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firestore),
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService,
    AngularFireAuth,
    AngularFirestore,
    CacheService,
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
