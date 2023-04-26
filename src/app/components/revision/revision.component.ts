import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// services and interfaces
import { Family } from 'src/app/interfaces/family';
import { FirestoreService } from 'src/app/services/firestore.service';
// helpers
import { nextRevisionIn } from 'src/app/helpers/nextRevisionIn';
// MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  MatMomentDateModule,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
@Component({
  selector: 'app-revision',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
  ],
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.scss'],
  providers: [
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
})
export class RevisionComponent implements OnInit {
  private name?: string;
  private family?: Family[];
  private days: number = 7;
  private nextRevision = nextRevisionIn(this.days);

  public revisionForm = this.fb.group({
    revisionDate: [new Date()],
    addedFrames: [0],
    removedFrames: [0],
    remark: [''],
    nextRevision: [
      new Date(
        this.nextRevision.year,
        this.nextRevision.month,
        this.nextRevision.currentDate
      ),
    ],
    todoNextTime: [''],
  });

  constructor(
    private fb: FormBuilder,
    private service: FirestoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  onSubmit() {
    if (this.name) {
      this.service
        .getFamily(this.name)
        .subscribe((d: Family[]) => (this.family = d));
    }
  }
}
