import { Injectable } from '@angular/core';
import { RequestCreate, RequestUpdate, ResponseCreate, ResponseOne, ResponseUpdate, ResponseUsers, User, ErrorResponse} from '../models';

import { Observable, catchError, from, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Photo, createClient } from 'pexels';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "https://reqres.in/api/users"
  photo: Photo;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }

  postUsers(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);
  }

  getOne(id: string): Observable<ResponseOne> {
    const _url = `${this.url}/${id}`;

    return this.http.get<ResponseOne>(_url);
  }

  putUser(id: string, request: RequestUpdate): Observable<ResponseUpdate>{
    const _url = `${this.url}/${id}`;

    return this.http.put<ResponseUpdate>(_url, request)
  }

  deleteUser(id: string): Observable<any>{
    const _url = `${this.url}/${id}`;

    return this.http.delete<any>(_url)
  }


  getRandomPhoto(): Observable<Photo> {
    const client = createClient('EIbTfC88U3umvv2XVNOtGC5wnZ9CqCNqCt1VYGvuFKO1AoWUW2Lvb9JN');
  
    const randomId = Math.floor(Math.random() * 1000000);
  
    return from(client.photos.show({ id: randomId })).pipe(
      map(response => {
        if ('id' in response) {
          return response as Photo;
        } else {
          throw response;
        }
      }),
      catchError(error => {
        
        return throwError(error);
      })
    );
  }

  pegaFoto(id: string): Observable<User>{
    let url = `https://reqres.in/img/faces/${id}-image.jpg`
    return this.http.get<User>(url);
  }
  

}
