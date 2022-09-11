import { Routes } from '@angular/router';
import { UserLoaderGuard } from './security/user-loader.guard';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { HomeSwitcherComponent } from './home-switcher.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [UserLoaderGuard],
    children: [
      {
        path: '',
        component: HomeSwitcherComponent,
      },
      { path: 'sign-up', component: SignUpComponent, title: 'Sign up' },
      {
        path: 'holidays',
        loadChildren: () =>
          import('./holidays/holidays.routes').then((m) => m.holidayRoutes),
      },
    ],
  },
];
