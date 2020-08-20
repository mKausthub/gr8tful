import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMemoriesComponent } from './compoents/add-memories/add-memories.component';
import { DashboardComponent } from './compoents/dashboard/dashboard.component';
import { SuccessComponent } from './compoents/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMemoriesComponent,
    DashboardComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
