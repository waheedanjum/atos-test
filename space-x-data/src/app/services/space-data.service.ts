import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of} from "rxjs";
import { catchError} from "rxjs/operators";
import { RootObject } from "../interfaces/launch";

@Injectable({
  providedIn: 'root'
})
export class SpaceDataService {

  readonly apiURL: string = 'https://api.spacexdata.com/v3/launches';
  
  constructor(private httpclient: HttpClient) {}

  // GET Space data 
  getLaunches(): Observable<RootObject> {
    return this.httpclient
      .get<RootObject>(this.apiURL)
      .pipe(catchError(this.handleError<RootObject>("getLaunches", [])));
  }

  // ErrorHandler
  private handleError<T>(operation = "operation", result?: T | []) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
