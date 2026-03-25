import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDefault } from './sidebar-default';

describe('SidebarDefault', () => {
  let component: SidebarDefault;
  let fixture: ComponentFixture<SidebarDefault>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarDefault],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarDefault);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
