import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service'
import { Employee } from "../../../models/employee.model";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: any;
  employeeId: string;

  cities: Array<string> = ['Chihuahua', 'Delicias', 'Juarez'];
  city: string;

  constructor(
    private dataService: DataService,
    private router:Router,
    private route:ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.employeeId = this.route.snapshot.paramMap.get('index');
    this.onGetEmployee();
  }

  async onGetEmployee(){
    console.log("onGetEmployee", this.employeeId);
    if(this.employeeId){
      try{
        let res = await this.dataService.getEmployee(this.employeeId).toPromise();
        this.employee = res['data'];
      }catch(error){
        console.log(error);
      }
   }
  }

  onAddEmployee(){
    console.log("onAddEmployee", this.employee);
    this.dataService.setEmployee(this.employee);
    this.employee = new Employee();
    this.router.navigateByUrl('/employees/employee-list');
  }

  onUpdateEmployee(){
    this.dataService.updateEmployee(this.employeeId, this.employee).subscribe(employee=>{
      //this.router.navigateByUrl('/employees/employee-list');
      console.log(employee);
      this.messageService.add({
        severity:'success', 
        summary:'Employee', 
        detail:'Employee saved successfully'
      });
    }, error =>{
      console.log(error);
      
      this.messageService.add({
        severity:'error', 
        summary:'Employee', 
        detail: error
      });
    });

    
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
