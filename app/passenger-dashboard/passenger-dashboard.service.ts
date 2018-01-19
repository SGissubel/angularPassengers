import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Passenger } from './models/passenger.inferface';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
	
	constructor(private http: Http) { }

	// getPassengers(): Observable<Passenger[]> {
	// 	console.log('hello');
	// 	return this.http
	// 		.get(PASSENGER_API)
	// 		.map((response: Response) => {console.log("hello"); return response.json()});

	// }
	getPassengers() {
		return [{
			id: 1,
			fullname: 'Steven',
			checkedIn: true,
			checkInDate: 1493908908909,
			children: null
		}, { 
			id: 2,
			fullname: 'Swan',
			checkedIn: false,
			checkInDate: 1433908908909,
			children: [{name: 'Ted', age: 24}, {name: 'Zanzabar', age: 14}]
		}, {
			id: 3,
			fullname: 'Rookie',
			checkedIn: true,
			checkInDate: 1423908908909,
			children: null
		}, {
			id: 4,
			fullname: 'Boobooe',
			checkedIn: false,
			checkInDate: 1423908908909,
			children: [{name: 'Christina', age: 44}, {name: 'Andreas', age: 23}, {name: 'Greendola', age: 33}]
		}]
	}
}