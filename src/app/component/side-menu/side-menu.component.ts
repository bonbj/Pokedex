import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageStore } from 'src/app/stores/pages.store';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  constructor(
    public pageStore: PageStore,
    private router: Router
  ) { }

  closeMenu(): void {
    this.pageStore.isSideMenuOpen = false;
  }

  public changePage():void {
    this.closeMenu();
    this.router.navigate([`${this.pageStore.pageActive}`]);
  }
}
