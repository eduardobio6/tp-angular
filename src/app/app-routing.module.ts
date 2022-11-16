import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './components/timer/timer.component';
import { TaskComponent } from './components/task/task.component';
import { ListaComponent } from './components/lista/lista.component';
import { DiciplinaComponent } from './components/diciplina/diciplina.component';
import { LimitadorComponent } from './components/limitador/limitador.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'timer', component: TimerComponent},
  {path: 'tasks', component: TaskComponent},
  {path: 'list', component: ListaComponent},
  {path: 'disciplines', component: DiciplinaComponent},
  {path: 'timer-limiter', component: LimitadorComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}