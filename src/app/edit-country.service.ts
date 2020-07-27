import { Subject } from 'rxjs'

export class EditService {
  startedEditing = new Subject<number>()
}
