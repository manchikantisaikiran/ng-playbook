import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Learnings';

  translateSidebar = false;
  settingsContainerState = 'scale(0)';

  constructor(private titleService:Title){
    this.titleService.setTitle(environment.env);
  }

  clickableLinks = {
    headerLinks: {
      left: {
        'menu': {
          'icon': 'menuIcon'
        },
        'logo':{ 
          'icon': ''
        }
      },
      center: {
        'About': null,
        'Services': null,
        'Contact': null,
      },
      right: {
        'settings': 'icon',
        'themes': 'icon'
      }
    },
    sidebarLinks: {
      'forms': {
        childItems: ['reactive','Template'],
        active: false
      },
      'charts': {
        childItems: ['pie chart','bar chart','line chart'],
        active: false
      },
      'components': null,
    }
  }

  toggleSidebar(){
    this.translateSidebar = !this.translateSidebar;
  }

  toggleSettingsContainerState(){
    this.settingsContainerState = this.settingsContainerState === 'scale(0)' ? 'scale(1)' : 'scale(0)';
  }
}
