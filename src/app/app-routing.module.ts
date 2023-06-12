import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotesListComponent } from './notebook-list/notes-list/notes-list.component';
import { NoteBookDetailsComponent } from './notebook-list/note-book-details/note-book-details.component';

const routes: Routes = [
  { path: 'list', component: NotesListComponent },
  { path: 'details', component: NoteBookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
