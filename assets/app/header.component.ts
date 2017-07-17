import { Component } from "@angular/core";

@Component({
	selector: 'app-header',
	template: `
	<header class="row">
		<nav class="col-md-10 col-md-offset-1">
			<ul class="nav nav-pills">
				<li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
				<li routerLinkActive="active"><a [routerLink]="['/auth']">Login</a></li>
			</ul>
		</nav>
	</header>
	`
})

export class HeaderComponent {

}