import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeneficioComponent } from './add-beneficio.component';

describe('AddBeneficioComponent', () => {
  let component: AddBeneficioComponent;
  let fixture: ComponentFixture<AddBeneficioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeneficioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
