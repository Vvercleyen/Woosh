import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DayCareDto } from 'src/app/models/DayCare';
import { DaycareService } from 'src/app/services/daycares/daycare.service';

@Component({
  selector: 'app-daycare-overview',
  templateUrl: './daycare-overview.component.html',
  styleUrls: ['./daycare-overview.component.scss']
})
export class DaycareOverviewComponent implements OnInit {
  public readonly daycares! : Observable<DayCareDto[]>;
  constructor(private daycareService : DaycareService) { 
    this.daycares = this.daycareService.getDaycares();
  }

  ngOnInit(): void {
  }

}
