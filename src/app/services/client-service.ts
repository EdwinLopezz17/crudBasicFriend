import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _httClient:HttpClient) { }

  addClient(data:any){
    //post Agrega
    return this._httClient.post('http://localhost:3000/users',data);
  }


}
