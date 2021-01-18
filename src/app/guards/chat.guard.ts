import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ChatGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth,
              private router:Router)  {

              }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;

    /*return this.afAuth.authState
    .pipe(
      map( User => user != null),
      tap(value =>{
        if( !value){
          this.router.navigateByUrl('/login').then();
          return value;
        }
        else{
          return value;
        }
      })
    );*/
  }
  
}
