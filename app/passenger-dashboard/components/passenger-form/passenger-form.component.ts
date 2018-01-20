import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.inferface';

import { Baggage } from '../../models/baggage.interface';

@Component({
	selector: 'passenger-form',
	styleUrls: ['passenger-form.component.scss'],
	template: `
		<form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
			
			<div>
				Passenger name:
				<input
					type="text"
					name="fullname"
					required
					#fullname="ngModel"
					[ngModel]="detail?.fullname">
					<div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
					Passenger name is required
					</div>
			</div>
			<div>
				Passenger ID:
				<input
					type="number"
					#id="ngModel"
					required
					name="id"
					[ngModel]="detail?.id">
					<div *ngIf="id.errors?.required && id.dirty" class="error">
					Passenger ID is required
					</div>
			</div>

			<div>
				<label>
					<input
						type="checkbox"
						name="checkedIn"
						[ngModel]="detail?.checkedIn"
						(ngModelChange)="toggleCheckIn($event)">
				</label>
				
			</div>

			<div *ngIf="form.value.checkedIn">
				Check in Date: 
				<input
					type="number"
					name="checkInDate"
					[ngModel]="detail?.checkInDate">
			</div>

			<div> 
				Luggage:
				<select
					name="baggage"
					[ngModel]="detail?.baggage">
					<option
						*ngFor="let item of baggage"
						[value]="item.key"
						[selected]="item.key === detail?.baggage">
						{{ item.value }}
					</option>
				</select>
			</div>
			
			<button type="submit" [disabled]="form.invalid">
				Update Passenger
			</button>
		</form>	

	`
})
export class PassengerFormComponent {
	@Input()
	detail: Passenger;

	@Output()
	update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	baggage: Baggage[] = [{
		key: 'none',
		value: 'no baggage'
	}, {
		key: 'hand-only',
		value: 'Hand Baggage'
	}, {
		key: 'hold-baggage',
		value: 'Hold Baggage'
	}, {
		key: 'hand-hold',
		value: 'Hand and Hold Baggage'
	}];

	toggleCheckIn(checkedIn: boolean) {
		if (checkedIn) {
			this.detail.checkInDate = Date.now();
		}
	}

	handleSubmit(passenger: Passenger, isValid: boolean) {
		if (isValid) {
			this.update.emit(passenger);
		}
	}
}