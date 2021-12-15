import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { DetalleItemComponent } from './componentes/detalle-item/detalle-item.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"detalleItem/:id",component:DetalleItemComponent},
  {path:"detalleItem", component:DetalleItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
