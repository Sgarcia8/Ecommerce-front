import { Component, OnInit } from '@angular/core';
import { Employee } from '../../clases/employee';
import { EmployeeService } from '../../services/employee-service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(
      data => {
        this.employees = data;
      }
    )
  }
}