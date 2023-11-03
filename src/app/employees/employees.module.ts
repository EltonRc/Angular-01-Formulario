import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { MainPageComponent } from './pages/main-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ListEmployeeComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class EmployeesModule { }
