import { observable } from "mobx";

export class PageStore {
    @observable
    isSideMenuOpen: boolean = false;
    @observable
    isFilterMenuOpen: boolean = false;
    @observable
    isSearchBarShow: boolean = false;
}