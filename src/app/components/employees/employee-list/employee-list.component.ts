import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Array<Employee>;
  employee:Employee= new Employee();

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor() { }

  ngOnInit(): void {
    this.employeeList = new Array<Employee>()
  }

  onAddEmployee(){
    this.employeeList.push(this.employee);
    this.employee = new Employee();
  }

  onDelete(index:number){
    this.employeeList.splice(index,1);
  }

}
