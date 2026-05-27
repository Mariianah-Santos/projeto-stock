import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationList } from './solicitation-list';

describe('SolicitationList', () => {
  let component: SolicitationList;
  let fixture: ComponentFixture<SolicitationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitationList],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitationList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
