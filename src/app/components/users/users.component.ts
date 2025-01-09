import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service'; // Ensure this path is correct

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: { id: number; name: string; email: string }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data: { id: number; name: string; email: string }[]) => {
        console.log('Users loaded:', data); // Debugging statement
        this.users = data;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  editUser(user: { id: number; name: string; email: string }) {
    console.log('Editing user:', user);
    // Add logic to handle editing
  }

  deleteUser(userId: number): void {
    console.log('Deleting user with ID:', userId);
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.users = this.users.filter((user) => user.id !== userId);
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}