package com.example.emt_lab.Service;

import com.example.emt_lab.Model.Author;
import com.example.emt_lab.Model.Dto.AuthorDto;

import java.util.List;
import java.util.Optional;

public interface AuthorService {
    Optional<Author> findById(Long id);
    List<Author> findAll();
    Optional<Author> save(String name, String surname, Long countryId);
    void deleteById(Long id);
    Optional<Author> save(AuthorDto authorDto);
}
