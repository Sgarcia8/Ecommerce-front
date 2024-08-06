import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee-service/employee.service';
import { Employee } from './../../clases/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  routeEmployeesList: string = "/employees";

  constructor(
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      data => {
        console.log(data);
        this.goToEmployeeList();
      },
      error => console.log(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate([this.routeEmployeesList])
  }

  onSubmit() {
    this.saveEmployee();
  }
}
