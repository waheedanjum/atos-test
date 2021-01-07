import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from 'src/app/interfaces/launch';
import { SpaceDataService } from '../../services/space-data.service';

@Component({
  selector: 'app-space-info',
  templateUrl: './space-info.component.html',
  styleUrls: ['./space-info.component.scss'],
})
export class SpaceInfoComponent implements OnInit {
  
  private launchInfo$!: Observable<RootObject>;
  
  constructor(private spaceDataService: SpaceDataService) {}

  ngOnInit(): void {
    this.launchInfo$ = this.spaceDataService.getLaunches();
    this.launchInfo$.subscribe((data) => console.log(data));
  }
}
