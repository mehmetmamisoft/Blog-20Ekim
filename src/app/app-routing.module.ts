import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './pages/about-me/about-me.component';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    //www.bıdıbıdı.com/
    path:"",
    component:MainLayoutComponent,
    children:[
      {
        path:"",
        component:HomeComponent
      },

      {

        path:"sayfa/:page",
        component:HomeComponent

      },

      {
         //www.bıdıbıdı.com/hakkimizda
        path:"hakkimda",
        component:AboutMeComponent
      },
      {
         //www.bıdıbıdı.com/iletisim
        path:"iletisim",
        component:ContactComponent
      }

    ]
  },

  {
    //www.bıdıbıdı.com/admin
    //children olcek daha sonra
    path:"admin",
    component:AdminLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
