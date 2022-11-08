import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component: MainComponent},
  {path:'news',component: NewsComponent},
  {path:'profile',component: ProfileComponent},
  {path:'login',component: LoginComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
