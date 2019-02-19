import React, { Component } from 'react';
import Movies from './components/movies'
import SearchBar from './components/search'
import MovieForm from './components/movieForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    movies: [],
    apiUrl: "http://localhost:8000/api/v1/"
  }

create = (resource, newObj) => {
  let formData = new FormData()
  for ( let key in newObj ) {
    formData.append(key, newObj[key])
  }

  fetch(`${this.state.apiUrl}${resource}/`, {
    method: 'POST',
    body: formData
  })
  .then( newData => newData.json())
  .then( newData => {
    console.log("Added?", newData)
    this.getAll(resource)
  })
}

delete = (resource, id) => {
  fetch(`${this.state.apiUrl}${resource}/${id}/`, {
    method: 'DELETE'
  })
  .then(() => this.getAll(resource))
}

edit = (resource, newObj, id) => {

  let formData = new FormData()
  for ( let key in newObj ) {
    formData.append(key, newObj[key])
  }

  fetch(`${this.state.apiUrl}${resource}/${id}/`, {
    method: 'PATCH',
    body: formData
  })
  .then( newData => newData.json())
  .then(() => this.getAll(resource))
}

safeDelete = (resource, id) => {
  let formData = new FormData()

  fetch(`${this.state.apiUrl}${resource}/${id}/`, {
    method: 'PATCH'
  })
  .then(() => this.getAll(resource))
}



setMovies = (movies) => {
  this.setState({
    movies: movies
  })
}

// This API logic should end up in a manager of some sort

getAll = (resource, keyword=null) => {
  let url = `${this.state.apiUrl}${resource}/`
  if (keyword) {
    url += keyword
  }
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("movies list", data)
    this.setState({[resource]: data})
  })
  .catch(err => console.log("Oopsy Daisy!", err))
}




search = (resource, keyword) => {
  let query = `?search=${keyword}`
  this.getAll(resource, query)
}

  render() {

    return (
      <div>
     <h1>Movies and Stuff</h1>
      <SearchBar search={this.search}/>
       <Movies
       movies={this.state.movies}
       getAll={this.getAll}
       delete={this.delete}
       edit={this.edit}
      //  setMovies={this.setMovies}
       />
      <MovieForm create={this.create}/>
     </div>
    );
  }
}

export default App;
