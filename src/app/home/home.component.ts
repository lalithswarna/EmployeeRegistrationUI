import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import {Employee} from '@/_models/employee'
import { AlertService, AuthenticationService } from '@/_services';
import {EmployeeService} from '@/_services/employee.service'

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    allEmployees: Employee[];

    constructor(
        private authenticationService: AuthenticationService,
        private employeeService: EmployeeService,
        private alertService: AlertService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        const result = confirm('Are you sure, you want to delete this Employee?');
    
            if (result) {
                this.employeeService.deleteEmployee(id).subscribe(() => {
                    this.loadAllUsers();
                });
            }
    }

    private loadAllUsers() {
            this.employeeService.getAllEmployees().subscribe((data: any[]) => {
                this.allEmployees = data;
              });
    }
}