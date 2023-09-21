import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GenratePasswordComponent } from './genrate-password/genrate-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  {path:'auth/login', component: LoginComponent},
  {path:'auth/newPassword', component: GenratePasswordComponent},
  {path:'auth/forgetPassword', component: ForgetPasswordComponent},
  {path:'', redirectTo:'auth/login', component:LoginComponent},
 {
  path:'', component:LoginComponent,
  children:[

  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
