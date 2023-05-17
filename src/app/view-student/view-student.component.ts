import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  contactId:string=''

  //html page string interpolation chaydu displa chayyunnu variable declare chayyunnu.
  contact:any;
  
  ///html page string interpolation chaydu displa chayyunnu variable declare chayyunnu group id value maatram kittan
  groupId:any;
  
  groupName:any;

  

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}

  ngOnInit(): void {


 
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.contactId=data.contactId;//1


      this.api.viewContact(this.contactId).subscribe((data:any)=>{
        console.log(data);//contactid with complete ata of particular contact nde data maatram kittum.
        
        //contact ne refer chayya
        this.contact=data;  //now html page complete ata of particular contact nde data maatram kittum,after this html page <pre>{{contact |json}} </pre> tag koduthu
        
        //view api call chayda same time group name display chayyanulla api call chayyanam
        //api call after data assigned to groupId
        this.groupId=data.groupId;//2  group id value  maaatram kiitaan

        //view groupname
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          this.groupName=data.name;//name maatram kittaan
          console.log( this.groupName);//console kaanaan
          
        })
       


      })




    })





   
  }

}
