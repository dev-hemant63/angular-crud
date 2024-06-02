import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { CreateProduct, Products } from '../../Interfaces/Product/ProductList';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  request: CreateProduct | undefined;
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
  productFrom: FormGroup | undefined;
  constructor(private _productService: ProductService, private _activeRoute: ActivatedRoute,private fb: FormBuilder,private _router:Router) {
    this.productFrom = this.fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
    });

    _activeRoute.paramMap.subscribe(param => {
      this.productid = parseInt(param.get('id') ?? '0');
    });
    this.getProductDetails();
  }

  addProduct(requestData: CreateProduct) {
    console.log('this.productFrom',this.productFrom);
    this.request = requestData;
    console.log('requestData',requestData);
    if(!requestData.id){
      this._productService.addProduct(this.request).subscribe(apires => {
        if (apires.id) {
          alert('Product Add Successfully!');
          this._router.navigate(['/']);
        }
      });
    }
    else{
      this._productService.updateProduct(this.request).subscribe(apires => {
        if (apires.id) {
          alert('Product Update Successfully!');
          this._router.navigate(['/']);
        }
      });
    }
  }
  getProductDetails() {
    if(this.productid){
      this._productService.getProductById(this.productid).subscribe(apidata => {
        this.productDetails = apidata;
      }, error => {
        console.error(error);
      });
    }
    
  }
}
