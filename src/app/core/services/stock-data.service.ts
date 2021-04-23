import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck } from 'rxjs/operators';
import { environment } from '../../../environments/environment'

let API_URL = `${environment.API_URL}`;


@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor(private http: HttpClient) { }

  public getStockData(data) {
    return this.http.get(`${API_URL}/fetch`, {
      params: {
        start: data.start,
        length: data.length
      }
    }).pipe(
      pluck('data')
    )
  }

  public insertStockData(data) {
    return this.http.post(`${API_URL}/create`, data).pipe(
      pluck('data')
    )
  }
}
