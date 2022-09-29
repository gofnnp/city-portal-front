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

  constructor(private router: Router) {
    this.signUpForm = new FormGroup({

      "userLastname": new FormControl("", Validators.required),
      "userName": new FormControl("", Validators.required),
      "userOtch": new FormControl(""),
      "userLogin": new FormControl("", Validators.required),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "userPass": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "userRepass": new FormControl("", [Validators.required, Validators.minLength(8)])
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
