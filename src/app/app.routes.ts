import { Routes } from '@angular/router';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {LoginComponent} from './auth/login/login.component';
import {ProgrammazioneComponent} from './programmazione/programmazione/programmazione.component';

export const routes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
    {
      path: '', component: LoginComponent
    },
    {
      path: 'programmazione', component: ProgrammazioneComponent
    }
  ]
}];
