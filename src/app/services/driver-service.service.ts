import { Injectable } from '@angular/core';
import { Driver } from '../shared/models/driver.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviornment';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from '../shared/models/payload';

@Injectable({
  providedIn: 'root'
})
export class DriverServiceService {
  private drivers: Driver[] = [];
  constructor(private httpClient: HttpClient) {}


  baseUrl: string = environment.serviceUrl + "WeatherForecast/";


  addDriver(driver: Driver): Observable<ApiResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  
    return this.httpClient.post<ApiResponse>(this.baseUrl, driver,httpOptions);
  }
  
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
