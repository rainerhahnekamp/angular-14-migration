import { Routes } from '@angular/router';
import { MatCarouselModule } from 'ng-mat-carousel';
import { importProvidersFrom } from '@angular/core';
import { HomeNewComponent } from './home-new.component';

export const homeNewRoutes: Routes = [
  {
    path: '',
    providers: [importProvidersFrom(MatCarouselModule.forRoot())],
    component: HomeNewComponent,
  },
];
