import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  Products!: any[];
  totalPrice: number = 0;
  fullName: string = '';

  qunatity: number = 3;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
    for (let i = 0; i < this.Products.length; i++) {
      this.totalPrice += this.Products[i].quantity * this.Products[i].price;
    }
    this.productsService.totalPrice = this.totalPrice;
  }

  getProducts() {
    this.Products = this.productsService.getCartedProducts();
  }

  changeAmount(product: any, qunatity: number) {
    this.totalPrice = 0;
    for (let i = 0; i < this.Products.length; i++) {
      this.totalPrice += this.Products[i].quantity * this.Products[i].price;
    }
    this.productsService.totalPrice = this.totalPrice;
    if (qunatity == 0) {
      this.Products = this.productsService.removeFromCart(product.id);
      this.totalPrice = this.totalPrice - product.quantity * product.price;
      alert('A product has been removed from the cart');
    }
  }

  removeFromCart(product: any) {
    this.Products = this.productsService.removeFromCart(product.id);
    this.totalPrice = this.totalPrice - product.quantity * product.price;
    if (this.Products.length == 0) this.totalPrice = 0;
    alert('An product has been removed from the cart');
  }

  onSubmit(formData: NgForm) {
    if (formData.valid == true) {
      this.router.navigate(['/confirmation']);
      this.productsService.fullName = this.fullName;
    }
  }
}
