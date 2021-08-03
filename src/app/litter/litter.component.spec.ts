import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitterComponent } from './litter.component';

describe('LitterComponent', () => {
  let component: LitterComponent;
  let fixture: ComponentFixture<LitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
