import {Component, Input, OnInit} from '@angular/core';
import {EmployeeInterface, EmployeeService} from '../../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeEditDialogComponent} from '../employee-edit-dialog/employee-edit-dialog.component';
import {EmployeeDeleteDialogComponent} from '../employee-delete-dialog/employee-delete-dialog.component';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {
  @Input() info: EmployeeInterface;
  editDialogResultHolder: any;
  deleteDialogResultHolder: any;
  patchRequestResult;
  deleteRequestResult;
  constructor(private employeeService: EmployeeService,  public dialog: MatDialog) {}
  openEditDialog(): void {
    const dialogConfig = {
      width: '250px',
      data: {employee: this.info}
    };
    const dialogRef = this.dialog.open(EmployeeEditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.editDialogResultHolder = result;
      if (this.editDialogResultHolder) {
        this.employeeService.patchEmployee(this.editDialogResultHolder.employee.id, this.editDialogResultHolder.employee)
          .subscribe(res => this.patchRequestResult = res);
      }
    });
  }
  openDeleteDialog(): void {
    const dialogConfig = {
      width: '250px',
      data: {delete: false}
    };
    const dialogRef = this.dialog.open(EmployeeDeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.deleteDialogResultHolder = result;
      console.log(JSON.stringify(this.deleteDialogResultHolder));
      if (this.deleteDialogResultHolder.delete) {
          this.employeeService.deleteEmployee(this.info.id).subscribe(res => this.deleteRequestResult = res);
          this.info.name = 'deleted';
      }
    });
  }

  ngOnInit(): void {
  }

}
