import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVeteranoComponent } from './listar-veterano.component';

describe('ListarVeteranoComponent', () => {
  let component: ListarVeteranoComponent;
  let fixture: ComponentFixture<ListarVeteranoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarVeteranoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVeteranoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
