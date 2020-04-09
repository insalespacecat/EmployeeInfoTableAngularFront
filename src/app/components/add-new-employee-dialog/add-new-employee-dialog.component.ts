import {Component, Inject, Input, OnInit} from '@angular/core';
import {EmployeeInterface, EmployeeService} from '../../services/employee.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {LogService} from '../../services/log-service.service';

@Component({
  selector: 'app-add-new-employee-card',
  templateUrl: './add-new-employee-dialog.component.html',
  styleUrls: ['./add-new-employee-dialog.component.css']
})

export class AddNewEmployeeDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddNewEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private logger: LogService) {
  }
  public NewEmployee: EmployeeInterface = Object.assign({}, this.data.employee);

  onSubmit(): void {
    this.data.NewEmployee = Object.assign({}, this.NewEmployee);
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }

}
