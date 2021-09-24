package de.neuefische.backend.repo;

import de.neuefische.backend.model.Task;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ToDoRepo {

    private List<Task> tasks = new ArrayList<>();

    public List<Task> showAllTasks() {
        return this.tasks;
    }

    public Task add(Task task) {
        tasks.add(task);
        return task;
    }

    public void deleteTask(String id) {
        tasks.removeIf(task -> task.getId().equals(id));
    }
}
