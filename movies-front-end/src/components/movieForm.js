import React, { Component } from 'react';


export default class MovieForm extends Component {

  state = {
    title: "",
    year: ""
  }

  handleFieldChange = (event) => {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
  }

  consoleLog = () => {
    console.log("title state", this.state.title)
    console.log("year state", this.state.year)
  }

  render(){
    return(
      <React.Fragment>
        <h3>Add a new movie to the collection!</h3>
        <input id="title" type="text" placeholder="movie title" onChange={this.handleFieldChange}></input>
        <input id="year" type="text" placeholder="year released" onChange={this.handleFieldChange}></input>
        <button onClick={() => this.props.create("movies", this.state)}>Save Movie</button>
        <button onClick={this.consoleLog}>check states</button>
      </React.Fragment>
    )
  }
}