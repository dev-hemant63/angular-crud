import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ProductList } from '../../Interfaces/Product/ProductList';


@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.css'
})
export class GetProductsComponent {

  data: ProductList = [];

  constructor(private _productService:ProductService){
    this.getProducts();
  }

  getProducts(){
    this._productService.getProductList().subscribe(response =>{
      this.data = response;
    },error =>{
      console.error('Error fetching data:', error);
    });
    
  }
}
