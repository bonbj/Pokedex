import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() public pageName: string = '';
  @Input() public pkmId: number = 0;
  @Input() public imageUrl: string = '';
  @Input() public btnBack: boolean = false;
  @Input() public btnMenu: boolean = false;
  @Input() public btnFilter: boolean = false;
  @Input() public btnSearch: boolean = false;
  @Input() public btnHeart: boolean = false;

  public pkmFavorite: boolean = false;
  constructor() { }

  ngOnInit() {}

  public changeFavorite(){
    this.pkmFavorite = !this.pkmFavorite;
  }

}
