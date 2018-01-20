import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.inferface';

@Component({
	selector: 'passenger-viewer',
	styleUrls: ['passenger-viewer.component.scss'],
	template: `
		<div>
			<button (click)="goBack()">
				&lsaquo; Go Back
			</button>
			<passenger-form
				[detail]="passenger"
				(update)="onUpDatePassenger($event)">
			</passenger-form>
		</div>
	`
})
export class PassengerViewerComponent {
	passenger: Passenger;
	
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private passengerService: PassengerDashboardService
		){}

	ngOnInit() {
		this.route.params	
			.switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
			.subscribe((data: Passenger) => this.passenger = data);
	}

	onUpDatePassenger(event: Passenger) {
		this.passengerService
			.updatePassenger(event)
			.subscribe((data: Passenger) => {
				this.passenger = Object.assign({}, this.passenger, event);
			}) 
	}

	goBack() {
		this.router.navigate(['/passengers']);
	}
}