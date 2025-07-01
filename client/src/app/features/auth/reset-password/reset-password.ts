import { Component } from '@angular/core';
import { AuthWrapper } from "@app/shared/components/auth-wrapper/auth-wrapper";
import { AuthForm } from "@app/shared/components/auth-form/auth-form";

@Component({
  selector: 'app-reset-password',
  imports: [AuthWrapper, AuthForm],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss'
})
export class ResetPasswordPage {

}
