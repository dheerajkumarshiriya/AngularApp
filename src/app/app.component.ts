import { Component, OnInit } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-login-form'

  showHeader: boolean = false

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/sign-up') {
          this.showHeader = false
        } else {
          this.showHeader = true
        }
      }
    })
  }
  ngOnInit() {}
}
