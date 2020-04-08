import {Component, Input, OnInit} from '@angular/core';
import {EmployeeInterface, EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-add-new-employee-card',
  templateUrl: './add-new-employee-card.component.html',
  styleUrls: ['./add-new-employee-card.component.css']
})

export class AddNewEmployeeCardComponent implements OnInit {
  newEmployee: EmployeeInterface = {id: null, name: '', workplace: '', salary: null, position:  ''};
  constructor(private employeeService: EmployeeService) {
  }
  onSubmit() {
    this.employeeService.postEmployee(this.newEmployee);
  }

  ngOnInit(): void {
  }

}
