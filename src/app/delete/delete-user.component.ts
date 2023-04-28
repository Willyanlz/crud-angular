import { Component, OnInit, ViewChild } from '@angular/core';
import { User, UsuarioService } from '../usuarios';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appdelete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: string;
  usuario: User;

  telaSucess: boolean = false;

  @ViewChild("userForm", { static: true }) userForm: NgForm;
  
  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    this.usuarioService.getOne(this.id).subscribe(res => {
      this.usuario = res.data;
    });
  }

  deleteUser(): void{
    this.telaSucess = true
    document.getElementById("formulario").classList.add("off");

    this.usuarioService.deleteUser(this.id).subscribe(res => {

    })
  }
}
