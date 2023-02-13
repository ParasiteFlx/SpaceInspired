import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDoesNotExistComponent } from './page-does-not-exist/page-does-not-exist.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { NotAuthorisedComponent } from './not-authorised/not-authorised.component';

@NgModule({
  declarations: [
    PageDoesNotExistComponent,
    NotAuthorisedComponent
  ],
  imports: [
    CommonModule,
    NzResultModule,
    NzButtonModule,
    RouterModule
  ]
})
export class ErrorsModule { }
