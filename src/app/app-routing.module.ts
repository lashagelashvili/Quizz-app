import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorComponent } from "./selector/selector.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultComponent } from "./result/result.component";


const routes : Routes = [
  {path: 'select', component: SelectorComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'result', component: ResultComponent},
  {path: '', redirectTo:'/select', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
