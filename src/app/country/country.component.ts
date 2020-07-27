import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms'

import { EditService } from '../edit-country.service'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @ViewChild('f') slForm: NgForm
  index = ''
  Name = ''
  Slug = ''
  retrievedData
  addCountry: boolean = false
  editMode: boolean = false
  itemToEdit
  Index: number

  countries: { id: number; name: string; slug: string }[] = []

  // @Output()
  // importArray: EventEmitter<{ id: number; name: string; slug: string }[]> = new EventEmitter<
  //   [{ id: number; name: string; slug: string }]
  // >()

  constructor(private http: HttpClient, private router: Router, private editService: EditService) {}

  ngOnInit(): void {
    console.log('object')
    this.http.get<any>('https://api.covid19api.com/summary').subscribe((data) => {
      this.retrievedData = data.Countries
      this.retrievedData.forEach((element, index, array) => {
        this.countries.push({
          id: index,
          name: element.Country,
          slug: element.Slug
        })

        // if (JSON.parse(localStorage.getItem('test'))) {
        //   return (this.countries = JSON.parse(localStorage.getItem('test')))
        // } else {
        //   this.setValueInLocalStorage()
        // }
      })
    })
    // this.importArray.emit(this.countries)
    // if (localStorage.getItem('test')) {
    //   this.countries = JSON.parse(localStorage.getItem('test'))
    // }
    // return this.countries
  }

  onDropDownListClick(i, name, slug) {
    this.index = i
    this.Name = name
    this.Slug = slug
    this.router.navigate(['country', 'cases'])
  }

  toggleAddCountry() {
    this.addCountry = !this.addCountry
  }

  toggleEditMode() {
    this.editMode = !this.editMode
  }

  onSaveCountry() {
    // this.countries = JSON.parse(localStorage.getItem('test'))
    // console.log(this.countries, 'count')
    // this.countries.push({
    //   id: 10,
    //   name: this.playerName,
    //   slug: 'element.Slug',
    // })
    // this.setValueInLocalStorage()
    // console.log(this.countries, 'counterr')
  }

  setValueInLocalStorage() {
    // localStorage.setItem('test', JSON.stringify(this.countries))
  }

  // updateItem(item, i, inputId, inputName) {
  //   let index = this.countries.indexOf(item)

  //   console.log(inputName, 'input')
  //   if (index === i && item.showInput == false) {
  //     item.showInput = true
  //     this.countries[index] = item
  //     this.countries[index].id = inputId
  //     this.countries[index].name = inputName
  //   } else {
  //     item.showInput = false
  //     this.countries[index] = item
  //   }

  //   //   item.name = 'Change Hardik'
  //   console.log(this.countries[index], 'indexxx')
  //   // this.countries[index] = item

  //   //   console.log(this.myObjArray)
  // }

  onAddItem(form: NgForm) {
    const value = form.value
    console.log(value, 'value')
    let editIndex = this.Index
    console.log(editIndex, 'here')
    if (editIndex) {
      this.countries.splice(editIndex, 1)
    }
    this.countries.push({
      id: value.countryId,
      name: value.countryName,
      slug: value.countrySlug
    })
    this.toggleAddCountry()
  }

  onEditItem(index: number) {
    this.Index = index
    // const values = form.value
    // console.log(values, 'values')

    this.editMode = true
    this.itemToEdit = this.findItemToEdit(index)
    this.slForm.setValue({
      countryId: this.itemToEdit.id,
      countryName: this.itemToEdit.name,
      countrySlug: this.itemToEdit.slug
    })

    // this.editService.startedEditing.next(index)
    // this.router.navigate(['edit-country'])
  }

  onDeleteItem(index: number) {
    this.countries.splice(index, 1)
  }

  findItemToEdit(index: number) {
    return this.countries[index]
  }
}
