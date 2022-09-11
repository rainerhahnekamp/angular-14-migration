import { Inject, Injectable, Optional } from '@angular/core';
import { BASE_URL } from '../shared/base-url.token';
import { HttpClient } from '@angular/common/http';
import { Holiday } from './model/holiday';
import { asyncScheduler, scheduled } from 'rxjs';
import { holidays } from './holidays.data';

@Injectable({ providedIn: 'root' })
export class HolidaysService {
  constructor(
    @Inject(BASE_URL) @Optional() private baseUrl: string,
    private httpClient: HttpClient
  ) {}

  load() {
    if (this.baseUrl) {
      return this.httpClient.get<Holiday[]>(`${this.baseUrl}/holidays`);
    } else {
      return scheduled([holidays], asyncScheduler);
    }
  }
}
