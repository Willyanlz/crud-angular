import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { UsuariosComponent } from './usuarios';
import { UsuarioService } from './usuarios/services';
import { CreateUserComponent } from './create';
import { DataBrPipe } from './usuarios/pipes';
import { UpdateUserComponent } from './update';
import { DeleteUserComponent } from './delete';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CreateUserComponent,
    DataBrPipe,
    UpdateUserComponent,
    DeleteUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [UsuarioService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
