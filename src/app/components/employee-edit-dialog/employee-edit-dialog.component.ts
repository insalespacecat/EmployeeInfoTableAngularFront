import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {LogService} from '../../services/log-service.service';
import {EmployeeInterface} from '../../services/employee.service';

@Component({
  selector: 'app-employee-edit-dialog',
  templateUrl: './employee-edit-dialog.component.html',
  styleUrls: ['./employee-edit-dialog.component.css']
})
export class EmployeeEditDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<EmployeeEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private logger: LogService) {
  }
  public Employee: EmployeeInterface = {id: null, name: null, position: null,
    salary: null, workplace: null};

  onSubmit(): void {
    this.logger.log('Data object' + JSON.stringify(this.data));
    this.logger.log('Employee object' + JSON.stringify(this.Employee));
    if (this.Employee.name) {
      this.data.name = this.Employee.name;
    }
    if (this.Employee.position) {
      this.data.position = this.Employee.position;
    }
    if (this.Employee.workplace) {
      this.data.workplace = this.Employee.workplace;
    }
    if (this.Employee.salary) {
      this.data.salary = this.Employee.salary;
    }
    this.logger.log('Data object ftr chk' + JSON.stringify(this.data));
    this.dialogRef.close(this.data);
  }
  ngOnInit(): void {
  }


}
