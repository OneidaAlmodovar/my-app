import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { DataService } from '../../../services/data.service'
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee:Employee= new Employee();
  employees: Array<Employee>;
  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor( 
    private dataService: DataService ,
    private confirmationService:ConfirmationService
  ) { }

  ngOnInit(): void {
    this.onGetEmployees();
  }

  onGetEmployees(){
    this.employees = this.dataService.getEmployees();
  }

  onDelete(index:number){
    this.dataService.deleteEmployee(index);
    this.onGetEmployees();
  }

  confirm(index){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove employee?',
      accept: () => {
          this.onDelete(index)
      }
    });

  }
  

}
