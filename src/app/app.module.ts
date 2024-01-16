import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './landingpage/header/header.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ServiceComponent } from './service/service.component';
import {MatButtonModule} from '@angular/material/button';
import { BreakfastComponent } from './menu/breakfast/breakfast.component';
import { LunchComponent } from './menu/lunch/lunch.component';
import { DinnerComponent } from './menu/dinner/dinner.component';
import { NonvegComponent } from './menu/nonveg/nonveg.component';
import { CakesComponent } from './menu/cakes/cakes.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { Component, OnInit } from '@angular/core';
import { CakeComponent } from './cakes/cake/cake.component';
import { WeddingComponent } from './service/wedding/wedding.component';
import { EngagementComponent } from './service/engagement/engagement.component';
import { PubertyComponent } from './service/puberty/puberty.component';
import { BabyshowerComponent } from './service/babyshower/babyshower.component';
import { BirthdayComponent } from './service/birthday/birthday.component';
import { HousewarmingComponent } from './service/housewarming/housewarming.component';
import { CorporateComponent } from './service/corporate/corporate.component';
import { IndustrialComponent } from './service/industrial/industrial.component';
import { LogoutComponent } from './landingpage/logout/logout.component';
import { CakebookComponent } from './cakes/cakebook/cakebook.component';
import { CakeviewComponent } from './cakes/cakeview/cakeview.component';
import { ButterscaramleComponent } from './cakes/butterscaramle/butterscaramle.component';
import { RedvelvetComponent } from './cakes/redvelvet/redvelvet.component';
import { ChocolateComponent } from './cakes/chocolate/chocolate.component';
import { AnniversaryComponent } from './cakes/anniversary/anniversary.component';
import { BlackforestComponent } from './cakes/blackforest/blackforest.component';
import { FruitsnutComponent } from './cakes/fruitsnut/fruitsnut.component';
import { BarbieComponent } from './cakes/barbie/barbie.component';
import { CartoonComponent } from './cakes/cartoon/cartoon.component';
import { PintanaComponent } from './cakes/pintana/pintana.component';
import { NumberComponent } from './cakes/number/number.component';
import { AdminComponent } from './adminfolder/admin/admin.component';
import { CustomercontactComponent } from './adminfolder/customercontact/customercontact.component';
import { AdminheaderComponent } from './adminfolder/adminheader/adminheader.component';
import { StockdetailsComponent } from './adminfolder/stockdetails/stockdetails.component';
import { StaffregisterComponent } from './adminfolder/staffregister/staffregister.component';
import { AdminhomeComponent } from './adminfolder/adminhome/adminhome.component';
import { CakeorderComponent } from './adminfolder/cakeorder/cakeorder.component';
import {MatExpansionModule} from '@angular/material/expansion';



















@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    MenuComponent,
    OrderComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ServiceComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    NonvegComponent,
    CakesComponent,
    CakeComponent,
    WeddingComponent,
    EngagementComponent,
    PubertyComponent,
    BabyshowerComponent,
    BirthdayComponent,
    HousewarmingComponent,
    CorporateComponent,
    IndustrialComponent,
    LogoutComponent,
    CakebookComponent,
    CakeviewComponent,
    ButterscaramleComponent,
    RedvelvetComponent,
    ChocolateComponent,
    AnniversaryComponent,
    BlackforestComponent,
    FruitsnutComponent,
    BarbieComponent,
    CartoonComponent,
    PintanaComponent,
    NumberComponent,
    AdminComponent,
    CustomercontactComponent,
    AdminheaderComponent,
    StockdetailsComponent,
    StaffregisterComponent,
    AdminhomeComponent,
    CakeorderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatExpansionModule
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
