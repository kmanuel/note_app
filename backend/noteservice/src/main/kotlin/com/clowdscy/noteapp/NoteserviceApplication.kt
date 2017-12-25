package com.clowdscy.noteapp

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class NoteserviceApplication

fun main(args: Array<String>) {
    SpringApplication.run(NoteserviceApplication::class.java, *args)
}

