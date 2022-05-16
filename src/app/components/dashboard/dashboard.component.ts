import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundImage = "url('../../../../assets/images/Path11802.svg'), url('../../../../assets/images/Planet.svg')";
    document.body.style.backgroundPosition = "80em 37em, 112em 44em";
  }

  ngOnInit(): void {
  }

}
