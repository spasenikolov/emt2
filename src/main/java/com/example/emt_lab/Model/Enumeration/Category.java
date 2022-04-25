package com.example.emt_lab.Model.Enumeration;

public enum Category {
    NOVEL, THRILER, HISTORY, FANTASY, BIOGRAPHY, CLASSICS, DRAMA;

    public String getCategory(){
        return name();
    }
}
