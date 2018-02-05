//Components
import { NgModule } from '@angular/core'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { DataService } from './data.service'

@NgModule({
    imports: [
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    providers: [AuthService, DataService],
})
export class CoreModule { }
