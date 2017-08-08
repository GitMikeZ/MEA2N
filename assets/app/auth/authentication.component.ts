import { Component } from "@angular/core";

@Component({
	selector: "app-authentication",
	template: `
		<header class="row spacing">
			<nav class="col-md-10 col-md-offset-1">
				<ul class="nav nav-tabs">
					<li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
					<li routerLinkActive="active"><a [routerLink]="['signin']">Signin</a></li>
					<li routerLinkActive="active"><a [routerLink]="['logout']">Logout</a></li>
				</ul>
			</nav>
		</header>
		<div class="row spacing">
			<router-outlet></router-outlet>
		</div>
	`
})

export class AuthenticationComponent {

}