import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoresInfoComponent } from './components/space-info/cores-info/cores-info.component';
import { SpaceInfoComponent } from './components/space-info/space-info.component';

const routes: Routes = [
  {
    path: "space-info",
    component: SpaceInfoComponent,
  },
  {
    path: "cores-info",
    component: CoresInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
