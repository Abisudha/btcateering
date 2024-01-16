import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffregister',
  templateUrl: './staffregister.component.html',
  styleUrls: ['./staffregister.component.scss']
})
export class StaffregisterComponent {

  constructor(private httpClient : HttpClient, private router : Router){} 
name: any;
staffid: any;
age: any;
gender: any;
mobile: any;
aadharno: any;
address: any;


validateData() {
  if(this.name != '' && this.staffid != '' && this.age!= '' 
    && this.gender != '' && this.mobile != '' 
    && this.aadharno!='' && this.address!='' ){
      return true;
     }
    else{
      alert("Submit all the data...");
    }
  return false;
}
submitdata() {
  if (this.validateData()) {

    //step1 getdata
    //step2 create obj
    let staffregister = {

name:this.name,
staffid: this.staffid,
age: this.age,
gender: this.gender,
mobile: this.mobile,
aadharno:this.aadharno,
address: this.address
    
     
    }
    //step3 send to api as postcall
    //needed httpmethod called POST, -> HttpClient obj -> HttpClientModule
    this.httpClient.post("https://retoolapi.dev/78g58z/staffRegister",staffregister).subscribe(
      () => {
       alert("staff data send successfully...");
        setTimeout(()=>{
          // this.router.navigate(['']);
        }, 3000);
      },
      error => {
        alert("Encounterd a problem. Unable to create a user at this moment... Mannichooo... Plz try try again.");
      }
    );
  }
}

cleardata(){

  this.name="";
  this.staffid="";
  this.age="";
  this.gender="";
  this.mobile="";
  this.aadharno="";
  this.address="";

  
}



}
