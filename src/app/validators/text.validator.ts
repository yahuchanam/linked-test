import { AbstractControl, ValidationErrors } from '@angular/forms';

export class TextValidators {
  private constructor() {}

  static withoutWhiteSpace(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const emptyRegex = /^\s+$/;
    const valid = !emptyRegex.test(control.value);
    return valid
      ? null
      : { empty: { value: 'The value has only whitespace characters' } };
  }
}
