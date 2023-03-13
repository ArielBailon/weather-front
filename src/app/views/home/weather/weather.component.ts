import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  @Input() showBy: string | undefined;

  ngOnInit(): void {
    console.log(this.showBy)
  }

  // constructor(private mapService: MapService) {
  //   this.shouldZoomOut = new BehaviorSubject<void>(null)
  //   this.activeSeat = null
  // }

}


