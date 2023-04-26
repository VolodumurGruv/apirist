import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-add-family',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.scss'],
})
export class AddFamilyComponent {
  public familyForm = this.fb.group({
    name: [''],
    frames: [''],
    breed: [''],
    crationDate: [''],
    imageUrl: [''],
  });

  constructor(
    private fb: FormBuilder,
    private fireStorage: FirestorageService,
    private fireStore: FirestoreService
  ) {}

  uploadImage(event: any) {
    const file: File = event.target.files[0];

    this.fireStorage
      .uploadFile(file)
      .then((url) => this.familyForm.patchValue({ imageUrl: url }));
  }

  public onSubmit() {

    this.fireStore.addFamily(this.familyForm.value);
    this.familyForm.reset();
  }
}
