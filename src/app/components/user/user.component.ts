import { Component, Input } from '@angular/core';
import { User } from '../../types/types';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DeleteUserButtonComponent } from '../delete-user-button/delete-user-button.component';
import { ChangeUserComponent } from '../change-user-form/change-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    DeleteUserButtonComponent,
    ChangeUserComponent,
  ],
  template: `
    <div *ngIf="user">
      <mat-card class="user-card" appearance="outlined">
        <mat-card-header>
          <mat-card-title>Name: {{ user.name }}</mat-card-title>
          <mat-card-title>Role: {{ user.role }}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <app-delete-user-button [id]="user.id"> </app-delete-user-button>
          <app-change-user [user]="user"></app-change-user>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user: User | undefined;
}
