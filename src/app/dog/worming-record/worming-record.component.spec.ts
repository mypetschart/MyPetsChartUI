import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WormingRecordComponent } from './worming-record.component';

describe('WormingRecordComponent', () => {
  let component: WormingRecordComponent;
  let fixture: ComponentFixture<WormingRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WormingRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WormingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
