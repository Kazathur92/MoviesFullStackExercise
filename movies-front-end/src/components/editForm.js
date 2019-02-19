import React, { Component } from 'react';

export default class EditForm extends Component {

state = {
  title: this.props.selectedMovie.title,
  year: this.props.selectedMovie.year
}

handleFieldChange = (event) => {
  const stateToChange = {}
  stateToChange[event.target.id] = event.target.value
  this.setState(stateToChange)
}

render(){
  return(
    <React.Fragment>
      <button onClick={this.props.backButton}>Back to list</button>
       <h3>Edit this movie: {this.props.selectedMovie.title}</h3>
        <input id="title" type="text" onChange={this.handleFieldChange} value={this.state.title}></input>
        <input id="year" type="text" onChange={this.handleFieldChange} value={this.state.year}></input>
        <button onClick={() => this.props.editThis("movies", this.state, this.props.selectedMovie.id)}>Edit Movie</button>
        {/* <button onClick={this.consoleLog}>check states</button>  */}
    </React.Fragment>
  )
}

}