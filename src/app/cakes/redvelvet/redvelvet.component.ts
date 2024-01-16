import { Component } from '@angular/core';

@Component({
  selector: 'app-redvelvet',
  templateUrl: './redvelvet.component.html',
  styleUrls: ['./redvelvet.component.scss']
})
export class RedvelvetComponent {

  
  msg:any;


  onekg(){
   
    this.msg=1200;
  }

  eggless(){
    this.msg= this.msg + 300;
  }



oneandhalfkg(){
   
  this.msg=1700;
}




twokg(){
   
  this.msg=2400;
}

threekg(){
   
  this.msg=3600;
}


fourkg(){
   
  this.msg=4800;
}


fivekg(){
   
  this.msg=6000;
}

sixkg(){
   
  this.msg=7200;
}



}
