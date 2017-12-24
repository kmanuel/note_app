package com.clowdscy.noteapp

import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/note")
class NoteRestController(val noteRepository: NoteRepository) {

    @GetMapping
    fun list(): List<Note> {
        return this.noteRepository.findAll()
    }

    @PostMapping
    fun addNote(@RequestBody(required = true) newNote : Note) {
        this.noteRepository.save(newNote)
    }

}