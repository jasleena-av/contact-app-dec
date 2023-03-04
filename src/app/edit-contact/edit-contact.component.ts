import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/mycontacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactId:string=''
  contact:MyContact={}
  allGroups:any=[]
  constructor(private editContactRoute:ActivatedRoute,private api:ApiService,private editContactRouter:Router){

  }
  ngOnInit(): void {
    this.editContactRoute.params
    .subscribe((data:any)=>{
      this.contactId=data.id
      console.log(this.contactId);

      
      
    })
    // to get details of particular contact
    this.api.viewContact(this.contactId)
    .subscribe((result:any)=>{
      this.contact=result
      console.log(this.contact);
      

    })
    // to get all groups from api
    this.api.allGroups()
    .subscribe((groups:any)=>{
      console.log(groups);
      this.allGroups=groups
      

    })
  }
  // editContact(contact)
       editContact(contact:MyContact){
      this.api.updateContact(this.contactId,contact)
      .subscribe((result:any)=>{
        alert('Existing contact details are updated')
        // redirected to all contact page
        this.editContactRouter.navigateByUrl('')
      })
     }

  

}

