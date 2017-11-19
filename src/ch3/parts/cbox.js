import React from 'react'
import ReactDOM from 'react-dom'

class CBoxForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: true
    }
  }
  render() {
    return (<div>
      <form onSubmit={this.doSubmit}>
        <label>
          <input type='checkbox' onChange={this.doChange}
            checked={this.state.checked} />checked
        </label><br/>
        <input type='submit' value='submit' />
      </form></div>)
  }
  doSubmit(e) {
    e.preventDefault()
    window.alert(this.state.checked)
  }
  doChange(e) {
    this.setState({
      checked: !this.state.checked
    })
  }
} // CBoxForm

ReactDOM.render(
  <CBoxForm />,
  document.getElementById('root'))
