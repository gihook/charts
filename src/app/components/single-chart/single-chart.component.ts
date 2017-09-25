import { Component, OnInit, Input } from '@angular/core';
import { Ratio } from '../../models/ratio.model';

@Component({
	selector: 'app-single-chart',
	templateUrl: './single-chart.component.html',
	styleUrls: ['./single-chart.component.css']
})
export class SingleChartComponent implements OnInit {
	@Input() height: number;
	@Input() ratio: Ratio;
	redPercentage: number;
	greenPercentage: number;
	bluePercentage: number;

	redTextPosition: number;
	greenTextPosition: number;
	blueTextPosition: number;

	constructor() {
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

		this.redTextPosition = this.redPercentage / 2;
		this.greenTextPosition = this.redPercentage + this.ratio.greenValue / total * 50;
		this.blueTextPosition = this.greenPercentage + this.bluePercentage / 2;
		console.log(this.blueTextPosition);
	}

}
