import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrderComponent } from './order/order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './landingpage/header/header.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { BreakfastComponent } from './menu/breakfast/breakfast.component';
import { LunchComponent } from './menu/lunch/lunch.component';
import { DinnerComponent } from './menu/dinner/dinner.component';
import { NonvegComponent } from './menu/nonveg/nonveg.component';
import { CakeComponent } from './cakes/cake/cake.component';
import { WeddingComponent } from './service/wedding/wedding.component';
import { PubertyComponent } from './service/puberty/puberty.component';
import { IndustrialComponent } from './service/industrial/industrial.component';
import { HousewarmingComponent } from './service/housewarming/housewarming.component';
import { EngagementComponent } from './service/engagement/engagement.component';
import { CorporateComponent } from './service/corporate/corporate.component';
import { BirthdayComponent } from './service/birthday/birthday.component';
import { BabyshowerComponent } from './service/babyshower/babyshower.component';
import { LogoutComponent } from './landingpage/logout/logout.component';
import { CakebookComponent } from './cakes/cakebook/cakebook.component';
import { CakeviewComponent } from './cakes/cakeview/cakeview.component';
import { CartoonComponent } from './cakes/cartoon/cartoon.component';
import { ChocolateComponent } from './cakes/chocolate/chocolate.component';
import { FruitsnutComponent } from './cakes/fruitsnut/fruitsnut.component';
import { NumberComponent } from './cakes/number/number.component';
import { PintanaComponent } from './cakes/pintana/pintana.component';
import { RedvelvetComponent } from './cakes/redvelvet/redvelvet.component';
import { AnniversaryComponent } from './cakes/anniversary/anniversary.component';
import { BarbieComponent } from './cakes/barbie/barbie.component';
import { BlackforestComponent } from './cakes/blackforest/blackforest.component';
import { ButterscaramleComponent } from './cakes/butterscaramle/butterscaramle.component';
import { AdminComponent } from './adminfolder/admin/admin.component';
import { CustomercontactComponent } from './adminfolder/customercontact/customercontact.component';
import { AdminheaderComponent } from './adminfolder/adminheader/adminheader.component';
import { StockdetailsComponent } from './adminfolder/stockdetails/stockdetails.component';
import { StaffregisterComponent } from './adminfolder/staffregister/staffregister.component';
import { AdminhomeComponent } from './adminfolder/adminhome/adminhome.component';
import { CakeorderComponent } from './adminfolder/cakeorder/cakeorder.component';





const routes: Routes = [
  {path:'',component:LoginComponent}, 
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'order',component:OrderComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'service',component:ServiceComponent},
  {path:'breakfast',component:BreakfastComponent},
  {path:'lunch',component:LunchComponent},
  {path:'dinner',component:DinnerComponent},
  {path:'nonveg',component:NonvegComponent},
  {path:'order',component:OrderComponent},
  {path:'home',component:HomeComponent},
  {path:'cake',component:CakeComponent},
  {path:'wedding',component:WeddingComponent},
  {path:'puberty',component:PubertyComponent},
  {path:'industrial',component:IndustrialComponent},
  {path:'housewarming',component:HousewarmingComponent},
  {path:'engagement',component:EngagementComponent},
  {path:'corporate',component:CorporateComponent},
  {path:'birthday',component:BirthdayComponent},
  {path:'babyshower',component:BabyshowerComponent},
  {path:'logout',component:LogoutComponent},
  {path:'cakebook',component:CakebookComponent},
  {path:'cakeview',component:CakeviewComponent},
  {path:'cartoon',component:CartoonComponent},
  {path:'chocolate',component:ChocolateComponent},
  {path:'fruitsnut',component:FruitsnutComponent},
  {path:'number',component:NumberComponent},
  {path:'pintana',component:PintanaComponent},
  {path:'redvelvet',component:RedvelvetComponent},
  {path:'anniversary',component:AnniversaryComponent},
  {path:'barbie',component:BarbieComponent},
  {path:'blackforest',component:BlackforestComponent},
  {path:'butterscaramle',component:ButterscaramleComponent},
  {path:'admin',component:AdminComponent},
  {path:'customercontact',component:CustomercontactComponent},
  {path:'adminheader',component:AdminheaderComponent},
  {path:'stockdetails',component:StockdetailsComponent},
  {path:'staffregister',component:StaffregisterComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'cakeorder',component:CakeorderComponent}
  



  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
