import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittersComponent } from './litters.component';

describe('LittersComponent', () => {
  let component: LittersComponent;
  let fixture: ComponentFixture<LittersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
