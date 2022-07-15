import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TablerecordComponent } from './pages/tablerecord/tablerecord.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomoneDirective } from './direc/customone.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TablerecordComponent,
    CustomoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    HttpClientModule,FormsModule


  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
