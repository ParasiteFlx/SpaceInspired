import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  validateForm!: UntypedFormGroup;

  submitForm(): void {
    this.httpClient.get<any>('http://localhost:3000/register')

    .subscribe(res=>{

      const user = res.find((a:any)=>{
        return (a.userName === this.validateForm.value.email || a.userName === this.validateForm.value.nickname) && a.password === this.validateForm.value.password
      });

      if(user){
        this.message.create('success','Logged in successfully!')
        this.router.navigate(["list"])
        localStorage.setItem("loggedIn",'true')
      }
      else
      {
        this.message.create('error','There is no user that has those credentials in our database!')
      }

    })

    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder, private httpClient : HttpClient, private router : Router, private message : NzMessageService) {
  localStorage.setItem('loggedIn','false')
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      remember: [true]
    });
  }

}
