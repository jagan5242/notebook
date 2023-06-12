import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  textareaValue = '';
  constructor() {}

  ngOnInit() {}

  save() {
    //localStorage.setItem('textareaValue', this.textareaValue);
  }

  clear() {
    //localStorage.removeItem('textareaValue')
    //this.textareaValue = "";
  }

}