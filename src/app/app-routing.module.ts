import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OpenAccountComponent} from './open-account/open-account.component';
import {InfoAccountComponent} from './info-account/info-account.component';

const routes: Routes = [{
  path: 'infoAccount', component: InfoAccountComponent
},
  {path: 'openAccount', component: OpenAccountComponent},
  {
    path: '',
    redirectTo: '/infoAccount'
    , pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
