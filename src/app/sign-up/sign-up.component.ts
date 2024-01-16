import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  //loose Coupling - Dependency Injection
  constructor(private httpClient : HttpClient, private router : Router){}


  username: any;
  mobilenumber: any;
  password : any;
  confirmpassword : any;
  usertype: any;

  validateuserdata(){
    if(this.username!="" && this.mobilenumber!="" && this.password!="" && this.confirmpassword!="" 
    && this.password==this.confirmpassword ){
    return true;
    }
    else{
      alert("Need all data and Password and Confirm Password should be same");
    }
    return false;


  }

  registeruser(){
    if(this.validateuserdata()){
    // create object
    let user={

      usertype:this.usertype,
      username:this.username,
      mobilenumber:this.mobilenumber,
      password:this.password,
      confirmpassword:this.confirmpassword
    }
    //step3 send to api as postcall
      //needed httpmethod called POST, -> HttpClient obj -> HttpClientModule
      this.httpClient.post("https://retoolapi.dev/1lwdZj/registerApi",user).subscribe(
        () => {
          alert("Registered Successfully... Please Login to continue....");
          setTimeout(()=>{
            this.router.navigate(['']);
          }, 3000);
        },
        error => {
          alert("Encounterd a problem. Unable to create a user at this moment... Mannichooo... Plz try try again.");
        }


      );

  }

  }

  resetForm(){

    this.username="";
    this.mobilenumber="";
    this.password="";
    this.confirmpassword="";
    this.usertype="";
  }





}
