package com.example.ebookbackend.config;

import com.example.ebookbackend.model.Book;
import com.example.ebookbackend.model.Roles;
import com.example.ebookbackend.model.Users;
import com.example.ebookbackend.repository.BookRepository;
import com.example.ebookbackend.repository.RolesRepository;
import com.example.ebookbackend.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DBInsert implements CommandLineRunner {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private RolesRepository rolesRepository;

    @Autowired
    private BookRepository bookRepository;

    @Override
    public void run(String... args) throws Exception {
        Roles role = rolesRepository.save(new Roles(1L, "ROLE_USER"));
        List<Roles> roles = new ArrayList<>();
        roles.add(role);

        Users user = new Users(1L, "user123", "$2a$10$ZSx2xZU.oIONCUjKsRdcruDg44e0wgh6KLGYI.opCWRSjnrIfHwk6", roles);
        usersRepository.save(user);

        List<Book> books = new ArrayList<>();
        books.add(new Book(1L, "Book 1", 1234L, "Book 1 Description"));
        books.add(new Book(2L, "Book 2", 1111L, "Book 2 Description"));
        books.add(new Book(3L, "Book 3", 2222L, "Book 3 Description"));
        books.add(new Book(4L, "Book 4", 6666L, "Book 4 Description"));
        books.add(new Book(5L, "Book 5", 8888L, "Book 5 Description"));

        bookRepository.saveAll(books);
    }
}
