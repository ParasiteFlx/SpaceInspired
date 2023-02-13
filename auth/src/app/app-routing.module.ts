import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { BigBangComponent } from './authentication/big-bang/big-bang.component';
import { PageDoesNotExistComponent } from './errors/page-does-not-exist/page-does-not-exist.component';
import { ListComponent } from './content/list/list.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { NotAuthorisedComponent } from './errors/not-authorised/not-authorised.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegisterComponent},
  {path:'authorisation', component:NotAuthorisedComponent},
  {path:'list', component:ListComponent, canActivate: [AuthGuardGuard] },
  {path:'', component:BigBangComponent},
  {path:'**', component:PageDoesNotExistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



