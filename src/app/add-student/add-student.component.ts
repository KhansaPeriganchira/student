import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyStudent } from 'src/model/myStudent';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
//contact html contactId evide declare /define chayyanyyunnu  adileek value pass chaydaalee console dispaly aaavuu
contactId:any;

//define chaayyunnu edine html ninnu ts leek pass chayyduuu (two way binding)

contactName:string='';

allGroups:any[]=[]; //declare variable for string interpolation in html page

//MyContact modal class name -> object aan   kure datads pass chayyaanundd contact laayirikkum ella kaaryangalum varuga

contact:MyStudent={};

//ApiService ne dependency injection evide chayduu  api service aaraanennu parannu koduthu
  constructor(private api:ApiService ,private route:Router){

  }

  ngOnInit(): void {

    
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);//array(3)
      this.allGroups=data;//refer chayyunnu data pass chayuunuu

    })
    
  }


  addContact(){
    this.api.addContact(this.contact).subscribe((data:any)=>{

      //router class inside method aan navigate by  url vachaan  adu kittanannan => this.route.navigateByUrl('') 
      
      
    alert('added successfully')
    //eni create btn click chayyumbboo
      this.route.navigateByUrl('') //  '' quotes indicate chayyundda   oru page next page poovaan redirect chayyan =render to admin page
    })
   }

}
