// SAM4SC:MCAM
import { Routes } from '@angular/router';
import { HolidaysComponent } from './holidays.component';
import { RequestInfoComponent } from './request-info/request-info.component';

export const holidayRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HolidaysComponent,
        title: 'Holidays',
      },
      {
        path: 'request-info/:holidayId',
        component: RequestInfoComponent,
        title: 'Request more info',
      },
    ],
  },
];
