import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { API_URL } from 'src/environments/environment'
import { ApiPathEnum, WeatherEnum } from '../enums/auth-endpoint.enum'
import { IGenericBasicResponse } from '../models/GenericBasicResponse'
import { IGenericListResponse } from '../models/GenericListResponse';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private _http: HttpClient) {
  }

  getTodaysWeather = (locationName: string): Observable<IGenericBasicResponse<any>> => {
    const $URL = `${API_URL}${ApiPathEnum.Weather}${WeatherEnum.GetTodaysWeather}`
    return this._http.post<IGenericBasicResponse<any>>($URL, { locationName })
  }

}
