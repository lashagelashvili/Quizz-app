import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClientModule} from '@angular/common/http';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    // MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
