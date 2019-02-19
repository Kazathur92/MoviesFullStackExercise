import React, { Component } from 'react'


export default class SearchBar extends Component {

  state = {
    keyword: null
  }


  searchMovies = () => {
    this.props.search("movies", this.state.keyword)
  }

  setKeyword = (event) => {
    this.setState({ keyword: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.setKeyword} placeholder="movie title"></input>
        <button onClick={this.searchMovies}>search</button>
      </React.Fragment>
    )
  }
}