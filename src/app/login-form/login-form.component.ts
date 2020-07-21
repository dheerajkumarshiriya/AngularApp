import { Component, OnInit, Output, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'

import { LoggingService } from '../logging.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [LoggingService]
})
export class LoginFormComponent implements OnInit {
  name: string = ''
  password: string = ''

  constructor(private router: Router, private loggingService: LoggingService) {}

  ngOnInit(): void {
    // this.loggingService.logStatusChange(this.name, this.password)
  }

  btnClick() {
    this.loggingService.login(true)
    this.router.navigate(['/country'])
  }

  ngOnDestroy() {
    // this.loggingService.logout()
  }
}
