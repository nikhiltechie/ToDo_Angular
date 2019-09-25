import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css']
})
export class TaskviewComponent implements OnInit {
  public tasksarray: string[] ;
  constructor(private taskService: TaskService) {
    
   }

  ngOnInit() {
    this.tasksarray = this.taskService.getTasks();

    this.taskService.tasksChanged
    .subscribe((taskArrayUpdated: string[]) => {

      this.tasksarray = taskArrayUpdated;
    } )
  }

}
