import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-input',
  imports: [],
  templateUrl: './auth-input.html',
  styleUrl: './auth-input.scss'
})
export class AuthInput {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() inputValue: string = '';
}
