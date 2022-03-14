import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeteranoComponent } from './add-veterano.component';

describe('AddVeteranoComponent', () => {
  let component: AddVeteranoComponent;
  let fixture: ComponentFixture<AddVeteranoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVeteranoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVeteranoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
