import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HolidayCardsComponent } from './holiday-cards-component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Holiday } from './model/holiday';
import { CommonModule } from '@angular/common';

@Component({
  template: ` <div class="flex flex-wrap justify-evenly">
    <mat-card *ngFor="let holiday of holidays" class="mt-4 max-w-xs">
      <mat-card-header>
        <mat-card-title>{{ holiday.title }}</mat-card-title>
        <mat-card-subtitle>{{ holiday.teaser }}</mat-card-subtitle>
      </mat-card-header>
      <img [src]="holiday.imageUrl" [alt]="holiday.title" />
      <mat-card-content>
        {{ holiday.description }}
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button>More Info</button>
      </mat-card-actions>
    </mat-card>
  </div>`,
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultHolidayCardsComponent implements HolidayCardsComponent {
  @Input() holidays: Holiday[] = [];
}
