import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninja-directory';
  name = 'BT';
}
