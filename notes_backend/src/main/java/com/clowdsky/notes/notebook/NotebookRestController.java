package com.clowdsky.notes.notebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("notebook")
public class NotebookRestController {

    private final NotebookRepository notebookRepository;

    @Autowired
    public NotebookRestController(NotebookRepository notebookRepository) {
        this.notebookRepository = notebookRepository;
    }

    @GetMapping
    public List<Notebook> list() {
        return this.notebookRepository.findAll();
    }

    @GetMapping("{notebookId")
    public Notebook findOne(@PathVariable long notebookId) {
        return this.notebookRepository.findOne(notebookId);
    }

    @PostMapping
    public void save(@RequestBody Notebook notebook) {
        this.notebookRepository.save(notebook);
    }

    @PutMapping
    public void update(@RequestBody Notebook notebook) {
        this.notebookRepository.save(notebook);
    }

    @DeleteMapping
    public void delete(@RequestBody Notebook notebook) {
        this.notebookRepository.delete(notebook);
    }

    @DeleteMapping("{notebookId}")
    public void delete(@PathVariable long notebookId) {
        this.notebookRepository.delete(notebookId);
    }

}
