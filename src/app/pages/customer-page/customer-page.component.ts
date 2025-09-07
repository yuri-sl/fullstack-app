import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuItem, MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-customer-page',
  imports: [SideBarComponent, CommonModule, MenubarModule, MegaMenuModule],
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.scss',
})
export class CustomerPageComponent {
  listaProdutos: any[] = [];
  optionSelected: any;
  menuItemsList: MegaMenuItem[] | undefined;
  ngOnInit() {
    this.menuItemsList = [
      {
        label: 'Produtos no sistema',
        items: [
          [
            {
              label: 'Eletrônicos',
              items: [{ label: 'celular' }],
            },
          ],
        ],
      },
    ];
  }
}
