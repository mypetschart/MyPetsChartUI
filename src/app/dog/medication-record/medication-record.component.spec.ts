import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationRecordComponent } from './medication-record.component';

describe('MedicationRecordComponent', () => {
  let component: MedicationRecordComponent;
  let fixture: ComponentFixture<MedicationRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
