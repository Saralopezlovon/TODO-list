import React, { Component } from "react";

class Item extends Component {
  render() {
    const {name, date} = this.props.info
    return (<div>
    <p>Tarea: {name}</p>
    <p>Fecha: {date}</p>
    <button onClick={this.props.delete}>Borrar Tarea</button>
    </div>)
  }
}

export default Item;
