import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cakebook',
  templateUrl: './cakebook.component.html',
  styleUrls: ['./cakebook.component.scss']
})
export class CakebookComponent {

constructor(private httpClient : HttpClient, private router : Router){}
cakename: any;
kgs: any;
egg: any;
cakemsg: any;
deliverydate: any;
mobile: any;



validateUserData() {
  if(this.cakename != '' && this.kgs != '' && this.egg != '' 
    && this.cakemsg != '' && this.deliverydate != '' 
    && this.mobile!=''  ){
      return true;
     }
    else{
      alert("Sumbit all the informarion..");
    }
  return false;
}


ordercake() {
  if (this.validateUserData()) {

    //step1 getdata
    //step2 create obj
    let cakeorder = {
      cakename: this.cakename,
      kgs:this.kgs,
      egg: this.egg,
      cakemsg: this.cakemsg,
      deliverydate:this.deliverydate,
      mobile:this.mobile

     
    }
    //step3 send to api as postcall
    //needed httpmethod called POST, -> HttpClient obj -> HttpClientModule
    this.httpClient.post("https://retoolapi.dev/U0ghgQ/cakeorderApi",cakeorder).subscribe(
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


  this.cakename="";
  this.kgs="";
  this.egg="";
  this.cakemsg="";
  this
}

}
