import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-column',
	templateUrl: './column.component.html',
	styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
	inflation: number = 0;
	emptyDivPercentage: number = 20;
	containerDivePercentage: number = 80;

	constructor() { }

	ngOnInit() {
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

}
