import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProduct, ProductList, Products } from '../Interfaces/Product/ProductList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}

  getProductList(){
    return this.http.get<ProductList>('https://fakestoreapi.com/products');
  }
  getProductById(id:number){
    return this.http.get<Products>(`https://fakestoreapi.com/products/${id}`);
  }
  addProduct(request:CreateProduct){
    return this.http.post<Products>('https://fakestoreapi.com/products',JSON.stringify(request))
  }
  updateProduct(request:CreateProduct){
    return this.http.put<Products>(`ttps://fakestoreapi.com/products/${request.id}`,JSON.stringify(request))
  }
  delete(id:number){
    return this.http.delete<Products>(`https://fakestoreapi.com/products/${id}`);
  }
}
