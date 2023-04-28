import { Component, OnInit, ViewChild } from '@angular/core';
import { User, RequestUpdate, UsuarioService } from '../usuarios';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  
  id: string;
  usuario: RequestUpdate;

  pegaId: number = Math.floor(Math.random() * 1000);
  data: Date;
  foto: any;

  telaSucess: boolean = false;

  @ViewChild("userForm", { static: true }) userForm: NgForm;


  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute){this.data = new Date();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.foto = `https://reqres.in/img/faces/${this.id}-image.jpg`;

    this.usuarioService.getOne(this.id).subscribe(res => {
      this.usuario = {
        name: `${res.data.first_name } ${res.data.last_name}`,
        job: ""
      }
    });
  }

  edit(): void{
    if(this.userForm.form.valid){
      this.telaSucess = true
      document.getElementById("formulario").classList.add("off");

      this.usuarioService.putUser(this.id, this.usuario).subscribe(res =>{
        this.usuario = res;
      });
    }
  }

  telaSuccess():void{
    this.telaSucess = false;
  }

}
