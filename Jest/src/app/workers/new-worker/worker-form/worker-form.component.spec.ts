import { WorkerFormComponent } from './worker-form.component';
import {WorkerModel} from '../../worker.model';

// Código adaptado desde https://www.youtube.com/watch?v=PdVerlfmO6M&list=PLtlqfp1XEW4hXv8C2-gJVdLTzTVzihoH8&index=1&ab_channel=TheRyanSmee

describe( 'WorkerFormComponent', () => { // Probar el componente
  let fixture: WorkerFormComponent; // Clase a probar
  // Son mock porque no interesa realmente el valor
  let workerServiceMock;
  // tslint:disable-next-line:prefer-const
  let dialogServiceMock;
  let loaderServiceMock;

  beforeEach(() => { // Antes de cada test debe crear una nueva instancia
    workerServiceMock = {
      submitWorker: jest.fn()
    };
    loaderServiceMock = {
      setLoaderState: jest.fn()
    };

    fixture = new WorkerFormComponent(
      workerServiceMock,
      dialogServiceMock,
      loaderServiceMock
    );
  });

  describe('Setup component', () => { // Probar el método Setup Component
    describe('ngOnInit', () => {
      it('Llamará generateWorkerForm con el parámetro this.worker', () => {
        const generateWorkerFormSpy = jest.spyOn(fixture, 'generateWorkerForm'); // Spy para analizar luego
        const worker: WorkerModel = {
          id: 'Trabajador 1',
          name: 'Wajib Zaglul'
        } as WorkerModel;
        fixture.worker = worker;

        fixture.ngOnInit();

        expect(generateWorkerFormSpy).toBeCalledWith(worker);
        // Se espera que generateWorker tenga como parámetro worker de forma correcta
      });
    });
  });
});

