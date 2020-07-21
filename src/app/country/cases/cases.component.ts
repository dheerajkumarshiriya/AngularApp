import { Component, OnInit, Input } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  @Input() Index: string
  @Input() Name: string
  @Input() Slug: string

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goToPage(Slug) {
    this.router.navigate(['case-details'], {
      queryParams: { slug: Slug }
    })
  }
}
