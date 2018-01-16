package com.clowdscy.noteapp

import javax.persistence.*

@Entity
class Notebook (
    var title: String = "",
    @OneToMany
    var notes: List<Note>,
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long = 0)