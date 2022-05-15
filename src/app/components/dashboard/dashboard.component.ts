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
    document.body.style.backgroundPosition = "78em 38em, 110em 45em";
  }

  ngOnInit(): void {
  }

}
