import {Component, Input, OnInit} from '@angular/core';
import {WorkerModel} from '../../worker.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// Código adaptado desde https://www.youtube.com/watch?v=PdVerlfmO6M&list=PLtlqfp1XEW4hXv8C2-gJVdLTzTVzihoH8&index=1&ab_channel=TheRyanSmee
@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements OnInit {


  @Input()
  public worker: WorkerModel;

  public workerForm: FormGroup;

  public isSubmitting = false;


  constructor(
    private workerService,
    private dialogService,
    private loaderService
  ) { }


  ngOnInit(): void {
    this.generateWorkerForm( this.worker );
  }

  public generateWorkerForm( worker: WorkerModel ): void {
    this.workerForm = new FormGroup( {
      id: new FormControl (
        worker
        && worker.id
          ? worker.id
          : ( `${ Math.random() }` ),
        {
          validators: [
            Validators.required
          ]
        }
      ),
      name: new FormControl (
        worker
        && worker.name
          ? worker.name
          : null,
        {
          validators: [
            Validators.required,
            Validators.maxLength( 100 )
          ]
        }
      ),
      role: new FormControl (
        worker
        && worker.role
          ? worker.role
          : [],
        Validators.maxLength( 5 )
      ),
      active: new FormControl (
        worker
        && worker.active !== null
          ? worker.active
          : true,
      )
    });
  }

}
