import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { TaskListComponent } from '../components/task-list/task-list.component'; 

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [IonicModule, AddTaskComponent, TaskListComponent], 
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {}