import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyGroup } from 'src/model/myGroup';
import { MyStudent } from 'src/model/myStudent';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  contactId:string='';

  contact:MyStudent={}//MyContact type assign chayudu
  groups:MyGroup[]=[]//particular group complete details edukkanam,MyGroup[] ennad array aan ,adileek varunnad array aayitt assign chayyunnu


  constructor(private activatedRoute:ActivatedRoute ,private api:ApiService ,private route:Router){}
  ngOnInit(): void {


    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.Id);//id -   Id =1 id maatram varaan data.Id varumm
      // this.contactId=data.contactId;
      // id corresponding details aan update contact ll varandeed
        this.contactId=data.Id

        //call api for getting particular contact details api view contant  evideek edukka


        this.api.viewContact(this.contactId).subscribe((data:any)=>
        {
          console.log(data);//particular contact details
          this.contact=data;

          //call a api for getting all group details
          this.api.getAllGroups().subscribe((data:any)=>{
            console.log(data);// array of data varunnu console groupnde
            this.groups=data;
            
          })

        })

    })

    
  }


  updateContact(){

    this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
     
      alert('Updated successfully')
      this.route.navigateByUrl('')
      
    })

  }

}
