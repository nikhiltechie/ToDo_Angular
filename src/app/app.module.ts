import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TaskinputComponent } from './taskinput/taskinput.component';
import { TaskviewComponent } from './taskview/taskview.component';
import { TaskComponent } from './task/task.component';
import {TaskService} from '../services/task.service';
import { 
  MatFormFieldModule,
  MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskinputComponent,
    TaskviewComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
