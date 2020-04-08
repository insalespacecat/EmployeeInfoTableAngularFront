import {Component, Input, OnInit} from '@angular/core';
import {EmployeeInterface, EmployeeService} from '../../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeEditDialogComponent} from '../employee-edit-dialog/employee-edit-dialog.component';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {
  @Input() info: EmployeeInterface;
  patchRequestResult;
  constructor(private employeeService: EmployeeService,  public dialog: MatDialog) {}
  openDialog(): void {
    const dialogConfig = {
      width: '250px',
      data: {employee: this.info}
    };
    const dialogRef = this.dialog.open(EmployeeEditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.info = result;
      console.log('info:' + JSON.stringify(this.info));
      console.log('result:' + JSON.stringify(result));
      this.employeeService.patchEmployee(this.info.id, this.info).subscribe(res => this.patchRequestResult = res);
    });
  }


  ngOnInit(): void {
  }

}
