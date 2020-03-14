import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  employeeList: Array<Employee> = [];

  constructor(
    private httpClient:HttpClient
  ) { }

  getEmployees(): Observable<any>{
    return this.httpClient.get(environment.api +'/users?delay=1');
  }
  
  find(path, params?): Observable<any>{
    return this.httpClient.get(environment.api + path + params);
  }

  findById(path, id): Observable<any>{
    return this.httpClient.get(environment.api + path + "/"+ id);
  }


  getEmployee(id){
    //return this.employeeList[id];
    return this.httpClient.get(environment.api + '/users/'+ id);
  }

  updateEmployee(id, employee){
    //this.employeeList[index] = employee;
    return this.httpClient.put(environment.api + '/users/'+ id, employee );
  }
  
  setEmployee(employee: Employee){
    if(!this.employeeList){
      this.employeeList = [];
    }
    this.employeeList.push(employee);
  }


  deleteEmployee(id: number): Observable<any>{
    //this.employeeList.splice(index, 1);
    return this.httpClient.delete(environment.api +'/users/' + id);
  }


}
