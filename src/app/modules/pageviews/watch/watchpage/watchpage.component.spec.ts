import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchpageComponent } from './watchpage.component';

describe('WatchpageComponent', () => {
  let component: WatchpageComponent;
  let fixture: ComponentFixture<WatchpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
