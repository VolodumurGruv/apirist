import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Observable } from 'rxjs';
// Components
import { FamilyItemComponent } from '../family-item/family-item.component';
import { Family } from 'src/app/interfaces/family';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-families',
  standalone: true,
  imports: [CommonModule, FamilyItemComponent, MatCardModule, MatButtonModule],
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.scss'],
})
export class FamiliesComponent implements OnInit {
  public families$!: Observable<Family[]>;

  constructor(private firestore: FirestoreService, private router: Router) {}

  ngOnInit(): void {
    this.families$ = this.firestore.getFamilies();
  }

  redirectToFamily(name: string): void {
    this.router.navigate([`/family/${name}`]);
  }

  makeRevision(name: string): void {
    this.router.navigate([`/revision/${name}`]);
  }
}
