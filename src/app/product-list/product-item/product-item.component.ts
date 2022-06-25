import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  alert() {
    alert('A product has been added to the cart');
  }

  onSubmit(formData: NgForm) {
    let newObj = { ...this.product, quantity: +formData.value.quantity };
    this.productsService.catchCartedProducts(newObj);
  }
}
