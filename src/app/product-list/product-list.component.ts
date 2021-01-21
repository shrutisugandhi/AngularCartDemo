import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productItemList: any[];
  @Output() productAddedFromApp = new EventEmitter();
  constructor() {
    //console.log("from app to productList---",this.productItemList)
  }
  ngOnInit() {
    console.log("from app component to productList through input---", this.productItemList)

  }
  addToCart(e) {
    console.log("product selected from product compoennt and send to  productList & app---", e)

    this.productAddedFromApp.emit(e);
  }


}
