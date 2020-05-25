import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeInterface} from '../interfaces/employee-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Array<EmployeeInterface>>('https://employee-info-table-back.herokuapp.com/query/getEmployees');
  }
  postEmployee(employee: EmployeeInterface) {
    return this.http.post('https://employee-info-table-back.herokuapp.com/query/addEmployee', employee);
  }
  patchEmployee(id: number, employee: EmployeeInterface) {
    return this.http.patch('https://employee-info-table-back.herokuapp.com/query/patch/' + id, employee);
  }
  deleteEmployee(id: number) {
    return this.http.delete('https://employee-info-table-back.herokuapp.com/query/delete/' + id);
  }
}
