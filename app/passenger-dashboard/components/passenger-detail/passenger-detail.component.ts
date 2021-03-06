//child component of dashboard (therefore will not need to be declared inside of dashboardmodule) -- selector is inside of dashboard component...you get it...
import { Component, OnChanges, Input, Output, EventEmitter,  } from '@angular/core';

import { Passenger } from '../../models/passenger.inferface';

@Component({
	selector: 'passenger-detail',
	styleUrls: ['passenger-detail.component.scss'],
	template: `
		<div>
			<span class="status" [ngClass]="{'checked-in': detail.checkedIn, 'checked-out': !detail.checkedIn}"></span>
å				<div *ngIf="editing">
					<input 
						type="text" 
						[value]="detail.fullname"
						(input)="onNameChange(name.value)"
						#name>
				</div>	
				<div *ngIf="!editing"> 	
					{{detail.fullname}}
				</div>
			
			<div class="date">
				Check in date: 
				{{ detail.checkedInDate ? ( detail.checkedInDate | date: 'yMMMMd' | uppercase ) : 'Not Checked in'}}
			</div>

			<button (click)="toggleEdit()">
				{{ editing ? 'Done' : 'Edit'}}
			</button>
			<button (click)="onRemove()">
				Remove
			</button>
			<button (click)="goToPassenger()">
				Go To Passenger
			</button>
		</div>
	`
})
export class PassengerDetailComponent implements OnChanges {
	@Input()
	detail: Passenger;

	@Output()
	remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	@Output()
	edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	@Output()
	view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	editing: boolean = false;

	constructor(){}

	ngOnChanges(changes) {
		if (changes.detail) {
			this.detail = Object.assign({}, changes.detail.currentValue);
		}
	}

	onNameChange(value: string) {
		this.detail.fullname = value;
	}

	goToPassenger() {
		this.view.emit(this.detail);
	}
	
	toggleEdit() {
		if (this.editing) {
			this.edit.emit(this.detail);
		}
		this.editing = !this.editing;
	}
	
	onRemove() {
		this.remove.emit(this.detail);
	}


}

