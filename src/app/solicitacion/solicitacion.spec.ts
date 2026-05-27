import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitacion } from './solicitacion';

describe('Solicitacion', () => {
  let component: Solicitacion;
  let fixture: ComponentFixture<Solicitacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Solicitacion],
    }).compileComponents();

    fixture = TestBed.createComponent(Solicitacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
