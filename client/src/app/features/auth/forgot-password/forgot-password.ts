import { Component } from '@angular/core';
import { AuthWrapper } from "@app/shared/components/auth-wrapper/auth-wrapper";
import { AuthForm } from "@app/shared/components/auth-form/auth-form";

@Component({
  selector: 'app-forgot-password',
  imports: [AuthWrapper, AuthForm],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss'
})
export class ForgotPasswordPage {

}
