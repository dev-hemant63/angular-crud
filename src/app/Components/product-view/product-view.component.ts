import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Products } from '../../Interfaces/Product/ProductList';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from '../../Services/shared-service.service';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  productid: number = 0;
  productDetails: Products = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  };

  constructor(private route:ActivatedRoute,private _productService:ProductService,private _sharedService:SharedServiceService){
    // this.route.paramMap.subscribe(param =>{
    //   var urldata = param.get('id');
    //   this.productid = parseInt(urldata ?? '0');
    // });
    // this.getProductDetails();
    this._sharedService.data$.subscribe(data=>{
      this.productid = data;
    });
    this.getProductDetails();
}
getProductDetails(){
  this._productService.getProductById(this.productid).subscribe(data=>{
    this.productDetails = data;
  },error =>{
    console.error('Error fetching data:', error);
  });
}
}
