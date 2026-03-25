import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adm } from './adm';

describe('Adm', () => {
  let component: Adm;
  let fixture: ComponentFixture<Adm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adm],
    }).compileComponents();

    fixture = TestBed.createComponent(Adm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
