import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgOptimizedImage } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProyectsComponent } from './proyects/proyects.component';

@NgModule({
  declarations: [HeroComponent, AboutComponent, ProyectsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    NgOptimizedImage,
  ],
})
export class HomeModule {}
