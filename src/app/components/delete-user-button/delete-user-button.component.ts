import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-user-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <button mat-flat-button color="primary" (click)="openDeleteConfirmation()">Delete User</button>
  `,
  styleUrl: './delete-user-button.component.css'
})
export class DeleteUserButtonComponent {
  @Input() id: number | undefined;

  constructor(private dialog: MatDialog, private userService: UserService) {}
  
  openDeleteConfirmation(): void {
    const dialogRef = this.dialog.open(DeleteUserConfirmationDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.id !== undefined) {
          
          this.userService.deleteUser(this.id).subscribe({
            next: (response) => {
              console.log('User deleted successfully:', response);
              // Optionally, you can perform any other actions here
            },
            error: (error) => {
              console.error('Error deleting user:', error);
              // Optionally, handle error scenarios
            }
          });
          
        }
      }
    });
  }
}


@Component({
  selector: 'app-delete-user-confirmation-dialog',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    MatDialogModule],
  template: `
    <h2 mat-dialog-title>Confirm Deletion</h2>
    <mat-dialog-content>
      Are you sure you want to delete this user?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button color="warn" [mat-dialog-close]="true">Yes, Delete</button>
      <button mat-button mat-dialog-close>No</button>
    </mat-dialog-actions>
  `,
})
class DeleteUserConfirmationDialogComponent {
  constructor(private dialog: MatDialog) {}
}