import {AfterContentChecked, Component, OnInit} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {AddNewEmployeeDialogComponent} from '../add-new-employee-dialog/add-new-employee-dialog.component';
import {EmployeeInterface} from '../../interfaces/employee-interface';
import {StockInterface} from '../../interfaces/stock-interface';
import {EmployeeService} from '../../services/employee.service';
import {StocksService} from '../../services/stocks.service';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.css']
})
export class InfoViewComponent implements OnInit, AfterContentChecked {

  employeeHolder: Array<EmployeeInterface>;
  stocksHolder: Array<StockInterface>;
  addNewEmployeeResultHolder: any;
  postRequestResult: any;
  newEmployee: EmployeeInterface = {id: null, name: null, position: null, salary: null, workplace: null};

  constructor(private employeeService: EmployeeService, private stocksService: StocksService, public dialog: MatDialog) {
  }

  public openDialog(): void {
    const dialogConfig = {
      width: '250px',
      data: {NewEmployee: this.newEmployee}
    };
    const dialogRef = this.dialog.open(AddNewEmployeeDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.addNewEmployeeResultHolder = result;
      if (this.addNewEmployeeResultHolder) {
        console.log('info:' + JSON.stringify(this.addNewEmployeeResultHolder.NewEmployee));
        console.log('result:' + JSON.stringify(result));
        console.log('id(this.info.id):' + JSON.stringify(this.addNewEmployeeResultHolder));
        this.employeeService.postEmployee(this.addNewEmployeeResultHolder.NewEmployee)
          .subscribe(res => this.postRequestResult = res);
      }
    });
  }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(res => this.employeeHolder = res);
    this.stocksService.load().subscribe(res => this.stocksHolder = res);
  }
  ngAfterContentChecked(): void {
    this.employeeService.getEmployees().subscribe(res => this.employeeHolder = res);
    this.stocksService.load().subscribe(res => this.stocksHolder = res);
  }
}
