import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loaing } from './loaing';

describe('Loaing', () => {
  let component: Loaing;
  let fixture: ComponentFixture<Loaing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Loaing],
    }).compileComponents();

    fixture = TestBed.createComponent(Loaing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
