import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // to hold all contacts data from api
  allContacts:any=[]
  loginDetails:any
  searchkey:string=''

  constructor(private api:ApiService){
    this.loginDetails =new Date()
  }
  

  ngOnInit(): void {
    this.getAllContact()
    
  }

  // to get all contacts
  getAllContact(){
    // api call to get all data
    this.api.allContacts()
    .subscribe((result:any)=>{
      // result is all contacts array from api
      console.log(result);
      this.allContacts = result
      
    }
    )
  }

  // delete contact
  deleteContact(contactId:any){
    this.api.deleteContact(contactId)
    .subscribe((data:any)=>{
      this.getAllContact()

    })
  }



}
