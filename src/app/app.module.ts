import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './pages/auth/auth.component';
import { InfoProcessComponent } from './components/info-process/info-process.component';
import { HomeRequestsComponent } from './components/home-requests/home-requests.component';
import { HttpClientModule }   from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LkComponent } from './pages/lk/lk.component';
import { HeaderLkComponent } from './components/header-lk/header-lk.component';
import { CreateRequestComponent } from './pages/lk/create-request/create-request.component';
import { RequestListComponent } from './pages/lk/request-list/request-list.component';
import {MatButtonModule} from '@angular/material/button';
import {TableModule} from 'primeng/table';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'lk', component: LkComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuthComponent,
    InfoProcessComponent,
    HomeRequestsComponent,
    FooterComponent,
    LkComponent,
    HeaderLkComponent,
    CreateRequestComponent,
    RequestListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    MatButtonModule,
    TableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
