import './App.css';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import React, {Component} from "react";
import labService from "../../Repository/labRepository";
import Authors from "../Authors/authors";
import Countries from "../Countries/countries";
import Categories from "../Categories/categories";
import Books from "../Books/BookList/BookList"
import Header from "../Header/header";
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";
import CountryAdd from "../Countries/CountryAdd/countryAdd";
import AuthorAdd from "../Authors/AuthorAdd/authorAdd";



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      categories: [ "NOVEL",
        "THRILLER",
        "HISTORY",
        "FANTASY",
        "BIOGRAPHY",
        "CLASSICS",
        "DRAMA"
      ],
      countries: [],
      authors: [],
      selectedBook: {}
    }
  }

  render() {
    return (
        <Router>
          <Header />
          <main>
            <div className={"container"}>

              <Route path={"/countries"} exact render={() => <Countries countries={this.state.countries}/>}/>
              <Route path={"/countries/add"} exact render={() => <CountryAdd onAddCountry={this.addCountry}/>}/>
              <Route path={"/authors"} exact render={() => <Authors authors={this.state.authors}/>}/>
              <Route path={"/categories"} exact render={() => <Categories categories={this.state.categories}/>}/>
              <Route path={"/books/add"} exact render={() =>
                  <BookAdd authors={this.state.authors}
                           categories={this.state.categories}
                           onAddBook={this.addBook}/>}/>
              <Route path={"/books/edit/:id"} exact render={() =>
                  <BookEdit categories={this.state.categories}
                            authors={this.state.authors}
                            onEditBook={this.editBook}
                            book={this.state.selectedBook}/>}/>
              <Route path={["/books", "/"]} exact render={() =>
                  <Books books={this.state.books}
                         onDelete={this.deleteBook}
                         onEdit={this.getBook}
                         onBookTaken={this.takeBook}/>}

              />
              <Route path={"/authors/add"} exact render={() => <AuthorAdd countries={this.state.countries}
                                                                          onAddAuthor={this.addAuthor}/>}/>
              <Redirect to={"/books"}/>
            </div>
          </main>
        </Router>
    );
  }
  componentDidMount() {
    this.loadAuthors();
    this.loadCountries();
    this.loadBooks();
  }

  loadAuthors = () => {
    labService.fetchAuthors()
        .then((data) => {
          this.setState({
            authors : data.data
          })
        });
  }

  loadBooks = () => {
    labService.fetchBooks()
        .then((data) => {
          this.setState({
            books : data.data
          })
        });
  }

  loadCountries = () => {
    labService.fetchCountries()
        .then((data) => {
          this.setState({
            countries : data.data
          })
        });
  }

  loadCategories = () => {
    labService.fetchCategories()
        .then((data) => {
          this.setState({
            categories : data.data
          })
        });
  }

  deleteBook = (id) => {
    labService.deleteBook(id)
        .then(() => {
          this.loadBooks();
        });
  }

  addBook = (name, category, author, availableCopies) => {
    labService.addBook(name, category, author, availableCopies)
        .then(() => {
          this.loadBooks();
        });
  }

  addCountry = (name, continent) => {
      labService.addCountry(name,continent)
          .then(() => {
              this.loadCountries();
          });
  }

  addAuthor = (name, surname, country) => {
      labService.addAuthor(name,surname,country)
          .then(() => {
              this.loadAuthors();
          });
  }

  getBook = (id) => {
    labService.getBook(id)
        .then((data) => {
          this.setState({
            selectedBook: data.data
          })
        })
  }

  editBook = (id, name, category, author, availableCopies) => {
    labService.editBook(id, name, category, author, availableCopies)
        .then(() => {
          this.loadBooks();
        });
  }

  takeBook = (id) => {
    labService.takeBook(id)
        .then(() => {
          this.loadBooks();
        });
  }

}

export default App;
