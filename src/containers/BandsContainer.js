import React, { Component } from 'react'
import { connect } from "react-redux"
import BandInput from "../components/BandInput"
//import Band from "Band"

class BandsContainer extends Component {
  
  render() {
    
    return (
     
      <div>
        <BandInput addBand={this.props.addBand} />

        BandsContainer
        { this.props.bands.map((band, id) => <li key={id}>{band.name}</li>) } 
        </div>
       
    )
  }
}
const mapDispatchToProps = dispatch => { 
  return {
    addBand: formData => 
      dispatch({ type: 'ADD_BAND', band: formData })
  }
}
const mapStateToProps = state => {
  return {
    bands: state.bands
  }

}
  export default connect(mapStateToProps, mapDispatchToProps) (BandsContainer);