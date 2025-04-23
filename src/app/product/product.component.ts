import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.class';
import { CommonModule } from '@angular/common';
import { KoszykComponent } from '../koszyk/koszyk.component';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input() products: Product[]=[];
@Output() dodajDoKoszyka = new EventEmitter<Product>();

zwinProdukt(product: Product): void{
  product.zwin = !product.zwin;
}
}
