import { TestBed } from '@angular/core/testing';
import { AngularDelegate, ModalController } from '@ionic/angular';
import { ModalService } from './modal-service.service';

describe('ModalServiceService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        ModalController,
        AngularDelegate
       ]
    });
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
