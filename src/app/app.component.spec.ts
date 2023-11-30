import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//Pruebas Unitarias
//Verifica que el componente se ha creado correctamente. Si el componente se crea correctamente, component debería ser truthy.
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
//Verifica que la propiedad username en el componente esté definida.
  it('should have a defined username property', () => {
    expect(component.username).toBeDefined();
  });
//Verifica que la propiedad persona en el componente esté definida.
  it('should have a defined persona property', () => {
    expect(component.persona).toBeDefined();
  });
//Verifica que la propiedad persona tenga los valores iniciales correctos.
  it('should have the correct initial values for persona', () => {
    expect(component.persona).toEqual({
      username: 'Juanito',
      edad: 18,
      coords: {
        lat: 10,
        lng: -10,
      },
    });
  });
});

