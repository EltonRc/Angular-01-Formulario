import { Injectable } from '@angular/core';
import { Employee } from '../interface/employee.interface';
import { v4 as uuid} from 'uuid' 

@Injectable({providedIn: 'root'})
export class EmployeeService {
    public listEmployee: Employee[] =[
        {
            uuid: uuid(),
            name: "Elton",
            lastName: "Rodriguez",
            age:25
        },
    ]

    addEmployee(employ:Employee){
        this.listEmployee.push(employ);
    }

    deleteEmployee(id:string){
        console.log(id);
        this.listEmployee = this.listEmployee.filter( employ => id !== employ.uuid)
    }
}