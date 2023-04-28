import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services';
import { ResponseUsers } from './models';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: [
    './usuarios.component.css'
  ]
})
export class UsuariosComponent implements OnInit{
  
  responseUsers: ResponseUsers;

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void{
    this.usuarioService.getUsers()
    .subscribe( res => this.responseUsers = res);
  }
}
