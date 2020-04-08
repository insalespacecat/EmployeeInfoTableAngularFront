import { Component, OnInit } from '@angular/core';
import {EmployeeInterface, EmployeeService} from '../../services/employee.service';
import {StockInterface, StocksService} from '../../services/stocks.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.css']
})
export class InfoViewComponent implements OnInit {

  employeeHolder: Array<EmployeeInterface>;
  stocksHolder: Array<StockInterface>;
  employeeEdit: EmployeeInterface;

  constructor(private employeeService: EmployeeService, private stocksService: StocksService) {
  }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(res => this.employeeHolder = res);
    this.stocksService.load().subscribe(res => this.stocksHolder = res);
  }

}
