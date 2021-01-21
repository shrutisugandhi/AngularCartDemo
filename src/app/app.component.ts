import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopcart';
  productList = [
    {
      "id": 101,
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg",
      "name": "Sport Shoes",
      "price": 110,
      "cartQuantity": 0
    },
    {
      "id": 102,
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
      "name": "Red SNEAKER",
      "price": 91,
      "cartQuantity": 0
    },
    {
      "id": 103,
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-pink-and-black-sport-woman-shoes-isolated-on-white-background-709418083.jpg",
      "name": "Sport Shoes Women",
      "price": 94,
      "cartQuantity": 0
    },
    {
      "id": 104,
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-children-s-autumn-or-winter-fashion-boots-isolated-on-white-background-708900334.jpg",
      "name": "Winter boots children",
      "price": 143,
      "cartQuantity": 0
    },
    {
      "id": 105,
      "imgUrl": "https://image.shutterstock.com/z/stock-photo-bangkok-thailand-january-onitsuka-tiger-asics-gel-lyte-iii-on-january-in-bangkok-292088969.jpg",
      "name": "Sports shoes Red-White",
      "price": 150,
      "cartQuantity": 0
    },


  ]
  productInShopCart: any[]=[];
  onAddProduct(e) {
    console.log("e---", e);
    this.productInShopCart.push(e);
    console.log("this---", this.productInShopCart);
  }
}
