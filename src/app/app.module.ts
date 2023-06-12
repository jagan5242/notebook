import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NotesListComponent } from './notebook-list/notes-list/notes-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteBookDetailsComponent } from './notebook-list/note-book-details/note-book-details.component';
import { NoteEditComponent } from './shared/note-edit/note-edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NotesListComponent,
    NoteBookDetailsComponent,
    NoteEditComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
