import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-family',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.scss'],
})
export class AddFamilyComponent {
  public familyForm = this.fb.group({
    name: []
  });
  constructor(private fb: FormBuilder) {}
}
