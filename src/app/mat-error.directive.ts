import { Component, AfterViewInit, Injector, Input } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { MatFormFieldControl, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: '[matErrorMessages]',
  template: '{{ error }}'
})
export class MatErrorDirective implements AfterViewInit {
  @Input() fieldLabel = '';
  error = '';
  inputRef: MatFormFieldControl<MatInput>;

  constructor(private inj: Injector) {
    // TODO stupid initialization shit here boy
    const container = this.inj.get(MatFormField);
    this.inputRef = container._control;
  }

  // Setup all initial tooling
  ngAfterViewInit() {
    // grab reference to MatFormField directive, where form control is accessible.
    const container = this.inj.get(MatFormField);
    this.inputRef = container._control;

    // sub to the control's status stream
    this.inputRef.ngControl?.statusChanges?.subscribe(this.updateErrors);
  }

  // This grabs a single active error instead of multiple.
  private updateErrors = (state: 'VALID' | 'INVALID') => {
    if (state === 'INVALID') {
      const controlErrors = this.inputRef.ngControl?.errors;
      const firstError = Object.keys(controlErrors || {})[0];

      if (firstError === 'required') {
        this.error = `${this.fieldLabel} is required.`;
      }

      if (firstError === 'minlength') {
        this.error = `${this.fieldLabel} is too short.`;
      }

      if (firstError === 'maxlength') {
        this.error = `${this.fieldLabel} is too long.`;
      }

      if (firstError === 'date') {
        this.error = `${this.fieldLabel} must be a date`;
      }

      if (firstError === 'pattern') {
        this.error = `${this.fieldLabel} should be numbers only.`;
      }

      if(firstError === 'email') {
        this.error = 'You get the point.';
      }
    }
  }
}
