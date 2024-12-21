import { Component, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
@Component({
  selector: 'atmah-single-line-input',
  standalone: true,
  imports: [],
  templateUrl: './single-line-input.component.html',
  styleUrl: './single-line-input.component.scss',
})
export class SingleLineInputComponent {
  @Input('placeholder') placeholder: string = '';
  @Input('id') id?: string;
  @Input('name') name?: string;
  @Input('password')
  get type() {
    return this._password ? 'password' : 'text';
  }
  set type(value: any) {
    this._password = coerceBooleanProperty(value);
  }

  private _password: boolean = false;
}
