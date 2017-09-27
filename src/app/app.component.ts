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
  inflation: number = 0;
  columnItem1: ColumnItem;
  columnItem2: ColumnItem;
  columnItem3: ColumnItem;
  columnItem4: ColumnItem;

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

	this.columnItem1 = new ColumnItem();
	this.columnItem1.label = 'Item 1';
	this.columnItem1.value = 256;
	this.columnItems.push(this.columnItem1);

	this.columnItem2 = new ColumnItem();
	this.columnItem2.label = 'Item 2';
	this.columnItem2.value = 170;
	this.columnItems.push(this.columnItem2);

	this.columnItem3 = new ColumnItem();
	this.columnItem3.label = 'Item 3';
	this.columnItem3.value = 500;
	this.columnItems.push(this.columnItem3);

	this.columnItem4 = new ColumnItem();
	this.columnItem4.label = 'Item 3';
	this.columnItem4.value = 234;
	this.columnItems.push(this.columnItem4);
  }
}
