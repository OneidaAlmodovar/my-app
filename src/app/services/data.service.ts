import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  employeeList: Array<Employee> = [];

  constructor(
    private httpClient:HttpClient
  ) { }

  getEmployees(): Observable<any>{
    return this.httpClient.get('https://reqres.in/api/users?delay=5');
  }

  getEmployee(id){
    //return this.employeeList[id];
    return this.httpClient.get('https://reqres.in/api/users/'+ id);
  }

  updateEmployee(id, employee){
    //this.employeeList[index] = employee;
    return this.httpClient.put('https://reqres.in/api/users/'+ id, employee );
  }
  
  setEmployee(employee: Employee){
    if(!this.employeeList){
      this.employeeList = [];
    }
    this.employeeList.push(employee);
  }

  deleteEmployee(id: number): Observable<any>{
    //this.employeeList.splice(index, 1);
    return this.httpClient.delete('https://reqres.in/api/users/' + id);
  }


}
