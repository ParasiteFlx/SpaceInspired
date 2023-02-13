import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NzTableModule} from 'ng-zorro-antd/table'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule} from 'ng-zorro-antd/popconfirm'
import { HttpClientModule } from '@angular/common/http';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
    FormsModule,
    NzPopconfirmModule,
    HttpClientModule,
    NzInputModule,
    
  ]
})
export class ContentModule { }
