import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestCreate, ResponseCreate, UsuarioService } from '../usuarios';
import { Router } from '@angular/router';
import { Photo } from 'pexels';

@Component({
  selector: 'app-create',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  usuario: RequestCreate = {
    name: "",
    job: ""
  }
  photo: Photo;

  response: ResponseCreate;

  erro: boolean = false;

  @ViewChild("userForm", { static: true }) userForm: NgForm;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    ){}

  async ngOnInit(): Promise<void> {
    document.getElementById("form2").classList.add("off");
    try {
      this.photo = await this.usuarioService.getRandomPhoto().toPromise();
      console.log("API PEXEL ENCONTROU UMA IMAGEM!")
    } catch (error) { 
      this.erro = true;
      console.log("API PEXEL NÃO ENCONTROU NENHUMA IMAGEM SERÁ USADA UMA IMAGEM PADRÃO!");
    }
  }

  save(): void{
    if(this.userForm.form.valid){
      document.getElementById("formulario").classList.add("off");
      document.getElementById("form2").classList.remove("off");

      this.usuarioService.postUsers(this.usuario).subscribe({
        next: response => this.response = response
      });
      // this.router.navigate(["/users"]);
    }
  }

  redefineCampos(): void{
    location.replace("/users/create");
  }

}
