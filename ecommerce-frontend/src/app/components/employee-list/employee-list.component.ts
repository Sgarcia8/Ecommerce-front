import { Component, OnInit } from '@angular/core';
import { Employee } from '../../clases/employee';
import { EmployeeService } from '../../services/employee-service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  rutaUpdate: string = 'update-employee'; //ruta para actualizar un empleado en especifico

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

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

  updateEmployee(id: number) {
    this.router.navigate([this.rutaUpdate, id])
  }
}