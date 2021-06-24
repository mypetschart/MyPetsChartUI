import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyComponent } from './puppy.component';

describe('PuppyComponent', () => {
  let component: PuppyComponent;
  let fixture: ComponentFixture<PuppyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuppyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
