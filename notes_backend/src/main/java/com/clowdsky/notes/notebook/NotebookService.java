package com.clowdsky.notes.notebook;

import com.clowdsky.notes.note.Note;
import com.clowdsky.notes.note.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class NotebookService {

    private final NotebookRepository notebookRepository;
    private final NoteRepository noteRepository;

    public NotebookService(NotebookRepository notebookRepository,
                           NoteRepository noteRepository) {
        this.notebookRepository = notebookRepository;
        this.noteRepository = noteRepository;
    }

    Note addNoteToNotebook(Note note, long notebookId) {
        Note savedNote = noteRepository.save(note);
        Notebook notebook = this.notebookRepository.findOne(notebookId);
        notebook.getNotes().add(savedNote);
        this.notebookRepository.save(notebook);
        return savedNote;
    }

    List<Note> getNotesByNotebook(long notebookId) {
        return this.notebookRepository
                .findOne(notebookId)
                .getNotes();
    }
}
