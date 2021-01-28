import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';

import { ProductsComponent } from './products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewAllProductsByCatagoryComponent } from './view-all-products-by-catagory/view-all-products-by-catagory.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';



const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
 // { path: 'list-products', component: ViewAllProductsComponent },
  { path: 'search-date' ,component:ViewAllProductsByDateComponent},
  { path: 'search' ,component:ViewAllProductsByCatagoryComponent},
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
