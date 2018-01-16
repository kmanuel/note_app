package com.clowdscy.noteapp

import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/notebooks")
class NotebookRestController(val notebookRepository: NotebookRepository) {

    @GetMapping
    fun list(): MutableList<Notebook>? {
        return notebookRepository.findAll()
    }

    @PostMapping
    fun addNotebook(@RequestBody notebook: Notebook) {
        notebookRepository.save(notebook)
    }

    @DeleteMapping("{notebookId}")
    fun deleteNotebook(@PathVariable notebookId: Long) {
        notebookRepository.delete(notebookId)
    }

}