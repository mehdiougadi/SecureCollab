import { Component } from '@angular/core';
import { AuthWrapper } from "@app/shared/components/auth-wrapper/auth-wrapper";
import { AuthForm } from "@app/shared/components/auth-form/auth-form";

@Component({
  selector: 'app-email-verification',
  imports: [AuthWrapper, AuthForm],
  templateUrl: './email-verification.html',
  styleUrl: './email-verification.scss'
})
export class EmailVerificationPage {

}
