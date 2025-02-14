import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { UserFormDialogComponent } from '../create-user-form/create-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../types/types';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatIconModule, MatDividerModule],
  template: `
  <mat-toolbar color="primary">
  <mat-toolbar-row>
    <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
      <mat-icon>menu</mat-icon>
    </button>
    <span>Menu</span>
  </mat-toolbar-row>

  <mat-toolbar-row>
    <button mat-button  (click)="openUserForm()">Create User</button>

  </mat-toolbar-row>
  <mat-divider></mat-divider>
  <mat-toolbar-row>
    <span>Settings</span>
    <span class="example-spacer"></span>
    <mat-icon class="example-icon" aria-hidden="false" aria-label="Example user verified icon">verified_user</mat-icon>
  </mat-toolbar-row>

  <mat-toolbar-row>
    <span>Sort Data</span>
    <mat-icon>sort</mat-icon>
    <span class="example-spacer"></span>

  </mat-toolbar-row>
  </mat-toolbar>
  `,
  styleUrl: './side-menu.css'
})
export class NavBarComponent {
  constructor(public dialog: MatDialog) {}

  openUserForm(): void {
    const dialogRef = this.dialog.open(UserFormDialogComponent);

    dialogRef.afterClosed().subscribe((result: User | undefined) => {

    });
  }
}
