import { Component, Input } from '@angular/core';
import { ApiUrls } from 'src/app/common/apiUrls';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cakeorder',
  templateUrl: './cakeorder.component.html',
  styleUrls: ['./cakeorder.component.scss']
})
export class CakeorderComponent {




  constructor(private router: Router,private apiservice:ApiService){}
  public cakeorders: any =[];
  
    
  ngOnInit(): void {
     this.apiservice.getApiData(ApiUrls.cakeorderApi).subscribe((datas: any)=>
     {
      this.cakeorders=datas;
      console.log(datas);
      
     })
  }

}
