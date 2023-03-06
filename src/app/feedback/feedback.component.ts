import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FeedbackService} from "../services/feedback.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit{
  feedbackForm: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router, private _feedbackService: FeedbackService) {
  }
  ngOnInit(): void {
    this.feedbackForm = this._fb.group({
      name: ['', [Validators.minLength(6),Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      companyName: new FormControl('', [Validators.required]),
      jobTitle: new FormControl('', [Validators.required]),
      yearsInRole: new FormControl(0, [Validators.min(1), Validators.max(50)]),
      additionalFeedback: new FormControl('', [Validators.required])
    })

    this.feedbackForm.get('companyName').valueChanges.subscribe((value) => {
      if(value === 'example') {
        this.feedbackForm.reset()
        this.feedbackForm.controls['companyName'].patchValue('Demo Entry Inc')
      }
    })
  }

  handleSubmit(): void {
    console.log(this.feedbackForm);
    this._feedbackService.setFeedbackData(this.feedbackForm.controls['companyName'].value)
    this._router.navigate(["/thankyou"])
  }

}
