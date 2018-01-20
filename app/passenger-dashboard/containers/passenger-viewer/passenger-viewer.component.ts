import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.inferface';

@Component({
	selector: 'passenger-viewer',
	styleUrls: ['passenger-viewer.component.scss'],
	template: `
		<div>
			{{ passenger | json }}
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
}