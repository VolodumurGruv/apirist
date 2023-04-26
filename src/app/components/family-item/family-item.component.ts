import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Family } from 'src/app/interfaces/family';

@Component({
  selector: 'app-family-item',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './family-item.component.html',
  styleUrls: ['./family-item.component.scss'],
})
export class FamilyItemComponent {
  @Input() family!: Family;
}
