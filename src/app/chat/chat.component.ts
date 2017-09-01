import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../app.component.css']
})
export class ChatComponent {
  title = 'Chat';
   
  public items: Array<string>;

  constructor() {
    this.items = ["item1", "item2", "item3"]
  }

  public sendMessage(event, msg) {
    alert('Sent: ' + msg);
  }
}
