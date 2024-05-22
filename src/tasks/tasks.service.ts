import { Injectable } from '@nestjs/common';
import { Task } from '../models/tasks.types';
@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: 1,
            description: 'Description 1',
            date: new Date(),
            done: true
        },
        {
            id: 2,
            description: 'Description 2',
            date: new Date(),
            done: false
        },
        {
            id: 3,
            description: 'Description 3',
            date: new Date(),
            done: true
        }
    ];

    getTasks() {
        return this.tasks;
    }

    getTask(id: number) {
        return this.tasks.find(task => task.id === id);
    }

    createTask(task: Task) {
        this.tasks.push(task);
        return task;
    }

    updateTask(id: number, task: Task) {
        const index = this.tasks.findIndex(task => task.id === id);
        this.tasks[index] = task;
        return this.tasks[index];
    }

    deleteTask(id: number) {
        const newTasks = this.tasks.filter(task => task.id !== id);
        this.tasks = newTasks;
    }

}
