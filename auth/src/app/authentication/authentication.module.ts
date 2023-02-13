import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BigBangComponent } from './big-bang/big-bang.component';
import { BackgroundComponent } from './login/background/background.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { BackgroundTwoComponent } from './register/background-two/background-two.component'



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    BigBangComponent,
    BackgroundComponent,
    BackgroundTwoComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzIconModule,
    NzCheckboxModule,
    NzInputModule,
    RouterModule,
    NzSelectModule,
    NzMessageModule
  ],
  exports:[
    LoginComponent 
  ]
})
export class AuthenticationModule { }
