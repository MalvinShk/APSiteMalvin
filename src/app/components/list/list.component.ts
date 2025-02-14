import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { BookArray, UserArray } from '../../types/types';
import { BookCardComponent } from '../book-card/book-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `
    <h1 style="text-align: center;">List of Users</h1>
    <div class = "app-list">
      <div *ngFor="let user of this.dataList$ | async">
        <app-user [user]="user"></app-user>
      </div>
    </div>
  `,
  styleUrl: 'list.component.css',
  imports: [CommonModule, UserComponent,MatGridListModule],
})
export class ListComponent {
  dataList$: Observable<UserArray> | undefined;

  constructor(private userService: UserService) {
    this.dataList$ = undefined;
  }

  ngOnInit(): void {
    this.dataList$ = this.GetList();
  }

  GetList(): Observable<UserArray> {
    return this.userService.getUsers();
  }
}
