import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

//   getProfile() {
//     return this.http
//       .get<any>('http://localhost:3000/profile')
//       .subscribe((data) => console.log(data));
//   }
}
