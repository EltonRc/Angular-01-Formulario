import { Component } from '@angular/core';
import { Employee } from '../../interface/employee.interface';
import { v4 as uuid } from 'uuid';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(public employeeService:EmployeeService){}

  public employee: Employee = {
    uuid: uuid(),
    name:"",
    lastName: "",
    age: 0
  }
  public nameRequerid:boolean = true;
  public lastNameRequerid: boolean = true;
  public ageRequired: boolean = true;
  emitEmployee(){
    if( this.employee.name === "" || this.employee.lastName === "" || this.employee.age === 0){
      this.nameRequerid = false;
      this.lastNameRequerid= false;
      this.ageRequired=false;
      return;
    }
    this.employeeService.addEmployee(this.employee);
    this.employee = {uuid:uuid(), name:"",lastName:"",age:0};
    this.nameRequerid = true;
    this.lastNameRequerid= true;
    this.ageRequired=true;
  }
 
}
