import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {LogService} from '../../services/log-service.service';
import {EmployeeInterface} from '../../interfaces/employee-interface';

@Component({
  selector: 'app-add-new-employee-card',
  templateUrl: './add-new-employee-dialog.component.html',
  styleUrls: ['./add-new-employee-dialog.component.css']
})

export class AddNewEmployeeDialogComponent implements OnInit {

  public NewEmployee: EmployeeInterface = Object.assign({}, this.data.employee);
  
  constructor(public dialogRef: MatDialogRef<AddNewEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private logger: LogService) {
  }

  onSubmit(): void {
    this.data.NewEmployee = Object.assign({}, this.NewEmployee);
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }

}
