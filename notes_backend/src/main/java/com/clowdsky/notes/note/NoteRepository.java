package com.clowdsky.notes.note;

import com.clowdsky.notes.note.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
