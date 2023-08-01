import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl:string="http://localhost:3000/users"
  constructor(private _httClient:HttpClient) { }

  addClient(data:any){
    //post Agrega
    return this._httClient.post( this.baseUrl, data);
  }
  getAllClients(){
    return this._httClient.get(this.baseUrl);
  }
  deleteClientById(id:number){

    const url = `${this.baseUrl}/${id}`;

    return this._httClient.delete(url);

  }


}
