import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuGridComponent } from './menu-grid/menu-grid.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MenuGridComponent },
  { path: ':id', component: MenuDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
