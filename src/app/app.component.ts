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
  ratioList: Ratio[];
  height: number;

  constructor() {
	this.ratio = new Ratio();
	this.ratio.blueValue = 4421;
	this.ratio.greenValue = 3421;
	this.ratio.redValue = 3241;
	this.ratio.year = 2017;
	this.height = 200;


	let ratio1 = new Ratio();
	ratio1.blueValue = 4421;
	ratio1.greenValue = 3421;
	ratio1.redValue = 3241;
	ratio1.year = 2017;

	let ratio2 = new Ratio();
	ratio2.blueValue = 4421;
	ratio2.greenValue = 3421;
	ratio2.redValue = 3241;
	ratio2.year = 2017;

	let ratio3 = new Ratio();
	ratio3.blueValue = 4421;
	ratio3.greenValue = 3421;
	ratio3.redValue = 3241;
	ratio3.year = 2017;

	this.ratioList = [ratio1, ratio2, ratio3];
  }
}
