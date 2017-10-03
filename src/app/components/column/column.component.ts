import { Component, OnInit, Input } from '@angular/core';
import { ColumnItem } from '../../models/column-item.model';

@Component({
	selector: 'app-column',
	templateUrl: './column.component.html',
	styleUrls: ['./column.component.css']
})
export class ColumnComponent {
	@Input() columnItems: ColumnItem[];
	@Input() inflation: number = 0;

	emptyDivPercentage: number = 20;
	containerDivePercentage: number = 80;
	minimalValue = 50;

	totalRedPercentage: number = 40;
	totalGreenPercentage: number = 20;
	totalBluePercentage: number = 40;

	blueColor: string = "blue";
	greenColor: string = "green";
	redColor: string = "red";

	constructor() { }

	// tslint:disable-next-line:use-life-cycle-interface
	ngOnChanges() {
		this.onInflationChange(this.inflation);
	}

	onInflationChange(value) {
		this.inflation = this.setInflation(value);

		this.emptyDivPercentage = 20 - (this.inflation / 5) * 20;
		this.containerDivePercentage = 100 - this.emptyDivPercentage;
		console.log(this.emptyDivPercentage);
		console.log(this.containerDivePercentage);
	}

	setInflation(value): number {
		if (value > 5) return 5;
		if (value < 0) return 0;

		return value as number;
	}

	getColumnHeightPercentage(columnValue: number): number {
		console.log('getColumnHeightPercentage');
		let values = this.columnItems.map(x => x.value);
		let totalValue = this.getSum(values);
		let columnHeightPercentage = columnValue / totalValue * 100;

		return columnHeightPercentage;
	}

	getSum(array: number[]): number {
		let sum = 0;
		array.forEach(x => sum += x);

		return sum;
	}

	getLinearGradient(column: ColumnItem, i: number): string {
		console.log(column.label);
		let sumOfPreviousPercentages = this.getSumOfPreviousPercentages(i);
		console.log("sum: " + sumOfPreviousPercentages);

		let redPercentage = this.getRedGradientPercentage(sumOfPreviousPercentages, i);
		let greenPercentage = 100 - redPercentage;

		let redParams = `${this.redColor} 0%, ${this.redColor} ${redPercentage}%`;
		let greenParams = `${this.greenColor} ${redPercentage}%, ${this.greenColor} ${greenPercentage}%`;
		let blueParams = `${this.blueColor} ${greenPercentage}%, ${this.blueColor} 100%`;
		let gradientString = `linear-gradient(to bottom,${redParams}, ${greenParams}, ${blueParams})`;

		console.log(gradientString);

		return gradientString;
	}

	/**
	 * TODO: Refactor
	 */
	getRedGradientPercentage(sumOfPrevious: number, index) {
		if (sumOfPrevious < this.totalRedPercentage) return 100;

		console.log("%: " + this.getColumnHeightPercentage(this.columnItems[index].value));
		console.log("dif: " + (sumOfPrevious - this.totalRedPercentage));

		let result = (this.totalRedPercentage - (sumOfPrevious - this.getColumnHeightPercentage(this.columnItems[index].value)))
			/ this.getColumnHeightPercentage(this.columnItems[index].value) * 100;

		if (result < 0) return 0;

		return result;
	}

	getSumOfPreviousPercentages(index: number): number {
		let sum = 0;

		for (let i = 0; i <= index; i++) {
			let columnValue = this.columnItems[i].value;
			sum += this.getColumnHeightPercentage(columnValue);
		}

		return sum;
	}

}
