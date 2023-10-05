import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TableDashboardComponent } from './shared/components/table-dashboard/table-dashboard.component';
import { TableFormComponent } from './shared/components/table-form/table-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableDashboardComponent,
    TableFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
