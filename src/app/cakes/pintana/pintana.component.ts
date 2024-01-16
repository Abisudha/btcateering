import { Component } from '@angular/core';

@Component({
  selector: 'app-pintana',
  templateUrl: './pintana.component.html',
  styleUrls: ['./pintana.component.scss']
})
export class PintanaComponent {

  
  msg:any;


  onekg(){
   
    this.msg=1800;
  }

  eggless(){
    this.msg= this.msg + 300;
  }



oneandhalfkg(){
   
  this.msg=2300;
}




twokg(){
   
  this.msg=3600;
}

threekg(){
   
  this.msg=5400;
}


fourkg(){
   
  this.msg=7200;
}


fivekg(){
   
  this.msg=9000;
}

sixkg(){
   
  this.msg=10800;
}



}
