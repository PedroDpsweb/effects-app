import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.getUser()
    .subscribe(users => {
      console.log(users);
      this.usuarios = users;
    })
  }

}
