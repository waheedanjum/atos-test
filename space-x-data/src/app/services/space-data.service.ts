import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap} from "rxjs/operators";
import { RootObject } from "../interfaces/launch";

@Injectable({
  providedIn: 'root'
})
export class SpaceDataService {

  readonly apiURL: string = 'https://api.spacexdata.com/v3/launches';
  
  constructor(private httpclient: HttpClient) {}

  // GET Space data from API and filter records by landing intent 
  getLaunches(): Observable<RootObject[]> {
    return this.httpclient
      .get<RootObject[]>(this.apiURL)
      .pipe(
        map(items => items.filter(item => item.rocket.first_stage.cores.filter(e => e.landing_intent !== null && e.land_success === true))),
        tap(this.sortByDate),     
        catchError(this.handleError<RootObject[]>("getLaunches")));
  }
 
  //Sort the array by descending order 
  private sortByDate(data: RootObject[]) {
    return data.sort((x, y) => +new Date(x.launch_date_utc) - +new Date(y.launch_date_utc)).reverse();
  };

  // ErrorHandler
  private handleError<T>(operation = "operation", result?: T | []) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
