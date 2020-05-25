import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {LogService} from '../../services/log-service.service';
import {EmployeeInterface} from '../../interfaces/employee-interface';


@Component({
  selector: 'app-employee-edit-dialog',
  templateUrl: './employee-edit-dialog.component.html',
  styleUrls: ['./employee-edit-dialog.component.css']
})
export class EmployeeEditDialogComponent implements OnInit {

  public Employee: EmployeeInterface = Object.assign({}, this.data.employee);

  constructor(public dialogRef: MatDialogRef<EmployeeEditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private logger: LogService) {
  }

  onSubmit(): void {
    Object.assign(this.data.employee, this.Employee);
    this.dialogRef.close(this.data);
  }
  ngOnInit(): void {
  }

}
