import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Array<Employee>;

  employeeName:string;
  employeeLastName: string;
  employeeNumber: number;

  employee:Employee;

  constructor() { }

  ngOnInit(): void {
    this.employeeList = new Array<Employee>()
  }

  onAddEmployee(){
    this.employeeList.push(
      new Employee(
        this.employeeName, 
        this.employeeLastName, 
        this.employeeNumber)
    );
  }

  onDelete(index:number){
    this.employeeList.splice(index,1);
  }

}
