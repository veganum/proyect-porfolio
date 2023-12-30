import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { ProyectsComponent } from './proyects/proyects.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'hero', component: HeroComponent },
      { path: 'about', component: AboutComponent },
      { path: 'proyects', component: ProyectsComponent },
      { path: '**', redirectTo: 'hero' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
