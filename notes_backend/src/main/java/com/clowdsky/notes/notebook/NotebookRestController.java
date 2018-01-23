package com.clowdsky.notes.notebook;

import com.clowdsky.notes.note.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("notebook")
public class NotebookRestController {

    private final NotebookRepository notebookRepository;
    private final NotebookService notebookService;

    @Autowired
    public NotebookRestController(NotebookRepository notebookRepository,
                                  NotebookService notebookService) {
        this.notebookRepository = notebookRepository;
        this.notebookService = notebookService;
    }

    @GetMapping
    public List<Notebook> list() {
        return this.notebookRepository.findAll();
    }

    @GetMapping("{notebookId}")
    public Notebook findOne(@PathVariable long notebookId) {
        return this.notebookRepository.findOne(notebookId);
    }

    @PostMapping
    public void save(@RequestBody Notebook notebook) {
        this.notebookRepository.save(notebook);
    }

    @PostMapping("{notebookId}")
    public void update(@PathVariable Long notebookId, @RequestBody Notebook notebook) {
        if (notebook.getId() == null || !notebook.getId().equals(notebookId)) {
            throw new IllegalArgumentException("notebookIds are not matching");
        }
        this.notebookRepository.save(notebook);
    }

    @PutMapping("{notebookId}")
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

    @GetMapping("{notebookId}/notes")
    public List<Note> getNotesForNotebook(@PathVariable long notebookId) {
        return notebookService.getNotesByNotebook(notebookId);
    }

    @PostMapping("{notebookId}/notes")
    public Note addNoteToNotebook(@PathVariable long notebookId, @RequestBody Note note) {
        return notebookService.addNoteToNotebook(note, notebookId);
    }

}
