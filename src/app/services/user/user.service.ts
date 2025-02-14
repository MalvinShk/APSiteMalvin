import { Injectable } from '@angular/core';
import { User, UserArray } from '../../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: User) {
    let response = this.http.post('http://localhost:3000/users', user, {
      responseType: 'text',
    });
    return response;
  }

  getUsers(): Observable<UserArray> {
    let users = this.http.get<UserArray>('http://localhost:3000/users');
    return users;
  }

  getUser(id: number): Observable<User> {
    let users = this.http.get<User>(`http://localhost:3000/users/${id}`);
    return users;
  }

  updateUser(user: User) {
    let response = this.http.put(
      `http://localhost:3000/users/${user.id}`,
      user
    );
    return response;
  }

  deleteUser(id: number) {
    let response = this.http.delete(`http://localhost:3000/users/${id}`, {
      responseType: 'text',
    });
    return response;
  }
}
