import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private api = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  getUsers(limitNum: number, skipNum: number) {
    return this.http.get(`${this.api}?limit=${limitNum}&skip=${skipNum}`);
  }


}
