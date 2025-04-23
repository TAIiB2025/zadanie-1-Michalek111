import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-naglowek',
  imports: [CommonModule],
  templateUrl: './naglowek.component.html',
  styleUrl: './naglowek.component.css'
})
export class NaglowekComponent {
  wiadomosc: string = 'Sklep TAIiB';

  onMouseEnter(): void{
    this.wiadomosc = 'Sklep TAIiB :)';
  }

  onMouseLeave(): void{
    this.wiadomosc = 'Sklep TAIiB';
  }
}
