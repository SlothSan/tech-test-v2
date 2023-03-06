import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  public feedbackData = new BehaviorSubject<string>('');
  constructor() { }

  setFeedbackData(data: any) {
    this.feedbackData.next(data);
  }

  getFeedbackData() {
    return this.feedbackData.asObservable();
  }
}
