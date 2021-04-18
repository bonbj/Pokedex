import { Component, Input } from '@angular/core';
import { PageStore } from 'src/app/stores/pages.store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() public pageName: string = '';
  constructor(
    private pageStore: PageStore
  ) { }

  public openSideMenu(): void{
    this.pageStore.isSideMenuOpen = true;
  }

  public openFilterMenu(): void{
    this.pageStore.isFilterMenuOpen = true;
  }

  public searchBarShow(): void{
    this.pageStore.isSearchBarShow = true;
  }
}
