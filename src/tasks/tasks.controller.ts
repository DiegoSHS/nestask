import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'src/models/tasks.types';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }
    @Get()
    getTasks(): Task[] {
        return this.tasksService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') id: string): Task {
        return this.tasksService.getTask(Number(id));
    }

    @Post()
    createTask(@Body() newTask: Task) {
        this.tasksService.createTask(newTask);
    }

    @Put(':id')
    updateTask(@Param('id') id: string, @Body() task: Task) {
        return this.tasksService.updateTask(Number(id), task);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTask(Number(id));
    }
}
