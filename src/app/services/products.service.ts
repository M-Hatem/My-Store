import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  cartedProducts: Product[] = [];
  totalPrice: number = 0;
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('../assets/data.json');
  }

  catchCartedProducts(product: Product) {
    this.cartedProducts.push(product);
  }

  getCartedProducts() {
    return this.cartedProducts;
  }

  removeFromCart(id: number) {
    return (this.cartedProducts = this.cartedProducts.filter((obj) => {
      return obj.id != id;
    }));
  }

  resetProducts() {
    this.cartedProducts = [];
  }
}
