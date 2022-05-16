import { Component, Input, OnInit } from '@angular/core';
import { DayCareDto } from 'src/app/models/DayCare';

@Component({
  selector: 'app-daycare',
  templateUrl: './daycare.component.html',
  styleUrls: ['./daycare.component.scss']
})
export class DaycareComponent implements OnInit {

  @Input() public daycare! : DayCareDto;

  constructor() { }

  ngOnInit(): void {
  }

}
