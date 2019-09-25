import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';


@Component({
  selector: 'app-taskinput',
  templateUrl: './taskinput.component.html',
  styleUrls: ['./taskinput.component.css']
})
export class TaskinputComponent implements OnInit {

  
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
  AddTask(newTask:string){
    this.taskService.addTask(newTask);
  }
}
