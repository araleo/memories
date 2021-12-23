import { Component, OnInit } from '@angular/core';
import { AudioService } from './audios.service';
import { Audio } from './audio.model';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.css'],
})
export class AudiosComponent implements OnInit {
  audios: Audio[] = [];

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.getAudios().subscribe((data) => {
      this.audios = data;
    });
  }
}
