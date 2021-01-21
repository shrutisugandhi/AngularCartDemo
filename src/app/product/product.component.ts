import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() prod;
  @Output() productAddedArray = new EventEmitter();
  TotalProductSelected: any[] = [];
  productExist;
  ngOnInit() {
    console.log("list of products obtained from product list---", this.prod)
  }
  addToCart(productSelected) {
    this.productAddedArray.emit(productSelected);

  }
  incrementQuantity(productSelected) {
    console.log("productSelected---", productSelected);
    productSelected.cartQuantity += 1;
    this.TotalProductSelected.push({ ...productSelected });

    console.log("List of totalproductselected----", this.TotalProductSelected);
  }
  decrementQuantity(productSelected) {
    console.log("productSelected---", productSelected);
    productSelected.cartQuantity -= 1;
    this.TotalProductSelected.push({ ...productSelected });

    console.log("List of totalproductselected----", this.TotalProductSelected);
  }
}
