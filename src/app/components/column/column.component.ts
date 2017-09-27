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

}
