import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cartquantity',
  templateUrl: './cartquantity.component.html',
  styleUrls: ['./cartquantity.component.css']
})
export class CartquantityComponent implements OnInit {

  constructor() { }
  @Input() pid;
  @Input() quantity;
  @Output() updatedcartQuant=new EventEmitter();
  StockCount:number;
  ngOnInit() {
    console.log("pid--",this.pid);
    console.log("quantity--",this.quantity);
  }
  incrementQuantity(){
this.StockCount=this.quantity+1;
this.updatedcartQuant.emit(this.StockCount);
  }
  decrementQuantity(){
    this.StockCount=this.quantity-1;
    this.updatedcartQuant.emit(this.StockCount);
      }
}
