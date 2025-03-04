import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true, // Mark as standalone
  imports: [FormsModule, IonicModule], // Import required modules
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  newTaskTitle = '';
  newTaskDescription = '';

  constructor(private taskService: TaskService) {} // Inject TaskService

  addTask(): void {
    if (this.newTaskTitle.trim() && this.newTaskDescription.trim()) {
      // Add the new task using the TaskService
      this.taskService.addTask(this.newTaskTitle, this.newTaskDescription);

      // Clear the input fields
      this.newTaskTitle = '';
      this.newTaskDescription = '';
    }
  }
}