import { Component, Input, OnInit } from '@angular/core';
import { PageStore } from 'src/app/stores/pages.store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() public pageName: string = '';
  @Input() public pkmId: number = 0;
  @Input() public imageUrl: string = '';
  @Input() public btnBack: string = '';
  @Input() public btnMenu: boolean = false;
  @Input() public btnFilter: boolean = false;
  @Input() public btnSearch: boolean = false;
  @Input() public btnHeart: boolean = false;
  public pkmFavorite: boolean = false;
  constructor(
    private pageStore: PageStore
  ) { }

  ngOnInit() {}

  public changeFavorite(): void{
    this.pkmFavorite = !this.pkmFavorite;
  }

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
