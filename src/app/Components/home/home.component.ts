import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { CreateProduct, ProductList, Products } from '../../Interfaces/Product/ProductList';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import $ from 'jquery';
import { ModalService, ModalSize } from '@developer-partners/ngx-modal-dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  request: CreateProduct | undefined;
  data: ProductList = [];
  productFrom: FormGroup | undefined;
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

  constructor(private _productService: ProductService, private fb: FormBuilder, private _modalService: ModalService) {
    this.getProducts();
    this.productFrom = this.fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  getProducts() {
    this._productService.getProductList().subscribe(response => {
      this.data = response;
    }, error => {
      console.error('Error fetching data:', error);
    });

  }
  deleteProduct(id: number) {
    this._productService.delete(id).subscribe(response => {
      if (response.id) {
        alert('Product Deleted Successfully!');
        this.getProducts();
      }
    }, error => {
      console.error('Error fetching data:', error);
    });
  }
  addProduct(requestData: CreateProduct) {
    this.request = requestData;
    if (!requestData.id) {
      this._productService.addProduct(this.request).subscribe(apires => {
        if (apires.id) {
          alert('Product Add Successfully!');
          this.getProducts();
          this.closeModal();
        }
      });
    }
    else {
      this._productService.updateProduct(this.request).subscribe(apires => {
        if (apires.id) {
          alert('Product Update Successfully!');
          this.getProducts();
          this.closeModal();
        }
      });
    }

  }
  getProductDetails(productid: number) {
    if (productid) {
      this._productService.getProductById(productid).subscribe(apidata => {
        this.productDetails = apidata;
      }, error => {
        console.error(error);
      });
      this.openModal();
    }

  }

  closeModal() {
    $('.btn-close').click();
  }
  openModal() {
    this._modalService.show<CreateProduct>(ProductModalComponent, {
      title: 'Create Product',
      size: ModalSize.large
    }).result()
      .subscribe(response => {
        console.log('newBook', response)
      });
  }
}
