import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService, Usuario } from '../../usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DataviewProdutosComponent } from '../../components/dataview-produtos/dataview-produtos.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-minha-pagina',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    DataViewModule,
    DataviewProdutosComponent,
    SideBarComponent,
  ],
  templateUrl: './minha-pagina.component.html',
  styleUrls: ['./minha-pagina.component.scss'],
})
export class MinhaPaginaComponent implements OnInit {
  usuarioForm: FormGroup;
  usuarioEditForm: FormGroup;
  editando = false;
  usuarioIdEditando: number | null = null;
  visible: boolean = false;
  showControlUsers: boolean = false;

  constructor(private fb: FormBuilder, private usuarioSerice: UsuarioService) {
    this.usuarioForm = this.fb.group({
      name: [''],
      age: [''],
    });
    this.usuarioEditForm = this.fb.group({
      id: [''],
      name: [''],
      age: [''],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  enviarUsuario() {
    const dados = this.usuarioForm.value;
    console.log('Usuário cadastrado: ', dados);
    this.usuarioSerice.cadastrar(dados).subscribe({
      next: (res) => console.log('Usuário cadastrado com sucesso!', res),
      error: (err) => console.error('Erro ao cadastrar usuário', err),
    });
  }
  alterarUsuario() {
    const id = this.usuarioEditForm.value.id;
    const usuarioEditado: Usuario = {
      name: this.usuarioEditForm.value.name,
      age: this.usuarioEditForm.value.age,
    };
    this.usuarioSerice.edit(id, usuarioEditado).subscribe({
      next: (res) => {
        console.log('Usuário editado com sucesso', res);
        this.usuarioEditForm.reset();
      },
      error: (err) => {
        console.error('Erro aconteceu: ', err);
      },
    });
  }
  showDialogue() {
    if (this.visible) {
      this.visible = false;
    } else {
      this.visible = true;
    }
  }
  alternateVisibility() {
    if (this.showControlUsers) {
      this.showControlUsers = false;
    } else {
      this.showControlUsers = true;
    }
  }
}
