package com.example.emt_lab.Service.impl;

import com.example.emt_lab.Model.Author;
import com.example.emt_lab.Model.Book;
import com.example.emt_lab.Model.Country;
import com.example.emt_lab.Model.Dto.AuthorDto;
import com.example.emt_lab.Model.Exceptions.AuthorNotFoundException;
import com.example.emt_lab.Model.Exceptions.CountryNotFoundException;
import com.example.emt_lab.Repository.AuthorRepository;
import com.example.emt_lab.Repository.CountryRepository;
import com.example.emt_lab.Service.AuthorService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorServiceImpl implements AuthorService {
    private final AuthorRepository authorRepository;
    private final CountryRepository countryRepository;

    AuthorServiceImpl(AuthorRepository authorRepository, CountryRepository countryRepository){
        this.authorRepository=authorRepository;
        this.countryRepository=countryRepository;
    }
    @Override
    public Optional<Author> findById(Long id) {
        return this.authorRepository.findById(id);
    }

    @Override
    public List<Author> findAll() {
        return this.authorRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        this.authorRepository.deleteById(id);
    }

    @Override
    public Optional<Author> save(AuthorDto authorDto) {
        Country country = this.countryRepository.findById(authorDto.getCountry())
                .orElseThrow(() -> new CountryNotFoundException(authorDto.getCountry()));

        Author author = new Author(authorDto.getName(), authorDto.getSurname(), country);
        this.authorRepository.save(author);
        return Optional.of(author);
    }

    @Override
    public Optional<Author> save(String name, String surname, Long countryId) {
        Country country = this.countryRepository.findById(countryId)
                .orElseThrow(() -> new CountryNotFoundException(countryId));
        Author author = new Author(name, surname, country);
        this.authorRepository.save(author);
        return Optional.of(author);
    }
}
