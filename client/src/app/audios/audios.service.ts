import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';

import { Audio } from './audio.model';
import { environment } from 'src/environments/environment';
import { Response } from '../shared/models/response';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor(private http: HttpClient) {}

  getAudios() {
    const endpoint = environment.apiUrl + 'audios';
    return this.http.get<Response>(endpoint).pipe(
      map((response: Response) => {
        const allAudios: Audio[] = [];
        for (const audio of response.data as any) {
          const newAudio: Audio = {
            id: audio._id,
            url: audio.url,
            description: audio.description,
          };
          allAudios.push(newAudio);
        }
        return allAudios;
      })
    );
  }
}
