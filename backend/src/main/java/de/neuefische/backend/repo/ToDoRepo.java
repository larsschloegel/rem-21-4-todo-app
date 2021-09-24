package de.neuefische.backend.repo;

import de.neuefische.backend.model.ApiTask;
import de.neuefische.backend.model.Task;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ToDoRepo {

    private List<ApiTask> tasks = new ArrayList<>();

    public List<ApiTask> showAllTasks() {
        return this.tasks;
    }

    public void add(String description, String status) {
        ApiTask apiTask = new ApiTask(description, status);
        tasks.add(apiTask);
    }

//    public void deleteTask(String id) {
//        tasks.removeIf(task -> task.getId().equals(id));
//    }
}
