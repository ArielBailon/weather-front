import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherService) {

  }

  @Input() showBy: string | undefined;

  ngOnInit(): void {
    console.log(this.showBy);
    this.getTodaysWeather();
  }

  async getTodaysWeather() {
    try {
      let res = await this._weatherService.getTodaysWeather('manta').toPromise();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  // constructor(private mapService: MapService) {
  //   this.shouldZoomOut = new BehaviorSubject<void>(null)
  //   this.activeSeat = null
  // }

}


