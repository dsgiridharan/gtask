import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() searchKey = new EventEmitter<any>();

  constructor() {}
  onSearchTodo(ev: any) {
    this.searchKey.emit(ev.target.value);
  }
}
