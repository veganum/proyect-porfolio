import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import {
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectsComponent {
  data: any[] = [];
  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  faAngleLeft = faAngleLeft;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  faAngleRight = faAngleRight;

  constructor(private projectsService: ProjectsService) {
    this.data = projectsService.getDataProyects();
  }

  public scrollBegin(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: 0, behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 500,
      behavior: 'smooth',
    });
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 500,
      behavior: 'smooth',
    });
  }

  public scrollLast(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left:
        this.widgetsContent.nativeElement.scrollLeft + 500 * this.data.length,
      behavior: 'smooth',
    });
  }
}
