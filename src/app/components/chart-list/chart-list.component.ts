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

}
