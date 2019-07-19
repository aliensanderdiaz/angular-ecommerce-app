import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: any[];
  bill: number = 0;

  constructor() { }

  ngOnInit() {
    this.initiateData();
  }

  initiateData() {
    const data = localStorage.getItem('cart');

    if (data) {
      this.cartProducts = JSON.parse(data);
      this.bill = 0;
      this.cartProducts.forEach( product => {
        product.qt = 1;
        this.bill += product.price * product.qt;
      });
    } else {
      this.cartProducts = [];
    }
  }

  updateTotal() {
    this.bill = 0;
    this.cartProducts.forEach( product => {
      this.bill += product.price * product.qt;
    });
  }

  removeItem(id) {
    this.cartProducts.splice(id, 1);
    if (this.cartProducts.length) {
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      localStorage.setItem('cart', null);
    }
  }

  payBill() {
    if (this.cartProducts.length) {
      alert('Your bill is: ' + this.bill);
      localStorage.removeItem('cart');
    }
  }

}
