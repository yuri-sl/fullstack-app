import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuItem, MegaMenuItem } from 'primeng/api';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

type ViewKey =
  | 'pedidos'
  | 'agendamentos'
  | 'clientes'
  | 'funcionarios'
  | 'produtos';

@Component({
  selector: 'app-customer-page',
  imports: [
    SideBarComponent,
    CommonModule,
    MenubarModule,
    MegaMenuModule,
    FullCalendarModule,
    TableModule,
    CheckboxModule,
  ],
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.scss',
})
export class CustomerPageComponent implements OnInit {
  listaProdutos: any[] = [];
  optionSelected: any;
  menuItemsList: MegaMenuItem[] | undefined;
  listaClientes: any[] = [];
  listaFuncionarios: any[] = [];

  enableListaClientes: boolean = false;
  enableListaFuncionarios: boolean = false;

  currentView: ViewKey = 'clientes';

  ngOnInit(): void {
    this.menuItemsList = [
      {
        label: 'Produtos',
        items: [
          [
            {
              label: 'Livros',
              icon: 'pi pi-bolt',
              items: [
                {
                  label: 'celular',
                },
                {
                  label: 'Notebooks',
                },
                {
                  label: 'Desktops',
                },
              ],
            },
            {
              label: 'livros',
              icon: 'pi pi-file',
            },
          ],
        ],
      },
      {
        label: 'Pedidos',
        command: () => this.setActiveView('pedidos'),
      },
      {
        label: 'Produtos',
        command: () => this.setActiveView('produtos'),
      },
      {
        label: 'Agendamentos',
        command: () => this.setActiveView('agendamentos'),
      },
      {
        label: 'Clientes',
        command: () => this.setActiveView('clientes'),
      },
      {
        label: 'Funcionários',
        command: () => this.setActiveView('funcionarios'),
      },
    ];
    this.listaClientes = [
      {
        idCliente: '1',
        nome: 'Alberto Oliver',
        email: 'OliverAlberto@gmail.com',
        senha: 'Tenkaichi3',
        cpf: '333.333-33',
      },
      {
        idCliente: '2',
        nome: 'Kleyton Alberto',
        email: 'KleytonAlberto@gmail.com',
        senha: 'padoru3',
        cpf: '543.333-66',
      },
      {
        idCliente: '3',
        nome: 'Arturo Plateado',
        email: 'divineSilver@gmail.com',
        senha: 'SilverWind',
        cpf: '333.393-33',
      },
    ];
    this.listaFuncionarios = [
      {
        idFuncionario: '1',
        nome: 'Natsu Dragneel',
        email: 'natsuft@gmail.com',
        cargo: 'estoque',
        unidade: 'SP',
      },
      {
        idFuncionario: '2',
        nome: 'Lucy Heartfilia',
        email: 'lucyft@gmail.com',
        cargo: 'vendedora de caixa',
        unidade: 'BH',
      },
      {
        idFuncionario: '3',
        nome: 'Erza Scarlett',
        email: 'erzaft@gmail.com',
        cargo: 'atendente',
        unidade: 'Torre do paraíso',
      },
    ];
  }
  setActiveView(view: ViewKey) {
    this.currentView = view;
  }
}
