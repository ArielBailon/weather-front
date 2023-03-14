import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  @Input() showBy: string | undefined;
  locationName: string | undefined;
  spinner: string = 'spinner';

  weather: number = 0;
  queryLocName: string | undefined = '';
  day: string | null= '';
  wind: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  cloudCover: number = 0;


  constructor(private _weatherService: WeatherService, private datePipe: DatePipe, private _spinner: NgxSpinnerService) {
    let today = new Date();
    this.day = this.datePipe.transform(today, 'EEEE');
  }


  ngOnInit(): void {
    console.log(this.showBy);
    // this.getTodaysWeather();
  }

  async getTodaysWeather() {
    await this._spinner.show(this.spinner);
    try {
      let res = await this._weatherService.getTodaysWeather(this.locationName).toPromise();
      this.setWeatherData(res?.data.weather);
      console.log(res);
      await this._spinner.hide(this.spinner);
    } catch (error) {
      await this._spinner.hide(this.spinner);
      console.log(error);
    }
  }

  setWeatherData(weather: any) {
    const { temp, wind, humidity, pressure, clouds } = weather;
    this.weather = temp.cur;
    this.queryLocName = this.locationName;
    // this.day = ;
    this.wind = wind.speed;
    this.humidity = humidity;
    this.pressure = pressure;
    this.cloudCover = clouds;
  }


  // constructor(private mapService: MapService) {
  //   this.shouldZoomOut = new BehaviorSubject<void>(null)
  //   this.activeSeat = null
  // }

}


