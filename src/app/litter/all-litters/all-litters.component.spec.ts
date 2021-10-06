import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLittersComponent } from './all-litters.component';

describe('AllLittersComponent', () => {
  let component: AllLittersComponent;
  let fixture: ComponentFixture<AllLittersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLittersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
