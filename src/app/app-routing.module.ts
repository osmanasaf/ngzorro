import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdayEkleComponent} from './aday-ekle/aday-ekle.component';
import {AdayListComponent} from './pages/aday-list/aday-list.component';
import {CompanyListComponent} from './pages/company-list/company-list.component';
import {CompanyAddComponent} from './pages/company-add/company-add.component';
import {KontakAddComponent} from './pages/kontak-add/kontak-add.component';
import {AdayProfileComponent} from './aday-profile/aday-profile.component';



const routes: Routes = [
  {path: 'aday/ekle', component: AdayEkleComponent},
  {path: 'aday/list', component: AdayListComponent},
  {path: 'company/list', component: CompanyListComponent},
  {path: 'company/add', component: CompanyAddComponent},
  {path: 'company/kontak/add', component: KontakAddComponent},
  {path: 'aday/profile', component: AdayProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// tslint:disable-next-line:max-line-length
export const routingComponents = [AdayEkleComponent, AdayListComponent, CompanyListComponent, CompanyAddComponent, KontakAddComponent, AdayProfileComponent];
