import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() {

    

   }

  activateGuard(){

     let access =  localStorage.getItem("loggedIn");

     if(access == "true")
     {
          return true;
     }
     else
     {
      return false;
     }

  }
}
