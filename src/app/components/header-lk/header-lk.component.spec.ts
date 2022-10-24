import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLkComponent } from './header-lk.component';

describe('HeaderLkComponent', () => {
  let component: HeaderLkComponent;
  let fixture: ComponentFixture<HeaderLkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
