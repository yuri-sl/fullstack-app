import { Component } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-dataview-produtos',
  imports: [DataViewModule],
  templateUrl: './dataview-produtos.component.html',
  styleUrl: './dataview-produtos.component.scss',
})
export class DataviewProdutosComponent {
  products: Product[] = PRODUCTS;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
