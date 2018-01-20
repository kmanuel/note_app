package com.clowdsky.notes.note;

import com.clowdsky.notes.note.Note;
import com.clowdsky.notes.note.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("note")
@CrossOrigin
public class NoteRestController {

    private final NoteRepository noteRepository;

    @Autowired
    public NoteRestController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @GetMapping
    public List<Note> findAll() {
        return noteRepository.findAll();
    }

    @GetMapping("{noteId}")
    public Note getNote(@PathVariable Long noteId) {
        return noteRepository.findOne(noteId);
    }

    @PostMapping
    public void save(@RequestBody Note note) {
        noteRepository.save(note);
    }

    @DeleteMapping("{noteId}")
    public void delete(@PathVariable Long noteId) {
        noteRepository.delete(noteId);
    }

    @PutMapping("{noteId}")
    public void update(@RequestBody Note note) {
        noteRepository.save(note);
    }

    @PostMapping("all")
    public void saveAll(@RequestBody List<Note> notes) {
        noteRepository.save(notes);
    }

}
