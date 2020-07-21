import { Directive, OnInit, HostListener, HostBinding } from '@angular/core'

@Directive({
  selector: '[clickToClose]'
})
export class ClickToClose implements OnInit {
  @HostBinding('class') class: string = 'alert alert-success'

  constructor() {}

  ngOnInit() {}

  @HostListener('click') clicktoclose() {
    this.class = 'alert alert-success fade'
  }
}
