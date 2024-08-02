import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-frontend';
  employees = 'employees'; //Se usa para el link de lista de empleados
  createEmployee = 'create-employee'; //Se usa para el link de creacion de empleados
}
