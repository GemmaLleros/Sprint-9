import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    public accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.accountService.login(email, password).subscribe(result => {
      if (result) {
        this.loginError = false;
        this.router.navigate(['/home']);
        const user = this.accountService.userValue;
        localStorage.setItem('user', JSON.stringify(user));
        this.accountService.userSubject.next(user);
      } else {
        this.loginError = true;
      }
    });
  }

  required(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }
}
