import { Routes } from '@angular/router';
import { LoginPage } from './login/login';
import { SignupPage } from './signup/signup';
import { ForgotPasswordPage } from './forgot-password/forgot-password';
import { EmailVerificationPage } from './email-verification/email-verification';
import { ResetPasswordPage } from './reset-password/reset-password';

export const AUTH_ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginPage},
  {path: 'signup', component: SignupPage},
  {path: 'forgot-password', component: ForgotPasswordPage},
  {path: 'email-verification', component: EmailVerificationPage},
  {path: 'reset-password', component: ResetPasswordPage}
];
