import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Firestore
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

//Components
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firestore)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
