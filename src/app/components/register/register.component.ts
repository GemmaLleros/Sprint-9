// register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/users.service';
import { User } from '../interfaces/user';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;
    emailExists = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() { return this.form.controls; }

    onSubmit() {
      this.submitted = true;
  
      if (this.form.invalid) {
          return;
      }
  
      this.loading = true;
      const newUser: User = {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        age: '',
        email: this.form.value.email,
        password: this.form.value.password,
        id: 0
      };
  
      this.userService.findAll().subscribe(users => {
          const existingUser = users.find((user: User) => user.email === newUser.email);
          if (existingUser) {
              alert()
              this.loading = false;
              this.emailExists = true;
          } else {
              this.userService.create(newUser)
                  .subscribe(
                      data => {
                          this.router.navigate(['/login'], { queryParams: { registered: true }});
                      },
                      error => {
                          this.loading = false;
                      });
          }
      });
  }
  
}
