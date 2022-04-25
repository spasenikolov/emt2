package com.example.emt_lab.Model.Dto;
import com.example.emt_lab.Model.Enumeration.Category;
import lombok.Data;

@Data
public class BookDto {

    private String name;

    private Category category;

    private Long author;

    private Integer availableCopies;

    public BookDto(){
    }
    public BookDto(String name, Category category,Long author,Integer availableCopies){
        this.name=name;
        this.category=category;
        this.author=author;
        this.availableCopies=availableCopies;
    }

    public String getName() {
        return name;
    }

    public Long getAuthor() {
        return author;
    }

    public Integer getAvailableCopies() {
        return availableCopies;
    }

    public Category getCategory() {
        return category;
    }
}
