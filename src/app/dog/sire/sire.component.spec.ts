import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SireComponent } from './sire.component';

describe('SireComponent', () => {
  let component: SireComponent;
  let fixture: ComponentFixture<SireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
