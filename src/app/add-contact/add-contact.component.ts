import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/models/mycontacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  groups:any=[]
  contact:MyContact ={}

  constructor(private api:ApiService,private addContactRouter:Router){
    this.contact.groupId ="select a group"

  }

  ngOnInit(): void {
    this.api.allGroups()
    .subscribe((result:any)=>{
      console.log(result);
      this.groups=result
      

    }
    )
  }
  // add contact
  addContact(contact:any){
    this.api.addContact(contact)
    .subscribe((data:any)=>{
      alert('new contact added successfully')
      // redirect to all contact page
      this.addContactRouter.navigateByUrl('')
    })

  }

  
  

}
