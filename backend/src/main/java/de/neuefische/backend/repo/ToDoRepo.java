package de.neuefische.backend.repo;

import de.neuefische.backend.model.ApiTask;
import de.neuefische.backend.model.Task;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class ToDoRepo {

    private List<Task> tasks = new ArrayList<>();

    public List<Task> showAllTasks() {
        return this.tasks;
    }

    public void add(ApiTask apiTask) {
        String id = generateUUID();
        Task task = new Task(id, apiTask.getDescription(), apiTask.getStatus());
        tasks.add(task);
    }

    public String generateUUID(){
        return UUID.randomUUID().toString();
    }

    public Task findId(String id) {
        Task foundTask = new Task();
        for(Task task : tasks){
            if (task.getId().equals(id)){
            }
        }
        return foundTask;
    }

//    public void deleteTask(String id) {
//        tasks.removeIf(task -> task.getId().equals(id));
//    }
}
