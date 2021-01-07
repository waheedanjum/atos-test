import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceInfoComponent } from './components/space-info/space-info.component';

const routes: Routes = [
  {
    path: "space-info",
    component: SpaceInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
