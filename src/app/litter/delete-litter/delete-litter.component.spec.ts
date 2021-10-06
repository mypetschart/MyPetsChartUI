import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLitterComponent } from './delete-litter.component';

describe('DeleteLitterComponent', () => {
  let component: DeleteLitterComponent;
  let fixture: ComponentFixture<DeleteLitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
