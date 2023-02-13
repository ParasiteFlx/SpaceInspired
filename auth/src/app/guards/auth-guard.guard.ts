import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private access : AuthServiceService, private router : Router)
  {
    
  }
 
  canActivate() {
     
  
   if(this.access.activateGuard())
   {
     return true;
   }
  
      this.router.navigate(['authorisation'])
      return false;
  

  }
  
}
