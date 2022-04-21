import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, tap } from 'rxjs';
import { Experiances } from "src/app/blog/shared/models/experiances.model";



@Injectable({providedIn:'root'})
export class ExperianceService{
  constructor(
    private http: HttpClient,
  ){}

  private readonly EXPERIANCE_API_URL = "api/experiance";

    public getExperiances(): Observable<Experiances[]>{
      return this.http.get<Experiances[]>(this.EXPERIANCE_API_URL).pipe(
        tap(experiances => console.log('experiances: ', experiances)),
        catchError(this.handleError)
      );
  }



  public updateExperiances(experiances:Experiances): Observable<Experiances>{
    const url = `${this.EXPERIANCE_API_URL}/${experiances.id}`;
    return this.http.put<Experiances>(url,experiances).pipe(
      catchError(this.handleError)
    );
  }







  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
