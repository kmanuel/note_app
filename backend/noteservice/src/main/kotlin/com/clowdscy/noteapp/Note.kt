package com.clowdscy.noteapp

import java.util.*
import javax.persistence.*

@Entity
class Note(
        var title: String = "",
        var body: String = "",
        var created: Date = Date(),
        var lastEdited: Date = Date(),
        @ManyToOne
        var notebook: Notebook,
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0)