import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css'],
})
export class NoteEditComponent implements OnInit {
  @Input() noteValue = '';
  @Input() currentIndex: any = 0;
  @Output() emitNoteChange = new EventEmitter<any>();
  @Output() onPageChange = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onNoteChange(event) {
    this.emitNoteChange.emit(event);
  }

}
