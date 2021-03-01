import { Component, Input, OnInit } from '@angular/core';
import { PageStore } from 'src/app/atores/pages.store';

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

  public changeFavorite(){
    this.pkmFavorite = !this.pkmFavorite;
  }

  public openSideMenu(){
    this.pageStore.isSideMenuOpen = true;
  }

  public openFilterMenu(){
    this.pageStore.isFilterMenuOpen = true;
  }
}
