import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// broswer and common included in base ngmodule

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		//angular modules
		BrowserModule,
		CommonModule,
		HttpClientModule,
		//custom module
		PassengerDashboardModule
	],
	bootstrap: [AppComponent]
})
export class AppModule {}