import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicZoneComponent } from './public-zone.component';

describe('PublicZoneComponent', () => {
  let component: PublicZoneComponent;
  let fixture: ComponentFixture<PublicZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
