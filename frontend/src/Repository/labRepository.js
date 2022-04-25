import React from 'react';
import axios from "../Custom_Axios/axios";

const labService = {
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, category, author, availableCopies) => {
        return axios.post("/books/add", {
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        });
    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },

    takeBook: (id) => {
        return axios.post(`/books/take/${id}`);
    },
    addCountry: (name, continent) => {
        return axios.post("/countries/add",{
            "name":name,
            "continent":continent
        });
    },
    addAuthor: (name,surname,country) => {
        return axios.post("/authors/add",{
            "name":name,
            "surname":surname,
            "country":country
        });
    }
}

export default labService;