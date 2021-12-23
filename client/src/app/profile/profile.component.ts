import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile, ProfileFactory } from './profile.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: Profile = ProfileFactory();

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.profile = data;
    });
  }
}
