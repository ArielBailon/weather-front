import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showHome: boolean = true; // 1
  showWeatherApp: boolean = false; // 2
  showWeatherManager: boolean = false; // 3

  // Opens section of each component
  openSection(sectionNumber: number){
    this.showWeatherApp = false;
    this.showWeatherManager = false;
    this.showHome = false;
    if (sectionNumber === 1) this.showHome = true;
    if (sectionNumber === 2) this.showWeatherApp = true;
    if (sectionNumber === 3) this.showWeatherManager = true;
  }

}
