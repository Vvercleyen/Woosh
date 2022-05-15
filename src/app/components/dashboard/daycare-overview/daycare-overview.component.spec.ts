import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaycareOverviewComponent } from './daycare-overview.component';

describe('DaycareOverviewComponent', () => {
  let component: DaycareOverviewComponent;
  let fixture: ComponentFixture<DaycareOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaycareOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaycareOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
