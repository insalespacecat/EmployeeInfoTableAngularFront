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
    return this.http.get<Array<EmployeeInterface>>('http://localhost:9999/query/getEmployees');
  }
  postEmployee(employee: EmployeeInterface) {
    return this.http.post('http://localhost:9999/query/addEmployee', employee);
  }
  patchEmployee(id: number, employee: EmployeeInterface) {
    return this.http.patch('http://localhost:9999/query/patch/' + id, employee);
  }
  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:9999/query/delete/' + id);
  }

  constructor(private http: HttpClient) { }
}
