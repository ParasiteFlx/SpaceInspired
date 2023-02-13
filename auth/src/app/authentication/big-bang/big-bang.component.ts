import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-big-bang',
  templateUrl: './big-bang.component.html',
  styleUrls: ['./big-bang.component.scss']
})
export class BigBangComponent implements OnInit {

  constructor(private router: Router) 
  {  
     this.changePath();
  }

  ngOnInit(): void {
  }



    changePath(){
      
    setTimeout(() =>{
      this.router.navigate(["/login"]);
    },19000)
    
  }





  

}
