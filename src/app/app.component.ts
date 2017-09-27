import { Component } from '@angular/core';
import { Ratio } from './models/ratio.model';
import { ColumnItem } from './models/column-item.model';

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
  columnItems: ColumnItem[];

  constructor() {
	this.ratio = new Ratio();
	this.ratio.blueValue = 4421;
	this.ratio.greenValue = 3421;
	this.ratio.redValue = 3241;
	this.ratio.year = 2017;
	this.height = 200;


	let ratio1 = new Ratio();
	ratio1.blueValue = 4235;
	ratio1.greenValue = 3263;
	ratio1.redValue = 3119;
	ratio1.year = 2015;

	let ratio2 = new Ratio();
	ratio2.blueValue = 4354;
	ratio2.greenValue = 3341;
	ratio2.redValue = 3241;
	ratio2.year = 2010;

	let ratio3 = new Ratio();
	ratio3.blueValue = 3505;
	ratio3.greenValue = 745;
	ratio3.redValue = 3290;
	ratio3.year = 2013;

	this.ratioList = [ratio1, ratio2, ratio3, ratio1, ratio2, ratio3];

	this.columnItems = [];

	let columnItem1 = new ColumnItem();
	columnItem1.label = 'Item 1';
	columnItem1.value = 256;
	this.columnItems.push(columnItem1);

	let columnItem2 = new ColumnItem();
	columnItem2.label = 'Item 2';
	columnItem2.value = 170;
	this.columnItems.push(columnItem2);

	let columnItem3 = new ColumnItem();
	columnItem3.label = 'Item 3';
	columnItem3.value = 500;
	this.columnItems.push(columnItem3);

	let columnItem4 = new ColumnItem();
	columnItem4.label = 'Item 3';
	columnItem4.value = 234;
	this.columnItems.push(columnItem4);
  }
}
