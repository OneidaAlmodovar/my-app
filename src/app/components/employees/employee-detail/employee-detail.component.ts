import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service'
import { Employee } from "../../../models/employee.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  employeeId: string;

  constructor(
    private dataService: DataService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.employeeId = this.route.snapshot.paramMap.get("index");
    console.log(this.employeeId);
    
  }

  onAddEmployee(){
    console.log("onAddEmployee", this.employee);
    this.dataService.setEmployee(this.employee)
    this.employee = new Employee();
    this.router.navigateByUrl('/employees/employee-list');
  }

}
