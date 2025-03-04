import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  constructor() {}

  // Get all tasks
  getTasks(): Task[] {
    return this.tasks;
  }

  // Get completed tasks
  getCompletedTasks(): Task[] {
    return this.tasks.filter((task) => task.completed);
  }

  // Get cancelled tasks
  getCancelledTasks(): Task[] {
    return this.tasks.filter((task) => task.cancelled);
  }

  // Add a new task
  addTask(title: string, description: string): void {
    const newTask: Task = {
      id: this.nextId++,
      title: title,
      description: description,
      completed: false,
      cancelled: false,
    };
    this.tasks.push(newTask);
  }

  // Mark a task as completed
  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  // Mark a task as cancelled
  cancelTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.cancelled = true;
    }
  }

  // Delete a task
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}