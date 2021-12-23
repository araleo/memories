import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Profile } from './profile.models';
import { Response } from '../shared/models/response';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile() {
    const endpoint = environment.apiUrl + 'profile';
    return this.http.get<Response>(endpoint).pipe(
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
    );
  }
}
