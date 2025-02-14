import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { User } from '../../types/types';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  template: `
    <h2 mat-dialog-title>Create User</h2>
    <mat-dialog-content>
      <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput formControlName="name">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Phone Number</mat-label>
          <input matInput formControlName="number">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Role</mat-label>
          <input matInput formControlName="role">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Password</mat-label>
          <input matInput type="password" formControlName="password">
        </mat-form-field>

        <div mat-dialog-actions>
          <button mat-button type="button" (click)="onNoClick()">Cancel</button>
          <button mat-button color="primary" type="submit">Create</button>
        </div>
      </form>
    </mat-dialog-content>
  `,
})
export class UserFormDialogComponent {
  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email]],
      number: [''],
      role: [''],
      password: []
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
      this.userService.createUser(newUser).subscribe({
        next: (response) => {
            console.log("User created  succesfully :" + response)
        },
        error: (error) => {
            console.log("Error when creating user: " + error)
        }
      }
    );
      this.dialogRef.close(newUser);
    }
  }
}
