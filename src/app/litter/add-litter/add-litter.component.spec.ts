import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLitterComponent } from './add-litter.component';

describe('AddLitterComponent', () => {
  let component: AddLitterComponent;
  let fixture: ComponentFixture<AddLitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
