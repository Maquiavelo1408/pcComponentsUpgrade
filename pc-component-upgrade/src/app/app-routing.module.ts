import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentSelectorComponent } from './component-selector/component-selector.component';

const routes: Routes = [
  {path: 'home', component: ComponentSelectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
