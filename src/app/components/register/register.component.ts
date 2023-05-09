import { UsersService } from 'src/app/components/services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router} from '@angular/router';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
  }
  onSubmit(): void {
    const user: User = this.registerForm.value
    console.log(user);

    this.usersService.register(user).subscribe(
      res => {
        let token: string | any = Object.values(res);
        localStorage.setItem('token', token[0]);
        this.router.navigate(['/home']);
      }, err => console.log(err)
    )

  }
  required(field: string) {
    return this.registerForm.controls[field].errors && this.registerForm.controls[field].touched;
  }

}