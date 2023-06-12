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
    const getExistData = JSON.parse(sessionStorage.getItem('pageDetails'));
    if (getExistData && getExistData.length > 0) {
      this.pageDetails = getExistData;
    }
  }
  onNoteChange(event) {
    this.pageDetails[this.currentPage].note = event;
    sessionStorage.setItem('pageDetails', JSON.stringify(this.pageDetails));
  }
  onChangePage(event) {
    if (event === 'prev' && this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
    }
    if (event === 'next' && this.currentPage < 4) {
      this.currentPage = this.currentPage + 1;
    }
  }
}
