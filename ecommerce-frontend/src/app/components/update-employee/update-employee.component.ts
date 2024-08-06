import { Employee } from './../../clases/employee';
import { EmployeeService } from './../../services/employee-service/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee();
  routeEmployeesList: string = "/employees";

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data},
      error => console.log(error)
    );
  }

  updateEmployee(employee: Employee){
    this.employeeService.putEmployee(this.id, employee).subscribe(
      data => {
        this.employee = new Employee();
        this.goToList();
      },
      error => console.log(error)
    );
  }
  goToList() {
    this.router.navigate([this.routeEmployeesList])
  }

  onSubmit() {
    this.updateEmployee(this.employee);
    }
  
}
