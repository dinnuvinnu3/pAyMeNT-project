import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paymentapplication';
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  

}
