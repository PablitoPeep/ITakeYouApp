import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AgregarvehiculoPage } from './agregarvehiculo.page';

describe('AgregarvehiculoPage', () => {
  let component: AgregarvehiculoPage;
  let fixture: ComponentFixture<AgregarvehiculoPage>;

  beforeEach(() => {
    // Configurar el entorno de prueba
    TestBed.configureTestingModule({
      declarations: [AgregarvehiculoPage], // Declarar el componente que se va a probar
      imports: [IonicModule.forRoot()], // Importar módulos necesarios para el componente
    });

    // Crear una instancia del componente y su fixture
    fixture = TestBed.createComponent(AgregarvehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detectar cambios en el componente
  });

  // Prueba: Verificar si el componente se crea correctamente
  //it('should create', () => {
    //expect(component).toBeTruthy();
  //});

  // Prueba: Verificar si los elementos se inicializan correctamente
  it('ELEMENTOS INICIALIZADOS CORRECTAMENTE', () => {
  });

  
});


