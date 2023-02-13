import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundTwoComponent } from './background-two.component';

describe('BackgroundTwoComponent', () => {
  let component: BackgroundTwoComponent;
  let fixture: ComponentFixture<BackgroundTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
