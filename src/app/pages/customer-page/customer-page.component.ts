import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuItem, MegaMenuItem } from 'primeng/api';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ViewDetalhesProdutoComponent } from '../../components/modalDetalhes/detalhesProduto/view-detalhes-produto/view-detalhes-produto.component';
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
  providers: [DialogService],
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

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

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
    this.listaProdutos = [
      {
        code: 'f23450gas',
        name: 'Curse of Strahd',
        image: 'strahd.png',
        price: '$35.00',
        category: 'Game Book',
        Reviews: '4.5',
        Status: 'INSTOCK',
      },
      {
        code: 'f23450gds',
        name: 'Eragon',
        image: 'Saphira.png',
        price: '$25.00',
        category: 'Game Book',
        Reviews: '4.6',
        Status: 'INSTOCK',
      },
      {
        code: 'f23450ghs',
        name: 'Brisingr',
        image: 'Brisingr.png',
        price: '$23.00',
        category: 'Book',
        Reviews: '4.3',
        Status: 'INSTOCK',
      },
    ];
  }
  setActiveView(view: ViewKey) {
    this.currentView = view;
  }
  show() {
    this.ref = this.dialogService.open(ViewDetalhesProdutoComponent, {
      header: 'Visualizar informações do produto',
      width: '680px',

      modal: true,
      closable: true,
      dismissableMask: true,
      closeOnEscape: true,

      contentStyle: {
        overflow: 'auto',
      },
    });
  }
}
