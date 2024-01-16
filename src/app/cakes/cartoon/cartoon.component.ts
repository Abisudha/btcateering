import { Component } from '@angular/core';

@Component({
  selector: 'app-cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.scss']
})
export class CartoonComponent {

  
  msg:any;


  onekg(){
   
    this.msg=1600;
  }

  eggless(){
    this.msg= this.msg + 300;
  }



oneandhalfkg(){
   
  this.msg=2100;
}




twokg(){
   
  this.msg=3200;
}

threekg(){
   
  this.msg=3000;
}


fourkg(){
   
  this.msg=6400;
}


fivekg(){
   
  this.msg=8000;
}

sixkg(){
   
  this.msg=9600;
}



}
