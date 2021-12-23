import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { Response } from '../shared/models/response';
import { Profile } from './profile.models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http
      .get<Response>('http://localhost:3000/profile')
      .pipe(
        map((response: Response) => {
          const profile: Profile = {
            id: response.data['_id'],
            name: response.data['name'],
            birth: response.data['birth'],
            placeOfBirth: response.data['placeOfBirth'],
            profileImage: response.data['profileImage'],
          };
          return profile;
        })
      )
  }
}
