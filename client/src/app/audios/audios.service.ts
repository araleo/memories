import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { Response } from '../shared/models/response';
import { Audio } from './audio.model';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor(private http: HttpClient) {}

  getAudios() {
    return this.http.get<Response>('http://localhost:3000/audios').pipe(
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
