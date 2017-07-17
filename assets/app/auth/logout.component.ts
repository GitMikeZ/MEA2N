import { Component } from '@angular/core';

@Component({
	selector: 'app-logout',
	template: `
	<div class="col-md-10 col-md-offset-1">
		<button class="btn btn-danger" (click)="onLogout()">Logout</button>
	</div>
	`
})

export class LogoutComponent{
	onLogout() {

	}
}