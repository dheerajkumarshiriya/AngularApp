import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { LoggingService } from './logging.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loggingService: LoggingService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // return this.loggingService.isAuthenticated().then((authenticated: boolean) => {
    const aam = this.loggingService.loggedIn
    // console.log(authenticated, 'heree')
    if (aam) {
      this.router.navigate(['/'])
    } else {
      return true
    }
    // })
  }
}
