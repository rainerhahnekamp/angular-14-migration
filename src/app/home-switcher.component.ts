import { Component, Inject } from '@angular/core';
import { NEW_LAYOUT } from './shared/new-layout.token';
import { NgIf } from '@angular/common';
import { HomeNewComponent } from './home-new/home-new.component';
import { HomeComponent } from './home.component';

@Component({
  selector: 'eternal-home-switcher',
  template: `<eternal-home *ngIf="!newLayout"></eternal-home
    ><eternal-home-new *ngIf="newLayout"></eternal-home-new>`,
  standalone: true,
  imports: [NgIf, HomeNewComponent, HomeComponent],
})
export class HomeSwitcherComponent {
  constructor(@Inject(NEW_LAYOUT) public newLayout: boolean) {}
}
