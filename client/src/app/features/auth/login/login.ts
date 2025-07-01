import { Component } from '@angular/core';
import { AuthWrapper } from "@app/shared/components/auth-wrapper/auth-wrapper";
import { AuthForm } from "../../../shared/components/auth-form/auth-form";

@Component({
  selector: 'app-login',
  imports: [AuthWrapper, AuthForm],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginPage {

}
