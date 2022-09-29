import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRequestsComponent } from './home-requests.component';

describe('HomeRequestsComponent', () => {
  let component: HomeRequestsComponent;
  let fixture: ComponentFixture<HomeRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
