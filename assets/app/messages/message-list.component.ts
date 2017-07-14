import { Component } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
	selector: 'app-message-list',
	template: `
	<div class="col-md-10 col-md-offset-1">
					<app-message [message]="message"
										(editClicked)="message.content = $event"
										*ngFor="let message of message"></app-message>
	</div>
	`
})

export class MessageListComponent {
	message: Message[];

	constructor( private messageService: MessageService ) {};

	ngOnInit() {
		this.message = this.messageService.getMessage();
	}
}