import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitsnut',
  templateUrl: './fruitsnut.component.html',
  styleUrls: ['./fruitsnut.component.scss']
})
export class FruitsnutComponent {
  
  msg:any;


  onekg(){
   
    this.msg=1400;
  }

  eggless(){
    this.msg= this.msg + 300;
  }



oneandhalfkg(){
   
  this.msg=1900;
}




twokg(){
   
  this.msg=2800;
}

threekg(){
   
  this.msg=4200;
}


fourkg(){
   
  this.msg=5600;
}


fivekg(){
   
  this.msg=7000;
}

sixkg(){
   
  this.msg=8400;
}



}
