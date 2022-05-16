import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DayCareDto } from 'src/app/models/DayCare';

@Injectable({
  providedIn: 'root'
})
export class DaycareService {

  constructor() { }


  getDaycares() : Observable<DayCareDto[]>{
    return of([{
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
      }]);
    }
}
