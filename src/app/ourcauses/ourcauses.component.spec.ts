import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcausesComponent } from './ourcauses.component';

describe('OurcausesComponent', () => {
  let component: OurcausesComponent;
  let fixture: ComponentFixture<OurcausesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurcausesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurcausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
