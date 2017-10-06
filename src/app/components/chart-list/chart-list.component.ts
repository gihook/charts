import { Component, OnInit, Input } from '@angular/core';
import { Ratio } from '../../models/ratio.model';

@Component({
	selector: 'app-chart-list',
	templateUrl: './chart-list.component.html',
	styleUrls: ['./chart-list.component.css']
})
export class ChartListComponent implements OnInit {
	@Input() ratios: Ratio[];
	chartContainerWidth: number;

	constructor() {
	}

	ngOnInit() {
		this.chartContainerWidth = 100 / this.ratios.length;
	}

	getMax() {
		let max = 0;

		this.ratios.forEach(ratio => {
			let sum = ratio.blueValue + ratio.greenValue + ratio.redValue;
			if (sum > max) {
				max = sum;
			}
		});

		return max;
	}

	calculateHeightPercentage(ratio: Ratio): number {
		let max = this.getMax();

		const hundredPercent = 100;
		let height = (ratio.blueValue + ratio.greenValue + ratio.redValue) / max * hundredPercent;

		return height;
	}

}
