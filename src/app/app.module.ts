import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SingleChartComponent } from './components/single-chart/single-chart.component';
import { ChartListComponent } from './components/chart-list/chart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleChartComponent,
    ChartListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
