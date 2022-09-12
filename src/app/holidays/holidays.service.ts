import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../shared/base-url.token';
import { HttpClient } from '@angular/common/http';
import { Holiday } from './model/holiday';
import { asyncScheduler, scheduled } from 'rxjs';
import { holidays } from './holidays.data';

@Injectable({ providedIn: 'root' })
export class HolidaysService {
  private httpClient = inject(HttpClient);
  private baseUrl = inject(BASE_URL, { optional: true });

  load() {
    if (this.baseUrl) {
      return this.httpClient.get<Holiday[]>(`${this.baseUrl}/holidays`);
    } else {
      return scheduled([holidays], asyncScheduler);
    }
  }
}
