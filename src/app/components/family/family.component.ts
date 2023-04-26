import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Family } from 'src/app/interfaces/family';
import { MatCardModule } from '@angular/material/card';
import { FamilyItemComponent } from '../family-item/family-item.component';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [CommonModule, FamilyItemComponent, MatCardModule, MatButtonModule],
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent {
  private name?: string;
  public family$?: Observable<Family[]>;

  constructor(
    private service: FirestoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    if (this.name) {
      this.family$ = this.service.getFamily(this.name);
    }
  }

  familyEdit(name: string) {}

  makeRevision(name: string): void {
    this.router.navigate([`/revision/${name}`]);
  }

  deleteFamily(name: string) {}
}
