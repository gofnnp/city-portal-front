import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent implements OnInit {
  createRequestForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createRequestForm = new FormGroup({
      "topic": new FormControl("", Validators.required),
      "category": new FormControl("", [Validators.required]),
      "description": new FormControl("", Validators.required),
      "url_img": new FormControl("")
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.createRequestForm.patchValue({
        fileSource: file
      });
    }
  }

  onSubmit() {
    if (this.createRequestForm.invalid) {
      this.markFormGroupTouched(this.createRequestForm)
      return
    }
    const createRequestForm = this.createRequestForm.value
    console.log(createRequestForm);

    // this.http.post('apiUrl', formData)
    //   .subscribe(res => {

    //     alert('Uploaded Successfully.');
    //   })
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control: FormControl) => {
      control.markAsDirty();
    });
  }


  // https://onestepcode.com/style-html-img-file-input/
  // https://www.youtube.com/watch?v=ICKN_R0wGiI

}
