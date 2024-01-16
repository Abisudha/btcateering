import { Component } from '@angular/core';

@Component({
  selector: 'app-barbie',
  templateUrl: './barbie.component.html',
  styleUrls: ['./barbie.component.scss']
})
export class BarbieComponent {

  
  msg:any;


  onekg(){
   
    this.msg=1500;
  }

  eggless(){
    this.msg= this.msg + 300;
  }



oneandhalfkg(){
   
  this.msg=2000;
}




twokg(){
   
  this.msg=3000;
}

threekg(){
   
  this.msg=4000;
}


fourkg(){
   
  this.msg=5000;
}


fivekg(){
   
  this.msg=6000;
}

sixkg(){
   
  this.msg=7000;
}



}
