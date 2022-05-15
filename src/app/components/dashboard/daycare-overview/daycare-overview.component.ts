import { Component, OnInit } from '@angular/core';
import { DayCareDto } from 'src/app/models/DayCare';

@Component({
  selector: 'app-daycare-overview',
  templateUrl: './daycare-overview.component.html',
  styleUrls: ['./daycare-overview.component.scss']
})
export class DaycareOverviewComponent implements OnInit {
  public readonly daycares : DayCareDto[] = [{
    Name : "Bambino Schaarbeek",
    Address : "Willebrord Van Perckstraat 133 - Schaarbeek",
    Delivery : "Elke donderdag",
    
  },
  {
    Name : "De Speelboom Evere",
    Address : "Onze Lieve Vrouwlaan 110 - Evere",
    Delivery : "Elke donderdag"
  },
  {
    Name : "De Engeltjes Zaventem",
    Address : "Chemin du Justland 25 - Zaventem",
    Delivery : "Elke donderdag"
  },
  {
    Name : "De fruitpot Evere",
    Address : "Kerkhof van Brussellaan 157 - Evere",
    Delivery : "Elke donderdag"
  },
  {
    Name : "Kinderdagverblijf het nestje Kraainem",
    Address : "Statiestraat 4 - Kraainem",
    Delivery : "Elke donderdag"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
