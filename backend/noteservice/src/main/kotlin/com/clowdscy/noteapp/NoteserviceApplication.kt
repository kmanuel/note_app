package com.clowdscy.noteapp

import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class NoteserviceApplication {
    @Bean
    fun init(noteRepository: NoteRepository) = CommandLineRunner {
        noteRepository.saveAndFlush(Note("title1", "body1", "some-edit-date"))
        noteRepository.saveAndFlush(Note("title2", "body2", "some-edit-date"))
        noteRepository.saveAndFlush(Note("title3", "body3", "some-edit-date"))
        noteRepository.saveAndFlush(Note("title4", "body4", "some-edit-date"))
        noteRepository.saveAndFlush(Note("title5", "body5", "some-edit-date"))
        noteRepository.saveAndFlush(Note("title6", "body6", "some-edit-date"))
    }
}

fun main(args: Array<String>) {
    SpringApplication.run(NoteserviceApplication::class.java, *args)
}

