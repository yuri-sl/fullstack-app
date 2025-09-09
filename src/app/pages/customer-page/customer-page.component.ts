import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuItem, MegaMenuItem } from 'primeng/api';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

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
export class CustomerPageComponent {
  listaProdutos: any[] = [];
  optionSelected: any;
  menuItemsList: MegaMenuItem[] | undefined;
  listaClientes: any[] = [];
  listaFuncionarios: any[] = [];

  enableListaClientes: boolean = false;
  enableListaFuncionarios: boolean = false;

  ngOnInit() {
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
      },
      {
        label: 'Produtos',
      },
      {
        label: 'Agendamentos',
      },
      {
        label: 'Clientes',
      },
      {
        label: 'Funcionários',
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
  }
}
