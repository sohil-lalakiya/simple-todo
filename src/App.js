import React from "react";
import logo from "./logo.svg"
import "./App.css"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: new Date().getTime(),
        value: todoValue,
        isDone: false
      }

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list: list,
        newItem: ""
      })
    }
  }

  deleteItem(id) {
    if (id !== "") {
      const list = [...this.state.list];
      const updatedList = list.filter((item) => {
        // console.log(item);
        return item.id !== id
      });
      // console.log(updatedList);
      this.setState({
        list: updatedList
      })
    }
  }

  updateInput(input) {
    this.setState({
      newItem: input
    })
  }

  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" alt="logo" />
        <h1 className="app-title">My To-Do App</h1>
        <div className="container">
          Add an item...
          <br />
          <input type="text"
            className="input-text"
            placeholder="Write a To-Do"
            value={this.state.newItem}
            onChange={(e) => this.setState({ newItem: e.target.value })}
          />
          <button className="add-btn"
            disabled={!this.state.newItem.length}
            onClick={() => this.addItem(this.state.newItem)}>Add Todo</button>
          <div className="list">
            <ul>

              {
                this.state.list.map((item) => {
                  return (
                    <li key={item.id}>
                      <input className="" type="checkbox" name="isDone" checked={item.isDone}/>
                      {item.value}
                      <button className="btn" onClick={() => this.deleteItem(item.id)}>Delete</button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;