import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService, Usuario } from '../../usuario.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-minha-pagina',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './minha-pagina.component.html',
  styleUrls: ['./minha-pagina.component.scss'],
})
export class MinhaPaginaComponent implements OnInit {
  usuarioForm: FormGroup;
  usuarioEditForm: FormGroup;
  editando = false;
  usuarioIdEditando: number | null = null;

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
}
