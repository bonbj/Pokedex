import { Component } from '@angular/core';
import { PageStore } from 'src/app/stores/pages.store';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

  constructor(
    public pageStore: PageStore
  ) { }
}
