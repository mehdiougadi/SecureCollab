import { Component } from '@angular/core';
import { AuthWrapper } from "@app/shared/components/auth-wrapper/auth-wrapper";
import { AuthForm } from "@app/shared/components/auth-form/auth-form";

@Component({
  selector: 'app-signup',
  imports: [AuthWrapper, AuthForm],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class SignupPage {

}
