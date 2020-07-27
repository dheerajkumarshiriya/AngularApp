import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs'

import { EditService } from '../edit-country.service'

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit, OnDestroy {
  subscription: Subscription
  editMode = false
  editedItemIndex: number
  editedItem
  Countries

  constructor(private editService: EditService) {}

  ngOnInit(): void {
    console.log(this.Countries, 'Countries')
    this.subscription = this.editService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index
      this.editMode = true
      // this.editedItem = this.
    })
  }

  onEditItem(form: NgForm) {
    const value = form.value
  }

  importedArray(event) {
    console.log(event, 'array')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
