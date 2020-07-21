import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import * as moment from 'moment'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  slugName = ''
  mainData: {
    country: string
    countryCode: string
    date: string
    confirmed: string
    active: string
    deaths: string
    recovered: string
  }[] = []

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    let now = moment()
  }

  ngOnInit(): void {
    this.slugName = this.route.snapshot.queryParams['slug']

    this.http
      .get<any>('https://api.covid19api.com/dayone/country/' + this.slugName)
      .subscribe((data) => {
        data.forEach((element, index, array) =>
          this.mainData.push({
            country: element.Country,
            countryCode: element.CountryCode,
            date: moment(element.Date).format('LLL'),
            confirmed: element.Confirmed,
            active: element.Active,
            deaths: element.Deaths,
            recovered: element.Recovered
          })
        )
      })
  }
}
