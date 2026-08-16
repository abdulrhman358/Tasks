
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Team } from './team/team';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // بيفتح الـ Home أول ما الموقع يشتغل
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'team', component: Team }
];