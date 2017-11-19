import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//superagent
import request from 'superagent'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: null
    }
  }
  componentWillMount() {
    request.get('http://localhost:3000/fruits.json')
           .accept('application/json')
           .end((err,res) => {
             if (err) {
               console.log(err);
               return
             }
             // setState when retrive a response.
             this.setState({
               items: res.body
             })
           })
  }
  render() {

    if (!this.state.items) {
      return <div className='App'>Now loading...</div>
    }

    const opts = this.state.items.map(e => {
      return <option value={e.price} key={e.name}>{e.name}</option>
    })

    return (
      <div className='App'>
        <select>
        {opts}
        </select>
      </div>
    )
  }
}

export default App;
