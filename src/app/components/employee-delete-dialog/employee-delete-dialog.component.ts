import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-employee-delete-dialog',
  templateUrl: './employee-delete-dialog.component.html',
  styleUrls: ['./employee-delete-dialog.component.css']
})
export class EmployeeDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmployeeDeleteDialogComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  NoClick() {
    this.dialogRef.close(this.data);
  }
  YesClick() {
    this.data.delete = true;
    this.dialogRef.close(this.data);
  }
  ngOnInit(): void {
  }

}
