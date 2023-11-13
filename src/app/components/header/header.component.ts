import { Component, OnInit } from '@angular/core';
import { faMoon, faSun, faUserNinja, faHome, faPerson, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  //Font awesome
  faMoon = faMoon;
  faSun = faSun;
  faUserNinja = faUserNinja
  faHome = faHome
  faPerson = faPerson
  faNetworkWired = faNetworkWired


  darkThemeEnabled: boolean = true;

  constructor() {
    this.darkThemeEnabled = localStorage.getItem('darkTheme') === 'false';
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleDarkTheme(): void {
    this.darkThemeEnabled = !this.darkThemeEnabled;
    localStorage.setItem('darkTheme', String(this.darkThemeEnabled));
    document.body.classList.toggle('dark', this.darkThemeEnabled);
  }

}
