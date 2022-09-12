import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NEW_LAYOUT } from './shared/new-layout.token';
import { inject } from '@angular/core';
import { HomeNewComponent } from './home-new/home-new.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        canMatch: [() => !inject(NEW_LAYOUT)],
        component: HomeComponent,
      },
      {
        path: '',
        canMatch: [() => inject(NEW_LAYOUT)],
        component: HomeNewComponent,
      },
      {
        path: 'holidays',
        loadChildren: () =>
          import('./holidays/holidays.routes').then((m) => m.holidayRoutes),
      },
    ],
  },
];
