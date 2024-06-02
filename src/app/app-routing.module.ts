import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { ProductViewComponent } from './Components/product-view/product-view.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'create-product/:id',component:CreateProductComponent},
  {path:'product-view/:id',component:ProductViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
