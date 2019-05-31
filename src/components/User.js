import React, { Component } from 'react'

class User extends Component {
  render () {
    return (
      // <a href="#" className={this.props.min ? "user min" : "user"}>
      <a href="#" className={`user ${this.props.min && 'min'}`}>
        <img src={this.props.src} alt={this.props.alt}/>
        <div>{this.props.name}</div>
      </a>
    )
  }
}

export default User