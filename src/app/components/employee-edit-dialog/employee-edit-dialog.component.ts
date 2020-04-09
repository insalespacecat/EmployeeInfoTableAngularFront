import {Component, Inject, Input, OnInit} from '@angular/core';
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
  public Employee: EmployeeInterface = Object.assign({}, this.data.employee);

  onSubmit(): void {
    Object.assign(this.data.employee, this.Employee);
    this.dialogRef.close(this.data);
  }
  ngOnInit(): void {
  }


}
