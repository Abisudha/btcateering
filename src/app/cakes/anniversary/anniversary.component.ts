import { Component } from '@angular/core';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.scss']
})
export class AnniversaryComponent {

  
  msg:any;


  onekg(){
   
    this.msg=1100;
  }

  eggless(){
    this.msg= this.msg + 300;
  }



oneandhalfkg(){
   
  this.msg=1600;
}




twokg(){
   
  this.msg=2100;
}

threekg(){
   
  this.msg=3100;
}


fourkg(){
   
  this.msg=4100;
}


fivekg(){
   
  this.msg=5100;
}

sixkg(){
   
  this.msg=6100;
}



}
