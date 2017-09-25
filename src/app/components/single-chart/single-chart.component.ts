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
	textFont: number = 10;
	textColor: string = 'white';


	redPercentage: number;
	greenPercentage: number;
	bluePercentage: number;

	redTextPosition: number;
	greenTextPosition: number;
	blueTextPosition: number;

	constructor() {
	}

	ngOnInit() {
		this.setProperties();
	}

	setProperties() {
		let total = this.ratio.blueValue + this.ratio.greenValue + this.ratio.redValue;

		this.redPercentage = this.ratio.redValue / total * 100;
		let netGreenPercentage = this.ratio.greenValue / total * 100;
		this.greenPercentage = netGreenPercentage + this.redPercentage;
		this.bluePercentage = this.ratio.blueValue / total * 100;

		this.redTextPosition = this.redPercentage / 2;
		this.greenTextPosition = this.redPercentage + netGreenPercentage / 2;
		this.blueTextPosition = this.greenPercentage + this.bluePercentage / 2;
	}

}
