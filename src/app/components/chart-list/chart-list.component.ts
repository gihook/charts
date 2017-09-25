import { Component, OnInit, Input } from '@angular/core';
import { Ratio } from '../../models/ratio.model';

@Component({
	selector: 'app-chart-list',
	templateUrl: './chart-list.component.html',
	styleUrls: ['./chart-list.component.css']
})
export class ChartListComponent implements OnInit {
	@Input() ratios: Ratio[];

	constructor() { }

	ngOnInit() {
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

	calculateHeight(ratio: Ratio): number {
		let max = this.getMax();

		let height = (ratio.blueValue + ratio.greenValue + ratio.redValue) / max * 200;

		return height;
	}

}
