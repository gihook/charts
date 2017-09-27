import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable()
export class NotificationService {
	inflationChangeEvent: EventEmitter = new EventEmitter();

	constructor() { }

	emitInflationChange(value: number) {
	}

}
