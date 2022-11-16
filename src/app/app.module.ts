import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { TimerComponent } from './components/timer/timer.component';
import { ListaComponent } from './components/lista/lista.component';
import { DiciplinaComponent } from './components/diciplina/diciplina.component';
import { LimitadorComponent } from './components/limitador/limitador.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';
import { TimerService } from './services/timer.service';
import { ListaService } from './services/lista.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    TimerComponent,
    ListaComponent,
    DiciplinaComponent,
    LimitadorComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TaskService, TimerService, ListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
