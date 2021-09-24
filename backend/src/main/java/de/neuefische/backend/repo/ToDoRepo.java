package de.neuefische.backend.repo;

import de.neuefische.backend.model.ApiTask;
import de.neuefische.backend.model.Task;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class ToDoRepo {

    private List<Task> tasks = new ArrayList<>();

    public List<Task> showAllTasks() {
        return this.tasks;
    }

    public ResponseEntity<Object> add(ApiTask apiTask) {
        String id = generateUUID();
        if (apiTask.getDescription().equals("")) {
            return ResponseEntity.badRequest().body(null);
            //    throw new IllegalArgumentException("Gib einen Namen ein du Depp :)");
        } else {
            Task task = new Task(id, apiTask.getDescription(), apiTask.getStatus());
            tasks.add(task);
            return ResponseEntity.accepted().body(apiTask);
        }
    }

    public String generateUUID() {
        return UUID.randomUUID().toString();
    }

    public Optional<Task> findId(String id) {

        for (Task task : tasks) {
            if (task.getId().equals(id)) {
                return Optional.of(task);
            }
        }
        return Optional.empty();
    }

    public void changeStatus(Task task) {
        if (task.getStatus().equals("OPEN")) {
            task.setStatus("IN_PROGRESS");
        } else if (task.getStatus().equals("IN_PROGRESS")) {
            task.setStatus("DONE");
        }
    }

    public void deleteTask(String id) {
        tasks.removeIf(task -> task.getId().equals(id));
    }
}


