import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'feedback', component: FeedbackComponent},
  {path: 'thankyou', component: ThankyouComponent},
  {path: '', redirectTo: '/feedback', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
