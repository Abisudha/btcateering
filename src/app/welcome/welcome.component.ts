import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  adminheader:boolean=false;
  userheader:boolean=false;
  // sessionStore: any = sessionStorage;

  ngOnInit():void{
    let usertype=sessionStorage.getItem('user')|| '';
    if(usertype=='admin'){
      this.adminheader=true;
    }
    else if(usertype=='user'){

      this.userheader=true;

    }


    }

  }


