import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = '';
  url: string = '';
  listItems = [
    { name: 'Home', link: '/home' },
    { name: 'Products', link: '/products' },
    { name: 'Cart', link: '/cart' },
    { name: 'About', link: '/about' },
  ];


  add() {

    if (!this.title || !this.url) {
      return;
    }
    this.listItems.push({
      name: this.title,
      link: this.url
    });
    this.title = '';
    this.url = '';
  }
}
