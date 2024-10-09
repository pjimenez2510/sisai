import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-form-operadora',
  standalone: true,
   imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './form-operadora.component.html',
  styleUrl: './form-operadora.component.css'
})
export class FormOperadoraComponent {
  private _formBuilder = inject(FormBuilder);

  operatorFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    ruc: ['', Validators.required],
    phone1: ['', Validators.required],
    phone2: [''],
    address: ['', Validators.required],
    observation: [''],
  });
  responsibleFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });
  isLinear = true;
}
