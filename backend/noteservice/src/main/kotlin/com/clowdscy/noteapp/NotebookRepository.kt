package com.clowdscy.noteapp

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface NotebookRepository : JpaRepository<Notebook, Long>