import { Component, OnDestroy } from '@angular/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-view-detalhes-produto',
  imports: [
    DynamicDialogModule,
    InputTextModule,
    ButtonModule,
    TextareaModule,
    AutoCompleteModule,
  ],
  templateUrl: './view-detalhes-produto.component.html',
  styleUrl: './view-detalhes-produto.component.scss',
  providers: [DialogService],
})
export class ViewDetalhesProdutoComponent implements OnDestroy {
  ref: DynamicDialogRef | undefined;
  statusDropdown: any[] = [];

  constructor(public dialogService: DialogService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.statusDropdown = [
      {
        label: 'Em estoque',
      },
      {
        label: 'Fora de estoque',
      },
    ];
  }
}
