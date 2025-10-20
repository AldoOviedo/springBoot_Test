import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // allows *ngIf, etc. (safe to include)

@Component({
  selector: 'app-root',          // must match index.html tag
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  message = 'Click the button to load a message...';

  async sayHello() {
    console.log('clicked'); // sanity log
    try {
      const res = await fetch('/api/hello', { headers: { 'Accept': 'text/plain' } });
      const text = await res.text();
      console.log('response:', text); // sanity log
      this.message = text;
    } catch (e) {
      console.error(e);
      this.message = 'Error contacting backend';
    }
  }
}
