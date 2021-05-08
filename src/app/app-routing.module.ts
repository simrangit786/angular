import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


import { Routes , RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

const routes:Routes = [
  {path:'first-component',component: FirstComponent},
  {path:'second-component',component: SecondComponent},
  {path: '',redirectTo: '/first-component',pathMatch:'full'},
  {path: '**' , component: PagenotfoundComponent}

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
