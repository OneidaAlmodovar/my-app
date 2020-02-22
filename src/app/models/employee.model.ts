export class Employee {
  name:string;
  lastName: string;
  number: number;
  data:any;

  responsabilities: Array<string>;

  constructor(
    name?:string, 
    lastName?:string, 
    number?: number,
    responsabilities?:Array<string>
  ){
    this.name = name;
    this.lastName = lastName;
    this.number = number;
    this.responsabilities = responsabilities;
  }
}