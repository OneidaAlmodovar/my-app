import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service'
import { Employee } from "../../../models/employee.model";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.employee = new Employee();
  }

  onAddEmployee(){
    console.log("onAddEmployee", this.employee);
    this.dataService.setEmployee(this.employee)
    this.employee = new Employee();
  }

}
