import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from '@swimlane/ngx-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { TablesComponent } from './components/tables/tables.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './pages/template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  {
    path: 'reactive-forms', component: ReactiveFormsComponent
  },
  {
    path: 'template-driven', component: TemplateDrivenFormsComponent
  },
  {
    path: 'tables', component: TablesComponent
  },
  {
    path: 'charts', component: ChartsComponent, children: [
      {
        path: 'bar', component: BarChartComponent
      },
      {
        path: 'line', component: LineChartComponent
      },
      {
        path: 'pie', component: PieChartComponent
      }
    ]
  },
  {
    path:'', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
