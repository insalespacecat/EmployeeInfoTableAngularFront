import { Component, OnInit } from '@angular/core';
import {EmployeeInterface, EmployeeService} from '../../services/employee.service';
import {StockInterface, StocksService} from '../../services/stocks.service';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeEditDialogComponent} from '../employee-edit-dialog/employee-edit-dialog.component';
import {AddNewEmployeeDialogComponent} from '../add-new-employee-dialog/add-new-employee-dialog.component';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.css']
})
export class InfoViewComponent implements OnInit {

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

}
