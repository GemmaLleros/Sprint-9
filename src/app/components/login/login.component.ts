import { UsersService } from 'src/app/components/services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private authService: UsersService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      email:['',Validators.compose([Validators.email,Validators.required])],
      password:['',Validators.compose([Validators.minLength(6),Validators.required],)]
    });
  }
  
  public login(): void {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    console.log("Email: ", email); 
    
    this.authService.login(email, password).subscribe(
      res => {
        let token:string | any= Object.values(res);
        localStorage.setItem('token', token[0]);
     this.router.navigate(['/home']);
      },err=>console.log(err)
    )
     
  }
    required( field : string){
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched
    }

    
    
}