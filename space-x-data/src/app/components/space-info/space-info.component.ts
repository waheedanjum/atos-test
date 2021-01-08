import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Core, RootObject } from 'src/app/interfaces/launch';
import { SpaceDataService } from '../../services/space-data.service';

@Component({
  selector: 'app-space-info',
  templateUrl: './space-info.component.html',
  styleUrls: ['./space-info.component.scss'],
})
export class SpaceInfoComponent implements OnInit {
  
  public launchInfo$!: Observable<RootObject[]>;
  
  //dependency injection
  constructor(private spaceDataService: SpaceDataService, private router: Router) {}

  ngOnInit(): void {
    //call the REST API End point to retrieve the date.
    this.launchInfo$ = this.spaceDataService.getLaunches();
  }

  onCoresInfoRoute(cores: Core[]): void {
    // Create our query parameters object
    const queryParams: any = {};

    // Add the array of values to the query parameter as a JSON string
    queryParams.cores = JSON.stringify(cores);

    // Create 'NaviationExtras' object which is expected by the Angular Router
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    
    // navigates to core-info component
    this.router.navigate(['/cores-info'], navigationExtras);

  }
}
