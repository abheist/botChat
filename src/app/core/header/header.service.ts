import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    showheaderSubComponents = false;
    userRole: string = "";
    dashBoardLink = {
        label: 'DS Dashboard',
        path: 'ds-dashboard'
    };
    managementLink = {
        label: 'Management Dashboard',
        path: 'management'
    };
    navLinks = [
        {
            label: 'DS Dashboard',
            path: 'ds-dashboard'
        },
        {
            label: 'Management Dashboard',
            path: 'management'
        },
    ];
    showNavLinks = [];
    constructor() { }
}
