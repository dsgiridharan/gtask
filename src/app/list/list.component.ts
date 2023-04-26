import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() todos: any;
  @Output() editId = new EventEmitter<any>();
  @Output() deleteId = new EventEmitter<any>();

  constructor() {}

  todoEdit(id: any) {
    this.editId.emit(id);
  }

  todoDelete(id: any) {
    this.deleteId.emit(id);
  }
}
