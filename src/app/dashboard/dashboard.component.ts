import { Component, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  messages: string[] = [
    'my first message',
    'my second message',
    'my third message',
    'my fourth message'
  ]

  constructor() {}

  ngOnInit(): void {}
}
