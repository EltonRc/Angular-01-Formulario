import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  constructor(public employeeService:EmployeeService){}

  get employ(){
    return [...this.employeeService.listEmployee]
  }

  emitId(id:string){
    this.employeeService.deleteEmployee(id);
  }

}
