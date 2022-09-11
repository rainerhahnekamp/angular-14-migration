import { HolidaysService } from './holidays.service';
import { holidays as fixtures } from './holidays.data';
import { firstValueFrom, of } from 'rxjs';
import { createSpyFromClass } from 'jest-auto-spies';
import { HttpClient } from '@angular/common/http';
import { createHolidays } from './model/holiday';

describe('Holidays Service', () => {
  for (let baseUrl of ['', undefined]) {
    it(`should not use the httpClient and load the fixtures with baseUrl "${baseUrl}"`, async () => {
      const httpSpy = createSpyFromClass(HttpClient);
      const holidaysService = new HolidaysService('', httpSpy);

      expect(await firstValueFrom(holidaysService.load())).toBe(fixtures);
      expect(httpSpy.get).not.toHaveBeenCalled();
    });
  }

  it('should send an Http request when the baseUrl is set', async () => {
    const httpSpy = createSpyFromClass(HttpClient);
    const holidays = createHolidays({}, {});
    httpSpy.get.mockReturnValue(of(holidays));
    const holidaysService = new HolidaysService(
      'http://localhost:4200',
      httpSpy
    );

    expect(await firstValueFrom(holidaysService.load())).toBe(holidays);
  });
});
