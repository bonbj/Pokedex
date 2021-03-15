import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.scss'],
})
export class WarningModalComponent {
  @Input()
  public message: string = "";
  constructor() { }

}
