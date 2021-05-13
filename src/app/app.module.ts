import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NameEditorComponent} from './name-editor/name-editor.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent} from './dynamic-form-question/dynamic-form-question.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AppsComponent,
    FirstComponent,
    SecondComponent,
    PagenotfoundComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
