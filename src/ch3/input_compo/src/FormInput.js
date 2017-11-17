import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FormInput extends Component {
  constructor(props) {
    super(props)
    const v = this.props.value
    this.state = {
      value: v,
      isOK: this.checkValue(v)
    }
  }
  checkValue(s) {
    console.log('>> checkValue');
    if (this.props.pattern === null) return true
    return this.props.pattern.test(s)
  }
  handleChange(e) {
    console.log('>> handleChange');
    const v = e.target.value
    const filter = this.props.filter
    const newValue = (filter !== null) ? v.replace(filter,'') : v
    const newIsOK = this.checkValue(newValue)
    this.setState({
      value: newValue,
      isOK: newIsOK
    })
    // exec event_handler
    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue,
        isOK: newIsOK,
        name: this.props.name
      })
    }
  }

  // When props was changed
  componentWillReceiveProps(nextProps) {
    console.log('>> componentWillReceiveProps');
    this.setState({
      value: nextProps.value,
      isOK: this.checkValue(nextProps.value)
    })
  }

  // render
  render() {
    const message = this.renderStatusMessage()
    return (
      <div><label>{this.props.label}<br/>
      <input type='text' placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={e => this.handleChange(e)} />
        {message}</label>
      </div>
    )
  }

  renderStatusMessage() {
    const styleOpts = {
      margin: '8px',
      padding: '8px',
      color: 'white'
    }
    let message = null
    if(this.state.isOK) {
      styleOpts.backgroundColor = 'green'
      message = <span style={styleOpts}>OK</span>
    } else {
      if (this.state.value !== '') {
        styleOpts.backgroundColor = 'red'
        message = <span style={styleOpts}>NG</span>
      }
    }
    return message
  }
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  filter: PropTypes.object,
  pattern: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

FormInput.defaultProps = {
  filter: null,
  pattern: null,
  value: '',
  placeholder: '',
  onChange: null
}
