import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { Response } from '../shared/models/response';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<Response>('http://localhost:3000/photos').pipe(
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
