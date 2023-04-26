import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Family } from 'src/app/interfaces/family';

@Component({
  selector: 'app-revision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.scss'],
})
export class RevisionComponent implements OnInit {
  private name?: string;
  private family?: Family[];

  constructor(
    private service: FirestoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  revision() {
    if (this.name) {
      this.service
        .getFamily(this.name)
        .subscribe((d: Family[]) => (this.family = d));
    }
  }
}
