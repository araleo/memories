import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Photo } from './photo.model';
import { Response } from '../shared/models/response';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    const endpoint = environment.apiUrl + 'photos';
    return this.http.get<Response>(endpoint).pipe(
      map((response: Response) => {
        const allPhotos: Photo[] = [];
        for (const photo of response.data as any) {
          const newPhoto: Photo = {
            id: photo._id,
            url: photo.url,
            description: photo.description,
          };
          allPhotos.push(newPhoto);
        }
        return allPhotos;
      })
    );
  }
}
