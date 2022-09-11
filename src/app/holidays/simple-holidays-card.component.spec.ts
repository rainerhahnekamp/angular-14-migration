import { fakeAsync, TestBed } from '@angular/core/testing';
import { createHolidays } from './model/holiday';
import { ChangeDetectionStrategy } from '@angular/core';
import { SimpleHolidayCardsComponent } from './simple-holiday-card.component';
import { By } from '@angular/platform-browser';

describe('Holidays with new layout', () => {
  it('should show two holidays', fakeAsync(() => {
    const holidays = createHolidays({ title: 'Tromso' }, { title: 'Alta' });

    const fixture = TestBed.configureTestingModule({
      imports: [SimpleHolidayCardsComponent],
    })
      .overrideComponent(SimpleHolidayCardsComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .createComponent(SimpleHolidayCardsComponent);

    fixture.detectChanges();
    fixture.componentInstance.holidays = holidays;
    fixture.detectChanges();

    const holidayTitles = fixture.debugElement
      .queryAll(By.css('[data-testid=holiday] h2'))
      .map((element) => element.nativeElement.textContent);

    expect(holidayTitles).toEqual(['Tromso', 'Alta']);
  }));
});
