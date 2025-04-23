import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { Product } from '../models/product.class';
import { CommonModule } from '@angular/common';
import { KoszykComponent } from './koszyk/koszyk.component';
import { NaglowekComponent } from './naglowek/naglowek.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductComponent,CommonModule,KoszykComponent,NaglowekComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 products: Product[]=
 [
  new Product('Korki Adidas',899.99,new Date(2025,4,23),false,0,false),
  new Product('Korki Nike',1199.99,new Date(2025,4,1),false,0,false),
  new Product('Korki Puma',399.99,new Date(2024,2,23),true,0,false),
  new Product('Korki Umbro',199.99,new Date(2022,4,23),true,0,false),
  new Product('Korki Kipsta',99.99,new Date(2022,12,22),true,0,false)
 ];

 wartoscKoszyka: number = 0;
 showProducts: boolean = true;

 dodajDoKoszyka(product: Product): void {
  product.liczbaSztuk++;
  this.wartoscKoszyka += product.cena;
  console.log(`${product.nazwa} został dodany do koszyka!`);
}

changeStatusOfProducts(): void
{
  this.showProducts = !this.showProducts;
}

wyczyscKoszyk(): void {
  this.wartoscKoszyka = 0;
  this.products.forEach(product => product.liczbaSztuk = 0);
  console.log('Koszyk został wyczyszczony!');
}

}
