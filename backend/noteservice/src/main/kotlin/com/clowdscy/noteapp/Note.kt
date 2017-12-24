package com.clowdscy.noteapp

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Note(
        var title: String = "",
        var body: String = "",
        var lastEdited: String = "",
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0)