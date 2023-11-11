import { Component } from '@angular/core';
import { faMoon, faSun, faUserNinja, faHome, faPerson, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  //Font awesome
  faMoon = faMoon;
  faSun = faSun;
  faUserNinja = faUserNinja
  faHome = faHome
  faPerson = faPerson
  faNetworkWired = faNetworkWired


  darkThemeEnabled: boolean;

  constructor() {
    this.darkThemeEnabled = localStorage.getItem('darkTheme') === 'true';
  }

  toggleDarkTheme(): void {
    this.darkThemeEnabled = !this.darkThemeEnabled;
    localStorage.setItem('darkTheme', String(this.darkThemeEnabled));
    document.body.classList.toggle('dark', this.darkThemeEnabled);
    console.log(this.darkThemeEnabled);

  }

}
