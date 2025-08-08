import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Store/users/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private api = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  getUsers(limitNum: number, skipNum: number) {
    return this.http.get<{ users: User[] }>(`${this.api}?limit=${limitNum}&skip=${skipNum}`);
  }

  getUserById(id: number):Observable<any>{
    return this.http.get<User>(`${this.api}/${id}`);
  }
}
