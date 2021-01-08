import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresInfoComponent } from './cores-info.component';

describe('CoresInfoComponent', () => {
  let component: CoresInfoComponent;
  let fixture: ComponentFixture<CoresInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoresInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoresInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
