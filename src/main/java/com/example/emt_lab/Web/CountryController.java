package com.example.emt_lab.Web;

import com.example.emt_lab.Model.Book;
import com.example.emt_lab.Model.Country;
import com.example.emt_lab.Model.Dto.BookDto;
import com.example.emt_lab.Service.CountryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/countries")
public class CountryController {
    private final CountryService countryService;

    CountryController(CountryService countryService){
        this.countryService=countryService;
    }

    @GetMapping
    private List<Country> findAll() {
        return this.countryService.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<Country> save(@RequestBody Country c) {
        String name=c.getName();
        String continent=c.getContinent();
        return this.countryService.save(name,continent)
                .map(country -> ResponseEntity.ok().body(country))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }
}

