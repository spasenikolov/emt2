package com.example.emt_lab.Service;

import com.example.emt_lab.Model.Book;
import com.example.emt_lab.Model.Country;
import com.example.emt_lab.Model.Enumeration.Category;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    Optional<Country> findById(Long id);
    List<Country> findAll();
    Optional<Country> save(String name, String continent);
}
