import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.inferface';

@Component({
	selector: 'passenger-count',
	template: `
		<div>
		<h3>Airline Passengers</h3>
			<div>
				Total CheckedIn: {{ checkedInCount()}}/{{ items?.length }}
			</div>
		</div>
	`
})
export class PassengerCountComponent{
	@Input()
	items: Passenger[];
	checkedInCount(): number {
		if(!this.items) return;
		return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
	}
}