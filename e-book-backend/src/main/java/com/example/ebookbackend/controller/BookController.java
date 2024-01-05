package com.example.ebookbackend.controller;

import com.example.ebookbackend.model.Book;
import com.example.ebookbackend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/book/")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("getAllBook")
    public ResponseEntity<?> getAllBooks()
    {
        return ResponseEntity.ok().body(bookService.getAllBooks());
    }

    @PostMapping("saveBook")
    public ResponseEntity<?> saveBook(@RequestBody Book book)
    {
        return ResponseEntity.ok().body(bookService.saveBook(book));
    }

    @GetMapping("getBooksById/{id}")
    public ResponseEntity<?> getBooksById(@PathVariable("id") Long id)
    {
        return ResponseEntity.ok().body(bookService.getById(id));
    }

    @PutMapping("updateById")
    public ResponseEntity<?> updateById(@RequestBody Book book)
    {
        return ResponseEntity.ok().body(bookService.saveBook(book));
    }

    @DeleteMapping("deleteById/{id}")
    public void deleteById(@PathVariable  Long id)
    {
        bookService.deleteById(id);
    }
}