import { HolidaysService } from './holidays.service';
import { holidays as fixtures } from './holidays.data';
import { firstValueFrom, of } from 'rxjs';
import { createSpyFromClass } from 'jest-auto-spies';
import { HttpClient } from '@angular/common/http';
import { createHolidays } from './model/holiday';
import { BASE_URL } from '../shared/base-url.token';
import { mockInject } from '../shared/mock-inject';

describe('Holidays Service', () => {
  for (let baseUrl of ['', undefined]) {
    it(`should not use the httpClient and load the fixtures with baseUrl "${baseUrl}"`, async () => {
      const httpSpy = createSpyFromClass(HttpClient);
      mockInject.with(HttpClient, httpSpy).with(BASE_URL, '');

      const holidaysService = new HolidaysService();
      expect(await firstValueFrom(holidaysService.load())).toBe(fixtures);
      expect(httpSpy.get).not.toHaveBeenCalled();
    });
  }

  it('should send an Http request when the baseUrl is set', async () => {
    const httpSpy = createSpyFromClass(HttpClient);
    const holidays = createHolidays({}, {});
    httpSpy.get.mockReturnValue(of(holidays));
    mockInject
      .with(HttpClient, httpSpy)
      .with(BASE_URL, 'http://localhost:4200');
    const holidaysService = new HolidaysService();

    expect(await firstValueFrom(holidaysService.load())).toBe(holidays);
  });
});
