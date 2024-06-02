import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ProductList } from '../../Interfaces/Product/ProductList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
  deleteProduct(id:number){
    this._productService.delete(id).subscribe(response =>{
      if(response.id){
        alert('Product Deleted Successfully!');
        this.getProducts();
      }
    },error =>{
      console.error('Error fetching data:', error);
    });
  }
}
