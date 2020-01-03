import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    showSpinner = false;
    userRole: string = "";
    dasboardLogin: Login = { "username": "admin", password: "admin" };
    managementLogin: Login = { "username": "admin1", password: "admin1" };

    constructor() { }

}
