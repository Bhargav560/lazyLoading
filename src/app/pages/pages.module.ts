import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PressreleaseComponent } from './pressrelease/pressrelease.component';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PressreleaseComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
