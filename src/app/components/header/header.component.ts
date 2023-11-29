import { Component, OnInit } from '@angular/core';
import { faMoon, faSun, faUserNinja, faHome, faPerson, faNetworkWired ,faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Font awesome
  faMoon = faMoon;
  faSun = faSun;
  faUserNinja = faUserNinja
  faHome = faHome
  faPerson = faPerson
  faNetworkWired = faNetworkWired
  faEye=faEye
  faEyeSlash=faEyeSlash


  darkThemeEnabled: boolean = false;

  showHeader : boolean = true;

  constructor() {
    this.darkThemeEnabled = localStorage.getItem('darkMode') === 'false';
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleDarkTheme(): void {
    this.darkThemeEnabled = !this.darkThemeEnabled;
    localStorage.setItem('darkMode', String(this.darkThemeEnabled));
    document.body.classList.toggle('dark', this.darkThemeEnabled);
  }

  toggleHeader(){
    this.showHeader = !this.showHeader
  }

}
