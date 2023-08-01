import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client-service";
import {Client} from "../../models/Client";

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit{

  listClients !: Client[];
  constructor(private _clientServ:ClientService) {
  }
  ngOnInit(): void {

    this._clientServ.getAllClients().subscribe({
      next:(val:any)=>{

        console.log("Helle angular xd")
        this.listClients = val;
        console.log(this.listClients);

      }
    })
  }

  deleteClient(id:number){

    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar este cliente?');
    if(confirmed) {
      this._clientServ.deleteClientById(id).subscribe({
        next: (val: any) => {
          console.log(val);
        }
      })
    }
  }
}
