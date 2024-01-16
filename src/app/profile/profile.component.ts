import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  username:string="";
  mobilenumber:string="";
  url:string="https://retoolapi.dev/1lwdZj/registerApi";

  constructor(private httpClient: HttpClient){
    
  }

  ngOnInit(): void {
    this.showProfile();
  }
    showProfile(){
      let username = sessionStorage.getItem('username');
      let apiUrl = this.url + "?mobilenumber=" + username;
      this.httpClient.get(apiUrl).subscribe(
        (data: any) => {
          if(data.length > 0){
            this.username = data[0].username;
            sessionStorage.setItem('username', this.username);
          } 
        },
        error => {}
      );

}
}
  

// showProfile(){
//   let userMobile = sessionStorage.getItem('userMobile');
//   let apiUrl = this.url + "?mobilenumber=" + userMobile;
//   this.httpClient.get(apiUrl).subscribe(
//     (data: any) => {
//       if(data.length > 0){
//         this.username = data[0].username;
//         this.mobilenumber = data[0].mobilenumber;
//         sessionStorage.setItem('username', this.username);
//       } 
//     },
//     error => {}
//   );
