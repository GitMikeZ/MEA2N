import { Component } from "@angular/core";

@Component({
	selector: 'app-header',
	template: `
	<header class="row">
		<nav class="col-md-10 col-md-offset-1">
			<ul class="nav nav-pills">
				<li><a >Messenger</a></li>
				<li><a >Login</a></li>
			</ul>
		</nav>
	</header>
	`
})

export class HeaderComponent {

}