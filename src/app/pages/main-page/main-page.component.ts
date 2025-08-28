import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { SplitterModule } from 'primeng/splitter';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { TabsModule } from 'primeng/tabs';
import { Usuario, UsuarioService } from '../../usuario.service';
import { AutoCompleteModule } from 'primeng/autocomplete';

let clientes = [
  { nome: 'Maria', email: 'maria@email.com' },
  { nome: 'João', email: 'joao@email.com' },
];

type Inventory = 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  inventoryStatus: Inventory;
  desc: string;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    TableModule,
    ToastModule,
    SplitterModule,
    CarouselModule,
    CommonModule,
    AutoCompleteModule,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  usuarios: Usuario[] = [];
  changeButtonState = false;

  constructor(private usuarioService: UsuarioService) {}
  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe({
      next: (data) => {
        console.log('GET response: ', data);
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
    });
  }
  products: Product[] = [
    {
      id: '1000',
      name: 'OblivionImage#1',
      image: 'images/combat.jpg',
      price: '120',
      inventoryStatus: 'INSTOCK',
      desc: 'Vivencie lutas',
    },
    {
      id: '100',
      name: 'OblivionImage#2',
      image: 'images/OR_LargeHero_DeepDive.png',
      price: '127',
      inventoryStatus: 'INSTOCK',
      desc: 'Meet a wonderful scenery',
    },
    {
      id: '100',
      name: 'OblivionImage#3',
      image: 'images/imperialCity.jpeg',
      price: '127',
      inventoryStatus: 'INSTOCK',
      desc: 'This is YOUR fight',
    },
    {
      id: '100',
      name: 'OblivionImage#4',
      image: 'images/oblivionWP.jpeg',
      price: '127',
      inventoryStatus: 'INSTOCK',
      desc: 'Uncover the secrets of Oblivion',
    },
    {
      id: '100',
      name: 'OblivionImage#5',
      image: 'images/oblivionGate.avif',
      price: '127',
      inventoryStatus: 'INSTOCK',
      desc: 'Destroy the Gates',
    },
    {
      id: '100',
      name: 'OblivionImage#6',
      image: 'images/GateBattle.png',
      price: '127',
      inventoryStatus: 'INSTOCK',
      desc: 'Fight Demons',
    },
  ];
  responsiveOptions = [
    { breakpoint: '1199px', numVisible: 3, numScroll: 3 },
    { breakpoint: '991px', numVisible: 2, numScroll: 2 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 },
  ];
  getSeverity(status: Inventory) {
    if (status === 'INSTOCK') return 'success';
    if (status === 'LOWSTOCK') return 'warning';
    return 'danger';
  }
  changeButtonStateFunction() {
    console.log('I was clicked!');
    this.changeButtonState = !this.changeButtonState;
  }
}
