import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from 'src/app/services/shared.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  locationName: string | undefined = '';
  spinner: string = 'spinner';

  // Weather params
  weather: number = 0;
  queryLocName: string | undefined;
  day: string | null = '';
  wind: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  cloudCover: number = 0;
  imgSrc: string | undefined;
  forecastArr: any[] | undefined;

  // Detailed weather params
  rain: number = 0;
  snow: number = 0;
  lat: number = 0;
  lon: number = 0;

  // Show params
  showWind: boolean = true;
  showHumidity: boolean = true;
  showPressure: boolean = true;
  showCloudCover: boolean = true;

  showDetails: boolean = false;

  constructor(private _weatherService: WeatherService, private datePipe: DatePipe,
              private _sharedService: SharedService, private _spinner: NgxSpinnerService) {
    let today = new Date();
    this.day = this.datePipe.transform(today, 'EEEE');
  }

  ngOnInit(): void {
    console.log("init weather");
    // Subscribes to shared service message to show or hide the today's weather params
    this._sharedService.sharedMessage.subscribe((data: any) => {
      if (data === 'wind') {
        console.log("weather");
        this.showWind = !this.showWind
        console.log(this.showWind);
      }
      if (data === 'humidity') this.showHumidity = !this.showHumidity
      if (data === 'pressure') this.showPressure = !this.showPressure
      if (data === 'cloudCover') this.showCloudCover = !this.showCloudCover
    });
  }

  // Toggles the detailed param on the today's weather user interface
  toggleDetails(){
    this.showDetails = true
  }

  // Gets today's weather by the location name it also uses a spinner to make the user wait for the http response
  async getTodaysWeather() {
    await this._spinner.show(this.spinner);
    try {
      let res = await this._weatherService.getTodaysWeather(this.locationName).toPromise();
      this.setWeatherData(res?.data);
      console.log(res);
      await this._spinner.hide(this.spinner);
    } catch (error) {
      await this._spinner.hide(this.spinner);
      console.log(error);
    }
  }

  // Sets the weather data for it to show on the user interface
  setWeatherData(data: any) {
    const { temp, wind, humidity, pressure, clouds, icon, rain, snow } = data.weather;
    this.weather = temp.cur;
    this.queryLocName = this.locationName;
    this.wind = wind.speed;
    this.humidity = humidity;
    this.pressure = pressure;
    this.cloudCover = clouds;
    this.imgSrc = icon.url;

    // Set detailed weather params
    this.rain = rain;
    this.snow = snow;
    this.lat = data.lat;
    this.lon = data.lon;
  }

  // Gets forecast by the location name up to 5 days it also uses a spinner to make the user wait for the http response
  async getForecast() {
    await this._spinner.show(this.spinner);
    try {
      let res = await this._weatherService.getForecast(this.locationName).toPromise();
      console.log(res);
      this.forecastArr = res?.data;
      this.queryLocName = this.locationName;
      await this._spinner.hide(this.spinner);
    } catch (error) {
      await this._spinner.hide(this.spinner);
      console.log(error);
    }
  }
}


