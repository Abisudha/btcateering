import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiUrls } from 'src/app/common/apiUrls';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-customercontact',
  templateUrl: './customercontact.component.html',
  styleUrls: ['./customercontact.component.scss']
})
export class CustomercontactComponent {

constructor(private router: Router,private apiservice:ApiService){}
public contact: any =[];

  
ngOnInit(): void {
   this.apiservice.getApiData(ApiUrls.contactApi).subscribe((datas: any)=>
   {
    this.contact=datas;
    console.log(datas);
    
   })
}

}
