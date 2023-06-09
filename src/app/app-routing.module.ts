import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
    {path: '', loadChildren: () => import('./components/children-routes').then(m => m.CHILDREN_ROUTES)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
