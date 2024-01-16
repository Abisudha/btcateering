import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:any;
  password:any;
  msg : any;
  usertype: any;
  // url:string="https://retoolapi.dev/Vu29oV/Registeruser";
  // constructor(private http: HttpClient, private router: Router){}

  constructor(private apiService: ApiService, private router: Router){}

  resetdata(){

    this.username="";
    this.password="";
    this.usertype="";

  }
  validateLogin(){

//     this.msg = '';
//     if(this.username != '' && this.password != '' && this.usertype!=""){
//       let appliedFilters = [];
//       appliedFilters.push("username=" + this.username);
//       appliedFilters.push("password=" + this.password);
//       // let apiUrl = this.url + "?username=" + this.username + "&password=" + this.password;
//       // this.http.get(apiUrl).subscribe(
//         this.apiService.getApiDataByfilter(ApiUrls.userApi, appliedFilters).subscribe(
//         (data : any)=> {
//           console.log(data);
//           if(data.length > 0 && data[0].username == this.username && data[0].password == this.password){
//             sessionStorage.setItem('userMobile', data[0].mobilenumber);
//             this.router.navigate(['/home']);
//           }else{
//             alert("Invalid UserName or Password...");
//           }
//         },
//         error => {}
//       );
//     }else{
//       this.msg = "Username or Password is missing..."
//     }
//   }

// }
 

if (this.username !== '' && this.password !== '' && this.usertype !== '') {
  let dataa = "username=" + this.username + "&password=" + this.password + "&userType=" + this.usertype;
  this.apiService.getdata(dataa).subscribe(
    (data: any) => {
      if (data.length > 0) {
        if (data[0].username === this.username && data[0].password === this.password) {
          sessionStorage.setItem("user", data[0].usertype);
          if (data[0].usertype === 'user') {
            if(this.usertype=='user'){
              this.router.navigate(['/home']);
            }else{
              alert("Select User Type")
            }
          } else if (data[0].usertype === 'admin'){
            if(this.usertype=='admin'){
              this.router.navigate(['/adminhome']);
            }else{
              alert("Select Admin Option..")
            }
          } else {
            alert("Invalid UserType");
          }
        } else {
          alert("Invalid Username or Password");
        }
      } else {
        alert("User not found");
      }
    
    },
    
    error => {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  );
} else {
  alert("Please fill in all fields");
}
}
}