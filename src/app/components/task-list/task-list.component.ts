import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; 
import { TaskService } from 'src/app/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true, 
  imports: [CommonModule, IonicModule, FormsModule], 
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  toggleCompletion(id: number): void {
    console.log('Toggling completion for task:', id);
    this.taskService.toggleTaskCompletion(id);
    this.loadTasks(); 
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.loadTasks(); 
  }

  cancelTask(id: number): void {
    this.taskService.deleteTask(id);
    this.loadTasks(); 
  }
}
