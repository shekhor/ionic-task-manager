import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Task } from '../../models/task.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cancelled-tasks',
  templateUrl: './cancelled-tasks.page.html',
  styleUrls: ['./cancelled-tasks.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class CancelledTasksPage implements OnInit {
  cancelledTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.cancelledTasks = this.taskService.getCancelledTasks();
  }
}