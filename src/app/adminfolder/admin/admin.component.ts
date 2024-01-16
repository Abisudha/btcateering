import { Component, Input } from '@angular/core';
import { ApiUrls } from 'src/app/common/apiUrls';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

constructor(private router: Router,private apiservice:ApiService){}
public orders: any =[];

  
ngOnInit(): void {
   this.apiservice.getApiData(ApiUrls.orderApi).subscribe((datas: any)=>
   {
    this.orders=datas;
    console.log(datas);
    
   })
}
}