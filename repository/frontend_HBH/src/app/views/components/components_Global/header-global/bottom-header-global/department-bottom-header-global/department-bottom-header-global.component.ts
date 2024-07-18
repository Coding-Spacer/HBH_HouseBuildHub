import { Component } from '@angular/core';

@Component({
  selector: 'app-department-bottom-header-global',
  templateUrl: './department-bottom-header-global.component.html',
  styleUrls: ['./department-bottom-header-global.component.css']
})
export class DepartmentBottomHeaderGlobalComponent {

 constructor() {
    for (const item of this.menuItems) {
      this.displayComponent[item.specialValue] = false;
    }
  }

  displayComponent: { [key: string]: boolean } = {};

  menuItems = [
    { name: 'Houseplans', specialValue: 'houseplans' },
  ];

  showComponent(componentName: string) {
    this.displayComponent[componentName] = true;
  }

  hideComponent(componentName: string) {
    this.displayComponent[componentName] = false;
  }

}



