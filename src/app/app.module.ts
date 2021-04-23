import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from './views/shared/breadcrumb/breadcrumb.component';
import { PaginationComponent } from './views/shared/pagination/pagination.component';
import { PaginatorModule } from 'primeng/paginator';
import { AddStockDialogComponent } from './views/shared/add-stock-dialog/add-stock-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreadcrumbComponent,
    PaginationComponent,
    AddStockDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    PaginatorModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [MatMenuModule, MatButtonModule, MatTableModule, MatCardModule, PaginatorModule, FormsModule],
  entryComponents: [AddStockDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
