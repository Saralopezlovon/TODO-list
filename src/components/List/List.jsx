import React, { Component } from "react";
import Item from "../List/Item/Item"
import data from '../../data'

class List extends Component {
  
  constructor(props) {
    super(props)    
    this.state = {
        lastAdded: {},
        taskList: data 
    }
}    

createTask = (name, date) => {

    const newTask = {name, date}
    this.setState({ lastAdded: newTask }) // Modifica el estado. Ultimo añadido
    this.setState({ taskList: [...this.state.taskList, newTask] })  
}

deleteAllTasks = () => {
  this.setState({taskList:[]});
}

//Pintar una tarea
paintTask = () =>{
  return this.state.taskList.map((item, i)=> <Item info={item} delete={()=>this.deleteTask(i)} key={i}/>)
}

deleteTask = (i) => {
  //Me quedo con todos los elementos distintos al parametro que me estan dando.
  const tasks = this.state.taskList.filter((task,j)=>j!==i)
  this.setState({taskList:tasks})
}

  //Crear una tarea
  handleSubmit = (event) =>{
    event.preventDefault();
    const name = event.target.elements.name.value
    const date = event.target.elements.date.value
    
    this.createTask(name,date)
  }

  reset = () => {
    window.location.reload(true);
  }

  render() {
    return <div>
      <h2>Crea una nueva tarea</h2>
      <form onSubmit={this.handleSubmit}>

        <label>Descripción: </label>
        <input type="text" id="name" name="name" /> 

        <br /><br />

        <label>Fecha: </label>
        <input type="date" id="date" name="date" />

        <br /><br />   

        <input type="submit" />

      </form>
      {this.paintTask()} 
      <button onClick={this.deleteAllTasks}>Borrar todo</button>
      <button onClick={this.reset}>Reset</button>
      

    </div>;
  }
}

export default List;
