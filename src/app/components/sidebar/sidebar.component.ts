import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface childItems {
  name: string;
  path: string;
}

interface SidebarChildItems {
  childItems: childItems[];
  active: boolean;
}

interface SidebarMenu {
  [key: string]: SidebarChildItems | null;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() clickableLinks: any;

  sidebarMenu: SidebarMenu = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    // for(let key in this.clickableLinks.sidebarLinks){
    // this.sidebarMenu[key] = this.clickableLinks.sidebarLinks[key];
    this.sidebarMenu = {
      forms: {
        childItems: [
          {
            name: 'reactive',
            path: '/reactive-forms',
          },
          {
            name: 'template',
            path: '/template-driven',
          },
        ],
        active: false,
      },
      charts: {
        childItems: [
          {
            name: 'pie chart',
            path: '/charts/pie',
          },
          {
            name: 'bar chart',
            path: '/charts/bar',
          },
          // {
          //   name: 'line chart',
          //   path: '/charts/line',
          // },
        ],
        active: false,
      },
      components: null,
      tables: null,
    };
    // }
  }

  redirect(item:childItems) {
    this.router.navigate([item]);
  }

  defaultOrder() {
    return 0;
  }

  collapseDropdown(event: any, itemName: string,hasChild:any) {
    if(!hasChild){
      this.router.navigate(['tables'])
      return;
    }
    const currentItem = this.sidebarMenu[itemName];

    if (currentItem?.active) {
      currentItem.active = false;
      return;
    }

    for (let item in this.sidebarMenu) {
      const sidebarItem = this.sidebarMenu[item];
      const isMenuItemActive = sidebarItem?.active;
      if (sidebarItem && isMenuItemActive) {
        sidebarItem.active = false;
      }
    }

    if (currentItem) {
      currentItem.active = true;
    }
  }
}
