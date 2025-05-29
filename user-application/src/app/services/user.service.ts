import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(page: number, limit: number): Observable<any[]> {
    // Replace with your real API endpoint that supports pagination
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);
  }
}