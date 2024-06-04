import { Component,Input, input } from '@angular/core';
import { CreateProduct, Products } from '../../Interfaces/Product/ProductList';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { SharedServiceService } from '../../Services/shared-service.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css'
})
export class ProductModalComponent {
  data:Products = {
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
  request: CreateProduct | undefined;
  productFrom: FormGroup | undefined;

  constructor(private _productService: ProductService, private fb: FormBuilder,private _sharedService:SharedServiceService) {
    this.productFrom = this.fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
    });
    this._sharedService.data$.subscribe(data => {
      this.data = data;
      console.log('_sharedService',data);
    });
  }
  addProduct(requestData: CreateProduct) {
    this.request = requestData;
    if (!requestData.id) {
      this._productService.addProduct(this.request).subscribe(apires => {
        if (apires.id) {
          alert('Product Add Successfully!');
          this.closeModal();
        }
      });
    }
    else {
      this._productService.updateProduct(this.request).subscribe(apires => {
        if (apires.id) {
          alert('Product Update Successfully!');
          this.closeModal();
        }
      });
    }

  }
  closeModal() {
    $('.btn-close').click();
  }
}
