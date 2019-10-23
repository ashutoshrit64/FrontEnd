import { Injectable } from '@angular/core';
import { HttpService } from './httpService/http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private httpService:HttpService,private router:Router) {}

    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if(!!localStorage.getItem("token")){
          return true;
        }else{
          this.router.navigate(['/login'])
        }
      }
}
