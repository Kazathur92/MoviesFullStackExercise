import React, { Component } from 'react'
import MovieList from './movieList'
import EditForm from './editForm'


export default class Movies extends Component {


  state = {
    editFields: false,
    selectedMovie: {}
  }

  componentDidMount() {
    this.props.getAll("movies")

    // fetch('http://localhost:8000/movies')
    //   .then(stuff => stuff.json())
    //   .then(movies => {
    //     // console.log(movies)
    //     this.props.setMovies(movies)
    //   })
  }

  consoleLog = () => {
    console.log(this.props.movies)
  }

  backButton = () => {
    this.setState({editFields: false})
    console.log(this.state.selectedMovie)
  }

  editTrigger = (resource, movie) => {
    this.setState({editFields: true})
    this.setState({selectedMovie: movie})
  }

  editThis = (resource, newObj, id) => {
    this.props.edit(resource, newObj, id)
    this.setState({editFields: false})
  }

  render() {

    let movieList = ""

    if (this.state.editFields == false) {
      movieList = (<MovieList movies={this.props.movies} delete={this.props.delete} editTrigger={this.editTrigger}></MovieList>)
    } else {
      movieList = (<EditForm movies={this.props.movies} backButton={this.backButton} selectedMovie={this.state.selectedMovie} editThis={this.editThis}/>)
    }

    return (
      <div>
        {/* <button onClick={this.consoleLog}>GET MOVIES</button> */}
        <ul>
          {movieList}
        </ul>
      </div>
    )
  }
}