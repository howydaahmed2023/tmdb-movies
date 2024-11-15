import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';


export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'moviedetail/:id',component:MoviedetailsComponent},
    {path: 'searchpage/:text', component: SearchpageComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path: '**', pathMatch:'full', redirectTo: '/home'},
];
