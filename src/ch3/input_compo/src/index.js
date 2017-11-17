import React from 'react'
import ReactDOM from 'react-dom'
import FormInput from './FormInput'

class CustomForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      tel: '',
      allok: false
    }
    this.oks = {}
  }
  handleChange(e) {
    this.oks[e.name] = e.isOK
    this.setState({
      [e.name]: e.value,
      allok: (this.oks['email'] && this.oks['tel'])
    })
  }
  handleSubmit(e) {
    window.alert(JSON.stringify(this.state))
    e.preventDefault()
  }
  render() {
    const doChange = e => this.handleChange(e)
    const doSubmit = e => this.handleSubmit(e)
    return (<form onSubmit={doSubmit}>
      <FormInput
        name='email'
        label='E-mail'
        value={this.state.email}
        filter={/[^\u0020-\u007e]+/g}
        pattern={/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}
        placeholder='Your email'
        onChange={doChange} />
      <FormInput name='tel'
        label='Telephone number'
        value={this.state.tel}
        filter={/[^0-9-()+]/g}
        pattern={/^[0-9-()+]+$/}
        placeholder='Moble phone number'
        onChange={doChange} />
      <input type='submit' value='submit' disabled={!this.state.allok} />
    </form>)
  }
}

ReactDOM.render(
  <CustomForm/>
  , document.getElementById('root')
)
