import React, {Component} from 'react'

export default class ZipInput extends Component {
  constructor(props) {
    super(props)
    const value = (this.props.value) ? this.props.value : ''
    this.state = {
      value: value,
      isOK: this.checkValue(value)
    }
  }

  checkValue(s) {
    const zipPattern = /^\d{3}-\d{4}$/
    return zipPattern.test(s)
  }

  handleChange(e) {
    const v = e.target.value
    const newValue = v.replace(/^0-9-]+/g, '')
    const newIsOK = this.checkValue(newValue)
    this.setState({
      value: newValue,
      isOK: newIsOK
    })
    // execute event
    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue,
        isOK: newIsOK
      })
    }
  }//EOF handleChange

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
      isOK: nextProps.isOK
    })
  }

  renderStatusMessage() {
    const style = {margin: '8px', padding: '8px', color: 'white'}
    let message = ""
    if(this.state.isOK) {
      style.backgroundColor = 'green'
      message = <span style={style}>OK</span>
    } else {
      if(this.state.value !== '') {
        style.backgroundColor = 'red'
        message = <span style={style}>NG</span>
      }
    }
    return message
  }

  render() {
    const message = this.renderStatusMessage()
      return (<div>
        <label>郵便番号:</label><br/>
        <input type='text' placeholder='郵便番号を入力'
          value={this.state.value} onChange={e => this.handleChange(e)}/>
          {message}
      </div>)
  }
}
