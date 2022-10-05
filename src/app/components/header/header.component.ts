import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showButtons: boolean = false;
  @Input() authPage!: string;
  @Input() showAuthModel: boolean = false;
  signUpForm!: FormGroup;
  signInForm!: FormGroup;

  constructor(private router: Router, private http: HttpClient) {
    this.signUpForm = new FormGroup({
      "last_name": new FormControl("", Validators.required),
      "first_name": new FormControl("", Validators.required),
      "otch": new FormControl(""),
      "login": new FormControl("", Validators.required),
      "email": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "password": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "userRepass": new FormControl("", [Validators.required, Validators.minLength(8)])
    });
    this.signInForm = new FormGroup({
      "login": new FormControl("", Validators.required),
      "password": new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit(): void {
  }

  routeAuth(authPage: string) {
    this.router.navigate(['/auth', { authPage: authPage }]);
  }


  signUp() {
    if (this.signUpForm.invalid) {
      this.markFormGroupTouched(this.signUpForm)
      return
    }
    const userData = this.signUpForm.value
    console.log(userData);
    
    this.http.post('http://78.85.18.10:5005/add_user', userData).subscribe(
      {
        next: (data: any) => console.log(data),
        error: (error) => console.error(error)
      }
    );
  }

  signIn() {
    if (this.signInForm.invalid) {
      this.markFormGroupTouched(this.signUpForm)
      return
    }
    const userData = this.signInForm.value
    this.http.post('http://78.85.18.10:5005/auth', userData).subscribe(
      {
        next: (data: any) => console.log(data),
        error: (error) => console.error(error)
      }
    );
  }

  changeAuthPage(page: string) {
    this.authPage = page
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control: FormControl) => {
      control.markAsDirty();
    });
  }
}
