import { Routes } from "@angular/router";
import { SelectorComponent } from "./selector/selector.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultComponent } from "./result/result.component";

export const appRoutes : Routes = [
    {path: 'select', component: SelectorComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'result', component: ResultComponent},
    {path: '', redirectTo:'/select', pathMatch:'full'}
];