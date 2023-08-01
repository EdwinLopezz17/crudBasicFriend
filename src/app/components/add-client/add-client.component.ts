import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../services/client-service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})



export class AddClientComponent implements OnInit{

  gendersOptions: string[]=['','Male', 'Female', 'Other']

  formAddClient :FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _clientServ:ClientService,)
  {
    this.formAddClient = this._formBuilder.group({
      dni:['',Validators.required],
      name:['',Validators.required],
      lastName:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required],
      civilStatus:['',Validators.required],
    })

  }

  ngOnInit(): void {

  }


  addClient(){

    if(this.formAddClient.valid){

      console.log(this.formAddClient.value)
      this._clientServ.addClient(this.formAddClient.value).subscribe({
        next:(val:any)=>{
          alert("Client added successfuly");
        }
      })
      return;
    }
    alert("Completa todos los campos")
  }



}
