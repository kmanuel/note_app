package com.clowdscy.noteapp

import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/note")
class NoteRestController {

    var notes = listOf(
            NoteDto(0L, "title0", "body0", "dummy-date-0"),
            NoteDto(1L, "title1", "body1", "dummy-date-1"),
            NoteDto(2L, "title2", "body2", "dummy-date-2"),
            NoteDto(3L, "title3", "body3", "dummy-date-3"),
            NoteDto(4L, "title4", "body4", "dummy-date-4"),
            NoteDto(5L, "title5", "body5", "dummy-date-5"))

    @GetMapping
    fun list(): List<NoteDto> {
        return this.notes
    }

    @PostMapping
    fun addNote(@RequestBody(required = true) newNote : NoteDto) {
        this.notes = this.notes.plus(newNote)
    }

}