import { Component } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {

  
  msg:any;


  onekg(){
   
    this.msg=1300;
  }

  eggless(){
    this.msg= this.msg + 300;
  }



oneandhalfkg(){
   
  this.msg=1800;
}




twokg(){
   
  this.msg=2600;
}

threekg(){
   
  this.msg=3900;
}


fourkg(){
   
  this.msg=5200;
}


fivekg(){
   
  this.msg=6500;
}

sixkg(){
   
  this.msg=7800;
}



}
