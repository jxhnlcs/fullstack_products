import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto-list/produto-list.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';

const routes: Routes = [
  { path: '', component: ProdutoListComponent },
  { path: 'novo', component: ProdutoFormComponent },
  { path: 'editar/:id', component: ProdutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }