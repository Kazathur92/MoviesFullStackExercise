import React, { Component } from 'react'

export default class MovieList extends Component {

deleteThis = (resource, id) => {
  this.props.delete(resource, id)

}

editFieldTrigger = (resource, movie) => {
  this.props.editTrigger(resource, movie)
}


  render() {

    const movieNode = this.props.movies.map(movie => {
      return (<li key={movie.id}>{movie.title} <button onClick={() => this.deleteThis("movies", movie)}>X</button><button onClick={() => this.editFieldTrigger("movies", movie)}>edit</button></li>)
    })

    return (
      <React.Fragment>
        {movieNode}
      </React.Fragment>
    )
  }
}