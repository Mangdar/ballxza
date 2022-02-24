import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuntpageComponent } from './stuntpage.component';

describe('StuntpageComponent', () => {
  let component: StuntpageComponent;
  let fixture: ComponentFixture<StuntpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuntpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuntpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
