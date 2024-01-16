import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

constructor(private httpClient : HttpClient, private router : Router){}
value: any;
startDate: any;
checked: any;
indeterminate: any;
name: any;
mobile: any;
email: any;
date: any;
place: any;
catering: any;
guestcount: any;
budget: any;
foodtype: any;
morningmenu:any;
lunchmenu:any;
dinnermenu:any
menu:any={morningmenu:false, lunchmenu:false, dinnermenu: false };

validateUserData() {
  if(this.name != '' && this.mobile != '' && this.email != '' 
    && this.date != '' && this.place != '' 
    && this.catering!='' && this.guestcount!='' && this.budget!='' && this.foodtype!='' && this.menu!=''){
      return true;
     }
    else{
      alert("Need all data and Password and Confirm Password should be same");
    }
  return false;
}

orderregister() {
  if (this.validateUserData()) {

    //step1 getdata
    //step2 create obj
    let order = {
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      date:this.date,
      place:this.place,
      catering:this.catering,
      guestcount:this.guestcount,
      budget:this.budget,
      foodtype:this.foodtype,
      menu:this.menu
     
    }
    //step3 send to api as postcall
    //needed httpmethod called POST, -> HttpClient obj -> HttpClientModule
    this.httpClient.post("https://retoolapi.dev/C3CQjx/order",order).subscribe(
      () => {
       alert("Order send successfully");
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
  this.mobile="";
  this.email="";
  this.date="";
  this.place="";
  this.catering="";
  this.guestcount="";
  this.budget="";
  this.foodtype="";
  this.menu="";
}
}
// export class CheckboxConfigurableExample {

  // menu:any={morningmenu:false, lunchmenu:false, };
  // menu.morningmenu = false;
  // lunch = false;
  // dinner=false;
  // labelPosition: 'before' | 'after' = 'after';
  // disabled = false;
// }
