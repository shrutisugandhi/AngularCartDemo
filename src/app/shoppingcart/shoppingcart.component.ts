import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  @Input() addedProduct:any[]=[];
  constructor() { }

  ngOnInit() {
console.log("added--",this.addedProduct)
  }

}
