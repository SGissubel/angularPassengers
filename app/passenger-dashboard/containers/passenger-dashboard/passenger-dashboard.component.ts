import { Component, OnInit  } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.inferface';

@Component({
	selector: 'passenger-dashboard',
	styleUrls: ['passenger-dashboard.component.scss'],
	template: `
		<div>
			<passenger-count
				[items]="passengers">
			</passenger-count>
			<div *ngFor="let passenger of passengers;">
				{{ passenger.fullname }}
			</div>

			<passenger-detail
				*ngFor="let passenger of passengers;"
				[detail]="passenger"
				(edit)="handleEdit($event)"
				(remove)="handleRemove($event)">
			</passenger-detail>
			<hr>
		</div>
	`
			// <ul>
		// 	<template  ngFor let-passenger of passengers let-i = "index" [ngForOf]="passengers">
		// 		<li>
		// 			{{ i + 1 }}: {{passenger.fullname}}
		// 		</li>
		// 	</template>		
		// </ul>



		// <button (click)="handleClick(username.value)">
		// 	Get Value
		// </button>

		// <template [ngIf]="name.length">
		// 	templating ngif (same as *)
		// </template>

		// <input type="text" #username>
		// <div *ngIf="name.length">
		// 	Searching for... {{ name }}
		// </div>
})
export class PassengerDashboardComponent implements OnInit {
	passengers: Passenger[];
	constructor(private passengerService: PassengerDashboardService) {}

	ngOnInit()  {
		this.passengers = this.passengerService.getPassengers();
		 // this.passengerService
		 // 	.getPassengers()
		 // 	.subscribe((
		 // 	data: Passenger[]) => 
		 // 		this.passengers = data,
		 // 	(error) => {debugger; console.log('fuckoff')
		 // }
		 // 	)
	}

	handleEdit(event: Passenger) {
		this.passengers = this.passengers.map((passenger: Passenger) => {
			if (passenger.id === event.id) {
				passenger = Object.assign({}, passenger, event);
			}
			return passenger;
		})
		
	}

	handleRemove(event: Passenger) {
		this.passengers = this.passengers.filter((passenger: Passenger) => {
			return passenger.id !== event.id;
		})
	}

	
}