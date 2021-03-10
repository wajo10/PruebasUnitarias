import { WorkerFormComponent } from './worker-form.component';
import {WorkerModel} from '../../worker.model';

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

  describe('Setup component', () => {
    describe('ngOnInit', () => {
      it('should call generateWorkerForm with this.worker', () => {
        const generateWorkerFormSpy = jest.spyOn(fixture, 'generateWorkerForm');
        const worker: WorkerModel = {
          id: 'Tranajador 1',
          name: 'Wajib Zaglul'
        } as WorkerModel;
        fixture.worker = worker;

        fixture.ngOnInit();

        expect(generateWorkerFormSpy).toBeCalledWith(worker);
      });
    });
  });
});

