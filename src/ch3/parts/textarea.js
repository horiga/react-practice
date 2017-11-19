import React from 'react'
import ReactDOM from 'react-dom'

class TextAreaForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'hello'
    }
  }
  render() {
    return (<div>
      <form onSubmit={this.doSubmit} >
        <textarea
          onChange={this.doChange}
          value={this.state.value}
        /><br/>
        <input type='submit' value='submit' />
      </form>
    </div>)
  }

  doChange(e) {
    this.setState({value: e.target.value})
  }
  doSubmit(e) {
    e.preventDefault()
    window.alert(this.state.value)
  }
}

ReactDOM.render(
  <TextAreaForm />,
  documet.getElementById('root'))
