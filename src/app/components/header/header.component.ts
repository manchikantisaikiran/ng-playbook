import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  inLightMode = true;

  @Input() clickableLinks: any;

  @Output() toggleSidebar = new EventEmitter();
  @Output() toggleSettingsContainerState = new EventEmitter();

  settingsContainerState = 'scale(0)';

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme(){
    this.inLightMode = !this.inLightMode;
    document.querySelector('body')?.setAttribute('data-theme',this.inLightMode ? 'light' : 'dark');
  }

}
