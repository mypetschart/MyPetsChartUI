import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLitterComponent } from './single-litter.component';

describe('SingleLitterComponent', () => {
  let component: SingleLitterComponent;
  let fixture: ComponentFixture<SingleLitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
