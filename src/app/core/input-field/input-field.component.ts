import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [ ReactiveFormsModule,MatFormFieldModule, MatInputModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {

  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control!: FormControl | null;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() errorMessage: string = 'Invalid input';
}
