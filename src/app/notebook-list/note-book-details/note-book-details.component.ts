import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-book-details',
  templateUrl: './note-book-details.component.html',
  styleUrls: ['./note-book-details.component.css'],
})
export class NoteBookDetailsComponent implements OnInit {
  pageDetails: any[] = [];
  currentPage = 0;

  constructor() {
    this.pageDetails = [];
    for (let i = 0; i < 5; i++) {
      this.pageDetails.push({ note: '' });
    }
  }

  ngOnInit() {
    const getExistData = JSON.parse(localStorage.getItem('pageDetails'));
    if (getExistData && getExistData.length > 0) {
      this.pageDetails = getExistData;
    }
  }
  onNoteChange(event) {
    this.pageDetails[this.currentPage].note = event;
    localStorage.setItem('pageDetails', JSON.stringify(this.pageDetails));
  }
  onNextPage(event) {
    this.currentPage++;
  }
}
