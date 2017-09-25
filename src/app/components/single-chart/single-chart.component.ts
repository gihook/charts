import { Component, OnInit, Input } from '@angular/core';
import { Ratio } from '../../models/ratio.model';

@Component({
	selector: 'app-single-chart',
	templateUrl: './single-chart.component.html',
	styleUrls: ['./single-chart.component.css']
})
export class SingleChartComponent implements OnInit {
	totalHeight: number;
	@Input() ratio: Ratio;
	bluePercentage: number;
	greenPercentage: number;
	redPercentage: number;

	constructor() {
		this.totalHeight = 200;
	}

	ngOnInit() {
		console.log(this.ratio);
		const total = this.ratio.blueValue + this.ratio.greenValue + this.ratio.redValue;
		console.log(total);
		this.redPercentage = this.ratio.redValue / total * 100;
		console.log(this.redPercentage);
		this.greenPercentage = this.ratio.greenValue / total * 100;
		this.greenPercentage = this.greenPercentage + this.redPercentage;
		console.log(this.greenPercentage);
		this.bluePercentage = this.ratio.blueValue / total * 100;
		console.log(this.bluePercentage);
	}

}
