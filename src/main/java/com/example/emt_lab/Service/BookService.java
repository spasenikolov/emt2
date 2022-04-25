package com.example.emt_lab.Service;

import com.example.emt_lab.Model.Book;
import com.example.emt_lab.Model.Dto.BookDto;
import com.example.emt_lab.Model.Enumeration.Category;

import java.util.List;
import java.util.Optional;

public interface BookService {
    Optional<Book> findById(Long id);
    List<Book> findAll();
    Optional<Book> findByName(String name);
    Optional<Book> save(String name, Category category, Long authorId, Integer availableCopies);

    Optional<Book> save(BookDto bookDto);

    Optional<Book> edit(Long id, String name, Category category, Long authorId, Integer availableCopies);

    Optional<Book> edit(Long id, BookDto bookDto);

    void takeBook(Long id);

    void deleteById(Long id);


}
