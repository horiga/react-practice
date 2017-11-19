import React from 'react'
import ReactDOM from 'react-dom'

class TextForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div><form onSubmit={(e)=>this.doSubmit(e)}>
        <input type='text' value={this.state.value}
        onChange={(e)=>this.doChange(e)} />
        <input type='submit' />
      </form></div>
    )
  }
  doSubmit(e) {
    e.preventDefault()
    window.alert(this.state.value)
  }
  doChange(e) {
    this.setState({value: e.target.value})
  }
}

ReactDOM.render(
  <TextForm />,
  document.getElementById('root'))
