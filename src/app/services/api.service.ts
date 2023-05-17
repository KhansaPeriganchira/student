import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyStudent } from 'src/model/myStudent';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'http://localhost:3000/students'

  //function - get all contacts
  getAllContacts():Observable<MyStudent>{
   return this.http.get(this.baseUrl)

  }

  deleteContact(contactId:any)
  {

    return this.http.delete(`${this.baseUrl}/${contactId}`)
  }


 
  addContact(contactBody:any){

    return this.http.post(this.baseUrl,contactBody)
    
  }

  getAllGroups(){

    return this.http.get('http://localhost:3000/group/')//fetch chayyanulla code
  }
  
  viewContact(contactId:any){

    //http://localhost:3000/contacts/1    (url of id :1 person data details)
    
    //above path ninnum data return chaydu kittanam 
    
    // get varanamenggill this.http kodukkanam  inject chaydittundd, / kayinnu  varunna value
    
      return this.http.get(`${this.baseUrl}/${contactId}`)
    
    } 


    
getGroupName(groupId:any)  //function create chaydu ,parameter aayiyyu groupid:with type given
{
  return this.http.get('http://localhost:3000/group/'+groupId)
}


 //function for updating an existing contact fully update chayyunnu so put is used,partially update aaneggill  patch used
 updateContact(contactId:any,contactBody:any)
 {
  
   return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
   
 }


}
