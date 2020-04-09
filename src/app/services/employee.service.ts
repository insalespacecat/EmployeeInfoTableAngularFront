import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface EmployeeInterface {
  id: number;
  name: string;
  position: string;
  salary: number;
  workplace: string;
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
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

  constructor(private http: HttpClient) { }
}
