package com.example.emt_lab.Model.Dto;

import lombok.Data;

@Data
public class AuthorDto {
    private String name;
    private String surname;
    private Long country;

    public AuthorDto(){}

    public AuthorDto(String name, String surname, Long country){
        this.name=name;
        this.surname=surname;
        this.country=country;
    }

    public Long getCountry() {
        return country;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }
}
