import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.inferface';

@Component({
	selector: 'passenger-viewer',
	styleUrls: ['passenger-viewer.component.scss'],
	template: `
		<div>
			<passenger-form
				[detail]="passenger"
				(update)="onUpDatePassenger($event)">

			</passenger-form>
		</div>
	`
})
export class PassengerViewerComponent {
	passenger: Passenger;
	constructor(private passengerService: PassengerDashboardService){}
	ngOnInit() {
		this.passengerService
			.getPassenger(1)
			.subscribe((data: Passenger) => this.passenger = data);
	}

	onUpDatePassenger(event: Passenger) {
		this.passengerService
			.updatePassenger(event)
			.subscribe((data: Passenger) => {
				this.passenger = Object.assign({}, this.passenger, event);
			}) 
	}
}