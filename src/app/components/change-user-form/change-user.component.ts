import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { UserFormDialogComponent } from '../create-user-form/create-user.component';
import { UserService } from '../../services/user/user.service';
import { User } from '../../types/types';

@Component({
  selector: 'app-change-user',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  template: `
    <button mat-flat-button color="primary" (click)="openChangeForm()">
      Update User
    </button>
  `,
  styleUrl: './change-user.component.css',
})
export class ChangeUserComponent {
  @Input() user: User | undefined;

  openChangeForm() {
    this.dialog.open(ChangeUserFormDialogComponent, {
      data: { user: this.user },
    });
  }
  constructor(public dialog: MatDialog) {}
}

@Component({
  selector: 'app-change-user-form',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  template: `
    <h2 mat-dialog-title>Update User</h2>
    <mat-dialog-content>
      <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput formControlName="name" />
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" />
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Phone Number</mat-label>
          <input matInput formControlName="number" />
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Role</mat-label>
          <input matInput formControlName="role" />
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Password</mat-label>
          <input matInput type="password" formControlName="password" />
        </mat-form-field>

        <div mat-dialog-actions>
          <button mat-button type="button" (click)="onNoClick()">Cancel</button>
          <button mat-button color="primary" type="submit">Update</button>
        </div>
      </form>
    </mat-dialog-content>
  `,
})
class ChangeUserFormDialogComponent {
  userForm: FormGroup;
  user: User | undefined;

  constructor(
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    private fb: FormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      user: User;
    }
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email]],
      number: [''],
      role: [''],
      password: [],
    });

    if (data.user) {
      this.userForm.patchValue({
        name: data.user.name,
        email: data.user.email,
        number: data.user.number,
        role: data.user.role,
        password: '', // not supposed to be pre-filled, backend shouldnt give this out anyway
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const changedUser: User = this.userForm.value;
      changedUser.id = this.data.user.id;
      this.userService.updateUser(changedUser).subscribe({
        next: (response) => {
          console.log('User changed succesfully :' + response);
        },
        error: (error) => {
          console.log('Error changing user: ' + error);
        },
      });
      this.dialogRef.close(changedUser);
    }
  }
}
