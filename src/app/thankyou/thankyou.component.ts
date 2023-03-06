import {Component, OnInit} from '@angular/core';
import {FeedbackService} from "../services/feedback.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit{

  public companyName: Observable<string>;

  constructor(private _feedbackService: FeedbackService) {
  }

  ngOnInit() {
    this.companyName = this._feedbackService.getFeedbackData()
  }
}
