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

  constructor() {
	this.ratio = new Ratio();
	this.ratio.blueValue = 50;
	this.ratio.greenValue = 10;
	this.ratio.redValue = 40;
  }
}
