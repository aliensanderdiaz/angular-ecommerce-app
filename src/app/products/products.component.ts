import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  cartProducts: any[];
  products: any[] = [
    {
      id: 1,
      title: 'Café Americano 1',
      price: 2500,
      description: 'Con el toque secreto de la casa',
      img: 'assets/imagenes/1.png'
    },
    {
      id: 2,
      title: 'Café Americano 2',
      price: 2500,
      description: 'Con el toque secreto de la casa',
      img: 'assets/imagenes/2.png'
    },
    {
      id: 3,
      title: 'Café Americano 3',
      price: 2500,
      description: 'Con el toque secreto de la casa',
      img: 'assets/imagenes/3.png'
    },
    {
      id: 4,
      title: 'Café Americano 4',
      price: 2500,
      description: 'Con el toque secreto de la casa',
      img: 'assets/imagenes/4.png'
    },
    {
      id: 5,
      title: 'Café Americano 5',
      price: 2500,
      description: 'Con el toque secreto de la casa',
      img: 'assets/imagenes/5.png'
    },
    {
      id: 6,
      title: 'Café Americano 6',
      price: 2500,
      description: 'Con el toque secreto de la casa',
      img: 'assets/imagenes/6.png'
    },
    {
      id: 7,
      title: 'Café Americano 7',
      price: 2500,
      description: 'Con el toque secreto de la casa',
      img: 'assets/imagenes/7.png'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const data = localStorage.getItem('cart');

    if (data) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  addToCart(index) {
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data) {
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCart(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }

  updateCart(cartData) {
    this.cartProducts = cartData;
  }

}
