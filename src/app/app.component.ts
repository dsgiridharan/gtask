import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoList: any = [];
  todoListCopy: any = [];
  searchKeyLength: any;
  showForm: boolean = false;
  todoChoosenRecord: any;

  constructor() {
    var todos: any = localStorage.getItem('todoList');
    if (todos) {
      this.todoList = JSON.parse(todos);
      this.todoListCopy = JSON.parse(todos);
    }
  }

  getSearchKey(searchKey: any) {
    var key = searchKey.toLowerCase();
    if (this.searchKeyLength > key.length) {
      this.todoList = this.todoListCopy;
    }

    this.searchKeyLength = key.length;

    if (key && key.trim() !== '') {
      this.todoList = this.todoList.filter((item: any) => {
        return (
          item.title.toLowerCase().includes(key.toLowerCase()) ||
          item.content.toLowerCase().includes(key.toLowerCase())
        );
      });
    }
    if (key === '') {
      this.todoList = this.todoListCopy;
    }
  }

  toggleForm() {
    this.todoChoosenRecord = undefined;
    this.showForm = !this.showForm;
  }

  getNewData(ev: any) {
    var finalId = 0;
    var id = 1;
    if (this.todoList.length != 0) {
      finalId = this.todoList[this.todoList.length - 1].id;
    }

    const newTodo = {
      id: finalId + 1,
      title: ev.title,
      content: ev.content,
    };

    this.todoList.push(newTodo);
    this.todoListCopy = this.todoList;
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    this.showForm = !this.showForm;
  }

  getUpdateData(ev: any) {
    this.todoList.forEach((obj: any) => {
      if (obj.id == ev.id) {
        obj.title = ev.title;
        obj.content = ev.content;
      }
    });
    this.todoListCopy = this.todoList;
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
    this.showForm = !this.showForm;
  }

  getEditIdFromList(ev: any) {
    this.todoChoosenRecord = this.todoList.filter((obj: any) => {
      return obj.id == ev;
    });
    this.showForm = !this.showForm;
  }

  getDeleteIdFromList(ev: any) {
    this.todoList = this.todoList.filter((item: any) => item.id !== ev);
    this.todoListCopy = this.todoList;
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
