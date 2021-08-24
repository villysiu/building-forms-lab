// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }
  handleChange = event => {
    this.setState({
      name: event.target.value
    }) 
  }
  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: "",
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text"
            placeholder="add band"
            value={ this.state.name }
            onChange={ this.handleChange }
          />
          <input type="submit"/>

        </form>
      </div>
    )
  }
}
export default BandInput