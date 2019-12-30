import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, { name: 'Angular developer', bio: 'Five years experience' }),

      new AdItem(HeroProfileComponent, { name: 'Data Scientist', bio: 'who can deliver' }),

      new AdItem(HeroJobAdComponent, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!'
      }),

      new AdItem(HeroJobAdComponent, {
        headline: 'Mediahuis is recruiting',
        body: 'Apply today'
      }),
    ];
  }
}
