import { Component } from '@angular/core';

@Component({
  selector: 'app-blackforest',
  templateUrl: './blackforest.component.html',
  styleUrls: ['./blackforest.component.scss']
})
export class BlackforestComponent {

  
  msg:any;


  onekg(){
   
    this.msg=1000;
  }

  eggless(){
    this.msg= this.msg + 300;
  }



oneandhalfkg(){
   
  this.msg=1500;
}




twokg(){
   
  this.msg=2000;
}

threekg(){
   
  this.msg=3000;
}


fourkg(){
   
  this.msg=4000;
}


fivekg(){
   
  this.msg=5000;
}

sixkg(){
   
  this.msg=6000;
}



}
