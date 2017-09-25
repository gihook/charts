import { Component } from '@angular/core';
import { Ratio } from './models/ratio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ratio: Ratio;
  height: number;

  constructor() {
	this.ratio = new Ratio();
	this.ratio.blueValue = 4421;
	this.ratio.greenValue = 3421;
	this.ratio.redValue = 3241;
	this.ratio.year = 2017;
	this.height = 200;
  }
}
