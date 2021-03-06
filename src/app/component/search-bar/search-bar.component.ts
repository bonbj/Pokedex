import { Component } from '@angular/core';
import { PageStore } from 'src/app/stores/pages.store';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent{

  constructor(
    public pageStore:PageStore
  ) { }
  public closeSeach(): void {
    this.pageStore.isSearchBarShow = false;
  }
}
