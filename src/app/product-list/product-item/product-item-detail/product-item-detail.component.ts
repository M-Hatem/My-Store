import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  id!: number;
  product!: Product;
  constructor(
    private actRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((param) => {
      this.id = param['id'];
    });
    console.log(this.id);

    this.getProduct();
  }

  getProduct() {
    this.productsService.getProducts().subscribe((data) => {
      let newData = [];
      newData = data.filter((obj: Product) => {
        return obj.id == this.id;
      });
      this.product = newData[0];
      console.log(this.product);
    });
  }

  alert() {
    alert('A product has been added to the cart');
  }

  onSubmit(formData: NgForm) {
    let newObj = { ...this.product, quantity: +formData.value.quantity };
    this.productsService.catchCartedProducts(newObj);
  }
}
