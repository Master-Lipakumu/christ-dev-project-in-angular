import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {Injectable} from "@angular/core";

//import {Http, Response} from "@angular/http";

import { catchError, Observable, throwError, tap } from 'rxjs';

//import 'rxjs/add/operator/map';

import { Formations } from "src/app/blog/shared/models/formations.model";

@Injectable({ providedIn:'root' })
export class FormationService {

    constructor(

      private http: HttpClient

    ) {}

    private readonly FORMATION_API_URL = "api/formations";

    public getFormations(): Observable<Formations[]>{
      return this.http.get<Formations[]>(this.FORMATION_API_URL).pipe(
        tap(formations => console.log('formations: ', formations)),
        catchError(this.handleError)
      );
  }



  public updateFormations(formations:Formations): Observable<Formations>{
    const url = `${this.FORMATION_API_URL}/${formations.id}`;
    return this.http.put<Formations>(url,formations).pipe(
      catchError(this.handleError)
    );
  }




  // handle error

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

