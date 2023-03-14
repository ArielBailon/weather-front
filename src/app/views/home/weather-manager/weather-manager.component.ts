import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-weather-manager',
  templateUrl: './weather-manager.component.html',
  styleUrls: ['./weather-manager.component.css']
})
export class WeatherManagerComponent implements OnInit{

  constructor(private _sharedService: SharedService) {}

  showWind: boolean = true;
  showHumidity: boolean = true;
  showPressure: boolean = true;
  showCloudCover: boolean = true;

  ngOnInit(): void {
    console.log("init weather manager");
    // Subscribes to shared service message to show or hide the today's weather params
    this._sharedService.sharedMessage.subscribe((data: any) => {
      if (data === 'wind') {
        this.showWind = !this.showWind
        console.log("this.showWind");
        console.log(this.showWind);
      }
      if (data === 'humidity') {
        this.showHumidity = !this.showHumidity
        console.log("this.showHumidity");
        console.log(this.showHumidity);

      }
      if (data === 'pressure') this.showPressure = !this.showPressure
      if (data === 'cloudCover') this.showCloudCover = !this.showCloudCover
    });
  }

  // Sets the show value by the name of the param
  setShowValue(name: string) {
    console.log(name);
    this._sharedService.nextMessage(name);
  }
}
