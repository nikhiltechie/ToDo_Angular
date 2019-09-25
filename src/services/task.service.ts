import { EventEmitter } from '@angular/core';

export class TaskService{

    tasksList:string[] = ["task1", "task2", "task3"];
    tasksChanged = new EventEmitter<string[]>();
    getTasks(){
        return this.tasksList;
    }

    addTask(taskText: string){
        this.tasksList.push(taskText);
        this.tasksChanged.emit(this.tasksList);
    }
    removeTask(index:number){
        this.tasksList.splice(index,1);
        this.tasksChanged.emit(this.tasksList);
    }
}