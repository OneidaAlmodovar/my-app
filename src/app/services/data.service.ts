import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  employeeList: Array<Employee> = [];

  constructor() { }

  getEmployees(){
    return this.employeeList;
  }

  getEmployee(index){
    return this.employeeList[index];
  }

  updateEmployee(index, employee){
    this.employeeList[index] = employee;
  }
  
  setEmployee(employee: Employee){
    if(!this.employeeList){
      this.employeeList = [];
    }
    this.employeeList.push(employee);
  }

  deleteEmployee(index: number){
    this.employeeList.splice(index, 1);
  }


}
