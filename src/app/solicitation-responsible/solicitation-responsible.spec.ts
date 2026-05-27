import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationResponsible } from './solicitation-responsible';

describe('SolicitationResponsible', () => {
  let component: SolicitationResponsible;
  let fixture: ComponentFixture<SolicitationResponsible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitationResponsible],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitationResponsible);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
