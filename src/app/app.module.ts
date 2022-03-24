import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IconDirective } from './directives/icon/icon.directive';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsComponent } from './pages/charts/charts.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './pages/template-driven-forms/template-driven-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from './components/tables/tables.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    IconDirective,
    HomeComponent,
    ChartsComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    TablesComponent,
    ModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule.withConfig({ disableAnimations: false})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
