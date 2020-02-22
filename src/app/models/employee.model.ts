export class Employee {
  name:string;
  lastName: string;
  employeeNumber: number;
  data:any;

  responsabilities: Array<string>;

  constructor(
    name:string, 
    lastName:string, 
    employeeNumber: number,
    responsabilities?:Array<string>
  ){
    this.name = name;
    this.lastName = lastName;
    this.employeeNumber = employeeNumber;
    this.responsabilities = responsabilities;
  }
}