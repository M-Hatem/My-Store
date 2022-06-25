import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() errorMsg: EventEmitter<string> = new EventEmitter();
  errorMessage: string = 'A product has been added to the cart';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  alert() {
    this.errorMsg.emit(this.errorMessage);
  }

  onSubmit(formData: NgForm) {
    let newObj = { ...this.product, quantity: +formData.value.quantity };
    this.productsService.catchCartedProducts(newObj);
  }
}
