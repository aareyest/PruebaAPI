import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBeneficioComponent } from './listar-beneficio.component';

describe('ListarBeneficioComponent', () => {
  let component: ListarBeneficioComponent;
  let fixture: ComponentFixture<ListarBeneficioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarBeneficioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
