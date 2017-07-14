import { Message } from "./message.model";

export class MessageService {
	private messages: Message[] = [];

	addMessage(message: Message) {
		// unshift adds to the front of array
		// instead of push from the back
		this.messages.unshift(message);
		console.log(this.messages);
	}

	getMessage() {
		return this.messages;
	}

	// This method might not be the best way
	deleteMessage(message: Message) {
		this.messages.splice(this.messages.indexOf(message), 1);
	}
}