import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule} from '@angular/common/http';
import { InfoViewComponent } from './components/info-view/info-view.component';
import { AppRoutes } from './app.routes';
import { AddNewEmployeeCardComponent } from './components/add-new-employee-card/add-new-employee-card.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { EmployeeEditDialogComponent } from './components/employee-edit-dialog/employee-edit-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmployeeCardComponent,
    StockCardComponent,
    InfoViewComponent,
    AddNewEmployeeCardComponent,
    EmployeeEditDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    AppRoutes,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeEditDialogComponent]
})
export class AppModule { }
