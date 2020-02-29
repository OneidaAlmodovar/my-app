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

  setEmployee(employee: Employee){
    console.log();
    
    if(!this.employeeList){
      this.employeeList = [];
    }
    this.employeeList.push(employee);
  }

  deleteEmployee(index: number){
    this.employeeList.splice(index, 1);
  }


}
