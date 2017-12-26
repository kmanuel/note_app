package com.clowdscy.noteapp

import java.util.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Note(
        var title: String = "",
        var body: String = "",
        var created: Date = Date(),
        var lastEdited: Date = Date(),
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0)