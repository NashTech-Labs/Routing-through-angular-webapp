import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/home', pathMatch: 'full' 
  },
  {
    component : HomeComponent,
    path:'home'
  },
  {
    component : AboutComponent,
    path:'about'
  },
  {
    component : ContactComponent,
    path:'contact'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
