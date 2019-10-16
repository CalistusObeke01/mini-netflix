import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './movies/movies-list.module#MoviesListModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
