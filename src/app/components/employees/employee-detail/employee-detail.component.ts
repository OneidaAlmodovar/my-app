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

  cities: Array<string> = ['Chihuahua', 'Delicias', 'Juarez'];
  city: string;

  constructor(
    private dataService: DataService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.employeeId = this.route.snapshot.paramMap.get('index');

    if(this.employeeId){
      this.employee = this.dataService.getEmployee(this.employeeId );
    }
  }

  onAddEmployee(){
    console.log("onAddEmployee", this.employee);
    this.dataService.setEmployee(this.employee);
    this.employee = new Employee();
    this.router.navigateByUrl('/employees/employee-list');
  }

  onUpdateEmployee(){
    this.dataService.updateEmployee(this.employeeId, this.employee);
    this.router.navigateByUrl('/employees/employee-list');
  }

  onKeyUp(event){
    console.log(event.key);
    console.log(event.target.value);
  }

  onChange(event){
    console.log(event);
    console.log(event.type);
    console.log(event.target.value);
  }

}
