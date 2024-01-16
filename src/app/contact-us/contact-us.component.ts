import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {


  constructor(private httpClient: HttpClient, private router: Router) { }
  name: any;
  mobile: any;
  email: any;
  querry: any;

  validatedata() {

    if (this.name != "" && this.mobile != "" && this.email != "" && this.querry != "")
      return true;
    else {
      alert("Give all the information");
    }
    return false;

  }

  submitdata() {

    if (this.validatedata()) {

      let contact = {

        name: this.name,
        mobile: this.mobile,
        email: this.email,
        querry: this.querry
      }

      this.httpClient.post("https://retoolapi.dev/vmGxKH/contactApi", contact).subscribe(
        () => {
          alert("Your contact details successfully send");
          setTimeout(() => {
            // this.router.navigate(['']);
          }, 3000);
        },
        error => {
          alert("Encounterd a problem. Unable to create a user at this moment... Mannichooo... Plz try try again.");
        }
      );
    }
  }




cleardata(){

  this.name = "";
  this.mobile = "";
  this.email = "";
  this.querry = "";
}



}
