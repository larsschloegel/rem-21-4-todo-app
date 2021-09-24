package de.neuefische.backend.controller;


import de.neuefische.backend.model.Task;
import de.neuefische.backend.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("api/todo")
public class ToDoController {

    private final ToDoService toDoService;

    @Autowired
    public ToDoController(ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    @GetMapping
    public List<Task> listTasks(){
        return toDoService.showAllList();
    }

    @PostMapping
    public Task postTask(@RequestBody Task task){
        return toDoService.add(task);
    }

    @DeleteMapping(path = "{id}")
    public void deleteTask(@PathVariable String id){
        toDoService.deleteTask(id);
    }

}