package com.example.ebookbackend.service;

import com.example.ebookbackend.model.Book;
import com.example.ebookbackend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks()
    {
        return bookRepository.findAll();
    }

    public Optional<Book> getById(Long id)
    {
        return bookRepository.findById(id);
    }

    public Book saveBook(Book book)
    {
        if(book.getId()==null) {
            return bookRepository.save(book);
        }
        else
        {
            Book book2=new Book();
            Optional<Book> book1=bookRepository.findById(book.getId());

            if(book1.isPresent())
            {
                book2.setId(book1.get().getId());
                book2.setName(book.getName());
                book2.setPrice(book.getPrice());
                book2.setDescription(book.getDescription());

            }
            return bookRepository.save(book2);

        }
    }


    public void deleteById(Long id)
    {
        bookRepository.deleteById(id);
    }


}
