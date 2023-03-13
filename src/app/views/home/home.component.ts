import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showWeatherApp: boolean = true;
  showWeatherManager: boolean = false;
  showHome: boolean = false;

  openWeatherApp(){
    this.showWeatherApp = true;
    this.showWeatherManager = false;
    this.showHome = false;

  }

  openWeatherManager(){
    this.showWeatherManager = true;
    this.showWeatherApp = false;
    this.showHome = false;

  }

}
