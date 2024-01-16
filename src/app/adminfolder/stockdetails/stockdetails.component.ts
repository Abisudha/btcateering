import { Component, Input } from '@angular/core';
import { ApiUrls } from 'src/app/common/apiUrls';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-stockdetails',
  templateUrl: './stockdetails.component.html',
  styleUrls: ['./stockdetails.component.scss']
})
export class StockdetailsComponent implements OnInit {
qty: any;

  constructor(private httpClient : HttpClient, private router : Router, private apiservice:ApiService){}

  // get method......................

  public addproducts: any =[];

  
    
  ngOnInit(): void {
     this.apiservice.getApiData(ApiUrls.addproductApi).subscribe((datas: any)=>
     {
      this.addproducts=datas;
      console.log(datas);
      
     })
  }

  // get method..........................................



pid: any;
productname: any;
price: any;
stock:any;



 

validatedata() {
  if(this.pid != '' && this.productname != '' && this.price != ''){
      return true;
     }
    else{
      alert("Enter all data");
    }
  return false;
}

Productadd() {
  if (this.validatedata()) {

    //step1 getdata
    //step2 create obj
    let addproduct = {
      pid: this.pid,
      productname: this.productname,
      price: this.price,
     
     
    }
    //step3 send to api as postcall
    //needed httpmethod called POST, -> HttpClient obj -> HttpClientModule
    this.httpClient.post("https://retoolapi.dev/v7BOZS/addproducts",addproduct).subscribe(
      () => {
       alert("Product add successfully");
        // setTimeout(()=>{
        //   // this.router.navigate(['']);
        // }, 3000);
      },
      error => {
        alert("Encounterd a problem. Unable to create a user at this moment... Mannichooo... Plz try try again.");
      }
    );
  }
}

cleardata(){
  this.pid="";
  this.productname="";
  this.price="";



  inwarditem(){
    this.qty=stock;



  }
}











// productname: any;
// count: any;
// pprice:any;
// pid: any;
// ptotal:any;
// stock:any;

// viewid(){

//   if(this.productname=='Rice'){
//   this.pid=1;
//   this.pprice=100;
 
// }
// if(this.productname=='oil'){
//   this.pid=2;
//   this.pprice=150;

// }

// if(this.productname=='Tomato'){
//   this.pid=3;
//   this.pprice=150;

// }

// if(this.productname=='Potato'){
//   this.pid=4;
//   this.pprice=80;

// }

// if(this.productname=='Turmeric'){
//   this.pid=5;
//   this.pprice=30;

// }

// if(this.productname=='Masala'){
//   this.pid=6;
//   this.pprice=60;

// }

// }

// totalvalue(){
//   this.ptotal=this.pprice*this.count;
 

// }

// inwarditems(){

//   this.stock=this.count;
// }

}

// export class  StockdetailsComponent implements OnInit {

//   constructor(private router: Router,private apiservice:ApiService){}
//   public addproducts: any =[];
  
    
//   ngOnInit(): void {
//      this.apiservice.getApiData(ApiUrls.addproductApi).subscribe((datas: any)=>
//      {
//       this.addproducts=datas;
//       console.log(datas);
      
//      })
//   }
//   }