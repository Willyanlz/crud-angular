import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CreateUserComponent } from './create';
import { UpdateUserComponent } from './update';
import { DeleteUserComponent } from './delete';

export const routes: Routes = [
  {path: "", redirectTo: "", pathMatch: "full"},
  {path: "users", component: UsuariosComponent},
  {path: "users/create", component: CreateUserComponent},
  {path: "users/update/:id", component: UpdateUserComponent},
  {path: "users/delete/:id", component: DeleteUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
