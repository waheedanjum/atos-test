import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Core } from 'src/app/interfaces/launch';

@Component({
  selector: 'app-cores-info',
  templateUrl: './cores-info.component.html',
  styleUrls: ['./cores-info.component.scss']
})
export class CoresInfoComponent implements OnInit {
  
  cores: Core[] = [];

  //dependcy injection
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //get the array from Router queryParams 
    const coresArray = this.activatedRoute.snapshot.queryParamMap.get('cores');
    
    // parses array to JSON
    if(coresArray) {
      this.cores = JSON.parse(coresArray);
    }
  }

  // navigates to Space info component
  onSpaceInfoRoute() {
    this.router.navigate(['/space-info']);
  }

}
