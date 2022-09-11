import { Routes } from '@angular/router';
import { HomeSwitcherComponent } from './home-switcher.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeSwitcherComponent,
      },
      {
        path: 'holidays',
        loadChildren: () =>
          import('./holidays/holidays.routes').then((m) => m.holidayRoutes),
      },
    ],
  },
];
