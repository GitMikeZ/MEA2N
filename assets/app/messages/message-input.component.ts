import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MessageService } from './message.service';
import { Message } from './message.model';


@Component({
	selector: 'app-message-input',
	templateUrl: './message-input.component.html',
})
export class MessageInputComponent {

	constructor(private messageService: MessageService) {

	}

	onSubmit(form: NgForm) {
		//console.log(form);
		const message = new Message(form.value.content, 'John');
		this.messageService.addMessage(message);

		// form is reset
		form.resetForm();
	}
}