import { Component, Input } from '@angular/core';
import { Book } from '../../types/types';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],

  template: `
  <div *ngIf="book" class="app-book-card">
    <mat-card  class = "example-card" appearance="outlined">
    <mat-card-header>
          <mat-card-title>Title: {{book.title}}</mat-card-title>
          <mat-card-subtitle>Description: {{book.description}}</mat-card-subtitle>
    </mat-card-header>

    <mat-card-content>

    <img
          mat-card-md-image
          src={{book.cover_image}}
    />
      <p>Genres: {{book.genre.join(", ")}}</p>
      <p>Publication: {{book.publication_year}}</p>
      <p>Author: {{book.author}}</p>
    </mat-card-content>
  </mat-card>
</div>
  `,
})
export class BookCardComponent {
  @Input() book: Book | undefined;

  ngOnInit() {}
}
