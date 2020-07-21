import { Component, OnInit, Output } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  index = ''
  Name = ''
  Slug = ''
  retrievedData

  countries: { id: number; name: string; slug: string }[] = []

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any>('https://api.covid19api.com/summary').subscribe((data) => {
      this.retrievedData = data.Countries
      this.retrievedData.forEach((element, index, array) =>
        this.countries.push({ id: index, name: element.Country, slug: element.Slug })
      )
    })
  }

  onDropDownListClick(i, name, slug) {
    this.index = i
    this.Name = name
    this.Slug = slug
    this.router.navigate(['country', 'cases'])
  }
}
