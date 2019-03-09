import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraPageComponent } from './registra-page.component';

describe('RegistraPageComponent', () => {
  let component: RegistraPageComponent;
  let fixture: ComponentFixture<RegistraPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
