import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import  { FooterModule } from '../components/footer/footer.module';
import  { HeaderModule } from '../components/header/header.module';
import { TimeTrackerApiService } from '@api';
import { AuthService } from '../services/auth/auth.service';

import { LoginComponent } from '../pages/login/login.component';
import { ListComponent } from '../pages/list/list.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { EditListComponent } from '../pages/edit-list/edit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    EditListComponent,
    ListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    ReactiveFormsModule
  ],
  providers: [
    TimeTrackerApiService,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
  constructor(router: Router) {}
}
