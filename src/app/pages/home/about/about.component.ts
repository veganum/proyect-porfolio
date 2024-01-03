import { Component } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  heroImg = '../../../../assets/img/mi-foto2.webp';

  linkedin = faLinkedin;
  github = faGithub;
  mail = faEnvelope;
  curriculum = faIdCard;

  constructor() {
    console.log(faIdCard);
  }
}
