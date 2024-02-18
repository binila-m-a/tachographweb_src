import { Injectable } from '@angular/core';
import { ApiResponse } from '../shared/models/payload';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/enviornment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl: string = environment.serviceUrl + "Dashboard/";

  constructor(private httpClient: HttpClient,) {
  }
  
  GetDashBoarddata(): Observable<ApiResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  
    return this.httpClient.get<ApiResponse>(this.baseUrl + 'GetDashBoarddata', httpOptions) .pipe(catchError(this.handleError));;
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
