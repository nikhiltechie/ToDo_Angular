import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() tasklabel:string="";
  @Input() index:number;
  constructor(private taskServive:TaskService) { }

  ngOnInit() {
  }

  RemoveTask(){
    this.taskServive.removeTask(this.index);
  }
}
